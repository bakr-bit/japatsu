import SlotsTemplate, { SlotsPageData } from "@/components/templates/SlotsTemplate";

const data: SlotsPageData = {
  "title": "中ボラティリティ スロットで遊び尽くす！おすすめ機種＆徹底解説【2024年最新】",
  "intro": "オンラインカジノでスロットをプレイする際に重要な要素の一つが「ボラティリティ」です。ボラティリティとは、ゲームのペイアウト頻度と金額の変動性を示す指標で、大きく分けて低・中・高の3段階に分類されます。\n\nこの記事では、中ボラティリティスロットの特徴、メリット・デメリット、おすすめ機種などを詳しく解説します。安定したプレイと爆発力のバランスが良い中ボラティリティスロットで、カジノゲームをもっと楽しみましょう！",
  "featured": {
    "title": "編集部おすすめの中ボラティリティスロット",
    "items": [
      {
        "name": "Starburst XXXtreme",
        "href": "/reviews/starburst-xxxtreme",
        "img": "https://example.com/img/starburst-xxxtreme.jpg",
        "provider": "NetEnt",
        "rtp": "96.26%",
        "volatility": "中",
        "maxMultiplier": "12500x",
        "rating": 4.5
      },
      {
        "name": "Sweet Bonanza",
        "href": "/reviews/sweet-bonanza",
        "img": "https://example.com/img/sweet-bonanza.jpg",
        "provider": "Pragmatic Play",
        "rtp": "96.51%",
        "volatility": "中",
        "maxMultiplier": "20000x",
        "rating": 4.8,
        "badge": "人気急上昇"
      }
    ]
  },
  "rankings": {
    "title": "中ボラティリティスロットランキング TOP3",
    "items": [
      {
        "rank": 1,
        "slot": {
          "name": "Reactoonz 2",
          "href": "/reviews/reactoonz-2",
          "img": "https://example.com/img/reactoonz-2.jpg",
          "provider": "Play'n GO",
          "rtp": "96.2%",
          "volatility": "中",
          "maxMultiplier": "5000x",
          "rating": 5
        },
        "facts": [
          {
            "label": "RTP",
            "value": "96.2%"
          },
          {
            "label": "最大配当",
            "value": "5000倍"
          },
          {
            "label": "プロバイダー",
            "value": "Play'n GO"
          }
        ],
        "summary": "カスケード機能とユニークなキャラクターで人気！",
        "cta": {
          "text": "レビューを読む",
          "href": "/reviews/reactoonz-2"
        }
      }
    ]
  },
  "criteria": [
    "RTP（還元率）",
    "最大ペイアウト倍率",
    "ボーナス機能の充実度",
    "ゲームのテーマ・面白さ",
    "ユーザーレビュー"
  ],
  "prosCons": {
    "pros": [
      "安定したプレイを楽しめる",
      "高ボラティリティほど資金が減りにくい",
      "適度な興奮と賞金獲得のバランスが良い"
    ],
    "cons": [
      "爆発的な勝利は高ボラティリティスロットに劣る",
      "一撃で大きく稼ぐことは難しい"
    ]
  },
  "tips": [
    "まずは少額ベットでゲームの特性を掴もう",
    "ボーナス機能を有効活用して賞金を増やそう",
    "予算を決めて責任あるプレイを心がけよう"
  ],
  "faq": [
    {
      "q": "中ボラティリティスロットとは？",
      "a": "ペイアウトの頻度と金額の変動が中程度のバランス型スロットです。"
    },
    {
      "q": "どんな人におすすめ？",
      "a": "安定したプレイを好む方、高ボラティリティでは資金が減りやすいと感じる方におすすめです。"
    }
  ],
  "cta": {
    "text": "中ボラティリティスロットをもっと見る",
    "href": "/slots/medium-volatility/list"
  }
};

export default function Page() {
  return <SlotsTemplate data={data} canonicalPath="/slots/medium-volatility" />;
}
