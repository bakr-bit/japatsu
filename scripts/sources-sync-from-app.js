#!/usr/bin/env node
// Sync content/sources.yml with all local routes discovered under app/**/page.tsx
// Heuristics:
// - type: 'payment' for /payment/*, otherwise 'guide'
// - url: https://japanesecasino.com<route>
// Usage: node scripts/sources-sync-from-app.js [--dry]

const fs = require('fs');
const path = require('path');

function listAppRoutes() {
  const appDir = path.join(process.cwd(), 'app');
  const routes = [];
  function walk(dir, parts = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('_') || entry.name === 'api') continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full, parts.concat(entry.name));
      } else if (entry.isFile() && entry.name === 'page.tsx') {
        const route = '/' + parts.join('/');
        if (route === '/') continue; // root page
        routes.push(route);
      }
    }
  }
  walk(appDir, []);
  return Array.from(new Set(routes)).sort();
}

function parseExistingRoutes(yaml) {
  return new Set(Array.from(yaml.matchAll(/\n\s*-\s+route:\s*(\S+)\s*/g)).map((m) => m[1].trim()));
}

function main() {
  const dry = process.argv.includes('--dry');
  const yamlPath = path.join(process.cwd(), 'content', 'sources.yml');
  const urlBase = 'https://japanesecasino.com';
  const routes = listAppRoutes();
  let yaml = fs.readFileSync(yamlPath, 'utf8');
  const existing = parseExistingRoutes(yaml);
  const toAdd = [];
  for (const route of routes) {
    if (existing.has(route)) continue;
    const seg = route.split('/').filter(Boolean)[0] || '';
    const type = seg === 'payment' ? 'payment' : seg; // use top-level segment as type
    toAdd.push([
      `  - route: ${route}`,
      `    url: ${urlBase}${route}`,
      ...(type ? [`    type: ${type}`] : []),
    ].join('\n'));
  }
  if (toAdd.length === 0) {
    console.log('No new routes to add.');
    return;
  }
  if (!dry) {
    if (!yaml.endsWith('\n')) yaml += '\n';
    yaml += toAdd.join('\n') + '\n';
    fs.writeFileSync(yamlPath, yaml, 'utf8');
  }
  console.log((dry ? '[dry] would append' : 'Appended') + ` ${toAdd.length} routes to content/sources.yml`);
}

main();
