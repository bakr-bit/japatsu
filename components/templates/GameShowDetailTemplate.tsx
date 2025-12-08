import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, ExternalLink, TrendingUp, CheckCircle2, Info } from "lucide-react";
import SectionScaffold from "@/components/shell/SectionScaffold";
import { renderMarkdown } from "@/components/ui/RichText";
import { getCasinoLogoUrl, getLocalImageUrl } from "@/lib/logos";
import {
  GameShowHeroSection,
  FAQSection,
  AuthorSection,
  ResponsibleGamblingSection,
} from "@/components/sections";

/**
 * Type definitions for Game Show Page Content
 */
export type GameShowFeaturedCasino = {
  casino: string;
  casinoSlug?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  rating?: number;
  offerUrl?: string;
  reviewUrl?: string;
  bonus?: string;
  featured?: boolean;
};

export type GameShowCasinoListing = {
  casino: string;
  casinoSlug?: string;
  heading: string;
  description?: string[];
  betLimits?: Array<{
    game: string;
    maxBet: string;
  }>;
  features?: string[];
  highlights?: string[];
  cta?: {
    text: string;
    href: string;
  };
};

export type GameShowGameCategory = {
  title: string;
  heading: string;
  description?: string[];
  games?: Array<{
    name: string;
    slug?: string;
    description?: string;
    imageUrl?: string;
  }>;
  subsections?: Array<{
    subheading: string;
    gameName?: string;
    paragraphs?: string[];
    bullets?: string[];
    maxBet?: string;
    features?: string[];
    imageUrl?: string;
  }>;
  cta?: {
    text: string;
    href: string;
  };
};

export type GameShowProviderSection = {
  heading: string;
  paragraphs?: string[];
  providers?: Array<{
    name: string;
    slug?: string;
    description?: string;
    logoUrl?: string;
  }>;
  subsections?: Array<{
    subheading: string;
    paragraphs?: string[];
    bullets?: string[];
  }>;
};

export type GameShowEducationalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  paragraphsAfterBullets?: string[];
  // Optional custom renderer identifiers for specialized sections
  customComponent?: "GameInfoTable" | "PayoutTable";
  // For GameInfoTable
  gameInfo?: Array<{ label: string; value: string }>;
  // Alternate simple info table shape used by some content
  infoTable?: Array<{ item: string; detail: string }>;
  // For PayoutTable
  payouts?: Array<{ betType: string; payout: string; details?: string }>;
  notes?: string[];
  subsections?: Array<{
    subheading: string;
    paragraphs?: string[];
    bullets?: string[];
    table?: {
      columns: string[];
      rows: string[][];
    };
    image?: {
      src: string;
      alt: string;
      caption?: string;
    };
  }>;
  table?: {
    title?: string;
    columns: string[];
    rows: string[][];
    note?: string;
  };
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
};

export type GameShowFAQItem = {
  question: string;
  answer: string;
};

