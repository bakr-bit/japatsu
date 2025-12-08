import { flushCasinoWelcomeBonus } from "@/content/data/bonuses/flush-welcome-offer";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: flushCasinoWelcomeBonus.hero.title,
  description: flushCasinoWelcomeBonus.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={flushCasinoWelcomeBonus}
      canonicalPath="/bonuses/flush-welcome-offer"
    />
  );
}
