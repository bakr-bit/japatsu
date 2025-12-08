import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewWinz: ReviewPageContent = {
  hero: {
    title: "Winz.io（ウィンズアイオー）2025年最新評価｜入金ボーナス・入出金・安全性まで全解説",
    subheading: "賭け条件なしのウェルカム特典／仮想通貨＋日本円対応／6,000〜9,000超のゲーム",
    description:
      "当編集部がWinz.ioのライセンス、ボーナス設計、入出金、対応通貨、ゲームラインナップ、サポート、責任あるプレイ機能まで客観的に検証。ホイール型ウェルカムや各種キャッシュバックの条件、AMLロールオーバー要件など実務上の留意点も整理しました。",
    score: 4.3,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 86,
        note:
          "2020年ローンチ、2023年に日本向け本格展開。条件面と完成度で支持が拡大。",
      },
      {
        label: "規約",
        percent: 82,
        note:
          "賞金・FSに基本賭け条件なし。出金前ロールオーバー（法定3倍／暗号資産1倍）あり。",
      },
      {
        label: "操作性",
        percent: 90,
        note:
          "検索性良好。仮想通貨中心ながら日本円ほか法定通貨にも対応。モバイルで一部遅延報告あり。",
      },
      {
        label: "サポート",
        percent: 84,
        note:
          "24時間ライブチャットとメール。自動翻訳主体だが応答速度は速い。",
      },
    ],
    highlights: [
      "ホイール型ウェルカム：最大$10,000または最大800FS（賭け条件なし）",
      "仮想通貨＋法定通貨に幅広く対応（JPY可）",
      "スポーツブック・eスポーツも提供",
      "VIP“WinzUp”で日次レークバック最大15%／週次CB最大20%",
    ],
    watchouts: [
      "出金前ロールオーバー要件（法定3倍／暗号資産1倍）",
      "一部eウォレットは入金可でも出金不可",
      "高額出金ではKYCが必要、審査に時間を要する場合あり",
    ],
    avatarSrc: "/assets/casino/winz.png",
    avatarAlt: "Winz.ioのロゴ",
  },

  ratingsExternal: [
    { source: "VIP-Grinders", score: "4.5/5" },
    { source: "Trustpilot", score: "4.2/5（約508レビュー）" },
    { source: "AskGamblers", score: "9.8/10（CasinoRank）" },
    { source: "AskGamblers Awards", score: "Best Online Casino 2024/2025 受賞" },
    { source: "CCN.com", score: "4.36/5" },
    { source: "Other", score: "“賭け条件なしビットコインカジノ” 1位評価あり" },
  ],

  facts: [
    { label: "名称", value: "Winz.io" },
    { label: "ローンチ", value: "2020" },
    {
      label: "ライセンス",
      value: "Antillephone N.V.（8048/JAZ2020-13）, Estonia Tax and Customs Board",
    },
    { label: "運営会社", value: "Dama N.V." },
    { label: "VIPプログラム", value: "WinzUp（レベル制／専属VIP／上限引き上げ等）" },
    {
      label: "ゲームタイプ",
      value:
        "Slots, Live Casino, Table Games（BJ/ルーレット/ポーカー等）, Game Shows, Specialty（Crash, Plinko, Mines, Dice）, Sportsbook",
    },
    {
      label: "主なプロバイダー",
      value:
        "BGaming, Betsoft, Big Time Gaming, Blueprint, Booming, Elk, Endorphina, Fantasma, Hacksaw, NetEnt, Nolimit City, Octoplay, PG SOFT, Playson, Playtech, Play’n GO, Pragmatic Play, Print Studios, Quickspin, Red Tiger, Relax, Spinomenal, Swintt, Thunderkick, Yggdrasil（ほか多数）",
    },
    { label: "電話サポート", value: "なし" },
    { label: "メール", value: "info@winz.io / support@winz.io" },
    { label: "ライブチャット", value: "24時間対応" },
  ],

  payments: {
    featured: [
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://www.japanesecasino.com/payment/visa",
        badge: "$20〜",
        note: "入金即時（出金は銀行・ウォレット・暗号資産を利用）。",
      },
      {
        name: "MasterCard",
        icon: "/assets/payments/mastercard.svg",
        href: "https://www.japanesecasino.com/payment/mastercard",
        badge: "$20〜",
        note: "入金即時。",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://www.japanesecasino.com/payment/payz",
        badge: "即時",
        note: "入出金対応、上限目安$3,200/回。",
      },
      {
        name: "MuchBetter",
        icon: "/assets/payments/muchbetter.svg",
        href: "https://www.japanesecasino.com/payment/muchbetter",
        badge: "即時",
        note: "入金対応。出金は不可の場合あり。",
      },
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://www.japanesecasino.com/payment/bitcoin",
        badge: "最速0–1時間",
        note: "暗号資産の入出金は即時〜短時間処理。",
      },
    ],
    deposits: [
      { name: "VISA" },
      { name: "MasterCard" },
      { name: "銀行送金" },
      { name: "Payz" },
      { name: "MuchBetter" },
      { name: "Skrill" },
      { name: "Neteller" },
      { name: "MiFinity" },
      { name: "Jeton" },
      { name: "Paysafecard" },
      { name: "Neosurf" },
      { name: "CashtoCode" },
      { name: "Flexepin" },
      { name: "Crypto On-ramp（サイト内購入）" },
    ],
    withdrawals: [
      { name: "銀行送金" },
      { name: "Payz" },
      { name: "Skrill" },
      { name: "Neteller" },
      { name: "MiFinity" },
      { name: "Jeton" },
      { name: "Bitcoin / BCH / ETH / LTC / XRP / USDT / USDC / TRX / BNB / DOGE / ADA / SOL" },
    ],
    tables: [
      {
        title: "主要入出金目安",
        rows: [
          ["クレジットカード（入金）", "$20〜", "—", "即時", "—"],
          ["銀行送金（出金）", "—", "$4,000/回", "—", "1–5営業日"],
          ["Payz", "$20〜", "$3,200/回", "即時", "即時"],
          ["MuchBetter", "$20〜", "$3,200/回（出金可否は要確認）", "即時", "即時/不可の場合あり"],
          ["Skrill / Neteller / MiFinity / Jeton", "$20〜", "$3,200/回", "即時", "即時"],
          ["Paysafecard / Neosurf / CashtoCode / Flexepin（入金）", "$20〜", "—", "即時", "—"],
          ["暗号資産（各チェーン）", "通貨による", "通貨による", "即時", "即時（0–1時間）"],
        ],
        headers: ["手段", "最低入金", "最高出金", "入金時間", "出金時間"],
      },
      {
        title: "暗号資産 入出金目安",
        rows: [
          ["BTC", "0.0001 BTC", "1 BTC", "即時", "0–1時間"],
          ["BCH", "0.001 BCH", "20 BCH", "即時", "0–1時間"],
          ["USDT", "20 USDT", "10,000 USDT", "即時", "0–1時間"],
          ["ETH", "0.01 ETH", "10 ETH", "即時", "0–1時間"],
          ["USDC", "20 USDC", "10,000 USDC", "即時", "0–1時間"],
          ["TRX", "300 TRX", "148,000 TRX", "即時", "0–1時間"],
          ["XRP", "50 XRP", "5,000 XRP", "即時", "0–1時間"],
          ["BNB", "0.01 BNB", "24 BNB", "即時", "0–1時間"],
          ["LTC", "0.01 LTC", "100 LTC", "即時", "0–1時間"],
          ["DOGE", "1 DOGE", "100,000 DOGE", "即時", "0–1時間"],
          ["ADA", "20 ADA", "460,000 ADA", "即時", "0–1時間"],
          ["SOL", "0.1 SOL", "500 SOL", "即時", "0–1時間"],
        ],
        headers: ["通貨", "最低入金", "最高出金", "入金時間", "出金時間"],
      },
    ],
    limitsNotes: [
      "出金上限：$100,000/週、$400,000/月（または通貨相当、VIPで優遇可）。",
      "手数料：カジノ側は基本無料。暗号資産のネットワーク手数料はチェーン状況に依存。",
      "出金前ロールオーバー：法定通貨入金＝入金額の3倍／暗号資産入金＝入金額の1倍。",
    ],
    fiatSupported: "CAD, AUD, NZD, NOK, RUB, INR, BRL, ZAR, CHF, KZT（JPYも利用可）",
  },


  bonuses: {
    overview:
      "ウェルカムは3系統（ホイール／暗号資産キャッシュバック／ライブキャッシュバック）から1つ選択。いずれも賭け条件なし、またはキャッシュバック形式で実質負担が軽いのが特徴。スポーツ用の初回入金特典も別途あり。",
    welcomeWheel: {
      title: "ウェルカムWOW（Winzホイール）",
      description:
        "初回入金でWinzホイールを1回獲得。賞金（最大$10,000）またはフリースピン（最大800回）。獲得リワードは賭け条件なし。",
      rows: [
        ["$25", "ブロンズスピン", "$10–$2,000 または 25–200 FS"],
        ["$50", "シルバースピン", "$20–$4,000 または 50–400 FS"],
        ["$100", "ゴールドスピン", "$40–$10,000 または 100–800 FS"],
      ],
      fsGame: "Pragmatic Play『Big Bass Bonanza』",
      expiry: "FSは受取から24時間以内に利用",
      notes: [
        "ホイール当選リワードに賭け条件なし。",
        "ボーナスページで該当オファーを有効化してから入金すること。",
      ],
    },
    welcomeCryptoCB: {
      title: "仮想通貨ウェルカム・キャッシュバック",
      description:
        "暗号資産での初回〜3回目入金対象。最大7日間、日次20%キャッシュバックを選択日で受取可能（進呈後14日以内の任意日で消化可）。",
      code: "CRYPTO（2回目または3回目の入金時に入力）",
      stackable: "初回入金のWinzホイールと併用可",
      wagering: "賭け条件なし／上限なし",
    },
    welcomeLiveCB: {
      title: "ライブカジノ・ウェルカム・キャッシュバック",
      description:
        "初回入金後14日間、日次10%のキャッシュバック（上限なし）。他のウェルカム特典とは排他。",
      steps: [
        "最初の3回目の入金までにコード「LIVE」を入力し入金",
        "ライブゲームをプレイ",
        "損失後に$20（約¥3,000）以上を再入金",
        "翌日にキャッシュバック受取",
      ],
      timezoneNote: "日付はUTC 00:00–23:59（日本時間 09:00–翌08:59）",
    },
    welcomeSports: {
      title: "スポーツ・ウェルカム",
      description: "最大$500の100%入金ボーナス＋$20リスクフリーベット。",
      code: "SPORTS",
      note: "カジノ系ウェルカムと排他選択。",
    },
    recurringWheel: {
      title: "毎週Winzホイール（継続）",
      description:
        "週3回（火〜水／木〜金／土〜月）それぞれ1回までホイール利用可。2回目以降は必要入金額が倍増、コード入力必須。",
      thresholds: [
        "ブロンズ：$50",
        "シルバー：$100",
        "ゴールド：$200",
      ],
    },
    vip: {
      title: "WinzUp（VIP・ロイヤリティ）",
      perks: [
        "日次レークバック最大15%",
        "週次キャッシュバック最大20%",
        "レベルアップボーナス／限定イベント",
        "出金上限引き上げ",
        "専属VIPマネージャー",
      ],
      note: "対象ベットは主にカジノ（スポーツは対象外）。",
    },
  },

  intro: {
    paragraphs: [
      "Winz.ioは“賭け条件なし”を軸にした設計が特徴。ホイールによる高額賞金や大量FSの抽選、暗号資産／ライブ向けキャッシュバック、スポーツ向けオファーと、入口施策が明快です。",
      "仮想通貨中心ながら、日本円を含む法定通貨でも利用可能。入出金経路が多く、処理速度も良好です。出金前ロールオーバー（法定3倍／暗号資産1倍）などの要件は事前に把握しておくと円滑です。",
    ],
    ctas: [
      { text: "賭け条件の基礎を学ぶ", href: "https://www.japanesecasino.com/guides/wagering-requirements" },
      { text: "ライセンスの信頼性", href: "https://www.japanesecasino.com/info/casino-license" },
      { text: "用語集", href: "https://www.japanesecasino.com/guides/glossary" },
    ],
  },

  games: [
    "スロットは日本から遊べるだけで6,000〜9,000タイトル規模。",
    "ライブカジノは複数プロバイダーを採用。Game Showsも幅広くカバー。",
    "Specialty（Crash, Plinko, Mines, Dice）を充実展開。",
    "スポーツブックとeスポーツ（CS:GO, Dota 2, LoL, Valorant 等）対応。",
    "Livespins機能：配信者のスロットプレイにベットできる仕組みを提供。",
  ],

  features: [
    "Winzホイール：初回〜継続で利用可能な抽選型ウェルカム／継続施策",
    "日本円含む法定通貨＋主要暗号資産に対応",
    "ゲーム画面でRTPやボラティリティ表示（対応タイトル）",
  ],

  security: [
    "Antillephone N.V.（8048/JAZ2020-13）ほか、エストニア当局ライセンス保持",
    "128bit SSL暗号化、2FA対応",
    "RNG導入・第三者監査、Provably Fair対応タイトルあり",
  ],

  responsiblePlay: [
    "マイアカウントから入金制限・損失制限・クールダウン・セルフ除外を設定可能",
    "クーリングオフ：1週／1・3・6か月",
    "セルフ除外：6・9・12か月",
    "損失制限：日次／週次／月次",
  ],

  editorial: {
    author: "当編集部",
    hook:
      "“賭け条件なし”は魅力だが、出金前ロールオーバーや一部手段の出金不可など実務要件の理解が前提。",
    theGoodStuff:
      "ウェルカムの選択肢が多く、暗号資産・法定通貨の双方で使いやすい。ゲーム数・検索性・処理速度も高水準。",
    theHeadsUp:
      "KYCは高額時に必須で時間がかかる事例。モバイル表示の遅延報告、ロイヤル層向けの個別ボーナスに物足りなさの声も。",
    finalThought:
      "条件の明快さとオペレーションの速さで、仮想通貨中心ユーザーだけでなく広く薦められる選択肢。",
  },

  longform: {
    kicker: "詳細レビュー",
    title: "ライセンス／ボーナス設計／入出金／体験設計を多角的に評価",
    paragraphs: [
      "ライセンスはAntillephone N.V.（8048/JAZ2020-13）に加え、エストニアの当局認可も掲示。通信はSSL、2FA対応、ゲームはRNG／第三者監査／一部Provably Fair確認と、形式面での安全性要件を満たしています。",
      "ボーナスの最大の特徴は“賭け条件なし”。ホイールの賞金やFS（Big Bass Bonanza）は原則0x。一方、出金前ロールオーバーとしてAML対策の入金額×（法定3倍／暗号資産1倍）が求められます。キャッシュバック系（Crypto／Live）は上限なし・0xという軽い負担で、使い勝手が良好です。スポーツは100%最大$500＋$20リスクフリーとシンプル。",
      "入出金はクレカ／銀行／主要ウォレット／プリペイド／暗号資産に広く対応。暗号資産の即時〜短時間処理（0–1時間）の運用が強みです。上限は週$100,000／月$400,000（通貨同等、VIP優遇あり）。MuchBetterなど一部は入金のみの経路があるため、初回から出金ルートを見据えた選択が実務的です。",
      "体験面では、6,000〜9,000規模のスロット、複数社のライブテーブル、Specialty、スポーツまでワンストップ。Livespinsのような拡張機能も備え、UIの検索性が高いのが強み。モバイルで稀に遅延報告がある点は継続改善に期待。",
      "サポートは24時間ライブチャットとメール。自動翻訳の品質は時差や混雑で揺らぐものの、応答は総じて迅速。VIP“WinzUp”は日次レークバック／週次キャッシュバックなど定量的特典がわかりやすく、長期プレイの還元が明確です。",
      "総括として、ボーナス条件の軽さと決済運用の速さが際立つ一方、KYCタイミングやロールオーバー要件、手段別の出金可否は事前理解が必須。自己上限・時間管理を有効化し、責任あるプレイの枠組みを併用することで、長期的に安定した利用が見込めます。",
    ],
  },

  userConcerns: [
    "KYCに時間がかかる場合がある（高額出金時）",
    "モバイルで一部遅延の報告",
    "サイト内の暗号資産購入手数料が高いとの指摘",
    "ロイヤル層向けのパーソナライズ特典に物足りなさ",
  ],

  summary: [
    "“賭け条件なし”の設計と迅速な決済が最大の強み。",
    "日本円を含む法定通貨と主要暗号資産の双方で柔軟に運用可能。",
    "出金前ロールオーバー／KYC／手段別出金可否を理解すれば、総合完成度は高い。",
  ],

  faq: [
    {
      question: "ウェルカム特典は3つすべて使えますか？",
      answer: "いいえ。ホイール／暗号資産CB／ライブCBのうち1つを選択します（スポーツは別枠）。",
    },
    {
      question: "入金不要ボーナスはありますか？",
      answer: "現時点では提供されていません。最新情報は公式と当編集部ページをご確認ください。",
    },
    {
      question: "出金前のロールオーバー要件は？",
      answer:
        "法定通貨入金は入金額の3倍、暗号資産入金は1倍の賭けが必要です（AML対策上の要件）。",
    },
    {
      question: "KYCは必須ですか？",
      answer:
        "累計出金が一定額（例：€2,000超など）を超える場合は本人確認が必要になります。高額出金を予定する場合は早めの完了を推奨します。",
    },
  ],

  cta: {
    text: "Winz.ioで最新プロモーションを確認する",
    href: "https://go.japanesecasino.com/go/winz:winz-io?referrer_path=%2Freviews%2Fwinz-io",
  },
};