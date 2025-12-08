import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewCybet: ReviewPageContent = {
  hero: {
    title: "CYBET（サイベット）レビュー",
    subheading: "最大$500ボーナス＋50回フリースピン",
    description: "可愛らしいマスコットが魅力の最新クリプトカジノ、CYBET（サイベット）。高RTPのオリジナルゲームやユニークなVIPプログラムなど、その全貌をCasinoTsuが徹底解説します。",
    score: 3.6,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 69,
        note: "新しいカジノで認知度はまだ低い。ゲーム数が少なく言語も英語のみだが、今後の成長に期待。",
      },
      {
        label: "規約",
        percent: 74,
        note: "ウェルカムボーナスに加え、他カジノのVIPレベルを引き継げるトランスファー機能が非常に魅力的。",
      },
      {
        label: "操作性",
        percent: 74,
        note: "シンプルで親しみやすいデザインだが、言語が英語のみなのが難点。ブラウザ翻訳の利用を推奨。",
      },
      {
        label: "サポート",
        percent: 68,
        note: "24時間対応のライブチャットはAIボットのみ。日本語に対応していないため、複雑な問題には不向き。",
      },
    ],
    highlights: [
      "可愛らしく親しみやすいサイトデザイン",
      "9種類の主要な仮想通貨に特化",
      "RTP99%の透明性が高いオリジナルゲーム",
      "他のカジノのVIPランクを引き継げるユニークな機能",
    ],
    watchouts: [
      "サイトの表示言語が基本的に英語のみ",
      "ライブチャットサポートがAIボットのみで日本語非対応",
      "ゲーム数が約700種類とまだ少ない",
      "責任あるギャンブルに関する専用ページがない",
    ],
    avatarSrc: "/assets/casino/cybet.png",
    avatarAlt: "Cybetのロゴ",
  },
  payments: {
    featured: [
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "定番",
        note: "最も有名な仮想通貨でセキュリティが高い",
      },
      {
        name: "Ethereum",
        icon: "/assets/payments/ethereum.svg",
        href: "https://casinotsu.com/payment/ethereum",
        badge: "人気",
        note: "送金速度はBTCより速い傾向",
      },
      {
        name: "Tether",
        icon: "/assets/payments/usdt.svg",
        href: "https://casinotsu.com/payment/usdt",
        badge: "ステーブル",
        note: "価格変動リスクを避けたい場合に最適",
      },
      {
        name: "Solana",
        icon: "/assets/payments/solana.svg",
        badge: "高速",
        note: "送金速度が非常に速く手数料が安い",
      },
      {
        name: "Ripple",
        icon: "/assets/payments/xrp.svg",
        badge: "高速",
        note: "頻繁な入出金や少額プレイに最適",
      },
    ],
    deposits: [
      { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg", href: "https://casinotsu.com/payment/ethereum" },
      { name: "Tether (USDT)", icon: "/assets/payments/usdt.svg", href: "https://casinotsu.com/payment/usdt" },
      { name: "Ripple (XRP)" },
      { name: "Dogecoin (DOGE)" },
      { name: "TRON (TRX)" },
      { name: "Binance Coin (BNB)" },
      { name: "Solana (SOL)" },
      { name: "Stellar (XLM)" },
    ],
    withdrawals: [
      { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg", href: "https://casinotsu.com/payment/ethereum" },
      { name: "Tether (USDT)", icon: "/assets/payments/usdt.svg", href: "https://casinotsu.com/payment/usdt" },
      { name: "Ripple (XRP)" },
      { name: "Dogecoin (DOGE)" },
      { name: "TRON (TRX)" },
      { name: "Binance Coin (BNB)" },
      { name: "Solana (SOL)" },
      { name: "Stellar (XLM)" },
    ],
    notes: [
      "CYBETは仮想通貨専用カジノです。法定通貨での入出金はできません。",
      "最低入金額は通貨により異なり、$1〜$2相当と非常に低く設定されています。",
      "最低出金額は$10相当額です。日・週・月ごとの上限は設けられていません。",
      "カジノ側の手数料は無料ですが、別途ネットワーク手数料（マイナー手数料）がかかります。",
    ],
  },
  bonuses: {
    overview:
      "CYBETは新規プレイヤー向けにウェルカムボーナスを用意しているほか、ハウスエッジの20%が還元される期間限定のレーキバックなど、ユニークで還元率の高いプロモーションが特徴です。",
    noDeposit:
      "現在、CYBETでは入金不要ボーナスは提供されていません。",
    extraSpins: {
      summary:
        "初回入金ボーナスの一部として、50回のフリースピンが付与されます。対象スロットや詳細はプロモーション規約をご確認ください。",
      schedule: [],
      warning: "フリースピンの勝利金には35倍の賭け条件が適用されます。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "100%", cap: "$500", code: "不要" },
    ],
    conditions: [
      "ウェルカムボーナスの賭け条件は（入金額＋ボーナス額）の35倍（一体型）。",
      "ボーナス獲得のための最低入金額は$10。",
      "ボーナスプレイ中の最大ベット額は$5。",
      "賭け条件の消化率: スロット100%、オリジナルゲーム5%、ライブカジノ0%。",
    ],
    prohibitedGames: [
      "ライブカジノゲームは賭け条件の消化に寄与しません（消化率0%）。",
    ],
  },
  offers: [
    {
      title: "20%レーキバックボーナス",
      description: "期間限定で、全てのゲームを対象にハウスエッジの20%が還元されるレーキバックプロモーションを実施中。勝ち負けに関わらずベット額の一部が戻ってきます。",
      highlight: "全ゲーム対象で還元率はオンカジでもトップクラス",
    },
    {
      title: "VIPトランスファー",
      description: "他のオンラインカジノで獲得したVIPランクをCYBETに引き継ぐことができるユニークなシステム。Telegramアカウントから申請可能で、最初から高いVIPレベルでプレイを開始できます。",
      highlight: "カジノを乗り換えたいハイローラーにおすすめ",
    },
    {
      title: "アフィリエイトプログラム",
      description: "友だちを紹介すると、紹介したプレイヤーの全ての賭け金に対して25%が獲得できるプログラムも期間限定で実施中です。",
    },
  ],
  facts: [
    { label: "名称", value: "Cybet (サイベット)" },
    { label: "ローンチ", value: "2024年" },
    { label: "運営会社", value: "Eskimo Adventures Ltd" },
    { label: "ライセンス", value: "Anjouan Internet Gaming License (No. ALSI-202409034-FI2)" },
    { label: "VIPプログラム", value: "✅" },
    { label: "対応言語", value: "英語" },
    { label: "対応通貨", value: "BTC, ETH, USDT, XRP, DOGE, TRX, BNB, SOL, XLM" },
    {
      label: "ゲームタイプ",
      value: "バカラ, ブラックジャック, ゲームショー, ライブカジノ, ポーカー, ルーレット, スロット, オリジナルゲーム",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://casinotsu.com/providers/bgaming">BGAMING</Link>, <Link href="https://casinotsu.com/providers/blueprint-gaming">Blueprint Gaming</Link>, <Link href="https://casinotsu.com/providers/hacksaw-gaming">Hacksaw Gaming</Link>, <Link href="https://casinotsu.com/providers/netent">NetEnt</Link>, <Link href="https://casinotsu.com/providers/nolimit-city">Nolimit City</Link>, <Link href="https://casinotsu.com/providers/pg-soft">PG SOFT</Link>, <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://casinotsu.com/providers/thunderkick">Thunderkick</Link>, Evolution, Mascot Gaming, Fugaso, Booongo, Playson
        </span>
      ),
    },
    { label: "最小入金額", value: "約$1〜$2相当" },
    { label: "最小出金額", value: "$10相当" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@cybet.com">support@cybet.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (24時間AI対応)" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "つぶらな瞳のカエルがマスコットキャラクターのCYBET（サイベット）は、最近登場したばかりの最新オンラインカジノです。",
      "完全な仮想通貨専用カジノとして、9種類の主要な暗号資産に対応。スピーディーで匿名性の高い取引が可能です。登録はメールアドレスとパスワードのみで完了し、本人確認（KYC）は原則不要です。",
      "まだ謎に包まれた部分も多いですが、このレビューではCYBETの特徴、ボーナス、安全性などを徹底的に掘り下げていきます。",
    ],
    ctas: [
      { text: "👉 CYBET公式サイトはこちら！", href: "https://go.japanesecasino.com/go/cybet" },
      { text: "🔰 仮想通貨カジノ完全ガイド", href: "https://casinotsu.com/crypto" },
    ],
  },
  games: [
    "CYBETで遊べるゲームは約700種類と、他の大手カジノに比べるとまだ少なめです。しかし、Evolution社の高品質なライブカジノや、Hacksaw Gaming、Nolimit Cityなどの人気プロバイダーのスロットは一通り揃っています。",
    "最大の特徴は、RTP（還元率）99%を誇る5種類のオリジナルゲームです。クラッシュ、ダイス、プリンコなど、シンプルながらも中毒性の高いゲームが楽しめます。さらに、これらのゲームはプレイヤー自身が公平性を検証できる「Provably Fair」システムを採用しており、完全な透明性が保証されています。",
  ],
  features: [
    "CYBETはメールアドレスとパスワードだけで数秒で登録が完了する手軽さが魅力です。本人確認（KYC）が原則不要なため、すぐにプレイを開始できます。",
    "他のカジノでのVIPランクをそのまま引き継げる「VIP Transfer」機能は、特に経験豊富なプレイヤーやハイローラーにとって画期的なシステムです。これにより、カジノを乗り換える際のデメリットが大幅に軽減されます。",
  ],
  editorial: {
    author: "Nanami",
    profileHref: "/authors/rina-okabe",
    hook: "AIサポートで人件費を削り、その分をプレイヤーに還元するという、非常に効率的な運営方針が印象的です。",
    theGoodStuff: "RTP99%のオリジナルゲームや、ハウスエッジの20%が戻ってくるレーキバックは、プレイヤーにとって大きなメリットです。運営の効率化が、直接的な高還元率につながっている点は高く評価できます。",
    theHeadsUp: "一方で、サイトが英語のみであること、ゲーム数が少ないこと、プロバイダー検索機能が使いにくいことなど、発展途上な面も目立ちます。特に、責任あるギャンブルに関するページが一切ないのは早急な改善が必要です。",
    finalThought: "CYBETは、IT技術を駆使してコストを削減し、プレイヤー還元率を高めるという新しいタイプのカジノです。まだ荒削りな部分は多いですが、そのポテンシャルは非常に高いと感じます。今後の進化から目が離せない、注目のクリプトカジノです。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "CYBETは2024年に登場した、可愛らしいカエルのマスコットとは裏腹に、非常に合理的でテクノロジー主導の運営方針を持つクリプトカジノです。CasinoTsuがレビューしたところ、その核心は「徹底的な効率化によるプレイヤーへの高還元」にあると分析します。",
      "まず、カスタマーサポートを24時間対応のAIチャットボットに一本化することで、人件費を大幅に削減しています。このコスト削減分は、RTP99%という驚異的な数値を誇るオリジナルゲームや、ハウスエッジの20%が戻ってくる期間限定のレーキバックといった形で、直接プレイヤーに還元されています。これは、勝ち負けに関わらず恩恵を受けられるため、非常に魅力的です。",
      "また、CYBETは仮想通貨に特化することで、迅速かつ匿名性の高い決済を実現しています。登録はメールアドレスとパスワードのみ、KYCも原則不要という手軽さは、クリプトユーザーにとって大きな利点です。さらに、他カジノでのVIPランクを引き継げる「VIP Transfer」は、プレイヤーの乗り換えコストを劇的に下げる画期的な試みであり、特にハイローラーから高い評価を得る可能性があります。",
      "しかし、この効率化にはトレードオフも存在します。サイトの言語は英語のみ、ゲーム数は約700種類とまだ少なく、ユーザーインターフェースにも改善の余地があります。そして最も懸念されるのは、「責任あるギャルブル」に関するページや機能が全く見当たらない点です。これはプレイヤー保護の観点から看過できない重大な欠点であり、早急な対応が求められます。",
      "総じて、CYBETは「荒削りだがポテンシャルは非常に高い」カジノです。運営の透明性（Provably Fairの採用）や還元率の高さを重視する、ある程度経験豊富なクリプトカジノユーザーにとっては、非常に魅力的な選択肢となるでしょう。ただし、日本語サポートや豊富なゲームラインナップ、充実したプレイヤー保護機能を求める初心者には、まだ時期尚早かもしれません。今後の成長と改善に大いに期待したい新星カジノです。",
    ],
  },
  security: [
    "アンジュアン島発行のゲーミングライセンス（Anjouan Internet Gaming License）を取得して運営",
    "SSL暗号化技術により、プレイヤーの個人情報や取引データを安全に保護",
    "オリジナルゲームには、プレイヤーが公平性を検証できる「Provably Fair」システムを採用",
    "ブロックチェーン技術の活用により、取引記録の改ざんを防止し、高いセキュリティと透明性を確保",
  ],
  responsiblePlay: [
    "現在、サイト内に責任あるギャンブルに関する専用ページや、自己制限ツール（入金制限、自己除外など）は見当たりません。",
    "これはプレイヤー保護の観点から大きな懸念点であり、今後の実装が強く望まれます。",
    "フッターに「ギャンブルは依存性を伴う可能性があります。責任を持ってプレイしてください。」との注意喚起のみ記載されています。",
  ],
  complaintStats: [
    "2024年にローンチした新しいカジノのため、日本語での評判や口コミはまだほとんどありません。",
    "海外のレビューサイトでは「サイトデザインがシンプルで整っている」といった肯定的な意見が見られます。",
  ],
  awards: [],
  restrictedCountries: [],
  userConcerns: [
    "ゲーム数が約700種類と少ない点",
    "ウェブサイトの表示やサポートが英語のみである点",
    "ライブチャットがAIボットによる対応のみである点",
    "責任あるギャンブルに関する機能や情報が欠如している点",
  ],
  summary: [
    "仮想通貨に特化した、原則KYC不要の最新オンラインカジノ。",
    "RTP99%のオリジナルゲームや20%のレーキバックなど、高い還元率が魅力。",
    "他カジノのVIPランクを引き継げるユニークな「VIP Transfer」機能がある。",
    "一方で、ゲーム数が少なく、サイトやサポートが英語のみ、責任あるギャンブルの対策が未整備など、発展途上の側面も多い。",
  ],
  extraLinks: [
    { text: "🔰 オンラインカジノの本人確認（KYC）について", href: "https://casinotsu.com/guides/document-verification" },
    { text: "🎲 Provably FairとRNG（乱数発生器）について", href: "https://casinotsu.com/guides/rng-explained" },
  ],
  faq: [
    {
      question: "サイベット（CYBET）とは何ですか？",
      answer: "2024年にオープンした仮想通貨専用のオンラインカジノです。9種類以上の暗号資産に対応し、原則KYC不要でプレイできます。約700種類のゲームとRTP99%のオリジナルゲームが特徴です。",
    },
    {
      question: "サイベット（CYBET）に入金不要ボーナスはありますか？",
      answer: "いいえ、現在サイベットでは入金不要ボーナスは提供されていません。代わりに、最大$500の100%初回入金ボーナスと50回のフリースピンが提供されます。",
    },
    {
      question: "サイベット（CYBET）のアカウントが凍結されたらどうすれば良いですか？",
      answer: "アカウントが凍結された場合は、登録したメールアドレスからsupport@cybet.comへ、凍結の経緯を詳しく記載して問い合わせてください。通常、数時間から1営業日以内に返信があります。",
    },
    {
      question: "サイベット（CYBET）は違法ですか？",
      answer: "いいえ、サイベットはアンジュアン島の公式ライセンス（No. ALSI-202409034-FI2）を取得して合法的に運営されています。ただし、お住まいの国の法律を遵守し、自己責任でプレイする必要があります。",
    },
    {
      question: "サイベット（CYBET）でプレイするのは危険ですか？",
      answer: "運営実績はまだ浅いですが、SSL暗号化技術やProvably Fairシステムを導入しており、基本的なセキュリティ対策は講じられています。ただし、新しいカジノである点と、仮想通貨送金は自己責任である点を理解して利用する必要があります。",
    },
    {
      question: "サイベット（CYBET）に仮想通貨以外で入金できますか？",
      answer: "いいえ、サイベットは完全な仮想通貨専用カジノであり、日本円や米ドルなどの法定通貨での入金はできません。",
    },
  ],
  cta: {
    text: "これからの進化が気になるクリプトカジノで遊んでみる！",
    href: "https://go.japanesecasino.com/go/cybet",
  },
    images: {
    casino: [
      "/assets/casino/cybet.jpg",
      "/assets/casino/cybet.png",
    ],
  },
};