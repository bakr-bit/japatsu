import { duelbitsExclusive } from "@/content/data/offers/duelbits-exclusive";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: duelbitsExclusive.hero.title,
  description: duelbitsExclusive.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={duelbitsExclusive}
      canonicalPath="/offers/duelbits-exclusive"
    />
  );
}
