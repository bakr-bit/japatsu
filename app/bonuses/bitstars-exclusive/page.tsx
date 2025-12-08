import { bitstarzNoDepositSpins } from "@/content/data/bonuses/bitstars-exclusive";
import BonusDetailTemplate from "@/components/templates/BonusDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: bitstarzNoDepositSpins.hero.title,
  description: bitstarzNoDepositSpins.hero.description,
};

export default function Page() {
  return (
    <BonusDetailTemplate
      data={bitstarzNoDepositSpins}
      canonicalPath="/bonuses/bitstars-exclusive"
    />
  );
}
