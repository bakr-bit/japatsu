import SlotTemplate, { SlotPageData } from "@/components/templates/SlotTemplate";

const data: SlotPageData = {
  title: "Honey Rush 100（ハニー・ラッシュ100）オンラインスロット攻略",
  hero: {
    title: "Honey Rush 100（ハニー・ラッシュ100）",
    subheading: "最大配当50,000倍！クラスターペイスロット「ハニー・ラッシュ100」を徹底レビュー！",
    description: "CasinoTsu が厳選！最大配当50,000倍！クラスターペイスロット「ハニー・ラッシュ100」を徹底レビュー！",
    score: 4.7,
    scoreMax: 5,
    rtp: "96.2%",
    maxMultiplier: "x50,000",
    provider: "Play’n GO",
    releaseDate: "2023-08-17",
    volatility: "Medium to High",
    reels: "7リール、4-5-6-7-6-5-4の可変レイアウト",
    paylines: "クラスターペイ (同一シンボル5つ以上で配当成立)",
    minBet: "$0.10",
    maxBet: "$50",
    slotImageSrc: "/slots/honey-rush-100.jpg",
    highlights: [
      "最大配当50,000倍",
      "クラスターペイ方式",
      "ラッシュメーターとコロニーフィーチャー",
      "ワイルドシンボルとマルチプライヤー",
      "オーバーチャージモード",
      "スマホでのプレイに最適化"
    ],
    watchouts: [
      "フリースピン機能なし",
      "RTPはカジノにより変動する可能性あり"
    ]
  },
  featuredCasino: {
    name: "2アップカジノ",
    logo: "/assets/casino/2up.png",
    href: "/reviews/2up-casino",
    ctaText: "今すぐプレイ",
    ctaHref: "/bonuses/welcome-bonus",
    tagline: "仮想通貨でも日本円でも遊べる、最新オンラインカジノ"
  },
  casinos: [
    {
      name: "ゴールデンパンダ",
      logo: "/assets/casino/golden-panda.png",
      href: "/reviews/golden-panda",
      bonus: "フリースピン",
      freeSpins: "賭け条件30倍",
      wagering: "賭け条件30倍",
      rating: 0,
      tagline: "出金が基本的に即時反映でストレスフリー",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/golden-panda"
    },
    {
      name: "2アップカジノ",
      logo: "/assets/casino/2up.png",
      href: "/reviews/2up-casino",
      bonus: null,
      freeSpins: null,
      wagering: null,
      rating: 0,
      tagline: "仮想通貨でも日本円でも遊べる、最新オンラインカジノ",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/2up-casino"
    },
    {
      name: "ミキカジノ",
      logo: "/assets/casino/miki.png",
      href: "/reviews/miki-casino",
      bonus: "ボーナス",
      freeSpins: "フリースピン",
      wagering: "賭け条件30倍 (ボーナス), 賭け条件20倍 (フリースピン)",
      rating: 0,
      tagline: "充実したゲームラインナップと豊富なボーナス",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/miki-casino"
    },
    {
      name: "WSM Casino",
      logo: "/assets/casino/wsm-casino.png",
      href: "/reviews/wsm-casino",
      bonus: null,
      freeSpins: null,
      wagering: null,
      rating: 0,
      tagline: "時代の最先端？！「ミームコイン」×「オンラインカジノ」",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/wsm-casino"
    },
    {
      name: "ビッツカジノ",
      logo: "/assets/casino/bitz.png",
      href: "/reviews/bitz-casino",
      bonus: "ボーナス",
      freeSpins: null,
      wagering: "賭け条件29倍",
      rating: 0,
      tagline: "本人確認書類不要！？ 匿名性もバッチリの最新仮想通貨カジノ",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/bitz-casino"
    },
    {
      name: "ウィキベット",
      logo: "/assets/casino/wikibet.png",
      href: "/reviews/wikibet",
      bonus: "ボーナス",
      freeSpins: "フリースピン",
      wagering: "賭け条件20倍 (ボーナス), 賭け条件20倍 (フリースピン)",
      rating: 0,
      tagline: "シンプルな操作性と可愛いデザインが特徴",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/wikibet"
    },
    {
      name: "カツウィン",
      logo: "/assets/casino/katsuwin.png",
      href: "/reviews/katsuwin",
      bonus: null,
      freeSpins: null,
      wagering: null,
      rating: 0,
      tagline: "業界トップクラスのパチンコ・パチスロ台数を誇る新星カジノ",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/katsuwin"
    },
    {
      name: "寿司カジノ",
      logo: "/assets/casino/sushi-casino.png",
      href: "/reviews/sushi-casino",
      bonus: "ボーナス",
      freeSpins: "フリースピン",
      wagering: "賭け条件35倍 (ボーナス), 賭け条件40倍 (フリースピン)",
      rating: 0,
      tagline: "てんこ盛りのオファーやVIPプログラムが魅力",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/sushi-casino"
    },
    {
      name: "パリマッチ",
      logo: "/assets/casino/parimatch.png",
      href: "/reviews/parimatch",
      bonus: null,
      freeSpins: null,
      wagering: null,
      rating: 0,
      tagline: "2024年11月オープンの最新オンカジ",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/parimatch"
    },
    {
      name: "デュエルビッツ",
      logo: "/assets/casino/duelbits.png",
      href: "/reviews/duelbits",
      bonus: null,
      freeSpins: "500フリースピン",
      wagering: null,
      rating: 0,
      tagline: "500フリースピンが嬉しいクリプトカジノ♪",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/duelbits"
    },
    {
      name: "スポーツベットアイオー",
      logo: "/assets/casino/sportsbetio.png",
      href: "/reviews/sportsbet-io",
      bonus: null,
      freeSpins: null,
      wagering: null,
      rating: 0,
      tagline: "スポーツベットだけじゃない！",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/sportsbet-io"
    },
    {
      name: "シャッフルカジノ",
      logo: "/assets/casino/shuffle.png",
      href: "/reviews/shuffle-casino",
      bonus: "ボーナス",
      freeSpins: null,
      wagering: "賭け条件40倍",
      rating: 0,
      tagline: "独自のトークンで資産運用もできる仮想通貨カジノ★",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/shuffle-casino"
    },
    {
      name: "ウィンズアイオー",
      logo: "/assets/casino/winz.png",
      href: "/reviews/winz-io",
      bonus: "ボーナス",
      freeSpins: "フリースピン",
      wagering: "賭け条件なし",
      rating: 0,
      tagline: "ウェルカムオファーやボーナスに賭け条件なし♪",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/winz-io"
    },
    {
      name: "ダファベット",
      logo: "/assets/casino/dafabet.png",
      href: "/reviews/dafabet",
      bonus: "ボーナス",
      freeSpins: null,
      wagering: "賭け条件20倍",
      rating: 0,
      tagline: "セルティックFCのスポンサーカジノ",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/dafabet"
    },
    {
      name: "ラッキーブロック",
      logo: "/assets/casino/lucky-block.png",
      href: "/reviews/lucky-block",
      bonus: "ボーナス",
      freeSpins: "フリースピン",
      wagering: "賭け条件35倍 (ボーナス), 賭け条件40倍 (フリースピン)",
      rating: 0,
      tagline: "独自トークンもある仮想通貨カジノ♪",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/lucky-block"
    },
    {
      name: "ラーメンベット",
      logo: "/assets/casino/ramenbet.png",
      href: "/reviews/ramenbet",
      bonus: null,
      freeSpins: null,
      wagering: null,
      rating: 0,
      tagline: "スロットもライブカジノもスポーツも充実！",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/ramenbet"
    },
    {
      name: "フラッシュカジノ",
      logo: "/assets/casino/flush-casino.png",
      href: "/reviews/flush-casino",
      bonus: null,
      freeSpins: null,
      wagering: null,
      rating: 0,
      tagline: "今年大注目のクリプトカジノ",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/flush-casino"
    },
    {
      name: "クイーンカジノ",
      logo: "/assets/casino/queen-casino.png",
      href: "/reviews/queen-casino",
      bonus: "ボーナス",
      freeSpins: "フリースピン",
      wagering: "賭け条件30倍 (ボーナス), 賭け条件20倍 (フリースピン)",
      rating: 0,
      tagline: "アジア市場知名度ナンバーワンに君臨するオンラインカジノ！",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/queen-casino"
    },
    {
      name: "ルーベット",
      logo: "/assets/casino/roobet.png",
      href: "/reviews/roobet",
      bonus: null,
      freeSpins: null,
      wagering: null,
      rating: 0,
      tagline: "世界的有名人がアンバサダーを務めるオンラインカジノ！",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/roobet"
    },
    {
      name: "カジノスカイ",
      logo: "/assets/casino/casino-sky.png",
      href: "/reviews/casino-sky",
      bonus: null,
      freeSpins: null,
      wagering: null,
      rating: 0,
      tagline: "日本のオンカジ業界プロが運営する期待のカジノ！",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/casino-sky"
    },
    {
      name: "メガダイス",
      logo: "/assets/casino/mega-dice.png",
      href: "/reviews/mega-dice",
      bonus: "ボーナス",
      freeSpins: "フリースピン",
      wagering: "賭け条件35倍 (ボーナス), 賭け条件40倍 (フリースピン)",
      rating: 0,
      tagline: "ボーナス最大1BTCの仮想通貨カジノ！",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/mega-dice"
    },
    {
      name: "ステークカジノ",
      logo: "/assets/casino/stake.png",
      href: "/reviews/stake-casino",
      bonus: null,
      freeSpins: null,
      wagering: null,
      rating: 0,
      tagline: "ハウスエッジ5%レーキバック＆VIP特典が超おトク！",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/stake-casino"
    },
    {
      name: "ワンダーカジノ",
      logo: "/assets/casino/wonder-casino.png",
      href: "/reviews/wonder-casino",
      bonus: null,
      freeSpins: null,
      wagering: null,
      rating: 0,
      tagline: "業界最速の出金スピードと仮想通貨特化ボーナス！",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/wonder-casino"
    },
    {
      name: "遊雅堂",
      logo: "/assets/casino/yuugado.png",
      href: "/reviews/yuugado",
      bonus: null,
      freeSpins: null,
      wagering: null,
      rating: 0,
      tagline: "「和」がテーマのオンラインカジノ | パチンコからスポーツベットまで！",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/yuugado"
    },
    {
      name: "コンビット",
      logo: "/assets/casino/konibet.png",
      href: "/reviews/konibet",
      bonus: null,
      freeSpins: null,
      wagering: null,
      rating: 0,
      tagline: "パチンコ・パチスロが遊べるオンラインカジノ！",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/konibet"
    },
    {
      name: "カジノミー",
      logo: "/assets/casino/casino-me.png",
      href: "/reviews/casino-me",
      bonus: "ボーナス",
      freeSpins: "フリースピン",
      wagering: "賭け条件20倍 (ボーナス), 賭け条件20倍 (フリースピン)",
      rating: 0,
      tagline: "独自システムのお得なキャッシュバックあり！",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/casino-me"
    },
    {
      name: "ミスティーノ",
      logo: "/assets/casino/mystino.png",
      href: "/reviews/mystino",
      bonus: null,
      freeSpins: null,
      wagering: null,
      rating: 0,
      tagline: "日本人プレイヤーの心をグッと掴むカジノといえば…！",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/mystino"
    },
    {
      name: "インターカジノ",
      logo: "/assets/casino/intercasino.png",
      href: "/reviews/inter-casino",
      bonus: null,
      freeSpins: null,
      wagering: null,
      rating: 0,
      tagline: "実は20年以上歴史のあるカジノはココ！",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/inter-casino"
    },
    {
      name: "エンパイア777",
      logo: "/assets/casino/empire777.png",
      href: "/reviews/empire777",
      bonus: "ボーナス",
      freeSpins: null,
      wagering: "賭け条件20倍",
      rating: 0,
      tagline: "アジアNo.1を豪語するオンカジはここだ！",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/empire777"
    },
    {
      name: "ピナクル",
      logo: "/assets/casino/pinnacle.png",
      href: "/reviews/pinnacle",
      bonus: null,
      freeSpins: null,
      wagering: null,
      rating: 0,
      tagline: "カジノもスポーツベットも楽しめるハイブリッド！",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/pinnacle"
    },
    {
      name: "ベラジョンカジノ",
      logo: "/assets/casino/vera-john.png",
      href: "/reviews/vera-john",
      bonus: null,
      freeSpins: null,
      wagering: null,
      rating: 0,
      tagline: "オンカジといえば、やっぱりベラジョン！",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/vera-john"
    },
    {
      name: "ライブカジノハウス",
      logo: "/assets/casino/live-casino-house.png",
      href: "/reviews/live-casino-house",
      bonus: "ボーナス",
      freeSpins: null,
      wagering: "賭け条件20倍",
      rating: 0,
      tagline: "ライブカジノを始め、多種多様なゲームが遊べるおなじみのカジノ！",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/live-casino-house"
    },
    {
      name: "ビットカジノアイオー",
      logo: "/assets/casino/bitcasinoio.png",
      href: "/reviews/bitcasino-io",
      bonus: "ボーナス",
      freeSpins: null,
      wagering: "賭け条件40倍",
      rating: 0,
      tagline: "元祖仮想通貨カジノ！",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/bitcasino-io"
    },
    {
      name: "カジノエックス",
      logo: "/assets/casino/casino-x.png",
      href: "/reviews/casino-x",
      bonus: null,
      freeSpins: null,
      wagering: null,
      rating: 0,
      tagline: "太っ腹ボーナス盛りだくさんのカジノエックスで、お得にプレイ♪",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/casino-x"
    },
    {
      name: "カジタビ",
      logo: "/assets/casino/casitabi.png",
      href: "/reviews/casitabi",
      bonus: "ボーナス",
      freeSpins: "フリースピン",
      wagering: "賭け条件20倍 (ボーナス), 賭け条件20倍 (フリースピン)",
      rating: 0,
      tagline: "RPG型カジノで旅をしながらボスを倒してお得にプレイ！",
      ctaText: "登録はこちら",
      ctaHref: "/reviews/casitabi"
    }
  ],
  gameInfo: {
    intro: "Honey Rush 100（ハニー・ラッシュ100） は、Play'n GO社より2023年8月17日にリリースされた、蜂の巣をテーマにしたユニークなクラスターペイ方式のオンラインスロットゲームです。可愛らしいデザインとサウンド、そして最大50,000倍という驚異的な最大配当倍率がプレイヤーを魅了します。フリースピンはありませんが、ゲーム中に蓄積される「ラッシュメーター」や「コロニーフィーチャー」が、連続勝利と高配当獲得の鍵となります。その中毒性の高いゲーム性と、スマホでのプレイにも最適化された快適な操作性から、多くのプレイヤーに支持されています。",
    basicInfo: {
      rtp: "96.54% (※カジノにより変動あり、最低94.50%)",
      volatility: "Medium to High",
      reels: "7リール、4-5-6-7-6-5-4の可変レイアウト",
      paylines: "クラスターペイ (同一シンボル5つ以上で配当成立)",
      minBet: "$0.10",
      maxBet: "$50",
      provider: "Play’n GO",
      releaseDate: "2023-08-17"
    }
  },
  payoutTable: {
    title: "ペイアウト・配当表",
    symbols: [
      {
        name: "ダイヤ型コイン",
        description: "高配当シンボル",
        payout5: "100倍",
      },
      {
        name: "ミツバチ型コイン",
        description: "高配当シンボル",
        payout5: "75倍",
      },
      {
        name: "ハート型コイン",
        description: "高配当シンボル",
        payout5: "50倍",
      },
      {
        name: "王冠型コイン",
        description: "高配当シンボル",
        payout5: "40倍",
      },
      {
        name: "花（赤）",
        description: "低配当シンボル",
        payout5: "30倍",
      },
      {
        name: "花（黄）",
        description: "低配当シンボル",
        payout5: "25倍",
      },
      {
        name: "花（紫）",
        description: "低配当シンボル",
        payout5: "20倍",
      },
      {
        name: "花（青）",
        description: "低配当シンボル",
        payout5: "15倍",
      },
      {
        name: "ワイルドシンボル",
        description: "「W」マーク、全てのシンボルの代わり",
        isSpecial: true
      }
    ],
    maxPayout: "50,000倍",
    notes: [
      "ベット額1ドルあたりのシンボル配当",
      "同一シンボルが5つ以上隣接することで配当成立"
    ]
  },
  features: {
    title: "ゲーム特徴・フィーチャー",
    items: [
      {
        name: "クラスターペイとカスケードウィン",
        description: "特定のペイラインではなく、同一シンボルが5つ以上隣接すると配当成立。勝利シンボルは消滅し、新しいシンボルが降ってくる「カスケードウィン（連鎖）」が発生します。",
        icon: undefined
      },
      {
        name: "ラッシュメーターとコロニーフィーチャー",
        description: "勝利シンボルの数に応じて「ラッシュメーター」が溜まり、一定量貯まると特殊フィーチャーが発動。ドローン・コロニー（7シンボル）、ワーカー・コロニー（10〜15シンボル）、クイーン・コロニー（20〜37シンボル）があります。",
        icon: undefined
      },
      {
        name: "ワイルドシンボルとマルチプライヤー",
        description: "「W」シンボルがワイルドシンボル。勝利シンボル消滅時に「マルチプライヤーメーター」に蓄積され、ワイルドシンボルに付与されます。",
        icon: undefined
      },
      {
        name: "オーバーチャージモード",
        description: "ラッシュメーターにシンボルが90個以上溜まると突入。さらに15個以上のシンボル消滅で中央シンボルがアップグレードされ、最大100倍のマルチプライヤーが付与されることがあります。",
        icon: undefined
      }
    ]
  },
  sections: [
    {
      heading: "1. 導入・概要",
      paragraphs: [
        "Honey Rush 100（ハニー・ラッシュ100） は、Play'n GO社より2023年8月17日にリリースされた、蜂の巣をテーマにしたユニークなクラスターペイ方式のオンラインスロットゲームです。CasinoTsu も注目する人気プロバイダーである Play'n GO 社から、前作「ハニー・ラッシュ」の続編として登場しました。可愛らしいデザインとサウンド、そして最大50,000倍という驚異的な最大配当倍率がプレイヤーを魅了します。フリースピンはありませんが、ゲーム中に蓄積される「ラッシュメーター」や「コロニーフィーチャー」が、連続勝利と高配当獲得の鍵となります。その中毒性の高いゲーム性と、スマホでのプレイにも最適化された快適な操作性から、多くのプレイヤーに支持されています。CasinoTsu は、このゲームの魅力と攻略法を詳しく解説いたします。"
      ]
    },
    {
      heading: "2. ゲーム基本情報",
      table: {
        title: "ゲーム基本情報",
        columns: ["概要", "詳細"],
        rows: [
          ["名称", "Honey Rush 100"],
          ["リリース日", "2023-08-17"],
          ["プロバイダー", "Play’n GO"],
          ["最大配当倍率", "x50,000"],
          ["ボラティリティ", "Medium to High (中〜高)"],
          ["最大ベット額", "$50"],
          ["最小ベット額", "$0.10 (または£0.10)"],
          ["RTP (還元率)", "96.54% (※カジノにより変動あり、最低94.50%)"],
          ["リール数/レイアウト", "7リール、4-5-6-7-6-5-4の可変レイアウト"],
          ["ペイライン", "クラスターペイ (同一シンボル5つ以上で配当成立)"],
          ["ゲームテクノロジー", "HTML5"]
        ]
      },
      paragraphs: [
        "RTP(還元率)について:\n「Honey Rush 100」のRTPは、一般的に96.54%とされていますが、CasinoTsu が確認したところ、カジノによっては94.50%や96.2%など、異なるバージョンが提供されている場合があります。プレイする前に、各カジノサイトで表示されているRTPを必ずご確認ください。正確さが第一です。Slot Trackerなどのコミュニティデータでは、平均RTPが78.85%と記録されている場合もありますが、これはデータ数が少ないため参考程度にご覧ください。"
      ]
    },
    {
      heading: "3. どこで遊べるか",
      paragraphs: [
        "「Honey Rush 100」は、世界中の数多くのオンラインカジノでプレイ可能です。ここでは、特に日本人プレイヤーにおすすめの、ボーナス や賭け条件が魅力的なカジノをいくつか CasinoTsu がご紹介します。"
      ],
      table: {
        title: "おすすめカジノ",
        columns: ["カジノ名", "おすすめポイント", "ボーナス情報例"],
        rows: [
          ["ゴールデンパンダ", "出金が基本的に即時反映でストレスフリー", "フリースピン：賭け条件30倍"],
          ["2アップカジノ", "仮想通貨でも日本円でも遊べる、最新オンラインカジノ", "-"],
          ["ミキカジノ", "充実したゲームラインナップと豊富なボーナス", "ボーナス：賭け条件30倍、フリースピン：賭け条件20倍"],
          ["WSM Casino", "時代の最先端？！「ミームコイン」×「オンラインカジノ」", "-"],
          ["ビッツカジノ", "本人確認書類不要！？ 匿名性もバッチリの最新仮想通貨カジノ", "ボーナス：賭け条件29倍"],
          ["ウィキベット", "シンプルな操作性と可愛いデザインが特徴", "ボーナス：賭け条件20倍、フリースピン：賭け条件20倍"],
          ["カツウィン", "業界トップクラスのパチンコ・パチスロ台数を誇る新星カジノ", "-"],
          ["寿司カジノ", "てんこ盛りのオファーやVIPプログラムが魅力", "ボーナス：賭け条件35倍、フリースピン：賭け条件40倍"],
          ["パリマッチ", "2024年11月オープンの最新オンカジ", "-"],
          ["デュエルビッツ", "500フリースピンが嬉しいクリプトカジノ♪", "-"],
          ["スポーツベットアイオー", "スポーツベットだけじゃない！", "-"],
          ["シャッフルカジノ", "独自のトークンで資産運用もできる仮想通貨カジノ★", "ボーナス：賭け条件40倍"],
          ["ウィンズアイオー", "ウェルカムオファーやボーナスに賭け条件なし♪", "ボーナス：最大$10,000、フリースピン：800回"],
          ["ダファベット", "セルティックFCのスポンサーカジノ", "ボーナス：賭け条件20倍"],
          ["ラッキーブロック", "独自トークンもある仮想通貨カジノ♪", "ボーナス：€25,000、フリースピン：賭け条件35倍"],
          ["ラーメンベット", "スロットもライブカジノもスポーツも充実！", "-"],
          ["フラッシュカジノ", "今年大注目のクリプトカジノ", "-"],
          ["クイーンカジノ", "アジア市場知名度ナンバーワンに君臨するオンラインカジノ！", "ボーナス：賭け条件30倍、フリースピン：賭け条件20倍"],
          ["ルーベット", "世界的有名人がアンバサダーを務めるオンラインカジノ！", "-"],
          ["カジノスカイ", "日本のオンカジ業界プロが運営する期待のカジノ！", "-"],
          ["メガダイス", "ボーナス最大1BTCの仮想通貨カジノ！", "ボーナス：賭け条件35倍、フリースピン：賭け条件40倍"],
          ["ステークカジノ", "ハウスエッジ5%レーキバック＆VIP特典が超おトク！", "-"],
          ["ワンダーカジノ", "業界最速の出金スピードと仮想通貨特化ボーナス！", "-"],
          ["遊雅堂", "「和」がテーマのオンラインカジノ | パチンコからスポーツベットまで！", "-"],
          ["コンビット", "パチンコ・パチスロが遊べるオンラインカジノ！", "-"],
          ["カジノミー", "独自システムのお得なキャッシュバックあり！", "ボーナス：賭け条件20倍、フリースピン：賭け条件20倍"],
          ["ミスティーノ", "日本人プレイヤーの心をグッと掴むカジノといえば…！", "-"],
          ["インターカジノ", "実は20年以上歴史のあるカジノはココ！", "-"],
          ["エンパイア777", "アジアNo.1を豪語するオンカジはここだ！", "ボーナス：賭け条件20倍"],
          ["ピナクル", "カジノもスポーツベットも楽しめるハイブリッド！", "-"],
          ["ベラジョンカジノ", "オンカジといえば、やっぱりベラジョン！", "-"],
          ["ライブカジノハウス", "ライブカジノを始め、多種多様なゲームが遊べるおなじみのカジノ！", "ボーナス：賭け条件20倍"],
          ["ビットカジノアイオー", "元祖仮想通貨カジノ！", "ボーナス：賭け条件40倍"],
          ["カジノエックス", "太っ腹ボーナス盛りだくさんのカジノエックスで、お得にプレイ♪", "-"],
          ["カジタビ", "RPG型カジノで旅をしながらボスを倒してお得にプレイ！", "ボーナス：賭け条件20倍、フリースピン：賭け条件20倍"]
        ]
      },
    },
    {
      heading: "4. ゲーム特徴・フィーチャー",
      paragraphs: [
        "「Honey Rush 100」は、ユニークなフィーチャーが満載で、プレイヤーを飽きさせません。CasinoTsu がその魅力を詳しくご紹介します。"
      ],
      bullets: [
        "クラスターペイとカスケードウィン\nこのスロットは、特定のペイラインではなく「クラスターペイ」方式を採用しています。同一シンボルが5つ以上隣接して出現すると配当が成立し、勝利シンボルは消滅して新しいシンボルが上から降ってくる「カスケードウィン（連鎖）」が発生します。この連鎖が続く限り、配当はどんどん積み重なります。",
        "ラッシュメーターとコロニーフィーチャー\n勝利シンボルの数に応じて、画面右側にある「ラッシュメーター」が溜まっていきます。メーターが一定量貯まると、特殊なフィーチャーが発動します。\n\n* ドローン・コロニー: 同一路線で30個のシンボルが消滅すると発動。中央のシンボルが周囲のシンボルに置き換わり、配当成立を狙います（7シンボル）。\n* ワーカー・コロニー: 同一路線で60個のシンボルが消滅すると発動。シンボルが置き換わる範囲が広がり、より多くのシンボルが変換されます（10〜15シンボル）。\n* クイーン・コロニー: 同一路線で90個以上のシンボルが消滅すると発動。最も広範囲のシンボルが変換され、大規模な配当獲得のチャンスとなります（20〜37シンボル）。",
        "ワイルドシンボルとマルチプライヤー\n「W」と書かれた六角形のシンボルがワイルドシンボルで、全てのシンボルの代わりになります。ワイルドシンボルは、勝利シンボルが消滅した際に画面下部のハチの巣型の「マルチプライヤーメーター」に蓄積されます。",
        "オーバーチャージモード\nラッシュメーターにシンボルが90個以上溜まると「オーバーチャージモード」に突入します。このモード中に、さらに15個以上のシンボルが消滅するたびに、中央のシンボルがアップグレードされます。最大までアップグレードされると、マルチプライヤーが3個追加されます。\nコロニーフィーチャーが発動した際、このアップグレードされたワイルドシンボルには、最大で100倍のマルチプライヤーが付与されることがあります。",
        "コロニーフィーチャー | ワイルドに追加されるマルチプライヤー \n--- | --- \nドローン・コロニー | 2倍 \nワーカー・コロニー | 3倍 \nクイーン・コロニー | 3倍 \nこれらのフィーチャーが連鎖することで、爆発的な配当獲得が期待できます。正確さが第一。興奮はその次。"
      ]
    },
    {
      heading: "5. プロバイダー情報",
      paragraphs: [
        "Play'n GO (プレインゴー) は、スウェーデンに本社を置く、世界的に有名なオンラインスロットプロバイダーです。CasinoTsu も信頼を寄せるこのプロバイダーは、2005年の設立以来、革新的で高品質なゲームを数多くリリースしており、「Book of Dead」や「Reactoonz」、「Moon Princess」など、数々のヒット作を生み出しています。ライセンスも多数取得しており、公平で安全なゲームを提供していることでも知られています。Play'n GOのスロットは、美しいグラフィック、ユニークなゲーム性、そして高いペイアウト率で、世界中のプレイヤーから愛されています。"
      ]
    },
    {
      heading: "6. グラフィック・サウンド",
      table: {
        title: "グラフィック・サウンド",
        columns: ["項目", "詳細"],
        rows: [
          ["グラフィック", "花畑とミツバチがテーマの、明るく可愛らしいデザイン。"],
          ["サウンド", "ギター主体のリラックスできるBGMと、ゲームプレイを盛り上げる効果音。"],
          ["テーマ表現", "蜂の巣のレイアウトや、コロニーフィーチャーなど、テーマに沿ったゲームメカニクス。"]
        ]
      },
      paragraphs: [
        "「Honey Rush 100」のグラフィックは、明るくカラフルで、ミツバチや花々が描かれた可愛らしいデザインが特徴です。ゲーム画面全体に、穏やかでリラックスできる雰囲気があり、プレイしていて心地よさを感じさせてくれます。サウンドトラックも、ゆったりとしたギターサウンドを基調としており、ゲームのテーマにマッチしています。ゲームプレイ中の効果音も、勝利時やフィーチャー発動時に適切に配置され、ゲームを盛り上げてくれます。特に、カスケードウィンやコロニーフィーチャーが連続する際のサウンドは、プレイヤーの期待感を高めます。 CasinoTsu は、この細部へのこだわりがゲーム体験を向上させると評価しています。"
      ]
    },
    {
      heading: "7. ペイアウト・配当表",
      paragraphs: [
        "「Honey Rush 100」では、同一シンボルが5つ以上隣接することで配当が成立します。ベット額1ドルあたりのシンボル配当は以下の通りです。CasinoTsu は、この配当構造を正確にお伝えします。"
      ],
      bullets: [
        "高配当シンボル\n* ダイヤ型コイン: 最大100倍\n* ミツバチ型コイン: 最大75倍\n* ハート型コイン: 最大50倍\n* 王冠型コイン: 最大40倍",
        "低配当シンボル\n* 花（赤）: 最大30倍\n* 花（黄）: 最大25倍\n* 花（紫）: 最大20倍\n* 花（青）: 最大15倍",
        "ワイルドシンボル\n* 「W」マーク: 全てのシンボルの代用となります。",
        "最大配当倍率\nこのスロットの最大配当倍率は、なんと 50,000倍 です！高ボラティリティながら、一撃の破壊力は非常に大きいと言えるでしょう。 CasinoTsu は、このポテンシャルを高く評価しています。"
      ]
    },
    {
      heading: "8. モバイル対応",
      paragraphs: [
        "「Honey Rush 100」は、HTML5技術を採用して開発されているため、パソコンだけでなく、スマートフォンやタブレットなどのモバイルデバイスでも快適にプレイできます。レスポンシブデザインにより、画面サイズに合わせてレイアウトが自動調整され、グラフィックやサウンドも損なわれることなく楽しめます。直感的な操作性も維持されているため、外出先でもストレスなくゲームをプレイできるでしょう。"
      ],
      bullets: [
        "😙 いつでもどこでもでサクサク、ストレスフリー！ スマホ&タブレット対応モバイルカジノ完全ガイド"
      ]
    },
    {
      heading: "9. 戦略・攻略法",
      paragraphs: [
        "「Honey Rush 100」は高ボラティリティのスロットであるため、一撃の大きな配当を狙うのが基本戦略となります。CasinoTsu が推奨する戦略は以下の通りです。"
      ],
      bullets: [
        "ベット額の調整: 最大配当50,000倍を狙うには、ある程度のベット額が必要です。しかし、高ボラティリティのため、資金管理には十分注意しましょう。予算を決めて、無理のない範囲でベット額を調整することが重要です。詳しくはスロット攻略戦略ガイドをご覧ください。",
        "コロニーフィーチャーの活用: ゲームの肝となるのはコロニーフィーチャーです。ラッシュメーターが溜まるのを待ち、ワーカー・コロニーやクイーン・コロニーの発動を狙いましょう。特に、ワイルドシンボルに高倍率マルチプライヤーが付与されるタイミングは、大きな勝利のチャンスです。",
        "焦らずプレイ: 特徴的なフィーチャーは、発動に時間がかかる場合もあります。焦らず、ゲームの流れを読みながら、冷静にプレイを続けることが大切です。",
        "バージョンに注意: 「Honey Rush 100」のように、既存の人気スロットを改良したバージョンでは、 RTPやゲームフローが異なる場合があります。プレイするカジノで提供されているバージョンが、ご自身にとって有利なものか確認することをおすすめします。 CasinoTsu は、この確認作業を「チェック、ダブルチェック、そして CasinoTsu チェック 」と呼んでいます。"
      ]
    },
    {
      heading: "10. 類似ゲーム",
      table: {
        title: "類似ゲーム",
        columns: ["スロット名", "プロバイダー", "特徴"],
        rows: [
          ["デッド・キャナリー", "Nolimit City", "高ボラティリティ、最大65,000倍の配当、ユニークな機能。"],
          ["スペース・スタックス", "Push Gaming", "クラスターペイ、ゲーミングアワード受賞、ユニークな連鎖。"],
          ["ブロッブスターズ・クラスターバスター", "Blueprint Gaming", "クラスターペイ、宇宙人モチーフ、中央に配置された特殊キャラクター。"],
          ["ハニー・ラッシュ", "Play’n GO", "「Honey Rush 100」のオリジナル版。最大9,000倍の配당。"]
        ]
      },
    
      
    },
    {
      heading: "11. まとめ",
      paragraphs: [
        "Honey Rush 100 は、可愛らしい見た目とは裏腹に、50,000倍という驚異的な最大配当倍率を秘めた、非常にエキサイティングなクラスターペイスロットです。フリースピンはありませんが、ラッシュメーターと連携した「コロニーフィーチャー」や、ワイルドシンボルに付与されるマルチプライヤーが、連続勝利と高額配当獲得のチャンスを広げてくれます。 CasinoTsu は、このスロットが多くのプレイヤーに愛される理由を理解しています。"
      ],
      bullets: [
        "こんなプレイヤーにおすすめ！",
        "* 高ボラティリティスロットが好きな方: 一撃の大きな勝利を狙いたい方。",
        "* ユニークなゲーム性やレイアウトが好きな方: 従来のビデオスロットとは一味違う体験をしたい方。",
        "* 可愛いデザインやリラックスできる雰囲気が好きな方: ゲームプレイを楽しみながら癒されたい方。",
        "* モバイルで手軽にスロットをプレイしたい方: スマートフォンでのプレイに最適化されています。"
      ],
      
    }
  ],
  similarGames: [
    {
      name: "デッド・キャナリー",
      href: "/slots/dead-canary",
      provider: "Nolimit City",
      description: "高ボラティリティ、最大65,000倍の配当、ユニークな機能。"
    },
    {
      name: "スペース・スタックス",
      href: "/slots/space-stacks",
      provider: "Push Gaming",
      description: "クラスターペイ、ゲーミングアワード受賞、ユニークな連鎖。"
    },
    {
      name: "ブロッブスターズ・クラスターバスター",
      href: "/slots/blobsters-clusterbuster",
      provider: "Blueprint Gaming",
      description: "クラスターペイ、宇宙人モチーフ、中央に配置された特殊キャラクター。"
    },
    {
      name: "ハニー・ラッシュ",
      href: "/slots/honey-rush-100",
      provider: "Play’n GO",
      description: "「Honey Rush 100」のオリジナル版。最大9,000倍の配当。"
    }
  ],
  prosCons: {
    pros: [
      "最大配当50,000倍という非常に高いポテンシャル",
      "ユニークなクラスターペイとカスケードウィンシステム",
      "ラッシュメーターと連動した多彩なコロニーフィーチャー",
      "ワイルドシンボルに付与されるマルチプライヤー",
      "オーバーチャージモードによるシンボルアップグレード",
      "可愛らしくリラックスできるグラフィックとサウンド",
      "スマートフォンやタブレットでの快適なプレイに対応"
    ],
    cons: [
      "フリースピン機能が存在しない",
      "高ボラティリティのため、資金管理に注意が必要",
      "RTPがカジノによって変動する可能性がある"
    ]
  },
  faq: [
    {
      q: "ハニー・ラッシュ100の最大配当倍率は？",
      a: "最大配当倍率は 50,000倍 です。"
    },
    {
      q: "ハニー・ラッシュ100にフリースピンはありますか？",
      a: "いいえ、「Honey Rush 100」には フリースピン機能はありません。ただし、ゲーム内の「コロニーフィーチャー」がそれに代わるような連続勝利と高配当獲得のチャンスを提供します。"
    },
    {
      q: "RTP（還元率）はいくつですか？",
      a: "通常、RTPは 96.54% ですが、プレイするカジノによって 94.50%から96.54%の間で変動する 可能性があります。プレイ前に各カジノのRTPをご確認ください。CasinoTsu は、この RTP の変動についても注意喚起いたします。"
    },
    {
      q: "ゲームが中断された場合はどうなりますか？",
      a: "ゲーム説明によると、ゲームが中断された場合、中断した箇所から再開できます。ただし、ベットが確定していないゲームは2日後に無効となり、不具合による支払いやプレイはすべて無効となります。 CasinoTsu では、プレイ中の予期せぬ中断を防ぐため、安定したインターネット環境でのプレイを推奨いたします。"
    }
  ],
  cta: {
    text: "今すぐプレイ",
    href: "/bonuses/welcome-bonus"
  },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Slots", href: "/slots" },
    { label: "Honey Rush 100", href: "/slots/honey-rush-100" }
  ],
  tableOfContents: [
    { label: "1. 導入・概要", href: "#導入・概要" },
    { label: "2. ゲーム基本情報", href: "#ゲーム基本情報" },
    { label: "3. どこで遊べるか", href: "#どこで遊べるか" },
    { label: "4. ゲーム特徴・フィーチャー", href: "#ゲーム特徴・フィーチャー" },
    { label: "5. プロバイダー情報", href: "#プロバイダー情報" },
    { label: "6. グラフィック・サウンド", href: "#グラフィック・サウンド" },
    { label: "7. ペイアウト・配当表", href: "#ペイアウト・配当表" },
    { label: "8. モバイル対応", href: "#モバイル対応" },
    { label: "9. 戦略・攻略法", href: "#戦略・攻略法" },
    { label: "10. 類似ゲーム", href: "#類似ゲーム" },
    { label: "11. まとめ", href: "#まとめ" }
  ]
};

export default function Page() {
  return <SlotTemplate data={data} canonicalPath="/slots/honey-rush-100" />;
}