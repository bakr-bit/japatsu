import VRCasinosTemplate, { VRCasinosPageData } from "@/components/templates/VRCasinosTemplate";

const data: VRCasinosPageData = {
  title: "VRカジノ",
  banner: {
    title: "VRで遊ぶ",
    subheading: "Virtual Reality",
    description: "対応デバイスと推奨環境、対応サイトを紹介。",
  },
  requirements: ["対応HMD(Oculus等)", "十分な帯域", "最新ブラウザ/アプリ"],
};

export default function Page() {
  return <VRCasinosTemplate data={data} />;
}
