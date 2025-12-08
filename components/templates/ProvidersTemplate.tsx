import Link from "next/link";
import Image from "next/image";
import { Star, ThumbsUp, AlertTriangle, CheckCircle2, TrendingUp, Shield } from "lucide-react";
import SectionScaffold from "@/components/shell/SectionScaffold";
import HeaderBanner from "@/components/ui/HeaderBanner";
import CardHeader from "@/components/ui/CardHeader";
import AccordionFaq from "@/components/ui/AccordionFaq";
import { ProviderSEOTags } from "@/lib/schema-providers";
import { addInternalLinks, addLinksToArray, addLinksToTable } from "@/lib/internal-links";

export type ProviderCard = {
  name: string;
  logo?: string;
  href?: string;
  founded?: string;
  hq?: string;
  licenses?: string[];
  gameTypes?: string[]; // Slots, Live, Table, etc.
  topGames?: Array<{ name: string; href?: string }>;
  tagline?: string;
};

export type ProvidersTable = {
  title?: string;
  caption?: string;
  columns: string[];
  rows: string[][];
};

export type ProvidersSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: ProvidersTable;
};

export type ProvidersPageData = {
  title: string;
  banner?: {
    title: string;
    subheading?: string;
    description?: string;
    menu?: Array<{ href: string; label: string; icon?: string }>;
    leftImageSrc?: string;
    rightImageSrc?: string;
    avatarSrc?: string;
    avatarAlt?: string;
  };
  hero?: {
    score?: number;
    scoreMax?: number;
    highlights?: string[];
    watchouts?: string[];
  };
  intro?: string;
  authorCommentary?: {
    author: string;
    commentary: string;
    avatarSrc?: string;
    role?: string;
    authorHref?: string;
    hook?: string;
    theGoodStuff?: string;
    theHeadsUp?: string;
    finalThought?: string;
  };
  featured?: { title?: string; items: ProviderCard[] };
  sections?: ProvidersSection[];
  comparison?: ProvidersTable;
  faq?: Array<{ q: string; a: string }>;
  cta?: { text: string; href: string };
  games?: string[];
  features?: string[];
  security?: string[];
};

