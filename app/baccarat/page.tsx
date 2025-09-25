import BaccaratTemplate, { BaccaratPageData } from "@/components/templates/BaccaratTemplate";

const data: BaccaratPageData = {
  title: "バカラ",
  banner: {
    title: "バカラ完全ガイド",
    subheading: "Baccarat Guide",
    description: "基本ルール・賭け方・サイドベット・戦略をやさしく解説。",
    menu: [
      { href: "/baccarat/rules", label: "ルール" },
      { href: "/baccarat/strategy", label: "戦略" },
      { href: "/baccarat/variants", label: "バリエーション" },
      { href: "/baccarat/squeeze", label: "スクイーズ" },
    ],
  },
  intro:
    "プレイヤーかバンカーの勝ちに賭けるシンプルなテーブルゲーム。控除率が低くビギナーにも人気です。",
  howto: {
    steps: [
      "資金を用意してテーブル（もしくはオンライン）に着席",
      "プレイヤー／バンカー／タイのいずれかにベット",
      "2枚配られ、ルールに従って必要なら3枚目が配られる",
      "結果に応じて配当（バンカー勝利は5%コミッション）",
    ],
  },
  cta: { text: "まずはルールを確認", href: "/baccarat/rules" },
};

export default function Page() {
  return <BaccaratTemplate data={data} />;
}
