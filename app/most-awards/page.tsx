import MostAwardsTemplate, { MostAwardsPageData } from "@/components/templates/MostAwardsTemplate";

const data: MostAwardsPageData = {
  title: "受賞歴が豊富",
  banner: {
    title: "アワード受賞カジノ",
    subheading: "Awards",
    description: "第三者機関からの受賞歴・ノミネート歴を重視して選定。",
  },
  criteria: ["主要アワードの受賞/ノミネート", "継続的な評価", "プレイヤー満足度"],
};

export default function Page() {
  return <MostAwardsTemplate data={data} />;
}
