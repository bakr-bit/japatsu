import SectionScaffold from "@/components/shell/SectionScaffold";
import HeaderBanner from "@/components/ui/HeaderBanner";
import SectionTitle from "@/components/ui/SectionTitle";

export type OfferCard = {
  casino: string;
  href?: string;
  logo?: string;
  title?: string; // e.g., "最大$1,000 + 150 FS"
  amount?: string; // "$1,000"
  freeSpins?: string; // "150"
  wagering?: string; // "20x"
  expiry?: string; // "2025-12-31"
  notes?: string[];
  cta?: { text: string; href: string };
};

export type BonusTable = {
  title?: string;
  caption?: string;
  columns: string[];
  rows: string[][];
};

export type BonusSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: BonusTable;
};

export type BonusesPageData = {
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
  featured?: { title?: string; items: OfferCard[] };
  categories?: Array<{ name: string; description?: string; commonRules?: string[] }>;
  comparison?: BonusTable;
  howto?: { title?: string; steps: string[]; note?: string };
  tips?: string[];
  pitfalls?: string[];
  glossary?: BonusTable;
  faq?: Array<{ q: string; a: string }>;
  cta?: { text: string; href: string };
};

function Offer({ it }: { it: OfferCard }) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {it.logo ? <img src={it.logo} alt={it.casino} className="h-12 w-12 rounded object-cover" /> : <div className="h-12 w-12 rounded bg-gray-200" />}
        <div className="min-w-0">
          <a href={it.href || '#'} className="font-semibold text-gray-900 hover:text-red-700 truncate">
            {it.casino}
          </a>
          {it.title ? <div className="text-sm text-gray-700">{it.title}</div> : null}
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
        {it.amount ? (
          <div>
            <div className="text-xs text-gray-600">ボーナス</div>
            <div className="text-sm font-bold text-gray-900">{it.amount}</div>
          </div>
        ) : null}
        {it.freeSpins ? (
          <div>
            <div className="text-xs text-gray-600">フリースピン</div>
            <div className="text-sm font-bold text-gray-900">{it.freeSpins}</div>
          </div>
        ) : null}
        {it.wagering ? (
          <div>
            <div className="text-xs text-gray-600">賭け条件</div>
            <div className="text-sm font-bold text-gray-900">{it.wagering}</div>
          </div>
        ) : null}
      </div>
      {it.notes && it.notes.length ? (
        <ul className="mt-2 text-xs text-gray-700 list-disc pl-5 space-y-0.5">
          {it.notes.map((n, i) => (
            <li key={i}>{n}</li>
          ))}
        </ul>
      ) : null}
      {it.cta ? (
        <a href={it.cta.href} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-red-700 hover:underline">
          {it.cta.text}
        </a>
      ) : null}
    </div>
  );
}

export default function BonusesTemplate({ data, canonicalPath }: { data: BonusesPageData; canonicalPath?: string }) {
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
                <Offer key={`${it.casino}-${i}`} it={it} />
              ))}
            </div>
          </section>
        ) : null}

        {d.categories && d.categories.length ? (
          <section>
            <SectionTitle title="ボーナスの種類" as="h2" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {d.categories.map((c, i) => (
                <div key={i} className="rounded-lg border bg-white p-4">
                  <div className="font-semibold text-gray-900">{c.name}</div>
                  {c.description ? <p className="text-sm text-gray-800 mt-1">{c.description}</p> : null}
                  {c.commonRules && c.commonRules.length ? (
                    <ul className="mt-2 space-y-1 text-sm text-gray-800 list-disc pl-5">
                      {c.commonRules.map((r, j) => (
                        <li key={j}>{r}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {d.comparison ? (
          <section>
            {d.comparison.title ? <SectionTitle title={d.comparison.title} as="h2" /> : null}
            <div className="overflow-x-auto rounded-lg border bg-white">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50 text-gray-600">
                  <tr>
                    {d.comparison.columns.map((c, i) => (
                      <th key={i} className="px-4 py-2 text-left font-semibold">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {d.comparison.rows.map((r, i) => (
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
            {d.comparison.caption ? <p className="text-xs text-gray-600 mt-1">{d.comparison.caption}</p> : null}
          </section>
        ) : null}

        {d.howto ? (
          <section>
            <SectionTitle title={d.howto.title || "受け取り方"} as="h2" />
            <ol className="list-decimal pl-5 space-y-1 text-gray-800">
              {d.howto.steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
            {d.howto.note ? <p className="text-sm text-gray-700 mt-2">{d.howto.note}</p> : null}
          </section>
        ) : null}

        {(d.tips && d.tips.length) || (d.pitfalls && d.pitfalls.length) ? (
          <section>
            <SectionTitle title="攻略のコツ・注意点" as="h2" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {d.tips && d.tips.length ? (
                <div className="rounded-lg border bg-white p-4">
                  <h3 className="font-semibold text-green-700 mb-2">コツ</h3>
                  <ul className="space-y-2 text-gray-800">
                    {d.tips.map((t, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-600" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {d.pitfalls && d.pitfalls.length ? (
                <div className="rounded-lg border bg-white p-4">
                  <h3 className="font-semibold text-red-700 mb-2">注意点</h3>
                  <ul className="space-y-2 text-gray-800">
                    {d.pitfalls.map((p, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
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

