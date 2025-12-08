import { rainbowRichesLive } from "@/content/data/game-shows/rainbow-riches-live";
import GameShowDetailTemplate from "@/components/templates/GameShowDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: rainbowRichesLive.hero.title,
  description: rainbowRichesLive.hero.description,
};

export default function Page() {
  return (
    <GameShowDetailTemplate
      data={rainbowRichesLive}
      canonicalPath="/game-shows/rainbow-riches-live"
    />
  );
}