function Provider({ it }: { it: ProviderCard }) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {it.logo ? <img src={it.logo} alt={it.name} className="h-12 w-12 rounded object-cover" /> : <div className="h-12 w-12 rounded bg-gray-200" aria-hidden="true" />}
        <div className="min-w-0">
          <a href={it.href || '#'} className="font-semibold text-gray-900 hover:text-red-700 truncate">
            {it.name}
          </a>
          {it.tagline ? <div className="text-sm text-gray-700 line-clamp-2">{it.tagline}</div> : null}
        </div>
      </div>
      <div className="mt-3 text-xs text-gray-700 flex flex-wrap gap-2">
        {it.founded ? <span className="bg-gray-50 border rounded px-2 py-0.5">設立: {it.founded}</span> : null}
        {it.hq ? <span className="bg-gray-50 border rounded px-2 py-0.5">本社: {it.hq}</span> : null}
        {it.licenses && it.licenses.length ? (
          <span className="bg-gray-50 border rounded px-2 py-0.5">ライセンス: {it.licenses.join(', ')}</span>
        ) : null}
        {it.gameTypes && it.gameTypes.length ? (
          <span className="bg-gray-50 border rounded px-2 py-0.5">提供: {it.gameTypes.join(' / ')}</span>
        ) : null}
      </div>
      {it.topGames && it.topGames.length ? (
        <div className="mt-2">
          <div className="text-xs font-semibold text-gray-600">代表作</div>
          <ul className="text-sm text-gray-800 mt-1 grid grid-cols-1 sm:grid-cols-2 gap-1">
            {it.topGames.map((g, i) => (
              <li key={i}>
                {g.href ? (
                  <a href={g.href} className="text-red-700 hover:underline">
                    {g.name}
                  </a>
                ) : (
                  <span>{g.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function Stars({ value = 0, max = 5 }: { value?: number; max?: number }) {
  return (
    <div className="inline-flex items-center gap-1">
      <div className="flex">
        {Array.from({ length: max }, (_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < Math.floor(value)
                ? "fill-yellow-400 text-yellow-400"
                : i < value
                ? "fill-yellow-200 text-yellow-200"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>
      <span className="ml-1 text-sm font-medium text-white">
        {value}/{max}
      </span>
    </div>
  );
}

export default function ProvidersTemplate({ data, canonicalPath }: { data: ProvidersPageData; canonicalPath?: string }) {
  const d = data;
  const scoreMax = d.hero?.scoreMax ?? 5;
  const introParagraphs = d.intro ? [d.intro] : [];
  const introPrimaryParagraph = introParagraphs[0];
  const editorialAuthor = "Rina Okabe";
  const editorialProfileHref = "/authors/rina-okabe";

  return (
    <>
      {canonicalPath && <ProviderSEOTags data={data} canonicalPath={canonicalPath} />}
      <SectionScaffold title={d.title}>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700">
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Provider Badge */}
          <div className="absolute top-4 right-4 z-10">
            <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-sm font-semibold text-white ring-1 ring-white/30">
              Provider
            </span>
          </div>
          <div className="relative mx-auto max-w-6xl px-8 py-16 md:py-20">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">

              {/* Left Side - Provider Info */}
              <div className="text-white">
                <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-4">
                  {d.banner?.title || d.title}
                </h1>
                {d.banner?.subheading && (
                  <p className="text-xl text-purple-100 mb-4">{d.banner.subheading}</p>
                )}
                {d.banner?.description && (
                  <p
                    className="text-lg text-purple-50 mb-6"
                    dangerouslySetInnerHTML={{ __html: addInternalLinks(d.banner.description, canonicalPath) }}
                  />
                )}

                {/* Rating */}
                {d.hero?.score && (
                  <div className="mb-6">
                    <Stars value={d.hero.score} max={scoreMax} />
                  </div>
                )}

                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  {d.games?.length && (
                    <div className="text-center bg-white/10 rounded-lg p-3">
                      <div className="text-2xl font-bold">{d.games.length}+</div>
                      <div className="text-sm text-purple-200">ゲーム</div>
                    </div>
                  )}
                  {d.features?.length && (
                    <div className="text-center bg-white/10 rounded-lg p-3">
                      <div className="text-2xl font-bold">{d.features.length}</div>
                      <div className="text-sm text-purple-200">特徴</div>
                    </div>
                  )}
                  {d.security?.length && (
                    <div className="text-center bg-white/10 rounded-lg p-3">
                      <div className="text-2xl font-bold">{d.security.length}</div>
                      <div className="text-sm text-purple-200">ライセンス</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Side - Provider Logo */}
              {d.banner?.avatarSrc && (
                <div className="flex justify-center md:justify-end">
                  <div className="relative">
                    <Image
                      src={d.banner.avatarSrc}
                      alt={d.banner.avatarAlt || d.banner.title || 'Provider Logo'}
                      width={300}
                      height={300}
                      className="rounded-lg shadow-2xl bg-white/10 p-4"
                      priority
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Highlights & Watchouts */}
            {(d.hero?.highlights || d.hero?.watchouts) && (
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {d.hero.highlights && (
                  <div className="bg-green-500/20 rounded-lg p-4">
                    <h3 className="font-semibold text-green-100 mb-2 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      注目ポイント
                    </h3>
                    <ul className="space-y-1 text-green-50 text-sm">
                      {d.hero.highlights.map((item, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: `• ${addInternalLinks(item, canonicalPath)}` }} />
                      ))}
                    </ul>
                  </div>
                )}
                {d.hero.watchouts && (
                  <div className="bg-yellow-500/20 rounded-lg p-4">
                    <h3 className="font-semibold text-yellow-100 mb-2 flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      注意点
                    </h3>
                    <ul className="space-y-1 text-yellow-50 text-sm">
                      {d.hero.watchouts.map((item, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: `• ${addInternalLinks(item, canonicalPath)}` }} />
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

      {/* Two-column layout section */}
      <div className="mt-10">
        <section className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
          {/* LEFT COLUMN: Info Box */}
          <div>
            <div className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-white p-6 shadow-sm h-full flex flex-col">
              <div>
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-violet-900">{d.banner?.title || d.title}</h2>
                    <p className="text-xs font-semibold uppercase tracking-wide text-violet-600">プロバイダー情報</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-violet-700 shadow">最新</span>
                </div>

                {d.hero?.score && (
                  <div className="mt-4 flex items-center gap-2">
                    <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                    <p className="text-4xl font-extrabold text-gray-900">
                      {d.hero.score}
                      <span className="ml-2 text-lg text-gray-500">/ {scoreMax}</span>
                    </p>
                  </div>
                )}

                {introPrimaryParagraph && (
                  <p
                    className="mt-4 text-sm leading-relaxed text-gray-600"
                    dangerouslySetInnerHTML={{ __html: addInternalLinks(introPrimaryParagraph, canonicalPath) }}
                  />
                )}

                {(d.hero?.highlights?.length || d.hero?.watchouts?.length) && (
                  <div className="mt-6 space-y-4">
                    {d.hero.highlights?.length ? (
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-rose-500">注目ポイント 👍</h3>
                        <ul className="mt-2 space-y-2 text-sm leading-relaxed text-gray-800">
                          {d.hero.highlights.map((point) => (
                            <li key={point} className="flex items-start gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-500" />
                              <span dangerouslySetInnerHTML={{ __html: addInternalLinks(point, canonicalPath) }} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {d.hero.watchouts?.length ? (
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">注意したい点 👎</h3>
                        <ul className="mt-2 space-y-2 text-sm leading-relaxed text-gray-800">
                          {d.hero.watchouts.map((point) => (
                            <li key={point} className="flex items-start gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-400" />
                              <span dangerouslySetInnerHTML={{ __html: addInternalLinks(point, canonicalPath) }} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                )}
              </div>

              {d.cta && (
                <div className="mt-auto pt-6 space-y-3 rounded-xl border border-rose-100 bg-gradient-to-br from-rose-50 via-white to-white p-4">
                  <Link
                    href={d.cta.href}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
                  >
                    <span>{d.cta.text}</span>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: Features Cards */}
          <div className="space-y-6">
            {d.games?.length ? (
              <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm">
                <CardHeader title="提供ゲーム 🎲" badge="Games" accent="bg-blue-100 text-blue-900" />
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-gray-800">
                  {d.games.map((item) => (
                    <li key={item} dangerouslySetInnerHTML={{ __html: addInternalLinks(item, canonicalPath) }} />
                  ))}
                </ul>
              </div>
            ) : null}

            {d.features?.length ? (
              <div className="rounded-2xl border border-purple-100 bg-white p-4 shadow-sm">
                <CardHeader title="特徴・機能 🎯" badge="Features" accent="bg-purple-100 text-purple-900" />
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-gray-800">
                  {d.features.map((item) => (
                    <li key={item} dangerouslySetInnerHTML={{ __html: addInternalLinks(item, canonicalPath) }} />
                  ))}
                </ul>
              </div>
            ) : null}

            {d.security?.length ? (
              <div className="rounded-2xl border border-green-100 bg-white p-4 shadow-sm">
                <CardHeader title="ライセンス・セキュリティ 🔒" badge="Safety" accent="bg-green-100 text-green-900" />
                <ul className="mt-3 space-y-1.5 text-gray-800 text-sm">
                  {d.security.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                      <span dangerouslySetInnerHTML={{ __html: addInternalLinks(item, canonicalPath) }} />
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </section>
      </div>

      {/* Blog-style content sections */}
      <div className="mt-12 mx-auto max-w-8xl">
        <div className="space-y-10">

          {/* Editorial section */}
          {d.authorCommentary && (d.authorCommentary.hook || d.authorCommentary.theGoodStuff) ? (
            <section className="relative overflow-hidden rounded-3xl border border-rose-100 bg-gradient-to-br from-rose-50/80 via-white to-white shadow-sm">
              <div className="pointer-events-none absolute -left-12 top-10 h-32 w-32 rounded-full bg-rose-100/60 blur-3xl" aria-hidden="true" />
              <div className="pointer-events-none absolute -right-10 bottom-0 hidden h-48 w-48 rounded-full bg-rose-200/40 blur-3xl md:block" aria-hidden="true" />

              {/* Compact layout with horizontal author info */}
              <div className="relative p-6">
                {/* Header with author info - compact horizontal layout */}
                <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    {/* Rina Okabe's avatar */}
                    <img
                      src="/rina/avatar.png"
                      alt={editorialAuthor}
                      className="h-12 w-12 rounded-full border-2 border-rose-200 bg-white object-cover shadow-md"
                    />
                    <div>
                      <Link href={editorialProfileHref} className="text-sm font-semibold text-rose-600 hover:text-rose-700">
                        {editorialAuthor}
                      </Link>
                      <div className="text-xs text-gray-600 font-medium">カジノ専門家・レビュアー</div>
                      <div className="text-xs text-gray-500 mt-0.5">6年間で80以上のカジノを実際にプレイして検証した経験豊富な専門家</div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-rose-400 px-3 py-1 text-xs font-semibold tracking-wide text-white shadow-sm">
                    編集部レビュー
                  </span>
                </div>
                {/* Compact quote section */}
                <div className="mb-6">
                  <div className="rounded-xl bg-white/90 p-4 shadow-sm ring-1 ring-rose-100/80">
                    <blockquote className="text-base italic leading-relaxed text-gray-800">
                      &ldquo;{d.authorCommentary.hook || d.authorCommentary.commentary}&rdquo;
                    </blockquote>
                  </div>
                </div>

                {/* Compact three-column grid with reduced padding */}
                {(d.authorCommentary.theGoodStuff || d.authorCommentary.theHeadsUp || d.authorCommentary.finalThought) && (
                  <div className="grid gap-4 md:grid-cols-3">
                    {d.authorCommentary.theGoodStuff && (
                      <div className="rounded-xl bg-white/80 p-4 shadow-sm ring-1 ring-rose-100/60">
                        <div className="flex items-center gap-2 text-rose-500 mb-2">
                          <ThumbsUp className="h-5 w-5" />
                          <h4 className="text-sm font-bold tracking-wide">注目ポイント</h4>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-700">{d.authorCommentary.theGoodStuff}</p>
                      </div>
                    )}
                    {d.authorCommentary.theHeadsUp && (
                      <div className="rounded-xl bg-white/80 p-4 shadow-sm ring-1 ring-amber-100/60">
                        <div className="flex items-center gap-2 text-amber-600 mb-2">
                          <AlertTriangle className="h-5 w-5" />
                          <h4 className="text-sm font-bold tracking-wide">注意したい点</h4>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-700">{d.authorCommentary.theHeadsUp}</p>
                      </div>
                    )}
                    {d.authorCommentary.finalThought && (
                      <div className="rounded-xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-100/60">
                        <div className="flex items-center gap-2 text-slate-600 mb-2">
                          <CheckCircle2 className="h-5 w-5" />
                          <h4 className="text-sm font-bold tracking-wide">編集部の総評</h4>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-700">{d.authorCommentary.finalThought}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </section>
          ) : d.authorCommentary ? (
            <section className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                {d.authorCommentary.avatarSrc ? (
                  <img
                    src={d.authorCommentary.avatarSrc}
                    alt={d.authorCommentary.author}
                    className="h-14 w-14 rounded-full border border-rose-100 object-cover shadow"
                  />
                ) : (
                  <div className="h-14 w-14 rounded-full border border-rose-100 bg-rose-50 text-2xl font-bold text-rose-500 flex items-center justify-center">
                    {d.authorCommentary.author.slice(0, 1).toUpperCase()}
                  </div>
                )}
                <div className="space-y-2 text-gray-800">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-rose-500">Author Commentary</p>
                    <p className="text-lg font-bold text-gray-900">
                      {d.authorCommentary.authorHref ? (
                        <Link href={d.authorCommentary.authorHref} className="hover:text-rose-600">
                          {d.authorCommentary.author}
                        </Link>
                      ) : (
                        d.authorCommentary.author
                      )}
                      {d.authorCommentary.role ? (
                        <span className="ml-2 text-sm font-medium text-gray-500">{d.authorCommentary.role}</span>
                      ) : null}
                    </p>
                  </div>
                  <p className="leading-relaxed italic">{d.authorCommentary.commentary}</p>
                </div>
              </div>
            </section>
          ) : null}

          {/* Featured providers section */}
          {d.featured && d.featured.items && d.featured.items.length ? (
            <section className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm space-y-6">
              {d.featured.title && <CardHeader title={d.featured.title} badge="Featured" accent="bg-violet-100 text-violet-900" />}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {d.featured.items.map((it, i) => (
                  <Provider key={`${it.name}-${i}`} it={it} />
                ))}
              </div>
            </section>
          ) : null}

          {/* Content sections */}
          {d.sections && d.sections.length
            ? d.sections.map((s, idx) => (
                <section key={`${s.heading}-${idx}`} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm space-y-4">
                  <CardHeader title={s.heading} accent="bg-slate-100 text-slate-900" />
                  {s.paragraphs && s.paragraphs.length ? (
                    <div className="space-y-3 text-gray-800 leading-relaxed">
                      {s.paragraphs.map((p, i) => (
                        <p key={i} dangerouslySetInnerHTML={{ __html: addInternalLinks(p, canonicalPath) }} />
                      ))}
                    </div>
                  ) : null}
                  {s.bullets && s.bullets.length ? (
                    <ul className="space-y-2 text-gray-800">
                      {s.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />
                          <span dangerouslySetInnerHTML={{ __html: addInternalLinks(b, canonicalPath) }} />
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {s.table ? (
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-gray-50">
                            <tr>
                              {s.table.columns.map((c, i) => (
                                <th key={i} className="px-6 py-4 text-left font-semibold text-base">
                                  {c}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {addLinksToTable(s.table.rows, canonicalPath).map((r, i) => (
                              <tr key={i}>
                                {r.map((cell, j) => (
                                  <td key={j} className="px-6 py-4 text-gray-800">
                                    {j === 0 ? (
                                      <span className="font-semibold text-gray-900" dangerouslySetInnerHTML={{ __html: cell }} />
                                    ) : (
                                      <span dangerouslySetInnerHTML={{ __html: cell }} />
                                    )}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ) : null}
                </section>
              ))
            : null}

          {/* Comparison table */}
          {d.comparison ? (
            <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm space-y-4">
              {d.comparison.title && <CardHeader title={d.comparison.title} badge="Comparison" accent="bg-slate-100 text-slate-900" />}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        {d.comparison.columns.map((c, i) => (
                          <th key={i} className="px-6 py-4 text-left font-semibold text-base">
                            {c}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {addLinksToTable(d.comparison.rows, canonicalPath).map((r, i) => (
                        <tr key={i}>
                          {r.map((cell, j) => (
                            <td key={j} className="px-6 py-4 text-gray-800">
                              {j === 0 ? (
                                <span className="font-semibold text-gray-900" dangerouslySetInnerHTML={{ __html: cell }} />
                              ) : (
                                <span dangerouslySetInnerHTML={{ __html: cell }} />
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {d.comparison.caption && <p className="text-xs text-gray-600 mt-1">{d.comparison.caption}</p>}
            </section>
          ) : null}

          {/* FAQ section */}
          {d.faq && d.faq.length && (
            <section>
              <CardHeader title="よくある質問" badge="FAQ" accent="bg-slate-100 text-slate-900" />
              <AccordionFaq items={d.faq.map((qa) => ({ question: qa.q, answer: qa.a }))} className="mt-4" />
            </section>
          )}

          {/* CTA section */}
          {d.cta && (
            <section>
              <div className="rounded-lg border bg-gradient-to-r from-rose-50 to-white p-5 flex items-center justify-between gap-4">
                <p className="text-gray-900 font-semibold">{d.cta.text}</p>
                <Link
                  href={d.cta.href}
                  className="inline-flex items-center gap-2 bg-red-600 text-white font-bold py-2.5 px-5 rounded-md hover:bg-red-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                >
                  詳しく見る
                </Link>
              </div>
            </section>
          )}
        </div>
      </div>
    </SectionScaffold>
    </>
  );
}
