import SectionScaffold from "@/components/shell/SectionScaffold";
import HeaderBanner from "@/components/ui/HeaderBanner";
import SectionTitle from "@/components/ui/SectionTitle";

export type ReviewSubRating = { label: string; percent: number; note?: string };

export type ReviewPageData = {
  title: string;
  banner?: {
    title: string;
    subheading?: string;
    description?: string;
    menu?: Array<{ href: string; label: string; icon?: string }>;
    leftImageSrc?: string;
    rightImageSrc?: string;
  };
  // Scores
  score?: { overall?: number; max?: number; subratings?: ReviewSubRating[] };
  // Quick highlights (bullets)
  highlights?: string[];
  // Payments supported (links to our /payment/* pages)
  payments?: Array<{ href: string; name: string; icon?: string }>;
  // Fact table (key/value matrix)
  facts?: { title?: string; columns: string[]; rows: string[][] };
  // Bonus summary
  bonus?: { title?: string; amount?: string; freeSpins?: string; wagering?: string; notes?: string[] };
  // Narrative sections (avoid markdown; use lists of paragraphs)
  sections?: Array<{ heading: string; paragraphs?: string[]; bullets?: string[] }>;
  prosCons?: { pros: string[]; cons: string[] };
  faq?: Array<{ q: string; a: string }>;
  cta?: { text: string; href: string };
};

function JsonLd({ data, canonicalPath }: { data: ReviewPageData; canonicalPath?: string }) {
  const site = process.env.NEXT_PUBLIC_SITE_ORIGIN || "";
  const url = site && canonicalPath ? `${site}${canonicalPath}` : canonicalPath || undefined;
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    name: data.title,
    url,
    reviewRating: data.score?.overall
      ? { '@type': 'Rating', ratingValue: data.score.overall, bestRating: data.score.max || 5 }
      : undefined,
  } as any;
  const content = JSON.stringify(ld);
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: content }} />;
}

