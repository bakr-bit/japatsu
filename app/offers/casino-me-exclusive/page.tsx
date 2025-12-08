import { casinoMeExclusive } from "@/content/data/offers/casino-me-exclusive";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: casinoMeExclusive.hero.title,
  description: casinoMeExclusive.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={casinoMeExclusive}
      canonicalPath="/offers/casino-me-exclusive"
    />
  );
}
