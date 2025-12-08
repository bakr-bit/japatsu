import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewVideoslots: ReviewPageContent = {
  hero: {
    title: "Videoslots（ビデオスロッツ）— 2025年最新評価｜登録ボーナス・入出金・重要告知",
    subheading: "日本市場から撤退（2024年5月）— 新規登録・当サイト限定特典は終了",
    description:
      "本ページはVideoslots（ビデオスロッツ）の最終評価を記録したものです。日本市場撤退の経緯に加え、かつての評価指標（ボーナス条件・操作性・サポート）を整理。現在は日本居住者向けの新規登録や当サイト限定ボーナスの提供は終了しています。",
    score: 3.9,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 77,
        note:
          "豊富なゲームバラエティで人気が高かった一方、日本語表記やUIに改善余地があった。",
      },
      {
        label: "規約",
        percent: 74,
        note:
          "初回入金限定のウェルカム。賭け条件はリアルマネーで35倍消化という設計。",
      },
      {
        label: "操作性",
        percent: 81,
        note:
          "検索フィルターは優秀。ただし日本語の不自然さが散見された。",
      },
      {
        label: "サポート",
        percent: 81,
        note:
          "24時間体制だが日本語ネイティブでない担当者もおり、回答に時間を要するケースもあった。",
      },
    ],
    highlights: [
      "過去には3,000種以上のゲームラインナップを提供",
      "ライブカジノ対応（当時）",
      "VIPプログラム（当時）",
    ],
    watchouts: [
      "2024年5月に日本市場から撤退—新規登録・当サイト経由の限定特典は提供終了",
      "日本語UIの品質にばらつきがあった（当時）",
      "一部問い合わせで回答までのリードタイムが長い事例（当時）",
    ],
  },

  payments: {
    featured: [
      {
        name: "日本向け決済",
        icon: "/assets/payments/info.svg",
        badge: "提供終了",
        note: "日本市場撤退に伴い、国内向け入出金の案内は無効化済み。",
      },
    ],
    deposits: [],
    withdrawals: [],
    notes: [
      "日本市場撤退により、日本居住者向けの入出金案内は現在適用外です。",
    ],
  },

  bonuses: {
    overview:
      "現在、日本市場向けの新規登録ボーナスや当サイト限定オファーは提供されていません（2024年5月撤退）。",
    noDeposit:
      "該当なし（提供終了）。",
    extraSpins: {
      summary: "該当なし（提供終了）。",
      schedule: [],
      warning: "",
    },
    welcomeRows: [
      // 参考として当時の代表値を“履歴”として記載
      { depositNumber: "初回（履歴）", percent: "—", cap: "$200 / 賭け条件35x（当時）", code: "" },
    ],
    conditions: [
      "当時：ウェルカムは初回入金限定、リアルマネーで賭け条件35倍。",
      "現在：日本市場向けの各種ボーナスは提供終了。",
    ],
    // ページ元データに特定の禁止ゲーム一覧はなかったため空
    prohibitedGames: [],
  },

  offers: [
    // 「人気カジノ」セクション（代替の推奨先）をカード化
    {
      title: "Bons.com",
      description:
        "モダンなゲーム体験。詳細レビューと最新プロモーションを確認してください。",
      highlight: "当編集部推奨の代替選択肢",
    },
    {
      title: "Mystino",
      description: "日本人プレイヤーに最適化された設計と特典が魅力。",
    },
    {
      title: "Yuugado",
      description: "“和”テイスト。パチンコからスポーツまで幅広く対応。",
    },
    {
      title: "Vera&John",
      description: "日本市場で長年の実績。日本語サポートと限定コンテンツ。",
    },
    {
      title: "Wonder Casino",
      description: "出金スピードと暗号資産特典が強み。",
    },
    {
      title: "Joy Casino",
      description: "ボーナスの厚みが評価ポイント。",
    },
    {
      title: "Eldoah Casino",
      description: "ライブカジノ分野で高い満足度を維持。",
    },
    {
      title: "Konibet",
      description: "パチンコ/パチスロ対応のラインナップ。",
    },
    {
      title: "InterCasino",
      description: "20年以上の歴史を持つ老舗。",
    },
    {
      title: "Casino-X",
      description: "ボーナス施策が豊富。",
    },
  ],

  facts: [
    { label: "カジノ名", value: "Videoslots（ビデオスロッツ）" },
    { label: "設立年", value: "2011年" },
    { label: "ライセンス", value: "マルタ（MGA）" },
    { label: "本社所在地", value: "マルタ" },
    { label: "日本語対応（当時）", value: "あり（ただし一部不自然な箇所有り）" },
    { label: "日本市場撤退", value: "2024年5月" },
    { label: "運営会社", value: "Videoslots Limited" },
    {
      label: "評価（当時）",
      value:
        "総合3.9/5。人気指数77、規約74、操作性81、サポート81。",
    },
    { label: "ゲーム数（当時）", value: "3,000種類以上" },
    { label: "ライブカジノ（当時）", value: "あり" },
    { label: "スポーツベット（当時）", value: "なし" },
    { label: "初回入金ボーナス（当時）", value: "$200／賭け条件35x" },
    { label: "フリースピン（当時）", value: "11回（0x表記あり）" },
    { label: "VIPプログラム（当時）", value: "あり" },
    { label: "入出金（日本）", value: "撤退に伴い提供終了" },
  ],

  intro: {
    paragraphs: [
      "本ページは、Videoslots（ビデオスロッツ）の日本市場撤退（2024年5月）を受け、当時の評価と主要スペックをアーカイブとして整理したものです。",
      "同ブランドは豊富なゲーム数と検索フィルターの利便性で評価されていましたが、日本語UIの品質や問い合わせ応答リードタイムに課題が指摘されることもありました。",
      "現在、日本居住者の新規登録および当サイト限定登録ボーナスの提供は終了しています。日本向けに利用可能な代替カジノは以下の「人気カジノ」を参照してください。",
    ],
    ctas: [
      { text: "推奨カジノを見る（Bons）", href: "https://casinotsu.com/reviews/bons" },
      { text: "推奨カジノを見る（Mystino）", href: "https://casinotsu.com/reviews/mystino" },
      { text: "推奨カジノを見る（Vera&John）", href: "https://casinotsu.com/reviews/vera-john" },
    ],
  },

  games: [
    "（当時）3,000種以上のスロットとライブカジノを掲載。",
    "スポーツベットは非対応。",
  ],

  features: [
    "（当時）検索フィルターが優秀で目的のゲームに辿り着きやすかった。",
    "日本語表記に不自然な箇所が残り、可読性・一貫性の面で課題があった。",
  ],

  editorial: {
    author: "当編集部",
    profileHref: "/authors/rina-okabe",
    hook:
      "日本市場撤退により、国内新規ユーザー向けの実用情報は失効しています。以下はアーカイブとしての記録です。",
    theGoodStuff:
      "圧倒的なタイトル数、機能的な検索フィルター、24時間体制のサポート（当時）。",
    theHeadsUp:
      "日本語UIの品質、問い合わせ応答に時間を要する事例など、運用品質でのムラ（当時）。",
    finalThought:
      "現在は国内向けの選択肢として推奨しません。日本市場に最適化された他ブランドを検討してください。",
  },

  longform: {
    kicker: "アーカイブ評価",
    title: "Videoslotsの日本撤退と当時の評価ポイント",
    paragraphs: [
      "Videoslotsは2011年設立のMGAライセンス取得ブランドで、当時は3,000種超のゲーム数が大きな魅力でした。検索フィルターの精度も高く、目的の機種に短時間でアクセスできる利点がありました。",
      "一方、日本語表記の不自然さやUIの使い勝手、問い合わせ対応のばらつきが指摘され、特に長文の問い合わせで回答まで1週間程度を要した事例も見受けられました。",
      "ボーナス面では初回入金限定のウェルカム（例：$200/賭け条件35x）やフリースピン（11回/“0x”表記の案内が存在）などがありましたが、設計の分かりやすさや日本語規約の明確性には改善の余地がありました。",
      "2024年5月、日本市場から撤退。これに伴い、当サイト経由の限定登録ボーナスや新規登録受け付けも終了しました。以降、日本居住者に適用できるVideoslotsの実運用情報は無効化されています。",
      "現時点で日本向けに検討する場合は、国内ユーザー対応に強い他ブランド（Bons、Mystino、Vera&John、ほか）を比較検討することを推奨します。",
    ],
  },

  security: [
    "（当時）MGAライセンスに基づく運営",
    "（当時）RNGによりゲームの公平性を担保",
    "（当時）SSL/TLSで通信を保護",
  ],

  responsiblePlay: [
    "自己規制と外部支援への導線（一般的な国際基準）",
    "入金・賭け・損失・時間の各制限機能（提供状況は地域により異なる場合あり）",
  ],

  complaintStats: [
    "一部ケースで回答までの時間が長い（最大約1週間の報告／当時）",
  ],

  awards: [],

  restrictedCountries: [
    "日本（2024年5月以降は事実上の提供対象外）",
  ],

  userConcerns: [
    "日本語UIの不自然さ（当時）",
    "問い合わせ応答のリードタイム（当時）",
    "日本市場撤退に伴うボーナス・登録不可（現在）",
  ],

  summary: [
    "Videoslotsは大規模ラインナップと検索性で評価されたが、日本語運用品質に課題が残った（当時）。",
    "2024年5月の日本市場撤退により、国内向けの新規登録・特典は終了。",
    "日本居住者は国内対応が強い他ブランドへの移行を推奨。",
  ],

  extraLinks: [
    { text: "Bonsレビュー", href: "https://casinotsu.com/reviews/bons" },
    { text: "Mystinoレビュー", href: "https://casinotsu.com/reviews/mystino" },
    { text: "Vera&Johnレビュー", href: "https://casinotsu.com/reviews/vera-john" },
    { text: "Konibetレビュー", href: "https://casinotsu.com/reviews/konibet" },
  ],

  faq: [
    {
      question: "日本からVideoslotsに登録できますか？",
      answer:
        "できません。2024年5月の日本市場撤退により、日本居住者向けの新規登録と当サイト限定特典は終了しています。",
    },
    {
      question: "過去のボーナス条件はどうなっていましたか？",
      answer:
        "例として初回入金限定の$200（賭け条件35x）、フリースピン11回（0x表記の案内あり）などがありました。現在は日本向けに適用されません。",
    },
    {
      question: "サポート体制はどうでしたか？",
      answer:
        "24時間体制でしたが、日本語ネイティブではない担当者もおり、ケースによっては回答まで時間を要することがありました（当時）。",
    },
  ],

  cta: {
    text: "日本向けの推奨オンラインカジノを確認する",
    href: "https://casinotsu.com/reviews",
  },
};