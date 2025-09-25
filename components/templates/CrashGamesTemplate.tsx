import SectionScaffold from "@/components/shell/SectionScaffold";
import SectionTitle from "@/components/ui/SectionTitle";
import HeaderBanner from "@/components/ui/HeaderBanner";
import SlotsTemplate, { SlotsTable } from "@/components/templates/SlotsTemplate";

export type CrashGame = {
  name: string;
  provider?: string;
  volatility?: string;
  rtp?: string;
  href?: string;
  note?: string;
};

export type CrashGamesPageData = {
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
  featured?: { title?: string; items: CrashGame[] };
  mechanics?: string[]; // how crash multipliers work
  tables?: SlotsTable[]; // reuse generic small tables for RTP/volatility definitions
  tips?: string[];
  faq?: Array<{ q: string; a: string }>;
  cta?: { text: string; href: string };
};

export default function CrashGamesTemplate({ data }: { data: CrashGamesPageData }) {
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
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-900">
              {d.featured.items.map((g, i) => (
                <li key={i} className="rounded-lg border bg-white p-4">
                  <div className="font-semibold">
                    {g.href ? (
                      <a href={g.href} className="hover:text-red-700">
                        {g.name}
                      </a>
                    ) : (
                      g.name
                    )}
                  </div>
                  <div className="text-xs text-gray-600 mt-0.5 flex flex-wrap gap-2">
                    {g.provider ? <span>Provider: {g.provider}</span> : null}
                    {g.rtp ? <span>RTP: {g.rtp}</span> : null}
                    {g.volatility ? <span>Volatility: {g.volatility}</span> : null}
                  </div>
                  {g.note ? <p className="text-sm text-gray-800 mt-1">{g.note}</p> : null}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {d.mechanics && d.mechanics.length ? (
          <section>
            <SectionTitle title="ゲームの仕組み（マルチプライヤー）" as="h2" />
            <ul className="space-y-2 text-gray-800">
              {d.mechanics.map((m, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {d.tables && d.tables.length ? (
          <section>
            {d.tables.map((t, i) => (
              <div key={i} className="space-y-2">
                {t.title ? <SectionTitle title={t.title} as="h2" /> : null}
                <div className="overflow-x-auto rounded-lg border bg-white">
                  <table className="min-w-full text-sm">
                    <thead className="bg-gray-50 text-gray-600">
                      <tr>
                        {t.columns.map((c, j) => (
                          <th key={j} className="px-4 py-2 text-left font-semibold">
                            {c}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {t.rows.map((r, j) => (
                        <tr key={j}>
                          {r.map((cell, k) => (
                            <td key={k} className="px-4 py-2 text-gray-800">
                              {k === 0 ? <span className="font-semibold text-gray-900">{cell}</span> : cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {t.caption ? <p className="text-xs text-gray-600">{t.caption}</p> : null}
              </div>
            ))}
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
