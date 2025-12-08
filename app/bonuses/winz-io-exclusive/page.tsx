import { winzIoExclusiveBonus } from "@/content/data/bonuses/winz-io-exclusive";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: winzIoExclusiveBonus.hero.title,
  description: winzIoExclusiveBonus.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={winzIoExclusiveBonus}
      canonicalPath="/bonuses/winz-io-exclusive"
    />
  );
}
