import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewBons: ReviewPageContent = {
  hero: {
    title: "ボンズカジノ（Bons）レビュー",
    subheading: "限定¥5,000入金不要ボーナス + 最大$3,950ウェルカムパッケージ",
    description: "マインクラフト風のユニークなテーマと、特大ボーナスが魅力のモダンなオンラインカジノ、Bonsカジノ。豊富な決済方法と最大35%のキャッシュバック制度をCasinoTsuが徹底解説します。",
    score: 4.6,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 95,
        note: "ユニークなテーマと豪華なボーナスで高い人気を誇る。キャッシュバック制度もプレイヤーに好評。",
      },
      {
        label: "規約",
        percent: 82,
        note: "ボーナスは非常に豪華だが、賭け条件が一体型でやや厳しめ。リアルマネーの出金条件も注意が必要。",
      },
      {
        label: "操作性",
        percent: 97,
        note: "サイトデザインがユニークで、ボラティリティフィルターなど検索機能が非常に優れている。",
      },
      {
        label: "サポート",
        percent: 94,
        note: "24時間年中無休の日本語サポートは心強いが、対応品質にばらつきがあるとの声も。",
      },
    ],
    highlights: [
      "限定5,000円の入金不要ボーナス",
      "最大$3,950の超豪華ウェルカムボーナス",
      "損失額の最大35%が還元されるキャッシュバック制度",
      "豊富な決済方法（法定通貨＆仮想通貨）",
      "スポーツベットも楽しめるハイブリッドカジノ",
    ],
    watchouts: [
      "ボーナスの賭け条件が一体型でやや厳しい（20～30倍）",
      "出金に際し、入金額の3倍のベットが必要",
      "外部サイトでの安全性評価が平均以下との指摘あり",
      "出金遅延（特に銀行振込）の報告が一部で見られる",
    ],
  },
  payments: {
    featured: [
      {
        name: "クレジットカード",
        icon: "/assets/payments/visa.svg",
        href: "https://casinotsu.com/payment/visa",
        badge: "人気",
        note: "VISA, Master, JCBなど主要ブランド対応",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://casinotsu.com/payment/payz",
        badge: "Eウォレット",
        note: "迅速な入出金で利便性が高い",
      },
      {
        name: "銀行振込",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://casinotsu.com/payment/bank-transfer",
        badge: "安心",
        note: "PayPay銀行や地方銀行にも対応",
      },
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "主要な仮想通貨での入出金が可能",
      },
      {
        name: "Vega Wallet",
        icon: "/assets/payments/vega-wallet.svg",
        href: "https://casinotsu.com/payment/vega-wallet",
        badge: "ポイント制",
        note: "ポイントでの資金管理が便利",
      },
    ],
    deposits: [
      { name: "VISA", icon: "/assets/payments/visa.svg" },
      { name: "MasterCard", icon: "/assets/payments/mastercard.svg" },
      { name: "JCB", icon: "/assets/payments/jcb.svg" },
      { name: "Diners Club" },
      { name: "DISCOVER" },
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg", href: "https://casinotsu.com/payment/muchbetter" },
      { name: "STICPAY", icon: "/assets/payments/sticpay.svg", href: "https://casinotsu.com/payment/sticpay" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vega-wallet" },
      { name: "銀行送金 (PayPay銀行／即時銀行振込／地方銀行)", icon: "/assets/payments/bank-transfer.svg" },
      { name: "iWallet" },
      { name: "TIGER PAY" },
      { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg" },
      { name: "Litecoin (LTC)" },
      { name: "Ripple (XRP)" },
      { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg" },
      { name: "Cardano (ADA)" },
      { name: "BinanceCoin (BNB)" },
      { name: "BinanceUSD (BUSD)" },
      { name: "Dogecoin (DOGE)" },
      { name: "USD Coin (USDC)" },
      { name: "Tether ERC20 (USDTE)" },
      { name: "Tether TRC20 (USDTT)" },
      { name: "Solana (SOL)" },
      { name: "Polygon (MATIC)" },
      { name: "Toncoin (TON)" },
      { name: "Telegram (TG) Wallet" },
      { name: "MoneyGram" },
      { name: "Interac" },
    ],
    withdrawals: [
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg", href: "https://casinotsu.com/payment/muchbetter" },
      { name: "STICPAY", icon: "/assets/payments/sticpay.svg", href: "https://casinotsu.com/payment/sticpay" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vega-wallet" },
      { name: "銀行振込", icon: "/assets/payments/bank-transfer.svg" },
      { name: "iWallet" },
      { name: "TIGER PAY" },
      { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg" },
      { name: "Litecoin (LTC)" },
      { name: "Ripple (XRP)" },
      { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg" },
      { name: "Cardano (ADA)" },
      { name: "BinanceCoin (BNB)" },
      { name: "BinanceUSD (BUSD)" },
      { name: "Dogecoin (DOGE)" },
      { name: "USD Coin (USDC)" },
      { name: "Tether ERC20 (USDTE)" },
      { name: "Tether TRC20 (USDTT)" },
      { name: "Solana (SOL)" },
      { name: "Polygon (MATIC)" },
      { name: "Toncoin (TON)" },
      { name: "Telegram (TG) Wallet" },
    ],
    notes: [
      "1日の入金手数料は2回まで無料です。",
      "月間の出金限度額は$100,000です。勝利金の上限はありません。",
      "出金するには、入金額の3倍以上のベットが必要です（マネーロンダリング対策）。",
    ],
  },
  bonuses: {
    overview:
      "ボンズカジノのボーナスは業界でもトップクラスの豪華さです。CasinoTsu限定の入金不要ボーナスから始まり、5回目の入金まで続くウェルカムパッケージ、さらにキャッシュバックやVIP特典まで、あらゆるプレイヤーにお得な機会を提供しています。",
    noDeposit:
      "CasinoTsu経由で新規登録し、ボーナスコード「japacasi」を入力、本人確認（KYC）を完了すると、¥5,000のボーナスマネーと人気スロット「Moon Princess」で使える20回のフリースピンが無料で進呈されます。",
    extraSpins: {
      summary:
        "初回入金（$20以上）を行うと、Avatar UX社のスロット「Cherry Pop」で使える合計200回のフリースピンが追加で付与されます。",
      schedule: [
        "初回入金後に20回のフリースピンが即時付与",
        "その後、9日間にわたって毎日20回ずつ、合計200回が付与される",
      ],
      warning: "フリースピンで得た勝利金には20倍の賭け条件が適用されます。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "50%~200%", cap: "$2,000", code: "不要" },
      { depositNumber: "2回目", percent: "100%", cap: "$300", code: "不要" },
      { depositNumber: "3回目", percent: "50%", cap: "$400", code: "不要" },
      { depositNumber: "4回目", percent: "50%", cap: "$500", code: "不要" },
      { depositNumber: "5回目", percent: "25%", cap: "$750", code: "不要" },
    ],
    conditions: [
      "賭け条件は（ボーナス額＋入金額）に対して20倍～30倍の一体型。",
      "ボーナスマネーでの最大ベット額は、受け取ったボーナス額の20％以下。",
      "リアルマネーのみでプレイする場合、出金条件は入金額の3倍。",
      "各ゲームの賭け条件消化率（コントリビューション）はサイトで確認が必要。",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "選べるウェルカムギフト",
      description: "初回入金時に、カジノの入金ボーナスとフリースピンに加えて、ライブカジノで使える$10バウチャー、またはスポーツベットで使える$10フリーベットのいずれかを選択できます。",
      highlight: "プレイスタイルに合わせて追加特典が選べる",
    },
    {
      title: "最大35%キャッシュバック＆リベート",
      description: "VIPステータスに応じて、カジノゲーム、ライブカジノ、スポーツベットの損失額の一部がキャッシュバックされます。最高ランクではカジノで20%、スポーツで12.5%が還元されます。また、ベット額に応じたリベートボーナスもあります。",
      highlight: "賭け条件はランクが上がると緩和され、最高で0倍になる",
    },
  ],
  facts: [
    { label: "名称", value: "ボンズカジノ (Bons Casino)" },
    { label: "ローンチ", value: "2019年" },
    { label: "運営会社", value: "Owl In N.V. / NestlingCorn Limited" },
    { label: "ライセンス", value: "Curaçao (Antillephone License Validation)" },
    { label: "VIPプログラム", value: "✅" },
    { label: "対応言語", value: "日本語、英語、フィリピン語など" },
    { label: "対応通貨", value: "JPY, USD, EUR, 各種仮想通貨" },
    {
      label: "ゲームタイプ",
      value:
        "スロット, ライブカジノ, ブラックジャック, ルーレット, ポーカー, ゲームショー, スポーツベット, eスポーツ, バーチャルスポーツ, クラッシュゲーム, スクラッチカード, ビンゴ, ケノ",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          85社以上: <Link href="https://casinotsu.com/providers/microgaming">Microgaming</Link>, <Link href="https://casinotsu.com/providers/netent">NetEnt</Link>, <Link href="https://casinotsu.com/providers/play-n-go">Play’n GO</Link>, <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://casinotsu.com/providers/playtech">Playtech</Link>, <Link href="https://casinotsu.com/providers/big-time-gaming">Big Time Gaming</Link>, <Link href="https://casinotsu.com/providers/relax-gaming">Relax Gaming</Link>, <Link href="https://casinotsu.com/providers/quickspin">Quickspin</Link>, <Link href="https://casinotsu.com/providers/yggdrasil">Yggdrasil</Link>, <Link href="https://casinotsu.com/providers/red-tiger">Red Tiger</Link>, <Link href="https://casinotsu.com/providers/evolution">Evolution Gaming</Link> など
        </span>
      ),
    },
    { label: "最小入金額", value: "¥500" },
    { label: "最小出金額", value: "情報なし" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:ja_support@bons.com">ja_support@bons.com</Link> },
    { label: "ライブチャット", value: "24時間年中無休" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "ボンズカジノは、マインクラフトを彷彿とさせるユニークなデザインが特徴的な、2019年設立のオンラインカジノです。",
      "見た目の楽しさだけでなく、合計最大$3,950という業界屈指のウェルカムパッケージや、損失額の最大35%を還元する手厚いキャッシュバック制度など、中身も非常に充実しています。",
      "カジノゲームからスポーツベットまで幅広くカバーし、決済方法も法定通貨・仮想通貨ともに豊富。CasinoTsuでは、特に大きなボーナスを求めているプレイヤーにボンズカジノを推薦します。まずは限定の入金不要ボーナスから試してみましょう。",
    ],
    ctas: [
      { text: "👉 ボンズカジノで限定ボーナスをGET！", href: "https://go.casinotsu.com/go/bons-com" },
      { text: "💸 限定オファーの詳細をチェック", href: "https://casinotsu.com/offers/bons-exclusive" },
    ],
  },
  games: [
    "ボンズカジノは85社以上のゲームプロバイダーと提携し、1,700種類以上のスロットを含む膨大なゲームセレクションを提供しています。人気の『Book of Dead』や『Gates of Olympus』はもちろん、最新作も随時追加されます。",
    "特筆すべきは、日本人ディーラーが日本語で進行する独占ライブカジノテーブル「サムライスタジオ」の存在です。Evolution GamingやPragmatic Play Liveなど5社のライブプロバイダーが参加しており、臨場感あふれる体験が可能です。",
    "さらに、日本のプロ野球やJリーグにも対応したスポーツベットも楽しめ、一つのアカウントで多様なギャンブルを網羅できるハイブリッドカジノです。",
  ],
  features: [
    "ゲーム検索機能が非常に優れており、特に「ボラティリティフィルター」は画期的です。スライダーを調整するだけで、高配当狙いのハイボラティリティ機種から、コツコツ勝ちたいローボラティリティ機種まで、好みのスロットを簡単に見つけられます。",
    "近年人気の「ボーナス購入機能」を持つスロットも一覧で表示でき、効率的にゲームを楽しみたいプレイヤーのニーズに応えています。",
    "公式のスマホアプリがiOSとAndroidの両方で用意されており、ブラウザ版と変わらない快適なモバイル体験を提供しています。",
  ],
  editorial: {
    author: "CasinoTsu編集部",
    profileHref: "/authors",
    hook: "ボーナスの規模は圧倒的。しかし、その規約と外部からの安全性評価には注意が必要です。",
    theGoodStuff: "合計最大$3,950のウェルカムボーナスと、限定¥5,000の入金不要ボーナスは、プレイヤーにとって非常に大きな魅力です。最大35%のキャッシュバック制度や、豊富な決済方法も高く評価できます。",
    theHeadsUp: "ボーナスの賭け条件が（入金額＋ボーナス額）にかかる一体型であるため、見た目よりも達成は困難です。また、Casino Guruによる安全性評価が『平均以下』であることや、高額な支払い拒否の報告が一部にある点は無視できません。",
    finalThought: "ボンズカジノは、ハイリスク・ハイリターンを好むプレイヤー向けのプラットフォームと言えるでしょう。豪華なボーナスを最大限に活用できる可能性がある一方で、規約の厳しさや安全性の懸念も理解した上で、自己責任で楽しむ必要があります。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "CasinoTsuがボンズカジノをレビューするにあたり、まず目を引くのはその独特な世界観と圧倒的なボーナスです。マインクラフト風のデザインは他のカジノと一線を画し、プレイヤーに新鮮な印象を与えます。そして、新規プレイヤーを惹きつけるのは、何と言っても合計最大$3,950にも及ぶウェルカムパッケージと、当サイト限定の¥5,000入金不要ボーナスでしょう。この規模のオファーは業界でも類を見ず、大きなアドバンテージを手にゲームを始められます。",
      "機能面では、特にゲーム検索の使いやすさが際立っています。ボラティリティでスロットを絞り込めるフィルター機能は、プレイヤーが自分の戦略に合ったゲームを効率的に見つけるのに非常に役立ちます。また、85社以上のプロバイダーと提携し、カジノからスポーツベットまでを網羅する多様性は、あらゆるプレイヤーの要求に応えるポテンシャルを持っています。",
      "しかし、光が強ければ影も濃くなるのが常です。ボンズカジノのボーナスは、賭け条件が『一体型』であり、出金へのハードルは見た目以上に高いことを認識する必要があります。また、最も注意すべきは安全性に関する外部評価です。Casino Guruが『平均以下』と評価し、高額な支払い拒否の事例を指摘している点は、プレイヤーにとって重大な懸念材料です。出金遅延の口コミも散見されるため、特に高額勝利金の扱いには慎重になるべきでしょう。",
      "総じて、ボンズカジノは大きなリターンを狙える魅力的なプロモーションと、無視できないリスクを併せ持つカジノです。その特性を十分に理解し、まずはリスクのない入金不要ボーナスでサイトの雰囲気を確かめてから、自己責任の範囲で楽しむことをお勧めします。",
    ],
  },
  security: [
    "キュラソーのAntillephone License Validationライセンスを取得し合法的に運営",
    "全ゲームに乱数生成器（RNG）を導入し、公平性を保証",
    "明確な個人情報保護方針（プライバシーポリシー）を公開",
  ],
  responsiblePlay: [
    "カスタマーサポートへの連絡により、カウンセリングサービスの案内やアカウントの一時凍結が可能。",
    "一部のレビューでは、プレイヤーが自己設定できるツールが限定的であると指摘されている。",
  ],
  complaintStats: [
    "Casino Guru: 安全性指数 49.41/100 (平均以下) と評価。高額な支払い拒否に懸念あり。",
    "Trustpilot: 4.0/5 (4件のレビューに基づく)",
    "Chipy.com: 3.2/5",
  ],
  awards: [],
  restrictedCountries: [
    "アメリカ合衆国",
  ],
  userConcerns: [
    "出金拒否・勝利金没収: 一部のプレイヤーから報告あり。",
    "出金遅延: 特に銀行振込で時間がかかるとの声。",
    "入金問題: 資金がアカウントに反映されない事例の報告。",
    "技術的問題: フリースピンの不具合やサーバーパフォーマンスの問題。",
    "不審な電話: 日本のプレイヤーへ見知らぬ人物からの電話があったとの報告。",
    "カスタマーサポートの品質: 回答が定型的、または応答がないとの苦情。",
  ],
  summary: [
    "ユニークなテーマと、限定入金不要ボーナスを含む業界トップクラスの豪華なプロモーションが最大の魅力。",
    "豊富な決済手段と、カジノからスポーツまで網羅するハイブリッドなゲーム体験を提供。",
    "一方で、一体型の厳しい賭け条件や、外部評価機関からの安全性に関する懸念、出金遅延の報告は注意が必要な点。",
    "大きなボーナスで勝負したいプレイヤーには魅力的だが、リスクも理解した上で利用することが推奨される。",
  ],
  extraLinks: [
    { text: "📑 SOWQ（資産源に関する質問書）とは？", href: "https://casinotsu.com/guides/sowq-documents" },
  ],
  faq: [
    {
      question: "ボンズカジノはスポーツベットを提供していますか？",
      answer: "はい、提供しています。日本のプロ野球やJリーグを含む、様々なスポーツやeスポーツにベットできます。",
    },
    {
      question: "ボンズカジノのアプリはありますか？",
      answer: "はい、iOSおよびAndroidデバイス向けの公式モバイルアプリがあります。公式サイトから安全にダウンロードできます。",
    },
    {
      question: "ボンズカジノの「ボラティリティフィルター」とは何ですか？",
      answer: "スロットゲームを検索する際に、ボラティリティ（変動性）の高低で絞り込むことができる機能です。高配当を狙うか、コツコツ勝ちたいかなど、プレイスタイルに合わせてゲームを選べます。",
    },
    {
      question: "ボンズカジノの日本語サイトはいつスタートしましたか？",
      answer: "ボンズカじノの日本語サイトは2020年にサービスを開始しました。",
    },
  ],
  cta: {
    text: "限定ボーナスでボンズカジノを試してみる！",
    href: "https://go.casinotsu.com/go/bons-com",
  },
};