import { casinoSecretBonus } from "@/content/data/bonuses/casino-secret-exclusive";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: casinoSecretBonus.hero.title,
  description: casinoSecretBonus.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={casinoSecretBonus}
      canonicalPath="/bonuses/casino-secret-exclusive"
    />
  );
}
