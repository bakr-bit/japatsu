import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewPlayOjo: ReviewPageContent = {
  hero: {
    title: "PlayOJO（プレイオジョ）徹底レビュー＆ボーナス情報 2025最新",
    subheading: "賭け条件なし！初回入金で80回フリースピン",
    description: "【重要】PlayOJOは2025年4月をもって日本市場の新規顧客の受け入れを終了しました。既存プレイヤーは引き続き利用可能ですが、新規登録はできません。このレビューはサービス提供時の情報に基づいています。",
    score: 4.3,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 87,
        note: "日本市場オープン後、すぐに人気を獲得。キャンペーンの豊富さが魅力ですが、新規受付停止により指数は調整。",
      },
      {
        label: "規約",
        percent: 81,
        note: "「賭け条件なし」という画期的な制度を導入。ボーナスはフリースピンが中心で、規約は非常に分かりやすい。",
      },
      {
        label: "操作性",
        percent: 83,
        note: "デスクトップ、スマホ、専用アプリ共にサクサク動作。登録も数分で完了する手軽さ。",
      },
      {
        label: "サポート",
        percent: 86,
        note: "ネイティブ日本人によるチャット、メール、LINE、さらに珍しい電話サポートにも対応しており非常に手厚い。",
      },
    ],
    highlights: [
      "全てのボーナスに賭け条件が一切なし",
      "ベットごとにキャッシュが還元される「OJOプラス」",
      "電話対応も可能な手厚い日本語カスタマーサポート",
      "快適に遊べるiOS・Android専用アプリ完備",
    ],
    watchouts: [
      "2025年4月以降、日本からの新規登録は不可",
      "現金ボーナスはなく、ウェルカムオファーはフリースピンのみ",
      "一部の決済方法や少額出金時に手数料が発生する場合がある",
    ],
    avatarSrc: "/assets/casino/playojo.png",
    avatarAlt: "Playojoのロゴ",
  },
  payments: {
    featured: [
      {
        name: "銀行振込",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://casinotsu.com/payment/bank-transfer",
        badge: "定番",
        note: "多くのプレイヤーが利用する安心の決済",
      },
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://casinotsu.com/payment/visa",
        badge: "カード",
        note: "クレジット/デビット両対応で即時入金",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://casinotsu.com/payment/payz",
        badge: "Eウォレット",
        note: "迅速な入出金で人気の電子決済サービス",
      },
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "26種類の暗号資産に対応",
      },
    ],
    deposits: [
      { name: "Bank Transfer", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg" },
      { name: "Bitcoin Cash" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg" },
      { name: "JCB", icon: "/assets/payments/jcb.svg" },
      { name: "Litecoin" },
      { name: "MasterCard", icon: "/assets/payments/mastercard.svg" },
      { name: "Paxos" },
      { name: "Payz", icon: "/assets/payments/payz.svg" },
      { name: "Polkadot" },
      { name: "Polygon" },
      { name: "Shiba Inu" },
      { name: "Solana" },
      { name: "Stellar" },
      { name: "Tether" },
      { name: "Tiger Pay", icon: "/assets/payments/tiger-pay.svg" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg" },
      { name: "VISA", icon: "/assets/payments/visa.svg" },
      { name: "Skrill" },
      { name: "Neteller" },
      { name: "PaySafeCard" },
      { name: "PayPal" },
      { name: "ApplePay" },
      { name: "MuchBetter" },
      { name: "PIX" },
      { name: "Jeton" },
    ],
    withdrawals: [
      { name: "Bank Transfer", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Payz", icon: "/assets/payments/payz.svg" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg" },
      { name: "Tiger Pay", icon: "/assets/payments/tiger-pay.svg" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg" },
      { name: "Litecoin" },
      { name: "Skrill" },
      { name: "Neteller" },
      { name: "MuchBetter" },
      { name: "Jeton" },
    ],
    notes: [
      "2024年6月19日以降に登録したプレイヤーは日本円（JPY）が利用可能。初回入金時の通貨でアカウント通貨が固定されます。",
      "出金処理は通常0〜1日（11時間以内が目標）と高速。出金上限額なし。最低出金額は¥3,000。",
      "公式には出金手数料無料ですが、100ドル以下の出金には5%の手数料がかかる場合があるなど、条件により手数料が発生する可能性があります。",
    ],
  },
  bonuses: {
    overview:
      "PlayOJOの最大の特徴は、全てのオファーに「賭け条件がない」ことです。獲得した勝利金は、いつでもすぐに出金可能なリアルマネーとして扱われます。",
    noDeposit:
      "現在、入金不要ボーナスは提供されていません。",
    extraSpins: {
      summary:
        "CasinoTsu経由の初回入金限定で、通常50回のところに追加で30回分、合計80回のキャッシュスピン（賭け条件なしのフリースピン）が進呈されます。対象ゲームは人気スロット『Sugar Rush』です。",
      schedule: [
        "CasinoTsuのリンクからPlayOJOに登録",
        "初回限定オファーを選択して¥3,000（$20）以上を入金",
        "まず「報酬」から50スピンを受け取る",
        "次に「デイリープロモ」から追加の30スピンを受け取る（初回入金後3日以内）",
      ],
      warning: "フリースピンの勝利金に出金条件はありません。ただし、スピンは受け取りから24時間以内に使用しないと失効します。",
    },
    welcomeRows: [],
    conditions: [
      "このオファーはCasinoTsu経由の新規登録・初回入金者のみ対象です。",
      "最低入金額は¥3,000（$20）です。",
      "スピンバリューは¥30（$0.2）です。",
      "報酬とゲームプレイに関するポリシーが適用されます。",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "デイリープロモーション",
      description: "日替わりで新しいオファーが登場します。「1年ぶっ通しスピン」や「50フリースピン＋OJOホイール」など、毎日ログインしてチェックする価値のあるプロモーションが満載です。",
      highlight: "毎日チェック必須の日替わり限定オファー",
    },
    {
      title: "OJOのトーナメント",
      description: "毎日複数のスロットトーナメントが開催中。バイイン（参加費有料）またはフリーロール（無料）で参加し、上位3名に入賞すると賭け条件なしのフリースピンパックを獲得できます。",
    },
  ],
  facts: [
    { label: "名称", value: "PlayOJO（プレイオジョ）" },
    { label: "ローンチ", value: "2022年（日本市場）、2017年（国際市場）" },
    { label: "運営会社", value: "Skill On Net Limited" },
    { label: "ライセンス", value: "Malta Gaming Authority (MGA/CRP/171/2009/01)" },
    { label: "VIPプログラム", value: "✅（OJOクラブ）" },
    {
      label: "ゲームタイプ",
      value:
        "バカラ, ブラックジャック, クラップス, ゲームショー, ライブカジノ, ポーカー, ルーレット, スロット, ビデオポーカー, ビンゴ, ケノ, スクラッチカード, スリンゴ",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="/providers/big-time-gaming">Big Time Gaming</Link>, <Link href="/providers/blueprint-gaming">Blueprint Gaming</Link>, <Link href="/providers/elk-studios">Elk Studios</Link>, <Link href="/providers/golden-hero-games">Golden Hero</Link>, <Link href="/providers/microgaming">Microgaming</Link>, <Link href="/providers/netent">NetEnt</Link>, <Link href="/providers/nolimit-city">Nolimit City</Link>, <Link href="/providers/playtech">Playtech</Link>, <Link href="/providers/play-n-go">Play’n GO</Link>, <Link href="/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="/providers/quickspin">Quickspin</Link>, <Link href="/providers/red-tiger">Red Tiger</Link>, <Link href="/providers/relax-gaming">Relax</Link>, Slingshot Studios, <Link href="/providers/thunderkick">Thunderkick</Link>, <Link href="/providers/yggdrasil">Yggdrasil</Link>
        </span>
      ),
    },
    { label: "電話サポート", value: "✅" },
    { label: "電話番号", value: "03-4550-1423 / 050-5806-4352" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:jpsupport@playojo.com">jpsupport@playojo.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (毎日 日本時間13:00～翌03:00)" },
    { label: "LINEサポート", value: "✅ (@ojoline)" },
  ],
  intro: {
    paragraphs: [
      "「賭け条件なんてもう古い！」このキャッチフレーズと共に2022年、日本市場に登場したのが『PlayOJO（プレイオジョ）』です。2017年から国際的に展開してきた実績を持ち、その革新的なアプローチで既存のオンラインカジノの常識を覆しました。",
      "最大の特徴は、ボーナスに付随する複雑な「賭け条件」を完全に撤廃したこと。これにより、プレイヤーは勝利金をいつでも好きな時に引き出せる、透明で公平なゲーム体験を楽しめます。",
      "しかし、2025年4月をもって日本市場からの新規プレイヤー受け入れを終了。このレビューでは、その画期的なサービス内容を詳しく解説していきます。",
    ],
    ctas: [],
  },
  games: [
    "PlayOJOでは7,000種類以上のカジノゲームが楽しめます。スロットだけでも約7,500種類と圧倒的なラインナップを誇り、Microgaming社との独占スロット『JUNGLE FIESTA』など、ここでしか遊べないゲームも提供していました。",
    "ユニークな機能として「HOT＆COLD」があり、5分ごとに更新されるデータに基づき、現在勝ちやすい（HOT）ゲームとそうでない（COLD）ゲームが一目でわかるようになっていました。",
    "ライブカジノも充実しており、EvolutionやPlaytechなど複数の大手プロバイダーと提携。PlayOJO専用のライブディーラーテーブルも用意され、臨場感あふれるプレイが可能でした。",
  ],
  features: [
    "OJOプラス：ベットするたびに、勝敗に関係なくリアルマネーが還元される独自のキャッシュバックシステム。還元率はゲームごとに異なり、最大0.60%のキャッシュバックを受けられます。",
    "OJOクラブ：プレイ実績に応じてレベルが上がるVIPプログラム。最高レベルの「OJO名人」は完全招待制で、専属マネージャーや豪華なギフトなどの特典がありました。",
    "OJOホイール：特定レベル到達時やランダムなタイミングで回せる報酬ホイール。賭け条件なしのフリースピンを獲得できるチャンスがありました。",
    "モバイルアプリ：iOSとAndroidの両方に対応した専用アプリを提供。ブラウザ版よりもさらに快適な操作性を実現していました。",
  ],
  editorial: {
    author: "CasinoTsu編集部",
    profileHref: "",
    hook: "賭け条件ゼロという革命的なコンセプトは賞賛に値しますが、日本市場からの撤退は非常に残念です。",
    theGoodStuff: "プレイヤーにとって最も分かりにくい「賭け条件」をなくした点は、オンラインカジノ業界に大きなインパクトを与えました。ベット毎のキャッシュバック「OJOプラス」や手厚い日本語サポートも、プレイヤー第一の姿勢の表れです。",
    theHeadsUp: "最大の注意点は、現在日本から新規登録ができないことです。既存プレイヤーは引き続きプレイできますが、新しい方は代替カジノを探す必要があります。また、ウェルカムオファーがフリースピンのみである点は、高額なマッチボーナスを好むプレイヤーには物足りなかったかもしれません。",
    finalThought: "PlayOJOは、透明性と公平性を追求した理想的なオンラインカジノの一つでした。そのコンセプトは、今後のカジノ選びの基準として、多くのプレイヤーの記憶に残るでしょう。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "PlayOJOが日本市場に与えた衝撃は、「賭け条件の完全撤廃」という一言に尽きます。これにより、プレイヤーはボーナスから得た勝利金を即座に現金として引き出せるようになり、オンラインカジノの不透明性を払拭する先駆けとなりました。",
      "このプレイヤーファーストの姿勢は、ベットごとに現金が戻る「OJOプラス」や、報酬がもらえる「OJOホイール」といった独自のシステムにも貫かれていました。これらは単なるプロモーションではなく、プレイすればするほど恩恵が受けられる、非常に公平なリベートプログラムとして機能していました。",
      "ゲームのラインナップも7,000種類以上と非常に豊富で、大手プロバイダーを網羅。特に、どのゲームが勝ちやすいかをリアルタイムで示す「HOT & COLD」機能は、プレイヤーのゲーム選びに新たな視点を提供しました。",
      "サポート体制も特筆すべき点で、チャットやメールに加え、オンラインカジノでは珍しい電話やLINEでの日本語サポートを完備。プレイヤーが抱える問題を迅速に解決しようという真摯な姿勢が伺えました。",
      "これほどまでにプレイヤーに寄り添ったカジノが、2025年4月に日本市場の新規受付を停止したことは大きな損失です。このレビューが、PlayOJOが示した「あるべきカジノの姿」を記録し、今後のより良いカジノ選びの一助となれば幸いです。",
    ],
  },
  security: [
    "信頼性の高いMalta Gaming Authority (MGA)のライセンスを取得して運営",
    "英国、デンマーク、スウェーデンなど、世界で最も厳しい規制機関のライセンスも保持",
    "SSL暗号化技術を導入し、プレイヤーの個人情報や取引データを保護",
    "iTech Labsなどの独立した第三者監査機関による定期的な監査を受け、ゲームの公平性を確保",
  ],
  responsiblePlay: [
    "入金制限",
    "プレイ時間制限",
    "リアリティチェック",
    "クールダウン期間",
    "一時的なアカウント停止",
    "自己除外（180日間および無期限）",
    "自己評価テストなど、合計13種類の予防ツールを提供",
  ],
  complaintStats: [
    "Casino Guru: 安全性指数「高」8.5/10",
    "CasinoAlpha: 「優秀」9.0/10",
    "Casino.org: 4.3/5",
    "Wegamble: 「平均」3.66/5",
  ],
  awards: [
    "2017年 EGRアワード「ライジング・スター・オブ・ザ・イヤー」受賞",
    "2023年 各種アワード（ベストカジノ、ブランド・オブ・ザ・イヤーなど多数）受賞",
  ],
  restrictedCountries: [],
  userConcerns: [
    "利用規約の一部が不公平であるとの指摘",
    "カスタマーサポートの対応にばらつきがあるとの声",
    "資金没収や出金遅延に関する苦情の報告",
    "ID確認（KYC）のプロセスに制限があるとの意見",
  ],
  summary: [
    "PlayOJOは「賭け条件なし」という画期的なコンセプトを掲げ、日本のオンラインカジノ業界に新風を巻き起こしました。プレイヤー専用プログラムや手厚いサポートなど、魅力的な要素が満載でした。",
    "モバイルアプリも完備し、いつでもどこでも快適なプレイ環境を提供していました。",
    "2025年4月をもって日本市場の新規顧客受け入れを終了したため、これから新しく始めることはできません。この事実は非常に残念ですが、PlayOJOが示したプレイヤー中心の運営方針は、他のカジノを評価する上での重要な指標となるでしょう。",
  ],
  extraLinks: [
    { text: "🔰 賭け条件ってなに？わかりやすく解説！", href: "https://www.japanesecasino.com/guides/wagering-requirements" },
    { text: "キャッシュバックがお得なカジノ特集", href: "https://www.japanesecasino.com/bonuses/cashback" },
  ],
  faq: [
    {
      question: "PlayOJOに新規登録できますか？",
      answer: "いいえ、できません。PlayOJOは2025年4月をもって日本からの新規プレイヤーの受け入れを停止しました。既存のアカウントをお持ちの方のみ、引き続きプレイが可能です。",
    },
    {
      question: "PlayOJOのボーナスに賭け条件はありますか？",
      answer: "いいえ、一切ありませんでした。PlayOJOの最大の特徴は、フリースピンを含め、すべてのボーナスや報酬に賭け条件が適用されないことでした。勝利金は全てリアルマネーとして扱われました。",
    },
    {
      question: "ウェルカムボーナスはどのような内容でしたか？",
      answer: "CasinoTsuからの登録限定で、初回¥3,000以上の入金に対し、人気スロット『Sugar Rush』で使える賭け条件なしのフリースピンが80回分提供されていました。",
    },
    {
      question: "日本語のサポートはありましたか？",
      answer: "はい、非常に手厚い日本語サポートが提供されていました。ライブチャット、メール、LINEに加え、オンラインカジノでは珍しい電話でのサポートにも対応していました。",
    },
  ],
  cta: {
    text: "CasinoTsu推薦の他の優良カジノを探す",
    href: "https://www.japanesecasino.com/reviews",
  },
};