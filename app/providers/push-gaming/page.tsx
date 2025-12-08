import ProvidersTemplate, { ProvidersPageData } from "@/components/templates/ProvidersTemplate";

const data: ProvidersPageData = {
  title: "Push Gaming（プッシュゲーミング）プロバイダーレビュー",
  banner: {
    title: "Push Gaming（プッシュゲーミング）",
    subheading: "革新的なスロットゲームでプレイヤーを魅了したプロバイダー",
    description: "設立以来、モバイルファーストの高品質なスロットゲームを提供し、ユニークなゲームメカニクスと高い配当ポテンシャルで多くのプレイヤーから支持を得ていました。",
    avatarSrc: "/assets/provider/push-gaming.png",
    avatarAlt: "Push Gaming Logo",
  },
  hero: {
    highlights: [
      "ユニークなゲームメカニクスとフィーチャー",
      "高い配当ポテンシャル",
      "高品質なグラフィックとサウンド",
      "優れたモバイル最適化",
    ],
    watchouts: [
      "2023年8月28日をもって日本市場でのゲーム提供を停止",
      "ライブカジノやテーブルゲームは提供せず、スロットに特化",
    ],
  },
  intro: "Push Gaming（プッシュゲーミング）社は、2010年にJames Marshall氏とWinston Lee氏によって設立された、革新的なスロットゲーム開発プロバイダーです。モバイルデバイスでのプレイ体験を最優先に考え、HTML5技術を駆使した高品質なゲームを提供してきました。2023年9月にはLeoVenturesに買収されましたが、独立した運営を維持しています。ライブカジノゲームやバーチャルカジノゲームの開発は行わず、ビデオ スロットゲームの開発に特化しており、そのユニークなゲームメカニクスと魅力的なグラフィックは、多くのプレイヤーから高い評価を得ていました。",
  authorCommentary: {
    author: "CasinoTsu編集部",
    commentary: "Push Gaming社は、限られた数のゲームながらも、その一つ一つに妥協のないクオリティと革新性を詰め込んだ、業界でも際立った存在でした。特に、高配当を狙えるスリル満点のゲーム体験を求めるプレイヤーにとって、Push Gaming社の提供するスロットは最高の選択肢の一つでした。設立から現在に至るまで、常にプレイヤーの満足度を追求し、ユニークなフィーチャーと洗練されたデザインで、カジノゲームの新たなスタンダードを築き上げてきました。",
    avatarSrc: "/assets/authors/casinotsu.png",
    role: "オンラインカジノ専門家",
    authorHref: "/authors/casinotsu",
    hook: "「Jammin' Jars」や「Razor Shark」など、一度は耳にしたことがあるであろう革新的なスロットを生み出したPush Gaming社。その魅力と実力に迫ります。",
    theGoodStuff: "Push Gaming社の最大の強みは、その革新的なゲームメカニクスと、プレイヤーに高配当の興奮を提供する能力にありました。常に新しいフィーチャーを開発し、ゲームプレイに変化と興奮をもたらしていました。また、最大配当倍率が高いゲームが多く、一攫千金の夢を追うプレイヤーに適していました。",
    theHeadsUp: "残念ながら、Push Gaming社は2023年8月28日をもって日本市場でのゲーム提供を停止しました。そのため、現在、日本国内で同社のゲームを提供しているオンラインカジノはありません。しかし、その革新的なゲーム性は、世界中のプレイヤーに忘れられない体験を提供し続けました。",
    finalThought: "Push Gaming社は、そのユニークなゲーム性と高いクオリティで、スロットゲーム業界に大きな影響を与えたプロバイダーでした。日本市場から撤退してしまいましたが、その功績は多くのプレイヤーの記憶に残ることでしょう。",
  },
  featured: {
    title: "Push Gamingの人気ゲーム",
    items: [
      {
        name: "Jammin’ Jars",
        logo: "/assets/provider/push-gaming.png",
        href: "/slots/jammin-jars",
        founded: "2017",
        hq: "UK",
        licenses: ["MGA", "UKGC", "Curacao", "ONJN Romania"],
        gameTypes: ["Video Slots"],
        tagline: "クラスターペイとカラフルなジャム瓶が特徴の代表作",
        topGames: [
          { name: "Jammin’ Jars", href: "/slots/jammin-jars" },
          { name: "Jammin’ Jars 2", href: "/slots/jammin-jars-2" },
        ],
      },
      {
        name: "Razor Shark",
        logo: "/assets/provider/push-gaming.png",
        href: "/slots/razor-shark",
        founded: "2019",
        hq: "UK",
        licenses: ["MGA", "UKGC", "Curacao", "ONJN Romania"],
        gameTypes: ["Video Slots"],
        tagline: "最大85,475倍の配当ポテンシャルを秘めた深海スロット",
        topGames: [{ name: "Razor Shark", href: "/slots/razor-shark" }],
      },
      {
        name: "Wild Swarm",
        logo: "/assets/provider/push-gaming.png",
        href: "/slots/wild-swarm",
        founded: "2018",
        hq: "UK",
        licenses: ["MGA", "UKGC", "Curacao", "ONJN Romania"],
        gameTypes: ["Video Slots"],
        tagline: "ミツバチを集めて「大群モード」を目指す人気スロット",
        topGames: [{ name: "Wild Swarm", href: "/slots/wild-swarm" }],
      },
      {
        name: "Fat Rabbit",
        logo: "/assets/provider/push-gaming.png",
        href: "/slots/fat-rabbit",
        founded: "2018",
        hq: "UK",
        licenses: ["MGA", "UKGC", "Curacao", "ONJN Romania"],
        gameTypes: ["Video Slots"],
        tagline: "ニンジンを集めて大きくなるウサギが特徴の農場スロット",
        topGames: [{ name: "Fat Rabbit", href: "/slots/fat-rabbit" }],
      },
      {
        name: "Big Bamboo",
        logo: "/assets/provider/push-gaming.png",
        href: "/slots/big-bamboo",
        founded: "2022",
        hq: "UK",
        licenses: ["MGA", "UKGC", "Curacao", "ONJN Romania"],
        gameTypes: ["Video Slots"],
        tagline: "禅の世界観と高い配当ポテンシャルを両立",
        topGames: [{ name: "Big Bamboo", href: "/slots/big-bamboo" }],
      },
    ],
  },
  sections: [
    {
      heading: "Push Gamingの沿革と現状 📜",
      paragraphs: [
        "Push Gaming社は、2010年にJames Marshall氏とWinston Lee氏によって設立されました。創業当初より、モバイルデバイスでのプレイ体験を最優先に考え、HTML5技術を駆使した高品質なゲームを提供し続けてまいりました。",
        "2023年9月には、MGM Resorts International傘下のLeoVegas Groupの投資部門であるLeoVenturesによる買収が完了いたしましたが、Push Gaming社は引き続き独立した運営体制を維持しております。",
        "Push Gaming社は、ライブカジノゲームやバーチャルカジノゲームの開発は行わず、ビデオ スロットゲームの開発に特化しており、そのユニークなゲームメカニクスと魅力的なグラフィックは、多くのプレイヤーから高い評価を得ています。",
      ],
      bullets: [
        "設立: 2010年、James Marshall氏とWinston Lee氏によって設立。",
        "買収: 2023年9月、LeoVentures（LeoVegas Group傘下）により買収。",
        "事業内容: ビデオ スロットゲームの開発に特化。",
        "日本市場: 2023年8月28日をもって、日本市場でのゲーム配信を停止。",
      ],
    },
    {
      heading: "Push Gamingの人気ゲーム詳細 🍓",
      paragraphs: [
        "Push Gaming社は、その高品質なゲームラインナップで多くのプレイヤーを魅了してきました。特に以下のタイトルは、革新的なゲーム性や高い配当ポテンシャルから、世界中のカジノで人気を博していました。",
      ],
      bullets: [
        "ジャミンジャー（Jammin’ Jars）: Push Gaming社の代表作。カラフルなフルーツとジャム瓶をテーマにしたクラスターペイのスロット。続編の「Jammin’ Jars 2」も人気。",
        "レイザーシャーク（Razor Shark）: 海に棲むサメをテーマにしたスロット。最大配当倍率85,475倍という驚異的なポテンシャルと、ミステリースタックやNudge & Revealといった機能が特徴。",
        "ワイルドスワーム（Wild Swarm）: ミツバチと蜂蜜の世界をテーマにしたスロット。蜂蜜を集めるコレクション用ミツバチがメーターを最大にすると「大群モード」へ突入。",
        "ファットラビット（Fat Rabbit）: 太っちょなウサギの冒険を描いたスロット。リールを耕すトラクターが、野生のにんじんシンボルを発掘することも。",
        "ビッグバンブー（Big Bamboo）: 禅の世界観ながら、一撃必殺のポテンシャルを秘めたスロット。ギャンブル機能やボーナス購入も可能。",
      ],
    },
    {
      heading: "その他の人気タイトル ✨",
      paragraphs: [
        "Push Gaming社は、上記以外にも数々の人気タイトルを生み出しました。",
      ],
      bullets: [
        "Fat Santa（ファットサンタ）",
        "Fat Drac（ファットドラック）",
        "Retro Tapes（レトロテープ）",
        "Tiki Tumble（ティキタンブル）",
        "Goat Getter（ゴートゲッター）",
        "The Shadow Order（ザ・シャドウ・オーダー）",
        "Giga Jar（ギガジャー）",
      ],
    },
    {
      heading: "どこで遊べるか？（Push Gamingを提供していたカジノ） 🌍",
      paragraphs: [
        "Push Gaming社のゲームは、以前は世界中の多くのオンラインカジノで提供されていました。特に、以下のカジノは、Push Gamingのゲームをプレイするのに適したおすすめのプラットフォームでした。",
      ],
      table: {
        title: "Push Gaming があった人気のカジノ",
        caption: "以前、Push Gaming社のゲームを提供していた代表的なカジノです。",
        columns: ["名称", "総合評価", "人気指数", "操作性", "サポート", "ローンチ"],
        rows: [
          ["[Bitz](https://casinotsu.com/reviews/bitz)", "80", "73", "87", "84", "2024-01-20"],
          ["[Roobet](https://casinotsu.com/reviews/roobet)", "79", "82", "84", "84", "2019-01-01"],
        ],
      },
    },
    {
      heading: "Push Gaming をプレイできたカジノ（ウェルカムオファー情報） 🎁",
      paragraphs: [
        "CasinoTsu では、Push Gaming社と提携していたおすすめオンラインカジノサイトを以前ご紹介しておりました。これらのカジノでは、魅力的なウェルカムオファーが用意されており、中にはPush Gamingのゲームで利用できたものもありました。",
      ],
      table: {
        title: "Push Gaming 提携カジノ（ウェルカムオファー）",
        columns: ["", "カジノ", "評価点", "ウェルカムオファー"],
        rows: [
          ["1.", "[ベラジョン](https://casinotsu.com/reviews/vera-john)", "91", "・ 入金不要フリースピン150回分（ジャパカジ限定）<br>・入金ボーナス最大$1,000の＋スピンクレジット"],
          ["2.", "[カジ旅](https://casinotsu.com/reviews/casitabi)", "95", "・ ボーナスステージ最大3回分（ジャパカジ限定）<br>・入金ボーナス最大$500＋フリースピン250回"],
          ["3.", "[ボンズ](https://casinotsu.com/reviews/bons)", "81", "・入金ボーナス最大¥395,000＋フリースピン20回（10日間連続）"],
          ["4.", "[カジノミー](https://casinotsu.com/reviews/casino-me)", "91", "・ 入金不要フリースピン100回（ジャパカジ限定）<br>・入金フリースピン合計77回（7日間連続）"],
          ["5.", "[テッドベット](https://casinotsu.com/reviews/tedbet)", "79", "・ 入金不要ボーナス¥4,500（ジャパカジ限定）<br>・入金ボーナス最大20万円＋フリースピン合計200回（10日間連続）"],
        ],
      },
    },
    {
      heading: "ゲーム一覧・技術情報 💻",
      paragraphs: [
        "Push Gaming社は、約40種類（2023年時点）の高品質なビデオ スロットゲームを提供していました。これらのゲームはHTML5技術を用いて開発されており、ブラウザ上で直接プレイ可能でした。",
      ],
      table: {
        title: "Push Gaming 人気ゲーム詳細",
        columns: ["名称", "総合評価", "RTP", "最大配当倍率", "行数", "ペイライン"],
        rows: [
          ["[Wild Swarm](https://casinotsu.com/slots/wild-swarm)", "68", "97%", "x3,100", "4", "20"],
          ["[Jammin Jars](https://casinotsu.com/slots/jammin-jars)", "68", "96.8%", "x20,000", "8", "-"],
          ["[Razor Shark](https://casinotsu.com/slots/razor-shark)", "94", "96.7%", "x85,475", "4", "20"],
          ["[Ice Breaker](https://casinotsu.com/slots/ice-breaker)", "68", "96.7%", "x25,000", "3", "243"],
          ["[Jammin’ Jars 2](https://casinotsu.com/slots/jammin-jars-2)", "93", "96.4%", "x50,000", "8", "-"],
          ["[Space Stacks](https://casinotsu.com/slots/space-stacks)", "67", "96.2%", "x5,000", "10", "-"],
        ],
      },
      bullets: [
        "開発技術: 全てのゲームはHTML5技術で開発されていました。",
        "アクセス方法: インターネットブラウザを通じて、PC、スマートフォン、タブレットなどの様々なデバイスから直接プレイ可能でした。",
        "モバイル最適化: 縦型モードでのプレイにも最適化されており、スムーズなモバイル体験を提供していました。",
      ],
    },
    {
      heading: "Push Gamingのゲームフィーチャー 🚀",
      paragraphs: [
        "Push Gaming社のゲームは、各タイトルにユニークなフィーチャーが搭載されているのが特徴でした。",
      ],
      bullets: [
        "Push-Up Mechanic: ゲーム「Generous Jack」に搭載。リールが拡張し、マルチプライヤーチップが組み合わさることで配当を増加。",
        "Cluster Link Mechanism: 「Retro Tapes」などの新しいゲームで採用。シンボルが隣接して配当が発生するメカニズム。",
        "Mystery Stacks, Nudge & Reveal: 「Razor Shark」に搭載。隠されたシンボルが明らかになることで高配当を狙えました。",
        "Harvest Feature: 「Fat Rabbit」に搭載。ウサギがニンジンを食べることでワイルドシンボルが増加。",
        "Coin Drop Feature: 様々なゲームで採用。コインシンボルを集めることで配当が発生するコレクションメカニズム。",
        "ボーナスフィーチャー購入 (Bonus Buy): 一部のゲームでは、直接ボーナスラウンドを購入してプレイを開始できました。",
        "フリースピン (Free Spins): ボーナスラウンドとして提供されることが多く、追加の配当機会を生み出しました。",
        "ギャンブル機能 (Gamble Feature): 一部のゲームでは、勝利金をさらに増やすチャンスのあるギャンブル機能が搭載されていました。",
        "リスピン (Respins): 特定のシンボルが揃うことで、リールが再スピンされる機能。",
        "フィーチャー選択式ボーナススピン: プレイヤーがボーナススピンのタイプを選択できる機能。",
        "変化ペイウェイ (Changing Payways): ゲーム中にペイラインの数や形状が変化する機能。",
        "拡張シンボル (Expanding Symbols): 特定のシンボルがリール全体に広がることで、配当の可能性を高めました。",
      ],
    },
    {
      heading: "プロバイダー情報： Push Gaming 🏢",
      paragraphs: [
        "Push Gaming社は、プレイヤーに最高のエンターテインメントを提供することを使命とするゲームプロバイダーでした。CasinoTsu は、その信頼性と実績を高く評価しておりました。",
      ],
      bullets: [
        "設立: 2010年",
        "創設者: James Marshall、Winston Lee",
        "拠点: イギリス",
        "買収: 2023年9月、LeoVentures（MGM Resorts International傘下のLeoVegas Group）に買収されましたが、独立して運営されています。",
        "ゲームタイプ: ビデオ スロットゲームに特化。ライブカジノやバーチャルカジノゲームは提供していませんでした。",
        "ポートフォリオ: 当時、約40種類の人気スロットゲームを提供していました。",
      ],
    },
    {
      heading: "ライセンスと規制 🛡️",
      paragraphs: [
        "Push Gaming社は、厳格な規制基準をクリアした以下の主要ライセンスを取得していました。",
      ],
      bullets: [
        "マルタ・ゲーミング委員会（MGA）",
        "イギリス・ギャンブル委員会（GC）",
        "キュラソーライセンス",
        "ルーマニア政府（ONJN Romania）",
      ],
      description: "これらのライセンスは、同社が運営の公平性と安全性を重視していた証です。",
    },
    {
      heading: "公平性と監査 🔍",
      paragraphs: [
        "Push Gaming社のゲームは、第三者監査機関によって定期的にテストされ、公平性が保証されていました。",
      ],
      bullets: [
        "eCOGRA",
        "bmm testlabs",
      ],
      description: "これらの認証機関による審査をクリアしており、プレイヤーは安心してゲームを楽しむことができました。",
    },
    {
      heading: "受賞歴 🏆",
      paragraphs: [
        "Push Gaming社は、その革新性と品質で数々の業界賞を受賞・ノミネートされていました。",
      ],
      bullets: [
        "EGR B2B Award for Mobile Gaming Software (2019)",
        "CasinoBeats Developer Awards (イノベーション部門)",
        "Slot of the Year ノミネート (Jammin' Jars, Razor Sharkなど)",
        "SlotCatalog Studio of the Year (2023)",
      ],
    },
    {
      heading: "業界評価 ⭐",
      bullets: [
        "Casinomeister による評価: 7.5/10",
        "WhichBingo.co.uk: 「ゲーム開発者における第一ランク」と評価",
        "「UK iGaming業界で最もエキサイティングな名前の一つ」として認識されていました。",
      ],
    },
    {
      heading: "ゲーム体験 🎮",
      paragraphs: [
        "Push Gaming社のゲームは、その魅力的なグラフィック、没入感のあるサウンド、そして革新的なゲームメカニクスによって、プレイヤーに忘れられない体験を提供していました。",
      ],
      bullets: [
        "ゲームフィーチャー: Race Reels, Cluster Link, Push-Up Mechanic, Mystery Stacks, Nudge & Reveal, Harvest Feature, Coin Drop Featureなど、多様なフィーチャー。",
        "グラフィックとサウンド: 細部までこだわり抜かれた高品質なグラフィックと、ゲームの世界観を豊かに表現するサウンド。",
      ],
    },
    {
      heading: "モバイル対応 📱",
      paragraphs: [
        "Push Gaming社は、設立当初からモバイルゲームの将来性に着目し、積極的に開発を進めていました。そのため、同社のゲームはスマートフォンやタブレットなどのモバイルデバイスで非常に快適にプレイできました。HTML5技術により、あらゆるデバイスの画面サイズや操作系に最適化されており、PCと同じようにスムーズで高品質なゲーム体験を提供していました。特に、縦型モードでのプレイも考慮されたデザインは、外出先でのプレイをより便利にしていました。",
      ],
    },
    {
      heading: "安全性・公平性・KYC ✅",
      paragraphs: [
        "Push Gaming社のゲームは、厳格なライセンス基準と第三者機関による監査により、高い安全性と公平性が保証されていました。CasinoTsu は、これらの点を重視し、プレイヤーの皆様に安心して情報を提供しております。",
      ],
      bullets: [
        "ライセンス: MGA、UKGC、キュラソー、ONJN Romaniaなどの主要ライセンスを取得していました。",
        "公平性: eCOGRAおよびbmm testlabsによる独立したテストを受けており、ゲーム結果のランダム性と公平性が保証されていました。",
        "責任あるギャンブル: BeAwareGamble.orgやAGCOなどの規制機関と連携し、責任あるギャンブルツールの導入にも力を入れていました。",
      ],
    },
    {
      heading: "Push GamingのゲームのRTPについて 📈",
      paragraphs: [
        "Push Gaming社のスロットは、しばしば高いRTP（還元率）を誇っていました。例えば、「Wild Swarm」や「Razor Shark」は97%を超えるRTPを持つことがありました。ただし、RTPはカジノによって変更される可能性があるため、プレイ前に各カジノで正確なRTPを確認することが重要でした。",
      ],
    },
    {
      heading: "ハイライト・強み 💪",
      paragraphs: [
        "Push Gaming社の最大の強みは、その革新的なゲームメカニクスと、プレイヤーに高配当の興奮を提供する能力にありました。",
      ],
      bullets: [
        "ユニークなゲームフィーチャー: 常に新しいフィーチャーを開発し、ゲームプレイに変化と興奮をもたらしていました。",
        "高い配当ポテンシャル: 最大配当倍率が高いゲームが多く、一攫千金の夢を追うプレイヤーに適していました。",
        "高品質なグラフィックとサウンド: 没入感のあるゲーム体験を提供していました。",
        "優れたモバイル対応: どのデバイスからでも快適にプレイできました。",
        "堅牢な安全性と公平性: 複数のライセンスと第三者監査により、信頼性が高かったです。",
      ],
    },
    {
      heading: "まとめ 🌟",
      paragraphs: [
        "Push Gaming社は、限られた数のゲームながらも、その一つ一つに妥協のないクオリティと革新性を詰め込んだ、業界でも際立った存在でした。特に、高配当を狙えるスリル満点のゲーム体験を求めるプレイヤーにとって、Push Gaming社の提供するスロットは最高の選択肢の一つでした。設立から現在に至るまで、常にプレイヤーの満足度を追求し、ユニークなフィーチャーと洗練されたデザインで、カジノゲームの新たなスタンダードを築き上げてきました。",
        "CasinoTsu は、今後もプレイヤーの皆様に、信頼できる情報と、安全に楽しめるカジノ情報をお届けしてまいります。",
      ],
      bullets: [
        "Push Gaming が向いていたユーザー像:",
        "高配当を狙いたいプレイヤー",
        "ユニークなゲーム性を求めるプレイヤー",
        "高品質なグラフィックとサウンドを重視するプレイヤー",
        "モバイルゲームを頻繁にプレイするプレイヤー",
      ],
    },
    {
      heading: "よくある質問 (FAQ) ❓",
      faq: [
        {
          q: "プッシュゲーミングはいつ設立されたの？",
          a: "2010年にJames Marshall氏とWinston Lee氏によって設立されました。",
        },
        {
          q: "プッシュゲーミングの人気ゲームはどれ？",
          a: "「Jammin’ Jars」、「Razor Shark」、「Wild Swarm」などが特に人気でした。",
        },
        {
          q: "プッシュゲーミングのゲームで利用できるウェルカムオファーは？",
          a: "以前は、「ベラジョン」など、一部の提携カジノで、限定のウェルカムオファーや入金不要ボーナスなどが提供されていました。",
        },
        {
          q: "最新のゲームフィーチャーは？",
          a: "最新のフィーチャーとしては「Race Reels」があり、今後も「Cluster Link」や「Push-Up Mechanic」など、革新的なフィーチャーが期待されていました。",
        },
        {
          q: "プッシュゲーミングのゲームは安全にプレイできますか？",
          a: "はい、Push Gaming社はMGAやUKGCなどの厳格なライセンスを取得しており、eCOGRAやbmm testlabsといった第三者機関による監査も受けていたため、安全かつ公平にプレイできました。",
        },
        {
          q: "プッシュゲーミングのゲームはどこでプレイできますか？",
          a: "以前は、[Bitz](https://casinotsu.com/reviews/bitz)や[Roobet](https://casinotsu.com/reviews/roobet)といったオンラインカジノ、および[ベラジョン](https://casinotsu.com/reviews/vera-john)、[カジ旅](https://casinotsu.com/reviews/casitabi)、[ボンズ](https://casinotsu.com/reviews/bons)などの多くの主要カジノでプレイ可能でした。",
        },
        {
          q: "プッシュゲーミングはどのようなゲームを提供していますか？",
          a: "Push Gaming社は、ビデオ スロットゲームの開発に特化しており、ライブカジノゲームやバーチャルカジノゲームは提供していませんでした。",
        },
        {
          q: "プッシュゲーミングのゲームをプレイする際の注意点はありますか？",
          a: "一部のゲームではRTPがカジノによって変更される可能性があったため、プレイ前に各カジノでRTPを確認することをおすすめしていました。",
        },
      ],
    },
  ],
  cta: {
    text: "おすすめオンラインカジノサイトはこちら",
    href: "/reviews",
  },
  games: [
    "Wild Swarm",
    "Jammin Jars",
    "Razor Shark",
    "Ice Breaker",
    "Jammin’ Jars 2",
    "Space Stacks",
    "Fat Santa",
    "Fat Drac",
    "Retro Tapes",
    "Tiki Tumble",
    "Goat Getter",
    "The Shadow Order",
    "Giga Jar",
    "Big Bamboo",
    "Mad Cars",
    "Generous Jack",
  ],
  features: [
    "Push-Up Mechanic",
    "Cluster Link Mechanism",
    "Mystery Stacks",
    "Nudge & Reveal",
    "Harvest Feature",
    "Coin Drop Feature",
    "Bonus Buy",
    "Free Spins",
    "Gamble Feature",
    "Respins",
    "Feature Selectable Bonus Spins",
    "Changing Payways",
    "Expanding Symbols",
    "Race Reels",
  ],
  security: [
    "MGA License",
    "UKGC License",
    "Curacao License",
    "ONJN Romania License",
    "eCOGRA Certified",
    "bmm testlabs Certified",
    "Responsible Gambling Tools",
  ],
};

export default function Page() {
  return <ProvidersTemplate data={data} canonicalPath="/providers/push-gaming" />;
}
