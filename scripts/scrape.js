#!/usr/bin/env node
// Minimal Firecrawl client to fetch Markdown for pages defined in content/sources.yml
// Usage: node scripts/scrape.js [--route /payment/visa]

const fs = require('fs');
const path = require('path');
// Load .env from project root so FIRECRAWL_API_KEY is available when script is invoked directly
try {
  require('dotenv').config({ path: path.join(process.cwd(), '.env') });
} catch (_) {}

function loadYaml(file) {
  const txt = fs.readFileSync(file, 'utf8');
  // tiny YAML subset parser for our simple sources.yml
  const lines = txt.split(/\r?\n/);
  const pages = [];
  let cur = null;
  for (const raw of lines) {
    const line = raw.trimEnd();
    if (line.startsWith('pages:')) continue;
    if (line.match(/^\s*-\s+route:/)) {
      if (cur) pages.push(cur);
      cur = { banner: { menu: [] } };
      const route = line.replace(/^\s*-\s+route:\s*/, '');
      cur.route = route;
      continue;
    }
    if (!cur) continue;
    const m = line.match(/^\s*(\w+):\s*(.*)$/);
    if (m) {
      const key = m[1];
      let val = m[2];
      if (key === 'url') { cur.url = val.trim(); continue; }
      if (val && val !== '') {
        if (val === 'payment') cur.type = 'payment';
        else if (key === 'title') cur.banner.title = val;
        else if (key === 'subheading') cur.banner.subheading = val;
        else if (key === 'description') cur.banner.description = val;
      }
      continue;
    }
    const menu = line.match(/^\s*-\s*\{\s*href:\s*"([^"]+)",\s*label:\s*"([^"]+)",\s*icon:\s*"([^"]+)"\s*\}\s*$/);
    if (menu) {
      cur.banner.menu.push({ href: menu[1], label: menu[2], icon: menu[3] });
    }
  }
  if (cur) pages.push(cur);
  return { pages };
}

async function scrape(url) {
  const endpoint = process.env.FIRECRAWL_SCRAPE_ENDPOINT || 'https://api.firecrawl.dev/v1/scrape';
  const key = process.env.FIRECRAWL_API_KEY || '';
  if (!key) {
    console.error('FIRECRAWL_API_KEY not set; writing placeholder');
    return { text: `# FAILED SCRAPE\n\nSet FIRECRAWL_API_KEY to fetch ${url}.` };
  }
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${key}` },
    body: JSON.stringify({ url, formats: ['markdown','html'], onlyMainContent: false })
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    console.error('Firecrawl scrape error', res.status, body);
    throw new Error(`Firecrawl error: ${res.status}`);
  }
  const body = await res.json();
  // Support both array (legacy/tool) and object { success, data } shapes
  if (Array.isArray(body) && body[0]) return body[0];
  if (body && body.data && (body.data.markdown || body.data.html)) {
    return { text: body.data.markdown || '', html: body.data.html };
  }
  console.error('Firecrawl unexpected response shape:', JSON.stringify(body).slice(0, 400));
  throw new Error('Firecrawl error: empty payload');
}

async function main() {
  const filterRouteIndex = process.argv.indexOf('--route');
  const filterRoute = filterRouteIndex > -1 ? process.argv[filterRouteIndex + 1] : null;
  const src = loadYaml(path.join(process.cwd(), 'content', 'sources.yml'));
  const outDir = path.join(process.cwd(), 'content', 'raw');
  fs.mkdirSync(outDir, { recursive: true });

  for (const p of src.pages) {
    if (filterRoute && p.route !== filterRoute) continue;
    const res = await scrape(p.url);
    const safe = p.route.replace(/\//g, '_').replace(/^_/, '');
    const file = path.join(outDir, `${safe}.md`);
    fs.writeFileSync(file, res.text || '', 'utf8');
    console.log('wrote', file);
    if (res.html) {
      const htmlFile = path.join(outDir, `${safe}.html`);
      fs.writeFileSync(htmlFile, res.html, 'utf8');
      console.log('wrote', htmlFile);
    }
  }
}

main().catch(err => { console.error(err); process.exit(1); });
