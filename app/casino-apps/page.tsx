import CasinoAppsTemplate, { CasinoAppsPageData } from "@/components/templates/CasinoAppsTemplate";

const data: CasinoAppsPageData = {
  title: "カジノアプリ",
  banner: {
    title: "おすすめカジノアプリ",
    subheading: "Casino Apps",
    description: "操作性・安定性・入出金のしやすさでアプリを評価。",
  },
  criteria: ["動作の軽さ・安定性", "UI/UX・検索性", "通知・セキュリティ", "入出金のしやすさ"],
};

export default function Page() {
  return <CasinoAppsTemplate data={data} />;
}
