import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewVeraJohn: ReviewPageContent = {
  hero: {
    title: "ベラジョンカジノ（Vera&John）徹底レビュー",
    subheading:
      "CasinoTsu 推薦 — 入金不要ボーナス、出金方法、評判まで丸ごと解説",
    description:
      "CasinoTsu は、プレイヤーの皆様が安心して、そして最大限に楽しめるようにベラジョンカジノを細部までチェックしました。正確さが第一。興奮はその次。ここではボーナス、入出金、ライセンス、ゲームラインナップ、サポートなどを網羅的に解説します。",
    score: 4.5,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "ボーナス",
        percent: 90,
        note: "入金不要フリースピン150回＋最大$1,000のウェルカムボーナス（条件20x）",
      },
      {
        label: "ゲームラインナップ",
        percent: 95,
        note: "スロット2,100～3,000種、ライブカジノ、独自パチンコ館など",
      },
      {
        label: "入出金",
        percent: 85,
        note: "クレジットカード、仮想通貨、Vega Wallet、payz等。出金は方法により時間差あり",
      },
      {
        label: "サポート",
        percent: 88,
        note: "日本語サポート（9:00〜翌2:00）／ライブチャットは比較的早い",
      },
      {
        label: "信頼性・安全性",
        percent: 80,
        note: "キュラソーライセンス取得。運営はBreckenridge Curacao B.V.",
      },
    ],
    highlights: [
      "CasinoTsu限定 入金不要フリースピン150回（$30相当）",
      "最大$1,000の入金ウェルカムボーナス（3回分）",
      "日本語対応のライブカジノ『花路野三丁目』",
      "パチンコ・パチスロが遊べる『パチンコ館』を導入",
      "豊富な決済方法（クレジットカード、仮想通貨、Vega Wallet等）",
    ],
    watchouts: [
      "ライセンスはキュラソー（Curacao）。地域によってサービス制限あり",
      "一部ユーザーで出金・KYCに時間がかかる報告あり（最大2週間程度の例あり）",
      "一部地域（米英加豪等）でサービスが制限されている",
      "仮想通貨ボーナスは現在提供なし（過去には実施例あり）",
    ],
  },
  payments: {
    featured: [
      {
        name: "クレジットカード（VISA / Mastercard / JCB / AMEX）",
        icon: "",
        href: "https://www.japanesecasino.com/payment/visa",
        badge: "",
        note: "最低入金 $10、最大 $2,500、手数料 2.25%（最大 $5）、入金は数分〜数時間。カードは出金に利用不可。",
      },
      {
        name: "仮想通貨（BTC / ETH / USDT / LTC / XRP / BCH）",
        icon: "",
        href: "https://www.japanesecasino.com/payment/bitcoin",
        badge: "",
        note: "着金は数分～数時間、サイト側手数料なし（マイニング手数料は別途必要）、最低入金制限なし、最低出金 $50",
      },
      {
        name: "Vega Wallet",
        icon: "",
        href: "https://www.japanesecasino.com/payment/venuspoint",
        badge: "",
        note: "最低入金 $10、着金速い、出金手数料 $5（出金額50ドル未満の場合）",
      },
      {
        name: "payz",
        icon: "",
        href: "https://www.japanesecasino.com/payment/payz",
        badge: "",
        note: "最低入金 $10、出金手数料 $5（出金額50ドル未満の場合）",
      },
    ],
    deposits: [
      {
        name: "クレジットカード",
        icon: "",
        href: "https://www.japanesecasino.com/payment/visa",
      },
      {
        name: "BTC / ETH / USDT / LTC / XRP / BCH",
        icon: "",
        href: "https://www.japanesecasino.com/payment/bitcoin",
      },
      {
        name: "Vega Wallet",
        icon: "",
        href: "https://www.japanesecasino.com/payment/venuspoint",
      },
      {
        name: "payz",
        icon: "",
        href: "https://www.japanesecasino.com/payment/payz",
      },
      {
        name: "MuchBetter",
        icon: "",
        href: "https://www.japanesecasino.com/news/muchbetter-starts-jp-bank-transfer",
      },
      {
        name: "日本の銀行送金（SMBC, PayPay銀行, みずほ等）",
        icon: "",
        href: "",
      },
      {
        name: "PayPal（地域限定）",
        icon: "",
        href: "",
      },
    ],
    withdrawals: [
      {
        name: "銀行送金 EX",
        icon: "",
        href: "https://www.japanesecasino.com/payment/bank-transfer",
      },
      {
        name: "仮想通貨",
        icon: "",
        href: "https://www.japanesecasino.com/payment/bitcoin",
      },
      {
        name: "Vega Wallet",
        icon: "",
        href: "https://www.japanesecasino.com/payment/venuspoint",
      },
      {
        name: "iWallet",
        icon: "",
        href: "https://www.japanesecasino.com/payment/iwallet",
      },
      {
        name: "payz",
        icon: "",
        href: "https://www.japanesecasino.com/payment/payz",
      },
      {
        name: "MuchBetter",
        icon: "",
        href: "https://www.japanesecasino.com/news/muchbetter-starts-jp-bank-transfer",
      },
    ],
    notes: [
      "出金上限や最低出金額は決済方法により異なる（例：仮想通貨最低出金 $50、銀行送金最低 $20、その他は $10〜）",
      "アカウント認証（KYC）をしていない場合、出金最高額は一律 $10,000",
      "Vega Wallet / payz / iWallet の50ドル未満出金には $5 の手数料が発生",
      "仮想通貨はマイニング手数料が別途かかる場合あり（サイト側手数料は通常なし）",
      "クレジットカードは入金のみ利用可能で、出金には使えない",
      "銀行送金EXは一時的に入金に使用できない状況（2025年5月時点の注意）",
      "出金申請審査に約24時間を要する。タイミングによっては着金に数日〜最大2週間程度かかる報告あり",
    ],
  },
  bonuses: {
    overview:
      "ベラジョンカジノは、CasinoTsu限定の入金不要フリースピン150回（$30相当）をはじめ、最大$1,000相当のウェルカムボーナス（3回の入金で合計）や日替わりスピンクレジットなど、豊富なプロモーションを提供しています。出金条件は比較的良心的（20x）です。",
    noDeposit:
      "CasinoTsu経由の新規登録で限定入金不要ボーナス：$30 相当（フリースピン150回）／対象スロット：Pragmatic Play『Sweet Bonanza 1000』／賭け条件 20x／キャンペーンコード不要。受け取りはCasinoTsu経由で登録するだけで自動付与。",
    extraSpins: {
      summary:
        "3回目入金後には10日間連続で毎日5ドル分のスピンクレジット（合計10日分）が付与されるオファーがある。対象ゲームは日替わり。",
      schedule: [
        "第1日目〜第10日目：日替わりで各キャンペーン期間24時間以内にログインして取得",
        "対象例：ムーン・プリンセス100、ハワイアンドリーム、ゴールデン・チケット、ジャパニーズルーレット、花路野三丁目スピードバカラ、ライブ・ブラックジャック 等",
      ],
      warning:
        "スピンクレジットの有効期限は獲得から48時間。各スピンクレジットを得るにはログインが必要。",
    },
    welcomeRows: [
      {
        depositNumber: "初回入金",
        percent: "100%",
        cap: "最大 $500",
        code: "",
      },
      {
        depositNumber: "2回目入金",
        percent: "50%",
        cap: "最大 $250",
        code: "",
      },
      {
        depositNumber: "3回目入金",
        percent: "100% + 日替わりスピンクレジット",
        cap: "最大 $200",
        code: "",
      },
    ],
    conditions: [
      "入金不要ボーナスおよびウェルカムボーナスの賭け条件は基本的に20x（勝利金に対して）",
      "ボーナスマネーはリアルマネー残高がゼロになった後に使用可能",
      "入金ボーナス対象は最低入金額 $10 から",
      "ボーナスマネーでの最大賭け額：スロットとビンゴ $6.25、テーブルゲーム $25。これを超える賭けはボーナス没収の可能性あり",
      "スピンクレジットの有効期限は獲得から48時間",
      "ボーナスの有効期限は30日間",
      "Skrill や Neteller での入金はウェルカムボーナス対象外となる場合がある",
    ],
    prohibitedGames: [
      "特に明記なし（ただしプロバイダーやボーナス条件により一部ゲームがボーナス対象外となる場合あり）",
    ],
  },
  offers: [
    {
      title: "CasinoTsu限定 入金不要フリースピン150回",
      description:
        "登録だけで$30相当（フリースピン150回）を付与。対象スロットはPragmatic Play『Sweet Bonanza 1000』。賭け条件20x。",
      highlight: "入金不要で150回分（限定オファー）",
    },
    {
      title: "ウェルカムボーナス 最大$1,000",
      description:
        "初回〜3回目の入金で合計最大$1,000相当のボーナス。3回目はさらに10日間の日替わりスピンクレジット／スピンクレジットは1日5ドル分。",
      highlight: "合計で最大$1,000＋日替わりスピンクレジット",
    },
    {
      title: "パチンコ館オープン記念",
      description:
        "2023年12月より『パチンコ館』が稼働。実店舗さながらの目押し対応・データカウンター完備でパチンコ・パチスロをオンラインで楽しめる。",
      highlight: "日本市場向けの本格パチンコ・パチスロを提供",
    },
    {
      title: "ご褒美プログラム（VIP）",
      description:
        "プレイでコインを貯め、ベラジョンショップで入金ボーナスや無料スピンと交換。7段階のVIPレベルに応じて特典が増加。",
      highlight: "コインを自由に使えるベラジョン独自のロイヤリティシステム",
    },
  ],
  facts: [
    {
      label: "運営会社",
      value: "Breckenridge Curacao B.V.",
    },
    {
      label: "日本市場参入",
      value: "2013年",
    },
    {
      label: "創業",
      value: "2011年（スウェーデン人2人組による設立）",
    },
    {
      label: "ライセンス",
      value: "キュラソー（Curacao Gaming Authority） OGL/2024/175/0182",
    },
    {
      label: "ゲーム数（目安）",
      value: "約2,100～3,000種類",
    },
    {
      label: "プロバイダー数（目安）",
      value: "約60社",
    },
    {
      label: "日本語サポート",
      value: "午前9時〜翌午前2時（ライブチャットは30～180秒程度の応答）",
    },
    {
      label: "入金不要ボーナス",
      value: "フリースピン150回（$30相当）、賭け条件20x（CasinoTsu限定）",
    },
  ],
  intro: {
    paragraphs: [
      "CasinoTsu は、オンラインカジノの世界へようこそ。ここでは、プレイヤーの皆様が安心して、そして最大限に楽しめるような情報を提供することを使命としています。CasinoTsu 推薦のベラジョンカジノについての徹底解説をお届けします。",
      "ベラジョンカジノは高品質なゲーム体験、魅力的なボーナス、主要な入出金方法、そして日本語サポートなどが充実した老舗オンラインカジノです。以下で各項目を詳しくチェックしていきます。",
    ],
    ctas: [
      {
        text: "今すぐボーナスゲット！",
        href: "https://go.japanesecasino.com/go/vera-john:vera-john?referrer_path=%2Freviews%2Fvera-john",
      },
      {
        text: "ベラジョンで遊んでみる？",
        href: "https://go.japanesecasino.com/go/vera-john",
      },
    ],
  },
  games: [
    "スロット（約2,100～3,000種）",
    "ライブカジノ（ルーレット、バカラ、ブラックジャック等）",
    "花路野三丁目（日本語ディーラーのオリジナルライブカジノ）",
    "パチンコ館（オンラインで遊べるパチンコ・パチスロ、目押し対応）",
    "オリジナルスロット（スイート・ボナンザ・ベラジョン等）",
    "ゲームショー（株式市場ライブ等）",
  ],
  features: [
    "日本語対応が充実（サイト表記・日本人サポート）",
    "CasinoTsu限定の入金不要フリースピン150回オファーあり",
    "パチンコ館や日本向け独占テーブル（花路野三丁目）など独自コンテンツ",
    "豊富な決済方法（クレジットカード、仮想通貨、Vega Wallet、payz等）",
    "VIP（ご褒美）プログラムでコインを貯めて交換可能",
    "モバイルに対応したレスポンシブデザイン、およびiOS向けアプリ（無料版）",
  ],
  security: [
    "運営会社：Breckenridge Curacao B.V.",
    "ライセンス：Curacao Gaming Authority（OGL/2024/175/0182）",
    "通信：SSL暗号化を採用し個人情報・取引データを保護",
    "ゲームの公平性：RNGを採用、RTPはゲームアイコン右下のメニューから確認可能",
    "プライバシーポリシー：サイト下部から日本語で確認可能",
  ],
  responsiblePlay: [
    "自己規制（入金制限、時間制限、プレイ制限）をユーザーが設定可能",
    "アカウントの一時停止・閉鎖がユーザー操作で可能（設定＞自己規制＞閉鎖）",
    "責任あるギャンブルに関する案内ページあり",
    "KYC／本人確認は初回出金時や高額取引時に求められる場合あり",
  ],
  complaintStats: [
    "一部ユーザーから出金審査や着金が遅いという報告（例：承認後3日〜14日程度、まれに10日以上のケースあり）",
    "KYC（本人確認）プロセスに時間がかかるとの報告あり",
    "サポートの待ち時間や対応品質にばらつきありの声あり",
    "ウェブサイトの読み込み遅延やピーク時の技術的問題の報告あり",
  ],
  awards: [
    "ベラジョン無料版のラジオCM（里崎氏出演）は第16回ニッポン放送CMグランプリ受賞",
    "過去に著名人（吉田麻也選手、YouTuberラファエル氏等）がアンバサダーとして起用された実績あり",
  ],
  restrictedCountries: [
    "アメリカ",
    "イギリス",
    "カナダ",
    "オーストラリア",
    "フランス",
    "イタリア",
    "スペイン",
    "トルコ",
    "香港",
    "マカオ",
    "シンガポール",
    "イスラエル",
    "フィリピン",
    "インドネシア",
    "パキスタン",
    "イラン",
    "イラク",
    "アフガニスタン",
    "キューバ",
    "北朝鮮",
    "シリア",
    "スーダン",
    "イエメン",
    "ベネズエラ",
    "ベラルーシ",
    "ウクライナ（一部地域）",
    "ロシア（一部地域）",
  ],
  userConcerns: [
    "出金スピードが遅い・着金に時間がかかるケースがある",
    "KYC手続きに時間がかかるとの報告",
    "一部ユーザーでサポートの待ち時間や対応品質にばらつきあり",
    "サイトの読み込み速度やモバイル互換性に関する改善要望",
    "仮想通貨関連の手数料や仕様が変動する可能性",
  ],
  summary: [
    "ベラジョンカジノは日本語対応や豊富なゲームラインナップ（スロット、ライブ、オリジナル、パチンコ館）で日本市場に強く支持されている老舗カジノです。",
    "CasinoTsu限定の入金不要フリースピン150回と最大$1,000のウェルカムボーナスは魅力的で、出金条件は20xと比較的良心的。",
    "ライセンスはキュラソーのため、地域による制限や規制の違いはあるものの、SSL・RNG・第三者監査等により公平性・安全性は確保されています。",
    "出金やKYC、サポートでの遅延報告がある点は留意が必要ですが、総合的に日本人プレイヤーにとって利用しやすい環境が整っています。",
  ],
  extraLinks: [
    {
      text: "ベラジョンで遊んでみる？",
      href: "https://go.japanesecasino.com/go/vera-john",
    },
    {
      text: "ベラジョン限定オファー（CasinoTsu）",
      href: "https://www.japanesecasino.com/offers/vera-john-exclusive",
    },
    {
      text: "カジノボーナス一覧",
      href: "https://www.japanesecasino.com/bonuses",
    },
    {
      text: "カジノライセンスについて",
      href: "https://www.japanesecasino.com/info/casino-license",
    },
    {
      text: "RNGについて",
      href: "https://www.japanesecasino.com/guides/rng-explained",
    },
  ],
  faq: [
    {
      question: "VeraJohnとは？",
      answer:
        "Vera&John（ベラジョンカジノ）は、2013年から日本でサービスを提供しているオンラインカジノです。過去にはYouTuberのラファエル氏が公式アンバサダーを務め、ベラジョン無料版のCMにサッカー日本代表の吉田麻也選手が出演したこともあります。",
    },
    {
      question: "ベラジョンカジノ独占のライブカジノはありますか？",
      answer:
        "はい。2022年1月にEvolution社からベラジョンカジノ独占の「花路野三丁目」がリリースされました。日本人ディーラーが日本語で進行するバカラやブラックジャック等のテーブルが楽しめます。",
    },
    {
      question: "ベラジョンカジノで、地方銀行からの入出金は可能ですか？",
      answer:
        "ベラジョンへの直接の銀行振込が利用できない場合でも、Vega Walletやpayzを経由すればコンビニATMやネットバンクから振込可能です。PayPay銀行やSMBC等に対応する決済サービスを利用することで実質的に地方銀行からの入金も可能です。",
    },
    {
      question: "ベラジョン無料版は危険ですか？",
      answer:
        "ベラジョン無料版は有料版と同じ運営会社が提供しており、実際のお金を使わずにプレイできるため危険ではありません。入門用として安心して試せます。",
    },
    {
      question: "ベラジョンカジノから高額出金することは違法にあたりますか？",
      answer:
        "出金（換金）が違法かどうかは、居住国の法律によります。登録前に必ずご自身の居住地の法律を確認し、自己責任でプレイしてください。",
    },
  ],
  cta: {
    text: "ベラジョンカジノでプレイしてみる（CasinoTsu限定オファー）",
    href: "https://go.japanesecasino.com/go/vera-john",
  },
};
