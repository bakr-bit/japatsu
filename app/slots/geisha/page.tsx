import SlotsTemplate, { SlotsPageData } from "@/components/templates/SlotsTemplate";

const data: SlotsPageData = {
  "title": "花魁(芸者)スロットで華麗な勝利を掴む！徹底ガイド【2024年最新】",
  "intro": "日本の伝統美とエキゾチックな魅力が融合した花魁（芸者）をテーマにしたスロットは、多くのプレイヤーを魅了しています。本ガイドでは、花魁スロットの魅力、選び方、おすすめ機種、プレイのコツまでを徹底解説。初心者から上級者まで、華麗な勝利を掴むための情報が満載です。責任あるギャンブルを心がけ、健全なゲームプレイをお楽しみください。",
  "featured": {
    "title": "編集部おすすめの花魁スロット",
    "items": [
      {
        "name": "芸者物語 (Geisha Story)",
        "href": "/reviews/geisha-story",
        "img": "geisha-story.jpg",
        "provider": "Play'n GO",
        "rtp": "96.4%",
        "volatility": "中",
        "maxMultiplier": "5000倍",
        "rating": 4.5,
        "badge": "おすすめ"
      },
      {
        "name": "花魁ドリーム (Geisha Dream)",
        "href": "/reviews/geisha-dream",
        "img": "geisha-dream.jpg",
        "provider": "High5Games",
        "rtp": "95%",
        "volatility": "高",
        "maxMultiplier": "10000倍",
        "rating": 4,
        "badge": "高配当"
      }
    ]
  },
  "rankings": {
    "title": "花魁スロットランキングTOP3",
    "items": [
      {
        "rank": 1,
        "slot": {
          "name": "芸者物語 (Geisha Story)",
          "href": "/reviews/geisha-story",
          "img": "geisha-story.jpg",
          "provider": "Play'n GO",
          "rtp": "96.4%",
          "volatility": "中",
          "maxMultiplier": "5000倍",
          "rating": 4.5
        },
        "facts": [
          {
            "label": "RTP",
            "value": "96.4%"
          },
          {
            "label": "ボラティリティ",
            "value": "中"
          },
          {
            "label": "最大配当",
            "value": "5000倍"
          }
        ],
        "summary": "美しいグラフィックとボーナス機能が魅力。初心者にもおすすめ。",
        "cta": {
          "text": "レビューを読む",
          "href": "/reviews/geisha-story"
        }
      }
    ]
  },
  "criteria": [
    "RTP（還元率）",
    "ボラティリティ",
    "ボーナス機能",
    "グラフィック",
    "テーマ",
    "ゲーム性"
  ],
  "providers": [
    {
      "provider": "Play'n GO",
      "description": "高品質なスロットで知られる有名プロバイダー。",
      "picks": [
        {
          "name": "芸者物語",
          "href": "/reviews/geisha-story",
          "note": "人気No.1"
        }
      ]
    }
  ],
  "tips": [
    "予算を決めてプレイしましょう。",
    "RTPとボラティリティを確認しましょう。",
    "ボーナスを有効活用しましょう。"
  ],
  "prosCons": {
    "pros": [
      "日本の文化に触れられる",
      "美しいグラフィック",
      "エキゾチックな演出"
    ],
    "cons": [
      "テーマが限られる",
      "機種によってはRTPが低い場合も"
    ]
  },
  "faq": [
    {
      "q": "花魁スロットはどこでプレイできますか？",
      "a": "当サイトで紹介しているオンラインカジノでプレイできます。各カジノのレビューページをご確認ください。"
    }
  ],
  "cta": {
    "text": "おすすめカジノを見る",
    "href": "/offers"
  }
};

export default function Page() {
  return <SlotsTemplate data={data} canonicalPath="/slots/geisha" />;
}
