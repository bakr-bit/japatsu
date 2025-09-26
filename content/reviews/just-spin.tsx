import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewJustspin: ReviewPageContent = {
  hero: {
    title: "Justspin（ジャストスピン）レビュー",
    subheading: "最大$500ボーナス ＋ 合計600回フリースピン",
    description: "シンプルなデザインと優れた操作性が魅力のJustspinカジノ。スロット好きに嬉しい豊富なゲームと決済方法をCasinoTsuが徹底レビューします。",
    score: 3.9,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 75,
        note: "21.comの姉妹サイトだが知名度はまだ低い。サイトの日本語に一部不自然な点があり、厳しい条件が人気に影響している可能性も。",
      },
      {
        label: "規約",
        percent: 74,
        note: "ウェルカムボーナスは4回利用可能だが、賭け条件50倍、最大ベット$3とかなり厳しめ。ボーナスコードの入力が毎回必要。",
      },
      {
        label: "操作性",
        percent: 81,
        note: "サイトは非常に使いやすく、特にゲーム検索機能が優秀。基本的な決済方法は網羅されており、利便性が高い。",
      },
      {
        label: "サポート",
        percent: 77,
        note: "日本語サポートの対応時間が不規則な点が課題だが、対応自体は非常に丁寧で好感が持てる。",
      },
    ],
    highlights: [
      "登録するだけで100回の入金不要フリースピン",
      "初回から4回目まで続くウェルカム入金ボーナス",
      "洗練されたデザインと優れたゲーム検索機能",
      "豊富なゲームプロバイダーとスロットラインナップ",
    ],
    watchouts: [
      "ボーナスの賭け条件が50倍と厳しい",
      "日本語サポートの対応時間が不規則",
      "入出金時に手数料が発生する",
      "一部のプレイヤーから出金遅延の報告あり",
    ],
  },
  payments: {
    featured: [
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://www.casino.su/payment/visa",
        badge: "クレジットカード",
        note: "主要なカードブランドに対応",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://www.casino.su/payment/payz",
        badge: "Eウォレット",
        note: "迅速な取引で人気の決済手段",
      },
      {
        name: "Venus Point",
        icon: "/assets/payments/venus-point.svg",
        href: "https://www.casino.su/payment/venuspoint",
        badge: "ポイント制",
        note: "ポイントでの管理が便利なウォレット",
      },
      {
        name: "銀行送金",
        icon: "/assets/payments/bank-transfer.svg",
        badge: "出金のみ",
        note: "カード入金時の出金方法として利用可能",
      },
    ],
    deposits: [
      { name: "VISA", icon: "/assets/payments/visa.svg" },
      { name: "MasterCard", icon: "/assets/payments/mastercard.svg" },
      { name: "iWallet", icon: "/assets/payments/iwallet.svg", href: "https://www.casino.su/payment/iwallet" },
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://www.casino.su/payment/payz" },
      { name: "Venus Point", icon: "/assets/payments/venus-point.svg", href: "https://www.casino.su/payment/venuspoint" },
    ],
    withdrawals: [
      { name: "iWallet", icon: "/assets/payments/iwallet.svg", href: "https://www.casino.su/payment/iwallet" },
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://www.casino.su/payment/payz" },
      { name: "Venus Point", icon: "/assets/payments/venus-point.svg", href: "https://www.casino.su/payment/venuspoint" },
      { name: "海外銀行送金", icon: "/assets/payments/bank-transfer.svg" },
    ],
    notes: [
      "最低入金額は$10、最低出金額は$50です。",
      "Payzでの入金には$1、全ての出金には一律$3の手数料がかかります。",
      "出金処理時間は保留期間（0-72時間）を含め、合計で5-7営業日かかる場合がありますが、公式サイトでは数時間での完了を謳っています。",
    ],
  },
  bonuses: {
    overview:
      "Justspinでは、登録するだけでもらえる100回のフリースピンから始まり、初回から4回目までの入金で最大$500のボーナスと500回のフリースピンがもらえる豪華なウェルカムパッケージが用意されています。ただし、賭け条件は50倍と厳しめです。",
    noDeposit:
      "新規登録を完了するだけで、人気スロット『Fire Joker』で使える100回のフリースピンが自動的に付与されます。入金不要でカジノを試す絶好の機会です。",
    extraSpins: {
      summary:
        "初回入金ボーナスには、人気スロット『Super Joker』で使える500回のフリースピンが含まれています。このスピンは50日間にわたって毎日10回ずつ付与される長期的な特典です。",
      schedule: [
        "初回入金時に500回分が付与権利として有効化",
        "毎日10スピンずつ、50日間連続でアカウントに追加",
        "各日のフリースピンは24時間以内に使用しないと失効",
      ],
      warning: "フリースピンから得た勝利金には50倍の賭け条件が適用され、有効期限は1日と非常に短いため、毎日消化する必要があります。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "100%", cap: "$100", code: "BONUS1" },
      { depositNumber: "2回目", percent: "50%", cap: "$150", code: "BONUS2" },
      { depositNumber: "3回目", percent: "50%", cap: "$150", code: "BONUS3" },
      { depositNumber: "4回目", percent: "100%", cap: "$100", code: "BONUS4" },
    ],
    conditions: [
      "ボーナスマネーおよびフリースピンの勝利金には50倍の賭け条件が適用されます。",
      "ボーナス利用時の最大ベット額は$3です。",
      "ボーナスマネーの有効期限は21日間、フリースピン勝利金の有効期限は1日です。",
      "各ボーナスを受け取るには、最低$10の入金と、対応するボーナスコードの入力が必要です。",
    ],
    prohibitedGames: [
      "1429 Uncharted Seas",
      "Peek a boo",
      "Tower Quest",
      "すべてのテーブルゲーム",
      "ライブカジノゲーム",
      "ビデオポーカー",
      "すべてのジャックポットゲーム",
    ],
  },
  offers: [
    {
      title: "ウィークリーボーナス",
      description: "「SPOT1」「SPOT2」「SPOT3」などのボーナスコードを使用して、週替わりでフリースピンを獲得できるプロモーションが開催されます。",
      highlight: "毎週新しいフリースピンのチャンス",
    },
    {
      title: "サンデーボーナス",
      description: "ボーナスコード「SUNBOOST」を利用して日曜に入金すると、50%のマッチボーナスを受け取ることができます。",
      highlight: "週末を締めくくるお得なリロードボーナス",
    },
    {
      title: "メール限定オファー",
      description: "毎日プレイを続けると、特別なプロモーションの案内がメールで届くことがあります。メール受信設定をONにしておくのがおすすめです。",
    },
  ],
  facts: [
    { label: "名称", value: "Justspin (ジャストスピン)" },
    { label: "ローンチ", value: "2019年" },
    { label: "運営会社", value: "Betpoint Group Ltd. Casinos" },
    { label: "ライセンス", value: "Malta Gaming Authority (MGA)" },
    { label: "VIPプログラム", value: "❌" },
    {
      label: "対応言語",
      value: "日本語, 英語, フィンランド語, ノルウェー語, ドイツ語, フランス語, ポーランド語",
    },
    { label: "対応通貨", value: "EUR, USD, AUD, CAD, NOK" },
    {
      label: "ゲームタイプ",
      value:
        "バカラ, ブラックジャック, クレイプス, ゲームショー, ライブカジノ, ポーカー, ルーレット, スロット",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://www.casino.su/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://www.casino.su/providers/play-n-go">Play’n GO</Link>, <Link href="https://www.casino.su/providers/microgaming">Microgaming</Link>, <Link href="https://www.casino.su/providers/betsoft">BetSoft</Link>, <Link href="https://www.casino.su/providers/elk-studios">Elk Studios</Link>, <Link href="https://www.casino.su/providers/quickspin">Quickspin</Link>, <Link href="https://www.casino.su/providers/red-tiger">Red Tiger</Link>, <Link href="https://www.casino.su/providers/relax-gaming">Relax</Link>, <Link href="https://www.casino.su/providers/thunderkick">Thunderkick</Link>, iSoftBet, Gamomat, Just For The Win, 1x2Games, Lightning Box, Booming Games, Light & Wonder, Nyx Interactive, Foxium, Big Time Gaming, Iron Dog Studios, Nolimit City, Northern Lights Gaming, Rabcat, Pocket Games Soft, Kalamba Games, Playson, ReelPlay, Sthlm Gaming, Hacksaw Gaming, Leap, Fantasma Games, Felt Gaming, Snowborn Games, Yggdrasil Gaming, 4ThePlayer, Games Lab, Boomerang, Crazy Tooth Studio, 2 By 2 Gaming, Golden Hero Games, Golden Rock Studios
        </span>
      ),
    },
    { label: "最小入金額", value: "$10" },
    { label: "最小出金額", value: "$50" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@justspin.com">support@justspin.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (24時間365日)" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "Justspin（ジャストスピン）は、2019年に設立されたオンラインカジノで、人気カジノ「21.com」の姉妹サイトです。",
      "その名の通り、特にスロットプレイヤーを魅了する豊富なフリースピンボーナスが特徴です。登録するだけで100回、初回入金でさらに500回と、合計600回のフリースピンが楽しめます。",
      "洗練されたシンプルなデザインと、直感的に操作できる優れたサイト構成で、初心者からベテランまで幅広いプレイヤーにおすすめです。このレビューでは、Justspinの長所と注意点を詳しく見ていきましょう。",
    ],
    ctas: [
      { text: "👉 ジャストスピンで今すぐプレイ！", href: "https://go.casino.su/justspin:just-spin?referrer_path=%2Freviews%2Fjust-spin" },
      { text: "🔰 オンラインカジノのはじめ方ガイド", href: "https://www.casino.su/guides" },
    ],
  },
  games: [
    "Justspinはスロットに特化したカジノという印象ですが、実際にはライブカジノも充実しています。日本のプレイヤーに人気のGolden HeroやPlay’n GO、NETENTといったプロバイダーのスロットはほぼ全て網羅されており、ゲーム検索機能も優秀なため、お目当てのゲームをすぐに見つけることができます。",
    "ライブカジノでは、業界の王道であるEvolution Gamingに加えて、近年評価を高めているPragmatic Playのテーブルも導入しています。Pragmatic Playのライブカジノはディーラーの質が高いと評判で、Evolutionとは一味違った体験を楽しみたいプレイヤーにおすすめです。",
  ],
  features: [
    "Justspinのサイトは、シンプルさと機能性を両立させています。特にゲーム検索フィルターはカテゴリ分けが細かく、プロバイダー別やテーマ別で簡単にゲームを探すことができ、ストレスなくプレイに集中できます。",
    "21.comの姉妹サイトであるため、運営基盤がしっかりしており、サポートの品質も丁寧であると評価されています。ただし、VIPプログラムは提供されていません。",
  ],
  editorial: {
    author: "CasinoTsu編集部",
    profileHref: "/authors",
    hook: "豊富なフリースピンと優れた操作性が光る一方、厳しいボーナス条件が悩ましいカジノです。",
    theGoodStuff: "合計600回という圧倒的な数のフリースピンは、スロット好きにはたまらない魅力です。サイトのデザインも洗練されており、特にゲーム検索機能の使いやすさは業界でもトップクラス。ゲームラインナップも豊富で、プレイヤーを飽きさせません。",
    theHeadsUp: "最大の注意点は、50倍という厳しい賭け条件です。特にフリースピン勝利金の有効期限が1日しかないため、条件クリアは非常に困難です。また、入出金手数料や不規則な日本語サポート時間もマイナスポイントと言えるでしょう。",
    finalThought: "ボーナスの条件面を割り切って、豊富なゲームと優れた操作性を楽しみたいプレイヤー向けのサイトです。まずは入金不要の100フリースピンでサイトの雰囲気を試し、自分に合うかどうかを判断するのが良いでしょう。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "Justspinは、その名の通り「スピン」に焦点を当てたプロモーションでプレイヤーを惹きつけるオンラインカジノです。21.comの姉妹サイトとして2019年に登場し、洗練されたデザインと優れたユーザーインターフェースを受け継いでいます。サイトは直感的に操作でき、特にゲーム検索機能の質の高さは特筆すべき点です。膨大なゲームライブラリの中から、プロバイダーやテーマで絞り込み、好みのゲームへ素早くアクセスできます。",
      "最大の魅力は、登録するだけで100回、初回入金でさらに500回、合計600回ものフリースピンが提供されるウェルカムパッケージです。これはスロットファンにとって非常に魅力的ですが、その裏には厳しい条件が隠されています。50倍という高い賭け条件に加え、フリースピン勝利金の有効期限がわずか1日というのは、条件達成を非常に困難にしています。ボーナスマネーの有効期限も21日と、余裕があるとは言えません。",
      "決済方法は、クレジットカードや主要なEウォレットをカバーしており、日本人プレイヤーにとっても不便はありません。出金処理速度は数時間で完了することもあると謳われていますが、一部で遅延の報告もあるため、注意が必要です。また、Payzでの入金や全ての出金に手数料がかかる点は、現代のカジノとしては少し残念なポイントです。",
      "カスタマーサポートは、対応自体は丁寧で評価が高いものの、日本語対応スタッフの稼働時間が不規則であるため、緊急時にすぐに解決できない可能性があります。この点は今後の改善が期待されます。",
      "総じて、Justspinは強力な長所と明確な短所を併せ持つカジノです。優れた操作性と豊富なゲームライブラリ、そして魅力的なフリースピンオファーを享受できる一方で、厳しいボーナス条件と手数料、不安定なサポート体制というハードルが存在します。ボーナスを純粋な「お試し」と割り切り、リアルマネーでのプレイを中心に考えているユーザーであれば、そのポテンシャルを十分に楽しめるでしょう。",
    ],
  },
  security: [
    "全ての通信は128ビットSSL暗号化技術によって保護されています。",
    "ゲームの公平性は、乱数生成器（RNG）によって保証されています。",
    "不正利用を防止するため、独立したKYC機関による厳格な本人確認プロセスを実施しています。",
    "信頼性の高いマルタゲーミングオーソリティ（MGA）のライセンスを取得して運営されています。",
  ],
  responsiblePlay: [
    "入金制限ツール: 1日の入金限度額を設定可能。",
    "賭け制限ツール: 1日の賭け金の上限を設定可能。",
    "損失制限ツール: 1日の損失額の上限を設定可能。",
    "時間/セッション制限ツール: プレイ時間を制限可能。",
    "自己排除ツール: アカウントへのアクセスを一定期間または無期限に制限。",
    "クールオフ/タイムアウトツール: 短期間の休憩を設定可能。",
    "リアリティチェックツール: プレイ中に定期的な通知を表示。",
    "自己評価テスト: 自身のギャンブル習慣を評価。",
    "出金ロック機能: 出金操作をロック可能。",
  ],
  complaintStats: [],
  awards: [],
  restrictedCountries: [],
  userConcerns: [
    "出金処理の遅延に関する一部の報告",
    "一部の責任あるギャンブルツールに不具合が発生する可能性",
    "プレイヤーによっては不要と感じるSMSマーケティングの受信",
    "日本語サポートの対応時間が不規則である点",
  ],
  summary: [
    "21.comの姉妹サイトで、洗練されたデザインと優れた操作性が特徴です。",
    "登録だけで100回、初回入金で500回のフリースピンがもらえるボーナスは非常に魅力的です。",
    "一方で、賭け条件が50倍と厳しく、入出金に手数料がかかる点がデメリットです。",
    "ボーナス条件を理解した上で、豊富なゲームと使いやすいプラットフォームを楽しみたいプレイヤーにおすすめです。",
  ],
  extraLinks: [
    { text: "🔰 賭け条件とは？仕組みを分かりやすく解説！", href: "https://www.casino.su/guides/wagering-requirements" },
  ],
  faq: [
    {
      question: "ジャストスピンに登録ボーナスはありますか？",
      answer: "はい、新規登録するだけで100回のフリースピンがもらえます。さらに、4回目までの入金でウェルカムボーナスも提供されています。",
    },
    {
      question: "ジャストスピンで利用可能な決済方法は？",
      answer: "クレジットカード（VISA, MasterCard）、Payz、Venus Point、iWalletなど、日本のプレイヤーが利用しやすい基本的な決済方法が揃っています。",
    },
    {
      question: "ジャストスピンのおすすめポイントは何ですか？",
      answer: "サイトの操作性が非常に高く、特にゲーム検索フィルターが使いやすい点です。豊富なゲームの中から、好みのスロットをすぐに見つけることができます。",
    },
  ],
  cta: {
    text: "公式サイトで最新のボーナスを確認する",
    href: "https://go.casino.su/justspin:just-spin?referrer_path=%2Freviews%2Fjust-spin",
  },
};