export type GameShowPageContent = {
  // Hero section
  hero: {
    title: string;
    description?: string;
    lastUpdated?: string;
    imageUrl?: string;
  };

  // Intro paragraph
  intro?: string;

  // Top-level game info table (alternative to educational.customComponent)
  gameInfo?: Array<{ label: string; value: string }>;

  // Featured casino recommendations at the top
  featuredCasinos?: GameShowFeaturedCasino[];

  // Main casino/game listings with bet limits
  casinoListings?: GameShowCasinoListing[];

  // Game categories (e.g., Baccarat, Blackjack, Roulette, Slots)
  gameCategories?: GameShowGameCategory[];

  // Provider information section
  providers?: GameShowProviderSection;

  // Where to play section (single educational-style block)
  whereToPlay?: GameShowEducationalSection;

  // Graphics & Sound section
  graphicsSound?: GameShowEducationalSection;

  // Payout information section
  payouts?: GameShowEducationalSection;

  // Mobile support section
  mobile?: GameShowEducationalSection;

  // Strategy & tips section
  strategy?: GameShowEducationalSection;

  // Similar games section
  similarGames?: {
    heading: string;
    description?: string;
    games?: Array<{
      name: string;
      slug?: string;
      description?: string;
    }>;
  };

  // General educational sections
  educational?: GameShowEducationalSection[];

  // Summary/Conclusion section
  summary?: {
    heading: string;
    paragraphs?: string[];
    suitedPlayers?: string[];
    paragraphsAfterBullets?: string | string[];
  };

  // FAQ section
  faq?: GameShowFAQItem[];

  // Final call-to-action
  cta?: {
    text: string;
    href: string;
  };

  // Author section (overrides default if provided)
  author?: {
    name: string;
    japaneseName?: string;
    title?: string;
    url?: string;
    avatarSrc?: string;
    avatarAlt?: string;
    bio?: string[];
  };

  // Table of contents
  tableOfContents?: Array<{
    label: string;
    href: string;
  }>;

  // Breadcrumbs
  breadcrumbs?: Array<{
    label: string;
    href: string;
  }>;

  // Additional metadata
  metadata?: {
    author?: string;
    authorBio?: string;
    publishDate?: string;
    lastModified?: string;
    category?: string;
    tags?: string[];
  };
};

type GameShowDetailTemplateProps = {
  data: GameShowPageContent;
  canonicalPath?: string;
};

