import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewCasinoSecret: ReviewPageContent = {
  hero: {
    title: "Casino Secret（カジノシークレット）レビュー",
    subheading: "限定$35入金不要ボーナス＋最大$1,000ウェルカムボーナス",
    description: "キャッシュバックのパイオニア、Casino SecretをCasinoTsuが徹底レビュー。賭け条件なしの現金キャッシュバックや限定ボーナス、評判を詳しく解説します。",
    score: 4.3,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 90,
        note: "2018年の登場以来、独自の現金キャッシュバックシステムで高い人気を維持。プレイヤーからの支持が厚い。",
      },
      {
        label: "規約",
        percent: 86,
        note: "限定入金不要ボーナスの賭け条件は20倍と緩やか。最大$1,000のウェルカムパッケージも魅力的。",
      },
      {
        label: "操作性",
        percent: 84,
        note: "豊富なゲームフィルターが便利で、入出金方法も多数揃っている。アプリはないがモバイルでも快適。",
      },
      {
        label: "サポート",
        percent: 80,
        note: "毎日10時から深夜1時までと対応時間は長いが、返信速度にばらつきがあるとの声も。",
      },
    ],
    highlights: [
      "ジャパカジ限定！$35入金不要ボーナス",
      "賭け条件なしのインスタントキャッシュバック",
      "最大$1,000の3回にわたるウェルカムボーナス",
      "毎日開催されるお得なデイリーキャンペーン",
    ],
    watchouts: [
      "リアルマネー（入金額）に出金条件2倍がかかる",
      "VIPプログラムは招待制で詳細が非公開",
      "日本語サポートの対応は24時間ではない",
    ],
  },
  payments: {
    featured: [
      {
        name: "銀行振込",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://casinotsu.com/payment/bank-transfer",
        badge: "国内送金",
        note: "主要銀行に対応し24時間利用可能",
      },
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://casinotsu.com/payment/visa",
        badge: "即時反映",
        note: "信頼性の高い定番クレジットカード",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://casinotsu.com/payment/payz",
        badge: "Eウォレット",
        note: "迅速な入出金で人気の電子決済",
      },
      {
        name: "Vega Wallet",
        icon: "/assets/payments/vega-wallet.svg",
        href: "https://casinotsu.com/payment/vega-wallet",
        badge: "ポイント制",
        note: "ポイントでの管理が便利な決済サービス",
      },
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "匿名性とスピードが魅力の決済手段",
      },
    ],
    deposits: [
      { name: "VISA", icon: "/assets/payments/visa.svg", href: "https://casinotsu.com/payment/visa" },
      { name: "MasterCard", icon: "/assets/payments/mastercard.svg", href: "https://casinotsu.com/payment/mastercard" },
      { name: "JCB", icon: "/assets/payments/jcb.svg", href: "https://casinotsu.com/payment/jcb" },
      { name: "American Express" },
      { name: "国内銀行送金", icon: "/assets/payments/bank-transfer.svg", href: "https://casinotsu.com/payment/bank-transfer" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vega-wallet" },
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "SticPay", icon: "/assets/payments/sticpay.svg", href: "https://casinotsu.com/payment/sticpay" },
      { name: "iWallet", icon: "/assets/payments/iwallet.svg", href: "https://casinotsu.com/payment/iwallet" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg", href: "https://casinotsu.com/payment/ethereum" },
      { name: "Litecoin" },
      { name: "Bitcoin Cash" },
      { name: "Ripple" },
      { name: "Tether TRC-20" },
      { name: "Tether ERC-20" },
      { name: "eVoucher" },
    ],
    withdrawals: [
      { name: "国内銀行送金", icon: "/assets/payments/bank-transfer.svg", href: "https://casinotsu.com/payment/bank-transfer" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vega-wallet" },
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "SticPay", icon: "/assets/payments/sticpay.svg", href: "https://casinotsu.com/payment/sticpay" },
      { name: "iWallet", icon: "/assets/payments/iwallet.svg", href: "https://casinotsu.com/payment/iwallet" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg", href: "https://casinotsu.com/payment/ethereum" },
      { name: "Litecoin" },
      { name: "Bitcoin Cash" },
      { name: "Ripple" },
      { name: "Tether TRC-20" },
      { name: "Tether ERC-20" },
    ],
    notes: [
      "出金には入金額の2倍のベットが必要です。これは他のカジノの1倍条件に比べて厳しめです。",
      "出金処理は通常24時間以内に完了します。",
      "最低入出金額は基本的に$20ですが、銀行送金や仮想通貨では異なる場合があります。",
    ],
  },
  bonuses: {
    overview:
      "Casino Secretのボーナスは多岐にわたります。ジャパカジからの登録者には限定の$35入金不要ボーナス、初回から3回目までの入金で最大$1,000のウェルカムボーナス、そして何よりも特徴的なのが賭け条件なしの「インスタントキャッシュバック」です。",
    noDeposit:
      "ジャパカジ経由で新規登録し、メールアドレス認証を完了すると、限定で$35の入金不要ボーナスが進呈されます。賭け条件は20倍と、この種のボーナスとしては比較的緩やかな設定です。",
    extraSpins: {
      summary:
        "初回入金時に100回分のフリースピンも付与されます。入金完了後、10日間にわたって毎日10スピンずつアカウントに進呈される形式です。",
      schedule: [
        "初回入金完了後に付与開始",
        "10日間、毎日10スピンずつ進呈",
        "進呈されたフリースピンの有効期限は72時間",
      ],
      warning: "毎日ログインしてフリースピンを受け取り、期限内に使い切る必要があります。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "200%", cap: "$500", code: "不要" },
      { depositNumber: "2回目", percent: "100%", cap: "$300", code: "不要" },
      { depositNumber: "3回目", percent: "150%", cap: "$200", code: "不要" },
    ],
    conditions: [
      "ウェルカム入金ボーナスの賭け条件は20倍です。",
      "ボーナスの有効期限は獲得から30日間です。",
      "ボーナス利用時の最大ベット額はスロットで$6.25、テーブルゲーム/ライブカジノで$25です。",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "インスタントキャッシュバック",
      description: "Casino Secretの代名詞。対象ゲーム（600種類以上）をリアルマネーでプレイし、勝利金が発生しなかったベット額の一部が自動的にキャッシュバックされます。このキャッシュバックは現金として進呈され、賭け条件なしで即出金可能です。",
      highlight: "賭け条件なしの現金キャッシュバック",
    },
    {
      title: "月曜ロケット",
      description: "月曜日に「月曜ロケット入金ボーナス」を選択して入金するとボーナスを獲得できます。",
    },
    {
      title: "火曜ブラックジャック / 金曜バカラ",
      description: "対象日にブラックジャックまたはバカラをプレイし、負けても最大$10のボーナスが戻ってくるリスクフリーベットです。",
    },
    {
      title: "水曜6,000ドルトーナメント",
      description: "毎週水曜日から開催される賞金総額$6,000のウィークリートーナメントに参加できます。",
    },
     {
      title: "土曜フリースピン / 日曜キャッシュドロップ",
      description: "週末には人気スロットのフリースピン100回分や、総額$2,500のキャッシュドロップなどのお得なキャンペーンが開催されます。",
    },
  ],
  facts: [
    { label: "名称", value: "Casino Secret" },
    { label: "ローンチ", value: "2018年" },
    { label: "運営会社", value: "Niollo B.V." },
    { label: "ライセンス", value: "Gaming Curacao (キュラソー)" },
    { label: "VIPプログラム", value: "❌ (招待制のため公開されていません)" },
    { label: "対応言語", value: "日本語、英語" },
    {
      label: "ゲームタイプ",
      value: "バカラ, ブラックジャック, クラップス, ゲームショー, ライブカジノ, ポーカー, ルーレット, スロット",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://casinotsu.com/providers/betsoft">BetSoft</Link>, <Link href="https://casinotsu.com/providers/big-time-gaming">Big Time Gaming</Link>, <Link href="https://casinotsu.com/providers/elk-studios">Elk Studios</Link>, <Link href="https://casinotsu.com/providers/golden-hero-games">Golden Hero</Link>, <Link href="https://casinotsu.com/providers/microgaming">Microgaming</Link>, <Link href="https://casinotsu.com/providers/netent">NetEnt</Link>, <Link href="https://casinotsu.com/providers/playson">Playson</Link>, <Link href="https://casinotsu.com/providers/play-n-go">Play’n GO</Link>, <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://casinotsu.com/providers/quickspin">Quickspin</Link>, <Link href="https://casinotsu.com/providers/red-tiger">Red Tiger</Link>, <Link href="https://casinotsu.com/providers/relax-gaming">Relax</Link>, <Link href="https://casinotsu.com/providers/yggdrasil">Yggdrasil</Link>
        </span>
      ),
    },
    { label: "最小入金額", value: "$20" },
    { label: "最小出金額", value: "$20" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support_jp@casinosecret.com">support_jp@casinosecret.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (毎日10:00 〜 翌2:00)" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "Casino Secretは2018年の登場以来、オンラインカジノ業界に「キャッシュバック」という新しいボーナス文化を根付かせたパイオニア的存在です。",
      "その最大の特徴は、負けたベット額の一部が賭け条件のない現金として戻ってくる「インスタントキャッシュバック」。このプレイヤーフレンドリーなシステムが多くの支持を集めています。",
      "2025年3月のサイトリニューアルを経てさらに魅力的になったCasino Secret。当サイト限定の入金不要ボーナスや豪華なウェルカムパッケージ、そしてプレイヤーからの評判を詳しく解説していきます。",
    ],
    ctas: [
      { text: "👉 Casino Secretで限定ボーナスをゲット！", href: "https://go.japanesecasino.com/go/casino-secret" },
      { text: "🔰 入金不要ボーナスとは？徹底解説", href: "https://casinotsu.com/bonuses/no-deposit" },
    ],
  },
  games: [
    "Casino Secretでは、約30社のゲームプロバイダーが提供する2,300種類以上のゲームを楽しめます。スロットの品揃えは非常に豊富で、アニメ系の人気機種も多数揃っています。",
    "ライブカジノは業界トップのEvolution社とPragmatic Play社が担当。さらに、Evolution社提供のCasino Secret専用ライブテーブル「CASINOSECRET CLUB」があり、バカラやブラックジャックを特別な雰囲気の中でプレイできます。",
  ],
  features: [
    "サイトは2025年3月にリニューアルされ、お馴染みのキャラクターも3Dになりました。よりモダンで使いやすいデザインに進化しています。",
    "豊富なゲームフィルター機能が特徴で、プロバイダーやカテゴリでの絞り込みが容易です。",
    "アプリはありませんが、モバイルサイトは完全に最適化されており、どのデバイスからでも快適にプレイできます。",
  ],
  editorial: {
    author: "Nanami",
    profileHref: "/authors/nanami",
    hook: "キャッシュバックの魅力は絶大ですが、入金額への2倍の賭け条件は考慮すべき点です。",
    theGoodStuff: "何と言っても賭け条件なしのインスタントキャッシュバックが素晴らしいです。気づかないうちに貯まっていて、いざという時の保険になります。限定の入金不要ボーナスや豪華なウェルカムパッケージも、新規プレイヤーにとって非常に魅力的です。",
    theHeadsUp: "注意すべきは、入金したリアルマネー自体に2倍の賭け条件が課される点です。これは一般的なカジノの1倍よりも厳しく、すぐに出金したい場合には障壁となり得ます。",
    finalThought: "キャッシュバックを重視するプレイヤーにとっては、これ以上ないほど魅力的なカジノです。リアルマネーの賭け条件を理解した上でプレイすれば、キャッシュバックの恩恵を最大限に受けることができるでしょう。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "Casino Secretがオンラインカジノ市場で確固たる地位を築いた理由は、その革新的な「キャッシュバック」システムにあります。従来のボーナスマネーと複雑な賭け条件に代わり、負けたベットの一部を現金で還元するというシンプルかつ強力なコンセプトは、多くのプレイヤーに安心感とセカンドチャンスを提供しました。",
      "特に「インスタントキャッシュバック」は、対象ゲームをプレイするだけで自動的に蓄積され、賭け条件なしでいつでも引き出せるため、実質的にRTP（還元率）を向上させる効果があります。これに加えて、毎日内容が変わるデイリーキャンペーンは、プレイヤーを飽きさせない工夫として高く評価できます。",
      "当サイト経由で提供される$35の入金不要ボーナスや、最大$1,000＋100回フリースピンのウェルカムパッケージも非常に豪華で、新規プレイヤーが安心してスタートを切れる環境が整っています。ゲームのラインナップも、専用ライブテーブルを含め、質・量ともに満足できるレベルです。",
      "一方で、最大の注意点は入金額自体に課せられる2倍の出金条件です。これはマネーロンダリング防止という名目ですが、一般的な1倍に慣れているプレイヤーにとっては少し厳しい条件と感じるかもしれません。しかし、この点を差し引いても、キャッシュバックシステムがもたらす総合的なメリットは大きいと言えるでしょう。",
      "総じて、Casino Secretはキャッシュバックを戦略的に活用したいプレイヤーにとって最適な選択肢の一つです。そのユニークな価値を理解し、プレイスタイルに合致するかどうかを見極めることが、このカジノを最大限に楽しむ鍵となります。",
    ],
  },
  security: [
    "信頼性の高いキュラソー政府発行の「Gaming Curacao」ライセンスを取得して運営",
    "運営会社は「Niollo B.V.」",
    "提供される全ゲームにRNG（乱数発生器）が導入され、公平性を保証",
    "プライバシーポリシーをサイト上で公開し、個人情報の保護を徹底",
  ],
  responsiblePlay: [
    "自己入金制限: 自身で入金額の上限を設定可能",
    "利用停止期間設定: アカウント設定から、サポートを介さずに自分で利用停止期間を設定できる",
    "これらのツールはアカウント設定の「責任あるギャンブル」セクションからいつでも利用可能",
  ],
  complaintStats: [
    "SNSの口コミでは、キャッシュバックシステムへの高い評価が多数見られる",
    "出金速度に関しても、土日祝を除けば比較的早いとの良い評判がある",
    "一部でキャンペーンボーナスの付与が遅れるとの声もあるが、大きな問題は報告されていない",
  ],
  awards: [
    "プレイヤー投票によるカジノランキングで、2021年上半期から2022年下半期まで4連続でアワードを受賞",
  ],
  restrictedCountries: [],
  userConcerns: [
    "キャンペーンのボーナス付与に時間がかかることがあるとの報告",
    "ライブチャットツールの操作性（Enterキーでの誤送信など）に改善の余地あり",
    "ゲーム検索機能がさらに充実するとより便利になるとの声",
  ],
  summary: [
    "賭け条件なしの現金キャッシュバックが最大の特徴であり、非常に魅力的。",
    "ジャパカジ限定の入金不要ボーナスや、豪華なウェルカムパッケージで有利に始められる。",
    "リアルマネーへの賭け条件が2倍とやや厳しい点には注意が必要。",
    "キャッシュバックやデイリープロモを重視するプレイヤーには非常におすすめできる優良カジノ。",
  ],
  extraLinks: [
    { text: "🤑 キャッシュバックがお得なカジノ特集", href: "https://casinotsu.com/bonuses/cashback" },
    { text: "🔰 オンラインカジノの始め方ガイド", href: "https://casinotsu.com/guides" },
  ],
  faq: [
    {
      question: "Casino Secret のボーナスにはどのようなタイプがありますか？",
      answer: "賭け条件なしで現金として受け取れる「インスタントキャッシュバック」が最も人気です。その他、当サイト限定の入金不要ボーナス、初回から3回目までの入金ボーナス、日替わりのデイリーキャンペーンなど、多彩なボーナスが提供されています。",
    },
    {
      question: "ジャパカジから Casino Secret に登録すると、どのような特典がありますか？",
      answer: "当サイト経由で登録すると、限定の$35入金不要ボーナス、最大$1,000の3回にわたる入金ボーナス、そして100回分のフリースピンという、非常に豪華な特典パッケージを受け取ることができます。",
    },
    {
      question: "Casino Secret でのおすすめの出金方法は？",
      answer: "国内銀行送金が利用でき、主要なネットバンクに対応しているため非常に便利です。その他、Vega Wallet, Payz, Sticpayといった各種電子ウォレットや、ビットコインなどの仮想通貨も迅速な出金に対応しており、選択肢が豊富です。",
    },
  ],
  cta: {
    text: "Casino Secretで限定ボーナスを貰ってプレイ開始！",
    href: "https://go.japanesecasino.com/go/casino-secret",
  },
};