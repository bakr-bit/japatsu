import { PaymentPageData } from "@/components/templates/PaymentTemplate";

const data: PaymentPageData = {
  title: "ポイント66（Point66）【サービス終了のお知らせ】",
  banner: {
    title: "Point66の現状",
    subheading: "終了済み・代替手段のご案内",
    description:
      "Point66は2024年時点でサービス終了。現在は利用できません。代替の電子マネーや銀行送金、仮想通貨をご検討ください。",
    menu: [
      { href: "#howto", label: "現状", icon: "ℹ️" },
      { href: "#comparison", label: "代替比較", icon: "📊" },
      { href: "#faq", label: "FAQ", icon: "❓" },
    ],
  },
  intro:
    "ポイント66（Point66）は過去に日本人向けに利用された決済手段でしたが、現在は終了。今後はPayzやVega Wallet、銀行振込や仮想通貨など現行の手段に切り替えましょう。",
  howto: [
    "Point66は新規・既存ともに利用不可",
    "代替として電子マネー（Vega Wallet、Payz等）や銀行送金、仮想通貨を利用",
  ],
  comparison: {
    items: [
      { title: "Vega Wallet", description: "国内人気のeマネー。ポイント還元や換金ルールが明確。" },
      { title: "Payz", description: "多通貨対応のeウォレットで導入率が高い。" },
      { title: "銀行送金", description: "国内口座で安心。反映は営業日扱い。" },
    ],
  },
  summary:
    "Point66は終了済み。現在の主流は電子マネー・銀行・仮想通貨です。対応サイトの最新決済案内を確認して切り替えを。",
  faq: [],
  cta: { text: "入出金ガイド一覧を見る", href: "/payment" },
} as const;

export default data;

