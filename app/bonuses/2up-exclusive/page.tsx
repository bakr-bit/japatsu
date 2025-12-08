import { twoUpCasinoBonus } from "@/content/data/bonuses/2up-exclusive";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: twoUpCasinoBonus.hero.title,
  description: twoUpCasinoBonus.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={twoUpCasinoBonus}
      canonicalPath="/bonuses/2up-exclusive"
    />
  );
}
