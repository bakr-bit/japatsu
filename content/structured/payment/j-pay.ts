import { PaymentPageData } from "@/components/templates/PaymentTemplate";

const data: PaymentPageData = {
  title: "J-Payでオンラインカジノ入出金【ガイド】",
  banner: {
    title: "J-Pay入出金ガイド",
    subheading: "使い方・手数料・注意点",
    description: "国内振込ベースのJ-Payの利用手順と注意点を簡潔に。",
    menu: [
      { href: "#howto", label: "使い方", icon: "🧭" },
      { href: "#fees", label: "手数料", icon: "💸" },
      { href: "#proscons", label: "メリデメ", icon: "⚖️" },
      { href: "#safety", label: "注意点", icon: "🛡️" },
    ],
  },
  intro:
    "J-Payは国内振込をベースにした入出金手段。対応カジノで入出金の両方に使えるケースがあります。",
  howto: [
    "カジノの入金で『J-Pay/銀行送金』を選択",
    "案内に沿って金額・振込IDなどを指定し送金",
    "出金はJ-Payを選び口座情報やIDで受け取り",
  ],
  feeTable: { columns: ["項目", "目安"], rows: [["カジノ側手数料", "無料が多い"], ["銀行手数料", "各行規定（数百円程度）"]] },
  prosCons: { pros: ["国内送金で安心", "手順がわかりやすい"], cons: ["反映まで時間差", "対応サイトが限定的"] },
  safetyTips: ["振込IDの転記ミスに注意。明細の保管を徹底。"],
  summary: "対応カジノであればJ-Payは手軽な選択。費用と反映時間を把握した上で活用。",
  cta: { text: "他の入出金ガイドもチェックする", href: "/payment" },
} as const;

export default data;

