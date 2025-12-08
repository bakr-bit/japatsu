import { kakeyoExclusiveBonus } from "@/content/data/bonuses/kakeyo-exclusive";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: kakeyoExclusiveBonus.hero.title,
  description: kakeyoExclusiveBonus.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={kakeyoExclusiveBonus}
      canonicalPath="/bonuses/kakeyo-exclusive"
    />
  );
}
