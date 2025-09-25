import InfoTemplate, { InfoPageData } from "@/components/templates/InfoTemplate";

const data: InfoPageData = {
  title: "インフォメーション",
  banner: {
    title: "Information Center",
    subheading: "信頼と安全のために",
    description: "編集方針・安全性・決済・ライセンス・上級知識への入口。",
  },
  intro: "基礎～上級まで体系的に学べるハブ。",
};

export default function Page() {
  return <InfoTemplate data={data} />;
}
