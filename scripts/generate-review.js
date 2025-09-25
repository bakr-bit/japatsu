#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { z } = require("zod");

const prettier = (() => {
  try {
    return require("prettier");
  } catch (err) {
    return null;
  }
})();

async function formatWithPrettier(source, parser = "typescript") {
  if (!prettier) {
    return source;
  }
  const result = prettier.format(source, { parser });
  return typeof result?.then === "function" ? await result : result;
}

function pascalCase(input) {
  return input
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function normalizeCta(value) {
  if (!value) return undefined;
  if (Array.isArray(value)) {
    const items = value
      .map((item) => normalizeCta(item))
      .filter((item) => Boolean(item));
    return items.length ? items : undefined;
  }
  const text = value.text ?? value.label ?? value.title;
  const href = value.href ?? value.url;
  if (!text && !href) return undefined;
  return {
    text: text ?? "",
    href: href ?? "",
  };
}

function deriveNameFromTitle(title, slug) {
  if (!title) {
    return slug
      .split(/[-_/]+/)
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  }
  const parenMatch = title.match(/（([^）]+)）/);
  if (parenMatch && /[A-Za-z0-9]/.test(parenMatch[1])) {
    return parenMatch[1].trim();
  }
  let base = title;
  base = base.split("—")[0];
  base = base.split("-")[0];
  base = base.split("：")[0];
  base = base.split(":")[0];
  const japaneseParen = base.indexOf("（");
  if (japaneseParen !== -1) {
    base = base.slice(0, japaneseParen);
  }
  const normalParen = base.indexOf("(");
  if (normalParen !== -1) {
    base = base.slice(0, normalParen);
  }
  base = base.replace(/レビュー$/u, "");
  base = base.replace(/徹底$/u, "");
  base = base.trim();
  if (base) return base;
  if (parenMatch) return parenMatch[1].trim();
  return slug
    .split(/[-_/]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function deriveBonusHighlight(data) {
  const welcome = data.bonuses?.welcomeRows ?? [];
  if (welcome.length) {
    const first = welcome[0];
    const parts = [];
    if (first.percent) parts.push(first.percent.trim());
    if (first.cap) parts.push(first.cap.trim());
    if (parts.length) {
      return parts.join(" ");
    }
  }
  const offer = data.offers?.[0];
  if (offer?.highlight) return offer.highlight;
  if (offer?.title) return offer.title;
  return undefined;
}

function derivePlayHref(data) {
  if (data.cta?.href) return data.cta.href;
  const introCta = normalizeCta(data.intro?.ctas)?.find((cta) => cta.href);
  if (introCta) return introCta.href;
  const extraCta = normalizeCta(data.extraLinks)?.find((cta) => cta.href);
  if (extraCta) return extraCta.href;
  return undefined;
}

function deriveStatus(data) {
  const textSources = [data.hero?.title, ...(data.summary ?? [])].filter(Boolean);
  const combined = textSources.join("\n");
  if (/サービス終了|撤退|終了のお知らせ/.test(combined)) {
    return "retired";
  }
  return undefined;
}

function toTs(value, indent = 0) {
  const pad = "  ".repeat(indent);
  const nextPad = "  ".repeat(indent + 1);

  if (Array.isArray(value)) {
    if (!value.length) {
      return "[]";
    }
    const items = value
      .map((item) => `${nextPad}${toTs(item, indent + 1)}`)
      .join(",\n");
    return `[\n${items}\n${pad}]`;
  }

  if (value && typeof value === "object") {
    if (value.__jsx) {
      return value.__jsx;
    }
    const entries = Object.entries(value)
      .filter(([, val]) => val !== undefined && val !== null)
      .map(([key, val]) => `${nextPad}${key}: ${toTs(val, indent + 1)}`);
    if (!entries.length) {
      return "{}";
    }
    return `{
${entries.join(",\n")}
${pad}}`;
  }

  if (typeof value === "string") {
    return JSON.stringify(value);
  }

  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }

  if (value === null) {
    return "null";
  }

  return "undefined";
}

const CTAInputSchema = z
  .object({
    text: z.string().optional(),
    label: z.string().optional(),
    title: z.string().optional(),
    href: z.string().optional(),
    url: z.string().optional(),
  })
  .transform((raw) => {
    const text = raw.text ?? raw.label ?? raw.title ?? "";
    const href = raw.href ?? raw.url ?? "";
    return { text, href };
  });

const ScoreBreakdownSchema = z.object({
  label: z.string(),
  percent: z.union([z.number(), z.string()]).transform((value, ctx) => {
    if (typeof value === "number") {
      return value;
    }
    const numeric = Number(value.replace(/[^0-9.\-]+/g, ""));
    if (Number.isFinite(numeric)) {
      return numeric;
    }
    ctx.addIssue({ code: z.ZodIssueCode.custom, message: "scoreBreakdown.percent must be numeric" });
    return z.NEVER;
  }),
  note: z.string().optional(),
});

const PaymentMethodSchema = z.object({
  name: z.string(),
  icon: z.string().optional(),
  href: z.string().optional(),
});

const PaymentCardSchema = PaymentMethodSchema.extend({
  badge: z.string().optional(),
  note: z.string().optional(),
});

const BonusRowSchema = z.object({
  depositNumber: z.string(),
  percent: z.string(),
  cap: z.string().optional(),
  code: z.string().optional(),
});

const BonusSpinsSchema = z.object({
  summary: z.string(),
  schedule: z.array(z.string()).optional(),
  warning: z.string().optional(),
});

const OfferSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  highlight: z.string().optional(),
});

