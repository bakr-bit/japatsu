#!/usr/bin/env python3
"""
Add avatar images to all review files that don't have them yet.
"""

import os
import re
from pathlib import Path

def get_logo_mapping():
    """Get the logo mapping from logos.ts file."""
    logos_path = Path("lib/logos.ts")
    if not logos_path.exists():
        return {}

    content = logos_path.read_text(encoding="utf-8")

    # Extract logoMappings object
    mapping_match = re.search(r'const logoMappings: Record<string, string> = \{([^}]+)\}', content, re.DOTALL)
    if not mapping_match:
        return {}

    mapping_content = mapping_match.group(1)

    # Parse the mappings
    mappings = {}
    for line in mapping_content.split('\n'):
        line = line.strip()
        if line and ':' in line:
            # Extract 'key': 'value' pairs
            match = re.search(r"'([^']+)':\s*'([^']+)'", line)
            if match:
                slug, logo_file = match.groups()
                mappings[slug] = logo_file

    return mappings

def has_avatar(file_path):
    """Check if a review file already has avatarSrc."""
    content = file_path.read_text(encoding="utf-8")
    return 'avatarSrc:' in content

def add_avatar_to_review(file_path, logo_filename):
    """Add avatar fields to a review file."""
    content = file_path.read_text(encoding="utf-8")

    # Find the watchouts section closing
    pattern = r'(\s+watchouts: \[[^\]]+\],)\s*(\},)'

    replacement = r'\1\n    avatarSrc: "/assets/casino/' + logo_filename + r'.png",\n    avatarAlt: "' + get_alt_text(file_path.stem) + r'",\n  \2'

    new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)

    if new_content != content:
        file_path.write_text(new_content, encoding="utf-8")
        return True

    return False

def get_alt_text(filename):
    """Generate alt text from filename."""
    # Remove common prefixes and clean up
    name = filename.replace('review', '').replace('-', ' ').strip()

    # Special cases for better alt text
    alt_mappings = {
        '10bet': '10betのロゴ',
        '1win': '1winのロゴ',
        '21-com': '21.comのロゴ',
        '2up': '2upのロゴ',
        '7spin': '7Spinのロゴ',
        'bc-game': 'BC.Gameのロゴ',
        'casino-secret': 'カジノシークレットのロゴ',
        'casino-sky': 'カジノスカイのロゴ',
        'casino-x': 'Casino-Xのロゴ',
        'inter-casino': 'インターカジノのロゴ',
        'vera-john': 'ベラジョンカジノのロゴ',
        'wonder-casino': 'ワンダーカジノのロゴ',
        'yuugado': '遊雅堂のロゴ',
    }

    if filename in alt_mappings:
        return alt_mappings[filename]

    # Default: capitalize first letter and add のロゴ
    if name:
        return name.capitalize() + 'のロゴ'
    else:
        return 'カジノのロゴ'

def main():
    """Main function to add avatars to all review files."""
    reviews_dir = Path("content/reviews")
    if not reviews_dir.exists():
        print("❌ Reviews directory not found!")
        return

    # Get logo mappings
    logo_mappings = get_logo_mapping()
    print(f"📋 Found {len(logo_mappings)} logo mappings")

    # Find all review .tsx files
    review_files = list(reviews_dir.glob("*.tsx"))
    print(f"📁 Found {len(review_files)} review files")

    processed = 0
    skipped = 0
    errors = 0

    for review_file in sorted(review_files):
        try:
            # Get the slug from filename
            slug = review_file.stem

            print(f"\n🔍 Processing: {review_file.name}")

            # Check if already has avatar
            if has_avatar(review_file):
                print(f"⚠️ Already has avatar: {slug}")
                skipped += 1
                continue

            # Get logo filename from mappings
            logo_filename = logo_mappings.get(slug)

            if not logo_filename:
                print(f"❌ No logo mapping found for: {slug}")
                errors += 1
                continue

            # Check if logo file exists
            logo_path = Path(f"public/assets/casino/{logo_filename}.png")
            if not logo_path.exists():
                # Try JPG
                logo_path = Path(f"public/assets/casino/{logo_filename}.jpg")
                if not logo_path.exists():
                    print(f"❌ Logo file not found: {logo_filename}")
                    errors += 1
                    continue
                logo_filename = logo_filename  # Keep filename, just use .jpg

            # Add avatar to the review
            if add_avatar_to_review(review_file, logo_filename):
                print(f"✅ Added avatar: /assets/casino/{logo_filename}.png")
                processed += 1
            else:
                print(f"❌ Failed to add avatar to: {slug}")
                errors += 1

        except Exception as e:
            print(f"❌ Error processing {review_file.name}: {e}")
            errors += 1

    print(f"\n🎉 Processing complete!")
    print(f"✅ Processed: {processed}")
    print(f"⚠️ Skipped (already have avatars): {skipped}")
    print(f"❌ Errors: {errors}")

if __name__ == "__main__":
    main()