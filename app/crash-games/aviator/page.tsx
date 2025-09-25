
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
    "NewContent/crash-games/aviator/rewritten.md"
  );
  const fileContents = fs.readFileSync(markdownFilePath, "utf8");
  const { data: frontmatter, content } = matter(fileContents);

  const relatedCrashGames = [
    { href: "/crash-games/aviator", name: "Aviator" },
    { href: "/crash-games/spaceman", name: "Spaceman" },
    { href: "/crash-games/bustabit", name: "Bustabit" },
  ];

  return (
    <SectionScaffold title={frontmatter.title || "Aviator"}>
      <HeaderBanner
        title="Aviator"
        subheading="クラッシュゲーム"
        description="Aviatorのルール、戦略、遊び方、おすすめのオンラインカジノなどを詳しく解説。"
        color="rose"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
        <div className="lg:col-span-9">
            <MarkdownArticleTemplate markdownContent={content} />
        </div>
        <aside className="lg:col-span-3 space-y-6">
          <SidebarSection title="クラッシュゲームの種類 🚀" seeMoreHref="/crash-games">
            <SidebarList items={relatedCrashGames} limit={relatedCrashGames.length} />
          </SidebarSection>
        </aside>
      </div>
    </SectionScaffold>
  );
}
