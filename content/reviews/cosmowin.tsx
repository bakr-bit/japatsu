import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewCosmoswin: ReviewPageContent = {
  hero: {
    title: "Cosmoswin（コスモスウィン）レビュー",
    subheading: "CasinoTsu限定：最大$5,000ウェルカムボーナス + 最大$10,000キャッシュバック",
    description: "宇宙がテーマのユニークな仮想通貨カジノ、CosmoswinをCasinoTsuが徹底レビュー。豊富なゲームと決済方法、限定ボーナスまで詳しく解説します。",
    score: 4.2,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 86,
        note: "日本市場向けのデザインと豊富なゲーム数、拡充された決済方法で今後の人気上昇に期待。",
      },
      {
        label: "規約",
        percent: 82,
        note: "一般的なボーナスがない分、賭け条件を気にせずプレイできる点が魅力。限定ボーナスは要チェック。",
      },
      {
        label: "操作性",
        percent: 87,
        note: "PC・スマートフォン共にサイトの動作が非常にスムーズで、快適なゲームプレイが可能。",
      },
      {
        label: "サポート",
        percent: 77,
        note: "24時間日本語対応は便利だが、時間帯によっては翻訳機能を使った対応になる場合がある。",
      },
    ],
    highlights: [
      "CasinoTsu経由の限定ウェルカムボーナスあり",
      "仮想通貨と法定通貨の多様な決済方法に対応",
      "2,000種類以上のスロットと充実のライブカジノ",
      "スポーツベットも楽しめる統合プラットフォーム",
    ],
    watchouts: [
      "プレイ通貨は米ドル（USD）のみで日本円は非対応",
      "公式サイトでは通常ウェルカムボーナスがない",
      "日本語サポートが時間帯により翻訳対応になる",
    ],
  },
  payments: {
    featured: [
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/crypto",
        badge: "仮想通貨",
        note: "匿名性とスピードで人気の決済手段",
      },
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://casinotsu.com/payment/visa",
        badge: "カード",
        note: "主要なクレジットカードに対応",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://casinotsu.com/payment/payz",
        badge: "Eウォレット",
        note: "迅速な入出金が可能な電子ウォレット",
      },
      {
        name: "Vega Wallet",
        icon: "/assets/payments/vega-wallet.svg",
        href: "https://casinotsu.com/payment/vegawallet",
        badge: "ポイント制",
        note: "ポイントでの管理が便利な決済サービス",
      },
    ],
    deposits: [
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg" },
      { name: "Litecoin", icon: "/assets/payments/litecoin.svg" },
      { name: "Bitcoin Cash" },
      { name: "Cardano" },
      { name: "Ripple" },
      { name: "Dogecoin" },
      { name: "Tether" },
      { name: "USD Coin" },
      { name: "Payz", icon: "/assets/payments/payz.svg" },
      { name: "SticPay", icon: "/assets/payments/sticpay.svg" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg" },
      { name: "Jeton" },
      { name: "Skrill" },
      { name: "Neteller" },
      { name: "PayPal" },
      { name: "Visa", icon: "/assets/payments/visa.svg" },
      { name: "MasterCard", icon: "/assets/payments/mastercard.svg" },
      { name: "American Express" },
      { name: "ApplePay" },
      { name: "Trustly" },
    ],
    withdrawals: [
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg" },
      { name: "Litecoin" },
      { name: "Payz", icon: "/assets/payments/payz.svg" },
      { name: "SticPay", icon: "/assets/payments/sticpay.svg" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg" },
    ],
    notes: [
      "プレイ通貨は米国ドル（USD）のみです。日本円は直接利用できません。",
      "以前は仮想通貨専門でしたが、現在は電子ウォレットやクレジットカードなど多様な決済方法に対応しています。",
      "最低入出金額は$30です。",
    ],
  },
  bonuses: {
    overview:
      "Cosmoswinの公式サイトでは通常ウェルカムボーナスはありませんが、CasinoTsu経由で登録すると特別な限定ウェルカムボーナスがもらえます。最大$5,000のボーナスでスタートダッシュを切りましょう。",
    noDeposit:
      "現在、Cosmoswinでは入金不要ボーナスは提供されていません。",
    extraSpins: {
      summary:
        "「スーパーノヴァボーナス」として、最大$20,000のボーナスに加えて100回のフリースピンを獲得できるチャンスがあります。",
      schedule: [],
      warning: "ボーナスの詳細はプロモーションページでご確認ください。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "100%", cap: "$2,000", code: "CasinoTsu限定" },
      { depositNumber: "2回目", percent: "50%", cap: "$3,000", code: "CasinoTsu限定" },
    ],
    conditions: [
      "ボーナスごとの賭け条件は利用規約で確認する必要があります。",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "最大$10,000 キャッシュバック",
      description: "Cosmoswinでは、プレイヤーの活動に応じて最大$10,000のキャッシュバックが提供されます。賭け条件を気にせずプレイしたい方に最適です。",
      highlight: "高額なキャッシュバックが魅力",
    },
    {
      title: "スーパーノヴァボーナス",
      description: "最大$20,000のボーナスマネーと100回のフリースピンが獲得できる特別なプロモーションです。",
      highlight: "超高額ボーナスとフリースピンのチャンス",
    },
  ],
  facts: [
    { label: "名称", value: "Cosmoswin (コスモスウィン)" },
    { label: "ローンチ", value: "2019年" },
    { label: "運営会社", value: "情報なし" },
    { label: "ライセンス", value: "Curaçao (1668/JAZ)" },
    { label: "VIPプログラム", value: "❌" },
    {
      label: "対応言語",
      value: "日本語、英語",
    },
    { label: "対応通貨", value: "USD, BTC, ETH, LTC, BCH, ADA, XRP, DOGE, USDT, USDC, ARS, CAD, MXN, NZD" },
    {
      label: "ゲームタイプ",
      value:
        "スロット, ライブカジノ, ゲームショー, ブラックジャック, バカラ, ルーレット, ポーカー, テーブルゲーム, ビデオポーカー, クラッシュゲーム, スポーツベット, バーチャルスポーツ, eスポーツ",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          NetEnt, Microgaming, <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://casinotsu.com/providers/play-n-go">Play'n GO</Link>, <Link href="https://casinotsu.com/providers/evolution">Evolution</Link>, <Link href="https://casinotsu.com/providers/thunderkick">Thunderkick</Link>, <Link href="https://casinotsu.com/providers/red-tiger">Red Tiger Gaming</Link>, Ezugi, Spinomenal, Quickspin, Playson, Habanero など60社以上
        </span>
      ),
    },
    { label: "最小入金額", value: "$30" },
    { label: "最小出金額", value: "$30" },
    { label: "電話サポート", value: "❌ (WhatsAppは有り)" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@cosmoswin.com">support@cosmoswin.com</Link> },
    { label: "ライブチャット", value: "24時間日本語対応" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "Cosmoswin（コスモスウィン）は、2019年にローンチされた宇宙をテーマにしたユニークな仮想通貨カジノです。",
      "可愛らしいキャラクターが案内する近未来的なデザインが特徴で、スロットやライブカジノ、特にブラックジャックのラインナップが充実しています。",
      "元々は仮想通貨専門でしたが、現在は法定通貨の決済方法も追加され、より多くのプレイヤーが利用しやすくなりました。CasinoTsu経由の特別なウェルカムボーナスで、お得に宇宙の旅を始めましょう。",
    ],
    ctas: [
      { text: "👉 Cosmoswinで今すぐプレイ！", href: "https://go.casinotsu.com/go/cosmoswin:cosmoswin?referrer_path=%2Freviews%2Fcosmoswin" },
      { text: "💰 CasinoTsu限定ボーナスをGETする", href: "#" },
    ],
  },
  games: [
    "Cosmoswinでは60社以上のプロバイダーから提供される多様なゲームを楽しめます。スロットは約2,000種類以上あり、人気のクラッシュゲームもプレイ可能です。",
    "ライブカジノとゲームショーは約750種類と非常に豊富で、EvolutionやPragmatic Playといったトッププロバイダーのテーブルで臨場感あふれる体験ができます。",
    "さらに、35種類以上のスポーツ、月間30,000件以上の試合にベットできる本格的なスポーツブックも完備しており、カジノとスポーツの両方を楽しみたいプレイヤーに最適です。",
  ],
  features: [
    "Cosmoswinは専用アプリを提供していませんが、モバイルブラウザに完全最適化されており、スマートフォンやタブレットからでもストレスなくスムーズにプレイできます。",
  ],
  editorial: {
    author: "CasinoTsu編集部",
    profileHref: "/authors",
    hook: "仮想通貨カジノからオールラウンドなカジノへと進化。限定ボーナスは見逃せません。",
    theGoodStuff: "仮想通貨だけでなく電子ウォレットやカード決済にも対応したことで、利便性が大幅に向上しました。2,000以上のスロットと750以上のライブゲーム、そして本格的なスポーツブックを一つのアカウントで楽しめるのは大きな魅力です。",
    theHeadsUp: "日本円が使えず、プレイ通貨が米ドル（USD）に限定される点は注意が必要です。また、通常のウェルカムボーナスがないため、CasinoTsuからの限定オファーを活用することが重要になります。",
    finalThought: "Cosmoswinは、豊富なゲームと決済オプション、そして充実したサポート体制を備えた、クリプトユーザーはもちろん、幅広いプレイヤーにおすすめできるカジノです。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "CasinoTsuがCosmoswinをレビューした結果、このカジノは当初の仮想通貨特化型から、より幅広いプレイヤー層を受け入れる総合オンラインカジノへと見事に進化を遂げたと評価します。近未来的な宇宙のテーマと可愛いキャラクターは、サイトを訪れるだけでも楽しい気分にさせてくれます。",
      "ゲームのラインナップは圧巻です。60社以上のプロバイダーが提供するスロット、テーブルゲーム、そして約750種類にも及ぶライブカジノは、どんなプレイヤーでも満足させるでしょう。さらに、本格的なスポーツブックが統合されているため、カジノファンとスポーツファンの両方が一つの場所で楽しめる点は大きな強みです。",
      "決済方法の多様化は、このカジノの利便性を飛躍的に向上させました。仮想通貨に不慣れなプレイヤーでも、電子ウォレットやクレジットカードで気軽に参加できます。24時間対応の日本語サポートも、プレイヤーにとって心強い存在です。",
      "注意点としては、プレイ通貨が米ドルであること、そして公式サイトに恒常的なウェルカムボーナスがないことが挙げられます。しかし、後者についてはCasinoTsuが提供する限定ボーナスを利用することで、非常にお得にゲームを始めることが可能です。",
      "総じて、Cosmoswinはデザイン性、ゲームの多様性、利便性を高いレベルで両立させた、今後がさらに期待されるオンラインカジノです。",
    ],
  },
  security: [
    "キュラソー政府発行のライセンス（1668/JAZ）を取得して合法的に運営",
  ],
  responsiblePlay: [
    "賭け金制限ツール",
    "損失制限ツール",
    "セッション時間制限ツール",
    "クールオフ期間",
    "リアリティチェック",
    "自己診断テスト",
    "出金ロック",
    "自己排除（ライブチャットまたはEメールで申請）",
  ],
  complaintStats: [
    "AskGamblersでのプレイヤー評価: 9.1/10 (レビュー数: 7件)",
  ],
  awards: [],
  restrictedCountries: [
    "オーストラリア",
    "ベルギー",
    "フランス",
    "イタリア",
    "オランダ",
    "イギリス",
    "アメリカ合衆国",
  ],
  userConcerns: [
    "日本円（JPY）でのプレイができない",
    "公式サイトに標準のウェルカムボーナスがない（限定オファーの活用が必須）",
  ],
  summary: [
    "宇宙をテーマにしたデザインが魅力的な仮想通貨対応カジノ。",
    "現在は電子ウォレットやクレジットカードなど多様な決済方法が利用可能。",
    "2,000種類以上のスロット、750種類以上のライブカジノ、本格的なスポーツブックを完備。",
    "CasinoTsu限定の豪華なウェルカムボーナスを活用してお得に始められます。",
  ],
  extraLinks: [
    { text: "🚀 仮想通貨で遊べるおすすめカジノ特集", href: "https://casinotsu.com/crypto" },
  ],
  faq: [
    {
      question: "Cosmoswinでは日本円で遊べますか？",
      answer: "いいえ。プレイ通貨は米国ドル（USD）または仮想通貨となります。日本円は直接ご利用いただけません。",
    },
    {
      question: "Cosmoswinに入金不要ボーナスはありますか？",
      answer: "現在、入金不要ボーナスは提供されておりません。ただし、CasinoTsu経由の限定ウェルカムボーナスやスーパーノヴァボーナスがございます。",
    },
    {
      question: "Cosmoswinのライセンス番号は？",
      answer: "ライセンス番号は 1668/JAZ です。",
    },
    {
      question: "Cosmoswinでスポーツベットはできますか？",
      answer: "はい、35種類以上のスポーツ、月間30,000件以上の試合にベットできるスポーツブックを提供しています。ライブベット、eスポーツ、バーチャルスポーツも楽しめます。",
    },
    {
      question: "Cosmoswinで利用できる通貨は何ですか？",
      answer: "米国ドル（USD）と、ビットコイン（BTC）、イーサリウム（ETH）をはじめとする様々な仮想通貨が利用可能です。その他、アルゼンチンペソ（ARS）、カナダドル（CAD）、メキシコ・ペソ（MXN）、ニュージーランドドル（NZD）などの法定通貨もサポートしています。",
    },
    {
      question: "Cosmoswinで登録できない国はありますか？",
      answer: "はい、オーストラリア、ベルギー、フランス、イタリア、オランダ、イギリス、アメリカ合衆国など、一部の国からはアクセスおよび登録が制限されています。",
    },
    {
      question: "Cosmoswinのプレイヤーレビューでの評価は？",
      answer: "AskGamblersでのプレイヤー評価は、9.1/10と高評価を得ています（レビュー数：7件）。",
    },
  ],
  cta: {
    text: "CasinoTsu限定ボーナスでCosmoswinに登録！",
    href: "https://go.casinotsu.com/go/cosmoswin:cosmoswin?referrer_path=%2Freviews%2Fcosmoswin",
  },
};