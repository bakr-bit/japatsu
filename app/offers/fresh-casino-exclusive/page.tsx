import { freshCasinoExclusive } from "@/content/data/offers/fresh-casino-exclusive";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: freshCasinoExclusive.hero.title,
  description: freshCasinoExclusive.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={freshCasinoExclusive}
      canonicalPath="/offers/fresh-casino-exclusive"
    />
  );
}
