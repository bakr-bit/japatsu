import { sweetBonanzaCandyland } from "@/content/data/game-shows/sweet-bonanza-candyland";
import GameShowDetailTemplate from "@/components/templates/GameShowDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: sweetBonanzaCandyland.hero.title,
  description: sweetBonanzaCandyland.hero.description,
};

export default function Page() {
  return (
    <GameShowDetailTemplate
      data={sweetBonanzaCandyland}
      canonicalPath="/game-shows/sweet-bonanza-candyland"
    />
  );
}
