import { bonsCasinoExclusive } from "@/content/data/offers/bons-exclusive";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: bonsCasinoExclusive.hero.title,
  description: bonsCasinoExclusive.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={bonsCasinoExclusive}
      canonicalPath="/offers/bons-exclusive"
    />
  );
}
