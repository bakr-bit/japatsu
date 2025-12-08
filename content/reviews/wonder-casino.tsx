import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewWonderCasino: ReviewPageContent = {
  hero: {
    title: "ワンダーカジノ（Wonder Casino）ログイン・入金不要ボーナス・評判を徹底解説【2025年版】",
    subheading: "業界最速の出金スピードと仮想通貨特化ボーナスを提供する“対応速度No.1カジノ”",
    description:
      "2018年設立のWonder Casino（ワンダーカジノ）は、出金・VIP昇格・サポートのスピードを徹底的に追求。CasinoTsu編集部が、ライセンス・信頼性・ボーナス・入出金方法・対応ゲーム・サポート体制を網羅的にレビューしました。",
    score: 4.5,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 88,
        note: "日本人プレイヤーの利用率が高く、SNSでも頻繁に話題。高速出金とボーナスの充実度で支持されている。",
      },
      {
        label: "規約",
        percent: 82,
        note: "ウェルカムは100%最大$500（30倍W/R）。入金不要$40（W/R 5倍・期間限定）など良条件だが、禁止ゲームやベット制限あり要確認。",
      },
      {
        label: "操作性",
        percent: 85,
        note: "モバイル最適化あり。カテゴリや検索機能に改善余地があるが、UIはシックで洗練。",
      },
      {
        label: "サポート",
        percent: 90,
        note: "24時間日本語チャット・LINE・メール対応。応答は迅速だが、担当によって質にばらつきの報告も。",
      },
    ],
    highlights: [
      "仮想通貨利用者向け特典（初回入金60%キャッシュバック＋毎日5%還元）",
      "業界最速クラスの出金スピード（最短5分〜1時間）",
      "高額入出金でも制限なし／1回最大10万ドル・回数無制限",
      "最短1日でVIP最上位昇格可能な高速VIPプログラム",
      "24時間365日の日本語サポート（ライブチャット・LINE・メール）",
    ],
    watchouts: [
      "クレジットカード入金は手数料5%",
      "出金方法によって手数料が発生（例: Vega Wallet 1%, STICPAY 2.5%）",
      "最低出金額が$50〜と他カジノよりやや高め",
      "ゲーム検索機能や細分化カテゴリが弱い",
    ],
    avatarSrc: "/assets/casino/wonder-casino.png",
    avatarAlt: "ワンダーカジノのロゴ",
  },

  payments: {
    featured: [
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://www.casinotsu.com/payment/bitcoin",
        badge: "最速",
        note: "出金30秒〜1時間／入金即時。手数料はマイニング分のみ。",
      },
      {
        name: "Ethereum",
        icon: "/assets/payments/ethereum.svg",
        href: "https://www.casinotsu.com/payment/ethereum",
        badge: "人気",
        note: "主要通貨対応。還元ボーナス対象。",
      },
      {
        name: "Vega Wallet",
        icon: "/assets/payments/vega-wallet.svg",
        href: "https://www.casinotsu.com/payment/venuspoint",
        badge: "日本ユーザー利用多",
        note: "入出金即時。出金1%手数料。",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://www.casinotsu.com/payment/payz",
        badge: "Eウォレット",
        note: "即時入出金／最大20万ドル。手数料なし。",
      },
      {
        name: "STICPAY",
        icon: "/assets/payments/sticpay.svg",
        href: "https://www.casinotsu.com/payment/sticpay",
        badge: "対応幅広",
        note: "即時入出金。出金時2.5%手数料あり。",
      },
    ],
    deposits: [
      { name: "VISA", icon: "/assets/payments/visa.svg" },
      { name: "MasterCard", icon: "/assets/payments/mastercard.svg" },
      { name: "JCB", icon: "/assets/payments/jcb.svg" },
      { name: "American Express", icon: "/assets/payments/american-express.svg" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg" },
      { name: "Tether (USDT)", icon: "/assets/payments/tether.svg" },
      { name: "Litecoin", icon: "/assets/payments/litecoin.svg" },
      { name: "Ripple (XRP)", icon: "/assets/payments/ripple.svg" },
      { name: "Dogecoin (DOGE)", icon: "/assets/payments/dogecoin.svg" },
      { name: "Binance Coin (BNB)", icon: "/assets/payments/binance.svg" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg" },
      { name: "Payz", icon: "/assets/payments/payz.svg" },
      { name: "STICPAY", icon: "/assets/payments/sticpay.svg" },
      { name: "MatchPay" },
      { name: "銀行振込", icon: "/assets/payments/bank-transfer.svg" },
    ],
    withdrawals: [
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg" },
      { name: "Tether (USDT)", icon: "/assets/payments/tether.svg" },
      { name: "Ripple (XRP)", icon: "/assets/payments/ripple.svg" },
      { name: "Litecoin", icon: "/assets/payments/litecoin.svg" },
      { name: "Dogecoin (DOGE)" },
      { name: "Binance Coin (BNB)" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg" },
      { name: "Payz", icon: "/assets/payments/payz.svg" },
      { name: "STICPAY", icon: "/assets/payments/sticpay.svg" },
      { name: "銀行振込" },
      { name: "MatchPay" },
    ],
    notes: [
      "最低入金額：仮想通貨$10〜、クレカ$50、銀行振込$40〜。",
      "最低出金額：$50〜（銀行振込は$200）。",
      "出金速度：仮想通貨30秒〜1時間／銀行振込5分〜1時間／電子決済即時。",
      "クレジットカード入金は5%手数料。銀行出金は5%手数料。",
      "仮想通貨はマイニング手数料のみ。",
      "1回最大出金額は10万ドル、回数制限なし。",
    ],
  },

  bonuses: {
    overview:
      "ワンダーカジノは入金不要ボーナス40ドル（CasinoTsu限定／W/R 5倍）、初回100%最大$500、初回キャッシュバック最大$500（仮想通貨なら60%）など、業界屈指の多彩なオファーを用意しています。既存ユーザーにも毎日5%仮想通貨還元、リベートボーナス1倍など魅力的な継続特典が揃っています。",
    noDeposit:
      "CasinoTsu限定コード『JP40』で40ドル入金不要ボーナス（2025年10月31日まで／賭け条件5倍／携帯認証必須）。",
    extraSpins: {
      summary: "初回入金時にCasinoTsu経由で150回フリースピンを獲得可能。",
      schedule: [
        "CasinoTsuボーナスコード入力後、100ドル以上の初回入金で付与",
        "フリースピンの賭け条件：30倍前後（規約要確認）",
      ],
      warning: "他ボーナスと併用不可。規約違反時は出金拒否の可能性あり。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "100%", cap: "$500", code: "" },
    ],
    conditions: [
      "初回入金ボーナスの賭け条件：(入金額＋ボーナス額)×30倍。",
      "スロット100%、ライブ・テーブルゲーム15%、一部ゲーム禁止。",
      "キャッシュバックは賭け条件1倍。",
      "仮想通貨初回入金時は60%キャッシュバック（上限$500）。",
      "VIP Standard以上で仮想通貨入金時に毎日5%還元（賭け条件1倍）。",
    ],
    prohibitedGames: [
      "プログレッシブジャックポットスロット",
      "一部ライブカジノ",
      "賭け条件消化率が極端に低いスロット",
    ],
  },

  offers: [
    {
      title: "CasinoTsu限定 入金不要ボーナス$40",
      description:
        "期間限定（〜2025/10/31）。ボーナスコードJP40。賭け条件5倍、携帯認証必須。",
      highlight: "入金前に必ず申請。入金すると獲得不可。",
    },
    {
      title: "100%初回入金ボーナス（最大$500）",
      description:
        "スロット100%寄与。ベット上限$100。キャッシュバックとの併用不可。",
    },
    {
      title: "50%キャッシュバック（最大$500）",
      description:
        "初回入金で残高$1未満時に合言葉『ワンダーリベンジ』で申請。賭け条件1倍。",
    },
    {
      title: "仮想通貨限定60%キャッシュバック",
      description:
        "初回入金を仮想通貨で行った場合に適用。合言葉『VirtualBack60』。",
    },
    {
      title: "仮想通貨5%毎日還元",
      description:
        "VIP Standard以上対象。賭け条件1倍。最大1万ドル還元。",
    },
    {
      title: "リベートボーナス（賭け条件1倍）",
      description:
        "翌日自動付与。スロット最大0.8%、ライブ最大0.4%。",
    },
  ],

  facts: [
    { label: "名称", value: "Wonder Casino（ワンダーカジノ）" },
    { label: "ローンチ", value: "2018" },
    { label: "ライセンス", value: "Curaçao eGaming (CGA)" },
    { label: "運営会社", value: "Sector Media N.V.（キュラソー登録）" },
    { label: "VIPプログラム", value: "✅（16段階／降格なし／最短1日で最高位昇格）" },
    {
      label: "ゲームタイプ",
      value:
        "スロット、テーブル（BJ・ルーレット・ポーカー）、ライブカジノ、ゲームショー、パチンコ・パチスロ（400台近く）、スポーツベット（2025年6月追加）",
    },
    {
      label: "ゲームプロバイダー",
      value:
        "Evolution, Playtech, Pragmatic Play, SA Gaming, Asia Gaming 他多数",
    },
    { label: "最小入金額", value: "$10（仮想通貨）" },
    { label: "最小出金額", value: "$50（銀行振込は$200〜）" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅（cs@casino-wonder.com／24時間以内）" },
    { label: "ライブチャット", value: "✅（24時間日本語／応答2〜5分）" },
    { label: "LINE", value: "@091qebwj（応答2〜5分）" },
  ],

  longform: {
    kicker: "Wonder Casinoを徹底検証",
    title: "出金速度・仮想通貨対応・VIP設計で“速さ”を体現するブランド",
    paragraphs: [
      "Wonder Casinoは“対応速度No.1”を掲げ、出金スピードやVIP昇格の速さに強みを持つオンラインカジノです。仮想通貨に特化したボーナス（初回60%キャッシュバック・毎日5%還元）を揃え、業界トップ水準の魅力を提供しています。",
      "ライセンスはCuraçao eGamingを取得し、運営会社はSector Media N.V.。SSL暗号化・RNG採用・AML/KYC体制を備え、公平性と安全性を担保しています。",
      "ボーナスはCasinoTsu限定の入金不要$40（W/R 5倍）や100%初回最大$500に加え、キャッシュバック最大$500（賭け条件1倍）など非常に好条件。既存ユーザーにもリベートや仮想通貨還元が自動付与され、継続プレイに有利な構造です。",
      "入出金は仮想通貨・主要ウォレット・銀行振込・クレカに対応。仮想通貨なら即時反映〜最短30秒での出金が可能。クレジットカードは5%手数料、銀行出金は5%とやや高い点は要留意です。",
      "ゲームラインナップはスロット、ライブ、テーブル、パチンコ/パチスロ400台、さらに2025年からはスポーツベットも追加。プロバイダーはEvolution, Playtechなど一流を網羅しています。",
      "VIPプログラムは16段階に拡張され、降格なし・最短1日で最上位昇格可能。ランクアップボーナス・リベート率増加・専属サポート・出金優先など豪華特典が揃います。",
      "日本語サポートは24時間体制で、ライブチャット・メール・LINEを通じて迅速に対応。責任あるギャンブルツール（入金・損失・ベット制限、クールオフ、自己排除）も実装済みです。",
      "総じて、Wonder Casinoは“速さ”を求めるユーザーや仮想通貨ユーザーに最適な選択肢。一方で、手数料や最低出金額など細部のコストは事前理解が必要です。",
    ],
  },

  responsiblePlay: [
    "入金制限（1日・1週・1ヶ月単位）",
    "損失制限・ベット制限の設定可能",
    "クールオフ期間（24時間〜数週間）",
    "自己排除（一定期間または永久）",
    "外部相談機関の案内（主に英国機関）",
  ],

  userConcerns: [
    "クレジットカード入金に5%手数料がかかる",
    "最低出金額が$50〜とやや高い",
    "サポート担当者による回答品質のばらつき",
    "ゲームカテゴリ分けや検索機能の使い勝手に課題",
  ],

  summary: [
    "Wonder Casinoは業界最速の出金スピードと仮想通貨特典を武器に差別化。",
    "CasinoTsu限定入金不要ボーナス$40やキャッシュバック1倍など魅力的なオファー多数。",
    "高速VIP昇格や24時間日本語サポートで利便性が高い一方、手数料や検索UIには改善余地。",
  ],

  faq: [
    {
      question: "ワンダーカジノの入金不要ボーナスは？",
      answer:
        "CasinoTsu限定コード『JP40』で$40入金不要ボーナス（賭け条件5倍／2025年10月31日まで）。携帯認証が必要で、入金前に必ず申請してください。",
    },
    {
      question: "ワンダーカジノは違法ですか？",
      answer:
        "いいえ。Sector Media N.V.が運営し、Curaçao eGamingライセンスを取得。違法性はなく健全に運営されています。居住国の法令に従い自己責任でプレイしてください。",
    },
    {
      question: "ワンダーカジノの出金時間は？",
      answer:
        "最短5分〜1時間が目安です。仮想通貨はネットワーク状況が良ければ数分〜、電子決済はおおむね即時〜24時間以内、銀行振込は営業日要因で遅延する場合があります。",
    },
    {
      question: "利用できる入出金方法は？",
      answer:
        "仮想通貨（BTC/ETH/USDT/LTC/XRP/DOGE/BNBほか）、Vega Wallet、Payz、STICPAY、MatchPay、銀行振込、主要クレジットカード（VISA/Mastercard/JCB/AMEX・入金のみ）。",
    },
    {
      question: "手数料はかかりますか？",
      answer:
        "クレジットカード入金5%、銀行出金5%、Vega Wallet出金1%、STICPAY出金2.5%。仮想通貨はマイニング手数料のみ。",
    },
    {
      question: "最低入出金額はいくら？",
      answer:
        "最低入金は仮想通貨$10〜（USDT-ERC20は$100）、クレカ$50、銀行$40。最低出金は原則$50（銀行振込は$200〜）。",
    },
    {
      question: "KYC（本人確認）は必要？どれくらいかかる？",
      answer:
        "初回出金時に必要です。身分証・住所証明・場合によりセルフィー等を提出。審査は通常24〜72時間程度（混雑時は延長の可能性）。",
    },
    {
      question: "ボーナスは併用できますか？",
      answer:
        "初回入金ボーナスと初回キャッシュバックは併用不可。フリースピン150回は別枠で付与可（推奨順：初回入金ボーナス→フリースピン）。規約とベット上限に注意してください。",
    },
    {
      question: "スポーツベットはできますか？",
      answer:
        "はい。2025年6月末から提供開始。サッカー、野球、バスケ、テニス、eスポーツなどに対応。",
    },
    {
      question: "スマホアプリはありますか？",
      answer:
        "ネイティブアプリはありませんが、モバイルブラウザ最適化済み。ホーム画面ショートカットの作成でアプリ風に利用できます。",
    },
    {
      question: "無料でお試しできますか？",
      answer:
        "はい。登録不要の無料版（Wonder Free）でスロットやテーブルを体験できます。",
    },
    {
      question: "出金拒否された場合はどうすれば？",
      answer:
        "まずサポートへ原因を確認。KYC未完了、賭け条件未達、禁止ゲームやベット上限違反、入金と同額未消化（出金条件1倍）などが主因となるケースがあります。",
    },
    {
      question: "姉妹サイトはありますか？",
      answer:
        "ミラクルカジノが姉妹カジノです。デザインやボーナス傾向が異なるため併用比較がおすすめ。",
    },
    {
      question: "メンテナンス情報はどこで確認？",
      answer:
        "公式サイトの「メンテナンスのお知らせ」ページで最新スケジュールを確認できます。",
    },
  ],
};