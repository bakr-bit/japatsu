import { stakeRakebackBonus } from "@/content/data/bonuses/stake-rake-back";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: stakeRakebackBonus.hero.title,
  description: stakeRakebackBonus.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={stakeRakebackBonus}
      canonicalPath="/bonuses/stake-rake-back"
    />
  );
}
