import { betrebelsExclusiveBonus } from "@/content/data/bonuses/betrebels-exclusive";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: betrebelsExclusiveBonus.hero.title,
  description: betrebelsExclusiveBonus.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={betrebelsExclusiveBonus}
      canonicalPath="/bonuses/betrebels-exclusive"
    />
  );
}
