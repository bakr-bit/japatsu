import MobileTemplate, { MobilePageData } from "@/components/templates/MobileTemplate";

const data: MobilePageData = {
  title: "モバイル",
  banner: {
    title: "スマホで遊ぶ",
    subheading: "Mobile Gaming",
    description: "動作の軽さ・UI・通知・入出金などモバイル適性で評価。",
  },
  criteria: ["軽快さと安定性", "UI/UX（片手操作）", "通知・2FA対応", "入出金の容易さ"],
};

export default function Page() {
  return <MobileTemplate data={data} />;
}
