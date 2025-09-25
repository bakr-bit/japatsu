import SectionScaffold from "@/components/shell/SectionScaffold";
import HeaderBanner from "@/components/ui/HeaderBanner";
import SectionTitle from "@/components/ui/SectionTitle";
import PromoBlockWithExpiry, { Promo } from "@/components/ui/PromoBlockWithExpiry";
import BonusCard, { Bonus } from "@/components/ui/BonusCard";

export type FreeSpinsPageData = {
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
  promos?: Promo[];
  offers?: Bonus[]; // card-style list
  tips?: string[];
  faq?: Array<{ q: string; a: string }>;
};

export default function FreeSpinsTemplate({ data }: { data: FreeSpinsPageData }) {
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

        {d.promos && d.promos.length ? <PromoBlockWithExpiry promos={d.promos} /> : null}

        {d.offers && d.offers.length ? (
          <section>
            <SectionTitle title="おすすめフリースピン特典" as="h2" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {d.offers.map((b, i) => (
                <BonusCard key={i} bonus={b} />
              ))}
            </div>
          </section>
        ) : null}

        {d.tips && d.tips.length ? (
          <section>
            <SectionTitle title="注意点・賢い使い方" as="h2" />
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

