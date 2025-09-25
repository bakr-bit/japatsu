import AboutTemplate, { AboutPageData } from "@/components/templates/AboutTemplate";

const data: AboutPageData = {
  title: "運営情報",
  banner: {
    title: "JapaneseCasino について",
    subheading: "About Us",
    description: "編集方針・評価基準・チーム紹介。透明性の高い情報発信をめざしています。",
    menu: [
      { href: "/authors", label: "著者一覧" },
      { href: "/info", label: "インフォメーション" },
      { href: "/about/privacy-policy", label: "プライバシー" },
    ],
  },
  intro:
    "オンラインゲーミングの教育的リソースとして、客観的・データ重視のコンテンツを提供します。",
  sections: [
    {
      heading: "編集方針",
      bullets: ["客観性・再現性の重視", "法令順守・責任あるプレイ", "広告と編集の分離"],
    },
  ],
};

export default function Page() {
  return <AboutTemplate data={data} />;
}
