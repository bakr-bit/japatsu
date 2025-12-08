import { flushCasinoWelcomeOffer } from "@/content/data/offers/flush-welcome-offer";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: flushCasinoWelcomeOffer.hero.title,
  description: flushCasinoWelcomeOffer.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={flushCasinoWelcomeOffer}
      canonicalPath="/offers/flush-welcome-offer"
    />
  );
}
