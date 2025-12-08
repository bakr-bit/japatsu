import { wsmCasinoBonus } from "@/content/data/bonuses/wsm";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: wsmCasinoBonus.hero.title,
  description: wsmCasinoBonus.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={wsmCasinoBonus}
      canonicalPath="/bonuses/wsm"
    />
  );
}
