import { PaymentPageData } from "@/components/templates/PaymentTemplate";

const data: PaymentPageData = {
  title: "仮想通貨（Crypto）でオンラインカジノ入出金【基礎ガイド】",
  banner: {
    title: "仮想通貨・入出金ガイド",
    subheading: "BTC/ETH/USDTの基礎・注意点",
    description:
      "主要暗号資産を使った入出金の基本、チェーン選択、ガス代、注意点をまとめます。",
    menu: [
      { href: "#howto", label: "使い方", icon: "🧭" },
      { href: "#fees", label: "費用", icon: "💸" },
      { href: "#proscons", label: "メリデメ", icon: "⚖️" },
      { href: "#comparison", label: "比較", icon: "📊" },
      { href: "#faq", label: "FAQ", icon: "❓" },
    ],
  },
  intro:
    "仮想通貨はグローバル・低コスト・高速が魅力。送金先ネットワークとアドレスの厳密確認、KYCの有無やガス代の変動に注意しながら活用しましょう。",
  howto: [
    "取引所で通貨（BTC/ETH/USDT等）を購入",
    "カジノ入金で対応通貨とチェーンを確認",
    "指定アドレスへ送金（誤送金に注意）",
    "出金はカジノ→自分のウォレット→取引所で円に換金",
  ],
  feeTable: {
    title: "費用・目安",
    columns: ["項目", "目安"],
    rows: [
      ["ガス代/ネットワーク手数料", "チェーン混雑で変動（数円〜数千円相当）"],
      ["反映時間", "数分〜1時間（審査・混雑次第）"],
    ],
  },
  prosCons: {
    pros: ["手数料が低い傾向", "送金が高速", "グローバルで使いやすい"],
    cons: ["価格変動リスク", "アドレス誤送金は取り戻せない"],
  },
  comparison: {
    items: [
      { title: "Bitcoin", description: "普及度が高い定番。" },
      { title: "Ethereum", description: "エコシステム豊富。ガス代に注意。" },
      { title: "USDT", description: "価格安定のステーブル。" },
    ],
  },
  summary:
    "仮想通貨はコスト・スピード・可用性に優れる反面、価格と送金ミスのリスクがある。ネットワーク確認と2FA・KYCの整備で安全に。",
  faq: [],
  cta: { text: "入出金ガイド一覧を見る", href: "/payment" },
} as const;

export default data;

