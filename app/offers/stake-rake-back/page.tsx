import { stakeRakeback } from "@/content/data/offers/stake-rake-back";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: stakeRakeback.hero.title,
  description: stakeRakeback.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={stakeRakeback}
      canonicalPath="/offers/stake-rake-back"
    />
  );
}
