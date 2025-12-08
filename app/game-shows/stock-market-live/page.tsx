import { stockMarketLive } from "@/content/data/game-shows/stock-market-live";
import GameShowDetailTemplate from "@/components/templates/GameShowDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: stockMarketLive.hero.title,
  description: stockMarketLive.hero.description,
};

export default function Page() {
  return (
    <GameShowDetailTemplate
      data={stockMarketLive}
      canonicalPath="/game-shows/stock-market-live"
    />
  );
}
