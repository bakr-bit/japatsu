import { PaymentPageData } from "@/components/templates/PaymentTemplate";

const data: PaymentPageData = {
  title: "STICPAY（スティックペイ）でオンラインカジノ入出金【完全ガイド】",
  banner: {
    title: "STICPAY入出金ガイド",
    subheading: "特徴・手数料・使い方・注意点",
    description: "多通貨対応のeウォレットSTICPAYの使い方、費用、KYCやサポートを解説。",
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
    "STICPAYは日本円対応の多通貨eウォレット。海外送金やカジノ入出金に強く、UnionPayカードや仮想通貨連携も可能です。",
  howto: [
    "公式で口座開設→SMS/メール認証",
    "本人確認書類をアップロードして限度解除",
    "カジノの入金で『STICPAY』を選択→金額→認証",
    "出金はカジノ→STICPAY→銀行/カード/ATMへ",
  ],
  feeTable: {
    title: "費用の目安",
    caption: "詳細はSTICPAYと各カジノの最新条件を確認してください。",
    columns: ["項目", "目安/備考"],
    rows: [
      ["入金手数料", "無料〜約1.3%（方法により変動）"],
      ["出金手数料", "変動（海外送金は数%発生のことあり）"],
      ["為替（FX）", "通貨換算時に実質コスト発生"],
      ["カード/ATM", "ATM:1%または最低4USD。維持費あり（UnionPay）"],
    ],
  },
  prosCons: {
    pros: [
      "多通貨・海外送金に強い",
      "UnionPayカードでATM引き出し可",
      "仮想通貨（BTC）にも対応",
    ],
    cons: [
      "為替・送金手数料に注意",
      "日本向けの限度や条件は変動しやすく要確認",
    ],
  },
  safetyTips: [
    "日本向けの限度・KYC要件はサポートに確認（account@sticpay.com／funds@sticpay.com）",
    "換算・送金手数料を踏まえ少額の頻繁な出金は避ける",
    "本人確認を早めに完了し審査遅延を防ぐ",
  ],
  comparison: {
    items: [
      { title: "STICPAY", description: "海外送金・カード・仮想通貨対応で多機能。", meta: [ { label: "利便性", value: "◎" }, { label: "手数料", value: "△" }, { label: "対応", value: "○" } ] },
      { title: "Payz", description: "日本円対応の定番eウォレット。", meta: [ { label: "利便性", value: "◎" }, { label: "手数料", value: "○" }, { label: "対応", value: "◎" } ] },
      { title: "銀行振込", description: "国内出金で安心。反映は営業日扱い。", meta: [ { label: "利便性", value: "○" }, { label: "手数料", value: "○" }, { label: "対応", value: "○" } ] },
    ],
  },
  summary:
    "STICPAYは多機能で柔軟なeウォレット。為替・手数料と日本向け条件の変動に注意し、KYCと費用設計を行えば快適に使えます。",
  faq: [],
  cta: { text: "他の入出金ガイドもチェックする", href: "/payment" },
};

export default data;

