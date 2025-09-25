
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
    "NewContent/game-shows/extra-chilli-epic-spins/rewritten.md"
  );
  const fileContents = fs.readFileSync(markdownFilePath, "utf8");
  const { data: frontmatter, content } = matter(fileContents);

  const relatedGameShows = [
    { href: "/game-shows/crazy-time", name: "Crazy Time" },
    { href: "/game-shows/monopoly-live", name: "Monopoly Live" },
    { href: "/game-shows/mega-ball", name: "Mega Ball" },
  ];

  return (
    <SectionScaffold title={frontmatter.title || "Extra Chilli Epic Spins"}>
      <HeaderBanner
        title="Extra Chilli Epic Spins"
        subheading="ゲームショー"
        description="Extra Chilli Epic Spinsのルール、戦略、遊び方、おすすめのオンラインカジノなどを詳しく解説。"
        color="rose"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
        <div className="lg:col-span-9">
            <MarkdownArticleTemplate markdownContent={content} />
        </div>
        <aside className="lg:col-span-3 space-y-6">
          <SidebarSection title="ゲームショーの種類 🎡" seeMoreHref="/game-shows">
            <SidebarList items={relatedGameShows} limit={relatedGameShows.length} />
          </SidebarSection>
        </aside>
      </div>
    </SectionScaffold>
  );
}
