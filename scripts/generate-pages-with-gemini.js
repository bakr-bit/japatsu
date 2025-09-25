#!/usr/bin/env node
// Autogenerate app pages by scraping japanesecasino.com and rewriting with Gemini
// Flow per page:
//   1) Firecrawl scrape (Markdown)
//   2) Gemini: rewrite + expand into structured JSON matching the chosen template
//   3) Write /app/<category>/<page>/page.tsx importing that template with inlined data
//
// Usage examples:
//   node scripts/generate-pages-with-gemini.js --all
//   node scripts/generate-pages-with-gemini.js --category craps
//   node scripts/generate-pages-with-gemini.js --route /craps/rules
//   DRY run: add --dry
//
// Env:
//   GEMINI_API_KEY       (required)
//   FIRECRAWL_API_KEY    (required)
//   FIRECRAWL_BASE       (optional, default https://api.firecrawl.dev)
//   GEMINI_MODEL         (optional, default gemini-1.5-pro)

const fs = require('fs');
const path = require('path');
require('dotenv').config();

const FIRECRAWL_BASE = process.env.FIRECRAWL_BASE || 'https://api.firecrawl.dev';
const FIRECRAWL_KEY = process.env.FIRECRAWL_API_KEY;
const GEMINI_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-1.5-pro';

if (!GEMINI_KEY) {
  console.error('Missing GEMINI_API_KEY');
}
if (!FIRECRAWL_KEY) {
  console.error('Missing FIRECRAWL_API_KEY');
}

function pascalCase(s) {
  return s
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('');
}

