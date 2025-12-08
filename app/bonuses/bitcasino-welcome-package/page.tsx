import { bitcasinoWelcomeBonus } from "@/content/data/bonuses/bitcasino-welcome-package";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: bitcasinoWelcomeBonus.hero.title,
  description: bitcasinoWelcomeBonus.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={bitcasinoWelcomeBonus}
      canonicalPath="/bonuses/bitcasino-welcome-package"
    />
  );
}
