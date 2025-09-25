#!/usr/bin/env node
// One-time pipeline: scrape (if needed) and generate TypeScript structured files
// Usage:
//   node scripts/generate-structured.js [--route /payment/visa] [--force]
// Typically run after: node scripts/scrape.js

const fs = require('fs');
const path = require('path');

function readSources() {
  const file = path.join(process.cwd(), 'content', 'sources.yml');
  const txt = fs.readFileSync(file, 'utf8');
  const entries = [];
  let cur = null;
  for (const raw of txt.split(/\r?\n/)) {
    const line = raw.trimEnd();
    if (line.startsWith('pages:')) continue;
    if (/^\s*-\s+route:/.test(line)) {
      if (cur) entries.push(cur);
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
  if (cur) entries.push(cur);
  return entries;
}

function loadRawMd(route) {
  const safe = route.replace(/\//g, '_').replace(/^_/, '');
  const file = path.join(process.cwd(), 'content', 'raw', `${safe}.md`);
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
}

function parsePayment(md) {
  const result = {
    intro: '',
    howto: [],
    howtoNote: undefined,
    feeTable: undefined,
    prosCons: undefined,
    safetyTips: [],
    comparison: undefined,
    summary: undefined,
    faq: [],
  };
  const text = md || '';

  // Intro
  const paras = text.split(/\n\n+/).map(s => s.trim()).filter(Boolean);
  result.intro = (paras.find(p => !p.startsWith('[')) || '').replace(/^#+\s*/, '');

  // How-to (first ordered list)
  const ol = text.match(/(?:^|\n)(\d+\.\s+.+(?:\n\d+\.\s+.+)+)/);
  if (ol) {
    result.howto = ol[1].split(/\n/).map(l => l.replace(/^\d+\.\s+/, '').trim());
  }

  // Fee table (first pipe table)
  const table = text.match(/\n\|([^\n]+)\|\n\|\s*-[-|\s]*\n([\s\S]*?)(?:\n\n|$)/);
  if (table) {
    const header = table[1].split('|').map(s => s.trim()).filter(Boolean);
    const rows = table[2]
      .split(/\n/)
      .map(r => r.split('|').map(s => s.trim()))
      .map(cols => cols.filter(Boolean))
      .filter(r => r.length > 0);
    result.feeTable = {
      title: undefined,
      caption: undefined,
      columns: header,
      rows,
    };
  }

  // Pros/Cons from table with メリット/デメリット
  const pc = text.match(/\|\s*メリット\s*\|\s*デメリット\s*\|[\s\S]*?\n\n/);
  if (pc) {
    const lines = pc[0].split(/\n/).slice(2).filter(Boolean);
    const pros = [];
    const cons = [];
    for (const line of lines) {
      const cols = line.split('|').map(s => s.trim()).filter(Boolean);
      if (cols.length >= 2) { pros.push(cols[0]); cons.push(cols[1]); }
    }
    result.prosCons = { pros, cons };
  }

  // Safety tips: bullets under 注意 or 対処
  const safety = text.split(/##\s+[^\n]*注意|##\s+[^\n]*対処/)[1];
  if (safety) {
    const bullets = safety.match(/\n[-*+]\s+.+/g);
    if (bullets) result.safetyTips = bullets.map(b => b.replace(/^\s*[-*+]\s+/, '').trim());
  }

  // Comparison: try to detect a 3-4 column comparison table
  const comp = text.match(/\n\|\s*\|.*\|\n\|\s*-[-|\s]*\n([\s\S]*?)(?:\n\n|$)/);
  if (comp && !result.prosCons) {
    // Fallback, skip if it was actually the pros/cons table
  }

  // Summary: last paragraph before FAQ
  const faqIndex = text.indexOf('## よくある質問');
  if (faqIndex > -1) {
    const head = text.slice(0, faqIndex).trim();
    const blocks = head.split(/\n\n+/).filter(Boolean);
    result.summary = blocks[blocks.length - 1].replace(/^#+\s*/, '');
  }

  // FAQ naive pairing
  if (faqIndex > -1) {
    const tail = text.slice(faqIndex);
    const blocks = tail.split(/\n\n+/).filter(s => !s.startsWith('!['));
    const out = [];
    for (let i = 1; i + 1 < blocks.length; i += 2) {
      const q = blocks[i].replace(/^[#>*\s]+/, '').trim();
      const a = blocks[i + 1].replace(/^[#>*\s]+/, '').trim();
      if (q && a) out.push({ q, a });
    }
    result.faq = out.slice(0, 6);
  }

  return result;
}

function writeTsModule(route, type, payload, banner) {
  const base = path.join(process.cwd(), 'content', 'structured', type);
  const slug = route.split('/').filter(Boolean).pop();
  const file = path.join(base, `${slug}.ts`);
  fs.mkdirSync(base, { recursive: true });
  const data = {
    title: slug.toUpperCase(),
    banner: banner || undefined,
    intro: payload.intro || undefined,
    howto: payload.howto && payload.howto.length ? payload.howto : undefined,
    howtoNote: payload.howtoNote || undefined,
    feeTable: payload.feeTable || undefined,
    prosCons: payload.prosCons || undefined,
    safetyTips: payload.safetyTips && payload.safetyTips.length ? payload.safetyTips : undefined,
    comparison: payload.comparison || undefined,
    summary: payload.summary || undefined,
    faq: payload.faq && payload.faq.length ? payload.faq : undefined,
    cta: { text: '入出金ガイド一覧を見る', href: '/payment' },
  };
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
  const force = args.includes('--force');
  const entries = readSources();
  for (const e of entries) {
    if (routeArg && e.route !== routeArg) continue;
    const dest = path.join(process.cwd(), 'content', 'structured', e.type, `${e.route.split('/').pop()}.ts`);
    if (!force && fs.existsSync(dest)) {
      console.log('skip existing', dest);
      continue;
    }
    const md = loadRawMd(e.route);
    const parsed = parsePayment(md);
    writeTsModule(e.route, e.type, parsed, e.banner);
  }
}

main().catch(err => { console.error(err); process.exit(1); });

