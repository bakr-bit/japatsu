import { casinoSkyBonusContent } from "@/content/data/bonuses/casino-sky-exclusive";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: casinoSkyBonusContent.hero.title,
  description: casinoSkyBonusContent.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={casinoSkyBonusContent}
      canonicalPath="/bonuses/casino-sky-exclusive"
    />
  );
}
