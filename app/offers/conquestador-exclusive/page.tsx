import { conquestadorExclusive } from "@/content/data/offers/conquestador-exclusive";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: conquestadorExclusive.hero.title,
  description: conquestadorExclusive.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={conquestadorExclusive}
      canonicalPath="/offers/conquestador-exclusive"
    />
  );
}
