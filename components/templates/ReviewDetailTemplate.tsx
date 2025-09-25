import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight, Star } from "lucide-react";
import SectionScaffold from "@/components/shell/SectionScaffold";
import HeaderBanner from "@/components/ui/HeaderBanner";
import CardHeader from "@/components/ui/CardHeader";
import TextBlockSection, { TextBlockSectionProps } from "@/components/ui/TextBlockSection";
import { paymentIcons } from "@/lib/data";
import AccordionFaq from "@/components/ui/AccordionFaq";

export type ReviewScoreBreakdown = {
  label: string;
  percent: number;
  note?: string;
};

export type ReviewPaymentCard = {
  name: string;
  icon?: string;
  href?: string;
  pageHref?: string;
  badge?: string;
  note?: string;
};

export type ReviewPaymentMethod = {
  name:string;
  icon?: string;
  href?: string;
};

export type ReviewBonusTableRow = {
  depositNumber: string;
  percent: string;
  cap: string;
  code: string;
};

export type ReviewOffer = {
  title: string;
  description: string;
  highlight?: string;
};

export type ReviewFact = {
  label: string;
  value: ReactNode;
};

export type ReviewFaq = {
  question: string;
  answer: string;
};

export type ReviewCta = {
  text: string;
  href: string;
  label?: string;
  badge?: string;
};

export type ReviewTextBlock = TextBlockSectionProps;

export type ReviewPageContent = {
  hero: {
    title: string;
    subheading?: string;
    description?: string;
    score: number;
    scoreMax?: number;
    scoreBreakdown?: ReviewScoreBreakdown[];
    highlights?: string[];
    watchouts?: string[];
    avatarSrc?: string;
    avatarAlt?: string;
  };
  payments?: {
    featured?: ReviewPaymentCard[];
    deposits?: ReviewPaymentMethod[];
    withdrawals?: ReviewPaymentMethod[];
    notes?: string[];
  };
  bonuses?: {
    overview?: string;
    noDeposit?: string;
    extraSpins?: { summary: string; schedule?: string[]; warning?: string };
    welcomeRows?: ReviewBonusTableRow[];
    conditions?: string[];
    prohibitedGames?: string[];
  };
  offers?: ReviewOffer[];
  facts?: ReviewFact[];
  intro?: { paragraphs?: string[]; ctas?: ReviewCta[] };
  games?: string[];
  features?: string[];
  paymentsNote?: string;
  security?: string[];
  responsiblePlay?: string[];
  complaintStats?: string[];
  awards?: string[];
  restrictedCountries?: string[];
  userConcerns?: string[];
  summary?: string[];
  extraLinks?: ReviewCta[];
  faq?: ReviewFaq[];
  cta?: ReviewCta;
  textBlocks?: ReviewTextBlock[];
  authorCommentary?: {
    author: string;
    commentary: string;
    authorHref?: string;
    avatarSrc?: string;
    role?: string;
  };
};

