#!/usr/bin/env python3
import os
from pathlib import Path

# Mapping of slug to export name (extracted from files)
BONUSES = {
    # Casino-specific bonuses (go in /app/bonuses/[slug]/)
    "1win": "oneWinBonus",
    "2up-exclusive": "twoUpCasinoBonus",
    "betpanda-exclusive": "betpandaExclusiveBonus",
    "betrebels-exclusive": "betrebelsExclusiveBonus",
    "bitcasino-welcome-package": "bitcasinoWelcomeBonus",
    "bitstars-exclusive": "bitstarzNoDepositSpins",
    "bons-exclusive": "bonsCasinoBonusContent",
    "casino-me-exclusive": "casinoMeExclusive",
    "casino-secret-exclusive": "casinoSecretBonus",
    "casino-sky-exclusive": "casinoSkyBonusContent",
    "casino-x-exclusive": "casinoXBonus",
    "conquestador-exclusive": "conquestadorBonus",
    "cosmoswin-welcome-offer": "cosmoswinCashbackBonus",
    "duelbits-exclusive": "duelbitsExclusiveOffer",
    "eldoah-exclusive": "eldoahCasinoBonus",
    "flush-welcome-offer": "flushCasinoWelcomeBonus",
    "fresh-casino-exclusive": "freshCasinoFreeSpins",
    "intercasino-welcome-offer": "interCasinoFsBonus",
    "joycasino-exclusive": "joyCasinoExclusiveBonus",
    "kakeyo-exclusive": "kakeyoExclusiveBonus",
    "katsuwin-exclusive": "katsuwinExclusiveBonus",
    "konibet-exclusive": "konibetExclusiveOffer",
    "lilibet-exclusive": "lilibetExclusiveOffer",
    "mystino-exclusive": "mystinoBonusPage",
    "parimatch-exclusive": "parimatchExclusiveBonus",
    "ramenbet-exclusive": "ramenbetExclusiveBonus",
    "roobet-welcome-offer": "roobetWelcomeOfferContent",
    "shinqueen-no-deposit-bonus": "shinqueenNoDepositBonus",
    "shuffle-exclusive": "shuffleExclusiveBonus",
    "stake-rake-back": "stakeRakebackBonus",
    "tedbet": "tedbetBonus",
    "trustdice-exclusive": "trustDiceBonus",
    "vera-john-exclusive": "verajohnExclusiveBonus",
    "winz-io-exclusive": "winzIoExclusiveBonus",
    "wonder-casino-exclusive": "wonderCasinoExclusiveBonus",
    "wsm": "wsmCasinoBonus",
    "yuugado-exclusive": "yuugadoExclusiveBonus",
}

# General bonus categories (update existing in /app/bonuses/[category]/)
# These need to use simpler slugs that match the existing URLs
GENERAL_BONUSES = {
    "cashback": ("www.japanesecasino.com_bonuses_cashback", "cashbackBonuses"),
    "crypto": ("www.japanesecasino.com_bonuses_crypto", "cryptoBonuses"),
    "low-wagering": ("www.japanesecasino.com_bonuses_low-wagering", "lowWageringBonuses"),
    "no-deposit": ("www.japanesecasino.com_bonuses_no-deposit", "noDepositBonuses"),
    "no-wagering": ("www.japanesecasino.com_bonuses_no-wagering", "noWageringBonuses"),
    "non-sticky": ("www.japanesecasino.com_bonuses_non-sticky", "nonStickyBonuses"),
    "reload": ("www.japanesecasino.com_bonuses_reload.2025-09-21T17_24_21.208Z", "reloadBonuses"),
    "vip": ("www.japanesecasino.com_bonuses_vip", "vipBonuses"),
    "wagering-calculator": ("www.japanesecasino.com_bonuses_wagering-calculator.2025-09-21T17_24_38.481Z", "wageringCalculator"),
    "welcome-bonus": ("www.japanesecasino.com_bonuses_welcome-bonus", "welcomeBonuses"),
}

# Seasonal/special offers (go in /app/offers/[slug]/)
SEASONAL_OFFERS = {
    "christmas": "christmasNewYearPromotions",
    "easter": "easterPromotions",
    "golden-week": "goldenWeekBonuses",
    "summer-holiday": "summerHolidayBonuses",
    "valentines-day": "valentinesDayPromotions",
    "offers": "offers",
}

# Also add the main bonuses page
MAIN_BONUSES = {
    "bonuses": ("www.japanesecasino.com_bonuses", "exclusiveBonuses"),
}

def create_page(slug, export_name, data_file, base_path="bonuses"):
    """Create a Next.js page for a bonus."""
    page_dir = Path(f"app/{base_path}/{slug}")
    page_dir.mkdir(parents=True, exist_ok=True)

    page_content = f'''import {{ {export_name} }} from "@/content/data/bonuses/{data_file}";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type {{ Metadata }} from "next";

export const metadata: Metadata = {{
  title: {export_name}.hero.title,
  description: {export_name}.hero.description,
}};

export default function Page() {{
  return (
    <BonusDetailTemplate
      data={{{export_name}}}
      canonicalPath="/{base_path}/{slug}"
    />
  );
}}
'''

    page_file = page_dir / "page.tsx"
    page_file.write_text(page_content)
    return page_file

# Create all casino-specific bonus pages
print("Creating casino-specific bonus pages...")
for slug, export_name in BONUSES.items():
    page_file = create_page(slug, export_name, slug)
    print(f"  ✓ Created {page_file}")

# Create general bonus category pages
print("\nCreating/updating general bonus category pages...")
for slug, (data_file, export_name) in GENERAL_BONUSES.items():
    page_file = create_page(slug, export_name, data_file)
    print(f"  ✓ Created {page_file}")

# Create seasonal/special offer pages
print("\nCreating seasonal/special offer pages...")
for slug, export_name in SEASONAL_OFFERS.items():
    page_file = create_page(slug, export_name, slug, base_path="offers")
    print(f"  ✓ Created {page_file}")

# Create main bonuses page
print("\nCreating main bonuses page...")
slug, (data_file, export_name) = "bonuses", MAIN_BONUSES["bonuses"]
# This one goes directly in /app/bonuses/page.tsx (not in a subdirectory)
page_file = Path("app/bonuses/page.tsx")
page_content = f'''import {{ {export_name} }} from "@/content/data/bonuses/{data_file}";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type {{ Metadata }} from "next";

export const metadata: Metadata = {{
  title: {export_name}.hero.title,
  description: {export_name}.hero.description,
}};

export default function Page() {{
  return (
    <BonusDetailTemplate
      data={{{export_name}}}
      canonicalPath="/bonuses"
    />
  );
}}
'''
page_file.write_text(page_content)
print(f"  ✓ Created {page_file}")

print(f"\n✅ Done! Created:")
print(f"   - {len(BONUSES)} casino-specific bonus pages")
print(f"   - {len(GENERAL_BONUSES)} general bonus category pages")
print(f"   - {len(SEASONAL_OFFERS)} seasonal/special offer pages")
print(f"   - 1 main bonuses page")
print(f"   - Total: {len(BONUSES) + len(GENERAL_BONUSES) + len(SEASONAL_OFFERS) + 1} pages")