// Category -> Template mapping
const TEMPLATE_MAP = {
  about: { name: 'AboutTemplate', importPath: '@/components/templates/AboutTemplate', typeName: 'AboutPageData', schema: `{
    title: string;
    intro?: string;
    sections?: Array<{ heading: string; paragraphs?: string[]; bullets?: string[] }>;
    faq?: Array<{ q: string; a: string }>;
    cta?: { text: string; href: string };
  }` },
  authors: { name: 'AuthorsTemplate', importPath: '@/components/templates/AuthorsTemplate', typeName: 'AuthorsPageData', schema: `{
    title: string;
    intro?: string;
    authors: Array<{ name: string; role?: string; avatarSrc?: string; bio?: string; links?: Array<{ href: string; label: string }> }>;
    faq?: Array<{ q: string; a: string }>;
  }` },
  baccarat: { name: 'BaccaratTemplate', importPath: '@/components/templates/BaccaratTemplate', typeName: 'BaccaratPageData', schema: `{
    title: string;
    intro?: string;
    howto?: { title?: string; steps: string[]; note?: string };
    rules?: { heading: string; paragraphs?: string[]; bullets?: string[]; table?: { columns: string[]; rows: string[][] } };
    strategy?: { heading: string; paragraphs?: string[]; bullets?: string[]; table?: { columns: string[]; rows: string[][] } };
    tables?: Array<{ title?: string; caption?: string; columns: string[]; rows: string[][] }>;
    tips?: string[];
    prosCons?: { pros: string[]; cons: string[] };
    faq?: Array<{ q: string; a: string }>;
    cta?: { text: string; href: string };
  }` },
  'biggest-game-selection': { name: 'BiggestGameSelectionTemplate', importPath: '@/components/templates/BiggestGameSelectionTemplate', typeName: 'BiggestGameSelectionPageData', schema: `{
    title: string;
    intro?: string;
    criteria?: string[];
    faq?: Array<{ q: string; a: string }>;
    cta?: { text: string; href: string };
  }` },
  blackjack: { name: 'BlackjackTemplate', importPath: '@/components/templates/BlackjackTemplate', typeName: 'BlackjackPageData', schema: `{
    title: string; intro?: string; howto?: { steps: string[] };
    rules?: { heading: string; paragraphs?: string[]; bullets?: string[]; table?: { columns: string[]; rows: string[][] } };
    strategy?: { heading: string; paragraphs?: string[]; bullets?: string[]; table?: { columns: string[]; rows: string[][] } };
    tables?: Array<{ title?: string; caption?: string; columns: string[]; rows: string[][] }>;
    tips?: string[]; prosCons?: { pros: string[]; cons: string[] }; faq?: Array<{ q: string; a: string }>;
  }` },
  bonuses: { name: 'BonusesTemplate', importPath: '@/components/templates/BonusesTemplate', typeName: 'any', schema: `{
    title: string; intro?: string; sections?: Array<{ heading: string; paragraphs?: string[]; bullets?: string[] }>; faq?: Array<{ q: string; a: string }>;
  }` },
  'casino-apps': { name: 'CasinoAppsTemplate', importPath: '@/components/templates/CasinoAppsTemplate', typeName: 'CasinoAppsPageData', schema: `{
    title: string; intro?: string; criteria?: string[]; tips?: string[]; faq?: Array<{ q: string; a: string }>;
  }` },
  craps: { name: 'CrapsTemplate', importPath: '@/components/templates/CrapsTemplate', typeName: 'CrapsPageData', schema: `{
    title: string; intro?: string; howto?: { title?: string; steps: string[]; note?: string };
    basics?: { heading: string; paragraphs?: string[]; bullets?: string[] };
    bets?: { heading: string; paragraphs?: string[]; bullets?: string[] };
    tables?: Array<{ title?: string; caption?: string; columns: string[]; rows: string[][] }>;
    tips?: string[]; faq?: Array<{ q: string; a: string }>; cta?: { text: string; href: string };
  }` },
  'crash-games': { name: 'CrashGamesTemplate', importPath: '@/components/templates/CrashGamesTemplate', typeName: 'CrashGamesPageData', schema: `{
    title: string; intro?: string; mechanics?: string[]; tables?: Array<{ title?: string; caption?: string; columns: string[]; rows: string[][] }>;
    tips?: string[]; faq?: Array<{ q: string; a: string }>;
  }` },
  'crash-games-highflyer': { name: 'CrashGamesHighflyerTemplate', importPath: '@/components/templates/CrashGamesHighflyerTemplate', typeName: 'CrashGamesHighflyerPageData', schema: `{
    title: string; intro?: string; picks?: { title?: string; items: Array<{ name: string; href?: string; reason?: string }> };
    strategy?: string[]; faq?: Array<{ q: string; a: string }>;
  }` },
  crypto: { name: 'CryptoTemplate', importPath: '@/components/templates/CryptoTemplate', typeName: 'any', schema: `{
    title: string; intro?: string; sections?: Array<{ heading: string; paragraphs?: string[]; bullets?: string[] }>; faq?: Array<{ q: string; a: string }>;
  }` },
  'customer-support': { name: 'CustomerSupportTemplate', importPath: '@/components/templates/CustomerSupportTemplate', typeName: 'CustomerSupportPageData', schema: `{
    title: string; intro?: string; channels?: string[]; tables?: Array<{ title?: string; caption?: string; columns: string[]; rows: string[][] }>; tips?: string[]; faq?: Array<{ q: string; a: string }>;
  }` },
  dice: { name: 'DiceTemplate', importPath: '@/components/templates/DiceTemplate', typeName: 'DicePageData', schema: `{
    title: string; intro?: string; sections?: Array<{ heading: string; paragraphs?: string[]; bullets?: string[]; table?: { columns: string[]; rows: string[][] } }>;
    tables?: Array<{ title?: string; caption?: string; columns: string[]; rows: string[][] }>; tips?: string[]; faq?: Array<{ q: string; a: string }>;
  }` },
  'free-spins': { name: 'FreeSpinsTemplate', importPath: '@/components/templates/FreeSpinsTemplate', typeName: 'FreeSpinsPageData', schema: `{
    title: string; intro?: string; promos?: Array<{ href: string; title: string; expiry: string; img?: string }>; offers?: Array<{ link: string; img: string; text: string; expiry?: string; alt?: string }>;
    tips?: string[]; faq?: Array<{ q: string; a: string }>;
  }` },
  'game-shows': { name: 'GameShowsTemplate', importPath: '@/components/templates/GameShowsTemplate', typeName: 'any', schema: `{
    title: string; intro?: string; sections?: Array<{ heading: string; paragraphs?: string[]; bullets?: string[] }>; faq?: Array<{ q: string; a: string }>;
  }` },
  games: { name: 'GamesTemplate', importPath: '@/components/templates/GamesTemplate', typeName: 'GamesPageData', schema: `{
    title: string; intro?: string; hubs?: Array<{ title: string; links: Array<{ href: string; label: string; description?: string }> }>; faq?: Array<{ q: string; a: string }>;
  }` },
  guides: { name: 'GuideTemplate', importPath: '@/components/templates/GuideTemplate', typeName: 'GuidePageData', schema: `{
    title: string; intro?: string; criteria?: string[]; sections?: Array<{ heading: string; paragraphs?: string[]; bullets?: string[]; table?: { columns: string[]; rows: string[][] } }>;
    tips?: string[]; prosCons?: { pros: string[]; cons: string[] }; faq?: Array<{ q: string; a: string }>;
  }` },
  info: { name: 'InfoTemplate', importPath: '@/components/templates/InfoTemplate', typeName: 'InfoPageData', schema: `{
    title: string; intro?: string; sections?: Array<{ heading: string; paragraphs?: string[]; bullets?: string[] }>; faq?: Array<{ q: string; a: string }>;
  }` },
  'instant-withdrawal-casinos': { name: 'InstantWithdrawalCasinosTemplate', importPath: '@/components/templates/InstantWithdrawalCasinosTemplate', typeName: 'InstantWithdrawalCasinosPageData', schema: `{
    title: string; intro?: string; criteria?: string[]; tips?: string[]; faq?: Array<{ q: string; a: string }>;
  }` },
  'live-casino': { name: 'LiveCasinoTemplate', importPath: '@/components/templates/LiveCasinoTemplate', typeName: 'any', schema: `{
    title: string; intro?: string; sections?: Array<{ heading: string; paragraphs?: string[]; bullets?: string[] }>; faq?: Array<{ q: string; a: string }>;
  }` },
  mobile: { name: 'MobileTemplate', importPath: '@/components/templates/MobileTemplate', typeName: 'MobilePageData', schema: `{
    title: string; intro?: string; criteria?: string[]; tips?: string[]; faq?: Array<{ q: string; a: string }>;
  }` },
  'most-awards': { name: 'MostAwardsTemplate', importPath: '@/components/templates/MostAwardsTemplate', typeName: 'MostAwardsPageData', schema: `{
    title: string; intro?: string; criteria?: string[]; faq?: Array<{ q: string; a: string }>;
  }` },
  'new-casinos': { name: 'NewCasinosTemplate', importPath: '@/components/templates/NewCasinosTemplate', typeName: 'NewCasinosPageData', schema: `{
    title: string; intro?: string; criteria?: string[]; faq?: Array<{ q: string; a: string }>;
  }` },
  news: { name: 'NewsTemplate', importPath: '@/components/templates/NewsTemplate', typeName: 'NewsPageData', schema: `{
    title: string; intro?: string; featured?: { title?: string; items: Array<{ href: string; img: string; title: string; date: string; category?: string; alt?: string }> };
    latest?: { title?: string; items: Array<{ href: string; img: string; title: string; date: string; category?: string; alt?: string }> };
  }` },
  offers: { name: 'OffersTemplate', importPath: '@/components/templates/OffersTemplate', typeName: 'OffersPageData', schema: `{
    title: string; intro?: string; promos?: Array<{ href: string; title: string; expiry: string; img?: string }>; offers?: Array<{ link: string; img: string; text: string; expiry?: string; alt?: string }>;
    faq?: Array<{ q: string; a: string }>;
  }` },
  payment: { name: 'PaymentTemplate', importPath: '@/components/templates/PaymentTemplate', typeName: 'PaymentPageData', schema: `{
    title: string; intro?: string; howto?: string[]; howtoNote?: string; howtoMedia?: { src: string; alt?: string; caption?: string };
    feeTable?: { title?: string; caption?: string; columns: string[]; rows: string[][] };
    prosCons?: { pros: string[]; cons: string[] }; safetyTips?: string[]; comparison?: { title?: string; items: Array<{ title: string; description: string; meta?: Array<{ label: string; value: string }> }> };
    extraTables?: Array<{ id?: string; title?: string; caption?: string; columns: string[]; rows: string[][] }>;
    payout?: { title?: string; items: string[]; note?: string };
    relatedPayments?: Array<{ href: string; name: string; img?: string }>;
    summary?: string; faq?: Array<{ q: string; a: string }>; cta?: { text: string; href: string };
  }` },
  poker: { name: 'PokerTemplate', importPath: '@/components/templates/PokerTemplate', typeName: 'any', schema: `{
    title: string; intro?: string; sections?: Array<{ heading: string; paragraphs?: string[]; bullets?: string[] }>; faq?: Array<{ q: string; a: string }>;
  }` },
  pontoon: { name: 'PontoonTemplate', importPath: '@/components/templates/PontoonTemplate', typeName: 'PontoonPageData', schema: `{
    title: string; intro?: string; howto?: { title?: string; steps: string[]; note?: string }; rules?: { heading: string; paragraphs?: string[]; bullets?: string[]; table?: { columns: string[]; rows: string[][] } };
    strategy?: { heading: string; paragraphs?: string[]; bullets?: string[] };
    tables?: Array<{ title?: string; caption?: string; columns: string[]; rows: string[][] }>; tips?: string[]; faq?: Array<{ q: string; a: string }>;
  }` },
  providers: { name: 'ProvidersTemplate', importPath: '@/components/templates/ProvidersTemplate', typeName: 'ProvidersPageData', schema: `{
    title: string; intro?: string; featured?: { title?: string; items: Array<{ name: string; logo?: string; href?: string; founded?: string; hq?: string; licenses?: string[]; gameTypes?: string[]; topGames?: Array<{ name: string; href?: string }>; tagline?: string }> };
    sections?: Array<{ heading: string; paragraphs?: string[]; bullets?: string[]; table?: { title?: string; caption?: string; columns: string[]; rows: string[][] } }>;
    comparison?: { title?: string; caption?: string; columns: string[]; rows: string[][] };
    faq?: Array<{ q: string; a: string }>; cta?: { text: string; href: string };
  }` },
  reviews: { name: 'ReviewsTemplate', importPath: '@/components/templates/ReviewsTemplate', typeName: 'any', schema: `{
    title: string; intro?: string; sections?: Array<{ heading: string; paragraphs?: string[]; bullets?: string[] }>; faq?: Array<{ q: string; a: string }>;
  }` },
  roulette: { name: 'RouletteTemplate', importPath: '@/components/templates/RouletteTemplate', typeName: 'RoulettePageData', schema: `{
    title: string; intro?: string; rules?: { heading: string; paragraphs?: string[]; bullets?: string[]; table?: { columns: string[]; rows: string[][] } };
    strategy?: { heading: string; paragraphs?: string[]; bullets?: string[] };
    tables?: Array<{ title?: string; caption?: string; columns: string[]; rows: string[][] }>; tips?: string[]; faq?: Array<{ q: string; a: string }>;
  }` },
  sitemap: { name: 'SitemapTemplate', importPath: '@/components/templates/SitemapTemplate', typeName: 'SitemapPageData', schema: `{
    title: string; intro?: string; tree: Array<{ title?: string; nodes: Array<{ href: string; label: string; children?: any[] }> }>;
  }` },
  slots: { name: 'SlotsTemplate', importPath: '@/components/templates/SlotsTemplate', typeName: 'SlotsPageData', schema: `{
    title: string; intro?: string; featured?: { title?: string; items: Array<{ name: string; href?: string; img?: string; provider?: string; rtp?: string; volatility?: string; maxMultiplier?: string; rating?: number; badge?: string }> };
    rankings?: { title: string; items: Array<{ rank?: number; slot: { name: string; href?: string; img?: string; provider?: string; rtp?: string; volatility?: string; maxMultiplier?: string; rating?: number; badge?: string }; facts?: Array<{ label: string; value: string }>; summary?: string; cta?: { text: string; href: string } }> };
    criteria?: string[]; tables?: Array<{ title?: string; caption?: string; columns: string[]; rows: string[][] }>;
    providers?: Array<{ provider: string; description?: string; picks?: Array<{ name: string; href?: string; note?: string }> }>; tips?: string[]; prosCons?: { pros: string[]; cons: string[] };
    glossary?: { title?: string; caption?: string; columns: string[]; rows: string[][] }; faq?: Array<{ q: string; a: string }>; cta?: { text: string; href: string };
  }` },
  'vr-casinos': { name: 'VRCasinosTemplate', importPath: '@/components/templates/VRCasinosTemplate', typeName: 'VRCasinosPageData', schema: `{
    title: string; intro?: string; featured?: { title?: string; items: Array<{ name: string; href?: string; img?: string; provider?: string; rating?: number }> };
    requirements?: string[]; tips?: string[]; faq?: Array<{ q: string; a: string }>;
  }` },
};

