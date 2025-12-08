import { interCasinoFsBonus } from "@/content/data/bonuses/intercasino-welcome-offer";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: interCasinoFsBonus.hero.title,
  description: interCasinoFsBonus.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={interCasinoFsBonus}
      canonicalPath="/bonuses/intercasino-welcome-offer"
    />
  );
}
