import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewWsmCasino: ReviewPageContent = {
  hero: {
    title: "WSMカジノ（WSM Casino）の評判・入出金・ボーナス徹底解説【2025年版】",
    subheading: "“ミームコイン × オンラインカジノ”という新機軸。WSMトークン連携の仮想通貨特化ブランド",
    description:
      "ミームコイン由来のWSMカジノは、仮想通貨決済にフル対応し、5,000種超のゲームとスポーツブックを提供。ライセンス・信頼性・ボーナス・入出金・ゲーム・サポートまで、CasinoTsuが網羅レビュー。",
    score: 3.8,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 73,
        note: "WSMミームコイン発の話題性でクリプト層の認知は高め。ゲーム充実度はカテゴリーによってムラも。",
      },
      {
        label: "規約",
        percent: 74,
        note: "初回200%最大$25,000は豪華だがW/R60x〜75xと厳しめ。プロモは豊富で使い分け推奨。",
      },
      {
        label: "操作性",
        percent: 77,
        note: "シンプルUI。検索は名称/プロバイダー中心でフィルター弱め。初心者は目的ゲームを探しにくい場面も。",
      },
      {
        label: "サポート",
        percent: 80,
        note: "24時間ライブチャット（翻訳で日本語可）とメール。AIボット経由で人に繋がりづらいことがある。",
      },
    ],
    highlights: [
      "ミーム×クリプト発のユニークな世界観と$WSMトークン連携",
      "仮想通貨24種対応／購入オンランプ（MoonPay/Changelly）も案内",
      "5,000種以上のカジノ＋スポーツブック対応",
      "VIPで毎週CB最大25%や限度額UPなど特典",
    ],
    watchouts: [
      "ウェルカムW/Rが高い（60x〜75x）",
      "法定通貨は非対応（仮想通貨専用）",
      "ゲーム検索・細分化が弱い／一部ページは英語のみ",
      "未消化出金に8%手数料（最低$4）等の注意点あり",
    ],
    avatarSrc: "/assets/casino/wsm-casino.png",
    avatarAlt: "Wsm casinoのロゴ",
  },

  payments: {
    featured: [
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://www.casinotsu.com/payment/bitcoin",
        badge: "定番",
        note: "最低入金0.0001 BTC／入金即時・手数料なし（ネットワーク手数料別）。",
      },
      {
        name: "Ethereum",
        icon: "/assets/payments/ethereum.svg",
        href: "https://www.casinotsu.com/payment/ethereum",
        badge: "人気",
        note: "最低入金0.001 ETH／即時反映想定。",
      },
      {
        name: "Tether (USDT)",
        icon: "/assets/payments/tether.svg",
        badge: "安定通貨",
        note: "最低入金5 USDT／対応ネットワークは入金画面で要確認。",
      },
      {
        name: "Ripple (XRP)",
        icon: "/assets/payments/ripple.svg",
        badge: "高速",
        note: "即時〜短時間で反映されやすい高速チェーン。",
      },
      {
        name: "Shiba Inu (SHIB)",
        icon: "/assets/payments/shiba-inu.svg",
        badge: "ミーム系",
        note: "ミームコインにも幅広く対応。",
      },
    ],
    deposits: [
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg" },
      { name: "Bitcoin Cash", icon: "/assets/payments/bitcoin-cash.svg" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg" },
      { name: "Polygon", icon: "/assets/payments/polygon.svg" },
      { name: "Ripple (XRP)", icon: "/assets/payments/ripple.svg" },
      { name: "Shiba Inu (SHIB)", icon: "/assets/payments/shiba-inu.svg" },
      { name: "Solana", icon: "/assets/payments/solana.svg" },
      { name: "Tether (USDT)", icon: "/assets/payments/tether.svg" },
      { name: "USD Coin (USDC)" },
      { name: "Litecoin" },
      { name: "Dogecoin" },
      // …他、対応は合計24通貨（WSMトークン含む）
    ],
    withdrawals: [
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg" },
      { name: "Tether (USDT)", icon: "/assets/payments/tether.svg" },
      { name: "USD Coin (USDC)" },
      { name: "Litecoin" },
      { name: "Dogecoin" },
      { name: "Ripple (XRP)", icon: "/assets/payments/ripple.svg" },
      // …他、主要仮想通貨に対応
    ],
    notes: [
      "法定通貨は非対応。仮想通貨専用（オンランプはMoonPay/Changelly経由）。",
      "最低入金（例）：BTC 0.0001／ETH 0.001／USDT 5など（即時反映想定）。",
      "最低出金（例）：BTC 0.0002 or €10相当、ETH/USDT/USDC/LTC/DOGEは原則€10〜。",
      "出金速度：即時〜1時間目安（混雑時は遅延あり）。",
      "未消化（入金額に対する最低賭け要件未達）で出金する場合、8%手数料（最低$4）。",
      "1日の出金上限€10,000／週€50,000／月€500,000。VIPは月€50,000（ケースにより増額可）。",
      "チャージバック等の不正が疑われる場合、$54の管理手数料が科される場合あり。",
    ],
  },

  bonuses: {
    overview:
      "初回入金200%で最大$25,000＋入金額に応じたフリースピン＆フリーベットが魅力。W/Rは高めだが、Drops & Winsなど外部連動プロモも多彩。",
    noDeposit: "現状“入金不要ボーナス”の定常提供はなし。プロモコード（例：VIPGRINDERS）で特典付与の可能性あり。",
    extraSpins: {
      summary:
        "Best Walletから$50以上入金でフリースピン50回（1回$1）＝$50相当。FSの賭け条件は35x。",
      schedule: ["ウェルカム後も利用可", "FS対象：Hacksaw『Chaos Crew 2』"],
      warning: "FSは付与から7日有効など期間に注意（サイト規約参照）。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "200%", cap: "$25,000", code: "" },
    ],
    conditions: [
      "ウェルカム賭け条件：ボーナス額$10,000以下は60x、$10,000超は75x。",
      "ボーナスは6x進捗ごとに10%ずつ解放される段階クリア型。",
      "FSの賭け条件：35x。フリーベットはW/Rなし。",
      "登録後7日以内に入金・獲得、獲得後7日以内に消化が必要（目安）。",
    ],
    prohibitedGames: [
      "一部ゲームショーや高RTPバリエーションなど、W/R対象外/寄与率低のタイトル（規約要確認）",
    ],
  },

  offers: [
    {
      title: "ウェルカム：200% 最大$25,000",
      description:
        "進捗に応じた段階解放型。W/Rは60x〜75xと高めだが総額は特大。入金額に応じFS＆フリーベット付与。",
    },
    {
      title: "Best Wallet入金でFS 50回",
      description: "1スピン$1の高額FS。W/R35x。ウェルカム後に追加で活用可能。",
    },
    {
      title: "Drops & Wins ほか外部連動",
      description:
        "Pragmatic/BGamingの大型プール参戦。リーダーボードやキャッシュドロップに日次・週次で参加可。",
    },
    {
      title: "ミッドウィークリロード",
      description: "水曜に既存向け最大$500＋50FSのマッチボーナス提供（時期により内容変動）。",
    },
    {
      title: "VIP特典",
      description:
        "毎週最大25%キャッシュバック／最大$100,000週次ボーナス／限度額＆速度UP／専属ホストほか。",
    },
  ],

  facts: [
    { label: "名称", value: "WSM Casino（WSMカジノ）" },
    { label: "ローンチ", value: "2023" },
    {
      label: "ライセンス",
      value: "Curacao 8048/JAZ、Anjouan Gaming License、Costa Rica（運営関連）",
    },
    { label: "運営会社", value: "MIBS N.V.（関連：Igloo Ventures SRL）" },
    { label: "VIPプログラム", value: "✅（段階制・専属ホスト・CB・限度額UP等）" },
    {
      label: "ゲームタイプ",
      value:
        "Slots, Live Casino, Baccarat, Blackjack, Roulette, Poker, Game Shows, Crash, Mines, Plinko, Bingo, Video Poker, Sportsbook",
    },
    {
      label: "ゲームプロバイダー（例）",
      value:
        "Evolution, Pragmatic Play, NetEnt, Red Tiger, Play’n GO, Relax, Hacksaw, BTG, Ezugi, Playtech, Quickspin, Wazdan, Kalamba, SmartSoft, Spribe ほか90社以上",
    },
    { label: "法定通貨対応", value: "❌（仮想通貨専用）" },
    { label: "メール", value: "support@wsmcasino.com" },
    { label: "ライブチャット", value: "✅（24時間／翻訳で日本語可）" },
  ],

  longform: {
    kicker: "WSMトークン連携×クリプト時代の新顔",
    title: "“ミーム文化”発の個性派クリプトカジノ。上級者向け高還元オファーと多彩なプロモが魅力",
    paragraphs: [
      "WSMカジノはミームコイン『WSM（Wall Street Memes）』をルーツに持つクリプト特化カジノ。$WSMトークンと機能連携し、5,000超のゲームに加えてスポーツブックも備える拡張型プラットフォームです。",
      "ライセンスはCuracao 8048/JAZ を中心に複数取得。運営はMIBS N.V.。RNG/Provably Fair対応タイトルを含み、基本的なセキュリティ・公正性の要件を満たしています。",
      "ウェルカムは200%最大$25,000と特大ですが、賭け条件は60x〜75xと重め。Best Wallet経由FS50回（$50相当）やDrops & Wins等、随時のプロモを取り混ぜて“合うものだけ”を選ぶ戦略が大切です。",
      "入出金は仮想通貨専用。オンランプでその場購入も可能ですが、出金には自前ウォレットが必要。未消化での出金には8%手数料などのルールがあるため、1x以上の賭け消化を意識すると良いでしょう。",
      "UIは軽快でミニマル。ただし検索/フィルタの粒度が粗く、初心者は目当てのタイトルに辿り着きにくいことも。主要人気プロバイダーは概ねカバーする一方、一部カテゴリの厚みにムラがあります。",
      "VIPは毎週CB最大25%や週次ボーナス、限度額UP、専属ホスト等を用意。高回転で遊ぶ上級者にとって価値が出やすい仕様です。",
      "$WSMトークン保有/ステーキングや買い戻しコミット（純ゲーム収益の≥10%を$WSMで購入）など、トークン経済との接続もユニーク。ミーム文化とiGamingを掛け合わせた“今っぽい”体験を志向しています。",
    ],
  },

  responsiblePlay: [
    "入金制限・プレイ時間制限などの自己管理ツールを推奨",
    "自己排除は6ヶ月〜5年（メールでサポートへ申請）",
    "GambleAware等の外部支援機関リンクを案内",
  ],

  userConcerns: [
    "ウェルカムの賭け条件が重い（60x〜75x）",
    "法定通貨非対応／仮想通貨ウォレットが必須",
    "検索・カテゴリ分けが弱く探しづらい",
    "一部の規約・ポリシーが英語表記のまま",
  ],

  summary: [
    "WSMトークン連携＆ミームカルチャーを取り入れた個性派クリプトカジノ。",
    "200%最大$25,000など“数字は大きい”がW/Rも重い—プロモ取捨選択が肝。",
    "検索UIの弱さや英語表記など課題はあるが、上級者・クリプト派には刺さる構成。",
  ],

  faq: [
    {
      question: "WSMカジノは仮想通貨が必須ですか？",
      answer:
        "はい。仮想通貨専用です（法定通貨の直接入金は不可）。MoonPayやChangellyで購入→入金は可能ですが、出金には自分のウォレットが必要です。",
    },
    {
      question: "入金不要ボーナスはありますか？",
      answer:
        "常設の入金不要はありません。時期によりプロモコード（例：VIPGRINDERS）で特典が付く場合があります。",
    },
    {
      question: "ウェルカムボーナスの条件は？",
      answer:
        "200%最大$25,000。$10,000以下の部分はW/R60x、$10,000超はW/R75x。6x進捗ごとに10%ずつ解放。FSは35x、フリーベットはW/Rなし。",
    },
    {
      question: "出金条件や手数料は？",
      answer:
        "原則、入金額に対する最低賭け要件（1xなど）を満たす必要があります。未達のまま出金すると8%（最低$4）の手数料がかかる場合があります。通常の仮想通貨出金手数料はカジノ側は無料（ネットワーク手数料は別）。",
    },
    {
      question: "出金限度額は？",
      answer:
        "標準は1日€10,000／週€50,000／月€500,000。VIPは月€50,000（状況により増額の裁量可）。",
    },
    {
      question: "KYC（本人確認）は必要？",
      answer:
        "登録自体は簡易ですが、出金時に本人確認（身分証・住所確認など）が必要です。スマホでのKYCフローに対応。",
    },
    {
      question: "スポーツベットはありますか？",
      answer:
        "はい。35種以上のマーケットに対応し、プレマッチとライブベット、キャッシュアウト、一部ライブ配信、eスポーツやバーチャルスポーツも提供しています。",
    },
    {
      question: "$WSMトークンの特典は？",
      answer:
        "追加FS、ステーキング、トークンバーン、収益の≥10%買い戻しコミット等、エコシステム強化の仕組みが用意されています（時期により内容は変動）。",
    },
  ],
};