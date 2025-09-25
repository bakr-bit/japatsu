#!/usr/bin/env node
// Enhance scraped content with Gemini: parse + enrich + rewrite into our structured schema.
// Usage:
//   node scripts/enhance-with-gemini.js --route /payment/visa [--web]
// Env:
//   GEMINI_API_KEY (required)
//   FIRECRAWL_API_KEY (optional, for --web research)

const fs = require('fs');
const path = require('path');

function readSources() {
  const file = path.join(process.cwd(), 'content', 'sources.yml');
  const txt = fs.readFileSync(file, 'utf8');
  const pages = [];
  let cur = null;
  for (const raw of txt.split(/\r?\n/)) {
    const line = raw.trimEnd();
    if (line.startsWith('pages:')) continue;
    if (/^\s*-\s+route:/.test(line)) {
      if (cur) pages.push(cur);
      cur = { banner: { menu: [] } };
      cur.route = line.replace(/^\s*-\s+route:\s*/, '').trim();
      continue;
    }
    if (!cur) continue;
    const m = line.match(/^\s*(url|type|title|subheading|description):\s*(.*)$/);
    if (m) {
      const [, key, val] = m;
      if (key === 'url') cur.url = val.trim();
      else if (key === 'type') cur.type = val.trim();
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

function loadRawMd(route) {
  const safe = route.replace(/\//g, '_').replace(/^_/, '');
  const file = path.join(process.cwd(), 'content', 'raw', `${safe}.md`);
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
}

async function webResearch(query) {
  const key = process.env.FIRECRAWL_API_KEY;
  if (!key) return [];
  try {
    const res = await fetch('https://api.firecrawl.dev/v1/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
      body: JSON.stringify({ query, limit: 5, scrapeOptions: { formats: ['markdown'], onlyMainContent: true } }),
    });
    if (!res.ok) return [];
    const data = await res.json();
    const docs = (data?.data || []).map((d) => `TITLE: ${d.title || ''}\nURL: ${d.url}\n\n${(d.markdown || '').slice(0, 2000)}`);
    return docs;
  } catch (_) {
    return [];
  }
}

function buildPrompt(route, url, scraped, snippets) {
  return `You are assisting in building a Japanese online casino payment guide page.\n\nTask:\n- Parse the scraped Markdown content and produce structured JSON matching this TypeScript type (omit undefined fields):\n\ninterface PaymentPageData {\n  title: string; // Keep as the payment method name (e.g., VISA, Mastercard)\n  intro?: string;\n  howto?: string[]; // step-by-step list\n  howtoNote?: string;\n  feeTable?: { title?: string; caption?: string; columns: string[]; rows: string[][] };\n  prosCons?: { pros: string[]; cons: string[] };\n  safetyTips?: string[];\n  comparison?: { title?: string; items: { title: string; description: string; meta?: { label: string; value: string }[] }[] };\n  summary?: string;\n  faq?: { q: string; a: string }[];\n  cta?: { text: string; href: string };\n}\n\n- Improve and complete missing parts using up-to-date knowledge and the extra research snippets (do not invent sources).\n- Avoid ads and affiliate promos.\n- Keep content concise, neutral, and helpful for Japanese readers.\n- Return ONLY a JSON object (no markdown fences).\n\nRoute: ${route}\nSource URL: ${url}\n\nScraped Markdown (truncated if long):\n---\n${scraped.slice(0, 20000)}\n---\n\nExtra research snippets (may be 0..n):\n${snippets.map((s, i) => `--- SNIPPET ${i + 1} ---\n${s}`).join('\n')}\n`;
}

async function callGemini(prompt) {
  const key = process.env.GEMINI_API_KEY;
  if (!key) throw new Error('GEMINI_API_KEY not set');
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${key}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.3, maxOutputTokens: 2048 },
    }),
  });
  if (!res.ok) throw new Error(`Gemini API error: ${res.status} ${await res.text()}`);
  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
  return text;
}

function extractJson(s) {
  // Remove code fences if present
  const fenced = s.match(/```(?:json)?\n([\s\S]*?)```/);
  const raw = fenced ? fenced[1] : s;
  // Find first {...}
  const start = raw.indexOf('{');
  const end = raw.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error('No JSON object found');
  const json = raw.slice(start, end + 1);
  return JSON.parse(json);
}

function writeTsModule(route, type, payload, banner) {
  const base = path.join(process.cwd(), 'content', 'structured', type);
  const slug = route.split('/').filter(Boolean).pop();
  const file = path.join(base, `${slug}.ts`);
  fs.mkdirSync(base, { recursive: true });
  // Merge banner + defaults
  const data = { ...payload, title: payload.title || slug.toUpperCase(), banner, cta: payload.cta || { text: '入出金ガイド一覧を見る', href: '/payment' } };
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
  const doWeb = args.includes('--web');
  const entries = readSources();
  for (const e of entries) {
    if (routeArg && e.route !== routeArg) continue;
    const scraped = loadRawMd(e.route);
    if (!scraped) { console.warn('No raw MD for', e.route, '- run scripts/scrape.js first'); continue; }
    const research = doWeb ? await webResearch(`${e.route.split('/').pop()} オンラインカジノ 入金 使い方 手数料 比較`) : [];
    const prompt = buildPrompt(e.route, e.url, scraped, research);
    const text = await callGemini(prompt);
    let json;
    try { json = extractJson(text); }
    catch (err) { console.error('Failed to parse Gemini output as JSON:', err.message); continue; }
    writeTsModule(e.route, e.type, json, e.banner);
  }
}

main().catch(err => { console.error(err); process.exit(1); });

