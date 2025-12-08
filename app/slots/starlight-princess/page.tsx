import SlotTemplate, { SlotPageData } from "@/components/templates/SlotTemplate";

const data: SlotPageData = {
  title: "Starlight Princess",
  hero: {
    title: "Starlight Princess",
    subheading: "スターライト・プリンセス",
    description: "破壊力は抜群！君は高ボラの底力を引き出せるか？！ムンプリならぬスタプリで、マルチプライヤー×フリースピンの生み出すビッグ勝利を手に入れよう！ CasinoTsu は、このエキサイティングなゲームを皆様に自信を持って推薦いたします。",
    score: 4.6,
    scoreMax: 5,
    rtp: "95.51%",
    maxMultiplier: "x5,000",
    provider: "Pragmatic Play",
    releaseDate: "2021年9月23日",
    volatility: "High",
    reels: "5リール6段",
    paylines: "Pay Anywhere",
    minBet: "$0.20",
    maxBet: "$100",
    slotImageSrc: "/slots/starlight-princess.jpg",
    highlights: [
      "フリースピン",
      "リトリガー（フリースピン追加）",
      "スキャッターシンボル",
      "マルチプライヤーシンボル",
      "アンテベット（ベット額25%増でボーナス突入確率2倍）",
      "ボーナス購入機能（ベット額の100倍）"
    ],
    watchouts: [
      "高ボラティリティのため、予算管理が重要",
      "RTPはカジノによって異なる場合がある",
      "ボーナス購入機能は一部地域で利用不可"
    ]
  },
  featuredCasino: {
    name: "2アップカジノ",
    logo: "/assets/casino/2up.png",
    href: "/reviews/2up",
    ctaText: "今すぐプレイ",
    ctaHref: "/reviews/2up"
  },
  casinos: [
    {
      name: "ReSpin",
      logo: "/assets/casino/respin.jpg",
      href: "/reviews/respin",
      bonus: "300USDT",
      freeSpins: "200",
      wagering: "35x (ボーナス), 5x (フリースピン)",
      rating: 4,
      tagline: "10種類のメジャーな仮想通貨が使えるクリプトカジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/respin"
    },
    {
      name: "Golden Panda",
      logo: "/assets/casino/golden-panda.jpg",
      href: "/reviews/golden-panda",
      bonus: "¥850,000",
      freeSpins: "50",
      wagering: "30x (ボーナス), 30x (フリースピン)",
      rating: 4,
      tagline: "出金は基本的に即時反映でストレスフリー♪",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/golden-panda"
    },
    {
      name: "Betgoat",
      logo: "/assets/casino/betgoat.jpg",
      href: "/reviews/betgoat",
      bonus: "$0",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "独自コインも利用可能！ 最新クリプトカジノ",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/betgoat"
    },
    {
      name: "2up",
      logo: "/images/casino/2up_375x375.png",
      href: "/reviews/2up",
      bonus: "-",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "仮想通貨でも日本円でも遊べる、最新オンラインカジノ",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/2up"
    },
    {
      name: "Cybet",
      logo: "/assets/casino/cybet.jpg",
      href: "/reviews/cybet",
      bonus: "$500",
      freeSpins: "50",
      wagering: "35x (ボーナス), 35x (フリースピン)",
      rating: 3.5,
      tagline: "可愛いマスコットキャラが魅力の最新クリプトカジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/cybet"
    },
    {
      name: "1win",
      logo: "/images/casino/1win_375x375.png",
      href: "/reviews/1win",
      bonus: "-",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "幅広いゲームラインナップが魅力！今注目の仮想通貨対応オンラインカジノ★",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/1win"
    },
    {
      name: "Miki",
      logo: "/assets/casino/miki.jpg",
      href: "/reviews/miki",
      bonus: "$4,000",
      freeSpins: "200",
      wagering: "30x (ボーナス), 20x (フリースピン)",
      rating: 4,
      tagline: "充実したゲームラインナップ！盛りだくさんのボーナスでお得にプレイ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/miki"
    },
    {
      name: "WSM Casino",
      logo: "/images/casino/WSM_375x375.png",
      href: "/reviews/wsm-casino",
      bonus: "-",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "時代の最先端？！「ミームコイン」×「オンラインカジノ」",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/wsm-casino"
    },
    {
      name: "Bitz",
      logo: "/assets/casino/bitz.jpg",
      href: "/reviews/bitz",
      bonus: "$1,000",
      freeSpins: "-",
      wagering: "29x (ボーナス)",
      rating: 4,
      tagline: "本人確認書類不要！？ 匿名性もバッチリの最新仮想通貨カジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/bitz"
    },
    {
      name: "Wikibet",
      logo: "/assets/casino/wikibet.jpg",
      href: "/reviews/wikibet",
      bonus: "¥50,000",
      freeSpins: "200",
      wagering: "20x (ボーナス), 20x (フリースピン)",
      rating: 4,
      tagline: "シンプルな操作性と可愛いデザインが特徴！厳選されたゲームをプレイしよう★",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/wikibet"
    },
    {
      name: "Katsuwin",
      logo: "/assets/casinos/katsuwin_375x375.png",
      href: "/reviews/katsuwin",
      bonus: "-",
      freeSpins: "-",
      wagering: "-",
      rating: 4.5,
      tagline: "業界トップクラスのパチンコ・パチスロ台数を誇る新星カジノ",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/katsuwin"
    },
    {
      name: "Sushi Casino",
      logo: "/assets/casino/sushi-casino.jpg",
      href: "/reviews/sushi-casino",
      bonus: "¥200,000",
      freeSpins: "50",
      wagering: "35x (ボーナス), 40x (フリースピン)",
      rating: 4,
      tagline: "てんこ盛りのオファーやVIPプログラムが魅力的な最新オンラインカジノ",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/sushi-casino"
    },
    {
      name: "Betpanda",
      logo: "/images/casino/Betpanda_375x375.png",
      href: "/reviews/betpanda",
      bonus: "-",
      freeSpins: "-",
      wagering: "-",
      rating: 3.5,
      tagline: "匿名で安全に遊べるクリプトオンラインカジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/betpanda"
    },
    {
      name: "Parimatch",
      logo: "/assets/casinos/parimatch_375x375-2.png",
      href: "/reviews/parimatch",
      bonus: "-",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "2024年11月オープンの最新オンカジを徹底レビュー！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/parimatch"
    },
    {
      name: "Bets.io",
      logo: "/images/casino/bets-io_375x375.png",
      href: "/reviews/bets-io",
      bonus: "-",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "最大1BTCの豪華入金ボーナスが嬉しいクリプトカジノ♪",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/bets-io"
    },
    {
      name: "Duelbits",
      logo: "/assets/casinos/duelbits_375x375-1.png",
      href: "/reviews/duelbits",
      bonus: "-",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "500フリースピンが嬉しいクリプトカジノ♪",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/duelbits"
    },
    {
      name: "Sportsbet.io",
      logo: "/assets/casino/sportsbetio.jpg",
      href: "/reviews/sportsbet-io",
      bonus: "1,000USDT",
      freeSpins: "-",
      wagering: "-",
      rating: 4.5,
      tagline: "スポーツベットだけじゃない！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/sportsbet-io"
    },
    {
      name: "Shuffle",
      logo: "/assets/casino/shuffle.jpg",
      href: "/reviews/shuffle",
      bonus: "$2,020",
      freeSpins: "-",
      wagering: "40x (ボーナス)",
      rating: 4,
      tagline: "独自のトークンで資産運用もできる仮想通貨カジノ★",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/shuffle"
    },
    {
      name: "Winz",
      logo: "/assets/casino/winz.jpg",
      href: "/reviews/winz-io",
      bonus: "$10,000",
      freeSpins: "800",
      wagering: "-",
      rating: 4.5,
      tagline: "ウェルカムオファーやボーナスに賭け条件なし♪",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/winz-io"
    },
    {
      name: "Dafabet",
      logo: "/assets/casino/dafabet.jpg",
      href: "/reviews/dafabet",
      bonus: "$500",
      freeSpins: "-",
      wagering: "20x (ボーナス)",
      rating: 4,
      tagline: "セルティックFCのスポンサーカジノ",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/dafabet"
    },
    {
      name: "Lucky Block",
      logo: "/assets/casino/lucky-block.jpg",
      href: "/reviews/lucky-block",
      bonus: "€25,000",
      freeSpins: "50",
      wagering: "35x (フリースピン)",
      rating: 4,
      tagline: "独自トークンもある仮想通貨カジノ♪",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/lucky-block"
    },
    {
      name: "Ramenbet",
      logo: "/images/casino/ramenbet_375x375-1.png",
      href: "/reviews/ramenbet",
      bonus: "-",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "スロットもライブカジノもスポーツも充実！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/ramenbet"
    },
    {
      name: "Flush Casino",
      logo: "/images/casino/Flush_375x375-1.png",
      href: "/reviews/flush-casino",
      bonus: "-",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "今年大注目のクリプトカジノ",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/flush-casino"
    },
    {
      name: "Queen Casino",
      logo: "/assets/casino/shinqueen.jpg",
      href: "/reviews/queen-casino",
      bonus: "1,800USDT",
      freeSpins: "288",
      wagering: "30x (ボーナス), 20x (フリースピン)",
      rating: 4.5,
      tagline: "アジア市場知名度ナンバーワンに君臨するオンラインカジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/queen-casino"
    },
    {
      name: "Roobet",
      logo: "/assets/casino/roobet.jpg",
      href: "/reviews/roobet",
      bonus: "$0",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "世界的有名人がアンバサダーを務めるオンラインカジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/roobet"
    },
    {
      name: "Casino Sky",
      logo: "/images/casino/casinosky_375x375.png",
      href: "/reviews/casino-sky",
      bonus: "-",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "日本のオンカジ業界プロが運営する期待のカジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/casino-sky"
    },
    {
      name: "Mega Dice",
      logo: "/assets/casino/mega-dice.jpg",
      href: "/reviews/mega-dice",
      bonus: "1BTC",
      freeSpins: "50",
      wagering: "35x (ボーナス), 40x (フリースピン)",
      rating: 3.5,
      tagline: "ボーナス最大1BTCの仮想通貨カジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/mega-dice"
    },
    {
      name: "Cosmoswin",
      logo: "/assets/casino/cosmoswin.jpg",
      href: "/reviews/cosmoswin",
      bonus: "$10,000",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "可愛い女の子のキャラが案内役♪ ユニークなボーナスショップも必見です！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/cosmoswin"
    },
    {
      name: "BC.Game",
      logo: "/assets/casino/bcgame.jpg",
      href: "/reviews/bc-game",
      bonus: "$1,600",
      freeSpins: "460",
      wagering: "45x (ボーナス), 60x (フリースピン)",
      rating: 4,
      tagline: "圧巻のゲーム数＆最大1,600ドルの初回入金ボーナス！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/bc-game"
    },
    {
      name: "Empire.io",
      logo: "/assets/casino/empireio.jpg",
      href: "/reviews/empire-io",
      bonus: "$0",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "賭け条件ナシのキャシュバック＆VIP特典がスゴイ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/empire-io"
    },
    {
      name: "Stake",
      logo: "/images/casino/stake_375x375-1.png",
      href: "/reviews/stake",
      bonus: "-",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "ハウスエッジ5%レーキバック＆VIP特典が超おトク！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/stake"
    },
    {
      name: "Wonder Casino",
      logo: "/assets/casinos/wonder-casino_375x375.png",
      href: "/reviews/wonder-casino",
      bonus: "-",
      freeSpins: "-",
      wagering: "-",
      rating: 4.5,
      tagline: "業界最速の出金スピードと仮想通貨特化ボーナス！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/wonder-casino"
    },
    {
      name: "K8",
      logo: "/assets/casino/k8.jpg",
      href: "/reviews/k8",
      bonus: "$1,840",
      freeSpins: "288",
      wagering: "25x (ボーナス), 25x (フリースピン)",
      rating: 4.5,
      tagline: "日本で人気の実機を打つならK8のパチンコで決まりっ！昔懐かしの台を打ちまくろう！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/k8"
    },
    {
      name: "OhMySpins",
      logo: "/assets/casino/ohmyspins.jpg",
      href: "/reviews/ohmyspins",
      bonus: "¥65,000",
      freeSpins: "200",
      wagering: "35x (ボーナス), 40x (フリースピン)",
      rating: 4,
      tagline: "マニアックなプロバイダーもココなら見つかる！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/ohmyspins"
    },
    {
      name: "Yuugado",
      logo: "/assets/casinos/yuugado_375x375-1-1.png",
      href: "/reviews/yuugado",
      bonus: "-",
      freeSpins: "-",
      wagering: "-",
      rating: 4.5,
      tagline: "「和」がテーマのオンラインカジノ \| パチンコからスポーツベットまで！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/yuugado"
    },
    {
      name: "Tedbet",
      logo: "/images/casino/tedbet_375x375.png",
      href: "/reviews/tedbet",
      bonus: "-",
      freeSpins: "-",
      wagering: "-",
      rating: 4.5,
      tagline: "豊富な決済方法が嬉しいっ♪",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/tedbet"
    },
    {
      name: "BetRebels",
      logo: "/images/casino/betrebels_375x375.png",
      href: "/reviews/betrebels",
      bonus: "-",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "スポーツ好き必須！カジノもどんどん充実中",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/betrebels"
    },
    {
      name: "Conquestador",
      logo: "/images/casino/Conquestador_375x375.png",
      href: "/reviews/conquestador",
      bonus: "-",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "検索機能抜群！好みのゲームをサクサク検索できちゃう！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/conquestador"
    },
    {
      name: "Konibet",
      logo: "/images/casino/konibet_375x375.png",
      href: "/reviews/konibet",
      bonus: "-",
      freeSpins: "-",
      wagering: "-",
      rating: 4.5,
      tagline: "パチンコ・パチスロが遊べるオンラインカジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/konibet"
    },
    {
      name: "Casino Me",
      logo: "/assets/casino/casino-me.jpg",
      href: "/reviews/casino-me",
      bonus: "$777",
      freeSpins: "77",
      wagering: "20x (ボーナス), 20x (フリースピン)",
      rating: 4,
      tagline: "独自システムのお得なキャッシュバックあり！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/casino-me"
    },
    {
      name: "Kakeyo",
      logo: "/assets/casino/kakeyo.jpg",
      href: "/reviews/kakeyo",
      bonus: "¥100,000",
      freeSpins: "50",
      wagering: "10x (ボーナス), 10x (フリースピン)",
      rating: 4,
      tagline: "ボーナス充実！スポーツベットにも最適カジノ♪",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/kakeyo"
    },
    {
      name: "Mystino",
      logo: "/assets/casinos/mystino_375x375.png",
      href: "/reviews/mystino",
      bonus: "-",
      freeSpins: "-",
      wagering: "-",
      rating: 4.5,
      tagline: "日本人プレイヤーの心をグッと掴むカジノといえば…！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/mystino"
    },
    {
      name: "Trustdice",
      logo: "/images/casino/Trustdice_375x375.png",
      href: "/reviews/trustdice",
      bonus: "-",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "賭けて遊んで資産運用もできるオンラインカジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/trustdice"
    },
    {
      name: "InterCasino",
      logo: "/assets/casinos/Inter-Casino_375x375-1.png",
      href: "/reviews/inter-casino",
      bonus: "-",
      freeSpins: "-",
      wagering: "-",
      rating: 4.5,
      tagline: "実は20年以上歴史のあるカジノはココ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/inter-casino"
    },
    {
      name: "Empire777",
      logo: "/assets/casino/empire777.jpg",
      href: "/reviews/empire777",
      bonus: "$1,600",
      freeSpins: "-",
      wagering: "20x (ボーナス)",
      rating: 4,
      tagline: "アジアNo.1を豪語するオンカジはここだ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/empire777"
    },
    {
      name: "Pinnacle",
      logo: "/assets/casino/pinnacle.jpg",
      href: "/reviews/pinnacle",
      bonus: "$0",
      freeSpins: "-",
      wagering: "-",
      rating: 3.5,
      tagline: "カジノもスポーツベットも楽しめるハイブリッド！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/pinnacle"
    },
    {
      name: "WinUnique",
      logo: "/assets/casino/winunique.jpg",
      href: "/reviews/winunique",
      bonus: "$330",
      freeSpins: "20",
      wagering: "30x (ボーナス), 30x (フリースピン)",
      rating: 4,
      tagline: "ピカピカ金色招き猫が勝利を運んでくれる？！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/winunique"
    },
    {
      name: "Joy Casino",
      logo: "/images/casino/joycasino_375x375.png",
      href: "/reviews/joycasino",
      bonus: "-",
      freeSpins: "-",
      wagering: "-",
      rating: 4.5,
      tagline: "ジョイカジノのてんこ盛りボーナスを貰っちゃおう！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/joycasino"
    },
    {
      name: "Vera&John",
      logo: "/assets/casinos/VeraJohn_375x375-1.png",
      href: "/reviews/vera-john",
      bonus: "-",
      freeSpins: "-",
      wagering: "-",
      rating: 4.5,
      tagline: "オンカジといえば、やっぱりベラジョン！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/vera-john"
    },
    {
      name: "Live Casino House",
      logo: "/assets/casino/live-casino-house.jpg",
      href: "/reviews/live-casino-house",
      bonus: "¥50,000",
      freeSpins: "-",
      wagering: "20x (ボーナス)",
      rating: 4,
      tagline: "ライブカジノを始め、多種多様なゲームが遊べるおなじみのカジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/live-casino-house"
    },
    {
      name: "Bitcasino.io",
      logo: "/assets/casino/bitcasinoio.jpg",
      href: "/reviews/bitcasino-io",
      bonus: "¥200,000",
      freeSpins: "-",
      wagering: "40x (ボーナス)",
      rating: 4.5,
      tagline: "元祖仮想通貨カジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/bitcasino-io"
    },
    {
      name: "Casino-X",
      logo: "/images/casino/casino-x_375x375-1.png",
      href: "/reviews/casino-x",
      bonus: "-",
      freeSpins: "-",
      wagering: "-",
      rating: 4.5,
      tagline: "太っ腹ボーナス盛りだくさんのカジノエックスで、お得にプレイ♪",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/casino-x"
    },
    {
      name: "Casitabi",
      logo: "/assets/casino/casitabi.jpg",
      href: "/reviews/casitabi",
      bonus: "$500",
      freeSpins: "250",
      wagering: "20x (ボーナス), 20x (フリースピン)",
      rating: 4.5,
      tagline: "RPG型カジノで旅をしながらボスを倒してお得にプレイ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/casitabi"
    },
    {
      name: "Eldoah Casino",
      logo: "/assets/casinos/eldoah_375x375-3.png",
      href: "/reviews/eldoah",
      bonus: "-",
      freeSpins: "-",
      wagering: "-",
      rating: 4.5,
      tagline: "ライブカジノ利用満足度6年連続ナンバー1のオンラインカジノ",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/eldoah"
    }
  ],
  gameInfo: {
    intro: "スターライト・プリンセスは、Pragmatic Play社によって開発された、アニメ・マンガ風のテーマを持つビデオスロットです。ユニークな「Pay Anywhere」システムと高ボラティリティが特徴で、最大5,000倍の配当を目指せます。",
    basicInfo: {
      rtp: "96.50%",
      volatility: "High",
      reels: "5",
      paylines: "Pay Anywhere",
      minBet: "$0.20",
      maxBet: "$100",
      provider: "Pragmatic Play",
      releaseDate: "2021年9月23日"
    }
  },
  payoutTable: {
    title: "スターライト・プリンセス：ペイアウト・配当表",
    symbols: [
      {
        name: "スター",
        payout5: "50倍",
        payout4: "25倍",
        payout3: "10倍"
      },
      {
        name: "ハート",
        payout5: "40倍",
        payout4: "20倍",
        payout3: "8倍"
      },
      {
        name: "月",
        payout5: "30倍",
        payout4: "15倍",
        payout3: "5倍"
      },
      {
        name: "太陽",
        payout5: "25倍",
        payout4: "12倍",
        payout3: "4倍"
      },
      {
        name: "青い宝石",
        payout5: "20倍",
        payout4: "10倍",
        payout3: "3倍"
      },
      {
        name: "緑の宝石",
        payout5: "20倍",
        payout4: "10倍",
        payout3: "3倍"
      },
      {
        name: "水色の宝石",
        payout5: "15倍",
        payout4: "8倍",
        payout3: "2倍"
      },
      {
        name: "紫の宝石",
        payout5: "15倍",
        payout4: "8倍",
        payout3: "2倍"
      },
      {
        name: "ピンクの宝石",
        payout5: "12倍",
        payout4: "5倍",
        payout3: "1.5倍"
      }
    ],
    maxPayout: "5,000倍",
    notes: [
      "上記はベット額1ドルあたりの配当倍率です。",
      "実際の配当はベット額に応じて変動します。",
      "ワイルドシンボルは存在しません。"
    ]
  },
  features: {
    title: "スターライト・プリンセス：ゲームの特徴とフィーチャー",
    items: [
      {
        name: "マルチプライヤーシンボル",
        description: "2倍から最大500倍までの値を持つシンボル。ベースゲームでは勝利したタンブルに適用され、フリースピン中はグローバルマルチプライヤーとして蓄積されます。",
        icon: "/images/icons/multiplier.png"
      },
      {
        name: "フリースピン",
        description: "4つ以上のスキャッターシンボルで15回のフリースピンが開始。スキャッター自体にも配当があります。",
        icon: "/images/icons/free-spins.png"
      },
      {
        name: "リトリガー",
        description: "フリースピン中に3つ以上のスキャッターシンボルが出現すると、追加で5回のフリースピンを獲得できます。",
        icon: "/images/icons/retrigger.png"
      },
      {
        name: "アンテベット",
        description: "ベット額に25%を追加することで、スキャッターシンボルの出現確率とマルチプライヤーの出現率が向上します。",
        icon: "/images/icons/ante-bet.png"
      },
      {
        name: "ボーナス購入機能",
        description: "ベット額の100倍を支払うことで、即座にフリースピンラウンドを開始できます。",
        icon: "/images/icons/buy-bonus.png"
      },
      {
        name: "Pay Anywhere",
        description: "8個以上の同一シンボルがリール上のどこに出現しても配当が成立する勝利条件。",
        icon: "/images/icons/pay-anywhere.png"
      }
    ]
  },
  sections: [
    {
      heading: "スターライト・プリンセス：基本情報",
      table: {
        columns: ["項目", "詳細"],
        rows: [
          ["ゲーム名", "Starlight Princess（スターライト・プリンセス）"],
          ["プロバイダー", "[Pragmatic Play](/providers/pragmatic-play)"],
          ["リリース日", "2021年9月10日（独占リリース）、2021年9月23日（一般リリース）"],
          ["ゲームタイプ", "ビデオスロット"],
          ["RTP（還元率）", "96.50%（最高設定）、89.51%（低設定）"],
          ["ボラティリティ", "High（高）"],
          ["最大ベット額", "$100（通常）、$125（アンテベット有効時）"],
          ["最小ベット額", "$0.20"],
          ["最大配当倍率", "5,000倍"],
          ["リール", "5リール6段"],
          ["ペイライン", "Pay Anywhere（ペイエニウェア）方式：8個以上の同一シンボルがどこに出現しても配当成立"],
          ["特徴", "・フリースピン<br>・リトリガー（フリースピン追加）<br>・スキャッターシンボル<br>・マルチプライヤーシンボル<br>・アンテベット（ベット額25%増でボーナス突入確率2倍）<br>・ボーナス購入機能（ベット額の100倍）"]
        ]
      }
    },
    {
      heading: "スターライト・プリンセス：どこで遊べる？",
      paragraphs: [
        "スターライト・プリンセスは、Pragmatic Play社の人気スロットであるため、多くのオンラインカジノでプレイ可能です。 CasinoTsu 推薦のオンラインカジノでは、魅力的なボーナスとともにこのゲームをお楽しみいただけます。"
      ],
      table: {
        columns: ["カジノ名", "登録ボーナス", "特徴"],
        rows: [
          ["[**カジノエックス**](/reviews/casino-x)", "ジャパカジ限定！入金不要ボーナス4,500円", "幅広いゲームラインナップと充実したプロモーション"],
          ["[**コンクエスタドール**](/reviews/conquestador)", "入金不要ボーナス40ドル＆登録スピン25回", "検索機能が充実しており、好みのゲームを見つけやすい"],
          ["[**インターカジノ**](/reviews/inter-casino)", "ジャパカジ限定！登録フリースピン150回（30ドル相当）", "20年以上の歴史を持つ信頼性の高いカジノ"],
          ["[**ジョイカジノ**](/reviews/joycasino)", "入金不要ボーナス4,500円", "豊富なボーナスとキャンペーンが魅力"],
          ["[**ステークカジノ**](/reviews/stake)", "ジャパカジ限定！入金不要ボーナス2,500円", "VIPプログラムが充実し、レーキバックも提供"]
        ]
      },
      notes: [
        "※ボーナス内容や賭け条件は変更される場合があります。最新情報は各カジノの公式サイトでご確認ください。",
        "※ボーナス購入機能は、地域によっては利用できない場合があります（例：イギリス）。"
      ]
    },
    {
      heading: "スターライト・プリンセス：ゲームの特徴とフィーチャー",
      paragraphs: [
        "スターライト・プリンセスは、「Pay Anywhere（ペイエニウェア）」というユニークな勝利条件を採用しています。これは、従来のペイラインに依存せず、リール上に 8個以上の同一シンボルがどこに出現しても配当が成立するという仕組みです。 CasinoTsu は、この革新的なシステムがゲームの興奮を一層高めていると評価しています。"
      ]
    },
    {
      heading: "プロバイダー情報",
      paragraphs: [
        "スターライト・プリンセスは、世界的に有名なゲームプロバイダーである Pragmatic Play（プラグマティックプレイ）によって開発されました。 CasinoTsu は、Pragmatic Play社の信頼性とゲームの品質を高く評価しています。"
      ],
      bullets: [
        "**ライセンス:** Pragmatic Playは、マルタゲーミングオーソリティ（MGA）をはじめとする複数の厳格なライセンスを取得しており、公平で安全なゲームを提供しています。",
        "**リリース日:**",
        "  * 独占リリース: 2021年9月10日",
        "  * 一般リリース: 2021年9月23日",
        "**他の人気作品:**",
        "  * **Gates of Olympus（ゲート・オブ・オリンポス）:** スターライト・プリンセスと非常に似たゲーム性を持つ、神話をテーマにした人気スロット。",
        "  * **Sweet Bonanza（スイート・ボナンザ）:** カラフルなキャンディをテーマにした、配当爆発力が魅力のスロット。",
        "  * **The Dog House Megaways（ザ・ドッグハウス・メガウェイズ）:** 人気の犬テーマスロットのメガウェイズ版。",
        "Pragmatic Playは、革新的でエンターテイメント性の高いスロットを多数リリースしており、プレイヤーから高い評価を得ています。"
      ]
    },
    {
      heading: "グラフィック・サウンド",
      paragraphs: [
        "スターライト・プリンセスのグラフィックは、アニメや漫画（特に少女漫画）を強く意識したデザインが特徴です。 CasinoTsu では、このユニークなデザインがプレイヤーに新鮮な体験を提供すると考えています。"
      ],
      bullets: [
        "**デザイン品質:** 鮮やかでキラキラとした色彩、可愛らしいキャラクターデザインが、プレイヤーを幻想的な空の世界へ誘います。一部のプレイヤーからは「キュートすぎる」「少し子供っぽい」といった意見もありますが、このデザインが、特定の層のプレイヤーからの熱狂的な支持を得ています。",
        "**テーマの表現:** プレイヤーは、星空を背景に、キラキラと輝く宝石や、キュートなプリンセスが登場する世界観に没頭できます。",
        "**BGM:** アップテンポでエネルギッシュなアニソン調のBGMは、ゲームプレイを一層盛り上げます。聞いていると、まるでアニメのワンシーンにいるかのような気分にさせてくれるでしょう。",
        "**効果音:** シンボルの出現や勝利時のSEも、アニメらしい軽快なサウンドエフェクトが多用されており、ゲームの楽しさを増幅させています。"
      ],
      table: {
        title: "【類似ゲームとの比較】",
        columns: ["スロット名", "詳細"],
        rows: [
          ["Gates of Olympus", "スターライト・プリンセスと数学的モデルやゲームメカニクスが全く同じですが、テーマがギリシャ神話に変更されています。"],
          ["スターライト・プリンセス", "「Gates of Olympus」のテーマをアニメ風にリメイクした作品。アニメや漫画、特に「セーラームーン」のような世界観が好きなプレイヤーにおすすめ。"]
        ]
      }
    },
    {
      heading: "モバイル対応",
      paragraphs: [
        "スターライト・プリンセスは、Pragmatic Play社によってモバイルデバイスに最適化されています。 CasinoTsu は、いつでもどこでも快適にプレイできる環境を重視しています。"
      ],
      bullets: [
        "**スマートフォン・タブレットでの動作:** iOS、Androidなどの主要なモバイルオペレーティングシステムに対応しており、スマートフォンのブラウザやタブレットから快適にプレイできます。",
        "**UX（ユーザーエクスペリエンス）:** インターフェースは直感的で分かりやすく、タッチ操作にも最適化されているため、外出先でもストレスなくゲームを楽しめます。グラフィックやサウンドも、モバイル環境で最大限のパフォーマンスを発揮するように設計されています。"
      ]
    },
    {
      heading: "戦略・攻略法",
      paragraphs: [
        "スターライト・プリンセスのボラティリティは「高」であるため、戦略的なプレイが勝利への鍵となります。 CasinoTsu では、責任あるギャンブルの観点から、以下の戦略を推奨いたします。"
      ],
      bullets: [
        "**予算管理:** 高ボラティリティのスロットであるため、フリースピン突入までに時間がかかることがあります。プレイ前に十分な予算を確保し、1回のベット額を慎重に設定しましょう。500～1000スピン程度は回せる予算があると安心です。",
        "**アンテベットの活用:** フリースピン獲得のチャンスを増やしたい場合は、ベット額に25%を追加するアンテベット機能を活用しましょう。ただし、その分1スピンあたりのコストは上がります。",
        "**ボーナス購入:** すぐにフリースピンラウンドを体験したい場合は、ベット額の100倍でボーナスを購入する機能も利用できます。ただし、これも高額な投資となるため、リスクを理解した上で使用しましょう。",
        "**マルチプライヤーの重要性:** ベースゲームでもフリースピンでも、マルチプライヤーは大きな勝利の鍵となります。特にフリースピン中は、グローバルマルチプライヤーがどんどん増加していくため、高配当獲得のチャンスが大幅にアップします。",
        "**スキャッター出現を待つ:** フリースピン突入にはスキャッターが4つ以上必要です。地道にスピンを続け、フリースピン獲得のチャンスを待ちましょう。フリースピン中に3つ以上のスキャッターが出現すれば、追加スピンも獲得できます。",
        "**タンブル（カスケード）を活かす:** 当たりが出るとシンボルが消え、新しいシンボルが降ってくるタンブル機能は、連鎖による配当獲得のチャンスを広げます。"
      ],
      notes: [
        "**ヒット率:** 公表されていませんが、体感としてはヒット率はやや低めです。フリースピンに突入するまでは、コインが減っていく可能性が高いことを理解しておきましょう。",
        "**RTPの変動:** Pragmatic Playは複数のRTP設定を提供しており、カジノによって採用されているRTPが異なる場合があります。プレイする前に、カジノのRTP設定を確認することをおすすめします（通常は96.50%が最高設定です）。 CasinoTsu は、正確な情報提供のため、この点に注意を払っています。",
        "**地域制限:** ボーナス購入機能など、一部の機能は地域によって利用できない場合があります。"
      ]
    },
    {
      heading: "類似ゲーム",
      paragraphs: [
        "スターライト・プリンセスのような、アニメ風のテーマ、カスケード（タンブル）システム、そして高ボラティリティが好きな方には、以下のスロットもおすすめです。 CasinoTsu では、皆様の好みに合わせたゲーム選びをサポートいたします。"
      ],
      table: {
        columns: ["スロット名", "詳細"],
        rows: [
          ["Twilight Princess（トワイライト・プリンセス）", "スターライト・プリンセスと同じPragmatic Play社からリリースされた、洋風ファンタジーテーマの後継機。最大配当7,500倍。"],
          ["Moon Princes（ムーンプリンセス）", "Play'n GOの人気タイトル。3人のプリンセスが特徴的なカスケード式スロットで、RTPは94.51%。"],
          ["Reactoonz（リアクトゥーンズ）", "Play'n GOの代表作。エイリアンがテーマのクラスター式スロットで、RTPは94.51%。続編の [Reactoonz2](/slots/reactoonz-2) も人気。"],
          ["Fruit Party（フルーツ・パーティ）", "Pragmatic Play社のクラスター式スロット。カラフルなフルーツとランダムマルチプライヤーが特徴で、RTPは94.58%。"]
        ]
      }
    },
    {
      heading: "まとめ",
      paragraphs: [
        "スターライト・プリンセスは、Pragmatic Play社が贈る、アニメ・マンガの世界観を彷彿とさせるビデオスロットです。「Pay Anywhere」というユニークな勝利条件と、高ボラティリティ、そして最大5,000倍という大きなポテンシャルが魅力です。 CasinoTsu は、このゲームが多くのプレイヤーにとってエキサイティングな体験となることを確信しております。"
      ],
      bullets: [
        "【こんなプレイヤーにおすすめ】",
        "  * アニメやマンガ、特に「セーラームーン」のような世界観が好きな方。",
        "  * 高ボラティリティスロットで一攫千金を狙いたい方。",
        "  * Pragmatic Play社の「Gates of Olympus」のようなゲーム性に興味がある方。",
        "  * シンプルながらも奥深いゲームメカニクスを楽しみたい方。",
        "フリースピン突入までの道のりは長いかもしれませんが、その分、突入時の爆発力は期待できます。予算管理をしっかり行い、キュートなプリンセスと一緒に、きらめく星空の世界でビッグウィンを目指しましょう！ CasinoTsu チェック、ダブルチェック、そして CasinoTsu チェック を経て、皆様に自信を持って推薦いたします。"
      ]
    }
  ],
  similarGames: [
    {
      name: "Twilight Princess",
      href: "/slots/twilight-princess",
      provider: "Pragmatic Play",
      description: "スターライト・プリンセスと同じPragmatic Play社からリリースされた、洋風ファンタジーテーマの後継機。最大配当7,500倍。"
    },
    {
      name: "Moon Princes",
      href: "/slots/moon-princess",
      provider: "Play'n GO",
      description: "Play'n GOの人気タイトル。3人のプリンセスが特徴的なカスケード式スロットで、RTPは94.51%。"
    },
    {
      name: "Reactoonz",
      href: "/slots/reactoonz-2",
      provider: "Play'n GO",
      description: "Play'n GOの代表作。エイリアンがテーマのクラスター式スロットで、RTPは94.51%。"
    },
    ],
  prosCons: {
    pros: [
      "アニメ・マンガ風の魅力的なグラフィックとサウンド",
      "「Pay Anywhere」システムによる革新的な勝利条件",
      "高ボラティリティによる大きな勝利の可能性（最大5,000倍）",
      "フリースピン、マルチプライヤー、アンテベット、ボーナス購入など多彩なフィーチャー",
      "Pragmatic Play社による高品質なゲームプレイ",
      "モバイルデバイスに最適化されており、いつでもどこでもプレイ可能"
    ],
    cons: [
      "高ボラティリティのため、フリースピン突入までに時間がかかり、資金が減るリスクがある",
      "RTP設定がカジノによって異なる場合がある",
      "ワイルドシンボルが存在しない",
      "ボーナス購入機能は一部地域で利用できない場合がある",
      "グラフィックが「キュートすぎる」と感じるプレイヤーもいる"
    ]
  },
  faq: [
    {
      q: "スターライト・プリンセスのRTP（還元率）は？",
      a: "Pragmatic Playの発表によると、最高設定で96.50%です。ただし、オンラインカジノによっては異なるRTP設定（例：89.51%）を採用している場合があるため、プレイ前に CasinoTsu が推奨するカジノの情報を確認することをおすすめします。"
    },
    {
      q: "スターライト・プリンセスの最高配当倍率は？",
      a: "ジャックポットはありませんが、1スピンあたり最大5,000倍の配当を獲得できる可能性があります。"
    },
    {
      q: "スターライト・プリンセスにワイルドシンボルはありますか？",
      a: "いいえ、スターライト・プリンセスにはワイルドシンボルは搭載されていません。これは、「Pay Anywhere」システムでシンボル数による配当判定が行われるためです。"
    },
    {
      q: "スターライト・プリンセスは、どのカジノでプレイできますか？",
      a: "Pragmatic Play社のスロットであるため、多くのオンラインカジノでプレイ可能です。 CasinoTsu は、[Casino-X](/reviews/casino-x)、[Conquestador](/reviews/conquestador)、[InterCasino](/reviews/inter-casino)、[Joy Casino](/reviews/joycasino)、[Stake Casino](/reviews/stake) などを推奨しています。詳しくは「どこで遊べるか」のセクションをご覧ください。"
    },
    {
      q: "アンテベット機能とは何ですか？",
      a: "ベット額に25%を追加することで、スキャッターシンボルの出現確率とマルチプライヤーの出現率が向上する機能です。これにより、フリースピン（ボーナスラウンド）への突入チャンスが実質的に2倍になります。"
    }
  ],
  cta: {
    text: "今すぐプレイ！",
    href: "/reviews/2up"
  },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Slots", href: "/slots" },
    { label: "Starlight princess", href: "/slots/starlight-princess" }
  ],
  tableOfContents: [
    { label: "スターライト・プリンセス：基本情報", href: "#基本情報" },
    { label: "スターライト・プリンセス：どこで遊べる？", href: "#どこで遊べるか" },
    { label: "スターライト・プリンセス：ゲームの特徴とフィーチャー", href: "#ゲームの特徴とフィーチャー" },
    { label: "プロバイダー情報", href: "#プロバイダー情報" },
    { label: "グラフィック・サウンド", href: "#グラフィック・サウンド" },
    { label: "ペイアウト・配当表", href: "#ペイアウト・配当表" },
    { label: "モバイル対応", href: "#モバイル対応" },
    { label: "戦略・攻略法", href: "#戦略・攻略法" },
    { label: "類似ゲーム", href: "#類似ゲーム" },
    { label: "まとめ", href: "#まとめ" },
    { label: "よくある質問", href: "#よくある質問" }
  ]
};

export default function Page() {
  return <SlotTemplate data={data} canonicalPath="/slots/starlight-princess" />;
}
