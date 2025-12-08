import { parimatchExclusive } from "@/content/data/offers/parimatch-exclusive";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: parimatchExclusive.hero.title,
  description: parimatchExclusive.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={parimatchExclusive}
      canonicalPath="/offers/parimatch-exclusive"
    />
  );
}
