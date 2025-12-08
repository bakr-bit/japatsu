/**
 * Script to convert markdown links in content files to inline JSX.
 *
 * Transforms:
 * - [text](https://...) → <a href="..." target="_blank" rel="noopener noreferrer">text</a>
 * - [text](/path) → <Link href="/path">text</Link>
 * - [**text**](url) → <a href="..."><strong>text</strong></a>
 *
 * Usage: npx tsx scripts/convert-markdown-links.ts [--dry-run]
 */

import * as fs from "fs";
import * as path from "path";

const CONTENT_DIR = path.join(__dirname, "../content/data");
const DRY_RUN = process.argv.includes("--dry-run");

interface ConversionStats {
  filesProcessed: number;
  filesModified: number;
  linksConverted: number;
  errors: string[];
}

const stats: ConversionStats = {
  filesProcessed: 0,
  filesModified: 0,
  linksConverted: 0,
  errors: [],
};

/**
 * Recursively find all .tsx files in a directory
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
 * Check if a URL is external (starts with http:// or https://)
 */
function isExternalUrl(url: string): boolean {
  return url.startsWith("http://") || url.startsWith("https://");
}

/**
 * Convert a single markdown link to JSX
 */
function convertLinkToJsx(linkText: string, url: string): string {
  // Check for bold markers in link text
  let text = linkText;
  let hasBold = false;

  if (text.startsWith("**") && text.endsWith("**")) {
    text = text.slice(2, -2);
    hasBold = true;
  }

  if (isExternalUrl(url)) {
    if (hasBold) {
      return `<a href="${url}" target="_blank" rel="noopener noreferrer"><strong>${text}</strong></a>`;
    }
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`;
  } else {
    if (hasBold) {
      return `<Link href="${url}"><strong>${text}</strong></Link>`;
    }
    return `<Link href="${url}">${text}</Link>`;
  }
}

/**
 * Check if a string contains a valid markdown link pattern
 */
function containsMarkdownLink(str: string): boolean {
  // Must have [text](url) pattern where text doesn't contain unbalanced brackets
  // and url is a valid URL-like string
  const pattern = /\[[^\]]+\]\([^)]+\)/;
  return pattern.test(str);
}

/**
 * Convert all markdown links in a string to JSX.
 */
function convertMarkdownLinksInString(str: string): {
  result: string;
  hasInternalLinks: boolean;
  linkCount: number;
} {
  let result = str;
  let hasInternalLinks = false;
  let linkCount = 0;

  // Pattern for markdown links: [text](url)
  // Be more restrictive: text can't contain ] and url can't contain )
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;

  result = result.replace(linkPattern, (_match, linkText, url) => {
    // Skip if this looks like part of a URL (has [?] in it)
    if (url.includes("[") || url.includes("]")) {
      return _match;
    }

    linkCount++;

    if (!isExternalUrl(url)) {
      hasInternalLinks = true;
    }

    return convertLinkToJsx(linkText, url);
  });

  // Handle bold wrapping links: **<a>text</a>** or **<Link>text</Link>**
  result = result.replace(
    /\*\*(<(?:a|Link)[^>]*>)([^<]*(?:<strong>[^<]*<\/strong>[^<]*)?)(<\/(?:a|Link)>)\*\*/g,
    "<strong>$1$2$3</strong>"
  );

  return { result, hasInternalLinks, linkCount };
}

/**
 * Process a single file and convert markdown links to JSX
 */
function processFile(filePath: string): boolean {
  try {
    const content = fs.readFileSync(filePath, "utf-8");

    // Quick check if file contains markdown links
    if (!content.includes("](")) {
      return false;
    }

    let modified = false;
    let hasInternalLinks = false;
    let totalLinks = 0;

    // More conservative approach: only match complete string literals
    // that are clearly array elements (preceded by [ or ,)
    // Match strings in arrays like: "text with [link](url) here"
    // The key is to only match strings that are clearly paragraph/description content

    // Pattern: Match double-quoted strings that contain markdown links
    // But be more careful - only match if the string contains a proper markdown link
    const lines = content.split("\n");
    const newLines: string[] = [];

    for (const line of lines) {
      // Only process lines that look like array elements with strings containing markdown links
      // Pattern: whitespace + "string content" + possible comma
      const stringMatch = line.match(/^(\s*)"([^"]*\[[^\]]+\]\([^)]+\)[^"]*)"(,?)$/);

      if (stringMatch && containsMarkdownLink(stringMatch[2])) {
        const [, indent, stringContent, comma] = stringMatch;
        const {
          result,
          hasInternalLinks: hasInternal,
          linkCount,
        } = convertMarkdownLinksInString(stringContent);

        if (result !== stringContent && result.includes("<")) {
          modified = true;
          totalLinks += linkCount;
          if (hasInternal) {
            hasInternalLinks = true;
          }
          newLines.push(`${indent}<>${result}</>${comma}`);
        } else {
          newLines.push(line);
        }
      } else {
        newLines.push(line);
      }
    }

    if (!modified) {
      return false;
    }

    let newContent = newLines.join("\n");

    // Add Link import if needed and not already present
    if (
      hasInternalLinks &&
      !content.includes('from "next/link"') &&
      !content.includes("from 'next/link'")
    ) {
      // Find the first import statement
      const importMatch = newContent.match(/^import\s+/m);
      if (importMatch && importMatch.index !== undefined) {
        newContent =
          newContent.slice(0, importMatch.index) +
          'import Link from "next/link";\n' +
          newContent.slice(importMatch.index);
      }
    }

    stats.linksConverted += totalLinks;

    if (!DRY_RUN) {
      fs.writeFileSync(filePath, newContent, "utf-8");
    }

    const relPath = path.relative(process.cwd(), filePath);
    console.log(
      `${DRY_RUN ? "[DRY RUN] " : ""}Converted ${totalLinks} links in ${relPath}`
    );

    return true;
  } catch (error) {
    stats.errors.push(`${filePath}: ${error}`);
    return false;
  }
}

/**
 * Main function
 */
function main() {
  console.log("Converting markdown links to JSX...\n");
  console.log(`Content directory: ${CONTENT_DIR}`);
  console.log(`Dry run: ${DRY_RUN}\n`);

  // Find all .tsx files
  const files = findTsxFiles(CONTENT_DIR);
  console.log(`Found ${files.length} .tsx files\n`);

  for (const file of files) {
    stats.filesProcessed++;
    if (processFile(file)) {
      stats.filesModified++;
    }
  }

  // Print summary
  console.log("\n=== Summary ===");
  console.log(`Files processed: ${stats.filesProcessed}`);
  console.log(`Files modified: ${stats.filesModified}`);
  console.log(`Links converted: ${stats.linksConverted}`);

  if (stats.errors.length > 0) {
    console.log(`\nErrors (${stats.errors.length}):`);
    stats.errors.forEach((err) => console.log(`  - ${err}`));
  }

  if (DRY_RUN) {
    console.log("\n[DRY RUN] No files were actually modified.");
    console.log("Run without --dry-run to apply changes.");
  }
}

main();
