#!/usr/bin/env node
// Generate structured TS modules for all pages in content/sources.yml
// Supports type: payment (PaymentTemplate) and type: guide (GuideTemplate)
// Usage: node scripts/generate-structured-all.js [--route /path] [--force]

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

// --- Payment parser (existing heuristics, simplified) ---
function parsePayment(md) {
  const result = {
    intro: '', howto: [], howtoNote: undefined, feeTable: undefined,
    prosCons: undefined, safetyTips: [], comparison: undefined,
    summary: undefined, faq: [],
  };
  const text = md || '';
  const paras = text.split(/\n\n+/).map((s) => s.trim()).filter(Boolean);
  result.intro = (paras.find((p) => !p.startsWith('[')) || '').replace(/^#+\s*/, '');

  const ol = text.match(/(?:^|\n)(\d+\.\s+.+(?:\n\d+\.\s+.+)+)/);
  if (ol) result.howto = ol[1].split(/\n/).map((l) => l.replace(/^\d+\.\s+/, '').trim());

  const table = text.match(/\n\|([^\n]+)\|\n\|\s*-[-|\s]*\n([\s\S]*?)(?:\n\n|$)/);
  if (table) {
    const header = table[1].split('|').map((s) => s.trim()).filter(Boolean);
    const rows = table[2].split(/\n/).map((r) => r.split('|').map((s) => s.trim())).map((cols) => cols.filter(Boolean)).filter((r) => r.length > 0);
    result.feeTable = { title: undefined, caption: undefined, columns: header, rows };
  }

  const pc = text.match(/\|\s*メリット\s*\|\s*デメリット\s*\|[\s\S]*?\n\n/);
  if (pc) {
    const lines = pc[0].split(/\n/).slice(2).filter(Boolean);
    const pros = [], cons = [];
    for (const line of lines) {
      const cols = line.split('|').map((s) => s.trim()).filter(Boolean);
      if (cols.length >= 2) { pros.push(cols[0]); cons.push(cols[1]); }
    }
    result.prosCons = { pros, cons };
  }

  const safety = text.split(/##\s+[^\n]*注意|##\s+[^\n]*対処/)[1];
  if (safety) {
    const bullets = safety.match(/\n[-*+]\s+.+/g);
    if (bullets) result.safetyTips = bullets.map((b) => b.replace(/^\s*[-*+]\s+/, '').trim());
  }

  const faqIndex = text.indexOf('## よくある質問');
  if (faqIndex > -1) {
    const head = text.slice(0, faqIndex).trim();
    const blocks = head.split(/\n\n+/).filter(Boolean);
    result.summary = blocks[blocks.length - 1].replace(/^#+\s*/, '');
    const tail = text.slice(faqIndex);
    const chunks = tail.split(/\n\n+/).filter((s) => !s.startsWith('!['));
    const out = [];
    for (let i = 1; i + 1 < chunks.length; i += 2) {
      const q = chunks[i].replace(/^[#>*\s]+/, '').trim();
      const a = chunks[i + 1].replace(/^[#>*\s]+/, '').trim();
      if (q && a) out.push({ q, a });
    }
    result.faq = out.slice(0, 6);
  }
  return result;
}

// --- Guide parser (generic pages) ---
function parseGuide(md) {
  const text = md || '';
  const data = {
    intro: '',
    criteria: [],
    sections: [],
    prosCons: undefined,
    tips: [],
    faq: [],
  };
  // Intro: first non-empty paragraph
  const paras = text.split(/\n\n+/).map((s) => s.trim()).filter(Boolean);
  data.intro = (paras.find((p) => !/^\[.+\]\(.+\)$/.test(p)) || '').replace(/^#+\s*/, '');

  // Split by level-2 headings into sections
  const parts = text.split(/\n(?=##\s+)/);
  const sections = [];
  for (const part of parts) {
    const m = part.match(/^##\s+([^\n]+)\n([\s\S]*)$/);
    if (!m) continue;
    const heading = m[1].trim();
    let body = (m[2] || '').trim();
    if (/よくある質問|FAQ/i.test(heading)) continue; // handle later
    // Extract simple pipe tables within section
    const tables = [];
    body = body.replace(/\n\|([^\n]+)\|\n\|\s*-[-|\s]*\n([\s\S]*?)(?:\n\n|$)/g, (_match, head, rows) => {
      const columns = head.split('|').map((s) => s.trim()).filter(Boolean);
      const tr = rows
        .split(/\n/)
        .map((r) => r.split('|').map((s) => s.trim()))
        .map((cols) => cols.filter(Boolean))
        .filter((r) => r.length > 0);
      tables.push({ columns, rows: tr });
      return '\n';
    });
    // Criteria or tips from bullet lists if headings suggest selection points
    if (/選び方|ポイント|基準/.test(heading)) {
      const bullets = (m[2].match(/\n[-*+]\s+.+/g) || []).map((b) => b.replace(/^\s*[-*+]\s+/, '').trim());
      data.criteria.push(...bullets);
    } else if (/ヒント|注意|Tips|安全/.test(heading)) {
      const bullets = (m[2].match(/\n[-*+]\s+.+/g) || []).map((b) => b.replace(/^\s*[-*+]\s+/, '').trim());
      data.tips.push(...bullets);
    }
    sections.push({ heading, body: body || undefined, tables: tables.length ? tables : undefined });
  }
  data.sections = sections;

  // Pros/Cons detection via table
  const pc = text.match(/\|\s*メリット\s*\|\s*デメリット\s*\|[\s\S]*?\n\n/);
  if (pc) {
    const lines = pc[0].split(/\n/).slice(2).filter(Boolean);
    const pros = [], cons = [];
    for (const line of lines) {
      const cols = line.split('|').map((s) => s.trim()).filter(Boolean);
      if (cols.length >= 2) { pros.push(cols[0]); cons.push(cols[1]); }
    }
    data.prosCons = { pros, cons };
  }

  // FAQ
  const faqIndex = text.search(/##\s+よくある質問|##\s+FAQ/i);
  if (faqIndex > -1) {
    const tail = text.slice(faqIndex);
    const chunks = tail.split(/\n\n+/).filter((s) => !s.startsWith('!['));
    const out = [];
    for (let i = 1; i + 1 < chunks.length; i += 2) {
      const q = chunks[i].replace(/^[#>*\s]+/, '').trim();
      const a = chunks[i + 1].replace(/^[#>*\s]+/, '').trim();
      if (q && a) out.push({ q, a });
    }
    data.faq = out.slice(0, 6);
  }
  return data;
}

function writeTsModule(route, type, payload, banner) {
  const base = path.join(process.cwd(), 'content', 'structured', type);
  const slug = route.split('/').filter(Boolean).pop();
  const file = path.join(base, `${slug}.ts`);
  fs.mkdirSync(base, { recursive: true });
  if (type === 'payment') {
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
  } else {
    // guide (generic)
    const data = {
      title: slug.replace(/-/g, ' ').toUpperCase(),
      banner: banner || undefined,
      intro: payload.intro || undefined,
      criteria: payload.criteria && payload.criteria.length ? payload.criteria : undefined,
      sections: payload.sections && payload.sections.length ? payload.sections : undefined,
      prosCons: payload.prosCons || undefined,
      tips: payload.tips && payload.tips.length ? payload.tips : undefined,
      faq: payload.faq && payload.faq.length ? payload.faq : undefined,
      cta: undefined,
    };
    const body = `import { GuidePageData } from "@/components/templates/GuideTemplate";

const data: GuidePageData = ${JSON.stringify(data, null, 2)} as const;

export default data;
`;
    fs.writeFileSync(file, body, 'utf8');
  }
  console.log('wrote', file);
}

async function main() {
  const args = process.argv.slice(2);
  const routeArg = args.includes('--route') ? args[args.indexOf('--route') + 1] : null;
  const force = args.includes('--force');
  const entries = readSources();
  for (const e of entries) {
    if (!e.url) continue;
    const type = e.type || (e.route.startsWith('/payment/') ? 'payment' : 'guide');
    const dest = path.join(process.cwd(), 'content', 'structured', type, `${e.route.split('/').pop()}.ts`);
    if (routeArg && e.route !== routeArg) continue;
    if (!force && fs.existsSync(dest)) { console.log('skip existing', dest); continue; }
    const md = loadRawMd(e.route);
    const parsed = type === 'payment' ? parsePayment(md) : parseGuide(md);
    writeTsModule(e.route, type, parsed, e.banner);
  }
}

main().catch((err) => { console.error(err); process.exit(1); });

