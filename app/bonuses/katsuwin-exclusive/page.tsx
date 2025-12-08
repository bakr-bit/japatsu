import { katsuwinExclusiveBonus } from "@/content/data/bonuses/katsuwin-exclusive";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: katsuwinExclusiveBonus.hero.title,
  description: katsuwinExclusiveBonus.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={katsuwinExclusiveBonus}
      canonicalPath="/bonuses/katsuwin-exclusive"
    />
  );
}
