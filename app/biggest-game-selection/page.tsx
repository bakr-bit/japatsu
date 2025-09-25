import BiggestGameSelectionTemplate, { BiggestGameSelectionPageData } from "@/components/templates/BiggestGameSelectionTemplate";

const data: BiggestGameSelectionPageData = {
  title: "最大級のゲーム数",
  banner: {
    title: "ゲーム数が豊富なカジノ特集",
    subheading: "Biggest Libraries",
    description: "スロットからライブまで取扱タイトルが充実している優良サイトを厳選。",
  },
  intro: "提供プロバイダー数や新作反映の速さ、ジャンルの幅を指標に厳選。",
  criteria: ["総タイトル数", "参加プロバイダー数", "ライブ/テーブル/クラッシュ等の幅", "新作の反映スピード"],
};

export default function Page() {
  return <BiggestGameSelectionTemplate data={data} />;
}
