import Link from "next/link";
import Image from "next/image";
import { Star, ExternalLink, TrendingUp, Shield, Gift, AlertCircle, CheckCircle2, Info } from "lucide-react";
import SectionScaffold from "@/components/shell/SectionScaffold";
import SectionTitle from "@/components/ui/SectionTitle";
import { renderMarkdown } from "@/components/ui/RichText";
import { getCasinoLogoUrl, getLocalImageUrl } from "@/lib/logos";
import {
  FAQSection,
  AuthorSection,
  ResponsibleGamblingSection,
} from "@/components/sections";

/**
 * Type definitions for Bonus Page Content
 */
export type BonusFeaturedOffer = {
  casino: string;
  casinoSlug?: string;
  title: string;
  imageUrl?: string;
  offerUrl?: string;
  expiryDate?: string;
  featured?: boolean;
};

export type BonusRankingRow = {
  rank: string;
  casino: string;
  casinoSlug?: string;
  bonusDetails: string;
  offerLink?: string;
  wagering: string;
};

export type BonusRankingsTable = {
  title: string;
  description?: string;
  columns: string[];
  rows: BonusRankingRow[];
};

export type BonusDetailedCasino = {
  rank: number;
  casino: string;
  casinoSlug?: string;
  heading: string;
  description: string[];
  highlights?: string[];
  features?: string[];
  bonusAmount?: string;
  wagering?: string;
  maxWithdrawal?: string;
  bonusCode?: string;
  validUntil?: string;
  cta?: {
    text: string;
    href: string;
  };
};

export type BonusTypeCategory = {
  title: string;
  description?: string;
  casinos?: Array<{
    casino: string;
    casinoSlug?: string;
    bonusDetails: string;
    offerLink?: string;
  }>;
  table?: {
    columns: string[];
    rows: string[][];
  };
  cta?: {
    text: string;
    href: string;
  };
};

export type CasinoTypeCategory = {
  title: string;
  description?: string[];
  casinos?: Array<{
    casino: string;
    casinoSlug?: string;
    bonus?: string;
    offerLink?: string;
  }>;
  cta?: {
    text: string;
    href: string;
  };
};

export type BonusEducationalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  subsections?: Array<{
    subheading: string;
    paragraphs?: string[];
    bullets?: string[];
    image?: {
      src: string;
      alt: string;
      caption?: string;
    };
  }>;
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
  table?: {
    title?: string;
    columns: string[];
    rows: string[][];
  };
  prosCons?: {
    pros: string[];
    cons: string[];
  };
};

export type BonusFAQItem = {
  question: string;
  answer: string;
};

export type BonusPageContent = {
  hero: {
    title: string;
    description?: string;
    lastUpdated?: string;
    imageUrl?: string;
  };
  featuredOffers?: BonusFeaturedOffer[];
  rankings?: BonusRankingsTable;
  detailedCasinos?: BonusDetailedCasino[];
  bonusTypeCategories?: BonusTypeCategory[];
  casinoTypeCategories?: CasinoTypeCategory[];
  educational?: BonusEducationalSection[];
  faq?: BonusFAQItem[];
  cta?: {
    text: string;
    href: string;
  };
  tableOfContents?: Array<{
    label: string;
    href: string;
  }>;
  breadcrumbs?: Array<{
    label: string;
    href: string;
  }>;
  metadata?: {
    author?: string;
    authorBio?: string;
    publishDate?: string;
    lastModified?: string;
    category?: string;
    tags?: string[];
  };
};

type BonusDetailTemplateProps = {
  data: BonusPageContent;
  canonicalPath?: string;
};

