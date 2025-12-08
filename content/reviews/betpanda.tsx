import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewBetpanda: ReviewPageContent = {
  hero: {
    title: "Betpanda（ベットパンダ）レビュー",
    subheading: "最大1BTCの初回入金ボーナス + 限定キャッシュスピン50回",
    description: "メールアドレスだけで登録できる匿名性の高いクリプトカジノ、BetpandaをCasinoTsuが徹底検証。しかし、アカウント停止や勝利金没収などのユーザー報告もあり、利用には注意が必要です。",
    score: 3.7,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 68,
        note: "2023年設立の新しいカジノで知名度は低い。匿名性が魅力だが、ユーザーからの厳しい評価も多い。",
      },
      {
        label: "規約",
        percent: 70,
        note: "最大1BTCボーナスは魅力的だが、入金額の80倍ベットという条件は非常に厳しい。限定キャッシュスピンは高評価。",
      },
      {
        label: "操作性",
        percent: 82,
        note: "サイトは快適で使いやすいが、一部ページが英語のみなど、まだ成長途上の部分が見られる。",
      },
      {
        label: "サポート",
        percent: 75,
        note: "24時間日本語対応は良いが、翻訳ベース。問題解決に至らないケースも報告されており、品質にばらつきがある。",
      },
    ],
    highlights: [
      "メールアドレスとパスワードのみで簡単登録",
      "13種類以上の仮想通貨に対応したクリプト特化型",
      "CasinoTsu限定の賭け条件なしフリースピン50回",
      "Provably Fair技術採用のオリジナルゲーム",
    ],
    watchouts: [
      "勝利後のアカウント停止や勝利金没収のユーザー報告",
      "高額出金時に予告なく本人確認（KYC）を要求される可能性",
      "初回ボーナスの有効化条件が極めて厳しい（入金額の80倍ベット）",
      "ライセンスの正当性について疑問が呈されている",
    ],
    avatarSrc: "/assets/casino/betpanda.png",
    avatarAlt: "Betpandaのロゴ",
  },
  payments: {
    featured: [
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "人気No.1",
        note: "代表的な仮想通貨で広く利用可能",
      },
      {
        name: "Ethereum",
        icon: "/assets/payments/ethereum.svg",
        href: "https://casinotsu.com/payment/ethereum",
        badge: "主要アルトコイン",
        note: "スマートコントラクトで知られる通貨",
      },
      {
        name: "Tether",
        icon: "/assets/payments/tether.svg",
        href: "https://casinotsu.com/payment/usdt",
        badge: "ステーブルコイン",
        note: "米ドルに連動し価格が安定",
      },
      {
        name: "Dogecoin",
        icon: "/assets/payments/dogecoin.svg",
        badge: "ミームコイン",
        note: "コミュニティ主導で人気の通貨",
      },
      {
        name: "Ripple",
        icon: "/assets/payments/xrp.svg",
        badge: "高速送金",
        note: "国際送金に特化した仮想通貨",
      },
    ],
    deposits: [
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg" },
      { name: "Litecoin", icon: "/assets/payments/litecoin.svg" },
      { name: "Binance Coin", icon: "/assets/payments/bnb.svg" },
      { name: "Tether (ERC20/TRC20)", icon: "/assets/payments/tether.svg" },
      { name: "Ripple", icon: "/assets/payments/xrp.svg" },
      { name: "Dogecoin", icon: "/assets/payments/dogecoin.svg" },
      { name: "TRON", icon: "/assets/payments/tron.svg" },
      { name: "Shiba Inu", icon: "/assets/payments/shib.svg" },
      { name: "The Sandbox (SAND)", icon: "/assets/payments/sand.svg" },
      { name: "USD Coin (USDC)", icon: "/assets/payments/usdc.svg" },
      { name: "Solana", icon: "/assets/payments/solana.svg" },
      { name: "Toncoin (TON)" },
    ],
    withdrawals: [
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg" },
      { name: "Litecoin", icon: "/assets/payments/litecoin.svg" },
      { name: "Binance Coin", icon: "/assets/payments/bnb.svg" },
      { name: "Tether (ERC20/TRC20)", icon: "/assets/payments/tether.svg" },
      { name: "Ripple", icon: "/assets/payments/xrp.svg" },
      { name: "Dogecoin", icon: "/assets/payments/dogecoin.svg" },
      { name: "TRON", icon: "/assets/payments/tron.svg" },
      { name: "Shiba Inu", icon: "/assets/payments/shib.svg" },
      { name: "The Sandbox (SAND)", icon: "/assets/payments/sand.svg" },
      { name: "USD Coin (USDC)", icon: "/assets/payments/usdc.svg" },
      { name: "Solana", icon: "/assets/payments/solana.svg" },
      { name: "Toncoin (TON)" },
    ],
    notes: [
      "最低入金額の設定はありませんが、ネットワーク手数料を考慮した入金が推奨されます。",
      "最低出金額は0.0001 BTC相当と非常に低く設定されています。",
      "出金上限は1日€5,000、1週間€15,000、1ヶ月€45,000です。",
      "出金時間は通常5分以内と非常に高速です。",
    ],
  },
  bonuses: {
    overview:
      "Betpandaは最大1BTCという高額な初回入金ボーナスを提供していますが、その有効化条件は非常に厳しいものです。一方で、CasinoTsu限定の賭け条件なしフリースピンは非常に価値が高いです。",
    noDeposit:
      "現時点では、Betpandaで提供されている入金不要ボーナスはありません。今後のプロモーションに期待しましょう。",
    extraSpins: {
      summary:
        "CasinoTsuからBetpandaに登録し、20ユーロ以上を入金すると、Nolimit City社の人気スロット『Fire in the hole 2』で使える50回のフリースピンがもらえます。",
      schedule: [
        "対象：CasinoTsu経由の新規登録者",
        "条件：20ユーロ以上の初回入金",
        "内容：『Fire in the hole 2』のフリースピン50回",
        "特長：勝利金に賭け条件がないキャッシュスピン",
      ],
      warning: "この限定オファーは初回入金ボーナスと併用可能ですので、ぜひご活用ください。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "100%", cap: "1 BTC", code: "不要" },
    ],
    conditions: [
      "ボーナスを受け取るには、入金額の80倍のベットを7日以内に完了させる必要があります。",
      "上記条件を達成して初めて、賭け条件のないボーナスがアカウントに付与されます。",
      "賭け条件消化中の最大ベット額は$10です。",
      "ゲームによって賭け条件の消化率が異なります。",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "毎週10%キャッシュバック",
      description: "毎週の純損失額の10%がキャッシュバックされます。ただし、有効化するにはVIPプログラムで12,500XPを貯めることと、週に50回以上のベットが必要です。",
      highlight: "賭け条件なしで受け取れるが有効化条件あり",
    },
    {
      title: "VIPプログラム「Path of the Panda」",
      description: "ベットするごとにXPポイントが貯まり、6段階のレベルを上げていくプログラム。レベルが上がるとリロードボーナスやキャッシュバックブーストなどの特典が増加します。",
    },
  ],
  facts: [
    { label: "名称", value: "Betpanda (ベットパンダ)" },
    { label: "ローンチ", value: "2023年" },
    { label: "運営会社", value: "Star Bright Media S.R.L." },
    { label: "ライセンス", value: "コスタリカ (※正当性に疑問の声あり)" },
    { label: "VIPプログラム", value: "✅" },
    { label: "対応言語", value: "日本語、英語など" },
    { label: "対応通貨", value: "仮想通貨のみ" },
    {
      label: "ゲームタイプ",
      value:
        "スロット, ライブカジノ, ゲームショー, スポーツベット, eスポーツ, オリジナルゲーム, クラッシュゲーム, ビデオポーカー, ビンゴなど",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://casinotsu.com/providers/evolution">Evolution</Link>, <Link href="https://casinotsu.com/providers/hacksaw-gaming">Hacksaw Gaming</Link>, <Link href="https://casinotsu.com/providers/nolimit-city">Nolimit City</Link>, <Link href="https://casinotsu.com/providers/bgaming">BGaming</Link> など70社以上
        </span>
      ),
    },
    { label: "最小入金額", value: "設定なし" },
    { label: "最小出金額", value: "0.0001 BTC相当" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@betpanda.io">support@betpanda.io</Link> },
    { label: "ライブチャット", value: "24時間日本語対応" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "Betpanda（ベットパンダ）は2023年に登場した、匿名性を最大の特長とする仮想通貨特化型カジノです。",
      "登録はメールアドレスとパスワードだけで完了し、プライバシーを重視するプレイヤーにとって魅力的な選択肢となっています。",
      "しかし、新しいカジノであるため、ライセンスの不透明さや、ユーザーからの出金トラブルに関する報告など、いくつかの深刻な懸念点も存在します。このレビューでは、Betpandaの魅力とリスクの両側面を公平に掘り下げていきます。",
    ],
    ctas: [
      { text: "👉 Betpandaで限定スピンをゲットする", href: "https://go.casinotsu.com/go/betpanda" },
      { text: "🔰 クリプトカジノについて学ぶ", href: "https://casinotsu.com/crypto" },
    ],
  },
  games: [
    "Betpandaは70社以上のプロバイダーと提携し、スロット、ライブカジノ、スポーツベットまで幅広いゲームを提供しています。スロットはボーナス購入やメガウェイズなどの人気機能で絞り込みができ、好みのゲームを簡単に見つけられます。",
    "ライブカジノはPragmatic Playをはじめとする10社のゲームが楽しめます。さらに、Aviatorなどのクラッシュゲームや、公平性をプレイヤー自身で検証できる「Provably Fair」技術を採用したオリジナルゲームも少数ながら用意されています。",
  ],
  features: [
    "Betpandaの最大の特徴は、メールアドレスとパスワードのみで登録できる高い匿名性です。個人情報を提出することなく、仮想通貨で迅速に入出金を行えます。",
    "モバイルアプリはありませんが、スマートフォンやタブレットのブラウザに完全対応しており、どこからでも快適にプレイできます。",
  ],
  editorial: {
    author: "Nanami",
    profileHref: "/authors/rina-okabe",
    hook: "匿名性と限定ボーナスは魅力的ですが、出金トラブルの報告が多く、ハイリスクな選択肢と言わざるを得ません。",
    theGoodStuff: "メールアドレスだけで始められる手軽さと、仮想通貨によるスピーディーな決済は大きな利点です。CasinoTsu限定の賭け条件なしフリースピンは、リスクなく試せる絶好の機会です。",
    theHeadsUp: "最も懸念すべきは、勝利後のアカウント停止や出金拒否といったユーザーからの深刻な報告が多数ある点です。『匿名』を謳いながら、高額出金時に煩雑なKYCを要求されるケースもあり、矛盾を感じます。",
    finalThought: "高いポテンシャルを秘めている一方で、プレイヤー保護の観点からは多くの疑問符が付きます。特に高額を賭けるプレイヤーは、これらのリスクを十分に理解した上で、慎重に利用を検討すべきです。少額で試すか、より信頼性の高いカジノを選ぶのが賢明でしょう。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "Betpandaは、現代のオンラインカジノプレイヤーが求める「プライバシー」と「スピード」という二つの要素を前面に押し出したクリプトカジノです。実際に、メールアドレスとパスワードだけでアカウントを作成できる手軽さは、他の多くのカジノとは一線を画します。13種類以上の仮想通貨に対応し、入出金が数分で完了する点も高く評価できます。",
      "しかし、その魅力的な側面の裏で、深刻な問題が多数報告されていることをCasinoTsuは見過ごすことができません。TrustpilotやAskGamblersなどのレビューサイトでは、「勝利後にアカウントを不当に停止された」「高額出金時に理由なくKYCを要求され、最終的に資金を没収された」といった声が散見されます。これは、カジノの信頼性の根幹を揺るがす問題です。",
      "また、コスタリカを拠点とする運営とライセンスの不透明さも、プレイヤーにとってのリスクを高めています。初回入金ボーナスは最大1BTCと非常に大きいですが、「入金額の80倍を7日以内にベットする」という有効化条件は、現実的にはほぼ達成不可能な設定と言えるでしょう。",
      "結論として、Betpandaは『ハイリスク・ハイリターン』ならぬ、『ハイリスク・アンノウンリターン（未知のリターン）』なカジノです。匿名で手軽に始められる魅力はありますが、資金を失うリスクが他のカジノよりも格段に高い可能性があります。CasinoTsuとしては、特に初心者のプレイヤーや、大切な資金を安全に管理したい方には、より透明性が高く、信頼できるライセンスを持つカジノの利用を強く推奨します。",
    ],
  },
  security: [
    "コスタリカの法律に基づき運営",
    "SSL暗号化技術によりプレイヤーのデータを保護",
    "ゲームの公平性を保証する乱数発生器（RNG）を搭載",
    "オリジナルゲームには公平性を検証できる「Provably Fair」技術を採用",
  ],
  responsiblePlay: [
    "自己規制ツール（入金制限、ロス制限など）が利用可能ですが、機能は限定的とされています。",
    "一部のユーザーから、ギャンブル依存に関する訴えが十分にサポートされなかったという報告があります。",
  ],
  complaintStats: [
    "Trustpilot: 平均評価 3.4/5 (875件のレビュー)",
    "AskGamblers: プレイヤー評価 5.6/10 (21件のレビュー)",
    "多数のユーザーがアカウント停止、勝利金没収、出金問題を報告しています。",
  ],
  awards: [],
  restrictedCountries: [],
  userConcerns: [
    "勝利後の突然のアカウント停止や出金拒否",
    "匿名性を謳いながら、高額出金時に煩雑な本人確認（KYC）を要求される",
    "初回入金ボーナスの有効化条件が非現実的に厳しい",
    "カスタマーサポートが問題解決に至らないことがある",
    "ライセンスの透明性と信頼性への懸念",
  ],
  summary: [
    "メールアドレスだけで登録できる匿名性の高いクリプトカジノ。",
    "CasinoTsu限定で賭け条件なしのフリースピン50回がもらえる。",
    "しかし、勝利金の没収やアカウント停止など、深刻な出金トラブルの報告が多数存在します。",
    "ライセンスの透明性にも懸念があり、総合的に見て非常にリスクの高いカジノです。利用は自己責任で慎重に行う必要があります。",
  ],
  extraLinks: [
    { text: "🔰 賭け条件なしボーナスとは？", href: "https://casinotsu.com/bonuses/no-wagering" },
    { text: "⚖️ 責任あるギャンブルについて", href: "https://casinotsu.com/info/responsible-gambling" },
  ],
  faq: [
    {
      question: "Betpandaでは、仮想通貨を持っていなくても遊べますか？",
      answer: "いいえ、Betpandaは仮想通貨専門のカジノのため、プレイするには事前に仮想通貨を用意する必要があります。",
    },
    {
      question: "Betpandaのカスタマーサポートは日本語に対応していますか？",
      answer: "はい、24時間日本語での対応が可能です。ただし、ネイティブの日本人ではなく翻訳システムを使用しているため、複雑な問題の解決能力については賛否両論があります。",
    },
    {
      question: "Betpandaの10％キャッシュバックは誰でも利用可能ですか？",
      answer: "いいえ、キャッシュバックを有効にするには、VIPプログラムで12,500XPを貯めることと、週に50回以上のベットを行うという条件を満たす必要があります。",
    },
  ],
  cta: {
    text: "Betpandaでプレイしてみる",
    href: "https://go.casinotsu.com/go/betpanda",
  },
};