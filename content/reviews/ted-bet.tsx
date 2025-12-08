import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewTedBet: ReviewPageContent = {
  hero: {
    title: "テッドベット（TedBet）レビュー",
    subheading: "最大¥204,500ボーナス + 200回フリースピン",
    description: "ボンズカジノの姉妹サイト【TedBet（テッドベット）】をCasinoTsuが詳しく解説。豊富な決済方法、豪華なボーナス、そしてサイトの使いやすさを徹底検証しました。",
    score: 4.3,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 90,
        note: "豊富なプロモーションと24時間対応の日本語サポートが人気。サイトも日本向けに作りこまれており、さらなる進化が期待される。",
      },
      {
        label: "規約",
        percent: 74,
        note: "ジャパカジ限定¥4,500入金不要ボーナスや最大20万円のウェルカムボーナスは魅力的だが、利用規約やルールがやや複雑。",
      },
      {
        label: "操作性",
        percent: 90,
        note: "スロットのフィルター機能など、ゲーム検索が非常に使いやすく、ページ移動もスムーズで快適。",
      },
      {
        label: "サポート",
        percent: 90,
        note: "24時間対応の日本語ライブチャットは大きな魅力。返信も比較的早く、スムーズな対応が期待できる。",
      },
    ],
    highlights: [
      "ジャパカジ限定！¥4,500の入金不要ボーナス",
      "初回から5回目まで続く、最大約40万円相当の超豪華ウェルカムボーナス",
      "ゲーム数が豊富で、検索機能も非常に使いやすい",
      "24時間年中無休の日本語ライブチャットサポート",
      "PayPay銀行など豊富な決済方法に対応",
    ],
    watchouts: [
      "ボーナス規約が複雑で分かりにくい場合がある",
      "Casino.guruの安全指数が5.4/10と平均以下",
      "利用規約が「不公平」と評価されており、勝利金没収に関する過去の苦情報告がある",
      "リアルマネー入金額に3倍の賭け条件が適用される",
    ],
    avatarSrc: "/assets/casino/tedbet.png",
    avatarAlt: "Ted betのロゴ",
  },
  payments: {
    featured: [
      {
        name: "PayPay銀行",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://casinotsu.com/payment/bank-transfer",
        badge: "銀行振込",
        note: "日本のプレイヤーに便利な銀行送金に対応",
      },
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://casinotsu.com/payment/visa",
        badge: "人気",
        note: "定番のクレジットカード決済",
      },
      {
        name: "Vega Wallet",
        icon: "/assets/payments/vega-wallet.svg",
        href: "https://casinotsu.com/payment/vega-wallet",
        badge: "Eウォレット",
        note: "迅速な処理が可能な電子ウォレット",
      },
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "主要な仮想通貨での決済が可能",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://casinotsu.com/payment/payz",
        badge: "Eウォレット",
        note: "多くのカジノで採用されている決済手段",
      },
    ],
    deposits: [
      { name: "VISA", icon: "/assets/payments/visa.svg" },
      { name: "Mastercard", icon: "/assets/payments/mastercard.svg" },
      { name: "American Express", icon: "/assets/payments/american-express.svg" },
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "iWallet", icon: "/assets/payments/iwallet.svg", href: "https://casinotsu.com/payment/iwallet" },
      { name: "Tiger Pay", icon: "/assets/payments/tiger-pay.svg", href: "https://casinotsu.com/payment/tiger-pay" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vega-wallet" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg", href: "https://casinotsu.com/payment/muchbetter" },
      { name: "Binance Pay" },
      { name: "P2Pバンキング" },
      { name: "銀行送金", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg" },
      { name: "Ripple" },
      { name: "Litecoin" },
      { name: "BinanceCoin" },
      { name: "Toncoin" },
      { name: "Tether TRC20" },
      { name: "USDCoin" },
      { name: "TRX" },
    ],
    withdrawals: [
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "iWallet", icon: "/assets/payments/iwallet.svg", href: "https://casinotsu.com/payment/iwallet" },
      { name: "Tiger Pay", icon: "/assets/payments/tiger-pay.svg", href: "https://casinotsu.com/payment/tiger-pay" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vega-wallet" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg", href: "https://casinotsu.com/payment/muchbetter" },
      { name: "P2Pバンキング" },
      { name: "銀行送金", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg" },
      { name: "Ripple" },
      { name: "Litecoin" },
      { name: "Tether TRC20" },
    ],
    notes: [
      "PayPay銀行からの入金にも対応しています。",
      "最低入金額は$5、最低出金額は$20です。",
      "月間の最高出金額は$100,000です。",
      "ボーナスを利用しない場合でも、入金額には3倍の賭け条件が適用されます。",
    ],
  },
  bonuses: {
    overview:
      "テッドベットは新規・既存プレイヤー向けに非常に多彩なボーナスを提供しています。ジャパカジ限定の豪華な入金不要ボーナスから始まり、5回目までの入金で最大約40万円相当のボーナス、フリースピン、キャッシュバック、リベートボーナスまで、あらゆるプレイヤーのニーズに応えるプロモーションが揃っています。",
    noDeposit:
      "ジャパカジ経由で登録し、ボーナスコード「japacasi45」を入力すると、¥4,500の入金不要ボーナスがもらえます。賭け条件は30倍です。",
    extraSpins: {
      summary:
        "初回入金（¥2,000以上）を行うと、Avatar UX社のスロット『Cherry Pop』で使える200回のフリースピンがもらえます。毎日20スピンずつ、10日間にわたって付与されます。",
      schedule: [],
      warning: "フリースピンの賭け条件については利用規約をご確認ください。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "最大200%", cap: "¥200,000", code: "不要" },
      { depositNumber: "2回目", percent: "100%", cap: "¥30,000", code: "不要" },
      { depositNumber: "3回目", percent: "50%", cap: "¥40,000", code: "不要" },
      { depositNumber: "4回目", percent: "50%", cap: "¥50,000", code: "不要" },
      { depositNumber: "5回目", percent: "25%", cap: "¥75,000", code: "不要" },
    ],
    conditions: [
      "初回入金ボーナスは入金額に応じてボーナス率と最大額が変動します（例：¥50,000以上の入金で100%最大¥200,000）。",
      "ボーナスは一体型で、賭け条件は（入金額＋ボーナス額）に適用されます。賭け条件は20倍から30倍です。",
      "有効期限は30日間です。",
      "ボーナスからの勝利金出金上限は、ボーナス額の10倍～30倍です。",
      "スポーツベットでも利用可能ですが、賭け条件が異なります。",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "キャッシュバックボーナス",
      description: "スロット、ライブカジノ、スポーツベットでの損失額の一部が還元されます。還元率（最大10%）や賭け条件（最大6倍～0倍）はVIPステータスによって変動します。",
      highlight: "有効化には入金が必要な場合があります",
    },
    {
      title: "リベートボーナス",
      description: "ベット額の一部が還元されるリベートボーナスもあります。還元率はVIPステータスとゲームの種類によって決まります。",
    },
    {
      title: "アチーブメント機能",
      description: "ゲーム内のクエストをクリアすることで、様々な特典を獲得できるやり込み要素です。",
    },
  ],
  facts: [
    { label: "名称", value: "Tedbet (テッドベット)" },
    { label: "ローンチ", value: "2022年5月3日" },
    { label: "運営会社", value: "Owl In N.V." },
    { label: "ライセンス", value: "Curaçao Gaming Control Board (8048/JAZ 2019-055)" },
    { label: "VIPプログラム", value: "✅ (全7レベル)" },
    { label: "対応言語", value: "日本語、英語など" },
    { label: "対応通貨", value: "JPY, USDなど" },
    {
      label: "ゲームタイプ",
      value: "スロット, ライブカジノ, テーブルゲーム, ゲームショー, スポーツベット",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          合計75社。
          <Link href="https://casinotsu.com/providers/play-n-go">Play’n GO</Link>, <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://casinotsu.com/providers/netent">NetEnt</Link>, <Link href="https://casinotsu.com/providers/evolution">Evolution</Link>, <Link href="https://casinotsu.com/providers/nolimit-city">Nolimit City</Link>, <Link href="https://casinotsu.com/providers/relax-gaming">Relax Gaming</Link>, <Link href="https://casinotsu.com/providers/yggdrasil">Yggdrasil</Link> など
        </span>
      ),
    },
    { label: "最小入金額", value: "$5" },
    { label: "最小出金額", value: "$20" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅ (en_support@tedbet.com)" },
    { label: "Eメール", value: <Link href="mailto:en_support@tedbet.com">en_support@tedbet.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (24時間日本語対応)" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "2022年5月にサービスを開始したTedBet（テッドベット）は、人気カジノ「ボンズカジノ」の姉妹サイトとして注目を集めています。",
      "ボンズカジノのダークな雰囲気とは対照的に、テッドベットは明るく親しみやすいデザインが特徴です。ゲームプロバイダーの豊富さや多彩な決済方法といったボンズカジノの強みはそのままに、独自の魅力を加えています。",
      "特にPayPay銀行での入金に対応している点は、日本のプレイヤーにとって大きなメリットです。このレビューでは、テッドベットの全貌を徹底的に解剖します。",
    ],
    ctas: [
      { text: "🐻 今すぐ¥4,500ボーナスをゲット！", href: "https://go.japanesecasino.com/go/tedbet:tedbet?referrer_path=%2Freviews%2Ftedbet" },
    ],
  },
  games: [
    "テッドベットは75社のゲームプロバイダーと提携し、2,000種類以上の豊富なゲームを提供しています。スロット、ライブカジノ、スポーツベットまで、あらゆるジャンルを網羅しています。",
    "特筆すべきは、Evolution社提供の独占ライブカジノテーブル「サムライスタジオ」です。日本語を話すディーラーとチャットを楽しみながらプレイできる、特別な空間です。",
    "スロットのフィルター機能も非常に優秀で、テーマやプロバイダー、ボラティリティなどで絞り込み、好みのゲームを簡単に見つけることができます。",
  ],
  features: [
    "ボンズカジノの姉妹サイトでありながら、明るく親しみやすい独自のサイトデザインを採用しています。",
    "24時間対応の日本語ライブチャットサポートがあり、初心者でも安心して利用できます。",
    "VIPプログラムは全7レベルで構成されており、レベルが上がるほどキャッシュバックやリベートボーナスの条件が有利になります。",
  ],
  editorial: {
    author: "CasinoTsu編集部",
    profileHref: "/authors",
    hook: "豪華なボーナスと優れた操作性が光る一方、規約の複雑さと外部評価の低さには注意が必要です。",
    theGoodStuff: "合計で最大約40万円にもなるウェルカムパッケージは、業界でもトップクラスの豪華さです。24時間対応の日本語サポートと、PayPay銀行にも対応した豊富な決済方法は、日本のプレイヤーにとって非常に魅力的です。",
    theHeadsUp: "しかし、Casino.guruなどの外部評価サイトでの安全指数が平均以下である点は懸念材料です。過去に勝利金没収に関する未回答の苦情が報告されており、利用規約が「不公平」と評されていることも事実です。また、ボーナス規約が複雑なため、利用前には十分な確認が必要です。",
    finalThought: "テッドベットは、豊富なゲームとボーナス、高い操作性を備えた魅力的なカジノです。しかし、利用する際は外部からの評価も踏まえ、ボーナス規約をしっかり理解した上で、自己責任の範囲で楽しむことが重要です。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "テッドベットは、2022年に登場したボンズカジノの姉妹サイトとして、多くのプレイヤーから期待を集めました。その期待に応えるように、プラットフォームは非常に高い完成度を誇っています。まず目を引くのが、その圧倒的なボーナスのボリュームです。ジャパカジ限定の4,500円入金不要ボーナスから始まり、5回目の入金まで続く最大395,000円のウェルカムパッケージは、プレイヤーに強力なスタートダッシュを提供します。さらに、キャッシュバック、リベートボーナス、アチーブメント機能といった継続的なプロモーションも充実しており、長く楽しめる工夫が凝らされています。",
      "サイトのユーザビリティも特筆すべき点です。明るく見やすいデザインに加え、特にスロットの検索フィルター機能は秀逸で、膨大なゲームの中からでも目的のタイトルに素早くたどり着けます。決済方法もPayPay銀行を含む銀行振込や各種Eウォレット、仮想通貨と幅広く対応しており、利便性は非常に高いです。24時間対応の日本語ライブチャットも、困ったときにいつでも頼れる心強い存在です。",
      "一方で、手放しで推奨できない懸念点も存在します。Casino.guruなどの第三者評価機関による安全指数が平均以下であり、利用規約の一部がプレイヤーに不利であると指摘されています。過去には、正当性が不明確なまま勝利金が没収されたというプレイヤーからの苦情が未解決のまま残っているという報告もあります。これらの情報は、カジノの透明性と公正性に対する信頼を揺るがしかねません。",
      "結論として、テッドベットは「ハイリスク・ハイリターン」な側面を持つカジノと言えます。豪華なボーナスと優れたプラットフォームは大きな魅力ですが、その裏には潜在的なリスクも存在します。CasinoTsuとしては、これらの事実をすべてお伝えした上で、プレイヤー自身が情報を吟味し、自己責任の範囲で賢く利用することを推奨します。特にボーナスを利用する際は、複雑な規約を注意深く読み解くことが不可欠です。",
    ],
  },
  security: [
    "Curaçao Gaming Control Board発行のライセンス（8048/JAZ 2019-055）を保有。",
    "運営会社はボンズカジノと同じOwl In N.V.。",
    "RNG（乱数発生器）によりゲームの公平性を保証。",
    "サイト下部にプライバシーポリシーや利用規約を明記。",
  ],
  responsiblePlay: [
    "サイト下部の「責任あるゲームプレイ」セクションにて、自己規制に関する情報を提供。",
    "プレイヤーはサポートに連絡することで、プレイ時間や入金額の制限、自己排除などを設定可能。",
  ],
  complaintStats: [
    "Casino.guruの安全指数は5.4/10と平均以下。",
    "$3,000と$5,000の勝利金没収に関する2件の苦情に対し、カジノからの返答がなかったと報告されている。",
    "プレイヤーからの苦情の総額がカジノの規模に比べて高額であると指摘されている。",
    "CasinoFreak.comでは「ブラックメダル」評価を受けている。",
  ],
  awards: [],
  restrictedCountries: [],
  userConcerns: [
    "出金時間が遅いという口コミが一部で見られる。",
    "ボーナスの利用規約やルールが複雑で分かりにくい。",
    "過去の勝利金没収事例や、第三者機関による低い安全性評価。",
  ],
  summary: [
    "ボンズカジノの姉妹サイトで、非常に豪華なウェルカムボーナスと豊富なゲーム数が魅力。",
    "サイトの操作性、特にゲーム検索機能が優れており、24時間日本語サポートも完備。",
    "PayPay銀行に対応するなど、決済方法が多彩で便利。",
    "一方で、第三者機関からの安全性評価は低く、過去の出金トラブルも報告されているため、利用には注意が必要。",
  ],
  extraLinks: [
    { text: "🔰 賭け条件ってなに？わかりやすく解説！", href: "https://casinotsu.com/guides/wagering-requirements" },
  ],
  faq: [
    {
      question: "テッドベットは安全ですか？",
      answer: "キュラソーライセンスを保有し合法的に運営されていますが、Casino.guruなどの第三者機関からは安全性が平均以下と評価されており、過去には勝利金没収に関する苦情も報告されています。利用は自己責任でご判断ください。",
    },
    {
      question: "テッドベットでは仮想通貨が利用できますか？",
      answer: "はい。ビットコイン、イーサリアム、リップルなど11種類の仮想通貨に対応しています。",
    },
    {
      question: "テッドベットにスマートフォン専用アプリはありますか？",
      answer: "はい、AndroidおよびiOS向けのモバイルアプリが提供されています。",
    },
    {
      question: "テッドベットの入金不要ボーナスのボーナスコードはどこで入力しますか？",
      answer: "登録ページのボーナスコード入力欄に【japacasi45】と入力することで、¥4,500のボーナスが付与されます。",
    },
  ],
  cta: {
    text: "超豪華ウェルカムボーナスでテッドベットを遊び尽くせ！",
    href: "https://go.japanesecasino.com/go/tedbet:tedbet?referrer_path=%2Freviews%2Ftedbet",
  },
};