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
    "NewContent/live-casino/live-poker/rewritten.md"
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
    <SectionScaffold title={frontmatter.title || "ライブポーカー"}>
      <HeaderBanner
        title="ライブポーカーで白熱の勝負！"
        subheading="おすすめオンラインカジノ徹底比較"
        description="ライブポーカーの選び方から遊び方、よくある質問まで網羅的に解説。"
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