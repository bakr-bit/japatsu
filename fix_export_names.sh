#!/bin/bash

# Fix duplicate export names - array of "filename:newExportName" pairs
EXPORT_FIXES=(
  "betpanda-exclusive:betpandaExclusiveBonus"
  "golden-week:goldenWeekBonuses"
  "kakeyo-exclusive:kakeyoExclusiveBonus"
  "katsuwin-exclusive:katsuwinExclusiveBonus"
  "ramenbet-exclusive:ramenbetExclusiveBonus"
  "shinqueen-no-deposit-bonus:shinqueenNoDepositBonus"
  "shuffle-exclusive:shuffleExclusiveBonus"
  "summer-holiday:summerHolidayBonuses"
  "tedbet:tedbetBonus"
  "winz-io-exclusive:winzIoExclusiveBonus"
  "wonder-casino-exclusive:wonderCasinoExclusiveBonus"
  "www.japanesecasino.com_bonuses_non-sticky:nonStickyBonuses"
  "www.japanesecasino.com_bonuses_wagering-calculator.2025-09-21T17_24_38.481Z:wageringCalculator"
  "www.japanesecasino.com_bonuses_welcome-bonus:welcomeBonuses"
  "yuugado-exclusive:yuugadoExclusiveBonus"
)

for item in "${EXPORT_FIXES[@]}"; do
  file="${item%%:*}"
  new_export="${item##*:}"
  filepath="content/data/bonuses/${file}.tsx"

  if [ -f "$filepath" ]; then
    # Replace the old export with the new one
    sed -i '' "s/export const noDepositBonuses:/export const ${new_export}:/" "$filepath"
    echo "Fixed export in $file: noDepositBonuses -> ${new_export}"
  fi
done

echo "Done fixing export names!"