export default function ReviewsTemplate({ data, canonicalPath }: { data: ReviewPageData; canonicalPath?: string }) {
  const d = data;
  return (
    <SectionScaffold title={d.title}>
      <JsonLd data={d} canonicalPath={canonicalPath} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-9 space-y-10">
          {d.banner ? (
            <HeaderBanner
              title={d.banner.title}
              subheading={d.banner.subheading}
              description={d.banner.description}
              menuItems={d.banner.menu}
              leftImageSrc={d.banner.leftImageSrc}
              rightImageSrc={d.banner.rightImageSrc}
            />
          ) : null}

          {/* Score + Highlights */}
          {(d.score || (d.highlights && d.highlights.length)) && (
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {d.score ? (
                <div className="rounded-xl border bg-white p-5 shadow-sm">
                  <div className="text-sm font-semibold text-gray-600">総合評価</div>
                  <div className="mt-1 text-3xl font-extrabold text-gray-900">
                    {d.score.overall}
                    <span className="text-gray-400 text-lg"> / {d.score.max || 5}</span>
                  </div>
                  {d.score.subratings && d.score.subratings.length ? (
                    <div className="mt-3 space-y-2">
                      {d.score.subratings.map((sr, i) => (
                        <div key={i}>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-700">{sr.label}</span>
                            <span className="font-semibold text-gray-900">{sr.percent}%</span>
                          </div>
                          <div className="h-1.5 bg-gray-100 rounded">
                            <div className="h-1.5 bg-red-500 rounded" style={{ width: `${sr.percent}%` }} />
                          </div>
                          {sr.note ? <div className="text-xs text-gray-600 mt-0.5">{sr.note}</div> : null}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : null}

              {d.highlights && d.highlights.length ? (
                <div className="md:col-span-2 rounded-xl border bg-white p-5 shadow-sm">
                  <div className="text-sm font-semibold text-gray-600">おすすめポイント</div>
                  <ul className="mt-2 space-y-2 text-gray-800">
                    {d.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </section>
          )}

          {/* Payments */}
          {d.payments && d.payments.length ? (
            <section>
              <SectionTitle title="対応決済" as="h2" />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {d.payments.map((p, i) => (
                  <a key={i} href={p.href} className="group rounded-lg border bg-white p-3 flex items-center gap-3 hover:border-red-300 hover:bg-rose-50 transition-colors">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    {p.icon ? (
                      <img src={p.icon} alt={p.name} className="h-8 w-8 rounded object-cover" />
                    ) : (
                      <div className="h-8 w-8 rounded bg-gray-200" aria-hidden="true" />
                    )}
                    <span className="text-sm font-semibold text-gray-800 group-hover:text-red-700">{p.name}</span>
                  </a>
                ))}
              </div>
            </section>
          ) : null}

          {/* Facts */}
          {d.facts ? (
            <section>
              {d.facts.title ? <SectionTitle title={d.facts.title} as="h2" /> : null}
              <div className="overflow-x-auto rounded-lg border bg-white">
                <table className="min-w-full text-sm">
                  <thead className="bg-gray-50 text-gray-600">
                    <tr>
                      {d.facts.columns.map((c, i) => (
                        <th key={i} className="px-4 py-2 text-left font-semibold">
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {d.facts.rows.map((r, i) => (
                      <tr key={i}>
                        {r.map((cell, j) => (
                          <td key={j} className="px-4 py-2 text-gray-800">
                            {j === 0 ? <span className="font-semibold text-gray-900">{cell}</span> : cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ) : null}

          {/* Bonus */}
          {d.bonus ? (
            <section>
              <SectionTitle title={d.bonus.title || "ボーナス"} as="h2" />
              <div className="rounded-xl border bg-white p-5 shadow-sm">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  {d.bonus.amount ? (
                    <div>
                      <div className="text-xs font-semibold text-gray-600">ボーナス</div>
                      <div className="text-xl font-bold text-gray-900">{d.bonus.amount}</div>
                    </div>
                  ) : null}
                  {d.bonus.freeSpins ? (
                    <div>
                      <div className="text-xs font-semibold text-gray-600">フリースピン</div>
                      <div className="text-xl font-bold text-gray-900">{d.bonus.freeSpins}</div>
                    </div>
                  ) : null}
                  {d.bonus.wagering ? (
                    <div>
                      <div className="text-xs font-semibold text-gray-600">賭け条件</div>
                      <div className="text-xl font-bold text-gray-900">{d.bonus.wagering}</div>
                    </div>
                  ) : null}
                </div>
                {d.bonus.notes && d.bonus.notes.length ? (
                  <ul className="mt-4 space-y-1 text-sm text-gray-700 list-disc pl-5">
                    {d.bonus.notes.map((n, i) => (
                      <li key={i}>{n}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </section>
          ) : null}

          {/* Narrative sections */}
          {d.sections && d.sections.length
            ? d.sections.map((s, idx) => (
                <section key={`${s.heading}-${idx}`} className="space-y-3">
                  <SectionTitle title={s.heading} as="h2" />
                  {s.paragraphs && s.paragraphs.length ? (
                    <div className="space-y-3 text-gray-800">
                      {s.paragraphs.map((p, i) => (
                        <p key={i} className="leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>
                  ) : null}
                  {s.bullets && s.bullets.length ? (
                    <ul className="space-y-2 text-gray-800">
                      {s.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))
            : null}

          {/* Pros / Cons */}
          {d.prosCons ? (
            <section>
              <SectionTitle title="メリット・デメリット" as="h2" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-lg border bg-white p-4">
                  <h3 className="font-semibold text-green-700 mb-2">メリット</h3>
                  <ul className="space-y-2 text-gray-800">
                    {d.prosCons.pros.map((p, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-600" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border bg-white p-4">
                  <h3 className="font-semibold text-red-700 mb-2">デメリット</h3>
                  <ul className="space-y-2 text-gray-800">
                    {d.prosCons.cons.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ) : null}

          {/* FAQ */}
          {d.faq && d.faq.length > 0 ? (
            <section>
              <SectionTitle title="よくある質問" as="h2" />
              <div className="rounded-lg border bg-white divide-y">
                {d.faq.map((qa, i) => (
                  <details key={i} className="group">
                    <summary className="list-none cursor-pointer select-none px-4 py-4 flex items-center justify-between gap-4">
                      <span className="font-medium text-gray-900 group-open:text-red-600">{qa.q}</span>
                      <svg
                        className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180"
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
                    </summary>
                    <div className="px-4 pb-4 text-gray-800">{qa.a}</div>
                  </details>
                ))}
              </div>
            </section>
          ) : null}

          {/* CTA */}
          {d.cta ? (
            <section>
              <div className="rounded-lg border bg-gradient-to-r from-rose-50 to-white p-5 flex items-center justify-between gap-4">
                <p className="text-gray-900 font-semibold">{d.cta.text}</p>
                <a
                  href={d.cta.href}
                  className="inline-flex items-center gap-2 bg-red-600 text-white font-bold py-2.5 px-5 rounded-md hover:bg-red-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                >
                  詳しく見る
                </a>
              </div>
            </section>
          ) : null}
        </div>

        {/* Right column reserved for future: related casinos, promos, etc. */}
        <aside className="lg:col-span-3 space-y-6" />
      </div>
    </SectionScaffold>
  );
}

