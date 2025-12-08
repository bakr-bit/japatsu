const fs = require('fs');
const path = require('path');

const SLOTS_DIR = './app/slots';

const stats = {
  totalFiles: 0,
  filesModified: 0,
  boldCleaned: 0,
  tablesConverted: 0,
  fileDetails: []
};

// Clean bold markdown from table row values
function cleanBoldMarkdown(content, filePath) {
  let modified = false;
  let fileStats = { boldCleaned: 0 };

  // Pattern: ["**text**", ... in table rows context
  // Look for arrays with bold markdown in first column
  const boldInTableRegex = /(\[\s*)"(\*\*[^"]+\*\*)"/g;

  const cleaned = content.replace(boldInTableRegex, (match, arrayStart, boldText) => {
    // Remove the ** markers
    const cleanText = boldText.replace(/\*\*/g, '');
    modified = true;
    fileStats.boldCleaned++;
    stats.boldCleaned++;
    return `${arrayStart}"${cleanText}"`;
  });

  return { content: cleaned, modified, fileStats };
}

// Detect and convert markdown tables in paragraphs
function convertMarkdownTables(content, filePath) {
  let modified = false;
  let fileStats = { tablesConverted: 0 };

  // Pattern: consecutive lines starting with "| ... |"
  const lines = content.split('\n');
  const newLines = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Check if this line starts a markdown table
    if (/^\s+"?\|\s*[^|]+\|/.test(line)) {
      // Collect all table lines
      const tableLines = [];
      let j = i;

      while (j < lines.length && /^\s+"?\|\s*[^|]+\|/.test(lines[j])) {
        // Extract the markdown table content from the string
        const match = lines[j].match(/^\s+"(.*)",?\s*$/);
        if (match) {
          tableLines.push(match[1]);
        }
        j++;
      }

      if (tableLines.length >= 3) {
        // We have a table (header, separator, at least one data row)
        const headerRow = tableLines[0].split('|').map(cell => cell.trim()).filter(Boolean);
        const dataRows = tableLines.slice(2).map(row =>
          row.split('|').map(cell => cell.trim()).filter(Boolean)
        );

        // Create table object structure
        const tableObject = `      table: {
        columns: ${JSON.stringify(headerRow)},
        rows: ${JSON.stringify(dataRows, null, 10).replace(/\n/g, '\n        ')}
      },`;

        // Log what we're converting (for debugging)
        console.log(`  Converting table in ${path.basename(path.dirname(filePath))}: ${headerRow.join(' | ')}`);

        // Add a comment about converted table
        newLines.push(`      // Converted from markdown table`);
        newLines.push(tableObject);

        modified = true;
        fileStats.tablesConverted++;
        stats.tablesConverted++;
        i = j; // Skip past the table lines
        continue;
      }
    }

    newLines.push(line);
    i++;
  }

  return { content: newLines.join('\n'), modified, fileStats };
}

// Process a single file
function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;

  // Clean bold markdown
  let result1 = cleanBoldMarkdown(content, filePath);
  content = result1.content;

  // Convert markdown tables (optional - only if detected)
  let result2 = { modified: false, fileStats: { tablesConverted: 0 } };
  if (content.includes('| ')) {
    result2 = convertMarkdownTables(content, filePath);
    content = result2.content;
  }

  const modified = result1.modified || result2.modified;

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    stats.filesModified++;
    stats.fileDetails.push({
      file: path.basename(path.dirname(filePath)),
      boldCleaned: result1.fileStats.boldCleaned,
      tablesConverted: result2.fileStats.tablesConverted
    });
    return true;
  }

  return false;
}

// Find and process all slot page files
function processAllFiles() {
  console.log('🔍 Scanning slot pages...\n');

  const slots = fs.readdirSync(SLOTS_DIR);

  slots.forEach(slot => {
    const slotDir = path.join(SLOTS_DIR, slot);
    const pagePath = path.join(slotDir, 'page.tsx');

    if (fs.existsSync(pagePath)) {
      stats.totalFiles++;
      const modified = processFile(pagePath);
      if (modified) {
        console.log(`  ✓ Updated: ${slot}`);
      }
    }
  });
}

// Main execution
console.log('🧹 Markdown Cleanup - Starting...\n');

processAllFiles();

// Generate report
console.log('\n' + '='.repeat(60));
console.log('📊 CLEANUP REPORT');
console.log('='.repeat(60));
console.log(`Total files scanned: ${stats.totalFiles}`);
console.log(`Files modified: ${stats.filesModified}`);
console.log(`✨ Bold markdown cleaned: ${stats.boldCleaned}`);
console.log(`📋 Tables converted: ${stats.tablesConverted}`);

if (stats.fileDetails.length > 0) {
  console.log('\n📝 DETAILS BY FILE:');
  console.log('-'.repeat(60));
  stats.fileDetails
    .filter(detail => detail.boldCleaned > 0 || detail.tablesConverted > 0)
    .forEach(detail => {
      const parts = [];
      if (detail.boldCleaned > 0) parts.push(`${detail.boldCleaned} bold cleaned`);
      if (detail.tablesConverted > 0) parts.push(`${detail.tablesConverted} tables converted`);
      console.log(`  ${detail.file}: ${parts.join(', ')}`);
    });
}

console.log('\n✨ Done! Markdown residuals have been cleaned up.');
