import { kakeyoExclusive } from "@/content/data/offers/kakeyo-exclusive";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: kakeyoExclusive.hero.title,
  description: kakeyoExclusive.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={kakeyoExclusive}
      canonicalPath="/offers/kakeyo-exclusive"
    />
  );
}
