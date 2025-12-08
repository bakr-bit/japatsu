import { oneWinCasinoWelcome } from "@/content/data/offers/1win";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: oneWinCasinoWelcome.hero.title,
  description: oneWinCasinoWelcome.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={oneWinCasinoWelcome}
      canonicalPath="/offers/1win"
    />
  );
}