export default function GameShowDetailTemplate({ data, canonicalPath }: GameShowDetailTemplateProps) {
  const {
    hero,
    intro,
    gameInfo,
    featuredCasinos,
    casinoListings,
    gameCategories,
    providers,
    whereToPlay,
    graphicsSound,
    payouts,
    mobile,
    strategy,
    similarGames,
    educational,
    summary,
    faq,
    cta
  } = data;

  return (
    <SectionScaffold title={hero.title}>
      <div className="space-y-12">

        {/* Hero Section */}
        <GameShowHeroSection
          title={hero.title}
          description={hero.description}
          lastUpdated={hero.lastUpdated}
        />

        {/* Intro Section */}
        {intro && (
          <section className="mx-auto max-w-6xl">
            <div className="rounded-2xl border border-purple-100 bg-white p-8 shadow-sm">
              <p className="text-lg text-gray-800 leading-relaxed">{renderMarkdown(intro)}</p>
            </div>
          </section>
        )}

        {/* Where To Play */}
        {whereToPlay && (
          <section className="mx-auto max-w-6xl space-y-8">
            <div className="rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden">
              <div className="bg-slate-100 px-6 py-4">
                <h2 className="text-2xl font-bold text-slate-900">{whereToPlay.heading}</h2>
              </div>
              <div className="p-6 space-y-6">
                {whereToPlay.paragraphs && (
                  <div className="space-y-4">
                    {whereToPlay.paragraphs.map((para, i) => (
                      <p key={i} className="text-gray-800 leading-relaxed">{renderMarkdown(para)}</p>
                    ))}
                  </div>
                )}
                {whereToPlay.bullets && (
                  <ul className="space-y-2">
                    {whereToPlay.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-800">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500 flex-shrink-0" />
                        {renderMarkdown(b)}
                      </li>
                    ))}
                  </ul>
                )}
                {whereToPlay.subsections && whereToPlay.subsections.length > 0 && (
                  <div className="space-y-6 mt-2">
                    {whereToPlay.subsections.map((sub, sIndex) => (
                      <div key={sIndex} className="rounded-xl bg-slate-50 border border-slate-200 p-6">
                        <h3 className="text-lg font-bold text-slate-900 mb-4">{sub.subheading}</h3>
                        {sub.paragraphs && (
                          <div className="space-y-3">
                            {sub.paragraphs.map((para, pIndex) => (
                              <p key={pIndex} className="text-gray-800 leading-relaxed">{renderMarkdown(para)}</p>
                            ))}
                          </div>
                        )}
                        {sub.bullets && (
                          <ul className="space-y-2 mt-3">
                            {sub.bullets.map((bullet, bIndex) => (
                              <li key={bIndex} className="flex items-start gap-2 text-gray-800">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500 flex-shrink-0" />
                                {renderMarkdown(bullet)}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Top-level Game Info */}
        {gameInfo && gameInfo.length > 0 && (
          <section className="mx-auto max-w-6xl">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <div className="bg-slate-100 px-6 py-4">
                <h2 className="text-2xl font-bold text-slate-900">ゲーム基本情報</h2>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto rounded-lg border border-slate-200">
                  <table className="w-full text-sm">
                    <tbody className="divide-y divide-slate-100">
                      {gameInfo.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-900 w-48 whitespace-nowrap">{row.label}</td>
                          <td className="px-4 py-3 text-gray-800">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Featured Casinos Banner Section */}
        {featuredCasinos && featuredCasinos.length > 0 && (
          <section className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">おすすめカジノ</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {featuredCasinos.map((casino, index) => {
                const logoUrl = casino.casinoSlug ? getCasinoLogoUrl(casino.casinoSlug) : null;
                const localImageUrl = getLocalImageUrl(casino.imageUrl);
                const finalImageUrl = localImageUrl || logoUrl;
                return (
                  <Link
                    key={index}
                    href={casino.offerUrl || casino.reviewUrl || "#"}
                    className="block group"
                  >
                    <div className="relative overflow-hidden rounded-2xl border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 p-6 shadow-md transition-all hover:shadow-xl hover:border-purple-300 h-full">
                      {casino.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="inline-flex items-center gap-1 rounded-full bg-purple-500 px-3 py-1 text-xs font-semibold text-white">
                            <Star className="h-3 w-3 fill-white" />
                            おすすめ
                          </span>
                        </div>
                      )}
                      <div className="flex flex-col items-start gap-4 h-full">
                        {finalImageUrl && (
                          <div className="flex-shrink-0">
                            <Image
                              src={finalImageUrl}
                              alt={casino.casino}
                              width={100}
                              height={50}
                              className="rounded-lg shadow-sm"
                            />
                          </div>
                        )}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors content-center">
                              {casino.casino}
                            </h3>
                            {casino.description && (
                              <p className="text-sm text-gray-700 mb-3 line-clamp-3">{renderMarkdown(casino.description)}</p>
                            )}
                            {casino.rating && (
                              <div className="flex items-center gap-2 mb-3">
                                <div className="flex items-center">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < Math.floor(casino.rating!)
                                          ? "fill-yellow-400 text-yellow-400"
                                          : "fill-gray-200 text-gray-200"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-sm font-semibold text-gray-700">{casino.rating}</span>
                              </div>
                            )}
                          </div>
                          <div className="mt-auto">
                            <div className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-white font-semibold shadow-sm group-hover:bg-purple-700 transition-colors text-sm">
                              詳細を見る
                              <ExternalLink className="h-4 w-4" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* Casino Listings */}
        {casinoListings && casinoListings.length > 0 && (
          <section className="mx-auto max-w-6xl space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">このゲームが楽しめるカジノ</h2>
            {casinoListings.map((casino, index) => {
              const logoUrl = casino.casinoSlug ? getCasinoLogoUrl(casino.casinoSlug) : null;
              return (
                <div key={index} className="rounded-2xl border border-purple-100 bg-white shadow-sm overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-4">
                    <div className="flex items-center gap-4">
                      {logoUrl && (
                        <Image
                          src={logoUrl}
                          alt={casino.casino}
                          width={80}
                          height={40}
                          className="rounded bg-white p-2"
                        />
                      )}
                      <h3 className="text-xl font-bold text-purple-900">{casino.heading}</h3>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    {casino.description && casino.description.map((para, pIndex) => (
                      <p key={pIndex} className="text-gray-800 leading-relaxed">
                        {renderMarkdown(para)}
                      </p>
                    ))}

                    {casino.betLimits && casino.betLimits.length > 0 && (
                      <div className="rounded-lg bg-purple-50 border border-purple-200 p-4">
                        <h4 className="font-semibold text-purple-800 mb-3">ベット上限</h4>
                        <div className="space-y-2">
                          {casino.betLimits.map((limit, idx) => (
                            <div key={idx} className="flex items-center justify-between text-sm">
                              <span className="text-gray-700">{limit.game}</span>
                              <span className="font-bold text-purple-600">{limit.maxBet}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {(casino.highlights || casino.features) && (
                      <div className="grid gap-4 md:grid-cols-2 mt-6">
                        {casino.highlights && (
                          <div className="rounded-lg bg-green-50 border border-green-200 p-4">
                            <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                              <TrendingUp className="h-4 w-4" />
                              ハイライト
                            </h4>
                            <ul className="space-y-1 text-sm text-green-700">
                              {casino.highlights.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                  <span>{renderMarkdown(item)}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {casino.features && (
                          <div className="rounded-lg bg-blue-50 border border-blue-200 p-4">
                            <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                              <Info className="h-4 w-4" />
                              特徴
                            </h4>
                            <ul className="space-y-1 text-sm text-blue-700">
                              {casino.features.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                  <span>{renderMarkdown(item)}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                    {casino.cta && (
                      <div className="mt-6">
                        <Link
                          href={casino.cta.href}
                          className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-8 py-4 text-white font-bold hover:bg-purple-700 transition-colors shadow-md"
                        >
                          {casino.cta.text}
                          <ExternalLink className="h-5 w-5" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </section>
        )}

        {/* Game Categories */}
        {gameCategories && gameCategories.length > 0 && (
          <section className="mx-auto max-w-6xl space-y-8">
            {gameCategories.map((category, index) => (
              <div key={index} className="rounded-2xl border border-indigo-100 bg-white shadow-sm overflow-hidden">
                <div className="bg-indigo-100 px-6 py-4">
                  <h2 className="text-2xl font-bold text-indigo-900">{category.heading}</h2>
                </div>
                <div className="p-6 space-y-6">
                  {category.description && category.description.map((para, pIndex) => (
                    <p key={pIndex} className="text-gray-800 leading-relaxed">{renderMarkdown(para)}</p>
                  ))}

                  {category.games && category.games.length > 0 && (
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {category.games.map((game, gIndex) => (
                        <div key={gIndex} className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-4">
                          {game.imageUrl && (
                            <Image
                              src={getLocalImageUrl(game.imageUrl) || game.imageUrl}
                              alt={game.name}
                              width={300}
                              height={150}
                              className="rounded-lg mb-3"
                            />
                          )}
                          <h4 className="font-semibold text-gray-900 mb-2">{game.name}</h4>
                          {game.description && (
                            <p className="text-sm text-gray-700">{renderMarkdown(game.description)}</p>
                          )}
                          {game.slug && (
                            <Link
                              href={`/game-shows/${game.slug}`}
                              className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-800 font-semibold mt-2"
                            >
                              詳細を見る
                              <ExternalLink className="h-3 w-3" />
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {category.subsections && category.subsections.length > 0 && (
                    <div className="space-y-6">
                      {category.subsections.map((sub, sIndex) => (
                        <div key={sIndex} className="rounded-xl bg-indigo-50 border border-indigo-200 p-6">
                          <h3 className="text-lg font-bold text-indigo-900 mb-3">{sub.subheading}</h3>
                          {sub.gameName && (
                            <div className="text-purple-600 font-semibold mb-3">🎮 {sub.gameName}</div>
                          )}
                          {sub.paragraphs && (
                            <div className="space-y-3 mb-4">
                              {sub.paragraphs.map((para, pIndex) => (
                                <p key={pIndex} className="text-gray-800 leading-relaxed">
                                  {renderMarkdown(para)}
                                </p>
                              ))}
                            </div>
                          )}
                          {sub.bullets && (
                            <ul className="space-y-2 mb-4">
                              {sub.bullets.map((bullet, bIndex) => (
                                <li key={bIndex} className="flex items-start gap-2 text-gray-800">
                                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                                  {renderMarkdown(bullet)}
                                </li>
                              ))}
                            </ul>
                          )}
                          {sub.maxBet && (
                            <div className="inline-flex items-center gap-2 bg-purple-100 border border-purple-200 px-4 py-2 rounded-lg">
                              <span className="text-sm text-purple-700 font-semibold">最大ベット:</span>
                              <span className="text-lg font-bold text-purple-600">{sub.maxBet}</span>
                            </div>
                          )}
                          {sub.imageUrl && (
                            <div className="mt-4">
                              <Image
                                src={getLocalImageUrl(sub.imageUrl) || sub.imageUrl}
                                alt={sub.gameName || sub.subheading}
                                width={800}
                                height={400}
                                className="rounded-lg"
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {category.cta && (
                    <div className="mt-6">
                      <Link
                        href={category.cta.href}
                        className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-semibold"
                      >
                        {category.cta.text}
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Educational Sections */}
        {educational && educational.length > 0 && (
          <section className="mx-auto max-w-6xl space-y-8">
            {educational.map((section, index) => (
              <div key={index} className="rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden">
                <div className="bg-slate-100 px-6 py-4">
                  <h2 className="text-2xl font-bold text-slate-900">{section.heading}</h2>
                </div>
                <div className="p-6 space-y-6">
                  {/* Custom components */}
                  {section.customComponent === "GameInfoTable" && section.gameInfo && section.gameInfo.length > 0 && (
                    <div className="overflow-x-auto rounded-lg border border-slate-200">
                      <table className="w-full text-sm">
                        <tbody className="divide-y divide-slate-100">
                          {section.gameInfo.map((row, rIndex) => (
                            <tr key={rIndex} className="hover:bg-slate-50/50">
                              <td className="px-4 py-3 font-semibold text-slate-900 w-40 whitespace-nowrap">{row.label}</td>
                              <td className="px-4 py-3 text-gray-800">{row.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {section.customComponent === "PayoutTable" && section.payouts && section.payouts.length > 0 && (
                    <div className="space-y-4">
                      <div className="overflow-x-auto rounded-lg border border-slate-200">
                        <table className="w-full text-sm">
                          <thead className="bg-slate-50">
                            <tr>
                              <th className="px-4 py-3 text-left font-semibold text-slate-900">ベットタイプ</th>
                              <th className="px-4 py-3 text-left font-semibold text-slate-900">配当</th>
                              <th className="px-4 py-3 text-left font-semibold text-slate-900">詳細</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {section.payouts.map((p, i) => (
                              <tr key={i} className="hover:bg-slate-50/50">
                                <td className="px-4 py-3 text-gray-800 font-semibold">{p.betType}</td>
                                <td className="px-4 py-3 text-gray-800">{p.payout}</td>
                                <td className="px-4 py-3 text-gray-800">{p.details || "-"}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      {section.notes && section.notes.length > 0 && (
                        <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 space-y-2">
                          {section.notes.map((n, i) => (
                            <p key={i} className="text-sm text-gray-800 leading-relaxed">{renderMarkdown(n)}</p>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {section.paragraphs && (
                    <div className="space-y-4">
                      {section.paragraphs.map((para, pIndex) => (
                        <p key={pIndex} className="text-gray-800 leading-relaxed">
                          {renderMarkdown(para)}
                        </p>
                      ))}
                    </div>
                  )}

                  {section.bullets && (
                    <ul className="space-y-2">
                      {section.bullets.map((bullet, bIndex) => (
                        <li key={bIndex} className="flex items-start gap-2 text-gray-800">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500 flex-shrink-0" />
                          {renderMarkdown(bullet)}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.paragraphsAfterBullets && section.paragraphsAfterBullets.length > 0 && (
                    <div className="space-y-4">
                      {section.paragraphsAfterBullets.map((para, i) => (
                        <p key={i} className="text-gray-800 leading-relaxed">
                          {renderMarkdown(para)}
                        </p>
                      ))}
                    </div>
                  )}

                  {section.subsections && section.subsections.length > 0 && (
                    <div className="space-y-6 mt-6">
                      {section.subsections.map((sub, sIndex) => (
                        <div key={sIndex} className="rounded-xl bg-slate-50 border border-slate-200 p-6">
                          <h3 className="text-lg font-bold text-slate-900 mb-4">{sub.subheading}</h3>
                          {sub.paragraphs && (
                            <div className="space-y-3">
                              {sub.paragraphs.map((para, pIndex) => (
                                <p key={pIndex} className="text-gray-800 leading-relaxed">
                                  {renderMarkdown(para)}
                                </p>
                              ))}
                            </div>
                          )}
                          {sub.bullets && (
                            <ul className="space-y-2 mt-3">
                              {sub.bullets.map((bullet, bIndex) => (
                                <li key={bIndex} className="flex items-start gap-2 text-gray-800">
                                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500 flex-shrink-0" />
                                  {renderMarkdown(bullet)}
                                </li>
                              ))}
                            </ul>
                          )}
                          {sub.table && Array.isArray(sub.table.columns) && Array.isArray(sub.table.rows) && sub.table.columns.length > 0 && (
                            <div className="overflow-x-auto rounded-lg border border-slate-200 mt-4">
                              <table className="w-full text-sm">
                                <thead className="bg-slate-100">
                                  <tr>
                                    {sub.table.columns.map((col, cIndex) => (
                                      <th key={cIndex} className="px-4 py-3 text-left font-semibold text-slate-900">
                                        {col}
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                  {sub.table.rows.map((row, rIndex) => (
                                    <tr key={rIndex} className="hover:bg-slate-50/50">
                                      {Array.isArray(row) ? (
                                        row.map((cell, cellIndex) => (
                                          <td key={cellIndex} className="px-4 py-3 text-gray-800">
                                            {cell}
                                          </td>
                                        ))
                                      ) : (
                                        <td className="px-4 py-3 text-gray-800">{row}</td>
                                      )}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          )}
                          {sub.image && (
                            <div className="mt-4">
                              <Image
                                src={getLocalImageUrl(sub.image.src) || sub.image.src}
                                alt={sub.image.alt}
                                width={800}
                                height={400}
                                className="rounded-lg"
                              />
                              {sub.image.caption && (
                                <p className="text-sm text-gray-600 mt-2 text-center">{sub.image.caption}</p>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {section.image && (
                    <div className="mt-6">
                      <Image
                        src={getLocalImageUrl(section.image.src) || section.image.src}
                        alt={section.image.alt}
                        width={800}
                        height={400}
                        className="rounded-lg"
                      />
                      {section.image.caption && (
                        <p className="text-sm text-gray-600 mt-2 text-center">{section.image.caption}</p>
                      )}
                    </div>
                  )}

                  {section.table && (
                    <div className="overflow-x-auto rounded-lg border border-slate-200">
                      {section.table.title && (
                        <div className="bg-slate-50 px-6 py-3 border-b border-slate-200">
                          <h4 className="font-semibold text-slate-900">{section.table.title}</h4>
                        </div>
                      )}
                      <table className="w-full text-sm">
                        <thead className="bg-slate-50">
                          <tr>
                            {section.table.columns.map((col, cIndex) => (
                              <th key={cIndex} className="px-4 py-3 text-left font-semibold text-slate-900">
                                {col}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {section.table.rows.map((row, rIndex) => (
                            <tr key={rIndex} className="hover:bg-slate-50/50">
                              {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="px-4 py-3 text-gray-800">
                                  {cellIndex === 0 ? (
                                    <span className="font-semibold text-gray-900">{cell}</span>
                                  ) : (
                                    cell
                                  )}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {section.table.note && (
                        <div className="px-4 py-3 text-sm text-gray-700 bg-slate-50 border-t border-slate-200">
                          {renderMarkdown(section.table.note)}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Similar Games */}
        {similarGames && (
          <section className="mx-auto max-w-6xl">
            <div className="rounded-2xl border border-blue-100 bg-white shadow-sm overflow-hidden">
              <div className="bg-blue-100 px-6 py-4">
                <h2 className="text-2xl font-bold text-blue-900">{similarGames.heading}</h2>
              </div>
              <div className="p-6 space-y-4">
                {similarGames.description && (
                  <p className="text-gray-800 leading-relaxed">{renderMarkdown(similarGames.description)}</p>
                )}
                {similarGames.games && similarGames.games.length > 0 && (
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {similarGames.games.map((game, gIndex) => (
                      <div key={gIndex} className="rounded-xl border border-blue-200 bg-blue-50/50 p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">{game.name}</h4>
                        {game.description && (
                          <p className="text-sm text-gray-700 mb-3">{renderMarkdown(game.description)}</p>
                        )}
                        {game.slug && (
                          <Link
                            href={`/game-shows/${game.slug}`}
                            className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-semibold"
                          >
                            詳細を見る
                            <ExternalLink className="h-3 w-3" />
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Summary Section */}
        {summary && (
          <section className="mx-auto max-w-6xl">
            <div className="rounded-2xl border border-green-100 bg-white shadow-sm overflow-hidden">
              <div className="bg-green-100 px-6 py-4">
                <h2 className="text-2xl font-bold text-green-900">{summary.heading}</h2>
              </div>
              <div className="p-6 space-y-4">
                {summary.paragraphs && summary.paragraphs.map((para, pIndex) => (
                  <p key={pIndex} className="text-gray-800 leading-relaxed">{renderMarkdown(para)}</p>
                ))}
                {summary.suitedPlayers && summary.suitedPlayers.length > 0 && (
                  <div className="rounded-lg bg-green-50 border border-green-200 p-6 mt-6">
                    <h3 className="font-semibold text-green-800 mb-4">こんなプレイヤーにおすすめ</h3>
                    <ul className="space-y-2">
                      {summary.suitedPlayers.map((player, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-green-700">
                          <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{renderMarkdown(player)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {summary.paragraphsAfterBullets && (
                  Array.isArray(summary.paragraphsAfterBullets) ? (
                    summary.paragraphsAfterBullets.map((para, i) => (
                      <p key={i} className="text-gray-800 leading-relaxed">{renderMarkdown(para)}</p>
                    ))
                  ) : (
                    <p className="text-gray-800 leading-relaxed">{renderMarkdown(summary.paragraphsAfterBullets)}</p>
                  )
                )}
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {faq && faq.length > 0 && (
          <div className="mx-auto max-w-6xl">
            <FAQSection items={faq} />
          </div>
        )}

        {/* Author/Expert Section */}
        <AuthorSection
          name={data.author?.name}
          title={data.author?.title || "ゲームショー専門家・アナリスト"}
          url={data.author?.url}
          avatarSrc={data.author?.avatarSrc}
          avatarAlt={data.author?.avatarAlt}
          bio={data.author?.bio || "200以上のゲームショーを分析・検証した経験豊富な専門家"}
          accentColor="purple"
        />

        {/* Final CTA */}
        {cta && (
          <section className="mx-auto max-w-6xl">
            <div className="rounded-2xl bg-purple-600 p-8 shadow-lg text-center">
              <h3 className="text-2xl font-bold text-white mb-4">{cta.text}</h3>
              <Link
                href={cta.href}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-purple-600 font-bold hover:bg-gray-50 transition-colors shadow-md"
              >
                今すぐチェック
                <ExternalLink className="h-5 w-5" />
              </Link>
            </div>
          </section>
        )}

      </div>

      {/* 責任あるギャンブル啓発テキスト */}
      <ResponsibleGamblingSection className="mt-12 mb-8" />
    </SectionScaffold>
  );
}
