import { ramenbetExclusiveBonus } from "@/content/data/bonuses/ramenbet-exclusive";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: ramenbetExclusiveBonus.hero.title,
  description: ramenbetExclusiveBonus.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={ramenbetExclusiveBonus}
      canonicalPath="/bonuses/ramenbet-exclusive"
    />
  );
}
