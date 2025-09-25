#!/usr/bin/env node
// Scaffold app pages for all routes using appropriate template and structured data
// Usage: node scripts/scaffold-pages.js [--route /path]

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
    const m = line.match(/^\s*(url|type):\s*(.*)$/);
    if (m) {
      const [, key, val] = m;
      if (key === 'url') cur.url = val.trim();
      else if (key === 'type') cur.type = val.trim();
      continue;
    }
  }
  if (cur) entries.push(cur);
  return entries;
}

function pascalCase(s) {
  return s
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('');
}

function ensurePage(route, type) {
  const segs = route.split('/').filter(Boolean);
  const slug = segs[segs.length - 1];
  const dir = path.join(process.cwd(), 'app', ...segs);
  const file = path.join(dir, 'page.tsx');
  if (fs.existsSync(file)) return;
  fs.mkdirSync(dir, { recursive: true });
  const typeSeg = type || (segs[0] || 'guide');
  const TemplateName = typeSeg === 'payment' ? 'PaymentTemplate' : `${pascalCase(typeSeg)}Template`;
  const templatePathCandidates = [
    typeSeg === 'payment'
      ? '@/components/templates/PaymentTemplate'
      : `@/components/templates/${TemplateName}`,
    '@/components/templates/GuideTemplate',
  ];
  // Choose import path: prefer specialized template if file exists
  let importPath = templatePathCandidates[0];
  if (typeSeg !== 'payment') {
    const localPath = path.join(process.cwd(), 'components', 'templates', `${TemplateName}.tsx`);
    if (!fs.existsSync(localPath)) {
      importPath = '@/components/templates/GuideTemplate';
    }
  }
  const dataImport = `@/content/structured/${typeSeg}/${slug}`;
  const componentName = importPath.endsWith('GuideTemplate') ? 'GuideTemplate' : TemplateName;
  const src = `import ${componentName} from "${importPath}";\nimport data from "${dataImport}";\n\nexport default function Page() {\n  return <${componentName} data={data} canonicalPath="${route}" />;\n}\n`;
  fs.writeFileSync(file, src, 'utf8');
  console.log('wrote', path.relative(process.cwd(), file));
}

function main() {
  const args = process.argv.slice(2);
  const routeArg = args.includes('--route') ? args[args.indexOf('--route') + 1] : null;
  const entries = readSources();
  for (const e of entries) {
    if (!e.route || e.route === '/') continue;
    if (routeArg && e.route !== routeArg) continue;
    const type = e.type || (e.route.startsWith('/payment/') ? 'payment' : 'guide');
    ensurePage(e.route, type);
  }
}

main();
