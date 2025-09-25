import { PaymentPageData } from "@/components/templates/PaymentTemplate";

const data: PaymentPageData = {
  title: "Mastercard",
  banner: {
    title: "Mastercard入金ガイド",
    subheading: "安全性・手数料・使い方をわかりやすく",
    description:
      "Mastercardを使ったオンラインカジノ入金を、手数料・注意点・比較までまとめて解説。3DセキュアやKYCの流れも把握して安心。",
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
    "Mastercard（マスターカード）は世界的に普及する国際ブランド。オンラインカジノの入金手段としても広く受け入れられ、即時反映や高いセキュリティが魅力です。3DセキュアやKYCなどの本人確認の流れ、手数料や出金手段の違いを押さえて、安心・スムーズに利用しましょう。",
  howto: [
    "カジノにログインし入金ページを開く",
    "「Mastercard」対応の決済ボタンを選択",
    "カード情報と入金額を入力して決定",
    "3Dセキュア等の本人認証が表示されたら指示に従う",
    "アカウントに入金が反映されているか確認",
  ],
  howtoNote: "為替や手数料はカード会社により異なります。各カードの規約や海外事務手数料も確認しましょう。",
  howtoMedia: {
    src: "/mastercard-tutorial.gif",
    alt: "Mastercard入金の手順を示すアニメーション",
  },
  feeTable: {
    title: "Mastercardの手数料（例）",
    caption: "手数料や対応状況は変更される場合があります。最新情報は各サイトの入出金ページや規約をご確認ください。",
    columns: ["カジノ", "入金手数料", "出金手数料"],
    rows: [
      ["ベラジョン", "2.25%（上限5ドル）", "出金不可"],
      ["カジ旅", "無料", "出金不可"],
      ["カジノシークレット", "500ドル未満1.7%（上限5ドル）", "出金不可"],
      ["ミスティーノ", "無料", "出金不可"],
      ["インターカジノ", "無料", "出金不可"],
    ],
  },
  prosCons: {
    pros: [
      "多くのオンラインカジノで利用可能",
      "セキュリティ・信頼性が高い（ID Check/3Dセキュアなど）",
      "入金が即時反映しやすい",
    ],
    cons: [
      "基本的にクレジットカードでの出金は不可",
      "一部カジノでは入金手数料が発生する",
      "使いすぎ防止の自己管理が必要",
    ],
  },
  safetyTips: [
    "3Dセキュア（Mastercard SecureCode）を有効化して安全性を高める",
    "KYCやカード画像アップロード時は指示通りに一部情報を隠して提出",
    "出金は電子決済や銀行振込を利用（カード出金は不可が一般的）",
    "アカウントに保存されたカード情報は管理・削除が可能",
    "為替手数料や海外事務手数料はカード発行会社により異なる",
  ],
  comparison: {
    title: "決済手段の比較",
    items: [
      {
        title: "Mastercard",
        description:
          "世界的に普及したクレジットカード。即時入金が可能でポイント付与の対象になる場合も。",
        meta: [
          { label: "即時入金", value: "⭕️" },
          { label: "利便性", value: "△" },
          { label: "ポイント", value: "⭕️" },
          { label: "サポート", value: "⭕️" },
        ],
      },
      {
        title: "電子マネー",
        description: "管理がしやすく、出金にも対応しやすい。総合的な利便性が高い。",
        meta: [
          { label: "即時入金", value: "⭕️" },
          { label: "利便性", value: "⭕️" },
          { label: "ポイント", value: "⭕️" },
          { label: "サポート", value: "△" },
        ],
      },
      {
        title: "仮想通貨",
        description: "手数料無料のカジノが多い一方で、価格変動が大きく初心者には難しいことも。",
        meta: [
          { label: "即時入金", value: "⭕️" },
          { label: "利便性", value: "⭕️" },
          { label: "ポイント", value: "△" },
          { label: "サポート", value: "✖️" },
        ],
      },
      {
        title: "国内銀行振込",
        description: "サポートは手厚いが、反映に時間がかかることがある。",
        meta: [
          { label: "即時入金", value: "△" },
          { label: "利便性", value: "△" },
          { label: "ポイント", value: "✖" },
          { label: "サポート", value: "⭕️" },
        ],
      },
    ],
  },
  summary:
    "Mastercardは即時性や利便性、セキュリティの高さで入金手段として優秀ですが、出金は別手段が必要です。安全対策（3Dセキュア・KYC）や手数料、為替を理解し、電子決済や銀行振込と併用してスムーズに利用しましょう。",
  faq: [
    {
      q: "オンラインカジノでMastercardを利用するのは安全ですか？",
      a: "ライセンスを保有する信頼できるオンラインカジノであれば、安全に利用できます。本人認証サービス（3Dセキュア）の有効化も推奨されます。",
    },
    {
      q: "Mastercardの入金に手数料はかかりますか？",
      a: "無料のカジノもありますが、サイトによっては手数料がかかる場合があります。各カジノの入金ページでご確認ください。",
    },
    {
      q: "どのオンラインカジノでもMastercardは使えますか？",
      a: "多くのカジノで利用可能ですが、念のため各サイトのヘルプや決済ページをご確認ください。",
    },
    {
      q: "Mastercardで出金できますか？",
      a: "基本的にクレジットカードでの出金はできません。電子決済や銀行振込を利用します。",
    },
  ],
  cta: { text: "入出金ガイド一覧を見る", href: "/payment" },
};

export default data;
