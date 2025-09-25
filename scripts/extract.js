#!/usr/bin/env node
// Naive extractor to convert raw Markdown into structured JSON for payment pages.
// Usage: node scripts/extract.js [--route /payment/visa]

const fs = require('fs');
const path = require('path');

function loadRawMd(route) {
  const safe = route.replace(/\//g, '_').replace(/^_/, '');
  const file = path.join(process.cwd(), 'content', 'raw', `${safe}.md`);
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
}

function parsePayment(md) {
  const out = {
    intro: '',
    howto: [],
    feeTable: null,
    pros: [],
    cons: [],
    safetyTips: [],
    comparison: { items: [] },
    faq: [],
  };
  const lines = md.split(/\r?\n/);
  const text = md;

  // Intro: first paragraph under safety or first paragraph overall
  const safetyIdx = text.indexOf('## ');
  const paras = text.split(/\n\n+/).map(s => s.trim()).filter(Boolean);
  out.intro = (paras[1] || paras[0] || '').replace(/^#+\s*/, '');

  // How-to: first ordered list
  const olMatch = text.match(/\n(?:\d+\.\s+.+\n)+/);
  if (olMatch) {
    out.howto = olMatch[0].trim().split(/\n/).map(l => l.replace(/^\d+\.\s+/, '').trim());
  }

  // Fee table: find first pipe table
  const tableMatch = text.match(/\|([^\n]+)\|\n\|\s*-[-|\s]*\n([\s\S]*?)\n\n/);
  if (tableMatch) {
    const header = tableMatch[1].split('|').map(s => s.trim()).filter(Boolean);
    const rows = tableMatch[2]
      .split(/\n/)
      .map(r => r.split('|').map(s => s.trim()))
      .map(cols => cols.filter(Boolean))
      .filter(r => r.length > 0);
    out.feeTable = { columns: header, rows };
  }

  // Pros/Cons: look for a table with two columns titled similar to メリット/デメリット
  const prosConsMatch = text.match(/\|\s*メリット\s*\|\s*デメリット\s*\|[\s\S]*?\n\n/);
  if (prosConsMatch) {
    const body = prosConsMatch[0].split(/\n/).slice(2).join('\n');
    const rows = body
      .split(/\n/)
      .map(r => r.split('|').map(s => s.trim()))
      .map(cols => cols.filter(Boolean))
      .filter(r => r.length >= 2);
    out.pros = rows.map(r => r[0]).filter(Boolean);
    out.cons = rows.map(r => r[1]).filter(Boolean);
  }

  // Safety tips: bullet list under 注意点 or 対処法
  const safetySec = text.split(/##\s+[^\n]*注意|##\s+[^\n]*対処/)[1];
  if (safetySec) {
    const bullets = safetySec.match(/\n[-*+]\s+.+/g);
    if (bullets) out.safetyTips = bullets.map(b => b.replace(/^\s*[-*+]\s+/, '').trim());
  }

  // FAQ: find repeated Q/A blocks (very naive)
  const faqIdx = text.indexOf('## よくある質問');
  if (faqIdx !== -1) {
    const tail = text.slice(faqIdx);
    const qaBlocks = tail.split(/\n\n+/).filter(s => !s.startsWith('!['));
    const pairs = [];
    for (let i = 1; i + 1 < qaBlocks.length; i += 2) {
      const q = qaBlocks[i].replace(/^[#>*\s]+/, '').trim();
      const a = qaBlocks[i + 1].replace(/^[#>*\s]+/, '').trim();
      if (q && a) pairs.push({ q, a });
    }
    out.faq = pairs.slice(0, 6);
  }

  return out;
}

function writeStructured(route, type, parsed) {
  const base = path.join(process.cwd(), 'content', 'structured', type);
  fs.mkdirSync(base, { recursive: true });
  const slug = route.split('/').filter(Boolean).pop();
  const file = path.join(base, `${slug}.json`);
  fs.writeFileSync(file, JSON.stringify(parsed, null, 2), 'utf8');
  console.log('wrote', file);
}

async function main() {
  const filterRouteIndex = process.argv.indexOf('--route');
  const filterRoute = filterRouteIndex > -1 ? process.argv[filterRouteIndex + 1] : null;
  const sources = fs.readFileSync(path.join(process.cwd(), 'content', 'sources.yml'), 'utf8');
  const routes = Array.from(sources.matchAll(/-\s+route:\s*(.*)/g)).map(m => m[1].trim());
  for (const route of routes) {
    if (filterRoute && route !== filterRoute) continue;
    const md = loadRawMd(route);
    const parsed = parsePayment(md);
    writeStructured(route, 'payment', parsed);
  }
}

main().catch(err => { console.error(err); process.exit(1); });

