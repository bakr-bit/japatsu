import SlotTemplate, { SlotPageData } from "@/components/templates/SlotTemplate";

const data: SlotPageData = {
  title: "White Rabbit／ホワイトラビット｜高RTPスロットの最新レビュー",
  hero: {
    title: "White Rabbit／ホワイトラビット",
    subheading: "最大97.77%の高RTPを誇るメガウェイズスロット",
    description: "ビッグタイムゲーミング社開発の「ホワイトラビット」は、最大248,832通りのペイラインと驚異的なRTPを誇るメガウェイズスロットです。不思議の国のアリスの世界観をモチーフにした幻想的なデザインと、エキサイティングなフリースピンフィーチャーが魅力です。",
    score: 4.4,
    scoreMax: 5,
    rtp: "96.42%",
    maxMultiplier: "x17,416",
    provider: "Big Time Gaming",
    releaseDate: "2017年10月",
    volatility: "高",
    reels: "5",
    paylines: "最大 248,832通り",
    minBet: "$0.10",
    maxBet: "$20",
    slotImageSrc: "/slots/white-rabbit.png",
    highlights: [
      "最大97.77%の高RTP",
      "最大248,832通りのメガウェイズ",
      "「不思議の国のアリス」の世界観",
      "ボーナス購入機能搭載",
      "キャタピラー・マルチプライヤー・ワイルド"
    ],
    watchouts: [
      "ハイボラティリティのため、勝利頻度は低い傾向がある",
      "フリースピン獲得までに時間がかかる場合がある"
    ]
  },
  featuredCasino: {
    name: "ラーメンベット",
    logo: "/assets/casino/ramenbet.png",
    href: "/reviews/ramenbet",
    ctaText: "今すぐプレイ",
    ctaHref: "/slots/white-rabbit",
    tagline: "賭け条件5倍🔥 3,000円入金不要ボーナス【ジャパカジ限定】"
  },
  casinos: [
    {
      name: "ラーメンベット",
      logo: "/assets/casino/ramenbet.png",
      href: "/reviews/ramenbet",
      bonus: "賭け条件5倍🔥 3,000円入金不要ボーナス【ジャパカジ限定】",
      freeSpins: "なし",
      wagering: "5倍",
      rating: 5,
      tagline: "幅広いゲームと魅力的なボーナス！",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/ramenbet"
    },
    {
      name: "コンクエスタドール",
      logo: "/assets/casino/conquestador.png",
      href: "/reviews/conquestador",
      bonus: "登録ボーナス40ドル＆登録スピン25回",
      freeSpins: "25回",
      wagering: "要確認",
      rating: 4,
      tagline: "検索機能抜群！好みのゲームをサクサク検索できちゃう！",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/conquestador"
    },
    {
      name: "コニベット",
      logo: "/assets/casino/konibet.png",
      href: "/reviews/konibet",
      bonus: "$20（約3,000円）＋Lucky Neko フリースピン50回",
      freeSpins: "50回",
      wagering: "要確認",
      rating: 4,
      tagline: "パチンコ・パチスロが遊べるオンラインカジノ！",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/konibet"
    },
    {
      name: "ジョイカジノ",
      logo: "/images/casino/joycasino.png",
      href: "/reviews/joy-casino",
      bonus: "登録ボーナス4,500円",
      freeSpins: "なし",
      wagering: "要確認",
      rating: 4,
      tagline: "ジョイカジノのてんこ盛りボーナスを貰っちゃおう！",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/joy-casino"
    },
    {
      name: "ステークカジノ",
      logo: "/assets/casino/stake.png",
      href: "/reviews/stake",
      bonus: "入金不要ボーナス2,500円",
      freeSpins: "なし",
      wagering: "要確認",
      rating: 5,
      tagline: "ハウスエッジ5%レーキバック＆VIP特典が超おトク！",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/stake"
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
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/betgoat"
    },
    {
      name: "2up",
      logo: "/assets/casino/2up.png",
      href: "/reviews/2up",
      bonus: "$0",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "仮想通貨でも日本円でも遊べる、最新オンラインカジノ",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/2up"
    },
    {
      name: "1win",
      logo: "/assets/casino/1win.png",
      href: "/reviews/1win",
      bonus: "$0",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "幅広いゲームラインナップが魅力！今注目の仮想通貨対応オンラインカジノ★",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/1win"
    },
    {
      name: "Miki",
      logo: "/assets/casino/miki.jpg",
      href: "/reviews/miki",
      bonus: "$4,000",
      freeSpins: "200",
      wagering: "30x",
      rating: 4,
      tagline: "充実したゲームラインナップ！盛りだくさんのボーナスでお得にプレイ！",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/miki"
    },
    {
      name: "Bitz",
      logo: "/assets/casino/bitz.jpg",
      href: "/reviews/bitz",
      bonus: "$1,000",
      freeSpins: "-",
      wagering: "29x",
      rating: 4,
      tagline: "本,人確認書類不要！？ 匿名性もバッチリの最新仮想通貨カジノ！",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/bitz"
    },
    {
      name: "Wikibet",
      logo: "/assets/casino/wikibet.jpg",
      href: "/reviews/wikibet",
      bonus: "¥50,000",
      freeSpins: "200",
      wagering: "20x",
      rating: 4,
      tagline: "シンプルな操作性と可愛いデザインが特徴！厳選されたゲームをプレイしよう★",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/wikibet"
    },
    {
      name: "Katsuwin",
      logo: "/assets/casino/katsuwin.png",
      href: "/reviews/katsuwin",
      bonus: "$0",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "業界トップクラスのパチンコ・パチスロ台数を誇る新星カジノ",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/katsuwin"
    },
    {
      name: "Sushi Casino",
      logo: "/assets/casino/sushi-casino.jpg",
      href: "/reviews/sushi-casino",
      bonus: "¥200,000",
      freeSpins: "50",
      wagering: "35x",
      rating: 4,
      tagline: "てんこ盛りのオファーやVIPプログラムが魅力的な最新オンラインカジノ",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/sushi-casino"
    },
    {
      name: "Betpanda",
      logo: "/assets/casino/betpanda.png",
      href: "/reviews/betpanda",
      bonus: "$0",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "匿名で安全に遊べるクリプトオンラインカジノ！",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/betpanda"
    },
    {
      name: "Parimatch",
      logo: "/images/casino/parimatch-2.png",
      href: "/reviews/parimatch",
      bonus: "$0",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "2024年11月オープンの最新オンカジを徹底レビュー！",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/parimatch"
    },
    {
      name: "Bets.io",
      logo: "/images/casino/bets-io-1.png",
      href: "/reviews/betsio",
      bonus: "1 BTC",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "最大1BTCの豪華入金ボーナスが嬉しいクリプトカジノ♪",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/betsio"
    },
    {
      name: "Duelbits",
      logo: "/images/casino/duelbits-1.png",
      href: "/reviews/duelbits",
      bonus: "$0",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "500フリースピンが嬉しいクリプトカジノ♪",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/duelbits"
    },
    {
      name: "Sportsbet.io",
      logo: "/assets/casino/sportsbetio.jpg",
      href: "/reviews/sportsbet-io",
      bonus: "1,000USDT",
      freeSpins: "-",
      wagering: "-",
      rating: 5,
      tagline: "スポーツベットだけじゃない！",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/sportsbet-io"
    },
    {
      name: "Shuffle",
      logo: "/assets/casino/shuffle.jpg",
      href: "/reviews/shuffle",
      bonus: "$2,020",
      freeSpins: "-",
      wagering: "40x",
      rating: 4,
      tagline: "独自のトークンで資産運用もできる仮想通貨カジノ★",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/shuffle"
    },
    {
      name: "Winz",
      logo: "/assets/casino/winz.jpg",
      href: "/reviews/winz-io",
      bonus: "$10,000",
      freeSpins: "800",
      wagering: "-",
      rating: 4,
      tagline: "ウェルカムオファーやボーナスに賭け条件なし♪",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/winz-io"
    },
    {
      name: "Lucky Block",
      logo: "/assets/casino/lucky-block.jpg",
      href: "/reviews/lucky-block",
      bonus: "€25,000",
      freeSpins: "50",
      wagering: "35x",
      rating: 4,
      tagline: "独自トークンもある仮想通貨カジノ♪",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/lucky-block"
    },
    {
      name: "Flush Casino",
      logo: "/images/casino/flush-1.png",
      href: "/reviews/flush-casino",
      bonus: "$0",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "今年大注目のクリプトカジノ",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/flush-casino"
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
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/roobet"
    },
    {
      name: "Casino Sky",
      logo: "/images/casino/casinosky.png",
      href: "/reviews/casino-sky",
      bonus: "$0",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "日本のオンカジ業界プロが運営する期待のカジノ！",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/casino-sky"
    },
    {
      name: "Mega Dice",
      logo: "/assets/casino/mega-dice.jpg",
      href: "/reviews/mega-dice",
      bonus: "1BTC",
      freeSpins: "50",
      wagering: "35x",
      rating: 4,
      tagline: "ボーナス最大1BTCの仮想通貨カジノ！",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/mega-dice"
    },
    {
      name: "Fresh Casino",
      logo: "/images/casino/fresh_375x375.png",
      href: "/reviews/fresh-casino",
      bonus: "$0",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "6,000種類以上のゲームで遊びたい放題！",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/fresh-casino"
    },
    {
      name: "BC.Game",
      logo: "/assets/casino/bcgame.jpg",
      href: "/reviews/bc-game",
      bonus: "$1,600",
      freeSpins: "460",
      wagering: "45x",
      rating: 4,
      tagline: "圧巻のゲーム数＆最大1,600ドルの初回入金ボーナス！",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/bc-game"
    },
    {
      name: "Stake",
      logo: "/images/casino/stake-1.png",
      href: "/reviews/stake",
      bonus: "$0",
      freeSpins: "-",
      wagering: "-",
      rating: 5,
      tagline: "ハウスエッジ5%レーキバック＆VIP特典が超おトク！",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/stake"
    },
    {
      name: "Wonder Casino",
      logo: "/assets/casinos/wonder-casino_375x375.png",
      href: "/reviews/wonder-casino",
      bonus: "$0",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "業界最速の出金スピードと仮想通貨特化ボーナス！",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/wonder-casino"
    },
    {
      name: "OhMySpins",
      logo: "/assets/casino/ohmyspins.jpg",
      href: "/reviews/ohmyspins",
      bonus: "¥65,000",
      freeSpins: "200",
      wagering: "35x",
      rating: 4,
      tagline: "マニアックなプロバイダーもココなら見つかる！",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/ohmyspins"
    },
    {
      name: "Yuugado",
      logo: "/images/casino/yuugado_375x375-1.png",
      href: "/reviews/yuugado",
      bonus: "$0",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "「和」がテーマのオンラインカジノ \| パチンコからスポーツベットまで！",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/yuugado"
    },
    {
      name: "Tedbet",
      logo: "/images/casino/tedbet_375x375.png",
      href: "/reviews/tedbet",
      bonus: "$0",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "豊富な決済方法が嬉しいっ♪",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/tedbet"
    },
    {
      name: "BetRebels",
      logo: "/images/casino/betrebels_375x375.png",
      href: "/reviews/betrebels",
      bonus: "$0",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "スポーツ好き必須！カジノもどんどん充実中",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/betrebels"
    },
    {
      name: "Conquestador",
      logo: "/images/casino/Conquestador_375x375.png",
      href: "/reviews/conquestador",
      bonus: "$0",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "検索機能抜群！好みのゲームをサクサク検索できちゃう！",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/conquestador"
    },
    {
      name: "Cloudbet",
      logo: "/assets/casino/cloudbet.jpg",
      href: "/reviews/cloudbet",
      bonus: "5BTC",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "入出金額上限なし！仮想通貨好きハイローラー必見",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/cloudbet"
    },
    {
      name: "Lilibet",
      logo: "/images/casino/lilibet_375x375.png",
      href: "/reviews/lilibet",
      bonus: "$0",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "勝ったらラッキー、負けても安心！初心者さんいらっしゃい！",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/lilibet"
    },
    {
      name: "Livecasino.io",
      logo: "/images/casino/livecasinoio.jpg",
      href: "/reviews/livecasino-io",
      bonus: "$0",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "ライブカジノ×仮想通貨。そんなモダンな世界はいかが？",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/livecasino-io"
    },
    {
      name: "Lucky Bull",
      logo: "/assets/casino/lucky-bull.jpg",
      href: "/reviews/lucky-bull",
      bonus: "$917",
      freeSpins: "-",
      wagering: "30x",
      rating: 4,
      tagline: "キャラと一緒にラッキーブルの世界でクエスト攻略！",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/lucky-bull"
    },
    {
      name: "Gamdom",
      logo: "/assets/casino/gamdom.jpg",
      href: "/reviews/gamdom",
      bonus: "$0",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "ハイローラープレイヤーにもってこいの最強レーキバックカジノ！",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/gamdom"
    },
    {
      name: "Energy Casino",
      logo: "/images/casino/energy-casino_375x375.png",
      href: "/reviews/energy-casino",
      bonus: "$0",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "ウェブサイトの見やすさと操作性は抜群なカジノ",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/energy-casino"
    },
    {
      name: "Konibet",
      logo: "/images/casino/konibet_375x375.png",
      href: "/reviews/konibet",
      bonus: "$0",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "パチンコ・パチスロが遊べるオンラインカジノ！",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/konibet"
    },
    {
      name: "Casino Me",
      logo: "/assets/casino/casino-me.jpg",
      href: "/reviews/casino-me",
      bonus: "$777",
      freeSpins: "77",
      wagering: "20x",
      rating: 4,
      tagline: "独自システムのお得なキャッシュバックあり！",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/casino-me"
    },
    {
      name: "Bons.com",
      logo: "/assets/casinos/bons_375x375-1.png",
      href: "/reviews/bons-com",
      bonus: "$0",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "マインクラフトチックでも中身はモダン",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/bons-com"
    },
    {
      name: "Mystino",
      logo: "/assets/casinos/mystino_375x375.png",
      href: "/reviews/mystino",
      bonus: "$0",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "日本人プレイヤーの心をグッと掴むカジノといえば…！",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/mystino"
    },
    {
      name: "InterCasino",
      logo: "/assets/casinos/Inter-Casino_375x375-1.png",
      href: "/reviews/intercasino-japan",
      bonus: "$0",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "実は20年以上歴史のあるカジノはココ！",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/intercasino-japan"
    },
    {
      name: "Empire777",
      logo: "/assets/casino/empire777.jpg",
      href: "/reviews/empire777",
      bonus: "$1,600",
      freeSpins: "-",
      wagering: "20x",
      rating: 4,
      tagline: "アジアNo.1を豪語するオンカジはここだ！",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/empire777"
    },
    {
      name: "Pinnacle",
      logo: "/assets/casino/pinnacle.jpg",
      href: "/reviews/pinnacle",
      bonus: "$0",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "カジノもスポーツベットも楽しめるハイブリッド！",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/pinnacle"
    },
    {
      name: "BitStarz",
      logo: "/images/casino/bitstarz_375x375.png",
      href: "/reviews/bitstarz",
      bonus: "$0",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "複数通貨のマルチウォレット対応カジノ！",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/bitstarz"
    },
    {
      name: "Joy Casino",
      logo: "/images/casino/joycasino_375x375.png",
      href: "/reviews/joy-casino",
      bonus: "$0",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "ジョイカジノのてんこ盛りボーナスを貰っちゃおう！",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/joy-casino"
    },
    {
      name: "Casino Secret",
      logo: "/assets/casinos/casino-secret_375x375.png",
      href: "/reviews/casino-secret",
      bonus: "$0",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "キャッシュバックと言えばこのカジノで間違いなし",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/casino-secret"
    },
    {
      name: "Vera&John",
      logo: "/assets/casinos/VeraJohn_375x375-1.png",
      href: "/reviews/vera-john",
      bonus: "$0",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "オンカジといえば、やっぱりベラジョン！",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/vera-john"
    },
    {
      name: "Bitcasino.io",
      logo: "/assets/casino/bitcasinoio.jpg",
      href: "/reviews/bitcasino-io",
      bonus: "¥200,000",
      freeSpins: "-",
      wagering: "40x",
      rating: 4,
      tagline: "元祖仮想通貨カジノ！",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/bitcasino-io"
    },
    {
      name: "Casino-X",
      logo: "/images/casino/casino-x_375x375-1.png",
      href: "/reviews/casino-x",
      bonus: "$0",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "太っ腹ボーナス盛りだくさんのカジノエックスで、お得にプレイ♪",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/casino-x"
    },
    {
      name: "Casitabi",
      logo: "/assets/casino/casitabi.jpg",
      href: "/reviews/casitabi",
      bonus: "$500",
      freeSpins: "250",
      wagering: "20x",
      rating: 4,
      tagline: "RPG型カジノで旅をしながらボスを倒してお得にプレイ！",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/casitabi"
    },
    {
      name: "William Hill",
      logo: "/assets/casino/william-hill.jpg",
      href: "/reviews/william-hill-casino",
      bonus: "$300",
      freeSpins: "-",
      wagering: "25x",
      rating: 4,
      tagline: "世界三大の超老舗ブックメーカー！",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/william-hill-casino"
    },
    {
      name: "Eldoah Casino",
      logo: "/assets/casinos/eldoah_375x375-3.png",
      href: "/reviews/eldoah-casino",
      bonus: "$0",
      freeSpins: "-",
      wagering: "-",
      rating: 4,
      tagline: "ライブカジノ利用満足度6年連続ナンバー1のオンラインカジノ",
      ctaText: "今すぐ登録",
      ctaHref: "https://casinotsu.com/redirect/eldoah-casino"
    }
  ],
  gameInfo: {
    intro: "ビッグタイムゲーミング社開発ゲームの中でも、最大97.77%という驚異的な高RTPを誇る、大変人気のあるゲームです。",
    basicInfo: {
      rtp: "97.24％（フリースピン購入時は97.77％）",
      volatility: "高",
      reels: "5",
      paylines: "最大 248,832通り",
      minBet: "$0.10 ～ $0.20",
      maxBet: "$20",
      provider: "Big Time Gaming",
      releaseDate: "2017年10月"
    }
  },
  payoutTable: {
    title: "ホワイトラビットのシンボルと配当表",
    symbols: [
      {
        name: "ハートの女王",
        payout5: "100倍",
        payout4: "20倍",
        payout3: "5倍"
      },
      {
        name: "ルビー",
        payout5: "30倍",
        payout4: "10倍",
        payout3: "3倍"
      },
      {
        name: "サファイア",
        payout5: "20倍",
        payout4: "7倍",
        payout3: "2倍"
      },
      {
        name: "エメラルド",
        payout5: "15倍",
        payout4: "5倍",
        payout3: "2倍"
      },
      {
        name: "チェシャ猫",
        payout5: "10倍",
        payout4: "4倍",
        payout3: "1倍"
      },
      {
        name: "トゥイードルダム＆トゥイードルディー",
        payout5: "8倍",
        payout4: "3倍",
        payout3: "1倍"
      },
      {
        name: "マッドハッター (J)",
        payout5: "5倍",
        payout4: "2倍",
        payout3: "0.5倍"
      },
      {
        name: "10",
        payout5: "4倍",
        payout4: "1.5倍",
        payout3: "0.5倍"
      },
      {
        name: "9",
        payout5: "3倍",
        payout4: "1倍",
        payout3: "0.4倍"
      }
    ],
    maxPayout: "13,000倍",
    notes: [
      "上記はベット額1ドルあたりの配当例です。実際の配当はベット額によって変動します。",
      "ワイルドシンボル (アリスの後ろ姿): 第2、第3、第4、第5リールに出現し、スキャッターシンボル以外の全てのシンボルの代わりになります。",
      "スキャッターシンボル (白ウサギ): 第2、第3、第4リールに出現し、3つ揃うとフリースピンラウンドに突入します。",
      "フィーチャードロップシンボル (金色のコイン): これが出現するたびに、フリースピン購入に必要なコストが減少します。"
    ]
  },
  features: {
    title: "ホワイトラビットのゲームフィーチャー",
    items: [
      {
        name: "アリスのワイルドシンボル",
        description: "第2、第3、第4、第5リールに出現し、配当成立に貢献します。",
        icon: "/images/icon/wild.svg"
      },
      {
        name: "キャタピラー・マルチプライヤー・ワイルド",
        description: "画面左下で眠っているキャタピラーが、ランダムにボーナスワイルドシンボルを追加します。これらのボーナスワイルドには、x2またはx3のマルチプライヤーが付与されます。",
        icon: "/images/icon/wild-multiplier.svg"
      },
      {
        name: "スキャッターシンボル",
        description: "白ウサギのシンボル。第2、第3、第4リールにのみ出現し、3つ揃うとフリースピンラウンドに突入します。",
        icon: "/images/icon/scatter.svg"
      },
      {
        name: "フィーチャードロップシンボル",
        description: "金色のBTGコイン。出現するたびに、フリースピン購入に必要なコストが減少します。",
        icon: "/images/icon/feature-drop.svg"
      },
      {
        name: "ボーナス購入機能",
        description: "現在のベット額の100倍のコストで即座にフリースピンラウンドを開始できます。この機能使用時のRTPは97.77%に上昇します。",
        icon: "/images/icon/bonus-buy.svg"
      },
      {
        name: "フリースピンラウンド",
        description: "カップケーキシンボルが出現すると、そのシンボルが表示されているリールにシンボルの数が1つ増加します。各リールには最大12個のシンボルが配置可能になり、ペイライン数が増加します。リールでシンボルの数が12個に達すると、「クイーンズリール」に昇格し、ワイルドシンボルや高配当シンボルが出現しやすくなります。",
        icon: "/images/icon/free-spins.svg"
      },
      {
        name: "リトリガー",
        description: "フリースピン中に特定の条件を満たすと、追加のフリースピンを獲得できます。",
        icon: "/images/icon/retrigger.svg"
      }
    ]
  },
  sections: [
    {
      heading: "White Rabbit がプレイ可能なカジノ",
      paragraphs: [
        "CasinoTsu が厳選した、ホワイトラビットをプレイできるおすすめのオンラインカジノをご紹介いたします。各カジノでは、魅力的なボーナスやプロモーションが提供されている場合がございますので、ぜひ詳細をご確認ください。"
      ]
    },
    {
      heading: "White Rabbit／ホワイトラビット：基本情報",
      paragraphs: [
        "CasinoTsu では、ゲームの基本情報を正確にお伝えすることを大切にしています。",
        "RTP（Return To Player）とは、プレイヤーに還元されると期待される割合のことです。ホワイトラビットのRTPは通常時97.24％と非常に高く、フリースピン購入時にはさらに97.77％に跳ね上がります。これは業界平均の96％を大きく上回っており、プレイヤーにとって有利なゲームと言えるでしょう。ビッグタイムゲーミングは、この高いRTPを持つスロットで数々の人気作を生み出しています。",
        "ボラティリティが「高」であるため、勝利の頻度はやや低いものの、一度当たった際の配当は大きくなる傾向があります。これは、より大きな賞金を狙いたいプレイヤーや、ある程度の資金管理ができるプレイヤーに適しています。"
      ]
    },
    {
      heading: "ホワイトラビットのシンボルと配当表",
      paragraphs: [
        "ホワイトラビットは、メガウェイズスロットのシステムを採用しており、各リールに表示されるシンボルの数がスピンごとに変動します。これにより、ペイラインの数が最大で248,832通りにもなります。ペイアウトは左から右へのシンボルの連続で発生します。",
        "「J」シンボルはマッドハッターですが、他のトランプシンボルと同様に、それほど高配当ではありません。"
      ]
    },
    {
      heading: "ホワイトラビットのゲームフィーチャー",
      paragraphs: [
        "CasinoTsu は、ゲームのフィーチャーを詳細に解説し、プレイヤーの皆様が理解を深められるよう努めます。"
      ]
    },
    {
      heading: "・ベースゲーム",
      paragraphs: [
        "ゲーム画面は、「不思議の国のアリス」の世界観を反映した、幻想的でカラフルなデザインが特徴です。BGMには時折アジア風のメロディーが聞こえることもありますが、全体的にファンタジックな雰囲気を醸し出しています。"
      ]
    },
    {
      heading: "【アリスのワイルドシンボル】",
      paragraphs: [
        "アリスはワイルドシンボルとして登場しますが、その姿は後ろ姿のみです。第2、第3、第4、そして第5リールに出現し、配当成立に貢献します。"
      ]
    },
    {
      heading: "【キャタピラー・マルチプライヤー・ワイルド】",
      paragraphs: [
        "画面左下で眠っているキャタピラーが、時折目を覚まし、ランダムにボーナスワイルドシンボル を追加します。これらのボーナスワイルドには、x2またはx3のマルチプライヤー が付与されます。複数のマルチプライヤーワイルドが組み合わさることで、大きな配当に繋がる可能性があります。✨"
      ]
    },
    {
      heading: "【スキャッターシンボル】",
      paragraphs: [
        "白ウサギのシンボルがスキャッターです。これは第2、第3、第4リールにのみ出現します。スキャッターが3つ揃うと、15回のフリースピンが付与されるボーナスラウンドに突入します。"
      ]
    },
    {
      heading: "【フィーチャードロップシンボルとボーナス購入機能】",
      paragraphs: [
        "フリースピンを待てないプレイヤーのために、ボーナス購入機能 が搭載されています。この機能を使うと、現在のベット額の100倍のコストで即座にフリースピンラウンドを開始できます。",
        "また、ゲーム中に出現する金色のBTGコイン（フィーチャードロップシンボル）を集めることで、フリースピン購入に必要なコストを減らすことができます。コインが1枚出現するごとに、ボーナス購入コストが減少するため、実質的な購入価格は変動します。この機能を利用すると、RTPは97.77%に上昇します。"
      ]
    },
    {
      heading: "・フリースピンラウンド",
      paragraphs: [
        "たくさんカップケーキが出てシンボルが12個になるかが鍵！",
        "フリースピンラウンドに突入すると、ゲームの展開はさらにエキサイティングになります。このラウンドでは、ピンクの カップケーキシンボル が重要な役割を果たします。",
        "カップケーキシンボルが出現すると、そのシンボルが表示されているリールに シンボルの数が1つ増加 します。各リールには最大12個のシンボルが配置可能になり、シンボル数が増えることで、そのスピンでのペイライン数も増加します。",
        "あるリールでシンボルの数が12個に達すると、そのリールは 「クイーンズリール」 に昇格します。クイーンズリールは、ワイルドシンボルが追加されたり、より高い配当シンボルが出現しやすくなるなど、恩恵が増加し、ビッグウィンのチャンスが格段に高まります。",
        "さらに、フリースピン中に特定の条件を満たすと、 リトリガー が発生し、追加のフリースピンを獲得できます。これにより、ボーナスラウンドがさらに延長され、大きな勝利の可能性が広がります。"
      ]
    },
    {
      heading: "ホワイトラビットをプレイした感想",
      paragraphs: [
        "CasinoTsu では、プレイヤーの皆様が安心してゲームを選べるよう、正直な感想をお届けします。",
        "「高RTPスロット」と聞くと、フリースピンが頻繁に訪れるイメージがありますが、ホワイトラビットはハイボラティリティ（高変動性）のため、フリースピン獲得までに時間がかかることもあります。しかし、その分、一度フリースピンラウンドに入ると、シンボル数が増加したり、クイーンズリールが出現したりと、大きな配当に繋がる興奮を味わえます。",
        "ベースゲーム中も、キャタピラーがマルチプライヤーワイルドを出現させてくれることがあり、退屈することなくプレイできます。CasinoTsu の実感としては、コイン持ちは悪くないものの、ボーナス獲得には根気が必要だと感じました。",
        "しかし、ボーナス購入機能 があるおかげで、すぐにフリースピンの興奮を味わいたいプレイヤーにも対応しています。この機能を使えば、RTPも97.77%に向上するため、より有利にゲームを進めることができます。",
        "「不思議の国のアリス」をモチーフにした幻想的なグラフィックとサウンド、そしてメガウェイズならではのペイラインの多さが、プレイヤーを飽きさせません。フリースピン中のドキドキ感や、クイーンズリールが出現した際の興奮は格別です。",
        "今回はあまり勝てませんでしたが、このスロットにはいつか爆発的な勝利をもたらしてくれるポテンシャルを感じます。RTPが97％以上というのも、やはり夢がありますね！ CasinoTsu は、全体的に、戦略性があり、長く楽しめるスロットだと感じました。"
      ]
    },
    {
      heading: "ホワイトラビットを勝手に評価！",
      paragraphs: [
        "CasinoTsu の評価基準に基づき、ホワイトラビットを評価いたします。正確さが第一。興奮はその次。"
      ],
      table: {
        title: "評価",
        columns: ["項目", "評価"],
        rows: [
          ["グラフィック", "★★★★★"],
          ["サウンド", "★★★★★"],
          ["面白さ", "★★★★☆"],
          ["賞金獲得", "★★★★★"],
          ["総合評価", "★★★★★ (評価 4.8 /5段階評価)"]
        ]
      }
    }
  ],
  similarGames: [
    ],
  prosCons: {
    pros: [
      "最大97.77%という驚異的な高RTP",
      "最大248,832通りのメガウェイズシステムによる多数のペイライン",
      "「不思議の国のアリス」をモチーフにした幻想的なグラフィックとサウンド",
      "キャタピラー・マルチプライヤー・ワイルドによるベースゲームの活性化",
      "フリースピン中のカップケーキシンボルによるシンボル数増加とクイーンズリールの出現",
      "ボーナス購入機能搭載で、すぐにフリースピンを楽しめる",
      "リトリガーによるフリースピンの延長"
    ],
    cons: [
      "ハイボラティリティのため、勝利頻度は低い傾向がある",
      "フリースピン獲得までに時間がかかる場合がある",
      "最大勝利倍率が他のメガウェイズスロットと比較してやや低い場合がある"
    ]
  },
  faq: [
    {
      q: "ホワイトラビットの最大勝利はいくらですか？",
      a: "最大でプレイヤーのベット額の13,000倍です。"
    },
    {
      q: "ホワイトラビットのRTP（還元率）は？",
      a: "通常プレイ時は97.24％、フリースピン購入機能を使用すると97.77％となります。"
    }
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "スロット", href: "/slots" },
    { label: "White Rabbit", href: "/slots/white-rabbit" }
  ],
  tableOfContents: [
    { label: "White Rabbit がプレイ可能なカジノ", href: "#casinos" },
    { label: "White Rabbit／ホワイトラビット：基本情報", href: "#game-info" },
    { label: "ホワイトラビットのシンボルと配当表", href: "#payout-table" },
    { label: "ホワイトラビットのゲームフィーチャー", href: "#features" },
    { label: "ホワイトラビットをプレイした感想", href: "#review" },
    { label: "ホワイトラビットを勝手に評価！", href: "#rating" },
    { label: "よくある質問 (FAQ)", href: "#faq" }
  ],
  cta: {
    text: "今すぐプレイ",
    href: "/slots/white-rabbit"
  }
};

export default function Page() {
  return <SlotTemplate data={data} canonicalPath="/slots/white-rabbit" />;
}
