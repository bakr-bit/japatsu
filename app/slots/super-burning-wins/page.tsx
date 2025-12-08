import SlotTemplate, { SlotPageData } from "@/components/templates/SlotTemplate";

const data: SlotPageData = {
  title: "Super Burning Wins / スーパー・バーニング・ウィン",
  hero: {
    title: "Super Burning Wins",
    subheading: "クラシックな魅力と現代的なグラフィックの融合",
    description: "Playson社が贈る、レトロなフルーツシンボルとシンプルなゲーム性が特徴の人気スロット。手軽に大勝利を狙いたいプレイヤーにおすすめ。",
    score: 3.7,
    scoreMax: 5,
    rtp: "96.26% (変動の可能性あり)",
    maxMultiplier: "x150",
    provider: "Playson",
    releaseDate: "2018年8月7日",
    volatility: "中〜高",
    reels: "3",
    paylines: "5",
    minBet: "$0.01",
    maxBet: "$100",
    slotImageSrc: "/slots/super-burning-wins.jpg",
    highlights: [
      "レトロなフルーツシンボル",
      "シンプルなゲーム性",
      "マルチプライヤー機能",
      "ワイルドシンボル搭載",
      "高配当の可能性"
    ],
    watchouts: [
      "フリースピンやボーナスゲームなし",
      "ボラティリティは中〜高"
    ]
  },
  featuredCasino: {
    name: "1win",
    logo: "/assets/casino/1win.png",
    href: "https://casinotsu.com/bonuses/welcome-bonus",
    ctaText: "今すぐプレイ",
    ctaHref: "https://casinotsu.com/bonuses/welcome-bonus"
  },
  casinos: [
    {
      name: "Golden Panda",
      logo: "/assets/casino/golden-panda.jpg",
      href: "https://casinotsu.com/reviews/golden-panda",
      bonus: "30倍",
      freeSpins: "30倍",
      wagering: "¥850,000",
      rating: null,
      tagline: "出金が基本的に即時反映でストレスフリー♪",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/golden-panda"
    },
    {
      name: "Betgoat",
      logo: "/assets/casino/betgoat.jpg",
      href: "https://casinotsu.com/reviews/betgoat",
      tagline: "独自コインも利用可能！ 最新クリプトカジノ",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/betgoat"
    },
    {
      name: "1win",
      logo: "/images/1win_375x375.png",
      href: "https://casinotsu.com/bonuses/welcome-bonus",
      tagline: "幅広いゲームラインナップが魅力！今注目の仮想通貨対応オンラインカジノ★",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/bonuses/welcome-bonus"
    },
    {
      name: "Miki",
      logo: "/assets/casino/miki.jpg",
      href: "https://casinotsu.com/reviews/miki",
      bonus: "$4,000",
      freeSpins: "200",
      wagering: "30倍",
      rating: null,
      tagline: "充実したゲームラインナップ！盛りだくさんのボーナスでお得にプレイ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/miki"
    },
    {
      name: "WSM Casino",
      logo: "/images/WSM_375x375.png",
      href: "https://casinotsu.com/reviews/wsm-casino",
      tagline: "時代の最先端？！「ミームコイン」×「オンラインカジノ」",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/wsm-casino"
    },
    {
      name: "Bitz",
      logo: "/assets/casino/bitz.jpg",
      href: "https://casinotsu.com/reviews/bitz",
      bonus: "$1,000",
      wagering: "29倍",
      tagline: "本人確認書類不要！？ 匿名性もバッチリの最新仮想通貨カジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/bitz"
    },
    {
      name: "Katsuwin",
      logo: "/assets/casinos/katsuwin_375x375.png",
      href: "https://casinotsu.com/reviews/katsuwin",
      tagline: "業界トップクラスのパチンコ・パチスロ台数を誇る新星カジノ",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/katsuwin"
    },
    {
      name: "Sushi Casino",
      logo: "/assets/casino/sushi-casino.jpg",
      href: "https://casinotsu.com/reviews/sushi-casino",
      bonus: "¥200,000",
      freeSpins: "50",
      wagering: "35倍",
      rating: null,
      tagline: "てんこ盛りのオファーやVIPプログラムが魅力的な最新オンラインカジノ",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/sushi-casino"
    },
    {
      name: "Betpanda",
      logo: "/images/Betpanda_375x375.png",
      href: "https://casinotsu.com/reviews/betpanda",
      tagline: "匿名で安全に遊べるクリプトオンラインカジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/betpanda"
    },
    {
      name: "Parimatch",
      logo: "/assets/casinos/parimatch_375x375-2.png",
      href: "https://casinotsu.com/reviews/parimatch",
      tagline: "2024年11月オープンの最新オンカジを徹底レビュー！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/parimatch"
    },
    {
      name: "Bets.io",
      logo: "/images/bets-io_375x375.png",
      href: "https://casinotsu.com/reviews/bets-io",
      tagline: "最大1BTCの豪華入金ボーナスが嬉しいクリプトカジノ♪",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/bets-io"
    },
    {
      name: "Duelbits",
      logo: "/assets/casinos/duelbits_375x375-1.png",
      href: "https://casinotsu.com/reviews/duelbits",
      tagline: "500フリースピンが嬉しいクリプトカジノ♪",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/duelbits"
    },
    {
      name: "Sportsbet.io",
      logo: "/assets/casino/sportsbetio.jpg",
      href: "https://casinotsu.com/reviews/sportsbet-io",
      bonus: "1,000USDT",
      tagline: "スポーツベットだけじゃない！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/sportsbet-io"
    },
    {
      name: "Winz",
      logo: "/assets/casino/winz.jpg",
      href: "https://casinotsu.com/reviews/winz-io",
      bonus: "$10,000",
      freeSpins: "800",
      tagline: "ウェルカムオファーやボーナスに賭け条件なし♪",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/winz-io"
    },
    {
      name: "Lucky Block",
      logo: "/assets/casino/lucky-block.jpg",
      href: "https://casinotsu.com/reviews/lucky-block",
      bonus: "€25,000",
      freeSpins: "50",
      wagering: "35倍",
      tagline: "独自トークンもある仮想通貨カジノ♪",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/lucky-block"
    },
    {
      name: "Flush Casino",
      logo: "/images/Flush_375x375-1.png",
      href: "https://casinotsu.com/reviews/flush",
      tagline: "今年大注目のクリプトカジノ",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/flush"
    },
    {
      name: "Roobet",
      logo: "/assets/casino/roobet.jpg",
      href: "https://casinotsu.com/reviews/roobet",
      tagline: "世界的有名人がアンバサダーを務めるオンラインカジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/roobet"
    },
    {
      name: "Casino Sky",
      logo: "/images/casinosky_375x375.png",
      href: "https://casinotsu.com/reviews/casino-sky",
      tagline: "日本のオンカジ業界プロが運営する期待のカジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/casino-sky"
    },
    {
      name: "Mega Dice",
      logo: "/assets/casino/mega-dice.jpg",
      href: "https://casinotsu.com/reviews/mega-dice",
      bonus: "1BTC",
      freeSpins: "50",
      wagering: "35倍",
      tagline: "ボーナス最大1BTCの仮想通貨カジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/mega-dice"
    },
    {
      name: "Fresh Casino",
      logo: "/images/fresh_375x375.png",
      href: "https://casinotsu.com/reviews/fresh-casino",
      tagline: "6,000種類以上のゲームで遊びたい放題！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/fresh-casino"
    },
    {
      name: "Cosmoswin",
      logo: "/assets/casino/cosmoswin.jpg",
      href: "https://casinotsu.com/reviews/cosmoswin",
      bonus: "キャッシュバック 最大$10,000",
      tagline: "可愛い女の子のキャラが案内役♪ ユニークなボーナスショップも必見です！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/cosmoswin"
    },
    {
      name: "BC.Game",
      logo: "/assets/casino/bcgame.jpg",
      href: "https://casinotsu.com/reviews/bc-game",
      bonus: "$1,600",
      freeSpins: "460",
      wagering: "45倍",
      tagline: "圧巻のゲーム数＆最大1,600ドルの初回入金ボーナス！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/bc-game"
    },
    {
      name: "Stake",
      logo: "/images/stake_375x375-1.png",
      href: "https://casinotsu.com/reviews/stake",
      tagline: "ハウスエッジ5%レーキバック＆VIP特典が超おトク！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/stake"
    },
    {
      name: "OhMySpins",
      logo: "/assets/casino/ohmyspins.jpg",
      href: "https://casinotsu.com/reviews/ohmyspins",
      bonus: "¥65,000",
      freeSpins: "200",
      wagering: "35倍",
      tagline: "マニアックなプロバイダーもココなら見つかる！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/ohmyspins"
    },
    {
      name: "Tedbet",
      logo: "/images/tedbet_375x375.png",
      href: "https://casinotsu.com/reviews/tedbet",
      tagline: "豊富な決済方法が嬉しいっ♪",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/tedbet"
    },
    {
      name: "BetRebels",
      logo: "/images/betrebels_375x375.png",
      href: "https://casinotsu.com/reviews/betrebels",
      tagline: "スポーツ好き必須！カジノもどんどん充実中",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/betrebels"
    },
    {
      name: "Conquestador",
      logo: "/images/Conquestador_375x375.png",
      href: "https://casinotsu.com/reviews/conquestador",
      tagline: "検索機能抜群！好みのゲームをサクサク検索できちゃう！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/conquestador"
    },
    {
      name: "Cloudbet",
      logo: "/assets/casino/cloudbet.jpg",
      href: "https://casinotsu.com/reviews/cloudbet",
      bonus: "5BTC",
      tagline: "入出金額上限なし！仮想通貨好きハイローラー必見",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/cloudbet"
    },
    {
      name: "Lilibet",
      logo: "/images/lilibet_375x375.png",
      href: "https://casinotsu.com/reviews/lilibet",
      tagline: "勝ったらラッキー、負けても安心！初心者さんいらっしゃい！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/lilibet"
    },
    {
      name: "Livecasino.io",
      logo: "/images/casino/livecasinoio.jpg",
      href: "https://casinotsu.com/reviews/livecasino-io",
      tagline: "ライブカジノ×仮想通貨。そんなモダンな世界はいかが？",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/livecasino-io"
    },
    {
      name: "Lucky Bull",
      logo: "/assets/casino/lucky-bull.jpg",
      href: "https://casinotsu.com/reviews/lucky-bull",
      bonus: "$917",
      wagering: "30倍",
      tagline: "キャラクターと一緒にラッキーブルの世界でクエスト攻略！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/lucky-bull"
    },
    {
      name: "Gamdom",
      logo: "/assets/casino/gamdom.jpg",
      href: "https://casinotsu.com/reviews/gamdom",
      tagline: "ハイローラープレイヤーにもってこいの最強レーキバックカジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/gamdom"
    },
    {
      name: "Energy Casino",
      logo: "/images/energy-casino_375x375.png",
      href: "https://casinotsu.com/reviews/energy-casino",
      tagline: "ウェブサイトの見やすさと操作性は抜群なカジノ",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/energy-casino"
    },
    {
      name: "Casino Me",
      logo: "/assets/casino/casino-me.jpg",
      href: "https://casinotsu.com/reviews/casino-me",
      bonus: "$777",
      freeSpins: "77",
      wagering: "20倍",
      tagline: "独自システムのお得なキャッシュバックあり！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/casino-me"
    },
    {
      name: "Bons.com",
      logo: "/assets/casinos/bons_375x375-1.png",
      href: "https://casinotsu.com/reviews/bons",
      tagline: "マインクラフトチックでも中身はモダン",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/bons"
    },
    {
      name: "Mystino",
      logo: "/assets/casinos/mystino_375x375.png",
      href: "https://casinotsu.com/reviews/mystino",
      tagline: "日本人プレイヤーの心をグッと掴むカジノといえば…！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/mystino"
    },
    {
      name: "Empire777",
      logo: "/assets/casino/empire777.jpg",
      href: "https://casinotsu.com/reviews/empire777",
      bonus: "$1,600",
      wagering: "20倍",
      tagline: "アジアNo.1を豪語するオンカジはここだ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/empire777"
    },
    {
      name: "Pinnacle",
      logo: "/assets/casino/pinnacle.jpg",
      href: "https://casinotsu.com/reviews/pinnacle",
      tagline: "カジノもスポーツベットも楽しめるハイブリッド！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/pinnacle"
    },
    {
      name: "Casinoin",
      logo: "/assets/casino/casinoin.jpg",
      href: "https://casinotsu.com/reviews/casinoin",
      bonus: "￥25,000",
      freeSpins: "200",
      wagering: "25倍",
      tagline: "13種類の仮想通貨が利用可能なカジノ",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/casinoin"
    },
    {
      name: "WinUnique",
      logo: "/assets/casino/winunique.jpg",
      href: "https://casinotsu.com/reviews/winunique",
      bonus: "$330",
      freeSpins: "20",
      wagering: "30倍",
      tagline: "ピカピカ金色招き猫が勝利を運んでくれる？！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/winunique"
    },
    {
      name: "BitStarz",
      logo: "/images/bitstarz_375x375.png",
      href: "https://casinotsu.com/reviews/bitstarz",
      tagline: "複数通貨のマルチウォレット対応カジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/bitstarz"
    },
    {
      name: "Joy Casino",
      logo: "/images/joycasino_375x375.png",
      href: "https://casinotsu.com/reviews/joycasino",
      tagline: "ジョイカジノのてんこ盛りボーナスを貰っちゃおう！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/joycasino"
    },
    {
      name: "Casino Secret",
      logo: "/assets/casinos/casino-secret_375x375.png",
      href: "https://casinotsu.com/reviews/casino-secret",
      tagline: "キャッシュバックと言えばこのカジノで間違いなし",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/casino-secret"
    },
    {
      name: "Bitcasino.io",
      logo: "/assets/casino/bitcasinoio.jpg",
      href: "https://casinotsu.com/reviews/bitcasino-io",
      bonus: "¥200,000",
      wagering: "40倍",
      tagline: "元祖仮想通貨カジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/bitcasino-io"
    },
    {
      name: "Casino-X",
      logo: "/images/casino-x_375x375-1.png",
      href: "https://casinotsu.com/reviews/casino-x",
      tagline: "太っ腹ボーナス盛りだくさんのカジノエックスで、お得にプレイ♪",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/casino-x"
    },
    {
      name: "Casitabi",
      logo: "/assets/casino/casitabi.jpg",
      href: "https://casinotsu.com/reviews/casitabi",
      bonus: "$500",
      freeSpins: "250",
      wagering: "20倍",
      tagline: "RPG型カジノで旅をしながらボスを倒してお得にプレイ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/casitabi"
    },
    {
      name: "Eldoah Casino",
      logo: "/assets/casinos/eldoah_375x375-3.png",
      href: "https://casinotsu.com/reviews/eldoah",
      tagline: "ライブカジノ利用満足度6年連続ナンバー1のオンラインカジノ",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/eldoah"
    }
  ],
  gameInfo: {
    intro: "Super Burning Winsは、クラシックスロットの魅力を現代的なグラフィックと機能で再現したPlayson（プレイスン）社による人気スロットゲームです。レトロなフルーツシンボルとシンプルなゲーム性が特徴で、昔ながらのスロットファンはもちろん、手軽に大勝利を狙いたいプレイヤーにもおすすめの一台です。",
    basicInfo: {
      rtp: "96.26% 〜 96.27%",
      volatility: "中〜高",
      reels: "3",
      paylines: "5",
      minBet: "$0.01",
      maxBet: "$100",
      provider: "Playson",
      releaseDate: "2018年8月7日"
    }
  },
  payoutTable: {
    title: "ペイアウト・配当表 (1ドルベット時)",
    symbols: [
      {
        name: "７",
        payout3: "x150"
      },
      {
        name: "ベル",
        payout3: "x50"
      },
      {
        name: "BAR",
        payout3: "x10"
      },
      {
        name: "チェリー",
        payout3: "x7"
      },
      {
        name: "ワイルドシンボル",
        description: "他のシンボル（スキャッターを除く）の代わりとなり、配当成立を助けます。",
        isSpecial: true
      }
    ],
    maxPayout: "x150 (シンボル揃い時) / 最大 $75,000",
    notes: [
      "コインバリューによります。",
      "画面全体に同一のフルーツシンボルが揃うと、ペイアウトに2倍のマルチプライヤーが適用されます。"
    ]
  },
  features: {
    title: "ゲーム特徴・フィーチャー",
    items: [
      {
        name: "ワイルドシンボル",
        description: "通常のシンボル（スキャッターを除く）の代わりに出現し、ペイラインの成立を助けます。",
        icon: "💡"
      },
      {
        name: "マルチプライヤー機能",
        description: "同一シンボル（フルーツシンボル）が画面全体に揃った場合、ペイアウトに2倍のマルチプライヤーが適用されます。例: 9つの同じフルーツシンボルで勝利金が2倍になります。",
        icon: "✖️"
      },
      {
        name: "オートプレイ機能",
        description: "ベットを一定に保ちたい場合や、長時間のプレイを自動化する便利な機能です。",
        icon: "🕹️"
      }
    ]
  },
  sections: [
    {
      heading: "デモプレイについて",
      paragraphs: [
        "Super Burning Winsは、多くのオンラインカジノのレビューサイトで無料デモモードが提供されております。リアルマネーでプレイする前に、ゲームの感触や機能を試したいプレイヤーは、ぜひデモプレイをご活用ください。👀"
      ]
    },
    {
      heading: "プロバイダー情報",
      paragraphs: [
        "Playsonは、マルタに拠点を置く、革新的なカジノゲームソフトウェアプロバイダーです。2012年の設立以来、高品質なグラフィックとサウンド、そしてユニークなゲームメカニクスを特徴とするスロットゲームを数多くリリースしております。彼らの「Timeless Fruit Slots」コレクションは特に有名で、Super Burning Winsもそのコレクションの一部として、クラシックなテーマに現代的なひねりを加えた作品となっています。"
      ],
      bullets: [
        "**ライセンス:** マルタ（Malta Gaming Authority）など、複数の国からのライセンスを取得しております。",
        "**他の人気作品:** Solar Queen, Buffalo Power: Hold and Win, Fruits & Stars"
      ]
    },
    {
      heading: "グラフィック・サウンド",
      paragraphs: [
        "Super Burning Winsは、クラシックスロットの雰囲気を忠実に再現しながらも、現代的な3Dグラフィックスで描かれております。チェリー、BAR、ベル、そして「7」といったお馴染みのシンボルは、光沢感があり、まるで本物の宝石のように輝いております。特に、シンボルが揃った時のアニメーションや、炎が燃え上がるような演出は、プレイヤーの興奮を高めます。レトロなデザインでありながら、洗練された美しさが際立っております。✨",
        "サウンドトラックは、昔ながらのランドカジノのスロットマシンを彷彿とさせる、落ち着いたBGMと効果音で構成されております。リールが回転する音、シンボルが揃った時の軽快なサウンド、そして勝利時のファンファーレは、ゲームの雰囲気を盛り上げつつも、派手すぎず耳に心地よいバランスに調整されております。うるさいサウンドが苦手なプレイヤーでも、リラックスしてプレイできるでしょう。🎶"
      ]
    },
    {
      heading: "モバイル対応",
      paragraphs: [
        "Super Burning Winsは、スマートフォンやタブレットなどのモバイルデバイスにも完全対応しております。HTML5技術を採用しているため、特別なアプリのダウンロードは不要で、お使いのデバイスのウェブブラウザから直接アクセスしてプレイできます。"
      ],
      bullets: [
        "**操作性:** タッチ操作に最適化されており、スピンボタンやベット額の調整などが簡単に行えます。",
        "**表示:** 画面サイズに合わせてレイアウトが自動調整されるため、PCと同じように快適なゲーム体験が可能です。",
        "**パフォーマンス:** 動作は非常にスムーズで、移動中や外出先からでもストレスなく楽しめます。📱"
      ]
    },
    {
      heading: "戦略・攻略法",
      paragraphs: [
        "Super Burning Winsはシンプルなスロットですが、いくつかの戦略を意識することで、より楽しく、そして効率的にプレイすることができます。 CasinoTsuが、そのポイントをご紹介いたします。"
      ],
      bullets: [
        "ベット戦略:",
        "  * 資金管理: ご自身の予算に合わせて、1回のスピンあたりのベット額を決めましょう。ボラティリティが中〜高なので、慎重なベット額設定が重要です。",
        "  * ベット額の調整: 勝利が続いている時は少し上げ、負けが込んでいる時は下げるなど、柔軟な対応を心がけましょう。",
        "  * 少額ベットで長期プレイ: RTPを最大限に活かすには、少額ベットでじっくりとプレイし、マルチプライヤー機能や高配当シンボルによる大きな勝利を待つのが有効です。",
        "  * 目標設定と損切り: 事前に勝利目標額と損切りラインを決めておき、それに達したらプレイを終了するルールを設けることで、冷静な判断を保ちやすくなります。🎯",
        "**フィーチャー活用法:**",
        "  * マルチプライヤーを狙う: 同一シンボルが画面全体に揃うと、配当が2倍になるチャンスがあります。",
        "  * ワイルドシンボルの活用: 配当成立を助ける重要な役割を果たします。多く出現するタイミングを掴むことができれば、連続して配当を得られる可能性が高まります。",
        "**注意点:**",
        "  * RTPの変動: プレイする前に、各カジノのRTP設定を確認することをおすすめします。",
        "  * シンプルさゆえの単調さ: ボーナスゲームやフリースピンがないため、長時間のプレイで飽きを感じるかもしれません。短時間でサクッとプレイし、勝利を狙うスタイルが向いております。"
      ]
    },
    {
      heading: "類似ゲーム",
      paragraphs: [
        "Super Burning Winsに似たゲームをお探しの方には、以下のスロットがおすすめです。 CasinoTsuが、そのラインナップをご紹介いたします。"
      ],
      bullets: [
        "Playsonの人気クラシックスロット:",
        "  * Burning Wins: Super Burning Winsの原型とも言えるクラシックスロット。",
        "  * Super Burning Wins: Respin: マルチプライヤーやリスピン機能が強化されたバリエーション。",
        "  * Hot Burning Wins: よりアツいゲーム体験を提供する、炎をテーマにしたスロット。",
        "**他のプロバイダーのクラシックスロット:**",
        "  * Fruit Warp (Thunderkick): 独特なボーナス機能を持つフルーツテーマのスロット。",
        "  * Mega Joker (NetEnt): 高いRTPとスーパゲームモードが特徴のレトロスロット。"
      ],
      notes: [
        "これらのスロットも、クラシックスタイルの魅力や、シンプルなゲーム性、そして高配当の可能性を秘めております。"
      ]
    },
    {
      heading: "まとめ",
      paragraphs: [
        "Super Burning Winsは、クラシックスロットの魅力を凝縮した、シンプルながらも奥深いゲームです。レトロなグラフィックとサウンド、そして「7」や「ベル」といった高配当シンボル、さらにマルチプライヤー機能による一撃必殺の可能性は、多くのプレイヤーを魅了し続けております。 CasinoTsuは、このゲームの正確さが第一、興奮はその次という理念に基づき、皆様に公正な情報をお届けいたします。",
        "### こんなプレイヤーにおすすめ！",
        "  * クラシックスロットファン: 昔ながらのスロットの雰囲気が好きな方。",
        "  * 初心者プレイヤー: ルールが分かりやすく、すぐにプレイできるスロットを探している方。",
        "  * 短時間で勝利を狙いたい方: シンプルなゲーム性で、サクッとプレイして勝ち逃げしたい方。",
        "  * ノスタルジーを感じたい方: レトロなデザインやサウンドで、懐かしい気分に浸りたい方。",
        "複雑なボーナス機能はありませんが、その分、純粋なスロットの楽しさと、一攫千金の夢を味わえるのがSuper Burning Winsの魅力と言えるでしょう。ぜひ一度、この炎のような熱いスロットを体験してみてください！🔥"
      ]
    }
  ],
  similarGames: [
    {
      name: "Mega Joker",
      href: "/slots/mega-joker",
      provider: "NetEnt",
      description: "高いRTPとスーパゲームモードが特徴のレトロスロット。"
    }
  ],
  prosCons: {
    pros: [
      "クラシックなスロットデザインとテーマ",
      "シンプルなゲームプレイで初心者にも分かりやすい",
      "ワイルドシンボルとマルチプライヤー機能搭載",
      "高配当シンボルによる大きな勝利の可能性",
      "モバイルデバイスに完全対応",
      "デモプレイで無料体験可能"
    ],
    cons: [
      "フリースピンやボーナスゲームがない",
      "ボラティリティが中〜高のため、資金管理に注意が必要",
      "一部のプレイヤーには単調に感じられる可能性がある"
    ]
  },
  faq: [
    {
      q: "Super Burning WinsのRTP（返還率）はどのくらいですか？",
      a: "Super Burning WinsのRTPは、一般的に96.26%〜96.27%とされております。ただし、RTPはカジノやゲーム設定によって変動する可能性があるため、プレイする前に各カジノの情報を確認することをおすすめします。 CasinoTsuは、常に正確な情報を提供できるよう、チェック、ダブルチェック、そして CasinoTsu チェック を行っております。✅"
    },
    {
      q: "Super Burning Winsにはフリースピンやボーナスゲームはありますか？",
      a: "いいえ、Super Burning Winsは「Classic 5 Lines」という名前の通り、非常にシンプルなクラシックスロットのため、フリースピンや特別なボーナスゲームは搭載されておりません。その代わりに、ワイルドシンボルや、同一シンボルが揃った際のマルチプライヤー機能が、プレイヤーに勝利のチャンスを提供します。"
    },
    {
      q: "このスロットは、ハイローラー（高額ベットをするプレイヤー）にも向いていますか？",
      a: "Super Burning Winsの最大ベット額は$100となっており、一般的なスロットと比較すると、ハイローラー向けの超高額ベットはできません。また、複雑なボーナス機能の代わりに、シンボル揃いの配当とマルチプライヤーが中心のため、熱狂的なボーナスラウンドを期待するプレイヤーには物足りないかもしれません。しかし、最大$75,000という勝利の可能性は秘めているため、堅実なベットで大きな勝利を狙いたいプレイヤーには魅力的です。 CasinoTsu 推薦 のカジノでは、多様なベットオプションをご用意しております。"
    },
    {
      q: "プレイヤーからの評判はどのようなものがありますか？",
      a: "プレイヤーからは、昔ながらのスロットのノスタルジーや、よくレンダリングされた3Dグラフィックが高く評価されております。一方で、特別なフィーチャーが少ないため、「Xファクター」に欠けるという意見や、variation（変動性）が限定的であるという声もあります。しかし、全体的には「スムーズでプレイしやすい」という評価が多く、特にレトロスロットファンからは直接的な支持を得ております。 CasinoTsu は、皆様からのフィードバックを大切にしております。"
    }
  ],
  cta: {
    text: "今すぐプレイ！",
    href: "/casinos"
  },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Slots", href: "/slots" },
    { label: "Super burning wins", href: "/slots/super-burning-wins" }
  ],
  tableOfContents: [
    { label: "どこで遊べるか？ Super Burning Wins をプレイできるカジノ", href: "#casinos" },
    { label: "デモプレイについて", href: "#demo" },
    { label: "ゲーム基本情報", href: "#game-info" },
    { label: "ゲーム特徴・フィーチャー", href: "#features" },
    { label: "プロバイダー情報", href: "#provider-info" },
    { label: "グラフィック・サウンド", href: "#graphics-sound" },
    { label: "ペイアウト・配当表", href: "#payout-table" },
    { label: "モバイル対応", href: "#mobile" },
    { label: "戦略・攻略法", href: "#strategy" },
    { label: "類似ゲーム", href: "#similar-games" },
    { label: "まとめ", href: "#summary" },
    { label: "よくある質問 (FAQ)", href: "#faq" }
  ]
};

export default function Page() {
  return <SlotTemplate data={data} canonicalPath="/slots/super-burning-wins" />;
}
