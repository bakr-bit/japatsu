#!/usr/bin/env node
// Sync content/sources.yml with all local /payment/* slugs.
// - Discovers slugs from app/payment/*
// - Appends missing entries to content/sources.yml with minimal fields
// Usage: node scripts/sources-sync-payment.js

const fs = require('fs');
const path = require('path');

function listLocalPaymentSlugs() {
  const dir = path.join(process.cwd(), 'app', 'payment');
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((name) => name !== 'api');
}

function parseExistingRoutes(yaml) {
  return new Set(Array.from(yaml.matchAll(/\n\s*-\s+route:\s*(.*)\s*\n/g)).map((m) => m[1].trim()));
}

function appendEntries(yamlPath, slugs) {
  const urlBase = 'https://japanesecasino.com/payment';
  let src = fs.readFileSync(yamlPath, 'utf8');
  const existing = parseExistingRoutes(src);
  const toAdd = [];
  for (const slug of slugs) {
    const route = `/payment/${slug}`;
    if (existing.has(route)) continue;
    toAdd.push(
      [
        `  - route: ${route}`,
        `    url: ${urlBase}/${slug}`,
        `    type: payment`,
      ].join('\n')
    );
  }
  if (toAdd.length === 0) {
    console.log('No new /payment routes to add.');
    return;
  }
  if (!src.endsWith('\n')) src += '\n';
  src += toAdd.join('\n') + '\n';
  fs.writeFileSync(yamlPath, src, 'utf8');
  console.log('Appended routes:', toAdd.length);
}

function main() {
  const yamlPath = path.join(process.cwd(), 'content', 'sources.yml');
  if (!fs.existsSync(yamlPath)) throw new Error('content/sources.yml not found');
  const slugs = listLocalPaymentSlugs();
  if (slugs.length === 0) {
    console.log('No local payment slugs found under app/payment');
    return;
  }
  appendEntries(yamlPath, slugs);
}

main();

