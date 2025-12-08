import { mystinoExclusive } from "@/content/data/offers/mystino-exclusive";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: mystinoExclusive.hero.title,
  description: mystinoExclusive.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={mystinoExclusive}
      canonicalPath="/offers/mystino-exclusive"
    />
  );
}
