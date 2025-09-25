import SectionScaffold from "@/components/shell/SectionScaffold";
import SectionTitle from "@/components/ui/SectionTitle";
import SidebarSection from "@/components/ui/SidebarSection";
import HeaderBanner from "@/components/ui/HeaderBanner";
import SidebarList from "@/components/ui/SidebarList";
import QaBlock, { QaMessage } from "@/components/ui/QaBlock";

export type PaymentComparisonMeta = { label: string; value: string };
export type PaymentComparisonItem = {
  title: string;
  description: string;
  meta?: PaymentComparisonMeta[];
};

export type ContentBlock =
  | { type: "heading"; level: 2 | 3 | 4; content: string; id?: string }
  | { type: "paragraph"; content: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | {
      type: "table";
      id?: string;
      title?: string;
      caption?: string;
      columns: string[];
      rows: string[][];
    }
  | { type: "prosCons"; pros: string[]; cons: string[] }
  | { type: "alert"; severity: "info" | "warning" | "tip"; title?: string; content: string }
  | {
      type: "media";
      src: string;
      alt?: string;
      caption?: string;
    };

export type PaymentPageData = {
  title: string;
  banner?: {
    title: string;
    subheading?: string;
    description?: string;
    menu?: Array<{ href: string; label: string; icon?: string }>;
    leftImageSrc?: string;
    rightImageSrc?: string;
    color?:
      | "red"
      | "rose"
      | "blue"
      | "sky"
      | "indigo"
      | "violet"
      | "purple"
      | "emerald"
      | "green"
      | "teal"
      | "cyan"
      | "amber"
      | "orange"
      | "slate"
      | "gray";
  };
  // In-body grid of all payment links
  allPayments?: Array<{ href: string; name: string; img?: string }>;
  // Flexible content blocks representing the main article body
  contentBlocks?: ContentBlock[];
  comparison?: { title?: string; items: PaymentComparisonItem[] };
  // Optional override for sidebar payment links
  relatedPayments?: Array<{ href: string; name: string; img?: string }>;
  // Optional Q&A conversation section before FAQ
  qaConversations?: QaMessage[];
  faq?: Array<{ q: string; a: string }>;
  cta?: { text: string; href: string };
};

function JsonLd({ json }: { json: any }) {
  const content = JSON.stringify(json);
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: content }} />;
}

