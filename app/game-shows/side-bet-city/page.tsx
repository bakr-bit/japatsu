import { sideBetCity } from "@/content/data/game-shows/side-bet-city";
import GameShowDetailTemplate from "@/components/templates/GameShowDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: sideBetCity.hero.title,
  description: sideBetCity.hero.description,
};

export default function Page() {
  return (
    <GameShowDetailTemplate
      data={sideBetCity}
      canonicalPath="/game-shows/side-bet-city"
    />
  );
}
