import { konibetExclusive } from "@/content/data/offers/konibet-exclusive";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: konibetExclusive.hero.title,
  description: konibetExclusive.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={konibetExclusive}
      canonicalPath="/offers/konibet-exclusive"
    />
  );
}
