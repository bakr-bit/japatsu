import { PaymentPageData } from "@/components/templates/PaymentTemplate";

const data: PaymentPageData = {
  title: "MuchBetterでオンラインカジノ入出金【ガイド】",
  banner: {
    title: "MuchBetter入出金ガイド",
    subheading: "使い方・手数料・注意点",
    description: "MuchBetterの使い方、費用、KYCや安全性を要点整理。",
    menu: [
      { href: "#howto", label: "使い方", icon: "🧭" },
      { href: "#fees", label: "手数料", icon: "💸" },
      { href: "#proscons", label: "メリデメ", icon: "⚖️" },
      { href: "#safety", label: "注意点", icon: "🛡️" },
      { href: "#comparison", label: "比較", icon: "📊" },
    ],
  },
  intro:
    "MuchBetterはアプリ中心のプリペイド式eウォレット。即時性が高く、日本語サポートやKYCで安心して使えます。",
  howto: [
    "アプリをインストール→アカウント作成",
    "本人確認（KYC）で限度を引き上げ",
    "銀行/カード等でチャージ（手数料は方法に依存）",
    "カジノ入金でMuchBetter選択→金額→アプリで承認",
    "出金はカジノ→MuchBetter→銀行へ",
  ],
  feeTable: {
    title: "費用の目安（例）",
    columns: ["項目", "目安"],
    rows: [
      ["カジノ側手数料", "無料が多い（サイト差あり）"],
      ["チャージ/出金", "方法・地域で変動（アプリ内で最新を確認）"],
    ],
  },
  prosCons: {
    pros: ["即時反映で快適", "直感UI・日本語サポート", "KYCと多層防御で安全"],
    cons: ["手数料が方法依存", "対応カジノに差"],
  },
  safetyTips: [
    "KYCを早めに完了し出金審査遅延を回避",
    "最新の手数料・条件はアプリ内で都度確認",
  ],
  summary:
    "MuchBetterはスピードと使いやすさが魅力。費用条件を把握し、他手段と使い分けると賢く運用できます。",
  faq: [],
  cta: { text: "他の入出金ガイドもチェックする", href: "/payment" },
} as const;

export default data;
