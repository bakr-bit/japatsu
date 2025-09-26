import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewBetRebels: ReviewPageContent = {
  hero: {
    title: "ベットレベルズ（BetRebels）レビュー",
    subheading: "最大$600のウェルカムボーナス ＋ 65回フリースピン",
    description: "スポーツベッティングで有名なベットレベルズ（BetRebels）をCasinoTsuが徹底レビュー！業界屈指のスポーツベットセレクションに加え、豊富なカジノゲームや限定ボーナスも紹介します。",
    score: 4.1,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 80,
        note: "日本市場ではまだ成長途中だが、豊富なプロバイダーとキャンペーンで存在感を増している。",
      },
      {
        label: "規約",
        percent: 75,
        note: "賭け条件45倍はボーナス額のみに適用。一体型のため実質的な賭け条件は約25.7倍と平均的。",
      },
      {
        label: "操作性",
        percent: 84,
        note: "ゲームフィルターが使いやすく、カテゴリー分けも的確。目的のゲームを簡単に見つけられる。",
      },
      {
        label: "サポート",
        percent: 84,
        note: "丁寧な日本語サポートが利用可能。対応時間内であれば約5分でオペレーターに繋がる。",
      },
    ],
    highlights: [
      "充実したスポーツベッティングのセレクション",
      "豊富なボーナス＆キャンペーン",
      "約5,000種類ものスロットゲーム",
      "幅広い仮想通貨に対応",
      "既存プレイヤー向けの還元ボーナスが充実",
    ],
    watchouts: [
      "ライブチャットが24時間対応ではない",
      "入金上限額がやや低めに設定されている",
      "一体型アカウントのため、ボーナス利用中はリアルマネーの出金に制限がある",
      "一部の国からの利用が制限されている",
    ],
  },
  payments: {
    featured: [
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://casinotsu.com/payment/visa",
        badge: "即時反映",
        note: "主要なクレジットカードに対応",
      },
      {
        name: "MasterCard",
        icon: "/assets/payments/mastercard.svg",
        href: "https://casinotsu.com/payment/mastercard",
        badge: "人気",
        note: "世界中で利用される定番ブランド",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://casinotsu.com/payment/payz",
        badge: "Eウォレット",
        note: "スピーディーな入出金が可能",
      },
      {
        name: "Vega Wallet",
        icon: "/assets/payments/vega-wallet.svg",
        href: "https://casinotsu.com/payment/vega-wallet",
        badge: "ポイント制",
        note: "ポイントで管理する便利な決済方法",
      },
    ],
    deposits: [
      { name: "VISA", icon: "/assets/payments/visa.svg" },
      { name: "Mastercard", icon: "/assets/payments/mastercard.svg" },
      { name: "paysafecard" },
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vega-wallet" },
      { name: "Neteller", icon: "/assets/payments/neteller.svg", href: "https://casinotsu.com/payment/neteller" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg", href: "https://casinotsu.com/payment/ethereum" },
      { name: "Bank Transfer", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Dogecoin" },
      { name: "Litecoin" },
      { name: "Ripple" },
      { name: "Tether" },
      { name: "Bitcoin Cash" },
      { name: "Binance Coin" },
      { name: "Cardano" },
      { name: "Tron" },
      { name: "USD Coin" },
    ],
    withdrawals: [
      { name: "paysafecard" },
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vega-wallet" },
      { name: "Neteller", icon: "/assets/payments/neteller.svg", href: "https://casinotsu.com/payment/neteller" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg", href: "https://casinotsu.com/payment/ethereum" },
      { name: "Bank Transfer", icon: "/assets/payments/bank-transfer.svg" },
    ],
    notes: [
      "電子ウォレットの出金処理は0〜48時間、銀行送金は1〜3営業日かかります。",
      "出金申請後、通常24時間の保留期間があります。",
      "勝利金の上限が設定されている場合があり、週に€15,000、1日に€50,000、1スピンで€50,000となっています。",
    ],
  },
  bonuses: {
    overview:
      "ベットレベルズは、入金不要ボーナスから豪華なウェルカムボーナス、そして既存プレイヤー向けの豊富なキャンペーンまで、多彩なプロモーションが魅力です。カジノ用とスポーツ用でボーナスが分かれているのも特徴です。",
    noDeposit:
      "新規登録者限定で、Pragmatic Play社のスロット『Fortune Hit ‘N’ Roll』で使える20回のフリースピンが入金不要で提供されます。賭け条件は45倍です。",
    extraSpins: {
      summary: "CasinoTsu限定のウェルカムボーナスの一環として、初回入金時にPragmatic Play社の人気スロット『Gates of Olympus 1000』で使える40回のフリースピンが進呈されます。",
      schedule: [],
      warning: "",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "150% (CasinoTsu限定)", cap: "$600", code: "不要" },
    ],
    conditions: [
      "賭け条件はボーナス額の45倍ですが、アカウントシステムは一体型（混合型）です。",
      "一体型のため、ボーナス有効中はリアルマネーも出金できませんが、入金額とボーナス額を合算した資金で賭け条件を消化できるため、実質的な賭け条件は約25.7倍となります。",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "ウェルカムボーナス（スポーツ版）",
      description: "スポーツベット専用に、最大$150の100%初回入金ボーナスが用意されています。賭け条件は（入金額＋ボーナス額）の5倍です。",
      highlight: "カジノ用ボーナスとの併用も可能（要サポート連絡）",
    },
    {
      title: "マンスリーボーナス",
      description: "毎月7日までの初回入金に対し、最大$225の75%ボーナスが進呈されます。",
      highlight: "月初めがお得なリロードボーナス",
    },
    {
      title: "平日限定デイリーボーナス",
      description: "平日は毎日、入金回数に応じて最大3回まで還元率がアップするボーナス（最大$275）が獲得可能です。",
      highlight: "毎日入金するほどお得になる",
    },
    {
      title: "週末ボーナス",
      description: "毎週土日に、それぞれ最大$150の50%ボーナスが獲得できます。",
      highlight: "週末プレイヤーに嬉しいオファー",
    },
    {
      title: "ライブカジノ・キャッシュバック",
      description: "毎週のライブカジノでの損失額の8%〜14%（最大€500）がキャッシュバックされます。賭け条件は0倍です。",
      highlight: "賭け条件なしで損失額が戻ってくる",
    },
  ],
  facts: [
    { label: "名称", value: "BetRebels" },
    { label: "ローンチ", value: "2011" },
    { label: "運営会社", value: "Rebels Gaming Limited" },
    { label: "ライセンス", value: "Malta Gaming Authority (MGA/B2C/172/2009), Curacao" },
    { label: "VIPプログラム", value: "❌" },
    {
      label: "対応言語",
      value: "日本語、英語",
    },
    { label: "対応通貨", value: "EUR, CAD, INR, NZD, BRL, CLP, KRW, CHF" },
    {
      label: "ゲームタイプ",
      value:
        "Baccarat, Blackjack, Craps, Game Shows, Live Casino, Poker, Roulette, Slots, Progressive Jackpot Slots, Video Poker, Scratchcards, Keno, Bingo, Sports Betting",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://casinotsu.com/providers/betsoft">BetSoft</Link>, <Link href="https://casinotsu.com/providers/big-time-gaming">Big Time Gaming</Link>, <Link href="https://casinotsu.com/providers/fantasma-games">Fantasma</Link>, <Link href="https://casinotsu.com/providers/golden-hero-games">Golden Hero</Link>, <Link href="https://casinotsu.com/providers/microgaming">Microgaming</Link>, <Link href="https://casinotsu.com/providers/netent">NetEnt</Link>, <Link href="https://casinotsu.com/providers/playson">Playson</Link>, <Link href="https://casinotsu.com/providers/play-n-go">Play’n GO</Link>, <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://casinotsu.com/providers/quickspin">Quickspin</Link>, <Link href="https://casinotsu.com/providers/red-tiger">Red Tiger</Link>, Slingshot Studios, <Link href="https://casinotsu.com/providers/nolimit-city">Nolimit City</Link>, <Link href="https://casinotsu.com/providers/wazdan">Wazdan</Link>, <Link href="https://casinotsu.com/providers/pariplay">PariPlay</Link>, <Link href="https://casinotsu.com/providers/habanero">Habanero</Link>, <Link href="https://casinotsu.com/providers/1x2-network">1x2 Network</Link>, <Link href="https://casinotsu.com/providers/booming-games">Booming Games</Link>, <Link href="https://casinotsu.com/providers/tom-horn-gaming">Tom Horn Gaming</Link>, <Link href="https://casinotsu.com/providers/iron-dog-studios">Iron Dog Studios</Link>, <Link href="https://casinotsu.com/providers/gamomat">Gamomat</Link>, <Link href="https://casinotsu.com/providers/kalamba-games">Kalamba Games</Link>, <Link href="https://casinotsu.com/providers/oryx-gaming">Oryx Gaming</Link>
        </span>
      ),
    },
    { label: "最小入金額", value: "$10" },
    { label: "最小出金額", value: "$10 (Vega Wallet)" },
    { label: "電話サポート", value: "✅" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:cs@betrebels.com">cs@betrebels.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (10:00 CET – 20:30 CET)" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "ベットレベルズ（BetRebels）は、スポーツベッティングで高い評価を得ているオンラインカジノですが、カジノゲームのラインナップも非常に充実しています。",
      "2011年から運営されている老舗で、信頼性の高いMGAライセンスを保有。80社以上のプロバイダーから提供される約5,000種類のゲームを楽しめます。",
      "CasinoTsuでは、このベットレベルズの安全性、ボーナス、ゲームの種類、サポート体制などを詳細にチェックし、プレイヤーの皆様に役立つ情報をお届けします。",
    ],
    ctas: [
      { text: "👉 ベットレベルズで今すぐプレイ！", href: "https://go.casinotsu.com/go/betrebels" },
      { text: "🔰 オンラインカジノのはじめ方", href: "https://casinotsu.com/guides" },
    ],
  },
  games: [
    "ベットレベルズの最大の魅力の一つは、その豊富なゲームライナップです。80社以上のプロバイダーから約5,000種類以上のスロットゲームが提供されており、新しいお気に入りを見つける絶好の機会です。「3Dスロット」といったユニークなカテゴリーも存在します。",
    "ライブカジノではEvolution社のテーブルが中心に揃っており、ゲーム名と配信会社が一目でわかる見やすいインターフェースが高評価です。",
    "そして何より、ベットレベルズ自慢のスポーツベッティングでは、ライブスポーツとバーチャルスポーツの両方が楽しめ、業界屈指のセレクション数を誇ります。",
  ],
  features: [
    "ベットレベルズでは、既存プレイヤー向けのプロモーションが非常に充実しています。マンスリー、ウィークリー、デイリーと、ほぼ毎日何かしらの入金ボーナスが提供されており、長期的にプレイするプレイヤーにとって大きなメリットとなります。",
    "ライブカジノ専用のウィークリーキャッシュバックも用意されており、賭け条件なしで損失額の一部が還元されるため、ライブゲームファンには特におすすめです。",
  ],
  editorial: {
    author: "Nanami",
    profileHref: "/authors/nanami",
    hook: "スポーツベットの強豪でありながら、カジノゲームとボーナスの充実度も素晴らしいバランスの取れたサイトです。",
    theGoodStuff: "MGAライセンスという信頼性の高さに加え、約5,000種類という膨大なゲーム数、そしてほぼ毎日提供される既存プレイヤー向けボーナスは大きな魅力です。賭け条件の仕組みも実質的には良心的です。",
    theHeadsUp: "ライブチャットの対応時間が限られている点と、入金上限額がやや低めな点は注意が必要です。また、一体型ボーナスシステムは、途中で出金したいプレイヤーには不向きかもしれません。",
    finalThought: "スポーツファンはもちろん、豊富なゲームとボーナスを楽しみながら長く遊びたいカジノプレイヤーにも最適なプラットフォームです。サポート時間を把握しておけば、非常に満足度の高い体験ができるでしょう。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "ベットレベルズは、スポーツベッティングに強みを持つカジノとして知られていますが、私たちのレビューでは、カジノゲームのポートフォリオも同様に強力であることが明らかになりました。約5,000種類というスロットの数は圧巻で、多様なプロバイダーが参加しているため、プレイヤーを飽きさせません。",
      "特筆すべきは、既存プレイヤーを大切にするボーナスポリシーです。ウェルカムボーナスだけでなく、月・週・日単位で提供される豊富なリロードボーナスや、賭け条件なしのライブカジノキャッシュバックは、長期的にプレイする上での大きなインセンティブとなります。賭け条件の表記は一見厳しく見えますが、リアルマネーと合算して消化できる一体型システムのため、実質的な負担は平均的なレベルに収まっています。",
      "信頼性の面では、取得が厳しいことで知られるMGAライセンスを保有している点が大きな安心材料です。2011年からの長い運営実績も、その信頼性を裏付けています。",
      "一方で、ライブチャットの対応時間が日本時間の深夜をカバーしていない点は、一部のプレイヤーにとっては不便かもしれません。また、入金上限額が低めなので、ハイローラーの方は注意が必要です。",
      "総じて、ベットレベルズはスポーツとカジノの両方を高いレベルで楽しみたいプレイヤーにとって、非常にバランスの取れた優れた選択肢です。豊富なゲームとプロモーションを最大限に活用すれば、充実したカジノライフを送ることができるでしょう。",
    ],
  },
  security: [
    "信頼性の高いMalta Gaming Authority (MGA)ライセンスとキュラソーライセンスを保有",
    "COMODOによるSSL暗号化技術で個人情報と取引データを保護",
    "独立機関によってテストされたRNG（乱数発生器）を使用し、ゲームの公平性を保証",
  ],
  responsiblePlay: [
    "リアリティチェックリマインダー",
    "入金制限",
    "自己評価ツール",
    "自己排除",
    "責任あるギャンブルのための安全ツール提供において5/5の評価を得ている",
  ],
  complaintStats: [],
  awards: [],
  restrictedCountries: [
    "アメリカ合衆国",
    "イギリス",
    "マルタ",
    "トルコ",
    "チェコ共和国",
    "オーストラリア",
    "スロバキア",
  ],
  userConcerns: [
    "一部のユーザーからソフトウェアの動作速度が遅いとの報告あり",
    "ゲーム数が多いためウェブサイトがやや煩雑に感じられることがある",
  ],
  summary: [
    "スポーツベッティングとカジノゲームの両方が非常に充実している。",
    "既存プレイヤー向けの入金ボーナスやキャンペーンが豊富で、長期的に楽しめる。",
    "信頼性の高いMGAライセンスを保有しており、安全性は高い。",
    "入金上限額がやや低く、ライブチャットの対応時間が限られている点には注意が必要。",
  ],
  extraLinks: [
    { text: "💡 ボーナスの賭け条件について詳しく解説！", href: "https://casinotsu.com/guides/wagering-requirements" },
  ],
  faq: [
    {
      question: "ベットレベルズではどのようなゲームで遊べますか？",
      answer: "カジノ、ライブカジノ、スポーツ、ライブスポーツ、バーチャルスポーツで遊ぶことが可能です。プログレッシブジャックポットスロット、ビデオポーカー、スクラッチカード、ケノ、ビンゴなども楽しめます。",
    },
    {
      question: "CasinoTsu限定のベットレベルズからの特典はありますか？",
      answer: "はい。通常、初回入金時に最大$200の100%ボーナスのところ、CasinoTsu経由でご登録いただくと最大$600の150%ボーナスにアップグレードされます。",
    },
  ],
  cta: {
    text: "ベットレベルズで豪華ボーナスをゲットする！",
    href: "https://go.casinotsu.com/go/betrebels",
  },
};