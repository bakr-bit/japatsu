#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function readRoutes() {
  const txt = fs.readFileSync(path.join(process.cwd(), 'content', 'sources.yml'), 'utf8');
  return Array.from(txt.matchAll(/-\s+route:\s*(.*)/g))
    .map((m) => m[1].trim())
    .filter((r) => r.startsWith('/payment/') && r !== '/payment/visa' && r !== '/payment/mastercard');
}

function scaffold(route) {
  const slug = route.split('/').filter(Boolean).pop();
  const dir = path.join(process.cwd(), 'app', 'payment', slug);
  const file = path.join(dir, 'page.tsx');
  if (fs.existsSync(file)) return;
  fs.mkdirSync(dir, { recursive: true });
  const src = `import PaymentTemplate from "@/components/templates/PaymentTemplate";
import data from "@/content/structured/payment/${slug}";

export default function Page() {
  return <PaymentTemplate data={data} canonicalPath="/payment/${slug}" />;
}
`;
  fs.writeFileSync(file, src, 'utf8');
  console.log('wrote', path.relative(process.cwd(), file));
}

function main() {
  const routes = readRoutes();
  for (const r of routes) scaffold(r);
}

main();

