import { casinoXBonus } from "@/content/data/bonuses/casino-x-exclusive";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: casinoXBonus.hero.title,
  description: casinoXBonus.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={casinoXBonus}
      canonicalPath="/bonuses/casino-x-exclusive"
    />
  );
}
