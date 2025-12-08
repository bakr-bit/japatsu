import { parimatchExclusiveBonus } from "@/content/data/bonuses/parimatch-exclusive";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: parimatchExclusiveBonus.hero.title,
  description: parimatchExclusiveBonus.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={parimatchExclusiveBonus}
      canonicalPath="/bonuses/parimatch-exclusive"
    />
  );
}
