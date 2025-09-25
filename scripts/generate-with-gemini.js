#!/usr/bin/env node
// Rewrite content using Gemini given deep research + gaps + optional Muvera docs. Output PaymentPageData TS.
// Usage: node scripts/generate-with-gemini.js [--route /payment/visa]

const fs = require('fs');
const path = require('path');

function readSources() {
  const txt = fs.readFileSync(path.join(process.cwd(), 'content', 'sources.yml'), 'utf8');
  const pages = [];
  let cur = null;
  for (const raw of txt.split(/\r?\n/)) {
    const line = raw.trimEnd();
    if (line.startsWith('pages:')) continue;
    if (/^\s*-\s+route:/.test(line)) { if (cur) pages.push(cur); cur = { banner: { menu: [] } }; cur.route = line.replace(/^\s*-\s+route:\s*/, '').trim(); continue; }
    if (!cur) continue;
    const m = line.match(/^\s*(url|type|title|subheading|description):\s*(.*)$/);
    if (m) {
      const [, key, val] = m;
      if (key === 'type') cur.type = val.trim();
      else if (key === 'title') cur.banner.title = val.trim();
      else if (key === 'subheading') cur.banner.subheading = val.trim();
      else if (key === 'description') cur.banner.description = val.trim();
      continue;
    }
    const menu = line.match(/^\s*-\s*\{\s*href:\s*"([^"]+)",\s*label:\s*"([^"]+)",\s*icon:\s*"([^"]+)"\s*\}\s*$/);
    if (menu) cur.banner.menu.push({ href: menu[1], label: menu[2], icon: menu[3] });
  }
  if (cur) pages.push(cur);
  return pages;
}

function loadResearch(route) {
  const slug = route.split('/').filter(Boolean).pop();
  const file = path.join(process.cwd(), 'content', 'research', `${slug}.json`);
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : null;
}

function loadGaps(route) {
  const slug = route.split('/').filter(Boolean).pop();
  const file = path.join(process.cwd(), 'content', 'gaps', `${slug}.json`);
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : null;
}

function loadMuveraDocs() {
  const dir = path.join(process.cwd(), 'content', 'muvera');
  if (!fs.existsSync(dir)) return '';
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
  return files.map(f => `# ${f}\n\n${fs.readFileSync(path.join(dir, f), 'utf8')}`).join('\n\n');
}

function buildPrompt(route, research, gaps, muveraDocs) {
  return `あなたは日本語のオンラインカジノ入出金ガイドを執筆する編集者です。\n目的: 下記のリサーチ結果とギャップ分析、社内ドキュメント(ムベラ)を踏まえて、読者にわかりやすい最新のガイドを構成化データ(PaymentPageData)で出力します。\n\n要件:\n- 広告色やアフィリエイト臭は排除し、中立・実務的・簡潔。\n- 情報の正確性を優先。出典で確認した事実のみ。\n- セクション: intro, howto[], feeTable, prosCons, safetyTips, comparison, summary, faq[], cta。\n- 可能なら表を feeTable.columns/rows に正規化。\n- 返答は JSON のみ。\n\nRoute: ${route}\n\n[DEEP_RESEARCH]\n${JSON.stringify(research)}\n\n[GAP_REPORT]\n${JSON.stringify(gaps)}\n\n[MUVERA_DOCS]\n${muveraDocs.slice(0, 15000)}\n`;
}

async function callGemini(prompt) {
  const key = process.env.GEMINI_API_KEY;
  if (!key) throw new Error('GEMINI_API_KEY not set');
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${key}`;
  const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ contents: [{ role: 'user', parts: [{ text: prompt }] }], generationConfig: { temperature: 0.3, maxOutputTokens: 4096 } }) });
  if (!res.ok) throw new Error(`Gemini error ${res.status} ${await res.text()}`);
  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
  const start = text.indexOf('{'); const end = text.lastIndexOf('}');
  return JSON.parse(text.slice(start, end + 1));
}

function writeTsModule(route, type, payload, banner) {
  const base = path.join(process.cwd(), 'content', 'structured', type);
  const slug = route.split('/').filter(Boolean).pop();
  const file = path.join(base, `${slug}.ts`);
  fs.mkdirSync(base, { recursive: true });
  const data = { ...payload, title: payload.title || slug.toUpperCase(), banner: banner || payload.banner || undefined, cta: payload.cta || { text: '入出金ガイド一覧を見る', href: '/payment' } };
  const body = `import { PaymentPageData } from "@/components/templates/PaymentTemplate";

const data: PaymentPageData = ${JSON.stringify(data, null, 2)} as const;

export default data;
`;
  fs.writeFileSync(file, body, 'utf8');
  console.log('wrote', file);
}

async function main() {
  const args = process.argv.slice(2);
  const routeArg = args.includes('--route') ? args[args.indexOf('--route') + 1] : null;
  const entries = readSources();
  const muveraDocs = loadMuveraDocs();
  for (const e of entries) {
    if (routeArg && e.route !== routeArg) continue;
    const research = loadResearch(e.route);
    const gaps = loadGaps(e.route);
    if (!research || !gaps) { console.warn('Missing research/gaps for', e.route); continue; }
    const prompt = buildPrompt(e.route, research, gaps, muveraDocs);
    const json = await callGemini(prompt);
    writeTsModule(e.route, e.type, json, e.banner);
  }
}

main().catch(err => { console.error(err); process.exit(1); });

