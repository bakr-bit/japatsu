import { shinqueenNoDepositBonus } from "@/content/data/bonuses/shinqueen-no-deposit-bonus";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: shinqueenNoDepositBonus.hero.title,
  description: shinqueenNoDepositBonus.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={shinqueenNoDepositBonus}
      canonicalPath="/bonuses/shinqueen-no-deposit-bonus"
    />
  );
}
