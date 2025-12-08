import { tedbetBonus } from "@/content/data/bonuses/tedbet";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: tedbetBonus.hero.title,
  description: tedbetBonus.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={tedbetBonus}
      canonicalPath="/bonuses/tedbet"
    />
  );
}
