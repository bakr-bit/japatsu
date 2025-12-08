import { wsmCasinoWelcome } from "@/content/data/offers/wsm";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: wsmCasinoWelcome.hero.title,
  description: wsmCasinoWelcome.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={wsmCasinoWelcome}
      canonicalPath="/offers/wsm"
    />
  );
}
