#!/usr/bin/env python3

import os
import re

def fix_author_links_in_file(file_path):
    """Fix profileHref to point to /authors/rina-okabe."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Pattern to match profileHref with any author path
        patterns = [
            # Match relative paths
            r'profileHref:\s*"/authors/[^"]*"',
            # Match absolute URLs to japanesecasino.com
            r'profileHref:\s*"https://www\.japanesecasino\.com/authors/[^"]*"',
            # Match absolute URLs to casinotsu.com
            r'profileHref:\s*"https://(?:www\.)?casinotsu\.com/authors/[^"]*"',
        ]

        modified_content = content

        for pattern in patterns:
            modified_content = re.sub(pattern, 'profileHref: "/authors/rina-okabe"', modified_content)

        if content != modified_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(modified_content)
            print(f"✅ Fixed: {file_path}")
            return True
        else:
            print(f"ℹ️  No changes needed: {file_path}")
            return False

    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")
        return False

def main():
    # Find all review files
    review_dir = "content/reviews"
    fixed_count = 0

    if os.path.exists(review_dir):
        for filename in os.listdir(review_dir):
            if filename.endswith('.tsx') and filename != 'reviews-map.ts':
                file_path = os.path.join(review_dir, filename)
                if fix_author_links_in_file(file_path):
                    fixed_count += 1
    else:
        print(f"❌ Directory {review_dir} not found")

    print(f"\n🎉 Fixed {fixed_count} files with incorrect author links.")

if __name__ == "__main__":
    main()