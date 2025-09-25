import { PaymentPageData } from "@/components/templates/PaymentTemplate";

const data: PaymentPageData = {
  title: "Vega Wallet（ベガウォレット）でオンラインカジノ入出金【2025年版】",
  banner: {
    title: "Vega Wallet入出金ガイド",
    subheading: "手数料・使い方・注意点・比較",
    description:
      "Venus Point後継のeウォレットVega Walletの特徴、費用、入出金の流れやKYCを解説。",
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
    "Vega Walletはポイント制のオンカジ向けeウォレット。カジノ間の資金移動やポイントバック、換金無料枠などお得に使えるのが魅力です。",
  howto: [
    "銀行振込でVegaポイントを購入（2,000〜500,000円/日）",
    "カジノの入金で『Vega Wallet』を選択→ID/パス入力→送付",
    "勝利金はカジノ→Vegaに出金→換金申請で銀行へ出金",
  ],
  feeTable: {
    title: "代表的な費用（例）",
    caption: "条件は変動します。平日/週末扱いの換金ルールに注意。",
    columns: ["項目", "目安"],
    rows: [
      ["カジノ⇄Vega送付", "無料（送付0.6%/受取0.2%のポイントバック）"],
      ["換金（平日）", "50〜349pt:1.3pt / 350pt以上:無料"],
      ["換金（週末扱い）", "900ptごとに2.9pt"],
    ],
  },
  prosCons: {
    pros: [
      "ポイントバックやキャンペーンが豊富",
      "カジノ間の資金移動が無料で便利",
      "日本語対応で手続きがわかりやすい",
    ],
    cons: [
      "日本円に直接対応せず換算が必要な場面あり",
      "週末扱いの換金手数料に注意",
    ],
  },
  safetyTips: [
    "換金は平日350pt以上にまとめて手数料節約",
    "対応カジノを事前確認し、非対応時は他手段を準備",
    "KYC書類を早めに整備し高額出金に備える",
  ],
  summary:
    "Vega Walletはお得なポイント制度と使い勝手が魅力。換金ルールと対応サイトを把握し、平日換金などでコスト最適化しましょう。",
  faq: [],
  cta: { text: "他の入出金ガイドもチェックする", href: "/payment" },
};

export default data;
