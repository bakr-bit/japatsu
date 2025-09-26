import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewBigWins: ReviewPageContent = {
  hero: {
    title: "ビッグウィン（Big Wins）カジノレビュー",
    subheading: "最大3BTC（¥500,000）＋145回フリースピン",
    description: "ビッグウィンは日本市場から撤退しました。このレビューは、かつて提供されていた賭け条件なしのフリースピンや豪華なBTCボーナスなどの情報を記録として保持しています。",
    score: 4.2,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 78,
        note: "サイトの使いやすさと豪華なボーナスで人気があったが、ライセンス問題や出金トラブルの報告、市場撤退により評価は複雑。",
      },
      {
        label: "規約",
        percent: 88,
        note: "フリースピンの勝利金に賭け条件がなく、入金分のベットもボーナス条件消化にカウントされるなど、非常に好条件だった。",
      },
      {
        label: "操作性",
        percent: 92,
        note: "デザイン、視認性、フォントに至るまで作り込まれており、非常に遊びやすいと高く評価されていた。",
      },
      {
        label: "サポート",
        percent: 90,
        note: "ネイティブ日本人スタッフによる迅速かつ丁寧な対応で、サポートの質は非常に高かった。",
      },
    ],
    highlights: [
      "最大3BTCの超豪華ウェルカムボーナス",
      "勝利金に賭け条件がないフリースピン145回",
      "4,000種類以上の豊富なゲームラインナップ",
      "ネイティブ日本人スタッフによる質の高いカスタマーサポート",
    ],
    watchouts: [
      "日本市場から撤退済みで、現在は利用不可",
      "出金遅延やアカウント凍結など、プレイヤーからの深刻な苦情報告あり",
      "ライセンスの有効性に問題があった可能性が指摘されている",
      "Trustpilotなどで非常に低い評価を受けている",
    ],
  },
  payments: {
    featured: [
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "最大3BTCのボーナス対象となる主要決済",
      },
      {
        name: "銀行振込",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://casinotsu.com/payment/bank-transfer",
        badge: "日本円対応",
        note: "仮想通貨以外でも安心して利用できた",
      },
      {
        name: "Vega Wallet",
        icon: "/assets/payments/vega-wallet.svg",
        href: "https://casinotsu.com/payment/vega-wallet",
        badge: "Eウォレット",
        note: "日本人プレイヤーに人気の電子決済",
      },
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://casinotsu.com/payment/visa",
        badge: "クレジットカード",
        note: "手軽に入金できる定番の決済手段",
      },
    ],
    deposits: [
      { name: "Visa", icon: "/assets/payments/visa.svg" },
      { name: "MasterCard", icon: "/assets/payments/mastercard.svg" },
      { name: "JCB", icon: "/assets/payments/jcb.svg" },
      { name: "American Express" },
      { name: "Diners Club" },
      { name: "銀行振込", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg" },
      { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg" },
      { name: "Bitcoin Cash (BCH)" },
      { name: "Tether (USDT)", icon: "/assets/payments/tether.svg" },
      { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg" },
      { name: "TRON (TRX)" },
      { name: "Litecoin (LTC)" },
      { name: "Cardano (ADA)" },
      { name: "Dogecoin (DOGE)" },
      { name: "Ripple (XRP)" },
      { name: "Binance Coin (BNB)" },
      { name: "USD Coin (USDC)" },
      { name: "DAI" },
      { name: "Skrill" },
      { name: "Neteller" },
      { name: "Paysafecard" },
    ],
    withdrawals: [
      { name: "銀行振込", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg" },
      { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg" },
      { name: "Bitcoin Cash (BCH)" },
      { name: "Tether (USDT)", icon: "/assets/payments/tether.svg" },
      { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg" },
      { name: "TRON (TRX)" },
      { name: "Litecoin (LTC)" },
      { name: "Cardano (ADA)" },
      { name: "Dogecoin (DOGE)" },
      { name: "Ripple (XRP)" },
      { name: "Binance Coin (BNB)" },
      { name: "USD Coin (USDC)" },
      { name: "DAI" },
    ],
    notes: [
      "仮想通貨、銀行振込、Vega Walletの最大出金額は制限無しでした。",
      "銀行振込での出金には約2〜3営業日、その他は通常約24時間以内に処理されていました。",
      "出金申請前に氏名、生年月日、住所などの個人情報登録が必須でした。",
      "一部情報源によると、入金手数料が適用される場合があったとされています。",
    ],
  },
  bonuses: {
    overview:
      "⚠️重要なお知らせ⚠️ ビッグウィンは日本市場から撤退したため、現在これらのボーナスは利用できません。ビッグウィンでは、最大3BTC（50万円）という非常に高額なウェルカムパッケージが提供されていました。入金したリアルマネーでのベットも賭け条件消化にカウントされるという、プレイヤーに有利な仕様が特徴でした。",
    noDeposit:
      "サイトのバグを発見し、内容をサポートに報告すると、20回のフリースピンがもらえるユニークなプロモーションがありました。",
    extraSpins: {
      summary:
        "ウェルカムパッケージの一部として、合計145回のフリースピンが進呈されました。最大の魅力は、これらのフリースピンから得た勝利金に一切賭け条件がなかったことです。",
      schedule: [
        "初回入金 (¥5,000以上): 15回 (Gates of Olympus 1000)",
        "2回目入金 (¥5,000以上): 30回 (Mochimon)",
        "3回目入金 (¥15,000以上): 100回 (10日間、毎日10回ずつ日替わりスロット)",
      ],
      warning: "フリースピンの受け取りには、それぞれ指定された期間内に入金する必要がありました。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "100%", cap: "1 BTC / ¥200,000", code: "不要" },
      { depositNumber: "2回目", percent: "50%", cap: "1 BTC / ¥200,000", code: "不要" },
      { depositNumber: "3回目", percent: "25%", cap: "1 BTC / ¥100,000", code: "不要" },
    ],
    conditions: [
      "ボーナスマネーの賭け条件は、初回40倍、2回目35倍、3回目30倍でした。",
      "賭け条件はボーナス額にのみ適用されました。",
      "ボーナスマネーの有効期限は14日間でした。",
      "ゲームごとの賭け条件消化率: スロット100%、ライブカジノ10%、テーブルゲーム5%。",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "VIPプログラム",
      description: "全15レベルのロイヤリティプログラムがあり、レベル5以上になるとキャッシュバックが受けられるようになりました。リアルマネーでのプレイでポイントが貯まり、レベルアップ時にはオリジナルスロット「ビッグウィンスピン」を回せる特典もありました。",
      highlight: "レベルアップでキャッシュバック率が向上",
    },
    {
      title: "デイリーキャッシュバックボーナス",
      description: "VIPプログラムとは別に、最大20%のデイリーキャッシュバックボーナスが提供されていた可能性があります。",
    },
    {
      title: "ウィークリートーナメント「レーチャレ」",
      description: "毎週開催されるトーナメントで、賞金プールは5,000ユーロでした。",
    },
  ],
  facts: [
    { label: "名称", value: "Big Wins (ビッグウィン)" },
    { label: "ローンチ", value: "2021-2023年 (情報錯綜)" },
    { label: "運営会社", value: "EastPoint Operations B.V. (または BigWins Ltd)" },
    { label: "ライセンス", value: "CIL (キュラソー) ※ライセンスの有効性に問題があった可能性あり" },
    { label: "VIPプログラム", value: "✅" },
    { label: "対応言語", value: "日本語、英語、ドイツ語、スペイン語、フランス語など8言語以上" },
    { label: "対応通貨", value: "JPY, BTC, USDT, CAD, EUR, AUD, NZDなど" },
    {
      label: "ゲームタイプ",
      value: "スロット, ライブカジノ, ブラックジャック, ポーカー, ビデオポーカー, ケノ, スクラッチカード, クラッシュゲーム",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://casinotsu.com/providers/evolution">Evolution</Link>, <Link href="https://casinotsu.com/providers/playtech">Playtech</Link>, <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://casinotsu.com/providers/ezugi">Ezugi</Link>, <Link href="https://casinotsu.com/providers/octoplay">Octoplay</Link>, <Link href="https://casinotsu.com/providers/winfinity">Winfinity</Link> など
        </span>
      ),
    },
    { label: "最小入金額", value: "¥1,500" },
    { label: "最小出金額", value: "€1 (カード) / €100 (銀行送金)" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support-jp@bigwins.com">support-jp@bigwins.com</Link> },
    { label: "ライブチャット", value: "日本語対応 (17:00〜翌03:00)" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "⚠️重要なお知らせ⚠️ ビッグウィンは日本市場から撤退し、現在は新規登録を受け付けていません。このレビューは、同カジノが運営されていた当時の情報を記録するものです。",
      "ビッグウィンは、最大3BTCという破格のウェルカムボーナスと、賭け条件のないフリースピンで注目を集めたクリプトカジノでした。サイトデザインは視覚的に非常に分かりやすく、4,000種類を超えるゲームラインナップと質の高い日本語サポートで、多くのプレイヤーから高い評価を得ていました。",
      "しかしその一方で、ライセンスの有効性に関する問題や、プレイヤーからの出金トラブルに関する深刻な苦情も報告されており、光と影の両面を持つカジノでした。",
    ],
    ctas: [
      { text: "🌟 CasinoTsu推薦の優良カジノをチェック", href: "https://casinotsu.com/reviews" },
    ],
  },
  games: [
    "ビッグウィンでは4,000種類以上のスロットゲームが提供されており、「ゲーツ・オブ・オリンパス」や「ムーンプリンセス」などの人気定番機種から最新作まで幅広く網羅していました。",
    "ライブカジノはEvolution、Playtech、Pragmatic Play、Ezugiの4社が提供し、充実したラインナップでした。ジャックポットの賞金は最大30万ドルに達することもありましたが、プログレッシブジャックポットの種類は限定的だったようです。",
  ],
  features: [
    "サイトのデザイン性が非常に高く、見た目の美しさだけでなく、文字フォントや配置など細部にまでこだわった、直感的で使いやすいインターフェースが最大の特徴でした。",
    "モバイル体験も最適化されており、専用アプリはありませんでしたが、スマートフォンやタブレットのブラウザから快適にプレイできました。",
  ],
  editorial: {
    author: "Kotone",
    profileHref: "/authors/kotone",
    hook: "最高の使い心地と最悪の評判が同居する、非常に評価の難しいカジノでした。",
    theGoodStuff: "サイトの使いやすさは業界でもトップクラスでした。ボーナス条件、特に賭け条件ゼロのフリースピンは破格であり、ネイティブ日本人によるサポートも完璧。表面的には非の打ち所がない優良カジノに見えました。",
    theHeadsUp: "しかし、その裏ではライセンスの有効性に関する疑念や、出金遅延、アカウント凍結といった深刻なプレイヤーからの苦情が多数報告されていました。特にTrustpilotなどでの評価は非常に低く、信頼性には大きな疑問符がつきます。",
    finalThought: "どんなにサイトが使いやすくボーナスが魅力的でも、最終的に勝利金が引き出せなければ意味がありません。ビッグウィンは、オンラインカジノ選びにおいて、表面的な魅力だけでなく、運営の信頼性を確認することの重要性を教えてくれる事例となりました。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "ビッグウィンは、プレイヤー体験という点において、多くのカジノが目指すべき一つの完成形を示していました。直感的で美しいサイトデザイン、4,000を超えるゲームの数々、そして迅速で的確なネイティブ日本語サポート。これだけを見れば、間違いなくトップクラスのカジノと評価できたでしょう。さらに、賭け条件のないフリースピンや、最大3BTCという巨大なウェルカムボーナスは、他のカジノを圧倒するほどの魅力を持っていました。",
      "しかし、オンラインカジノの評価はそれだけでは決まりません。最も重要なのは、その運営が公正で信頼できるかという点です。ビッグウィンに関してはこの点で深刻な懸念がありました。一部の監視サイトからはライセンスの有効性に疑問が呈され、プレイヤーコミュニティでは出金遅延や理不尽なアカウント凍結といった、カジノとして最もあってはならない問題が数多く報告されていました。Card Playerのようなサイトで高評価を得る一方で、Trustpilotのようなユーザー主体のプラットフォームでは酷評されるという、評価の二極化もその不安定さを物語っています。",
      "このカジノは、ベテランチームによって設立されたとされ、そのノウハウがサイトの使いやすさに反映されていたことは間違いありません。しかし、その運営実態は、多くのプレイヤーに不安と不満をもたらしました。最終的に日本市場からの撤退という結末を迎えましたが、ビッグウィンは「優れたユーザー体験」と「運営の信頼性」は必ずしも一致しないという、重要な教訓を残したと言えるでしょう。",
    ],
  },
  security: [
    "128ビットSSL暗号化技術を使用していたとされている",
    "ゲームの公平性を保つためのRNG（乱数発生器）を採用",
    "日本語で閲覧可能なプライバシーポリシーを設置",
  ],
  responsiblePlay: [
    "自己評価テスト",
    "24時間以上のクールダウン期間",
    "自己排除期間（24時間、1ヶ月、6ヶ月、無期限）の設定",
    "サポートへの連絡によるアカウントの永久閉鎖",
  ],
  complaintStats: [
    "出金遅延や支払い不能の報告",
    "勝利金獲得後のアカウント凍結",
    "出金時に過剰な書類提出を要求される",
    "これらの深刻な苦情が複数のプレイヤーから報告されている",
  ],
  awards: [
    "Card Player: 9.3/10",
    "VegasSlotsOnline: 4.5/5",
    "Chipy.com: 3.6/5",
    "Trustpilot: 1.7/5",
    "BitEdge: 1.6/5",
  ],
  restrictedCountries: [
    "アメリカ",
    "イギリス",
    "オーストラリア",
    "オーストリア",
    "ドイツ",
    "フランス",
    "オランダ",
    "ロシア",
  ],
  userConcerns: [
    "出金が遅れる、または支払われないリスク",
    "勝利後にアカウントを凍結されるリスク",
    "ライセンスが有効でない、またはブラックリストに掲載されている可能性",
  ],
  summary: [
    "日本市場からは既に撤退しており、利用できません。",
    "サイトの使いやすさ、ボーナス条件、サポートの質は非常に高かった。",
    "一方で、ライセンスの信頼性や出金に関する深刻なプレイヤーからの苦情が多数存在した。",
    "表面的な魅力と運営の信頼性に大きなギャップがあったカジノの典型例。",
  ],
  extraLinks: [
    { text: "💰 賭け条件なしボーナスの活用法", href: "https://casinotsu.com/bonuses/no-wagering" },
    { text: "🪙 仮想通貨が使えるカジノ特集", href: "https://casinotsu.com/crypto" },
  ],
  faq: [
    {
      question: "ビッグウィンには、ウェルカムボーナスはありましたか？",
      answer: "はい、最大合計3BTC（または50万円）の非常に豪華な入金ボーナスが提供されていました。",
    },
    {
      question: "ビッグウィンでは、ゲームショーは遊べましたか？",
      answer: "はい、EvolutionやPlaytechなど4つのプロバイダーによるゲームショーをプレイすることができました。",
    },
    {
      question: "ビッグウィンのおすすめボーナスは何でしたか？",
      answer: "勝利金に賭け条件のない145回のフリースピンと、サイトのバグを報告するともらえる20回のフリースピンが特にユニークで魅力的でした。",
    },
  ],
  cta: {
    text: "CasinoTsuが推薦する他の安全なカジノを探す",
    href: "https://casinotsu.com/reviews",
  },
};