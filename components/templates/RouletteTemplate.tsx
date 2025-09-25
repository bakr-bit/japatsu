import SectionScaffold from "@/components/shell/SectionScaffold";
import HeaderBanner from "@/components/ui/HeaderBanner";
import SectionTitle from "@/components/ui/SectionTitle";

export type RlCard = {
  name: string;
  href?: string;
  img?: string;
  rating?: number;
  tagline?: string;
  cta?: { text: string; href: string };
};

export type RlTable = {
  title?: string;
  caption?: string;
  columns: string[];
  rows: string[][];
};

export type RlSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: RlTable;
};

export type RoulettePageData = {
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
  featured?: { title?: string; items: RlCard[] };
  bestSites?: RlTable;
  sections?: RlSection[];
  types?: Array<{ name: string; description?: string; link?: string }>; // European, American, French, Lightning, etc.
  strategy?: RlSection;
  tips?: string[];
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

function Card({ it }: { it: RlCard }) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <a href={it.href || '#'} className="flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {it.img ? <img src={it.img} alt={it.name} className="h-14 w-14 rounded object-cover" /> : <div className="h-14 w-14 rounded bg-gray-200" />}
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <div className="font-semibold text-gray-900 truncate hover:text-red-700">{it.name}</div>
            {typeof it.rating === 'number' ? <Stars value={it.rating} /> : null}
          </div>
          {it.tagline ? <div className="text-sm text-gray-700 line-clamp-2">{it.tagline}</div> : null}
        </div>
      </a>
      {it.cta ? (
        <a href={it.cta.href} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-red-700 hover:underline">
          {it.cta.text}
        </a>
      ) : null}
    </div>
  );
}

export default function RouletteTemplate({ data, canonicalPath }: { data: RoulettePageData; canonicalPath?: string }) {
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

        {d.intro ? <p className="text-lg text-gray-800 leading-relaxed">{d.intro}</p> : null}

        {d.featured && d.featured.items && d.featured.items.length ? (
          <section>
            {d.featured.title ? <SectionTitle title={d.featured.title} as="h2" /> : null}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {d.featured.items.map((it, i) => (
                <Card key={`${it.name}-${i}`} it={it} />
              ))}
            </div>
          </section>
        ) : null}

        {d.bestSites ? (
          <section>
            {d.bestSites.title ? <SectionTitle title={d.bestSites.title} as="h2" /> : null}
            <div className="overflow-x-auto rounded-lg border bg-white">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50 text-gray-600">
                  <tr>
                    {d.bestSites.columns.map((c, i) => (
                      <th key={i} className="px-4 py-2 text-left font-semibold">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {d.bestSites.rows.map((r, i) => (
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
            {d.bestSites.caption ? <p className="text-xs text-gray-600 mt-1">{d.bestSites.caption}</p> : null}
          </section>
        ) : null}

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
                {s.table ? (
                  <div className="overflow-x-auto rounded-lg border bg-white">
                    <table className="min-w-full text-sm">
                      <thead className="bg-gray-50 text-gray-600">
                        <tr>
                          {s.table.columns.map((c, i) => (
                            <th key={i} className="px-4 py-2 text-left font-semibold">
                              {c}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {s.table.rows.map((r, i) => (
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
                ) : null}
              </section>
            ))
          : null}

        {d.types && d.types.length ? (
          <section>
            <SectionTitle title="ルーレットの種類" as="h2" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {d.types.map((t, i) => (
                <div key={i} className="rounded-lg border bg-white p-4">
                  <div className="font-semibold text-gray-900">
                    {t.link ? (
                      <a href={t.link} className="hover:text-red-700">
                        {t.name}
                      </a>
                    ) : (
                      t.name
                    )}
                  </div>
                  {t.description ? <p className="text-sm text-gray-800 mt-1">{t.description}</p> : null}
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {d.strategy ? (
          <section>
            <SectionTitle title={d.strategy.heading} as="h2" />
            {d.strategy.paragraphs && d.strategy.paragraphs.length ? (
              <div className="space-y-3 text-gray-800">
                {d.strategy.paragraphs.map((p, i) => (
                  <p key={i} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            ) : null}
            {d.strategy.bullets && d.strategy.bullets.length ? (
              <ul className="space-y-2 text-gray-800 mt-2">
                {d.strategy.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {d.strategy.table ? (
              <div className="mt-3 overflow-x-auto rounded-lg border bg-white">
                <table className="min-w-full text-sm">
                  <thead className="bg-gray-50 text-gray-600">
                    <tr>
                      {d.strategy.table.columns.map((c, i) => (
                        <th key={i} className="px-4 py-2 text-left font-semibold">
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {d.strategy.table.rows.map((r, i) => (
                      <tr key={i}>
                        {r.map((cell, j) => (
                          <td key={j} className="px-4 py-2 text-gray-800">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
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

        {d.faq && d.faq.length ? (
          <section>
            <SectionTitle title="よくある質問" as="h2" />
            <div className="rounded-lg border bg-white divide-y">
              {d.faq.map((qa, i) => (
                <details key={i} className="group">
                  <summary className="list-none cursor-pointer select-none px-4 py-4 flex items-center justify-between gap-4">
                    <span className="font-medium text-gray-900 group-open:text-red-600">{qa.q}</span>
                    <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

