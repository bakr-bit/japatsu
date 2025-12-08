const fs = require('fs');
const path = require('path');

// Paths
const SLOTS_DIR = './app/slots';
const APP_DIR = './app';

// Store available pages
const availablePages = {
  slots: new Set(),
  reviews: new Set(),
  providers: new Set(),
  payment: new Set(),
  casinos: new Set()
};

const stats = {
  totalFiles: 0,
  totalLinks: 0,
  brokenLinks: 0,
  fixedLinks: 0,
  removedLinks: 0,
  unfixableLinks: new Set(),
  changedFiles: []
};

// Levenshtein distance for fuzzy matching
function levenshteinDistance(str1, str2) {
  const matrix = [];

  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[str2.length][str1.length];
}

// Find best match using fuzzy matching
function findBestMatch(target, availableSet, threshold = 3) {
  const available = Array.from(availableSet);
  let bestMatch = null;
  let bestDistance = Infinity;

  for (const candidate of available) {
    const distance = levenshteinDistance(target, candidate);
    if (distance < bestDistance && distance <= threshold) {
      bestDistance = distance;
      bestMatch = candidate;
    }
  }

  // If no close match, try substring matching
  if (!bestMatch) {
    for (const candidate of available) {
      if (candidate.includes(target) || target.includes(candidate)) {
        if (Math.abs(candidate.length - target.length) < 5) {
          return candidate;
        }
      }
    }
  }

  return bestMatch;
}

// Scan directories to build available pages list
function scanAvailablePages() {
  console.log('📂 Scanning available pages...');

  // Scan slots
  if (fs.existsSync(SLOTS_DIR)) {
    const slots = fs.readdirSync(SLOTS_DIR);
    slots.forEach(slot => {
      const slotPath = path.join(SLOTS_DIR, slot);
      if (fs.statSync(slotPath).isDirectory()) {
        availablePages.slots.add(slot);
      }
    });
  }

  // Scan providers
  const providersDir = path.join(APP_DIR, 'providers');
  if (fs.existsSync(providersDir)) {
    const providers = fs.readdirSync(providersDir);
    providers.forEach(provider => {
      const providerPath = path.join(providersDir, provider);
      if (fs.statSync(providerPath).isDirectory() && provider !== '[slug]') {
        availablePages.providers.add(provider);
      }
    });
  }

  // Reviews and casinos use [slug] pattern, so we'll be less strict
  // Just check if the directory exists
  availablePages.reviews.add('[dynamic]'); // Mark as dynamic route
  availablePages.casinos.add('[dynamic]');

  console.log(`  ✓ Found ${availablePages.slots.size} slot pages`);
  console.log(`  ✓ Found ${availablePages.providers.size} provider pages`);
}

