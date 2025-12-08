import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewWinUnique: ReviewPageContent = {
  hero: {
    title: "WinUnique（ウィンユニーク）2025年最新評価｜ボーナス・入出金・安全性を客観レビュー",
    subheading:
      "入金不要$30（要注意: 150倍）／初回100%最大$300＋FS20／最低出金$300・月上限€2,000",
    description:
      "当編集部は、WinUniqueのライセンス、ボーナス規約、入出金条件、ゲーム構成、サポート、プレイヤー保護を多面的に検証。長所・短所・実運用上のリスクを明確化し、初めての方でも判断しやすい形で整理しました。",
    score: 4.1,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 77,
        note:
          "プロモーションは豊富だが、人気プロバイダーが相対的に少なく、ラインナップの訴求力は限定的。",
      },
      {
        label: "規約",
        percent: 84,
        note:
          "通常ボーナスの賭け条件30倍は標準。一方で入金不要$30は150倍と極めて高く、最大勝利金制限・併用不可など注意点が多い。",
      },
      {
        label: "操作性",
        percent: 81,
        note:
          "検索やカテゴリは実用的。UIに古さが残るが致命的ではない。",
      },
      {
        label: "サポート",
        percent: 89,
        note:
          "日本語は平日15–23時。電話窓口あり。対応は丁寧だが、週末の日本語サポート無し。",
      },
    ],
    highlights: [
      "入金不要$30（ジャパカジ経由）と毎週ボーナスホイール、キャッシュバック等の常設オファー",
      "初回100%最大$300＋FS20（Sugar Pop想定／変動あり）",
      "ライブはEvolution／Vivo Gaming／Lucky Streak提携",
      "二段階認証・SSLなど基本的なセキュリティを表明",
    ],
    watchouts: [
      "入金不要$30の賭け条件150倍／最大勝利金＝生涯入金総額の10倍",
      "低リスクベットでの没収条項の可能性",
      "最低出金$300・週€500–€1,500・月€2,000上限、月5回目以降は出金毎€60手数料",
      "責任あるプレイの制限ツール（入金/損失/時間/ロック等）が未提供",
      "キュラソーライセンス（有効性評価に諸説）",
    ],
    avatarSrc: "/assets/casino/winunique.png",
    avatarAlt: "Winuniqueのロゴ",
  },

  intro: {
    paragraphs: [
      "WinUniqueは2016年開設、2023年8月にブランド刷新。金色の招き猫をモチーフにした演出と、週次ホイールやキャッシュバックなどボーナス企画の多さが特徴です。",
      "一方で、入金不要特典の賭け条件150倍や出金の下限・上限・手数料規定など、実務面でのハードルが目立ちます。本レビューでは、主な注意点を“事前に分かる形”で要約しました。",
    ],
    ctas: [
      { text: "賭け条件の基礎を学ぶ", href: "https://www.japanesecasino.com/guides/wagering-requirements" },
      { text: "責任あるプレイの実践", href: "https://casinotsu.com/info/responsible-gambling" },
    ],
  },

  facts: [
    { label: "名称", value: "WinUnique" },
    { label: "ローンチ", value: "2014（サイト開設は2016／2023年8月にリニューアル）" },
    { label: "ライセンス", value: "キュラソー（有効性評価に諸説あり）" },
    { label: "運営", value: "非公表（公開情報の整合に留意）" },
    { label: "VIPプログラム", value: "✅（7段階）" },
    {
      label: "ゲームタイプ",
      value: "Slots, Live Casino, Baccarat, Blackjack, Roulette, Poker, Craps, Game Shows",
    },
    {
      label: "主要プロバイダー",
      value:
        "BGaming, Betsoft, Booming, Booongo, Endorphina, Habanero, Hacksaw, Microgaming, NetEnt, Nolimit City, Playson, Playtech, Play’n GO, Pragmatic Play, Red Tiger, Rival, Merkur, Yggdrasil",
    },
    { label: "タイトル数", value: "約1,400（随時更新）" },
    { label: "ライブ提携", value: "Evolution, Vivo Gaming, Lucky Streak" },
    { label: "最小入金額", value: "$150（方法により異なる）" },
    { label: "最小出金額", value: "$300" },
    { label: "月間出金上限", value: "€2,000（週€500–€1,500目安）" },
    {
      label: "サポート",
      value:
        "ライブチャット：24時間（多言語）／日本語：平日15:00–23:00／電話・メール対応あり",
    },
    {
      label: "連絡先",
      value: (
        <span>
          電話: +81 345799465 / +44 3308088643（UK）／
          メール: <Link href="mailto:support-jp@uniquecasino.com">support-jp@uniquecasino.com</Link>,{" "}
          <Link href="mailto:support@winuniqueemail.com">support@winuniqueemail.com</Link>
        </span>
      ),
    },
    { label: "セキュリティ", value: "SSL, 2FA, RNG（暗号学的に安全と表明）" },
    { label: "モバイル", value: "iOS/Android対応（ブラウザ、専用アプリ不要）" },
  ],

  payments: {
    deposits: [
      { name: "VISA", href: "https://casinotsu.com/payment/visa" },
      { name: "Mastercard", href: "https://casinotsu.com/payment/mastercard" },
      { name: "Payz", href: "https://casinotsu.com/payment/payz" },
      { name: "MuchBetter", href: "https://casinotsu.com/payment/muchbetter" },
      { name: "eVoucher（C2C等）" },
      { name: "Crypto（BTC/BCH/LTC/ETH 等）", href: "https://casinotsu.com/crypto" },
    ],
    withdrawals: [
      { name: "銀行送金"},
      { name: "Payz" },
      { name: "MuchBetter"},
      { name: "Crypto（BTC/BCH/LTC/ETH 等" },
    ],
    notes: [
      "月に4回までは無料、5回目以降の出金ごとに€60の手数料が発生。",
      "KYC書類不備は遅延要因になり得るため、初回出金前の完了を推奨。",
      "出金ロック機能は提供されていない模様。",
    ],
  },

  bonuses: {
    overview:
      "“入金不要$30（要：高W/R）”“初回100%最大$300＋FS20”“週次ホイール”“キャッシュバック（24時間に1回、月最大4回申請）”“クイック入金ボーナス”など常時プロモが豊富。ただしボーナス併用不可、既存ボーナスは新規付与時に失効。",
    noDeposit:
      "ジャパカジ経由の入金不要チップ$30。賭け条件150倍／有効7日／対象は主にスロット（テーブル等は賭け条件寄与0%）。最大勝利金は“生涯入金総額の10倍”の制限に従う点に要注意。",
    extraSpins: {
      summary:
        "初回認証＋初回入金後に『Sugar Pop』FS20（対象機種は変動あり）。FSの賭け条件は30倍。",
      schedule: ["FSは申請制／時期や在庫で機種変更の可能性あり"],
      warning: "ボーナス併用不可のため、FSは既存ボーナス消化後に請求するのが安全。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "100%", cap: "$300", code: "" },
    ],
    conditions: [
      "ウェルカム賭け条件：ボーナス額の30倍（例：$100ボーナス→総賭け$3,000）。",
      "入金額自体は賭け条件対象外。出金申請時に保有中のボーナスは失効。",
      "最大ベット上限は特段の制限を明記せず（実運用での例外に注意）。",
      "低リスクベットに関する制限条項の可能性あり（賞金没収リスク）。",
      "Skrill／Paysafecard等、一部入金手段は対象外となる場合がある。",
    ],
    prohibitedGames: [],
  },

  offers: [
    {
      title: "週間ボーナスホイール",
      description:
        "毎週1回ホイールを回し、次回入金時のボーナス％（25〜100%）が決定。10日以内に利用が必要。",
    },
    {
      title: "キャッシュバック",
      description:
        "24時間に1度申請可。月最大4回。額は入金・損失・VIP・利用状況で変動。サポートにて提示金額を確認。",
    },
    {
      title: "クイック入金ボーナス",
      description:
        "クイック入金ごとに申請可。通常入金時も事前連絡で付与される場合あり（都度判断）。",
    },
  ],

  games: [
    "総数は約1,400。スロット・テーブル・ライブ・ゲームショーを網羅。",
    "ライブはEvolution／Vivo Gaming／Lucky Streakの3社を主軸に提供。",
    "スロットはHacksaw/Nolimit/Red Tiger/Play’n GO/NetEnt等を含むが、メジャーの一部は未対応の可能性あり。",
  ],

  features: [
    "毎週ホイールや都度ボーナスで“次の入金動機”を演出",
    "VIP7段階：誕生日特典・VIPプロモ・専任マネージャー等（上位で充実）",
    "サイトUIはやや旧式だが、検索・カテゴリ導線は実用的",
  ],

  
  security: [
    "SSL暗号化で通信保護",
    "二段階認証（2FA）に対応",
    "RNGの“暗号学的に安全”を表明（第三者監査の開示は要確認）",
  ],

  responsiblePlay: [
    "自己評価テストと自己排除は案内あり",
    "未提供：入金上限／損失上限／賭け金上限／時間制限／リアリティチェック／出金ロック",
    "セルフリミット機能が不足しているため、予算・時間の自己管理を徹底することが前提",
  ],

  complaintStats: [
    "外部レビューでは“非常に低い安全性指数（2.1/5）”や多数の苦情（賞金没収、出金遅延、アカウントロック、自己排除無視等）の指摘があるとの報告。利用可否は慎重に判断を。",
  ],

  restrictedCountries: [
    "米国（FL/MI/NJ/PA/WV含む）",
    "英国",
    "オーストラリア",
    "フランス",
    "ドイツ",
    "オランダ",
    "スペイン",
    "ロシア",
    "インド",
    "マレーシア",
    "ベトナム",
    "ベルギー",
    "スウェーデン",
    "オーストリア",
    "イスラエル",
    "ウクライナ",
    "その他多数（最新の利用規約を要確認）",
  ],

  userConcerns: [
    "入金不要$30の賭け条件150倍で実質達成困難",
    "最低出金$300・月€2,000の上限（週€500–€1,500）で高頻度出金が難しい",
    "月5回目以降の出金に€60手数料",
    "人気プロバイダーが限定的で、ゲーム幅に物足りなさ",
    "ボーナス併用不可・低リスクベット条項・最大勝利金制限など規約のハードさ",
  ],

  editorial: {
    author: "当編集部",
    profileHref: "/authors/rina-okabe",
    hook:
      "“オファーは多いが条件は厳しい”。規約の読み込みと資金管理を徹底できる方向けの中〜上級者寄りブランド。",
    theGoodStuff:
      "週次ホイールやキャッシュバックなど継続インセンティブが明確／初回100%最大$300＋FS20／ライブ3社提携。",
    theHeadsUp:
      "入金不要150倍・最大勝利金制限・高い最低出金・月上限・手数料・セルフリミット未提供など、出金・保護面のハードルが多い。",
    finalThought:
      "短期の“お試し”目的なら限定オファーの条件を理解したうえで。腰を据えて遊ぶなら、上限と手数料、責任あるプレイツールの不足を踏まえた自己管理が必須です。",
  },

  longform: {
    kicker: "包括レビュー",
    title: "ボーナス条件／出金レギュレーション／プロバイダー構成／保護体制を精査",
    paragraphs: [
      "ライセンスはキュラソー表記ながら、その有効性評価に諸説あり。サイト上ではSSL・2FA・RNGを掲げる一方、第三者監査の提示状況は限定的で、透明性の継続確認が望まれます。",
      "ボーナスは“量”が強み。入金不要$30、初回100%最大$300＋FS20、週次ホイール（25%〜最大100%）、キャッシュバック（月4回まで申請）など、機会自体は多いです。ただし、入金不要$30は賭け条件150倍と極めて高く、さらに最大勝利金を“生涯入金総額の10倍”で封じる上限も存在するため、期待値観点では厳しめ。ウェルカムやFSは30倍で標準的ですが、ボーナス併用不可と低リスクベット条項のリスクも加味が必要です。",
      "出金条件は特に慎重に。最低出金$300、週€500–€1,500、月€2,000上限とハードルが高く、さらに月5回目以降は1回あたり€60の手数料が課されます。高頻度で小刻みにキャッシュアウトする戦略とは相性が悪く、ベットサイズや資金計画を調整する必要があります。KYCは初回前に完了しておくのが安全策です。",
      "ゲーム構成は約1,400本。Hacksaw、Nolimit、Red Tiger、Play’n GO、NetEntなど人気どころは揃う一方、競合と比べると網羅性はやや控えめ。ライブはEvolution／Vivo／Lucky Streakで、標準的なテーブルは概ねカバーします。",
      "プレイヤー保護では、自己排除と自己評価テスト以外のセルフリミット系機能（入金・損失・賭け金・時間・リアリティチェック・出金ロック）が未提供で、国際標準に照らして脆弱です。外部レビューでの低評価や苦情も報告されているため、当サイトとしては“規約・上限・保護不足”を十分理解した上での慎重な利用を推奨します。",
    ],
  },

  faq: [
    {
      question: "入金不要ボーナスはありますか？",
      answer:
        "はい。ジャパカジ経由で$30の入金不要チップが提示されていますが、賭け条件150倍・7日間・最大勝利金制限など、達成難度は非常に高めです。",
    },
    {
      question: "初回入金ボーナスは？",
      answer:
        "100%最大$300に加え、FS20（機種は変動）。賭け条件はいずれも30倍。ボーナス併用不可のため、請求順序に注意してください。",
    },
    {
      question: "出金条件の要点は？",
      answer:
        "最小$300、週€500–€1,500、月€2,000上限。月5回目以降は出金毎€60の手数料。KYCは事前完了が安全です。",
    },
    {
      question: "日本語サポートの時間は？",
      answer:
        "平日15:00–23:00。その他の言語は24時間対応。電話とメール窓口も提供しています。",
    },
  ],

  cta: {
    text: "WinUniqueの最新プロモと詳細規約を確認する",
    href: "https://www.japanesecasino.com/reviews/winunique#main-content",
  },
};