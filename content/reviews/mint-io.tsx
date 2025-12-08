import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewMintIo: ReviewPageContent = {
  hero: {
    title: "Mint.io 徹底レビュー | 最新ゲーム＆ボーナス情報 2025",
    subheading: "仮想通貨特化のキャッシュバックプログラム",
    description: "カジ旅の姉妹サイトとして知られる仮想通貨決済特化のオンラインカジノ「Mint.io」。カジノゲームとスポーツベットが楽しめますが、現在複数の重大な問題が報告されています。CasinoTsuがその詳細を徹底解説します。",
    score: 3.9,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 20,
        note: "現在新規受付を停止し、ブラックリストに掲載されているため、人気は皆無に等しい状況です。",
      },
      {
        label: "規約",
        percent: 30,
        note: "休眠アカウントから資金を没収できるなど、プレイヤーに非常に不利な規約が報告されています。",
      },
      {
        label: "操作性",
        percent: 25,
        note: "技術的な問題が多発し、サイトにアクセスできない、ログインできない等の報告が多数あります。",
      },
      {
        label: "サポート",
        percent: 35,
        note: "サポートの応答が遅い、問題が解決しないといったユーザーからの不満の声が多く挙がっています。",
      },
    ],
    highlights: [
      "ビットコインなど多様な仮想通貨に対応",
      "ベット毎に貯まる上限なしのキャッシュバック「クリプトドロップ」",
      "通常6倍速でスロットがプレイできる「Blitz」モード搭載",
    ],
    watchouts: [
      "【最重要】現在ブラックリストに掲載され、新規プレイヤー受付を停止中",
      "サイトにアクセスできない等の技術的問題が多発",
      "運営会社の情報が不確定で信頼性に欠ける",
      "休眠アカウントの資金を没収する厳しい利用規約",
      "サポートの対応が悪いとの苦情多数",
      "自己規制ツールが提供されていない",
    ],
  },
  payments: {
    featured: [
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "プレイ通貨",
        note: "手数料無料で入金可能",
      },
      {
        name: "Tether",
        icon: "/assets/payments/tether.svg",
        href: "https://casinotsu.com/payment/usdt",
        badge: "手数料あり",
        note: "入金時にBTCへ自動変換",
      },
      {
        name: "Ethereum",
        icon: "/assets/payments/ethereum.svg",
        href: "https://casinotsu.com/payment/ethereum",
        badge: "手数料あり",
        note: "入金時にBTCへ自動変換",
      },
      {
        name: "Ripple",
        icon: "/assets/payments/xrp.svg",
        badge: "手数料あり",
        note: "入金時にBTCへ自動変換",
      },
    ],
    deposits: [
      { name: "ビットコイン (Bitcoin)", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "テザー (Tether)", icon: "/assets/payments/tether.svg", href: "https://casinotsu.com/payment/usdt" },
      { name: "イーサリアム (Ethereum)", icon: "/assets/payments/ethereum.svg", href: "https://casinotsu.com/payment/ethereum" },
      { name: "ライトコイン (Litecoin)" },
      { name: "リップル (Ripple)" },
      { name: "USDコイン (USD Coin)" },
      { name: "ビットコインキャッシュ (Bitcoin Cash)" },
      { name: "ダイ (Dai)" },
      { name: "ステラ― (Stellar)" },
    ],
    withdrawals: [
      { name: "ビットコイン (Bitcoin)", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "テザー (Tether)", icon: "/assets/payments/tether.svg", href: "https://casinotsu.com/payment/usdt" },
      { name: "イーサリアム (Ethereum)", icon: "/assets/payments/ethereum.svg", href: "https://casinotsu.com/payment/ethereum" },
      { name: "ライトコイン (Litecoin)" },
      { name: "リップル (Ripple)" },
      { name: "USDコイン (USD Coin)" },
      { name: "ビットコインキャッシュ (Bitcoin Cash)" },
      { name: "ダイ (Dai)" },
      { name: "ステラ― (Stellar)" },
    ],
    notes: [
      "プレイ通貨はビットコイン(BTC)のみ。他の仮想通貨は入金時に手数料(0.8%)と共に自動変換されます。",
      "出金には一律0.5%の手数料が発生します。出金上限は1日0.5 BTC、月15 BTCです。",
      "NetellerやSkrillなどの主要な電子決済サービスは利用できません。",
    ],
  },
  bonuses: {
    overview:
      "Mint.ioでは、一般的なウェルカムボーナスや入金ボーナスは提供されていません。その代わりに、ベットするたびに報酬が積み立てられる独自のキャッシュバックプログラム「クリプトドロップ」が用意されています。",
    noDeposit:
      "入金不要ボーナスはありません。Mint.ioの利用は現在推奨されていないため、姉妹サイトであるカジノミーの$10入金不要ボーナスをお試しいただくことをお勧めします。",
    extraSpins: {
      summary:
        "フリースピンの提供はありません。",
      schedule: [],
      warning: "",
    },
    welcomeRows: [],
    conditions: [
      "「クリプトドロップ」は1ベット毎にベット額の一部が積み立てられるキャッシュバックです。",
      "スロット/ライブカジノの積立率は100%、ブラックジャックは10%、ルーレットは5%です。",
      "バカラ/プントバンコは積立率0%で対象外です。",
      "期間限定で積立率が150%になる「クリプトブースト」が開催されることがあります。",
    ],
    prohibitedGames: [
        "バカラ",
        "プントバンコ",
        "スポーツベット",
    ],
  },
  offers: [
    {
      title: "上限なしのキャッシュバック「クリプトドロップ」",
      description: "プレイする全ゲーム（一部除く）の1ベットごとに、ベット額の一部が報酬として積み立てられます。上限はなく、貯まった報酬はウォレットに移して出金したり、ゲームに使用したりできます。",
      highlight: "プレイすればするだけ自動で貯まるユニークな報酬システム",
    },
    {
      title: "完全招待制VIPプログラム",
      description: "Mint.ioのVIPプログラムは完全招待制です。特定の条件を満たしたプレイヤーにのみ、運営から招待メールが送られます。",
    },
  ],
  facts: [ 
    { label: "名称", value: "Mint.io (ミント・アイオー)" },
    { label: "ローンチ", value: "情報なし" },
    { label: "運営会社", value: "Deep Dive Tech B.V. / Sweetspot N.V.（情報不一致あり）" },
    { label: "ライセンス", value: "Curaçao（Anjouanの記載もあり）" },
    { label: "VIPプログラム", value: "✅（完全招待制）" },
    { label: "対応言語", value: "日本語、英語など" },
    { label: "対応通貨", value: "BTC（プレイ通貨）" },
    {
      label: "ゲームタイプ",
      value:
        "スロット、ライブカジノ、ブラックジャック、ポーカー、ルーレット、バカラ、ビデオポーカー、ゲームショー、スポーツベット、eスポーツベット",
    },
    {
      label: "ゲームプロバイダー",
      value: "36社から83社以上 (Yolted, Evolution, Pragmatic Play, Quik Gamingなど)",
    },
    { label: "最小入金額", value: "0.00018 BTC" },
    { label: "最高出金額", value: "0.5 BTC/日, 15 BTC/月" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@mint.io">support@mint.io</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (14時～翌1時)" },
  ],
  intro: {
    paragraphs: [
      "Mint.ioは、仮想通貨での決済に特化したオンラインカジノで、カジ旅の姉妹サイトとしても知られています。しかし、プレイヤーの安全を最優先するCasinoTsuから、皆様に重要な警告があります。",
      "現在、Mint.ioは技術的な問題により新規プレイヤーの受け入れを停止しており、複数のレビューサイトでブラックリストに掲載されています。サイトへのアクセス自体が困難な状況が続いています。",
      "このレビューではMint.ioの機能を紹介しますが、CasinoTsuとしては、現在の状況下でこのカジノでのプレイを絶対に避けることを強く推奨いたします。",
    ],
    ctas: [
      { text: "👉 安全な代替カジノ「遊雅堂」のレビューを見る", href: "https://www.japanesecasino.com/reviews/yuugado" },
      { text: "👉 仮想通貨専門カジノ「Caibo」をチェック", href: "https://www.japanesecasino.com/reviews/casino/caibo" },
    ],
  },
  games: [
    "Mint.ioは、情報源により1,000から3,000種類以上のゲームを提供しているとされています。スロット、ライブカジノ、ゲームショー、そしてスポーツベットやeスポーツベットまで幅広くカバーしています。",
    "特徴的なのは、通常の6倍の速さでスロットをプレイできる高速モード「Blitz」です。姉妹カジノ独占配信のYolted社製ゲーム「スロット彼女アリス」など、ユニークなタイトルも含まれています。",
    "しかし、現在サイトへのアクセスが困難なため、これらのゲームを実際にプレイすることはできません。",
  ],
  features: [
    "Mint.ioの最大の特徴は、ビットコインをはじめとする仮想通貨での入出金に特化している点です。法定通貨を介さず、暗号資産で直接プレイしたいユーザーをターゲットとしていました。",
    "また、姉妹サイトから受け継いだ高速スロットモード「Blitz」は、時間を効率的に使いたいプレイヤーにとって魅力的な機能です。",
  ],
  editorial: {
    author: "CasinoTsu編集部",
    profileHref: "/about",
    hook: "警告：ブラックリスト掲載中のため、いかなる理由があってもMint.ioでのプレイは絶対に避けてください。",
    theGoodStuff: "コンセプトとして、上限なしのキャッシュバック「クリプトドロップ」や高速「Blitz」モードなど、興味深い試みは見られました。しかし、それらはカジノとしての信頼性という大前提が崩壊している現状では全く意味をなしません。",
    theHeadsUp: "運営停止、ブラックリスト掲載、技術的問題、不明瞭な運営会社、プレイヤーに不利な規約、機能しないサポート。これ以上ないほど危険信号が灯っています。",
    finalThought: "私たちの使命は、プレイヤーの皆様を危険なサイトから守ることです。Mint.ioは現在、その「危険なサイト」に分類されます。より安全で信頼できる多くの優良カジノが存在しますので、そちらでのプレイを心からお勧めします。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "Mint.ioは、仮想通貨に特化したオンラインカジノとして、カジ旅やカジノミーの姉妹サイトという触れ込みで登場しました。しかし、その運営実態には多くの疑問符が付き、現在ではプレイヤーにとって極めてリスクの高いプラットフォームと化しています。",
      "最大の懸念点は、カジノが事実上の運営停止状態にあり、複数の信頼できるレビューサイトによってブラックリストに登録されていることです。サイトへのアクセス不能、ログインエラーといった技術的な問題が頻発しており、これは運営体制が崩壊している可能性を示唆しています。",
      "安全性の面でも深刻な問題が指摘されています。運営会社情報に複数の異なる名前が挙がるなど、その所有権が不透明です。ライセンスはキュラソーとされていますが、Casino.guruによる安全指数は「平均以下」の6.2/10と低く評価されています。特に、数ヶ月間アカウントを動かさなかっただけで資金を没収できるという利用規約は、極めてプレイヤーに不利なものです。",
      "ボーナス体系は、一般的なウェルカムボーナスを廃し、「クリプトドロップ」というユニークなキャッシュバックに一本化していました。これは興味深い試みですが、ボーナスの有無を語る以前に、カジノとして機能していないのが現状です。",
      "カスタマーサポートも機能不全に陥っているとの報告が相次いでおり、問題が発生した際に解決を期待することは困難です。さらに、責任あるギャンブルを支援する自己規制ツールが一切提供されておらず、プレイヤー保護の観点からも重大な欠陥があります。",
      "結論として、CasinoTsuはMint.ioの利用を絶対に推奨しません。プレイヤーの資金と個人情報を危険に晒す可能性が非常に高いため、いかなる場合も関わらないようにしてください。当サイトでは、ライセンスが明確で、安全性が確認されている他の優良カジノを多数紹介していますので、そちらをご検討ください。",
    ],
  },
  security: [
    "キュラソーライセンス取得とされているが、公式な確認が困難な状況",
    "Casino.guruによる安全指数は「平均以下」の6.2/10",
    "運営会社情報が不一致（Deep Dive Tech B.V. vs Sweetspot N.V.）で信頼性に欠ける",
    "休眠アカウント（3〜6ヶ月未稼働）から資金を没収できるという非常に厳しい利用規約",
  ],
  responsiblePlay: [
    "自己規制ツール（ログイン制限、入金制限など）は提供されていない",
    "サイト内の「責任あるプレイ」ページには相談先の記載のみで、具体的なツールはない",
    "プレイヤー保護の仕組みが欠如しており、問題ギャンブラーにとって非常に危険",
  ],
  complaintStats: [
    "GamblersPick.comにてブラックリストに掲載済み",
    "Casino.guru、Chipy.comなど複数のサイトが利用を避けるよう強く推奨",
    "平均的な安全指数は6.2/10と低評価",
  ],
  awards: [
    "特になし",
  ],
  restrictedCountries: [
    "アメリカ合衆国", "オーストラリア", "イギリス", "フランス", "ドイツ", "スペイン", "イタリア", "オランダ", "ベルギー", "スウェーデン", "デンマーク", "ノルウェー", "フィンランド", "ポーランド", "ポルトガル", "ギリシャ", "アイルランド", "ニュージーランド", "カナダ（一部州）", "シンガポール", "香港", "マカオ", "北朝鮮", "イラン", "イラク", "シリア", "アフガニスタン", "アルジェリア", "エジプト", "リビア", "パキスタン", "トルコ", "その他多数",
  ],
  userConcerns: [
    "技術的な問題: サイトへのアクセスエラー、「サイバー攻撃からの保護」メッセージ、ログイン不可、サイトがロシア語で表示されるなど。",
    "サポートの質: 応答が遅い、問題が解決しない、ライブチャットが繋がりにくい。",
    "利用規約: 休眠アカウントからの資金没収など、一部規約が厳しすぎる。",
    "ボーナスの欠如: ウェルカムボーナスやプロモーションがほとんどない。",
    "決済方法の制限: NetellerやSkrillなどの主要な電子決済が利用できない。",
  ],
  summary: [
    "Mint.ioは、かつては仮想通貨特化カジノとしてユニークな特徴を持っていましたが、現在は深刻な問題を抱えています。",
    "新規プレイヤーの受け入れ停止、技術的な障害、そして複数のレビューサイトによるブラックリスト登録という事実は看過できません。",
    "安全性の懸念やプレイヤーに不利な規約も報告されており、CasinoTsuとしては、いかなる理由があってもMint.ioでのプレイを推奨することはできません。",
    "プレイヤーの皆様には、より安全で信頼性の高い代替カジノを強くお勧めいたします。",
  ],
  extraLinks: [
    { text: "🚨 休眠アカウントから資金が没収される？詳細はこちら", href: "https://www.japanesecasino.com/info/inactive-account" },
    { text: "✅ CasinoTsuが推奨する安全なオンラインカジノ一覧", href: "https://www.japanesecasino.com/reviews" },
  ],
  faq: [
    {
      question: "クリプトドロップの換金方法を教えてください。",
      answer: "100ベット分のクリプトドロップをウォレットに移動させて使用します。出金したり、ゲームに使用したりできます。ただし、現在サイトは正常に機能していません。",
    },
    {
      question: "Mint.ioにスポーツベットはありますか？",
      answer: "はい、提供されています。トップページのメニューからスポーツベットのセクションに移動できますが、現在アクセスは不安定です。",
    },
    {
      question: "VIPプログラムがあると聞きました。",
      answer: "はい、Mint.ioには完全招待制のVIPプログラムが存在します。",
    },
    {
      question: "仮想通貨以外の決済方法はありますか？",
      answer: "いいえ、Mint.ioでは仮想通貨以外の決済方法は利用できません。",
    },
  ],
  cta: {
    text: "CasinoTsu推奨の安全なカジノを確認する",
    href: "https://www.japanesecasino.com/reviews",
  },
};