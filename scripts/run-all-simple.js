#!/usr/bin/env node
// Simple end-to-end: scrape all sources, generate structured data for all, scaffold pages
// Usage: node scripts/run-all-simple.js [--route /path] [--force]

const { spawn } = require('child_process');

function run(cmd, args) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { stdio: 'inherit' });
    p.on('close', (code) => (code === 0 ? resolve() : reject(new Error(`${cmd} ${args.join(' ')} -> ${code}`))));
  });
}

async function main() {
  const args = process.argv.slice(2);
  const routeIdx = args.indexOf('--route');
  const route = routeIdx > -1 ? args[routeIdx + 1] : null;
  const force = args.includes('--force');

  await run('node', ['scripts/scrape.js', ...(route ? ['--route', route] : [])]);
  await run('node', ['scripts/generate-structured-all.js', ...(route ? ['--route', route] : []), ...(force ? ['--force'] : [])]);
  await run('node', ['scripts/scaffold-pages.js', ...(route ? ['--route', route] : [])]);
}

main().catch((e) => { console.error(e); process.exit(1); });

