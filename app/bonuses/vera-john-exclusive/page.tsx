import { verajohnExclusiveBonus } from "@/content/data/bonuses/vera-john-exclusive";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: verajohnExclusiveBonus.hero.title,
  description: verajohnExclusiveBonus.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={verajohnExclusiveBonus}
      canonicalPath="/bonuses/vera-john-exclusive"
    />
  );
}
