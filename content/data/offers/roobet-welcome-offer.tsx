import Link from "next/link";
import type { OfferPageContent } from "@/components/templates/OfferDetailTemplate";

export const roobetWelcomeOffer: OfferPageContent = {
  hero: {
    title: "【※オファー休止中】ルーベットの7日間キャッシュバック｜1日あたり最大200USドルをゲット！",
    casino: "ルーベット (RooBet)",
    casinoSlug: "roobet",
    description: "話題のルーベットは、公式アンバサダーだけが注目されているわけではありません。初心者の方でも安心してプレイできるキャッシュバック特典を、ぜひご活用ください。",
    bannerImageUrl: "https://www.casinotsu.com/images/roobet_1440x320.png",
    promotionalPeriod: {
      startDate: "2023-12-13",
      endDate: "2024-06-04",
      daysRemaining: 0,
      note: "※現在休止中",
    },
    lastUpdated: "2024-06-04",
  },

  offerHighlight: {
    bonusAmount: "純損失額の20%",
    bonusType: "ウェルカムキャッシュバック",
    wagering: "なし",
    validity: "登録後7日間",
    maxWinnings: "1日あたり$200",
    bonusCode: null,
    featured: true,
    note: "本オファーは現在休止中です。",
  },

  tableOfContents: [
    { text: "ウェルカムキャッシュバック", url: "#welcome-cashback" },
    { text: "オファー基本情報", url: "#offer-info" },
    { text: "受け取り方法", url: "#how-to-claim" },
    { text: "利用規約・条件", url: "#terms-and-conditions" },
    { text: "カジノ情報", url: "#casino-info" },
    { text: "対象ゲーム", url: "#target-games" },
    { text: "入出金方法", url: "#payment-methods" },
    { text: "攻略法・注意点", url: "#strategy" },
    { text: "類似オファー", url: "#similar-offers" },
  ],

  intro: [
    "CasinoTsuに新しく加わった、仮想通貨カジノ「 ルーベット」✨",
    "アメリカの著名なラッパー、スヌープ・ドッグや、世界最大の格闘技団体 UFC が公式アンバサダーを務める、 大変注目されているオンラインカジノ です！",
    "この度、CasinoTsuからルーベットにご登録の上、ご入金いただいたお客様限定で、 最初の7日間における全ての損失に対してキャッシュバックが保証 される、大変お得な ウェルカムオファー をご提供できることになりました。",
    "※本オファーは現在休止中です。",
  ],

  claimSteps: [
    {
      stepNumber: 1,
      title: "登録ページへアクセス",
      description: [
        "まずは、CasinoTsu経由で登録ページへアクセスしてください。",
      ],
      imageUrl: "https://www.casinotsu.com/images/RooBet-open2.jpg",
    },
    {
      stepNumber: 2,
      title: "登録フォームを入力",
      description: [
        "登録フォームに必要事項をご入力の上、「早速プレイ」をクリックして登録を完了してください🎉",
        "Googleアカウント、またはメタマスク（仮想通貨ウォレット）からもご登録いただけます(●’◡’●)",
      ],
      bullets: [
        "ご希望のユーザー名",
        "メールアドレス",
        "ご希望のパスワード",
      ],
    },
    {
      stepNumber: 3,
      title: "初回入金してプレイ開始",
      description: [
        "次に、$10以上を初回入金し、プレイを開始 してください～🎉",
        "7日間の特別期間中は、お好きなスロットゲームを心ゆくまでお楽しみください~\\(≧▽≦)/~",
      ],
    },
  ],

  characterDialogues: [
    {
      character: "cocomo",
      characterName: "ココモ",
      avatarUrl: "https://img.casinotsu.com/svg/jp/mascots/happy/cocomo.svg",
      message: "これにより、カジノ初心者の方でも安心してプレイを始められるでしょう。",
    },
    {
      character: "casiko",
      characterName: "カジ子",
      avatarUrl: "https://img.casinotsu.com/svg/jp/mascots/happy/casiko.svg",
      message: "純損失の計算について、改めて確認しておきましょう。「損失額 – 利益額 – その他のボーナス額 = 純損失額」となります。",
    },
  ],

  termsAndConditions: {
    heading: "7日間キャッシュバックの利用規約",
    note: "※本オファーは現在休止中です。",
    items: [
      { label: "対象者", value: "2023年12月19日以前にルーベット (RooBet) に登録されていない全ての新規ユーザー様" },
      { label: "適用期間", value: "ご登録後7日間" },
      { label: "キャッシュバック率", value: "ご登録後7日間の全純損失額の20％" },
      { label: "純損失の計算方法", value: "損失額 – 利益額 – その他のボーナス = 純損失額" },
      { label: "キャッシュバック上限", value: "1日あたり $200" },
      { label: "最低キャッシュバック額", value: "$1" },
      { label: "端数処理", value: "キャッシュバック金額は小数点以下切り捨て（例: $17.2 → $17）" },
      { label: "対象ゲーム", value: "ルーベット (RooBet) のゲーム（※ライブカジノは対象外となります）" },
      { label: "支払頻度", value: "キャッシュバックは1営業日に1回" },
    ],
    prohibitions: [
      "Rooスピン、フリーベット、その他の無料プレイは本プロモーションの対象外となります",
      "ライブカジノゲームでのプレイは本プロモーションの対象外となります",
      "早期にキャッシュアウトされたスポーツベットは、勝利としてカウントされます",
    ],
    warnings: [
      "損失が発生しなかった場合、キャッシュバックは付与されません",
    ],
  },

  casinoInfo: {
    heading: "カジノ情報",
    paragraphs: [
      "ルーベットは、海外でも 公式アンバサダーの起用で一躍有名 となった、 仮想通貨カジノでボーナスが魅力的なオンラインカジノ です。",
      "ウェルカムオファーにおいても、オンラインカジノを始められる皆様をしっかりとサポートする姿勢がうかがえます💪💖",
      "登録ボーナス は現在提供されていませんが、7日間は連続で負けても安心できるバックアップ体制が魅力的です(´▽`ʃ♡ƪ)",
      "7日間のウェルカムウィーク終了後も、Roowards（ルーワーズ）というリワードシステムを通じて、レーキバックやキャッシュバックが還元されます。これは、賭け条件を煩わしく感じるプレイヤーや、 ハイローラー の方々にもおすすめできるカジノです⤴⤴💰",
      "ルーベット (RooBet) は、Raw Entertainment B.V.によって運営されており、キュラソー政府（オランダ領アンチル諸島）のライセンス（OGL/2024/687/0427）を取得し、合法的に運営されています。これにより、プレイヤーは安全かつ公正な環境でカジノゲームをお楽しみいただけます。",
      "ルーベット (RooBet) では、最新のSSL暗号化技術を採用し、お客様の個人情報および財務情報を厳重に保護しています。また、仮想通貨に特化していることは、取引の透明性とセキュリティをさらに高める要因となっています。",
      "24時間365日、ライブチャットとメールによるカスタマーサポートをご利用いただけます。多言語対応しており、プレイヤーの皆様からのご質問や問題に迅速に対応いたします。"
    ],
    officialUrl: "https://go.casinotsu.com/go/roobet:roobet-welcome-offer?referrer_path=%2Foffers%2Froobet-welcome-offer",
  },

  targetGames: {
    heading: "対象ゲーム",
    description: "このウェルカムキャッシュバックオファーは、ルーベット (RooBet) のスロットゲームにおける純損失が対象となります。ライブカジノゲームでのプレイは、残念ながら本プロモーションの対象外となります。\n注記: ルーベット (RooBet) では、Crashなどのオリジナルインハウスゲームも提供しております。これらのゲームの対象可否につきましては、プロモーションの詳細を公式サイトにてご確認ください。",
    eligibleGames: [
      "スロットゲーム",
    ],
    recommendedGames: [],
  },

  paymentMethods: {
    heading: "入出金方法",
    depositMethods: ["仮想通貨 (Bitcoin, Ethereum, Tether, Litecoin, Dogecoin, Ripple, Tronなど)", "Tiger Pay", "Payz", "MuchBetter", "UPI", "クレジットカード（Visa, Mastercard）", "AstroPay"],
    withdrawalMethods: ["仮想通貨", "Tiger Pay"],
    notes: [
      "最小入金額: $10",
      "手数料: 仮想通貨のトランザクション手数料は、ネットワークの状況により変動いたします。その他の決済方法に関する手数料については、公式サイトにてご確認ください。",
      "処理時間: 仮想通貨での入出金は、一般的に非常に迅速です。電子マネーの処理時間についても、公式サイトで詳細をご確認いただけます。",
    ],
  },

  mobileCompatibility: {
    heading: "モバイル対応",
    description: [
      "ルーベット (RooBet) は、スマートフォンやタブレットからでも快適にプレイできるよう、モバイル最適化されたプラットフォームを提供しています。専用のモバイルアプリはございませんが、ウェブブラウザを通じてアクセスいただくことで、どのデバイスからでもシームレスなゲーム体験をお楽しみいただけます。AndroidおよびiOSデバイスに対応しており、外出先からでもお気に入りのゲームやベットをお楽しみいただけます。",
    ],
  },

  strategy: {
    heading: "攻略法・注意点",
    subsections: [
      {
        subheading: "ウェルカムキャッシュバックの活用法",
        description: "この7日間のキャッシュバックオファーは、特にオンラインカジノ初心者の方にとって、リスクを抑えながらルーベット (RooBet) を体験できる絶好の機会です。",
        tips: [
          "まずはスロットから: キャッシュバックの対象がスロットゲームであるため、この期間中に様々なスロットを試してみることをおすすめします。",
          "損失を恐れすぎない: 万が一負けてしまっても、損失額の20%がキャッシュバックされるため、精神的な負担を軽減してプレイに集中できます。",
          "損失計算を正確に理解する: 「損失額 – 利益額 – その他のボーナス」で純損失額が計算されることを、しっかりとご理解ください。利益が出た場合、その分キャッシュバック額は減少します。",
          "上限額を常に意識する: 1日あたりのキャッシュバック上限額は$200です。多額の損失を出された場合でも、この上限額を超えるキャッシュバックはございません。",
          "ライブカジノは対象外であることを理解する: ライブカジノでのプレイはキャッシュバックの対象外となりますので、この期間中はスロットを中心にプレイされることをおすすめいたします。",
        ],
      },
    ],
  },

  similarOffers: {
    heading: "ルーベット (RooBet) のその他のプロモーション",
    offers: [
      {
        casino: "ルーベット (RooBet)",
        casinoSlug: "roobet",
        feature: "Roowards (ルーワーズ) システム: ご登録後も継続してご利用いただけるリワードシステムです。レーキバックやキャッシュバック、ランクアップボーナスなどが用意されています。",
        offerLink: "https://casinotsu.com/reviews/roobet",
      },
      {
        casino: "ルーベット (RooBet)",
        casinoSlug: "roobet",
        feature: "VIPクラブ: 招待制のVIPプログラム。インスタントキャッシュバック、デイリー/ウィークリー/マンスリーボーナス、専属VIPマネージャーなどの特典があります。",
        offerLink: "https://casinotsu.com/reviews/roobet",
      },
      {
        casino: "ルーベット (RooBet)",
        casinoSlug: "roobet",
        feature: "スポーツベット関連プロモーション: Parlay Power Play、Halftime Lead Insurance、Roobet x Chelsea FC Promoなど、様々なスポーツベットプロモーションが開催されます。",
        offerLink: "https://casinotsu.com/reviews/roobet",
      },
      {
        casino: "ルーベット (RooBet)",
        casinoSlug: "roobet",
        feature: "カジノゲーム関連プロモーション: Drops & Wins、Slot Challenges、Blackjack Leagueなど、カジノゲームのトーナメントやチャレンジが実施されます。",
        offerLink: "https://casinotsu.com/reviews/roobet",
      },
      {
        casino: "ルーベット (RooBet)",
        casinoSlug: "roobet",
        feature: "紹介プログラム: ご友人などを紹介いただくことで、コミッションを獲得できるプログラムです。",
        offerLink: "https://casinotsu.com/reviews/roobet",
      },
    ],
  },

  summary: {
    heading: "まとめ",
    paragraphs: [
      "ルーベット (RooBet) の7日間ウェルカムキャッシュバックオファーは、現在休止中ですが、再開されれば新規プレイヤー様にとって非常に魅力的な特典となることでしょう。損失額の20%がキャッシュバックされるため、リスクを抑えてカジノゲーム、特にスロットを試したい方には最適です。",
      "ルーベット (RooBet) は、仮想通貨に特化しつつも多様な決済方法、豊富なゲームラインナップ、そして継続的なリワードシステムを提供しており、長くお楽しみいただけるカジノプラットフォームと言えます。",
    ],
    recommendedFor: [
      "オンラインカジノ初心者で、リスクを抑えて始めたい方",
      "スロットゲームを中心にプレイされたい方",
      "仮想通貨での入出金に抵抗がない方",
      "有名なアンバサダーがいるカジノでプレイされたい方",
    ],
  },

  faq: [
    {
      question: "ルーベットのウェルカムオファーを獲得する際の注意点は何ですか？",
      answer: "こちらのウェルカムウィークは、一般には提供されていない限定オファーとなります。ご登録は、必ずCasinoTsuの当ページ、もしくはルーベットのレビューページからお願いいたします。また、本オファーは現在休止中ですので、再開時期については公式サイトにてご確認ください。",
      character: "kyoju",
    },
    {
      question: "ルーベットの入金方法は仮想通貨のみですか？",
      answer: "ルーベット (RooBet) は仮想通貨に特化しておりますが、電子マネーでの入出金も可能です。仮想通貨以外では、Tiger Pay, Payz, MuchBetter, UPI, クレジットカード（Visa, Mastercard）, AstroPay が入金にご利用いただけます。（出金はTiger Payのみ対応しております。）",
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
    text: "今すぐルーベットでキャッシュバックを体験",
    href: "https://go.casinotsu.com/go/roobet:roobet-welcome-offer?referrer_path=%2Foffers%2Froobet-welcome-offer",
    buttonText: "オファーへ",
  },

  breadcrumbs: [
    { label: "ホーム", href: "https://casinotsu.com/" },
    { label: "オファー", href: "https://casinotsu.com/offers" },
    { label: "ルーベット ウェルカムオファー", href: "https://casinotsu.com/offers/roobet-welcome-offer" },
  ],

  metadata: {
    category: "welcome-offer",
    tags: ["キャッシュバック", "ルーベット", "ウェルカムボーナス", "仮想通貨カジノ"],
    publishDate: "2023-12-13",
    lastModified: "2024-06-04",
  },
};