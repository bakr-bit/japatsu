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
    "NewContent/payment/bitflyer/rewritten.md"
  );
  const fileContents = fs.readFileSync(markdownFilePath, "utf8");
  const { data: frontmatter, content } = matter(fileContents);

  const relatedPayments = [
    { href: "/payment/visa", name: "VISA" },
    { href: "/payment/mastercard", name: "Mastercard" },
    { href: "/payment/jcb", name: "JCB" },
    { href: "/payment/bank-transfer", name: "銀行振込" },
    { href: "/payment/payz", name: "Payz" },
  ];

  return (
    <SectionScaffold title={frontmatter.title || "Bitflyer"}>
      <HeaderBanner
        title="Bitflyer入金ガイド"
        subheading="安全性・手数料・使い方をわかりやすく"
        description="Bitflyerを使ったオンラインカジノ入金を、手数料・注意点・比較までまとめて解説。KYCの流れも把握して安心。"
        color="blue"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
        <div className="lg:col-span-9">
            <MarkdownArticleTemplate markdownContent={content} />
        </div>
        <aside className="lg:col-span-3 space-y-6">
          <SidebarSection title="入出金方法 💳" seeMoreHref="/payment">
            <SidebarList items={relatedPayments} limit={relatedPayments.length} />
          </SidebarSection>
        </aside>
      </div>
    </SectionScaffold>
  );
}