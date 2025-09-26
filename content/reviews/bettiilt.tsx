import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewBettilt: ReviewPageContent = {
  hero: {
    title: "ベットティルト（Bettilt）カジノレビュー",
    subheading: "最大$1,530ボーナス + 100回フリースピン",
    description: "カジノとスポーツベットのハイブリッドサイトBettiltのレビューです。⚠️重要：ベットティルトは2021年11月に日本市場から撤退しました。このページは記録として保持されています。",
    score: 4.3,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 82,
        note: "カジノとスポーツの両方を楽しめるハイブリッドサイト。総合的に優れており、誰でもスムーズにプレイを楽しめた。",
      },
      {
        label: "規約",
        percent: 94,
        note: "ウェルカムボーナスは3回目入金まで適用。賭け条件30倍で禁止ゲームはなし。フリースピンは入金額に応じて最大100回付与された。",
      },
      {
        label: "操作性",
        percent: 87,
        note: "シンプルかつスタイリッシュなデザイン。モバイルアプリも提供され、操作性は非常に優れていた。",
      },
      {
        label: "サポート",
        percent: 94,
        note: "日本語サポートが毎日8時間提供されていた。経験豊富なスタッフによる質の高い対応だった。",
      },
    ],
    highlights: [
      "カジノゲームとスポーツベットの両方が楽しめる",
      "3回目までの入金に対応したウェルカムボーナス",
      "賭け条件30倍で禁止ゲームなし",
      "操作性の良いモバイルアプリを提供",
    ],
    watchouts: [
      "2021年11月に日本市場から撤退済み",
      "Trustpilotで出金やアカウント関連の問題が報告されていた",
      "日本円での直接プレイは不可だった",
      "ボーナスからの最大勝利金はボーナス額の5倍まで",
    ],
  },
  payments: {
    featured: [
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://casinotsu.com/payment/visa",
        badge: "カード",
        note: "主要なクレジットカードでの入金に対応",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://casinotsu.com/payment/payz",
        badge: "Eウォレット",
        note: "迅速な入出金で人気の決済手段",
      },
      {
        name: "Venus Point",
        icon: "/assets/payments/venus-point.svg",
        href: "https://casinotsu.com/payment/venuspoint",
        badge: "ポイント制",
        note: "ポイントでの管理が便利なウォレット",
      },
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "匿名性の高い暗号資産での取引",
      },
    ],
    deposits: [
      { name: "VISA/Master/JCBカード", icon: "/assets/payments/visa.svg" },
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "Venus Point", icon: "/assets/payments/venus-point.svg", href: "https://casinotsu.com/payment/venuspoint" },
      { name: "iWallet", icon: "/assets/payments/iwallet.svg", href: "https://casinotsu.com/payment/iwallet" },
      { name: "Sticpay", icon: "/assets/payments/sticpay.svg", href: "https://casinotsu.com/payment/sticpay" },
      { name: "仮想通貨 (Bitcoin, Ethereum, Ripple, Litecoin)", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "UPI" },
    ],
    withdrawals: [
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "Venus Point", icon: "/assets/payments/venus-point.svg", href: "https://casinotsu.com/payment/venuspoint" },
      { name: "仮想通貨 (Bitcoin, Ethereum, Ripple, Litecoin)", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "UPI" },
    ],
    notes: [
      "最低入金額は€10、最低出金額は€100でした。",
      "出金限度額は1日€5,000、1週間€10,000、1ヶ月€20,000でした。",
      "出金処理時間は保留期間(0-24時間)後、電子ウォレット・仮想通貨は即時、カード・銀行送金は3-5営業日でした。",
    ],
  },
  bonuses: {
    overview:
      "⚠️重要なお知らせ⚠️ ベットティルトは2021年11月に日本市場から撤退しました。以下のボーナス情報は過去の記録として掲載しています。ベットティルトでは、初回から3回目までの入金で最大€1,500 + 100フリースピンがもらえる豪華なウェルカムパックが提供されていました。",
    noDeposit:
      "特定の入金不要ボーナスはありませんでしたが、豊富なデポジットボーナスが魅力でした。",
    extraSpins: {
      summary:
        "ウェルカムボーナスの一環として、最大100回のフリースピンが付与されました。付与数は入金額に応じて変動しました。",
      schedule: [
        "初回入金(€15以上): 30回分",
        "2回目入金(€20以上): 30回分",
        "3回目入金(€30以上): 40回分",
      ],
      warning: "フリースピンの有効期限は7日間でした。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "100%", cap: "€500", code: "不要" },
      { depositNumber: "2回目", percent: "50%", cap: "€500", code: "不要" },
      { depositNumber: "3回目", percent: "50%", cap: "€500", code: "不要" },
    ],
    conditions: [
      "賭け条件はボーナス額の30倍。",
      "ボーナスの有効期限は30日間。",
      "ボーナス利用時の最大ベット額は、ボーナス額の20%または€10のいずれか低い方。",
      "ボーナスからの最大勝利金は、受け取ったボーナス額の5倍まで。",
      "スロットやスクラッチゲームの賭け条件消化率は100%。",
      "テーブルゲームやビデオポーカーなどは10%。",
      "バカラ、プント・パンコ、クラップスは0%。",
    ],
    prohibitedGames: [
        "バカラ", "プント・パンコ", "クラップス"
    ],
  },
  offers: [
    {
      title: "月曜50%最大€100カジノボーナス",
      description: "毎週月曜日の初回入金に対し、最大€100の50%リロードボーナスが提供されていました。賭け条件は30倍でした。",
      highlight: "週の始まりをお得にスタート",
    },
    {
      title: "10%デイリーリロードボーナス",
      description: "毎日、入金額の10%（最大€50）が受け取れるリロードボーナスでした。賭け条件は30倍でした。",
      highlight: "毎日もらえる便利なボーナス",
    },
    {
      title: "花金キャッシュバック",
      description: "金曜と土曜のプレイに対し、日曜に申請すると最大€500の25%キャッシュバックが受け取れました。賭け条件は1倍でした。",
      highlight: "週末の損失を一部補填",
    },
  ],
  facts: [
    { label: "名称", value: "Bettilt (ベットティルト)" },
    { label: "ローンチ", value: "不明 (2021年リニューアル)" },
    { label: "運営会社", value: "Abudantia B.V. (親会社)" },
    { label: "ライセンス", value: "Curaçao e-gaming (8048/JAZ2014-034)" },
    { label: "VIPプログラム", value: "✅ (ロイヤリティプログラム)" },
    { label: "対応言語", value: "日本語、英語など" },
    { label: "対応通貨", value: "EUR, USD, CAD, BTC, INR, BRLなど" },
    {
      label: "ゲームタイプ",
      value:
        "スロット, テーブルゲーム, ライブカジノ, スポーツベット, ルーレット, ブラックジャック, ビデオポーカー, バカラ, スクラッチゲーム",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          Microgaming, NetEnt, Red Tiger, Yggdrasil, BetSoft, iSoftBet, EGT, Pragmatic Play, Quickspin, Play'n Go, Booongo, Playson, Tomhorn, Booming, Redrake, Habanero, Game Art, 1x2 Gaming, Elk Studios, Relax Gaming, eZugi, Betgames
        </span>
      ),
    },
    { label: "最小入金額", value: "€10" },
    { label: "最小出金額", value: "€100" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: "対応あり（アドレス非掲載）" },
    { label: "ライブチャット", value: "✅ (毎日 17:00〜25:00 JST)" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "⚠️重要なお知らせ⚠️ ベットティルトは2021年11月をもって日本市場から撤退しました。そのため、新規登録は現在受け付けておりません。このレビューは、過去に提供されていたサービスを記録としてご紹介するものです。",
      "ベットティルトは、カジノゲームとスポーツベッティングの両方を提供する人気のハイブリッドサイトでした。2021年のリニューアルを経てデザインが一新され、より使いやすくお得なボーナスが提供されていました。",
      "特に、他では珍しいBetgames社のライブゲームをプレイできる点や、充実したウェルカムボーナスが多くのプレイヤーから支持されていました。",
    ],
    ctas: [
      { text: "🌟 CasinoTsu推薦の優良カジノをチェック", href: "https://casinotsu.com/reviews" },
    ],
  },
  games: [
    "ベットティルトでは約2,500種類以上のゲームが提供されていました。スロットのラインナップも豊富でしたが、特にライブカジノが充実していました。",
    "人気プロバイダーEvolution社のゲームを全て揃えていたほか、日本では珍しいBetgames社のライブゲームも導入。これは従来のテーブルゲームにスポーツベッティングの要素を加えたユニークなもので、新しいゲーム体験を求めるプレイヤーに人気でした。",
  ],
  features: [
    "プレイするほどポイントが貯まり、リアルマネーに交換できるロイヤリティプログラムがありました。$10プレイごとに1ポイントが貯まり、100ポイントで$1に交換可能でした。",
    "シンプルでスタイリッシュなデザインのモバイルアプリが提供されており、外出先でも快適にプレイできる環境が整っていました。",
  ],
  editorial: {
    author: "CasinoTsu編集部",
    profileHref: "/authors",
    hook: "ユニークなゲームと豊富なボーナスが魅力でしたが、惜しまれつつ日本市場を去りました。",
    theGoodStuff: "カジノとスポーツの両方で使える豪華なウェルカムボーナスと、Betgamesのような他にはないライブゲームの提供は、ベットティルトの大きな強みでした。経験豊富な日本語サポートの質も高評価でした。",
    theHeadsUp: "一方で、Trustpilotでは出金関連の問題が一部報告されており、キュラソーライセンスの規制が緩やかである点は留意すべき点でした。また、ボーナスからの最大勝利金が5倍に制限されていたのも注意点でした。",
    finalThought: "総合的に優れたハイブリッドサイトとして多くのプレイヤーに愛されていましたが、2021年の日本市場撤退は残念でした。そのサービス内容は、現在のオンラインカジノと比較しても遜色ないものでした。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "ベットティルトは、2021年11月に日本市場から撤退するまで、多くのプレイヤーにとって魅力的な選択肢であり続けました。その最大の魅力は、カジノゲームとスポーツベッティングを一つのアカウントでシームレスに楽しめるハイブリッド性でした。2021年のサイトリニューアルにより、デザインは洗練され、操作性も向上し、プレイヤーにとって非常に快適な環境が提供されていました。",
      "ゲームのラインナップ、特にライブカジノは特筆すべきものでした。人気プロバイダーEvolution社のゲームを網羅していただけでなく、日本市場では非常に珍しいBetgames社のユニークなライブゲームを提供していた点は、他のカジノとの大きな差別化要因となっていました。",
      "プロモーションも豊富で、初回から3回目まで続くウェルカムボーナスは、カジノとスポーツブックのどちらかを選べる柔軟性があり、多くのプレイヤーに好評でした。また、多様な決済方法への対応や、質の高いモバイルアプリの提供も、その人気を支える要因でした。",
      "ただし、Trustpilotで散見された出金関連のトラブル報告や、紛争解決がキュラソーの法律に準拠するというライセンスの特性は、プレイヤーが認識しておくべきリスクでした。最終的に日本市場からは撤退しましたが、ベットティルトが提供していたサービスの質と独自性は、今なお記憶に残るものです。",
    ],
  },
  security: [
    "キュラソー政府発行のe-gamingライセンス（8048/JAZ2014-034）を取得して運営",
    "運営会社はキプロス登録のStriking Stingray Cyprus Limited、親会社はキュラソー登録のAbudantia B.V.",
    "公正なゲームプレイを保証するライセンスプロバイダーのゲームのみを提供",
  ],
  responsiblePlay: [
    "責任あるギャンブルに関する情報は提供されていましたが、具体的なツールについての詳細は記載されていませんでした。",
  ],
  complaintStats: [
    "Trustpilotでの評価は214件のレビューに基づき2.8/5",
    "一部のユーザーから出金やアカウント関連の問題が報告されていた",
  ],
  awards: [],
  restrictedCountries: [],
  userConcerns: [
    "出金処理やアカウントに関するトラブルの報告があった",
    "キュラソーライセンスのため、紛争解決は現地の法律に準拠する",
  ],
  summary: [
    "2021年11月に日本市場から撤退済み。現在、新規登録はできません。",
    "カジノとスポーツの両方が楽しめる優れたハイブリッドサイトでした。",
    "Betgamesなどユニークなライブカジノが魅力でした。",
    "豊富なプロモーションと質の高い日本語サポートが提供されていました。",
  ],
  extraLinks: [
    { text: "🔰 様々なカジノボーナスの種類を知ろう！", href: "https://casinotsu.com/bonuses" },
    { text: "💴 日本円で遊べるカジノサイトまとめ", href: "https://casinotsu.com/payment/japanese-yen-casinos" },
  ],
  faq: [],
  cta: {
    text: "CasinoTsuが推薦する他の優良カジノを探す",
    href: "https://casinotsu.com/reviews",
  },
};