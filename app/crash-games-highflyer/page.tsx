import CrashGamesHighflyerTemplate, { CrashGamesHighflyerPageData } from "@/components/templates/CrashGamesHighflyerTemplate";

const data: CrashGamesHighflyerPageData = {
  title: "ハイフライヤー向けクラッシュ",
  banner: {
    title: "高倍率狙いのコツ",
    subheading: "High Multipliers",
    description: "超高倍率狙いのための運用ポイントとおすすめゲーム。",
  },
  strategy: ["資金配分を固定化", "損切りと利確を明確に", "分割キャッシュアウトを活用"],
};

export default function Page() {
  return <CrashGamesHighflyerTemplate data={data} />;
}
