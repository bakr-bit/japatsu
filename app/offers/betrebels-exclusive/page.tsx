import { betRebelsExclusive } from "@/content/data/offers/betrebels-exclusive";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: betRebelsExclusive.hero.title,
  description: betRebelsExclusive.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={betRebelsExclusive}
      canonicalPath="/offers/betrebels-exclusive"
    />
  );
}
