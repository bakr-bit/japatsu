import type { ReviewSummary } from "./types";
import { reviewStake } from "./stake";
import { review21Com } from "./21-com";
import { review2up } from "./2up";
import { review1win } from "./1win";
import { review7Spin } from "./7spin";
import { review10bet } from "./10bet";
import { reviewAlohaShark } from "./aloha-shark";
import { reviewBcGame } from "./bc-game";
import { reviewBetgoat } from "./betgoat";
import { reviewBetpanda } from "./betpanda";
import { reviewBetRebels } from "./betrebels";
import { reviewBetsIo } from "./bets-io";
import { reviewBetswap } from "./betswap";
import { reviewBettilt } from "./bettiilt";
import { reviewBigWins } from "./big-wins";
import { reviewBitcasinoIo } from "./bitcasino-io";
import { reviewBitz } from "./bitz";
import { reviewBons } from "./bons";
import { reviewCaibo } from "./caibo";
import { reviewCasinoGods } from "./casino-gods";
import { reviewCasinoMe } from "./casino-me";
import { reviewCasinoSecret } from "./casino-secret";
import { reviewCasinoSky } from "./casino-sky";
import { reviewCasinoX } from "./casino-x";
import { reviewCasinoLeo } from "./casinoleo";
import { reviewCasumo } from "./casumo";
import { reviewCloudbet } from "./cloudbet";
import { reviewConquestador } from "./conquestador";
import { reviewCosmoswin } from "./cosmowin";
import { reviewCybet } from "./cybet";
import { reviewDuelbits } from "./duelbits";
import { reviewEldoah } from "./eldoah";
import { reviewEnergyCasino } from "./energy-casino";
import { reviewFreshCasino } from "./fresh-casino";
import { reviewFutocasi } from "./futocasino";
import { reviewGambola } from "./gambola-casino";
import { reviewGamdom } from "./gamdom";
import { reviewGohog } from "./gohog";
import { reviewHunnyPlay } from "./hunny-play";
import { reviewInterCasino} from "./intercasino";
import { reviewJoyCasino } from "./joy-casino";
import { reviewJustspin} from "./just-spin";
import { reviewK8 } from "./k8";
import { reviewKakeyo } from "./kakeyo";
import { reviewKatsuwin } from "./katsuwin";
import { reviewKingsOfSport } from "./king-of-sport";
import { reviewKonibet } from "./konibet";
import { reviewLiliBet } from "./lilibet";
import { reviewLiveCasinoHouse } from "./live-casino-house";
import { reviewLivecasinoIo } from "./livecasino-io";
import { reviewLuckyBlock } from "./lucky-block";
import { reviewLuckyCasino } from "./lucky-casino";
import { reviewLuckyBull } from "./lucky-bull";
import { reviewLynxbet } from "./lynx-bet";
import { reviewMegaDice } from "./mega-dice";
import { reviewMikiCasino } from "./miki";
import { reviewMintIo } from "./mint-io";
import { reviewMiracleCasino } from "./miracle-casino";
import { reviewMystino } from "./mystino";
import { reviewNetBet } from "./netbet";
import { reviewPachiPachi } from "./pachipachi";
import { reviewParimatch } from "./parimatch";
import { reviewPlayOjo } from "./playojo";
import { reviewPokerStars } from "./pokerstars";
import { reviewQueenCasino } from "./queen-casino";
import { reviewRamenbet } from "./ramenbet";
import { reviewRespin } from "./respin";
import { reviewRoobet } from "./roobet";
import { reviewRoyalVegas } from "./royal-vegas";
import { reviewShinobibet } from "./shinobibet";
import { reviewShuffle } from "./shuffle";
import { reviewSnatchCasino } from "./snatch-casino";
import { reviewSportsbetIo } from "./sportsbet-io";
import { reviewSushiCasino } from "./sushi-casino";
import { reviewTedBet } from "./ted-bet";
import { reviewVeraJohn } from "./vera-john";

