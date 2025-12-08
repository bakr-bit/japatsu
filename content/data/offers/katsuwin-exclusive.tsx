import Link from "next/link";
import type { OfferPageContent } from "@/components/templates/OfferDetailTemplate";

export const katsuwinExclusive: OfferPageContent = {
  hero: {
    title: "勝WINの入金不要ボーナス5,000円！",
    casino: "Katsuwin",
    casinoSlug: "katsuwin",
    description: "賭け条件はたった8倍！ 勝WINの5,000円分入金不要ボーナスで現金GETを目指せ★",
    bannerImageUrl: "https://casinotsu.com/wp-content/uploads/katsuwin_1440x320.png",
    promotionalPeriod: {
      startDate: "2025-04-22",
      endDate: "2025-12-31",
      daysRemaining: 104,
    },
    lastUpdated: "2025-04-22",
  },

  offerHighlight: {
    bonusAmount: "5,000円",
    bonusType: "入金不要ボーナス",
    wagering: "8倍",
    validity: "30日間",
    maxWinnings: "15,000円",
    bonusCode: undefined,
    featured: true,
  },

  tableOfContents: [
    { text: "勝WINのカジノ入金不要ボーナス💰【CasinoTsu限定】", url: "#intro" },
    { text: "入金不要ボーナス獲得方法", url: "#how-to-claim" },
    { text: "日本人向け🌟新カジノ・勝WIN！", url: "#casino-info" },
    { text: "勝WINでBIG WINを狙えっ😎", url: "#terms-and-conditions" },
    { text: "よくある質問", url: "#faq" },
  ],

  intro: [
    "豊富なオンラインパチンコ・パチスロゲームが遊べる日本人向けオンラインカジノ『勝WIN』が、CasinoTsu読者の皆様のために、大変お得なカジノ入金不要ボーナスを、5,000円分ご用意いたしました。",
    "さらに、この勝WINのCasinoTsu限定入金不要ボーナスは、無料で5,000円分が付与されるだけでなく、賭け条件が8倍という、非常に緩やかな設定となっております。😍",
    "これは、今すぐボーナスを獲得し、出金を目指してプレイを開始する絶好の機会と言えるでしょう。ᕦ(ò_óˇ)ᕤ🔥",
    "それでは、詳細を詳しく確認してまいりましょう。🥳🌟",
  ],

  claimSteps: [
    {
      stepNumber: 1,
      title: "アカウント登録",
      description: [
        "まず、CasinoTsuを経由して勝WINにアクセスし、「アカウント登録」ボタンをクリックしてください。✅👇",
        "下記項目をご入力の上、「アカウントを作成」をクリックしてください。",
      ],
      bullets: [
        "ユーザー名",
        "メールアドレス",
        "パスワード",
        "利用規約への同意にチェック☑️",
      ],
      imageUrl: "https://casinotsu.com/wp-content/uploads/katsuwin-register.jpg",
    },
    {
      stepNumber: 2,
      title: "メール認証",
      description: [
        "ご登録いただいたメールアドレス宛に、認証コードが送信されます。💌",
        "届いた認証コードを入力し、認証ボタンをクリックしてください。✅",
      ],
      imageUrl: "https://casinotsu.com/wp-content/uploads/katsuwin-register2.jpg",
    },
    {
      stepNumber: 3,
      title: "個人情報送信とボーナス自動付与",
      description: [
        "登録完了後、自動ログインされた画面に表示されるポップアップにて個人情報をご送信いただくと、入金不要ボーナスがアカウントに自動的に付与されます。💖🎁",
      ],
      imageUrl: "https://casinotsu.com/wp-content/uploads/katsuwin-No-deposit-bonus.jpg",
    },
  ],

  termsAndConditions: {
    heading: "入金不要ボーナスの利用規約",
    items: [
      { label: "ボーナス額", value: "5,000円" },
      { label: "賭け条件", value: "8倍" },
      { label: "対象ゲーム", value: "スロット／オンラインパチンコ・パチスロ", note: "ライブカジノおよびスポーツベット（競馬を含む）は、この入金不要ボーナスの対象外となります。" },
      { label: "最大ベット可能額", value: "625円／5ドル", note: "最大ベット可能額を超えたベットや、スロットのボーナス購入機能の利用は規約違反となります。" },
      { label: "最大出金可能額", value: "15,000円" },
      { label: "ボーナス有効期限", value: "30日間" },
    ],
    prohibitions: [
      "最大ベット可能額（625円／5ドル）を超えた金額でのベット",
      "スロットのボーナス購入機能の利用",
      "対象外ゲーム（ライブカジノ、スポーツベット）でのプレイ",
    ],
    warnings: [
      "CasinoTsu以外のサイトからご登録された場合、このボーナスは適用されません。",
    ],
  },

  casinoInfo: {
    heading: "日本人向け🌟新カジノ・勝WIN！",
    paragraphs: [
      "勝WINは、24時間日本語対応のカスタマーサポート、日本円でのプレイが可能、そしてオンラインパチンコ・スロットも楽しめるという、まさに日本のお客様のニーズに応える新しいオンラインカジノです。🥳",
      "CasinoTsu限定ボーナス以外にも、カジノ限定初回入金ボーナスや、充実したVIPプログラムもご用意しております。🌟",
      "ぜひ、お得なボーナスをご活用いただき、勝ウィンで6,000種類以上の豊富なゲームをお楽しみください。(❁´◡`❁)♪",
    ],
    rating: 7.9,
    officialUrl: "https://go.casino-tsu.com/go/katsuwin",
  },

  targetGames: {
    heading: "対象ゲームとプロバイダー",
    description: "勝WINでは、スロット、ルーレット、ブラックジャック、バカラ、ライブゲーム、クラップス＆ダイス、ケノ、スクラッチカード、競馬ゲーム、パチスロなど、6,000種類を超える豊富なゲームをご提供しております。",
    eligibleGames: [
      "スロット（入金不要ボーナス対象）",
      "オンラインパチンコ・パチスロ（入金不要ボーナス対象）",
    ],
    recommendedGames: [],
  },

  paymentMethods: {
    heading: "支払い方法と財務情報",
    depositMethods: ["Bitcoin (BTC)", "Dogecoin (DOGE)", "USD Coin (USDC)", "Ethereum (ETH)", "Ripple (XRP)", "Bitcoin Cash (BCH)", "Binance Coin (BNB)", "Tron (TRX)", "Shiba Inu (SHIB)", "Tether (USDT)", "銀行振込", "Jetonbank"],
    withdrawalMethods: ["Bitcoin (BTC)", "Dogecoin (DOGE)", "USD Coin (USDC)", "Ethereum (ETH)", "Ripple (XRP)", "Bitcoin Cash (BCH)", "Binance Coin (BNB)", "Tron (TRX)", "Shiba Inu (SHIB)", "Tether (USDT)", "銀行振込", "Jetonbank"],
    notes: [
      "出金に制限はございませんが、支払い方法によっては取引限度額が適用される場合がございます。",
      "FIAT（法定通貨）による直接的な仮想通貨購入機能もご利用いただけます。",
    ],
  },

  mobileCompatibility: {
    heading: "モバイル対応",
    description: [
      "勝WINは、スマートフォンやタブレットなどのモバイルデバイスにも完全に対応しております。",
      "専用アプリのご用意はございませんが、ウェブブラウザから直接アクセスいただくことで、PC版と同様の機能とゲーム体験をお楽しみいただけます。",
      "外出先からでもお気に入りのゲームにアクセスできるため、いつでもどこでもカジノ体験を満喫いただけます。",
    ],
  },

  strategy: {
    heading: "攻略法・注意点",
    subsections: [
      {
        subheading: "初回入金ボーナス",
        tips: [
          "100% 最大50,000円 (最低入金額2,000円、賭け条件30倍、最大出金額はボーナスの10倍、最大ベット額$5)",
          "200% 最大100,000円 (最低入金額2,000円、賭け条件40倍、最大出金額はボーナスの10倍、最大ベット額$5)",
          "50% 最大50,000円 (最低入金額2,000円、賭け条件20倍、最大出金額はボーナスの10倍、最大ベット額$5)",
          "75% 最大50,000円 (最低入金額2,000円、賭け条件25倍、最大出金額はボーナスの10倍、最大ベット額$5)",
          "150% 最大75,000円 (最低入金額2,000円、賭け条件35倍、最大出金額はボーナスの10倍、最大ベット額$5)",
        ],
      },
      {
        subheading: "サポート体制",
        tips: [
          "迅速かつプロフェッショナルなカスタマーサポートをご提供いたします。",
          "ライブチャットは24時間いつでもご利用いただけます。",
          "日本語でのサポートが提供されています。",
        ],
      },
      {
        subheading: "潜在的な問題点と制限事項",
        tips: [],
        warnings: [
          "一部のコンテンツは、日本語以外の言語で提供されている場合がございます。",
          "ご利用いただける責任あるギャンブルのオプションには限りがある可能性がございます。",
          "一部のボーナスは、ノルウェーなど特定の国ではご利用いただけない場合がございます。",
        ],
      },
      {
        subheading: "プレイヤーからのフィードバック",
        tips: [],
        warnings: [
          "出金の遅延、規約違反による賞金の没収、複数アカウントによるボーナス申請の拒否、システムメンテナンスによる出金キャンセルなどの問題が報告されています。",
          "時間経過とともに出金やサポートの質が改善される傾向も確認されています。",
          "サイトのパフォーマンスやゲーム検索の明確さに関して、いくつかの問題点が指摘されています。",
        ],
      },
    ],
  },

  similarOffers: {
    heading: "類似オファー",
    offers: [],
  },

  summary: {
    heading: "まとめ",
    paragraphs: [
      "勝WINは、特にオンラインパチンコ・パチスロをお楽しみになりたい日本のプレイヤー様にとって、大変魅力的な選択肢となる新しいオンラインカジノです。CasinoTsu限定の入金不要ボーナスは、リスクなくカジノをご体験いただける絶好の機会であり、その緩やかな賭け条件は、初心者から経験者まで幅広くおすすめできます。",
      "CasinoTsu限定の5,000円入金不要ボーナスをぜひご活用いただき、勝WINでビッグウィンを狙ってみてください！",
    ],
    recommendedFor: [
      "オンラインパチンコ・パチスロをプレイしたい方",
      "リスクを抑えてカジノを試してみたい方",
      "緩やかな賭け条件のボーナスをお探しの方",
      "日本円で快適にプレイされたい方",
    ],
  },

  faq: [
    {
      question: "勝WINの入金不要ボーナスは、全てのゲームで利用できますか？",
      answer: "勝WINのカジノ入金不要ボーナスは、対象外のゲーム（ライブカジノ、スポーツベット）ではご利用いただけません。対象ゲームはスロットおよびオンラインパチンコ・パチスロとなります。",
      character: "kyoju",
    },
    {
      question: "勝WINカジノの入金不要ボーナスは、CasinoTsu以外のサイトからも獲得できますか？",
      answer: "勝ウィンでは、通常2,000円分の入金不要ボーナスを獲得できる場合がございますが、5,000円分の入金不要ボーナスが獲得できるのはCasinoTsuからご登録いただいた場合のみとなります。",
      character: "kyoju",
    },
    {
      question: "勝WINには、入金不要ボーナス以外のボーナスもありますか？",
      answer: "はい、勝WINではCasinoTsu限定入金不要ボーナス以外にも、「ウェルカムボーナス」をはじめとする初回入金ボーナスオファーや、充実した「VIPプログラム」をご用意しております。初回入金ボーナスをお楽しみいただいた後は、ぜひそちらもご活用ください。",
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
    text: "今すぐ勝WINでボーナスを獲得",
    href: "https://go.casino-tsu.com/go/katsuwin",
    buttonText: "ボーナスGET",
  },

  breadcrumbs: [
    { label: "ホーム", href: "https://casinotsu.com/" },
    { label: "オファー", href: "https://casinotsu.com/offers" },
    { label: "Katsuwin exclusive", href: "https://casinotsu.com/offers/katsuwin-exclusive" },
  ],

  metadata: {
    category: "exclusive-offer",
    tags: ["入金不要ボーナス", "勝WIN", "CasinoTsu限定", "オンラインパチンコ"],
    publishDate: "2025-04-22",
    lastModified: "2025-04-22",
  },
};