// Extract and validate links from content
function processLinks(content, filePath) {
  let modified = false;
  let fileStats = { total: 0, broken: 0, fixed: 0, removed: 0 };

  // Regex to match both HTML href attributes AND JavaScript object properties
  // Matches: href="..." and href: "..."
  const hrefRegex = /href[=:]\s*"(\/slots\/[^"]+|https:\/\/casinotsu\.com\/slots\/[^"#]+|\/providers\/[^"]+|\/reviews\/[^"]+)"/g;

  const matches = content.match(hrefRegex) || [];
  fileStats.total = matches.length;

  matches.forEach(match => {
    // Match both href="..." and href: "..."
    const hrefMatch = match.match(/href[=:]\s*"([^"]+)"/);
    if (!hrefMatch) return;

    const originalHref = hrefMatch[1];
    let linkPath = originalHref;

    // Normalize the link
    if (linkPath.startsWith('https://casinotsu.com')) {
      linkPath = linkPath.replace('https://casinotsu.com', '');
    }

    // Parse the link
    const linkMatch = linkPath.match(/^\/(slots|providers|reviews|casinos)\/([^/?#]+)/);
    if (!linkMatch) return;

    const [, type, slug] = linkMatch;

    // Check if page exists
    let pageExists = false;
    let correctedSlug = null;

    if (type === 'slots') {
      pageExists = availablePages.slots.has(slug);
      if (!pageExists) {
        // Try to find a match
        correctedSlug = findBestMatch(slug, availablePages.slots);
      }
    } else if (type === 'providers') {
      pageExists = availablePages.providers.has(slug);
      if (!pageExists) {
        correctedSlug = findBestMatch(slug, availablePages.providers);
      }
    } else if (type === 'reviews' || type === 'casinos') {
      // These use dynamic routes, assume they exist
      pageExists = true;
    }

    if (!pageExists && !correctedSlug) {
      // Remove the broken link by removing the entire object from array
      // Pattern: { href: "...", label: "..." },
      const objectPattern = new RegExp(
        '\\{[^}]*' + match.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[^}]*\\},?\\s*',
        'g'
      );

      const beforeRemoval = content;
      content = content.replace(objectPattern, '');

      if (content !== beforeRemoval) {
        modified = true;
        fileStats.removed++;
        stats.removedLinks++;
        stats.brokenLinks++;
        stats.unfixableLinks.add(originalHref);
        console.log(`    ✗ Removed: ${originalHref}`);
      }
    } else if (correctedSlug) {
      // We found a correction
      const correctedPath = `/${type}/${correctedSlug}`;
      let newHref;

      if (originalHref.startsWith('https://casinotsu.com')) {
        newHref = `https://casinotsu.com${correctedPath}`;
      } else {
        newHref = correctedPath;
      }

      // Determine if this is href= or href: pattern
      const isJsProperty = match.includes('href:');
      const replacement = isJsProperty ? `href: "${newHref}"` : `href="${newHref}"`;

      content = content.replace(
        new RegExp(match.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
        replacement
      );

      modified = true;
      fileStats.fixed++;
      stats.fixedLinks++;
      console.log(`    ✓ ${originalHref} → ${newHref}`);
    }
  });

  return { content, modified, fileStats };
}

// Process a single file
function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const result = processLinks(content, filePath);

  if (result.modified) {
    fs.writeFileSync(filePath, result.content, 'utf8');
    stats.changedFiles.push({
      file: filePath,
      ...result.fileStats
    });
  }

  stats.totalLinks += result.fileStats.total;
  return result.modified;
}

// Process all slot pages
function processAllFiles() {
  console.log('\n🔧 Processing slot pages...\n');

  const slots = fs.readdirSync(SLOTS_DIR);

  slots.forEach(slot => {
    const slotDir = path.join(SLOTS_DIR, slot);
    const pagePath = path.join(slotDir, 'page.tsx');

    if (fs.existsSync(pagePath)) {
      stats.totalFiles++;
      const modified = processFile(pagePath);
      if (modified) {
        console.log(`  📝 Updated: ${slot}`);
      }
    }
  });
}

// Main execution
console.log('🔍 Link Fixer - Starting...\n');

scanAvailablePages();
processAllFiles();

// Generate report
console.log('\n' + '='.repeat(60));
console.log('📊 LINK FIX REPORT');
console.log('='.repeat(60));
console.log(`Total files processed: ${stats.totalFiles}`);
console.log(`Total links found: ${stats.totalLinks}`);
console.log(`✅ Fixed links: ${stats.fixedLinks}`);
console.log(`🗑️  Removed broken links: ${stats.removedLinks}`);
console.log(`❌ Still broken (couldn't remove): ${stats.brokenLinks - stats.removedLinks}`);
console.log(`📝 Files changed: ${stats.changedFiles.length}`);

if (stats.unfixableLinks.size > 0) {
  console.log('\n🗑️  REMOVED BROKEN LINKS:');
  console.log('-'.repeat(60));
  Array.from(stats.unfixableLinks).sort().forEach(link => {
    console.log(`  - ${link}`);
  });
  console.log(`\n${stats.removedLinks} broken links were removed from the codebase.`);
  console.log('These links pointed to pages that do not exist.');
}

console.log('\n✨ Done!');
