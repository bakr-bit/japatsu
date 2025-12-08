import { yuugadoExclusiveBonus } from "@/content/data/bonuses/yuugado-exclusive";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: yuugadoExclusiveBonus.hero.title,
  description: yuugadoExclusiveBonus.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={yuugadoExclusiveBonus}
      canonicalPath="/bonuses/yuugado-exclusive"
    />
  );
}
