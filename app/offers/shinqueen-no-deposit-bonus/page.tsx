import { queenCasinoExclusive } from "@/content/data/offers/shinqueen-no-deposit-bonus";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: queenCasinoExclusive.hero.title,
  description: queenCasinoExclusive.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={queenCasinoExclusive}
      canonicalPath="/offers/shinqueen-no-deposit-bonus"
    />
  );
}
