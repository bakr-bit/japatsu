import { casinoSkyExclusive } from "@/content/data/offers/casino-sky-exclusive";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: casinoSkyExclusive.hero.title,
  description: casinoSkyExclusive.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={casinoSkyExclusive}
      canonicalPath="/offers/casino-sky-exclusive"
    />
  );
}
