#!/usr/bin/env python3
"""
Fix image references in review files to only include images that actually exist.
"""

import os
import re
from pathlib import Path

def get_existing_images():
    """Get all existing image files in the public/assets directory."""
    assets_dir = Path("public/assets")
    if not assets_dir.exists():
        return set()

    existing_files = set()
    for img_file in assets_dir.rglob("*"):
        if img_file.is_file() and img_file.suffix.lower() in ['.jpg', '.jpeg', '.png', '.webp', '.gif']:
            # Store the path relative to public
            relative_path = "/" + str(img_file.relative_to(Path("public")))
            existing_files.add(relative_path)

    return existing_files

def extract_casino_name_from_review(file_path):
    """Extract casino name from review file name."""
    name = file_path.stem

    # Common mappings
    mappings = {
        'roobet': 'roobet',
        '1win': '1win',
        '21-com': '21com',
        'bitcasino-io': 'bitcasino',
        'bc-game': 'bcgame',
        'casino-secret': 'casino-secret',
        'vera-john': 'vera-john',
        'wonder-casino': 'wonder-casino',
        'wsm-casino': 'wsm-casino',
        'lucky-casino': 'lucky-casino',
    }

    return mappings.get(name, name)

def find_matching_images(casino_name, existing_images):
    """Find all images that match a casino name."""
    matching_images = []

    # Look for images with casino name in the path
    patterns = [
        casino_name.lower(),
        casino_name.replace('-', ''),
        casino_name.replace('-', '_'),
    ]

    for img_path in existing_images:
        img_name = img_path.lower()
        for pattern in patterns:
            if pattern in img_name:
                matching_images.append(img_path)
                break

    return list(set(matching_images))  # Remove duplicates

def fix_images_section(content, casino_name, existing_images):
    """Fix the images section in review content."""
    # Find the images section
    images_pattern = r'(images: \{[^}]+\})'

    def replace_images_section(match):
        # Find matching images for this casino
        matching_images = find_matching_images(casino_name, existing_images)

        if not matching_images:
            # No images found, remove the entire images section
            return ""

        # Create a simple images section with available images
        images_section = '  images: {\n'
        images_section += '    casino: [\n'

        for img_path in matching_images[:4]:  # Limit to 4 images max
            images_section += f'      "{img_path}",\n'

        images_section += '    ],\n'
        images_section += '  },'

        return images_section

    # Replace the images section
    new_content = re.sub(images_pattern, replace_images_section, content, flags=re.DOTALL)

    # Clean up any empty images sections
    new_content = re.sub(r',?\s*images: \{\s*\},?', '', new_content)

    return new_content

def fix_review_file(file_path, existing_images):
    """Fix image references in a single review file."""
    try:
        content = file_path.read_text(encoding='utf-8')

        # Check if file has images section
        if 'images: {' not in content:
            return False

        casino_name = extract_casino_name_from_review(file_path)
        fixed_content = fix_images_section(content, casino_name, existing_images)

        if fixed_content != content:
            file_path.write_text(fixed_content, encoding='utf-8')
            return True

        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all review files."""
    print("🔧 Fixing image references to only include existing files...")

    # Get all existing images
    existing_images = get_existing_images()
    print(f"📁 Found {len(existing_images)} existing image files")

    # Process review files
    reviews_dir = Path("content/reviews")
    if not reviews_dir.exists():
        print("❌ Reviews directory not found!")
        return

    review_files = list(reviews_dir.glob("*.tsx"))
    print(f"📝 Found {len(review_files)} review files")

    fixed = 0
    skipped = 0
    errors = 0

    for review_file in sorted(review_files):
        print(f"🔍 Processing: {review_file.name}")

        try:
            if fix_review_file(review_file, existing_images):
                print(f"✅ Fixed: {review_file.name}")
                fixed += 1
            else:
                print(f"⚠️ No changes needed: {review_file.name}")
                skipped += 1
        except Exception as e:
            print(f"❌ Error: {review_file.name} - {e}")
            errors += 1

    print(f"\n🎉 Processing complete!")
    print(f"✅ Fixed: {fixed}")
    print(f"⚠️ Skipped: {skipped}")
    print(f"❌ Errors: {errors}")

if __name__ == "__main__":
    main()