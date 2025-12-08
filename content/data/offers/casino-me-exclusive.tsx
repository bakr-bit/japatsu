import Link from "next/link";
import type { OfferPageContent } from "@/components/templates/OfferDetailTemplate";

export const casinoMeExclusive: OfferPageContent = {
  hero: {
    title: "カジノミー登録＆初回入金で「Note Of Death」100回フリースピン獲得！ 《現在停止中》",
    casino: "カジノミー",
    casinoSlug: "casino-me",
    description: "ジャパカジ限定の特別なオファーです。当サイト経由でカジノミーにご登録いただき、$60以上の初回入金で、独占スロット「Note Of Death」で使える100回フリースピンをプレゼント！",
    bannerImageUrl: "https://casinotsu.com/images/casino.me_960x495.png",
    promotionalPeriod: {
      startDate: "2023-11-26",
      endDate: "2024-04-24",
      daysRemaining: 0,
    },
    lastUpdated: "2024-04-24",
  },

  offerHighlight: {
    bonusAmount: "100回フリースピン",
    bonusType: "初回入金特典",
    wagering: "20倍",
    validity: "30日",
    maxWinnings: "公式サイトにて要確認",
    bonusCode: null,
    featured: true,
  },

  tableOfContents: [
    { text: "概要：豪華ウェルカムパッケージ＋100回フリースピン", url: "#overview" },
    { text: "オファー基本情報：初回入金特典", url: "#offer-details" },
    { text: "受け取り方法：簡単ステップ", url: "#how-to-claim" },
    { text: "利用規約・条件", url: "#terms-and-conditions" },
    { text: "カジノ情報", url: "#casino-info" },
    { text: "対象ゲーム", url: "#target-games" },
    { text: "攻略法・注意点", url: "#strategy" },
    { text: "まとめ", url: "#summary" },
    { text: "よくある質問", url: "#faq" },
  ],

  intro: [
    "CasinoTsu は、カジノミーと提携し、ジャパカジ（当サイト）経由でご登録いただいたプレイヤー様限定の特別なオファーをご用意いたしました。この機会に、カジノミーの魅力的なウェルカムパッケージに加え、独占スロット「Note Of Death」でご利用いただける100回分のフリースピンをぜひお楽しみください。",
    "カジノミーでは、新規プレイヤー様向けに充実したウェルカムパッケージを提供しておりますが、この度、ジャパカジ（CasinoTsu / casinotsu.com）からご登録いただいたプレイヤー様限定で、さらに特別な特典をご提供いたします。",
  ],

  claimSteps: [
    {
      stepNumber: 1,
      title: "ジャパカジ経由でカジノミーに登録",
      description: [
        "まず、当サイト（CasinoTsu / casinotsu.com）に掲載されているリンクからカジノミーの公式サイトへアクセスし、新規アカウントをご登録ください。",
      ],
    },
    {
      stepNumber: 2,
      title: "初回入金",
      description: [
        "アカウント登録後、最低$60以上の初回入金を行ってください。",
      ],
    },
    {
      stepNumber: 3,
      title: "特典の受け取り",
      description: [
        "入金が確認され次第、ウェルカムパッケージに加え、「Note of Death」の100回フリースピンが付与されます。",
        "フリースピンの具体的な付与タイミング（即時、24時間以内など）につきましては、カジノミーの利用規約をご確認ください。",
      ],
      note: "既にカジノミーにご登録済みの場合でも、まだ初回入金を完了されていない方は、この限定オファーの対象となる可能性がございます。詳細につきましては、カジノミーのカスタマーサポートまでお問い合わせください。",
    },
  ],

  characterDialogues: [],

  termsAndConditions: {
    heading: "利用規約・条件",
    items: [
      { label: "賭け条件", value: "20倍（フリースピンで得た賞金に対して）" },
      { label: "ボーナスマネーでの最大ベット額", value: "$5" },
      { label: "ボーナス使用期限", value: "30日間" },
      { label: "最低入金額", value: "$20", note: "ただし、限定フリースピン100回を獲得するには$60以上の初回入金が必要です。" },
      { label: "最大出金可能額", value: "限定フリースピンで獲得した賞金からの出金上限額につきましては、カジノミーの利用規約をご確認ください。" },
      {
        label: "賭け条件消化率",
        value: "ゲームごとに異なります",
        note: "スロット: 最大100% | ブラックジャック/バカラ: 最大10% | ルーレット: 最大5% | ビデオポーカー: 最大30% | ライブカジノ: 最大10% | 特定ゲーム(Blood Suckers等): 0%",
      },
    ],
    prohibitions: [
      "進行型ゲーム（Castle Builder 1, 2, Pearls of India, Immortal Romance, Tomb Raider – Secret of the Sword, Avalon 2, Thunderstruck 2, Jurassic Parkなど）においてボーナスマネーを不正に使用した場合、勝利金が無効となる可能性がございます。",
      "$5の最大ベット額を超えるベットは規約違反とみなされる場合がございます。",
    ],
    warnings: [
      "出金手続きの前に、アカウント認証（KYC）が必要となる場合がございます。",
    ],
  },

  casinoInfo: {
    heading: "信頼と実績のカジノミー 🌟",
    paragraphs: [
      "オープン以来、安定した人気を誇るカジノミーは、カジ旅の姉妹カジノとしても知られています。サイトの操作性は非常にスムーズで、キャッシュバック制度や、毎日対応してくれるプロフェッショナルなカスタマーサポートなど、プレイヤーにとって嬉しいサービスが充実しています。",
      "サイトの使いやすさ、キャッシュバック、サポート体制などが好評を得ています。",
    ],
    rating: null,
    officialUrl: "https://go.casinotsu.com/go/casino-me:casino-me-exclusive?referrer_path=%2Foffers%2Fcasino-me-exclusive",
  },

  targetGames: {
    heading: "対象ゲーム：限定スロットと人気機種をプレイ！ 🎮",
    description: "ジャパカジ限定100回フリースピンは、カジノミー独占スロット「Note of Death」でご利用いただけます。また、通常のウェルカムパッケージでは、7日間連続で毎日異なる人気スロットのフリースピンが付与されます。",
    eligibleGames: [
      "Note of Death (ジャパカジ限定100回FS対象)",
      "ハワイアンドリーム 🌺 (ウェルカムFS 1日目)",
      "ムーンプリンセス 👸 (ウェルカムFS 2日目)",
      "ホワイトラビット 🐰 (ウェルカムFS 3日目)",
      "ヴァンパイヤ・ゴーン・ワイルド 🦇 (ウェルカムFS 4日目)",
      "ノート・オブ・デス 📓 (ウェルカムFS 5日目)",
      "フルーツパーティー🍎 (ウェルカムFS 6日目)",
      "ジャミンジャーズ2 🕺 (ウェルカムFS 7日目)",
    ],
    recommendedGames: [],
  },

  paymentMethods: {
    heading: "入出金方法",
    depositMethods: ["クレジットカード", "電子ウォレット", "銀行送金など"],
    withdrawalMethods: ["電子ウォレット", "銀行送金など"],
    notes: [
      "利用可能な具体的な決済方法、手数料、処理時間については公式サイトにて詳細をご確認ください。",
      "本限定オファーのフリースピン獲得には、$60以上の初回入金が必要です。",
    ],
  },

  mobileCompatibility: {
    heading: "モバイル対応：いつでもどこでもカジノ体験 📱",
    description: [
      "カジノミーは、PCだけでなくスマートフォンやタブレットからも快適にプレイできるよう、モバイルフレンドリーな設計となっています。",
      "特別なアプリのダウンロードは不要で、お使いのモバイルデバイスのウェブブラウザから直接アクセスし、ゲームやサービスをご利用いただけます。限定フリースピン対象の「Note of Death」もモバイルでプレイ可能です。",
    ],
  },

  strategy: {
    heading: "攻略法・注意点：賢くプレイするためのヒント 💡",
    subsections: [
      {
        subheading: "ボーナス活用法と賭け条件クリア戦略",
        tips: [
          "初回入金は$60以上を狙う：限定フリースピン100回を確実に得るために、初回入金額を$60以上に設定しましょう。",
          "スロットゲームを中心にプレイ：スロットは賭け条件消化率が最大100%なので、効率的に条件をクリアするのに最適です。",
          "最大ベット額を守る：ボーナスプレイ中の最大ベット額は$5です。これを超えないように注意しましょう。",
          "有効期限に注意：ボーナスには使用期限があります。期限内に賭け条件をクリアできるよう、計画的にプレイを進めましょう。",
        ],
      },
      {
        subheading: "注意事項",
        tips: [
          "年齢制限：18歳以上（または居住国の法律で定められた成人年齢以上）の方のみがご利用いただけます。",
          "規約の確認：プレイ前には必ずカジノミー公式サイトで最新の利用規約をご確認ください。",
          "アカウント認証：出金手続きを行う前に、本人確認（アカウント認証）が必要となります。",
        ],
        warnings: [
          "ギャンブル依存症対策：ギャンブルは娯楽として楽しむものです。カジノミーでは自己制限機能を提供しています。問題を感じたら専門機関にご相談ください。",
        ],
      },
    ],
  },

  similarOffers: {
    heading: "カジノミーがお好きな方におすすめのカジノもチェック",
    offers: [
      {
        casino: "カジノミー（通常オファー）",
        casinoSlug: "casino-me",
        feature: "初回〜4回目の入金で最大$777のボーナスと77回のフリースピン。本限定オファーはこれに更に100FSが追加されます。",
        offerLink: "https://casinotsu.com/reviews/casino-me",
      },
      {
        casino: "カジ旅",
        casinoSlug: "casitabi",
        feature: "カジノミーの姉妹カジノ。RPG要素を取り入れたユニークな体験と、魅力的なウェルカムボーナスが人気です。",
        offerLink: "https://casinotsu.com/reviews/casitabi",
      },
    ],
  },

  summary: {
    heading: "まとめ：CasinoTsuのおすすめプレイヤー像 🏆",
    paragraphs: [
      "ジャパカジ限定の「Note of Death」100回フリースピン＋ウェルカムパッケージは、カジノミーでお得にオンラインカジノ体験を始めたいプレイヤー様にとって、非常に魅力的なオファーです。",
      "ジャパカジ（CasinoTsu / casinotsu.com）経由でご登録いただき、初回入金を$60以上行うことで、通常よりもさらに豪華な特典を受け取ることができます。ぜひこの機会に、カジノミーの限定オファーをお楽しみください。",
      "注記: 本オファーは「《停止中》」と表示されております。最新の提供状況につきましては、カジノミー公式サイトおよびジャパカジのリンク先でご確認ください。",
    ],
    recommendedFor: [
      "カジノミーを初めて利用し、手厚いボーナスを受け取りたい新規プレイヤー",
      "「Note of Death」や新しいスロットを試してみたいスロット愛好家",
      "緩い賭け条件（20倍）でボーナスを最大限に活用したい、お得さ重視のプレイヤー",
      "カジ旅の使いやすさやサービスに満足している方",
    ],
  },

  faq: [
    {
      question: "この限定フリースピンは誰でももらえますか？",
      answer: "いいえ、この「Note of Death」100回フリースピンは、ジャパカジ（CasinoTsu / casinotsu.com）を経由してカジノミーに新規登録し、$60以上の初回入金を行ったプレイヤー様限定となります。",
    },
    {
      question: "「Note of Death」のフリースピンはいつ付与されますか？",
      answer: "通常、初回入金が確認された後、速やかにアカウントに付与されます。具体的な付与タイミングにつきましては、カジノミーの利用規約をご確認いただくか、カスタマーサポートにお問い合わせください。",
    },
    {
      question: "フリースピンで得た賞金には賭け条件がありますか？",
      answer: "はい、フリースピンで得た賞金もボーナスとして扱われ、20倍の賭け条件が適用されます。",
    },
    {
      question: "$60以上の入金が必要とのことですが、最低入金額は$20ではないのですか？",
      answer: "カジノミー自体の最低入金額は$20ですが、このジャパカジ限定の「Note of Death」100回フリースピンを獲得するためには、$60以上の初回入金が必要となります。",
    },
    {
      question: "このオファーはいつまで利用できますか？",
      answer: "記事内では「終了を告知するまで継続される予定」と記載されていますが、プロモーション期間は変更される可能性があります。最新の情報は、カジノミー公式サイトまたはジャパカジのリンク先でご確認ください。",
    },
  ],

  author: null,

  cta: {
    text: "今すぐカジノミーで限定フリースピンを獲得！",
    href: "https://go.casinotsu.com/go/casino-me:casino-me-exclusive?referrer_path=%2Foffers%2Fcasino-me-exclusive",
    buttonText: "オファーへ",
  },

  breadcrumbs: [
    { label: "ホーム", href: "https://casinotsu.com/" },
    { label: "オファー", href: "https://casinotsu.com/offers/" },
    { label: "カジノミー限定", href: "https://casinotsu.com/offers/casino-me-exclusive" },
  ],

  metadata: {
    category: "exclusive-offer",
    tags: ["フリースピン", "カジノミー", "初回入金ボーナス", "ジャパカジ限定", "Note of Death"],
    publishDate: "2023-11-26",
    lastModified: "2024-04-24",
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