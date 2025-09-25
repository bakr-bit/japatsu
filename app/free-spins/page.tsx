import FreeSpinsTemplate, { FreeSpinsPageData } from "@/components/templates/FreeSpinsTemplate";

const data: FreeSpinsPageData = {
  title: "フリースピン",
  banner: {
    title: "フリースピン特集",
    subheading: "Free Spins",
    description: "有効期限・賭け条件・対象ゲームをチェックしてお得に利用。",
  },
  tips: ["賭け条件と上限勝利を確認", "対象スロットのRTP・波を把握", "有効期限に注意"],
};

export default function Page() {
  return <FreeSpinsTemplate data={data} />;
}
