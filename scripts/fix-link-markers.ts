/**
 * Script to fix LINK_NEEDS_REPAIR markers by inferring URLs from link text.
 *
 * Usage: npx tsx scripts/fix-link-markers.ts [--dry-run]
 */

import * as fs from "fs";
import * as path from "path";

const CONTENT_DIR = path.join(__dirname, "../content/data");
const DRY_RUN = process.argv.includes("--dry-run");

// Common link text to URL mappings
const LINK_MAPPINGS: Record<string, string> = {
  // Casino reviews
  "ベラジョンカジノ": "https://www.casinotsu.com/reviews/vera-john",
  "ベラジョン": "https://www.casinotsu.com/reviews/vera-john",
  "オンカジ": "https://www.casinotsu.com/",
  "カジノミー": "https://www.casinotsu.com/reviews/casino-me",
  "ミスティーノ": "https://www.casinotsu.com/reviews/mystino",
  "コニベット": "https://www.casinotsu.com/reviews/konibet",
  "ビットカジノ": "https://www.casinotsu.com/reviews/bitcasino",
  "インターカジノ": "https://www.casinotsu.com/reviews/intercasino",
  "エルドアカジノ": "https://www.casinotsu.com/reviews/eldoah",
  "ワンダーカジノ": "https://www.casinotsu.com/reviews/wonder-casino",
  "ボンズカジノ": "https://www.casinotsu.com/reviews/bons",
  "カジ旅": "https://www.casinotsu.com/reviews/casitabi",
  "ライブカジノハウス": "https://www.casinotsu.com/reviews/livecasinohouse",
  "カジノシークレット": "https://www.casinotsu.com/reviews/casino-secret",
  "遊雅堂": "https://www.casinotsu.com/reviews/yuugado",

  // Bonus types
  "入金不要ボーナス": "https://www.casinotsu.com/bonuses/no-deposit",
  "入金不要フリースピン": "https://www.casinotsu.com/free-spins",
  "フリースピン": "https://www.casinotsu.com/free-spins",
  "ウェルカムボーナス": "https://www.casinotsu.com/bonuses/welcome-bonus",
  "ボーナス": "https://www.casinotsu.com/bonuses",
  "キャッシュバック": "https://www.casinotsu.com/bonuses/cashback",
  "VIPプログラム": "https://www.casinotsu.com/bonuses/vip",

  // Game types
  "ブラックジャック": "https://www.casinotsu.com/blackjack",
  "ルーレット": "https://www.casinotsu.com/roulette",
  "バカラ": "https://www.casinotsu.com/baccarat",
  "ポーカー": "https://www.casinotsu.com/poker",
  "スロット": "https://www.casinotsu.com/slots",
  "カジノスロット": "https://www.casinotsu.com/slots",
  "ライブカジノ": "https://www.casinotsu.com/live-casino",

  // Pages
  "決済方法": "https://www.casinotsu.com/payment",
  "カスタマーサポート": "https://www.casinotsu.com/customer-support",
  "日本語のオンラインカジノサポート": "https://www.casinotsu.com/customer-support",
  "キャンペーン": "https://www.casinotsu.com/offers",
  "ガイド": "https://www.casinotsu.com/guides",

  // External
  "Gamblingtherapy.org/ja": "https://gamblingtherapy.org/ja/",
  "Gamblingtherapy": "https://gamblingtherapy.org/ja/",

  // Providers
  "Pragmatic Play": "https://www.casinotsu.com/providers/pragmatic-play",
  "Evolution Gaming": "https://www.casinotsu.com/providers/evolution",
  "Microgaming": "https://www.casinotsu.com/providers/microgaming",
  "NetEnt": "https://www.casinotsu.com/providers/netent",
};

interface Stats {
  filesProcessed: number;
  filesModified: number;
  linksFixed: number;
  linksRemaining: number;
}

const stats: Stats = {
  filesProcessed: 0,
  filesModified: 0,
  linksFixed: 0,
  linksRemaining: 0,
};

function findTsxFiles(dir: string): string[] {
  const files: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".tsx")) {
      files.push(fullPath);
    }
  }
  return files;
}

function findBestMatch(linkText: string): string | null {
  // Remove bold markers
  const cleanText = linkText.replace(/\*\*/g, "").trim();

  // Direct match
  if (LINK_MAPPINGS[cleanText]) {
    return LINK_MAPPINGS[cleanText];
  }

  // Partial match (link text contains a known pattern)
  for (const [pattern, url] of Object.entries(LINK_MAPPINGS)) {
    if (cleanText.includes(pattern)) {
      return url;
    }
  }

  // Pattern contains link text
  for (const [pattern, url] of Object.entries(LINK_MAPPINGS)) {
    if (pattern.includes(cleanText) && cleanText.length > 2) {
      return url;
    }
  }

  return null;
}

function processFile(filePath: string): boolean {
  try {
    let content = fs.readFileSync(filePath, "utf-8");

    if (!content.includes("LINK_NEEDS_REPAIR")) {
      return false;
    }

    const originalContent = content;
    let fixedCount = 0;
    let remainingCount = 0;

    // Find all [text](LINK_NEEDS_REPAIR) patterns
    const linkPattern = /\[([^\]]+)\]\(LINK_NEEDS_REPAIR\)/g;

    content = content.replace(linkPattern, (match, linkText) => {
      const url = findBestMatch(linkText);
      if (url) {
        fixedCount++;
        return `[${linkText}](${url})`;
      } else {
        remainingCount++;
        return match; // Keep as-is
      }
    });

    if (content !== originalContent) {
      stats.linksFixed += fixedCount;
      stats.linksRemaining += remainingCount;

      if (!DRY_RUN) {
        fs.writeFileSync(filePath, content, "utf-8");
      }

      const relPath = path.relative(process.cwd(), filePath);
      console.log(
        `${DRY_RUN ? "[DRY RUN] " : ""}Fixed ${fixedCount} links in ${relPath} (${remainingCount} remaining)`
      );
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}: ${error}`);
    return false;
  }
}

function main() {
  console.log("Fixing LINK_NEEDS_REPAIR markers...\n");
  console.log(`Content directory: ${CONTENT_DIR}`);
  console.log(`Dry run: ${DRY_RUN}\n`);

  const files = findTsxFiles(CONTENT_DIR);
  console.log(`Found ${files.length} .tsx files\n`);

  for (const file of files) {
    stats.filesProcessed++;
    if (processFile(file)) {
      stats.filesModified++;
    }
  }

  console.log("\n=== Summary ===");
  console.log(`Files processed: ${stats.filesProcessed}`);
  console.log(`Files modified: ${stats.filesModified}`);
  console.log(`Links fixed: ${stats.linksFixed}`);
  console.log(`Links still needing manual repair: ${stats.linksRemaining}`);

  if (DRY_RUN) {
    console.log("\n[DRY RUN] No files were actually modified.");
  }
}

main();
