import fs from "fs";
import path from "path";
import matter from "gray-matter";
import SectionScaffold from "@/components/shell/SectionScaffold";
import HeaderBanner from "@/components/ui/HeaderBanner";
import SidebarSection from "@/components/ui/SidebarSection";
import SidebarList from "@/components/ui/SidebarList";
import MarkdownArticleTemplate from "@/components/templates/MarkdownArticleTemplate";

export default function Page() {
  const markdownFilePath = path.join(
    process.cwd(),
    "NewContent/roulette/american/rewritten.md"
  );
  const fileContents = fs.readFileSync(markdownFilePath, "utf8");
  const { data: frontmatter, content } = matter(fileContents);

  const relatedRoulettePages = [
    { href: "/roulette/american-roulette", name: "アメリカンルーレット" },
    { href: "/roulette/european-roulette", name: "ヨーロピアンルーレット" },
    { href: "/roulette/french-roulette", name: "フレンチルーレット" },
    { href: "/roulette/rules", name: "ルーレットのルール" },
    { href: "/roulette/strategy", name: "ルーレットの戦略" },
  ];

  return (
    <SectionScaffold title={frontmatter.title || "アメリカンルーレット"}>
      <HeaderBanner
        title="アメリカンルーレット徹底攻略ガイド"
        subheading="2024年最新版"
        description="アメリカンルーレットのルール、戦略、遊び方、おすすめのオンラインカジノなどを詳しく解説。"
        color="rose"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
        <div className="lg:col-span-9">
            <MarkdownArticleTemplate markdownContent={content} />
        </div>
        <aside className="lg:col-span-3 space-y-6">
          <SidebarSection title="ルーレットの種類 🎡" seeMoreHref="/roulette">
            <SidebarList items={relatedRoulettePages} limit={relatedRoulettePages.length} />
          </SidebarSection>
        </aside>
      </div>
    </SectionScaffold>
  );
}