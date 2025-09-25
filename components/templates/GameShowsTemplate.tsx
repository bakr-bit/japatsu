import SectionScaffold from "@/components/shell/SectionScaffold";
import HeaderBanner from "@/components/ui/HeaderBanner";
import SectionTitle from "@/components/ui/SectionTitle";

export type GCard = { name: string; href?: string; img?: string; rating?: number; tagline?: string; cta?: { text: string; href: string } };
export type GTable = { title?: string; caption?: string; columns: string[]; rows: string[][] };
export type GSection = { heading: string; paragraphs?: string[]; bullets?: string[]; table?: GTable };

export type GameShowsPageData = {
  title: string;
  banner?: { title: string; subheading?: string; description?: string; menu?: Array<{ href: string; label: string; icon?: string }>; leftImageSrc?: string; rightImageSrc?: string };
  intro?: string;
  featured?: { title?: string; items: GCard[] };
  topShows?: Array<{ name: string; description?: string; link?: string; media?: string }>; // Crazy Time, Lightning Baccarat, Mega Ball...
  legality?: GSection; // safety & legality
  overview?: GSection; // what are game shows
  types?: GSection; // categories (wheel, dice, tv-based, others)
  howto?: { title?: string; steps: string[] };
  mobile?: GSection;
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

function Card({ it }: { it: GCard }) {
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

export default function GameShowsTemplate({ data, canonicalPath }: { data: GameShowsPageData; canonicalPath?: string }) {
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

        {d.topShows && d.topShows.length ? (
          <section>
            <SectionTitle title="人気ゲームショー" as="h2" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {d.topShows.map((s, i) => (
                <div key={i} className="rounded-lg border bg-white p-4">
                  <div className="font-semibold text-gray-900">
                    {s.link ? (
                      <a href={s.link} className="hover:text-red-700">
                        {s.name}
                      </a>
                    ) : (
                      s.name
                    )}
                  </div>
                  {s.description ? <p className="text-sm text-gray-800 mt-1">{s.description}</p> : null}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {s.media ? <img src={s.media} alt={s.name} className="mt-2 rounded border" /> : null}
                </div>
              ))}
            </div>
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
            {d.legality.table ? (
              <div className="mt-3 overflow-x-auto rounded-lg border bg-white">
                <table className="min-w-full text-sm">
                  <thead className="bg-gray-50 text-gray-600">
                    <tr>
                      {d.legality.table.columns.map((c, i) => (
                        <th key={i} className="px-4 py-2 text-left font-semibold">
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {d.legality.table.rows.map((r, i) => (
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

        {d.types ? (
          <section>
            <SectionTitle title={d.types.heading} as="h2" />
            {d.types.paragraphs?.map((p, i) => (
              <p key={i} className="text-gray-800 leading-relaxed">
                {p}
              </p>
            ))}
            {d.types.bullets && d.types.bullets.length ? (
              <ul className="mt-2 space-y-2 text-gray-800">
                {d.types.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ) : null}

        {d.howto ? (
          <section>
            <SectionTitle title={d.howto.title || "参加方法"} as="h2" />
            <ol className="list-decimal pl-5 space-y-1 text-gray-800">
              {d.howto.steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
          </section>
        ) : null}

        {d.mobile ? (
          <section>
            <SectionTitle title={d.mobile.heading} as="h2" />
            {d.mobile.paragraphs?.map((p, i) => (
              <p key={i} className="text-gray-800 leading-relaxed">
                {p}
              </p>
            ))}
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

