import SectionScaffold from "@/components/shell/SectionScaffold";
import SectionTitle from "@/components/ui/SectionTitle";
import HeaderBanner from "@/components/ui/HeaderBanner";

export type DiceTable = {
  title?: string;
  caption?: string;
  columns: string[];
  rows: string[][];
};

export type DiceSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: DiceTable;
};

export type DicePageData = {
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
  sections?: DiceSection[]; // general dice games overview
  tables?: DiceTable[];
  tips?: string[];
  faq?: Array<{ q: string; a: string }>;
};

export default function DiceTemplate({ data }: { data: DicePageData }) {
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
      </div>
    </SectionScaffold>
  );
}
