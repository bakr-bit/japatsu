import Image from "next/image";
import Link from "next/link";
import SectionScaffold from "@/components/shell/SectionScaffold";
import SectionTitle from "@/components/ui/SectionTitle";
import Stars from "@/components/ui/Stars";
import { ExternalLink, Gamepad2, Zap, Shield, TrendingUp } from "lucide-react";
import { renderMarkdown } from "@/components/ui/RichText";
import {
  FAQSection,
  AuthorSection,
  ResponsibleGamblingSection,
} from "@/components/sections";

export type SlotPageData = {
  title: string;
  hero: {
    title: string;
    subheading?: string;
    description?: string;
    score: number;
    scoreMax: number;
    rtp?: string;
    maxMultiplier?: string;
    provider?: string;
    releaseDate?: string;
    volatility?: string;
    reels?: string;
    paylines?: string;
    minBet?: string;
    maxBet?: string;
    slotImageSrc?: string;
    highlights?: string[];
    watchouts?: string[];
  };
  featuredCasino?: {
    name: string;
    logo?: string;
    href?: string;
    ctaText?: string;
    ctaHref?: string;
    tagline?: string;
  };
  casinos?: Array<{
    name: string;
    logo?: string;
    href?: string;
    bonus?: string | null;
    freeSpins?: string | null;
    wagering?: string | null;
    rating?: number;
    tagline?: string;
    ctaText?: string;
    ctaHref?: string;
  }>;
  gameInfo?: {
    intro?: string;
    basicInfo?: {
      rtp: string;
      volatility: string;
      reels: string;
      paylines: string;
      minBet: string;
      maxBet: string;
      provider: string;
      releaseDate?: string;
    };
  };
  payoutTable?: {
    title?: string;
    symbols: Array<{
      name: string;
      description?: string;
      payout5?: string;
      payout4?: string;
      payout3?: string;
      isSpecial?: boolean;
    }>;
    maxPayout?: string;
    notes?: string[];
  };
  features?: {
    title?: string;
    items: Array<{
      name: string;
      description: string;
      icon?: string;
    }>;
  };
  sections?: Array<{
    heading: string;
    paragraphs?: string[];
    bullets?: string[];
    table?: {
      title?: string;
      columns: string[];
      rows: string[][];
    };
    items?: Array<{
      heading: string;
      content: string[];
    }>;
    similarGames?: Array<{
      name: string;
      href?: string;
      provider?: string;
      description?: string;
    }>;
    faq?: Array<{
      q: string;
      a: string;
    }>;
    notes?: string[];
    prosCons?: {
      pros: string[];
      cons: string[];
    };
    sections?: Array<{
      heading: string;
      paragraphs?: string[];
      bullets?: string[];
    }>;
  }>;
  similarGames?: Array<{
    name: string;
    href?: string;
    provider?: string;
    description?: string;
  }>;
  prosCons?: {
    pros: string[];
    cons: string[];
  };
  faq?: Array<{ q: string; a: string }>;
  cta?: { text: string; href: string };
  breadcrumbs?: Array<{ label: string; href: string }>;
  tableOfContents?: Array<{ label: string; href: string }>;
};

type SlotTemplateProps = {
  data: SlotPageData;
  canonicalPath: string;
};

