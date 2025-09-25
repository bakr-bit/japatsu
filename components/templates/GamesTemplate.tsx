import SectionScaffold from "@/components/shell/SectionScaffold";
import SectionTitle from "@/components/ui/SectionTitle";
import CategoryIntroductionSection from "@/components/ui/CategoryIntroductionSection";
import HeaderBanner from "@/components/ui/HeaderBanner";

export type GameHubLink = { href: string; label: string; description?: string };

export type GamesPageData = {
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
  hubs?: Array<{ title: string; links: GameHubLink[] }>; // e.g., Table Games, Slots, Live, Crash
  faq?: Array<{ q: string; a: string }>;
};

export default function GamesTemplate({ data }: { data: GamesPageData }) {
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

        <CategoryIntroductionSection />

        {d.hubs && d.hubs.length ? (
          <section>
            <SectionTitle title="ゲームカテゴリ早見表" as="h2" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {d.hubs.map((g, i) => (
                <div key={i} className="rounded-lg border bg-white p-4">
                  <div className="font-semibold text-gray-900 mb-2">{g.title}</div>
                  <ul className="space-y-1">
                    {g.links.map((l, j) => (
                      <li key={j}>
                        <a href={l.href} className="text-red-700 font-semibold hover:underline">
                          {l.label}
                        </a>
                        {l.description ? <span className="text-xs text-gray-600 ml-2">{l.description}</span> : null}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
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
