import PontoonTemplate, { PontoonPageData } from "@/components/templates/PontoonTemplate";

const data: PontoonPageData = {
  title: "ポントゥーン",
  banner: {
    title: "Pontoon Guide",
    subheading: "ブラックジャック亜種",
    description: "ルール差分と戦略のポイントを解説。",
  },
  howto: { steps: ["基本はBJに準拠", "ヒット/スタンド等の差分を把握"] },
};

export default function Page() {
  return <PontoonTemplate data={data} />;
}
