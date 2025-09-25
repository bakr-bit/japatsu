import SectionScaffold from "@/components/shell/SectionScaffold";
import HeaderBanner from "@/components/ui/HeaderBanner";
import SectionTitle from "@/components/ui/SectionTitle";
import AuthorBadge from "@/components/ui/AuthorBadge";

export type Author = {
  name: string;
  role?: string;
  avatarSrc?: string;
  bio?: string;
  links?: Array<{ href: string; label: string }>;
};

export type AuthorsPageData = {
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
  authors: Author[];
  faq?: Array<{ q: string; a: string }>;
};

export default function AuthorsTemplate({ data }: { data: AuthorsPageData }) {
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

        <section>
          <SectionTitle title="著者・編集チーム" as="h2" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {d.authors.map((a, i) => (
              <div key={i} className="rounded-xl border bg-white p-4 shadow-sm space-y-2">
                <AuthorBadge name={a.name} role={a.role} avatarSrc={a.avatarSrc} />
                {a.bio ? <p className="text-sm text-gray-800 leading-relaxed">{a.bio}</p> : null}
                {a.links && a.links.length ? (
                  <div className="flex flex-wrap gap-2">
                    {a.links.map((l, j) => (
                      <a key={j} href={l.href} className="text-xs font-semibold text-red-700 hover:underline">
                        {l.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>

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

