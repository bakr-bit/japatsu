import { PaymentPageData } from "@/components/templates/PaymentTemplate";

const data: PaymentPageData = {
  title: "イーサリアム（Ethereum）でオンラインカジノ入出金【2025年最新版ガイド】",
  banner: {
    title: "Ethereum入金ガイド",
    subheading: "安全性・手数料・使い方・注意点",
    description:
      "日本のオンラインカジノでETHを使うための基本から手数料・限度額・安全対策までをわかりやすく解説。",
    menu: [
      { href: "#howto", label: "使い方", icon: "🧭" },
      { href: "#fees", label: "限度額", icon: "💸" },
      { href: "#proscons", label: "メリデメ", icon: "⚖️" },
      { href: "#safety", label: "注意点", icon: "🛡️" },
      { href: "#comparison", label: "比較", icon: "📊" },
      { href: "#faq", label: "FAQ", icon: "❓" },
    ],
  },
  intro:
    "ETHは世界中で使える人気の暗号資産。日本のオンラインカジノでも入出金がスピーディーで、手数料も比較的低コストに抑えやすい一方、送金アドレスミスやレート変動には注意が必要です。",
  howto: [
    "取引所やウォレットでETHを用意",
    "カジノの入金ページで『Ethereum』を選択",
    "表示された入金用アドレスを正確にコピー",
    "自分のウォレットからそのアドレスへETHを送金",
    "ネットワーク承認後、残高反映を確認（数分〜10分程度）",
  ],
  howtoNote: "出金時は自分のウォレットアドレスを誤入力しないこと（送金は原則取り消し不可）",
  feeTable: {
    title: "ETH入出金の一般的な目安（限度額）",
    caption: "実際の条件は各カジノの入出金ページで要確認。為替や審査状況で変動します。",
    columns: ["種類", "最低額（ETH）", "最高額（ETH）"],
    rows: [
      ["入金（最低）", "0.01〜0.05", "（サイトにより上限なし）"],
      ["出金（最高）", "（サイトにより下限なし）", "5,000〜10,000ユーロ相当が目安"],
    ],
  },
  prosCons: {
    pros: [
      "グローバルに使え、対応カジノが多い",
      "入出金が早く、数分〜十数分で反映しやすい",
      "手数料を抑えやすい（状況によりガス代変動）",
      "プライバシーに配慮しやすい",
    ],
    cons: [
      "アドレス誤送金は原則取り戻せない",
      "価格変動（為替）リスクがある",
      "KYC未完了だと出金審査で時間がかかることあり",
    ],
  },
  safetyTips: [
    "送金前にネットワークと宛先アドレスを厳密に確認（コピペ推奨）",
    "ウォレット・カジノともに2段階認証（2FA）を有効化",
    "信頼できるライセンス保有カジノを利用し、入出金条件を事前確認",
    "ブロックチェーン送金は原則キャンセル不可。疑問点はサポートへ相談",
  ],
  comparison: {
    title: "主要仮想通貨との比較",
    items: [
      {
        title: "Ethereum",
        description: "DApps/スマートコントラクトが強み。対応も広く、実用性が高い。",
        meta: [
          { label: "速度", value: "○" },
          { label: "手数料", value: "△（ガス代変動）" },
          { label: "対応", value: "◎" },
        ],
      },
      {
        title: "Bitcoin",
        description: "最も有名で対応が広い。手数料・速度は中程度（相場次第）。",
        meta: [
          { label: "速度", value: "○" },
          { label: "手数料", value: "○" },
          { label: "対応", value: "◎" },
        ],
      },
      {
        title: "Ripple (XRP)",
        description: "送金速度が軽快。手数料の低さも魅力。",
        meta: [
          { label: "速度", value: "◎" },
          { label: "手数料", value: "◎" },
          { label: "対応", value: "○" },
        ],
      },
    ],
  },
  payout: {
    title: "ETH出金の一般的な流れ",
    items: [
      "カジノの出金ページで『Ethereum』を選択",
      "自分のETHウォレットアドレスを入力して申請",
      "審査完了後にブロックチェーンへ送金・数分〜数十分で反映",
    ],
    note: "初回や高額時はKYC審査で時間がかかる場合があります。",
  },
  summary:
    "ETHはスピーディーで使いやすい決済手段。アドレス入力ミスやレート変動に注意しつつ、KYCや2FAを整えて安全・快適に利用しましょう。",
  faq: [],
  cta: { text: "入出金ガイド一覧を見る", href: "/payment" },
};

export default data;
