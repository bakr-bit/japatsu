import SitemapTemplate, { SitemapPageData } from "@/components/templates/SitemapTemplate";

const data: SitemapPageData = {
  title: "サイトマップ",
  banner: {
    title: "Sitemap",
    subheading: "全ページ一覧",
    description: "主要カテゴリへのショートカット。",
  },
  tree: [
    { nodes: [
      { href: "/games", label: "ゲーム" },
      { href: "/bonuses", label: "ボーナス" },
      { href: "/payment", label: "入出金" },
      { href: "/reviews", label: "レビュー" },
      { href: "/info", label: "インフォメーション" },
    ]},
  ],
};

export default function Page() {
  return <SitemapTemplate data={data} />;
}
