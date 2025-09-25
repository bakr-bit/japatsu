import { PaymentPageData } from "@/components/templates/PaymentTemplate";

const data: PaymentPageData = {
  title: "Slash Payment（仮想通貨）で入金【ガイド】",
  banner: {
    title: "Slash Payment入金ガイド",
    subheading: "対応・手数料・注意点",
    description: "1,400+トークン対応の暗号資産入金手段。KYC不要の特性とリスクを整理。",
    menu: [
      { href: "#howto", label: "使い方", icon: "🧭" },
      { href: "#fees", label: "手数料", icon: "💸" },
      { href: "#proscons", label: "メリデメ", icon: "⚖️" },
      { href: "#safety", label: "注意点", icon: "🛡️" },
    ],
  },
  intro:
    "Slash Paymentは複数チェーン・多数トークンに対応した入金特化の仮想通貨決済。現状は出金非対応で、KYC不要の特性上リスク理解が必須です。",
  howto: [
    "対応カジノの入金で『Slash Payment』を選択",
    "希望トークン・チェーンを選び金額指定",
    "自身のウォレットから送金→即時〜数分で反映",
  ],
  feeTable: {
    columns: ["項目", "目安"],
    rows: [
      ["ネットワーク手数料", "チェーン混雑で変動"],
      ["出金対応", "現状なし（カジノ別手段で回収）"],
    ],
  },
  prosCons: {
    pros: ["高速反映・多トークン対応", "KYC不要で即利用"],
    cons: ["出金不可", "規制・不正リスクを理解する必要"],
  },
  safetyTips: [
    "出金用の別手段（銀行/ウォレット）を必ず用意",
    "日本の規制状況・対応カジノの方針を確認",
    "トークン/チェーン指定ミス防止に細心の注意",
  ],
  summary:
    "Slash Paymentは入金に特化した仮想通貨決済。KYC不要の特性を理解し、安全面と回収経路を確保した上で使いましょう。",
  cta: { text: "他の入出金ガイドもチェックする", href: "/payment" },
};

export default data;

