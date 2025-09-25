#!/usr/bin/env node
// Run advanced pipeline for all /payment/* routes except VISA / Mastercard.
// Usage: node scripts/run-payments.js [--web]

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

function run(cmd, args) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { stdio: 'inherit' });
    p.on('close', (code) => (code === 0 ? resolve() : reject(new Error(`${cmd} ${args.join(' ')} -> ${code}`))));
  });
}

async function main() {
  const args = process.argv.slice(2);
  const web = args.includes('--web');
  const src = fs.readFileSync(path.join(process.cwd(), 'content', 'sources.yml'), 'utf8');
  const routes = Array.from(src.matchAll(/-\s+route:\s*(.*)/g)).map((m) => m[1].trim());
  const targets = routes.filter((r) => r.startsWith('/payment/') && r !== '/payment/visa' && r !== '/payment/mastercard');
  console.log('Targets:', targets.join(', '));
  for (const route of targets) {
    await run('node', ['scripts/pipeline-advanced.js', '--route', route, ...(web ? ['--web'] : [])]);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });

