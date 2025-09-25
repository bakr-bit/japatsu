import Link from "next/link";
import SectionScaffold from "@/components/shell/SectionScaffold";
import HeaderBanner from "@/components/ui/HeaderBanner";
import SectionTitle from "@/components/ui/SectionTitle";

export type ProviderCard = {
  name: string;
  logo?: string;
  href?: string;
  founded?: string;
  hq?: string;
  licenses?: string[];
  gameTypes?: string[]; // Slots, Live, Table, etc.
  topGames?: Array<{ name: string; href?: string }>;
  tagline?: string;
};

export type ProvidersTable = {
  title?: string;
  caption?: string;
  columns: string[];
  rows: string[][];
};

export type ProvidersSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: ProvidersTable;
};

export type ProvidersPageData = {
  title: string;
  banner?: {
    title: string;
    subheading?: string;
    description?: string;
    menu?: Array<{ href: string; label: string; icon?: string }>;
    leftImageSrc?: string;
    rightImageSrc?: string;
    avatarSrc?: string;
    avatarAlt?: string;
  };
  intro?: string;
  authorCommentary?: {
    author: string;
    commentary: string;
    avatarSrc?: string;
    role?: string;
    authorHref?: string;
  };
  featured?: { title?: string; items: ProviderCard[] };
  sections?: ProvidersSection[];
  comparison?: ProvidersTable;
  faq?: Array<{ q: string; a: string }>;
  cta?: { text: string; href: string };
};

function Provider({ it }: { it: ProviderCard }) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {it.logo ? <img src={it.logo} alt={it.name} className="h-12 w-12 rounded object-cover" /> : <div className="h-12 w-12 rounded bg-gray-200" aria-hidden="true" />}
        <div className="min-w-0">
          <a href={it.href || '#'} className="font-semibold text-gray-900 hover:text-red-700 truncate">
            {it.name}
          </a>
          {it.tagline ? <div className="text-sm text-gray-700 line-clamp-2">{it.tagline}</div> : null}
        </div>
      </div>
      <div className="mt-3 text-xs text-gray-700 flex flex-wrap gap-2">
        {it.founded ? <span className="bg-gray-50 border rounded px-2 py-0.5">設立: {it.founded}</span> : null}
        {it.hq ? <span className="bg-gray-50 border rounded px-2 py-0.5">本社: {it.hq}</span> : null}
        {it.licenses && it.licenses.length ? (
          <span className="bg-gray-50 border rounded px-2 py-0.5">ライセンス: {it.licenses.join(', ')}</span>
        ) : null}
        {it.gameTypes && it.gameTypes.length ? (
          <span className="bg-gray-50 border rounded px-2 py-0.5">提供: {it.gameTypes.join(' / ')}</span>
        ) : null}
      </div>
      {it.topGames && it.topGames.length ? (
        <div className="mt-2">
          <div className="text-xs font-semibold text-gray-600">代表作</div>
          <ul className="text-sm text-gray-800 mt-1 grid grid-cols-1 sm:grid-cols-2 gap-1">
            {it.topGames.map((g, i) => (
              <li key={i}>
                {g.href ? (
                  <a href={g.href} className="text-red-700 hover:underline">
                    {g.name}
                  </a>
                ) : (
                  <span>{g.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default function ProvidersTemplate({ data, canonicalPath }: { data: ProvidersPageData; canonicalPath?: string }) {
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
            avatarSrc={d.banner.avatarSrc}
            avatarAlt={d.banner.avatarAlt ?? d.banner.title}
            leftImageSrc={d.banner.leftImageSrc}
            rightImageSrc={d.banner.rightImageSrc}
            cta={
              d.cta
                ? {
                    href: d.cta.href,
                    label: d.cta.text,
                  }
                : undefined
            }
          />
        ) : null}

        {d.intro ? <p className="text-lg text-gray-800 leading-relaxed">{d.intro}</p> : null}

        {d.authorCommentary ? (
          <div className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              {d.authorCommentary.avatarSrc ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={d.authorCommentary.avatarSrc}
                  alt={d.authorCommentary.author}
                  className="h-14 w-14 rounded-full border border-rose-100 object-cover shadow"
                />
              ) : (
                <div className="h-14 w-14 rounded-full border border-rose-100 bg-rose-50 text-2xl font-bold text-rose-500 flex items-center justify-center">
                  {d.authorCommentary.author.slice(0, 1).toUpperCase()}
                </div>
              )}
              <div className="space-y-2 text-gray-800">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-rose-500">Author Commentary</p>
                  <p className="text-lg font-bold text-gray-900">
                    {d.authorCommentary.authorHref ? (
                      <Link href={d.authorCommentary.authorHref} className="hover:text-rose-600">
                        {d.authorCommentary.author}
                      </Link>
                    ) : (
                      d.authorCommentary.author
                    )}
                    {d.authorCommentary.role ? (
                      <span className="ml-2 text-sm font-medium text-gray-500">{d.authorCommentary.role}</span>
                    ) : null}
                  </p>
                </div>
                <p className="leading-relaxed italic">{d.authorCommentary.commentary}</p>
              </div>
            </div>
          </div>
        ) : null}

        {d.featured && d.featured.items && d.featured.items.length ? (
          <section>
            {d.featured.title ? <SectionTitle title={d.featured.title} as="h2" /> : null}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {d.featured.items.map((it, i) => (
                <Provider key={`${it.name}-${i}`} it={it} />
              ))}
            </div>
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
