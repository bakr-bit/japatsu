#!/usr/bin/env node
// Gap analysis using Claude. Compares scraped vs deep research and outputs gaps.
// Usage: node scripts/find-gaps-claude.js [--route /payment/visa]

const fs = require('fs');
const path = require('path');
try { require('dotenv').config({ path: path.join(process.cwd(), '.env') }); } catch (_) {}

function loadRawMd(route) {
  const safe = route.replace(/\//g, '_').replace(/^_/, '');
  const file = path.join(process.cwd(), 'content', 'raw', `${safe}.md`);
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
}

function loadResearch(route) {
  const slug = route.split('/').filter(Boolean).pop();
  const file = path.join(process.cwd(), 'content', 'research', `${slug}.json`);
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : null;
}

async function callClaude(scraped, research) {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) throw new Error('ANTHROPIC_API_KEY not set');
  const body = {
    model: process.env.ANTHROPIC_MODEL || 'claude-3-5-sonnet-20240620',
    max_tokens: 2000,
    temperature: 0.2,
    messages: [
      {
        role: 'user',
        content: [
          { type: 'text', text: `Compare the two inputs and return a JSON object with keys: { missingTopics[], outdatedOrInaccurate[], depthGaps[], suggestedOutline[], rewriteDirectives[] }. Keep it concise and actionable (Japanese).\n\nSCRAPED:\n${scraped.slice(0, 20000)}\n\nRESEARCH:\n${JSON.stringify(research).slice(0, 20000)}` },
        ],
      },
    ],
  };
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': key,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Claude error ${res.status}: ${body}`);
  }
  const data = await res.json();
  const text = data?.content?.[0]?.text || '';
  const start = text.indexOf('{'); const end = text.lastIndexOf('}');
  return JSON.parse(text.slice(start, end + 1));
}

function writeGaps(route, json) {
  const dir = path.join(process.cwd(), 'content', 'gaps');
  fs.mkdirSync(dir, { recursive: true });
  const slug = route.split('/').filter(Boolean).pop();
  const file = path.join(dir, `${slug}.json`);
  fs.writeFileSync(file, JSON.stringify(json, null, 2), 'utf8');
  console.log('wrote', file);
}

async function main() {
  const args = process.argv.slice(2);
  const routeArg = args.includes('--route') ? args[args.indexOf('--route') + 1] : null;
  const sources = fs.readFileSync(path.join(process.cwd(), 'content', 'sources.yml'), 'utf8');
  const routes = Array.from(sources.matchAll(/-\s+route:\s*(.*)/g)).map(m => m[1].trim());
  for (const route of routes) {
    if (routeArg && route !== routeArg) continue;
    const scraped = loadRawMd(route);
    const research = loadResearch(route);
    if (!scraped || !research) { console.warn('Missing inputs for', route, '— run scrape and research first'); continue; }
    const gaps = await callClaude(scraped, research);
    writeGaps(route, gaps);
  }
}

main().catch(err => { console.error(err); process.exit(1); });
