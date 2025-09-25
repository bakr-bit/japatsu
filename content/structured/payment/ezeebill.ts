import { PaymentPageData } from "@/components/templates/PaymentTemplate";

const data: PaymentPageData = {
  title: "Ezeebill（イージービル）でオンラインカジノ入出金【2024年】",
  banner: {
    title: "Ezeebill入出金ガイド",
    subheading: "銀行送金代行・使い方・注意点",
    description: "アカウント不要で使える銀行送金代行。入金手順と一部カジノでの出金対応を解説。",
    menu: [
      { href: "#howto", label: "使い方", icon: "🧭" },
      { href: "#fees", label: "手数料", icon: "💸" },
      { href: "#proscons", label: "メリデメ", icon: "⚖️" },
      { href: "#safety", label: "注意点", icon: "🛡️" },
    ],
  },
  intro:
    "Ezeebillは日本円の銀行振込でカジノへ入金できる代行サービス。2023年以降は一部カジノで出金にも対応が広がっています。",
  howto: [
    "カジノの入金で『Ezeebill』を選択・JPYを指定",
    "入金額を入力すると振込IDが表示 → 銀行振込で必ずIDを記入",
    "着金まで数時間〜24時間（銀行休業日は翌営業日）",
  ],
  howtoNote: "振込IDの誤記は未反映の原因。明細は保存して照合できるように。",
  feeTable: {
    title: "費用・時間の目安",
    columns: ["項目", "目安"],
    rows: [
      ["Ezeebill手数料", "無料（プラットフォーム側）"],
      ["銀行振込手数料", "各行規定（数百円程度が多い）"],
      ["入金反映", "数時間〜24時間（営業日依存）"],
      ["出金反映", "1〜3営業日（対応カジノのみ）"],
    ],
  },
  prosCons: {
    pros: ["アカウント開設不要で手軽", "日本円で入金可能"],
    cons: ["反映が即時でない", "対応カジノが限定的（出金）"],
  },
  safetyTips: [
    "振込IDの転記ミス防止・明細保管は必須",
    "出金対応の可否は事前にサポートで確認",
  ],
  summary:
    "Ezeebillは日本の銀行から手軽に入金できる代替手段。反映時間とID管理に注意し、出金可否を確認のうえ活用しましょう。",
  cta: { text: "他の入出金ガイドもチェックする", href: "/payment" },
};

export default data;

