import { casinoXExclusive } from "@/content/data/offers/casino-x-exclusive";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: casinoXExclusive.hero.title,
  description: casinoXExclusive.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={casinoXExclusive}
      canonicalPath="/offers/casino-x-exclusive"
    />
  );
}
