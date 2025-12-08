import { trustdiceExclusive } from "@/content/data/offers/trustdice-exclusive";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: trustdiceExclusive.hero.title,
  description: trustdiceExclusive.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={trustdiceExclusive}
      canonicalPath="/offers/trustdice-exclusive"
    />
  );
}
