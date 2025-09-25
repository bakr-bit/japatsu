import DiceTemplate, { DicePageData } from "@/components/templates/DiceTemplate";

const data: DicePageData = {
  title: "ダイスゲーム",
  banner: {
    title: "ダイスゲーム入門",
    subheading: "Dice",
    description: "クラップスの他、手軽に遊べるダイス系も紹介。",
  },
  intro: "確率と配当の仕組みを理解し、期待値の高い選択を。",
};

export default function Page() {
  return <DiceTemplate data={data} />;
}
