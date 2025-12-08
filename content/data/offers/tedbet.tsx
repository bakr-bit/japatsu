import Link from "next/link";
import type { OfferPageContent } from "@/components/templates/OfferDetailTemplate";

export const tedbetExclusive: OfferPageContent = {
  hero: {
    title: "ジャパカジ限定｜Tedbetで入金不要ボーナス¥4,500をゲット！",
    casino: "Tedbet",
    casinoSlug: "tedbet",
    description: "¥4,500の入金不要ボーナスをご利用いただき、Tedbetカジノが提供するバラエティ豊かなゲームセレクションをぜひお楽しみください！",
    bannerImageUrl: "https://casinotsu.com/images/tedbet_960x495.png",
    promotionalPeriod: {
      startDate: "2024-06-28",
      endDate: "2024-12-31",
      daysRemaining: 94,
    },
  },

  offerHighlight: {
    bonusAmount: "¥4,500",
    bonusType: "入金不要ボーナス",
    wagering: "30倍",
    validity: "720時間",
    maxWinnings: "¥12,000",
    bonusCode: "japacasi45",
    featured: true,
  },

  tableOfContents: [
    { text: "Tedbetの入金不要ボーナス概要", url: "#overview" },
    { text: "入金不要ボーナス獲得方法", url: "#how-to-claim" },
    { text: "ご注意事項", url: "#terms-and-conditions" },
  ],

  intro: [
    "2022年5月にオープンいたしました Tedbet（テッドベット） より、大変魅力的な ジャパカジ限定オファー をいただきました。🎉",
    "ご登録いただくだけで、 ¥4,500分の入金不要ボーナス を進呈いたします。🤑💰",
    "¥4,500を無料でお楽しみいただけるというのは、大変お得な機会かと存じます。💝",
    "賭け条件は30倍 となっており、着実にプレイを進めることで、現金化の可能性もございます。",
  ],

  claimSteps: [
    {
      stepNumber: 1,
      title: "Tedbetへ登録",
      description: [
        "ジャパカジのリンクより、Tedbetにご登録ください。",
      ],
    },
    {
      stepNumber: 2,
      title: "ボーナスコード入力",
      description: [
        "アカウント登録時に、ボーナスコード「japacasi45」をご入力ください。",
      ],
      bonusCode: "japacasi45",
    },
    {
      stepNumber: 3,
      title: "ボーナスを有効化",
      description: [
        "「プロモーション」ページにて、ボーナスを有効にしてください。",
      ],
    },
    {
      stepNumber: 4,
      title: "本人確認",
      description: [
        "ご本人様確認の手続きを行ってください。",
      ],
    },
    {
      stepNumber: 5,
      title: "プレイ開始",
      description: [
        "入金不要ボーナスにて、無料プレイをお楽しみください！",
      ],
    },
  ],

  termsAndConditions: {
    heading: "入金不要ボーナス利用規約",
    items: [
      { label: "ボーナス額", value: "¥4,500", note: "ご選択されたアカウントの通貨により、ボーナス額は$45、€45、または¥4500となります。" },
      { label: "ボーナスコード", value: "japacasi45", note: "アカウント登録時にご入力いただく必要がございます。" },
      { label: "賭け条件", value: "30倍" },
      { label: "有効期限", value: "有効化後720時間", note: "ボーナスを有効にしなかった場合は72時間となります。" },
      { label: "出金上限額", value: "¥12,000" },
    ],
    prohibitions: [],
    warnings: [
      "ご本人様確認完了後に、ご利用可能となります。",
      "「プロモーション」ページにて、ボーナスを有効にしていただく必要がございます。",
      "「賭け条件の消化率」および「禁止ゲーム」はゲームごとに異なります。詳細は公式サイト内の「コントリビューション」ページにてご確認くださいませ。",
      "一般利用規約が適用されます。",
    ],
  },

  casinoInfo: {
    heading: "豊富な決済方法や充実したゲームラインナップが魅力！",
    paragraphs: [
      "2022年にオープンしたTedbet（テッドベット）は、豊富なゲームラインナップと多様な決済方法に対応している点が魅力の新しいオンラインカジノです。🐻",
    ],
    officialUrl: "https://casinotsu.com/reviews/tedbet",
  },

  summary: {
    heading: "まとめ",
    paragraphs: [
      "ご登録いただくだけで¥4,500分の無料プレイがお楽しみいただける、大変お得なボーナスでございます！🎰",
      "ゲーム数が豊富で、まさに 入金不要ボーナスでお試しプレイをするのに最適なカジノ と言えるでしょう。",
      "オンラインカジノのご利用が初めてのお客様は、この機会をぜひご活用くださいませ。🏃💨",
    ],
    recommendedFor: [
      "オンラインカジノを初めて利用する方",
      "リスクなしでカジノをお試しプレイしたい方",
      "豊富なゲームラインナップを好む方",
    ],
  },
  
  cta: {
    text: "今すぐTedbetでボーナスを獲得",
    href: "https://go.casinotsu.com/go/tedbet",
    buttonText: "ボーナスGET",
  },

  breadcrumbs: [
    { label: "ホーム", href: "https://casinotsu.com/" },
    { label: "オファー", href: "https://casinotsu.com/offers/" },
    { label: "Tedbet限定", href: "https://casinotsu.com/offers/tedbet-exclusive" },
  ],

  metadata: {
    category: "exclusive-offer",
    tags: ["入金不要ボーナス", "Tedbet", "ジャパカジ限定"],
    publishDate: "2024-06-28",
  },

  author: {
    name: "Rina Okabe",
    nameJapanese: "岡部 りな",
    role: "実戦経験6年のカジノ専門家",
    avatarUrl: "/rina/avatar.png",
    bio: "2019年から6年間で80以上のカジノを実際にプレイ。¥250万以上を賭けた実体験から得た本物の知識を、失敗も成功も包み隠さず共有します。",
    authorPageUrl: "/authors/rina-okabe",
    expertise: ["オンラインカジノレビュー", "ボーナス戦略", "パチスロ風スロット", "日本市場特化"],
  },
};