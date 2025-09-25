import SectionScaffold from "@/components/shell/SectionScaffold";
import HeaderBanner from "@/components/ui/HeaderBanner";
import SectionTitle from "@/components/ui/SectionTitle";

export type HighflyerPick = { name: string; href?: string; reason?: string };

export type CrashGamesHighflyerPageData = {
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
  picks?: { title?: string; items: HighflyerPick[] };
  strategy?: string[]; // risk management tips for high multipliers
  faq?: Array<{ q: string; a: string }>;
  cta?: { text: string; href: string };
};

export default function CrashGamesHighflyerTemplate({ data }: { data: CrashGamesHighflyerPageData }) {
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

        {d.picks && d.picks.items && d.picks.items.length ? (
          <section>
            {d.picks.title ? <SectionTitle title={d.picks.title} as="h2" /> : null}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-900">
              {d.picks.items.map((it, i) => (
                <li key={i} className="rounded-lg border bg-white p-4">
                  <div className="font-semibold">
                    {it.href ? (
                      <a href={it.href} className="hover:text-red-700">
                        {it.name}
                      </a>
                    ) : (
                      it.name
                    )}
                  </div>
                  {it.reason ? <p className="text-sm text-gray-800 mt-1">{it.reason}</p> : null}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {d.strategy && d.strategy.length ? (
          <section>
            <SectionTitle title="ハイリスク運用のポイント" as="h2" />
            <ul className="space-y-2 text-gray-800">
              {d.strategy.map((s, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />
                  <span>{s}</span>
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

