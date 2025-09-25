import { PaymentPageData } from "@/components/templates/PaymentTemplate";

const data: PaymentPageData = {
  title: "iWallet（アイウォレット）でオンラインカジノ入出金【ガイド】",
  banner: {
    title: "iWallet入出金ガイド",
    subheading: "使い方・手数料・注意点",
    description:
      "海外対応のeウォレットiWalletの入出金手順、プリペイドカード、為替コストやKYCをわかりやすく解説。",
    menu: [
      { href: "#howto", label: "使い方", icon: "🧭" },
      { href: "#fees", label: "手数料", icon: "💸" },
      { href: "#proscons", label: "メリデメ", icon: "⚖️" },
      { href: "#safety", label: "注意点", icon: "🛡️" },
      { href: "#faq", label: "FAQ", icon: "❓" },
    ],
  },
  intro:
    "iWalletは海外向けeウォレット。銀行送金・カード・プリペイド連携に対応し、カジノへの入出金やATM出金の経路を確保しやすいのが特徴です。",
  howto: [
    "口座開設→KYC（本人確認）を完了",
    "銀行送金やカードでiWalletへ入金",
    "カジノの入金で『iWallet』を選択→金額→認証",
    "出金はカジノ→iWallet→銀行振込／プリペイド→ATM",
  ],
  feeTable: {
    title: "費用・所要時間の目安",
    caption: "為替換算や送金は環境依存です。最新条件は公式・カジノで確認。",
    columns: ["項目", "目安/補足"],
    rows: [
      ["通貨対応", "JPY直接は不可。外貨→JPYで換算コストが発生"],
      ["入金反映", "数分〜数時間"],
      ["出金反映", "1〜3営業日（銀行／状況依存）"],
      ["プリペイド", "UnionPay連携で国内ATM出金可（到着まで数週）"],
    ],
  },
  prosCons: {
    pros: [
      "複数の入出金動線（銀行/カード/プリペイド）",
      "ATM現金化の経路を用意できる",
      "セキュリティ・2FA・監視が充実",
    ],
    cons: [
      "日本円非対応で為替コストが乗りやすい",
      "各種手数料が環境依存で分かりにくい",
      "プリペイドは発行・到着に時間",
    ],
  },
  safetyTips: [
    "通貨設定と換算コストを前提に資金計画を立てる",
    "KYC書類を早めに整備し高額出金に備える",
    "プリペイド希望者は時間に余裕を持って申請",
  ],
  summary:
    "iWalletは入出金経路が多彩。為替コストと手数料を把握しつつ、KYC・2FA・プリペイドなど必要な準備を整えて活用するのがポイントです。",
  faq: [],
  cta: { text: "他の入出金ガイドもチェックする", href: "/payment" },
} as const;

export default data;

