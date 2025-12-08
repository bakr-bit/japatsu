import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewShuffle: ReviewPageContent = {
  hero: {
    title: "シャッフルカジノ（Shuffle）レビュー",
    subheading: "最大$2,000 (200%) ウェルカムボーナス",
    description: "2023年にローンチされた仮想通貨特化型カジノ、シャッフルカジノ（Shuffle）をCasinoTsuが徹底レビュー。スポーツベットからオリジナルゲーム、独自トークン「SHFL」の魅力まで、その全貌を解き明かします。",
    score: 4.0,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 85,
        note: "独自トークンSHFLや高い還元率のVIPプログラムで仮想通貨ユーザーから注目を集めています。",
      },
      {
        label: "規約",
        percent: 78,
        note: "ウェルカムボーナスは200%と高還元率ですが、賭け条件は入金額＋ボーナス額の35倍とやや厳しめです。",
      },
      {
        label: "操作性",
        percent: 92,
        note: "スタイリッシュなデザインとPC・モバイル共に優れた操作性。特にゲーム検索フィルター機能が便利です。",
      },
      {
        label: "サポート",
        percent: 80,
        note: "24時間ライブチャットは日本語自動翻訳で対応可能ですが、時間帯によっては英語対応となる場合があります。",
      },
    ],
    highlights: [
      "独自のトークン「SHFL」による資産運用とベットの両立",
      "最大$2,000 (200%)のCasinoTsu限定ウェルカムボーナス",
      "入金額および出金額に制限がない",
      "ハウスエッジの最大70％を還元するVIPプログラム",
      "4,000種類以上のスロットと70種類以上のスポーツベット",
    ],
    watchouts: [
      "決済方法は仮想通貨のみ（クレカでの購入は可能）",
      "Trustpilotでの評価が賛否両論（2.9/5）",
      "出金遅延やアカウント凍結に関するユーザーからの報告がある",
      "カスタマーサポートが時間帯により英語対応になる",
    ],
    avatarSrc: "/assets/casino/shuffle.png",
    avatarAlt: "Shuffleのロゴ",
  },
  payments: {
    featured: [
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "主要な仮想通貨で入出金制限なし",
      },
      {
        name: "Ethereum",
        icon: "/assets/payments/ethereum.svg",
        href: "https://casinotsu.com/payment/ethereum",
        badge: "仮想通貨",
        note: "スマートコントラクト対応の人気コイン",
      },
      {
        name: "Tether",
        icon: "/assets/payments/tether.svg",
        href: "https://casinotsu.com/payment/tether",
        badge: "ステーブルコイン",
        note: "米ドルに連動し価格が安定",
      },
      {
        name: "SHFL",
        icon: "/assets/payments/shuffle-token.svg",
        badge: "独自トークン",
        note: "カジノ独自のユーティリティトークン",
      },
    ],
    deposits: [
      { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg" },
      { name: "SHFL" },
      { name: "Tether (USDT)", icon: "/assets/payments/tether.svg" },
      { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg" },
      { name: "USD Coin (USDC)" },
      { name: "TRON (TRX)" },
      { name: "Ripple (XRP)" },
      { name: "Binance Coin (BNB)" },
      { name: "Litecoin (LTC)" },
      { name: "Dogecoin (DOGE)" },
      { name: "Polygon (MATIC)" },
      { name: "Solana (SOL)" },
      { name: "Shiba Inu (SHIB)" },
      { name: "Bonk (BONK)" },
      { name: "WIF" },
      { name: "Toncoin (TON)" },
      { name: "クレジットカード (仮想通貨購入)" },
    ],
    withdrawals: [
      { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg" },
      { name: "SHFL" },
      { name: "Tether (USDT)", icon: "/assets/payments/tether.svg" },
      { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg" },
      { name: "USD Coin (USDC)" },
      { name: "TRON (TRX)" },
      { name: "Ripple (XRP)" },
      { name: "Binance Coin (BNB)" },
      { name: "Litecoin (LTC)" },
      { name: "Dogecoin (DOGE)" },
      { name: "Polygon (MATIC)" },
      { name: "Solana (SOL)" },
      { name: "Shiba Inu (SHIB)" },
      { name: "Bonk (BONK)" },
      { name: "WIF" },
      { name: "Toncoin (TON)" },
    ],
    notes: [
      "シャッフルカジノは仮想通貨での入出金に特化しています。入金額・出金額に制限はありません。",
      "最低出金額は$50です。出金手数料は各仮想通貨のネットワーク手数料に依存します（例: USDT 3ドル）。",
      "クレジットカード（Visa, MasterCard）を利用して、MoonPayなどのサービス経由で仮想通貨を直接購入することも可能です。",
    ],
  },
  bonuses: {
    overview:
      "シャッフルカジノでは、CasinoTsu限定の豪華なウェルカムボーナスをはじめ、プレイヤーを飽きさせない多彩なキャンペーンやトーナメントが常時開催されています。",
    noDeposit:
      "【現在停止中】以前はCasinoTsu限定で20ドルの入金不要ボーナスが提供されていました。賭け条件は40倍、最大出金額は200ドルでした。再開については最新情報をご確認ください。",
    extraSpins: {
      summary: "",
      schedule: [],
      warning: "",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "200%", cap: "$2,000", code: "CasinoTsuから登録" },
    ],
    conditions: [
      "ウェルカムボーナスはCasinoTsu経由の新規登録者限定です。",
      "対象となる初回入金額は$100から$1,000です。",
      "賭け条件は、入金額とボーナス額を合計した額の35倍です。",
      "オリジナルゲーム、一部スロット、スポーツベッティング、ライブカジノで利用可能です。",
    ],
    prohibitedGames: [
      "（ウェルカムボーナスは特定ゲームを除き幅広く利用可能）",
      "（停止中の入金不要ボーナスではアキュミュレーターゲーム、チャレンジ、宝くじが禁止されていました）",
    ],
  },
  offers: [
    {
      title: "スロットチャレンジ",
      description: "指定されたスロットとベット額で、目標配当倍率を最初に達成したプレイヤーに報酬が与えられます。報酬は先着1名様のみです。",
      highlight: "腕試しに最適な先着順の賞金チャレンジ",
    },
    {
      title: "ウィークリーレース",
      description: "一週間のベット額に応じてポイントが付与され、ランキング上位者に賞金総額$100,000が分配されます。",
    },
    {
      title: "SHFLロッテリー",
      description: "独自トークン「SHFL」の保有者限定で、賞金総額180万ドルの抽選会に参加できます。",
    },
    {
      title: "スポーツ用キャッシュバック",
      description: "チャンピオンズリーグの試合が0-0で終了した場合のベット保証や、NFLのマルチベットで1つ外れた場合の保険など、スポーツファン向けのオファーも充実しています。",
    },
  ],
  facts: [
    { label: "名称", value: "シャッフルカジノ (Shuffle)" },
    { label: "ローンチ", value: "2023年" },
    { label: "運営会社", value: "Natural Nine B.V." },
    { label: "ライセンス", value: "Antillephone N.V. (Curaçao, 8048/JAZ)" },
    { label: "VIPプログラム", value: "✅" },
    {
        label: "対応言語",
        value: "日本語、英語ほか多数",
    },
    {
        label: "対応通貨",
        value: "BTC, SHFL, USDT, ETH, USDC, TRX, XRP, BNB, LTC, DOGE, MATIC, SOL, SHIB, BONK, WIF, TON",
    },
    {
      label: "ゲームタイプ",
      value:
        "スロット, ライブカジノ, スポーツベット, eスポーツ, オリジナルゲーム (Plinko, Hilo, Crash, Dice, Mines, Keno), ブラックジャック, ルーレット, ポーカー",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
            BGAMING, BetSoft, Big Time Gaming, Booming Games, Ezugi, Golden Hero, Habanero, Hacksaw Gaming, Indigo Games, NetEnt, Nolimit City, Octoplay, PG SOFT, Play’n GO, Pragmatic Play, Print Studios, Push Gaming, Quickspin, Red Tiger, Relax, Spinomenal, Thunderkick, Win Fast
        </span>
      ),
    },
    { label: "最小入金額", value: "制限無し" },
    { label: "最小出金額", value: "$50" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@shuffle.com">support@shuffle.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (24時間対応)" },
  ],
  intro: {
    paragraphs: [
      "CasinoTsuは、独自のトークン「SHFL」を導入した仮想通貨特化型カジノ、シャッフルカジノ（Shuffle）を詳細にレビューいたします。2023年にスタートしたばかりのこのカジノは、スポーツベットやオリジナルのカジノゲーム、最新のスロットまで、多様なゲーム体験を提供しています。",
      "特に注目すべきは、SHFLトークンです。これは単なるゲーム内通貨ではなく、資産運用としての側面も持ち合わせており、プレイヤーにとって魅力的な特典が用意されています。仮想通貨カジノならではの「資産運用とベットの両立」という点が、シャッフルカジノの大きな魅力と言えるでしょう。",
    ],
    ctas: [
      { text: "👉 シャッフルカジノで今すぐプレイ！", href: "https://go.japanesecasino.com/go/shuffle" },
    ],
  },
  games: [
    "シャッフルカジノでは、カジノゲームとスポーツベットの両方を楽しめます。最大RTP99%を誇る11種類のオリジナルゲーム、4,000種類以上のスロット、EvolutionやPragmatic Play提供のライブカジノが揃っています。",
    "スポーツベットではサッカーや野球など70種類以上のスポーツに加え、Counter-StrikeやLeague of Legendsなどのeスポーツにもベット可能です。ライブストリーミングやキャッシュアウト機能も利用できます。",
  ],
  features: [
    "クリプトカジノらしいスタイリッシュなサイトデザインが特徴で、PC・スマートフォンの両方で直感的に操作できます。",
    "特にゲーム検索のフィルター機能が秀逸で、プロバイダーとゲームカテゴリで絞り込めるため、膨大なゲームの中から目的のものを簡単に見つけられます。リアルタイムのベット統計やレース状況もサイト上で簡単に確認可能です。",
  ],
  editorial: {
    author: "Kotone",
    profileHref: "/authors/rina-okabe",
    hook: "単なるギャンブルに留まらない、資産運用としての可能性を秘めた次世代の仮想通貨カジノです。",
    theGoodStuff: "独自トークン「SHFL」の存在が最大の特徴です。ベットするだけでなく、トークンを保有することで資産価値の向上や限定ロッテリーへの参加が期待できます。ハウスエッジの最大70%を還元するVIPプログラムも非常に強力です。",
    theHeadsUp: "決済が仮想通貨に限定されている点は、初心者にとって最初のハードルになるかもしれません。また、Trustpilotでの評価は賛否が分かれており、出金遅延などの報告もあるため、その点は認識しておく必要があります。",
    finalThought: "仮想通貨に慣れているプレイヤーや、新しいギャンブルの形を体験したい方には、間違いなくおすすめできるプラットフォームです。まずは少額から、そのユニークな世界観を体験してみてはいかがでしょうか。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "シャッフルカジノは2023年に設立された、仮想通貨に完全特化した新しいオンラインカジノです。その最大の特徴は、単に仮想通貨でベットできるだけでなく、独自トークン「SHFL」をエコシステムの中心に据えている点にあります。これにより、プレイヤーはゲームを楽しむと同時に、トークンを通じた資産運用という新たな側面にも関わることができます。",
      "サイトの設計は非常にモダンで洗練されており、PCでもモバイルでも快適なユーザー体験を提供します。特に、数千に及ぶゲームを効率的に探せる検索フィルター機能は高く評価できます。ゲームラインナップも、4,000以上のスロット、RTP99%を誇るオリジナルゲーム、主要プロバイダーによるライブカジノ、そして70種以上のスポーツをカバーするブックメーカーと、あらゆるプレイヤーのニーズに応えるものです。",
      "ボーナス面では、CasinoTsu限定の200%最大$2,000という非常に寛大なウェルカムオファーが目を引きます。賭け条件は35倍（入金額＋ボーナス額）と標準的ですが、還元率の高さを考えれば魅力的です。さらに、ハウスエッジの最大70%を還元するというVIPプログラムは、長期的にプレイするハイローラーにとって大きなメリットとなるでしょう。",
      "一方で、仮想通貨専用という性質上、法定通貨でのプレイを望むユーザーには向きません。また、新しいカジノであるためか、Trustpilotなどの外部レビューサイトでは出金遅延やサポート対応に関する否定的な意見も見受けられます。これらは今後の運営改善に期待したい点です。",
      "総じて、シャッフルカジノは仮想通貨の可能性を最大限に活かした、先進的で野心的なプラットフォームです。いくつかの注意点はありますが、それを補って余りある独自の魅力とポテンシャルを秘めていると言えるでしょう。",
    ],
  },
  security: [
    "128ビットSSL暗h号化技術で個人情報と取引データを保護",
    "ブロックチェーン技術を活用し、改ざん不可能な取引を実現",
    "SHA-256ハッシュシステムを用いた「証明可能に公正（Provably Fair）」なシステムを導入",
    "2要素認証（2FA）によるアカウント保護",
    "第三者機関による定期的な監査",
  ],
  responsiblePlay: [
    "クールダウン: 24時間のベット制限期間を設定可能",
    "自己排除: 1日から永久まで、アカウントへのログインを制限する機能",
  ],
  complaintStats: [
    "Trustpilotでの評価: 2.9/5（657件のレビューに基づく）",
  ],
  awards: [
    "特になし",
  ],
  restrictedCountries: [
    "オーストラリア",
    "ケイマン諸島",
    "キプロス",
    "オランダ",
    "イギリス",
    "アメリカ合衆国",
    "ヴァージン諸島（イギリス領）",
  ],
  userConcerns: [
    "出金遅延やアカウント凍結に関する不満の声",
    "ゲームのRTP（還元率）に関する懸念",
    "カスタマーサポートの応答時間に関する問題",
    "ゲーム操作の公平性に関する一部での疑惑",
  ],
  summary: [
    "シャッフルカジノは、使いやすいインターフェース、豊富なゲームラインナップ、そしてユニークなボーナスやプロモーションが魅力的な最先端の仮想通貨カジノです。",
    "プレイヤーへの還元率が高いVIPプログラムや、資産運用も可能な独自トークン「SHFL」は特筆すべき点です。",
    "唯一のネックは仮想通貨のみの対応であることですが、これを機に仮想通貨カジノの利便性と可能性に触れてみる絶好の機会と言えるでしょう。",
  ],
  extraLinks: [
    { text: " wonder-casinoレビュー", href: "https://www.japanesecasino.com/reviews/wonder-casino" },
    { text: " casino-skyレビュー", href: "https://www.japanesecasino.com/reviews/casino-sky" },
  ],
  faq: [
    {
      question: "シャッフルカジノで対応している入出金方法は？",
      answer: "現在、ビットコインやイーサリアムなど17種類の仮想通貨のみに対応しています。ただし、サイト内でクレジットカードを利用して仮想通貨を購入することも可能です。",
    },
    {
      question: "シャッフルカジノのライブサポートは日本語対応ですか？",
      answer: "はい、24時間対応のライブチャットで自動翻訳機能が利用でき、日本語での問い合わせが可能です。ただし、時間帯によっては英語での対応となる場合があります。",
    },
  ],
  cta: {
    text: "シャッフルカジノで仮想通貨ゲーミングを体験する",
    href: "https://go.japanesecasino.com/go/shuffle",
  },
};