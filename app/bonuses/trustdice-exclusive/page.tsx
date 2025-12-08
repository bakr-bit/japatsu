import { trustDiceBonus } from "@/content/data/bonuses/trustdice-exclusive";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: trustDiceBonus.hero.title,
  description: trustDiceBonus.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={trustDiceBonus}
      canonicalPath="/bonuses/trustdice-exclusive"
    />
  );
}
