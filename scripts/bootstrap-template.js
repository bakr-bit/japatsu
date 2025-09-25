#!/usr/bin/env node
// Bootstrap a template for a given top-level type by scraping one representative page
// - Picks a route from content/sources.yml under /<type>/ (or use --route)
// - Scrapes to markdown (via scripts/scrape.js)
// - Captures a screenshot to content/raw/screenshots/<type>-sample.png (uses Playwright if available)
// - Generates components/templates/<Type>Template.tsx if missing (wraps GuideTemplate initially)
// Usage: node scripts/bootstrap-template.js --type reviews [--route /reviews]

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

function pascalCase(s) {
  return s
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('');
}

function readSources() {
  const file = path.join(process.cwd(), 'content', 'sources.yml');
  const txt = fs.readFileSync(file, 'utf8');
  const routes = [];
  let cur = null;
  for (const raw of txt.split(/\r?\n/)) {
    const line = raw.trimEnd();
    if (line.startsWith('pages:')) continue;
    if (/^\s*-\s+route:/.test(line)) {
      if (cur) routes.push(cur);
      cur = { route: line.replace(/^\s*-\s+route:\s*/, '').trim() };
      continue;
    }
    if (!cur) continue;
    const m = line.match(/^\s*(url|type):\s*(.*)$/);
    if (m) {
      const [, key, val] = m;
      if (key === 'url') cur.url = val.trim();
      else if (key === 'type') cur.type = val.trim();
    }
  }
  if (cur) routes.push(cur);
  return routes;
}

function pickRouteForType(type, entries) {
  const cand = entries.find((e) => e.route && e.route !== `/${type}` && e.route.startsWith(`/${type}/`) && e.url);
  return cand?.route;
}

function run(cmd, args) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { stdio: 'inherit' });
    p.on('close', (code) => (code === 0 ? resolve() : reject(new Error(`${cmd} ${args.join(' ')} -> ${code}`))));
  });
}

async function takeScreenshot(url, outPath) {
  try {
    const { chromium } = require('playwright');
    const browser = await chromium.launch();
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForTimeout(1500);
    await page.screenshot({ path: outPath, fullPage: true });
    await browser.close();
    console.log('screenshot saved:', outPath);
  } catch (err) {
    console.warn('playwright not available or failed, skipping screenshot:', err.message);
  }
}

function ensureTemplateFile(type) {
  const TypeName = pascalCase(type);
  const file = path.join(process.cwd(), 'components', 'templates', `${TypeName}Template.tsx`);
  if (fs.existsSync(file)) {
    console.log('template exists:', path.relative(process.cwd(), file));
    return;
  }
  const body = `import SectionScaffold from "@/components/shell/SectionScaffold";
import HeaderBanner from "@/components/ui/HeaderBanner";
import SectionTitle from "@/components/ui/SectionTitle";
import Markdown from "@/components/ui/Markdown";

// Initial template for ${type}. You can evolve this into a more structured layout later.
export type ${TypeName}PageData = {
  title: string;
  banner?: {
    title: string;
    subheading?: string;
    description?: string;
    menu?: Array<{ href: string; label: string; icon?: string }>;
    leftImageSrc?: string;
    rightImageSrc?: string;
  };
  intro?: string;
  sections?: Array<{ heading: string; body?: string }>;
  tables?: Array<{ title?: string; caption?: string; columns: string[]; rows: string[][] }>;
  tips?: string[];
  faq?: Array<{ q: string; a: string }>;
};

export default function ${TypeName}Template({ data, canonicalPath }: { data: ${TypeName}PageData; canonicalPath?: string }) {
  const d = data;
  return (
    <SectionScaffold title={d.title}>
      <div className="space-y-8">
        {d.banner ? (
          <HeaderBanner
            title={d.banner.title}
            subheading={d.banner.subheading}
            description={d.banner.description}
            menuItems={d.banner.menu}
            leftImageSrc={d.banner.leftImageSrc}
            rightImageSrc={d.banner.rightImageSrc}
          />
        ) : null}

        {d.intro ? <p className="text-lg text-gray-800 leading-relaxed">{d.intro}</p> : null}

        {d.sections?.map((s, i) => (
          <section key={i} className="space-y-3">
            <SectionTitle title={s.heading} as="h2" />
            {s.body ? <Markdown content={s.body} className="prose prose-sm max-w-none text-gray-800" /> : null}
          </section>
        ))}

        {d.tables?.map((t, i) => (
          <section key={i} className="space-y-2">
            {t.title ? <SectionTitle title={t.title} as="h2" /> : null}
            <div className="overflow-x-auto rounded-lg border bg-white">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50 text-gray-600">
                  <tr>
                    {t.columns.map((c, j) => (
                      <th key={j} className="px-4 py-2 text-left font-semibold">{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {t.rows.map((r, ri) => (
                    <tr key={ri}>
                      {r.map((cell, cj) => (
                        <td key={cj} className="px-4 py-2 text-gray-800">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {t.caption ? <p className="text-xs text-gray-600">{t.caption}</p> : null}
          </section>
        ))}
      </div>
    </SectionScaffold>
  );
}
`;
  fs.writeFileSync(file, body, 'utf8');
  console.log('template created:', path.relative(process.cwd(), file));
}

async function main() {
  const args = process.argv.slice(2);
  const typeIdx = args.indexOf('--type');
  if (typeIdx === -1) throw new Error('--type <segment> is required');
  const type = args[typeIdx + 1];
  const routeIdx = args.indexOf('--route');
  const route = routeIdx > -1 ? args[routeIdx + 1] : null;

  const entries = readSources();
  const picked = route || pickRouteForType(type, entries);
  if (!picked) throw new Error(`No route found under /${type} in content/sources.yml. Add one first.`);

  console.log('Using sample route:', picked);
  await run('node', ['scripts/scrape.js', '--route', picked]);

  const url = (entries.find((e) => e.route === picked) || {}).url || `https://japanesecasino.com${picked}`;
  const outDir = path.join(process.cwd(), 'content', 'raw', 'screenshots');
  fs.mkdirSync(outDir, { recursive: true });
  const outPng = path.join(outDir, `${type}-sample.png`);
  await takeScreenshot(url, outPng);

  ensureTemplateFile(type);
}

main().catch((e) => { console.error(e); process.exit(1); });

