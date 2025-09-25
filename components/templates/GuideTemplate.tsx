import SectionScaffold from "@/components/shell/SectionScaffold";
import HeaderBanner from "@/components/ui/HeaderBanner";
import Markdown from "@/components/ui/Markdown";

export type GuideToplistItem = {
  name: string;
  href?: string;
  badges?: string[];
  short?: string;
  meta?: Record<string, string>;
};

export type GuideTable = {
  title?: string;
  caption?: string;
  columns: string[];
  rows: string[][];
};

export type GuideSection = {
  heading: string;
  body?: string; // markdown-compatible text
  tables?: GuideTable[];
  media?: Array<{ src: string; alt?: string }>;
};

export type GuidePageData = {
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
  toplist?: {
    title: string;
    items: GuideToplistItem[];
  };
  criteria?: string[];
  sections?: GuideSection[];
  prosCons?: { pros: string[]; cons: string[] };
  tips?: string[];
  faq?: Array<{ q: string; a: string }>;
  cta?: { text: string; href: string };
  author?: { name?: string };
  datePublished?: string;
  lastModified?: string;
};

function JsonLd({ json }: { json: any }) {
  const content = JSON.stringify(json);
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: content }} />;
}

function buildJsonLd(data: GuidePageData, canonicalPath?: string) {
  const site = process.env.NEXT_PUBLIC_SITE_ORIGIN || "";
  const url = site && canonicalPath ? `${site}${canonicalPath}` : canonicalPath || undefined;
  const objects: any[] = [];

  // WebPage + Article
  objects.push({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    name: data.title,
    url,
    description: data.banner?.description || data.intro,
    author: data.author?.name ? { '@type': 'Person', name: data.author.name } : undefined,
    datePublished: data.datePublished,
    dateModified: data.lastModified || data.datePublished,
    mainEntityOfPage: url,
  });

  // Breadcrumbs
  if (canonicalPath) {
    const parts = canonicalPath.split('/').filter(Boolean);
    const items = parts.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p,
      item: site ? `${site}/${parts.slice(0, i + 1).join('/')}` : undefined,
    }));
    if (items.length) {
      objects.push({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items });
    }
  }

  // ItemList for toplist
  if (data.toplist && data.toplist.items.length) {
    objects.push({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: data.toplist.title,
      itemListElement: data.toplist.items.map((it, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: it.name,
        url: it.href && site ? (it.href.startsWith('http') ? it.href : `${site}${it.href}`) : undefined,
      })),
    });
  }

  // FAQPage
  if (data.faq && data.faq.length) {
    objects.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: data.faq.map((qa) => ({
        '@type': 'Question',
        name: qa.q,
        acceptedAnswer: { '@type': 'Answer', text: qa.a },
      })),
    });
  }

  return objects;
}

export default function GuideTemplate({ data, canonicalPath }: { data: GuidePageData; canonicalPath?: string }) {
  const d = data;
  return (
    <SectionScaffold title={d.title}>
      {/* JSON-LD */}
      {buildJsonLd(d, canonicalPath).map((obj, i) => (
        <JsonLd key={i} json={obj} />
      ))}

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

        {d.toplist && d.toplist.items.length ? (
          <section id="toplist" className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">{d.toplist.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {d.toplist.items.map((it, i) => (
                <div key={`${it.name}-${i}`} className="rounded-lg border bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    {it.href ? (
                      <a href={it.href} className="text-gray-900 font-semibold hover:text-red-600">
                        {it.name}
                      </a>
                    ) : (
                      <div className="text-gray-900 font-semibold">{it.name}</div>
                    )}
                    <div className="flex flex-wrap gap-1">
                      {(it.badges || []).map((b, j) => (
                        <span key={j} className="text-xs font-semibold text-gray-700 bg-gray-100 border rounded-full px-2 py-0.5">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                  {it.short ? <p className="mt-1 text-sm text-gray-700">{it.short}</p> : null}
                  {it.meta ? (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {Object.entries(it.meta).map(([k, v]) => (
                        <span key={k} className="text-xs text-gray-700 bg-gray-50 border rounded px-2 py-0.5">
                          {k}: {v}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {d.criteria && d.criteria.length ? (
          <section id="criteria">
            <h2 className="text-xl font-bold text-gray-900 mb-2">選び方のポイント</h2>
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

        {d.sections && d.sections.length
          ? d.sections.map((s, idx) => (
              <section key={`${s.heading}-${idx}`} className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900">{s.heading}</h2>
                {s.body ? <Markdown content={s.body} className="prose prose-sm max-w-none text-gray-800" /> : null}
                {s.media && s.media.length ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {s.media.map((m, i) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img key={i} src={m.src} alt={m.alt || ''} className="rounded border" />
                    ))}
                  </div>
                ) : null}
                {s.tables && s.tables.length
                  ? s.tables.map((t, tIdx) => (
                      <div key={tIdx} className="space-y-2">
                        {t.title ? <h3 className="font-semibold text-gray-900">{t.title}</h3> : null}
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
                      </div>
                    ))
                  : null}
              </section>
            ))
          : null}

        {d.prosCons ? (
          <section id="proscons" className="mt-2">
            <h2 className="text-xl font-bold text-gray-900 mb-4">メリット・デメリット</h2>
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

        {d.tips && d.tips.length ? (
          <section id="tips">
            <h2 className="text-xl font-bold text-gray-900 mb-2">ヒント・注意点</h2>
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
          <section id="faq">
            <h2 className="text-xl font-bold text-gray-900 mb-3">よくある質問</h2>
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