function pickTemplate(category) {
  const c = TEMPLATE_MAP[category];
  if (c) return c;
  // Fallback to GuideTemplate
  return {
    name: 'GuideTemplate',
    importPath: '@/components/templates/GuideTemplate',
    typeName: 'GuidePageData',
    schema: `{
      title: string; intro?: string; criteria?: string[]; sections?: Array<{ heading: string; paragraphs?: string[]; bullets?: string[]; table?: { columns: string[]; rows: string[][] } }>; tips?: string[]; prosCons?: { pros: string[]; cons: string[] }; faq?: Array<{ q: string; a: string }>;
    }`,
  };
}

async function scrapeMarkdown(url) {
  const endpoint = `${FIRECRAWL_BASE}/v1/scrape`;
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${FIRECRAWL_KEY}` },
    body: JSON.stringify({ url, formats: ['markdown'], onlyMainContent: true }),
  });
  if (!res.ok) throw new Error(`Firecrawl error ${res.status}: ${await res.text()}`);
  const data = await res.json();
  // API can return { markdown } or array under data. Normalize.
  const md = data?.markdown || data?.data?.[0]?.markdown || '';
  return md;
}

function buildPrompt(route, url, schema, scraped) {
  return `あなたは日本語のオンラインカジノ・アフィリエイトサイトのシニア編集者です。以下のスクレイピング内容をもとに、指定スキーマに完全準拠する高品質で網羅的な日本語JSONを生成してください。出力はJSONオブジェクトのみ（コードフェンスや説明なし）。

編集方針（厳守）:
- アフィリエイト/SEOに強い構成（E-E-A-T）: 具体的・検証可能・過度な誇張なし・責任あるギャンブルの注意を適宜含める。
- 薄い内容は不可。意図語（比較/おすすめ/選び方/使い方/料金/手数料/安全性/よくある質問/結論）を自然にカバーし、800〜1,500語相当の情報量を目安に要点を構造化。
- 可能な限り表・箇条書き・比較（pros/cons・fee表・仕様表・チェックリスト）を用いて可読性を上げる。
- CTAは内部リンク（例: /offers, /reviews, /payment, カテゴリ内の下層）を活用。誇大表現ではなく「詳しく見る」「ランキングを見る」等の健全な誘導文。
- 用語は日本語で自然に。英語名は補助的に括弧併記可。
- 事実不明点は一般的ベストプラクティスで補完しつつ、断言を避ける但し書きを付与。

出力対象のJSONスキーマ（例。未使用フィールドは省略可。厳密準拠）:
${schema}

ページ情報:
- ルート: ${route}
- 参照元: ${url}

スクレイピングMarkdown（要約・再構成してよい）:
---
${scraped.slice(0, 25000)}
---`;
}

async function callGemini(prompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(GEMINI_MODEL)}:generateContent?key=${encodeURIComponent(GEMINI_KEY)}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents: [{ role: 'user', parts: [{ text: prompt }] }], generationConfig: { temperature: 0.3, maxOutputTokens: 4096 } }),
  });
  if (!res.ok) throw new Error(`Gemini API error ${res.status}: ${await res.text()}`);
  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
  return text;
}

function extractJson(text) {
  const fenced = text.match(/```(?:json)?\n([\s\S]*?)```/);
  const raw = fenced ? fenced[1] : text;
  const start = raw.indexOf('{');
  const end = raw.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error('Gemini応答にJSONオブジェクトが見つかりません');
  return JSON.parse(raw.slice(start, end + 1));
}

async function fixWithGemini(invalidJsonText, schema) {
  const repairPrompt = `次のテキストはJSONのつもりですが構文エラーがあります。指定スキーマに合うように修正し、有効なJSONオブジェクトのみを返してください。ダブルクォート、末尾カンマなし、コメント禁止。\n\nスキーマ参考:\n${schema}\n\n修正対象:\n---\n${invalidJsonText.slice(0, 20000)}\n---`;
  const fixed = await callGemini(repairPrompt);
  return fixed;
}

function writePageTsx(route, tpl, payload, dryRun = false) {
  const segs = route.split('/').filter(Boolean);
  const dir = path.join(process.cwd(), 'app', ...segs);
  const file = path.join(dir, 'page.tsx');
  const importLine = `import ${tpl.name}, { ${tpl.typeName !== 'any' ? tpl.typeName : ''} } from "${tpl.importPath}";`;
  const typeAnnot = tpl.typeName === 'any' ? '' : `: ${tpl.typeName}`;
  const dataSrc = `const data${typeAnnot} = ${JSON.stringify({ title: payload.title || pascalCase(segs[segs.length - 1]), ...payload }, null, 2)};`;
  const body = `${importLine}

${dataSrc}

export default function Page() {
  return <${tpl.name} data={data} canonicalPath="${route}" />;
}
`;
  if (dryRun) {
    console.log(`--- DRY WRITE ${file} ---`);
    console.log(body.slice(0, 500) + (body.length > 500 ? '\n...\n' : ''));
    return;
  }
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file, body, 'utf8');
  console.log('wrote', path.relative(process.cwd(), file));
}

function collectRoutes({ onlyCategory, onlyRoute, excludeCategories = [] }) {
  const appDir = path.join(process.cwd(), 'app');
  const cats = fs.readdirSync(appDir).filter((d) => !d.startsWith('.') && fs.statSync(path.join(appDir, d)).isDirectory());
  const routes = [];
  for (const c of cats) {
    if (onlyCategory && c !== onlyCategory) continue;
    if (excludeCategories.includes(c)) continue;
    const catDir = path.join(appDir, c);
    // Subpages (directories with page.tsx)
    const subs = fs.readdirSync(catDir).filter((s) => fs.statSync(path.join(catDir, s)).isDirectory());
    for (const s of subs) {
      const pageFile = path.join(catDir, s, 'page.tsx');
      if (fs.existsSync(pageFile)) {
        const route = `/${c}/${s}`;
        if (onlyRoute && route !== onlyRoute) continue;
        routes.push(route);
      }
    }
  }
  return routes;
}

async function main() {
  const args = process.argv.slice(2);
  const onlyCategory = args.includes('--category') ? args[args.indexOf('--category') + 1] : null;
  const onlyRoute = args.includes('--route') ? args[args.indexOf('--route') + 1] : null;
  const dryRun = args.includes('--dry');
  const doAll = args.includes('--all');
  // Collect repeatable --exclude-category flags
  const excludeCategories = [];
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--exclude-category' && args[i + 1]) {
      excludeCategories.push(args[i + 1]);
      i++;
    }
  }
  if (!doAll && !onlyCategory && !onlyRoute) {
    console.log('Specify --all or --category <name> or --route /cat/page');
    process.exit(1);
  }
  const routes = collectRoutes({ onlyCategory, onlyRoute, excludeCategories });
  for (const route of routes) {
    const [category, page] = route.split('/').filter(Boolean);
    const tpl = pickTemplate(category);
    const url = `https://japanesecasino.com/${category}/${page}`;
    try {
      console.log('Scrape', url);
      const md = await scrapeMarkdown(url);
      console.log('Rewrite with Gemini for', route, 'using', tpl.name);
      let prompt = buildPrompt(route, url, tpl.schema, md) + "\n\n厳密要件: ダブルクォートのみ, 末尾カンマなし, コメント禁止, JSON以外の文字列禁止。";
      let out = await callGemini(prompt);
      let json;
    try {
      json = extractJson(out);
    } catch (e1) {
      console.warn('JSON parse failed, retrying with stricter instruction for', route);
      try {
        const fixPrompt = buildPrompt(route, url, tpl.schema, md) + "\n\n前回の出力はJSONとして不正でした。厳密に有効なJSONオブジェクトのみを返してください（ダブルクォート、末尾カンマなし、コメント禁止）。";
        out = await callGemini(fixPrompt);
        json = extractJson(out);
      } catch (e2) {
        console.warn('Second parse failed, asking Gemini to repair raw JSON for', route);
        try {
          const repaired = await fixWithGemini(out, tpl.schema);
          json = extractJson(repaired);
        } catch (e3) {
          // Persist the bad output for inspection
          const errDir = path.join(process.cwd(), 'content', 'errors');
          fs.mkdirSync(errDir, { recursive: true });
          const fname = route.replace(/\//g, '_').replace(/^_/, '') + '.json.txt';
          fs.writeFileSync(path.join(errDir, fname), out, 'utf8');
          throw e3;
        }
      }
    }
      writePageTsx(route, tpl, json, dryRun);
    } catch (err) {
      console.error('Failed for', route, err.message);
    }
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
