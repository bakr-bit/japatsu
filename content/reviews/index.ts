import type { ReviewSummary } from "./types";
import { review21Com } from "./21-com";
import { review2up } from "./2up";
import { reviewAlohaShark } from "./aloha-shark";
import { reviewBetpanda } from "./betpanda";
import { reviewBetswap } from "./betswap";
import { reviewBitz } from "./bitz";
import { reviewConquestador } from "./conquestador";
import { reviewFreshCasino } from "./fresh-casino";
import { reviewGohog } from "./gohog";
import { reviewJoyCasino } from "./joy-casino";
import { reviewJustSpin } from "./just-spin";
import { reviewLiveCasinoHouse } from "./live-casino-house";
import { reviewMegaDice } from "./mega-dice";
import { reviewMiracleCasino } from "./miracle-casino";
import { reviewQueenCasino } from "./queen-casino";
import { reviewRoobet } from "./roobet";
import { reviewShuffle } from "./shuffle";
import { reviewVeraJohn } from "./vera-john";

export const REVIEW_SUMMARIES: ReviewSummary[] = [
  {
    slug: "21-com",
    name: "21.com",
    title: review21Com.hero.title,
    subheading: review21Com.hero.subheading,
    description: review21Com.hero.description,
    summary: review21Com.summary?.[0] ?? "",
    rating: review21Com.hero.score,
    ratingMax: review21Com.hero.scoreMax ?? 5,
    bonusHighlight: "$1,000 + 合計1,000回FS",
    playHref:
      review21Com.cta?.href ?? "https://go.japanesecasino.com/go/21-com",
    image: "https://img.japanesecasino.com/400x210/casino/21com.jpg",
  },
  {
    slug: "2up",
    name: "2UP",
    title: review2up.hero.title,
    subheading: review2up.hero.subheading,
    description: review2up.hero.description,
    summary: review2up.summary?.[0] ?? "",
    rating: review2up.hero.score,
    ratingMax: review2up.hero.scoreMax ?? 5,
    bonusHighlight: "200% 最大$2,000 + 500回FS",
    playHref: review2up.cta?.href ?? "https://go.japanesecasino.com/go/2up",
  },
  {
    slug: "aloha-shark",
    name: "Aloha Shark",
    title: reviewAlohaShark.hero.title,
    subheading: reviewAlohaShark.hero.subheading,
    description: reviewAlohaShark.hero.description,
    summary: reviewAlohaShark.summary?.[0] ?? "",
    rating: reviewAlohaShark.hero.score,
    ratingMax: reviewAlohaShark.hero.scoreMax ?? 5,
    bonusHighlight: "100% $600",
    playHref: reviewAlohaShark.cta?.href ?? "https://casinotsu.com/reviews",
    status: "retired",
  },
  {
    slug: "betpanda",
    name: "Betpanda",
    title: reviewBetpanda.hero.title,
    subheading: reviewBetpanda.hero.subheading,
    description: reviewBetpanda.hero.description,
    summary: reviewBetpanda.summary?.[0] ?? "",
    rating: reviewBetpanda.hero.score,
    ratingMax: reviewBetpanda.hero.scoreMax ?? 5,
    bonusHighlight: "100% 1 BTC",
    playHref:
      reviewBetpanda.cta?.href ??
      "https://go.japanesecasino.com/go/betpanda:betpanda?referrer_path=%2Freviews%2Fbetpanda",
  },
  {
    slug: "betswap",
    name: "Betswap",
    title: reviewBetswap.hero.title,
    subheading: reviewBetswap.hero.subheading,
    description: reviewBetswap.hero.description,
    summary: reviewBetswap.summary?.[0] ?? "",
    rating: reviewBetswap.hero.score,
    ratingMax: reviewBetswap.hero.scoreMax ?? 5,
    bonusHighlight: "180% 最大20,000 USDT（初回）",
    playHref:
      reviewBetswap.cta?.href ??
      "https://go.japanesecasino.com/go/betswap:betswap?referrer_path=%2Freviews%2Fbetswap",
  },
  {
    slug: "bitz",
    name: "Betswap",
    title: reviewBitz.hero.title,
    subheading: reviewBitz.hero.subheading,
    description: reviewBitz.hero.description,
    summary: reviewBitz.summary?.[0] ?? "",
    rating: reviewBitz.hero.score,
    ratingMax: reviewBitz.hero.scoreMax ?? 5,
    bonusHighlight: "180% 最大20,000 USDT（初回）",
    playHref:
      reviewBitz.cta?.href ??
      "https://go.japanesecasino.com/go/betswap:betswap?referrer_path=%2Freviews%2Fbetswap",
  },
  {
    slug: "conquestador",
    name: "Conquestador",
    title: reviewConquestador.hero.title,
    subheading: reviewConquestador.hero.subheading,
    description: reviewConquestador.hero.description,
    summary: reviewConquestador.summary?.[0] ?? "",
    rating: reviewConquestador.hero.score,
    ratingMax: reviewConquestador.hero.scoreMax ?? 5,
    bonusHighlight:
      "最大200% / 150% / 100%（入金帯により変動） 最大¥5,000〜¥200,000 の帯分けあり",
    playHref:
      reviewConquestador.cta?.href ??
      "https://go.japanesecasino.com/go/conquestador:conquestador?referrer_path=%2Freviews%2Fconquestador",
  },
  {
    slug: "fresh-casino",
    name: "Fresh Casino",
    title: reviewFreshCasino.hero.title,
    subheading: reviewFreshCasino.hero.subheading,
    description: reviewFreshCasino.hero.description,
    summary: reviewFreshCasino.summary?.[0] ?? "",
    rating: reviewFreshCasino.hero.score,
    ratingMax: reviewFreshCasino.hero.scoreMax ?? 5,
    bonusHighlight: "100% 最大¥60,000相当（案内例）",
    playHref:
      reviewFreshCasino.cta?.href ??
      "https://go.japanesecasino.com/go/fresh-casino:fresh-casino?referrer_path=%2Freviews%2Ffresh-casino",
  },
  {
    slug: "gohog",
    name: "Gohog",
    title: reviewGohog.hero.title,
    subheading: reviewGohog.hero.subheading,
    description: reviewGohog.hero.description,
    summary: reviewGohog.summary?.[0] ?? "",
    rating: reviewGohog.hero.score,
    ratingMax: reviewGohog.hero.scoreMax ?? 5,
    bonusHighlight:
      "選択式（例：100% / 120% / 150% 等、案内により異なる） 最大¥37,500〜¥150,000等（オプションによる）",
    playHref:
      reviewGohog.cta?.href ??
      "https://go.japanesecasino.com/go/bons-com:bons?referrer_path=%2Freviews%2Fgohog",
    status: "retired",
  },
  {
    slug: "joy-casino",
    name: "Joy Casino",
    title: reviewJoyCasino.hero.title,
    subheading: reviewJoyCasino.hero.subheading,
    description: reviewJoyCasino.hero.description,
    summary: reviewJoyCasino.summary?.[0] ?? "",
    rating: reviewJoyCasino.hero.score,
    ratingMax: reviewJoyCasino.hero.scoreMax ?? 5,
    bonusHighlight: "200% ¥5,000",
    playHref:
      reviewJoyCasino.cta?.href ??
      "https://go.japanesecasino.com/go/joy-casino:joycasino?referrer_path=%2Freviews%2Fjoycasino",
  },
  {
    slug: "just-spin",
    name: "Justspin",
    title: reviewJustSpin.hero.title,
    subheading: reviewJustSpin.hero.subheading,
    description: reviewJustSpin.hero.description,
    summary: reviewJustSpin.summary?.[0] ?? "",
    rating: reviewJustSpin.hero.score,
    ratingMax: reviewJustSpin.hero.scoreMax ?? 5,
    bonusHighlight: "100% $100（案内例）",
    playHref:
      reviewJustSpin.cta?.href ??
      "https://go.casino.su/justspin:just-spin?referrer_path=%2Freviews%2Fjust-spin",
  },
  {
    slug: "live-casino-house",
    name: "Live Casino House",
    title: reviewLiveCasinoHouse.hero.title,
    subheading: reviewLiveCasinoHouse.hero.subheading,
    description: reviewLiveCasinoHouse.hero.description,
    summary: reviewLiveCasinoHouse.summary?.[0] ?? "",
    rating: reviewLiveCasinoHouse.hero.score,
    ratingMax: reviewLiveCasinoHouse.hero.scoreMax ?? 5,
    bonusHighlight: "100% 最大¥50,000",
    playHref:
      reviewLiveCasinoHouse.cta?.href ??
      "https://go.japanesecasino.com/go/live-casino-house:live-casino-house?referrer_path=%2Freviews%2Flive-casino-house",
  },
  {
    slug: "mega-dice",
    name: "Mega Dice",
    title: reviewMegaDice.hero.title,
    subheading: reviewMegaDice.hero.subheading,
    description: reviewMegaDice.hero.description,
    summary: reviewMegaDice.summary?.[0] ?? "",
    rating: reviewMegaDice.hero.score,
    ratingMax: reviewMegaDice.hero.scoreMax ?? 5,
    bonusHighlight: "200% 最大1 BTC",
    playHref:
      reviewMegaDice.cta?.href ??
      "https://go.casino.su/megadice:megadice?referrer_path=%2Freviews%2Fmegadice",
  },
  {
    slug: "miracle-casino",
    name: "Miracle Casino",
    title: reviewMiracleCasino.hero.title,
    subheading: reviewMiracleCasino.hero.subheading,
    description: reviewMiracleCasino.hero.description,
    summary: reviewMiracleCasino.summary?.[0] ?? "",
    rating: reviewMiracleCasino.hero.score,
    ratingMax: reviewMiracleCasino.hero.scoreMax ?? 5,
    bonusHighlight: "50% 最大$350",
    playHref:
      reviewMiracleCasino.cta?.href ?? "https://www.japanesecasino.com/reviews",
    status: "retired",
  },
  {
    slug: "queen-casino",
    name: "Queen Casino",
    title: reviewQueenCasino.hero.title,
    subheading: reviewQueenCasino.hero.subheading,
    description: reviewQueenCasino.hero.description,
    summary: reviewQueenCasino.summary?.[0] ?? "",
    rating: reviewQueenCasino.hero.score,
    ratingMax: reviewQueenCasino.hero.scoreMax ?? 5,
    bonusHighlight: "100% 800USDT",
    playHref:
      reviewQueenCasino.cta?.href ??
      "https://go.japanesecasino.com/go/queen-casino:queen-casino?referrer_path=%2Freviews%2Fqueen-casino",
  },
  {
    slug: "roobet",
    name: "Roobet",
    title: reviewRoobet.hero.title,
    subheading: reviewRoobet.hero.subheading,
    description: reviewRoobet.hero.description,
    summary: reviewRoobet.summary?.[0] ?? "",
    rating: reviewRoobet.hero.score,
    ratingMax: reviewRoobet.hero.scoreMax ?? 5,
    bonusHighlight: "プレイに応じた還元を重視する仕組み",
    playHref:
      reviewRoobet.cta?.href ??
      "https://go.japanesecasino.com/go/roobet:roobet?referrer_path=%2Freviews%2Froobet",
  },
  {
    slug: "shuffle",
    name: "Shuffle",
    title: reviewShuffle.hero.title,
    subheading: reviewShuffle.hero.subheading,
    description: reviewShuffle.hero.description,
    summary: reviewShuffle.summary?.[0] ?? "",
    rating: reviewShuffle.hero.score,
    ratingMax: reviewShuffle.hero.scoreMax ?? 5,
    bonusHighlight: "200% $2,020",
    playHref:
      reviewShuffle.cta?.href ??
      "https://go.casino.su/megadice:megadice?referrer_path=%2Freviews%2Fmegadice",
  },
  {
    slug: "vera-john",
    name: "Vera&John",
    title: reviewVeraJohn.hero.title,
    subheading: reviewVeraJohn.hero.subheading,
    description: reviewVeraJohn.hero.description,
    summary: reviewVeraJohn.summary?.[0] ?? "",
    rating: reviewVeraJohn.hero.score,
    ratingMax: reviewVeraJohn.hero.scoreMax ?? 5,
    bonusHighlight: "100% 最大 $500",
    playHref:
      reviewVeraJohn.cta?.href ?? "https://go.japanesecasino.com/go/vera-john",
  },
];

export function getReviewSummary(slug: string): ReviewSummary | undefined {
  return REVIEW_SUMMARIES.find((item) => item.slug === slug);
}

export type { ReviewSummary } from "./types";
export { review21Com } from "./21-com";
export { review2up } from "./2up";
export { reviewAlohaShark } from "./aloha-shark";
export { reviewBetpanda } from "./betpanda";
export { reviewBetswap } from "./betswap";
export { reviewBitz } from "./bitz";
export { reviewConquestador } from "./conquestador";
export { reviewFreshCasino } from "./fresh-casino";
export { reviewGohog } from "./gohog";
export { reviewJoyCasino } from "./joy-casino";
export { reviewJustSpin } from "./just-spin";
export { reviewLiveCasinoHouse } from "./live-casino-house";
export { reviewMegaDice } from "./mega-dice";
export { reviewMiracleCasino } from "./miracle-casino";
export { reviewQueenCasino } from "./queen-casino";
export { reviewRoobet } from "./roobet";
export { reviewShuffle } from "./shuffle";
export { reviewVeraJohn } from "./vera-john";
