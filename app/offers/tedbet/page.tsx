import { tedbetExclusive } from "@/content/data/offers/tedbet";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: tedbetExclusive.hero.title,
  description: tedbetExclusive.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={tedbetExclusive}
      canonicalPath="/offers/tedbet"
    />
  );
}
