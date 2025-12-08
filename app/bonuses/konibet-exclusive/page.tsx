import { konibetExclusiveOffer } from "@/content/data/bonuses/konibet-exclusive";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: konibetExclusiveOffer.hero.title,
  description: konibetExclusiveOffer.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={konibetExclusiveOffer}
      canonicalPath="/bonuses/konibet-exclusive"
    />
  );
}
