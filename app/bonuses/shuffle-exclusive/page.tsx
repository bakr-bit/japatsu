import { shuffleExclusiveBonus } from "@/content/data/bonuses/shuffle-exclusive";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: shuffleExclusiveBonus.hero.title,
  description: shuffleExclusiveBonus.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={shuffleExclusiveBonus}
      canonicalPath="/bonuses/shuffle-exclusive"
    />
  );
}
