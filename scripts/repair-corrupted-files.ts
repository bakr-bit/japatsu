/**
 * Repair script for files corrupted by the markdown-to-JSX conversion.
 *
 * Corruption patterns identified:
 * 1. `propertyName: <a href="...">` - Array [ replaced with JSX tag
 * 2. `description: "<>,` - Truncated string
 * 3. `[**text**</a>` - Broken markdown/JSX mix
 * 4. `heading: "text<>,` - String with corrupted ending
 * 5. `paragraphs: <a href="...">` - Array replaced with JSX
 *
 * Usage: npx tsx scripts/repair-corrupted-files.ts [--dry-run]
 */

import * as fs from "fs";
import * as path from "path";

const CONTENT_DIR = path.join(__dirname, "../content/data");
const DRY_RUN = process.argv.includes("--dry-run");

interface RepairStats {
  filesProcessed: number;
  filesRepaired: number;
  patternsFixed: number;
  errors: string[];
}

const stats: RepairStats = {
  filesProcessed: 0,
  filesRepaired: 0,
  patternsFixed: 0,
  errors: [],
};

/**
 * Recursively find all .tsx files
 */
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

/**
 * Check if a file appears to be corrupted
 */
function isCorrupted(content: string): boolean {
  // Check for common corruption patterns
  const corruptionPatterns = [
    /^\s*\w+:\s*<a\s+href=/m, // property: <a href= (should be property: [)
    /^\s*\w+:\s*"<>/m, // property: "<> (truncated string)
    /\[[\*\w]+<\/a>/m, // [text</a> (broken markdown/JSX)
    /<>,\s*$/m, // ending with <>,
    /^\s*paragraphs:\s*<a/m, // paragraphs: <a (array replaced)
    /^\s*educational:\s*<a/m, // educational: <a (array replaced)
    /^\s*detailedCasinos:\s*<a/m, // detailedCasinos: <a (array replaced)
  ];

  return corruptionPatterns.some((pattern) => pattern.test(content));
}

/**
 * Attempt to repair a corrupted file
 */
function repairFile(filePath: string): boolean {
  try {
    let content = fs.readFileSync(filePath, "utf-8");
    const originalContent = content;
    let fixCount = 0;

    // Pattern 1: Fix array properties that were replaced with <a> tags
    // e.g., `detailedCasinos: <a href="...">` → `detailedCasinos: [`
    // This is tricky because we need to find where the array should close
    const arrayPropertyPattern =
      /^(\s*)(detailedCasinos|educational|paragraphs|description|bullets):\s*<a\s+href="[^"]*"\s*[^>]*>/gm;
    content = content.replace(arrayPropertyPattern, (match, indent, prop) => {
      fixCount++;
      return `${indent}${prop}: [`;
    });

    // Pattern 2: Fix truncated strings like `description: "<>,`
    // → `description: "",`
    content = content.replace(
      /^(\s*\w+:\s*)"<>,/gm,
      (match, prefix) => {
        fixCount++;
        return `${prefix}"",`;
      }
    );

    // Pattern 3: Fix strings ending with <>, → ",
    content = content.replace(/<>,(\s*)$/gm, (match, ws) => {
      fixCount++;
      return `",${ws}`;
    });

    // Pattern 4: Fix broken markdown link patterns like `[**text**</a>`
    // This is a partial conversion - try to restore original markdown
    content = content.replace(
      /\[\*\*([^*]+)\*\*<\/a>/g,
      (match, text) => {
        fixCount++;
        return `[**${text}**](LINK_NEEDS_REPAIR)`;
      }
    );

    // Pattern 5: Fix `[text</a>` patterns
    content = content.replace(/\[([^\]<]+)<\/a>/g, (match, text) => {
      fixCount++;
      return `[${text}](LINK_NEEDS_REPAIR)`;
    });

    // Pattern 6: Fix orphaned </a> tags in strings
    content = content.replace(
      /"([^"]*)<\/a>([^"]*)"/g,
      (match, before, after) => {
        fixCount++;
        return `"${before}${after}"`;
      }
    );

    // Pattern 7: Fix lines that have `</a> は、` type patterns (orphaned closing tags)
    content = content.replace(/<\/a>\s*([はがをにでとも])/g, (match, particle) => {
      fixCount++;
      return particle;
    });

    // Pattern 8: Fix `<>` at start of strings that should just be quotes
    content = content.replace(/^(\s*)"<>/gm, (match, indent) => {
      fixCount++;
      return `${indent}"`;
    });

    // Pattern 9: Fix heading properties with corrupted endings
    content = content.replace(
      /^(\s*heading:\s*"[^"]*)<>,$/gm,
      (match, prefix) => {
        fixCount++;
        return `${prefix}",`;
      }
    );

    // Pattern 10: Try to close unclosed arrays after <a> tag repairs
    // Look for patterns like `propertyName: [\n    {` where there's no closing `]`
    // This is complex and risky, skip for now

    if (content !== originalContent) {
      stats.patternsFixed += fixCount;

      if (!DRY_RUN) {
        fs.writeFileSync(filePath, content, "utf-8");
      }

      const relPath = path.relative(process.cwd(), filePath);
      console.log(
        `${DRY_RUN ? "[DRY RUN] " : ""}Repaired ${fixCount} patterns in ${relPath}`
      );
      return true;
    }

    return false;
  } catch (error) {
    stats.errors.push(`${filePath}: ${error}`);
    return false;
  }
}

/**
 * Main function
 */
function main() {
  console.log("Attempting to repair corrupted files...\n");
  console.log(`Content directory: ${CONTENT_DIR}`);
  console.log(`Dry run: ${DRY_RUN}\n`);

  const files = findTsxFiles(CONTENT_DIR);
  console.log(`Found ${files.length} .tsx files\n`);

  // First pass: identify corrupted files
  const corruptedFiles: string[] = [];
  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");
    if (isCorrupted(content)) {
      corruptedFiles.push(file);
    }
  }

  console.log(`Found ${corruptedFiles.length} potentially corrupted files\n`);

  // Second pass: attempt repairs
  for (const file of corruptedFiles) {
    stats.filesProcessed++;
    if (repairFile(file)) {
      stats.filesRepaired++;
    }
  }

  // Print summary
  console.log("\n=== Summary ===");
  console.log(`Corrupted files found: ${corruptedFiles.length}`);
  console.log(`Files repaired: ${stats.filesRepaired}`);
  console.log(`Patterns fixed: ${stats.patternsFixed}`);

  if (stats.errors.length > 0) {
    console.log(`\nErrors (${stats.errors.length}):`);
    stats.errors.forEach((err) => console.log(`  - ${err}`));
  }

  if (DRY_RUN) {
    console.log("\n[DRY RUN] No files were actually modified.");
    console.log("Run without --dry-run to apply repairs.");
  }

  // List files that may still need manual repair
  console.log("\n=== Manual Review Needed ===");
  console.log(
    "After running this script, please check for 'LINK_NEEDS_REPAIR' markers"
  );
  console.log("and manually fix any remaining issues.");
}

main();
