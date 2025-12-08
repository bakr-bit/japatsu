import { mystinoBonusPage } from "@/content/data/bonuses/mystino-exclusive";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: mystinoBonusPage.hero.title,
  description: mystinoBonusPage.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={mystinoBonusPage}
      canonicalPath="/bonuses/mystino-exclusive"
    />
  );
}
