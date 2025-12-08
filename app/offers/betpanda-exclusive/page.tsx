import { betpandaExclusive } from "@/content/data/offers/betpanda-exclusive";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: betpandaExclusive.hero.title,
  description: betpandaExclusive.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={betpandaExclusive}
      canonicalPath="/offers/betpanda-exclusive"
    />
  );
}
