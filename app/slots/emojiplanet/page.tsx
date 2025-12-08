import SlotTemplate, { SlotPageData } from "@/components/templates/SlotTemplate";

const data: SlotPageData = {
  title: "Emojiplanet",
  hero: {
    title: "Emojiplanet",
    subheading: "絵文字プラネット（Emoji Planet）は、NetEnt社よりリリースされた、ユニークな絵文字をテーマにしたビデオスロットです。",
    description: "私たちが日頃から親しんでいるお馴染みの絵文字がシンボルとして登場し、ポップで楽しい雰囲気を演出しています。 CasinoTsu では、この魅力的なスロットの基本情報からゲームの特徴、さらにはプレイ可能なカジノまで、詳細にご紹介いたします。",
    score: 3.4,
    scoreMax: 5,
    rtp: "96.4%",
    maxMultiplier: "x5,000",
    provider: "NetEnt",
    releaseDate: "2017年8月22日",
    volatility: "Medium",
    reels: "6",
    paylines: "Cluster Pays",
    minBet: "$0.20",
    maxBet: "$200",
    slotImageSrc: "/slots/emojiplanet.jpg",
    highlights: [
      "ユニークな絵文字テーマ",
      "クラスターペイシステムとアバランチ機能",
      "5つの異なるフィーチャー（爆弾、ピザ、キスマーク、ロケット、ダブルハート）",
      "最大10,000倍のポテンシャル"
    ],
    watchouts: [
      "中毒性が高いため、予算管理が重要",
      "フィーチャーの出現にはある程度の運が必要"
    ]
  },
  featuredCasino: {
    name: "2アップカジノ",
    logo: "/assets/casino/2up.png",
    href: "https://casinotsu.com/reviews/2up",
    ctaText: "今すぐプレイ！",
    ctaHref: "https://casinotsu.com/reviews/2up",
    tagline: "仮想通貨でも日本円でも遊べる、最新オンラインカジノ"
  },
  casinos: [
    {
      name: "ReSpin",
      logo: "/assets/casino/respin.jpg",
      href: "https://casinotsu.com/reviews/respin",
      bonus: "35x 賭け条件",
      freeSpins: "5x 賭け条件",
      rating: 4,
      tagline: "10種類のメジャーな仮想通貨が使えるクリプトカジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/respin"
    },
    {
      name: "Betgoat",
      logo: "/assets/casino/betgoat.jpg",
      href: "https://casinotsu.com/reviews/betgoat",
      bonus: "$0",
      freeSpins: "-",
      rating: 4,
      tagline: "独自コインも利用可能！ 最新クリプトカジノ",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/betgoat"
    },
    {
      name: "2up",
      logo: "/images/casino/2up_375x375-2.png",
      href: "https://casinotsu.com/reviews/2up",
      rating: 4,
      tagline: "仮想通貨でも日本円でも遊べる、最新オンラインカジノ",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/2up"
    },
    {
      name: "Cybet",
      logo: "/assets/casino/cybet.jpg",
      href: "https://casinotsu.com/reviews/cybet",
      bonus: "35x 賭け条件",
      freeSpins: "35x 賭け条件",
      rating: 3.5,
      tagline: "可愛いマスコットキャラが魅力の最新クリプトカジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/cybet"
    },
    {
      name: "1win",
      logo: "/images/casino/1win_375x375-1.png",
      href: "https://casinotsu.com/reviews/1win",
      rating: 4,
      tagline: "幅広いゲームラインナップが魅力！今注目の仮想通貨対応オンラインカジノ★",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/1win"
    },
    {
      name: "Miki",
      logo: "/assets/casino/miki.jpg",
      href: "https://casinotsu.com/reviews/miki",
      bonus: "30x 賭け条件",
      freeSpins: "20x 賭け条件",
      rating: 4,
      tagline: "充実したゲームラインナップ！盛りだくさんのボーナスでお得にプレイ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/miki"
    },
    {
      name: "Bitz",
      logo: "/assets/casino/bitz.jpg",
      href: "https://casinotsu.com/reviews/bitz",
      bonus: "29x 賭け条件",
      freeSpins: "-",
      rating: 4,
      tagline: "本人確認書類不要！？ 匿名性もバッチリの最新仮想通貨カジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/bitz"
    },
    {
      name: "Wikibet",
      logo: "/assets/casino/wikibet.jpg",
      href: "https://casinotsu.com/reviews/wikibet",
      bonus: "20x 賭け条件",
      freeSpins: "20x 賭け条件",
      rating: 4,
      tagline: "シンプルな操作性と可愛いデザインが特徴！厳選されたゲームをプレイしよう★",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/wikibet"
    },
    {
      name: "Sushi Casino",
      logo: "/assets/casino/sushi-casino.jpg",
      href: "https://casinotsu.com/reviews/sushi-casino",
      bonus: "35x 賭け条件",
      freeSpins: "40x 賭け条件",
      rating: 4,
      tagline: "てんこ盛りのオファーやVIPプログラムが魅力的な最新オンラインカジノ",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/sushi-casino"
    },
    {
      name: "Parimatch",
      logo: "/assets/casinos/parimatch_375x375-2.png",
      href: "https://casinotsu.com/reviews/parimatch",
      rating: 4,
      tagline: "2024年11月オープンの最新オンカジを徹底レビュー！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/parimatch"
    },
    {
      name: "Bets.io",
      logo: "/images/casino/bets-io_375x375.png",
      href: "https://casinotsu.com/reviews/bets-io",
      rating: 4,
      tagline: "最大1BTCの豪華入金ボーナスが嬉しいクリプトカジノ♪",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/bets-io"
    },
    {
      name: "Duelbits",
      logo: "/assets/casinos/duelbits_375x375-1.png",
      href: "https://casinotsu.com/reviews/duelbits",
      rating: 4,
      tagline: "500フリースピンが嬉しいクリプトカジノ♪",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/duelbits"
    },
    {
      name: "Sportsbet.io",
      logo: "/assets/casino/sportsbetio.jpg",
      href: "https://casinotsu.com/reviews/sportsbet-io",
      bonus: "1,000USDT",
      freeSpins: "-",
      rating: 4.5,
      tagline: "スポーツベットだけじゃない！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/sportsbet-io"
    },
    {
      name: "Shuffle",
      logo: "/assets/casino/shuffle.jpg",
      href: "https://casinotsu.com/reviews/shuffle",
      bonus: "40x 賭け条件",
      freeSpins: "-",
      rating: 4,
      tagline: "独自のトークンで資産運用もできる仮想通貨カジノ★",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/shuffle"
    },
    {
      name: "Winz",
      logo: "/assets/casino/winz.jpg",
      href: "https://casinotsu.com/reviews/winz-io",
      bonus: "$10,000",
      freeSpins: "800",
      rating: 4.5,
      tagline: "ウェルカムオファーやボーナスに賭け条件なし♪",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/winz-io"
    },
    {
      name: "Dafabet",
      logo: "/assets/casino/dafabet.jpg",
      href: "https://casinotsu.com/reviews/dafabet",
      bonus: "20x 賭け条件",
      freeSpins: "-",
      rating: 4,
      tagline: "セルティックFCのスポンサーカジノ",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/dafabet"
    },
    {
      name: "Lucky Block",
      logo: "/assets/casino/lucky-block.jpg",
      href: "https://casinotsu.com/reviews/lucky-block",
      bonus: "€25,000",
      freeSpins: "35x 賭け条件",
      rating: 4,
      tagline: "独自トークンもある仮想通貨カジノ♪",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/lucky-block"
    },
    {
      name: "Flush Casino",
      logo: "/images/casino/Flush_375x375-1.png",
      href: "https://casinotsu.com/reviews/flush",
      rating: 4,
      tagline: "今年大注目のクリプトカジノ",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/flush"
    },
    {
      name: "Queen Casino",
      logo: "/assets/casino/shinqueen.jpg",
      href: "https://casinotsu.com/reviews/queen-casino",
      bonus: "30x 賭け条件",
      freeSpins: "20x 賭け条件",
      rating: 4.5,
      tagline: "アジア市場知名度ナンバーワンに君臨するオンラインカジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/queen-casino"
    },
    {
      name: "Roobet",
      logo: "/assets/casino/roobet.jpg",
      href: "https://casinotsu.com/reviews/roobet",
      bonus: "$0",
      freeSpins: "-",
      rating: 4,
      tagline: "世界的有名人がアンバサダーを務めるオンラインカジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/roobet"
    },
    {
      name: "Casino Sky",
      logo: "/images/casino/casinosky_375x375.png",
      href: "https://casinotsu.com/reviews/casino-sky",
      rating: 4,
      tagline: "日本のオンカジ業界プロが運営する期待のカジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/casino-sky"
    },
    {
      name: "Mega Dice",
      logo: "/assets/casino/mega-dice.jpg",
      href: "https://casinotsu.com/reviews/mega-dice",
      bonus: "35x 賭け条件",
      freeSpins: "35x 賭け条件",
      rating: 3.5,
      tagline: "ボーナス最大1BTCの仮想通貨カジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/mega-dice"
    },
    {
      name: "Fresh Casino",
      logo: "/images/casino/fresh_375x375.png",
      href: "https://casinotsu.com/reviews/fresh-casino",
      rating: 4,
      tagline: "6,000種類以上のゲームで遊びたい放題！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/fresh-casino"
    },
    {
      name: "BC.Game",
      logo: "/assets/casino/bcgame.jpg",
      href: "https://casinotsu.com/reviews/bc-game",
      bonus: "45x 賭け条件",
      freeSpins: "60x 賭け条件",
      rating: 4,
      tagline: "圧巻のゲーム数＆最大1,600ドルの初回入金ボーナス！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/bc-game"
    },
    {
      name: "Empire.io",
      logo: "/assets/casino/empireio.jpg",
      href: "https://casinotsu.com/reviews/empire-io",
      bonus: "$0",
      freeSpins: "-",
      rating: 4,
      tagline: "賭け条件ナシのキャシュバック＆VIP特典がスゴイ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/empire-io"
    },
    {
      name: "Stake",
      logo: "/images/casino/stake_375x375-1.png",
      href: "https://casinotsu.com/reviews/stake",
      rating: 4,
      tagline: "ハウスエッジ5%レーキバック＆VIP特典が超おトク！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/stake"
    },
    {
      name: "Wonder Casino",
      logo: "/assets/casinos/wonder-casino_375x375.png",
      href: "https://casinotsu.com/reviews/wonder-casino",
      rating: 4.5,
      tagline: "業界最速の出金スピードと仮想通貨特化ボーナス！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/wonder-casino"
    },
    {
      name: "K8",
      logo: "/assets/casino/k8.jpg",
      href: "https://casinotsu.com/reviews/k8",
      bonus: "25x 賭け条件",
      freeSpins: "25x 賭け条件",
      rating: 4.5,
      tagline: "日本で人気の実機を打つならK8のパチンコで決まりっ！昔懐かしの台を打ちまくろう！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/k8"
    },
    {
      name: "OhMySpins",
      logo: "/assets/casino/ohmyspins.jpg",
      href: "https://casinotsu.com/reviews/ohmyspins",
      bonus: "35x 賭け条件",
      freeSpins: "40x 賭け条件",
      rating: 4,
      tagline: "マニアックなプロバイダーもココなら見つかる！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/ohmyspins"
    },
    {
      name: "Yuugado",
      logo: "/assets/casinos/yuugado_375x375-1-1.png",
      href: "https://casinotsu.com/reviews/yuugado",
      rating: 4.5,
      tagline: "「和」がテーマのオンラインカジノ \| パチンコからスポーツベットまで！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/yuugado"
    },
    {
      name: "Tedbet",
      logo: "/images/casino/tedbet_375x375.png",
      href: "https://casinotsu.com/reviews/tedbet",
      rating: 4.5,
      tagline: "豊富な決済方法が嬉しいっ♪",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/tedbet"
    },
    {
      name: "BetRebels",
      logo: "/images/casino/betrebels_375x375.png",
      href: "https://casinotsu.com/reviews/betrebels",
      rating: 4,
      tagline: "スポーツ好き必須！カジノもどんどん充実中",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/betrebels"
    },
    {
      name: "Conquestador",
      logo: "/images/casino/Conquestador_375x375.png",
      href: "https://casinotsu.com/reviews/conquestador",
      rating: 4,
      tagline: "検索機能抜群！好みのゲームをサクサク検索できちゃう！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/conquestador"
    },
    {
      name: "Cloudbet",
      logo: "/assets/casino/cloudbet.jpg",
      href: "https://casinotsu.com/reviews/cloudbet",
      bonus: "5BTC",
      freeSpins: "-",
      rating: 4,
      tagline: "入出金額上限なし！仮想通貨好きハイローラー必見",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/cloudbet"
    },
    {
      name: "Livecasino.io",
      logo: "/images/casino/livecasinoio.jpg",
      href: "https://casinotsu.com/reviews/livecasino-io",
      bonus: "$0",
      freeSpins: "-",
      rating: 4,
      tagline: "ライブカジノ×仮想通貨。そんなモダンな世界はいかが？",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/livecasino-io"
    },
    {
      name: "Lucky Bull",
      logo: "/assets/casino/lucky-bull.jpg",
      href: "https://casinotsu.com/reviews/lucky-bull",
      bonus: "30x 賭け条件",
      freeSpins: "-",
      rating: 4,
      tagline: "キャラと一緒にラッキーブルの世界でクエスト攻略！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/lucky-bull"
    },
    {
      name: "Gamdom",
      logo: "/assets/casino/gamdom.jpg",
      href: "https://casinotsu.com/reviews/gamdom",
      bonus: "$0",
      freeSpins: "-",
      rating: 4,
      tagline: "ハイローラープレイヤーにもってこいの最強レーキバックカジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/gamdom"
    },
    {
      name: "Energy Casino",
      logo: "/images/casino/energy-casino_375x375.png",
      href: "https://casinotsu.com/reviews/energy-casino",
      rating: 4,
      tagline: "ウェブサイトの見やすさと操作性は抜群なカジノ",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/energy-casino"
    },
    {
      name: "Konibet",
      logo: "/images/casino/konibet_375x375.png",
      href: "https://casinotsu.com/reviews/konibet",
      rating: 4.5,
      tagline: "パチンコ・パチスロが遊べるオンラインカジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/konibet"
    },
    {
      name: "Vulkan Vegas",
      logo: "/assets/casino/vulkan-vegas.jpg",
      href: "https://casinotsu.com/reviews/vulkanvegas",
      bonus: "40x 賭け条件",
      freeSpins: "30x 賭け条件",
      rating: 4,
      tagline: "アメコミの世界観に入り込んじゃえ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/vulkanvegas"
    },
    {
      name: "Casino Me",
      logo: "/assets/casino/casino-me.jpg",
      href: "https://casinotsu.com/reviews/casino-me",
      bonus: "20x 賭け条件",
      freeSpins: "20x 賭け条件",
      rating: 4,
      tagline: "独自システムのお得なキャッシュバックあり！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/casino-me"
    },
    {
      name: "Kakeyo",
      logo: "/assets/casino/kakeyo.jpg",
      href: "https://casinotsu.com/reviews/kakeyo",
      bonus: "10x 賭け条件",
      freeSpins: "10x 賭け条件",
      rating: 4,
      tagline: "ボーナス充実！スポーツベットにも最適カジノ♪",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/kakeyo"
    },
    {
      name: "Bons.com",
      logo: "/assets/casinos/bons_375x375-1.png",
      href: "https://casinotsu.com/reviews/bons",
      rating: 4.5,
      tagline: "マインクラフトチックでも中身はモダン",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/bons"
    },
    {
      name: "Mystino",
      logo: "/assets/casinos/mystino_375x375.png",
      href: "https://casinotsu.com/reviews/mystino",
      rating: 4.5,
      tagline: "日本人プレイヤーの心をグッと掴むカジノといえば…！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/mystino"
    },
    {
      name: "InterCasino",
      logo: "/assets/casinos/Inter-Casino_375x375-1.png",
      href: "https://casinotsu.com/reviews/inter-casino",
      rating: 4.5,
      tagline: "実は20年以上歴史のあるカジノはココ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/inter-casino"
    },
    {
      name: "Empire777",
      logo: "/assets/casino/empire777.jpg",
      href: "https://casinotsu.com/reviews/empire777",
      bonus: "20x 賭け条件",
      freeSpins: "-",
      rating: 4,
      tagline: "アジアNo.1を豪語するオンカジはここだ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/empire777"
    },
    {
      name: "BitStarz",
      logo: "/images/casino/bitstarz_375x375.png",
      href: "https://casinotsu.com/reviews/bitstarz",
      rating: 4.5,
      tagline: "複数通貨のマルチウォレット対応カジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/bitstarz"
    },
    {
      name: "Joy Casino",
      logo: "/images/casino/joycasino_375x375.png",
      href: "https://casinotsu.com/reviews/joycasino",
      rating: 4.5,
      tagline: "ジョイカジノのてんこ盛りボーナスを貰っちゃおう！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/joycasino"
    },
    {
      name: "Casino Secret",
      logo: "/assets/casinos/casino-secret_375x375.png",
      href: "https://casinotsu.com/reviews/casino-secret",
      rating: 4.5,
      tagline: "キャッシュバックと言えばこのカジノで間違いなし",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/casino-secret"
    },
    {
      name: "Vera&John",
      logo: "/assets/casinos/VeraJohn_375x375-1.png",
      href: "https://casinotsu.com/reviews/vera-john",
      rating: 4.5,
      tagline: "オンカジといえば、やっぱりベラジョン！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/vera-john"
    },
    {
      name: "Bitcasino.io",
      logo: "/assets/casino/bitcasinoio.jpg",
      href: "https://casinotsu.com/reviews/bitcasino-io",
      bonus: "40x 賭け条件",
      freeSpins: "-",
      rating: 4.5,
      tagline: "元祖仮想通貨カジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/bitcasino-io"
    },
    {
      name: "Casino-X",
      logo: "/images/casino/casino-x_375x375-1.png",
      href: "https://casinotsu.com/reviews/casino-x",
      rating: 4.5,
      tagline: "太っ腹ボーナス盛りだくさんのカジノエックスで、お得にプレイ♪",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/casino-x"
    },
    {
      name: "Casitabi",
      logo: "/assets/casino/casitabi.jpg",
      href: "https://casinotsu.com/reviews/casitabi",
      bonus: "20x 賭け条件",
      freeSpins: "20x 賭け条件",
      rating: 4.5,
      tagline: "RPG型カジノで旅をしながらボスを倒してお得にプレイ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/casitabi"
    },
    {
      name: "William Hill",
      logo: "/assets/casino/william-hill.jpg",
      href: "https://casinotsu.com/reviews/william-hill",
      bonus: "25x 賭け条件",
      freeSpins: "-",
      rating: 3.5,
      tagline: "世界三大の超老舗ブックメーカー！",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/william-hill"
    },
    {
      name: "Eldoah Casino",
      logo: "/assets/casinos/eldoah_375x375-3.png",
      href: "https://casinotsu.com/reviews/eldoah",
      rating: 4.5,
      tagline: "ライブカジノ利用満足度6年連続ナンバー1のオンラインカジノ",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://casinotsu.com/reviews/eldoah"
    }
  ],
  gameInfo: {
    intro: "Emojiplanet は、ユニークなゲームメカニクスと魅力的な機能を持つスロットです。以下にその基本情報をまとめました。正確さが第一。興奮はその次。",
    basicInfo: {
      rtp: "96.4%",
      volatility: "Medium",
      reels: "6",
      paylines: "Cluster Pays",
      minBet: "$0.20",
      maxBet: "$200",
      provider: "NetEnt",
      releaseDate: "2017年8月22日"
    }
  },
  payoutTable: {
    title: "配当表",
    symbols: [
      {
        name: "スマイリー顔",
        description: "最高配当シンボル",
        payout5: "x500",
        payout4: "x100",
        payout3: "x50",
        payout2: "x20",
        payout1: "x10"
      },
      {
        name: "ロケット",
        payout5: "x100",
        payout4: "x50",
        payout3: "x20",
        payout2: "x10",
        payout1: "x5"
      },
      {
        name: "キスマーク",
        payout5: "x50",
        payout4: "x25",
        payout3: "x15",
        payout2: "x5",
        payout1: "x3"
      },
      {
        name: "ピザ",
        payout5: "x30",
        payout4: "x15",
        payout3: "x10",
        payout2: "x3",
        payout1: "x2"
      },
      {
        name: "爆弾",
        payout5: "x20",
        payout4: "x10",
        payout3: "x5",
        payout2: "x2",
        payout1: "x1"
      },
      {
        name: "ダブルハート",
        payout5: "x15",
        payout4: "x8",
        payout3: "x4",
        payout2: "x1",
        payout1: "x0.5"
      },
      {
        name: "星（ワイルド）",
        description: "全ての通常シンボルの代わり",
        isSpecial: true
      }
    ],
    maxPayout: "x5,000 (ラインベット) / 10,000x (ステーク)",
    notes: [
      "配当はクラスターペイシステムに基づきます。",
      "5つ以上の同一シンボルが縦横に隣接すると勝利となります。",
      "ワイルドシンボルは全ての通常シンボルの代わりとなります。"
    ]
  },
  features: {
    title: "ゲーム特徴・フィーチャー",
    items: [
      {
        name: "アバランチ機能",
        description: "勝利シンボルが爆発して消滅し、新しいシンボルが落下してくる連続落下機能。",
        icon: "💥"
      },
      {
        name: "絵文字メーターと5つのフィーチャー",
        description: "5種類の絵文字（爆弾、ピザ、キスマーク、ロケット、ダブルハート）メーターが貯まると、対応する特殊フィーチャーが発動。",
        icon: "🌈"
      },
      {
        name: "爆弾フィーチャー",
        description: "ランダムな8つのシンボルが破壊され、ベット額の5倍から100倍までの賞金が付与されます。",
        icon: "💣"
      },
      {
        name: "ピザフィーチャー",
        description: "ランダムな3x3グリッドがピザシンボルに変化します。",
        icon: "🍕"
      },
      {
        name: "キスマークフィーチャー",
        description: "3つの「スティッキーワイルド」が登場し、勝利に貢献するたびに命を消費します。",
        icon: "😘"
      },
      {
        name: "ロケットフィーチャー",
        description: "勝利コンボを形成したリールに、最大10個のワイルドシンボルが出現します。",
        icon: "🚀"
      },
      {
        name: "ダブルハートフィーチャー",
        description: "メーターが満杯になった回数に応じて、ペイアウトにマルチプライヤーが適用されます。",
        icon: "❤️"
      },
      {
        name: "ワイルドシンボル",
        description: "星の形をしたワイルドシンボルは、全ての通常シンボルの代わりとなり、勝利コンボの形成を助けます。",
        icon: "⭐"
      }
    ]
  },
  sections: [
    {
      heading: "導入・概要",
      paragraphs: [
        "絵文字プラネット（Emoji Planet）は、NetEnt社よりリリースされた、ユニークな絵文字をテーマにしたビデオスロットです。私たちが日頃から親しんでいるお馴染みの絵文字がシンボルとして登場し、ポップで楽しい雰囲気を演出しています。 CasinoTsu では、この魅力的なスロットの基本情報からゲームの特徴、さらにはプレイ可能なカジノまで、詳細にご紹介いたします。"
      ]
    },
    {
      heading: "ゲーム基本情報",
      paragraphs: [
        "Emojiplanet は、ユニークなゲームメカニクスと魅力的な機能を持つスロットです。以下にその基本情報をまとめました。正確さが第一。興奮はその次。"
      ],
      table: {
        title: "基本スペック",
        columns: ["概要", "詳細"],
        rows: [
          ["名称", "Emojiplanet"],
          ["リリース日", "2017年8月22日"],
          ["プロバイダー", "NetEnt"],
          ["最大配当倍率", "x5,000（ラインベット）、10,000x（ステーク）"],
          ["ボラティリティ", "Medium"],
          ["最大ベット額", "$200"],
          ["グリッドレイアウト", "6x5"],
          ["ペイメントシステム", "Cluster Pays（クラスターペイ）"],
          ["コインバリュー", "$0.01 – $1.00"],
          ["ベットレベル", "1〜10"]
        ]
      }
    },
    {
      heading: "ゲーム特徴・フィーチャー",
      paragraphs: [
        "Emojiplanet は、従来のビデオスロットとは一線を画す、ユニークで楽しいフィーチャーが満載です。CasinoTsu がその魅力を紐解きます。"
      ]
    },
    {
      heading: "アバランチ機能",
      paragraphs: [
        "このスロットでは、リールが回転する代わりにシンボルがグリッドに「落下」してきます。勝利コンボ（クラスター）が成立すると、そのシンボルは爆発して消滅し、上から新しいシンボルが落ちてきて空いたスペースを埋めます。この連続落下により、一度のベットで複数の勝利が連鎖する可能性があります。この機能は「アバランチ機能」または「カスケードリール」と呼ばれ、ゲームの興奮を高めます。"
      ]
    },
    {
      heading: "絵文字メーターと5つのフィーチャー",
      paragraphs: [
        "画面右側には、5種類の絵文字（爆弾、ピザ、キスマーク、ロケット、ダブルハート）に対応したメーターが設置されています。これらのメーターは、ゲーム中に特定の絵文字シンボルが12個以上集まる（＝アバランチ機能で消滅する）ことで貯ま ይます。メーターが満タンになると、対応する特別なフィーチャーが発動します。"
      ],
      bullets: [
        "**爆弾フィーチャー (Bomb Feature)**: グリッド上のランダムな8つのシンボルが爆弾によって破壊されます。破壊されたシンボルごとに、ベット額の5倍から100倍までのランダムなコイン賞金が授与されます。",
        "**ピザフィーチャー (Pizza Feature)**: ランダムに選ばれた3x3のグリッド（合計9マス）がピザシンボルに変化します。",
        "**キスマークフィーチャー (Kiss Mark Feature)**: 3つの「スティッキーワイルド」が登場します。これらのワイルドは、勝利コンボの一部となるたびに「3つの命」のうちの1つを消費します。3回の勝利に貢献した後、ワイルドはグリッドから消滅します。この機能により、ワイルドシンボルが長く場に残り、勝利のチャンスが広がります。",
        "**ロケットフィーチャー (Rocket Feature)**: 勝利コンボを形成したリールに、最大10個のワイルドシンボルが出現します。ワイルドは一度に全て出現するわけではなく、連続した勝利コンボの過程で追加されることがあります。",
        "**ダブルハートフィーチャー (Double Heart Feature)**: このフィーチャーは、ペイアウトにマルチプライヤーを適用します。メーターが満杯になった回数に1を加えた倍率が、そのスピンの合計ペイアウトに適用されます。例えば、メーターが2回満杯になった場合、ペイアウトにx3のマルチプライヤーがかかります。"
      ]
    },
    {
      heading: "ワイルドシンボル",
      paragraphs: [
        "ワイルドシンボルは**星の形**をしており、全ての通常シンボルの代わりとなって勝利コンボの形成を助けます。"
      ]
    },
    {
      heading: "最高配当シンボル",
      paragraphs: [
        "スマイリー顔の絵文字が最も高配当なシンボルです。グリッド全体（30マス）がスマイリー顔で埋め尽くされると、ベット額の500倍の配当が得られます。"
      ]
    },
    {
      heading: "プロバイダー情報",
      paragraphs: [
        "Emojiplanet は、革新的なゲーム開発で知られる NetEnt（ネットエント）によって開発されました。 CasinoTsu は、信頼できるプロバイダーのゲームを皆様にお届けします。"
      ],
      bullets: [
        "**開発会社**: NetEnt (ネットエント)",
        "**ライセンス**: マルタ、イギリス、ジブラルタル、ニュージャージーなど、複数の主要な規制当局からライセンスを取得しています。",
        "**リリース日**: 2017年8月22日",
        "**他の人気作品**: Starburst（スターバースト）、Gonzo's Quest（ゴンゾーズクエスト）、Dead or Alive（デッド・オア・アライブ）など、数々のヒット作を生み出しています。"
      ]
    },
    {
      heading: "グラフィック・サウンド",
      paragraphs: [
        "Emojiplanet のグラフィックは、その名の通り、カラフルで表情豊かな絵文字シンボルが特徴です。ポップなデザインは、ゲームプレイに楽しさと活気をもたらします。背景のデザインもゲームプレイ中に変化し、飽きさせません。サウンドは、軽快で陽気なBGMと、シンボルの落下や勝利時に鳴る効果音が、ゲームの楽しさを一層引き立てます。まるで子供向けのゲームのような親しみやすさがありますが、その中毒性の高さは大人も夢中にさせます。"
      ]
    },
    {
      heading: "モバイル対応",
      paragraphs: [
        "Emojiplanet は、NetEnt社の標準的な技術を用いて開発されており、デスクトップはもちろん、スマートフォンやタブレットなどのモバイルデバイスにも完全対応しています。いつでもどこでも、お気に入りの絵文字スロットを快適に楽しむことができます。"
      ]
    },
    {
      heading: "戦略・攻略法",
      paragraphs: [
        "Emojiplanet は運の要素が強いゲームですが、いくつかの戦略やヒントを参考にすることで、より一層楽しめるでしょう。 CasinoTsu が、皆様のプレイをサポートいたします。"
      ],
      bullets: [
        "**低ベットから始める**: 特にゲームに慣れていないうちは、最小ベット額 $0.20 から始めて、ゲームのペースやフィーチャーの出現タイミングを掴むことをお勧めします。",
        "**フィーチャーの活用**: 5つのフィーチャーは大きな勝利の鍵となります。特に「ダブルハートフィーチャー」によるマルチプライヤーの恩恵は大きく、連続落下が続くと配当が雪だるま式に増える可能性があります。",
        "**予算管理**: このゲームは中毒性が高いため、プレイ前に予算を設定し、それを超えないように注意することが重要です。連勝が続いても、冷静に目標額に達したらプレイを終了する判断も大切です。",
        "**クラスターペイの理解**: 従来のペイラインではなく、シンボルが隣接してまとまる（クラスターを形成する）ことで勝利となるシステムを理解することが、配当の仕組みを把握する上で役立ちます。"
      ]
    },
    {
      heading: "類似ゲーム",
      items: [
        {
          name: "Jammin' Jars (Push Gaming)",
          description: "フルーツシンボルがクラスターを形成し、移動するワイルドやマルチプライヤーが特徴の人気のスロットです。"
        },
        {
          name: "Reactoonz (Play'n GO)",
          description: "カラフルなエイリアンが登場し、アバランチ機能と様々な「クイック」機能が魅力のクラスターペイ型スロットです。"
        }
      ]
    },
    {
      heading: "まとめ",
      paragraphs: [
        "Emojiplanet は、NetEnt社らしい独創性と、親しみやすい絵文字テーマが融合した、非常に楽しいビデオスロットです。クラスターペイシステム、アバランチ機能、そして5つのユニークなフィーチャーが組み合わさることで、予測不可能でエキサイティングなゲームプレイを提供します。最大10,000倍という高いポテンシャルも魅力です。"
      ],
      bullets: [
        "このスロットが向いているプレイヤー:",
        "ポップで可愛いデザインが好きな方",
        "従来のビデオスロットとは違う、ユニークなゲームメカニクスを体験したい方",
        "連鎖による配当の増加や、フィーチャーによるボーナス獲得を楽しみたい方",
        "初心者からハイローラーまで、幅広いベット範囲でプレイしたい方"
      ],
      notes: [
        "中毒性の高いゲームプレイと、度々訪れる大きな勝利のチャンスは、きっとあなたを夢中にさせるでしょう。 CasinoTsu では、皆様が安全に楽しめるよう、[責任あるギャンブル](https://casinotsu.com/info/responsible-gambling)を推奨しております。"
      ]
    }
  ],
  similarGames: [
    {
      name: "Jammin' Jars",
      provider: "Push Gaming",
      description: "フルーツシンボルがクラスターを形成し、移動するワイルドやマルチプライヤーが特徴の人気のスロットです。"
    },
    {
      name: "Reactoonz",
      provider: "Play'n GO",
      description: "カラフルなエイリアンが登場し、アバランチ機能と様々な「クイック」機能が魅力のクラスターペイ型スロットです。"
    }
  ],
  prosCons: {
    pros: [
      "ユニークで楽しい絵文字テーマ",
      "クラスターペイとアバランチ機能による連続勝利の可能性",
      "5種類の異なるフィーチャーがゲームに深みを与える",
      "最大10,000倍という高い最大配当ポテンシャル",
      "NetEnt社の高品質なグラフィックとサウンド",
      "モバイルデバイスに完全対応",
      "幅広いベット範囲"
    ],
    cons: [
      "フィーチャーの出現にはある程度の運が必要",
      "中毒性が高いため、自己管理が重要",
      "ボラティリティがミディアムのため、ハイローラーには物足りない可能性も"
    ]
  },
  faq: [
    {
      q: "Emojiplanet はどこのカジノで遊ぶことができますか？",
      a: "カジ旅, ベラジョン, エルドアカジノなど、多くのオンラインカジノでプレイ可能です。 CasinoTsu が上記「プレイ可能なカジノ」セクションにて、厳選したカジノをご紹介しておりますので、ご参照ください。"
    },
    {
      q: "Emojiplanet の特徴は何ですか？",
      a: "5つの特別なフィーチャー（爆弾、ピザ、キスマーク、ロケット、ダブルハート）が搭載されており、これらは特定の絵文字シンボルを12個以上集める（アバランチ機能で消滅させる）ことで発動します。また、クラスターペイシステムとアバランチ機能（連鎖落下）が特徴的です。"
    }
  ],
  breadcrumbs: [
    { label: "Home", href: "https://casinotsu.com/" },
    { label: "Slots", href: "https://casinotsu.com/slots" },
    { label: "Emojiplanet", href: "https://casinotsu.com/slots/emojiplanet" }
  ],
  tableOfContents: [
    { label: "導入・概要", href: "#導入・概要" },
    { label: "ゲーム基本情報", href: "#ゲーム基本情報" },
    { label: "ゲーム特徴・フィーチャー", href: "#ゲーム特徴・フィーチャー" },
    { label: "アバランチ機能", href: "#アバランチ機能" },
    { label: "絵文字メーターと5つのフィーチャー", href: "#絵文字メーターと5つのフィーチャー" },
    { label: "ワイルドシンボル", href: "#ワイルドシンボル" },
    { label: "最高配当シンボル", href: "#最高配当シンボル" },
    { label: "プロバイダー情報", href: "#プロバイダー情報" },
    { label: "グラフィック・サウンド", href: "#グラフィック・サウンド" },
    { label: "モバイル対応", href: "#モバイル対応" },
    { label: "戦略・攻略法", href: "#戦略・攻略法" },
    { label: "類似ゲーム", href: "#類似ゲーム" },
    { label: "まとめ", href: "#まとめ" },
    { label: "よくある質問", href: "#よくある質問" }
  ]
};

export default function Page() {
  return <SlotTemplate data={data} canonicalPath="/slots/emojiplanet" />;
}
