import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewLynxbet: ReviewPageContent = {
  hero: {
    title: "LynxBet (リンクスベット) レビュー【※日本市場撤退】",
    subheading: "最大 ¥100,000 + フリースピン100回",
    description: "LynxBetは2022年4月にローンチされたオンラインカジノでした。しかし2023年9月28日をもって日本市場から撤退しました。本レビューは過去の情報に基づき作成されたアーカイブです。",
    score: 3.9,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 70,
        note: "日本での知名度は高くありませんでしたが、ゲームの豊富さは非常に充実していました。",
      },
      {
        label: "規約",
        percent: 84,
        note: "ウェルカムボーナスはカジノ用とスポーツ用の2種類が用意されていました。",
      },
      {
        label: "操作性",
        percent: 83,
        note: "PCやスマホで快適にプレイできましたが、検索機能はやや使いにくい印象がありました。",
      },
      {
        label: "サポート",
        percent: 80,
        note: "チャットの返答は迅速かつ丁寧でしたが、時折、非日本語ネイティブの方が翻訳ツールで対応することもありました。",
      },
    ],
    highlights: [
      "ボーナスが充実していた",
      "ゲーム種類が豊富だった（スロット、ライブ、スポーツ、ビンゴ、ロト）",
      "取扱い仮想通貨は40種類以上と多かった",
    ],
    watchouts: [
      "2023年9月28日に日本市場から撤退済み",
      "一部の人気スロットプロバイダーが欠けていた",
      "サイトの検索機能が使いにくかった",
      "サイトの表示速度が遅いとの報告があった",
    ],
  },
  payments: {
    featured: [
      {
        name: "銀行送金",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://casinotsu.com/payment/bank-transfer",
        badge: "定番",
        note: "国内銀行からの入出金に対応",
      },
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://casinotsu.com/payment/visa",
        badge: "カード",
        note: "クレジット/デビットどちらも利用可能",
      },
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "40種類以上の仮想通貨に対応",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://casinotsu.com/payment/payz",
        badge: "Eウォレット",
        note: "旧ecoPayz、多くのカジノで採用",
      },
    ],
    deposits: [
      { name: "Bank Transfer", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg" },
      { name: "Bitcoin Cash", icon: "/assets/payments/bitcoin-cash.svg" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg" },
      { name: "Litecoin", icon: "/assets/payments/litecoin.svg" },
      { name: "MasterCard", icon: "/assets/payments/mastercard.svg" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg" },
      { name: "Payz", icon: "/assets/payments/payz.svg" },
      { name: "Ripple", icon: "/assets/payments/ripple.svg" },
      { name: "Stellar", icon: "/assets/payments/stellar.svg" },
      { name: "Tether", icon: "/assets/payments/tether.svg" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg" },
      { name: "VISA", icon: "/assets/payments/visa.svg" },
      { name: "American Express" },
      { name: "Cardano (ADA)" },
      { name: "TRON (TRX)" },
      { name: "Dogecoin (DOGE)" },
      { name: "Skrill" },
      { name: "Neteller" },
      { name: "AstroPay" },
      { name: "Pay4Fun" },
      { name: "Santander" },
      { name: "Interac" },
      { name: "Pix" },
      { name: "Boleto" },
      { name: "OXXO" },
      { name: "Pago Efectivo" },
    ],
    withdrawals: [
      { name: "Bank Transfer", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg" },
      { name: "Bitcoin Cash", icon: "/assets/payments/bitcoin-cash.svg" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg" },
      { name: "Litecoin", icon: "/assets/payments/litecoin.svg" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg" },
      { name: "Payz", icon: "/assets/payments/payz.svg" },
      { name: "Ripple", icon: "/assets/payments/ripple.svg" },
      { name: "Stellar", icon: "/assets/payments/stellar.svg" },
      { name: "Tether", icon: "/assets/payments/tether.svg" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg" },
    ],
    notes: [
      "40種類以上の仮想通貨に対応していた点が特徴でした。最低入金額は約€5相当と低めでした。",
      "月間の最高出金額は€10,000相当と制限があり、高額当選時には注意が必要でした。出金処理時間は0〜96時間と幅がありました。",
    ],
  },
  bonuses: {
    overview:
      "LynxBetでは、入金不要ボーナスからカジノ・スポーツ両方のウェルカムボーナス、ウィークリーオファーまで、多彩なプロモーションが提供されていました。※現在はすべて提供終了しています。",
    noDeposit:
      "CasinoTsu限定で、人気スロット「ムーンプリンセス」で使える賭け条件なしのフリースピン40回分が提供されていました。勝利金はキャッシュとして扱われましたが、出金には最低1,500円の入金と特定の条件クリアが必要でした。",
    extraSpins: {
      summary:
        "ウェルカムボーナスの一部として、最大100回のフリースピンが含まれていました。Pragmatic Play社の人気機種で利用可能でした。",
      schedule: [
        "750円以上の入金で50回 (Play'n GO機種)",
        "1,500円以上の入金で50回 (Play'n GO機種)",
        "7,500円以上の入金で100回 (Pragmatic Play機種)",
      ],
      warning: "フリースピンの賭け条件は35倍、有効期限は有効化から2日以内でした。",
    },
    welcomeRows: [
      { depositNumber: "初回(7,500円以上)", percent: "100%", cap: "¥100,000", code: "ボーナス選択" },
      { depositNumber: "初回(1,500円以上)", percent: "100%", cap: "¥15,000", code: "ボーナス選択" },
    ],
    conditions: [
      "最大10万円ボーナスの賭け条件は18倍と緩やかでした。",
      "その他のボーナスの賭け条件は35倍でした。",
      "ボーナスの有効期限は21日間でした。",
      "出金上限額は、付与されたボーナス額の10倍でした。",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "スポーツウェルカムオファー",
      description: "スポーツブックで利用できる最大10,000円の100%入金ボーナスも提供されていました。カジノ用ウェルカムボーナスとの択一式でした。",
      highlight: "カジノかスポーツか選べるウェルカムボーナス",
    },
    {
      title: "マンデースーパーボーナス",
      description: "毎週月曜日に、最大で合計15万円の50%入金ボーナスが受け取れるウィークリーボーナスでした。1回の最大ボーナス額は1万5千円で、最大10回まで利用可能でした。",
    },
    {
      title: "ウェンズデーキャッシュバック",
      description: "毎週水曜日にスロットでの損失額の一部がキャッシュバックされるキャンペーンでした。還元率はその日の日付で決まり、最大7,000円まででした。",
    },
  ],
  facts: [
    { label: "名称", value: "LynxBet (リンクスベット)" },
    { label: "ローンチ", value: "2022年4月27日" },
    { label: "閉鎖日 (日本市場)", value: "2023年9月28日" },
    { label: "運営会社", value: "JNS Gaming Limited" },
    { label: "ライセンス", value: "Isle of Man Gambling Supervision Commission (GSC)" },
    { label: "VIPプログラム", value: "✅" },
    {
      label: "対応言語",
      value: "英語, 日本語, ポルトガル語, スペイン語, フィンランド語",
    },
    { label: "対応通貨", value: "JPY, USD, EUR, GBP, CAD, NZD, BRL, CLP, INR, MXN, PEN, RUB, ZAR" },
    {
      label: "ゲームタイプ",
      value:
        "Baccarat, Blackjack, Craps, Game Shows, Live Casino, Poker, Roulette, Slots, Bingo, Loto, Sports Betting",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          Amatic Industries, Betsoft, Big Time Gaming, Blueprint Gaming, BGaming, Endorphina, Evolution Gaming, Ezugi, Golden Hero, Habanero, Hacksaw Gaming, iSoftBet, Lucksome, Microgaming, NetEnt, NextGen Gaming, Playson, Play’n GO, Pragmatic Play, Red Tiger, Slingshot Studios, 1x2Games
        </span>
      ),
    },
    { label: "最小入金額", value: "約€5 (約700円)" },
    { label: "最小出金額", value: "不明" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@lynxbet.com">support@lynxbet.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート（登録・ログインが必要）" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "LynxBet (リンクスベット) は、2022年4月27日にローンチされた、オオヤマネコがシンボルのオンラインカジノでした。スロットやライブカジノはもちろん、スポーツベット、ロト、ビンゴまで楽しめる、ゲームの種類の豊富さが魅力でした。",
      "しかし、皆様にお伝えしなければならない重要なお知らせがございます。LynxBet (リンクスベット) は、2023年9月28日をもって日本市場から撤退いたしました。",
      "そのため、当サイトからの限定登録ボーナスのご提供や新規登録は、既に終了しております。本レビューは、過去の情報に基づき作成されたものです。",
    ],
    ctas: [
      { text: "👉 CasinoTsu推薦の優良カジノをチェック", href: "https://casinotsu.com/reviews" },
    ],
  },
  games: [
    "LynxBetでは、スロット、テーブルゲーム、ライブカジノに加え、ビンゴ、ロト、スポーツブックも楽しめました。スロットだけでも1,000種類以上が提供され、「Hawaian Dream」のような人気のパチスロ風スロットもプレイ可能でした。",
    "ライブカジノでは、EvolutionやEzugiなどのプロバイダーによる定番ゲームが幅広く提供されていました。ただし、Nolimit CityやRelax Gamingといった一部の人気プロバイダーは導入されていませんでした。",
  ],
  features: [
    "オオヤマネコをシンボルキャラクターにした、親しみやすいデザインが特徴でした。モバイルデバイスにも最適化されており、専用アプリなしでブラウザから快適にプレイできました。",
    "一方で、サイトの表示速度が遅い、検索機能が使いにくい、日本語表記に不自然な箇所があるなど、操作性にはいくつかの課題が指摘されていました。",
  ],
  editorial: {
    author: "CasinoTsu 編集部",
    profileHref: "/about",
    hook: "豊富なゲームジャンルが魅力だったものの、短期間で日本市場を去った惜しいカジノでした。",
    theGoodStuff: "最大の強みは、カジノゲームだけでなくスポーツ、ビンゴ、ロトまで一つのアカウントで遊べる総合力でした。40種類以上の仮想通貨への対応や、賭け条件の緩いウェルカムボーナスも魅力的でした。",
    theHeadsUp: "しかし、サイトの操作性には改善の余地が多く、特に検索機能の使いにくさや表示速度の遅さはストレスになる点でした。また、月間€10,000という出金上限は、ハイローラーには不向きでした。",
    finalThought: "多くのポテンシャルを秘めていましたが、残念ながら日本市場での活動は短命に終わりました。今後は、より安定した運営実績を持つカジノを選ぶことをお勧めします。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "LynxBetは、2022年4月に登場し、2023年9月に日本市場から撤退したオンラインカジノです。その短い活動期間の中で、オオヤマネコをモチーフにした親しみやすいブランドイメージを打ち出しました。",
      "このカジノの最大の特徴は、そのゲームの多様性にありました。一般的なスロットやライブカジノに加え、多くのカジノでは見られないビンゴやロト、さらには充実したスポーツブックまで提供しており、あらゆるギャンブルファンに対応できるポテンシャルを持っていました。特に仮想通貨の対応数は40種類以上と、業界でもトップクラスでした。",
      "ボーナス面では、賭け条件なしの入金不要フリースピン（CasinoTsu限定）や、賭け条件18倍という緩やかな設定のウェルカムボーナスなど、プレイヤーにとって魅力的なオファーが用意されていました。",
      "安全性については、信頼性の高いマン島ライセンスを取得し、SSL暗号化技術を導入するなど、標準的な対策は講じられていました。また、責任あるギャンブルに関するツールも豊富に提供しており、プレイヤー保護の姿勢も見られました。",
      "しかしながら、プラットフォームの完成度には課題が残っていました。サイトの表示速度が遅い、ゲームの検索機能が不便、日本語が不自然といった点は、快適なプレイを妨げる要因でした。また、月間の出金上限額が比較的低く設定されている点も、一部のプレイヤーにとってはデメリットだったでしょう。",
      "最終的に、これらの課題が影響したのか、日本市場でのサービスを約1年半で終了するという決断に至りました。ユニークな強みを持っていただけに、その撤退は惜しまれます。",
    ],
  },
  security: [
    "マン島ギャンブル監督委員会（GSC）のライセンスを取得して運営",
    "128ビットSSLデジタル暗号化技術で個人情報と財務情報を保護",
    "最新のファイアウォールによるセキュリティ対策",
    "監査済みのプロバイダーによるゲーム提供とRNG（乱数発生器）による公平性の保証",
  ],
  responsiblePlay: [
    "入金制限: 1日の入金額上限を設定",
    "賭け金制限: 1回/1日のベット総額に上限設定",
    "損失制限: 1日の損失額を管理",
    "時間/セッション制限: プレイ時間や休憩をコントロール",
    "クールオフ/タイムアウト: 一定期間アカウントを休止",
    "リアリティチェック: 勝敗・損失・経過時間の通知",
    "自己評価テスト: 依存リスクをセルフチェック",
    "出金ロック: 出金申請後のキャンセルを防止",
  ],
  complaintStats: [],
  awards: [],
  restrictedCountries: [
    "アフガニスタン",
    "アルバニア",
    "アメリカ領サモア",
    "オーストラリア",
    "バルバドス",
    "ベルギー",
    "その他多数の国・地域",
  ],
  userConcerns: [
    "サイトの表示速度が遅い",
    "検索機能が使いにくい",
    "一部の日本語表記が不自然",
    "月間最高出金額が€10,000と比較的低い",
    "Nolimit Cityなど一部の人気プロバイダーが未導入",
  ],
  summary: [
    "LynxBetは、スロットやライブカジノだけでなく、ビンゴ、ロト、スポーツベットといった多様なゲームを楽しめるオンラインカジノでした。充実したウェルカムボーナスも用意されており、新規プレイヤーにとっても始めやすい環境でした。",
    "明るい雰囲気とオオヤマネコのキャラクターも魅力的でした。",
    "しかし、サイトの表示速度や検索機能、一部の日本語表記には改善の余地があり、残念ながら2023年9月28日に日本市場から撤退となりました。",
  ],
  extraLinks: [
    { text: "🔰 オンラインカジノライセンスとは？", href: "https://casinotsu.com/info/casino-license" },
    { text: "💰 ウェルカムボーナスを徹底解説", href: "https://casinotsu.com/bonuses/welcome-bonus" },
  ],
  faq: [
    {
      question: "カスタマーサポートの対応時間はいつでしたか？",
      answer: "日本語サポートは、午後5時〜翌日午前2時（日本時間）まででした。",
    },
    {
      question: "何歳から登録できましたか？",
      answer: "LynxBetは、18歳から利用できました。",
    },
    {
      question: "ゲーム中に問題が発生した場合、どうすればよかったですか？",
      answer: "スクリーンショットを撮り、メールまたはチャットでサポートに連絡することが推奨されていました。",
    },
    {
      question: "デモモードはありましたか？",
      answer: "はい、ログインしていない状態でゲームを開始すれば、デモモードでプレイすることができました（一部ゲームを除く）。",
    },
  ],
  cta: {
    text: "LynxBetは閉鎖しました。他の優良カジノを探す",
    href: "https://casinotsu.com/reviews",
  },
};