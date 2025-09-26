import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewBetsIo: ReviewPageContent = {
  hero: {
    title: "ベッツアイオー（Bets.io）レビュー",
    subheading: "最大1BTCの初回入金ボーナス＋150回フリースピン",
    description: "最大1BTCの豪華ボーナスが魅力のクリプトカジノ、ベッツアイオー（Bets.io）をCasinoTsuが徹底レビュー。ゲーム数、サポート、決済方法など、仮想通貨カジノとしての実力を詳しく解説します。",
    score: 3.9,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 69,
        note: "10,000種類以上のゲームと豪華なボーナスが魅力だが、まだ知名度は低い。今後の成長に期待。",
      },
      {
        label: "規約",
        percent: 74,
        note: "最大1BTCの初回ボーナスや賭け条件なしのフリーベットなどプロモーションが充実。好みに合わせて選択可能。",
      },
      {
        label: "操作性",
        percent: 77,
        note: "登録は簡単でサイト動作もスムーズ。一部ページの未翻訳やボーナス規約の分かりにくさは改善の余地あり。",
      },
      {
        label: "サポート",
        percent: 87,
        note: "24時間対応のチャットは翻訳ツール使用だが、丁寧かつ迅速な対応でストレスなく利用できる。",
      },
    ],
    highlights: [
      "10,000種類以上の圧倒的なゲーム数",
      "アカウント登録が非常にスムーズ",
      "数百種類以上の仮想通貨での入金に対応",
      "最大1BTCの豪華な初回入金ボーナス",
    ],
    watchouts: [
      "出金は仮想通貨のみ",
      "まだ知名度が低く、プレイヤーの口コミが少ない",
      "日本円（JPY）は使用不可",
      "ボーナス規約の日本語が分かりにくい場合がある",
    ],
  },
  payments: {
    featured: [
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://www.casinotsu.com/payment/bitcoin",
        badge: "人気",
        note: "代表的な仮想通貨で広く利用可能",
      },
      {
        name: "Ethereum",
        icon: "/assets/payments/ethereum.svg",
        href: "https://www.casinotsu.com/payment/ethereum",
        badge: "仮想通貨",
        note: "スマートコントラクトで知られる主要通貨",
      },
      {
        name: "Tether",
        icon: "/assets/payments/tether.svg",
        badge: "ステーブルコイン",
        note: "米ドルに連動し価格が安定している",
      },
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://www.casinotsu.com/payment/visa",
        badge: "仮想通貨購入",
        note: "MoonPay経由で仮想通貨を購入可能",
      },
      {
        name: "MasterCard",
        icon: "/assets/payments/mastercard.svg",
        href: "https://www.casinotsu.com/payment/mastercard",
        badge: "仮想通貨購入",
        note: "クレジットカードで手軽に資金調達",
      },
    ],
    deposits: [
      { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg", href: "https://www.casinotsu.com/payment/bitcoin" },
      { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg", href: "https://www.casinotsu.com/payment/ethereum" },
      { name: "Tether (USDT)" },
      { name: "Ripple (XRP)" },
      { name: "Litecoin (LTC)" },
      { name: "Dogecoin (DOGE)" },
      { name: "TRON (TRX)" },
      { name: "Cardano (ADA)" },
      { name: "Binance Coin (BNB)" },
      { name: "USD Coin (USDC)" },
      { name: "Bitcoin Cash (BCH)" },
      { name: "Solana (SOL)" },
      { name: "Polygon (MATIC)" },
      { name: "Shiba Inu (SHIB)" },
      { name: "その他500種類以上の仮想通貨" },
      { name: "VISA (仮想通貨購入)", icon: "/assets/payments/visa.svg" },
      { name: "MasterCard (仮想通貨購入)", icon: "/assets/payments/mastercard.svg" },
    ],
    withdrawals: [
      { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg", href: "https://www.casinotsu.com/payment/bitcoin" },
      { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg", href: "https://www.casinotsu.com/payment/ethereum" },
      { name: "Tether (USDT)" },
      { name: "Ripple (XRP)" },
      { name: "Litecoin (LTC)" },
      { name: "Dogecoin (DOGE)" },
      { name: "TRON (TRX)" },
      { name: "Cardano (ADA)" },
      { name: "Binance Coin (BNB)" },
      { name: "USD Coin (USDC)" },
      { name: "Bitcoin Cash (BCH)" },
    ],
    notes: [
      "ベッツアイオーは仮想通貨に特化したカジノです。出金は仮想通貨でのみ可能です。",
      "クレジットカード（VISA, MasterCard）は、MoonPayサービスを通じて仮想通貨を購入する形で利用できます。",
      "出金時間は平均5分～30分以内と非常に高速です。",
      "1日の最大出金額は30,000USDT（または相当額）です。",
    ],
  },
  bonuses: {
    overview:
      "ベッツアイオーは豪華なプロモーションが魅力です。特にCasinoTsu限定の初回入金ボーナスは最大1BTC＋150フリースピンと非常に強力。カジノボーナスだけでなく、賭け条件のないスポーツ向けフリーベットも用意されており、プレイスタイルに合わせて選べます。",
    noDeposit:
      "現在、ベッツアイオーではアカウント登録のみで受け取れる入金不要ボーナスは提供されていません。しかし、VIPプログラムの特典として入金不要ボーナスが提供されることがあります。",
    extraSpins: {
      summary:
        "CasinoTsu限定の初回入金ボーナスには、Gamebeat社のスロット『マックスマイナー』で利用できる150回のフリースピンが含まれています。",
      schedule: [
        "初回入金時にボーナスコード「JAPACASI」を入力すると付与されます。",
      ],
      warning: "フリースピンから得た勝利金には40倍の賭け条件が適用されます。",
    },
    welcomeRows: [
      { depositNumber: "初回 (CasinoTsu限定)", percent: "200%", cap: "1 BTC", code: "JAPACASI" },
      { depositNumber: "2回目", percent: "75%", cap: "1,000 USDT", code: "プロモーションページ参照" },
      { depositNumber: "3回目", percent: "50%", cap: "500 USDT", code: "プロモーションページ参照" },
    ],
    conditions: [
      "特に記載がない限り、ボーナスの賭け条件は40倍です（ボーナス額＋フリースピン勝利金）。",
      "ボーナス利用中の最大ベット額は$2です。これを超えるとボーナスが没収される可能性があります。",
      "初回入金ボーナスの有効期限は14日間です。",
      "2回目、3回目の入金ボーナスは有効期限がさらに短い場合があるため注意が必要です。",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "スポーツウェルカムボーナス（フリーベット）",
      description: "カジノボーナスの代わりに、初回から3回目の入金でスポーツベット用のフリーベットを選択できます。このフリーベットから得た勝利金には賭け条件がありません。",
      highlight: "勝利金に賭け条件なし！",
    },
    {
      title: "毎日最大10%キャッシュバック",
      description: "前日の損失額（20USDT以上）に応じて、毎日最大10%のキャッシュバックが受け取れます。賭け条件は3倍と緩やかです。",
      highlight: "毎日もらえる保険的ボーナス",
    },
    {
      title: "ウィークエンドリロードボーナス",
      description: "週末限定で、最大0.5 BTCと60～120回のフリースピンがもらえるリロードボーナスが提供されます。",
      highlight: "週末のプレイをさらにお得に",
    },
  ],
  facts: [
    { label: "名称", value: "Bets.io (ベッツアイオー)" },
    { label: "ローンチ", value: "2021年" },
    { label: "運営会社", value: "Bets Entertainment N.V." },
    { label: "ライセンス", value: "Internet Gaming License Validation (Anjouan License) / Curacao Gaming (情報に一部食い違いあり)" },
    { label: "VIPプログラム", value: "✅" },
    {
      label: "対応言語",
      value: "日本語、英語など",
    },
    { label: "対応通貨", value: "仮想通貨のみ (BTC, ETH, USDTなど)" },
    {
      label: "ゲームタイプ",
      value:
        "バカラ, ブラックジャック, クラップス, ゲームショー, ライブカジノ, ポーカー, ルーレット, スロット, スポーツベット, eスポーツ, オリジナルゲーム",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://www.casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://www.casinotsu.com/providers/evolution">Evolution</Link>, <Link href="https://www.casinotsu.com/providers/netent">NetEnt</Link>, <Link href="https://www.casinotsu.com/providers/nolimit-city">Nolimit City</Link>, <Link href="https://www.casinotsu.com/providers/play-n-go">Play’n GO</Link>, <Link href="https://www.casinotsu.com/providers/playtech">Playtech</Link>, <Link href="https://www.casinotsu.com/providers/quickspin">Quickspin</Link>, <Link href="https://www.casinotsu.com/providers/relax-gaming">Relax Gaming</Link>, <Link href="https://www.casinotsu.com/providers/microgaming">Microgaming</Link>, <Link href="https://www.casinotsu.com/providers/ezugi">Ezugi</Link>, <Link href="https://www.casinotsu.com/providers/habanero">Habanero</Link>, <Link href="https://www.casinotsu.com/providers/winfinity">Winfinity</Link> など80社以上
        </span>
      ),
    },
    { label: "最小入金額", value: "仮想通貨による (例: 0.00025 BTC)" },
    { label: "最小出金額", value: "仮想通貨による" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@bets.io">support@bets.io</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (24時間対応)" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "ベッツアイオー（Bets.io）は、2021年に設立された急成長中の仮想通貨専門オンラインカジノです。",
      "10,000種類を超える圧倒的なゲームセレクションには、カジノゲームだけでなくスポーツベットも含まれており、あらゆるプレイヤーのニーズに応えます。最大1BTCという破格のウェルカムボーナスをはじめ、豊富なプロモーションが用意されています。",
      "CasinoTsuでは、この注目クリプトカジノのボーナス、信頼性、サポート体制などを徹底的にレビューし、その魅力と注意点を明らかにします。",
    ],
    ctas: [
      { text: "👉 ベッツアイオーで今すぐプレイ！", href: "https://go.casinotsu.com/go/betsio:bets-io" },
      { text: "💰 CasinoTsu限定ボーナスをチェック", href: "https://www.casinotsu.com/offers/bets-io-exclusive" },
    ],
  },
  games: [
    "ベッツアイオーの最大の強みは、その圧倒的なゲーム数です。スロットだけでも8,000種類以上、ライブカジノは70テーブル以上、さらに24種類のオリジナルゲームや本格的なスポーツベットまで、合計10,000種類を超えるゲームが揃っています。",
    "EvolutionやPragmatic Playといった定番プロバイダーはもちろん、新進気鋭のスタジオまで80社以上と提携。人気機種からニッチなゲームまで、必ずお気に入りの一台が見つかるはずです。",
  ],
  features: [
    "ダークテーマを基調としたミニマリストなデザインは目に優しく、長時間のプレイでも快適です。検索機能やフィルターも充実しており、膨大なゲームの中からでも目的のゲームを素早く見つけられます。",
    "Progressive Web Application (PWA) 技術に対応しており、専用アプリをインストールすることなく、ホーム画面に追加してアプリのように手軽に利用できます。",
  ],
  editorial: {
    author: "Nanami",
    profileHref: "/authors/nanami",
    hook: "ゲーム数とボーナスの豪華さは本物。仮想通貨ユーザーなら間違いなく満足できる高品質カジノです。",
    theGoodStuff: "10,000種類以上のゲーム数は圧巻の一言。特にCasinoTsu限定の200%・最大1BTCボーナスは破格の条件です。サイトの使いやすさ、サポートの迅速さ、出金スピード、どれをとっても高水準で、ストレスなく楽しめます。",
    theHeadsUp: "出金が仮想通貨のみである点は、法定通貨をメインで使いたいプレイヤーにとってはハードルになります。また、まだ新しいカジノなのでプレイヤーの口コミが少なく、評判を判断しにくい面もあります。",
    finalThought: "仮想通貨でのプレイに慣れている、あるいはこれから始めたいプレイヤーにとって、ベッツアイオーはほぼ完璧な選択肢と言えるでしょう。質の高いサービスと豊富なゲーム体験を求めるなら、試す価値は十分にあります。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "CasinoTsuがベッツアイオーをレビューした結果、これは「仮想通貨時代の最前線を走る、完成度の高いオンラインカジノ」であると評価します。まずプレイヤーを驚かせるのは、10,000種類以上というゲームの物量です。スロット、ライブカジノ、オリジナルゲーム、そしてスポーツベットまで、これほど多様な選択肢を一つのプラットフォームで提供しているカジノは稀です。",
      "プロモーションも非常に強力で、特にCasinoTsuから登録することで得られる最大1BTCの200%初回入金ボーナスは、業界でもトップクラスのオファーと言えるでしょう。さらに、毎日受け取れるキャッシュバックや賭け条件なしのフリーベットなど、プレイヤーを飽きさせない工夫が随所に見られます。",
      "操作性も高く評価できます。アカウント登録は数分で完了し、サイトは軽快に動作します。ダークテーマのインターフェースは視覚的にも快適で、優れた検索機能が膨大なゲームライブラリの探索を容易にしています。サポートも24時間対応で、翻訳を介しても迅速かつ丁寧な対応が得られるため、安心してプレイに集中できます。",
      "唯一の注意点は、完全なクリプトカジノであるため、出金手段が仮想通貨に限られることです。しかし、これはデメリットであると同時に、平均5分～30分という超高速な出金スピードと高い匿名性というメリットももたらします。仮想通貨の取り扱いに慣れているプレイヤーにとっては、これ以上ない環境と言えるでしょう。",
      "総じて、ベッツアイオーはまだ知名度が低いながらも、その中身は業界トップクラスの実力を秘めています。仮想通貨で最高のオンラインカジノ体験を求めるなら、ベッツアイオーは間違いなくその筆頭候補です。",
    ],
  },
  security: [
    "アンジュアンまたはキュラソーのゲーミングライセンスを取得して合法的に運営",
    "2段階認証（2FA）、プロフェッショナルなファイアウォールなどの高度なセキュリティ対策を導入",
    "仮想通貨資産はオフラインのコールドウォレットで安全に管理",
    "Provably Fair（証明可能に公平）技術を一部ゲームに採用し、プレイヤーが公平性を検証可能",
  ],
  responsiblePlay: [
    "入金制限: 日・週・月単位で入金額の上限を設定可能",
    "セッションタイマー: プレイ時間を管理するためのタイマー機能",
    "自己排除オプション: 一定期間または永久的にアカウントを停止する機能",
    "セルフテストや健全なプレイを続けるためのヒントを提供（英語ページにて）",
  ],
  complaintStats: [],
  awards: [],
  restrictedCountries: [],
  userConcerns: [
    "出金方法が仮想通貨に限定されている点",
    "ライセンス情報に一部不明瞭な点があること",
    "まだ新しく、日本市場でのプレイヤーからの評判や口コミが少ないこと",
  ],
  summary: [
    "10,000種類以上のゲームとスポーツベットを提供する、非常に大規模なクリプトカジノ。",
    "最大1BTCの初回入金ボーナスをはじめ、多彩で豪華なプロモーションが魅力。",
    "サイトは使いやすく、サポートも迅速。出金スピードは平均5分～30分と非常に高速。",
    "出金は仮想通貨のみのため、仮想通貨ウォレットの準備が必要。仮想通貨ユーザーに強くおすすめできるカジノです。",
  ],
  extraLinks: [
    { text: "🔰 仮想通貨が使えるオンラインカジノ特集", href: "https://www.casinotsu.com/crypto" },
    { text: "✅ オンラインカジノの本人確認（KYC）について", href: "https://www.casinotsu.com/guides/document-verification" },
  ],
  faq: [
    {
      question: "ベッツアイオーのゲームは、公平性が保証されていますか？",
      answer: "はい。ベッツアイオーはゲーミングライセンスを取得して運営されており、提供されるゲームにはRNG（乱数発生器）が搭載されているため、公平性は保証されています。一部ゲームではProvably Fair技術も採用されています。",
    },
    {
      question: "ベッツアイオーには、入金不要ボーナスはありますか？",
      answer: "いいえ、現在ベッツアイオーではアカウント登録のみで受け取れる入金不要ボーナスは提供されていません。しかし、豪華な初回入金ボーナスやキャッシュバックが利用できます。",
    },
  ],
  cta: {
    text: "早速ベッツアイオーでプレイしてみる！",
    href: "https://go.casinotsu.com/go/betsio:bets-io",
  },
};