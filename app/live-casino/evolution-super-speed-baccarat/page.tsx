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
    "NewContent/live-casino/evolution-super-speed-baccarat/rewritten.md"
  );
  const fileContents = fs.readFileSync(markdownFilePath, "utf8");
  const { data: frontmatter, content } = matter(fileContents);

  const relatedLiveCasinoPages = [
    { href: "/live-casino/live-baccarat", name: "ライブバカラ" },
    { href: "/live-casino/live-blackjack", name: "ライブブラックジャック" },
    { href: "/live-casino/live-roulette", name: "ライブルーレット" },
    { href: "/live-casino/live-poker", name: "ライブポーカー" },
  ];

  return (
    <SectionScaffold title={frontmatter.title || "Evolution Super Speed Baccarat"}>
      <HeaderBanner
        title="Evolution Super Speed Baccarat徹底攻略"
        subheading="ルール・遊び方・必勝法・おすすめカジノ"
        description="Evolution Gaming社が提供するSuper Speed Baccaratのルールや遊び方、必勝法、そしておすすめのオンラインカジノを紹介。"
        color="rose"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
        <div className="lg:col-span-9">
            <MarkdownArticleTemplate markdownContent={content} />
        </div>
        <aside className="lg:col-span-3 space-y-6">
          <SidebarSection title="ライブカジノの種類 🎲" seeMoreHref="/live-casino">
            <SidebarList items={relatedLiveCasinoPages} limit={relatedLiveCasinoPages.length} />
          </SidebarSection>
        </aside>
      </div>
    </SectionScaffold>
  );
}