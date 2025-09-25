import ProvidersTemplate, { ProvidersPageData } from "@/components/templates/ProvidersTemplate";

const data: ProvidersPageData = {
  title: "Air Dice（エア・ダイス）プロバイダー最新情報",
  banner: {
    title: "Air Dice（エア・ダイス）",
    subheading: "オンラインカジノプロバイダー",
    description:
      "Air Dice Groupの歴史、主力スタジオ、注目ゲーム、そして提携カジノをまとめて紹介。CasinoTsuが厳選した最新情報です。",
    avatarSrc: "/assets/provider/air-dice.png",
    avatarAlt: "Air Dice ロゴ",
  },
  intro:
    "Air Diceは2003年にフィンランド・ヘルシンキで創業したゲームプロバイダーです。Air Dice、Dice Crafter、Probability Jonesの3スタジオから成るAir Dice Groupは、ダイスゲームからビジュアル重視のスロットまで幅広いジャンルを展開し、北欧らしいアートと独創的なメカニクスで高く評価されています。",
  authorCommentary: {
    author: "Rina Okabe",
    commentary:
      "Air DiceのゲームはRTP（還元率）が95%から97%に設定されているものが多く、ハイボラティリティ機種でも安心してベットしやすい印象です。",
    authorHref: "/authors/rina-okabe",
  },
  featured: {
    title: "Air Dice Groupを構成する主要スタジオ",
    items: [
      {
        name: "Air Dice",
        logo: "/assets/provider/air-dice.png",
        founded: "2003年",
        hq: "フィンランド・ヘルシンキ",
        gameTypes: ["スロット", "ダイスゲーム", "テーブルゲーム"],
        tagline: "スカンジナビアの世界観と独創的なメカニクスを融合させたAir Dice Groupの旗艦スタジオ。",
        topGames: [
          { name: "Devourer", href: "https://casinotsu.com/slots/devourer" },
          { name: "Light in the Dark" },
          { name: "Fruit Shifter" },
        ],
      },
      {
        name: "Dice Crafter",
        founded: "2005年",
        tagline: "ダイスプレースメント機能など、クラシックとモダンを掛け合わせたダイスゲームを得意とする開発チーム。",
        gameTypes: ["ダイスゲーム", "スクラッチ"],
        topGames: [
          { name: "Hero of Dragonland" },
          { name: "Wandering Devourer" },
        ],
      },
      {
        name: "Probability Jones",
        hq: "イギリス",
        tagline: "アニメ風グラフィックやストーリー性を重視し、エンターテインメント性の高い機種を生み出す英国スタジオ。",
        gameTypes: ["スロット", "ビンゴ", "キノ"],
        topGames: [
          { name: "Alice in the Rose Maze" },
          { name: "Neon Shifter" },
        ],
      },
    ],
  },
  sections: [
    {
      heading: "Air Diceの注目タイトル",
      paragraphs: [
        "CasinoTsuが実際のゲームプレイや公式資料をもとに選んだAir Diceのおすすめタイトルをご紹介します。シフター機能や固定ワイルドなど、独自のメカニクスが光るラインナップです。",
      ],
      bullets: [
        "Devourer – ブラックホールがシンボルを吸収する3×3のハイボラティリティ・スロット。",
        "Fruit Shifter – リールを左右に移動できるシフター機能が魅力の落ちゲースタイル。",
        "Light in the Dark – 深海を舞台にリールが最大8×4まで拡張する癒やし系スロット。",
        "Hero of Dragonland – 騎士が活躍するアニメ風ダイスゲーム。ダイスプレースメントで配当を狙います。",
        "Alice in the Rose Maze – アリスの世界観でカードをめくってマルチプライヤーを獲得するボーナスを搭載。",
      ],
    },
    {
      heading: "その他の話題作",
      bullets: [
        "24K Gold Reels、Octane Overdrive、Neon Shifterなど、テーマ性豊かなスロットが多数。",
        "Goddess Of Justice、Fortune Gazerといった中～高ボラティリティ機種も人気。",
        "Midnight Blackjackなどテーブルゲーム系タイトルもラインナップ。",
      ],
    },
    {
      heading: "Air Diceのゲーム一覧",
      paragraphs: [
        "主要タイトルのRTPや最大配当、ボラティリティを一覧でまとめました。クラシックなペイライン型から243通りのベットラインまで幅広く対応しています。",
      ],
      table: {
        columns: ["名称", "総合評価", "RTP", "最大配当倍率", "行数", "ペイライン", "ボラティリティ"],
        rows: [
          ["Devourer", "85", "95.7%", "x3,000", "3", "5", "High"],
          ["Fruit Shifter", "-", "96.0%", "x1,000", "5", "10", "Medium"],
          ["Light in the Dark", "-", "96.1%", "x2,000", "4", "-", "Medium"],
          ["Hero of Dragonland", "-", "95.5%", "x500", "-", "-", "Low"],
          ["Alice in the Rose Maze", "-", "96.2%", "x1,500", "5", "243", "Medium"],
          ["Octane Overdrive", "-", "95.8%", "x3,000", "5", "243", "High"],
          ["Neon Shifter", "-", "96.1%", "x2,000", "5", "243", "Medium"],
          ["Goddess Of Justice", "-", "96.3%", "x5,000", "5", "243", "High"],
          ["Fortune Gazer", "-", "96.0%", "x1,000", "5", "243", "Medium"],
          ["Flash Freeze", "-", "96.2%", "x2,000", "5", "243", "Medium"],
          ["Wandering Devourer", "-", "95.9%", "x3,500", "5", "243", "High"],
          ["Book of Goddess", "-", "96.0%", "x5,000", "5", "10", "High"],
          ["Midnight Blackjack", "-", "99.22%", "-", "-", "-", "Low"],
        ],
      },
    },
    {
      heading: "代表的なフィーチャーとゲーム体験",
      paragraphs: [
        "Air Diceはマルチプライヤーやリール拡張、ピック・アンド・ウィン型ボーナスなど、多彩な機能をバランス良く取り入れています。プレイヤーが自分でリールをシフトする独自機能や、ダイスを配置して配当を狙うゲームなど、体験価値の高い仕掛けが満載です。",
      ],
      bullets: [
        "シフター機能やカスケードリールなど、連続配当を生むメカニクスを多数採用。",
        "固定（スティッキー）ワイルドや拡張ワイルドで、緊張感あるフリースピンを演出。",
        "ダイスプレースメントやピック・アンド・ウィンなど、プレイヤー操作の余地があるボーナス設計。",
      ],
    },
    {
      heading: "信頼性・ライセンス",
      paragraphs: [
        "Air Diceはマルタゲーミング委員会や英国ギャンブルコミッション、ベルギーギャンブルコミッションなど複数のライセンスを取得し、公平性と安全性を第三者機関の監査によって担保しています。ISO 27001:2017認証を取得し、情報セキュリティ面の取り組みも評価されています。",
      ],
      bullets: [
        "主要ライセンス: MGA、UKGC、ベルギーギャンブルコミッション。",
        "監査機関: BMM Testlabsなどの独立機関が定期的に検証。",
        "ISO 27001:2017認証を取得し、データ保護・セキュリティ管理を徹底。",
      ],
    },
  ],
  comparison: {
    title: "Air Diceのゲームを遊べる人気オンラインカジノ",
    columns: ["カジノ名", "総合評価", "人気指数", "操作性", "サポート", "ローンチ日"],
    rows: [
      ["Casitabi", "85", "77", "84", "80", "2014-05-31"],
      ["Casino Me", "84", "86", "87", "84", "2020-04-13"],
      ["WSM Casino", "76", "73", "77", "80", "2023-10-18"],
      ["Star Casino", "82", "75", "85", "81", "2021-08-20"],
      ["Unibet", "89", "92", "91", "90", "1997-01-01"],
      ["Betway", "88", "90", "90", "89", "2006-03-01"],
    ],
    caption: "CasinoTsu編集部が調査したAir Dice対応カジノの指標。数値は最新の社内リサーチに基づきます。",
  },
  faq: [
    {
      q: "Air Diceはどの国でプレイできますか？",
      a: "マルタや英国、ベルギーなど主要ライセンス管轄のカジノで提供されており、日本語対応のオンラインカジノでも遊べます。",
    },
    {
      q: "無料で試せるデモモードはありますか？",
      a: "多くのAir Diceスロットにはデモモードがあり、実際に賭ける前にゲーム性を確認できます。",
    },
    {
      q: "Air Diceの代表的な機能は？",
      a: "リールシフト機能、ダイスプレースメント、固定ワイルド、ピック・アンド・ウィン型ボーナスなど、プレイヤー主体のギミックが特徴です。",
    },
  ],
  cta: {
    text: "Air Dice対応カジノをもっとチェック",
    href: "/reviews",
  },
};

export default function Page() {
  return <ProvidersTemplate data={data} canonicalPath="/providers/air-dice" />;
}
