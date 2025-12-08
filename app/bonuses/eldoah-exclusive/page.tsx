import { eldoahCasinoBonus } from "@/content/data/bonuses/eldoah-exclusive";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: eldoahCasinoBonus.hero.title,
  description: eldoahCasinoBonus.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={eldoahCasinoBonus}
      canonicalPath="/bonuses/eldoah-exclusive"
    />
  );
}
