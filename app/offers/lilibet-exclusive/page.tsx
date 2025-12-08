import { lilibetExclusive } from "@/content/data/offers/lilibet-exclusive";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: lilibetExclusive.hero.title,
  description: lilibetExclusive.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={lilibetExclusive}
      canonicalPath="/offers/lilibet-exclusive"
    />
  );
}
