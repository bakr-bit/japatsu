import { bitstarzExclusive } from "@/content/data/offers/bitstars-exclusive";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: bitstarzExclusive.hero.title,
  description: bitstarzExclusive.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={bitstarzExclusive}
      canonicalPath="/offers/bitstars-exclusive"
    />
  );
}