export default function SlotTemplate({ data, canonicalPath }: SlotTemplateProps) {
  const { hero, featuredCasino, casinos, gameInfo, payoutTable, features, sections, similarGames, prosCons, faq, cta, breadcrumbs, tableOfContents } = data;

  return (
    <SectionScaffold title={data.title}>
      <div className="space-y-12">


        {/* Hero Section */}
        <section className="relative overflow-hidden bg-blue-600">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative mx-auto max-w-6xl px-8 py-16 md:py-20">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">

              {/* Left Side - Game Info */}
              <div className="text-white">
                <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-4">
                  {hero.title}
                </h1>
                {hero.subheading && (
                  <p className="text-xl text-blue-100 mb-4">{renderMarkdown(hero.subheading)}</p>
                )}
                {hero.description && (
                  <p className="text-lg text-blue-50 mb-6">{renderMarkdown(hero.description)}</p>
                )}


                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  {hero.rtp && (
                    <div className="text-center bg-white/10 rounded-lg p-3">
                      <div className="text-2xl font-bold">{hero.rtp}</div>
                      <div className="text-sm text-blue-200">RTP</div>
                    </div>
                  )}
                  {hero.maxMultiplier && (
                    <div className="text-center bg-white/10 rounded-lg p-3">
                      <div className="text-2xl font-bold">{hero.maxMultiplier}</div>
                      <div className="text-sm text-blue-200">最大配当</div>
                    </div>
                  )}
                  {hero.volatility && (
                    <div className="text-center bg-white/10 rounded-lg p-3">
                      <div className="text-2xl font-bold">{hero.volatility}</div>
                      <div className="text-sm text-blue-200">ボラティリティ</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Side - Game Image */}
              {hero.slotImageSrc && (
                <div className="flex justify-center md:justify-end">
                  <div className="relative">
                    <Image
                      src={hero.slotImageSrc}
                      alt={hero.title}
                      width={400}
                      height={300}
                      className="rounded-lg shadow-2xl"
                      priority
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Highlights & Watchouts */}
            {(hero.highlights || hero.watchouts) && (
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {hero.highlights && (
                  <div className="bg-green-500/20 rounded-lg p-4">
                    <h3 className="font-semibold text-green-100 mb-2 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      ハイライト
                    </h3>
                    <ul className="space-y-1 text-green-50 text-sm">
                      {hero.highlights.map((item, index) => (
                        <li key={index}>• {renderMarkdown(item)}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {hero.watchouts && (
                  <div className="bg-yellow-500/20 rounded-lg p-4">
                    <h3 className="font-semibold text-yellow-100 mb-2 flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      注意点
                    </h3>
                    <ul className="space-y-1 text-yellow-50 text-sm">
                      {hero.watchouts.map((item, index) => (
                        <li key={index}>• {renderMarkdown(item)}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Featured Casino */}
        {featuredCasino && (
          <section className="mx-auto max-w-6xl">
            <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 shadow-sm">
              <SectionTitle title="おすすめカジノ" className="mb-6" />
              <div className="flex flex-col items-center gap-6 md:flex-row">
                {featuredCasino.logo && (
                  <Image
                    src={featuredCasino.logo}
                    alt={featuredCasino.name}
                    width={120}
                    height={60}
                    className="rounded-lg"
                  />
                )}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {featuredCasino.name}
                  </h3>
                  {featuredCasino.tagline && (
                    <p className="text-gray-600 mb-4">{renderMarkdown(featuredCasino.tagline)}</p>
                  )}
                </div>
                <div className="flex flex-col gap-3 md:flex-row">
                  {featuredCasino.ctaHref && (
                    <Link
                      href={featuredCasino.ctaHref}
                      className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors"
                    >
                      <Gamepad2 className="h-4 w-4" />
                      {featuredCasino.ctaText || "今すぐプレイ"}
                    </Link>
                  )}
                  {featuredCasino.href && (
                    <Link
                      href={featuredCasino.href}
                      className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                    >
                      詳細を見る
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}


        {/* Casinos Table */}
        {casinos && casinos.length > 0 && (
          <section className="mx-auto max-w-6xl">
            <SectionTitle title="このスロットが遊べるカジノ" className="mb-8" />
            <div className="rounded-lg border border-gray-200 bg-white overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">カジノ</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">評価</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">ボーナス</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">フリースピン</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">賭け条件</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-900">アクション</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {casinos.map((casino, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            {casino.logo && (
                              <Image
                                src={casino.logo}
                                alt={casino.name}
                                width={60}
                                height={30}
                                className="rounded"
                              />
                            )}
                            <div>
                              <div className="font-semibold text-gray-900">{casino.name}</div>
                              {casino.tagline && (
                                <div className="text-sm text-gray-600">{renderMarkdown(casino.tagline)}</div>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          {casino.rating ? (
                            <Stars score={casino.rating} showLabel />
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-gray-800">
                          {casino.bonus || <span className="text-gray-400">-</span>}
                        </td>
                        <td className="px-6 py-4 text-gray-800">
                          {casino.freeSpins || <span className="text-gray-400">-</span>}
                        </td>
                        <td className="px-6 py-4 text-gray-800">
                          {casino.wagering || <span className="text-gray-400">-</span>}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex justify-center gap-2">
                            {casino.ctaHref && (
                              <Link
                                href={casino.ctaHref}
                                className="inline-flex items-center gap-1 rounded bg-green-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-green-700 transition-colors"
                              >
                                <Gamepad2 className="h-3 w-3" />
                                {casino.ctaText || "プレイ"}
                              </Link>
                            )}
                            {casino.href && (
                              <Link
                                href={casino.href}
                                className="inline-flex items-center gap-1 rounded border border-gray-300 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                              >
                                詳細
                                <ExternalLink className="h-3 w-3" />
                              </Link>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* Game Basic Info */}
        {gameInfo?.basicInfo && (
          <section className="mx-auto max-w-6xl">
            <div className="rounded-2xl border border-blue-100 bg-white shadow-sm overflow-hidden">
              <div className="bg-blue-100 px-6 py-4">
                <h2 className="text-xl font-bold text-blue-900 mb-1">ゲーム基本情報</h2>
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">GAME SPECS</p>
              </div>
              <div className="p-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {Object.entries(gameInfo.basicInfo).map(([key, value]) => (
                    <div key={key} className="text-center p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
                      <div className="text-sm text-blue-700 font-medium">
                        {key === 'rtp' ? 'RTP' :
                         key === 'volatility' ? 'ボラティリティ' :
                         key === 'reels' ? 'リール数' :
                         key === 'paylines' ? 'ペイライン' :
                         key === 'minBet' ? '最小ベット' :
                         key === 'maxBet' ? '最大ベット' :
                         key === 'provider' ? 'プロバイダー' :
                         key === 'releaseDate' ? 'リリース日' : key}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Payout Table */}
        {payoutTable && (
          <section className="mx-auto max-w-6xl">
            <div className="rounded-2xl border border-blue-100 bg-white shadow-sm overflow-hidden">
              <div className="bg-blue-100 px-6 py-4">
                <h2 className="text-xl font-bold text-blue-900 mb-1">{payoutTable.title || "ペイアウト表"}</h2>
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">SYMBOL PAYOUTS</p>
              </div>
              <div className="p-6">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-green-100">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-green-50">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold text-green-900">シンボル</th>
                        <th className="px-6 py-4 text-left font-semibold text-green-900">説明</th>
                        <th className="px-6 py-4 text-left font-semibold text-green-900">5連配当</th>
                        <th className="px-6 py-4 text-left font-semibold text-green-900">4連配当</th>
                        <th className="px-6 py-4 text-left font-semibold text-green-900">3連配当</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-green-100">
                      {payoutTable.symbols.map((symbol, index) => (
                        <tr key={index} className={symbol.isSpecial ? "bg-yellow-50" : "hover:bg-green-50/50"}>
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {symbol.name}
                            {symbol.isSpecial && (
                              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                特別
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {symbol.description}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                            {symbol.payout5 || <span className="text-gray-400">-</span>}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                            {symbol.payout4 || <span className="text-gray-400">-</span>}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                            {symbol.payout3 || <span className="text-gray-400">-</span>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {(payoutTable.maxPayout || payoutTable.notes) && (
                  <div className="bg-green-50 px-6 py-4 border-t border-green-100">
                    {payoutTable.maxPayout && (
                      <p className="text-sm font-semibold text-green-900 mb-2">
                        最大配当: {payoutTable.maxPayout}
                      </p>
                    )}
                    {payoutTable.notes && payoutTable.notes.length > 0 && (
                      <div className="text-xs text-green-700 space-y-1">
                        {payoutTable.notes.map((note, index) => (
                          <p key={index}>{note}</p>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Game Features */}
        {features && (
          <section className="mx-auto max-w-6xl">
            <div className="rounded-2xl border border-blue-100 bg-white shadow-sm overflow-hidden">
              <div className="bg-blue-100 px-6 py-4">
                <h2 className="text-xl font-bold text-blue-900 mb-1">{features.title || "ゲーム特徴"}</h2>
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">GAME FEATURES</p>
              </div>
              <div className="p-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {features.items.map((feature, index) => (
                    <div key={index} className="rounded-xl border border-purple-100 bg-purple-50/50 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                          <Zap className="h-6 w-6 text-purple-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {feature.name}
                        </h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{renderMarkdown(feature.description)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Detailed Sections */}
        {sections && sections.map((section, index) => (
          <section key={index} className="mx-auto max-w-6xl">
            <div className="rounded-2xl border border-blue-100 bg-white shadow-sm overflow-hidden">
              <div className="bg-blue-100 px-6 py-4">
                <h2 className="text-xl font-bold text-blue-900">{section.heading}</h2>
              </div>
              <div className="p-6">
                {section.paragraphs && (
                <div className="space-y-4 mb-6">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-800 leading-relaxed">
                      {renderMarkdown(paragraph)}
                    </p>
                  ))}
                </div>
              )}
              {section.bullets && (
                <ul className="space-y-2 mb-6">
                  {section.bullets.map((bullet, bIndex) => (
                    <li key={bIndex} className="flex items-start gap-2 text-gray-800">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500 flex-shrink-0" />
                      {renderMarkdown(bullet)}
                    </li>
                  ))}
                </ul>
              )}
              {section.table && (
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-100">
                  {section.table.title && (
                    <div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
                      <h4 className="text-lg font-semibold text-slate-900">{section.table.title}</h4>
                    </div>
                  )}
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-slate-50">
                        <tr>
                          {section.table.columns.map((col, cIndex) => (
                            <th key={cIndex} className="px-6 py-4 text-left font-semibold text-slate-900">
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {section.table.rows.map((row, rIndex) => (
                          <tr key={rIndex} className="hover:bg-slate-50/50">
                            {row.map((cell, cellIndex) => (
                              <td key={cellIndex} className="px-6 py-4 text-gray-800">
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
                  </div>
                </div>
              )}
              </div>
            </div>
          </section>
        ))}

        {/* Similar Games */}
        {similarGames && similarGames.length > 0 && (
          <section className="mx-auto max-w-6xl">
            <div className="rounded-2xl border border-blue-100 bg-white shadow-sm overflow-hidden">
              <div className="bg-blue-100 px-6 py-4">
                <h2 className="text-xl font-bold text-blue-900 mb-1">類似ゲーム</h2>
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">SIMILAR GAMES</p>
              </div>
              <div className="p-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {similarGames.map((game, index) => (
                    <div key={index} className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {game.href ? (
                          <Link href={game.href} className="text-indigo-600 hover:text-indigo-800 hover:underline">
                            {game.name}
                          </Link>
                        ) : (
                          game.name
                        )}
                      </h3>
                      {game.provider && (
                        <p className="text-sm text-indigo-600 font-medium mb-2">by {game.provider}</p>
                      )}
                      {game.description && (
                        <p className="text-gray-700 leading-relaxed">{renderMarkdown(game.description)}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Pros and Cons */}
        {prosCons && (
          <section className="mx-auto max-w-6xl">
            <div className="rounded-2xl border border-blue-100 bg-white shadow-sm overflow-hidden">
              <div className="bg-blue-100 px-6 py-4">
                <h2 className="text-xl font-bold text-blue-900 mb-1">メリット・デメリット</h2>
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">PROS & CONS</p>
              </div>
              <div className="p-6">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="rounded-xl border border-green-200 bg-green-50/80 p-6">
                    <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      メリット
                    </h3>
                    <ul className="space-y-3">
                      {prosCons.pros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-2 text-green-700">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-500 flex-shrink-0" />
                          <span className="leading-relaxed">{renderMarkdown(pro)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl border border-red-200 bg-red-50/80 p-6">
                    <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      デメリット
                    </h3>
                    <ul className="space-y-3">
                      {prosCons.cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-2 text-red-700">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500 flex-shrink-0" />
                          <span className="leading-relaxed">{renderMarkdown(con)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        {faq && faq.length > 0 && (
          <div className="mx-auto max-w-6xl">
            <FAQSection
              items={faq.map(qa => ({ question: qa.q, answer: qa.a }))}
            />
          </div>
        )}

        {/* Author Section */}
        <AuthorSection accentColor="rose" />

      </div>

      {/* 責任あるギャンブル啓発テキスト */}
      <ResponsibleGamblingSection
        message="オンラインカジノやスロットは、あくまで娯楽としてお楽しみください。「余裕資金の範囲内でプレイし、のめり込みすぎない」ことが大切です。万が一、ギャンブルによる問題や不安を感じた場合は、専門機関への相談もご検討ください。"
        className="mt-12 mb-8"
      />
    </SectionScaffold>
  );
}