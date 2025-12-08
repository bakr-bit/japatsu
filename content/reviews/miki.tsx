import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewMikiCasino: ReviewPageContent = {
  hero: {
    title: "Mikiカジノ（ミキカジノ）レビュー 2025年最新版",
    subheading: "最大$4,000 + 200回フリースピン + ライブカジノバウチャー",
    description: "Mikiカジノは、2025年最新レビューとして、その特徴、強み、そしてユーザーからの評判までを網羅的に解説するオンラインカジノです。豪華なウェルカムボーナスはプレイヤーにとって大きな魅力となるでしょう。",
    score: 4.4,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 88,
        note: "豪華なボーナスと豊富なゲームラインナップで注目度が高い。",
      },
      {
        label: "規約",
        percent: 82,
        note: "ボーナスは非常に魅力的だが、一部で賭け条件が厳しいとの声も。",
      },
      {
        label: "操作性",
        percent: 79,
        note: "多様な決済方法で利便性が高い一方、サイトデザインが複雑に感じられる場合がある。",
      },
      {
        label: "サポート",
        percent: 90,
        note: "カスタマーサポートの対応が良いと評判。",
      },
    ],
    highlights: [
      "入金ボーナス・フリスピ・バウチャーが一度に貰える",
      "最大$4,000の超高額ウェルカムボーナス",
      "スロットからライブカジノまで豊富なゲーム",
      "仮想通貨を含む多様な決済方法に対応",
    ],
    watchouts: [
      "一部ボーナスの賭け条件が厳しいと感じるユーザーもいる",
      "サイトデザインがやや複雑に感じる場合がある",
    ],
    avatarSrc: "/assets/casino/miki.png",
    avatarAlt: "Mikiのロゴ",
  },
  payments: {
    featured: [
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://casinotsu.com/payment/visa",
        badge: "人気",
        note: "定番のクレジットカード決済",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://casinotsu.com/payment/payz",
        badge: "Eウォレット",
        note: "スピーディーな入出金に対応",
      },
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "匿名性と迅速な取引が魅力",
      },
      {
        name: "銀行送金",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://casinotsu.com/payment/bank-transfer",
        badge: "安心",
        note: "主要銀行に対応し安心の定番ルート",
      },
    ],
    deposits: [
      { name: "VISA", icon: "/assets/payments/visa.svg" },
      { name: "Mastercard", icon: "/assets/payments/mastercard.svg" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg", href: "https://casinotsu.com/payment/muchbetter" },
      { name: "Venus Point", icon: "/assets/payments/venus-point.svg", href: "https://casinotsu.com/payment/venuspoint" },
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "iWallet", icon: "/assets/payments/iwallet.svg", href: "https://casinotsu.com/payment/iwallet" },
      { name: "SticPay", icon: "/assets/payments/sticpay.svg", href: "https://casinotsu.com/payment/sticpay" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg", href: "https://casinotsu.com/payment/ethereum" },
      { name: "USDT" },
      { name: "銀行送金", icon: "/assets/payments/bank-transfer.svg" },
    ],
    withdrawals: [
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg", href: "https://casinotsu.com/payment/muchbetter" },
      { name: "Venus Point", icon: "/assets/payments/venus-point.svg", href: "https://casinotsu.com/payment/venuspoint" },
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "iWallet", icon: "/assets/payments/iwallet.svg", href: "https://casinotsu.com/payment/iwallet" },
      { name: "SticPay", icon: "/assets/payments/sticpay.svg", href: "https://casinotsu.com/payment/sticpay" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg", href: "https://casinotsu.com/payment/ethereum" },
      { name: "USDT" },
      { name: "銀行送金", icon: "/assets/payments/bank-transfer.svg" },
    ],
    notes: [
      "多様な決済方法に対応しており、プレイヤーの利便性を高めています。",
      "出金時間も比較的短く、迅速な対応が期待できます。",
    ],
  },
  bonuses: {
    overview:
      "Mikiカジノでは、新規プレイヤー向けのウェルカムボーナスが非常に充実しています。入金ボーナス、フリースピン、ライブカジノバウチャーといった3種類のボーナスが一度の入金で受け取れる豪華な内容は大きな魅力です。",
    noDeposit:
      "現在、入金不要ボーナスの提供は確認されていません。ウェルカムボーナスをご利用ください。",
    extraSpins: {
      summary:
        "初回入金時に200回分のフリースピンが付与されます。",
      schedule: [
        "初回入金完了後にアカウントに付与されます。",
      ],
      warning: "フリースピンで得た勝利金には20倍の賭け条件が設定されます。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "---", cap: "$4,000", code: "不要" },
    ],
    conditions: [
      "入金ボーナスの賭け条件は30倍。",
      "フリースピンの賭け条件は20倍。",
      "ライブカジノバウチャーの詳細は公式サイトでご確認ください。",
      "これらのボーナスは初回入金時にまとめて受け取ることができます。",
    ],
    prohibitedGames: [
        "（ボーナス利用規約にて指定されているゲーム。詳細は公式サイトで要確認）",
    ],
  },
  offers: [
    {
      title: "ライブカジノバウチャー",
      description: "初回入金時に、ライブカジノで利用できる特別なバウチャーが提供されます。臨場感あふれるライブゲームをお得に体験できるチャンスです。",
      highlight: "ライブカジノファン必見の特典",
    },
  ],
  facts: [
    { label: "名称", value: "Mikiカジノ" },
    { label: "ローンチ", value: "2025年" },
    { label: "運営会社", value: "公式サイトにて確認" },
    { label: "ライセンス", value: "信頼できるライセンス（公式サイトにて確認）" },
    { label: "VIPプログラム", value: "✅" },
    { label: "対応言語", value: "日本語、英語など" },
    { label: "対応通貨", value: "USD, JPYなど" },
    {
      label: "ゲームタイプ",
      value:
        "スロット, ライブカジノ, バカラ, ブラックジャック, ルーレット, クラッシュゲーム, ゲームショー, テーブルゲーム",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          主要な大手プロバイダーを多数採用（詳細は公式サイトにて確認）
        </span>
      ),
    },
    { label: "最小入金額", value: "$20" },
    { label: "最小出金額", value: "$20" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@mikicasino.com">support@mikicasino.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
        "Mikiカジノは2025年に登場した、プレイヤーに新しい体験を提供するオンラインカジノです。特に注目すべきは、初回入金で「入金ボーナス」「フリースピン」「ライブカジノバウチャー」の3つが一度に手に入る、非常に豪華なウェルカムパッケージです。",
        "登録は簡単なステップで完了し、すぐにプレイを開始できます。公式サイトにアクセスし、「登録」ボタンからメールアドレスやパスワードなどの基本情報を入力するだけ。利用規約に同意すれば、あなたもMikiカジノのプレイヤーです。",
        "このレビューでは、Mikiカジノの魅力と注意点を詳しく解説していきます。",
    ],
    ctas: [
      { text: "👉 Mikiカジノで今すぐプレイ！", href: "https://casinotsu.com/go/miki-casino" },
      { text: "お得なボーナス情報はこちら", href: "https://casinotsu.com/bonuses" },
    ],
  },
  games: [
    "Mikiカジノは、スロット、ライブカジノ、テーブルゲーム、クラッシュゲーム、ゲームショーなど、幅広いジャンルのゲームを提供しています。",
    "特にスロットは最新機種から定番の人気作まで網羅。ライブカジノでは、バカラ、ブラックジャック、ルーレットなどを本物のディーラーと対戦でき、臨場感あふれる体験が可能です。エンターテイメント性の高いゲームショーも豊富に揃っており、あらゆるプレイヤーのニーズに応えます。",
  ],
  features: [
    "Mikiカジノの最大の特徴は、初回入金で3種類のボーナスが同時に受け取れるユニークなウェルカムオファーです。これにより、プレイヤーは様々なゲームをお得に試すことができます。",
    "また、仮想通貨を含む多様な決済方法に対応している点も、利便性が高く評価されています。",
  ],
  editorial: {
    author: "CasinoTsu編集部",
    profileHref: "/authors/rina-okabe",
    hook: "最大$4,000のボーナスは業界トップクラス！ただし、その魅力を最大限に活かすには条件の確認が鍵です。",
    theGoodStuff: "初回入金でボーナスマネー、フリースピン、ライブカジノバウチャーの3つが揃うのは非常に珍しく、プレイヤーにとって大きなアドバンテージです。ゲームの種類も豊富で、飽きることなく楽しめるでしょう。",
    theHeadsUp: "良い評判が多い一方で、一部のボーナスには賭け条件が厳しめに設定されている可能性があります。利用前には必ず利用規約をしっかり読み、自分のプレイスタイルに合っているか確認することが重要です。",
    finalThought: "総合的に見て、Mikiカジノは特にボーナスを重視するプレイヤーにとって非常に魅力的な選択肢です。注意点を理解した上で賢く利用すれば、最高のカジノ体験ができるはずです。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "2025年のオンラインカジノシーンに新たに登場したMikiカジノ。CasinoTsuではその全貌を徹底的に調査しました。最大のセールスポイントは、間違いなくその豪華なウェルカムボーナスです。最大$4,000の入金ボーナスに加えて、200回のフリースピンとライブカジノバウチャーまで付いてくるという大盤振る舞いは、新規プレイヤーを惹きつけるのに十分なインパクトがあります。",
      "ゲームのラインナップも申し分ありません。人気スロットから本格的なライブカジノ、さらには最新のクラッシュゲームまで、あらゆるプレイヤーが楽しめるコンテンツが揃っています。これにより、受け取ったボーナスを様々なゲームで活用できる楽しみも広がります。",
      "決済の利便性もMikiカジノの強みの一つです。クレジットカード、各種電子ウォレット、そしてビットコインなどの仮想通貨にも対応しており、スムーズな入出金が可能です。出金速度も速いとの評判で、ストレスなくプレイに集中できる環境が整っています。",
      "安全性に関しても、信頼性の高いライセンスを取得し、SSL暗号化技術でプレイヤー情報を保護するなど、万全の対策を講じています。責任あるギャンブルへの取り組みも見られ、安心してプレイできるカジノと言えるでしょう。",
      "一方で、一部のユーザーからはサイトデザインの複雑さや、ボーナス条件の厳しさについての指摘もあります。しかし、全体的な評判は良好で、特にカスタマーサポートの質の高さは多くのプレイヤーに評価されています。Mikiカジノは、豊富な特典と充実したゲーム体験を求めるプレイヤーにとって、試してみる価値のあるオンラインカジノです。",
    ],
  },
  security: [
    "信頼できるカジノライセンスを取得して合法的に運営",
    "高度なSSL暗号化技術によりプレイヤーの個人情報や取引データを保護",
    "責任あるギャンブルへの取り組みを推進し、安全なプレイ環境を提供",
  ],
  responsiblePlay: [
    "ギャンブル依存症対策に力を入れており、プレイヤーが安全に楽しめる環境を提供しています。",
    "自己制限ツールなど、責任あるギャンブルをサポートする機能が利用可能です。（詳細は公式サイトにて）",
  ],
  complaintStats: [
    "（第三者機関による統計データは現在収集中です）",
  ],
  awards: [
    "（新規カジノのため、受賞歴は今後期待されます）",
  ],
  restrictedCountries: [
    "（利用規約にてご確認ください）",
  ],
  userConcerns: [
    "一部のボーナスに対して賭け条件が厳しいと感じる可能性",
    "サイトデザインが多機能なため、初心者にはやや複雑に感じられる場合がある",
  ],
  summary: [
    "Mikiカジノは、魅力的なウェルカムボーナス、豊富なゲーム、多様な決済方法を提供する、2025年注目のオンラインカジノです。",
    "良い評判が多く、特にボーナスの豪華さやゲームの充実度が高く評価されています。",
    "初めてオンラインカジノを利用する方から、経験豊富なプレイヤーまで、幅広い層におすすめできます。まずは公式サイトで豪華なウェルカムボーナスをチェックしてみてください。",
  ],
  extraLinks: [
    { text: "🔰 オンラインカジノのボーナスとは？", href: "https://casinotsu.com/bonuses" },
    { text: "💰 安全な決済方法の選び方", href: "https://casinotsu.com/payment" },
    { text: "🎰 人気スロットゲーム特集", href: "https://casinotsu.com/slots" },
  ],
  faq: [
    {
      question: "Mikiカジノのウェルカムボーナスは何ですか？",
      answer: "初回入金時に、最大$4,000の入金ボーナス、200回のフリースピン、そしてライブカジノで使えるバウチャーの3種類をまとめて受け取ることができます。",
    },
    {
      question: "Mikiカジノで遊べるゲームの種類は？",
      answer: "スロット、ライブカジノ（バカラ、ブラックジャック等）、テーブルゲーム、クラッシュゲーム、ゲームショーなど、非常に幅広いジャンルのゲームを提供しています。",
    },
    {
      question: "Mikiカジノは安全ですか？",
      answer: "はい。信頼できるライセンスを取得して運営されており、SSL暗号化技術でプレイヤーの情報を保護しています。また、責任あるギャンブルにも取り組んでおり、安全なプレイ環境を提供しています。",
    },
    {
      question: "どのような決済方法が使えますか？",
      answer: "クレジットカード（Visa, Mastercard）、電子ウォレット（Payz, Sticpayなど）、仮想通貨（Bitcoin, Ethereumなど）、銀行送金といった多様な決済方法に対応しています。",
    },
  ],
  cta: {
    text: "Mikiカジノの公式サイトで最新ボーナスを確認する",
    href: "https://casinotsu.com/go/miki-casino",
  },
    images: {
    casino: [
      "/assets/casino/miki.png",
      "/assets/casino/miki.jpg",
    ],
  },
};