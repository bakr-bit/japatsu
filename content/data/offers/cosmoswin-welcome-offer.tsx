import Link from "next/link";
import type { OfferPageContent } from "@/components/templates/OfferDetailTemplate";

export const cosmoswinWelcomeOffer: OfferPageContent = {
  hero: {
    title: "コスモスウィンの最大50％キャッシュバック最大10,000ドル！《停止中》",
    casino: "Cosmoswin",
    casinoSlug: "cosmoswin",
    description: "宇宙をテーマにしたユニークなオンラインカジノ、コスモスウィンでは、初回入金から3日間限定で、最大50％、10,000ドルという破格のキャッシュバックオファーを提供しています。CasinoTsuは、この魅力的なキャンペーンの獲得方法や条件、そしてコスモスウィンのカジノとしての特徴について詳しく解説いたします。",
    bannerImageUrl: "https://www.casinotsu.com/wp-content/uploads/cosmoswin_960x495.png",
    promotionalPeriod: {
      startDate: "2024-08-28",
      endDate: "2025-04-24",
      daysRemaining: 0,
    },
    lastUpdated: "2024-08-31",
  },

  offerHighlight: {
    bonusAmount: "最大$10,000",
    bonusType: "キャッシュバック",
    wagering: "なし",
    validity: "参加表明後3日間",
    maxWinnings: "$10,000",
    bonusCode: null,
    featured: true,
  },

  tableOfContents: [
    { text: "スペシャルオファー詳細", url: "#offer-details" },
    { text: "キャッシュバック獲得方法", url: "#how-to-claim" },
    { text: "コスモスウィンとは？", url: "#casino-info" },
    { text: "注意点と攻略法", url: "#strategy" },
    { text: "まとめ", url: "#summary" },
    { text: "よくある質問", url: "#faq" },
  ],

  intro: [
    "宇宙がテーマの仮想通貨特化型 オンラインカジノ、 Cosmoswin（コスモスウィン）では、 初回入金から3日間限定 で超豪華 最大50%のキャッシュバック が貰えちゃいます！",
    "最大還元額はなんと、 10,000ドル！ 日本円で約150万円（2024年8月時点）と、大変魅力的な内容です。",
  ],

  claimSteps: [
    {
      stepNumber: 1,
      title: "アカウント登録",
      description: [
        "まずは、CasinoTsuからコスモスウィンの登録ページへお進みください。💨",
        "メールアドレスとパスワードを入力して、アカウントを登録してください。✅",
      ],
    },
    {
      stepNumber: 2,
      title: "ボーナスショップへアクセス",
      description: [
        "コスモスウィンにログインしたら、ページ右上の「ボーナスショップ」をクリックします。",
      ],
      imageUrl: "https://www.casinotsu.com/wp-content/uploads/Untitled-design-1.png",
    },
    {
      stepNumber: 3,
      title: "ボーナスを選択",
      description: [
        "最大50％キャッシュバックの「今すぐボーナスをゲット」をクリックします。",
      ],
      imageUrl: "https://www.casinotsu.com/wp-content/uploads/Untitled-design-3.png",
    },
    {
      stepNumber: 4,
      title: "ボーナスを有効化",
      description: [
        "キャッシュバックの内容を確認したら、「ボーナスゲット」をクリック！",
        "これでキャッシュバックの申請は完了です。大変シンプルですね。😊",
        "あとはお好きなゲームで遊ぶだけです！(๑•̀ㅂ•́)و✧",
      ],
      imageUrl: "https://www.casinotsu.com/wp-content/uploads/Untitled-design-2.png",
    },
  ],

  characterDialogues: [
    {
      character: "casiko",
      characterName: "カジ子",
      avatarUrl: "https://img.casinotsu.com/svg/jp/mascots/happy/casiko.svg",
      message: "合計ベット回数が一日20回未満の場合は、キャッシュバック対象外になってしまうため、ご注意ください。",
    },
    {
      character: "cocomo",
      characterName: "ココモ",
      avatarUrl: "https://img.casinotsu.com/svg/jp/mascots/happy/cocomo.svg",
      message: "このキャッシュバックプロモーションに申請できるのは、お一人様一回限りです。アカウントを複数作成して申請された場合、対象外となる可能性がございます。",
    },
    {
      character: "cocomo",
      characterName: "ココモ",
      avatarUrl: "https://img.casinotsu.com/svg/jp/mascots/happy/cocomo.svg",
      message: "キャッシュバック有効期限のカウントは、「ボーナスをゲット」のボタンを押してから3日間です。入金してからではありませんので、ご注意ください。",
    },
  ],

  termsAndConditions: {
    heading: "利用規約",
    items: [
      { label: "キャッシュバック率", value: "損失が$11以上: 20%, $100以上: 30%, $500以上: 50%" },
      { label: "賭け条件", value: "なし（リアルマネーとして反映）" },
      { label: "有効期限", value: "ボーナスショップで参加表明後3日間" },
      { label: "対象ゲーム", value: "全ゲーム（除外ゲームなし）" },
      { label: "最大キャッシュバック額", value: "$10,000（3日間合計）" },
      { label: "最低キャッシュバック額", value: "$5" },
      { label: "申請条件", value: "入金前にボーナスショップから参加表明が必要" },
      { label: "最低ベット回数", value: "1日あたり合計20回以上のベットが必要" },
    ],
    prohibitions: [
      "お一人様一回限りの申請です。複数アカウントでの申請は対象外となる可能性があります。",
    ],
    warnings: [
      "キャッシュバックオファーとウェルカムボーナスは併用できません。",
      "集計期間は日本時間0時〜23時59分までとなります。",
      "毎日午前0時（日本時間）にチェックされ、その後に反映されます。",
    ],
    additionalInfo: {
        heading: "追加のウェルカムボーナス情報",
        description: "コスモスウィンでは、このキャッシュバックオファーに加えて、さらに魅力的なウェルカムボーナスパッケージも提供しています。",
        bonuses: [
            {
                name: "スーパーノヴァ・ウェルカムボーナス",
                details: "100%マッチボーナスで最大20,000ドル、さらに100回のフリースピンが付与されます。",
            },
            {
                name: "オリオン座のベルトパッケージ",
                details: "初回から3回目の入金にかけて、段階的にボーナスが付与されるパッケージです。",
            }
        ],
        note: "これらのウェルカムボーナスには通常の賭け条件（ボーナス額と入金額の40倍）が適用され、ボーナス資金での最大ベット額は5ドルとなります。また、ボーナスには7日から14日間の有効期限が設定されています。キャッシュバックオファーとウェルカムボーナスは併用できません。"
    }
  },

  casinoInfo: {
    heading: "コスモスウィンとは？",
    paragraphs: [
      "2018年に誕生したコスモスウィンは、プロバイダー30社以上、4,600種類以上の豊富なゲームが楽しめる、仮想通貨特化型のカジノです(●’◡’●)",
      "決済方法も、7種類の仮想通貨だけでなく、4つの電子ウォレットからクレジットカードまで使用可能と、かなり豊富です💖",
      "さらに、最大10,000ドルのキャッシュバックのほかにも、「毎週貰えるフリースピン50回分」や、「毎週貰えるリロードボーナス」、「最大1,000ドルのウェルカムボーナス（※キャッシュバックとの併用不可）」など、多彩なオファーが満載です🎁💕",
      "コスモスウィンは、Final Enterprises N.V. によって運営されており、キュラソー政府発行のマスターライセンス番号1668/JAZを取得しています。"
    ],
    rating: null,
    officialUrl: "https://go.casinotsu.com/go/cosmoswin",
  },

  targetGames: {
    heading: "豊富なゲームライブラリ",
    description: "コスモスウィンは、約2,500～3,500種類のゲームを提供しています。（※記事冒頭の4,600種類以上という表記は、調査段階で一部数値に差異が見られました。正確な数は変動する可能性があります。）",
    eligibleGames: [
      "スロット（ビデオスロット、クラシックスロット）",
      "ライブカジノ（ブラックジャック、ルーレット、バカラ、ポーカー、TVショーゲーム）",
      "テーブルゲーム（ブラックジャック、ルーレット、バカラ、ビデオポーカー、キノ、ビンゴ）",
      "クリプトゲーム（Dice, Crash, Plinko）",
    ],
    providers: ["1x2 Gaming", "Amatic", "Betsoft", "Booming Games", "BTG", "CT Gaming", "Elk Studios", "Endorphina", "Evolution Gaming", "Evoplay", "Ezugi", "Fugaso", "Gameart", "Golden Rock Studios", "Habanero", "iSoftbet", "Mascot", "Microgaming", "Netent", "Red Rake", "Spinomenal", "Quickspin", "Thunderkick"],
    recommendedGames: [],
  },

  paymentMethods: {
    heading: "入出金方法の詳細",
    depositMethods: ["Bitcoin (BTC)", "Ethereum (ETH)", "Litecoin (LTC)", "Dogecoin (DOGE)", "DAI", "Bitcoin Cash (BCH)", "Shiba Inu (SHIB)", "Tether (USDT)", "USD Coin (USDC)", "電子ウォレット", "クレジットカード"],
    withdrawalMethods: ["仮想通貨"],
    notes: [
      "記事では電子ウォレットやクレジットカードも利用可能と記載されていますが、調査によれば、コスモスウィンは主に仮想通貨での取引に焦点を当てており、仮想通貨以外の決済オプションの有無については、利用前に公式サイトで確認することが推奨されます。",
      "出金処理時間はKYC（本人確認）完了後、通常1〜2時間で処理されます。",
      "最低出金額は$10です。",
      "ベース通貨はUSD（米ドル）が基本通貨として使用されます。"
    ],
  },

  mobileCompatibility: {
    heading: "モバイル対応",
    description: [
      "コスモスウィンは、スマートフォンやタブレットからでも快適にプレイできるように、ウェブサイトは完全にモバイル最適化されています。",
      "専用のアプリはありませんが、ブラウザからアクセスするだけで、PC版と遜色ないゲーム体験が可能です。",
      "ただし、一部のユーザーからは、デスクトップサイトの最適化に関する指摘や、時折発生するバグについて言及されています。",
    ],
  },

  strategy: {
    heading: "プレイする上での注意点と攻略法",
    subsections: [
      {
        subheading: "注意点",
        tips: [
          "マスターライセンスの留意点: キュラソーのマスターライセンスは広範なカジノに発行されており、利用規約や評判などを十分に確認することが重要です。",
          "ベース通貨の混乱: USDが基本通貨ですが、仮想通貨での取引が中心となるため、為替レートの変動には注意が必要です。",
          "デスクトップサイトの品質: 一部のユーザーからは、デスクトップサイトの最適化や、時折発生するバグについて指摘があります。",
          "ボーナスとキャッシュバックの選択: 最大20,000ドルのウェルカムボーナスと最大10,000ドルのキャッシュバックは併用できません。プレイスタイルに合わせて選択しましょう。",
        ],
        warnings: [
          "規制国: アメリカ合衆国をはじめ、多数の国からのプレイヤーは利用できません。お住まいの国からアクセスが可能か、事前に確認しましょう。",
        ],
      },
      {
        subheading: "攻略法",
        tips: [
          "キャッシュバックの最大化: 損失額が500ドル以上になるようにプレイを調整することで、最大の50%キャッシュバックを狙いましょう。ただし、無理なプレイは禁物です。",
          "ボーナスショップの活用: キャッシュバックだけでなく、ボーナスショップでは他のプロモーションも入手できる可能性があります。定期的にチェックしましょう。",
          "入金制限の活用: 責任あるギャンブルのため、事前にカスタマーサポートに連絡して入金制限を設定することを推奨します。",
        ],
      },
    ],
  },

  similarOffers: {
    heading: "類似オファー",
    offers: [
      {
        casino: "他のオンラインカジノ",
        casinoSlug: "offers",
        feature: "CasinoTsuでは、様々なカジノのウェルカムオファーやキャッシュバックボーナスを比較・検討できます。",
        offerLink: "https://casinotsu.com/offers/",
      },
    ],
  },

  summary: {
    heading: "まとめ",
    paragraphs: [
      "コスモスウィンは、仮想通貨をメインに楽しみたいプレイヤーにとって、ユニークで魅力的な選択肢となるオンラインカジノです。特に、初回入金から3日間限定の最大50%・10,000ドルのキャッシュバックオファーは、リスクを抑えながらプレイしたい初心者から、より多くの資金で遊びたい経験豊富なプレイヤーまで、幅広い層にアピールするでしょう。",
      "ただし、マスターライセンスに関する留意点や、デスクトップサイトの最適化、ボーナスとキャッシュバックの選択など、いくつか注意すべき点もあります。それらを理解した上で、コスモスウィンのユニークな体験を楽しんでみてください。",
    ],
    recommendedFor: [
      "仮想通貨での入出金をスムーズに行いたいプレイヤー",
      "リスクを抑えながらカジノを楽しみたいプレイヤー",
      "高額なキャッシュバックを期待するプレイヤー",
      "多様なゲームプロバイダーのゲームを遊びたいプレイヤー",
    ],
  },

  faq: [
    {
      question: "一日に受け取れる最大キャッシュバック額は？",
      answer: "一日に受け取れる最大キャッシュバック額は「10,000ドル」です。このオファーで受け取れる最大キャッシュバック額は、3日合わせて10,000ドルなので、1日目のキャッシュバックで10,000ドルを受け取った場合、2日目、3日目はそれ以上キャッシュバックを受け取ることができません。",
      character: "oka-kyoju",
      characterName: "オカ教授",
      avatarUrl: "https://img.casinotsu.com/svg/jp/mascots/happy/oka-kyoju.svg",
    },
    {
      question: "一日に受け取れる最低キャッシュバック額は？",
      answer: "一日に受け取れる最低キャッシュバック額は「5ドル」です。3日間毎日それぞれ、損失額に対するキャッシュバック額が5ドルに満たなかった場合は、キャッシュバックを受け取ることができません。",
      character: "oka-kyoju",
      characterName: "オカ教授",
      avatarUrl: "https://img.casinotsu.com/svg/jp/mascots/happy/oka-kyoju.svg",
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
    text: "今すぐコスモスウィンでキャッシュバックを獲得",
    href: "https://go.casinotsu.com/go/cosmoswin:cosmoswin-welcome-offer?referrer_path=%2Foffers%2Fcosmoswin-welcome-offer",
    buttonText: "オファーへ",
  },

  breadcrumbs: [
    { label: "ホーム", href: "https://casinotsu.com/" },
    { label: "オファー", href: "https://casinotsu.com/offers/" },
    { label: "コスモスウィン キャッシュバック", href: "https://casinotsu.com/offers/cosmoswin-welcome-offer" },
  ],

  metadata: {
    category: "cashback-offer",
    tags: ["キャッシュバック", "コスモスウィン", "仮想通貨カジノ", "ウェルカムボーナス"],
    publishDate: "2024-08-28",
    lastModified: "2024-08-31",
  },
};