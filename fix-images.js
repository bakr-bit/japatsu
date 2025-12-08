const fs = require('fs');
const path = require('path');

// Paths
const SLOTS_DIR = './app/slots';
const ASSETS_DIR = './public/assets';

// Store all available images
const imageMap = new Map();
const stats = {
  totalPages: 0,
  totalReferences: 0,
  fixedReferences: 0,
  missingImages: new Set(),
  changedFiles: []
};

// Recursively find all images in assets directory
function scanAssets(dir, prefix = '') {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Recursively scan subdirectories
      scanAssets(fullPath, prefix + file + '/');
    } else if (/\.(jpg|jpeg|png|svg|gif|webp)$/i.test(file)) {
      // Store image with various key formats for flexible matching
      const baseName = file.replace(/\.(jpg|jpeg|png|svg|gif|webp)$/i, '');
      const webPath = '/assets/' + prefix + file;

      // Add to map with different key variations
      imageMap.set(prefix + file, webPath);
      imageMap.set(file, webPath);
      imageMap.set(baseName, webPath);
      imageMap.set(file.toLowerCase(), webPath);
      imageMap.set(baseName.toLowerCase(), webPath);
    }
  });
}

// Find the best match for an image path
function findImageMatch(imagePath) {
  // Remove leading slash and /images/ prefix
  const cleanPath = imagePath.replace(/^\/images\//, '').replace(/^\//, '');

  // Try exact match first
  if (imageMap.has(cleanPath)) {
    return imageMap.get(cleanPath);
  }

  // Try with different extensions
  const withoutExt = cleanPath.replace(/\.(jpg|jpeg|png|svg|gif|webp)$/i, '');
  const extensions = ['.jpg', '.jpeg', '.png', '.svg', '.gif', '.webp'];

  for (const ext of extensions) {
    if (imageMap.has(withoutExt + ext)) {
      return imageMap.get(withoutExt + ext);
    }
  }

  // Try lowercase match
  if (imageMap.has(cleanPath.toLowerCase())) {
    return imageMap.get(cleanPath.toLowerCase());
  }

  // Try just the filename
  const filename = path.basename(cleanPath);
  if (imageMap.has(filename)) {
    return imageMap.get(filename);
  }

  // Try filename without extension
  const filenameNoExt = filename.replace(/\.(jpg|jpeg|png|svg|gif|webp)$/i, '');
  for (const ext of extensions) {
    if (imageMap.has(filenameNoExt + ext)) {
      return imageMap.get(filenameNoExt + ext);
    }
  }

  return null;
}

// Fix a single file
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  let fileChanges = 0;

  // Find all image references
  const imageRegex = /"\/images\/[^"]+"/g;
  const matches = content.match(imageRegex) || [];

  stats.totalReferences += matches.length;

  matches.forEach(match => {
    const imagePath = match.slice(1, -1); // Remove quotes
    const correctPath = findImageMatch(imagePath);

    if (correctPath) {
      // Replace the path
      const replacement = `"${correctPath}"`;
      content = content.replace(match, replacement);
      modified = true;
      fileChanges++;
      stats.fixedReferences++;
    } else {
      // Image not found
      stats.missingImages.add(imagePath);
    }
  });

  // Write back if modified
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    stats.changedFiles.push({
      file: filePath,
      changes: fileChanges
    });
  }

  return modified;
}

// Process all slot pages
function processSlotPages() {
  const slots = fs.readdirSync(SLOTS_DIR);

  slots.forEach(slot => {
    const slotDir = path.join(SLOTS_DIR, slot);
    const pagePath = path.join(slotDir, 'page.tsx');

    if (fs.existsSync(pagePath)) {
      stats.totalPages++;
      fixFile(pagePath);
    }
  });
}

// Main execution
console.log('🔍 Scanning available images...');
scanAssets(ASSETS_DIR);
console.log(`✅ Found ${imageMap.size} images\n`);

console.log('🔧 Processing slot pages...');
processSlotPages();

// Generate report
console.log('\n' + '='.repeat(60));
console.log('📊 SUMMARY REPORT');
console.log('='.repeat(60));
console.log(`Total pages processed: ${stats.totalPages}`);
console.log(`Total image references found: ${stats.totalReferences}`);
console.log(`✅ Fixed references: ${stats.fixedReferences}`);
console.log(`❌ Missing images: ${stats.missingImages.size}`);
console.log(`📝 Files changed: ${stats.changedFiles.length}`);

if (stats.missingImages.size > 0) {
  console.log('\n⚠️  MISSING IMAGES:');
  console.log('-'.repeat(60));
  Array.from(stats.missingImages).sort().forEach(img => {
    console.log(`  - ${img}`);
  });
}

console.log('\n✨ Done!');
