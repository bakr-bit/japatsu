import SectionScaffold from "@/components/shell/SectionScaffold";
import HeaderBanner from "@/components/ui/HeaderBanner";
import SectionTitle from "@/components/ui/SectionTitle";

export type CCard = { name: string; href?: string; img?: string; rating?: number; tagline?: string; cta?: { text: string; href: string } };
export type CTable = { title?: string; caption?: string; columns: string[]; rows: string[][] };
export type CSection = { heading: string; paragraphs?: string[]; bullets?: string[]; table?: CTable };

export type CryptoPageData = {
  title: string;
  banner?: { title: string; subheading?: string; description?: string; menu?: Array<{ href: string; label: string; icon?: string }>; leftImageSrc?: string; rightImageSrc?: string };
  intro?: string;
  featured?: { title?: string; items: CCard[] };
  ranking?: CTable; // TOP10 ranking
  overview?: CSection; // what is crypto casino
  legality?: CSection;
  prosCons?: { pros: string[]; cons: string[] };
  compare?: CTable; // crypto vs fiat casinos
  gettingStarted?: { title?: string; steps: string[] };
  depositGuide?: { title?: string; steps: string[] };
  withdrawGuide?: { title?: string; steps: string[] };
  feeTips?: string[];
  coins?: CTable; // list of coins and traits
  exchangeTips?: string[];
  walletTips?: string[];
  important?: string[];
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

function Card({ it }: { it: CCard }) {
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

export default function CryptoTemplate({ data, canonicalPath }: { data: CryptoPageData; canonicalPath?: string }) {
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

        {d.ranking ? (
          <section>
            {d.ranking.title ? <SectionTitle title={d.ranking.title} as="h2" /> : null}
            <div className="overflow-x-auto rounded-lg border bg-white">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50 text-gray-600">
                  <tr>
                    {d.ranking.columns.map((c, i) => (
                      <th key={i} className="px-4 py-2 text-left font-semibold">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {d.ranking.rows.map((r, i) => (
                    <tr key={i}>
                      {r.map((cell, j) => (
                        <td key={j} className="px-4 py-2 text-gray-800">
                          {j === 1 ? <span className="font-semibold text-gray-900">{cell}</span> : cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {d.ranking.caption ? <p className="text-xs text-gray-600 mt-1">{d.ranking.caption}</p> : null}
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

        {d.legality ? (
          <section>
            <SectionTitle title={d.legality.heading} as="h2" />
            {d.legality.paragraphs?.map((p, i) => (
              <p key={i} className="text-gray-800 leading-relaxed">
                {p}
              </p>
            ))}
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
          </section>
        ) : null}

        {d.gettingStarted ? (
          <section>
            <SectionTitle title={d.gettingStarted.title || "始め方（初心者向け）"} as="h2" />
            <ol className="list-decimal pl-5 space-y-1 text-gray-800">
              {d.gettingStarted.steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
          </section>
        ) : null}

        {d.depositGuide ? (
          <section>
            <SectionTitle title={d.depositGuide.title || "仮想通貨の入金"} as="h2" />
            <ol className="list-decimal pl-5 space-y-1 text-gray-800">
              {d.depositGuide.steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
          </section>
        ) : null}

        {d.withdrawGuide ? (
          <section>
            <SectionTitle title={d.withdrawGuide.title || "仮想通貨の出金"} as="h2" />
            <ol className="list-decimal pl-5 space-y-1 text-gray-800">
              {d.withdrawGuide.steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
          </section>
        ) : null}

        {d.feeTips && d.feeTips.length ? (
          <section>
            <SectionTitle title="手数料を抑えるコツ" as="h2" />
            <ul className="space-y-2 text-gray-800">
              {d.feeTips.map((t, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {d.coins ? (
          <section>
            {d.coins.title ? <SectionTitle title={d.coins.title} as="h2" /> : null}
            <div className="overflow-x-auto rounded-lg border bg-white">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50 text-gray-600">
                  <tr>
                    {d.coins.columns.map((c, i) => (
                      <th key={i} className="px-4 py-2 text-left font-semibold">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {d.coins.rows.map((r, i) => (
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
            {d.coins.caption ? <p className="text-xs text-gray-600 mt-1">{d.coins.caption}</p> : null}
          </section>
        ) : null}

        {d.exchangeTips && d.exchangeTips.length ? (
          <section>
            <SectionTitle title="取引所の選び方" as="h2" />
            <ul className="space-y-2 text-gray-800">
              {d.exchangeTips.map((t, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {d.walletTips && d.walletTips.length ? (
          <section>
            <SectionTitle title="ウォレット選びのポイント" as="h2" />
            <ul className="space-y-2 text-gray-800">
              {d.walletTips.map((t, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {d.important && d.important.length ? (
          <section>
            <SectionTitle title="重要ポイント" as="h2" />
            <ul className="space-y-2 text-gray-800">
              {d.important.map((t, i) => (
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

