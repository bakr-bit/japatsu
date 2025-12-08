import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Star, ExternalLink, TrendingUp, Shield, Gift, AlertCircle, 
  CheckCircle2, Info, Clock, Award, Gamepad2, CreditCard,
  Smartphone, Target, Zap
} from "lucide-react";
import SectionScaffold from "@/components/shell/SectionScaffold";
import { renderMarkdown } from "@/components/ui/RichText";
import { getCasinoLogoUrl, getCasinoLogoAlt, getLocalImageUrl } from "@/lib/logos";

// Import types from the shared location
export type {
  OfferPageContent,
  OfferHero,
  OfferHighlight,
  ClaimStep,
  CharacterDialogue,
  TermsSection,
  CasinoInfoSection,
  TargetGamesSection,
  PaymentMethodsSection,
  StrategySection,
  SimilarOffer,
  AuthorSection,
} from "@/../../OfferPageContent";

import type { OfferPageContent } from "@/../../OfferPageContent";

type OfferDetailTemplateProps = {
  data: OfferPageContent;
  canonicalPath?: string;
};

// Character avatar component
function CharacterAvatar({ character }: { character: "casiko" | "cocomo" | "kyoju" }) {
  const avatars = {
    casiko: "/images/casiko.svg",
    cocomo: "/images/cocomo.svg",
    kyoju: "/images/kyoju.svg",
  };
  
  const names = {
    casiko: "カジ子",
    cocomo: "ココモ",
    kyoju: "教授",
  };
  
  return (
    <img
      src={avatars[character]}
      alt={names[character]}
      className="h-12 w-12 rounded-full border-2 border-white shadow-md"
    />
  );
}

