import { bitcasinoWelcomeBonus } from "@/content/data/offers/bitcasino-welcome-package";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: bitcasinoWelcomeBonus.hero.title,
  description: bitcasinoWelcomeBonus.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={bitcasinoWelcomeBonus}
      canonicalPath="/offers/bitcasino-welcome-package"
    />
  );
}
