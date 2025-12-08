import SlotTemplate, { SlotPageData } from "@/components/templates/SlotTemplate";

const data: SlotPageData = {
  title: "スターライト・プリンセス・パチ｜配当やゲーム攻略法を解説",
  hero: {
    title: "スターライト・プリンセス・パチ",
    subheading: "Pragmatic Play社より、待望のパチスロ風オンラインスロットが登場！",
    description: "3リールという王道のスタイルながら、一発逆転のチャンスが豊富に盛り込まれており、初心者からベテランまで幅広く楽しめる一台です。",
    score: 4.3,
    scoreMax: 5,
    rtp: "96.04%",
    maxMultiplier: "x5,000",
    provider: "Pragmatic Play",
    releaseDate: "2024-05-20",
    volatility: "High",
    reels: "3",
    paylines: "27",
    minBet: "$0.1",
    maxBet: "$250",
    slotImageSrc: "/slots/starlight-princess-pachi.jpg",
    highlights: [
      "パチスロ風の3リールスロット",
      "リスピン、フリースピン、スーパーフリースピン搭載",
      "最大5,000倍の配当を狙える",
      "ボーナス購入機能あり"
    ],
    watchouts: [
      "RTPはカジノによって変動する可能性がある",
      "ワイルドシンボルは存在しない",
      "ボーナス購入機能は一部地域で利用不可"
    ]
  },
  featuredCasino: {
    name: "2アップカジノ",
    logo: "/assets/casino/2up.jpg",
    href: "https://casinotsu.com/reviews/2up",
    ctaText: "今すぐプレイ",
    tagline: "CasinoTsu 推薦！"
  },
  casinos: [
    {
      name: "Golden Panda",
      logo: "/assets/casino/golden-panda.jpg",
      href: "https://casinotsu.com/reviews/golden-panda",
      bonus: "30倍 賭け条件",
      freeSpins: "30倍 賭け条件",
      wagering: "30x",
      rating: null,
      tagline: "出金は基本的に即時反映でストレスフリー♪",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Betgoat",
      logo: "/assets/casino/betgoat.jpg",
      href: "https://casinotsu.com/reviews/betgoat",
      bonus: "$0",
      freeSpins: null,
      wagering: null,
      rating: null,
      tagline: "独自コインも利用可能！ 最新クリプトカジノ",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "2up",
      logo: "/assets/casino/2up.png",
      href: "https://casinotsu.com/reviews/2up",
      bonus: null,
      freeSpins: null,
      wagering: null,
      rating: null,
      tagline: "仮想通貨でも日本円でも遊べる、最新オンラインカジノ",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Cybet",
      logo: "/assets/casino/cybet.jpg",
      href: "https://casinotsu.com/reviews/cybet",
      bonus: "$500",
      freeSpins: "50",
      wagering: "35x",
      rating: null,
      tagline: "可愛いマスコットキャラが魅力の最新クリプトカジノ！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "1win",
      logo: "/assets/casino/1win.png",
      href: "https://casinotsu.com/reviews/1win",
      bonus: null,
      freeSpins: null,
      wagering: null,
      rating: null,
      tagline: "幅広いゲームラインナップが魅力！今注目の仮想通貨対応オンラインカジノ★",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Miki",
      logo: "/assets/casino/miki.jpg",
      href: "https://casinotsu.com/reviews/miki",
      bonus: "$4,000",
      freeSpins: "200",
      wagering: "30x",
      rating: null,
      tagline: "充実したゲームラインナップ！盛りだくさんのボーナスでお得にプレイ！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "WSM Casino",
      logo: "/assets/casino/wsm-casino.png",
      href: "https://casinotsu.com/reviews/wsm-casino",
      bonus: null,
      freeSpins: null,
      wagering: null,
      rating: null,
      tagline: "時代の最先端？！「ミームコイン」×「オンラインカジノ」",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Bitz",
      logo: "/assets/casino/bitz.jpg",
      href: "https://casinotsu.com/reviews/bitz",
      bonus: "$1,000",
      freeSpins: null,
      wagering: "29x",
      rating: null,
      tagline: "本人確認書類不要！？ 匿名性もバッチリの最新仮想通貨カジノ！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Wikibet",
      logo: "/assets/casino/wikibet.jpg",
      href: "https://casinotsu.com/reviews/wikibet",
      bonus: "¥50,000",
      freeSpins: "200",
      wagering: "20x",
      rating: null,
      tagline: "シンプルな操作性と可愛いデザインが特徴！厳選されたゲームをプレイしよう★",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Katsuwin",
      logo: "/assets/casino/katsuwin.png",
      href: "https://casinotsu.com/reviews/katsuwin",
      bonus: null,
      freeSpins: null,
      wagering: null,
      rating: null,
      tagline: "業界トップクラスのパチンコ・パチスロ台数を誇る新星カジノ",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Sushi Casino",
      logo: "/assets/casino/sushi-casino.jpg",
      href: "https://casinotsu.com/reviews/sushi-casino",
      bonus: "¥200,000",
      freeSpins: "50",
      wagering: "35x",
      rating: null,
      tagline: "てんこ盛りのオファーやVIPプログラムが魅力的な最新オンラインカジノ",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Betpanda",
      logo: "/assets/casino/betpanda.png",
      href: "https://casinotsu.com/reviews/betpanda",
      bonus: null,
      freeSpins: null,
      wagering: null,
      rating: null,
      tagline: "匿名で安全に遊べるクリプトオンラインカジノ！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Parimatch",
      logo: "/assets/casino/parimatch.png",
      href: "https://casinotsu.com/reviews/parimatch",
      bonus: null,
      freeSpins: null,
      wagering: null,
      rating: null,
      tagline: "2024年11月オープンの最新オンカジを徹底レビュー！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Bets.io",
      logo: "/images/casino/bets-io.png",
      href: "https://casinotsu.com/reviews/bets-io",
      bonus: null,
      freeSpins: null,
      wagering: null,
      rating: null,
      tagline: "最大1BTCの豪華入金ボーナスが嬉しいクリプトカジノ♪",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Duelbits",
      logo: "/assets/casino/duelbits.png",
      href: "https://casinotsu.com/reviews/duelbits",
      bonus: null,
      freeSpins: "500",
      wagering: null,
      rating: null,
      tagline: "500フリースピンが嬉しいクリプトカジノ♪",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Roobet",
      logo: "/assets/casino/roobet.jpg",
      href: "https://casinotsu.com/reviews/roobet",
      bonus: "$0",
      freeSpins: null,
      wagering: null,
      rating: null,
      tagline: "世界的有名人がアンバサダーを務めるオンラインカジノ！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Stake",
      logo: "/assets/casino/stake.png",
      href: "https://casinotsu.com/reviews/stake",
      bonus: null,
      freeSpins: null,
      wagering: null,
      rating: null,
      tagline: "ハウスエッジ5%レーキバック＆VIP特典が超おトク！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Wonder Casino",
      logo: "/assets/casino/wonder-casino.png",
      href: "https://casinotsu.com/reviews/wonder-casino",
      bonus: null,
      freeSpins: null,
      wagering: null,
      rating: null,
      tagline: "業界最速の出金スピードと仮想通貨特化ボーナス！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Yuugado",
      logo: "/assets/casino/yuugado.png",
      href: "https://casinotsu.com/reviews/yuugado",
      bonus: null,
      freeSpins: null,
      wagering: null,
      rating: null,
      tagline: "「和」がテーマのオンラインカジノ \| パチンコからスポーツベットまで！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Konibet",
      logo: "/assets/casino/konibet.png",
      href: "https://casinotsu.com/reviews/konibet",
      bonus: null,
      freeSpins: null,
      wagering: null,
      rating: null,
      tagline: "パチンコ・パチスロが遊べるオンラインカジノ！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Casino Me",
      logo: "/assets/casino/casino-me.jpg",
      href: "https://casinotsu.com/reviews/casino-me",
      bonus: "$777",
      freeSpins: "77",
      wagering: "20x",
      rating: null,
      tagline: "独自システムのお得なキャッシュバックあり！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Kakeyo",
      logo: "/assets/casino/kakeyo.jpg",
      href: "https://casinotsu.com/reviews/kakeyo",
      bonus: "¥100,000",
      freeSpins: "50",
      wagering: "10x",
      rating: null,
      tagline: "ボーナス充実！スポーツベットにも最適カジノ♪",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Mystino",
      logo: "/assets/casino/mystino.png",
      href: "https://casinotsu.com/reviews/mystino",
      bonus: null,
      freeSpins: null,
      wagering: null,
      rating: null,
      tagline: "日本人プレイヤーの心をグッと掴むカジノといえば…！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Pinnacle",
      logo: "/assets/casino/pinnacle.jpg",
      href: "https://casinotsu.com/reviews/pinnacle",
      bonus: "$0",
      freeSpins: null,
      wagering: null,
      rating: null,
      tagline: "カジノもスポーツベットも楽しめるハイブリッド！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Vera&John",
      logo: "/assets/casino/vera-john.png",
      href: "https://casinotsu.com/reviews/vera-john",
      bonus: null,
      freeSpins: null,
      wagering: null,
      rating: null,
      tagline: "オンカジといえば、やっぱりベラジョン！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Live Casino House",
      logo: "/assets/casino/live-casino-house.jpg",
      href: "https://casinotsu.com/reviews/live-casino-house",
      bonus: "¥50,000",
      freeSpins: null,
      wagering: "20x",
      rating: null,
      tagline: "ライブカジノを始め、多種多様なゲームが遊べるおなじみのカジノ！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Bitcasino.io",
      logo: "/assets/casino/bitcasinoio.jpg",
      href: "https://casinotsu.com/reviews/bitcasino-io",
      bonus: "¥200,000",
      freeSpins: null,
      wagering: "40x",
      rating: null,
      tagline: "元祖仮想通貨カジノ！",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Casino-X",
      logo: "/assets/casino/casino-x.png",
      href: "https://casinotsu.com/reviews/casino-x",
      bonus: null,
      freeSpins: null,
      wagering: null,
      rating: null,
      tagline: "太っ腹ボーナス盛りだくさんのカジノエックスで、お得にプレイ♪",
      ctaText: "今すぐプレイ！",
    },
    {
      name: "Casitabi",
      logo: "/assets/casino/casitabi.jpg",
      href: "https://casinotsu.com/reviews/casitabi",
      bonus: "$500",
      freeSpins: "250",
      wagering: "20x",
      rating: null,
      tagline: "RPG型カジノで旅をしながらボスを倒してお得にプレイ！",
      ctaText: "今すぐプレイ！",
    }
  ],
  gameInfo: {
    intro: "Pragmatic Play社が贈る、オンラインスロットの「スターライト・プリンセス」シリーズに、待望のパチスロ版が登場しました。親しみやすい3×3リールとシンプルなゲーム性ながら、高ボラティリティによる爆発力が魅力の機種です。大人気「スターライト・プリンセス」の世界観はそのままに、パチスロならではの熱い演出と、一発逆転を狙えるチャンスが満載です。リスピン機能、ミニゲームを挟むフリースピン、そして究極の爆発力を誇るスーパーフリースピンラウンドなど、多彩なフィーチャーがプレイヤーを飽きさせません。",
    basicInfo: {
      rtp: "96.04%",
      volatility: "High",
      reels: "3",
      paylines: "27",
      minBet: "$0.1",
      maxBet: "$250",
      provider: "Pragmatic Play",
      releaseDate: "2024-05-20"
    }
  },
  payoutTable: {
    title: "ペイアウト・配当表",
    symbols: [
      {
        name: "青い星の紋章",
        description: "高配当シンボル",
        payout5: null,
        payout4: null,
        payout3: "x100"
      },
      {
        name: "赤い月の紋章",
        description: "高配当シンボル",
        payout5: null,
        payout4: null,
        payout3: "x30"
      },
      {
        name: "紫の太陽の紋章",
        description: "高配当シンボル",
        payout5: null,
        payout4: null,
        payout3: "x20"
      },
      {
        name: "緑のハートの紋章",
        description: "高配当シンボル",
        payout5: null,
        payout4: null,
        payout3: "x15"
      },
      {
        name: "紫の宝石",
        description: "低配当シンボル",
        payout5: null,
        payout4: null,
        payout3: "x10"
      },
      {
        name: "青い宝石",
        description: "低配当シンボル",
        payout5: null,
        payout4: null,
        payout3: "x8"
      },
      {
        name: "水色の宝石",
        description: "低配当シンボル",
        payout5: null,
        payout4: null,
        payout3: "x5"
      },
      {
        name: "オレンジの宝石",
        description: "低配当シンボル",
        payout5: null,
        payout4: null,
        payout3: "x3"
      }
    ],
    maxPayout: "x5,000",
    notes: [
      "配当は3倍ベット時の例です。ベット額によって変動します。",
      "ワイルドシンボルは搭載されていません。"
    ]
  },
  features: {
    title: "ゲーム特徴・フィーチャー",
    items: [
      {
        name: "リスピン機能",
        description: "中央リールにプリンセススキャッターが1つ停止すると、他のリールが再回転し、フリースピン突入のチャンスを生み出します。追加スピンやフリースピンへの突入も可能です。",
        icon: "/assets/casino/respin.png"
      },
      {
        name: "フリースピン",
        description: "スキャッターシンボルを3つ以上揃えると突入。ミニゲームで最大13回のフリースピンを獲得でき、スキャッターを12個集めるとスーパーフリースピンラウンドへ移行します。",
        icon: "/images/icon/free-spin.png"
      },
      {
        name: "スーパーフリースピンラウンド",
        description: "フリースピン中にスキャッターを12個集めると突入。スーパーミニゲームで獲得したマルチプライヤーが、3回のスーパーフリースピン中の全ての勝利に適用され、爆発的な配当を狙えます。",
        icon: "/images/icon/super-free-spin.png"
      },
      {
        name: "ボーナス購入",
        description: "ベット額の70倍でフリースピン、300倍でスーパーフリースピンを直接購入できます。ただし、一部地域では利用制限があります。",
        icon: "/images/icon/bonus-buy.png"
      }
    ]
  },
  sections: [
    {
      heading: "導入・概要",
      paragraphs: [
        "Pragmatic Play社から、待望のパチスロ版オンラインスロット『Starlight Princess Pachi（スターライト・プリンセス・パチ）』が登場しました。初心者にも親しみやすい3×3リールとシンプルなゲーム性ながら、高ボラティリティで爆発力を秘めた魅力的な一台です。大人気シリーズ「スターライト・プリンセス」の世界観はそのままに、パチスロならではの熱い演出と一発逆転のチャンスが満載！さらに、リスピン機能やミニゲームを挟むフリースピン、そして究極の爆発力を誇るスーパーフリースピンラウンドなど、多彩なフィーチャーがプレイヤーを飽きさせません。"
      ]
    },
    {
      heading: "ゲーム基本情報",
      table: {
        title: "基本情報",
        columns: ["概要", "詳細"],
        rows: [
          ["名称", "Starlight Princess Pachi"],
          ["リリース日", "2024-05-20"],
          ["プロバイダー", "Pragmatic Play"],
          ["最大配当倍率", "x5,000"],
          ["ボラティリティ", "High"],
          ["最大ベット額", "$250 (約37,500円)"],
          ["最小ベット額", "$0.1 (約15円)"],
          ["ホイール", "3"],
          ["ペイライン", "27"],
          ["行数", "3"],
          ["RTP (還元率)", "96.04% (※カジノにより変動あり)"],
          ["テクノロジー", "JS, HTML5"]
        ]
      },
      paragraphs: [
        "※RTP変動に関する注意: 公表されているRTPは96.04%ですが、オンラインカジノによっては、95.04%や94.04%といった異なるRTP設定で提供している場合があります。プレイ前に、必ずご自身が利用するカジノのゲーム情報でRTPを確認するようにしましょう。",
        "※ベット額: 最小ベット額は$0.1（約15円）から、最大ベット額は$250（約37,500円）まで対応しています。これにより、低予算のプレイヤーからハイローラーまで、幅広い層のプレイヤーが楽しめます。"
      ]
    },
    {
      heading: "グラフィック・サウンド",
      table: {
        columns: ["項目", "詳細"],
        rows: [
          ["グラフィック", "キュートな宝石シンボル（ハート、星、月、太陽）と、キラキラ輝く背景が特徴。全体的にドリーミーでアニメ風の美しいビジュアルが展開されます。城のような塔が背景に見え、幻想的な天空の世界観を表現しています。"],
          ["モバイル対応", "◎"],
          ["サウンド", "軽快でアップテンポなBGMは、パチスロのような臨場感と興奮を掻き立てます。勝利時やフィーチャー突入時には、さらに派手な効果音が加わり、ゲームを盛り上げます。ただし、一部のプレイヤーには「狂騒的」と感じられる可能性もあります。"],
          ["特別フィーチャー", "・リスピン<br>・フリースピン<br>・スーパーフリースピン<br>・ボーナス購入"]
        ]
      }
    },
    {
      heading: "モバイル対応",
      paragraphs: [
        "スターライト・プリンセス・パチは、スマートフォンやタブレットなどのモバイル端末に完全対応しています。HTML5技術を採用しているため、特別なアプリのダウンロードは不要で、お使いのデバイスのウェブブラウザから直接アクセスし、快適にプレイできます。外出先や移動中でも、いつでもどこでも本格的なパチスロ体験を楽しめるでしょう。"
      ]
    },
    {
      heading: "戦略・攻略法",
      bullets: [
        "**ベット戦略:** ハイボラティリティを活かすため、少額ベットで長く遊ぶか、高額ベットで一撃の大きな配当を狙うか、プレイスタイルに合わせて調整しましょう。",
        "**フィーチャー活用法:** リスピン機能はフリースピンへの架け橋となるため、これを意識したプレイが有効です。スーパーフリースピンは高マルチプライヤーが適用されるため、最も爆発力が期待できます。",
        "**ボーナス購入の検討:** 短時間でボーナスラウンドを楽しみたい場合は、ボーナス購入機能の利用も有効ですが、資金管理には十分注意が必要です。",
        "**注意点:** 高ボラティリティ機種は当たり外れの波が大きいため、予めプレイ予算を決め、それを超えないように管理することが重要です。また、プレイ前にカジノでのRTP確認も忘れずに行いましょう。"
      ]
    },
    {
      heading: "まとめ",
      paragraphs: [
        "スターライト・プリンセス・パチは、大人気シリーズの魅力を引き継ぎつつ、パチスロ風のシンプルで熱いゲーム体験を提供するオンラインスロットです。3×3リールという遊びやすいフォーマットながら、リスピン、フリースピン、そしてスーパーフリースピンといった強力なフィーチャーにより、最大5,000倍の配当を狙える爆発力も秘めています。",
        "特に、パチスロの雰囲気が好きなプレイヤー、初心者プレイヤー、一発逆転を狙いたいプレイヤー、そして「スターライト・プリンセス」シリーズのファンにおすすめです。複雑な機能を避け、純粋にスロットの興奮を楽しみたい方は、ぜひスターライト・プリンセス・パチを試してみてください。"
      ]
    }
  ],
  similarGames: [
    {
      name: "スターライト・プリンセス",
      href: "https://casinotsu.com/slots/starlight-princess",
      provider: "Pragmatic Play",
      description: "アニメ風のテーマと華やかなビジュアルが特徴の人気オンラインスロット。より多くのペイラインと機能を持つ。"
    },
    {
      name: "スターライト・プリンセス1000",
      href: null,
      provider: "Pragmatic Play",
      description: "最大15,000倍の勝利金が獲得できる、さらに高爆発力を秘めたシリーズ最新作。"
    },
    {
      name: "Gates of Olympus",
      href: null,
      provider: "Pragmatic Play",
      description: "Pragmatic Play社の人気機種。神話テーマで、ペイ・エニウェア機能とマルチプライヤーが特徴。"
    },
    {
      name: "Sweet Bonanza",
      href: null,
      provider: "Pragmatic Play",
      description: "Pragmatic Play社の代表作。キャンディテーマで、スキャッターペイとマルチプライヤー機能が魅力。"
    }
  ],
  prosCons: {
    pros: [
      "パチスロ風のシンプルなゲーム性",
      "リスピン、フリースピン、スーパーフリースピン搭載",
      "最大5,000倍の高配当を狙える",
      "ボーナス購入機能あり",
      "モバイル端末で快適にプレイ可能"
    ],
    cons: [
      "ワイルドシンボルが存在しない",
      "RTPはカジノによって変動する可能性がある",
      "ボーナス購入機能は一部地域で利用不可",
      "高ボラティリティのため、当たり外れの波が大きい"
    ]
  },
  faq: [
    {
      q: "スターライト・プリンセス・パチのRTP（還元率）は？",
      a: "標準RTPは96.04%ですが、カジノによって95.04%または94.04%に設定されている場合があります。プレイ前に必ずカジノでRTPをご確認ください。"
    },
    {
      q: "フリースピンラウンドはどうやって突入できますか？",
      a: "ベースゲーム中にスキャッターシンボル（プリンセス）を3つ以上揃えると突入します。中央リールにスキャッターが1つ停止するとリスピンが発生し、フリースピン突入のチャンスが生まれます。"
    },
    {
      q: "ボーナス購入機能はありますか？",
      a: "はい、購入可能です。ベット額の70倍でフリースピンを、300倍でスーパーフリースピンを購入できます。ただし、地域によっては利用できない場合があります。"
    },
    {
      q: "スターライト・プリンセス・パチは、モバイル端末でもプレイ可能ですか？",
      a: "はい、HTML5技術により、スマートフォンやタブレットで快適にプレイできます。"
    },
    {
      q: "最大配当はどのくらいですか？",
      a: "最大配当は、ベット額の5,000倍です。"
    },
    {
      q: "このゲームは、他のスターライト・プリンセスシリーズと比べてどう違いますか？",
      a: "3×3リールとよりシンプルなゲーム構成です。ワイルドシンボルがなく、ペイライン数も少なめですが、パチスロのような直感的な操作性と熱い演出が特徴です。"
    },
    {
      q: "ゲーム中にフリースピンで勝利が保証されることはありますか？",
      a: "はい、通常のフリースピンおよびスーパーフリースピンラウンドでは、毎スピンで勝利が保証される仕組み（スタックシンボルによる）が搭載されています。"
    },
    {
      q: "デモプレイは可能ですか？",
      a: "はい、多くのオンラインカジノやスロット情報サイトで無料デモ版が提供されています。"
    }
  ],
  cta: {
    text: "今すぐプレイ！",
  },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "スロット", href: "/slots" },
    { label: "スターライト・プリンセス・パチ", href: "/slots/starlight-princess-pachi" }
  ],
  tableOfContents: [
    { label: "導入・概要", href: "#introduction" },
    { label: "どこで遊べるか", href: "#where-to-play" },
    { label: "ゲーム基本情報", href: "#game-info" },
    { label: "ゲーム特徴・フィーチャー", href: "#features" },
    { label: "リスピン機能", href: "#respin" },
    { label: "フリースピン", href: "#free-spin" },
    { label: "スーパーフリースピンラウンド", href: "#super-free-spin" },
    { label: "ボーナス購入", href: "#bonus-buy" },
    { label: "プロバイダー情報", href: "#provider-info" },
    { label: "グラフィック・サウンド", href: "#graphics-sound" },
    { label: "ペイアウト・配当表", href: "#payout-table" },
    { label: "モバイル対応", href: "#mobile" },
    { label: "戦略・攻略法", href: "#strategy" },
    { label: "類似ゲーム", href: "#similar-games" },
    { label: "まとめ", href: "#summary" },
    { label: "よくある質問", href: "#faq" }
  ]
};

export default function Page() {
  return <SlotTemplate data={data} canonicalPath="/slots/starlight-princess-pachi" />;
}
