import { wonderCasinoExclusiveBonus } from "@/content/data/bonuses/wonder-casino-exclusive";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: wonderCasinoExclusiveBonus.hero.title,
  description: wonderCasinoExclusiveBonus.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={wonderCasinoExclusiveBonus}
      canonicalPath="/bonuses/wonder-casino-exclusive"
    />
  );
}
