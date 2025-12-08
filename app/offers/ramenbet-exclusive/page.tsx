import { ramenbetExclusive } from "@/content/data/offers/ramenbet-exclusive";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: ramenbetExclusive.hero.title,
  description: ramenbetExclusive.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={ramenbetExclusive}
      canonicalPath="/offers/ramenbet-exclusive"
    />
  );
}
