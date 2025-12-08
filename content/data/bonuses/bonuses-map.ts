import type { BonusPageContent } from "@/components/templates/BonusDetailTemplate";

// Import all bonus content files
import { oneWinBonus } from "./1win";
import { twoUpCasinoBonus } from "./2up-exclusive";
import { betpandaExclusiveBonus } from "./betpanda-exclusive";
import { betrebelsExclusiveBonus } from "./betrebels-exclusive";
import { bitcasinoWelcomeBonus } from "./bitcasino-welcome-package";
import { bitstarzNoDepositSpins } from "./bitstars-exclusive";
import { bonsCasinoBonusContent } from "./bons-exclusive";
import { casinoMeExclusive } from "./casino-me-exclusive";
import { casinoSecretBonus } from "./casino-secret-exclusive";
import { casinoSkyBonusContent } from "./casino-sky-exclusive";
import { casinoXBonus } from "./casino-x-exclusive";
import { christmasNewYearPromotions } from "./christmas";
import { conquestadorBonus } from "./conquestador-exclusive";
import { cosmoswinCashbackBonus } from "./cosmoswin-welcome-offer";
import { duelbitsExclusiveOffer } from "./duelbits-exclusive";
import { easterPromotions } from "./easter";
import { eldoahCasinoBonus } from "./eldoah-exclusive";
import { flushCasinoWelcomeBonus } from "./flush-welcome-offer";
import { freshCasinoFreeSpins } from "./fresh-casino-exclusive";
import { goldenWeekBonuses } from "./golden-week";
import { interCasinoFsBonus } from "./intercasino-welcome-offer";
import { joyCasinoExclusiveBonus } from "./joycasino-exclusive";
import { kakeyoExclusiveBonus } from "./kakeyo-exclusive";
import { katsuwinExclusiveBonus } from "./katsuwin-exclusive";
import { konibetExclusiveOffer } from "./konibet-exclusive";
import { lilibetExclusiveOffer } from "./lilibet-exclusive";
import { mystinoBonusPage } from "./mystino-exclusive";
import { offers } from "./offers";
import { parimatchExclusiveBonus } from "./parimatch-exclusive";
import { ramenbetExclusiveBonus } from "./ramenbet-exclusive";
import { roobetWelcomeOfferContent } from "./roobet-welcome-offer";
import { shinqueenNoDepositBonus } from "./shinqueen-no-deposit-bonus";
import { shuffleExclusiveBonus } from "./shuffle-exclusive";
import { stakeRakebackBonus } from "./stake-rake-back";
import { summerHolidayBonuses } from "./summer-holiday";
import { tedbetBonus } from "./tedbet";
import { trustDiceBonus } from "./trustdice-exclusive";
import { valentinesDayPromotions } from "./valentines-day";
import { verajohnExclusiveBonus } from "./vera-john-exclusive";
import { winzIoExclusiveBonus } from "./winz-io-exclusive";
import { wonderCasinoExclusiveBonus } from "./wonder-casino-exclusive";
import { wsmCasinoBonus } from "./wsm";
import { yuugadoExclusiveBonus } from "./yuugado-exclusive";

// Category pages (bonus type guides)
import { cashbackBonuses } from "./www.japanesecasino.com_bonuses_cashback";
import { cryptoBonuses } from "./www.japanesecasino.com_bonuses_crypto";
import { lowWageringBonuses } from "./www.japanesecasino.com_bonuses_low-wagering";
import { noDepositBonuses } from "./www.japanesecasino.com_bonuses_no-deposit";
import { noWageringBonuses } from "./www.japanesecasino.com_bonuses_no-wagering";
import { nonStickyBonuses } from "./www.japanesecasino.com_bonuses_non-sticky";
import { vipBonuses } from "./www.japanesecasino.com_bonuses_vip";
import { welcomeBonuses } from "./www.japanesecasino.com_bonuses_welcome-bonus";

// Create the bonuses map
export const bonusesMap: Record<string, BonusPageContent> = {
  // Casino-specific exclusive bonuses
  "1win": oneWinBonus,
  "2up-exclusive": twoUpCasinoBonus,
  "betpanda-exclusive": betpandaExclusiveBonus,
  "betrebels-exclusive": betrebelsExclusiveBonus,
  "bitcasino-welcome-package": bitcasinoWelcomeBonus,
  "bitstars-exclusive": bitstarzNoDepositSpins,
  "bons-exclusive": bonsCasinoBonusContent,
  "casino-me-exclusive": casinoMeExclusive,
  "casino-secret-exclusive": casinoSecretBonus,
  "casino-sky-exclusive": casinoSkyBonusContent,
  "casino-x-exclusive": casinoXBonus,
  "conquestador-exclusive": conquestadorBonus,
  "cosmoswin-welcome-offer": cosmoswinCashbackBonus,
  "duelbits-exclusive": duelbitsExclusiveOffer,
  "eldoah-exclusive": eldoahCasinoBonus,
  "flush-welcome-offer": flushCasinoWelcomeBonus,
  "fresh-casino-exclusive": freshCasinoFreeSpins,
  "intercasino-welcome-offer": interCasinoFsBonus,
  "joycasino-exclusive": joyCasinoExclusiveBonus,
  "kakeyo-exclusive": kakeyoExclusiveBonus,
  "katsuwin-exclusive": katsuwinExclusiveBonus,
  "konibet-exclusive": konibetExclusiveOffer,
  "lilibet-exclusive": lilibetExclusiveOffer,
  "mystino-exclusive": mystinoBonusPage,
  "parimatch-exclusive": parimatchExclusiveBonus,
  "ramenbet-exclusive": ramenbetExclusiveBonus,
  "roobet-welcome-offer": roobetWelcomeOfferContent,
  "shinqueen-no-deposit-bonus": shinqueenNoDepositBonus,
  "shuffle-exclusive": shuffleExclusiveBonus,
  "stake-rake-back": stakeRakebackBonus,
  "tedbet": tedbetBonus,
  "trustdice-exclusive": trustDiceBonus,
  "vera-john-exclusive": verajohnExclusiveBonus,
  "winz-io-exclusive": winzIoExclusiveBonus,
  "wonder-casino-exclusive": wonderCasinoExclusiveBonus,
  "wsm": wsmCasinoBonus,
  "yuugado-exclusive": yuugadoExclusiveBonus,

  // Seasonal promotions
  "christmas": christmasNewYearPromotions,
  "easter": easterPromotions as BonusPageContent,
  "golden-week": goldenWeekBonuses,
  "summer-holiday": summerHolidayBonuses,
  "valentines-day": valentinesDayPromotions,

  // Bonus type category pages
  "cashback": cashbackBonuses,
  "crypto": cryptoBonuses,
  "low-wagering": lowWageringBonuses,
  "no-deposit": noDepositBonuses,
  "no-wagering": noWageringBonuses,
  "non-sticky": nonStickyBonuses,
  "vip": vipBonuses,
  "welcome-bonus": welcomeBonuses,

  // Main offers page
  "offers": offers,
};

// Export list of all bonus slugs for static generation
export const bonusSlugs = Object.keys(bonusesMap);

// Helper to get a bonus by slug
export function getBonusBySlug(slug: string): BonusPageContent | undefined {
  return bonusesMap[slug];
}
