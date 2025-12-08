import { katsuwinExclusive } from "@/content/data/offers/katsuwin-exclusive";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: katsuwinExclusive.hero.title,
  description: katsuwinExclusive.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={katsuwinExclusive}
      canonicalPath="/offers/katsuwin-exclusive"
    />
  );
}
