import { veraJohnExclusive } from "@/content/data/offers/vera-john-exclusive";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: veraJohnExclusive.hero.title,
  description: veraJohnExclusive.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={veraJohnExclusive}
      canonicalPath="/offers/vera-john-exclusive"
    />
  );
}
