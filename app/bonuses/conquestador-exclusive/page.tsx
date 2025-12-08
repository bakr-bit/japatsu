import { conquestadorBonus } from "@/content/data/bonuses/conquestador-exclusive";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: conquestadorBonus.hero.title,
  description: conquestadorBonus.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={conquestadorBonus}
      canonicalPath="/bonuses/conquestador-exclusive"
    />
  );
}
