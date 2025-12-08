import { oneWinBonus } from "@/content/data/bonuses/1win";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: oneWinBonus.hero.title,
  description: oneWinBonus.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={oneWinBonus}
      canonicalPath="/bonuses/1win"
    />
  );
}
