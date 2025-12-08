import Link from "next/link";
import type { OfferPageContent } from "@/components/templates/OfferDetailTemplate";

export const freshCasinoExclusive: OfferPageContent = {
  hero: {
    title: "フレッシュカジノの入金不要フリースピン50回をゲット！",
    casino: "Fresh Casino",
    casinoSlug: "fresh-casino",
    description: "CasinoTsu は、注目を集めるオンラインカジノ「フレッシュカジノ」にて、新規登録者様限定の特別なオファーをご用意いたしました。この機会に、リスクなしで人気スロットを体験し、高額賞金を狙ってみませんか？✨",
    bannerImageUrl: "https://casinotsu.com/images/fresh_960x495.png",
    promotionalPeriod: {
      startDate: "2025-10-10",
      endDate: "2025-12-31",
      daysRemaining: 82,
    },
    lastUpdated: "2025-10-10",
  },

  offerHighlight: {
    bonusAmount: "50回",
    bonusType: "入金不要フリースピン",
    wagering: "45倍",
    validity: "72時間",
    maxWinnings: "勝利金の10倍",
    bonusCode: "JAPACASI50FS",
    featured: true,
  },

  tableOfContents: [
    { text: "ジャパカジ限定✨ 登録フリースピン50回分の詳細", url: "#offer-details" },
    { text: "フレッシュカジノの入金不要フリースピン獲得方法", url: "#how-to-claim" },
    { text: "まとめ｜爆裂スロットで高額賞金狙っちゃえ🔥", url: "#summary" },
    { text: "よくある質問", url: "#faq" },
  ],

  intro: [
    "この度、CasinoTsu は「フレッシュカジノ（Fresh Casino）」様との提携により、特別なボーナスオファーを実現いたしました。🎉",
    "フレッシュカジノは、比較的新しいカジノながら、6,000種類以上の豊富なゲームラインナップを誇る実力派です。",
    "今回、CasinoTsu を通じてご登録いただいたお客様には、もれなくスロットフリースピン50回分をプレゼントいたします。🎁🎰💖",
    "対象機種は、人気のスロットゲーム『エイリアン・フルーツ（Alien Fruits）』です。このスロットは、グラフィックに定評のあるBGaming社が提供する、賞金ポテンシャルが最高15,000倍という驚異的な高配当倍率スロットとして、多くのプレイヤーから支持を得ています。🔥",
  ],

  claimSteps: [
    {
      stepNumber: 1,
      title: "フレッシュカジノへアクセス",
      description: [
        "まず、CasinoTsu経由でフレッシュカジノの登録ページへアクセスしてください。",
      ],
    },
    {
      stepNumber: 2,
      title: "アカウント情報を入力",
      description: [
        "登録フォームに必要事項をご入力ください。",
      ],
      bullets: [
        "メールアドレス",
        "任意のパスワード",
        "国（日本）",
        "通貨（日本円）",
      ],
      imageUrl: "https://casinotsu.com/images/Fresh-Sign-In1.jpg",
      note: "プロモーションメールの受信を希望され、プライバシーポリシーに同意される場合はチェック✅を入れ、「サインアップ」をクリックしてください。",
    },
    {
      stepNumber: 3,
      title: "個人情報を入力",
      description: [
        "引き続き、個人情報（生年月日、氏名、性別、国（日本）、住所）の入力を完了すると、登録が完了いたします。🎉",
      ],
      imageUrl: "https://casinotsu.com/images/Fresh-Sign-In2.jpg",
    },
    {
      stepNumber: 4,
      title: "メールアドレスと携帯電話の認証",
      description: [
        "登録完了後、認証確認メールが届きますので、メールアドレスの認証を完了させてください。また、携帯電話の認証も同様に完了させてください。",
      ],
      imageUrl: "https://casinotsu.com/images/Fresh-Deposit-Method.jpg",
    },
    {
      stepNumber: 5,
      title: "ボーナスコードを入力",
      description: [
        "入金ページまたはプロフィールページのボーナスコード欄に、『JAPACASI50FS』と入力し、フリースピンを申請してください。これで獲得完了です。🤩🙌",
      ],
      bonusCode: "JAPACASI50FS",
    },
  ],

  characterDialogues: [],

  termsAndConditions: {
    heading: "フリースピンの利用規約",
    items: [
      { label: "ボーナス", value: "フリースピン50回分" },
      { label: "賭け条件", value: "45倍" },
      { label: "対象機種", value: "Alien Fruits" },
      { label: "有効期限", value: "フリースピンおよび賭け条件の消化には72時間以内" },
      { label: "スピンバリュー", value: "1スピンあたり20円" },
      { label: "最大出金可能額", value: "フリースピンによる勝利金の10倍" },
      { label: "ボーナスコード", value: "JAPACASI50FS" },
    ],
    prohibitions: [],
    warnings: [
      "ボーナス申請前に、メールアドレスおよび携帯電話の認証を完了していただく必要がございます。",
      "アカウント登録後、プロフィールページにて個人情報、電話番号、国（日本）の登録を完了していただく必要がございます。",
      "フレッシュカジノの利用規約が適用されます。",
    ],
  },

  casinoInfo: {
    heading: "注目の新星カジノ！フレッシュカジノ",
    paragraphs: [
      "フレッシュカジノは、比較的新しいカジノながら、6,000種類以上の豊富なゲームラインナップを誇る実力派です。🚀",
      "CasinoTsu は、一度登録すれば長くお楽しみいただけるおすすめのオンラインカジノとしてフレッシュカジノを推奨いたします。😻",
    ],
    rating: null,
    officialUrl: "https://go.casinotsu.com/go/fresh-casino:fresh-casino-exclusive?referrer_path=%2Foffers%2Ffresh-casino-exclusive",
  },

  targetGames: {
    heading: "対象ゲーム：Alien Fruits",
    description: "対象機種はBGaming社の人気ビデオスロット『Alien Fruits』です。Pay Anywhere機能やマルチプライヤー機能を搭載し、ユニークなテーマと高品質なグラフィックが特徴です。",
    eligibleGames: [
      "スロット『Alien Fruits』（入金不要フリースピン対象）",
    ],
    recommendedGames: [
      { name: "Alien Fruits", rtp: "不明" },
    ],
  },

  paymentMethods: {
    heading: "入出金方法",
    depositMethods: ["クレジットカード", "銀行送金", "仮想通貨", "電子決済"],
    withdrawalMethods: ["銀行送金", "仮想通貨", "電子決済"],
    notes: [
      "詳細な入出金方法については、フレッシュカジノの公式サイトをご確認ください。",
    ],
  },

  mobileCompatibility: {
    heading: "モバイル対応",
    description: [
      "フレッシュカジノはモバイルデバイスに完全対応しており、対象スロットの『Alien Fruits』もスマートフォンやタブレットで快適にプレイ可能です。",
    ],
  },

  strategy: {
    heading: "攻略法・注意点",
    subsections: [
      {
        subheading: "ボーナス活用法",
        tips: [
          "高配当スロットを無料で試す：対象機種の『Alien Fruits』は最高15,000倍の賞金ポテンシャルを秘めています。この機会にリスクなく高額配当を狙いましょう。",
          "有効期限に注意：フリースピンの有効期限は72時間と短めです。獲得後は早めに使い切り、賭け条件の消化に取り掛かりましょう。",
        ],
      },
      {
        subheading: "賭け条件クリア戦略",
        tips: [
          "賭け条件は45倍です。フリースピンで得た勝利金を元に、根気強くプレイして条件クリアを目指しましょう。",
        ],
      },
      {
        subheading: "注意事項",
        tips: [
          "ボーナスコード必須：ボーナスを獲得するには、プロモーションコード「JAPACASI50FS」の入力が必須です。",
          "アカウント認証が必要：ボーナス申請前にメールアドレスと携帯電話の認証を完了させる必要があります。",
          "個人情報の登録：プロフィールページで個人情報、電話番号、国の登録を完了させてください。",
        ],
        warnings: [],
      },
    ],
  },

  similarOffers: {
    heading: "フレッシュカジノがお好きな方におすすめのカジノもチェック",
    offers: [
      {
        casino: "Drip Casino",
        casinoSlug: "drip-casino",
        feature: "同じAlien Fruitsで50回フリースピンを提供（コード: 50SLOTSC）",
        offerLink: "https://casinotsu.com/reviews/drip-casino",
      },
      {
        casino: "Bitstarz Casino",
        casinoSlug: "bitstarz",
        feature: "Alien Fruitsで50回フリースピン（コード不要）",
        offerLink: "https://casinotsu.com/reviews/bitstarz",
      },
    ],
  },

  summary: {
    heading: "まとめ｜爆裂スロットで高額賞金狙っちゃえ🔥",
    paragraphs: [
      "フレッシュカジノの入金不要フリースピンは、何と言ってもCasinoTsu限定の特別な特典💕",
      "さらに、ありふれたスロットではなく、高配当倍率を誇る人気機種を無料でプレイできる点も、CasinoTsu として特におすすめしたいポイントです。😍🎰",
      "入金不要フリースピンの後も、カジノ用（最大9万円）とスポーツブック用（最大3万円）の豪華なウェルカムボーナスが用意されています。",
    ],
    recommendedFor: [
      "ノーリスクで人気スロットを試したい方",
      "高配当スロットで一攫千金を狙いたい方",
      "新しいオンラインカジノを探している方",
      "限定ボーナスでお得に始めたい方",
    ],
  },

  faq: [
    {
      question: "フレッシュカジノの入金不要フリースピンを貰う際の注意点は何ですか？",
      answer: "CasinoTsu経由で新規登録後、入金ページまたはプロフィールページのボーナスコード欄に『JAPACASI50FS』と入力してフリースピンを申請してください。また、ボーナス申請前にメールアドレスと携帯電話の認証、アカウント登録後のプロフィールページでの個人情報、電話番号、国（日本）の登録を完了させる必要がございます。",
      character: "kyoju",
    },
    {
      question: "フレッシュカジノの入金不要フリースピンからの最大出金可能額はいくらですか？",
      answer: "入金不要フリースピンによる勝利金からの最大出金可能額は、勝利金の10倍です。",
      character: "kyoju",
    },
  ],

  author: {
    name: "Rina Okabe",
    nameJapanese: "岡部 りな",
    role: "実戦経験6年のカジノ専門家",
    avatarUrl: "/rina/avatar.png",
    bio: "2019年から6年間で80以上のカジノを実際にプレイ。¥250万以上を賭けた実体験から得た本物の知識を、失敗も成功も包み隠さず共有します。",
    authorPageUrl: "/authors/rina-okabe",
    expertise: ["オンラインカジノレビュー", "ボーナス戦略", "パチスロ風スロット", "日本市場特化"],
  },

  cta: {
    text: "今すぐフレッシュカジノでフリースピンを獲得",
    href: "https://go.casinotsu.com/go/fresh-casino:fresh-casino-exclusive?referrer_path=%2Foffers%2Ffresh-casino-exclusive",
    buttonText: "ボーナスGET",
  },

  breadcrumbs: [
    { label: "ホーム", href: "https://casinotsu.com/" },
    { label: "オファー", href: "https://casinotsu.com/offers/" },
    { label: "フレッシュカジノ限定", href: "https://casinotsu.com/offers/fresh-casino-exclusive" },
  ],

  metadata: {
    category: "exclusive-offer",
    tags: ["入金不要フリースピン", "フレッシュカジノ", "期間限定", "ジャパカジ限定", "Alien Fruits"],
    publishDate: "2025-10-10",
    lastModified: "2025-10-10",
  },
};