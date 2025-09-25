#!/usr/bin/env node
// Extract JSON-LD schema from saved HTML, and write normalized raw schema files.
// Usage: node scripts/extract-schema.js [--route /payment/visa]

const fs = require('fs');
const path = require('path');

function loadHtml(route) {
  const safe = route.replace(/\//g, '_').replace(/^_/, '');
  const file = path.join(process.cwd(), 'content', 'raw', `${safe}.html`);
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
}

function extractJsonLd(html) {
  const scripts = [];
  const re = /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html))) {
    const block = m[1].trim();
    try {
      const json = JSON.parse(block);
      scripts.push(json);
    } catch (_) {
      // Some sites have multiple JSON objects in one script; try to split braces
      const start = block.indexOf('{');
      const end = block.lastIndexOf('}');
      if (start > -1 && end > start) {
        try { scripts.push(JSON.parse(block.slice(start, end + 1))); } catch (_) {}
      }
    }
  }
  return scripts;
}

function writeRaw(route, schemas) {
  const base = path.join(process.cwd(), 'content', 'schema', 'raw');
  fs.mkdirSync(base, { recursive: true });
  const slug = route.split('/').filter(Boolean).pop();
  const file = path.join(base, `${slug}.json`);
  fs.writeFileSync(file, JSON.stringify(schemas, null, 2), 'utf8');
  console.log('wrote', file);
}

async function main() {
  const args = process.argv.slice(2);
  const routeArg = args.includes('--route') ? args[args.indexOf('--route') + 1] : null;
  const sources = fs.readFileSync(path.join(process.cwd(), 'content', 'sources.yml'), 'utf8');
  const routes = Array.from(sources.matchAll(/-\s+route:\s*(.*)/g)).map(m => m[1].trim());
  for (const route of routes) {
    if (routeArg && route !== routeArg) continue;
    const html = loadHtml(route);
    if (!html) { console.warn('No HTML for', route, '- run scripts/scrape.js first'); continue; }
    const schemas = extractJsonLd(html);
    writeRaw(route, schemas);
  }
}

main().catch(err => { console.error(err); process.exit(1); });

