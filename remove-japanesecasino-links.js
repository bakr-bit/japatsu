const fs = require('fs');
const path = require('path');

const SLOTS_DIR = './app/slots';

const stats = {
  totalFiles: 0,
  filesModified: 0,
  linesRemoved: 0,
  linksConverted: 0,
  fileDetails: []
};

// Process a single file
function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  let modified = false;
  let fileStats = { removed: 0, converted: 0 };

  const lines = content.split('\n');
  const newLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Skip lines with href or ctaHref pointing to go.japanesecasino.com
    if (/^\s*(href|ctaHref):\s*"https:\/\/go\.japanesecasino\.com/.test(line)) {
      modified = true;
      fileStats.removed++;
      stats.linesRemoved++;
      continue; // Don't add this line to output
    }

    // Handle HTML anchor tags in template literals
    // Pattern: `<a href="https://go.japanesecasino.com/...">...</a>`
    if (line.includes('go.japanesecasino.com')) {
      let convertedLine = line;

      // Convert markdown links in table arrays
      // Pattern: ["[**Name**](https://go.japanesecasino.com/...)", ...]
      convertedLine = convertedLine.replace(
        /\[(\*\*[^*]+\*\*(?:\s*\([^)]+\))?)\]\(https:\/\/go\.japanesecasino\.com[^)]+\)/g,
        '$1'
      );

      // Remove HTML anchor tags entirely (they're CTAs with go.japanesecasino.com)
      // Handle both escaped \" and regular " quotes
      const removedAnchors = convertedLine.replace(
        /`<a\s+href=\\"https:\/\/go\.japanesecasino\.com[^\\"]+\\"\s+[^>]*>.*?<\/a>`/g,
        '""'
      );

      if (removedAnchors !== line) {
        modified = true;
        if (convertedLine !== line) {
          fileStats.converted++;
          stats.linksConverted++;
        }
        if (removedAnchors !== convertedLine) {
          fileStats.removed++;
          stats.linesRemoved++;
        }
        newLines.push(removedAnchors);
        continue;
      }
    }

    newLines.push(line);
  }

  if (modified) {
    content = newLines.join('\n');
    fs.writeFileSync(filePath, content, 'utf8');
    stats.filesModified++;
    stats.fileDetails.push({
      file: path.basename(path.dirname(filePath)),
      linesRemoved: fileStats.removed,
      linksConverted: fileStats.converted
    });
    return true;
  }

  return false;
}

// Find all files with go.japanesecasino.com links
function findAffectedFiles() {
  const affectedFiles = [];
  const slots = fs.readdirSync(SLOTS_DIR);

  slots.forEach(slot => {
    const slotDir = path.join(SLOTS_DIR, slot);
    const pagePath = path.join(slotDir, 'page.tsx');

    if (fs.existsSync(pagePath)) {
      const content = fs.readFileSync(pagePath, 'utf8');
      if (content.includes('go.japanesecasino.com')) {
        affectedFiles.push(pagePath);
      }
    }
  });

  return affectedFiles;
}

// Main execution
console.log('🔍 Finding files with go.japanesecasino.com links...\n');

const affectedFiles = findAffectedFiles();
stats.totalFiles = affectedFiles.length;

console.log(`Found ${affectedFiles.length} files with these links\n`);
console.log('🔧 Processing files...\n');

affectedFiles.forEach(filePath => {
  const modified = processFile(filePath);
  if (modified) {
    const slotName = path.basename(path.dirname(filePath));
    console.log(`  ✓ Updated: ${slotName}`);
  }
});

// Generate report
console.log('\n' + '='.repeat(60));
console.log('📊 CLEANUP REPORT');
console.log('='.repeat(60));
console.log(`Total files scanned: ${stats.totalFiles}`);
console.log(`Files modified: ${stats.filesModified}`);
console.log(`🗑️  Property lines removed: ${stats.linesRemoved}`);
console.log(`🔗 Markdown links converted: ${stats.linksConverted}`);

if (stats.fileDetails.length > 0) {
  console.log('\n📝 DETAILS BY FILE:');
  console.log('-'.repeat(60));
  stats.fileDetails.forEach(detail => {
    console.log(`  ${detail.file}:`);
    console.log(`    - Lines removed: ${detail.linesRemoved}`);
    console.log(`    - Links converted: ${detail.linksConverted}`);
  });
}

console.log('\n✨ Done! All go.japanesecasino.com links have been removed.');