export const REVIEW_SUMMARIES: ReviewSummary[] = [
  {
    slug: "stake",
    name: "Stake",
    title: reviewStake.hero.title,
    subheading: reviewStake.hero.subheading,
    description: reviewStake.hero.description,
    summary: reviewStake.summary?.[0] ?? "",
    rating: reviewStake.hero.score,
    ratingMax: reviewStake.hero.scoreMax ?? 5,
    bonusHighlight: "最大$2,000ボーナス & 5%レーキバック",
    playHref: reviewStake.cta?.href ?? "https://go.japanesecasino.com/go/stake",
  },
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
    slug: "1win",
    name: "1win",
    title: review1win.hero.title,
    subheading: review1win.hero.subheading,
    description: review1win.hero.description,
    summary: review1win.summary?.[0] ?? "",
    rating: review1win.hero.score,
    ratingMax: review1win.hero.scoreMax ?? 5,
    bonusHighlight: "500% $500",
    playHref: review1win.cta?.href ?? "https://go.japanesecasino.com/go/1win",
  },
  {
    slug: "7spin",
    name: "7Spin",
    title: review7Spin.hero.title,
    subheading: review7Spin.hero.subheading,
    description: review7Spin.hero.description,
    summary: review7Spin.summary?.[0] ?? "",
    rating: review7Spin.hero.score,
    ratingMax: review7Spin.hero.scoreMax ?? 5,
    bonusHighlight: "100% €100",
    playHref: review7Spin.cta?.href ?? "https://go.japanesecasino.com/go/7spin",
  },
  {
    slug: "10bet",
    name: "10bet",
    title: review10bet.hero.title,
    subheading: review10bet.hero.subheading,
    description: review10bet.hero.description,
    summary: review10bet.summary?.[0] ?? "",
    rating: review10bet.hero.score,
    ratingMax: review10bet.hero.scoreMax ?? 5,
    bonusHighlight: "100% $100",
    playHref: review10bet.cta?.href ?? "https://go.japanesecasino.com/go/10bet",
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
    slug: "bc-game",
    name: "BC.Game",
    title: reviewBcGame.hero.title,
    subheading: reviewBcGame.hero.subheading,
    description: reviewBcGame.hero.description,
    summary: reviewBcGame.summary?.[0] ?? "",
    rating: reviewBcGame.hero.score,
    ratingMax: reviewBcGame.hero.scoreMax ?? 5,
    bonusHighlight: "180% $20,000",
    playHref: reviewBcGame.cta?.href ?? "https://go.japanesecasino.com/go/bc-game",
  },
  {
    slug: "betgoat",
    name: "Betgoat",
    title: reviewBetgoat.hero.title,
    subheading: reviewBetgoat.hero.subheading,
    description: reviewBetgoat.hero.description,
    summary: reviewBetgoat.summary?.[0] ?? "",
    rating: reviewBetgoat.hero.score,
    ratingMax: reviewBetgoat.hero.scoreMax ?? 5,
    bonusHighlight: "100% $200",
    playHref: reviewBetgoat.cta?.href ?? "https://go.japanesecasino.com/go/betgoat",
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
    slug: "betrebels",
    name: "BetRebels",
    title: reviewBetRebels.hero.title,
    subheading: reviewBetRebels.hero.subheading,
    description: reviewBetRebels.hero.description,
    summary: reviewBetRebels.summary?.[0] ?? "",
    rating: reviewBetRebels.hero.score,
    ratingMax: reviewBetRebels.hero.scoreMax ?? 5,
    bonusHighlight: "100% €200",
    playHref: reviewBetRebels.cta?.href ?? "https://go.japanesecasino.com/go/betrebels",
  },
  {
    slug: "bets-io",
    name: "Bets.io",
    title: reviewBetsIo.hero.title,
    subheading: reviewBetsIo.hero.subheading,
    description: reviewBetsIo.hero.description,
    summary: reviewBetsIo.summary?.[0] ?? "",
    rating: reviewBetsIo.hero.score,
    ratingMax: reviewBetsIo.hero.scoreMax ?? 5,
    bonusHighlight: "100% 1 BTC",
    playHref: reviewBetsIo.cta?.href ?? "https://go.japanesecasino.com/go/bets-io",
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
    title: reviewJustspin.hero.title,
    subheading: reviewJustspin.hero.subheading,
    description: reviewJustspin.hero.description,
    summary: reviewJustspin.summary?.[0] ?? "",
    rating: reviewJustspin.hero.score,
    ratingMax: reviewJustspin.hero.scoreMax ?? 5,
    bonusHighlight: "100% $100（案内例）",
    playHref:
      reviewJustspin.cta?.href ??
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
  {
    slug: "bettiilt",
    name: "Bettiilt",
    title: reviewBettilt.hero.title,
    subheading: reviewBettilt.hero.subheading,
    description: reviewBettilt.hero.description,
    summary: reviewBettilt.summary?.[0] ?? "",
    rating: reviewBettilt.hero.score,
    ratingMax: reviewBettilt.hero.scoreMax ?? 5,
    bonusHighlight: "100% $200",
    playHref: reviewBettilt.cta?.href ?? "https://go.japanesecasino.com/go/bettiilt",
  },
  {
    slug: "big-wins",
    name: "Big Wins",
    title: reviewBigWins.hero.title,
    subheading: reviewBigWins.hero.subheading,
    description: reviewBigWins.hero.description,
    summary: reviewBigWins.summary?.[0] ?? "",
    rating: reviewBigWins.hero.score,
    ratingMax: reviewBigWins.hero.scoreMax ?? 5,
    bonusHighlight: "100% $500",
    playHref: reviewBigWins.cta?.href ?? "https://go.japanesecasino.com/go/big-wins",
  },
  {
    slug: "bitcasino-io",
    name: "Bitcasino.io",
    title: reviewBitcasinoIo.hero.title,
    subheading: reviewBitcasinoIo.hero.subheading,
    description: reviewBitcasinoIo.hero.description,
    summary: reviewBitcasinoIo.summary?.[0] ?? "",
    rating: reviewBitcasinoIo.hero.score,
    ratingMax: reviewBitcasinoIo.hero.scoreMax ?? 5,
    bonusHighlight: "100% 1 BTC",
    playHref: reviewBitcasinoIo.cta?.href ?? "https://go.japanesecasino.com/go/bitcasino-io",
  },
  {
    slug: "bons",
    name: "Bons",
    title: reviewBons.hero.title,
    subheading: reviewBons.hero.subheading,
    description: reviewBons.hero.description,
    summary: reviewBons.summary?.[0] ?? "",
    rating: reviewBons.hero.score,
    ratingMax: reviewBons.hero.scoreMax ?? 5,
    bonusHighlight: "200% $500",
    playHref: reviewBons.cta?.href ?? "https://go.japanesecasino.com/go/bons",
  },
  {
    slug: "caibo",
    name: "Caibo",
    title: reviewCaibo.hero.title,
    subheading: reviewCaibo.hero.subheading,
    description: reviewCaibo.hero.description,
    summary: reviewCaibo.summary?.[0] ?? "",
    rating: reviewCaibo.hero.score,
    ratingMax: reviewCaibo.hero.scoreMax ?? 5,
    bonusHighlight: "100% $300",
    playHref: reviewCaibo.cta?.href ?? "https://go.japanesecasino.com/go/caibo",
  },
  {
    slug: "casino-gods",
    name: "Casino Gods",
    title: reviewCasinoGods.hero.title,
    subheading: reviewCasinoGods.hero.subheading,
    description: reviewCasinoGods.hero.description,
    summary: reviewCasinoGods.summary?.[0] ?? "",
    rating: reviewCasinoGods.hero.score,
    ratingMax: reviewCasinoGods.hero.scoreMax ?? 5,
    bonusHighlight: "100% $300",
    playHref: reviewCasinoGods.cta?.href ?? "https://go.japanesecasino.com/go/casino-gods",
  },
  {
    slug: "casino-me",
    name: "Casino.me",
    title: reviewCasinoMe.hero.title,
    subheading: reviewCasinoMe.hero.subheading,
    description: reviewCasinoMe.hero.description,
    summary: reviewCasinoMe.summary?.[0] ?? "",
    rating: reviewCasinoMe.hero.score,
    ratingMax: reviewCasinoMe.hero.scoreMax ?? 5,
    bonusHighlight: "100% $200",
    playHref: reviewCasinoMe.cta?.href ?? "https://go.japanesecasino.com/go/casino-me",
  },
  {
    slug: "casino-secret",
    name: "Casino Secret",
    title: reviewCasinoSecret.hero.title,
    subheading: reviewCasinoSecret.hero.subheading,
    description: reviewCasinoSecret.hero.description,
    summary: reviewCasinoSecret.summary?.[0] ?? "",
    rating: reviewCasinoSecret.hero.score,
    ratingMax: reviewCasinoSecret.hero.scoreMax ?? 5,
    bonusHighlight: "100% $500",
    playHref: reviewCasinoSecret.cta?.href ?? "https://go.japanesecasino.com/go/casino-secret",
  },
  {
    slug: "casino-sky",
    name: "Casino Sky",
    title: reviewCasinoSky.hero.title,
    subheading: reviewCasinoSky.hero.subheading,
    description: reviewCasinoSky.hero.description,
    summary: reviewCasinoSky.summary?.[0] ?? "",
    rating: reviewCasinoSky.hero.score,
    ratingMax: reviewCasinoSky.hero.scoreMax ?? 5,
    bonusHighlight: "100% $400",
    playHref: reviewCasinoSky.cta?.href ?? "https://go.japanesecasino.com/go/casino-sky",
  },
  {
    slug: "casino-x",
    name: "Casino-X",
    title: reviewCasinoX.hero.title,
    subheading: reviewCasinoX.hero.subheading,
    description: reviewCasinoX.hero.description,
    summary: reviewCasinoX.summary?.[0] ?? "",
    rating: reviewCasinoX.hero.score,
    ratingMax: reviewCasinoX.hero.scoreMax ?? 5,
    bonusHighlight: "200% $2,000",
    playHref: reviewCasinoX.cta?.href ?? "https://go.japanesecasino.com/go/casino-x",
  },
  {
    slug: "casinoleo",
    name: "CasinoLeo",
    title: reviewCasinoLeo.hero.title,
    subheading: reviewCasinoLeo.hero.subheading,
    description: reviewCasinoLeo.hero.description,
    summary: reviewCasinoLeo.summary?.[0] ?? "",
    rating: reviewCasinoLeo.hero.score,
    ratingMax: reviewCasinoLeo.hero.scoreMax ?? 5,
    bonusHighlight: "100% $300",
    playHref: reviewCasinoLeo.cta?.href ?? "https://go.japanesecasino.com/go/casinoleo",
  },
  {
    slug: "casumo",
    name: "Casumo",
    title: reviewCasumo.hero.title,
    subheading: reviewCasumo.hero.subheading,
    description: reviewCasumo.hero.description,
    summary: reviewCasumo.summary?.[0] ?? "",
    rating: reviewCasumo.hero.score,
    ratingMax: reviewCasumo.hero.scoreMax ?? 5,
    bonusHighlight: "100% $300",
    playHref: reviewCasumo.cta?.href ?? "https://go.japanesecasino.com/go/casumo",
  },
  {
    slug: "cloudbet",
    name: "Cloudbet",
    title: reviewCloudbet.hero.title,
    subheading: reviewCloudbet.hero.subheading,
    description: reviewCloudbet.hero.description,
    summary: reviewCloudbet.summary?.[0] ?? "",
    rating: reviewCloudbet.hero.score,
    ratingMax: reviewCloudbet.hero.scoreMax ?? 5,
    bonusHighlight: "100% 5 BTC",
    playHref: reviewCloudbet.cta?.href ?? "https://go.japanesecasino.com/go/cloudbet",
  },
  {
    slug: "cosmowin",
    name: "Cosmowin",
    title: reviewCosmoswin.hero.title,
    subheading: reviewCosmoswin.hero.subheading,
    description: reviewCosmoswin.hero.description,
    summary: reviewCosmoswin.summary?.[0] ?? "",
    rating: reviewCosmoswin.hero.score,
    ratingMax: reviewCosmoswin.hero.scoreMax ?? 5,
    bonusHighlight: "100% $500",
    playHref: reviewCosmoswin.cta?.href ?? "https://go.japanesecasino.com/go/cosmowin",
  },
  {
    slug: "cybet",
    name: "Cybet",
    title: reviewCybet.hero.title,
    subheading: reviewCybet.hero.subheading,
    description: reviewCybet.hero.description,
    summary: reviewCybet.summary?.[0] ?? "",
    rating: reviewCybet.hero.score,
    ratingMax: reviewCybet.hero.scoreMax ?? 5,
    bonusHighlight: "100% $300",
    playHref: reviewCybet.cta?.href ?? "https://go.japanesecasino.com/go/cybet",
  },
  {
    slug: "duelbits",
    name: "Duelbits",
    title: reviewDuelbits.hero.title,
    subheading: reviewDuelbits.hero.subheading,
    description: reviewDuelbits.hero.description,
    summary: reviewDuelbits.summary?.[0] ?? "",
    rating: reviewDuelbits.hero.score,
    ratingMax: reviewDuelbits.hero.scoreMax ?? 5,
    bonusHighlight: "200% $2,000",
    playHref: reviewDuelbits.cta?.href ?? "https://go.japanesecasino.com/go/duelbits",
  },
  {
    slug: "eldoah",
    name: "Eldoah",
    title: reviewEldoah.hero.title,
    subheading: reviewEldoah.hero.subheading,
    description: reviewEldoah.hero.description,
    summary: reviewEldoah.summary?.[0] ?? "",
    rating: reviewEldoah.hero.score,
    ratingMax: reviewEldoah.hero.scoreMax ?? 5,
    bonusHighlight: "100% $500",
    playHref: reviewEldoah.cta?.href ?? "https://go.japanesecasino.com/go/eldoah",
  },
  {
    slug: "energy-casino",
    name: "Energy Casino",
    title: reviewEnergyCasino.hero.title,
    subheading: reviewEnergyCasino.hero.subheading,
    description: reviewEnergyCasino.hero.description,
    summary: reviewEnergyCasino.summary?.[0] ?? "",
    rating: reviewEnergyCasino.hero.score,
    ratingMax: reviewEnergyCasino.hero.scoreMax ?? 5,
    bonusHighlight: "100% $200",
    playHref: reviewEnergyCasino.cta?.href ?? "https://go.japanesecasino.com/go/energy-casino",
  },
  {
    slug: "futocasino",
    name: "Futocasino",
    title: reviewFutocasi.hero.title,
    subheading: reviewFutocasi.hero.subheading,
    description: reviewFutocasi.hero.description,
    summary: reviewFutocasi.summary?.[0] ?? "",
    rating: reviewFutocasi.hero.score,
    ratingMax: reviewFutocasi.hero.scoreMax ?? 5,
    bonusHighlight: "100% $300",
    playHref: reviewFutocasi.cta?.href ?? "https://go.japanesecasino.com/go/futocasino",
  },
  {
    slug: "gambola-casino",
    name: "Gambola Casino",
    title: reviewGambola.hero.title,
    subheading: reviewGambola.hero.subheading,
    description: reviewGambola.hero.description,
    summary: reviewGambola.summary?.[0] ?? "",
    rating: reviewGambola.hero.score,
    ratingMax: reviewGambola.hero.scoreMax ?? 5,
    bonusHighlight: "100% $200",
    playHref: reviewGambola.cta?.href ?? "https://go.japanesecasino.com/go/gambola-casino",
  },
  {
    slug: "gamdom",
    name: "Gamdom",
    title: reviewGamdom.hero.title,
    subheading: reviewGamdom.hero.subheading,
    description: reviewGamdom.hero.description,
    summary: reviewGamdom.summary?.[0] ?? "",
    rating: reviewGamdom.hero.score,
    ratingMax: reviewGamdom.hero.scoreMax ?? 5,
    bonusHighlight: "15% Rakeback",
    playHref: reviewGamdom.cta?.href ?? "https://go.japanesecasino.com/go/gamdom",
  },
  {
    slug: "hunny-play",
    name: "Hunny Play",
    title: reviewHunnyPlay.hero.title,
    subheading: reviewHunnyPlay.hero.subheading,
    description: reviewHunnyPlay.hero.description,
    summary: reviewHunnyPlay.summary?.[0] ?? "",
    rating: reviewHunnyPlay.hero.score,
    ratingMax: reviewHunnyPlay.hero.scoreMax ?? 5,
    bonusHighlight: "100% $500",
    playHref: reviewHunnyPlay.cta?.href ?? "https://go.japanesecasino.com/go/hunny-play",
  },
  {
    slug: "intercasino",
    name: "InterCasino",
    title: reviewInterCasino.hero.title,
    subheading: reviewInterCasino.hero.subheading,
    description: reviewInterCasino.hero.description,
    summary: reviewInterCasino.summary?.[0] ?? "",
    rating: reviewInterCasino.hero.score,
    ratingMax: reviewInterCasino.hero.scoreMax ?? 5,
    bonusHighlight: "100% $500",
    playHref: reviewInterCasino.cta?.href ?? "https://go.japanesecasino.com/go/intercasino",
  },
  {
    slug: "k8",
    name: "K8",
    title: reviewK8.hero.title,
    subheading: reviewK8.hero.subheading,
    description: reviewK8.hero.description,
    summary: reviewK8.summary?.[0] ?? "",
    rating: reviewK8.hero.score,
    ratingMax: reviewK8.hero.scoreMax ?? 5,
    bonusHighlight: "100% $2,000",
    playHref: reviewK8.cta?.href ?? "https://go.japanesecasino.com/go/k8",
  },
  {
    slug: "kakeyo",
    name: "Kakeyo",
    title: reviewKakeyo.hero.title,
    subheading: reviewKakeyo.hero.subheading,
    description: reviewKakeyo.hero.description,
    summary: reviewKakeyo.summary?.[0] ?? "",
    rating: reviewKakeyo.hero.score,
    ratingMax: reviewKakeyo.hero.scoreMax ?? 5,
    bonusHighlight: "100% $300",
    playHref: reviewKakeyo.cta?.href ?? "https://go.japanesecasino.com/go/kakeyo",
  },
  {
    slug: "katsuwin",
    name: "Katsuwin",
    title: reviewKatsuwin.hero.title,
    subheading: reviewKatsuwin.hero.subheading,
    description: reviewKatsuwin.hero.description,
    summary: reviewKatsuwin.summary?.[0] ?? "",
    rating: reviewKatsuwin.hero.score,
    ratingMax: reviewKatsuwin.hero.scoreMax ?? 5,
    bonusHighlight: "100% $500",
    playHref: reviewKatsuwin.cta?.href ?? "https://go.japanesecasino.com/go/katsuwin",
  },
  {
    slug: "king-of-sport",
    name: "King of Sport",
    title: reviewKingsOfSport.hero.title,
    subheading: reviewKingsOfSport.hero.subheading,
    description: reviewKingsOfSport.hero.description,
    summary: reviewKingsOfSport.summary?.[0] ?? "",
    rating: reviewKingsOfSport.hero.score,
    ratingMax: reviewKingsOfSport.hero.scoreMax ?? 5,
    bonusHighlight: "100% $200",
    playHref: reviewKingsOfSport.cta?.href ?? "https://go.japanesecasino.com/go/king-of-sport",
  },
  {
    slug: "konibet",
    name: "Konibet",
    title: reviewKonibet.hero.title,
    subheading: reviewKonibet.hero.subheading,
    description: reviewKonibet.hero.description,
    summary: reviewKonibet.summary?.[0] ?? "",
    rating: reviewKonibet.hero.score,
    ratingMax: reviewKonibet.hero.scoreMax ?? 5,
    bonusHighlight: "100% $500",
    playHref: reviewKonibet.cta?.href ?? "https://go.japanesecasino.com/go/konibet",
  },
  {
    slug: "lilibet",
    name: "LiliBet",
    title: reviewLiliBet.hero.title,
    subheading: reviewLiliBet.hero.subheading,
    description: reviewLiliBet.hero.description,
    summary: reviewLiliBet.summary?.[0] ?? "",
    rating: reviewLiliBet.hero.score,
    ratingMax: reviewLiliBet.hero.scoreMax ?? 5,
    bonusHighlight: "100% $200",
    playHref: reviewLiliBet.cta?.href ?? "https://go.japanesecasino.com/go/lilibet",
  },
  {
    slug: "livecasino-io",
    name: "Livecasino.io",
    title: reviewLivecasinoIo.hero.title,
    subheading: reviewLivecasinoIo.hero.subheading,
    description: reviewLivecasinoIo.hero.description,
    summary: reviewLivecasinoIo.summary?.[0] ?? "",
    rating: reviewLivecasinoIo.hero.score,
    ratingMax: reviewLivecasinoIo.hero.scoreMax ?? 5,
    bonusHighlight: "100% $500",
    playHref: reviewLivecasinoIo.cta?.href ?? "https://go.japanesecasino.com/go/livecasino-io",
  },
  {
    slug: "lucky-block",
    name: "Lucky Block",
    title: reviewLuckyBlock.hero.title,
    subheading: reviewLuckyBlock.hero.subheading,
    description: reviewLuckyBlock.hero.description,
    summary: reviewLuckyBlock.summary?.[0] ?? "",
    rating: reviewLuckyBlock.hero.score,
    ratingMax: reviewLuckyBlock.hero.scoreMax ?? 5,
    bonusHighlight: "200% $10,000",
    playHref: reviewLuckyBlock.cta?.href ?? "https://go.japanesecasino.com/go/lucky-block",
  },
  {
    slug: "lucky-casino",
    name: "Lucky Casino",
    title: reviewLuckyCasino.hero.title,
    subheading: reviewLuckyCasino.hero.subheading,
    description: reviewLuckyCasino.hero.description,
    summary: reviewLuckyCasino.summary?.[0] ?? "",
    rating: reviewLuckyCasino.hero.score,
    ratingMax: reviewLuckyCasino.hero.scoreMax ?? 5,
    bonusHighlight: "100% $500",
    playHref: reviewLuckyCasino.cta?.href ?? "https://go.japanesecasino.com/go/lucky-casino",
  },
  {
    slug: "lucky-bull",
    name: "Lucky Bull",
    title: reviewLuckyBull.hero.title,
    subheading: reviewLuckyBull.hero.subheading,
    description: reviewLuckyBull.hero.description,
    summary: reviewLuckyBull.summary?.[0] ?? "",
    rating: reviewLuckyBull.hero.score,
    ratingMax: reviewLuckyBull.hero.scoreMax ?? 5,
    bonusHighlight: "100% $300",
    playHref: reviewLuckyBull.cta?.href ?? "https://go.japanesecasino.com/go/lucky-bull",
  },
  {
    slug: "lynx-bet",
    name: "Lynx Bet",
    title: reviewLynxbet.hero.title,
    subheading: reviewLynxbet.hero.subheading,
    description: reviewLynxbet.hero.description,
    summary: reviewLynxbet.summary?.[0] ?? "",
    rating: reviewLynxbet.hero.score,
    ratingMax: reviewLynxbet.hero.scoreMax ?? 5,
    bonusHighlight: "100% $200",
    playHref: reviewLynxbet.cta?.href ?? "https://go.japanesecasino.com/go/lynx-bet",
  },
  {
    slug: "miki",
    name: "Miki",
    title: reviewMikiCasino.hero.title,
    subheading: reviewMikiCasino.hero.subheading,
    description: reviewMikiCasino.hero.description,
    summary: reviewMikiCasino.summary?.[0] ?? "",
    rating: reviewMikiCasino.hero.score,
    ratingMax: reviewMikiCasino.hero.scoreMax ?? 5,
    bonusHighlight: "100% $500",
    playHref: reviewMikiCasino.cta?.href ?? "https://go.japanesecasino.com/go/miki",
  },
  {
    slug: "mint-io",
    name: "Mint.io",
    title: reviewMintIo.hero.title,
    subheading: reviewMintIo.hero.subheading,
    description: reviewMintIo.hero.description,
    summary: reviewMintIo.summary?.[0] ?? "",
    rating: reviewMintIo.hero.score,
    ratingMax: reviewMintIo.hero.scoreMax ?? 5,
    bonusHighlight: "100% 1 BTC",
    playHref: reviewMintIo.cta?.href ?? "https://go.japanesecasino.com/go/mint-io",
  },
  {
    slug: "mystino",
    name: "Mystino",
    title: reviewMystino.hero.title,
    subheading: reviewMystino.hero.subheading,
    description: reviewMystino.hero.description,
    summary: reviewMystino.summary?.[0] ?? "",
    rating: reviewMystino.hero.score,
    ratingMax: reviewMystino.hero.scoreMax ?? 5,
    bonusHighlight: "100% $500",
    playHref: reviewMystino.cta?.href ?? "https://go.japanesecasino.com/go/mystino",
  },
  {
    slug: "netbet",
    name: "NetBet",
    title: reviewNetBet.hero.title,
    subheading: reviewNetBet.hero.subheading,
    description: reviewNetBet.hero.description,
    summary: reviewNetBet.summary?.[0] ?? "",
    rating: reviewNetBet.hero.score,
    ratingMax: reviewNetBet.hero.scoreMax ?? 5,
    bonusHighlight: "100% $200",
    playHref: reviewNetBet.cta?.href ?? "https://go.japanesecasino.com/go/netbet",
  },
  {
    slug: "pachipachi",
    name: "PachiPachi",
    title: reviewPachiPachi.hero.title,
    subheading: reviewPachiPachi.hero.subheading,
    description: reviewPachiPachi.hero.description,
    summary: reviewPachiPachi.summary?.[0] ?? "",
    rating: reviewPachiPachi.hero.score,
    ratingMax: reviewPachiPachi.hero.scoreMax ?? 5,
    bonusHighlight: "100% $300",
    playHref: reviewPachiPachi.cta?.href ?? "https://go.japanesecasino.com/go/pachipachi",
  },
  {
    slug: "parimatch",
    name: "Parimatch",
    title: reviewParimatch.hero.title,
    subheading: reviewParimatch.hero.subheading,
    description: reviewParimatch.hero.description,
    summary: reviewParimatch.summary?.[0] ?? "",
    rating: reviewParimatch.hero.score,
    ratingMax: reviewParimatch.hero.scoreMax ?? 5,
    bonusHighlight: "150% $1,500",
    playHref: reviewParimatch.cta?.href ?? "https://go.japanesecasino.com/go/parimatch",
  },
  {
    slug: "playojo",
    name: "PlayOjo",
    title: reviewPlayOjo.hero.title,
    subheading: reviewPlayOjo.hero.subheading,
    description: reviewPlayOjo.hero.description,
    summary: reviewPlayOjo.summary?.[0] ?? "",
    rating: reviewPlayOjo.hero.score,
    ratingMax: reviewPlayOjo.hero.scoreMax ?? 5,
    bonusHighlight: "80 Free Spins",
    playHref: reviewPlayOjo.cta?.href ?? "https://go.japanesecasino.com/go/playojo",
  },
  {
    slug: "pokerstars",
    name: "PokerStars",
    title: reviewPokerStars.hero.title,
    subheading: reviewPokerStars.hero.subheading,
    description: reviewPokerStars.hero.description,
    summary: reviewPokerStars.summary?.[0] ?? "",
    rating: reviewPokerStars.hero.score,
    ratingMax: reviewPokerStars.hero.scoreMax ?? 5,
    bonusHighlight: "100% $400",
    playHref: reviewPokerStars.cta?.href ?? "https://go.japanesecasino.com/go/pokerstars",
  },
  {
    slug: "ramenbet",
    name: "Ramenbet",
    title: reviewRamenbet.hero.title,
    subheading: reviewRamenbet.hero.subheading,
    description: reviewRamenbet.hero.description,
    summary: reviewRamenbet.summary?.[0] ?? "",
    rating: reviewRamenbet.hero.score,
    ratingMax: reviewRamenbet.hero.scoreMax ?? 5,
    bonusHighlight: "100% $500",
    playHref: reviewRamenbet.cta?.href ?? "https://go.japanesecasino.com/go/ramenbet",
  },
  {
    slug: "respin",
    name: "Respin",
    title: reviewRespin.hero.title,
    subheading: reviewRespin.hero.subheading,
    description: reviewRespin.hero.description,
    summary: reviewRespin.summary?.[0] ?? "",
    rating: reviewRespin.hero.score,
    ratingMax: reviewRespin.hero.scoreMax ?? 5,
    bonusHighlight: "100% $300",
    playHref: reviewRespin.cta?.href ?? "https://go.japanesecasino.com/go/respin",
  },
  {
    slug: "royal-vegas",
    name: "Royal Vegas",
    title: reviewRoyalVegas.hero.title,
    subheading: reviewRoyalVegas.hero.subheading,
    description: reviewRoyalVegas.hero.description,
    summary: reviewRoyalVegas.summary?.[0] ?? "",
    rating: reviewRoyalVegas.hero.score,
    ratingMax: reviewRoyalVegas.hero.scoreMax ?? 5,
    bonusHighlight: "100% $1,200",
    playHref: reviewRoyalVegas.cta?.href ?? "https://go.japanesecasino.com/go/royal-vegas",
  },
  {
    slug: "shinobibet",
    name: "Shinobibet",
    title: reviewShinobibet.hero.title,
    subheading: reviewShinobibet.hero.subheading,
    description: reviewShinobibet.hero.description,
    summary: reviewShinobibet.summary?.[0] ?? "",
    rating: reviewShinobibet.hero.score,
    ratingMax: reviewShinobibet.hero.scoreMax ?? 5,
    bonusHighlight: "100% $500",
    playHref: reviewShinobibet.cta?.href ?? "https://go.japanesecasino.com/go/shinobibet",
  },
  {
    slug: "snatch-casino",
    name: "Snatch Casino",
    title: reviewSnatchCasino.hero.title,
    subheading: reviewSnatchCasino.hero.subheading,
    description: reviewSnatchCasino.hero.description,
    summary: reviewSnatchCasino.summary?.[0] ?? "",
    rating: reviewSnatchCasino.hero.score,
    ratingMax: reviewSnatchCasino.hero.scoreMax ?? 5,
    bonusHighlight: "100% $1,000",
    playHref: reviewSnatchCasino.cta?.href ?? "https://go.japanesecasino.com/go/snatch-casino",
  },
  {
    slug: "sportsbet-io",
    name: "Sportsbet.io",
    title: reviewSportsbetIo.hero.title,
    subheading: reviewSportsbetIo.hero.subheading,
    description: reviewSportsbetIo.hero.description,
    summary: reviewSportsbetIo.summary?.[0] ?? "",
    rating: reviewSportsbetIo.hero.score,
    ratingMax: reviewSportsbetIo.hero.scoreMax ?? 5,
    bonusHighlight: "100% 1 BTC",
    playHref: reviewSportsbetIo.cta?.href ?? "https://go.japanesecasino.com/go/sportsbet-io",
  },
  {
    slug: "sushi-casino",
    name: "Sushi Casino",
    title: reviewSushiCasino.hero.title,
    subheading: reviewSushiCasino.hero.subheading,
    description: reviewSushiCasino.hero.description,
    summary: reviewSushiCasino.summary?.[0] ?? "",
    rating: reviewSushiCasino.hero.score,
    ratingMax: reviewSushiCasino.hero.scoreMax ?? 5,
    bonusHighlight: "100% $500",
    playHref: reviewSushiCasino.cta?.href ?? "https://go.japanesecasino.com/go/sushi-casino",
  },
  {
    slug: "ted-bet",
    name: "Ted Bet",
    title: reviewTedBet.hero.title,
    subheading: reviewTedBet.hero.subheading,
    description: reviewTedBet.hero.description,
    summary: reviewTedBet.summary?.[0] ?? "",
    rating: reviewTedBet.hero.score,
    ratingMax: reviewTedBet.hero.scoreMax ?? 5,
    bonusHighlight: "100% $500",
    playHref: reviewTedBet.cta?.href ?? "https://go.japanesecasino.com/go/ted-bet",
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
export { reviewJustspin } from "./just-spin";
export { reviewLiveCasinoHouse } from "./live-casino-house";
export { reviewMegaDice } from "./mega-dice";
export { reviewMiracleCasino } from "./miracle-casino";
export { reviewQueenCasino } from "./queen-casino";
export { reviewRoobet } from "./roobet";
export { reviewShuffle } from "./shuffle";
export { reviewVeraJohn } from "./vera-john";
