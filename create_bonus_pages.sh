#!/bin/bash

# Casino-specific bonus pages (35 pages)
CASINO_BONUSES=(
  "1win:oneWinBonus"
  "2up-exclusive:twoUpExclusive"
  "betpanda-exclusive:betpandaExclusive"
  "betrebels-exclusive:betrebelsExclusive"
  "bitcasino-welcome-package:bitcasinoWelcomePackage"
  "bitstars-exclusive:bitstarsExclusive"
  "bons-exclusive:bonsExclusive"
  "casino-me-exclusive:casinoMeExclusive"
  "casino-secret-exclusive:casinoSecretExclusive"
  "casino-sky-exclusive:casinoSkyExclusive"
  "casino-x-exclusive:casinoXExclusive"
  "conquestador-exclusive:conquestadorExclusive"
  "cosmoswin-welcome-offer:cosmoswinWelcomeOffer"
  "duelbits-exclusive:duelbitsExclusive"
  "eldoah-exclusive:eldoahExclusive"
  "flush-welcome-offer:flushWelcomeOffer"
  "fresh-casino-exclusive:freshCasinoExclusive"
  "intercasino-welcome-offer:intercasinoWelcomeOffer"
  "joycasino-exclusive:joycasinoExclusive"
  "kakeyo-exclusive:kakeyoExclusive"
  "katsuwin-exclusive:katsuwinExclusive"
  "konibet-exclusive:konibetExclusive"
  "lilibet-exclusive:lilibetExclusive"
  "mystino-exclusive:mystinoExclusive"
  "parimatch-exclusive:parimatchExclusive"
  "ramenbet-exclusive:ramenbetExclusive"
  "roobet-welcome-offer:roobetWelcomeOffer"
  "shinqueen-no-deposit-bonus:shinqueenNoDepositBonus"
  "shuffle-exclusive:shuffleExclusive"
  "stake-rake-back:stakeRakeBack"
  "tedbet:tedbet"
  "trustdice-exclusive:trustdiceExclusive"
  "vera-john-exclusive:veraJohnExclusive"
  "winz-io-exclusive:winzIoExclusive"
  "wonder-casino-exclusive:wonderCasinoExclusive"
  "wsm:wsm"
  "yuugado-exclusive:yuugadoExclusive"
)

# Create casino-specific bonus pages
for item in "${CASINO_BONUSES[@]}"; do
  slug="${item%%:*}"
  export_name="${item##*:}"
  page_dir="app/bonuses/${slug}"

  mkdir -p "$page_dir"

  cat > "${page_dir}/page.tsx" << EOF
import { ${export_name} } from "@/content/data/bonuses/${slug}";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: ${export_name}.hero.title,
  description: ${export_name}.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={${export_name}}
      canonicalPath="/bonuses/${slug}"
    />
  );
}
EOF

  echo "Created /app/bonuses/${slug}/page.tsx"
done

echo "Done creating casino-specific bonus pages!"