const FactSchema = z.object({
  label: z.string(),
  value: z.string(),
});

const FaqSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

const TextBlockSchema = z.object({
  title: z.string().optional(),
  kicker: z.string().optional(),
  paragraphs: z.array(z.string()).optional(),
  bullets: z.array(z.string()).optional(),
  highlight: z.string().optional(),
  cta: CTAInputSchema.optional(),
  accent: z.string().optional(),
});

const ReviewJsonSchema = z.object({
  hero: z.object({
    title: z.string(),
    subheading: z.string().optional(),
    description: z.string().optional(),
    score: z.number(),
    scoreMax: z.number().optional(),
    scoreBreakdown: z.array(ScoreBreakdownSchema).optional(),
    highlights: z.array(z.string()).optional(),
    watchouts: z.array(z.string()).optional(),
    avatarSrc: z.string().optional(),
    avatarAlt: z.string().optional(),
  }),
  payments: z
    .object({
      featured: z.array(PaymentCardSchema).optional(),
      deposits: z.array(PaymentMethodSchema).optional(),
      withdrawals: z.array(PaymentMethodSchema).optional(),
      notes: z.array(z.string()).optional(),
      payoutNotes: z.array(z.string()).optional(),
    })
    .optional(),
  bonuses: z
    .object({
      overview: z.string().optional(),
      noDeposit: z.string().optional(),
      extraSpins: BonusSpinsSchema.optional(),
      welcome: z.array(BonusRowSchema).optional(),
      welcomeRows: z.array(BonusRowSchema).optional(),
      conditions: z.array(z.string()).optional(),
      prohibitedGames: z.array(z.string()).optional(),
    })
    .optional(),
  offers: z.array(OfferSchema).optional(),
  casinoFacts: z.array(FactSchema).optional(),
  facts: z.array(FactSchema).optional(),
  intro: z
    .object({
      paragraphs: z.array(z.string()).optional(),
      ctas: z.array(CTAInputSchema).optional(),
    })
    .optional(),
  games: z.array(z.string()).optional(),
  features: z.array(z.string()).optional(),
  paymentsNote: z.string().optional(),
  security: z.array(z.string()).optional(),
  responsiblePlay: z.array(z.string()).optional(),
  complaintStats: z.array(z.string()).optional(),
  awards: z.array(z.string()).optional(),
  restrictedCountries: z.array(z.string()).optional(),
  userConcerns: z.array(z.string()).optional(),
  summary: z.array(z.string()).optional(),
  extraLinks: z.array(CTAInputSchema).optional(),
  faq: z.array(FaqSchema).optional(),
  cta: CTAInputSchema.optional(),
  textBlocks: z.array(TextBlockSchema).optional(),
  status: z.enum(["active", "retired"]).optional(),
  authorCommentary: z
    .object({
      author: z.string(),
      commentary: z.string(),
      authorHref: z.string().optional(),
      avatarSrc: z.string().optional(),
      role: z.string().optional(),
    })
    .optional(),
});

