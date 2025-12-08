import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Star, ExternalLink, TrendingUp, Shield, Gift, AlertCircle,
  CheckCircle2, Info, Clock, Award, Gamepad2, CreditCard,
  Smartphone, Target, Zap, ChevronDown
} from "lucide-react";
import SectionScaffold from "@/components/shell/SectionScaffold";
import { renderMarkdown } from "@/components/ui/RichText";
import { getCasinoLogoUrl, getCasinoLogoAlt, getLocalImageUrl } from "@/lib/logos";

// Import types from the shared location
export type {
  PokerPageContent,
  PokerHero,
  PokerIntroduction,
  PokerOfferDetail,
  PokerCasinoFeature,
  PokerOfferSection,
  PokerTableOfContentsItem,
  PokerCallout,
  PokerWhatYoullLearn,
  PokerPlayStyleType,
  PokerStrategySubsection,
  PokerStrategySection,
  PokerLevelingTable,
  PokerHeadsUpStrategy,
  PokerMistakeSection,
  PokerSummary,
  PokerFAQItem,
  PokerAuthor,
} from "@/PokerPageContent";

import type { PokerPageContent } from "@/PokerPageContent";

type PokerDetailTemplateProps = {
  data: PokerPageContent;
  canonicalPath?: string;
};

// Character avatar component
function CharacterAvatar({ character, characterName, avatarUrl }: {
  character?: "casiko" | "oka-kyoju" | "cocomo" | "kyoju" | "casiko-oka-kyoju";
  characterName?: string;
  avatarUrl?: string;
}) {
  const defaultAvatars = {
    casiko: "/images/casiko.svg",
    cocomo: "/images/cocomo.svg",
    kyoju: "/images/kyoju.svg",
    "oka-kyoju": "/images/oka-kyoju.svg",
    "casiko-oka-kyoju": "/images/casiko.svg",
  };

  const defaultNames = {
    casiko: "カジ子",
    cocomo: "ココモ",
    kyoju: "教授",
    "oka-kyoju": "オカ教授",
    "casiko-oka-kyoju": "カジ子 / 岡教授",
  };

  const imgSrc = avatarUrl || (character ? defaultAvatars[character] : "/images/kyoju.svg");
  const name = characterName || (character ? defaultNames[character] : "");

  return (
    <img
      src={imgSrc}
      alt={name}
      className="h-12 w-12 rounded-full border-2 border-white shadow-md"
    />
  );
}

