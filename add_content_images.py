#!/usr/bin/env python3
"""
Add categorized images to review content sections.
"""

import json
import os
import re
from pathlib import Path
from typing import Dict, List

def load_image_data():
    """Load image URLs from JSON file."""
    json_file = Path("image_urls.json")
    if not json_file.exists():
        return {}

    with open(json_file, 'r', encoding='utf-8') as f:
        data = json.load(f)

    return data.get('images', [])

def group_images_by_casino(images):
    """Group images by casino name and category."""
    casino_images = {}

    for image in images:
        url = image.get('url', '')
        category = image.get('category', '')

        # Extract casino name from URL
        casino_name = extract_casino_name(url)
        if not casino_name:
            continue

        if casino_name not in casino_images:
            casino_images[casino_name] = {}

        if category not in casino_images[casino_name]:
            casino_images[casino_name][category] = []

        casino_images[casino_name][category].append({
            'url': url,
            'filename': get_local_filename(url),
            'category': category
        })

    return casino_images

def extract_casino_name(url):
    """Extract casino name from image URL."""
    # Check various patterns to identify casino names
    patterns = [
        r'/([^/]+)-[^/]*\.(?:jpg|png|webp|gif)',  # roobet-bonus.jpg
        r'/([^/]+)\.(?:jpg|png|webp|gif)',        # roobet.jpg
        r'/casino/([^/]+)\.(?:jpg|png)',          # casino/roobet.png
        r'/([^/]+)_\d+x\d+',                      # roobet_960x495
        r'/([^/]+)-\d+',                          # roobet-1.jpg
    ]

    for pattern in patterns:
        match = re.search(pattern, url.lower())
        if match:
            name = match.group(1)
            # Clean up common prefixes/suffixes
            name = re.sub(r'^(www\.|casino[-_]?)', '', name)
            name = re.sub(r'[-_](casino|bet|gaming)$', '', name)
            return name

    return None

def get_local_filename(url):
    """Generate local filename from URL."""
    # Extract filename from URL
    filename = os.path.basename(url.split('?')[0])

    # Clean filename
    filename = re.sub(r'[^\w\.-]', '-', filename)
    filename = re.sub(r'-+', '-', filename)

    return filename

def map_category_to_section(category):
    """Map image category to review content section."""
    mapping = {
        'featured': 'hero_banner',
        'bonus': 'bonuses',
        'game': 'games',
        'slot': 'games',
        'live-casino': 'games',
        'game-show': 'games',
        'provider': 'games',
        'registration': 'registration',
        'withdraw': 'payments',
        'license': 'security',
        'awards': 'awards',
        'partner': 'partnerships',
        'vip': 'vip',
        'casino': 'general'
    }

    return mapping.get(category, 'misc')

def generate_images_section(casino_name, categories):
    """Generate TypeScript code for images section."""
    if not categories:
        return ""

    lines = []
    lines.append("  images: {")

    for category, images in categories.items():
        if not images:
            continue

        section = map_category_to_section(category)

        lines.append(f"    {category}: [")
        for img in images:
            local_path = f"/assets/{get_category_folder(category)}/{img['filename']}"
            lines.append(f"      \"{local_path}\",")
        lines.append("    ],")

    lines.append("  },")

    return "\n".join(lines)

def get_category_folder(category):
    """Get the folder name for a category."""
    folder_mapping = {
        'casino': 'casino',
        'featured': 'casino',
        'bonus': 'casino',
        'game': 'casino',
        'slot': 'casino',
        'live-casino': 'casino',
        'game-show': 'casino',
        'provider': 'casino',
        'registration': 'casino',
        'withdraw': 'casino',
        'license': 'casino',
        'awards': 'casino',
        'partner': 'casino',
        'vip': 'casino',
    }

    return folder_mapping.get(category, 'misc')

def add_images_to_review(review_file, casino_name, image_categories):
    """Add images section to a review file."""
    if not image_categories:
        return False

    content = review_file.read_text(encoding='utf-8')

    # Check if images section already exists
    if 'images:' in content:
        print(f"⚠️ Images section already exists in {review_file.name}")
        return False

    # Find the closing brace of the export
    # Look for the pattern before the final closing brace and semicolon
    pattern = r'(\s+cta: \{[^}]+\},?)\s*(\};)$'

    images_section = generate_images_section(casino_name, image_categories)

    if images_section:
        replacement = r'\1\n' + images_section + r'\n\2'
        new_content = re.sub(pattern, replacement, content, flags=re.DOTALL | re.MULTILINE)

        if new_content != content:
            review_file.write_text(new_content, encoding='utf-8')
            return True

    return False

def main():
    """Main function to add content images to reviews."""
    print("🖼️ Adding content images to review pages...")

    # Load image data
    images = load_image_data()
    print(f"📄 Loaded {len(images)} images from JSON")

    # Group by casino
    casino_images = group_images_by_casino(images)
    print(f"🏢 Found images for {len(casino_images)} casinos")

    # Process review files
    reviews_dir = Path("content/reviews")
    if not reviews_dir.exists():
        print("❌ Reviews directory not found!")
        return

    review_files = list(reviews_dir.glob("*.tsx"))
    print(f"📁 Found {len(review_files)} review files")

    processed = 0
    skipped = 0
    errors = 0

    for review_file in sorted(review_files):
        try:
            slug = review_file.stem
            print(f"\n🔍 Processing: {review_file.name}")

            # Find matching casino images
            casino_name = None
            for name in casino_images.keys():
                if name in slug or slug in name:
                    casino_name = name
                    break

            if not casino_name:
                print(f"❌ No images found for: {slug}")
                skipped += 1
                continue

            image_categories = casino_images[casino_name]
            print(f"📸 Found {len(image_categories)} image categories: {list(image_categories.keys())}")

            # Add images to review
            if add_images_to_review(review_file, casino_name, image_categories):
                print(f"✅ Added images section to: {slug}")
                processed += 1
            else:
                print(f"⚠️ Could not add images to: {slug}")
                skipped += 1

        except Exception as e:
            print(f"❌ Error processing {review_file.name}: {e}")
            errors += 1

    print(f"\n🎉 Processing complete!")
    print(f"✅ Processed: {processed}")
    print(f"⚠️ Skipped: {skipped}")
    print(f"❌ Errors: {errors}")

if __name__ == "__main__":
    main()