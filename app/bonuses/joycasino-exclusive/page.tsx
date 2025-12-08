import { joyCasinoExclusiveBonus } from "@/content/data/bonuses/joycasino-exclusive";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: joyCasinoExclusiveBonus.hero.title,
  description: joyCasinoExclusiveBonus.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={joyCasinoExclusiveBonus}
      canonicalPath="/bonuses/joycasino-exclusive"
    />
  );
}
