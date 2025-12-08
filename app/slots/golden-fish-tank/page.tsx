import SlotTemplate, { SlotPageData } from "@/components/templates/SlotTemplate";

const data: SlotPageData = {
  title: "Golden Fish Tank",
  hero: {
    title: "Golden Fish Tank",
    subheading: "ゴールデンフィッシュタンク 🐠",
    description: "夏にぴったりの爽やかなオンラインスロット、ゴールデンフィッシュタンク（Golden Fish Tank）をCasinoTsuがご紹介します。🌊 可愛らしいお魚たちがモチーフの見た目とは裏腹に、爆裂性能で大人気の機種です。フリースピン突入時に、プレイヤー自身が選択したフィーチャーピックによって毎回異なるゲーム体験ができる、まさに「レッツ・フィッシング！」なワクワク感をお楽しみください。",
    score: 3.4,
    scoreMax: 5,
    rtp: "96.8%",
    maxMultiplier: "x2,000",
    provider: "Yggdrasil",
    releaseDate: "2016-02-01",
    volatility: "Medium",
    reels: "5",
    paylines: "20",
    minBet: "$0.2",
    maxBet: "$50",
    slotImageSrc: "/slots/golden-fish-tank.jpg",
    highlights: [
      "フリースピン突入時にプレイヤー自身が選択したフィーチャーピックによって毎回異なるゲーム体験が可能",
      "可愛らしい見た目とは裏腹の爆裂性能",
      "ゴールデンベット機能でRTP向上とフリースピン時の特典あり"
    ],
    watchouts: [
      "続編（Golden Fish Tank 2 Gigablox）は最大配当倍率がx5,000、Golden Fish Tank Partyはx10,000と、オリジナル版より大幅に増加",
      "ゴールデンベットON時のRTPは96.5%だが、OFF時は95.90%と低下",
      "Golden Fish Tank PartyのRTPは94.0%と低め"
    ]
  },
  featuredCasino: {
    name: "1win",
    logo: "/assets/casino/1win.png",
    ctaText: "今すぐプレイ！",
    tagline: "幅広いゲームラインナップが魅力！今注目の仮想通貨対応オンラインカジノ★"
  },
  casinos: [
    {
      name: "1win",
      logo: "/assets/casino/1win.png",
      rating: 4,
      tagline: "幅広いゲームラインナップが魅力！今注目の仮想通貨対応オンラインカジノ★",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Miki",
      logo: "/assets/casino/miki.png",
      bonus: "ボーナス 30x 賭け条件 $4,000 / フリースピン 20x 賭け条件 200",
      rating: 4,
      tagline: "充実したゲームラインナップ！盛りだくさんのボーナスでお得にプレイ！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Bitz",
      logo: "/assets/casino/bitz.png",
      bonus: "ボーナス 29x 賭け条件 $1,000",
      rating: 4,
      tagline: "本人確認書類不要！？ 匿名性もバッチリの最新仮想通貨カジノ！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Katsuwin",
      logo: "/assets/casino/katsuwin.png",
      rating: 4.5,
      tagline: "業界トップクラスのパチンコ・パチスロ台数を誇る新星カジノ",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Sushi Casino",
      logo: "/assets/casino/sushi-casino.png",
      bonus: "ボーナス 35x 賭け条件 ¥200,000 / フリースピン 40x 賭け条件 50",
      rating: 4,
      tagline: "てんこ盛りのオファーやVIPプログラムが魅力的な最新オンラインカジノ",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Parimatch",
      logo: "/assets/casino/parimatch.png",
      rating: 4,
      tagline: "2024年11月オープンの最新オンカジを徹底レビュー！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Winz",
      logo: "/assets/casino/winz.png",
      bonus: "ボーナス $10,000 / フリースピン 800",
      rating: 4.5,
      tagline: "ウェルカムオファーやボーナスに賭け条件なし♪",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Dafabet",
      logo: "/assets/casino/dafabet.png",
      bonus: "ボーナス 20x 賭け条件 $500",
      rating: 4,
      tagline: "セルティックFCのスポンサーカジノ",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Flush Casino",
      logo: "/assets/casino/flush-casino.png",
      rating: 4,
      tagline: "今年大注目のクリプトカジノ",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Roobet",
      logo: "/assets/casino/roobet.png",
      bonus: "ボーナス $0",
      rating: 4,
      tagline: "世界的有名人がアンバサダーを務めるオンラインカジノ！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Wonder Casino",
      logo: "/assets/casino/wonder-casino.png",
      rating: 4.5,
      tagline: "業界最速の出金スピードと仮想通貨特化ボーナス！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "OhMySpins",
      logo: "/assets/casino/ohmyspins.png",
      bonus: "ボーナス 35x 賭け条件 ¥65,000 / フリースピン 40x 賭け条件 200",
      rating: 4,
      tagline: "マニアックなプロバイダーもココなら見つかる！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Yuugado",
      logo: "/assets/casino/yuugado.png",
      rating: 4.5,
      tagline: "「和」がテーマのオンラインカジノ | パチンコからスポーツベットまで！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Tedbet",
      logo: "/assets/casino/tedbet.png",
      rating: 4.5,
      tagline: "豊富な決済方法が嬉しいっ♪",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Conquestador",
      logo: "/assets/casino/conquestador.png",
      rating: 4,
      tagline: "検索機能抜群！好みのゲームをサクサク検索できちゃう！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Livecasino.io",
      logo: "/assets/jp/livecasino-io.png",
      bonus: "ボーナス $0",
      rating: 4,
      tagline: "ライブカジノ×仮想通貨。そんなモダンな世界はいかが？",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Gamdom",
      logo: "/assets/casino/gamdom.png",
      bonus: "ボーナス $0",
      rating: 4,
      tagline: "ハイローラープレイヤーにもってこいの最強レーキバックカジノ！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Konibet",
      logo: "/assets/casino/konibet.png",
      rating: 4.5,
      tagline: "パチンコ・パチスロが遊べるオンラインカジノ！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Vulkan Vegas",
      logo: "/assets/casino/vulkan-vegas.png",
      bonus: "ボーナス 40x 賭け条件 ¥100,000 / フリースピン 30x 賭け条件 125",
      rating: 4,
      tagline: "アメコミの世界観に入り込んじゃえ！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Casino Me",
      logo: "/assets/casino/casino-me.png",
      bonus: "ボーナス 20x 賭け条件 $777 / フリースピン 20x 賭け条件 77",
      rating: 4,
      tagline: "独自システムのお得なキャッシュバックあり！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Bons.com",
      logo: "/images/casino/bons-com.png",
      rating: 4.5,
      tagline: "マインクラフトチックでも中身はモダン",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Mystino",
      logo: "/assets/casino/mystino.png",
      rating: 4.5,
      tagline: "日本人プレイヤーの心をグッと掴むカジノといえば…！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "InterCasino",
      logo: "/images/casino/intercasino-japan.png",
      rating: 4.5,
      tagline: "実は20年以上歴史のあるカジノはココ！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Empire777",
      logo: "/assets/casino/empire777.png",
      bonus: "ボーナス 20x 賭け条件 $1,600",
      rating: 4,
      tagline: "アジアNo.1を豪語するオンカジはここだ！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "WinUnique",
      logo: "/assets/casino/winunique.png",
      bonus: "ボーナス 30x 賭け条件 $330 / フリースピン 30x 賭け条件 20",
      rating: 4,
      tagline: "ピカピカ金色招き猫が勝利を運んでくれる？！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "BitStarz",
      logo: "/assets/casino/bitstarz.png",
      rating: 4.5,
      tagline: "複数通貨のマルチウォレット対応カジノ！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Joy Casino",
      logo: "/assets/casino/joy-casino.png",
      rating: 4.5,
      tagline: "ジョイカジノのてんこ盛りボーナスを貰っちゃおう！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Casino Secret",
      logo: "/assets/casino/casino-secret.png",
      rating: 4.5,
      tagline: "キャッシュバックと言えばこのカジノで間違いなし",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Vera&John",
      logo: "/assets/casino/vera-john.png",
      rating: 4.5,
      tagline: "オンカジといえば、やっぱりベラジョン！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Bitcasino.io",
      logo: "/assets/jp/bitcasino-io.png",
      bonus: "ボーナス 40x 賭け条件 ¥200,000",
      rating: 4.5,
      tagline: "元祖仮想通貨カジノ！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Casino-X",
      logo: "/assets/casino/casino-x.png",
      rating: 4.5,
      tagline: "太っ腹ボーナス盛りだくさんのカジノエックスで、お得にプレイ♪",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Casitabi",
      logo: "/assets/casino/casitabi.png",
      bonus: "ボーナス 20x 賭け条件 $500 / フリースピン 20x 賭け条件 250",
      rating: 4.5,
      tagline: "RPG型カジノで旅をしながらボスを倒してお得にプレイ！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Eldoah Casino",
      logo: "/assets/casino/eldoah-casino.png",
      rating: 4.5,
      tagline: "ライブカジノ利用満足度6年連続ナンバー1のオンラインカジノ",
      ctaText: "今すぐプレイ！",
    }
  ],
  gameInfo: {
    intro: "海中で心地よく泳ぐお魚さんたちがモチーフとなったスロットです。見た目は非常にキュートですが、その実力は爆裂級！GOLDEN FISH TANKの最大の特徴は、オリジナルのフリースピン機能「フィーチャーピック」です。フリースピン突入時にプレイヤー自身が選択したフィーチャーによって、毎回異なるゲーム体験が楽しめ、組み合わせ次第では驚くほどの高配当に繋がる可能性があります。",
    basicInfo: {
      rtp: "96.8%",
      volatility: "Medium",
      reels: "5",
      paylines: "20",
      minBet: "$0.2",
      maxBet: "$50",
      provider: "Yggdrasil",
      releaseDate: "2016-02-01"
    }
  },
  payoutTable: {
    title: "シンボルと配当",
    symbols: [
      {
        name: "最高配当のお魚",
        description: "ベット額の100倍",
        payout5: "100x",
        payout4: "20x",
        payout3: "5x",
        isSpecial: false
      },
      {
        name: "黄色いお魚",
        description: "ベット額の50倍",
        payout5: "50x",
        payout4: "15x",
        payout3: "4x",
        isSpecial: false
      },
      {
        name: "青いお魚",
        description: "ベット額の40倍",
        payout5: "40x",
        payout4: "12x",
        payout3: "3x",
        isSpecial: false
      },
      {
        name: "緑のお魚",
        description: "ベット額の30倍",
        payout5: "30x",
        payout4: "10x",
        payout3: "3x",
        isSpecial: false
      },
      {
        name: "ピンクのお魚",
        description: "ベット額の25倍",
        payout5: "25x",
        payout4: "8x",
        payout3: "2x",
        isSpecial: false
      },
      {
        name: "A",
        description: "ベット額の20倍",
        payout5: "20x",
        payout4: "7x",
        payout3: "2x",
        isSpecial: false
      },
      {
        name: "K",
        description: "ベット額の15倍",
        payout5: "15x",
        payout4: "6x",
        payout3: "1.5x",
        isSpecial: false
      },
      {
        name: "Q",
        description: "ベット額の12倍",
        payout5: "12x",
        payout4: "5x",
        payout3: "1x",
        isSpecial: false
      },
      {
        name: "J",
        description: "ベット額の10倍",
        payout5: "10x",
        payout4: "4x",
        payout3: "1x",
        isSpecial: false
      },
      {
        name: "10",
        description: "ベット額の8倍",
        payout5: "8x",
        payout4: "3x",
        payout3: "0.5x",
        isSpecial: false
      }
    ],
    maxPayout: "x2,000",
    notes: [
      "上記は5つのシンボルが揃った場合の配当です。",
      "オリジナル版は20ラインですが、続編によってはライン数やリール数が異なる場合があります。",
      "同じラインで複数の勝利の組み合わせが成立した場合、最も高額な組み合わせに対する賞金が支払われます。",
      "2つ以上の有効なペイラインで勝利の組み合わせが揃った場合は、それぞれの勝利金額が合計されます。"
    ]
  },
  features: {
    title: "ゲームの特徴",
    items: [
      {
        name: "SCATTER（スキャッター）",
        description: "「FreeSpins」と書かれたシンボルが3つ以上出現すると、フリースピンを獲得できます。3つ出現で6回、4つ出現で8回、5つ出現で10回のフリースピンとなり、それぞれ選択できるフィーチャーピックの数が増加します。",
        icon: "/icons/scatter.svg"
      },
      {
        name: "WILD（ワイルド）",
        description: "Wildシンボルは、SCATTER（スキャッター）シンボルを除く、他のどのシンボルとしても機能し、勝利の組み合わせを強力にサポートします。",
        icon: "/icons/wild.svg"
      },
      {
        name: "フィーチャーピック",
        description: "フリースピン突入時に、プレイヤーが選択した貝殻から現れるフィーチャーによって、フリースピンの内容が変化します。選択可能なフィーチャーは、ワイルドフィッシュ、x2マルチプライヤー、追加ワイルド、フィッシュスタック、追加フリースピン、拡張リールなどがあります。",
        icon: "/icons/feature-pick.svg"
      },
      {
        name: "ゴールデンベット",
        description: "ベット額が20%増加しますが、フリースピン突入時に選択できるフィーチャーピックが1つ増え、RTPが95.90%から96.5%に向上します。",
        icon: "/icons/golden-bet.svg"
      },
      {
        name: "ギャンブル機能",
        description: "獲得したフリースピンラウンドをさらにリスクのあるギャンブルで増やすことができる機能です。1/3の確率でピック数を増やすことができますが、失敗すると獲得したボーナスラウンドを全て失うリスクが伴います。",
        icon: "/icons/gamble.svg"
      }
    ]
  },
  sections: [
    {
      heading: "Golden Fish Tank 基本情報",
      table: {
        columns: ["情報項目", "内容"],
        rows: [
          ["RTP", "96.8%"],
          ["最大配当倍率", "x2,000"],
          ["最小ベット額", "$0.2"],
          ["リール数", "5"],
          ["ペイライン数", "20"],
          ["行数", "3"]
        ]
      }
    },
    {
      heading: "概要",
      paragraphs: [
        "GOLDEN FISH TANKは Yggdrasil 提供の5リール、20ライン（※）のオンラインスロットです。",
        "(※) オリジナル版は20ラインですが、続編によってはライン数やリール数が異なる場合があります。",
        "お魚のSCATTER（スキャッター）シンボルが3つ以上出現すると、6～10回転のフリースピンへ突入します。",
        "可愛らしい見た目とは裏腹の、爆裂機種として人気を博しています！"
      ]
    },
    {
      heading: "ゲームのプレイ方法",
      paragraphs: [
        "画面下部にある「+」および「-」ボタンをクリックして、コインバリュー（ベット額）を調整してください。",
        "「+5（ゴールデンベット）」のON/OFFを選択できます。",
        "※この機能をONにすると、ベット額が20%増加しますが、配当はそのままです。ゴールデンベットON状態でフリースピンに突入すると、通常より1つ多くフィーチャーピックを選択できる特典があります。",
        "また、ゴールデンベットをONにすることで、RTP（還元率）が95.90%から96.5%に向上するというメリットもあります。",
        "リールを回転させるには、この「スピン」ボタンをクリックしてください（MAX BETボタンを押していない場合）。",
        "リールが停止した際に、ベットしたペイライン上に勝利の組み合わせが表示された場合、配当表に従って賞金が獲得できます。配当表を表示するには、画面左下にある「+（メニュー）」から「【i】」ボタンをクリックしてください。",
        "ゲームには、可愛らしいお魚のシンボルと、トランプの絵柄のシンボルが登場します。",
        "*   **最高賞金額:** ベット額の5,000倍（Golden Fish Tank 2 Gigabloxの場合）",
        "*   **ペイライン:** オリジナル版は20ラインですが、続編によってはライン数やペイライン数が異なる場合があります。",
        "*   **配当の計算:** 同じラインで複数の勝利の組み合わせが成立した場合、最も高額な組み合わせに対する賞金が支払われます。2つ以上の有効なペイラインで勝利の組み合わせが揃った場合は、それぞれの勝利金額が合計されます。"
      ]
    },
    {
      heading: "勝負の鍵を握るフィーチャーピック！",
      paragraphs: [
        "フリースピンに突入すると、プレイヤーは貝殻を選択することになります。この貝殻の中から現れるフィーチャーピックが、フリースピンの内容を変化させます。"
      ],
      bullets: [
        "**ワイルドフィッシュ:** 特定のお魚シンボルがワイルドシンボルに変化します。",
        "**x2マルチプライヤー:** 全ての勝利に2倍のマルチプライヤーが適用されます。",
        "**追加ワイルド:** 追加のワイルドシンボルがリールに追加されます。",
        "**フィッシュスタック:** 全てのお魚シンボルがスタック（積み重なり）して出現しやすくなります。",
        "**追加フリースピン:** 追加でフリースピンが付与されます。",
        "**拡張リール:** リールが拡張され、ペイラインが40に増加します。"
      ]
    },
    {
      heading: "プレイ体験",
      paragraphs: [
        "今回は100ドルの資金でスタート。ベット額は1ドルとし、ゴールデンベットを発動させるため、1スピンあたり1.25ドルでプレイしました。しかし、開始直後は目立った当たりがなかなか引けず、残高は徐々に減少。ハートのシンボル揃いやクローバーシンボル揃いは引くものの、配当は小さいままでした。ベット額の5倍以上の当たりは、この時点では一度もありませんでした。",
        "しかし、粘り強くプレイしていると、ついに初の大当たり！最も配当の高いお魚シンボルが5つ揃い、16ドルを獲得！残高は29ドルから45ドルへと少し回復しました。このままフリースピンを引かずに終わるのは残念だと考えていたところ、ついにSCATTER（スキャッター）シンボルが3つ出現し、念願のフリースピンを獲得しました！",
        "本来であれば3つのフィーチャーピックを選択できますが、今回はゴールデンベットを使用しているため、プラス1つの4個を選択可能。選択した貝殻から現れたのは…",
        "「マルチプライヤー×2」は個人的に嬉しいフィーチャーです。スタックされたお魚シンボルがたくさん出現し、高配当に繋がることを祈りましょう。しかし、スタックされたお魚シンボルが活躍したのは一度だけで、綺麗に3リールまでしか出現しませんでした。最終的な配当は686コイン、34.30ドルとなりました。もう少し伸びて欲しかったところですが、これもゲームの醍醐味ですね。",
        "次にフリースピンを引いた際には、スタックされる魚とワイルドに変化する魚を同じ種類で引き当て、リール上をワイルドで埋め尽くしたいと意気込みを新たにしました！※71ドルまで復活した残高は、残念ながらその後、お魚たちが美味しくいただきました…。"
      ]
    },
    {
      heading: "Golden Fish Tank のスペック比較",
      table: {
        columns: ["スペック項目", "オリジナル版", "Golden Fish Tank 2 Gigablox", "Golden Fish Tank Party"],
        rows: [
          ["リール数", "5", "6", "6"],
          ["ペイライン数", "20", "25", "4,096 通り (Win ways)"],
          ["RTP", "95.90%", "96.0%", "94.0%"],
          ["ゴールデンベット RTP", "96.5%", "-", "-"],
          ["ボラティリティ", "Medium", "Medium", "High"],
          ["最大ベット額", "$50", "$20", "$100"],
          ["最大配当倍率", "x2,000", "x5,000", "x10,000"]
        ]
      }
    },
    {
      heading: "CasinoTsu による評価！",
      table: {
        columns: ["評価項目", "評価"],
        rows: [
          ["グラフィック", "★★★★☆ ー お魚さんたちの可愛らしいデザインが魅力的です。"],
          ["サウンド", "★★★☆☆ ー 明るく軽快なサウンドで、海中散歩のような気分にさせてくれます。"],
          ["面白さ", "★★★★★ ー フリースピン時のフィーチャーピックの組み合わせが毎回異なり、飽きさせません。どの組み合わせが最も爆発するか、スロット戦略も研究したくなります。"],
          ["賞金獲得", "★★★★☆ ー 通常時もフリースピンも比較的マイルドですが、フィーチャーピックの選択次第で大きく爆発する可能性があります。CasinoTsuスタッフの最高配当は、ベット額の600倍でした。"],
          ["総合評価", "★★★★★ ー 総合的に見て、非常に面白いスロットです！"]
        ]
      }
    },
    {
      heading: "プレイをした感想",
      paragraphs: [
        "CasinoTsu編集部一同、このGOLDEN FISH TANKが大好きになりました！毎回のフリースピンが異なる体験となり、組み合わせによっては大きな配当を狙えない場合もありますが、逆に言えば、毎スピンBIG WINの可能性を秘めているのです。CasinoTsuスタッフは、まだリアルマネーで5つのSCATTER（スキャッター）シンボルを出現させたことがありません。いつか「なんじゃこりゃ～！」というような大当たりを体験してみたいものです。皆様も、ご自身にとって最高の組み合わせを探してみてはいかがでしょうか。"
      ]
    },
    {
      heading: "Golden Fish Tank の続編",
      paragraphs: [
        "オリジナルのGolden Fish Tankの成功を受けて、Yggdrasilは「Golden Fish Tank 2 Gigablox」をリリースしました。この続編では、魅力的なGigablox™メカニズムが導入され、シンボルは最大6x6のサイズで出現します。これにより、ゲームプレイがさらにダイナミックになり、最大5,000倍のベット配当を狙うことが可能になりました。",
        "*   **6リール構成:** オリジナルの5リールから6リールに拡張。",
        "*   **Gigablox™メカニズム:** 大型シンボルが登場し、配当の可能性を高めます。",
        "*   **トレジャーチェスト:** リール5に配置されたトレジャーチェストは、ベット額の2倍から500倍、または5から16回のフリースピンを獲得するチャンスを提供します。",
        "*   **ボーナス購入機能:** 一部の地域では、60倍または100倍のベット額で直接フリースピンを購入できます。",
        "*   **高評価:** プロのレビュアーからは8.8/10という高評価を得ており、グラフィックとサウンドも大幅に強化されています。",
        "さらに、「Golden Fish Tank Party」というバリアントも存在します。こちらは6リール、4列の構成で4,096通りの勝利方法（Win Ways）を提供します。ボラティリティは高めですが、RTPは94%とやや低めになっています。"
      ]
    },
    {
      heading: "グラフィック・サウンド",
      paragraphs: [
        "ゴールデンフィッシュタンクのグラフィックは、鮮やかで可愛らしい水中世界を表現しています。カラフルなお魚やサンゴ礁、そしてキラキラと輝く泡などが描かれており、プレイヤーをリラックスさせる効果があります。プロのレビューでは、「カートゥーン映画のような品質」と評されることもあり、その視覚的な魅力は多くのプレイヤーに支持されています。",
        "ゲームのサウンドトラックは、明るく軽快なメロディーで、海中を散歩しているかのような心地よい雰囲気を作り出しています。効果音もゲームプレイを盛り上げ、特に勝利時やフリースピン獲得時には、より一層の興奮を演出します。"
      ]
    },
    {
      heading: "モバイル対応",
      paragraphs: [
        "ゴールデンフィッシュタンクは、最新のHTML5技術を使用して開発されているため、スマートフォンやタブレットなどのモバイルデバイスでも快適にプレイできます。PCはもちろん、外出先でもお気に入りのモバイルカジノを思う存分楽しむことができます。"
      ]
    }
  ],
  similarGames: [
    {
      name: "Big Bass Bonanza",
      href: "/slots/big-bass-bonanza",
      provider: "Pragmatic Play",
      description: "シンプルながら奥深い釣りスロット"
    }
  ],
  prosCons: {
    pros: [
      "可愛らしいグラフィックとサウンド",
      "フリースピン時のフィーチャーピックによる高いカスタマイズ性",
      "ゴールデンベット機能によるRTP向上と特典",
      "適度なボラティリティで初心者から経験者まで楽しめる",
      "続編ではさらに機能が拡張・強化されている"
    ],
    cons: [
      "オリジナル版の最大配当倍率は比較的低い（x2,000）",
      "ゴールデンベットOFF時のRTPはやや低め",
      "Golden Fish Tank PartyのRTPは低い"
    ]
  },
  faq: [
    {
      q: "Golden Fish Tank は最高何倍の勝利がありますか？",
      a: "オリジナルのGolden Fish Tankでは最高2,000倍、続編のGolden Fish Tank 2 Gigabloxでは最高5,000倍の勝利が可能です。"
    },
    {
      q: "Golden Fish Tank にボーナス購入機能はありますか？",
      a: "オリジナルのGolden Fish Tankにはボーナス購入機能はありません。しかし、続編の「Golden Fish Tank 2 Gigablox」では、一部の地域でボーナス購入機能が利用可能です。"
    },
    {
      q: "ゴールデンベットとは何ですか？",
      a: "ゴールデンベットは、通常のベット額に加えて20%の追加料金を支払うことで、フリースピン突入時に選択できるフィーチャーピックの数が1つ増える機能です。また、ゴールデンベットをONにするとRTPが95.90%から96.5%に向上します。"
    },
    {
      q: "Golden Fish Tank はどのようなプレイヤーにおすすめですか？",
      a: "可愛らしい見た目と、フリースピン時のカスタマイズ性の高さを楽しみたいプレイヤーにおすすめです。また、適度なボラティリティのため、初心者から経験者まで幅広く楽しめます。"
    },
    {
      q: "Golden Fish Tank の RTP はどれくらいですか？",
      a: "オリジナルのGolden Fish TankのRTPは95.90%で、ゴールデンベット使用時は96.5%になります。続編のGolden Fish Tank 2 GigabloxのRTPは96.0%です。"
    }
  ],
  cta: {
    text: "今すぐプレイ！",
    href: "/go/golden-fish-tank:golden-fish-tank"
  },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "スロット", href: "/slots" },
    { label: "Golden Fish Tank", href: "/slots/golden-fish-tank" }
  ],
  tableOfContents: [
    { label: "Golden Fish Tank", href: "#" },
    { label: "プレイ可能なカジノ", href: "#" },
    { label: "Golden Fish Tank 基本情報", href: "#" },
    { label: "お魚さんたちが導くBIG WIN！ ゴールデンフィッシュタンク 🐟", href: "#" },
    { label: "どんなゲームなの？ 🤔", href: "#" },
    { label: "ゲーム概要", href: "#" },
    { label: "SCATTER（スキャッター）", href: "#" },
    { label: "WILD（ワイルド）", href: "#" },
    { label: "ゲームのプレイ方法 🎮", href: "#" },
    { label: "コインバリュー", href: "#" },
    { label: "+5（ゴールデンベット）", href: "#" },
    { label: "スピン", href: "#" },
    { label: "配当表", href: "#" },
    { label: "シンボルと配当", href: "#" },
    { label: "勝負の鍵を握るフィーチャーピック！ ⭐", href: "#" },
    { label: "フィーチャーピックの全リスト", href: "#" },
    { label: "ギャンブル機能", href: "#" },
    { label: "Let's プレイ！ 🎣", href: "#" },
    { label: "あたり！ 🤩", href: "#" },
    { label: "ピック！", href: "#" },
    { label: "マルチプライヤーとスタック 📈", href: "#" },
    { label: "Golden Fish Tank のスペック比較 📊", href: "#" },
    { label: "CasinoTsu による評価！ ⭐⭐⭐⭐⭐", href: "#" },
    { label: "プレイをした感想 👍", href: "#" },
    { label: "🐠釣り好きにはコチラもおすすめ！✨", href: "#" },
    { label: "Golden Fish Tank の続編 🌊", href: "#" },
    { label: "Golden Fish Tank 2 Gigablox", href: "#" },
    { label: "Golden Fish Tank Party", href: "#" },
    { label: "グラフィック・サウンド 🎶", href: "#" },
    { label: "グラフィック", href: "#" },
    { label: "サウンド", href: "#" },
    { label: "モバイル対応 📱", href: "#" },
    { label: "よくある質問 ❓", href: "#" }
  ]
};

export default function Page() {
  return <SlotTemplate data={data} canonicalPath="/slots/golden-fish-tank" />;
}
