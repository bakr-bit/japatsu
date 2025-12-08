import { winzIoExclusive } from "@/content/data/offers/winz-io-exclusive";
import OfferDetailTemplate from "@/components/templates/OfferDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: winzIoExclusive.hero.title,
  description: winzIoExclusive.hero.description,
  authors: [{ name: "Rina Okabe" }],
};

export default function Page() {
  return (
    <OfferDetailTemplate
      data={winzIoExclusive}
      canonicalPath="/offers/winz-io-exclusive"
    />
  );
}
