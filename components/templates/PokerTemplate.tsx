import SectionScaffold from "@/components/shell/SectionScaffold";
import HeaderBanner from "@/components/ui/HeaderBanner";
import SectionTitle from "@/components/ui/SectionTitle";

export type PkTable = { title?: string; caption?: string; columns: string[]; rows: string[][] };
export type PkSection = { heading: string; paragraphs?: string[]; bullets?: string[]; table?: PkTable };
export type PkVariant = { name: string; description?: string; link?: string };

export type PokerPageData = {
  title: string;
  banner?: { title: string; subheading?: string; description?: string; menu?: Array<{ href: string; label: string; icon?: string }>; leftImageSrc?: string; rightImageSrc?: string };
  intro?: string;
  bestSites?: PkTable;
  legality?: PkSection;
  overview?: PkSection;
  compare?: PkTable; // live vs virtual vs tournament
  gettingStarted?: { title?: string; steps: string[]; note?: string };
  essentials?: PkSection; // important points
  variants?: PkVariant[]; // list of game types (Texas Hold’em, Omaha, etc.)
  strategy?: PkSection; // basic strategies, GTO etc.
  guides?: Array<{ title: string; href: string }>;
  faq?: Array<{ q: string; a: string }>;
  cta?: { text: string; href: string };
};

export default function PokerTemplate({ data, canonicalPath }: { data: PokerPageData; canonicalPath?: string }) {
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

        {d.legality ? (
          <section>
            <SectionTitle title={d.legality.heading} as="h2" />
            {d.legality.paragraphs?.map((p, i) => (
              <p key={i} className="text-gray-800 leading-relaxed">
                {p}
              </p>
            ))}
            {d.legality.bullets && d.legality.bullets.length ? (
              <ul className="mt-2 space-y-2 text-gray-800">
                {d.legality.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ) : null}

        {d.overview ? (
          <section>
            <SectionTitle title={d.overview.heading} as="h2" />
            {d.overview.paragraphs?.map((p, i) => (
              <p key={i} className="text-gray-800 leading-relaxed">
                {p}
              </p>
            ))}
          </section>
        ) : null}

        {d.compare ? (
          <section>
            {d.compare.title ? <SectionTitle title={d.compare.title} as="h2" /> : null}
            <div className="overflow-x-auto rounded-lg border bg-white">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50 text-gray-600">
                  <tr>
                    {d.compare.columns.map((c, i) => (
                      <th key={i} className="px-4 py-2 text-left font-semibold">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {d.compare.rows.map((r, i) => (
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
            {d.compare.caption ? <p className="text-xs text-gray-600 mt-1">{d.compare.caption}</p> : null}
          </section>
        ) : null}

        {d.gettingStarted ? (
          <section>
            <SectionTitle title={d.gettingStarted.title || "始め方・遊び方"} as="h2" />
            <ol className="list-decimal pl-5 space-y-1 text-gray-800">
              {d.gettingStarted.steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
            {d.gettingStarted.note ? <p className="text-sm text-gray-700 mt-2">{d.gettingStarted.note}</p> : null}
          </section>
        ) : null}

        {d.essentials ? (
          <section>
            <SectionTitle title={d.essentials.heading} as="h2" />
            {d.essentials.paragraphs?.map((p, i) => (
              <p key={i} className="text-gray-800 leading-relaxed">
                {p}
              </p>
            ))}
            {d.essentials.bullets && d.essentials.bullets.length ? (
              <ul className="mt-2 space-y-2 text-gray-800">
                {d.essentials.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {d.essentials.table ? (
              <div className="mt-3 overflow-x-auto rounded-lg border bg-white">
                <table className="min-w-full text-sm">
                  <thead className="bg-gray-50 text-gray-600">
                    <tr>
                      {d.essentials.table.columns.map((c, i) => (
                        <th key={i} className="px-4 py-2 text-left font-semibold">
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {d.essentials.table.rows.map((r, i) => (
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
        ) : null}

        {d.variants && d.variants.length ? (
          <section>
            <SectionTitle title="ポーカーの種類" as="h2" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {d.variants.map((v, i) => (
                <div key={i} className="rounded-lg border bg-white p-4">
                  <div className="font-semibold text-gray-900">
                    {v.link ? (
                      <a href={v.link} className="hover:text-red-700">
                        {v.name}
                      </a>
                    ) : (
                      v.name
                    )}
                  </div>
                  {v.description ? <p className="text-sm text-gray-800 mt-1">{v.description}</p> : null}
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {d.strategy ? (
          <section>
            <SectionTitle title={d.strategy.heading} as="h2" />
            {d.strategy.paragraphs?.map((p, i) => (
              <p key={i} className="text-gray-800 leading-relaxed">
                {p}
              </p>
            ))}
            {d.strategy.bullets && d.strategy.bullets.length ? (
              <ul className="mt-2 space-y-2 text-gray-800">
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

        {d.guides && d.guides.length ? (
          <section>
            <SectionTitle title="おすすめガイド" as="h2" />
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {d.guides.map((g, i) => (
                <li key={i}>
                  <a href={g.href} className="text-red-700 font-semibold hover:underline">
                    {g.title}
                  </a>
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
              <a href={d.cta.href} className="inline-flex items-center gap-2 bg-red-600 text-white font-bold py-2.5 px-5 rounded-md hover:bg-red-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500">
                詳しく見る
              </a>
            </div>
          </section>
        ) : null}
      </div>
    </SectionScaffold>
  );
}

