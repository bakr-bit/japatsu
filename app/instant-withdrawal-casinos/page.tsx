import InstantWithdrawalCasinosTemplate, { InstantWithdrawalCasinosPageData } from "@/components/templates/InstantWithdrawalCasinosTemplate";

const data: InstantWithdrawalCasinosPageData = {
  title: "即時出金カジノ",
  banner: {
    title: "高速出金の優良サイト",
    subheading: "Instant Payout",
    description: "出金スピード・承認プロセス・対応決済を評価。",
  },
  criteria: ["平均出金時間", "KYCの明確さ", "対応決済の種類", "サポート品質"],
};

export default function Page() {
  return <InstantWithdrawalCasinosTemplate data={data} />;
}
