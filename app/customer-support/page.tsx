import CustomerSupportTemplate, { CustomerSupportPageData } from "@/components/templates/CustomerSupportTemplate";

const data: CustomerSupportPageData = {
  title: "カスタマーサポート",
  banner: {
    title: "サポート比較と活用術",
    subheading: "Support",
    description: "ライブチャット・メール・対応時間・日本語可否などを比較。",
  },
  channels: ["ライブチャット（推奨）", "メール／問い合わせフォーム", "一部サイトで電話対応", "日本語対応・稼働時間を確認"],
  tips: ["アカウント情報を先に共有", "スクショ・時刻を残す", "英語対応の可否も把握"],
};

export default function Page() {
  return <CustomerSupportTemplate data={data} />;
}
