import { duelbitsExclusiveOffer } from "@/content/data/bonuses/duelbits-exclusive";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: duelbitsExclusiveOffer.hero.title,
  description: duelbitsExclusiveOffer.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={duelbitsExclusiveOffer}
      canonicalPath="/bonuses/duelbits-exclusive"
    />
  );
}
