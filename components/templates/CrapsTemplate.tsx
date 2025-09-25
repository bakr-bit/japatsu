import SectionScaffold from "@/components/shell/SectionScaffold";
import HeaderBanner from "@/components/ui/HeaderBanner";
import SectionTitle from "@/components/ui/SectionTitle";

export type CrapsTable = {
  title?: string;
  caption?: string;
  columns: string[];
  rows: string[][];
};

export type CrapsSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: CrapsTable;
};

export type CrapsPageData = {
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
  howto?: { title?: string; steps: string[]; note?: string };
  basics?: CrapsSection; // key positions: Pass/Come/Odds etc
  bets?: CrapsSection; // bet types overview
  tables?: CrapsTable[]; // house edge comparisons etc
  tips?: string[];
  faq?: Array<{ q: string; a: string }>;
  cta?: { text: string; href: string };
};

export default function CrapsTemplate({ data }: { data: CrapsPageData }) {
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

        {d.howto ? (
          <section>
            <SectionTitle title={d.howto.title || "ラウンドの流れ"} as="h2" />
            <ol className="list-decimal pl-5 space-y-1 text-gray-800">
              {d.howto.steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
            {d.howto.note ? <p className="text-sm text-gray-700 mt-2">{d.howto.note}</p> : null}
          </section>
        ) : null}

        {d.basics ? (
          <section>
            <SectionTitle title={d.basics.heading} as="h2" />
            {d.basics.paragraphs && d.basics.paragraphs.length ? (
              <div className="space-y-3 text-gray-800">
                {d.basics.paragraphs.map((p, i) => (
                  <p key={i} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            ) : null}
            {d.basics.bullets && d.basics.bullets.length ? (
              <ul className="space-y-2 text-gray-800 mt-2">
                {d.basics.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ) : null}

        {d.bets ? (
          <section>
            <SectionTitle title={d.bets.heading} as="h2" />
            {d.bets.paragraphs && d.bets.paragraphs.length ? (
              <div className="space-y-3 text-gray-800">
                {d.bets.paragraphs.map((p, i) => (
                  <p key={i} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            ) : null}
            {d.bets.bullets && d.bets.bullets.length ? (
              <ul className="space-y-2 text-gray-800 mt-2">
                {d.bets.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ) : null}

        {d.tables && d.tables.length
          ? d.tables.map((t, idx) => (
              <section key={idx}>
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
                {t.caption ? <p className="text-xs text-gray-600 mt-1">{t.caption}</p> : null}
              </section>
            ))
          : null}

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