function transformReviewData(data) {
  const hero = {
    title: data.hero.title,
    subheading: data.hero.subheading,
    description: data.hero.description,
    score: data.hero.score,
    scoreMax: data.hero.scoreMax,
    scoreBreakdown: data.hero.scoreBreakdown,
    highlights: data.hero.highlights,
    watchouts: data.hero.watchouts,
    avatarSrc: data.hero.avatarSrc,
    avatarAlt: data.hero.avatarAlt,
  };

  const payments = data.payments
    ? {
        featured: data.payments.featured,
        deposits: data.payments.deposits,
        withdrawals: data.payments.withdrawals,
        notes: data.payments.notes ?? data.payments.payoutNotes,
      }
    : undefined;

  const bonuses = data.bonuses
    ? {
        overview: data.bonuses.overview,
        noDeposit: data.bonuses.noDeposit,
        extraSpins: data.bonuses.extraSpins,
        welcomeRows: data.bonuses.welcomeRows ?? data.bonuses.welcome,
        conditions: data.bonuses.conditions,
        prohibitedGames: data.bonuses.prohibitedGames,
      }
    : undefined;

  const intro = data.intro
    ? {
        paragraphs: data.intro.paragraphs,
        ctas: normalizeCta(data.intro.ctas),
      }
    : undefined;

  const textBlocks = data.textBlocks
    ? data.textBlocks.map((block) => ({
        ...block,
        cta: normalizeCta(block.cta),
      }))
    : undefined;

  const extraLinks = normalizeCta(data.extraLinks);

  const transformed = {
    hero,
    payments,
    bonuses,
    offers: data.offers,
    facts: data.facts ?? data.casinoFacts,
    intro,
    games: data.games,
    features: data.features,
    paymentsNote: data.paymentsNote,
    security: data.security,
    responsiblePlay: data.responsiblePlay,
    complaintStats: data.complaintStats,
    awards: data.awards,
    restrictedCountries: data.restrictedCountries,
    userConcerns: data.userConcerns,
    summary: data.summary,
    extraLinks,
    faq: data.faq,
    cta: normalizeCta(data.cta),
    textBlocks,
    authorCommentary: data.authorCommentary,
  };

  return transformed;
}

async function templateContentModule(varName, contentObject) {
  const objectLiteral = toTs(contentObject, 1);
  const source = `import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const ${varName}: ReviewPageContent = ${objectLiteral};
`;
  return formatWithPrettier(source, "typescript");
}

async function templatePageModule(varName, slug) {
  const source = `import ReviewDetailTemplate from "@/components/templates/ReviewDetailTemplate";
import { ${varName} } from "@/content/reviews/${slug}";

export default function Page() {
  return <ReviewDetailTemplate content={${varName}} />;
}
`;
  return formatWithPrettier(source, "typescript");
}

