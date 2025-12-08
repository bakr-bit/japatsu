import { twoUpCasinoExclusive } from "@/content/data/offers/2up-exclusive";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: twoUpCasinoExclusive.hero.title,
  description: twoUpCasinoExclusive.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={twoUpCasinoExclusive}
      canonicalPath="/offers/2up-exclusive"
    />
  );
}
