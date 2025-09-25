import SectionScaffold from "@/components/shell/SectionScaffold";
import HeaderBanner from "@/components/ui/HeaderBanner";
import SectionTitle from "@/components/ui/SectionTitle";

export type SlotCard = {
  name: string;
  href?: string;
  img?: string;
  provider?: string;
  rtp?: string; // e.g., "97%"
  volatility?: string; // e.g., "高"
  maxMultiplier?: string; // e.g., "x25,000"
  rating?: number; // 0-5
  badge?: string;
};

export type SlotsTable = {
  title?: string;
  caption?: string;
  columns: string[];
  rows: string[][];
};

export type ProviderPick = {
  provider: string;
  description?: string;
  picks?: Array<{ name: string; href?: string; note?: string }>; // recommended games
};

export type SlotsPageData = {
  title: string;
  banner?: {
    title: string;
    subheading?: string;
    description?: string;
    menu?: Array<{ href: string; label: string; icon?: string }>;
    leftImageSrc?: string;
    rightImageSrc?: string;
  };
  intro?: string;
  // Featured grid of slot cards
  featured?: { title?: string; items: SlotCard[] };
  // Ranked list (e.g., Top 10)
  rankings?: {
    title: string;
    items: Array<{
      rank?: number;
      slot: SlotCard;
      facts?: Array<{ label: string; value: string }>;
      summary?: string;
      cta?: { text: string; href: string };
    }>;
  };
  // Selection criteria bullets
  criteria?: string[];
  // Type explanation tables
  tables?: SlotsTable[];
  // Provider highlights with picks
  providers?: ProviderPick[];
  // Tips, pros/cons
  tips?: string[];
  prosCons?: { pros: string[]; cons: string[] };
  // Glossary or definitions
  glossary?: SlotsTable;
  // FAQ + CTA
  faq?: Array<{ q: string; a: string }>;
  cta?: { text: string; href: string };
};

function Stars({ value = 0 }: { value?: number }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const items = Array.from({ length: 5 }, (_, i) => (i < full ? 'full' : i === full && half ? 'half' : 'empty'));
  return (
    <div className="inline-flex items-center gap-0.5" aria-label={`Rating ${value} of 5`}>
      {items.map((t, i) => (
        <span key={i} className={`inline-block h-3 w-3 ${t !== 'empty' ? 'text-yellow-500' : 'text-gray-300'}`}>
          {t === 'half' ? '◐' : '●'}
        </span>
      ))}
    </div>
  );
}

function SlotCardItem({ it }: { it: SlotCard }) {
  return (
    <a
      href={it.href || '#'}
      className="group rounded-lg border bg-white p-3 flex items-center gap-3 hover:border-red-300 hover:bg-rose-50 transition-colors"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {it.img ? (
        <img src={it.img} alt={it.name} className="h-12 w-20 rounded object-cover" />
      ) : (
        <div className="h-12 w-20 rounded bg-gray-200" aria-hidden="true" />
      )}
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <div className="font-semibold text-gray-900 truncate group-hover:text-red-700">{it.name}</div>
          {typeof it.rating === 'number' ? <Stars value={it.rating} /> : null}
        </div>
        <div className="text-xs text-gray-600 flex flex-wrap gap-2 mt-0.5">
          {it.provider ? <span>Provider: {it.provider}</span> : null}
          {it.rtp ? <span>RTP: {it.rtp}</span> : null}
          {it.volatility ? <span>Volatility: {it.volatility}</span> : null}
          {it.maxMultiplier ? <span>Max: {it.maxMultiplier}</span> : null}
        </div>
      </div>
    </a>
  );
}

