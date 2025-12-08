import Link from "next/link";
import type { OfferPageContent } from "@/components/templates/OfferDetailTemplate";

export const eldoahCasinoExclusive: OfferPageContent = {
  hero: {
    title: "エルドアカジノ限定！CasinoTsu経由で登録すると3,000円をプレゼント",
    casino: "エルドアカジノ",
    casinoSlug: "eldoah",
    description: "CasinoTsuからエルドアカジノへご登録いただいた皆様に、大変お得な登録ボーナスを無料で進呈いたします。💖",
    bannerImageUrl: "https://casinotsu.com/images/eldoah_960x495-1.png",
    promotionalPeriod: {
      startDate: "2025-04-01",
      endDate: "2025-09-30",
      daysRemaining: 183,
    },
    lastUpdated: "2025-04-01",
  },

  offerHighlight: {
    bonusAmount: "3,000円",
    bonusType: "入金不要ボーナス",
    wagering: "1倍",
    validity: "1ヶ月",
    maxWinnings: "30,000円",
    bonusCode: "japacasi3000",
    featured: true,
  },

  tableOfContents: [
    { text: "CasinoTsu限定 入金不要ボーナス3,000円", url: "#no-deposit-bonus" },
    { text: "CasinoTsu限定 初回入金70%キャッシュバック", url: "#cashback-bonus" },
    { text: "ボーナス獲得方法", url: "#how-to-claim" },
    { text: "よくある質問", url: "#faq" },
  ],

  intro: [
    "ライブカジノで6年連続利用満足度ナンバー1に輝く「エルドアカジノ（Eldoah Casino）」は、CasinoTsuが自信を持って推薦するオンラインカジノです👑",
    "業界トップクラスの出金スピード、そして面倒な出金条件なしのボーナスやキャンペーンが豊富なことから、ハイローラーの皆様からも絶大な支持を得ています💖",
    "この度、エルドアカジノでは、CasinoTsuからご登録いただいたお客様限定で、入金不要ボーナスをプレゼントする特別な機会をご用意いたしました。",
    "しかも、今だけの限定オファーとして、2025年4月1日から9月30日までの期間、ボーナス額が通常の1.5倍に増額されています(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
    "カジノゲームはもちろん、スポーツブックでもご利用いただける現金チップ3,000円分をプレゼントいたします😍🔥✨",
    "さらに、こちらのボーナスの賭け条件はわずか1倍💕",
    "人気のライブカジノ・ゲームショーや最新スロットを、この機会にぜひ無料でご体験ください🤩",
    "ご登録の際には、プロモーションコード欄にボーナスコード「japacasi3000」をご入力いただくことをお忘れなく～♪",
  ],

  claimSteps: [
    {
      stepNumber: 1,
      title: "アカウント登録",
      description: [
        "まず、CasinoTsuからエルドアカジノの登録ページへお進みいただき、画面右上の『登録』ボタンをクリックしてください。",
        "画面の指示に従い、以下の情報をご入力ください。メールアドレス認証後、「入金不要ボーナス」の項目にて、ボーナスコード「japacasi3000」を忘れずに入力し、「サインアップ」をクリックして登録を完了します。",
      ],
      bullets: [
        "ID（ユーザー名）",
        "パスワード",
        "電話番号",
        "氏名",
        "生年月日",
        "メールアドレス",
      ],
      imageUrl: "https://casinotsu.com/images/eldoah-register-1.jpg",
      note: "ご登録時にプロモーションコード欄へボーナスコード「japacasi3000」を必ずご入力ください。",
      bonusCode: "japacasi3000",
    },
    {
      stepNumber: 2,
      title: "入金不要ボーナスを受け取る",
      description: [
        "登録完了後、アカウント内の「クーポン利用」から、入金不要ボーナスを受け取ってください🎉",
      ],
    },
    {
      stepNumber: 3,
      title: "無料でゲームを楽しむ",
      description: [
        "入金不要ボーナスを使って、無料でカジノゲームをお楽しみください🤩🎰",
      ],
    },
    {
      stepNumber: 4,
      title: "初回入金を行う",
      description: [
        "無料ボーナスでのプレイが終了したら、初回入金キャッシュバックボーナスのために、入金ページへお進みください。",
        "入金ページにて、決済方法（ビットコイン, Payz, Sticpay, 銀行振込, クレジットカードのみ対象）と、ゲームカテゴリーで「カジノゲーム」を選択し、入金を完了します。",
      ],
      imageUrl: "https://casinotsu.com/images/Eldoah-Payment-methods-crypto.jpg",
      note: "「スポーツベット」へのご入金はキャッシュバック対象外となります。",
    },
    {
      stepNumber: 5,
      title: "キャッシュバックを申請する",
      description: [
        "初回入金後、お好きなゲームでプレイいただき、残高が100円未満になりましたら、サポートへクーポンコード【ジャパカジ70】をご連絡いただき、キャッシュバック申請を行ってください💪",
      ],
      bonusCode: "ジャパカジ70",
    },
  ],

  characterDialogues: [
    {
      character: "casiko",
      characterName: "カジ子",
      avatarUrl: "https://casinotsu.com/svg/jp/mascots/happy/casiko.svg",
      message: "ボーナスを「スポーツ」でご利用になる場合、賭け条件をクリアするまで「カジノゲーム」への変更はできません。ボーナスのご利用方法については、お受け取り前にご決定ください✅",
    },
    {
      character: "kyoju",
      characterName: "教授",
      avatarUrl: "https://casinotsu.com/svg/jp/mascots/happy/oka-kyoju.svg",
      message: "この3,000円の入金不要ボーナスは、2025年4月1日から9月30日までの期間限定となっております！この機会をぜひお見逃しなく😤 お試しで遊べる無料ボーナスですので、一切損をすることはありません♪ 貰わない理由が見当たらないほど、お得なチャンスですヾ(≧▽≦*)o",
    },
    {
      character: "casiko",
      characterName: "カジ子",
      avatarUrl: "https://casinotsu.com/svg/jp/mascots/happy/casiko.svg",
      message: "入金不要ボーナス：ご登録時にプロモーションコード欄へボーナスコード「japacasi3000」をご入力いただいた場合にのみ、進呈されます。",
    },
  ],

  termsAndConditions: {
    heading: "入金不要ボーナスの利用規約",
    items: [
      { label: "提供期間", value: "2025年4月1日～9月30日" },
      { label: "ボーナス額", value: "3,000円" },
      { label: "賭け条件", value: "1倍（ボーナス額＋入金額）", note: "勝利金出金のために入金した額にも1倍の賭け条件が適用されます。" },
      { label: "有効期限", value: "1ヶ月" },
      { label: "勝利金の出金上限額", value: "30,000円" },
      { label: "ボーナスコード", value: "japacasi3000", note: "ご登録時にプロモーションコード欄へご入力ください。" },
      { label: "進呈方法", value: "ボーナスは「クーポン」として進呈され、ウォレットにて換金いただけます。" },
    ],
    prohibitions: [
      "他のプロモーションとの併用はできません。",
    ],
    warnings: [
      "勝利金の出金をご希望される場合、1,000円以上の入金と本人確認（KYC）が必須となります。また、ご入金額の1倍以上のベットが必要となります。",
      "「スポーツ」でボーナスをご利用の場合、賭け条件クリアまで「カジノゲーム」への変更はできません。",
    ],
  },
  
  casinoInfo: {
    heading: "ライブカジノで6年連続利用満足度No.1！エルドアカジノ",
    paragraphs: [
      "業界トップクラスの出金スピード、そして面倒な出金条件なしのボーナスやキャンペーンが豊富なことから、ハイローラーの皆様からも絶大な支持を得ています💖",
    ],
    rating: 4.8,
    officialUrl: "https://go.casinotsu.com/go/eldoah-casino",
  },

  targetGames: {
    heading: "対象ゲーム",
    description: "入金不要ボーナスは、カジノゲームとスポーツブックの両方で利用可能です。人気のライブカジノやスロットをお試しください。",
    eligibleGames: [
      "カジノゲーム",
      "スポーツブック",
      "ライブカジノ・ゲームショー",
      "スロット",
    ],
    recommendedGames: [],
  },

  paymentMethods: {
    heading: "入出金方法",
    depositMethods: ["ビットコイン", "Payz", "Sticpay", "銀行振込", "クレジットカード（Visa）"],
    withdrawalMethods: ["ビットコイン", "Payz", "Sticpay", "銀行振込"],
    notes: [
      "初回入金70%キャッシュバックは、ビットコイン、Payz、Sticpay、銀行振込、クレジットカードでのご入金のみが対象となります。",
    ],
  },

  mobileCompatibility: {
    heading: "モバイル対応",
    description: [
      "エルドアカジノは、スマートフォンやタブレットなどのモバイルデバイスに完全対応しており、専用アプリなしでブラウザから快適にプレイできます。",
    ],
  },

  strategy: {
    heading: "限定ボーナス活用法 & 詳細",
    subsections: [
      {
        subheading: "【期間限定】初回入金70％キャッシュバック詳細",
        tips: [
          "CasinoTsu限定で、初回入金キャッシュバックの還元率が通常50％から70％へアップ中！(2025年4月1日～9月30日)",
          "初回入金後に万が一負けてしまわれた場合でも、最大50,000円を還元いたします。",
          "このキャッシュバックも賭け条件は1倍です。アカウントの残高が100円未満となりましたら、サポートへクーポンコード【ジャパカジ70】をご提示ください。",
          "ボーナス額: 最大50,000円",
          "賭け条件: 1倍（キャッシュバック額）",
          "ベット上限: ライブゲームで10,000円",
          "対象入金方法: ビットコイン、Payz、Sticpay、銀行振込、クレジットカード（Visa）",
          "対象外: スポーツベットへのご入金は対象外となります。",
          "申請方法: 残高が100円未満になった時点で、チャットまたはメール（support@eldoah.com）にて【ジャパカジ70】のクーポンコードを提示。",
        ],
        warnings: [
          "初回入金のみ対象となります。",
          "賭け条件クリア前に、出金または「スポーツベット」への資金移動はできません。",
          "他の初回入金限定プロモーションとの併用はできません。",
        ],
      },
      {
        subheading: "ボーナス活用戦略",
        tips: [
          "賭け条件1倍を活かす：入金不要ボーナス、キャッシュバック共に賭け条件が1倍と非常に低いため、条件クリアと出金が現実的です。",
          "リスクフリーで試す：まずは3,000円の入金不要ボーナスでエルドアカジノのゲーム性を試し、その後キャッシュバックを利用して本格的にプレイするのがおすすめです。",
          "ゲーム選択：ボーナスを「スポーツ」で使うか「カジノ」で使うか事前に決めましょう。一度選択すると賭け条件クリアまで変更できません。",
        ],
      },
    ],
  },

  similarOffers: {
    heading: "エルドアカジノがお好きな方におすすめのカジノもチェック",
    offers: [],
  },

  summary: {
    heading: "まとめ",
    paragraphs: [
      "エルドアカジノでは、ご登録いただくだけで獲得できる入金不要ボーナスと、初回入金後の損失をサポートするキャッシュバックボーナスの両方が、驚くべき賭け条件1倍という好条件で提供されています。",
      "入金不要ボーナスで勝利金の上限が30,000円、初回入金キャッシュバックでは損失額の70％が最大50,000円まで還元されるため、リスクを最小限に抑えてカジノをお試しになりたいプレイヤーにとって非常に魅力的な条件と言えるでしょう。",
      "CasinoTsuは、エルドアカジノの太っ腹なボーナスキャンペーンを、ぜひこの機会にご活用いただき、お得にカジノプレイをお楽しみいただくことをお勧めいたします(❁´◡`❁)",
    ],
    recommendedFor: [
      "リスクなしでオンラインカジノを始めたい方",
      "賭け条件が緩いボーナスを探している方",
      "初回入金の損失を抑えたいハイローラーの方",
      "出金スピードの速いカジノを探している方",
      "ライブカジノやスポーツベットを楽しみたい方",
    ],
  },

  faq: [
    {
      question: "エルドアカジノの入金不要ボーナスに関する注意点は何ですか？",
      answer: "こちらのボーナスは、ご登録時にプロモーションコード欄へボーナスコード「japacasi3000」をご入力いただいた場合にのみ獲得可能です。また、勝利金の出金には、1,000円以上の入金と本人確認が必要となります。",
      character: "kyoju",
    },
    {
      question: "エルドアカジノの入金不要ボーナスの特筆すべき点は何ですか？",
      answer: "こちらのボーナスは、賭け条件が1倍と非常に緩く、出金しやすいのが特徴です。入金不要ボーナスで賭け条件1倍という条件は珍しく、カジノ初心者の方や、リスクを抑えたい方にとって、エルドアカジノをお試しいただく絶好の機会と言えるでしょう。",
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
    text: "今すぐエルドアカジノでボーナスを受け取る！",
    href: "https://go.casinotsu.com/go/eldoah-casino",
    buttonText: "ボーナスGET",
  },
  
  breadcrumbs: [
    { label: "ホーム", href: "https://casinotsu.com/" },
    { label: "オファー", href: "https://casinotsu.com/offers/" },
    { label: "エルドアカジノ限定", href: "https://casinotsu.com/offers/eldoah-exclusive" },
  ],

  metadata: {
    category: "exclusive-offer",
    tags: ["入金不要ボーナス", "エルドアカジノ", "期間限定", "CasinoTsu限定", "キャッシュバック"],
    publishDate: "2025-04-01",
    lastModified: "2025-04-01",
  },
};