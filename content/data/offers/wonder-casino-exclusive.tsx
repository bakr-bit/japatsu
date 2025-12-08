import Link from "next/link";
import type { OfferPageContent } from "@/components/templates/OfferDetailTemplate";

export const wonderCasinoExclusive: OfferPageContent = {
  hero: {
    title: "ジャパカジ限定！ ワンダーカジノで入金不要ボーナス40ドル！",
    casino: "Wonder Casino",
    casinoSlug: "wonder-casino",
    description: "今だけの期間限定オファーです。ジャパカジからワンダーカジノにご登録いただくと、入金不要ボーナス40ドルを進呈いたします。💕",
    bannerImageUrl: "https://casinotsu.com/images/wonder-casino_1440x320.png",
    promotionalPeriod: {
      startDate: "2025-09-12",
      endDate: "2025-10-31",
      daysRemaining: 43,
    },
    lastUpdated: "2025-09-30",
  },

  offerHighlight: {
    bonusAmount: "$40",
    bonusType: "入金不要ボーナス",
    wagering: "5倍",
    validity: "30日",
    maxWinnings: "$300",
    bonusCode: "JP40",
    featured: true,
  },

  tableOfContents: [
    { text: "期間限定❗ ワンダーカジノの入金不要ボーナス", url: "#period-limited" },
    { text: "入金不要ボーナス獲得方法", url: "#how-to-claim" },
    { text: "対応スピードNo.1カジノ！ワンダーカジノ", url: "#casino-info" },
  ],

  intro: [
    "ワンダーカジノでは2025年10月31日までの期間中、ジャパカジからご登録いただくのみで、大変ご好評いただいております「入金不要ボーナス」を進呈しております。😍✨",
    "その額は、なんと40ドルもの高額です！(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
  ],

  claimSteps: [
    {
      stepNumber: 1,
      title: "アカウント登録",
      description: [
        "まず、ジャパカジのページからワンダーカジノの登録ページへアクセスしてください。😎",
        "画面の指示に従い、以下の情報をご入力ください。",
      ],
      bullets: [
        "メールアドレス",
        "ユーザーネーム",
        "パスワード",
        "携帯番号",
        "生年月日",
      ],
      imageUrl: "https://casinotsu.com/images/wonder-casino-account-register2.jpg",
      note: "ご登録には携帯認証が必須となります。",
    },
    {
      stepNumber: 2,
      title: "ボーナス受取ページへアクセス",
      description: [
        "マイアカウントページから「ボーナス受取」にアクセスしてください。",
      ],
    },
    {
      stepNumber: 3,
      title: "ボーナスクーポンを選択",
      description: [
        "ボーナス受取ページにて、「クーポン」を選択し、次に「ボーナスクーポン」を選択します。",
      ],
    },
    {
      stepNumber: 4,
      title: "スロットゲーム会社を選択",
      description: [
        "プレイを希望されるスロットゲーム会社を選択してください。",
      ],
    },
    {
      stepNumber: 5,
      title: "ボーナスコードを入力",
      description: [
        "ボーナスコード「JP40」を正確に記入し、「送信」をクリックしてください。✅",
      ],
      bonusCode: "JP40",
    },
  ],

  characterDialogues: [
    {
      character: "casiko",
      characterName: "カジ子",
      avatarUrl: "https://casinotsu.com/images/casiko.svg",
      message: "入金不要ボーナスの受け取りには「携帯認証」が必須です！",
    },
    {
      character: "cocomo",
      characterName: "ココモ",
      avatarUrl: "https://casinotsu.com/images/cocomo.svg",
      message: "入金不要ボーナスの受け取り後、賭け条件をクリアするまでゲーム会社の変更はできませんので、ご注意ください。遊びたいプロバイダーをしっかり選びましょう★",
    },
    {
      character: "kyoju",
      characterName: "教授",
      avatarUrl: "https://casinotsu.com/images/kyoju.svg",
      message: "ボーナスが受け取れない時や、受け取り方が分からない場合はカスタマーサポートに問い合わせてみるのが良いでしょう！",
    },
  ],

  termsAndConditions: {
    heading: "入金不要ボーナス利用規約",
    items: [
      { label: "ボーナス額", value: "$40" },
      { label: "賭け条件", value: "5倍（ボーナス額に対して）" },
      { label: "有効期限", value: "ボーナス受取後30日", note: "一般的な入金不要ボーナスの有効期限は7日程度が多い中、30日という長期設定は非常に寛容です" },
      { label: "対象ゲーム", value: "スロットのみ", note: "スロット以外のゲームをプレイされた場合、ボーナスおよび勝利金は没収されます" },
      { label: "ベット上限", value: "1ラウンドあたり$3まで", note: "3ドル以上のベットがあった場合、ボーナスおよび勝利金は没収されます" },
      { label: "勝利金の出金上限額", value: "$300" },
      { label: "ボーナスコード", value: "JP40" },
    ],
    prohibitions: [
      "ボーナスステージの購入（フリースピン購入を含む）は禁止されています",
      "ボーナスを利用して意図的にボーナスステージ進行を狙う行為は禁止",
      "オポジットベット、ローリスクベットは禁止",
    ],
    warnings: [
      "KYC（本人確認）の提出が必要です",
      "最低$100の入金実績が必要です",
    ],
  },

  casinoInfo: {
    heading: "対応スピードNo.1カジノ！ワンダーカジノ",
    paragraphs: [
      "出金スピードやサポート対応が迅速なワンダーカジノは、全てのサービスにおいて「速さ」を追求したカジノです。🚀",
      "VIPプログラムは最短1日で最上位のVIPレベルまで到達することも可能であり、ハイローラーの皆様にもお勧めできます。😎",
    ],
    rating: 4.5,
    officialUrl: "http://wonder-casino-jp.com/",
  },

  targetGames: {
    heading: "対象ゲーム",
    description: "ワンダーカジノでは、スロット以外にも様々なカテゴリーのゲームを提供しております。",
    eligibleGames: [
      "スロット（入金不要ボーナス対象）",
      "テーブルゲーム",
      "スポーツベッティング",
      "宝くじゲーム",
    ],
    recommendedGames: [
      { name: "Starlight Kiss", rtp: "96.52%" },
      { name: "Cashzuma", rtp: "96%" },
      { name: "Sweet Harvest", rtp: "96.29%" },
    ],
  },

  paymentMethods: {
    heading: "入出金方法",
    depositMethods: ["仮想通貨", "クレジットカード（Visa, Mastercard）", "電子決済（PayPal, Interac, Trustly など）"],
    withdrawalMethods: ["仮想通貨", "銀行送金", "電子決済"],
    notes: [
      "手数料や処理時間については、各決済方法によって異なりますので、公式サイトにて詳細をご確認ください。",
    ],
  },

  mobileCompatibility: {
    heading: "モバイル対応",
    description: [
      "ワンダーカジノは、スマートフォンやタブレットなどのモバイルデバイスに完全対応しております。",
      "専用アプリはございませんが、ウェブブラウザからアクセスするだけで、PC版と変わらない快適なプレイが可能です。",
    ],
  },

  strategy: {
    heading: "攻略法・注意点",
    subsections: [
      {
        subheading: "ボーナス活用法",
        tips: [
          "スロット限定：この入金不要ボーナスはスロット専用ですので、まずはスロットで腕試しをされることをお勧めします",
          "高RTPゲームの活用：ボーナスでプレイされる際は、RTP（還元率）が高いゲームを選択することで、より効率的に賭け条件をクリアできる可能性があります",
          "ベット額の管理：1ラウンド$3の上限を守りつつ、賭け条件クリアのために戦略的にベット額を調整しましょう",
        ],
      },
      {
        subheading: "賭け条件クリア戦略",
        tips: [
          "最小ベットからの積み上げ：まずは最小ベット（$3以下）で着実に勝利を積み重ね、賭け条件の$200（$40 x 5倍）を目指します",
          "リスク回避：禁止されているオポジットベットやローリスクベットは避け、規約違反によるボーナス没収を防ぎましょう",
        ],
      },
      {
        subheading: "注意事項",
        tips: [
          "期間限定：このオファーは2025年10月31日までの期間限定です。お見逃しなく！",
          "KYCと最低入金：ボーナスを獲得されただけでは出金できません。KYC（本人確認）の提出と、$100の入金実績が必須となります",
          "ボーナスコードの入力：ご登録後、「ボーナス受取」ページでボーナスコード「JP40」を正確に入力してください",
        ],
        warnings: [
          "ゲーム会社変更不可：ボーナス受取後のウォレット変更は、賭け条件クリアまでできません",
        ],
      },
    ],
  },

  similarOffers: {
    heading: "ワンダーカジノがお好きな方におすすめのカジノもチェック",
    offers: [
      {
        casino: "エルドアカジノ",
        casinoSlug: "eldoah",
        feature: "ライブカジノ利用満足度6年連続ナンバー1の人気オンラインカジノ！",
        offerLink: "https://casinotsu.com/reviews/eldoah",
      },
      {
        casino: "WSMカジノ",
        casinoSlug: "wsm-casino",
        feature: "「WSM」というミームコインプロジェクトから生まれた、ユニークな仮想通貨オンラインカジノ★",
        offerLink: "https://casinotsu.com/reviews/wsm-casino",
      },
    ],
  },

  summary: {
    heading: "まとめ",
    paragraphs: [
      "ジャパカジ限定で獲得できる期間限定の入金不要ボーナス40ドルは、非常に太っ腹なオファーと言えます。(´▽`ʃ♡ƪ) 無料で獲得できる上に賭け条件が5倍というのは、オンラインカジノの中でもトップクラスの好条件です。",
      "この大変お得なジャパカジ限定ボーナスが獲得できるのは『2025年10月31日までの期間限定』です！💦💦",
    ],
    recommendedFor: [
      "オンラインカジノをノーリスクで始めたい方",
      "お得なボーナスを最大限に活用したい方",
      "スロットゲームがお好きな方",
      "出金条件の緩やかなボーナスをお探しの方",
      "迅速な対応を重視するオンラインカジノをお探しの方",
    ],
  },

  faq: [
    {
      question: "限定入金不要$40ボーナスを獲得する際の注意点は何ですか？",
      answer: "こちらの入金不要$40ボーナスはジャパカジ限定ボーナスです。ジャパカジからご登録いただいた後、ご入金前に必ず「ボーナス受取」ページから申請してください。また、ボーナスコード「JP40」の入力も必須となります。",
      character: "kyoju",
    },
    {
      question: "ワンダーカジノの初回入金ボーナスと、ジャパカジ限定入金不要ボーナスは両方もらえますか？",
      answer: "はい、ワンダーカジノの初回入金ボーナスとジャパカジ限定の入金不要ボーナスは、両方獲得可能です。ただし、必ず入金不要ボーナスを受け取ってから、初回入金ボーナスを申請するようにしてください。順番を誤ると、入金不要ボーナスが受け取れない場合がございます。",
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
    text: "今すぐワンダーカジノでボーナスを獲得",
    href: "https://go.casinotsu.com/go/wonder-casino",
    buttonText: "ボーナスGET",
  },

  breadcrumbs: [
    { label: "ホーム", href: "https://casinotsu.com/" },
    { label: "オファー", href: "https://casinotsu.com/offers/" },
    { label: "ワンダーカジノ限定", href: "https://casinotsu.com/offers/wonder-casino-exclusive" },
  ],

  metadata: {
    category: "exclusive-offer",
    tags: ["入金不要ボーナス", "ワンダーカジノ", "期間限定", "ジャパカジ限定"],
    publishDate: "2025-09-12",
    lastModified: "2025-09-30",
  },
};