import SectionScaffold from "@/components/shell/SectionScaffold";
import HeaderBanner from "@/components/ui/HeaderBanner";
import SectionTitle from "@/components/ui/SectionTitle";
import ArticleCard, { Article } from "@/components/ui/ArticleCard";

export type NewsPageData = {
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
  featured?: { title?: string; items: Article[] };
  latest?: { title?: string; items: Article[] };
};

export default function NewsTemplate({ data }: { data: NewsPageData }) {
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {d.featured.items.map((a, i) => (
                <ArticleCard key={`${a.href}-${i}`} article={a} />
              ))}
            </div>
          </section>
        ) : null}

        {d.latest && d.latest.items && d.latest.items.length ? (
          <section>
            {d.latest.title ? <SectionTitle title={d.latest.title} as="h2" /> : null}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {d.latest.items.map((a, i) => (
                <ArticleCard key={`${a.href}-${i}`} article={a} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </SectionScaffold>
  );
}

