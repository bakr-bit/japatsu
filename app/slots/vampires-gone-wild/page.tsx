import SlotTemplate, { SlotPageData } from "@/components/templates/SlotTemplate";

const data: SlotPageData = {
  title: "Vampires Gone Wild",
  hero: {
    title: "Vampires Gone Wild",
    subheading: "ヴァンパイア・ゴーン・ワイルド",
    description: "YOLTED社から登場した、ダークなヴァンパイアの世界観をテーマにしたビデオスロット。限られたオンラインカジノでのみプレイ可能で、最大50,000倍の配当倍率を秘めている。",
    score: 4.2,
    scoreMax: 5,
    rtp: "96%",
    maxMultiplier: "x50,000",
    provider: "YOLTED",
    releaseDate: "2020年8月2日",
    volatility: "High",
    reels: "5",
    paylines: "5",
    minBet: "$0.10",
    maxBet: "$100",
    slotImageSrc: "/slots/vampires-gone-wild.jpg",
    highlights: [
      "ダークなヴァンパイアの世界観",
      "最大50,000倍の配当倍率",
      "フリースピン中のインフェクトワイルド機能",
      "Blitz機能による高速プレイ"
    ],
    watchouts: [
      "ハイボラティリティのため、当選頻度は低い",
      "限られたカジノでのみプレイ可能"
    ]
  },
  featuredCasino: {
    name: "WSM Casino",
    logo: "/assets/casino/wsm-casino.png",
    href: "https://go.casinotsu.com/go/wsm-casino:wsm-casino?referrer_path=%2Fslots%2Fvampires-gone-wild",
    ctaText: "今すぐプレイ",
    ctaHref: "https://go.casinotsu.com/go/wsm-casino:wsm-casino?referrer_path=%2Fslots%2Fvampires-gone-wild",
    tagline: "時代の最先端？！「ミームコイン」×「オンラインカジノ」！"
  },
  casinos: [
    {
      name: "カジ旅",
      href: "https://casinotsu.com/reviews/casitabi",
      bonus: "最高$500 + 250回分フリースピン + フリーベット",
      freeSpins: "250",
      wagering: "20倍",
      rating: 4,
      tagline: "RPG型カジノで旅をしながらボスを倒してお得にプレイ！",
      ctaText: "詳細を見る",
      ctaHref: "https://casinotsu.com/reviews/casitabi"
    },
    {
      name: "WSM Casino",
      href: "https://go.casinotsu.com/go/wsm-casino:wsm-casino?referrer_path=%2Fslots%2Fvampires-gone-wild",
      bonus: "不明",
      freeSpins: "不明",
      wagering: "不明",
      rating: 4,
      tagline: "時代の最先端？！「ミームコイン」×「オンラインカジノ」！",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/wsm-casino:wsm-casino?referrer_path=%2Fslots%2Fvampires-gone-wild"
    },
    {
      name: "Casino Me",
      href: "https://casinotsu.com/reviews/casino-me",
      bonus: "独自システムのお得なキャッシュバックあり！",
      freeSpins: "不明",
      wagering: "不明",
      rating: 4,
      tagline: "独自システムのお得なキャッシュバックあり！",
      ctaText: "詳細を見る",
      ctaHref: "https://casinotsu.com/reviews/casino-me"
    },
    {
      name: "Mystino",
      href: "https://casinotsu.com/reviews/mystino",
      bonus: "不明",
      freeSpins: "不明",
      wagering: "不明",
      rating: 4,
      tagline: "日本人プレイヤーの心をグッと掴むカジノといえば…！",
      ctaText: "詳細を見る",
      ctaHref: "https://casinotsu.com/reviews/mystino"
    },
    {
      name: "Casitabi",
      href: "https://casinotsu.com/reviews/casitabi",
      bonus: "不明",
      freeSpins: "不明",
      wagering: "不明",
      rating: 4,
      tagline: "RPG型カジノで旅をしながらボスを倒してお得にプレイ！",
      ctaText: "詳細を見る",
      ctaHref: "https://casinotsu.com/reviews/casitabi"
    }
  ],
  gameInfo: {
    intro: "YOLTED社がお届けする「Vampires Gone Wild」は、ダークなヴァンパイアの世界観をテーマにしたビデオスロットです。不気味ながらも魅力的なグラフィックとサウンドが、プレイヤーをゴシックホラーの世界へと誘います。限られたオンラインカジノでのみプレイできるという希少性も、このスロットの魅力の一つと言えるでしょう。最大50,000倍という驚異的な配当倍率の可能性を秘めており、スリリングなゲーム体験を求めるプレイヤーに最適です。 CasinoTsu は、そのゲーム体験に期待を寄せております。",
    basicInfo: {
      rtp: "96.00%",
      volatility: "High",
      reels: "5",
      paylines: "5",
      minBet: "$0.10",
      maxBet: "$100",
      provider: "YOLTED",
      releaseDate: "2020年8月2日"
    }
  },
  payoutTable: {
    title: "ペイアウト・配当表",
    symbols: [
      {
        name: "伯爵夫人",
        payout5: "x200"
      },
      {
        name: "杯",
        payout5: "x150"
      },
      {
        name: "スカル＆コウモリ",
        payout5: "x100"
      },
      {
        name: "A",
        payout5: "x80"
      },
      {
        name: "K",
        payout5: "x70"
      },
      {
        name: "Q",
        payout5: "x60"
      },
      {
        name: "J",
        payout5: "x50"
      },
      {
        name: "10",
        payout5: "x40"
      },
      {
        name: "ワイルドシンボル",
        description: "他のシンボルの代わりとなり、配当成立を助けます。3つ揃うとボーナスゲーム（フリースピン）に突入します。",
        isSpecial: true
      }
    ],
    maxPayout: "ベット額の50,000倍",
    notes: [
      "ワイルドシンボルはスキャッターシンボルとしても機能します。"
    ]
  },
  features: {
    title: "ゲーム特徴・フィーチャー",
    items: [
      {
        name: "ベースゲームとBlitz機能",
        description: "5つのペイラインを持つシンプルなゲームプレイ。Blitz機能を使うことで、オートスピンを高速化し、よりスピーディーにフリースピン獲得のチャンスを掴むことができます。",
        icon: "/images/icon/lightning.svg"
      },
      {
        name: "ボーナスゲーム（フリースピン）",
        description: "ワイルドシンボル（スキャッターとしても機能）が3つ以上揃うと、15回のフリースピンが付与されます。",
        icon: "/images/icon/free-spin.svg"
      },
      {
        name: "インフェクトワイルド (Infected Wilds)",
        description: "フリースピン中にワイルドシンボルを含む勝利が発生すると、その勝利を構成したシンボルが全てワイルドシンボルに変化します。さらに、これらのワイルドシンボルはフリースピン終了までリール上に留まるスティッキーワイルドとなります。",
        icon: "/images/icon/wild.svg"
      },
      {
        name: "ランダムワイルド/追加ワイルド",
        description: "ゲーム中にランダムでワイルドシンボルが出現し、当選のチャンスを増やします。",
        icon: "/images/icon/wild.svg"
      },
      {
        name: "シンボルチェンジ",
        description: "特定のシンボルが高配当のシンボルに変化する可能性があります。",
        icon: "/images/icon/sync-reels.svg"
      }
    ]
  },
  sections: [
    {
      heading: "1. 導入・概要",
      paragraphs: [
        "YOLTED社がお届けする「Vampires Gone Wild」は、ダークなヴァンパイアの世界観をテーマにしたビデオスロットです。不気味ながらも魅力的なグラフィックとサウンドが、プレイヤーをゴシックホラーの世界へと誘います。限られたオンラインカジノでのみプレイできるという希少性も、このスロットの魅力の一つと言えるでしょう。最大50,000倍という驚異的な配当倍率の可能性を秘めており、スリリングなゲーム体験を求めるプレイヤーに最適です。 CasinoTsu は、そのゲーム体験に期待を寄せております。"
      ]
    },
    {
      heading: "2. ゲーム基本情報",
      paragraphs: [
        "「Vampires Gone Wild」は、5リール3行のシンプルな構成ながら、5つのペイラインで勝利を目指します。ボラティリティは「High」と非常に高く設定されており、頻繁な勝利は期待できないものの、一度当たれば大きな配当が得られる可能性があります。 CasinoTsu は、このダイナミズムを注視しております。"
      ],
      table: {
        title: "ゲーム基本情報",
        columns: ["項目", "詳細"],
        rows: [
          ["ペイライン", "5"],
          ["最大ベット額", "$100"],
          ["最小ベット額", "$0.10"],
          ["RTP", "96.00%"],
          ["ボラティリティ", "High"],
          ["リール数", "5"],
          ["行数", "3"],
          ["Blitz機能", "あり"],
          ["テクノロジー", "JS, HTML5"]
        ]
      },
      bullets: [
        "**RTP (Return to Player):** プレイヤーへの還元率を示します。96.00%は CasinoTsu が平均的と判断する値です。",
        "**ボラティリティ:** 当選頻度と当選時の配当の大きさのバランスを表します。High（高）は、当選頻度は低いものの、一度の当選で高配当が期待できることを意味します。",
        "**Blitz機能:** カジ旅などで提供される、オートスピンを高速化する機能です。これにより、よりスピーディーにフリースピン獲得を目指すことができます。 CasinoTsu は、この機能の効率性に注目しております。"
      ]
    },
    {
      heading: "3. どこで遊べるか",
      paragraphs: [
        "「Vampires Gone Wild」は、[カジ旅](https://casinotsu.com/reviews/casitabi) 系列の限られたオンラインカジノでプレイ可能です。新規プレイヤーには、各カジノが提供する魅力的な[ボーナス](https://casinotsu.com/bonuses) やフリースピンがお得に利用できるチャンスがあります。 CasinoTsu 推薦のカジノを以下にご紹介いたします。"
      ],
      notes: [
        "ボーナスにはそれぞれ賭け条件が設定されています。詳細は各カジノの利用規約をご確認ください。 CasinoTsu は、利用規約の確認を推奨いたします。",
        "「Vampires Gone Wild」は、ニュージーランド(NZ)、カナダ(CA)、フィンランド(FI)、ノルウェー(NO)などの一部市場で利用可能ですが、地域によってはプレイできない場合があります。",
        "デモモードでのプレイは、SlotCatalogなどのサイトで可能です。 CasinoTsu は、デモプレイでの確認をおすすめいたします。",
        "提供されているカジノリストは一部です。Betsafe、Golden Nugget Casino、Pala Casino、Resorts Casino、Hard Rock Casino、Mohegan Sun Casino、Virgin Casino、Borgata Casino、Tipico、NJ Party Casino、888 Casino USA、NJ Party Pokerなどの国際的なカジノでも提供されている場合があります。 CasinoTsu は、これらのカジノでの提供状況も確認していく所存です。"
      ]
    },
    {
      heading: "4. ゲーム特徴・フィーチャー",
      paragraphs: [
        "「Vampires Gone Wild」は、シンプルながらもプレイヤーを惹きつけるユニークなフィーチャーを搭載しています。 CasinoTsu は、その詳細な仕組みを解説いたします。"
      ],
      sections: [
        {
          heading: "ベースゲームとBlitz機能",
          paragraphs: [
            "5つのペイラインを持つシンプルなゲームプレイは、初心者でもすぐに理解できます。しかし、そのシンプルさゆえに、ベースゲームでの勝利はなかなか得にくいかもしれません。ここで活躍するのが「Blitz機能」です。この機能を使うことで、オートスピンを高速化し、よりスピーディーにフリースピン獲得のチャンスを掴むことができます。 CasinoTsu は、この機能がゲームのテンポを向上させると評価しております。"
          ]
        },
        {
          heading: "ボーナスゲーム（フリースピン）",
          paragraphs: [
            "ワイルドシンボルは、スキャッターシンボルとしても機能します。リール上に3つ以上のワイルドシンボルが揃うと、ボーナスゲーム（フリースピン）に突入し、15回のフリースピンが付与されます。 CasinoTsu は、このフリースピン突入の瞬間が醍醐味の一つだと考えております。"
          ]
        },
        {
          heading: "インフェクトワイルド (Infected Wilds)",
          paragraphs: [
            "フリースピン中に最もエキサイティングなフィーチャーが「インフェクトワイルド」です。ワイルドシンボルを含む勝利が発生した際、その勝利を構成したシンボルが全てワイルドシンボルに変化します。さらに、これらのワイルドシンボルはフリースピン終了までリール上に留まる「スティッキーワイルド」となり、次のスピンでも出現する可能性が高まります。この連鎖により、一度のフリースピンで爆発的な配当を生み出すことが可能です。 CasinoTsu は、このフィーチャーが最大配当倍率達成の鍵となると分析しております。"
          ]
        },
        {
          heading: "その他のフィーチャー",
          bullets: [
            "**ランダムワイルド/追加ワイルド:** ゲーム中にランダムでワイルドシンボルが出現し、当選のチャンスを増やします。 CasinoTsu は、こうしたランダム要素がゲームの興奮を高めると考えております。",
            "**シンボルチェンジ:** 特定のシンボルが、より高配当のシンボルに変化する可能性があります。"
          ]
        }
      ]
    },
    {
      heading: "5. プロバイダー情報",
      paragraphs: [
        "**YOLTED** は、革新的なゲーム開発で知られるプロバイダーです。特に、モバイルでのプレイ体験に特化した「スワイピー」シリーズや、キャラクターをフィーチャーした「彼女」シリーズなど、ユニークなコンセプトのスロットで注目を集めています。 CasinoTsu は、YOLTED社の創造性に敬意を表します。"
      ],
      bullets: [
        "**ライセンス:** （ライセンス情報は公開されていませんが、信頼できるカジノで提供されています）",
        "**リリース日:** 2020年8月2日",
        "**他の人気作品:**",
        "スワイプ彼女",
        "スロット彼女 (天音)"
      ]
    },
    {
      heading: "6. グラフィック・サウンド",
      paragraphs: [
        "「Vampires Gone Wild」は、ダークファンタジーの世界観を忠実に再現したビジュアルが特徴です。 CasinoTsu は、その没入感を高く評価しております。"
      ],
      bullets: [
        "**グラフィック:** 暗い森、不気味な城、そしてヴァンパイアやそのシンボル（髑髏、杯、コウモリなど）が描かれており、ゴシックホラーの雰囲気を醸し出しています。鮮やかなグラフィックと細部までこだわったデザインは、プレイヤーをゲームの世界に深く引き込みます。",
        "**サウンド:** ゲームの開始時には、ヨハン・セバスチャン・バッハの「トッカータとフーガ ニ短調」が流れ、不穏で荘厳な雰囲気を演出します。ゲームプレイ中も、不気味な効果音やBGMが、ヴァンパイアの世界観を一層盛り上げます。"
      ]
    },
    {
      heading: "7. ペイアウト・配当表",
      paragraphs: [
        "「Vampires Gone Wild」のペイアウトは、リール上に特定のシンボルが揃うことで発生します。ペイラインは5つで、左から右へとシンボルが並ぶことで配当が発生します。 CasinoTsu は、正確な配当情報を皆様にお届けいたします。"
      ],
      sections: [
        {
          heading: "シンボル別配当",
          table: {
            columns: ["シンボル", "5連続配当 (ベット額の倍率)"],
            rows: [
              ["伯爵夫人", "x200"],
              ["杯", "x150"],
              ["スカル＆コウモリ", "x100"],
              ["A", "x80"],
              ["K", "x70"],
              ["Q", "x60"],
              ["J", "x50"],
              ["10", "x40"]
            ]
          },
          bullets: [
            "高額シンボル: 伯爵夫人、杯、スカルとコウモリ",
            "低額シンボル: A, K, Q, J, 10"
          ]
        },
        {
          heading: "特別シンボル",
          bullets: [
            "**ワイルドシンボル:** 一番目立つ吸血鬼のおじさんのシンボル。他のシンボルの代わりとなり、配当成立を助けます。3つ揃うとボーナスゲーム（フリースピン）に突入します。 CasinoTsu は、ワイルドシンボルの重要性を強調いたします。",
            "**スキャッターシンボル:** ワイルドシンボルがスキャッターとしても機能します。"
          ]
        }
      ],
      notes: [
        "このスロットの最大の魅力は、 **ベット額の最大50,000倍** という驚異的な勝利の可能性です。この高いポテンシャルは、特にフリースピン中の「インフェクトワイルド」フィーチャーによって引き出されます。 CasinoTsu は、この数字がプレイヤーの期待を大きく膨らませることを理解しております。"
      ]
    },
    {
      heading: "8. モバイル対応",
      paragraphs: [
        "「Vampires Gone Wild」は、JS（JavaScript）とHTML5技術を使用して開発されており、デスクトップPC、スマートフォン、タブレットなど、あらゆるデバイスで快適にプレイすることができます。インターネット接続があれば、いつでもどこでも、このスリリングなヴァンパイアの世界を楽しむことが可能です。 CasinoTsu は、この利便性を高く評価しております。"
      ]
    },
    {
      heading: "9. 戦略・攻略法",
      paragraphs: [
        "「Vampires Gone Wild」は非常に高いボラティリティを持つスロットです。これは、頻繁に勝利が起こるわけではありませんが、一度当たった時の配当が非常に大きくなる可能性があることを意味します。 CasinoTsu は、[責任あるプレイ](https://casinotsu.com/info/responsible-gambling) を推奨しつつ、戦略的なアプローチをご提案いたします。"
      ],
      sections: [
        {
          heading: "ベット戦略",
          bullets: [
            "**忍耐強くプレイする:** ベースゲームでの勝利が少ないことを覚悟し、資金管理をしっかり行いながら、ボーナスゲームを待つ忍耐力が重要です。 CasinoTsu は、計画的な資金管理を第一に考えております。",
            "**Blitz機能の活用:** 効率的にゲームを進めたい場合は、Blitz機能を活用しましょう。ただし、ゲームの進行が早まるため、ベット額の設定には注意が必要です。"
          ]
        },
        {
          heading: "フィーチャー活用法",
          bullets: [
            "**フリースピンを狙う:** 最大の勝利の鍵はフリースピンです。ワイルドシンボルを揃えることを意識してプレイしましょう。",
            "**インフェクトワイルドの連鎖:** フリースピン中は、インフェクトワイルドがどのように連鎖するかを観察し、大きな配当に繋がるパターンを見つけましょう。"
          ]
        },
        {
          heading: "注意点",
          bullets: [
            "**ハイボラティリティへの理解:** 大当たりを狙える反面、資金が早く尽きるリスクもあります。ご自身の予算に合わせてプレイすることが重要です。 CasinoTsu は、リスク管理の重要性を繰り返しお伝えいたします。",
            "**冷静な判断:** 大きな勝利や損失に一喜一憂せず、冷静にゲームを進めましょう。 CasinoTsu のモットーは「正確さが第一。興奮はその次。」です。"
          ]
        }
      ]
    },
    {
      heading: "10. 類似ゲーム",
      paragraphs: [
        "「Vampires Gone Wild」のようなダークでホラーなテーマや、YOLTED社が開発した他のスロットに興味がある方には、以下のゲームがおすすめです。 CasinoTsu は、皆様のゲーム選択の一助となれば幸いです。"
      ],
      sections: [
        {
          heading: "同テーマ",
          bullets: [
            "**Immortal Romance (Microgaming):** 定番のヴァンパイアテーマのスロットで、豊富なボーナス機能が魅力。",
            "**Blood Suckers (NetEnt):** 吸血鬼退治をテーマにした、ユニークなボーナスゲームが特徴。"
          ]
        },
        {
          heading: "同プロバイダー (YOLTED)",
          bullets: [
            "**スワイプ彼女 (Swipe GF):** モバイルに特化したスワイプ操作が特徴の、キュートなスロット。",
            "**スロット彼女 (Slot GF):** キャラクターが前面に出た、YOLTEDならではのエンターテイメント性の高いスロット。"
          ]
        }
      ]
    },
    {
      heading: "11. まとめ",
      paragraphs: [
        "「Vampires Gone Wild」は、ダークで魅力的なヴァンパイアの世界観、そして最大50,000倍という驚異的な勝利の可能性を秘めた、非常にエキサイティングなビデオスロットです。高いボラティリティゆえに、忍耐力は必要ですが、フリースピン中に発動する「インフェクトワイルド」は、一度ハマれば想像を超える配当をもたらすポテンシャルを秘めています。 CasinoTsu は、このスロットが提供するユニークな体験に注目しております。"
      ],
      bullets: [
        "こんなプレイヤーにおすすめ:",
        "ダークファンタジーやホラーテーマが好きな方",
        "[ハイボラティリティ](https://casinotsu.com/slots/high-volatility) スロットで一攫千金を狙いたい方",
        "スリリングで没入感のあるゲーム体験を求めている方",
        "YOLTED社のユニークなゲームに興味がある方"
      ],
      notes: [
        "このスロットは、まさに「リスクとリターン」のバランスが極端に振れた、夢のあるゲームと言えるでしょう。ハロウィンシーズンはもちろん、一年を通してゴシックな雰囲気を楽しみたいプレイヤーにぴったりです。 CasinoTsu は、皆様がこのゲームで有意義な体験をされることを願っております。"
      ]
    },
    {
      heading: "12. よくある質問",
      faq: [
        {
          q: "ヴァンパイア・ゴーン・ワイルドのフリースピンは何回もらえますか？",
          a: "ワイルド（スキャッター）シンボルが3つ以上揃うと、15回のフリースピンが付与されます。"
        },
        {
          q: "ヴァンパイア・ゴーン・ワイルドのRTP（還元率）はどれくらいですか？",
          a: "RTPは96.00%です。 CasinoTsu は、この還元率を正確にお伝えします。"
        },
        {
          q: "このスロットはモバイルでプレイできますか？",
          a: "はい、JSおよびHTML5技術により、スマートフォンやタブレットなど、あらゆるデバイスで快適にプレイ可能です。 CasinoTsu は、このモバイル対応を高く評価しております。"
        },
        {
          q: "最大配当倍率はいくらですか？",
          a: "最大配当倍率は、ベット額の50,000倍です。 CasinoTsu は、この壮大な可能性について注意喚起いたします。"
        },
        {
          q: "「Blitz機能」とは何ですか？",
          a: "カジ旅などで提供されている、オートスピンを高速化する機能です。よりスピーディーにゲームを進めたい場合に便利です。 CasinoTsu は、この機能がゲーム体験を効率化すると考えております。"
        }
      ]
    }
  ],
  similarGames: [
    {
      name: "Blood Suckers",
      href: "/slots/blood-suckers",
      provider: "NetEnt",
      description: "吸血鬼退治をテーマにした、ユニークなボーナスゲームが特徴。"
    },
    {
      name: "スワイプ彼女",
      href: "/slots/swipe-gf",
      provider: "YOLTED",
      description: "モバイルに特化したスワイプ操作が特徴の、キュートなスロット。"
    },
    ],
  prosCons: {
    pros: [
      "ダークで魅力的なヴァンパイアの世界観",
      "最大50,000倍という驚異的な勝利の可能性",
      "フリースピン中のインフェクトワイルド機能による爆発力",
      "Blitz機能によるスピーディーなゲームプレイ",
      "モバイル対応でどこでもプレイ可能",
      "YOLTED社のユニークなゲーム性"
    ],
    cons: [
      "ハイボラティリティのため、当選頻度が低い",
      "限られたオンラインカジノでのみプレイ可能",
      "ベースゲームでの勝利が少ない傾向がある"
    ]
  },
  faq: [
    {
      q: "ヴァンパイア・ゴーン・ワイルドのフリースピンは何回もらえますか？",
      a: "ワイルド（スキャッター）シンボルが3つ以上揃うと、15回のフリースピンが付与されます。"
    },
    {
      q: "ヴァンパイア・ゴーン・ワイルドのRTP（還元率）はどれくらいですか？",
      a: "RTPは96.00%です。 CasinoTsu は、この還元率を正確にお伝えします。"
    },
    {
      q: "このスロットはモバイルでプレイできますか？",
      a: "はい、JSおよびHTML5技術により、スマートフォンやタブレットなど、あらゆるデバイスで快適にプレイ可能です。 CasinoTsu は、このモバイル対応を高く評価しております。"
    },
    {
      q: "最大配当倍率はいくらですか？",
      a: "最大配当倍率は、ベット額の50,000倍です。 CasinoTsu は、この壮大な可能性について注意喚起いたします。"
    },
    {
      q: "「Blitz機能」とは何ですか？",
      a: "カジ旅などで提供されている、オートスピンを高速化する機能です。よりスピーディーにゲームを進めたい場合に便利です。 CasinoTsu は、この機能がゲーム体験を効率化すると考えております。"
    }
  ],
  cta: {
    text: "今すぐプレイ",
    href: "https://go.casinotsu.com/go/wsm-casino:wsm-casino?referrer_path=%2Fslots%2Fvampires-gone-wild"
  },
  breadcrumbs: [
    { label: "ホーム", href: "https://casinotsu.com/" },
    { label: "スロット", href: "https://casinotsu.com/slots" },
    { label: "Vampires gone wild", href: "https://casinotsu.com/slots/vampires-gone-wild" }
  ],
  tableOfContents: [
    { label: "1. 導入・概要", href: "#1-導入・概要" },
    { label: "2. ゲーム基本情報", href: "#2-ゲーム基本情報" },
    { label: "3. どこで遊べるか", href: "#3-どこで遊べるか" },
    { label: "4. ゲーム特徴・フィーチャー", href: "#4-ゲーム特徴・フィーチャー" },
    { label: "5. プロバイダー情報", href: "#5-プロバイダー情報" },
    { label: "6. グラフィック・サウンド", href: "#6-グラフィック・サウンド" },
    { label: "7. ペイアウト・配当表", href: "#7-ペイアウト・配当表" },
    { label: "8. モバイル対応", href: "#8-モバイル対応" },
    { label: "9. 戦略・攻略法", href: "#9-戦略・攻略法" },
    { label: "10. 類似ゲーム", href: "#10-類似ゲーム" },
    { label: "11. まとめ", href: "#11-まとめ" },
    { label: "12. よくある質問", href: "#12-よくある質問" }
  ]
};

export default function Page() {
  return <SlotTemplate data={data} canonicalPath="/slots/vampires-gone-wild" />;
}
