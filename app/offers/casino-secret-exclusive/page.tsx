import { casinoSecretExclusive } from "@/content/data/offers/casino-secret-exclusive";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: casinoSecretExclusive.hero.title,
  description: casinoSecretExclusive.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={casinoSecretExclusive}
      canonicalPath="/offers/casino-secret-exclusive"
    />
  );
}
