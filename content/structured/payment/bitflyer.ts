import { PaymentPageData } from "@/components/templates/PaymentTemplate";

const data: PaymentPageData = {
  title: "bitFlyerで仮想通貨を購入・送金して入出金【2024年ガイド】",
  banner: {
    title: "bitFlyer活用ガイド",
    subheading: "購入→送金→回収の基本手順",
    description: "国内取引所bitFlyerでBTCを用意し、オンラインカジノへ入金・回収する流れを解説。",
    menu: [
      { href: "#howto", label: "使い方", icon: "🧭" },
      { href: "#fees", label: "費用目安", icon: "💸" },
      { href: "#proscons", label: "メリデメ", icon: "⚖️" },
      { href: "#safety", label: "注意点", icon: "🛡️" },
      { href: "#faq", label: "FAQ", icon: "❓" },
    ],
  },
  intro:
    "bitFlyerは国内大手の暗号資産取引所。KYC後に日本円でBTCを購入して、対応カジノへ送金・回収できます。",
  howto: [
    "bitFlyerに登録→本人確認（KYC）を完了",
    "日本円を入金（銀行振込等）",
    "BTCを購入（取引所/販売所）",
    "カジノの入金アドレスへBTCを送金",
    "出金はカジノ→自分のbitFlyerアドレスへBTC受取→日本円に換金して出金",
  ],
  feeTable: {
    title: "費用・処理時間の目安",
    columns: ["項目", "目安"],
    rows: [
      ["ネットワーク手数料", "混雑度で変動（数十円〜数千円相当）"],
      ["反映時間", "通常数分〜30分程度（審査等で変動）"],
      ["日本円出金", "各銀行の手数料規定に準拠"],
    ],
  },
  prosCons: {
    pros: ["国内業者で安心のKYC・サポート", "即時〜短時間で反映しやすい", "セキュリティ対策が強固"],
    cons: ["相場変動で価格リスク", "送金先アドレス誤りは取り戻せない"],
  },
  safetyTips: [
    "送金前にチェーン・アドレスを厳密に確認",
    "2段階認証・出金制限などセキュリティ設定を徹底",
    "カジノ側の対応通貨・最小/最大金額を事前確認",
  ],
  summary:
    "bitFlyerを使えば国内でBTCの購入・送金がスムーズ。KYCとセキュリティを整え、価格変動・アドレス誤送金に注意して活用しましょう。",
  faq: [],
  cta: { text: "仮想通貨の他手段も見る", href: "/payment/crypto" },
};

export default data;

