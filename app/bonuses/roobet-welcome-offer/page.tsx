import { roobetWelcomeOfferContent } from "@/content/data/bonuses/roobet-welcome-offer";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: roobetWelcomeOfferContent.hero.title,
  description: roobetWelcomeOfferContent.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={roobetWelcomeOfferContent}
      canonicalPath="/bonuses/roobet-welcome-offer"
    />
  );
}
