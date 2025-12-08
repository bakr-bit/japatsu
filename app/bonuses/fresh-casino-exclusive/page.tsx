import { freshCasinoFreeSpins } from "@/content/data/bonuses/fresh-casino-exclusive";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: freshCasinoFreeSpins.hero.title,
  description: freshCasinoFreeSpins.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={freshCasinoFreeSpins}
      canonicalPath="/bonuses/fresh-casino-exclusive"
    />
  );
}
