import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Star, ExternalLink, TrendingUp, Shield, Gift, AlertCircle,
  CheckCircle2, Info, Clock, Award, Gamepad2, CreditCard,
  Smartphone, Target, Zap, ChevronDown, DollarSign, TrendingDown
} from "lucide-react";
import SectionScaffold from "@/components/shell/SectionScaffold";
import { renderMarkdown } from "@/components/ui/RichText";
import { getCasinoLogoUrl, getCasinoLogoAlt, getLocalImageUrl } from "@/lib/logos";
import Markdown from "@/components/ui/Markdown";

import type { RoulettePageContent } from "@/RoulettePageContent";

type RouletteDetailTemplateProps = {
  data: RoulettePageContent;
  canonicalPath?: string;
};

export default function RouletteDetailTemplate({ data, canonicalPath }: RouletteDetailTemplateProps) {
  const {
    hero,
    introduction,
    tableOfContents,
    rtpTables,
    recommendedCasinos,
    bettingMethods,
    howToPlay,
    basicStrategy,
    advancedStrategy,
    comparison,
    variants,
    tips,
    longformSections,
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
        {introduction?.paragraphs && introduction.paragraphs.length > 0 && (
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="h-8 w-1 bg-red-600 rounded-full"></div>
              {introduction.heading}
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {introduction.paragraphs.map((p, i) => (
                <p key={i} className="text-lg" dangerouslySetInnerHTML={{ __html: p }}></p>
              ))}
            </div>
            {introduction.callouts && introduction.callouts.length > 0 && introduction.callouts.map((callout, i) => (
              <div key={i} className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                {callout.emoji && <span className="text-3xl mb-2 block">{callout.emoji}</span>}
                {callout.heading && <h3 className="font-bold text-lg mb-2">{callout.heading}</h3>}
                <p className="text-gray-700">{callout.description}</p>
                {callout.linkText && callout.linkUrl && (
                  <Link href={callout.linkUrl} className="text-blue-600 hover:underline mt-2 inline-block">
                    {callout.linkText} →
                  </Link>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Table of Contents */}
        {tableOfContents && tableOfContents.length > 0 && (
          <section className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">目次</h3>
            <ul className="space-y-2">
              {tableOfContents.map((item, i) => (
                <li key={i}>
                  <a href={item.url} className="text-blue-600 hover:underline">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* RTP Tables */}
        {rtpTables && rtpTables.length > 0 && rtpTables.map((rtpTable, idx) => (
          <section key={idx}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <DollarSign className="h-8 w-8 text-green-600" />
              {rtpTable.heading}
            </h2>
            {rtpTable.description && rtpTable.description.length > 0 && (
              <div className="space-y-4 text-gray-700 mb-6">
                {rtpTable.description.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }}></p>
                ))}
              </div>
            )}
            {rtpTable.table?.rows && rtpTable.table.rows.length > 0 && (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      {rtpTable.table.columns && rtpTable.table.columns.map((col, i) => (
                      <th key={i} className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                        <div dangerouslySetInnerHTML={{ __html: col }}></div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {rtpTable.table.rows.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      {row.map((cell, j) => (
                        <td key={j} className="px-6 py-4 text-sm text-gray-700">
                          <div dangerouslySetInnerHTML={{ __html: cell }}></div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            )}
            {rtpTable.callout && (
              <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                {rtpTable.callout.heading && <h3 className="font-bold text-lg mb-2">{rtpTable.callout.heading}</h3>}
                <p className="text-gray-700">{rtpTable.callout.description}</p>
              </div>
            )}
          </section>
        ))}

        {/* Recommended Casinos */}
        {recommendedCasinos?.casinos && recommendedCasinos.casinos.length > 0 && (
          <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Star className="h-8 w-8 text-purple-600" />
              {recommendedCasinos.heading}
            </h2>
            {recommendedCasinos.description && recommendedCasinos.description.length > 0 && (
              <div className="space-y-3 mb-6">
                {recommendedCasinos.description.map((p, i) => (
                  <p key={i} className="text-gray-700" dangerouslySetInnerHTML={{ __html: p }}></p>
                ))}
              </div>
            )}
            <div className="space-y-4">
              {recommendedCasinos.casinos.map((casino, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2" dangerouslySetInnerHTML={{ __html: casino.name }}></h3>
                      <p className="text-gray-700 mb-3">{casino.bonus}</p>
                      {casino.features && casino.features.length > 0 && (
                        <ul className="space-y-1">
                          {casino.features.map((feature, j) => (
                            <li key={j} className="text-gray-600 text-sm flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span dangerouslySetInnerHTML={{ __html: feature }}></span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    {casino.ctaText && casino.ctaUrl && (
                      <Link
                        href={casino.ctaUrl}
                        className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold whitespace-nowrap"
                      >
                        {casino.ctaText}
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Betting Methods */}
        {bettingMethods && (
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Target className="h-8 w-8 text-blue-600" />
              {bettingMethods.heading}
            </h2>
            {bettingMethods.introduction && (
              <div className="space-y-4 text-gray-700 mb-8">
                {bettingMethods.introduction.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }}></p>
                ))}
              </div>
            )}

            {/* Inside Bets */}
            {bettingMethods.insideBets?.methods && bettingMethods.insideBets.methods.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{bettingMethods.insideBets.heading}</h3>
                {bettingMethods.insideBets.description && bettingMethods.insideBets.description.length > 0 && (
                  <div className="space-y-3 mb-6">
                    {bettingMethods.insideBets.description.map((p, i) => (
                      <p key={i} className="text-gray-700" dangerouslySetInnerHTML={{ __html: p }}></p>
                    ))}
                  </div>
                )}
                <div className="space-y-4">
                  {bettingMethods.insideBets.methods.map((method, i) => (
                    <div key={i} className="bg-blue-50 rounded-lg p-6">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">{method.name}</h4>
                      <p className="text-gray-700 mb-2">{method.description}</p>
                      {method.payout && <p className="text-sm text-gray-600">配当: {method.payout}</p>}
                      {method.probability && <p className="text-sm text-gray-600">確率: {method.probability}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Outside Bets */}
            {bettingMethods.outsideBets?.methods && bettingMethods.outsideBets.methods.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{bettingMethods.outsideBets.heading}</h3>
                {bettingMethods.outsideBets.description && bettingMethods.outsideBets.description.length > 0 && (
                  <div className="space-y-3 mb-6">
                    {bettingMethods.outsideBets.description.map((p, i) => (
                      <p key={i} className="text-gray-700" dangerouslySetInnerHTML={{ __html: p }}></p>
                    ))}
                  </div>
                )}
                <div className="space-y-4">
                  {bettingMethods.outsideBets.methods.map((method, i) => (
                    <div key={i} className="bg-green-50 rounded-lg p-6">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">{method.name}</h4>
                      <p className="text-gray-700 mb-2">{method.description}</p>
                      {method.payout && <p className="text-sm text-gray-600">配当: {method.payout}</p>}
                      {method.probability && <p className="text-sm text-gray-600">確率: {method.probability}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Betting Methods Table */}
            {bettingMethods.table?.rows && bettingMethods.table.rows.length > 0 && (
              <div className="overflow-x-auto">
                {bettingMethods.table.heading && (
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{bettingMethods.table.heading}</h3>
                )}
                <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      {bettingMethods.table.columns && bettingMethods.table.columns.map((col, i) => (
                        <th key={i} className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {bettingMethods.table.rows.map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        {row.map((cell, j) => (
                          <td key={j} className="px-6 py-4 text-sm text-gray-700">
                            <div dangerouslySetInnerHTML={{ __html: cell }}></div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {bettingMethods.callout && (
              <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                {bettingMethods.callout.heading && <h3 className="font-bold text-lg mb-2">{bettingMethods.callout.heading}</h3>}
                <p className="text-gray-700">{bettingMethods.callout.description}</p>
              </div>
            )}
          </section>
        )}

        {/* How to Play */}
        {howToPlay?.steps && howToPlay.steps.length > 0 && (
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Gamepad2 className="h-8 w-8 text-indigo-600" />
              {howToPlay.heading}
            </h2>
            {howToPlay.introduction && howToPlay.introduction.length > 0 && (
              <div className="space-y-4 text-gray-700 mb-8">
                {howToPlay.introduction.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }}></p>
                ))}
              </div>
            )}
            <div className="space-y-6">
              {howToPlay.steps.map((step, i) => (
                <div key={i} className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.heading}</h3>
                      {step.description && <p className="text-gray-700 mb-2">{step.description}</p>}
                      {step.paragraphs && step.paragraphs.map((p, j) => (
                        <p key={j} className="text-gray-700 mb-2" dangerouslySetInnerHTML={{ __html: p }}></p>
                      ))}
                      {step.bullets && (
                        <ul className="list-disc list-inside space-y-1">
                          {step.bullets.map((bullet, j) => (
                            <li key={j} className="text-gray-700">{bullet}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {howToPlay.conclusion && howToPlay.conclusion.length > 0 && (
              <div className="mt-6 space-y-3">
                {howToPlay.conclusion.map((p, i) => (
                  <p key={i} className="text-gray-700" dangerouslySetInnerHTML={{ __html: p }}></p>
                ))}
              </div>
            )}
            {howToPlay.callout && (
              <div className="mt-6 bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                {howToPlay.callout.heading && <h3 className="font-bold text-lg mb-2">{howToPlay.callout.heading}</h3>}
                <p className="text-gray-700">{howToPlay.callout.description}</p>
              </div>
            )}
          </section>
        )}

        {/* Basic Strategy */}
        {basicStrategy?.strategies && basicStrategy.strategies.length > 0 && (
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-green-600" />
              {basicStrategy.heading}
            </h2>
            {basicStrategy.introduction && basicStrategy.introduction.length > 0 && (
              <div className="space-y-4 text-gray-700 mb-8">
                {basicStrategy.introduction.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }}></p>
                ))}
              </div>
            )}
            <div className="space-y-6">
              {basicStrategy.strategies.map((strategy, i) => (
                <div key={i} className="bg-green-50 rounded-xl p-6">
                  {strategy.number && (
                    <span className="inline-block px-3 py-1 bg-green-600 text-white rounded-full text-sm font-bold mb-3">
                      {strategy.number}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{strategy.heading}</h3>
                  <p className="text-gray-700 mb-3" dangerouslySetInnerHTML={{ __html: strategy.description || '' }}></p>
                  {strategy.paragraphs && strategy.paragraphs.map((p, j) => (
                    <p key={j} className="text-gray-700 mb-2" dangerouslySetInnerHTML={{ __html: p }}></p>
                  ))}
                  {strategy.bullets && (
                    <ul className="list-disc list-inside space-y-1 mb-3">
                      {strategy.bullets.map((bullet, j) => (
                        <li key={j} className="text-gray-700">{bullet}</li>
                      ))}
                    </ul>
                  )}
                  {strategy.callout && (
                    <div className="mt-4 bg-white border-l-4 border-green-500 p-4 rounded-r-lg">
                      {strategy.callout.heading && <h4 className="font-bold mb-2">{strategy.callout.heading}</h4>}
                      <p className="text-gray-700">{strategy.callout.description || strategy.callout.text}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {basicStrategy.summary && (
              <div className="mt-8 bg-gray-100 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{basicStrategy.summary.heading}</h3>
                {basicStrategy.summary.paragraphs.map((p, i) => (
                  <p key={i} className="text-gray-700 mb-2" dangerouslySetInnerHTML={{ __html: p }}></p>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Advanced Strategy */}
        {advancedStrategy?.strategies && advancedStrategy.strategies.length > 0 && (
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Zap className="h-8 w-8 text-yellow-600" />
              {advancedStrategy.heading}
            </h2>
            {advancedStrategy.introduction && advancedStrategy.introduction.length > 0 && (
              <div className="space-y-4 text-gray-700 mb-8">
                {advancedStrategy.introduction.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }}></p>
                ))}
              </div>
            )}
            <div className="space-y-6">
              {advancedStrategy.strategies.map((strategy, i) => (
                <div key={i} className="bg-yellow-50 rounded-xl p-6">
                  {strategy.number && (
                    <span className="inline-block px-3 py-1 bg-yellow-600 text-white rounded-full text-sm font-bold mb-3">
                      {strategy.number}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{strategy.heading}</h3>
                  <p className="text-gray-700 mb-3" dangerouslySetInnerHTML={{ __html: strategy.description || '' }}></p>
                  {strategy.paragraphs && strategy.paragraphs.map((p, j) => (
                    <p key={j} className="text-gray-700 mb-2" dangerouslySetInnerHTML={{ __html: p }}></p>
                  ))}
                  {strategy.bullets && (
                    <ul className="list-disc list-inside space-y-1 mb-3">
                      {strategy.bullets.map((bullet, j) => (
                        <li key={j} className="text-gray-700">{bullet}</li>
                      ))}
                    </ul>
                  )}
                  {strategy.pros && (
                    <div className="mt-3">
                      <h4 className="font-bold text-green-700 mb-2">メリット:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {strategy.pros.map((pro, j) => (
                          <li key={j} className="text-gray-700">{pro}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {strategy.cons && (
                    <div className="mt-3">
                      <h4 className="font-bold text-red-700 mb-2">デメリット:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {strategy.cons.map((con, j) => (
                          <li key={j} className="text-gray-700">{con}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {strategy.callout && (
                    <div className="mt-4 bg-white border-l-4 border-yellow-500 p-4 rounded-r-lg">
                      {strategy.callout.heading && <h4 className="font-bold mb-2">{strategy.callout.heading}</h4>}
                      <p className="text-gray-700">{strategy.callout.description || strategy.callout.text}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {advancedStrategy.summary && (
              <div className="mt-8 bg-gray-100 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{advancedStrategy.summary.heading}</h3>
                {advancedStrategy.summary.paragraphs.map((p, i) => (
                  <p key={i} className="text-gray-700 mb-2" dangerouslySetInnerHTML={{ __html: p }}></p>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Comparison */}
        {comparison?.table?.rows && comparison.table.rows.length > 0 && (
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="h-8 w-1 bg-red-600 rounded-full"></div>
              {comparison.heading}
            </h2>
            {comparison.introduction && comparison.introduction.length > 0 && (
              <div className="space-y-4 text-gray-700 mb-6">
                {comparison.introduction.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }}></p>
                ))}
              </div>
            )}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-gray-100">
                  <tr>
                    {comparison.table.columns && comparison.table.columns.map((col, i) => (
                      <th key={i} className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                        <div dangerouslySetInnerHTML={{ __html: col }}></div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparison.table.rows.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      {row.map((cell, j) => (
                        <td key={j} className="px-6 py-4 text-sm text-gray-700">
                          <div dangerouslySetInnerHTML={{ __html: cell }}></div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {comparison.points && comparison.points.length > 0 && (
              <ul className="mt-6 space-y-2">
                {comparison.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            )}
            {comparison.conclusion && comparison.conclusion.length > 0 && (
              <div className="mt-6 space-y-3">
                {comparison.conclusion.map((p, i) => (
                  <p key={i} className="text-gray-700" dangerouslySetInnerHTML={{ __html: p }}></p>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Variants */}
        {variants?.variants && variants.variants.length > 0 && (
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Gamepad2 className="h-8 w-8 text-purple-600" />
              {variants.heading}
            </h2>
            {variants.introduction && variants.introduction.length > 0 && (
              <div className="space-y-4 text-gray-700 mb-8">
                {variants.introduction.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }}></p>
                ))}
              </div>
            )}
            <div className="grid md:grid-cols-2 gap-6">
              {variants.variants.map((variant, i) => (
                <div key={i} className="bg-purple-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{variant.name}</h3>
                  <p className="text-gray-700 mb-3">{variant.description}</p>
                  {variant.features && (
                    <ul className="space-y-1 mb-3">
                      {variant.features.map((feature, j) => (
                        <li key={j} className="text-gray-600 text-sm flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {variant.houseEdge && (
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">ハウスエッジ:</span> {variant.houseEdge}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tips */}
        {tips?.tips && tips.tips.length > 0 && (
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Info className="h-8 w-8 text-blue-600" />
              {tips.heading}
            </h2>
            {tips.introduction && tips.introduction.length > 0 && (
              <div className="space-y-4 text-gray-700 mb-8">
                {tips.introduction.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }}></p>
                ))}
              </div>
            )}
            <div className="space-y-4">
              {tips.tips.map((tip, i) => (
                <div key={i} className="bg-blue-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {tip.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.heading}</h3>
                      <p className="text-gray-700 mb-2">{tip.description}</p>
                      {tip.paragraphs && tip.paragraphs.map((p, j) => (
                        <p key={j} className="text-gray-700 mb-2" dangerouslySetInnerHTML={{ __html: p }}></p>
                      ))}
                      {tip.bullets && (
                        <ul className="list-disc list-inside space-y-1">
                          {tip.bullets.map((bullet, j) => (
                            <li key={j} className="text-gray-700">{bullet}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Longform Sections */}
        {longformSections?.map((section) => (
          <section
            key={section.heading}
            id={section.anchorId}
            className="bg-white"
          >
            <div className="container mx-auto px-4 py-20">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <CheckCircle2 className="h-8 w-8 text-blue-600" />
                {section.heading}
              </h2>
              <Markdown content={section.markdown} className="prose prose-slate max-w-none" />
            </div>
          </section>
        ))}

        {/* Summary */}
        {summary?.paragraphs && summary.paragraphs.length > 0 && (
          <section className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
              {summary.heading}
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {summary.paragraphs.map((p, i) => (
                <p key={i} className="text-lg" dangerouslySetInnerHTML={{ __html: p }}></p>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        {faq && faq.length > 0 && (
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertCircle className="h-8 w-8 text-blue-600" />
              よくある質問
            </h2>
            <div className="space-y-4">
              {faq.map((item, i) => (
                <div key={i} className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-2">
                    <span className="text-blue-600 flex-shrink-0">Q.</span>
                    <span>{item.question}</span>
                  </h3>
                  <div className="flex items-start gap-2 ml-6">
                    <span className="text-green-600 font-bold flex-shrink-0">A.</span>
                    <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Author */}
        {author && (
          <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div className="flex items-start gap-6">
              {author.avatarUrl && (
                <img
                  src={author.avatarUrl}
                  alt={author.name}
                  className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                />
              )}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{author.name}</h3>
                {author.nameJapanese && (
                  <p className="text-gray-600 mb-2">{author.nameJapanese}</p>
                )}
                <p className="text-sm text-gray-600 mb-3">{author.role}</p>
                <p className="text-gray-700 leading-relaxed mb-4">{author.bio}</p>
                {author.expertise && author.expertise.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">専門分野:</p>
                    <div className="flex flex-wrap gap-2">
                      {author.expertise.map((exp, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Notice */}
        {notice?.content && (
          <section className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
            {notice.heading && (
              <h3 className="text-lg font-bold text-gray-900 mb-3">{notice.heading}</h3>
            )}
            <div
              className="text-gray-700 whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: notice.content }}
            />
          </section>
        )}

      </div>
    </SectionScaffold>
  );
}