export default function OfferDetailTemplate({ data, canonicalPath }: OfferDetailTemplateProps) {
  const {
    hero,
    offerHighlight,
    tableOfContents,
    intro,
    claimSteps,
    characterDialogues,
    termsAndConditions,
    casinoInfo,
    targetGames,
    paymentMethods,
    mobileCompatibility,
    strategy,
    similarOffers,
    summary,
    faq,
    author,
    cta,
    breadcrumbs,
  } = data;

  const logoUrl = hero.casinoSlug ? getCasinoLogoUrl(hero.casinoSlug) : null;
  const bannerImageUrl = getLocalImageUrl(hero.bannerImageUrl);

  return (
    <SectionScaffold title={hero.title}>
      <div className="space-y-12">

        {/* Hero Section with Promotional Banner */}
        <section className="relative overflow-hidden bg-pink-400">
          <div className="absolute inset-0 bg-black/10"></div>
          
          {/* Promotional Period Badge */}
          {hero.promotionalPeriod && (
            <div className="absolute top-4 right-4 z-10">
              <div className="inline-flex flex-col items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-white ring-1 ring-white/30">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">期間限定</span>
                </div>
                {hero.promotionalPeriod.daysRemaining && (
                  <span className="text-2xl font-bold">{hero.promotionalPeriod.daysRemaining}日間</span>
                )}
              </div>
            </div>
          )}

          <div className="relative mx-auto max-w-6xl px-8 py-16 md:py-2">
            <div className="text-white">
              <div className="flex items-center gap-2 mb-4">
                <Gift className="h-8 w-8" />
                <span className="text-sm font-semibold uppercase tracking-wider">限定オファー</span>
              </div>
              
              {logoUrl && (
                <div className="mb-4">
                  <Image
                    src={logoUrl}
                    alt={hero.casino}
                    width={200}
                    height={100}
                    className="rounded-lg bg-white p-3 shadow-lg"
                  />
                </div>
              )}

              <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-6">
                {hero.title}
              </h1>
              
              {hero.description && (
                <p className="text-lg text-purple-50 leading-relaxed max-w-4xl mb-4">
                  {renderMarkdown(hero.description)}
                </p>
              )}

              {hero.promotionalPeriod && (
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white">
                  <Clock className="h-4 w-4" />
                  <span className="font-medium">
                    期間: {hero.promotionalPeriod.startDate} - {hero.promotionalPeriod.endDate}
                  </span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Offer Highlight Card */}
        {offerHighlight && (
          <section className="mx-auto max-w-6xl">
            <div className="rounded-2xl border-2 border-yellow-400 bg-gradient-to-br from-yellow-50 via-white to-orange-50 shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 px-6 py-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Award className="h-6 w-6" />
                    {offerHighlight.bonusType}
                  </h2>
                  {offerHighlight.featured && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-semibold text-orange-600">
                      <Star className="h-3 w-3 fill-current" />
                      限定オファー
                    </span>
                  )}
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-1">
                      {offerHighlight.bonusAmount}
                    </div>
                    <div className="text-sm text-gray-600">ボーナス額</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-600 mb-1">
                      {offerHighlight.wagering}
                    </div>
                    <div className="text-sm text-gray-600">賭け条件</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-1">
                      {offerHighlight.validity}
                    </div>
                    <div className="text-sm text-gray-600">有効期限</div>
                  </div>
                  {offerHighlight.maxWinnings && (
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 mb-1">
                        {offerHighlight.maxWinnings}
                      </div>
                      <div className="text-sm text-gray-600">最大勝利金</div>
                    </div>
                  )}
                </div>

                {offerHighlight.bonusCode && (
                  <div className="rounded-xl border-2 border-dashed border-yellow-500 bg-yellow-50 p-6 text-center">
                    <div className="text-sm font-semibold text-yellow-700 mb-2">ボーナスコード</div>
                    <div className="text-3xl font-bold text-yellow-600 font-mono tracking-wider">
                      {offerHighlight.bonusCode}
                    </div>
                    <div className="text-xs text-yellow-600 mt-2">上記コードをコピーして使用してください</div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Introduction */}
        {intro && intro.length > 0 && (
          <section className="mx-auto max-w-6xl">
            <div className="rounded-2xl border border-purple-100 bg-white p-8 shadow-sm">
              <div className="space-y-4">
                {intro.map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-800 leading-relaxed">
                    {renderMarkdown(paragraph)}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Claim Steps */}
        {claimSteps && claimSteps.length > 0 && (
          <section id="how-to-claim" className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-extrabold text-gray-800 mb-6 flex items-center gap-3">
              <Target className="h-8 w-8 text-purple-600" />
              入金不要ボーナス獲得方法
            </h2>

            <div className="space-y-8">
              {claimSteps.map((step, index) => (
                <div key={index} className="rounded-2xl border border-purple-100 bg-white p-8 shadow-sm">
                  <div className="flex items-start gap-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-pink-600 text-2xl font-bold text-white">
                      {step.stepNumber}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>

                      <div className="space-y-3 mb-4">
                        {step.description.map((desc, i) => (
                          <p key={i} className="text-gray-700 leading-relaxed">
                            {renderMarkdown(desc)}
                          </p>
                        ))}
                      </div>

                      {step.bullets && step.bullets.length > 0 && (
                        <ul className="space-y-2 mb-4">
                          {step.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-700">
                              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                              <span>{renderMarkdown(bullet)}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {step.bonusCode && (
                        <div className="rounded-xl border-2 border-dashed border-purple-500 bg-purple-50 p-4 text-center mb-4">
                          <div className="text-sm font-semibold text-purple-700 mb-2">ボーナスコード</div>
                          <div className="text-2xl font-bold text-purple-600 font-mono tracking-wider">
                            {step.bonusCode}
                          </div>
                        </div>
                      )}

                      {step.imageUrl && (
                        <div className="rounded-lg overflow-hidden border border-gray-200 mt-4">
                          <img
                            src={step.imageUrl}
                            alt={step.title}
                            className="w-full h-auto"
                          />
                        </div>
                      )}

                      {step.note && (
                        <div className="mt-4 rounded-lg bg-blue-50 p-4 flex items-start gap-3">
                          <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-blue-800">{renderMarkdown(step.note)}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Character Dialogues */}
        {characterDialogues && characterDialogues.length > 0 && (
          <section className="mx-auto max-w-6xl">
            <div className="space-y-6">
              {characterDialogues.map((dialogue, index) => (
                <div key={index} className="rounded-2xl border border-purple-100 bg-purple-50 p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <img
                      src={dialogue.avatarUrl}
                      alt={dialogue.characterName}
                      className="h-16 w-16 rounded-full border-2 border-white shadow-md flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="font-bold text-purple-700 mb-2">{dialogue.characterName}</div>
                      <p className="text-gray-800 leading-relaxed">{renderMarkdown(dialogue.message)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Terms and Conditions */}
        {termsAndConditions && (
          <section id="terms-and-conditions" className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-extrabold text-gray-800 mb-6 flex items-center gap-3">
              <Shield className="h-8 w-8 text-purple-600" />
              {termsAndConditions.heading}
            </h2>

            <div className="rounded-2xl border border-purple-100 bg-white p-8 shadow-sm">
              <div className="space-y-6">
                {termsAndConditions.items.map((item, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                    <div className="flex flex-col md:flex-row md:items-start gap-2">
                      <div className="font-bold text-purple-700 md:w-48 flex-shrink-0">
                        {item.label}
                      </div>
                      <div className="flex-1">
                        <div className="text-gray-900 font-semibold mb-1">{item.value}</div>
                        {item.note && (
                          <div className="text-sm text-gray-600 mt-2 bg-gray-50 p-3 rounded-lg">
                            {renderMarkdown(item.note)}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {termsAndConditions.prohibitions && termsAndConditions.prohibitions.length > 0 && (
                <div className="mt-6 rounded-lg bg-red-50 p-6">
                  <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    禁止事項
                  </h4>
                  <ul className="space-y-2">
                    {termsAndConditions.prohibitions.map((prohibition, index) => (
                      <li key={index} className="text-sm text-red-800 flex items-start gap-2">
                        <span className="text-red-600 font-bold flex-shrink-0">×</span>
                        <span>{renderMarkdown(prohibition)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {termsAndConditions.warnings && termsAndConditions.warnings.length > 0 && (
                <div className="mt-6 rounded-lg bg-yellow-50 p-6">
                  <h4 className="font-bold text-yellow-700 mb-3 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    注意事項
                  </h4>
                  <ul className="space-y-2">
                    {termsAndConditions.warnings.map((warning, index) => (
                      <li key={index} className="text-sm text-yellow-800 flex items-start gap-2">
                        <span className="text-yellow-600 font-bold flex-shrink-0">!</span>
                        <span>{renderMarkdown(warning)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Casino Info */}
        {casinoInfo && (
          <section id="casino-info" className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-extrabold text-gray-800 mb-6 flex items-center gap-3">
              <Star className="h-8 w-8 text-purple-600" />
              {casinoInfo.heading}
            </h2>

            <div className="rounded-2xl border border-purple-100 bg-purple-50 p-8 shadow-sm">
              {casinoInfo.rating && (
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-6 w-6 ${
                          i < Math.floor(casinoInfo.rating!)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-purple-700">
                    {casinoInfo.rating.toFixed(1)}
                  </span>
                </div>
              )}

              <div className="space-y-4 mb-6">
                {casinoInfo.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-gray-800 leading-relaxed">
                    {renderMarkdown(paragraph)}
                  </p>
                ))}
              </div>

              {casinoInfo.features && casinoInfo.features.length > 0 && (
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {casinoInfo.features.map((feature, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border border-purple-100">
                      <h4 className="font-bold text-purple-700 mb-2">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{renderMarkdown(feature.description)}</p>
                    </div>
                  ))}
                </div>
              )}

              {casinoInfo.officialUrl && (
                <div className="text-center">
                  <a
                    href={casinoInfo.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-pink-600 px-8 py-4 text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all"
                  >
                    公式サイトへ
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Target Games */}
        {targetGames && (
          <section className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-extrabold text-gray-800 mb-6 flex items-center gap-3">
              <Gamepad2 className="h-8 w-8 text-purple-600" />
              {targetGames.heading}
            </h2>

            <div className="rounded-2xl border border-purple-100 bg-white p-8 shadow-sm">
              {targetGames.description && (
                <p className="text-gray-700 leading-relaxed mb-6">
                  {renderMarkdown(targetGames.description)}
                </p>
              )}

              {targetGames.eligibleGames && targetGames.eligibleGames.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-bold text-purple-700 mb-3">対象ゲーム</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {targetGames.eligibleGames.map((game, index) => (
                      <div key={index} className="flex items-center gap-2 bg-green-50 rounded-lg p-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-800">{renderMarkdown(game)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {targetGames.ineligibleGames && targetGames.ineligibleGames.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-bold text-red-700 mb-3">対象外ゲーム</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {targetGames.ineligibleGames.map((game, index) => (
                      <div key={index} className="flex items-center gap-2 bg-red-50 rounded-lg p-3">
                        <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                        <span className="text-gray-800">{renderMarkdown(game)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {targetGames.recommendedGames && targetGames.recommendedGames.length > 0 && (
                <div>
                  <h4 className="font-bold text-purple-700 mb-3">おすすめゲーム</h4>
                  <div className="space-y-3">
                    {targetGames.recommendedGames.map((game, index) => (
                      <div key={index} className="bg-purple-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-bold text-gray-900">{game.name}</h5>
                          <span className="text-sm font-semibold text-purple-600">RTP: {game.rtp}</span>
                        </div>
                        {game.description && (
                          <p className="text-sm text-gray-600">{renderMarkdown(game.description)}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Payment Methods */}
        {paymentMethods && (
          <section className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-extrabold text-gray-800 mb-6 flex items-center gap-3">
              <CreditCard className="h-8 w-8 text-purple-600" />
              {paymentMethods.heading}
            </h2>

            <div className="rounded-2xl border border-purple-100 bg-white p-8 shadow-sm">
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h4 className="font-bold text-purple-700 mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    入金方法
                  </h4>
                  <div className="space-y-2">
                    {paymentMethods.depositMethods.map((method, index) => (
                      <div key={index} className="flex items-center gap-2 bg-gray-50 rounded-lg p-3">
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{method}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-purple-700 mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    出金方法
                  </h4>
                  <div className="space-y-2">
                    {paymentMethods.withdrawalMethods.map((method, index) => (
                      <div key={index} className="flex items-center gap-2 bg-gray-50 rounded-lg p-3">
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{method}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {paymentMethods.notes && paymentMethods.notes.length > 0 && (
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-blue-700 mb-2 flex items-center gap-2">
                    <Info className="h-5 w-5" />
                    お支払いに関する注意事項
                  </h4>
                  <ul className="space-y-2">
                    {paymentMethods.notes.map((note, index) => (
                      <li key={index} className="text-sm text-blue-800">
                        {renderMarkdown(note)}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Mobile Compatibility */}
        {mobileCompatibility && (
          <section className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-extrabold text-gray-800 mb-6 flex items-center gap-3">
              <Smartphone className="h-8 w-8 text-purple-600" />
              {mobileCompatibility.heading}
            </h2>

            <div className="rounded-2xl border border-purple-100 bg-white p-8 shadow-sm">
              <div className="space-y-4">
                {mobileCompatibility.description.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {renderMarkdown(paragraph)}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Strategy */}
        {strategy && (
          <section className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-extrabold text-gray-800 mb-6 flex items-center gap-3">
              <Target className="h-8 w-8 text-purple-600" />
              {strategy.heading}
            </h2>

            <div className="space-y-6">
              {strategy.subsections.map((subsection, index) => (
                <div key={index} className="rounded-2xl border border-purple-100 bg-white p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-purple-700 mb-4">{subsection.subheading}</h3>

                  {subsection.tips && subsection.tips.length > 0 && (
                    <ul className="space-y-3 mb-4">
                      {subsection.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 leading-relaxed">{renderMarkdown(tip)}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {subsection.warnings && subsection.warnings.length > 0 && (
                    <div className="bg-yellow-50 rounded-lg p-4">
                      <h4 className="font-bold text-yellow-700 mb-3 flex items-center gap-2">
                        <AlertCircle className="h-5 w-5" />
                        注意点
                      </h4>
                      <ul className="space-y-2">
                        {subsection.warnings.map((warning, i) => (
                          <li key={i} className="text-sm text-yellow-800 flex items-start gap-2">
                            <span className="text-yellow-600 font-bold flex-shrink-0">!</span>
                            <span>{renderMarkdown(warning)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Similar Offers */}
        {similarOffers && similarOffers.offers && similarOffers.offers.length > 0 && (
          <section className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-extrabold text-gray-800 mb-6 flex items-center gap-3">
              <Gift className="h-8 w-8 text-purple-600" />
              {similarOffers.heading}
            </h2>

            <div className="rounded-2xl border border-purple-100 bg-white p-8 shadow-sm">
              {similarOffers.description && (
                <p className="text-gray-700 leading-relaxed mb-6">
                  {renderMarkdown(similarOffers.description)}
                </p>
              )}

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {similarOffers.offers.map((offer, index) => (
                  <div key={index} className="border border-purple-100 rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <h4 className="font-bold text-purple-700 mb-2">{offer.casino}</h4>
                    <p className="text-sm text-gray-600 mb-3">{offer.feature}</p>
                    {offer.offerLink && (
                      <Link
                        href={offer.offerLink}
                        className="text-sm text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-1"
                      >
                        詳細を見る
                        <ExternalLink className="h-3 w-3" />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Summary */}
        {summary && (
          <section className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-extrabold text-gray-800 mb-6 flex items-center gap-3">
              <Award className="h-8 w-8 text-purple-600" />
              {summary.heading}
            </h2>

            <div className="rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50 to-pink-50 p-8 shadow-sm">
              <div className="space-y-4 mb-6">
                {summary.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-gray-800 leading-relaxed">
                    {renderMarkdown(paragraph)}
                  </p>
                ))}
              </div>

              {summary.recommendedFor && summary.recommendedFor.length > 0 && (
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-purple-700 mb-4">こんな方におすすめ</h4>
                  <ul className="space-y-3">
                    {summary.recommendedFor.map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{renderMarkdown(item)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* FAQ */}
        {faq && faq.length > 0 && (
          <section id="faq" className="mx-auto max-w-6xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">よくある質問</h2>
              <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
            </div>
            <div className="bg-white rounded-xl shadow-lg divide-y divide-gray-100 overflow-hidden">
              {faq.map((item, index) => (
                <details key={index} className="group">
                  <summary className="list-none cursor-pointer select-none px-6 py-5 flex items-center justify-between gap-4 hover:bg-purple-50/50 transition-colors">
                    <div className="flex items-center gap-3 flex-1">
                      {item.character && (
                        <CharacterAvatar character={item.character} />
                      )}
                      <span className="font-semibold text-gray-900 group-open:text-purple-600">
                        {renderMarkdown(item.question)}
                      </span>
                    </div>
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="h-4 w-4 text-purple-600 transition-transform group-open:rotate-180"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-6 pb-5 bg-purple-50/30">
                    <p className="text-gray-800 leading-relaxed">{renderMarkdown(item.answer)}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Author */}
        {author && (
          <section className="mx-auto max-w-6xl">
            <div className="rounded-2xl border border-purple-100 bg-white p-8 shadow-sm">
              <div className="flex items-start gap-6">
                <img
                  src={author.avatarUrl}
                  alt={author.nameJapanese || author.name}
                  className="h-24 w-24 rounded-full border-4 border-purple-200 shadow-lg flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {author.nameJapanese || author.name}
                    </h3>
                    <p className="text-sm text-purple-600 font-semibold">{author.role}</p>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
                    {author.bio}
                  </p>

                  {author.expertise && author.expertise.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {author.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {author.authorPageUrl && (
                    <Link
                      href={author.authorPageUrl}
                      className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold"
                    >
                      著者ページを見る
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        {cta && (
          <section className="mx-auto max-w-6xl">
            <div className="rounded-2xl bg-pink-600 p-12 text-center shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-4">{cta.text}</h3>
              <a
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-xl font-bold text-purple-600 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                {cta.buttonText || "今すぐ始める"}
                <ExternalLink className="h-6 w-6" />
              </a>
            </div>
          </section>
        )}

        {/* Responsible Gambling Footer */}
      </div>

      <div className="mt-12 mb-8 max-w-6xl mx-auto">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg shadow-sm text-center">
          <h4 className="text-lg font-bold text-yellow-700 mb-2">⚠️ 責任あるギャンブルの推奨 ⚠️</h4>
          <p className="text-gray-800 text-sm leading-relaxed">
            オンラインカジノやボーナスは、あくまで娯楽としてお楽しみください。<br />
            <span className="font-semibold">「余裕資金の範囲内でプレイし、のめり込みすぎない」</span>ことが大切です。<br />
            万が一、ギャンブルによる問題や不安を感じた場合は、<a href="https://www.gambleaware.org/" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 hover:text-blue-900">専門機関</a>への相談もご検討ください。
          </p>
        </div>
      </div>
    </SectionScaffold>
  );
}
