import { PaymentPageData } from "@/components/templates/PaymentTemplate";

const data: PaymentPageData = {
  title: "PayPay銀行でオンラインカジノ入出金【2025年最新版ガイド】",
  banner: {
    title: "PayPay銀行入出金ガイド",
    subheading: "使い方・手数料・安全性・比較",
    description:
      "日本円対応で即時性に優れたPayPay銀行の入出金手順、手数料や注意点、他手段との比較をまとめて解説。",
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
    "PayPay銀行は国内ネット銀行として日本円での即時入金に強く、オンラインカジノでも銀行振込経由で広く採用。低コスト・高い安全性で使いやすい決済手段です。",
  howto: [
    "カジノの入金ページで『銀行振込（国内）』を選択",
    "銀行一覧から『PayPay銀行』を選ぶ",
    "入金額を入力し、ログイン・ワンタイム認証を実施",
    "決済完了後、残高反映を確認（即時〜数分程度）",
    "出金時はカジノの出金手順に従い口座情報を指定",
  ],
  howtoNote: "出金は審査や銀行営業日により数時間〜数営業日かかる場合があります。",
  feeTable: {
    title: "主なカジノの入出金手数料（例）",
    caption: "各サイトの条件は変動します。最新の入出金ページでご確認ください。",
    columns: ["カジノ名", "入金手数料", "出金手数料"],
    rows: [
      ["Konibet", "無料", "無料"],
      ["InterCasino", "無料", "出金額の1.5%"],
      ["Bitcasino.io", "無料", "無料"],
      ["Casino Secret", "$500未満は1.7%", "無料"],
      ["TedBet", "無料", "無料（2回目まで）/3回目以降10%"],
      ["Mystino", "無料", "条件付き無料（賭け済みなら無料）"],
    ],
  },
  prosCons: {
    pros: [
      "日本円対応で為替手数料の心配が少ない",
      "24時間365日で即時入金しやすい",
      "スマホアプリ連携で操作が簡単",
    ],
    cons: [
      "出金はサイトや審査により時間がかかる場合あり",
      "カジノによっては名称が『銀行振込』に内包され分かりにくい",
    ],
  },
  safetyTips: [
    "ログイン時は生体/2要素認証を有効化し不正対策を徹底",
    "ワンタイムパスワード（OTP）が届かない場合は電波や通知設定を確認",
    "出金にはKYCや入金履歴の要件がある場合があるため事前に確認",
  ],
  comparison: {
    title: "主要手段との比較",
    items: [
      {
        title: "PayPay銀行",
        description: "即時性と安全性のバランスが高い日本円決済。",
        meta: [
          { label: "速度", value: "◎" },
          { label: "手数料", value: "◎" },
          { label: "対応", value: "○" },
        ],
      },
      {
        title: "クレジットカード",
        description: "即時入金だが海外事務手数料や承認リスクあり。",
        meta: [
          { label: "速度", value: "◎" },
          { label: "手数料", value: "△" },
          { label: "対応", value: "◎" },
        ],
      },
      {
        title: "銀行振込（他行）",
        description: "着金に時間がかかる場合や手数料が発生する場合あり。",
        meta: [
          { label: "速度", value: "○" },
          { label: "手数料", value: "○" },
          { label: "対応", value: "○" },
        ],
      },
    ],
  },
  payout: {
    title: "PayPay銀行での出金メモ",
    items: [
      "カジノの出金ページで国内銀行振込を選択し口座情報を登録",
      "KYC完了・入金履歴の要件を満たしているか確認",
      "審査後に着金（数時間〜数営業日のことがある）",
    ],
  },
  summary:
    "日本円に強く即時入金が魅力のPayPay銀行。手数料は概ね良好で、出金は要件と審査を前提に余裕を持って申請するとスムーズです。",
  faq: [
    { q: "入金ページにPayPay銀行が見当たらない", a: "多くのサイトでは『銀行振込』内に含まれています。該当項目を選んで進めてください。" },
    { q: "出金が通らない/遅い", a: "KYCの未完了や入金履歴の要件未達が原因のことがあります。条件と提出書類を確認しましょう。" },
    { q: "OTPが届かない", a: "電波状況・通知設定・アプリのログイン状態を確認し、再送や再ログインを試してください。" },
  ],
  cta: { text: "他の入出金ガイドもチェックする", href: "/payment" },
};

export default data;

