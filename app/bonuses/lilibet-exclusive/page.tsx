import { lilibetExclusiveOffer } from "@/content/data/bonuses/lilibet-exclusive";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: lilibetExclusiveOffer.hero.title,
  description: lilibetExclusiveOffer.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={lilibetExclusiveOffer}
      canonicalPath="/bonuses/lilibet-exclusive"
    />
  );
}
