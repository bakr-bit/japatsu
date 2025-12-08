import { interCasinoExclusive } from "@/content/data/offers/intercasino-welcome-offer";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: interCasinoExclusive.hero.title,
  description: interCasinoExclusive.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={interCasinoExclusive}
      canonicalPath="/offers/intercasino-welcome-offer"
    />
  );
}
