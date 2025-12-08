import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

// Import all review content files
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
import { reviewDafabet } from "./dafabet";
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
import { reviewTrustdice } from "./trustdice";
import { reviewVeraJohn } from "./vera-john";
import { reviewVideoslots } from "./video-slots";
import { reviewWazamba } from "./wazamba";
import { reviewWilliamHill } from "./william-hill";
import { reviewWinUnique } from "./winunique";
import { reviewWinz } from "./winz.io";
import { reviewWonderCasino } from "./wonder-casino";
import { reviewWsmCasino } from "./wsm-casino";
import { reviewYousCasino } from "./yous-casino";
import { reviewYuugado } from "./yugado";

// Create the reviews map
export const reviewsMap: Record<string, ReviewPageContent> = {
  "stake": reviewStake,
  "21-com": review21Com,
  "2up": review2up,
  "1win": review1win,
  "7spin": review7Spin,
  "10bet": review10bet,
  "aloha-shark": reviewAlohaShark,
  "bc-game": reviewBcGame,
  "betgoat": reviewBetgoat,
  "betpanda": reviewBetpanda,
  "betrebels": reviewBetRebels,
  "bets-io": reviewBetsIo,
  "betswap": reviewBetswap,
  "bettiilt": reviewBettilt,
  "big-wins": reviewBigWins,
  "bitcasino-io": reviewBitcasinoIo,
  "bitz": reviewBitz,
  "bons": reviewBons,
  "caibo": reviewCaibo,
  "casino-gods": reviewCasinoGods,
  "casino-me": reviewCasinoMe,
  "casino-secret": reviewCasinoSecret,
  "casino-sky": reviewCasinoSky,
  "casino-x": reviewCasinoX,
  "casinoleo": reviewCasinoLeo,
  "casumo": reviewCasumo,
  "cloudbet": reviewCloudbet,
  "conquestador": reviewConquestador,
  "cosmowin": reviewCosmoswin,
  "cybet": reviewCybet,
  "dafabet": reviewDafabet,
  "duelbits": reviewDuelbits,
  "eldoah": reviewEldoah,
  "energy-casino": reviewEnergyCasino,
  "fresh-casino": reviewFreshCasino,
  "futocasino": reviewFutocasi,
  "gambola-casino": reviewGambola,
  "gamdom": reviewGamdom,
  "gohog": reviewGohog,
  "hunny-play": reviewHunnyPlay,
  "intercasino": reviewInterCasino,
  "joy-casino": reviewJoyCasino,
  "just-spin": reviewJustspin,
  "k8": reviewK8,
  "kakeyo": reviewKakeyo,
  "katsuwin": reviewKatsuwin,
  "king-of-sport": reviewKingsOfSport,
  "konibet": reviewKonibet,
  "lilibet": reviewLiliBet,
  "live-casino-house": reviewLiveCasinoHouse,
  "livecasino-io": reviewLivecasinoIo,
  "lucky-block": reviewLuckyBlock,
  "lucky-casino": reviewLuckyCasino,
  "lucky-bull": reviewLuckyBull,
  "lynx-bet": reviewLynxbet,
  "mega-dice": reviewMegaDice,
  "miki": reviewMikiCasino,
  "mint-io": reviewMintIo,
  "miracle-casino": reviewMiracleCasino,
  "mystino": reviewMystino,
  "netbet": reviewNetBet,
  "pachipachi": reviewPachiPachi,
  "parimatch": reviewParimatch,
  "playojo": reviewPlayOjo,
  "pokerstars": reviewPokerStars,
  "queen-casino": reviewQueenCasino,
  "ramenbet": reviewRamenbet,
  "respin": reviewRespin,
  "roobet": reviewRoobet,
  "royal-vegas": reviewRoyalVegas,
  "shinobibet": reviewShinobibet,
  "shuffle": reviewShuffle,
  "snatch-casino": reviewSnatchCasino,
  "sportsbet-io": reviewSportsbetIo,
  "sushi-casino": reviewSushiCasino,
  "ted-bet": reviewTedBet,
  "trustdice": reviewTrustdice,
  "vera-john": reviewVeraJohn,
  "video-slots": reviewVideoslots,
  "wazamba": reviewWazamba,
  "william-hill": reviewWilliamHill,
  "winunique": reviewWinUnique,
  "winz.io": reviewWinz,
  "wonder-casino": reviewWonderCasino,
  "wsm-casino": reviewWsmCasino,
  "yous-casino": reviewYousCasino,
  "yugado": reviewYuugado,
};

// Export list of all review slugs for static generation
export const reviewSlugs = Object.keys(reviewsMap);

// Helper to get a review by slug
export function getReviewBySlug(slug: string): ReviewPageContent | undefined {
  return reviewsMap[slug];
}