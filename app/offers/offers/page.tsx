import { wonderCasinoExclusive } from "@/content/data/offers/offers";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: wonderCasinoExclusive.hero.title,
  description: wonderCasinoExclusive.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={wonderCasinoExclusive}
      canonicalPath="/offers/offers"
    />
  );
}
