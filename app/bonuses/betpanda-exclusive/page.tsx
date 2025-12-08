import { betpandaExclusiveBonus } from "@/content/data/bonuses/betpanda-exclusive";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: betpandaExclusiveBonus.hero.title,
  description: betpandaExclusiveBonus.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={betpandaExclusiveBonus}
      canonicalPath="/bonuses/betpanda-exclusive"
    />
  );
}