export default function BonusDetailTemplate({ data, canonicalPath }: BonusDetailTemplateProps) {
  const { hero, featuredOffers, rankings, detailedCasinos, bonusTypeCategories, casinoTypeCategories, educational, faq, cta } = data;

  const isOffersPage = canonicalPath === "/offers";
  const heroBgColor = isOffersPage ? "bg-pink-400" : "bg-rose-600";
  const badgeText = isOffersPage ? "Offers" : "Bonus Guide";
  const labelText = isOffersPage ? "オファー" : "ボーナスガイド";

  return (
    <SectionScaffold title={hero.title}>
      <div className="space-y-12">

        {/* Hero Section */}
        <section className={`relative overflow-hidden ${heroBgColor}`}>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-4 right-4 z-10">
            <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-sm font-semibold text-white ring-1 ring-white/30">
              {badgeText}
            </span>
          </div>
          <div className="relative mx-auto max-w-6xl px-8 py-16 md:py-20">
            <div className="text-white">
              <div className="flex items-center gap-2 mb-4">
                <Gift className="h-8 w-8" />
                <span className="text-sm font-semibold uppercase tracking-wider">{labelText}</span>
              </div>
              <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-6">
                {hero.title}
              </h1>
              {hero.description && (
                <p className="text-lg text-rose-50 leading-relaxed max-w-4xl">
                  {renderMarkdown(hero.description)}
                </p>
              )}
              {hero.lastUpdated && (
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">最終更新日: {hero.lastUpdated}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Featured Offers Banner Section */}
        {featuredOffers && featuredOffers.length > 0 && (
          <section className="mx-auto max-w-6xl">
            <div className="space-y-4">
              {featuredOffers.map((offer, index) => {
                const logoUrl = offer.casinoSlug ? getCasinoLogoUrl(offer.casinoSlug) : null;
                const localImageUrl = getLocalImageUrl(offer.imageUrl);
                const finalImageUrl = localImageUrl || logoUrl;
                return (
                  <Link
                    key={index}
                    href={offer.offerUrl || "#"}
                    className="block group"
                  >
                    <div className="relative overflow-hidden rounded-2xl border-2 border-rose-200 bg-gradient-to-r from-rose-50 to-pink-50 p-6 shadow-md transition-all hover:shadow-xl hover:border-rose-300">
                      {offer.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="inline-flex items-center gap-1 rounded-full bg-rose-500 px-3 py-1 text-xs font-semibold text-white">
                            <Star className="h-3 w-3 fill-white" />
                            限定
                          </span>
                        </div>
                      )}
                      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                        {finalImageUrl && (
                          <div className="flex-shrink-0">
                            <Image
                              src={finalImageUrl}
                              alt={offer.casino}
                              width={300}
                              height={150}
                              className="rounded-lg shadow-sm"
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                            {renderMarkdown(offer.title)}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                            <span className="font-semibold text-rose-600">{offer.casino}</span>
                            {offer.expiryDate && (
                              <span className="flex items-center gap-1">
                                <AlertCircle className="h-4 w-4" />
                                終了日: {offer.expiryDate}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <div className="inline-flex items-center gap-2 rounded-lg bg-rose-600 px-6 py-3 text-white font-semibold shadow-sm group-hover:bg-rose-700 transition-colors">
                            詳細を見る
                            <ExternalLink className="h-4 w-4" />
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

        {/* Rankings Table */}
        {rankings && (
          <section className="mx-auto max-w-6xl">
            <div className="rounded-2xl border border-blue-100 bg-white shadow-sm overflow-hidden">
              <div className="bg-blue-100 px-6 py-4">
                <h2 className="text-2xl font-bold text-blue-900 mb-2">{rankings.title}</h2>
                {rankings.description && (
                  <p className="text-sm text-blue-700 leading-relaxed">{renderMarkdown(rankings.description)}</p>
                )}
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-blue-50">
                    <tr>
                      {rankings.columns.map((col, index) => (
                        <th key={index} className="px-6 py-4 text-left font-semibold text-blue-900">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-blue-100">
                    {rankings.rows.map((row, index) => {
                      const logoUrl = row.casinoSlug ? getCasinoLogoUrl(row.casinoSlug) : null;
                      return (
                        <tr key={index} className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-rose-100 text-rose-600 font-bold text-lg">
                              {row.rank}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              {logoUrl && (
                                <Image
                                  src={logoUrl}
                                  alt={row.casino}
                                  width={60}
                                  height={30}
                                  className="rounded"
                                />
                              )}
                              <div>
                                <div className="font-semibold text-gray-900">{row.casino}</div>
                                {row.offerLink && (
                                  <Link href={row.offerLink} className="text-sm text-rose-600 hover:underline flex items-center gap-1">
                                    オファーを見る
                                    <ExternalLink className="h-3 w-3" />
                                  </Link>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-gray-800">
                            <div className="whitespace-pre-line text-sm leading-relaxed">
                              {row.bonusDetails}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-gray-800">
                            <div className="whitespace-pre-line text-sm leading-relaxed">
                              {row.wagering}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* Detailed Casino Sections */}
        {detailedCasinos && detailedCasinos.length > 0 && (
          <section className="mx-auto max-w-6xl space-y-8">
            {detailedCasinos.map((casino, index) => {
              const logoUrl = casino.casinoSlug ? getCasinoLogoUrl(casino.casinoSlug) : null;
              return (
                <div key={index} className="rounded-2xl border border-rose-100 bg-white shadow-sm overflow-hidden">
                  <div className="bg-gradient-to-r from-rose-100 to-pink-100 px-6 py-4">
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
                      <h3 className="text-xl font-bold text-rose-900">{casino.heading}</h3>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    {casino.description.map((para, pIndex) => (
                      <p key={pIndex} className="text-gray-800 leading-relaxed">
                        {renderMarkdown(para)}
                      </p>
                    ))}

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

                    {(casino.bonusAmount || casino.wagering || casino.maxWithdrawal || casino.bonusCode) && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                        {casino.bonusAmount && (
                          <div className="text-center p-4 bg-rose-50 rounded-lg border border-rose-100">
                            <div className="text-2xl font-bold text-rose-600">{casino.bonusAmount}</div>
                            <div className="text-xs text-rose-700 mt-1">ボーナス額</div>
                          </div>
                        )}
                        {casino.wagering && (
                          <div className="text-center p-4 bg-amber-50 rounded-lg border border-amber-100">
                            <div className="text-2xl font-bold text-amber-600">{casino.wagering}</div>
                            <div className="text-xs text-amber-700 mt-1">賭け条件</div>
                          </div>
                        )}
                        {casino.maxWithdrawal && (
                          <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-100">
                            <div className="text-2xl font-bold text-blue-600">{casino.maxWithdrawal}</div>
                            <div className="text-xs text-blue-700 mt-1">最大出金</div>
                          </div>
                        )}
                        {casino.bonusCode && (
                          <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-100">
                            <div className="text-lg font-bold text-purple-600 font-mono">{casino.bonusCode}</div>
                            <div className="text-xs text-purple-700 mt-1">ボーナスコード</div>
                          </div>
                        )}
                      </div>
                    )}

                    {casino.cta && (
                      <div className="mt-6">
                        <Link
                          href={casino.cta.href}
                          className="inline-flex items-center gap-2 rounded-lg bg-rose-600 px-8 py-4 text-white font-bold hover:bg-rose-700 transition-colors shadow-md"
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

        {/* Bonus Type Categories */}
        {bonusTypeCategories && bonusTypeCategories.length > 0 && (
          <section className="mx-auto max-w-6xl space-y-8">
            <SectionTitle title="【ボーナスタイプ別】オンラインカジノの入金不要ボーナス" className="text-2xl" />
            {bonusTypeCategories.map((category, index) => (
              <div key={index} className="rounded-2xl border border-purple-100 bg-white shadow-sm overflow-hidden">
                <div className="bg-purple-100 px-6 py-4">
                  <h3 className="text-xl font-bold text-purple-900">{category.title}</h3>
                </div>
                <div className="p-6 space-y-4">
                  {category.description && (
                    <p className="text-gray-800 leading-relaxed">{renderMarkdown(category.description)}</p>
                  )}

                  {category.casinos && category.casinos.length > 0 && (
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {category.casinos.map((casino, cIndex) => {
                        const logoUrl = casino.casinoSlug ? getCasinoLogoUrl(casino.casinoSlug) : null;
                        return (
                          <div key={cIndex} className="rounded-xl border border-purple-200 bg-purple-50/50 p-4">
                            <div className="flex items-center gap-3 mb-3">
                              {logoUrl && (
                                <Image
                                  src={logoUrl}
                                  alt={casino.casino}
                                  width={50}
                                  height={25}
                                  className="rounded"
                                />
                              )}
                              <h4 className="font-semibold text-gray-900">{casino.casino}</h4>
                            </div>
                            <p className="text-sm text-gray-700 mb-3">{renderMarkdown(casino.bonusDetails)}</p>
                            {casino.offerLink && (
                              <Link
                                href={casino.offerLink}
                                className="inline-flex items-center gap-1 text-sm text-purple-600 hover:text-purple-800 font-semibold"
                              >
                                詳細を見る
                                <ExternalLink className="h-3 w-3" />
                              </Link>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {category.table && (
                    <div className="overflow-x-auto rounded-lg border border-purple-200">
                      <table className="w-full text-sm">
                        <thead className="bg-purple-50">
                          <tr>
                            {category.table.columns.map((col, cIndex) => (
                              <th key={cIndex} className="px-4 py-3 text-left font-semibold text-purple-900">
                                {col}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-purple-100">
                          {category.table.rows.map((row, rIndex) => (
                            <tr key={rIndex} className="hover:bg-purple-50/50">
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
                    </div>
                  )}

                  {category.cta && (
                    <div className="mt-4">
                      <Link
                        href={category.cta.href}
                        className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold"
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

        {/* Casino Type Categories */}
        {casinoTypeCategories && casinoTypeCategories.length > 0 && (
          <section className="mx-auto max-w-6xl space-y-8">
            <SectionTitle title="【カジノタイプ別】オンラインカジノの入金不要ボーナス" className="text-2xl" />
            {casinoTypeCategories.map((category, index) => (
              <div key={index} className="rounded-2xl border border-indigo-100 bg-white shadow-sm overflow-hidden">
                <div className="bg-indigo-100 px-6 py-4">
                  <h3 className="text-xl font-bold text-indigo-900">{category.title}</h3>
                </div>
                <div className="p-6 space-y-4">
                  {category.description && category.description.map((para, pIndex) => (
                    <p key={pIndex} className="text-gray-800 leading-relaxed">{renderMarkdown(para)}</p>
                  ))}

                  {category.casinos && category.casinos.length > 0 && (
                    <div className="space-y-3">
                      {category.casinos.map((casino, cIndex) => {
                        const logoUrl = casino.casinoSlug ? getCasinoLogoUrl(casino.casinoSlug) : null;
                        return (
                          <div key={cIndex} className="flex items-center gap-4 rounded-lg border border-indigo-200 bg-indigo-50/50 p-4">
                            {logoUrl && (
                              <Image
                                src={logoUrl}
                                alt={casino.casino}
                                width={60}
                                height={30}
                                className="rounded"
                              />
                            )}
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900">{casino.casino}</h4>
                              {casino.bonus && (
                                <p className="text-sm text-gray-700 mt-1">{renderMarkdown(casino.bonus)}</p>
                              )}
                            </div>
                            {casino.offerLink && (
                              <Link
                                href={casino.offerLink}
                                className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-800 font-semibold"
                              >
                                詳細
                                <ExternalLink className="h-3 w-3" />
                              </Link>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {category.cta && (
                    <div className="mt-4">
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
                    </div>
                  )}

                  {section.prosCons && (
                    <div className="grid gap-6 md:grid-cols-2 mt-6">
                      <div className="rounded-xl border border-green-200 bg-green-50/80 p-6">
                        <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                          <TrendingUp className="h-5 w-5" />
                          メリット
                        </h4>
                        <ul className="space-y-3">
                          {section.prosCons.pros.map((pro, pIndex) => (
                            <li key={pIndex} className="flex items-start gap-2 text-green-700">
                              <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                              <span className="leading-relaxed">{renderMarkdown(pro)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-xl border border-red-200 bg-red-50/80 p-6">
                        <h4 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
                          <Shield className="h-5 w-5" />
                          デメリット
                        </h4>
                        <ul className="space-y-3">
                          {section.prosCons.cons.map((con, cIndex) => (
                            <li key={cIndex} className="flex items-start gap-2 text-red-700">
                              <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                              <span className="leading-relaxed">{renderMarkdown(con)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
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
          title="ボーナス専門家・アナリスト"
          bio="300以上のボーナスオファーを分析・検証した経験豊富な専門家"
          accentColor="rose"
        />

        {/* Final CTA */}
        {cta && (
          <section className="mx-auto max-w-6xl">
            <div className="rounded-2xl bg-gradient-to-r from-rose-600 to-pink-600 p-8 shadow-lg text-center">
              <h3 className="text-2xl font-bold text-white mb-4">{cta.text}</h3>
              <Link
                href={cta.href}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-rose-600 font-bold hover:bg-gray-50 transition-colors shadow-md"
              >
                今すぐチェック
                <ExternalLink className="h-5 w-5" />
              </Link>
            </div>
          </section>
        )}

      </div>

      {/* 責任あるギャンブル啓発テキスト */}
      <ResponsibleGamblingSection
        message="オンラインカジノやボーナスは、あくまで娯楽としてお楽しみください。「余裕資金の範囲内でプレイし、のめり込みすぎない」ことが大切です。万が一、ギャンブルによる問題や不安を感じた場合は、専門機関への相談もご検討ください。"
        className="mt-12 mb-8"
      />
    </SectionScaffold>
  );
}