function paymentIconForName(name?: string, provided?: string) {
  if (provided) return provided;
  if (!name) return undefined;
  const normalized = name
    .toLowerCase()
    .replace(/[（）()]/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  if (paymentIcons[normalized]) return paymentIcons[normalized];
  return undefined;
}

function PaymentList({
  methods,
}: {
  methods?: ReviewPaymentMethod[];
}) {
  if (!methods?.length) return null;
  return (
    <ul className="mt-3 grid gap-3 sm:grid-cols-2">
      {methods.map((method) => (
        <li
          key={method.name}
          className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white/80 px-3 py-2 text-sm text-gray-700 shadow-sm"
        >
          {paymentIconForName(method.name, method.icon) ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={paymentIconForName(method.name, method.icon)} alt={method.name} className="h-7 w-7 rounded-full border border-white/60 bg-white p-0.5 shadow-sm" />
          ) : (
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-xs font-semibold text-gray-500">
              {method.name.slice(0, 1)}
            </span>
          )}
          {method.href ? (
            <Link href={method.href} className="hover:underline">
              {method.name}
            </Link>
          ) : (
            <span>{method.name}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function ReviewDetailTemplate({ content }: { content: ReviewPageContent }) {
  const scoreMax = content.hero.scoreMax ?? 5;
  const introParagraphs = content.intro?.paragraphs ?? [];
  const introPrimaryParagraph = introParagraphs[0];
  const introSecondaryParagraph = introParagraphs[1];
  const introCtas = content.intro?.ctas ?? [];
  const introPrimaryCtas = introCtas.slice(0, 2);

  return (
    <SectionScaffold title={content.hero.title}>
      <HeaderBanner
        title={content.hero.title}
        subheading={content.hero.subheading}
        description={content.hero.description}
        avatarSrc={content.hero.avatarSrc}
        avatarAlt={content.hero.avatarAlt ?? content.hero.title}
        color="violet"
        cta={
          content.cta
            ? {
                href: content.cta.href,
                label: content.cta.text,
                badge: content.cta.badge,
              }
            : undefined
        }
      />

      {/* ============== TOP BOX COMPONENTS ============== */}
      <div className="mt-10">
        <section className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
          {/* --- LEFT COLUMN: Rating Box --- */}
          <div>
            <div className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-white p-6 shadow-sm h-full flex flex-col">
              {/* This div wraps the top content, allowing the button section below to be pushed to the bottom */}
              <div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-violet-900">{content.hero.title} 総合スコア</h3>
                    <p className="text-xs font-semibold uppercase tracking-wide text-violet-600">CasinoTsu独自評価</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-violet-700 shadow">最新</span>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  <p className="text-4xl font-extrabold text-gray-900">
                    {content.hero.score}
                    <span className="ml-2 text-lg text-gray-500">/ {scoreMax}</span>
                  </p>
                </div>
                {introPrimaryParagraph && (
                  <p className="mt-4 text-xs leading-relaxed text-gray-600">
                    {introPrimaryParagraph}
                  </p>
                )}
                {introSecondaryParagraph && (
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                    {introSecondaryParagraph}
                  </p>
                )}
                {content.hero.scoreBreakdown?.length ? (
                  <div className="mt-4 space-y-4">
                    {content.hero.scoreBreakdown.map((item) => (
                      <div key={item.label}>
                        <div className="flex items-center justify-between text-sm font-semibold text-gray-700">
                          <span>{item.label}</span>
                          <span>{item.percent}%</span>
                        </div>
                        <div className="mt-1 h-2 rounded bg-gray-100">
                          <div className="h-2 rounded bg-red-500" style={{ width: `${item.percent}%` }} />
                        </div>
                        {item.note && (
                          <p className="mt-1 text-xs text-gray-600 leading-relaxed">{item.note}</p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : null}
                
                {(content.hero.highlights?.length || content.hero.watchouts?.length) && (
                  <div className="mt-6 space-y-4">
                    {content.hero.highlights?.length ? (
                      <div>
                        <p className="text-xl font-semibold uppercase tracking-wide text-rose-500">良かった点 👍</p>
                        <ul className="mt-2 space-y-2 text-sm leading-relaxed text-gray-800">
                          {content.hero.highlights.map((point) => (
                            <li key={point} className="flex items-start gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-500" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {content.hero.watchouts?.length ? (
                      <div>
                        <p className="text font-semibold uppercase tracking-wide text-gray-500">注意したい点 👎</p>
                        <ul className="mt-2 space-y-2 text-sm leading-relaxed text-gray-800">
                          {content.hero.watchouts.map((point) => (
                            <li key={point} className="flex items-start gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-400" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                )}
                {/* Extra vertical padding between watchouts and CTA */}
                {(content.hero.highlights?.length || content.hero.watchouts?.length) && (content.cta || introCtas.length) ? (
                  <div className="py-4" />
                ) : null}
              </div>

              {/* This CTA block is pushed to the bottom of the card with `mt-auto` */}
              {(content.cta || introCtas.length) && (
                <div className="mt-auto pt-6 space-y-3 rounded-xl border border-rose-100 bg-gradient-to-br from-rose-50 via-white to-white p-4">
                  {content.cta?.badge && (
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-500">{content.cta.badge}</p>
                  )}
                  {content.cta && (
                    <Link
                      href={content.cta.href}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
                    >
                      <span>{content.cta.text}</span>
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )}
                  {introPrimaryCtas.map((cta) => (
                    <Link
                      key={cta.href}
                      href={cta.href}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-rose-200 px-5 py-2 text-sm font-semibold text-rose-600 shadow-sm transition hover:bg-rose-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-200"
                    >
                      <span>{cta.text ?? cta.label ?? "詳しく見る"}</span>
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  ))}
                  {content.cta?.label && (
                    <p className="text-[11px] text-gray-500">{content.cta.label}</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* --- RIGHT COLUMN: Payments, Games, Features, Security --- */}
          <div className="space-y-6">
            {content.payments?.featured?.length ? (
              <div className="rounded-2xl border border-violet-100 bg-white p-5 shadow-sm">
                <CardHeader title="対応決済 💳" badge="Payments" accent="bg-violet-100 text-violet-900" />
                <p className="mt-2 text-xs text-gray-600">
                  よく使われる入出金手段をコンパクトに整理。スピード感や手数料の目安を押さえておきましょう。
                </p>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {content.payments.featured.map((method) => {
                    const accentClass = method.note ? "from-slate-50 via-white to-slate-100" : "from-white to-white";
                    // If method.pageHref exists, use it for the icon and name link
                    const paymentPageHref = method.pageHref || method.href;
                    const icon = paymentIconForName(method.name, method.icon);
                    return (
                      <div
                        key={method.name}
                        className={`group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-gradient-to-br ${accentClass} p-4 shadow-sm transition-transform duration-200 hover:-translate-y-0.5`}
                      >
                        <div className="flex items-center gap-3">
                          {icon ? (
                            paymentPageHref ? (
                              <Link href={paymentPageHref} className="block">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={icon} alt={method.name} className="h-9 w-9 rounded-full border border-white/60 bg-white p-1 shadow-sm" />
                              </Link>
                            ) : (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img src={icon} alt={method.name} className="h-9 w-9 rounded-full border border-white/60 bg-white p-1 shadow-sm" />
                            )
                          ) : (
                            paymentPageHref ? (
                              <Link href={paymentPageHref} className="block">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white font-bold text-gray-500 shadow-sm">
                                  {method.name.slice(0, 2)}
                                </span>
                              </Link>
                            ) : (
                              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white font-bold text-gray-500 shadow-sm">
                                {method.name.slice(0, 2)}
                              </span>
                            )
                          )}
                          <div>
                            <h3 className="text-sm font-semibold text-gray-900">
                              {paymentPageHref ? (
                                <Link href={paymentPageHref} className="hover:underline">
                                  {method.name}
                                </Link>
                              ) : (
                                method.name
                              )}
                            </h3>
                            {method.note && <p className="text-xs text-gray-600">{method.note}</p>}
                          </div>
                        </div>
                        {method.badge && (
                          <span className="mt-3 inline-flex w-fit items-center rounded-full bg-white/80 px-3 py-0.5 text-[11px] font-semibold text-gray-700 shadow-sm">
                            {method.badge}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}

            {content.games?.length ? (
              <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm">
                <CardHeader title="のゲーム 🎲" badge="Games" accent="bg-blue-100 text-blue-900" />
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-gray-800">
                  {content.games.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {content.features?.length ? (
              <div className="rounded-2xl border border-purple-100 bg-white p-4 shadow-sm">
                <CardHeader title="の特徴 🎯" badge="Features" accent="bg-purple-100 text-purple-900" />
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-gray-800">
                  {content.features.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {content.security?.length ? (
              <div className="rounded-2xl border border-green-100 bg-white p-4 shadow-sm">
                <CardHeader title="セキュリティと公正性 🔒" badge="Safety" accent="bg-green-100 text-green-900" />
                <ul className="mt-3 space-y-1.5 text-gray-800 text-sm">
                  {content.security.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </section>
      </div>

      {/* ============== BLOG POST STYLE CONTENT ============== */}

      <div className="mt-12 mx-auto max-w-8xl">
        <div className="space-y-10">
          {content.authorCommentary && (
            <section className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                {content.authorCommentary.avatarSrc ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={content.authorCommentary.avatarSrc}
                    alt={content.authorCommentary.author}
                    className="h-14 w-14 rounded-full border border-rose-100 object-cover shadow"
                  />
                ) : (
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-rose-100 bg-rose-50 text-2xl font-bold text-rose-500">
                    {content.authorCommentary.author.slice(0, 1).toUpperCase()}
                  </div>
                )}
                <div className="space-y-2 text-gray-800">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-rose-500">Author Commentary</p>
                    <p className="text-lg font-bold text-gray-900">
                      {content.authorCommentary.authorHref ? (
                        <Link href={content.authorCommentary.authorHref} className="hover:text-rose-600">
                          {content.authorCommentary.author}
                        </Link>
                      ) : (
                        content.authorCommentary.author
                      )}
                      {content.authorCommentary.role && (
                        <span className="ml-2 text-sm font-medium text-gray-500">{content.authorCommentary.role}</span>
                      )}
                    </p>
                  </div>
                  <p className="leading-relaxed italic">{content.authorCommentary.commentary}</p>
                </div>
              </div>
            </section>
          )}

          {content.bonuses && (
            <section className="space-y-6">
              {(content.bonuses.overview || content.bonuses.noDeposit || content.bonuses.extraSpins || content.bonuses.welcomeRows?.length || content.bonuses.conditions?.length) && (
                <div className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm space-y-6">
                  <CardHeader title="のボーナス" badge="Promotions" accent="bg-rose-100 text-rose-900" />
                  {content.bonuses.overview && <p className="text-gray-800 leading-relaxed">{content.bonuses.overview}</p>}
                  {content.bonuses.noDeposit && (
                    <div className="space-y-3 rounded-xl bg-rose-50 p-4">
                      <h3 className="text-lg font-bold text-rose-900">まずは入金不要100回分フリースピンから！</h3>
                      <p className="text-gray-800 leading-relaxed">{content.bonuses.noDeposit}</p>
                    </div>
                  )}
                  {content.bonuses.extraSpins && (
                    <div className="space-y-3 rounded-xl bg-white p-4 shadow-inner">
                      <h3 className="text-lg font-bold text-rose-900">そして入金するとさらに900回のフリースピンも！</h3>
                      <p className="text-gray-800 leading-relaxed">{content.bonuses.extraSpins.summary}</p>
                      {content.bonuses.extraSpins.schedule?.length ? (
                        <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                          {content.bonuses.extraSpins.schedule.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ) : null}
                      {content.bonuses.extraSpins.warning && (
                        <p className="text-sm text-gray-600">{content.bonuses.extraSpins.warning}</p>
                      )}
                    </div>
                  )}
                  {content.bonuses.welcomeRows?.length ? (
                    <div className="space-y-3">
                      <h3 className="text-lg font-bold text-rose-900">ウェルカムボーナス</h3>
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 text-sm">
                          <thead className="bg-gray-50 text-gray-600">
                            <tr>
                              <th className="px-4 py-2 text-left font-semibold">入金回数</th>
                              <th className="px-4 py-2 text-left font-semibold">ボーナス%</th>
                              <th className="px-4 py-2 text-left font-semibold">最大獲得可能額</th>
                              <th className="px-4 py-2 text-left font-semibold">ボーナスコード</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            {content.bonuses.welcomeRows.map((row) => (
                              <tr key={row.depositNumber}>
                                <td className="px-4 py-2">{row.depositNumber}</td>
                                <td className="px-4 py-2">{row.percent}</td>
                                <td className="px-4 py-2">{row.cap}</td>
                                <td className="px-4 py-2">{row.code}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <p className="text-sm text-gray-700">入金ボーナスの最低入金額は$25、賭け条件は50倍（21日以内に消化）。</p>
                    </div>
                  ) : null}
                  {content.bonuses.conditions?.length ? (
                    <div className="space-y-3">
                      <h3 className="text-lg font-bold text-rose-900">ボーナス条件</h3>
                      <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                        {content.bonuses.conditions.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {content.bonuses.prohibitedGames?.length ? (
                    <div className="rounded-xl border border-rose-100 bg-rose-50 p-4 text-sm text-gray-800">
                      <p className="font-semibold text-rose-800">禁止ゲーム一覧</p>
                      <p className="mt-2 leading-relaxed text-rose-700">{content.bonuses.prohibitedGames.join("、 ")}</p>
                    </div>
                  ) : null}
                </div>
              )}
            </section>
          )}
          
          {content.offers?.length ? (
            <section className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm space-y-6">
              <CardHeader title="その他のオファー" badge="Ongoing" accent="bg-amber-100 text-amber-900" />
              {content.offers.map((offer) => (
                <div
                  key={offer.title}
                  className={`rounded-xl ${offer.highlight ? "bg-amber-50" : "bg-white"} p-4 ${offer.highlight ? "shadow-inner" : "shadow-sm"}`}
                >
                  <h3 className="text-lg font-bold text-amber-900">{offer.title}</h3>
                  <p className="mt-2 text-sm text-gray-800">{offer.description}</p>
                  {offer.highlight && <p className="mt-2 text-xs text-amber-700">{offer.highlight}</p>}
                </div>
              ))}
            </section>
          ) : null}

          {content.textBlocks?.length ? (
            <section className="space-y-6">
              {content.textBlocks.map((block, idx) => (
                <TextBlockSection key={`${block.title ?? "text"}-${idx}`} {...block} />
              ))}
            </section>
          ) : null}

          {content.responsiblePlay?.length ? (
            <section className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
              <CardHeader title="責任あるギャンブル" badge="RG Tools" accent="bg-amber-100 text-amber-900" />
              <ul className="mt-3 space-y-2 text-gray-800">
                {content.responsiblePlay.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {content.summary?.length || content.extraLinks?.length ? (
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
              <CardHeader title="総評" badge="Summary" accent="bg-slate-100 text-slate-900" />
              {content.summary?.length ? (
                <div className="space-y-3 text-gray-800 leading-relaxed">
                  {content.summary.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              ) : null}
              {content.extraLinks?.length ? (
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 space-y-2">
                  {content.extraLinks.map((cta) => (
                    <Link key={cta.href} href={cta.href} className="text-rose-600 underline">
                      {cta.text}
                    </Link>
                  ))}
                </div>
              ) : null}
            </section>
          ) : null}

          {content.faq?.length && (
            <section>
              <CardHeader title="よくある質問" badge="FAQ" accent="bg-slate-100 text-slate-900" />
              <AccordionFaq items={content.faq.map((qa) => ({ question: qa.question, answer: qa.answer }))} className="mt-4" />
            </section>
          )}

          {content.cta && (
            <section>
              <div className="rounded-lg border bg-gradient-to-r from-rose-50 to-white p-5 flex items-center justify-between gap-4">
                <p className="text-gray-900 font-semibold">{content.cta.text}</p>
                <Link
                  href={content.cta.href}
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
  );
}