import { joyCasinoExclusive } from "@/content/data/offers/joycasino-exclusive";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: joyCasinoExclusive.hero.title,
  description: joyCasinoExclusive.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={joyCasinoExclusive}
      canonicalPath="/offers/joycasino-exclusive"
    />
  );
}
