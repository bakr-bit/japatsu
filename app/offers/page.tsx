import OffersTemplate, { OffersPageData } from "@/components/templates/OffersTemplate";

const data: OffersPageData = {
  title: "オファー",
  banner: {
    title: "特典・キャンペーン",
    subheading: "Offers",
    description: "入金不要ボーナスや期間限定プロモを厳選して紹介。",
  },
};

export default function Page() {
  return <OffersTemplate data={data} />;
}
