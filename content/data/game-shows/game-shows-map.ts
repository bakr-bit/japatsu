import type { GameShowPageContent } from "@/components/templates/GameShowDetailTemplate";

// Import all game show content files (TypeScript format)
import { lightningStorm } from "./lightning-storm";
import { marbleRace } from "./marble-race";
import { maxBetGames } from "./max-bet-games";
import { megaBall } from "./mega-ball";
import { megaWheel } from "./mega-wheel";
import { monopolyBigBallerLive } from "./monopoly-big-baller-live";
import { monopolyLive } from "./monopoly-live";
import { powerupRoulette } from "./powerup-roulette";
import { raceForCashLive } from "./race-for-cash-live";
import { rainbowRichesLive } from "./rainbow-riches-live";
import { sideBetCity } from "./side-bet-city";
import { stockMarketLive } from "./stock-market-live";
import { sweetBonanzaCandyland } from "./sweet-bonanza-candyland";
import { vegasBallBonanza } from "./vegas-ball-bonanza";
import { xxxtremeLightningBaccarat } from "./xxxtreme-lightning-baccarat";
import { xxxtremeLightningRoulette } from "./xxxtreme-lightning-roulette";

// Create the game shows map (TypeScript content only)
export const gameShowsMap: Record<string, GameShowPageContent> = {
  "lightning-storm": lightningStorm,
  "marble-race": marbleRace,
  "max-bet-games": maxBetGames,
  "mega-ball": megaBall,
  "mega-wheel": megaWheel,
  "monopoly-big-baller-live": monopolyBigBallerLive,
  "monopoly-live": monopolyLive,
  "powerup-roulette": powerupRoulette,
  "race-for-cash-live": raceForCashLive,
  "rainbow-riches-live": rainbowRichesLive,
  "side-bet-city": sideBetCity,
  "stock-market-live": stockMarketLive,
  "sweet-bonanza-candyland": sweetBonanzaCandyland,
  "vegas-ball-bonanza": vegasBallBonanza,
  "xxxtreme-lightning-baccarat": xxxtremeLightningBaccarat,
  "xxxtreme-lightning-roulette": xxxtremeLightningRoulette,
};

// Export list of all game show slugs for static generation
export const gameShowSlugs = Object.keys(gameShowsMap);

// Helper to get a game show by slug
export function getGameShowBySlug(slug: string): GameShowPageContent | undefined {
  return gameShowsMap[slug];
}

/**
 * NOTE: The following game shows still use markdown content from /NewContent/game-shows/
 * and need to be converted to TypeScript format:
 *
 * - balloon-race
 * - cash-collect-roulette-live
 * - cash-or-crash
 * - crazy-balls
 * - crazy-coin-flip
 * - crazy-pachinko
 * - crazy-time
 * - dream-catcher
 * - evolution-lightning-ball
 * - extra-chilli-epic-spins
 * - fireball-roulette
 * - funky-time
 * - gonzos-treasure-hunt-live
 * - ice-fishing
 * - lightning-baccarat
 * - lightning-blackjack
 * - lightning-dice
 * - lightning-roulette
 * - and more...
 *
 * These pages currently use MarkdownArticleTemplate instead of GameShowDetailTemplate.
 */
