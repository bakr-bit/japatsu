#!/usr/bin/env node
// Wrapper: prefer SDK-based deep research if present, else fallback to OpenAI version.
// Usage: node scripts/deepresearch.js [--route /path] [--web]

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

async function run(cmd, args) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { stdio: 'inherit' });
    p.on('close', (code) => (code === 0 ? resolve() : reject(new Error(`${cmd} ${args.join(' ')} -> ${code}`))));
  });
}

async function main() {
  const args = process.argv.slice(2);
  const sdkPath = path.join(process.cwd(), 'scripts', 'deepresearch-sdk.js');
  const openaiPath = path.join(process.cwd(), 'scripts', 'deepresearch-openai.js');
  if (fs.existsSync(sdkPath)) {
    try {
      await run('node', [sdkPath, ...args]);
      return;
    } catch (e) {
      console.warn('SDK deepresearch failed, falling back to OpenAI HTTP:', e.message);
    }
  }
  await run('node', [openaiPath, ...args]);
}

main().catch((e) => { console.error(e); process.exit(1); });
