import { casinoMeExclusive } from "@/content/data/bonuses/casino-me-exclusive";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: casinoMeExclusive.hero.title,
  description: casinoMeExclusive.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={casinoMeExclusive}
      canonicalPath="/bonuses/casino-me-exclusive"
    />
  );
}
