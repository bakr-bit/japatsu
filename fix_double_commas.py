#!/usr/bin/env python3

import os
import re

def fix_double_commas_in_file(file_path):
    """Fix double commas in a TypeScript file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Replace },,} with },}
        modified_content = content.replace('},,', '},')

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
    # List of files that need fixing based on grep results
    files_to_fix = [
        "content/reviews/sushi-casino.tsx",
        "content/reviews/parimatch.tsx",
        "content/reviews/mystino.tsx",
        "content/reviews/miki.tsx",
        "content/reviews/lucky-bull.tsx",
        "content/reviews/lucky-block.tsx",
        "content/reviews/livecasino-io.tsx",
        "content/reviews/live-casino-house.tsx",
        "content/reviews/lilibet.tsx",
        "content/reviews/konibet.tsx",
        "content/reviews/katsuwin.tsx",
        "content/reviews/intercasino.tsx",
        "content/reviews/eldoah.tsx",
        "content/reviews/cybet.tsx",
        "content/reviews/casino-x.tsx",
        "content/reviews/bons.tsx",
        "content/reviews/bitcasino-io.tsx",
        "content/reviews/betgoat.tsx",
        "content/reviews/bc-game.tsx",
        "content/reviews/21-com.tsx"
    ]

    fixed_count = 0

    for file_path in files_to_fix:
        if os.path.exists(file_path):
            if fix_double_commas_in_file(file_path):
                fixed_count += 1
        else:
            print(f"❌ File not found: {file_path}")

    print(f"\n🎉 Fixed {fixed_count} files with double comma syntax errors.")

if __name__ == "__main__":
    main()