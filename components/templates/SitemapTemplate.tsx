import SectionScaffold from "@/components/shell/SectionScaffold";
import HeaderBanner from "@/components/ui/HeaderBanner";
import SectionTitle from "@/components/ui/SectionTitle";

export type SitemapNode = { href: string; label: string; children?: SitemapNode[] };

export type SitemapPageData = {
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
  tree: Array<{ title?: string; nodes: SitemapNode[] }>;
};

function Tree({ nodes }: { nodes: SitemapNode[] }) {
  return (
    <ul className="space-y-1">
      {nodes.map((n, i) => (
        <li key={i}>
          <a href={n.href} className="text-red-700 font-semibold hover:underline">
            {n.label}
          </a>
          {n.children && n.children.length ? (
            <div className="ml-4 mt-1 border-l pl-3">
              <Tree nodes={n.children} />
            </div>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export default function SitemapTemplate({ data }: { data: SitemapPageData }) {
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

        {d.tree && d.tree.length ? (
          <section>
            <SectionTitle title="サイトマップ" as="h2" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {d.tree.map((group, i) => (
                <div key={i} className="rounded-lg border bg-white p-4">
                  {group.title ? <div className="font-semibold text-gray-900 mb-2">{group.title}</div> : null}
                  <Tree nodes={group.nodes} />
                </div>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </SectionScaffold>
  );
}

