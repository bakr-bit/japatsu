import { cosmoswinCashbackBonus } from "@/content/data/bonuses/cosmoswin-welcome-offer";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: cosmoswinCashbackBonus.hero.title,
  description: cosmoswinCashbackBonus.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={cosmoswinCashbackBonus}
      canonicalPath="/bonuses/cosmoswin-welcome-offer"
    />
  );
}
