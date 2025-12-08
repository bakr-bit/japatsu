#!/usr/bin/env python3
"""
Fix invalid property names in images sections of review files.
"""

import os
import re
from pathlib import Path

def fix_property_names(content):
    """Fix invalid property names in images sections."""

    # Find all images sections
    images_pattern = r'(images: \{[^}]+\})'

    def fix_images_section(match):
        images_content = match.group(1)

        # Fix invalid property names
        # Pattern: any unquoted property name that contains spaces, dots, or starts with capital
        invalid_prop_pattern = r'^(\s+)([A-Z][^:]*|[^"\':\s][^:]*\s+[^:]*|[^"\':\s]*\.[^:]*):(\s*\[)'

        lines = images_content.split('\n')
        fixed_lines = []

        for line in lines:
            # Skip lines that are already quoted
            if re.search(r'^\s*["\'][^"\']*["\']:', line):
                fixed_lines.append(line)
                continue

            # Fix unquoted property names
            match = re.match(invalid_prop_pattern, line)
            if match:
                indent = match.group(1)
                prop_name = match.group(2)
                colon_and_bracket = match.group(3)

                # Convert to a valid property name
                safe_prop_name = prop_name_to_safe(prop_name)
                fixed_line = f'{indent}"{safe_prop_name}":{colon_and_bracket}'
                fixed_lines.append(fixed_line)
            else:
                fixed_lines.append(line)

        return '\n'.join(fixed_lines)

    return re.sub(images_pattern, fix_images_section, content, flags=re.DOTALL)

def prop_name_to_safe(prop_name):
    """Convert property name to a safe JavaScript identifier."""
    # Common mappings for better readability
    mappings = {
        'User Thoughts': 'userThoughts',
        'Eldoah Casino': 'eldoahCasino',
        'Bons.com': 'bonsCom',
        'InterCasino': 'interCasino',
        'Katsuwin': 'katsuwin',
        'Mystino': 'mystino',
        'Cybet': 'cybet',
        'Betgoat': 'betgoat',
        'Miki': 'miki',
        'Konibet': 'konibet',
        'Parimatch': 'parimatch',
        'Providers': 'providers',
    }

    if prop_name in mappings:
        return mappings[prop_name]

    # General conversion: remove spaces, dots, and convert to camelCase
    safe_name = prop_name.strip()
    safe_name = re.sub(r'[^\w]', ' ', safe_name)  # Replace non-word chars with space
    words = safe_name.split()

    if not words:
        return 'misc'

    # Convert to camelCase
    result = words[0].lower()
    for word in words[1:]:
        result += word.capitalize()

    # Ensure it starts with a letter
    if not result or not result[0].isalpha():
        result = 'prop' + result

    return result

def fix_review_file(file_path):
    """Fix a single review file."""
    try:
        content = file_path.read_text(encoding='utf-8')

        # Check if file has images section
        if 'images: {' not in content:
            return False

        fixed_content = fix_property_names(content)

        if fixed_content != content:
            file_path.write_text(fixed_content, encoding='utf-8')
            return True

        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all review files."""
    print("🔧 Fixing invalid property names in images sections...")

    reviews_dir = Path("content/reviews")
    if not reviews_dir.exists():
        print("❌ Reviews directory not found!")
        return

    review_files = list(reviews_dir.glob("*.tsx"))
    print(f"📁 Found {len(review_files)} review files")

    fixed = 0
    skipped = 0
    errors = 0

    for review_file in sorted(review_files):
        print(f"🔍 Processing: {review_file.name}")

        try:
            if fix_review_file(review_file):
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