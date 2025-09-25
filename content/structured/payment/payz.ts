import { PaymentPageData } from "@/components/templates/PaymentTemplate";

const data: PaymentPageData = {
  title: "ペイズ（Payz）でオンラインカジノ入出金【2025年最新版ガイド】",
  banner: {
    title: "Payz入出金ガイド",
    subheading: "日本円対応・手数料・使い方・注意点",
    description:
      "日本円対応のeウォレットPayzの使い方、手数料、KYC、注意点をわかりやすく解説。",
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
    "Payzは日本円対応のプリペイド式eウォレット。多くの日本向けオンラインカジノで採用され、即時入金・明確な手数料・日本語サポートで使いやすいのが特徴です。",
  howto: [
    "Payzアカウントに銀行/カードでチャージ",
    "カジノの入金ページで『Payz』を選択",
    "金額入力→Payzで認証（必要に応じて2FA）",
    "即時〜数分で残高反映を確認",
    "出金は『Payz』宛てに申請→Payzから銀行へ引き出し",
  ],
  howtoNote: "出金は同一手段の入金履歴を要件にするカジノが多い点に注意。",
  feeTable: {
    title: "手数料の目安（例）",
    caption: "実際の条件はPayz/各銀行・各カジノで変動します。",
    columns: ["項目", "目安"],
    rows: [
      ["カジノ側手数料（入出金）", "無料が多い（サイト差あり）"],
      ["銀行/カードからの入金", "0〜約10%（方法・地域に依存）"],
      ["銀行出金", "数百円〜約1,500円（銀行差あり）"],
      ["通貨換算", "約1.25%〜3%（ステータスに依存）"],
    ],
  },
  prosCons: {
    pros: [
      "日本円対応で両替コストを抑えやすい",
      "多くのカジノで使えて即時反映しやすい",
      "日本語対応・2FAなどセキュリティが充実",
    ],
    cons: [
      "入金方法によっては手数料がかさむ",
      "通貨換算コストが状況により発生",
    ],
  },
  safetyTips: [
    "2段階認証を有効化しアカウント保護を徹底",
    "出金前に入金履歴要件の有無を確認",
    "ブラウザ設定（トラッキング制限等）で認証が弾かれる場合に注意",
  ],
  comparison: {
    title: "他ウォレットとの比較",
    items: [
      { title: "Payz", description: "日本円対応で導入率が高い。", meta: [ { label: "速度", value: "◎" }, { label: "手数料", value: "○" }, { label: "対応", value: "◎" } ] },
      { title: "Vega Wallet", description: "ポイントバックなどお得施策あり。", meta: [ { label: "速度", value: "◎" }, { label: "手数料", value: "◎" }, { label: "対応", value: "○" } ] },
      { title: "銀行振込", description: "国内で安心。反映に時間がかかる場合。", meta: [ { label: "速度", value: "○" }, { label: "手数料", value: "○" }, { label: "対応", value: "○" } ] },
    ],
  },
  summary:
    "Payzは日本円対応・高速・セキュアでオンカジ決済に適したeウォレット。手数料と換算条件を把握し、KYC・2FAを整えて賢く使いましょう。",
  faq: [
    { q: "口座開設は簡単？", a: "日本語対応の申込みが可能。本人確認は案内に沿って進めれば数日以内に完了することが多いです。" },
    { q: "銀行出金の手数料は？", a: "金融機関・方法により異なりますが、数百円〜1,500円程度が目安です。" },
    { q: "入金できない時の対処は？", a: "認証コードやブラウザ設定を見直し、必要に応じてサポートへ連絡してください。" },
  ],
  cta: { text: "他の入出金ガイドもチェックする", href: "/payment" },
};

export default data;