export default function PokerDetailTemplate({ data, canonicalPath }: PokerDetailTemplateProps) {
  const {
    hero,
    introduction,
    offerSection,
    tableOfContents,
    whatYoullLearn,
    basicStrategy,
    advancedStrategy,
    leveling,
    headsUpStrategy,
    mistakeCorrection,
    summary,
    faq,
    author,
    notice,
    breadcrumbs,
  } = data;

  return (
    <SectionScaffold title={hero.title}>
      <div className="space-y-12">

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-2xl p-8 md:p-12">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {hero.title}
            </h1>
            {hero.subtitle && (
              <p className="text-xl text-white/90 mb-4">{hero.subtitle}</p>
            )}
            {hero.lastUpdated && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                <Clock className="h-4 w-4" />
                最終更新: {hero.lastUpdated}
              </div>
            )}
          </div>
        </section>

        {/* Introduction */}
        {introduction && (
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="h-8 w-1 bg-red-600 rounded-full"></div>
              {introduction.heading}
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {introduction.paragraphs.map((p, i) => (
                <p key={i} className="text-lg">{p}</p>
              ))}
            </div>
          </section>
        )}

        {/* Offer Section */}
        {offerSection && (
          <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Gift className="h-8 w-8 text-amber-600" />
              {offerSection.heading}
            </h2>

            {offerSection.description && (
              <div className="mb-6 space-y-3">
                {offerSection.description.map((p, i) => (
                  <p key={i} className="text-gray-700">{p}</p>
                ))}
              </div>
            )}

            {/* Casino Info */}
            {offerSection.casino && (
              <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  {offerSection.casino.imageUrl && getLocalImageUrl(offerSection.casino.imageUrl) && (
                    <img
                      src={getLocalImageUrl(offerSection.casino.imageUrl)!}
                      alt={offerSection.casino.name}
                      className="w-24 h-24 object-contain rounded-lg"
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{offerSection.casino.name}</h3>
                    <div className="space-y-2">
                      {offerSection.casino.description.map((d, i) => (
                        <p key={i} className="text-gray-700">{d}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Offer Details Table */}
            {offerSection.offerDetails && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">{offerSection.offerDetails.heading}</h3>

                <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <table className="min-w-full">
                    <tbody className="divide-y divide-gray-200">
                      {offerSection.offerDetails.table.map((item, i) => (
                        <tr key={i} className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-semibold text-gray-900 w-1/3">
                            {item.label}
                          </td>
                          <td className="px-6 py-4 text-gray-700">
                            {item.value}
                            {item.note && (
                              <p className="text-sm text-gray-500 mt-2 italic">{item.note}</p>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Bonus Code Info */}
                {offerSection.offerDetails.bonusCodeInfo && (
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-4">{offerSection.offerDetails.bonusCodeInfo.heading}</h4>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      {offerSection.offerDetails.bonusCodeInfo.steps.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                  </div>
                )}

                {/* Alternative Offer */}
                {offerSection.offerDetails.alternativeOffer && (
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <h4 className="font-bold text-gray-900 mb-3">{offerSection.offerDetails.alternativeOffer.heading}</h4>
                    <div className="space-y-2">
                      {offerSection.offerDetails.alternativeOffer.description.map((d, i) => (
                        <p key={i} className="text-gray-700">{d}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Casino Features */}
            {offerSection.features && offerSection.features.length > 0 && (
              <div className="mt-8 space-y-6">
                {offerSection.features.map((feature, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-3">{feature.heading}</h4>
                    {feature.subheading && (
                      <p className="text-sm font-semibold text-gray-700 mb-2">{feature.subheading}</p>
                    )}
                    {feature.description && feature.description.length > 0 && (
                      <div className="space-y-2 mb-3">
                        {feature.description.map((d, j) => (
                          <p key={j} className="text-gray-700">{d}</p>
                        ))}
                      </div>
                    )}
                    {feature.bullets && feature.bullets.length > 0 && (
                      <ul className="space-y-2">
                        {feature.bullets.map((bullet, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Warnings */}
            {offerSection.warnings && offerSection.warnings.length > 0 && (
              <div className="mt-6 bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div className="space-y-2">
                    {offerSection.warnings.map((warning, i) => (
                      <p key={i} className="text-gray-700">{warning}</p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </section>
        )}

        {/* Table of Contents */}
        {tableOfContents && tableOfContents.length > 0 && (
          <section className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Info className="h-5 w-5 text-blue-600" />
              目次
            </h3>
            <ul className="space-y-2">
              {tableOfContents.map((item, i) => (
                <li key={i}>
                  <a href={item.url} className="text-blue-600 hover:text-blue-700 hover:underline">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* What You'll Learn */}
        {whatYoullLearn && (
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="h-8 w-1 bg-red-600 rounded-full"></div>
              {whatYoullLearn.heading}
            </h2>
            <div className="space-y-4 mb-8">
              {whatYoullLearn.paragraphs.map((p, i) => (
                <p key={i} className="text-lg text-gray-700 leading-relaxed">{p}</p>
              ))}
            </div>

            {/* Featured Casino */}
            {whatYoullLearn.featuredCasino && (
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 border-2 border-blue-200">
                <div className="flex items-start gap-4">
                  {whatYoullLearn.featuredCasino.imageUrl && getLocalImageUrl(whatYoullLearn.featuredCasino.imageUrl) && (
                    <img
                      src={getLocalImageUrl(whatYoullLearn.featuredCasino.imageUrl)!}
                      alt={whatYoullLearn.featuredCasino.name}
                      className="w-24 h-24 object-contain rounded-lg"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{whatYoullLearn.featuredCasino.name}</h3>
                    <p className="text-gray-700 mb-4">{whatYoullLearn.featuredCasino.description}</p>
                    <a
                      href={whatYoullLearn.featuredCasino.cta.href}
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                    >
                      {whatYoullLearn.featuredCasino.cta.text}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Before Starting Items */}
            {whatYoullLearn.beforeStarting && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">{whatYoullLearn.beforeStarting.heading}</h3>
                <div className="space-y-6">
                  {whatYoullLearn.beforeStarting.items.map((item, i) => (
                    <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                          {item.number}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-900 mb-3">{item.heading}</h4>
                          <div className="space-y-3">
                            {item.paragraphs.map((p, j) => (
                              <p key={j} className="text-gray-700" dangerouslySetInnerHTML={{ __html: p }}></p>
                            ))}
                          </div>
                          {item.bullets && item.bullets.length > 0 && (
                            <ul className="mt-4 space-y-2">
                              {item.bullets.map((bullet, j) => (
                                <li key={j} className="flex items-start gap-2">
                                  <span className="text-red-600 mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600 flex-shrink-0"></span>
                                  <span className="text-gray-700">{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          {item.callout && (
                            <div className="mt-4 bg-blue-50 rounded-lg p-4 border border-blue-200">
                              <div className="flex items-start gap-3">
                                {item.callout.emoji && <span className="text-2xl">{item.callout.emoji}</span>}
                                <div className="flex-1">
                                  {item.callout.heading && (
                                    <p className="font-semibold text-gray-900 mb-1">{item.callout.heading}</p>
                                  )}
                                  <p className="text-gray-700">{item.callout.description}</p>
                                  {item.callout.linkText && item.callout.linkUrl && (
                                    <a href={item.callout.linkUrl} className="text-blue-600 hover:text-blue-700 hover:underline mt-2 inline-block">
                                      {item.callout.linkText}
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Basic Strategy */}
        {basicStrategy && (
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="h-8 w-1 bg-red-600 rounded-full"></div>
              {basicStrategy.heading}
            </h2>
            {basicStrategy.introduction && (
              <div className="space-y-4 mb-8">
                {basicStrategy.introduction.map((p, i) => (
                  <p key={i} className="text-lg text-gray-700 leading-relaxed">{p}</p>
                ))}
              </div>
            )}

            <div className="space-y-8">
              {basicStrategy.subsections.map((subsection, i) => (
                <div key={i} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{subsection.heading}</h3>

                  {subsection.paragraphs && (
                    <div className="space-y-3 mb-4">
                      {subsection.paragraphs.map((p, j) => (
                        <p key={j} className="text-gray-700" dangerouslySetInnerHTML={{ __html: p }}></p>
                      ))}
                    </div>
                  )}

                  {subsection.playStyleTypes && subsection.playStyleTypes.length > 0 && (
                    <div className="overflow-x-auto mb-6">
                      <table className="min-w-full border rounded-lg">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left font-semibold text-gray-900">タイプ</th>
                            <th className="px-4 py-3 text-left font-semibold text-gray-900">特徴</th>
                            <th className="px-4 py-3 text-left font-semibold text-gray-900">おすすめ</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {subsection.playStyleTypes.map((style, j) => (
                            <tr key={j} className="hover:bg-gray-50">
                              <td className="px-4 py-3 font-semibold text-gray-900">{style.type}</td>
                              <td className="px-4 py-3 text-gray-700">{style.characteristics}</td>
                              <td className="px-4 py-3 text-gray-700">{style.recommendedFor}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {subsection.bullets && subsection.bullets.length > 0 && (
                    <ul className="space-y-2 mb-4">
                      {subsection.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: bullet }}></span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {subsection.strategies && subsection.strategies.length > 0 && (
                    <div className="space-y-4 mt-6">
                      {subsection.strategies.map((strategy, j) => (
                        <div key={j} className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">{strategy.subheading}</h4>
                          {strategy.paragraphs && (
                            <div className="space-y-2">
                              {strategy.paragraphs.map((p, k) => (
                                <p key={k} className="text-gray-700">{p}</p>
                              ))}
                            </div>
                          )}
                          {strategy.bullets && strategy.bullets.length > 0 && (
                            <ul className="mt-3 space-y-1">
                              {strategy.bullets.map((bullet, k) => (
                                <li key={k} className="flex items-start gap-2 text-sm">
                                  <span className="text-red-600 mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600 flex-shrink-0"></span>
                                  <span className="text-gray-700">{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Advanced Strategy */}
        {advancedStrategy && (
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="h-8 w-1 bg-purple-600 rounded-full"></div>
              {advancedStrategy.heading}
            </h2>
            {advancedStrategy.introduction && (
              <div className="space-y-4 mb-8">
                {advancedStrategy.introduction.map((p, i) => (
                  <p key={i} className="text-lg text-gray-700 leading-relaxed">{p}</p>
                ))}
              </div>
            )}

            <div className="space-y-8">
              {advancedStrategy.subsections.map((subsection, i) => (
                <div key={i} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border-2 border-purple-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{subsection.heading}</h3>

                  {subsection.paragraphs && (
                    <div className="space-y-3 mb-4">
                      {subsection.paragraphs.map((p, j) => (
                        <p key={j} className="text-gray-700" dangerouslySetInnerHTML={{ __html: p }}></p>
                      ))}
                    </div>
                  )}

                  {subsection.bullets && subsection.bullets.length > 0 && (
                    <ul className="space-y-2 mb-4">
                      {subsection.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <Zap className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {subsection.strategies && subsection.strategies.length > 0 && (
                    <div className="space-y-4 mt-6">
                      {subsection.strategies.map((strategy, j) => (
                        <div key={j} className="bg-white rounded-lg p-4 shadow-sm">
                          <h4 className="font-semibold text-gray-900 mb-2">{strategy.subheading}</h4>
                          {strategy.paragraphs && (
                            <div className="space-y-2">
                              {strategy.paragraphs.map((p, k) => (
                                <p key={k} className="text-gray-700">{p}</p>
                              ))}
                            </div>
                          )}
                          {strategy.bullets && strategy.bullets.length > 0 && (
                            <ul className="mt-3 space-y-1">
                              {strategy.bullets.map((bullet, k) => (
                                <li key={k} className="flex items-start gap-2 text-sm">
                                  <span className="text-purple-600 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600 flex-shrink-0"></span>
                                  <span className="text-gray-700">{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Leveling Table */}
        {leveling && (
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{leveling.heading}</h2>
            {leveling.description && (
              <p className="text-gray-700 mb-6">{leveling.description}</p>
            )}
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-50">
                  <tr>
                    {leveling.columns.map((col, i) => (
                      <th key={i} className="px-6 py-3 text-left font-semibold text-gray-900">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {leveling.rows.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">{row.level}</td>
                      <td className="px-6 py-4 text-gray-700">{row.content}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Heads-Up Strategy */}
        {headsUpStrategy && (
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Target className="h-8 w-8 text-orange-600" />
              {headsUpStrategy.heading}
            </h2>
            {headsUpStrategy.introduction && (
              <div className="space-y-4 mb-8">
                {headsUpStrategy.introduction.map((p, i) => (
                  <p key={i} className="text-lg text-gray-700 leading-relaxed">{p}</p>
                ))}
              </div>
            )}

            <div className="space-y-6 mb-8">
              {headsUpStrategy.strategies.map((strategy, i) => (
                <div key={i} className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {strategy.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{strategy.heading}</h3>
                      <div className="space-y-3">
                        {strategy.paragraphs.map((p, j) => (
                          <p key={j} className="text-gray-700" dangerouslySetInnerHTML={{ __html: p }}></p>
                        ))}
                      </div>
                      {strategy.bullets && strategy.bullets.length > 0 && (
                        <ul className="mt-4 space-y-2">
                          {strategy.bullets.map((bullet, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {headsUpStrategy.summary && (
              <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{headsUpStrategy.summary.heading}</h3>
                <div className="space-y-3">
                  {headsUpStrategy.summary.paragraphs.map((p, i) => (
                    <p key={i} className="text-gray-700">{p}</p>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Mistake Correction */}
        {mistakeCorrection && (
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertCircle className="h-8 w-8 text-red-600" />
              {mistakeCorrection.heading}
            </h2>
            {mistakeCorrection.introduction && (
              <div className="space-y-4 mb-8">
                {mistakeCorrection.introduction.map((p, i) => (
                  <p key={i} className="text-lg text-gray-700 leading-relaxed">{p}</p>
                ))}
              </div>
            )}

            <div className="space-y-8">
              {mistakeCorrection.subsections.map((subsection, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                      {subsection.number}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{subsection.heading}</h3>
                  </div>

                  <div className="space-y-4">
                    {subsection.paragraphs.map((p, j) => (
                      <p key={j} className="text-gray-700" dangerouslySetInnerHTML={{ __html: p }}></p>
                    ))}
                  </div>

                  {subsection.points && subsection.points.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {subsection.points.map((point, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {subsection.bullets && subsection.bullets.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {subsection.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="text-red-600 mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600 flex-shrink-0"></span>
                          <span className="text-gray-700">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {subsection.examples && subsection.examples.length > 0 && (
                    <div className="mt-4 space-y-3">
                      {subsection.examples.map((example, j) => (
                        <div key={j} className="bg-gray-50 rounded-lg p-4">
                          {example.type && (
                            <p className="font-semibold text-gray-900 mb-1">{example.type}</p>
                          )}
                          <p className="text-gray-700">{example.description}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {subsection.image && getLocalImageUrl(subsection.image.src) && (
                    <div className="mt-6">
                      <img
                        src={getLocalImageUrl(subsection.image.src)!}
                        alt={subsection.image.alt}
                        className="w-full rounded-lg shadow-sm"
                      />
                      {subsection.image.caption && (
                        <p className="text-sm text-gray-500 mt-2 text-center">{subsection.image.caption}</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Summary */}
        {summary && (
          <section className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border-2 border-green-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
              {summary.heading}
            </h2>
            <div className="space-y-4">
              {summary.paragraphs.map((p, i) => (
                <p key={i} className="text-lg text-gray-700 leading-relaxed">{p}</p>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        {faq && faq.length > 0 && (
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">よくある質問</h2>
            <div className="space-y-4">
              {faq.map((item, i) => (
                <details key={i} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start gap-4 flex-1">
                      {item.character && (
                        <CharacterAvatar
                          character={item.character}
                          characterName={item.characterName}
                          avatarUrl={item.avatarUrl}
                        />
                      )}
                      <span className="font-semibold text-gray-900 text-lg flex-1">{item.question}</span>
                    </div>
                    <ChevronDown className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180 flex-shrink-0 ml-4" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-100">
                    <p className="pt-4">{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Author */}
        {author && (
          <section className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200">
            <div className="flex items-start gap-6">
              {author.avatarUrl && getLocalImageUrl(author.avatarUrl) && (
                <img
                  src={getLocalImageUrl(author.avatarUrl)!}
                  alt={author.name}
                  className="w-24 h-24 rounded-full border-4 border-white shadow-lg flex-shrink-0"
                />
              )}
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-gray-900">{author.name}</h3>
                  {author.nameJapanese && (
                    <span className="text-lg text-gray-600">({author.nameJapanese})</span>
                  )}
                </div>
                <p className="text-sm font-semibold text-blue-600 mb-3">{author.role}</p>
                <p className="text-gray-700 leading-relaxed mb-4">{author.bio}</p>
                {author.expertise && author.expertise.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {author.expertise.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
                {author.authorPageUrl && (
                  <a
                    href={author.authorPageUrl}
                    className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-semibold hover:underline"
                  >
                    著者ページを見る →
                  </a>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Cookie Notice */}
        {notice && (
          <section className="bg-gray-100 rounded-xl p-6 border border-gray-300">
            {notice.heading && (
              <h3 className="font-bold text-gray-900 mb-3">{notice.heading}</h3>
            )}
            <p className="text-gray-700 mb-4">{notice.content}</p>
            {notice.buttons && notice.buttons.length > 0 && (
              <div className="flex gap-3">
                {notice.buttons.map((button, i) => (
                  <button
                    key={i}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      button.action === 'accept'
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : 'bg-gray-300 hover:bg-gray-400 text-gray-800'
                    }`}
                  >
                    {button.text}
                  </button>
                ))}
              </div>
            )}
          </section>
        )}

      </div>
    </SectionScaffold>
  );
}
