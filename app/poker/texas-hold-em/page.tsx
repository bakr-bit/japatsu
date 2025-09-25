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
    "NewContent/poker/texas-hold-em/rewritten.md"
  );
  const fileContents = fs.readFileSync(markdownFilePath, "utf8");
  const { data: frontmatter, content } = matter(fileContents);

  const relatedPokerPages = [
    { href: "/poker/texas-hold-em", name: "テキサスホールデム" },
    { href: "/poker/omaha-hold-em", name: "オマハホールデム" },
    { href: "/poker/rules", name: "ポーカーのルール" },
    { href: "/poker/strategy", name: "ポーカーの戦略" },
  ];

  return (
    <SectionScaffold title={frontmatter.title || "テキサスホールデムポーカー"}>
      <HeaderBanner
        title="テキサスホールデムポーカー徹底攻略ガイド"
        subheading="2024年最新版"
        description="テキサスホールデムのルールから戦略、おすすめのオンラインカジノまで、徹底的に解説。"
        color="rose"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
        <div className="lg:col-span-9">
            <MarkdownArticleTemplate markdownContent={content} />
        </div>
        <aside className="lg:col-span-3 space-y-6">
          <SidebarSection title="ポーカーの種類 ♠️" seeMoreHref="/poker">
            <SidebarList items={relatedPokerPages} limit={relatedPokerPages.length} />
          </SidebarSection>
        </aside>
      </div>
    </SectionScaffold>
  );
}