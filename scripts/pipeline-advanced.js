#!/usr/bin/env node
// One-shot advanced pipeline: scrape → deep research (OpenAI) → gaps (Claude) → rewrite (Gemini)
// Usage: node scripts/pipeline-advanced.js [--route /payment/visa] [--web]

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
  const web = args.includes('--web');

  // Scrape
  await run('node', ['scripts/scrape.js', ...(route ? ['--route', route] : [])]);
  // Deep research (SDK if present, else OpenAI)
  await run('node', ['scripts/deepresearch.js', ...(route ? ['--route', route] : []), ...(web ? ['--web'] : [])]);
  // Gaps (Claude)
  await run('node', ['scripts/find-gaps-claude.js', ...(route ? ['--route', route] : [])]);
  // Rewrite (Gemini)
  await run('node', ['scripts/generate-with-gemini.js', ...(route ? ['--route', route] : [])]);
}

main().catch((e) => { console.error(e); process.exit(1); });
