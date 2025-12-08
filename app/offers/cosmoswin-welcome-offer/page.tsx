import { cosmoswinWelcomeOffer } from "@/content/data/offers/cosmoswin-welcome-offer";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: cosmoswinWelcomeOffer.hero.title,
  description: cosmoswinWelcomeOffer.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={cosmoswinWelcomeOffer}
      canonicalPath="/offers/cosmoswin-welcome-offer"
    />
  );
}
