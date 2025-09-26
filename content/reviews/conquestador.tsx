import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewConquestador: ReviewPageContent = {
  hero: {
    title: "コンクエスタドール（CONQUESTADOR）レビュー",
    subheading: "最大¥399,000ボーナス + 225回フリースピン",
    description: "優れた検索機能と豊富なキャンペーンが魅力。アチーブメントやトーナメントで豪華ボーナスを手に入れるチャンスがある探検テーマのカジノ、コンクエスタドールを徹底解説します。",
    score: 4.0,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 77,
        note: "知名度はまだ高くないものの、豊富なキャンペーンで今後の成長が期待されるカジノです。",
      },
      {
        label: "規約",
        percent: 80,
        note: "業界トップクラスのボーナス額を提供。賭け条件は20〜30倍と平均的ですが、規約がやや複雑な点が課題。",
      },
      {
        label: "操作性",
        percent: 81,
        note: "多種多様なゲームフィルター機能が非常に優秀。主要な決済方法も一通り揃っています。",
      },
      {
        label: "サポート",
        percent: 81,
        note: "年中無休の日本語サポートがメールとライブチャットで利用可能。待ち時間も比較的少ないです。",
      },
    ],
    highlights: [
      "CasinoTsu限定の入金不要ボーナス＆フリースピン",
      "最大¥399,000の5段階ウェルカムボーナス",
      "プロバイダー・テーマ・特徴で絞れる高機能なゲームフィルター",
      "プレイヤーを飽きさせない豊富なキャンペーンやトーナメント",
    ],
    watchouts: [
      "ボーナスの種類が多く、利用規約がやや分かりにくい",
      "システム不良やアカウント認証に時間がかかるとの評判あり",
      "登録時の入力項目が他のカジノに比べて多い",
    ],
  },
  payments: {
    featured: [
      {
        name: "PayPay",
        icon: "/assets/payments/paypay.svg",
        href: "https://casinotsu.com/payment/paypay",
        badge: "人気",
        note: "スマホで簡単に入金できる",
      },
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://casinotsu.com/payment/visa",
        badge: "定番",
        note: "信頼性の高いクレジットカード決済",
      },
      {
        name: "銀行振込",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://casinotsu.com/payment/bank-transfer",
        badge: "安心",
        note: "馴染みのある確実な入出金方法",
      },
      {
        name: "Vega Wallet",
        icon: "/assets/payments/vega-wallet.svg",
        href: "https://casinotsu.com/payment/vega-wallet",
        badge: "Eウォレット",
        note: "スピーディーなポイント制決済",
      },
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "迅速で匿名性の高い決済手段",
      },
    ],
    deposits: [
      { name: "VISA", icon: "/assets/payments/visa.svg" },
      { name: "Mastercard", icon: "/assets/payments/mastercard.svg" },
      { name: "JCB", icon: "/assets/payments/jcb.svg" },
      { name: "銀行送金", icon: "/assets/payments/bank-transfer.svg" },
      { name: "即時銀行振込" },
      { name: "PayPay", icon: "/assets/payments/paypay.svg", href: "https://casinotsu.com/payment/paypay" },
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vega-wallet" },
      { name: "iWallet", icon: "/assets/payments/iwallet.svg", href: "https://casinotsu.com/payment/iwallet" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg", href: "https://casinotsu.com/payment/muchbetter" },
      { name: "TigerPay", href: "https://casinotsu.com/payment/tiger-pay" },
      { name: "AstroPay", icon: "/assets/payments/astropay.svg", href: "https://casinotsu.com/payment/astropay" },
      { name: "Skrill" },
      { name: "Neteller" },
      { name: "MiFinity" },
      { name: "PayPal", href: "https://casinotsu.com/payment/paypal" },
      { name: "Jeton" },
      { name: "Interac" },
      { name: "Neosurf" },
      { name: "Trustly" },
      { name: "iDebit" },
      { name: "instaDebit" },
      { name: "Rapid Transfer" },
      { name: "Paysafecard" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "Tether" },
      { name: "USD Coin" },
    ],
    withdrawals: [
      { name: "銀行送金", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Payz", icon: "/assets/payments/payz.svg" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg" },
      { name: "iWallet", icon: "/assets/payments/iwallet.svg" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg" },
      { name: "TigerPay" },
      { name: "AstroPay", icon: "/assets/payments/astropay.svg" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg" },
      { name: "Tether" },
      { name: "USD Coin" },
    ],
    notes: [
      "出金は、過去に入金履歴のある決済方法にのみ可能です。",
      "電子ウォレットでの出金は0〜1時間、仮想通貨は1時間以内と非常にスピーディーです。",
      "初回出金前には本人確認（KYC）が必要です。",
    ],
  },
  bonuses: {
    overview:
      "コンクエスタドールは業界トップクラスのボーナスを提供しています。CasinoTsuからの登録で限定の入金不要ボーナスがもらえるほか、初回から5回目まで続く、最大¥399,000の超豪華なウェルカムボーナスが用意されています。",
    noDeposit:
      "CasinoTsuからの新規登録とボーナスコード『JAPACASI』などの入力で、$40（4,000円相当）の入金不要ボーナスと、人気スロットで使える25回分のフリースピンがもらえます。ノーリスクでカジノを試せる絶好の機会です。",
    extraSpins: {
      summary:
        "ウェルカムボーナスの一部として、合計200回のフリースピンが提供されます。対象スロットはThunderkick社の『Midas Golden Touch』やPlay'n GO社の『Book of Dead』など人気機種です。",
      schedule: [
        "最初の20回分は、初回$20以上の入金で即時付与。",
        "以降、ボーナスでの賭け条件を一定額クリアするごとに、20回分ずつ計9セットが付与されます。",
        "各フリースピンセットの有効期限は72時間です。",
      ],
      warning: "フリースピンで得た勝利金はリアルマネーとして追加され、賭け条件なしで出金可能です。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "100-200%", cap: "¥200,000", code: "不要" },
      { depositNumber: "2回目", percent: "100%", cap: "¥30,000", code: "不要" },
      { depositNumber: "3回目", percent: "50%", cap: "¥40,000", code: "不要" },
      { depositNumber: "4回目", percent: "50%", cap: "¥50,000", code: "不要" },
      { depositNumber: "5回目", percent: "25%", cap: "¥75,000", code: "不要" },
    ],
    conditions: [
      "賭け条件はボーナスによって異なり、（入金額＋ボーナス額）の20倍から30倍。",
      "初回入金ボーナスは入金額に応じて3つのティア（100%/150%/200%）から選択可能。",
      "ボーナスの賭け条件消化期限は30日間。",
      "スロットの賭け条件消化率は100%ですが、テーブルゲームの多くは0%です。",
    ],
    prohibitedGames: [
      "ブラックジャック（テーブルゲーム）",
      "ビデオポーカー",
      "バカラ（テーブルゲーム）",
      "ルーレット",
    ],
  },
  offers: [
    {
      title: "VIPプログラム（リベート＆キャッシュバック）",
      description: "VIPプログラムはありませんが、全プレイヤー対象のロイヤリティプログラムがあります。プレイするほどレベルが上がり、ベット額の一部が還元されるリベートボーナスや、損失額の一部が補填されるキャッシュバックが受けられます。",
      highlight: "プレイ実績に応じて自動的にお得になるシステム",
    },
    {
      title: "デイリードロップ＆ウィンズ",
      description: "Pragmatic Play社主催の人気キャンペーン。対象のスロットやライブカジノをプレイするだけで、毎日ランダムなキャッシュドロップや、毎週開催されるトーナメントでの高額賞金を狙えます。",
      highlight: "通常のプレイがそのまま賞金獲得のチャンスに",
    },
    {
        title: "アチーブメントボーナス",
        description: "特定のゲームでミッション（例：「3回連続で勝利する」など）を達成すると、入金不要ボーナスやフリースピンなどの報酬がもらえるユニークなシステムです。",
        highlight: "目標達成の楽しみが加わるボーナス",
    },
  ],
  facts: [
    { label: "名称", value: "Conquestador (コンクエスタドール)" },
    { label: "ローンチ", value: "2018年" },
    { label: "運営会社", value: "Mobile Incorporated Ltd" },
    { label: "ライセンス", value: "Malta Gaming Authority, Alcohol and Gaming Commission of Ontario (AGCO)" },
    { label: "VIPプログラム", value: "❌ (レベル制のロイヤリティプログラム有り)" },
    { label: "対応言語", value: "日本語, 英語" },
    { label: "対応通貨", value: "JPY, USD, EURなど" },
    {
      label: "ゲームタイプ",
      value: (
        <span>
          <Link href="https://casinotsu.com/baccarat">バカラ</Link>, <Link href="https://casinotsu.com/blackjack">ブラックジャック</Link>, クラップス, <Link href="https://casinotsu.com/game-shows">ゲームショー</Link>, <Link href="https://casinotsu.com/live-casino">ライブカジノ</Link>, <Link href="https://casinotsu.com/poker">ポーカー</Link>, <Link href="https://casinotsu.com/roulette">ルーレット</Link>, <Link href="https://casinotsu.com/slots">スロット</Link>, スポーツベット
        </span>
      ),
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://casinotsu.com/providers/big-time-gaming">Big Time Gaming</Link>, <Link href="https://casinotsu.com/providers/elk-studios">Elk Studios</Link>, <Link href="https://casinotsu.com/providers/microgaming">Microgaming</Link>, <Link href="https://casinotsu.com/providers/netent">NetEnt</Link>, <Link href="https://casinotsu.com/providers/nolimit-city">Nolimit City</Link>, <Link href="https://casinotsu.com/providers/playson">Playson</Link>, <Link href="https://casinotsu.com/providers/play-n-go">Play’n GO</Link>, <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://casinotsu.com/providers/quickspin">Quickspin</Link>, <Link href="https://casinotsu.com/providers/red-tiger">Red Tiger</Link>, <Link href="https://casinotsu.com/providers/relax-gaming">Relax</Link>, Slingshot Studios, <Link href="https://casinotsu.com/providers/thunderkick">Thunderkick</Link>, <Link href="https://casinotsu.com/providers/yggdrasil">Yggdrasil</Link>
        </span>
      ),
    },
    { label: "最小入金額", value: "$10" },
    { label: "最小出金額", value: "情報なし" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:ja_support@conquestador.com">ja_support@conquestador.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (年中無休)" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "コンクエスタドールは、その名の通り「探検」や「冒険」をテーマにしたオンラインカジノです。プレイヤーの探求心を刺激し、ワクワクする非日常体験を提供することを使命としています。",
      "2018年の日本市場参入以来、2,300種類以上のゲームと豊富なキャンペーンでプレイヤーを魅了し続けています。特に、業界トップクラスのボーナス額と、プレイヤーを飽きさせないトーナメントやアチーブメント機能が大きな特徴です。",
      "このレビューでは、CasinoTsuがコンクエスタドールの豪華なボーナス、優れた機能性、そして安全性について徹底的に掘り下げていきます。",
    ],
    ctas: [
      { text: "👉 コンクエスタドールで冒険を始める！", href: "https://go.japanesecasino.com/go/conquestador:conquestador?referrer_path=%2Freviews%2Fconquestador" },
      { text: "🔥 CasinoTsu限定の入金不要ボーナスをチェック", href: "https://casinotsu.com/offers/conquestador-exclusive" },
    ],
  },
  games: [
    "コンクエスタドールでは、1,000種類以上の多彩なカジノゲームとスポーツベットが楽しめます。特にスロットの検索機能は秀逸で、プロバイダー、テーマ、ボラティリティ、フィーチャー（特徴）など、細かい条件でフィルターをかけて好みのゲームを簡単に見つけ出すことができます。",
    "ライブカジノではEvolutionとPragmatic Playのテーブルが豊富に揃っており、日本人ディーラーが進行するテーブルも用意されています。頻繁に開催されるトーナメントや、特定のミッションをクリアして報酬を得る「アチーブメント」システムも、ゲームプレイを一層楽しくしてくれます。",
  ],
  features: [
    "コンクエスタドール最大の特徴は、プレイヤーの冒険心をくすぐる多彩なプロモーションです。トーナメント、アチーブメント、レベルアップに応じたキャッシュバックやリベートなど、常に新しい目標を持ってプレイし続けられる工夫が凝らされています。",
    "サイトの操作性も高く評価されており、特にゲームのフィルター機能は業界でもトップクラスの使いやすさを誇ります。",
  ],
  editorial: {
    author: "Momo",
    profileHref: "/authors/momo",
    hook: "ボーナスは超豪華ですが、その分、規約の複雑さには注意が必要です。冒険好きなプレイヤーにぴったりのカジノですね。",
    theGoodStuff: "最大¥399,000というウェルカムボーナスの規模は圧巻です。さらにCasinoTsu限定の入金不要ボーナスもあり、スタートダッシュを切りやすいのは大きな魅力。高機能なゲーム検索フィルターも素晴らしく、ストレスなく遊びたいゲームに辿り着けます。",
    theHeadsUp: "一方で、ボーナスの種類が多い分、それぞれの利用規約が少し分かりにくいと感じるかもしれません。特に、フリースピンの付与条件など、細かいルールを事前にしっかり確認することが重要です。",
    finalThought: "規約の分かりにくさという点はありますが、それを補って余りあるほどの魅力的なキャンペーンと機能性を備えています。常に新しい挑戦を楽しみたい、ゲームを探すのが好きなプレイヤーには、最高の遊び場となるでしょう。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "コンクエスタドールは、「冒険」というテーマを一貫してプレイヤーに提供する、非常にコンセプトが明確なオンラインカジノです。その名の通り、プレイヤーはまるで新大陸を征服する探検家のように、次々と現れるキャンペーン、トーナメント、アチーブメントに挑戦していくことになります。",
      "その中心にあるのが、業界でも屈指の豪華さを誇るボーナスシステムです。CasinoTsu限定の$40入金不要ボーナスから始まり、5段階で最大¥399,000に達するウェルカムパッケージは、あらゆるプレイヤー層にとって魅力的です。賭け条件も20〜30倍と標準的で、現実的に勝利金を狙える範囲にあります。",
      "操作性の面では、特にゲームフィルター機能の優秀さが際立っています。数千のゲームの中から「ボラティリティが高いRed Tiger社のエジプトテーマのスロット」といった具体的な条件で瞬時に絞り込めるため、ゲーム探しのストレスがありません。これは、多くのゲームを試したいプレイヤーにとって大きな利点です。",
      "一方で、改善点も見受けられます。豊富なプロモーションは魅力的ですが、それぞれの規約が別々に設定されており、全体像を把握しにくいという声もあります。また、一部のユーザーからはアカウント認証に時間がかかるとの報告もあり、サポート体制のさらなる強化が期待されます。",
      "総じて、コンクエスタドールは、いくつかの小さな課題を抱えつつも、それを補って余りあるほどのエンターテイメント性とプレイヤーへの還元を提供している優良カジノです。ただゲームをプレイするだけでなく、常に目標を持って楽しみたい「クエスト好き」なプレイヤーに強くお勧めします。",
    ],
  },
  security: [
    "信頼性の高いMalta Gaming Authority (MGA) とAGCOのライセンスを取得し、公正な運営を保証。",
    "SSL暗号化技術により、プレイヤーの個人情報や取引データを安全に保護。",
    "不正利用防止のための厳格な本人確認（KYC）プロセスを実施。",
    "ライセンスに基づき、第三者監査機関による定期的な監査を受けている。",
  ],
  responsiblePlay: [
    "入金制限 (Deposit Limit)",
    "賭け金制限 (Wager Limit)",
    "損失制限 (Loss Limit)",
    "セッション制限 (Time/Session Limit)",
    "自己排除 (Self-Exclusion)",
    "クールダウン/タイムアウト (Cool Off/Time-Out)",
    "リアリティチェック (Reality Check)",
    "自己診断テスト (Self-Assessment Test)",
    "出金ロック (Withdrawal Lock)",
    "Gamstopへの参加",
  ],
  complaintStats: [],
  awards: [
    "AskGamblers評価: 7.7/10 (Good)",
    "Casino Guru Safety Index: 5.4/10 (Below average)",
    "Mr. Gamble人気指数: 93%",
  ],
  restrictedCountries: [],
  userConcerns: [
    "システム不良に関する報告",
    "アカウントや書類の認証プロセスに時間がかかるとの声",
    "ボーナスに関する利用規約が複雑で見つけにくい場合がある",
  ],
  summary: [
    "業界トップクラスの豪華なウェルカムボーナスと、CasinoTsu限定の入金不要ボーナスが魅力。",
    "豊富なキャンペーン、トーナメント、アチーブメントがあり、プレイヤーを飽きさせない工夫が満載。",
    "高機能なゲームフィルターで、数多くのゲームの中から好みのものを簡単に見つけられる。",
    "利用規約の分かりにくさや、アカウント認証の遅延に関する評判など、一部改善の余地あり。",
  ],
  extraLinks: [
    { text: "🔰 ウェルカムボーナスとは？基本を解説！", href: "https://casinotsu.com/bonuses/welcome-bonus" },
    { text: "💰 入金不要ボーナス完全ガイド", href: "https://casinotsu.com/bonuses/no-deposit" },
  ],
  faq: [
    {
      question: "コンクエスタドールはどこの国で運営されていますか？",
      answer: "運営会社はマルタ共和国に拠点を置いており、マルタおよびカナダのオンタリオ州のライセンスを取得して運営されています。",
    },
    {
      question: "コンクエスタドールでは仮想通貨は利用できますか？",
      answer: "はい、ビットコイン、テザー、USDコインなどの主要な仮想通貨での入出金に対応しています。",
    },
    {
      question: "コンクエスタドールにキャッシュバックはありますか？",
      answer: "はい、公式なVIPプログラムはありませんが、全プレイヤー対象のロイヤリティプログラムの一環として、プレイ実績に応じたキャッシュバックが提供されます。",
    },
  ],
  cta: {
    text: "コンクエスタドールで限定ボーナスを受け取って冒険に出よう！",
    href: "https://go.japanesecasino.com/go/conquestador:conquestador?referrer_path=%2Freviews%2Fconquestador",
  },
};