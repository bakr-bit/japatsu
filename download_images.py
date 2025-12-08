#!/usr/bin/env python3
"""
Download images from image_urls.json and organize them in the public folder.
"""

import json
import os
import requests
import re
from pathlib import Path
from urllib.parse import urlparse
import time

def clean_filename(url: str, category: str = "") -> str:
    """Extract clean filename from URL and category."""
    # Get the filename from URL
    parsed = urlparse(url)
    original_filename = os.path.basename(parsed.path)

    # If no filename in URL, create one from category
    if not original_filename or original_filename == "/":
        if category:
            # Clean category name to make it filename-safe
            filename = re.sub(r'[^\w\s-]', '', category.strip())
            filename = re.sub(r'[-\s]+', '-', filename)
            filename = filename.strip('-').lower()
            # Add extension
            filename += '.png'  # Default to PNG
        else:
            # Use domain name
            filename = parsed.netloc.replace('.', '-') + '.png'
    else:
        filename = original_filename

    # Clean filename
    filename = re.sub(r'[^\w\.-]', '-', filename)
    filename = re.sub(r'-+', '-', filename)
    filename = filename.strip('-')

    return filename

def categorize_image(category: str, url: str) -> str:
    """Determine the appropriate subdirectory for the image."""
    category_lower = category.lower()

    # Map categories to subdirectories
    if any(word in category_lower for word in ['casino', 'カジノ', 'bonus', 'ボーナス']):
        return 'casinos'
    elif any(word in category_lower for word in ['provider', 'プロバイダー', 'game', 'ゲーム']):
        return 'providers'
    elif any(word in category_lower for word in ['slot', 'スロット']):
        return 'slots'
    elif any(word in category_lower for word in ['review', 'レビュー']):
        return 'reviews'
    else:
        # Default category based on filename or URL
        if 'provider' in url.lower():
            return 'providers'
        elif 'slot' in url.lower():
            return 'slots'
        elif 'casino' in url.lower():
            return 'casinos'
        else:
            return 'misc'

def download_image(url: str, filepath: Path, retries: int = 3) -> bool:
    """Download an image from URL to filepath."""
    for attempt in range(retries):
        try:
            headers = {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }

            response = requests.get(url, headers=headers, timeout=30)
            response.raise_for_status()

            # Create directory if it doesn't exist
            filepath.parent.mkdir(parents=True, exist_ok=True)

            with open(filepath, 'wb') as f:
                f.write(response.content)

            print(f"✅ Downloaded: {filepath.name}")
            return True

        except Exception as e:
            print(f"❌ Attempt {attempt + 1} failed for {url}: {e}")
            if attempt < retries - 1:
                time.sleep(2)  # Wait before retry

    return False

def main():
    """Main function to download all images."""
    # Load the JSON file
    json_file = Path("image_urls.json")
    if not json_file.exists():
        print("❌ image_urls.json not found!")
        return

    with open(json_file, 'r', encoding='utf-8') as f:
        data = json.load(f)

    images = data.get('images', [])
    if not images:
        print("❌ No images found in JSON file!")
        return

    print(f"🚀 Starting to download {len(images)} images...")

    # Setup public directory
    public_dir = Path("public/assets")
    public_dir.mkdir(parents=True, exist_ok=True)

    successful = 0
    failed = 0
    skipped = 0

    for i, image_data in enumerate(images, 1):
        url = image_data.get('url', '')
        category = image_data.get('category', '')

        if not url:
            print(f"[{i}/{len(images)}] ❌ No URL found for image")
            failed += 1
            continue

        print(f"[{i}/{len(images)}] Processing: {url}")

        # Determine category subdirectory
        subdir = categorize_image(category, url)

        # Generate filename
        filename = clean_filename(url, category)

        # Create full path
        filepath = public_dir / subdir / filename

        # Check if file already exists
        if filepath.exists():
            print(f"⚠️ File already exists: {filepath.relative_to(Path.cwd())}")
            skipped += 1
            continue

        # Download the image
        if download_image(url, filepath):
            successful += 1
        else:
            failed += 1

        # Rate limiting
        time.sleep(0.5)  # Wait 500ms between downloads

    print(f"\n🎉 Download complete!")
    print(f"✅ Successfully downloaded: {successful}")
    print(f"⚠️ Skipped (already exists): {skipped}")
    print(f"❌ Failed: {failed}")
    print(f"📁 Images saved in: {public_dir.absolute()}")

    # Show directory structure
    print(f"\n📂 Directory structure:")
    for subdir in sorted(public_dir.iterdir()):
        if subdir.is_dir():
            count = len(list(subdir.glob("*")))
            print(f"   {subdir.name}/: {count} files")

if __name__ == "__main__":
    main()