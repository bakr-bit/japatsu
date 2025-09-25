import { PaymentPageData } from "@/components/templates/PaymentTemplate";

const data: PaymentPageData = {
  title: "AstroPay（アストロペイ）【日本での現状と代替手段】",
  banner: {
    title: "AstroPayガイド（現状）",
    subheading: "利用状況・注意点・代替案",
    description:
      "かつて普及したプリペイド決済AstroPayの日本での利用状況と、切り替え先として有力な代替手段を整理。",
    menu: [
      { href: "#howto", label: "現状", icon: "ℹ️" },
      { href: "#fees", label: "手数料", icon: "💸" },
      { href: "#proscons", label: "メリデメ", icon: "⚖️" },
      { href: "#comparison", label: "代替比較", icon: "📊" },
      { href: "#faq", label: "FAQ", icon: "❓" },
    ],
  },
  intro:
    "AstroPayはプリペイド型の決済手段として人気でしたが、日本向けでは多くのカジノが既に利用停止。今後は国内向けの電子マネーや仮想通貨、銀行送金など現行の選択肢に切り替えるのが現実的です。",
  howto: [
    "多くの日本向けカジノでAstroPayは新規利用不可",
    "既存アカウントがあっても入出金に使えないケースが大半",
    "代替としてVega Wallet / Payz / 仮想通貨 / 銀行送金を検討",
  ],
  feeTable: {
    title: "（参考）AstroPayの特徴",
    columns: ["項目", "概要"],
    rows: [
      ["方式", "仮想プリペイドカードによるオンライン決済"],
      ["通貨対応", "多通貨（JPYの扱いは環境依存）"],
      ["手数料", "決済自体は無料が多いが、換算やサイト側で差"],
      ["出金", "多くは別手段（電子マネーや銀行）"],
    ],
  },
  prosCons: {
    pros: ["カード情報を渡さず決済", "即時性が高いケース"],
    cons: ["日本向けは実質利用停止が多数", "サポートや換金動線が限定的"],
  },
  comparison: {
    title: "代替決済の比較（例）",
    items: [
      { title: "Vega Wallet", description: "ポイント還元や国内人気が高いeマネー。" },
      { title: "Payz", description: "多通貨・導入率が高いeウォレット。" },
      { title: "仮想通貨", description: "手数料安くグローバル。価格変動に注意。" },
    ],
  },
  summary:
    "AstroPayからは国内実態に合う手段への移行が無難。Vega WalletやPayz、仮想通貨、銀行送金などを状況に応じて使い分けましょう。",
  faq: [],
  cta: { text: "他の入出金ガイドもチェックする", href: "/payment" },
} as const;

export default data;

