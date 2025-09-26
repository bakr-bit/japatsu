import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewBetswap: ReviewPageContent = {
  hero: {
    title: "ベットスワップ（Betswap）レビュー",
    subheading: "最大360%＋220,000USDTのウェルカムボーナス",
    description: "個人間ベットエクスチェンジを可能にした革新的な仮想通貨カジノ、ベットスワップを徹底レビュー。しかし、出金トラブルやブラックリスト掲載など重大な警告も。利用は慎重に判断してください。",
    score: 3.4,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 60,
        note: "日本市場ではまだ新しいカジノで知名度は低い。今後の展開に期待がかかる。",
      },
      {
        label: "規約",
        percent: 65,
        note: "ウェルカムボーナスは仮想通貨プレイヤー向け。分離型だが賭け条件40倍はやや厳しい。",
      },
      {
        label: "操作性",
        percent: 80,
        note: "ゲーム検索は容易でスマホでも快適。しかし一部英語表記や未翻訳のFAQなど改善の余地あり。",
      },
      {
        label: "サポート",
        percent: 80,
        note: "24時間対応だが日本人オペレーターではなく翻訳を介した対応。丁寧だが品質にばらつきの報告も。",
      },
    ],
    highlights: [
      "個人間ベットが可能な次世代型スポーツベット",
      "4,000種類以上の豊富なカジノゲーム",
      "仮想通貨で受け取れる超高額ウェルカムボーナス",
      "独自のBSGGトークンによる資産運用の可能性",
    ],
    watchouts: [
      "AskGamblersに『非倫理的』としてブラックリスト掲載",
      "出金失敗、遅延、アカウント凍結などの苦情が多数報告されている",
      "出金時に追加のデポジットを要求されるとの報告あり",
      "決済方法が実質的に仮想通貨のみ",
    ],
  },
  payments: {
    featured: [
      {
        name: "USDT (Tether)",
        icon: "/assets/payments/tether.svg",
        href: "https://casinotsu.com/payment/usdt",
        badge: "仮想通貨",
        note: "出金に利用できる主要な仮想通貨",
      },
      {
        name: "Ethereum",
        icon: "/assets/payments/ethereum.svg",
        href: "https://casinotsu.com/payment/ethereum",
        badge: "仮想通貨",
        note: "主要なアルトコインでの入金に対応",
      },
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://casinotsu.com/payment/visa",
        badge: "購入用",
        note: "サイト内で仮想通貨を購入するために利用",
      },
      {
        name: "MasterCard",
        icon: "/assets/payments/mastercard.svg",
        href: "https://casinotsu.com/payment/mastercard",
        badge: "購入用",
        note: "クレジットカードで直接仮想通貨を入手",
      },
    ],
    deposits: [
      { name: "USDT", icon: "/assets/payments/tether.svg" },
      { name: "ETH", icon: "/assets/payments/ethereum.svg" },
      { name: "TRX" },
      { name: "USDC" },
      { name: "BNB" },
      { name: "BUSD" },
      { name: "BTC", icon: "/assets/payments/bitcoin.svg" },
      { name: "LTC" },
      { name: "MATIC" },
      { name: "DAI" },
      { name: "クレジットカード (仮想通貨購入)", icon: "/assets/payments/visa.svg" },
      { name: "Binance" },
      { name: "PayPal" },
      { name: "Google Pay" },
      { name: "Paysafecard" },
      { name: "Bank Wire Transfer" },
      { name: "MoonPay" },
    ],
    withdrawals: [
        { name: "USDT", icon: "/assets/payments/tether.svg" },
        { name: "ETH", icon: "/assets/payments/ethereum.svg" },
        { name: "TRX" },
        { name: "USDC" },
        { name: "BNB" },
        { name: "BUSD" },
        { name: "BTC", icon: "/assets/payments/bitcoin.svg" },
        { name: "LTC" },
        { name: "MATIC" },
        { name: "DAI" },
        { name: "PayPal" },
        { name: "Google Pay" },
        { name: "Bank Wire Transfer" },
    ],
    notes: [
      "⚠️警告: ユーザーから出金失敗、大幅な遅延、勝利後のアカウント凍結といった問題が多数報告されています。",
      "⚠️出金申請時に、追加の『認証』としてさらにデポジットを要求されるケースが報告されています。",
      "クレジットカードは直接入金ではなく、サイト内で仮想通貨を購入する形で利用されます。",
      "一部情報では出金はUSDTのみとされていますが、複数の仮想通貨や決済方法が表示されています。ご利用の際はご注意ください。",
    ],
  },
  bonuses: {
    overview:
      "ベットスワップでは、仮想通貨で受け取れる非常に高額なウェルカムボーナスが提供されています。初回から4回目の入金までが対象となり、最大で360%＋220,000USDTという破格の内容です。",
    noDeposit:
      "特定の入金不要ボーナスは提供されていません。",
    extraSpins: {
      summary: "ウェルカムボーナスにフリースピンは含まれていません。",
      schedule: [],
      warning: "",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "180%", cap: "20,000 USDT", code: "不要" },
      { depositNumber: "2回目以降", percent: "合計で最大360%", cap: "残り最大200,000 USDT", code: "不要" },
    ],
    conditions: [
      "賭け条件はボーナス額に対して40倍（分離型）。",
      "ボーナス資金はスロットとクラッシュゲームでのみ利用可能。",
      "ボーナスから得た勝利金の有効期限は7日間。",
      "ボーナス利用中の最大ベット額は2USDT。",
      "賭け条件クリア前に出金すると、ボーナスとそれによる勝利金は没収されます。",
    ],
    prohibitedGames: [
        "ライブカジノ",
        "テーブルゲーム",
        "ビデオポーカー",
    ],
  },
  offers: [
    {
      title: "Pragmatic Play Daily Wins Tournament",
      description: "賞金総額$3,500,000が用意された、Pragmatic Play主催のネットワークトーナメントに参加できます。",
      highlight: "高額賞金を狙えるデイリートーナメント",
    },
    {
      title: "スポーツベット特典",
      description: "UEFAチャンピオンズリーグの「2-UPボーナス」や、マルチベットで勝利金が最大100%増える「アキュムレーターブースト」、特定の試合で有利になる「オッズブースト」などが提供されています。",
      highlight: "スポーツベットをさらに楽しむための多彩な機能",
    },
    {
      title: "VIPプログラム",
      description: "7つのティアと144のレベルで構成されるVIPプログラムがあります。昇格するごとにウィークリーリワードやキャッシュバックなどの特典が受けられます。",
      highlight: "プレイすればするほどお得になるロイヤリティ制度",
    },
  ],
  facts: [
    { label: "名称", value: "Betswap (ベットスワップ)" },
    { label: "ローンチ", value: "2023年" },
    { label: "運営会社", value: "BSGG Labs NV" },
    { label: "ライセンス", value: "Gaming Curaçao" },
    { label: "VIPプログラム", value: "✅" },
    { label: "対応言語", value: "日本語、英語" },
    { label: "対応通貨", value: "USD, EUR, GBP, JPY (仮想通貨経由)" },
    {
      label: "ゲームタイプ",
      value: "バカラ, ブラックジャック, クラップス, ゲームショー, ライブカジノ, ポーカー, ルーレット, スロット, スポーツベットエクスチェンジ, eスポーツ",
    },
    {
      label: "ゲームプロバイダー",
      value: (
          <span>
            Pragmatic Play, Evolution Gaming, Playtech, Ezugi, NetEnt, Microgaming, Nolimit City, Hacksaw Gaming, BGaming, Novomatic, Play’n GO, Golden Hero など60社以上
          </span>
      ),
    },
    { label: "最小入金額", value: "$10" },
    { label: "最小出金額", value: "情報なし" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@betswap.gg">support@betswap.gg</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (24時間365日)" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "ベットスワップ（Betswap）は、2023年に登場した革新的な仮想通貨カジノです。通常のカジノゲームに加えて、ブロックチェーン技術を活用し、プレイヤー間で直接オッズを設定しベットできる次世代型スポーツベット「ベットエクスチェンジ」を最大の特徴としています。",
      "4,000種類を超える豊富なゲームと独自の仮想通貨「BSGGトークン」も提供し、新しいギャンブル体験を提案しています。",
      "しかし、その革新性の一方で、AskGamblersによるブラックリスト掲載や、ユーザーからの多数の出金トラブル報告など、安全性に関する重大な懸念が存在します。このレビューでは、その両側面を公平に、そして詳細に解説します。",
    ],
    ctas: [
      { text: "👉 ベットスワップでプレイする（自己責任）", href: "https://go.casinotsu.com/go/betswap:betswap?referrer_path=%2Freviews%2Fbetswap" },
      { text: "🔰 オンラインカジノの始め方をチェック", href: "https://casinotsu.com/guides" },
    ],
  },
  games: [
    "ベットスワップは3,500から4,700種類以上の膨大なゲームライブラリを誇ります。Pragmatic Play、Evolution、NetEnt、Play’n GOなど60社以上のプロバイダーと提携し、最新スロットからメガウェイズ、ボーナス購入機能付きスロットまで幅広く網羅しています。",
    "ライブカジノではEvolution、Playtech、Ezugiなどの高品質なテーブルが楽しめ、クラッシュゲームも豊富です。",
  ],
  features: [
    "ベットスワップの最大の特徴は、ブロックチェーン技術を利用した分散型スポーツベット（ベットエクスチェンジ）です。これにより、プレイヤーはブックメーカーを介さず、個人間で自由にオッズを設定してベットできます。低い手数料で、より柔軟な賭け方が可能です。",
    "非カストディアルベットに対応しており、自身の仮想通貨ウォレットから直接ベットできるため、セキュリティと透明性が高いとされています。",
  ],
  editorial: {
    author: "Kotone",
    profileHref: "/authors/kotone",
    hook: "コンセプトは未来的で非常に面白い。しかし、現実の運営には深刻な問題が山積しています。",
    theGoodStuff: "プレイヤー間でベットを取引する『ベットエクスチェンジ』は、ギャンブルの未来を感じさせる素晴らしいアイデアです。4,000を超えるゲーム数や超高額なウェルカムボーナスも魅力的です。",
    theHeadsUp: "しかし、その魅力を全て打ち消すほど、出金に関するトラブル報告が多すぎます。出金遅延ならまだしも、アカウント凍結や追加の入金を要求する手口は悪質と言わざるを得ません。AskGamblersにブラックリスト掲載されている事実も、このカジノのリスクを物語っています。",
    finalThought: "革新的な技術やアイデアも、信頼できる運営があってこそ輝きます。現状のベットスワップは、プレイヤーの資金を危険に晒す可能性が高く、残念ながら推奨することはできません。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "ベットスワップは、CasinoTsuがレビューした中でも特に評価が難しいカジノの一つです。その理由は、未来を感じさせる革新的なコンセプトと、現実の運営における深刻な信頼性の欠如という、二つの側面が同居しているからです。",
      "技術面では、ブロックチェーンを活用したP2Pのスポーツベットエクスチェンジは画期的です。これは、従来のブックメーカーが介在しない、より公平で手数料の低い賭けの形を提案するものです。4,000を超えるゲームライブラリや、最大220,000USDTという天文学的なウェルカムボーナスも、プレイヤーを引きつけるには十分な魅力を持っています。",
      "しかし、これらの輝かしい要素は、ユーザーから寄せられる無数の苦情によって影が薄れています。特に深刻なのが出金に関する問題です。『出金ができない』『アカウントを凍結された』『出金のために追加の入金を求められた』といった報告は、オンラインカジノとして最も基本的な信頼を損なうものです。さらに、権威あるレビューサイトAskGamblersが『非倫理的な取引』を理由にブラックリストに掲載しているという事実は、これらの苦情が単なる個別のトラブルではない可能性を示唆しています。",
      "結論として、ベットスワップは『ハイリスク・ハイリターン』という言葉では片付けられない、極めて高いリスクを伴うプラットフォームです。CasinoTsuとしては、プレイヤーの資金安全を最優先に考え、現状では利用を強く推奨できません。その革新的なコンセプトが健全な運営体制のもとで実現される日が来ることを願うばかりです。",
    ],
  },
  security: [
    "キュラソー政府発行のライセンス（Gaming Curaçao）を取得",
    "ゲームの公平性はRNG（乱数生成器）によって保証",
    "⚠️ AskGamblersにより『非倫理的なアフィリエイト取引』を理由にブラックリストに掲載",
  ],
  responsiblePlay: [
    "公式サイトのフッターで『責任あるギャンブル』について説明。",
    "⚠️ 自己制限機能（入金額、ベット額など）が正常に機能しないというユーザー報告が複数あり。",
    "現状では、カスタマーサポートへの連絡による自己排除（6ヶ月〜5年）が主な対策となっている。",
  ],
  complaintStats: [
    "Trustpilotでの評価: 2.4/5 ('Poor')",
    "Casino.Guruでの評価: 8.1/10 ('High Safety Index')",
    "頻繁な出金失敗、大幅な遅延、勝利後のアカウント凍結などのユーザーからの苦情が多数報告されている。",
    "勝利したベットが一方的にキャンセルされるという事例も報告されている。",
  ],
  awards: [],
  restrictedCountries: [],
  userConcerns: [
    "出金トラブル（失敗、遅延、資金の保留）",
    "勝利後の不当なアカウント凍結",
    "出金のための追加デポジット要求",
    "勝利ベットの一方的なキャンセル",
    "カスタマーサポートの対応品質のばらつき",
  ],
  summary: [
    "個人間でベットを交換できる革新的なスポーツベット機能が最大の特徴。",
    "4,000種類以上の豊富なゲームと、非常に高額なウェルカムボーナスが用意されている。",
    "しかし、AskGamblersにブラックリスト掲載されており、出金失敗やアカウント凍結など、資金の安全性に関する深刻な苦情が多数報告されている。",
    "コンセプトは魅力的だが、運営の信頼性に重大な懸念があるため、利用は極めて高いリスクを伴います。",
  ],
  extraLinks: [
    { text: "💰 仮想通貨が使えるオンラインカジノ特集", href: "https://casinotsu.com/crypto" },
  ],
  faq: [
    {
      question: "BSGGとは何ですか？",
      answer: "BSGGトークンは、ベットスワップが管理する独自の仮想通貨（暗号通貨）です。",
    },
    {
      question: "ベットスワップのウェルカムボーナスの貰い方は？",
      answer: "CasinoTsuからの登録後、初回入金で180%ボーナス（最大20,000USDT）が自動的に付与されます。その後、2回目以降の入金でさらにボーナスが進呈される仕組みです。",
    },
  ],
  cta: {
    text: "より安全な仮想通貨カジノを探す",
    href: "https://casinotsu.com/crypto",
  },
};