export default function SlotsTemplate({ data, canonicalPath }: { data: SlotsPageData; canonicalPath?: string }) {
  const d = data;
  return (
    <SectionScaffold title={d.title}>
      <div className="space-y-10">
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

        {d.intro ? (
          <section>
            <p className="text-lg text-gray-800 leading-relaxed">{d.intro}</p>
          </section>
        ) : null}

        {d.featured && d.featured.items && d.featured.items.length ? (
          <section>
            {d.featured.title ? <SectionTitle title={d.featured.title} as="h2" /> : null}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {d.featured.items.map((it, i) => (
                <SlotCardItem key={`${it.name}-${i}`} it={it} />
              ))}
            </div>
          </section>
        ) : null}

        {d.rankings && d.rankings.items && d.rankings.items.length ? (
          <section>
            <SectionTitle title={d.rankings.title} as="h2" />
            <div className="space-y-4">
              {d.rankings.items.map((r, i) => (
                <div key={i} className="rounded-xl border bg-white p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl font-extrabold text-red-600">{r.rank ?? i + 1}</div>
                    <div className="flex-1">
                      <SlotCardItem it={r.slot} />
                      {r.facts && r.facts.length ? (
                        <div className="mt-2 flex flex-wrap gap-2 text-xs">
                          {r.facts.map((f, j) => (
                            <span key={j} className="bg-gray-50 border rounded-full px-2 py-0.5 text-gray-700">
                              {f.label}: {f.value}
                            </span>
                          ))}
                        </div>
                      ) : null}
                      {r.summary ? <p className="mt-2 text-gray-800">{r.summary}</p> : null}
                      {r.cta ? (
                        <a href={r.cta.href} className="inline-flex mt-2 items-center gap-2 text-sm font-semibold text-red-700 hover:underline">
                          {r.cta.text}
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {d.criteria && d.criteria.length ? (
          <section>
            <SectionTitle title="選び方のポイント" as="h2" />
            <ul className="space-y-2 text-gray-800">
              {d.criteria.map((c, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {d.tables && d.tables.length
          ? d.tables.map((t, idx) => (
              <section key={idx} className="space-y-2">
                {t.title ? <SectionTitle title={t.title} as="h2" /> : null}
                <div className="overflow-x-auto rounded-lg border bg-white">
                  <table className="min-w-full text-sm">
                    <thead className="bg-gray-50 text-gray-600">
                      <tr>
                        {t.columns.map((c, i) => (
                          <th key={i} className="px-4 py-2 text-left font-semibold">
                            {c}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {t.rows.map((r, i) => (
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
                {t.caption ? <p className="text-xs text-gray-600">{t.caption}</p> : null}
              </section>
            ))
          : null}

        {d.providers && d.providers.length ? (
          <section>
            <SectionTitle title="おすすめプロバイダー" as="h2" />
            <div className="space-y-4">
              {d.providers.map((p, i) => (
                <div key={i} className="rounded-lg border bg-white p-4">
                  <div className="font-semibold text-gray-900">{p.provider}</div>
                  {p.description ? <p className="text-gray-800 mt-1">{p.description}</p> : null}
                  {p.picks && p.picks.length ? (
                    <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {p.picks.map((g, j) => (
                        <li key={j}>
                          {g.href ? (
                            <a href={g.href} className="text-sm text-red-700 font-semibold hover:underline">
                              {g.name}
                            </a>
                          ) : (
                            <span className="text-sm text-gray-900 font-semibold">{g.name}</span>
                          )}
                          {g.note ? <span className="text-xs text-gray-600 ml-2">{g.note}</span> : null}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {d.tips && d.tips.length ? (
          <section>
            <SectionTitle title="ヒント・注意点" as="h2" />
            <ul className="space-y-2 text-gray-800">
              {d.tips.map((t, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

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

        {d.glossary ? (
          <section>
            <SectionTitle title={d.glossary.title || "用語集"} as="h2" />
            <div className="overflow-x-auto rounded-lg border bg-white">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50 text-gray-600">
                  <tr>
                    {d.glossary.columns.map((c, i) => (
                      <th key={i} className="px-4 py-2 text-left font-semibold">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {d.glossary.rows.map((r, i) => (
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
            {d.glossary.caption ? <p className="text-xs text-gray-600">{d.glossary.caption}</p> : null}
          </section>
        ) : null}

        {d.faq && d.faq.length ? (
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
    </SectionScaffold>
  );
}

