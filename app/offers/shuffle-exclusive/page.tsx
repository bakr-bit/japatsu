import { shuffleCasinoExclusive } from "@/content/data/offers/shuffle-exclusive";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: shuffleCasinoExclusive.hero.title,
  description: shuffleCasinoExclusive.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={shuffleCasinoExclusive}
      canonicalPath="/offers/shuffle-exclusive"
    />
  );
}
