import NewCasinosTemplate, { NewCasinosPageData } from "@/components/templates/NewCasinosTemplate";

const data: NewCasinosPageData = {
  title: "新しいオンラインカジノ",
  banner: {
    title: "新規サイト特集",
    subheading: "New Casinos",
    description: "新登場のサイトを安全性・決済・UXの観点からレビュー。",
  },
  criteria: ["ライセンスと事業透明性", "決済の充実度", "サイトの安定性とUI", "サポート品質"],
};

export default function Page() {
  return <NewCasinosTemplate data={data} />;
}
