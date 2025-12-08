import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewGambola: ReviewPageContent = {
  hero: {
    title: "Gambola (ギャンボラ) レビュー",
    subheading: "最大$1,500のウェルカムボーナスと画期的なキャッシュリベート",
    description: "ギャンボラカジノは2022年11月14日に日本市場から撤退し、現在は完全に閉鎖されています。このレビューは、かつてNo.1リベートカジノとして人気を博した同カジノのサービス内容を記録としてまとめたものです。",
    score: 4.2,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 83,
        note: "サイトリニューアルで人気がさらに向上。シンプルで洗練されたデザインは初心者にも好評でした。",
      },
      {
        label: "規約",
        percent: 78,
        note: "業界最高水準（最大3.2%）のキャッシュリベートが最大の特長。シンプルで分かりやすいシステムでした。",
      },
      {
        label: "操作性",
        percent: 84,
        note: "PCでもモバイルでも快適に動作。日本のプレイヤーに馴染みのある決済方法も多数用意されていました。",
      },
      {
        label: "サポート",
        percent: 87,
        note: "16時間対応の日本語ネイティブサポートは質が高く、フレンドリーな対応が受けられました。",
      },
    ],
    highlights: [
      "勝っても負けてもベット額の一部が即時還元されるキャッシュリベート",
      "初回〜3回目入金まで続く最大$1,500のウェルカムオファー",
      "ベラジョン等の人気カジノを手掛けたプロ集団による洗練されたサイト",
      "質の高いネイティブ日本語サポート",
    ],
    watchouts: [
      "カジノは完全に閉鎖されており、現在利用不可",
      "VIPプログラムは提供されていなかった",
      "ライブチャットの対応時間が24時間ではなかった",
      "一部のボーナス条件が不公平であるとの報告があった",
    ],
    avatarSrc: "/assets/casino/gambola.png",
    avatarAlt: "Gambola casinoのロゴ",
  },
  payments: {
    featured: [
      {
        name: "銀行振込",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://www.casinotsu.com/payment/bank-transfer",
        badge: "人気",
        note: "日本のプレイヤーにとって安心の入金方法",
      },
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://www.casinotsu.com/payment/visa",
        badge: "手数料あり",
        note: "入金時に2%の手数料が発生",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://www.casinotsu.com/payment/payz",
        badge: "Eウォレット",
        note: "多くのオンラインカジノで採用されている定番ウォレット",
      },
      {
        name: "Vega Wallet",
        icon: "/assets/payments/vega-wallet.svg",
        href: "https://www.casinotsu.com/payment/vega-wallet",
        badge: "ポイント制",
        note: "ポイントでの入出金が便利な決済サービス",
      },
    ],
    deposits: [
      { name: "VISA", icon: "/assets/payments/visa.svg" },
      { name: "MasterCard", icon: "/assets/payments/mastercard.svg" },
      { name: "JCB" },
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://www.casinotsu.com/payment/payz" },
      { name: "Sticpay" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg", href: "https://www.casinotsu.com/payment/muchbetter" },
      { name: "Tiger Pay", icon: "/assets/payments/tiger-pay.svg" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "https://www.casinotsu.com/payment/vega-wallet" },
      { name: "国内銀行送金", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Paysafecard" },
      { name: "Skrill" },
      { name: "Rapid Transfer" },
      { name: "Trustly" },
      { name: "Sofort Banking" },
    ],
    withdrawals: [
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://www.casinotsu.com/payment/payz" },
      { name: "Sticpay" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg", href: "https://www.casinotsu.com/payment/muchbetter" },
      { name: "Tiger Pay", icon: "/assets/payments/tiger-pay.svg" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "https://www.casinotsu.com/payment/vega-wallet" },
      { name: "銀行送金", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Skrill" },
      { name: "Neteller" },
      { name: "Trustly" },
      { name: "VenusPoint" },
    ],
    notes: [
      "1日の最大出金額は€5,000、1ヶ月の最大出金額は€100,000でした。",
      "出金処理時間はEウォレットで0〜48時間、銀行送金で0〜1時間とされていましたが、承認には最大5〜7日かかる場合がありました。",
      "Pay and Playシステムにより、累計出金額が€2,000に達するまでは本人確認不要でした。",
      "VISAでの入金には2%の手数料がかかりました。",
    ],
  },
  bonuses: {
    overview:
      "⚠️重要なお知らせ⚠️ ギャンボラカジノは完全に閉鎖されています。以下の情報は過去に提供されていたボーナス内容の記録です。ギャンボラの最大の特徴は、ベットするたびに現金が還元される独自の『キャッシュリベート』システムでした。",
    noDeposit:
      "CasinoTsu経由の登録で、$30の入金不要ボーナスが提供されていました。賭け条件は7倍と非常に緩やかで、最大$100まで出金可能でした。",
    extraSpins: {
      summary: "特定のウェルカムフリースピンはありませんでしたが、キャンペーンなどで提供されることがありました。",
      schedule: [],
      warning: "",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "100%", cap: "$500", code: "不要" },
      { depositNumber: "2回目", percent: "50%", cap: "$500", code: "不要" },
      { depositNumber: "3回目", percent: "50%", cap: "$500", code: "不要" },
    ],
    conditions: [
      "ウェルカムボーナスの賭け条件は30倍でした。",
      "ボーナスの有効期限は30日間。",
      "最大ベット額はスロットで$5、テーブルゲームで$20。",
      "ボーナスでのプレイ時もキャッシュリベートは貯まる仕組みでした。",
    ],
    prohibitedGames: [
      "Wish Master", "Devils Delight", "Dead or Alive", "Dead or Alive 2", "Blood suckers", "Robin Hood", "Champion of the Track", "Big Bang", "Joker Pro", "Tower quest", "Fire joker", "Wizard of Gems", "Eye of the Kraken", "Golden ticket", "Energoonz", "Pimped", "Pearls of India", "Gemix", "Gunslinger", "Royal Masquerade", "Rage to riches", "Immortal Romance", "Scrooge", "Castle Builder", "Ragnarok", "Forsaken Kingdom", "Tomb Raider", "Peek-A-Bo", "全てのジャックポットゲーム",
    ],
  },
  offers: [
    {
      title: "キャッシュリベート",
      description: "ギャンボラの代名詞。対象ゲーム（約1,700種類）でリアルマネーでベットするたびに、勝敗に関わらずベット額の一部（最大3.2%）が即座にキャッシュとして還元されました。このキャッシュには賭け条件がなく、すぐに出金可能でした。",
      highlight: "賭け条件なし！ベットするだけで貯まる即時還元キャッシュ",
    },
    {
      title: "初回入金限定！ダブルアップ or 全額返金",
      description: "初回入金後24時間以内に、入金額を2倍に増やせなかった場合、最大$50まで入金額が全額キャッシュで返金されるというユニークな保証でした。",
      highlight: "リスクフリーで初回入金を2倍に挑戦できた",
    },
    {
      title: "各種トーナメントとキャンペーン",
      description: "日本在住プレイヤー限定のキャンペーン、抽選会、ミステリープライズ、トーナメント、ミッションなどが随時開催されていました。",
      highlight: "プレイヤーを飽きさせない豊富なイベント",
    },
  ],
  facts: [
    { label: "名称", value: "Gambola (ギャンボラ)" },
    { label: "ローンチ", value: "2019" },
    { label: "運営会社", value: "Glitnor Services Limited" },
    { label: "ライセンス", value: "Malta Gaming Authority" },
    { label: "VIPプログラム", value: "❌" },
    { label: "対応言語", value: "日本語、英語" },
    { label: "対応通貨", value: "USD" },
    {
      label: "ゲームタイプ",
      value: (
        <span>
          <Link href="https://www.casinotsu.com/baccarat">Baccarat</Link>, <Link href="https://www.casinotsu.com/blackjack">Blackjack</Link>, <Link href="https://www.casinotsu.com/craps">Craps</Link>, <Link href="https://www.casinotsu.com/game-shows">Game Shows</Link>, <Link href="https://www.casinotsu.com/live-casino">Live Casino</Link>, <Link href="https://www.casinotsu.com/poker">Poker</Link>, <Link href="https://www.casinotsu.com/roulette">Roulette</Link>, <Link href="https://www.casinotsu.com/slots">Slots</Link>
        </span>
      ),
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://www.casinotsu.com/providers/elk-studios">Elk Studios</Link>, <Link href="https://www.casinotsu.com/providers/microgaming">Microgaming</Link>, <Link href="https://www.casinotsu.com/providers/netent">NetEnt</Link>, <Link href="https://www.casinotsu.com/providers/play-n-go">Play’n GO</Link>, <Link href="https://www.casinotsu.com/providers/push-gaming">Push Gaming</Link>, <Link href="https://www.casinotsu.com/providers/quickspin">Quickspin</Link>, <Link href="https://www.casinotsu.com/providers/red-tiger">Red Tiger</Link>, <Link href="https://www.casinotsu.com/providers/yggdrasil">Yggdrasil</Link>, Evolution Gaming, Oryx, Scientific Games, Nolimit City, Leander, Thunderkick, Swintt, Big Time Gaming, Fantasma Games, Gamomat, Lightning Box, 2 By 2 Gaming, WMS, Nextgen Gaming, Barcrest, Red7, AvatarUX
        </span>
      ),
    },
    { label: "最小入金額", value: "$10" },
    { label: "最小出金額", value: "情報なし" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support-jp@gambola.com">support-jp@gambola.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "⚠️重要なお知らせ⚠️ ギャンボラカジノは2022年11月14日に日本市場から撤退し、現在は完全に閉鎖・運営停止しています。このレビューは過去の情報に基づく記録です。",
      "ギャンボラは、ベラジョンやラッキーカジノなど人気カジノの立ち上げに携わった専門家チームによって2019年に設立されました。その経験に裏打ちされた完成度の高いサイトと、業界最高水準を誇った『キャッシュリベート』システムで、瞬く間に人気カジノの仲間入りを果たしました。",
      "『No.1リベートカジノ』を掲げ、勝っても負けてもベットするだけで現金が還元されるというシンプルかつ強力なコンセプトは、初心者からハイローラーまで幅広い層のプレイヤーに支持されていました。",
    ],
    ctas: [
      { text: "🌟 CasinoTsu推薦の優良カジノをチェック", href: "https://www.casinotsu.com/reviews" },
    ],
  },
  games: [
    "ギャンボラでは、NetEnt, Microgaming, Play'n GO, Evolutionなど、25社以上のトッププロバイダーによる約2,300種類以上のゲームが提供されていました。",
    "スロットやライブバカラなど日本市場で人気の高いゲームはもちろん、Evolution社のブラックジャックテーブルではギャンボラプレイヤー専用の席が確保されるなど、快適なプレイ環境が整えられていました。",
  ],
  features: [
    "ギャンボラの最大の特徴は、ベット額の一部が賭け条件なしの現金で即時還元される『キャッシュリベート』システムでした。ゲームごとにリベート率が設定されており、サイト内で簡単に検索できる機能も備わっていました。",
    "サイトには『アイリス』という可愛らしい女性キャラクターが登場し、プレイヤーをサポート。リニューアル後の洗練されたミニマリスト的なデザインと相まって、親しみやすい雰囲気を醸し出していました。",
  ],
  editorial: {
    author: "CasinoTsu編集部",
    profileHref: "/authors",
    hook: "画期的なリベートシステムで一世を風靡しましたが、惜しまれつつ閉鎖された優良カジノでした。",
    theGoodStuff: "なんといっても賭け条件なしのキャッシュリベートが最大の魅力でした。サイトはシンプルで使いやすく、決済方法も豊富で、日本語サポートも質が高かったです。外部評価サイトでも軒並み高評価を得ていました。",
    theHeadsUp: "VIPプログラムがなかった点や、ライブチャットが24時間対応ではなかった点が数少ない弱点でした。最終的には日本市場から撤退し、完全に閉鎖されてしまったことが最も残念な点です。",
    finalThought: "ギャンボラは、プレイヤーへの還元を第一に考えた素晴らしいコンセプトのカジノでした。その閉鎖は業界にとって一つの損失ですが、その革新的な試みは記憶に残るでしょう。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説（過去の記録）",
    paragraphs: [
        "⚠️重要なお知らせ⚠️ ギャンボラカジノは2022年11月14日に日本市場から撤退し、現在は完全に閉鎖されています。以下のレビューは、同カジノが提供していたサービスを記録として残すためのものです。",
        "ギャンボラは、2019年に設立されたオンラインカジノで、その背後にはベラジョンやラッキーカジノといった成功事例を持つ経験豊富なチームが存在していました。その専門知識はサイトの隅々にまで活かされており、オープン当初から非常に完成度の高いプラットフォームとして提供されていました。サイトの日本語は自然で分かりやすく、規約の透明性や安全性も高く評価され、安定した人気を誇っていました。",
        "このカジノの代名詞となっていたのが、独自の『キャッシュリベート』システムです。これは、単なるボーナスではなく、ベットするたびに勝敗に関わらずベット額の一部が即座に現金として還元されるという画期的な仕組みでした。還元されたキャッシュには一切の賭け条件がなく、すぐに出金できるという手軽さが、初心者からハイローラーまで多くのプレイヤーを魅了しました。『No.1リベートカジノ』というキャッチフレーズは伊達ではなく、その還元率は業界でもトップクラスでした。",
        "サイトデザインも秀逸で、当初はそのユニークな名前が印象的でしたが、リニューアル後は『アイリス』というキャラクターを前面に出し、スタイリッシュかつ親しみやすいイメージを確立しました。スマートフォンでの操作性も考慮されたミニマリストなデザインは、ストレスフリーなゲーム体験を提供していました。",
        "決済方法も日本のプレイヤーが利用しやすいものが一通り揃っており、質の高いネイティブ日本語サポートが16時間体制で対応するなど、運営面での安心感も抜群でした。Casino Guruで9.5/10という非常に高い安全評価を得ていたことからも、その信頼性がうかがえます。",
        "多くのプレイヤーに愛されながらも、ギャンボラは日本市場から撤退し、その後完全に閉鎖されるという道を辿りました。その革新的なリベートシステムとプレイヤーフレンドリーな姿勢は、今なお多くのユーザーの記憶に残っています。",
    ],
  },
  security: [
    "信頼性の高いマルタゲーミングオーソリティ（MGA）のライセンスを取得して運営",
    "SSL暗号化技術を使用してプレイヤーの個人情報や取引データを保護",
    "全てのゲームで乱数発生器（RNG）を使用し、公平性を確保",
  ],
  responsiblePlay: [
    "入金制限",
    "賭け金制限",
    "損失制限",
    "時間/セッション制限",
    "自己除外",
    "クールオフ/タイムアウト",
    "リアリティチェック",
    "自己評価テスト",
    "出金ロック",
  ],
  complaintStats: [
    "一部のプレイヤーから「不公平なボーナス条件」に関する報告が過去にありました。"
  ],
  awards: [
    "Casino Guru 安全性指数: 9.5/10 (非常に高い)",
    "AskGamblers プレイヤー評価: 9.5/10",
    "VegasSlotsOnline: VSOシルバーアワード受賞",
  ],
  restrictedCountries: [
    "オーストラリア", "ベルギー", "ブルガリア", "チェコ共和国", "キプロス", "中国", "デンマーク", "エストニア", "フランス", "ジブラルタル", "ハンガリー", "香港", "イタリア", "ラトビア", "メキシコ", "モンテネグロ", "ポーランド", "ポルトガル", "ルーマニア", "シンガポール", "スロバキア", "スペイン", "トルコ", "アメリカ合衆国",
  ],
  userConcerns: [
    "ライブチャットの対応時間が限定されていた（24時間ではなかった）",
    "過去に一部のボーナス条件が不公平である可能性が指摘されていた",
  ],
  summary: [
    "ギャンボラは2022年11月に閉鎖されました。このレビューは過去の記録です。",
    "ベットするだけで現金が還元される独自の『キャッシュリベート』システムが最大の特徴でした。",
    "経験豊富なチームによる運営で、サイトの使いやすさやサポートの質が高く評価されていました。",
    "多くのプレイヤーに惜しまれつつもサービスを終了した、かつての優良カジノです。",
  ],
  extraLinks: [
    { text: "🔰 超カンタン解説！オンラインカジノのはじめ方", href: "https://www.casinotsu.com/guides" },
  ],
  faq: [
    {
      question: "ギャンボラの美少女キャラクターの名前は何でしたか？",
      answer: "アイリスちゃんです。",
    },
    {
      question: "ギャンボラのキャッシュリベートとは何でしたか？",
      answer: "リアルマネーで対象ゲームをプレイするたびに、勝敗に関わらずベット額の一部が賭け条件なしのキャッシュとして還元される仕組みでした。",
    },
    {
      question: "ギャンボラのウェルカムオファーは何でしたか？",
      answer: "初回から3回目の入金で最大$1,500のボーナスが提供されていました。また、初回入金額を24時間以内に2倍にできなければ全額返金されるというユニークな保証もありました。",
    },
  ],
  cta: {
    text: "CasinoTsuが推薦する他の優良カジノを探す",
    href: "https://www.casinotsu.com/reviews",
  },
};