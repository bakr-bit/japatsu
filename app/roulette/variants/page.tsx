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
    "NewContent/roulette/variants/rewritten.md"
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
    <SectionScaffold title={frontmatter.title || "ルーレットの種類"}>
      <HeaderBanner
        title="ルーレットの種類"
        subheading="バリエーションごとの特徴、ルール、戦略を徹底解説"
        description="ルーレットの種類を理解することで、自分にぴったりのゲームを見つけ、より楽しく、より戦略的にプレイできるようになります。"
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