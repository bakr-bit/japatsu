import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewStake: ReviewPageContent = {
  hero: {
    title: "ステークカジノ（Stake）の入金不要ボーナス・入金方法 2025年最新情報",
    subheading: "最大$2,000ボーナス & 5%レーキバック",
    description: "ステークカジノ（Stake）はカジノもスポーツブックも充実しているハイブリット型仮想通貨カジノ。賭け条件ナシのVIPボーナスやオリジナルゲームなどをCasinoTsuが徹底レビュー！",
    score: 4.2,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 90,
        note: "約20種類の仮想通貨が使え、VIP特典が豪華。キャンペーンも豊富で飽きずに長く遊べるカジノです。",
      },
      {
        label: "規約",
        percent: 74,
        note: "5%レーキバックや賭け条件なしのVIPボーナスは魅力的。ただし、アクティブでないとボーナス対象外になる可能性も。",
      },
      {
        label: "操作性",
        percent: 87,
        note: "PC・モバイル共に操作性は良好。しかし、一部サイトが英語表記である点や、決済方法が少し分かりにくい点が課題。",
      },
      {
        label: "サポート",
        percent: 84,
        note: "24時間対応の日本語ライブチャットは親切で丁寧。ただし、外国人サポートが対応する場合もあります。",
      },
    ],
    highlights: [
      "限定の豪華登録ボーナス＆入金ボーナスあり",
      "降格なしの豪華なVIP特典",
      "ハウスエッジの5%が還元されるレーキバック",
      "約20種類以上の仮想通貨が利用可能",
      "豊富なスポーツベット（35種類以上）とeスポーツ",
      "ポーカーもプレイ可能（2024年9月〜）",
    ],
    watchouts: [
      "サイトの一部が英語表記で不便な場合がある",
      "決済が仮想通貨中心で、仮想通貨未経験者には少し複雑",
      "過去にセキュリティインシデントあり（2023年）",
    ],
    avatarSrc: "/assets/casino/stake.png",
    avatarAlt: "Stakeのロゴ",
  },
  payments: {
    featured: [
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "代表的な仮想通貨で迅速な決済が可能",
      },
      {
        name: "Ethereum",
        icon: "/assets/payments/ethereum.svg",
        href: "https://casinotsu.com/payment/ethereum",
        badge: "仮想通貨",
        note: "スマートコントラクトで人気の通貨",
      },
      {
        name: "Ripple",
        icon: "/assets/payments/ripple.svg",
        href: "https://casinotsu.com/payment/ripple",
        badge: "仮想通貨",
        note: "高速な送金が特徴",
      },
      {
        name: "Tether",
        icon: "/assets/payments/tether.svg",
        href: "https://casinotsu.com/payment/tether",
        badge: "ステーブルコイン",
        note: "米ドルと連動し価格が安定",
      },
    ],
    deposits: [
      { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg" },
      { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg" },
      { name: "Litecoin (LTC)", icon: "/assets/payments/litecoin.svg" },
      { name: "Dogecoin (DOGE)" },
      { name: "Bitcoin Cash (BCH)", icon: "/assets/payments/bitcoin-cash.svg" },
      { name: "TRON (TRX)" },
      { name: "EOS" },
      { name: "Tether (USDT)", icon: "/assets/payments/tether.svg" },
      { name: "BNB" },
      { name: "Cronos (CRO)" },
      { name: "USD Coin (USDC)" },
      { name: "ApeCoin (APE)" },
      { name: "DAI" },
      { name: "Chainlink (LINK)" },
      { name: "The Sandbox (SAND)" },
      { name: "Shiba Inu (SHIB)", icon: "/assets/payments/shiba-inu.svg" },
      { name: "Uniswap (UNI)" },
      { name: "Polygon (MATIC)", icon: "/assets/payments/polygon.svg" },
      { name: "Solana (SOL)", icon: "/assets/payments/solana.svg" },
      { name: "Ripple (XRP)", icon: "/assets/payments/ripple.svg" },
      { name: "BUSD" },
      { name: "POL" },
      { name: "TRUMP" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg" },
    ],
    withdrawals: [
      { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg" },
      { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg" },
      { name: "Litecoin (LTC)", icon: "/assets/payments/litecoin.svg" },
      { name: "Dogecoin (DOGE)" },
      { name: "Bitcoin Cash (BCH)", icon: "/assets/payments/bitcoin-cash.svg" },
      { name: "TRON (TRX)" },
      { name: "EOS" },
      { name: "Tether (USDT)", icon: "/assets/payments/tether.svg" },
      { name: "BNB" },
      { name: "Cronos (CRO)" },
      { name: "USD Coin (USDC)" },
      { name: "ApeCoin (APE)" },
      { name: "DAI" },
      { name: "Chainlink (LINK)" },
      { name: "The Sandbox (SAND)" },
      { name: "Shiba Inu (SHIB)", icon: "/assets/payments/shiba-inu.svg" },
      { name: "Uniswap (UNI)" },
      { name: "Polygon (MATIC)", icon: "/assets/payments/polygon.svg" },
      { name: "Solana (SOL)", icon: "/assets/payments/solana.svg" },
      { name: "Ripple (XRP)", icon: "/assets/payments/ripple.svg" },
      { name: "BUSD" },
      { name: "POL" },
      { name: "TRUMP" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg" },
    ],
    notes: [
      "仮想通貨特化型カジノで、20種類以上の通貨に対応。仮想通貨を持っていない場合でも、サイト内でクレジットカード等を利用して購入可能です。",
      "ステークカジノ側での入出金手数料は無料ですが、ブロックチェーンのネットワーク手数料は発生します。",
      "仮想通貨の入出金に最低・最高限度額はありません。出金は通常30分以内に処理されます。",
    ],
  },
  bonuses: {
    overview:
      "ステークカジノは賭け条件なしのボーナスが豊富で、特にVIPプログラムとレーキバックは非常に魅力的です。当サイト限定のウェルカムオファーも用意しています。",
    noDeposit:
      "【CasinoTsu限定】当サイトから登録し、レベル2の本人確認を完了後、サポートに連絡すると$7の入金不要ボーナスがもらえます。賭け条件・有効期限なしで、1日1ドルずつ7日間にわたって付与されます。",
    extraSpins: {
      summary: "",
      schedule: [],
      warning: "",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "200%", cap: "$2,000", code: "コード不要（サポートへ申請）" },
    ],
    conditions: [
      "【CasinoTsu限定】初回入金ボーナスは最大$2,000の200%ボーナスです。",
      "賭け条件は40倍（入金額＋ボーナス額）で、有効期限やベット上限額はありません。",
      "注意：登録時にレーキバック用のボーナスコード『JPNCASI』を入力すると、入金不要ボーナスと初回入金ボーナスは受け取れなくなります。どちらかを選択する必要があります。",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "5%レーキバック【CasinoTsu限定コード】",
      description: "通常はVIPブロンズレベルから適用される、ハウスエッジの5%が還元されるレーキバック特典。当サイト経由で登録し、ボーナスコード『JPNCASI』を入力すると、登録直後から有効になります。賭け条件はありません。",
      highlight: "コード入力で登録直後からレーキバックが有効に！",
    },
    {
      title: "週次・月次ボーナス",
      description: "VIPレベルがブロンズに達すると、毎週土曜日に週次ボーナスが進呈されます。ゴールドレベル以上になると、毎月15日ごろに月次ボーナスももらえます。どちらも賭け条件はありません。",
    },
    {
      title: "デイリーレース & ウィークリーラッフル",
      description: "毎日$100,000、毎週$75,000の賞金プールをかけた大規模なトーナメントが常時開催されています。ベットするだけで自動的に参加できます。",
    },
  ],
  facts: [
    { label: "名称", value: "Stake" },
    { label: "ローンチ", value: "2017年" },
    { label: "運営会社", value: "Medium Rare N.V." },
    { label: "ライセンス", value: "Antillephone License Validation (キュラソー), キュラソー・ゲーミング・コントロール・ボード (GCB)" },
    { label: "VIPプログラム", value: "✅（全15レベル、降格なし）" },
    { label: "対応言語", value: "日本語、英語ほか多数" },
    { label: "対応通貨", value: "JPY, USD, EUR, BTC, ETH, LTCなど20種類以上の仮想通貨" },
    {
      label: "ゲームタイプ",
      value:
        "バカラ、ブラックジャック、クラップス、ゲームショー、ライブカジノ、ポーカー、ルーレット、スロット、スポーツベット、オリジナルゲーム",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="/providers/bgaming">BGAMING</Link>, <Link href="/providers/big-time-gaming">Big Time Gaming</Link>, <Link href="/providers/blueprint-gaming">Blueprint Gaming</Link>, <Link href="/providers/booming-games">Booming Games</Link>, <Link href="/providers/elk-studios">Elk Studios</Link>, <Link href="/providers/endorphina">Endorphina</Link>, <Link href="/providers/fantasma-games">Fantasma</Link>, <Link href="/providers/golden-hero-games">Golden Hero</Link>, <Link href="/providers/habanero">Habanero</Link>, <Link href="/providers/hacksaw-gaming">Hacksaw Gaming</Link>, Lucksome, <Link href="/providers/netent">NetEnt</Link>, <Link href="/providers/nolimit-city">Nolimit City</Link>, <Link href="/providers/playson">Playson</Link>, <Link href="/providers/play-n-go">Play’n GO</Link>, <Link href="/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="/providers/quickspin">Quickspin</Link>, <Link href="/providers/red-tiger">Red Tiger</Link>, <Link href="/providers/relax-gaming">Relax</Link>, <Link href="/providers/spinomenal">Spinomenal</Link>, <Link href="/providers/thunderkick">Thunderkick</Link>, Evolution Gaming, Live88
        </span>
      ),
    },
    { label: "ゲーム数", value: "3,000種類以上" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@stake.com">support@stake.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (24時間日本語対応)" },
  ],
  intro: {
    paragraphs: [
      "ステークカジノ（Stake.com）は2017年に誕生した、仮想通貨が豊富に使えるオンラインカジノです。イギリスのサッカークラブ「エバートンFC」やF1チームの公式サポーターになるなど、スポーツ界での知名度も抜群です。",
      "カジノゲームはもちろん、35種類以上のスポーツベット、さらには人気のポーカーまで楽しめます。",
      "特に、賭け条件なしで即現金化できるVIPボーナスや、ベット額の一部が戻ってくるレーキバックは非常に豪華。サイトの一部に分かりづらい部分もありますが、カジノとスポーツブックの両方で本格的に遊びたいプレイヤーに最適なプラットフォームです。",
    ],
    ctas: [
      { text: "👉ステークカジノはこちら！", href: "https://go.japanesecasino.com/go/stake" },
      { text: "💫時代はやっぱり仮想通貨！", href: "https://www.japanesecasino.com/crypto" },
    ],
  },
  games: [
    "ステークカジノでは3,000種類以上のカジノゲームと、35種類以上のスポーツブックを提供しています。スロットではPlay'n GOやPragmatic Playなどの人気プロバイダーが揃い、中にはRTP（還元率）が98%に強化された『Sweet Fiesta』のような独占ゲームもあります。",
    "ライブカジノはEvolution、Pragmatic Play、Live88の3社を導入。さらに、ダイス、マイン、クラッシュなど、RTP99%を誇る20種類以上のオリジナルゲームも大きな魅力です。",
    "2024年9月からはポーカーも導入され、キャッシュゲームやトーナメントを楽しめるようになりました。",
  ],
  features: [
    "仮想通貨に特化しており、ビットコインやイーサリアムなど20種類以上の通貨で直接ベットできます。サイト内で仮想通貨を購入する機能もあり、初心者でも安心です。",
    "VIPプログラムは一度昇格すれば降格することがなく、レベルに応じて賭け条件なしのボーナスがもらえます。長期的にプレイするほどお得になるシステムです。",
    "F1チームや有名アスリート、ラッパーのドレイクなど、世界的なスポンサーシップを通じて高いブランド力と信頼性を築いています。",
  ],
  editorial: {
    author: "Mayumi",
    profileHref: "/authors/rina-okabe",
    hook: "仮想通貨ユーザーなら間違いなくメインカジノ候補！賭け条件なしのVIP特典は業界トップクラスです。",
    theGoodStuff: "降格なしのVIPプログラムと賭け条件なしのボーナスは、長く遊ぶプレイヤーにとって最高の環境です。RTPが99%のオリジナルゲームや98%の強化版スロットなど、プレイヤー還元への意識が非常に高い点が素晴らしいです。",
    theHeadsUp: "仮想通貨に慣れていないと、最初の入出金で戸惑うかもしれません。また、限定ボーナス（ウェルカムボーナスかレーキバックか）を選択する必要があるため、登録時に自分のプレイスタイルを考える必要があります。",
    finalThought: "初期のハードルを越えれば、これほどプレイヤーにとって有利な条件が揃ったカジノは他にありません。特にハイローラーや長期的なプレイを考えている方には、絶対的におすすめです。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "2017年に設立されたステークカジノは、仮想通貨オンラインカジノの先駆者として確固たる地位を築いています。キュラソーのライセンスの下で合法的に運営されており、2段階認証やStake Vaultといった強固なセキュリティ対策でプレイヤーの資産を保護しています。2023年にハッキング被害に遭いましたが、プレイヤー資金に影響はなかったと報告されており、その後の対応も迅速でした。",
      "最大の魅力は、プレイヤーへの還元を重視したボーナスシステムです。特にVIPプログラムは秀逸で、賭け額に応じてレベルが上がり、一度昇格すれば降格することはありません。レベルアップボーナスや週次・月次ボーナスには賭け条件がなく、即座に出金可能です。さらに、当サイト限定コードを使えば登録直後からハウスエッジの5%が還元されるレーキバックも有効になります。",
      "ゲームのラインナップも非常に豊富で、3,000種類以上のスロットやライブカジノに加え、RTPが99%に設定された独自のオリジナルゲームを20種類以上提供しています。さらに、35種類以上の競技を扱う本格的なスポーツブックや、2024年9月に開設されたポーカールームも備えており、あらゆるギャンブルファンを満足させるでしょう。",
      "決済は仮想通貨が中心ですが、サイト内でクレジットカードなどを使って簡単に仮想通貨を購入できるため、仮想通貨を持っていないプレイヤーでもスムーズに始められます。24時間対応の日本語サポートも完備されており、初心者でも安心してプレイできる環境が整っています。",
      "総じて、ステークカジノは仮想通貨の利便性を最大限に活かし、プレイヤーに長期的な価値を提供する優れたプラットフォームです。いくつかの点で初心者には少し複雑に感じられるかもしれませんが、その価値は十分にあります。",
    ],
  },
  security: [
    "キュラソー政府公認のAntillephone License Validationライセンスを取得",
    "SSL暗号化技術によりプレイヤーの個人情報や取引データを保護",
    "RNG（乱数発生器）によりゲームの公平性を保証",
    "二段階認証（2FA）や資金保管用のStake Vault機能を提供",
    "Trustpilotでの評価は3.7つ星（高評価レビュー約65%）",
  ],
  responsiblePlay: [
    "損失限度額設定: 期間内の損失額に上限を設定可能",
    "賭け金限度額設定: 期間内の賭け金総額に上限を設定可能",
    "自己排除: 一定期間または無期限でアカウントを停止",
    "予算計算機: 収入と支出を管理する家計簿機能",
  ],
  complaintStats: [
    "Trustpilotでの評価: 3.7 / 5.0 (5つ星評価が約65%)",
  ],
  awards: [],
  restrictedCountries: [],
  userConcerns: [
    "決済の複雑さ: 仮想通貨に慣れていないユーザーには入出金が難しく感じられる可能性",
    "サイトのローカライズ: 一部のページや規約が英語のままである",
    "勝率に関する口コミ: 一部のユーザーから「勝てない」との声も挙がっている（これはギャンブルの性質上、どのカジノでも見られる意見です）",
    "過去のセキュリティインシデント: 2023年のハッキング事件を懸念する声",
  ],
  summary: [
    "VIP特典が豪華で、賭け条件なしのボーナスやレーキバックなど、プレイヤーへの還元が手厚いのが最大の魅力です。RTPが強化されたスロットや高RTPのオリジナルゲームもお得感を高めています。",
    "カジノ、ライブカジノ、スポーツ、ポーカーと、幅広いゲームを一つのプラットフォームで楽しめるのも強みです。",
    "仮想通貨決済がメインである点や、サイトの一部が英語である点は初心者にとって少しハードルになるかもしれませんが、24時間対応の日本語サポートがそれを補っています。",
    "仮想通貨に慣れているプレイヤーや、長期的に遊ぶメインカジノを探している方には、最適な選択肢の一つです。",
  ],
  extraLinks: [
    { text: "🔰 オンラインカジノの本人確認（KYC）について", href: "https://www.japanesecasino.com/guides/document-verification" },
  ],
  faq: [
    {
      question: "ステークカジノではスポーツベットもプレイできますか？",
      answer: "はい、ステークカジノではカジノゲームとスポーツベットの両方を楽しむことが可能です。",
    },
    {
      question: "オリジナルゲームの還元率はどれくらいですか？",
      answer: "ゲームによりますが、非常に高い還元率を誇ります。例えば、Dice、Crash、MinesといったゲームのRTPは99%に設定されています。",
    },
    {
      question: "ステークカジノのボーナスコードは？",
      answer: "限定レーキバックを受け取るためのボーナスコードは【JPNCASI】です。ただし、このコードを使用すると入金不要ボーナスと初回入金ボーナスが受け取れなくなるため、どちらのオファーを利用するかを登録前に決める必要があります。",
    },
    {
      question: "ステークカジノでは、銀行振込による入出金はできますか？",
      answer: "いいえ、直接の銀行振込には対応していません。決済は仮想通貨のみですが、サイト内でクレジットカードや銀行振込を利用して仮想通貨を購入することは可能です。",
    },
  ],
  cta: {
    text: "ステークカジノに登録して限定ボーナスをゲット！",
    href: "https://go.japanesecasino.com/go/stake",
  },
};