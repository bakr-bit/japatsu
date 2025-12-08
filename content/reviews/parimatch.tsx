import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewParimatch: ReviewPageContent = {
  hero: {
    title: "パリマッチ(Parimatch)レビュー",
    subheading: "最大$1,200ボーナス + 200回賭け条件なしフリースピン",
    description: "2024年11月に日本市場に登場した最新カジノ「パリマッチ」。30年以上の歴史を持つ企業が運営し、8,900種類以上のゲームとシームレスなスポーツベットが魅力。選べるウェルカムボーナスも特徴です。",
    score: 4.2,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 86,
        note: "新規カジノだが運営母体は30年以上の歴史を持つ老舗。海外での知名度も高く、今後の日本での人気上昇に期待大。",
      },
      {
        label: "規約",
        percent: 74,
        note: "スロット・ライブカジノ・スポーツ用と選べるウェルカムボーナスが優秀。ゲームプレイで報酬がもらえるクエスト機能も良い。",
      },
      {
        label: "操作性",
        percent: 90,
        note: "カジノゲームとスポーツベットが同じページに統合されており、非常に快適でストレスフリー。デザインもシンプルで初心者向け。",
      },
      {
        label: "サポート",
        percent: 90,
        note: "レビュー担当者の体験では、24時間年中無休のライブチャットは迅速かつ丁寧。非常に好印象。",
      },
    ],
    highlights: [
      "スロット・ライブカジノ・スポーツから選べる3種類のウェルカムオファー",
      "カジノゲームとスポーツベットを同一ページでシームレスに楽しめる",
      "ゲームをプレイしながら報酬がもらえる独自の「クエスト」機能",
      "8,900種類以上の圧倒的なゲームラインナップ",
    ],
    watchouts: [
      "Casino.Guruの安全性評価が平均以下(5.0/10)",
      "一部プレイヤーから入出金トラブルやサポート対応の遅延が報告されている",
      "VIPプログラムや電話サポートなど一部機能は準備中(2024年11月時点)",
      "責任あるギャンブル機能に矛盾点があるとの指摘",
    ],
    avatarSrc: "/assets/casino/parimatch.png",
    avatarAlt: "Parimatchのロゴ",
  },
  payments: {
    featured: [
      {
        name: "銀行送金",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://casinotsu.com/payment/bank-transfer",
        badge: "人気",
        note: "日本のプレイヤーに安心の決済手段",
      },
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://casinotsu.com/payment/visa",
        badge: "クレジットカード",
        note: "主要なクレジットカードに対応",
      },
      {
        name: "Vega Wallet",
        icon: "/assets/payments/vega-wallet.svg",
        href: "https://casinotsu.com/payment/vega-wallet",
        badge: "Eウォレット",
        note: "迅速で便利な電子ウォレット",
      },
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "9種類の暗号資産に対応",
      },
    ],
    deposits: [
      { name: "銀行送金", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Visa", icon: "/assets/payments/visa.svg" },
      { name: "MasterCard", icon: "/assets/payments/mastercard.svg" },
      { name: "JCB" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vega-wallet" },
      { name: "Payz (ecoPayz)" },
      { name: "Skrill" },
      { name: "Neteller" },
      { name: "MuchBetter" },
      { name: "Jeton" },
      { name: "SticPay" },
      { name: "iWallet" },
      { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg" },
      { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg" },
      { name: "Litecoin (LTC)" },
      { name: "Binance Coin (BNB)" },
      { name: "TRON (TRX)" },
      { name: "Tether (USDT TRC20/ERC20)" },
      { name: "USD Coin (USDC)" },
      { name: "Matic" },
      { name: "Apple Pay" },
      { name: "Google Pay" },
    ],
    withdrawals: [
      { name: "銀行送金", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg" },
      { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg" },
      { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg" },
      { name: "Litecoin (LTC)" },
      { name: "Tether (USDT TRC20/ERC20)" },
      { name: "その他Eウォレット" },
    ],
    notes: [
      "出金は通常4時間以内に処理されるとされていますが、一部プレイヤーからは数週間の遅延が報告されています。",
      "1日の出金限度額は最大$10,000、月間では最大$30,000です。",
      "スムーズな出金のため、アカウント登録後に本人確認(KYC)を完了させることが推奨されます。",
    ],
  },
  bonuses: {
    overview:
      "パリマッチの最大の魅力の一つは、プレイヤーが自身のスタイルに合わせて選べる柔軟なウェルカムボーナスです。スロット、ライブカジノ、インスタントゲーム、スポーツベットの4種類から選択可能。特にスロット・ライブカジノ用のボーナスは4回の入金にわたり、最大$1,200と賭け条件なしのフリースピン200回という豪華な内容です。",
    noDeposit:
      "CasinoTsu限定で、電話番号とメールアドレスの認証を完了するだけで、スロットで使える¥5,250の入金不要ボーナスが提供されます。",
    extraSpins: {
      summary:
        "スロットまたはライブカジノ用のウェルカムボーナスを選択すると、4回の入金にわたって合計200回のフリースピンが付与されます。このフリースピンからの勝利金には賭け条件が一切ないのが大きな特徴です。",
      schedule: [
        "初回入金後: Sweet Bonanza 50回 (賭け条件なし)",
        "2回目入金後: Big Bass Amazon Xtreme 50回 (賭け条件なし)",
        "3回目入金後: Sumo Supreme Megaways 50回 (賭け条件なし)",
        "4回目入金後: The Dog House 50回 (賭け条件なし)",
      ],
      warning: "フリースピンは、各入金ボーナスを使い切った後に利用可能になります。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "150%", cap: "$300", code: "不要" },
      { depositNumber: "2回目", percent: "50%", cap: "$300", code: "不要" },
      { depositNumber: "3回目", percent: "100%", cap: "$300", code: "不要" },
      { depositNumber: "4回目", percent: "100%", cap: "$300", code: "不要" },
    ],
    conditions: [
      "カジノ用入金ボーナスの賭け条件は40倍です。",
      "フリースピンとフリーベットの勝利金には賭け条件がありません。",
      "ボーナスからの最大出金額は、受け取ったボーナス額の5倍までです。",
      "ボーナスを有効化してから7日以内に入金しないと失効します。",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "スポーツベット専用ウェルカムボーナス",
      description: "スポーツファン向けに、4回の入金で最大$1,200のボーナスがもらえるオファーも用意されています。還元率は初回125%、2回目50%、3回目75%、4回目100%です。",
      highlight: "カジノボーナスとは別に選択可能",
    },
    {
      title: "仮想通貨ボーナス【賭け条件なし！】",
      description: "仮想通貨で$10以上入金すると、最大$100の10%ボーナスがもらえます。このボーナスには賭け条件が一切なく、非常にお得です。",
      highlight: "ウェルカムボーナス利用後でも獲得可能",
    },
    {
      title: "オリジナル「クエスト」機能",
      description: "指定されたクエスト（例：「初回入金をする」など）を達成することで、ボーナスやフリースピンがもらえる独自の機能。毎日のプレイをより楽しくします。",
      highlight: "初心者向けの「ブロのシールブック」も有り",
    },
  ],
  facts: [
    { label: "名称", value: "Parimatch (パリマッチ)" },
    { label: "ローンチ", value: "2024年" },
    { label: "運営会社", value: "OLISTEK N.V. (プラットフォーム: SOFTSWISS)" },
    { label: "ライセンス", value: "Curaçao Gaming Control Board (GCB)" },
    { label: "VIPプログラム", value: "✅ (準備中)" },
    { label: "対応言語", value: "日本語、英語" },
    { label: "対応通貨", value: "JPY, USD, EURなど" },
    {
      label: "ゲームタイプ",
      value: "スロット, ライブカジノ, ゲームショー, バカラ, ブラックジャック, ポーカー, ルーレット, スポーツベット, オリジナルゲーム",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          98社以上: <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://casinotsu.com/providers/evolution">Evolution</Link>, <Link href="https://casinotsu.com/providers/play-n-go">Play’n GO</Link>, <Link href="https://casinotsu.com/providers/nolimit-city">Nolimit City</Link>, <Link href="https://casinotsu.com/providers/netent">NetEnt</Link>, <Link href="https://casinotsu.com/providers/relax-gaming">Relax Gaming</Link>, <Link href="https://casinotsu.com/providers/playtech">Playtech</Link>, <Link href="https://casinotsu.com/providers/yggdrasil">Yggdrasil</Link>など
        </span>
      ),
    },
    { label: "最小入金額", value: "¥3,000 ($20)" },
    { label: "最小出金額", value: "情報なし" },
    { label: "電話サポート", value: "❌ (準備中)" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@jp.parimatch.com">support@jp.parimatch.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (24時間年中無休)" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "パリマッチは、2024年11月に日本市場向けにオープンした最新のオンラインカジノです。しかしその背景には、30年以上前に設立された歴史ある企業と、業界大手のSOFTSWISSプラットフォームが存在し、新規サイトとは思えないほどの完成度と安定感を誇ります。",
      "最大の特徴は、8,900種類以上という圧倒的なゲーム数と、カジノゲームとスポーツベットがシームレスに統合された独自のサイトデザインです。プレイヤーは自身の好みに合わせて4種類からウェルカムボーナスを選べるなど、ユーザー中心の設計が随所に見られます。",
      "このレビューでは、パリマッチの豪華なボーナス、豊富なゲーム、そしてその信頼性について、良い点も懸念点もすべて含めて徹底的に解説します。",
    ],
    ctas: [
      { text: "👉 パリマッチで今すぐプレイ！", href: "https://go.japanesecasino.com/go/parimatch" },
      { text: "😎 CasinoTsu限定の入金不要ボーナスをチェック", href: "https://casinotsu.com/offers/parimatch-exclusive" },
    ],
  },
  games: [
    "パリマッチのゲームライブラリは圧巻の一言で、総数は8,900種類を超えます。スロットだけでも98社のプロバイダーから7,300種類以上が提供されており、遊び尽くすことは不可能です。「和風」や「パチンコスタイル」といった日本人向けのカテゴリ分けがされており、好みのゲームを探しやすくなっています。",
    "ライブカジノもEvolution, Pragmatic Play, Playtechなど主要プロバイダーが揃い、バカラ、ルーレットから人気のゲームショーまで幅広く楽しめます。さらに、パリマッチのブランドアイデンティティでもあるスポーツベットは、カジノゲームと同じページからアクセスでき、スムーズな切り替えが可能です。NFLから競馬、eスポーツまで、ベット対象も多岐にわたります。",
  ],
  features: [
    "パリマッチの最もユニークな特徴は、カジノとスポーツベットが完全に統合されたプラットフォームです。多くのサイトが両者を別々のセクションとして扱いますが、パリマッチでは同じ画面から自由にアクセスでき、両方を楽しむプレイヤーにとって非常に便利です。",
    "もう一つの魅力は「クエスト」機能です。毎日のプレイの中で「初回入金を完了する」といった簡単なミッションをクリアすることで、ボーナスやフリースピンがもらえるため、常に目標を持ってゲームを楽しむことができます。",
  ],
  editorial: {
    author: "Nanami",
    profileHref: "/authors/rina-okabe",
    hook: "新規カジノとは思えない完成度。ゲーム数、操作性、ボーナスの柔軟性は業界トップクラスです。",
    theGoodStuff: "30年の歴史を持つ企業が運営するだけあり、サイトの安定感とゲームの豊富さは素晴らしいです。特に、カジノとスポーツをシームレスに行き来できる操作性は画期的。プレイヤーが選べるウェルカムボーナスや、賭け条件なしのフリースピンも非常に魅力的です。",
    theHeadsUp: "一方で、Casino.Guruの安全性評価が5.0/10と低い点は懸念材料です。一部のプレイヤーからは入出金トラブルやサポート対応の遅れが報告されており、レビュー担当者のポジティブな体験とは異なる声も存在します。これらの点を考慮し、慎重なアプローチが必要です。",
    finalThought: "ポテンシャルは非常に高いですが、新しいカジノであるため、プレイヤーコミュニティでの評判が固まるまでは、少額からのプレイで様子を見るのが賢明かもしれません。しかし、その革新的なプラットフォームと豊富なコンテンツは、一度試してみる価値が大いにあります。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "2024年11月に日本市場に参入したパリマッチは、単なる「新しいカジノ」という言葉では片付けられないほどのポテンシャルを秘めています。その背景には、30年以上の歴史を持つ運営会社OLISTEK N.V.と、業界で高い評価を受けるSOFTSWISSのプラットフォームがあります。この強力な基盤により、パリマッチはオープン直後から8,900種類以上という膨大なゲームライブラリと、非常に安定した動作環境を提供しています。",
      "特筆すべきは、その革新的なユーザーインターフェースです。多くのオンラインカジノがカジノセクションとスポーツベットセクションを明確に分けているのに対し、パリマッチはこれらをシームレスに統合。プレイヤーはページ遷移のストレスなく、スロットの合間にサッカーの試合にベットするといった自由なプレイスタイルを実現できます。この操作性は、両方を楽しむユーザーにとって大きなアドバンテージです。",
      "ボーナス設計も秀逸です。プレイヤーが自身の好み（スロット、ライブカジノ、スポーツなど）に応じて最適なウェルカムボーナスを選べる柔軟性は、画一的なオファーが多い中で際立っています。特に、4段階の入金ボーナスに付随する合計200回のフリースピンに賭け条件がない点は、プレイヤーにとって非常に価値が高いと言えます。さらに、「クエスト」機能は、日々のプレイに目的意識と追加の報酬をもたらし、長期的なエンゲージメントを高める素晴らしい仕組みです。",
      "もちろん、懸念点も存在します。Casino.Guruによる安全性評価が5.0/10と平均以下であることや、一部の海外プレイヤーから入出金トラブルやサポート対応の質の低さが報告されている点は無視できません。これは、当サイトのレビュー担当者が体験した迅速で丁寧なサポートとは対照的であり、今後の動向を注視する必要があります。また、VIPプログラムがまだ準備段階であるなど、発展途上の側面も見られます。",
      "総じて、パリマッチは非常に高い完成度と革新的なアイデアを持つ、期待の大型新人です。いくつかの懸念材料はあるものの、その圧倒的なコンテンツ量と優れた操作性、そしてプレイヤーフレンドリーなボーナスは、多くの日本人プレイヤーを魅了する可能性を十分に秘めています。今後の成長とコミュニティからのフィードバックに注目していきたいカジノです。",
    ],
  },
  security: [
    "信頼性の高いCuraçao Gaming Control Board (GCB) のライセンスを取得",
    "運営会社は30年以上の歴史を持つOLISTEK N.V.",
    "業界大手のSOFTSWISSプラットフォームを利用し、安定性と安全性を確保",
    "SSL暗号化技術によりプレイヤーの個人情報と取引データを保護",
    "二要素認証(2FA)の導入も検討中",
  ],
  responsiblePlay: [
    "自己排除機能: カスタマーサポートに連絡することでアカウントの利用を制限可能。",
    "一部のユーザーからは、責任あるギャンブルのオプションが利用できない、または矛盾したポリシーがあるとの報告があり、改善が求められます。",
  ],
  complaintStats: [
    "Casino.Guruによる安全性指数は5.0/10と平均を下回る評価。",
    "一部のプレイヤーから、入金が反映されない、出金が数週間保留されるなどの問題が報告されている。",
    "カスタマーサポートの対応が遅い、定型文での返答が多いといった苦情も存在する。",
  ],
  awards: [],
  restrictedCountries: [],
  userConcerns: [
    "入出金の遅延や未反映の問題",
    "カスタマーサポートの対応品質にばらつきがある可能性",
    "責任あるギャンブル機能の透明性と実効性",
    "ウェブサイトの不安定さや広告の多さ",
  ],
  summary: [
    "30年以上の歴史を持つ企業が運営する、信頼性の高い新規カジノ。",
    "8,900種類以上のゲームとスポーツベットをシームレスに楽しめる革新的なプラットフォーム。",
    "プレイヤーが選べるウェルカムボーナスや、賭け条件なしのフリースピンなど、魅力的なプロモーションが豊富。",
    "一方で、第三者機関による安全性評価が低く、一部で入出金トラブルが報告されているため、慎重な利用が推奨される。",
  ],
  extraLinks: [
    { text: "🔰 オンラインカジノの本人確認(KYC)とは？", href: "https://casinotsu.com/guides/document-verification" },
    { text: "💰 初回入金ボーナス最新ランキング", href: "https://casinotsu.com/bonuses/welcome-bonus" },
  ],
  faq: [
    {
      question: "パリマッチには、入金不要ボーナスはありますか？",
      answer: "はい、CasinoTsu限定で、新規登録と電話番号・メールアドレス認証を完了すると、スロットで使える5,250円分の入金不要ボーナスが提供されます。",
    },
  ],
  cta: {
    text: "パリマッチで豪華ウェルカムボーナスをゲット！",
    href: "https://go.japanesecasino.com/go/parimatch:parimatch?referrer_path=%2Freviews%2Fparimatch",
  },
    images: {
    casino: [
      "/assets/casino/parimatch.png",
      "/assets/casino/parimatch.jpg",
      "/assets/casinos/parimatch_375x375-2.png",
    ],
  },
};