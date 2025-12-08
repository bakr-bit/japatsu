import { eldoahCasinoExclusive } from "@/content/data/offers/eldoah-exclusive";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: eldoahCasinoExclusive.hero.title,
  description: eldoahCasinoExclusive.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={eldoahCasinoExclusive}
      canonicalPath="/offers/eldoah-exclusive"
    />
  );
}
