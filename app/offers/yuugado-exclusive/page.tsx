import { yuugadoExclusive } from "@/content/data/offers/yuugado-exclusive";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: yuugadoExclusive.hero.title,
  description: yuugadoExclusive.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={yuugadoExclusive}
      canonicalPath="/offers/yuugado-exclusive"
    />
  );
}