function ensureDirectory(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function updateSummaryIndex({ slug, varName, reviewData }) {
  const indexPath = path.join(process.cwd(), "content", "reviews", "index.ts");
  if (!fs.existsSync(indexPath)) {
    return;
  }

  const originalSource = fs.readFileSync(indexPath, "utf8");
  const lines = originalSource.split("\n");

  const importLine = `import { ${varName} } from "./${slug}";`;
  if (!lines.some((line) => line.trim() === importLine)) {
    const lastImportIndex = lines.reduce((acc, line, index) => (line.startsWith("import ") ? index : acc), -1);
    const insertIndex = lastImportIndex >= 0 ? lastImportIndex + 1 : 0;
    lines.splice(insertIndex, 0, importLine);
  }

  const slugMarker = `slug: ${JSON.stringify(slug)}`;
  if (!lines.some((line) => line.includes(slugMarker))) {
    const summaryStart = lines.findIndex((line) => line.includes("export const REVIEW_SUMMARIES"));
    if (summaryStart !== -1) {
      let arrayStart = -1;
      for (let i = summaryStart; i < lines.length; i += 1) {
        if (lines[i].includes("[")) {
          arrayStart = i;
          break;
        }
      }
      if (arrayStart !== -1) {
        let depth = 0;
        let closingIndex = -1;
        for (let i = arrayStart; i < lines.length; i += 1) {
          const segment = lines[i];
          depth += (segment.match(/\[/g) ?? []).length;
          depth -= (segment.match(/\]/g) ?? []).length;
          if (depth === 0) {
            closingIndex = i;
            break;
          }
        }
        if (closingIndex !== -1) {
          const indent = "  ";
          const name = deriveNameFromTitle(reviewData.hero.title, slug);
          const bonusHighlight = deriveBonusHighlight(reviewData);
          const playHrefFallback = derivePlayHref(reviewData);
          const status = reviewData.status ?? deriveStatus(reviewData);

          const summaryLines = [
            `${indent}{`,
            `${indent}  slug: ${JSON.stringify(slug)},`,
            `${indent}  name: ${JSON.stringify(name)},`,
            `${indent}  title: ${varName}.hero.title,`,
            `${indent}  subheading: ${varName}.hero.subheading,`,
            `${indent}  description: ${varName}.hero.description,`,
            `${indent}  summary: ${varName}.summary?.[0] ?? "",`,
            `${indent}  rating: ${varName}.hero.score,`,
            `${indent}  ratingMax: ${varName}.hero.scoreMax ?? 5,`,
          ];

          if (bonusHighlight) {
            summaryLines.push(`${indent}  bonusHighlight: ${JSON.stringify(bonusHighlight)},`);
          }

          if (playHrefFallback) {
            summaryLines.push(
              `${indent}  playHref: ${varName}.cta?.href ?? ${JSON.stringify(playHrefFallback)},`
            );
          } else {
            summaryLines.push(`${indent}  playHref: ${varName}.cta?.href,`);
          }

          if (status) {
            summaryLines.push(`${indent}  status: ${JSON.stringify(status)},`);
          }

          summaryLines.push(`${indent}},`);

          lines.splice(closingIndex, 0, ...summaryLines);
        }
      }
    }
  }

  const exportLine = `export { ${varName} } from "./${slug}";`;
  if (!lines.some((line) => line.trim() === exportLine)) {
    const lastExportIndex = lines.reduce((acc, line, index) => (line.startsWith("export { review") ? index : acc), -1);
    if (lastExportIndex !== -1) {
      lines.splice(lastExportIndex + 1, 0, exportLine);
    } else {
      lines.push(exportLine);
    }
  }

  const formatted = await formatWithPrettier(lines.join("\n"), "typescript");
  fs.writeFileSync(indexPath, formatted);
}

async function generateForFile(filePath) {
  const absolutePath = path.resolve(filePath);
  const slug = path.basename(absolutePath, path.extname(absolutePath));
  const jsonRaw = fs.readFileSync(absolutePath, "utf8");
  let parsed;
  try {
    parsed = JSON.parse(jsonRaw);
  } catch (error) {
    console.error(`Failed to parse JSON in ${filePath}: ${error.message}`);
    process.exitCode = 1;
    return;
  }
  const result = ReviewJsonSchema.safeParse(parsed);
  if (!result.success) {
    console.error(`Failed to parse ${filePath}`);
    console.error(result.error.format());
    process.exitCode = 1;
    return;
  }

  const reviewJson = result.data;
  const reviewData = transformReviewData(reviewJson);
  const varName = `review${pascalCase(slug)}`;

  const contentModule = await templateContentModule(varName, reviewData);
  const contentDir = path.join(process.cwd(), "content", "reviews");
  ensureDirectory(contentDir);
  const contentPath = path.join(contentDir, `${slug}.tsx`);
  fs.writeFileSync(contentPath, contentModule);

  const pageDir = path.join(process.cwd(), "app", "reviews", slug);
  ensureDirectory(pageDir);
  const pageModule = await templatePageModule(varName, slug);
  const pagePath = path.join(pageDir, "page.tsx");
  fs.writeFileSync(pagePath, pageModule);

  await updateSummaryIndex({ slug, varName, reviewData: { ...reviewData, status: reviewJson.status } });

  console.log(`Generated review for ${slug}`);
}

function collectJsonFiles(inputs) {
  const files = [];
  for (const input of inputs) {
    const absolute = path.resolve(input);
    if (!fs.existsSync(absolute)) {
      console.warn(`Path not found: ${input}`);
      continue;
    }
    const stat = fs.statSync(absolute);
    if (stat.isDirectory()) {
      const entries = fs.readdirSync(absolute);
      for (const entry of entries) {
        if (entry.endsWith(".json")) {
          files.push(path.join(absolute, entry));
        }
      }
    } else if (absolute.endsWith(".json")) {
      files.push(absolute);
    } else {
      console.warn(`Skipping non-JSON file: ${input}`);
    }
  }
  return files;
}

async function main() {
  const inputs = process.argv.slice(2);
  if (!inputs.length) {
    console.error("Usage: node scripts/generate-review.js <path/to/review.json> [...others]");
    process.exit(1);
  }
  const files = collectJsonFiles(inputs);
  if (!files.length) {
    console.error("No JSON files found for inputs");
    process.exit(1);
  }
  for (const file of files) {
    // eslint-disable-next-line no-await-in-loop
    await generateForFile(file);
  }
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
