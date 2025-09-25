import SlotsTemplate, { SlotsPageData } from "@/components/templates/SlotsTemplate";

const data: SlotsPageData = {
  "title": "隠された宝石：知られざるおすすめスロット徹底ガイド【2024年最新】",
  "intro": "オンラインカジノで定番スロットに飽きていませんか？実は、隠れた名作スロットが数多く存在します。本記事では、まだあまり知られていないおすすめスロットを厳選してご紹介。選び方から遊び方、メリット・デメリットまで徹底解説！新たな興奮と勝利のチャンスを掴みましょう。",
  "featured": {
    "title": "編集部おすすめ隠れた名作スロット",
    "items": [
      {
        "name": "Hidden Gem 1（仮）",
        "href": "/slots/hidden/hidden-gem-1",
        "img": "https://example.com/hidden-gem-1.jpg",
        "provider": "Provider A",
        "rtp": "96.5%",
        "volatility": "中",
        "maxMultiplier": "x5000",
        "rating": 4.5,
        "badge": "おすすめ"
      },
      {
        "name": "Secret Treasure（仮）",
        "href": "/slots/hidden/secret-treasure",
        "img": "https://example.com/secret-treasure.jpg",
        "provider": "Provider B",
        "rtp": "97.0%",
        "volatility": "高",
        "maxMultiplier": "x10000",
        "rating": 4,
        "badge": "高ボラティリティ"
      }
    ]
  },
  "rankings": {
    "title": "隠れた名作スロットランキング TOP3",
    "items": [
      {
        "rank": 1,
        "slot": {
          "name": "Hidden Champion（仮）",
          "href": "/slots/hidden/hidden-champion",
          "img": "https://example.com/hidden-champion.jpg",
          "provider": "Provider C",
          "rtp": "96.8%",
          "volatility": "低",
          "maxMultiplier": "x2000",
          "rating": 4.8,
          "badge": "初心者向け"
        },
        "facts": [
          {
            "label": "RTP",
            "value": "96.8%"
          },
          {
            "label": "ボラティリティ",
            "value": "低"
          },
          {
            "label": "最大ペイアウト",
            "value": "x2000"
          }
        ],
        "summary": "安定した配当で初心者にもおすすめ。シンプルなゲーム性で遊びやすいのが特徴。",
        "cta": {
          "text": "詳しく見る",
          "href": "/slots/hidden/hidden-champion"
        }
      }
    ]
  },
  "criteria": [
    "RTP（還元率）",
    "ボラティリティ",
    "最大ペイアウト",
    "ゲーム性",
    "テーマ"
  ],
  "providers": [
    {
      "provider": "Provider A",
      "description": "革新的なスロットで人気急上昇中のプロバイダー。",
      "picks": [
        {
          "name": "Hidden Gem 1（仮）",
          "href": "/slots/hidden/hidden-gem-1",
          "note": "ボーナスが魅力"
        }
      ]
    }
  ],
  "tips": [
    "少額から始める",
    "予算を決めておく",
    "RTPとボラティリティを確認する"
  ],
  "prosCons": {
    "pros": [
      "新しい発見がある",
      "競争率が低い可能性がある"
    ],
    "cons": [
      "情報が少ない場合がある",
      "人気がない理由がある可能性もある"
    ]
  },
  "faq": [
    {
      "q": "隠れた名作スロットはどこで見つけられますか？",
      "a": "オンラインカジノのゲーム一覧をよく探したり、レビューサイトを参考にしたりすることで見つけることができます。本記事で紹介しているスロットもおすすめです。"
    }
  ],
  "cta": {
    "text": "おすすめスロットランキングを見る",
    "href": "/slots"
  }
};

export default function Page() {
  return <SlotsTemplate data={data} canonicalPath="/slots/hidden" />;
}