function buildJsonLd(data: PaymentPageData, canonicalPath?: string) {
  const site = process.env.NEXT_PUBLIC_SITE_ORIGIN || "";
  const url = site && canonicalPath ? `${site}${canonicalPath}` : canonicalPath || undefined;
  const firstParagraph = data.contentBlocks?.find(
    (block): block is Extract<ContentBlock, { type: "paragraph" }> => block.type === "paragraph",
  );
  const objects: any[] = [];
  // WebPage
  objects.push({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: data.title,
    url,
    description: data.banner?.description || firstParagraph?.content,
  });
  // Breadcrumbs if path provided
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

function ContentBlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "heading": {
      const Tag = `h${block.level}` as keyof JSX.IntrinsicElements;
      return <SectionTitle id={block.id} title={block.content} as={Tag} />;
    }
    case "paragraph":
      return <p className="text-gray-800 leading-relaxed">{block.content}</p>;
    case "list": {
      const ListTag = (block.ordered ? "ol" : "ul") as "ol" | "ul";
      const listItemStyle = block.ordered ? "list-decimal" : "list-disc";
      return (
        <ListTag className={`${listItemStyle} pl-5 space-y-1 text-gray-800`}>
          {block.items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ListTag>
      );
    }
    case "table":
      return (
        <section id={block.id || undefined}>
          {block.title ? <SectionTitle title={block.title} as="h3" /> : null}
          <div className="overflow-x-auto rounded-lg border bg-white shadow-sm">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  {block.columns.map((c, i) => (
                    <th key={i} className="px-4 py-2 text-left font-semibold">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y">
                {block.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-4 py-2 text-gray-800">
                        {cellIndex === 0 ? (
                          <span className="font-semibold text-gray-900">{cell}</span>
                        ) : (
                          cell
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption ? <p className="mt-2 text-xs text-gray-600">{block.caption}</p> : null}
        </section>
      );
    case "prosCons":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border bg-white p-4">
            <h3 className="font-semibold text-green-700 mb-2">メリット</h3>
            <ul className="space-y-2 text-gray-800">
              {block.pros.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border bg-white p-4">
            <h3 className="font-semibold text-red-700 mb-2">デメリット</h3>
            <ul className="space-y-2 text-gray-800">
              {block.cons.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    case "alert": {
      const colors = {
        info: "bg-sky-50 border-sky-200 text-sky-800",
        warning: "bg-amber-50 border-amber-200 text-amber-800",
        tip: "bg-emerald-50 border-emerald-200 text-emerald-800",
      } as const;
      return (
        <div className={`rounded-lg border p-4 ${colors[block.severity]}`}>
          {block.title ? <h4 className="font-bold mb-1">{block.title}</h4> : null}
          <p className="text-gray-800 leading-relaxed">{block.content}</p>
        </div>
      );
    }
    case "media":
      return (
        <figure className="rounded-xl border bg-white p-2 shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={block.src} alt={block.alt || ""} className="w-full h-auto rounded-lg" />
          {block.caption ? (
            <figcaption className="mt-2 text-xs text-gray-600 text-center">{block.caption}</figcaption>
          ) : null}
        </figure>
      );
    default:
      return null;
  }
}

export default function PaymentTemplate({ data, canonicalPath }: { data: PaymentPageData; canonicalPath?: string }) {
  const d = data;
  const slug = canonicalPath ? canonicalPath.split('/').filter(Boolean).pop() : undefined;
  const colorBySlug: Record<string, NonNullable<NonNullable<PaymentPageData["banner"]>["color"]>> = {
    visa: "blue",
    mastercard: "amber",
    jcb: "indigo",
    "bank-transfer": "gray",
    payz: "emerald",
    "vega-wallet": "violet",
    muchbetter: "orange",
    bitcoin: "amber",
    ethereum: "violet",
    usdt: "green",
    paypal: "blue",
    paypay: "red",
    "tiger-pay": "orange",
    sticpay: "orange",
    venuspoint: "violet",
    sumopay: "indigo",
    "slash-payment": "slate",
    ezeebill: "teal",
    bitflyer: "blue",
    coincheck: "cyan",
    matchpay: "cyan",
    "j-pay": "blue",
    payment: "gray",
    crypto: "slate",
  };
  const bannerColor = d.banner?.color || (slug ? colorBySlug[slug] : undefined) || "rose";
  const defaultRelated = [
    { href: "/payment/visa", name: "VISA" },
    { href: "/payment/mastercard", name: "Mastercard" },
    { href: "/payment/jcb", name: "JCB" },
    { href: "/payment/bank-transfer", name: "銀行振込" },
    { href: "/payment/payz", name: "Payz" },
    { href: "/payment/vega-wallet", name: "Vega Wallet" },
    { href: "/payment/muchbetter", name: "MuchBetter" },
    { href: "/payment/bitcoin", name: "Bitcoin" },
    { href: "/payment/ethereum", name: "Ethereum" },
    { href: "/payment/usdt", name: "USDT" },
    { href: "/payment/paypal", name: "PayPal" },
  ];
  const sidebarPayments = d.relatedPayments && d.relatedPayments.length ? d.relatedPayments : defaultRelated;
  return (
    <SectionScaffold title={d.title}>
      {/* JSON-LD */}
      {buildJsonLd(d, canonicalPath).map((obj, i) => (
        <JsonLd key={i} json={obj} />
      ))}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-9 space-y-10">
          {d.banner ? (
            <HeaderBanner
              title={d.banner.title}
              subheading={d.banner.subheading}
              description={d.banner.description}
              menuItems={d.banner.menu}
              leftImageSrc={d.banner.leftImageSrc}
              rightImageSrc={d.banner.rightImageSrc}
              color={bannerColor}
            />
          ) : null}

          {d.allPayments && d.allPayments.length > 0 ? (
            <section id="all-payments">
              <SectionTitle title="全ての入出金方法" as="h2" />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {d.allPayments.map((it, i) => (
                  <a
                    key={`${it.href}-${i}`}
                    href={it.href}
                    className="group rounded-lg border bg-white p-3 flex items-center gap-3 hover:border-red-300 hover:bg-rose-50 transition-colors"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    {it.img ? (
                      <img src={it.img} alt={it.name} className="h-8 w-8 rounded object-cover" />
                    ) : (
                      <div className="h-8 w-8 rounded bg-gray-200" aria-hidden="true" />
                    )}
                    <span className="text-sm font-semibold text-gray-800 group-hover:text-red-700">{it.name}</span>
                  </a>
                ))}
              </div>
            </section>
          ) : null}

          {d.contentBlocks && d.contentBlocks.length ? (
            <div className="space-y-6">
              {d.contentBlocks.map((block, i) => (
                <ContentBlockRenderer key={i} block={block} />
              ))}
            </div>
          ) : null}

          {d.comparison ? (
            <section id="comparison">
              <SectionTitle title={d.comparison.title ?? "決済手段の比較"} as="h2" />
              <div className={`grid grid-cols-1 ${d.comparison.items.length === 4 ? "md:grid-cols-4" : "md:grid-cols-3"} gap-6`}>
                {d.comparison.items.map((it, i) => (
                  <div key={i} className="rounded-lg border bg-white p-4 shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-1">{it.title}</h3>
                    <p className="text-gray-800 text-sm leading-relaxed">{it.description}</p>
                    {it.meta && it.meta.length > 0 ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {it.meta.map((m, j) => (
                          <span
                            key={j}
                            className="text-xs font-semibold text-gray-700 bg-gray-100 border rounded-full px-2 py-0.5"
                          >
                            {m.label}: {m.value}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {d.qaConversations && d.qaConversations.length > 0 ? (
            <section id="qa">
              <SectionTitle title="Q&A" as="h2" />
              <div className="rounded-xl border bg-white p-5 shadow-sm">
                <QaBlock conversations={d.qaConversations} />
              </div>
            </section>
          ) : null}

          {d.faq && d.faq.length > 0 ? (
            <section id="faq">
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
        {/* Sidebar */}
        <aside className="lg:col-span-3 space-y-6">
          <SidebarSection title="入出金方法 💳" seeMoreHref="/payment">
            <SidebarList items={sidebarPayments} limit={sidebarPayments.length} />
          </SidebarSection>
        </aside>
      </div>
    </SectionScaffold>
  );
}
