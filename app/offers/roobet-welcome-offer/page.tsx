import { roobetWelcomeOffer } from "@/content/data/offers/roobet-welcome-offer";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: roobetWelcomeOffer.hero.title,
  description: roobetWelcomeOffer.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={roobetWelcomeOffer}
      canonicalPath="/offers/roobet-welcome-offer"
    />
  );
}
