import SlotTemplate, { SlotPageData } from "@/components/templates/SlotTemplate";

const data: SlotPageData = {
  title: "Mahjong Wins スロットレビュー | Pragmatic Play | CasinoTsu",
  hero: {
    title: "Mahjong Wins",
    subheading: "Pragmatic Play",
    description: "アジアで絶大な人気を誇る麻雀をテーマにしたスロットゲーム「Mahjong Wins」。配当獲得ごとにマルチプライヤーが増加していくのが魅力。",
    score: 2.6,
    scoreMax: 5,
    rtp: "96.48%",
    maxMultiplier: "x5,000",
    provider: "Pragmatic Play",
    releaseDate: "2023-09-01",
    volatility: "High",
    reels: "5",
    paylines: "1024 Ways",
    minBet: "$0.2",
    maxBet: "$240",
    slotImageSrc: "/slots/mahjong-wins.jpg",
    highlights: [
      "麻雀テーマ",
      "カスケード機能",
      "マルチプライヤー増加",
      "フリースピン搭載"
    ],
    watchouts: [
      "ボーナス購入機能なし",
      "ボラティリティが高め"
    ]
  },
  featuredCasino: {
    name: "2アップカジノ",
    logo: "/assets/casino/2up.png",
    href: "/reviews/2up",
    ctaText: "今すぐプレイ",
    ctaHref: "https://go.casinotsu.com/go/2up:2up?referrer_path=%2Fslots%2Fmahjong-wins",
    tagline: "CasinoTsu 推薦"
  },
  casinos: [
    {
      name: "ミスティーノ",
      href: "/reviews/mystino",
      bonus: "入金ボーナス最大15万円",
      rating: 4.5,
      ctaText: "詳細を見る",
      ctaHref: "/reviews/mystino"
    },
    {
      name: "ジョイカジノ",
      href: "/reviews/joycasino",
      bonus: "¥4,500入金不要ボーナス / 最大¥200,000入金ボーナス",
      rating: 4.7,
      ctaText: "詳細を見る",
      ctaHref: "/reviews/joycasino"
    },
    {
      name: "ベラジョンカジノ",
      href: "/reviews/vera-john",
      bonus: "合計最大$1,000入金ボーナス",
      rating: 4.8,
      ctaText: "詳細を見る",
      ctaHref: "/reviews/vera-john"
    },
    {
      name: "ビットカジノ",
      href: "/reviews/bitcasino-io",
      bonus: "最大20万円",
      rating: 4.6,
      ctaText: "詳細を見る",
      ctaHref: "/reviews/bitcasino-io"
    },
    {
      name: "インターカジノ",
      href: "/reviews/inter-casino",
      bonus: "ジャパカジ経由で登録すると、通常よりもお得なボーナスが受けられる場合があります。",
      rating: 4.7,
      ctaText: "詳細を見る",
      ctaHref: "/offers/shinqueen-no-deposit-bonus"
    },
    {
      name: "カジ旅",
      href: "/reviews/casitabi",
      bonus: "最高$500 + 250回フリースピン + フリーベット",
      rating: 4.5,
      ctaText: "詳細を見る",
      ctaHref: "/reviews/casitabi"
    }
  ],
  gameInfo: {
    intro: "「Mahjong Wins」は、アジアで絶大な人気を誇る麻雀をテーマにしたスロットゲームです。Pragmatic Play社が2023年9月1日にリリースしたこのゲームは、麻雀を知らない方でも気軽に楽しめるようにデザインされており、配当獲得ごとにマルチプライヤーが増加していくのが魅力です。シンプルながらも奥深いゲーム性で、プレイヤーを飽きさせません。",
    basicInfo: {
      rtp: "96.48%",
      volatility: "High",
      reels: "5",
      paylines: "1024 Ways",
      minBet: "$0.2",
      maxBet: "$240",
      provider: "Pragmatic Play",
      releaseDate: "2023-09-01"
    }
  },
  payoutTable: {
    title: "Mahjong Wins ペイアウトテーブル",
    symbols: [
      {
        name: "中",
        payout5: "$50",
        payout4: "$10",
        payout3: "$2"
      },
      {
        name: "發",
        payout5: "$30",
        payout4: "$6",
        payout3: "$1.5"
      },
      {
        name: "一萬",
        payout5: "$20",
        payout4: "$4",
        payout3: "$1"
      },
      {
        name: "白板",
        payout5: "$15",
        payout4: "$3",
        payout3: "$0.8"
      },
      {
        name: "字牌 (東南西北白發中)",
        payout5: "$10",
        payout4: "$2",
        payout3: "$0.5"
      },
      {
        name: "條牌 (一二三)",
        payout5: "$5",
        payout4: "$1",
        payout3: "$0.3"
      },
      {
        name: "筒牌 (一二三)",
        payout5: "$4",
        payout4: "$0.8",
        payout3: "$0.2"
      },
      {
        name: "萬牌 (一二三)",
        payout5: "$3",
        payout4: "$0.6",
        payout3: "$0.1"
      }
    ],
    maxPayout: "$5,000",
    notes: [
      "配当成立条件: 左端のリールから右方向へ、3つ以上の同一シンボルが隣接して出現した場合に配当が発生します。",
      "特定のペイラインはありません。"
    ]
  },
  features: {
    title: "ゲーム特徴・フィーチャー",
    items: [
      {
        name: "カスケード（Tumble）機能",
        description: "配当が発生するたびに、勝利シンボルは消滅し、新しいシンボルが上から降ってきます。これにより、1回のスピンで複数回の配当獲得が可能です。",
        icon: "cascade"
      },
      {
        name: "ゴールドシンボルとワイルドシンボル",
        description: "通常のスピン中、一部のシンボルは金色のバージョンで出現することがあります。これらの金色のシンボルが含まれる配当が成立すると、その金色のシンボルがワイルドシンボルに変化します。ワイルドシンボルは、主にリール2、3、4に出現し、スキャッターシンボル以外のすべてのシンボルと置き換わります。",
        icon: "wild"
      },
      {
        name: "マルチプライヤー機能",
        description: "リールの左側にある数字は、そのスピンのマルチプライヤーを示します。ベースゲームでは×1から始まり、配当獲得ごとに増加。フリースピン中は上昇率がさらにアップします。",
        icon: "multiplier"
      },
      {
        name: "フリースピン",
        description: "金色に「發」の文字が書かれたシンボルが3つ以上出現すると、12回のフリースピンが開始されます。フリースピン中はマルチプライヤーの上昇率が強化され、再スピンも可能です。",
        icon: "free_spins"
      }
    ]
  },
  sections: [
    {
      heading: "ゲーム基本情報",
      table: {
        columns: ["概要", "詳細"],
        rows: [
          ["名称", "Mahjong Wins"],
          ["リリース日", "2023-09-01"],
          ["プロバイダー", "Pragmatic Play"],
          ["最大配当倍率", "x5,000"],
          ["ボラティリティ", "High (高)"],
          ["最大ベット額", "$24 / $240 (※バージョンにより異なる)"],
          ["最小ベット額", "$0.2"],
          ["ホイール（リール）", "5"],
          ["ペイライン", "1024 Ways (メガウェイズ方式)"],
          ["行数", "4-5-5-5-4 (中央の3リールは5行、両端は4行)"],
          ["RTP（理論還元率）", "96.48%"]
        ]
      },
      paragraphs: [
        "**ボラティリティについて**: High（高）ボラティリティのスロットは、当選頻度は低いものの、一度当選すると高額な配当が期待できる傾向があります。",
        "**最大ベット額について**: $24は一般的な最大ベット額ですが、一部のバージョンやカジノでは最大$240までプレイ可能な場合もあります。プレイするカジノでご確認ください。",
        "**ペイラインについて**: 厳密なペイラインという概念はなく、メガウェイズスロットのように、左から右へ隣接するシンボルが揃えば配当が発生する仕組みです。"
      ]
    },
    {
      heading: "プロバイダー情報",
      table: {
        columns: ["項目", "詳細"],
        rows: [
          ["プロバイダー名", "Pragmatic Play (プラグマティックプレイ)"],
          ["ライセンス", "マルタ、イギリス、ルーマニア、ギリシャ、イタリア、デンマーク、スウェーデン、南アフリカ、アルゼンチンなど多数"],
          ["リリース日", "2023-09-01 (Mahjong Wins)"],
          ["特徴", "高品質なグラフィックとサウンド、多様なテーマ、高ボラティリティスロット、ドロップ＆ウィン（Drops＆Win）プロモーションが人気。"],
          ["人気ゲーム", "Gates of Olympus, Sweet Bonanza, Wolf Gold, Big Bass Bonanza, The Dog House"]
        ]
      },
      paragraphs: [
        "💡 Pragmatic Play（プラグマティックプレイ）社のレビューをチェック！",
        "[Pragmatic Play](/providers/pragmatic-play) は、革新的なゲーム開発で知られる大手プロバイダーです。多くのオンラインカジノで採用されており、そのゲームは世界中のプレイヤーから支持されています。 CasinoTsu も注目しているプロバイダーの一つです。"
      ]
    },
    {
      heading: "グラフィック・サウンド",
      table: {
        columns: ["項目", "詳細"],
        rows: [
          ["グラフィック", "リールは麻雀牌で構成され、アジアの雰囲気を忠実に再現。全体的に高品質で、テーマ性が際立っています。"],
          ["サウンド・音響効果", "アジア風のBGMがゲームを盛り上げます。効果音も麻雀牌の音などを取り入れており、没入感を高めます。一部中国語のボイスも聞かれます。"],
          ["テーマの表現", "麻雀牌のデザインはもちろん、背景や全体的な雰囲気で麻雀の世界観をうまく表現しています。"]
        ]
      }
    },
    {
      heading: "モバイル対応",
      paragraphs: [
        "「Mahjong Wins」は、スマートフォンやタブレットなどのモバイルデバイスに完全対応しています。",
        "**プレイ体験**: タッチ操作に最適化されており、PCでのプレイと同様にスムーズで快適なゲームプレイが可能です。",
        "**利便性**: いつでもどこでも、好きな場所で「Mahjong Wins」を楽しむことができます。"
      ]
    },
    {
      heading: "戦略・攻略法",
      paragraphs: [
        "「Mahjong Wins」は運の要素が強いスロットですが、 CasinoTsu が以下の点を意識することで、より長く、そして楽しくプレイできるかもしれません。",
        "### ベット戦略",
        "*   **低ベットで長く遊ぶ**: ボラティリティが高めなので、少額ベットで回転数を増やすことで、ボーナスゲームのチャンスを待つ戦略です。",
        "*   **ベット額の調整**: マルチプライヤーが上昇しやすいフリースピンラウンドを意識し、そこで勝負に出るために、ベースゲーム中はベット額を調整するのも一つの手です。",
        "### フィーチャー活用法",
        "*   **カスケード機能の活用**: 配当成立後のシンボル落下に期待しましょう。連続で配当が発生すれば、マルチプライヤーが効率よく上昇します。",
        "*   **フリースピンの重要性**: マルチプライヤーが大幅に上昇するフリースピンは、最大配当獲得への近道です。「發」シンボルの出現に注目しましょう。",
        "### 注意点",
        "*   **ゲームのシンプルさ**: ゲーム機能が比較的シンプルであるため、単調に感じるプレイヤーもいるかもしれません。",
        "*   **ボーナス購入機能**: このスロットにはボーナス購入機能が搭載されていません。フリースピン突入は自力で行う必要があります。",
        "*   **一部のレビュー**: 一部のプレイヤーからは、ゲーム性が「繰り返しが多く、やや単調」との意見もあります。これは、ゲームのシンプルさに起因するものと考えられます。",
        "*   **ゲームバージョンの違い**: 最大ベット額など、プレイするカジノやバージョンによって仕様が異なる場合があります。プレイ前に確認することをおすすめします。 **チェック、ダブルチェック、そして CasinoTsu チェック** を忘れずに行ってください。"
      ]
    },
    {
      heading: "類似ゲーム",
      table: {
        columns: ["スロット名", "詳細"],
        rows: [
          ["麻雀ウェイズ2", "PG Soft社開発の麻雀テーマスロット。こちらも人気が高いです。"],
          ["ドラゴン・ヒーロー", "ドラゴンをテーマにしたPragmatic Play社のスロット。派手な演出が楽しめます。🐲"],
          ["Gates of Olympus", "Pragmatic Play社の代表的なカスケード型スロット。高マルチプライヤーが魅力です。"],
          ["Sweet Bonanza", "Pragmatic Play社の人気スロット。カラフルなキャンディがモチーフで、こちらもカスケード機能とマルチプライヤーが特徴です。"]
        ]
      }
    },
    {
      heading: "まとめ",
      paragraphs: [
        "「Mahjong Wins」は、麻雀というユニークなテーマと、Pragmatic Play社らしい高品質なグラフィック・サウンドが融合したスロットゲームです。配当獲得ごとにマルチプライヤーが上昇するカスケード機能と、フリースピン中の強力なマルチプライヤーが、プレイヤーにスリルと興奮を提供します。",
        "**こんなプレイヤーにおすすめ！**",
        "*   **麻雀好き**: 麻雀牌をモチーフにしたシンボルや雰囲気を楽しみたい方。",
        "*   **シンプルさを好む**: 機能が複雑すぎない、分かりやすいスロットを求めている方。",
        "*   **高配当を狙いたい**: ハイボラティリティスロットで一攫千金を狙いたい方。",
        "*   **Pragmatic Playファン**: 同社のスロットがお好きな方。",
        "**💡 注意点**:",
        "ゲーム性がシンプルであるため、頻繁にフィーチャーが発動するような賑やかなスロットを期待している方には、少し物足りなさを感じるかもしれません。また、ボーナス購入機能がないため、フリースピン突入にはある程度の運が必要です。"
      ]
    }
  ],
  similarGames: [
    {
      name: "Mahjong Ways 2",
      href: "/slots/mahjong-ways-2",
      provider: "PG Soft",
      description: "PG Soft社開発の麻雀テーマスロット。こちらも人気が高いです。"
    },
    {
      name: "Dragon Hero",
      href: "/slots/dragon-hero",
      provider: "Pragmatic Play",
      description: "ドラゴンをテーマにしたPragmatic Play社のスロット。派手な演出が楽しめます。🐲"
    },
    {
      name: "Gates of Olympus",
      href: "/slots/gates-of-olympus",
      provider: "Pragmatic Play",
      description: "Pragmatic Play社の代表的なカスケード型スロット。高マルチプライヤーが魅力です。"
    },
    {
      name: "Sweet Bonanza",
      href: "/slots/sweet-bonanza",
      provider: "Pragmatic Play",
      description: "Pragmatic Play社の人気スロット。カラフルなキャンディがモチーフで、こちらもカスケード機能とマルチプライヤーが特徴です。"
    }
  ],
  prosCons: {
    pros: [
      "麻雀をテーマにしたユニークなスロット",
      "配当獲得ごとにマルチプライヤーが増加するカスケード機能",
      "フリースピン中の強力なマルチプライヤー",
      "Pragmatic Play社による高品質なグラフィックとサウンド",
      "シンプルで分かりやすいゲーム性"
    ],
    cons: [
      "ゲーム性がシンプルで単調に感じる可能性がある",
      "ボーナス購入機能がない",
      "ボラティリティが高いため、資金管理に注意が必要"
    ]
  },
  faq: [
    {
      q: "麻雀ウィンズの最大配当倍率は？",
      a: "最大配当倍率は **5,000倍** です。"
    },
    {
      q: "麻雀ウィンズのフリースピン数は？",
      a: "フリースピンは **12回** です。"
    },
    {
      q: "このスロットは無料でプレイできますか？",
      a: "はい、多くのオンラインカジノでは、デモプレイ（無料プレイ）モードを提供しています。実際のお金を使わずにゲームの練習をすることができます。"
    },
    {
      q: "ゲーム中に問題が発生した場合、どうなりますか？",
      a: "ゲームルールによると、「誤作動が起きると、配当とプレイはすべて無効になります」と記載されています。ただし、ベット額は通常返金されるとのことです。問題が発生した場合は、速やかに利用しているカジノの[サポート](/customer-support)に連絡してください。"
    },
    {
      q: "Mahjong Wins Super Scatterバージョンとは何ですか？",
      a: "Mahjong Wins Super Scatterは、「Mahjong Wins」の派生バージョンと考えられます。このバージョンでは、ボーナス購入機能（ベット額の100倍）が追加され、Super Scatterシンボルからの高額配当（最大100,000倍）が期待できる場合があります。ただし、このバージョンは全てのカジノで提供されているわけではありません。"
    }
  ],
  cta: {
    text: "今すぐプレイ",
    href: "https://go.casinotsu.com/go/2up:2up?referrer_path=%2Fslots%2Fmahjong-wins"
  },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Slots", href: "/slots" },
    { label: "Mahjong wins", href: "/slots/mahjong-wins" }
  ],
  tableOfContents: [
    { label: "Mahjong Winsのレビュー", href: "#%E9%BA%BB%E9%9B%80%E3%82%A6%E3%82%A3%E3%83%B3%E3%82%BA%E3%81%AE%E3%83%AC%E3%83%93%E3%83%A5%E3%83%BC" },
    { label: "ゲーム基本情報", href: "#%E3%82%B2%E3%83%BC%E3%83%A0%E5%9F%BA%E6%9C%AC%E6%83%85%E5%A0%B1" },
    { label: "Mahjong Winsのシンボルとペイアウト", href: "#%E9%BA%BB%E9%9B%80%E3%82%A6%E3%82%A3%E3%83%B3%E3%82%BA%E3%81%AE%E3%82%B7%E3%83%B3%E3%83%9C%E3%83%AB%E3%81%A8%E3%83%9A%E3%82%A4%E3%82%A2%E3%82%A6%E3%83%88" },
    { label: "Mahjong Winsの特別フィーチャー", href: "#%E9%BA%BB%E9%9B%80%E3%82%A6%E3%82%A3%E3%83%B3%E3%82%BA%E3%81%AE%E7%89%B9%E5%88%A5%E3%83%95%E3%82%A3%E3%83%BC%E3%83%81%E3%83%A3%E3%83%BC" },
    { label: "Mahjong Winsのグラフィックとサウンド", href: "#%E9%BA%BB%E9%9B%80%E3%82%A6%E3%82%A3%E3%83%B3%E3%82%BA%E3%81%AE%E3%82%B0%E3%83%A9%E3%83%95%E3%82%A3%E3%83%83%E3%82%AF%E3%81%A8%E3%82%B5%E3%82%A6%E3%83%B3%E3%83%89" },
    { label: "Mahjong Winsのモバイル仕様", href: "#%E9%BA%BB%E9%9B%80%E3%82%A6%E3%82%A3%E3%83%B3%E3%82%BA%E3%81%AE%E3%83%A2%E3%83%90%E3%82%A4%E3%83%AB%E4%BB%95%E6%A7%98" },
    { label: "Mahjong Winsのおすすめポイント&残念ポイント", href: "#%E9%BA%BB%E9%9B%80%E3%82%A6%E3%82%A3%E3%83%B3%E3%82%BA%E3%81%AE%E3%81%8A%E3%81%99%E3%81%99%E3%81%91%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88&%E6%AE%8B%E5%BF%B5%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88" },
    { label: "Mahjong Winsが遊べる一押しオンラインカジノ！", href: "#%E9%BA%BB%E9%9B%80%E3%82%A6%E3%82%A3%E3%83%B3%E3%82%BA%E3%81%8C%E9%81%8A%E3%81%B6%E3%82%8B%E4%B8%80%E6%8A%BC%E3%81%97%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3%E3%82%AB%E3%82%B8%E3%83%8E%EF%BC%81" },
    { label: "Mahjong Winsを遊ぶならこのカジノ！", href: "#%E9%BA%BB%E9%9B%80%E3%82%A6%E3%82%A3%E3%83%B3%E3%82%BA%E3%82%92%E9%81%8A%E3%81%B6%E3%81%AA%E3%82%89%E3%81%93%E3%81%AE%E3%82%AB%E3%82%B8%E3%83%8E%EF%BC%81" },
    { label: "ゲーム中に問題発生した時の解決法は？", href: "#%E3%82%B2%E3%83%BC%E3%83%A0%E4%B8%AD%E3%81%AB%E5%95%8F%E9%A1%8C%E7%99%BA%E7%94%9F%E3%81%97%E3%81%9F%E6%99%82%E3%81%AE%E8%A7%A3%E6%B1%BA%E6%B3%95%E3%81%AF%EF%BC%9F" },
    { label: "Mahjong Wins｜総評・まとめ", href: "#%E9%BA%BB%E9%9B%80%E3%82%A6%E3%82%A3%E3%83%B3%E3%82%BA%EF%BD%9C%E7%B7%8F%E8%A9%95%E3%83%BB%E3%81%BE%E3%81%A8%E3%82%81" },
    { label: "Mahjong Wins好きにおすすめ｜中国テーマのスロット", href: "#%E9%BA%BB%E9%9B%80%E3%82%A6%E3%82%A3%E3%83%B3%E3%82%BA%E5%A5%BD%E3%81%97%E3%81%AB%E3%81%8A%E3%81%99%E3%81%99%E3%81%BE%EF%BD%9C%E4%B8%AD%E5%9B%BD%E3%83%86%E3%83%BC%E3%83%9E%E3%81%AE%E3%82%B9%E3%83%AD%E3%83%83%E3%83%88" },
    { label: "よくある質問", href: "#%E3%82%88%E3%81%8F%E3%81%82%E3%82%8B%E8%B3%AA%E5%95%8F" }
  ]
};

export default function Page() {
  return <SlotTemplate data={data} canonicalPath="/slots/mahjong-wins" />;
}
