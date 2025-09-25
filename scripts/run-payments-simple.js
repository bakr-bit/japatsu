#!/usr/bin/env node
// Simple pipeline for /payment/* routes (excluding visa/mastercard):
// - Scrape with Firecrawl (HTTP) using .env
// - Generate structured TS via scripts/generate-structured.js
// - Scaffold app/payment/<slug>/page.tsx if missing to use PaymentTemplate
// Usage: node scripts/run-payments-simple.js [--route /payment/bitcoin]

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

function run(cmd, args) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { stdio: 'inherit' });
    p.on('close', (code) => (code === 0 ? resolve() : reject(new Error(`${cmd} ${args.join(' ')} -> ${code}`))));
  });
}

function readRoutes() {
  const txt = fs.readFileSync(path.join(process.cwd(), 'content', 'sources.yml'), 'utf8');
  const routes = Array.from(txt.matchAll(/-\s+route:\s*(.*)/g)).map((m) => m[1].trim());
  return routes.filter((r) => r.startsWith('/payment/') && r !== '/payment/visa' && r !== '/payment/mastercard');
}

function ensurePage(route) {
  const slug = route.split('/').filter(Boolean).pop();
  const dir = path.join(process.cwd(), 'app', 'payment', slug);
  const file = path.join(dir, 'page.tsx');
  if (fs.existsSync(file)) return; // don't overwrite
  fs.mkdirSync(dir, { recursive: true });
  const ts = `import PaymentTemplate from "@/components/templates/PaymentTemplate";
import data from "@/content/structured/payment/${slug}";

export default function Page() {
  return <PaymentTemplate data={data} canonicalPath="/payment/${slug}" />;
}
`;
  fs.writeFileSync(file, ts, 'utf8');
  console.log('wrote', path.relative(process.cwd(), file));
}

async function main() {
  const args = process.argv.slice(2);
  const routeArg = args.includes('--route') ? args[args.indexOf('--route') + 1] : null;
  const targets = routeArg ? [routeArg] : readRoutes();
  console.log('Simple payments targets:', targets.join(', '));
  for (const route of targets) {
    await run('node', ['scripts/scrape.js', '--route', route]);
    await run('node', ['scripts/generate-structured.js', '--route', route]);
    ensurePage(route);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });

