import { PaymentPageData } from "@/components/templates/PaymentTemplate";

const data: PaymentPageData = {
  title: "PayPal（ペイパル）でオンラインカジノ入出金【2025年最新版】",
  banner: {
    title: "PayPal入出金ガイド",
    subheading: "安全性・手数料・使い方・注意点",
    description:
      "世界的に普及する電子決済PayPalの使い方、安全性、手数料やKYC、利用可否の見分け方を日本向けに解説。",
    menu: [
      { href: "#howto", label: "使い方", icon: "🧭" },
      { href: "#fees", label: "手数料", icon: "💸" },
      { href: "#proscons", label: "メリデメ", icon: "⚖️" },
      { href: "#safety", label: "注意点", icon: "🛡️" },
      { href: "#comparison", label: "比較", icon: "📊" },
      { href: "#faq", label: "FAQ", icon: "❓" },
    ],
  },
  intro:
    "PayPalは安全性と利便性に優れた電子決済。日本円対応のカジノを選べば為替コストを抑えつつ、即時に近いスピードで入金・スムーズな出金が可能です。",
  howto: [
    "カジノの入金で『PayPal』を選択",
    "PayPalにログインし金額を確認して支払い確定",
    "残高反映（基本は即時）を確認",
    "出金時はカジノ→PayPal→銀行へ振替（即時〜数営業日）",
  ],
  feeTable: {
    title: "手数料の目安（例）",
    caption: "通貨換算や国際送金は別途コストが発生します。カジノ・PayPal側の最新条件を確認してください。",
    columns: ["項目", "目安"],
    rows: [
      ["登録・会員費", "無料"],
      ["国際送金（〜100万円）", "約499円/回"],
      ["通貨換算（送金者負担）", "約3.5%〜4%"],
      ["通貨換算（受取者負担）", "約2.5%"],
    ],
  },
  prosCons: {
    pros: [
      "グローバル対応・日本語サポートあり",
      "カード番号をカジノに直接伝えずに決済できる",
      "2FAや不正検知など高いセキュリティ",
    ],
    cons: [
      "為替手数料がやや高め",
      "対応カジノは増加中だが要確認",
    ],
  },
  safetyTips: [
    "KYCを完了して取引限度を引き上げ、出金遅延を回避",
    "日本円対応カジノを選び為替コストを抑える",
    "不審なログイン通知には即時対応・2FA必須",
  ],
  comparison: {
    items: [
      { title: "PayPal", description: "セキュリティと汎用性が高い定番。", meta: [ { label: "速度", value: "◎" }, { label: "手数料", value: "△" }, { label: "対応", value: "○" } ] },
      { title: "Vega Wallet", description: "国内人気のeマネー。ポイント還元などお得。", meta: [ { label: "速度", value: "◎" }, { label: "手数料", value: "◎" }, { label: "対応", value: "○" } ] },
      { title: "Payz", description: "多通貨対応のeウォレットで導入率高め。", meta: [ { label: "速度", value: "◎" }, { label: "手数料", value: "○" }, { label: "対応", value: "◎" } ] },
    ],
  },
  summary:
    "PayPalは安全・簡単・高速のバランスが良い決済。日本円対応サイトを中心に、KYCや2FAを整えつつ賢く利用しましょう。",
  faq: [],
  cta: { text: "他の入出金ガイドもチェックする", href: "/payment" },
} as const;

export default data;

