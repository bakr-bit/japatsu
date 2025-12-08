"""
Convert slot markdown files to TypeScript slot data format.

This script takes markdown files from /Users/simon/Sites/scraping2/outputs/markdown_rewriter/Slots/(SLOT_NAME)/rewritten.md
and converts them to TypeScript SlotPageData format, saving them as page.tsx files.

Usage:
    # Convert all slot files
    python slot_converter.py

    # Convert specific slot
    python slot_converter.py --slot 1429-uncharted-seas

    # Use different input/output directories
    python slot_converter.py --input-dir custom_input --output-dir custom_output
"""

import argparse
import sys
import os
from pathlib import Path

# Add the scraping2 directory to Python path to import the function
sys.path.append('/Users/simon/Sites/scraping2')
from journalists_copy import markdown_to_slot_data
from dotenv import load_dotenv

load_dotenv()

def read_text(path: Path) -> str:
    """Read text file with UTF-8 encoding."""
    return path.read_text(encoding="utf-8", errors="ignore")

def write_text(path: Path, text: str) -> None:
    """Write text file with UTF-8 encoding."""
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")

def create_page_tsx(slot_name: str, typescript_data: str) -> str:
    """Create the complete page.tsx file content."""
    return f"""import SlotTemplate, {{ SlotPageData }} from "@/components/templates/SlotTemplate";

{typescript_data}

export default function Page() {{
  return <SlotTemplate data={{data}} canonicalPath="/slots/{slot_name}" />;
}}
"""

def process_slot(slot_name: str, input_dir: Path, output_dir: Path) -> bool:
    """Process a single slot's markdown file."""
    # Input path: input/SLOT_NAME/rewritten.md
    input_file = input_dir / slot_name / "rewritten.md"

    if not input_file.exists():
        print(f"❌ Input file not found: {input_file}")
        return False

    # Output path: output/slots/SLOT_NAME/page.tsx
    output_file = output_dir / "slots" / slot_name / "page.tsx"

    print(f"🔄 Processing {slot_name}...")
    print(f"   Input:  {input_file}")
    print(f"   Output: {output_file}")

    try:
        # Read markdown content
        markdown_content = read_text(input_file)
        print(f"   📖 Read {len(markdown_content)} characters")

        # Convert to TypeScript data
        print("   🤖 Converting with Gemini...")
        typescript_data = markdown_to_slot_data(markdown_content)

        if not typescript_data.strip():
            print(f"   ❌ No data generated for {slot_name}")
            return False

        # Create complete page.tsx content
        page_content = create_page_tsx(slot_name, typescript_data)

        # Write output file
        write_text(output_file, page_content)
        print(f"   ✅ Successfully created {output_file}")
        return True

    except Exception as e:
        print(f"   ❌ Error processing {slot_name}: {e}")
        import traceback
        traceback.print_exc()
        return False

def find_slots(input_dir: Path) -> list[str]:
    """Find all slot directories that have rewritten.md files."""
    if not input_dir.exists():
        return []

    slots = []
    for slot_dir in input_dir.iterdir():
        if slot_dir.is_dir():
            rewritten_file = slot_dir / "rewritten.md"
            if rewritten_file.exists():
                slots.append(slot_dir.name)

    return sorted(slots)

def main():
    """Main function to parse arguments and process slots."""
    parser = argparse.ArgumentParser(description="Convert slot markdown files to TypeScript format.")
    parser.add_argument("--slot", help="Process specific slot only (directory name)")
    parser.add_argument("--input-dir", default="/Users/simon/Sites/scraping2/outputs/markdown_rewriter/Slots",
                       help="Input directory containing slot folders")
    parser.add_argument("--output-dir", default="/Users/simon/Sites/japanese/japanese/app",
                       help="Output directory for generated files")

    args = parser.parse_args()

    input_dir = Path(args.input_dir)
    output_dir = Path(args.output_dir)

    if not input_dir.exists():
        print(f"❌ Input directory not found: {input_dir}")
        return

    if args.slot:
        # Process single slot
        slots_to_process = [args.slot]
        # Verify it exists
        input_file = input_dir / args.slot / "rewritten.md"
        if not input_file.exists():
            print(f"❌ Slot '{args.slot}' not found or missing rewritten.md")
            return
    else:
        # Find all slots
        slots_to_process = find_slots(input_dir)
        if not slots_to_process:
            print(f"❌ No slots found in {input_dir}")
            print("   Expected structure: input_dir/SLOT_NAME/rewritten.md")
            return

    print(f"📂 Input directory: {input_dir}")
    print(f"📁 Output directory: {output_dir}")
    print(f"🔍 Found {len(slots_to_process)} slot(s) to process: {', '.join(slots_to_process[:5])}")
    if len(slots_to_process) > 5:
        print(f"    ... and {len(slots_to_process) - 5} more")
    print()

    success_count = 0
    for slot_name in slots_to_process:
        success = process_slot(slot_name, input_dir, output_dir)
        if success:
            success_count += 1
        print()  # Empty line between slots

    print(f"🎉 Completed! Successfully processed {success_count}/{len(slots_to_process)} slots.")

    if success_count > 0:
        print(f"📝 Generated files are ready in your Next.js project:")
        print(f"   Location: {output_dir / 'slots'}")
        print(f"   Files can be accessed at: /slots/SLOT_NAME")

if __name__ == "__main__":
    main()