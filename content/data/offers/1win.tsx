import Link from "next/link";
import type { OfferPageContent } from "@/components/templates/OfferDetailTemplate";

export const oneWinCasinoWelcome: OfferPageContent = {
  hero: {
    title: "1winカジノ：初回限定ボーナス還元率最大500％！さらにフリースピン70回分も進呈！",
    casino: "1win Casino",
    casinoSlug: "1win-casino",
    description: "現在注目を集める仮想通貨カジノより、大変お得な初回限定ボーナスが登場いたしました。CasinoTsuが詳しくご紹介いたします。",
    promotionalPeriod: {
      endDate: "2025-12-31",
    },
  },

  offerHighlight: {
    bonusAmount: "最大$1,025 (500%) + 70 FS",
    bonusType: "初回入金ボーナス",
    wagering: "20倍 (カジノ) / 50倍 (FS)",
    validity: "7日 (ボーナス) / 48時間 (FS)",
    maxWinnings: "ボーナス額の2倍 (初回入金) / 4,500円 (FS)",
    bonusCode: "1W2025NEW / GLCWIN / 1W500BRO",
    featured: true,
  },

  tableOfContents: [
    { text: "1winカジノの初回限定ボーナス詳細", url: "#bonus-details" },
    { text: "ウェルカムボーナス獲得方法", url: "#how-to-claim" },
    { text: "1winカジノのカジノゲーム", url: "#casino-games" },
    { text: "その他のボーナスと特典", url: "#other-bonuses" },
    { text: "よくある質問", url: "#faq" },
  ],

  intro: [
    "11,000種類以上ものカジノゲームをお楽しみいただける、注目のクリプトカジノ、1winカジノ！",
    "今回は、この1winカジノがお届けするウェルカムボーナスの詳細について、余すところなく解説させていただきます。",
    "1winカジノでは、初回から4回目のご入金まで、合計4回にわたってウェルカムボーナスを獲得することが可能です。そのボーナス還元率は驚異の最大500％に達し、CasinoTsuもその太っ腹ぶりに感心しております。🤩🌟",
  ],

  claimSteps: [
    {
      stepNumber: 1,
      title: "公式サイトへアクセス",
      description: [
        "1winカジノ公式サイトにアクセスいただき、画面右上の「登録」ボタンをクリックしてください。",
      ],
    },
    {
      stepNumber: 2,
      title: "登録フォームを入力",
      description: [
        "表示された登録フォームにて、画面の指示に従い必要事項をご入力ください。メールアドレスや電話番号による登録に加え、以下のソーシャルネットワークアカウントからもご登録いただけます。",
      ],
      bullets: [
        "Google",
        "X (Twitter)",
        "Facebook",
        "Telegram",
        "通貨の選択",
        "電話番号",
        "メールアドレス",
        "パスワード",
      ],
    },
    {
      stepNumber: 3,
      title: "プロモーションコードを入力",
      description: [
        "「プロモコードを追加」の欄に、プロモーションコード（1W2025NEW, GLCWIN, 1W500BROのいずれか）をご入力ください。",
        "重要： プロモーションコードは、アカウント登録時のみ入力可能です。登録完了後に追加で入力することはできませんので、ご注意ください。",
      ],
      bonusCode: "1W2025NEW",
    },
    {
      stepNumber: 4,
      title: "登録を完了",
      description: [
        "利用規約への同意にチェックを入れ、「登録します」ボタンをクリックしてください。これでアカウント登録は完了です。",
      ],
    },
    {
      stepNumber: 5,
      title: "ボーナスページへ移動",
      description: [
        "登録が完了しましたら、画面左側のメニューバーにございますプレゼントアイコンの「ボーナス」をクリックしてください。",
      ],
    },
    {
      stepNumber: 6,
      title: "ボーナスを受け取り入金",
      description: [
        "初回入金ボーナスが表示されている「受け取る」ボタンをクリックすると、入金画面へ遷移いたします。",
        "ご利用可能な入金方法をご選択ください。",
        "初回入金ボーナスが選択されていることを確認し、ご希望の仮想通貨をご選択の上、$20（日本円で約3,000円）以上をご入金ください。",
      ],
    },
    {
      stepNumber: 7,
      title: "ボーナス獲得完了",
      description: [
        "これにて、初回入金ボーナスとフリースピンの獲得は完了です！ボーナス資金は「フリーマネー」セクションにてご確認いただけます。",
        "さあ、1winカジノでのオンラインカジノプレイを存分にお楽しみくださいませ。(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
      ],
    },
  ],

  characterDialogues: [
    {
      character: "cocomo",
      characterName: "ココモ",
      avatarUrl: "https://casinotsu.com/images/svg/jp/mascots/happy/cocomo.svg",
      message: "公式サイトによりますと、ボーナスを獲得された後、「メインアカウントの残高がスロットの最低ベット額を下回った際に、獲得したボーナスが利用可能になる」とのことです。これは、初回入金後にボーナスを獲得しても、すぐに資金として利用できるわけではない、という点にご留意ください。",
    },
    {
      character: "casiko",
      characterName: "カジ子",
      avatarUrl: "https://casinotsu.com/images/svg/jp/mascots/surprised/casiko.svg",
      message: "ウェルカムボーナスも、初回入金フリースピンも、有効期限が比較的短く設定されております。お時間を置かず、速やかにご利用いただくことをお勧めいたします。せっかくの初回限定特典を無駄にしないよう、ご注意ください。♪",
    },
  ],

  termsAndConditions: {
    heading: "1winカジノのウェルカムボーナス・フリースピン利用規約",
    items: [
      { label: "対象者", value: "新規登録者様限定" },
      { label: "ボーナスコード", value: "1W2025NEW / GLCWIN / 1W500BRO のいずれか一つ", note: "新規登録時のみ入力可能です。" },
      {
        label: "ウェルカムボーナス詳細",
        value: "初回から4回目の入金まで、最大$1,025のボーナス",
        breakdown: [
          "初回入金: 200％ (最大$250)",
          "2回目入金: 150％ (最大$250)",
          "3回目入金: 100％ (最大$250)",
          "4回目入金: 50％ (最大$275)",
        ],
      },
      { label: "最低入金額", value: "$20（日本円で約3,000円）" },
      { label: "ボーナス賭け条件", value: "カジノゲーム: 20倍", note: "スポーツベッティング: オッズ3.00以上でのベットが条件となります。ボーナス資金は段階的にリアルマネーに変換されます。" },
      { label: "ボーナス有効期限", value: "7日間" },
      { label: "ボーナス最大出金可能額", value: "初回入金ボーナス額の2倍" },
      { label: "フリースピン回数", value: "70回分" },
      { label: "フリースピン賭け条件", value: "勝利金に対し50倍" },
      { label: "フリースピン有効期限", value: "48時間" },
      { label: "フリースピン最大出金可能額", value: "4,500円" },
      { label: "フリースピン勝利金有効期限", value: "24時間" },
      { label: "フリースピン対象ゲーム", value: "Quickspin社提供の「Crown of Valor」「Volcano Riches」「Fairy Gate」「Ghost Glyph」「Hidden Valley」「Hot Sync」「Illuminous」" },
    ],
    prohibitions: [],
    warnings: [
      "ボーナスコードは2025年12月31日までご利用いただけます。",
      "ボーナス資金は、「フリーマネー」セクションにてご確認いただけます。",
      "2回目から4回目の入金ボーナス詳細は、初回入金ボーナス獲得後にボーナスページにて確認できます。",
      "メインアカウントの残高がスロットの最低ベット額を下回った際に、獲得したボーナスが利用可能になります。",
    ],
  },

  casinoInfo: {
    heading: "1winカジノの膨大なカジノゲームを遊び尽くそう！",
    paragraphs: [
      "1winカジノは2016年のオープン以来、11,000種類を超える豊富なカジノゲームや、豪華特典が用意された多彩なカジノオファーで、多くのプレイヤーから支持を得ているクリプトカジノです。",
      "運営会社はMavi N.V.、設立は2016年で、キュラソーライセンスを保有しています。19言語以上に対応し、SSL暗号化技術によりプレイヤーのデータは安全に保護されています。",
    ],
    officialUrl: "https://go.casinotsu.com/go/1win",
  },

  targetGames: {
    heading: "対象ゲームとユニークな特徴",
    description: "1winカジノでは、スロット以外にも様々なカテゴリーのゲームを提供しております。",
    eligibleGames: [
      "オリジナルゲーム (プレイヤー対戦型ポーカーなど)",
      "1win限定ライブカジノテーブル",
      "スロット (ほとんどのゲームでデモモード利用可能)",
      "Eスポーツ",
      "1Win TV (映画などのストリーミング視聴)",
    ],
    recommendedGames: [
      { name: "Crown of Valor" },
      { name: "Volcano Riches" },
      { name: "Fairy Gate" },
      { name: "Ghost Glyph" },
      { name: "Hidden Valley" },
      { name: "Hot Sync" },
      { name: "Illuminous" },
    ],
  },
  
  otherOffers: {
    heading: "その他のボーナスと特典",
    description: "1winカジノでは、ウェルカムボーナス以外にも、プレイヤーの皆様にお楽しみいただける様々なボーナスや特典をご用意しております。😍🔥",
    offers: [
      { name: "1Winコイン", description: "ソーシャルメディア登録やアプリインストールなどで獲得でき、リアルマネーと交換可能なシステムです。" },
      { name: "エクスプレスボーナス", description: "5つ以上のイベントを含むaccumulatorベットに対して、7%から15%のボーナスが付与されます。" },
      { name: "入金不要ボーナス", description: "モバイルアプリのインストールで$100、通知の有効化で$20の入金不要ボーナスが提供される場合があります（内容は変更される可能性がございます）。" },
      { name: "デイリー抽選会", description: "リアルマネーや1Winコインが当たるチャンスがございます。" },
      { name: "リーダーボード/トーナメント", description: "毎日、毎週開催されるトーナメントに参加して、賞金獲得を目指しましょう。" },
      { name: "キャッシュバック", description: "毎週最大30％のキャッシュバックボーナスをご利用いただけます。" },
    ],
  },

  paymentMethods: {
    heading: "入出金方法",
    depositMethods: ["仮想通貨（ビットコイン、イーサリアムなど）", "その他（ご利用可能な決済方法は随時更新されます）"],
    withdrawalMethods: ["銀行カード (処理時間1～2日)", "電子ウォレット (Advcash, Skrill, Neteller, Perfect Moneyなど)", "モバイル送金"],
    notes: [
      "出金前に、アカウント認証（KYC）が必要となります。",
    ],
  },

  mobileCompatibility: {
    heading: "モバイル対応",
    description: [
      "1winカジノは、モバイル用、PC用、両方の専用アプリを完備しております。",
      "いつでもどこでもオンラインカジノを楽しみたい方におすすめです。",
    ],
  },

  strategy: {
    heading: "攻略法・注意点",
    subsections: [
      {
        subheading: "ボーナス活用法",
        tips: [
          "ボーナスはメインアカウントのリアルマネー残高が最低ベット額を下回ってから利用可能になるため、資金管理に注意しましょう。",
          "フリースピンの有効期限は48時間、勝利金の有効期限は24時間と非常に短いため、獲得後は速やかにプレイしてください。",
          "スポーツベットで利用する場合、オッズ3.00以上のベットのみが賭け条件にカウントされます。",
        ],
      },
      {
        subheading: "注意事項",
        tips: [
          "プロモーションコードはアカウント登録時にしか入力できません。忘れないように注意してください。",
          "出金には本人確認（KYC）が必須です。事前に準備しておくとスムーズです。",
          "2回目以降の入金ボーナスの詳細は、前のボーナスを獲得した後にボーナスページで確認する必要があります。",
        ],
      },
    ],
  },

  summary: {
    heading: "まとめ",
    paragraphs: [
      "1winカジノの初回入金ボーナスは、最大500％（$1,025）に加えてフリースピン70回分も獲得できる、非常に豪華なオファーです。11,000種類以上の豊富なゲームラインナップや、専用アプリ、オリジナルゲームなど、ユニークな特徴も満載です。",
      "仮想通貨をメインで利用するプレイヤーにとって、非常に魅力的なオンラインカジノと言えるでしょう。ぜひこの機会に、お得なウェルカムボーナスを活用して1winカジノを体験してみてください。",
    ],
    recommendedFor: [
      "高額なウェルカムボーナスを探している方",
      "仮想通貨でオンラインカジノをプレイしたい方",
      "1万種類以上の豊富なゲームで遊びたい方",
      "専用のモバイルアプリで快適にプレイしたい方",
      "オリジナルゲームやEスポーツにも興味がある方",
    ],
  },

  faq: [
    {
      question: "1winカジノには、入金不要ボーナスはありますか？",
      answer: "1winカジノでは現在、モバイルアプリのインストールで$100、通知の有効化で$20の入金不要ボーナスが提供されることがございます。内容は変更される場合があるため、最新の情報につきましては公式サイトのプロモーションページをご確認ください。",
      character: "oka-kyoju",
    },
    {
      question: "1winカジノの2回目入金以降のウェルカムボーナス詳細は、どちらで確認できますか？",
      answer: "2回目入金以降のウェルカムボーナス詳細は、初回入金ボーナスを獲得された後に、ボーナスページにてご確認いただけます。ボーナスを獲得するごとに、次のボーナスの詳細が確認できるようになります。",
      character: "oka-kyoju",
    },
    {
      question: "1winカジノでは、日本円を入金することができますか？",
      answer: "1winカジノでは、現在、入出金は主に仮想通貨にて行われております。法定通貨（日本円、ドルなど）での直接入出金につきましては、ご利用いただける決済方法が限定される場合がございます。最新の対応通貨につきましては、公式サイトの入出金ページをご確認ください。",
      character: "oka-kyoju",
    },
    {
      question: "スポーツベットの賭け条件について教えてください。",
      answer: "スポーツベッティングでウェルカムボーナスをご利用いただく場合、オッズ3.00以上でのベットが賭け条件としてカウントされます。ボーナス資金は、ベットが成立するにつれて段階的にリアルマネーへと変換され、日ごとにアカウントへ反映されます。",
      character: "oka-kyoju",
    },
  ],
  
  customerSupport: {
    heading: "カスタマーサポート",
    methods: [
      { method: "電話", details: "専用ホットラインあり" },
      { method: "ライブチャット", details: "24時間対応" },
      { method: "Eメール", details: "contact@1win.xyz または support@1win.xyz" },
    ],
  },

  cta: {
    text: "👉 1winカジノで遊んでみる！",
    href: "https://go.casinotsu.com/go/1win",
    buttonText: "ボーナスGET",
  },

  breadcrumbs: [
    { label: "ホーム", href: "https://casinotsu.com/" },
    { label: "オファー", href: "https://casinotsu.com/offers/" },
    { label: "1winカジノ初回ボーナス", href: "https://casinotsu.com/offers/1win-casino-welcome-bonus" },
  ],

  metadata: {
    category: "welcome-offer",
    tags: ["初回入金ボーナス", "1winカジノ", "仮想通貨カジノ", "フリースピン"],
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