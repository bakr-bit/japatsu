import { bonsCasinoBonusContent } from "@/content/data/bonuses/bons-exclusive";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: bonsCasinoBonusContent.hero.title,
  description: bonsCasinoBonusContent.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={bonsCasinoBonusContent}
      canonicalPath="/bonuses/bons-exclusive"
    />
  );
}
