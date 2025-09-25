import SlotsTemplate, { SlotsPageData } from "@/components/templates/SlotsTemplate";

const data: SlotsPageData = {
  "title": "ハロウィン気分満点！おすすめハロウィン・スロットで恐怖と賞金をゲット！",
  "intro": "ハロウィンシーズン到来！ジャック・オー・ランタン、魔女、ゴースト…ハロウィンモチーフ満載のスロットで、一味違うスリルと高額賞金を狙ってみませんか？本記事では、厳選おすすめハロウィン・スロットをご紹介。ペイアウト率（RTP）、ボラティリティ、人気プロバイダーなど、徹底比較したランキングで自分にぴったりの一台を見つけましょう！責任あるギャンブルを忘れずに、ハロウィン気分を盛り上げましょう！",
  "featured": {
    "title": "注目ハロウィン・スロット",
    "items": [
      {
        "name": "Halloween Jack",
        "href": "/reviews/halloween-jack",
        "img": "halloween-jack.jpg",
        "provider": "NetEnt",
        "rtp": "96.28%",
        "volatility": "中",
        "maxMultiplier": "3,000倍",
        "rating": 4.5,
        "badge": "おすすめ"
      },
      {
        "name": "Blood Suckers 2",
        "href": "/reviews/blood-suckers-2",
        "img": "blood-suckers-2.jpg",
        "provider": "NetEnt",
        "rtp": "96.94%",
        "volatility": "低",
        "maxMultiplier": "1,000倍",
        "rating": 4,
        "badge": "高RTP"
      },
      {
        "name": "Pumpkin Smash",
        "href": "/reviews/pumpkin-smash",
        "img": "pumpkin-smash.jpg",
        "provider": "Yggdrasil",
        "rtp": "96.2%",
        "volatility": "中",
        "maxMultiplier": "2,000倍",
        "rating": 4.2
      }
    ]
  },
  "rankings": {
    "title": "おすすめハロウィン・スロットランキング",
    "items": [
      {
        "rank": 1,
        "slot": {
          "name": "Halloween Jack",
          "href": "/reviews/halloween-jack",
          "img": "halloween-jack.jpg",
          "provider": "NetEnt",
          "rtp": "96.28%",
          "volatility": "中",
          "maxMultiplier": "3,000倍",
          "rating": 4.5,
          "badge": "おすすめ"
        },
        "facts": [
          {
            "label": "RTP",
            "value": "96.28%"
          },
          {
            "label": "ボラティリティ",
            "value": "中"
          },
          {
            "label": "最大配当",
            "value": "3,000倍"
          }
        ],
        "summary": "NetEnt社の人気作。フリースピンでランタンを集めて高配当獲得のチャンス！",
        "cta": {
          "text": "詳しく見る",
          "href": "/reviews/halloween-jack"
        }
      },
      {
        "rank": 2,
        "slot": {
          "name": "Blood Suckers 2",
          "href": "/reviews/blood-suckers-2",
          "img": "blood-suckers-2.jpg",
          "provider": "NetEnt",
          "rtp": "96.94%",
          "volatility": "低",
          "maxMultiplier": "1,000倍",
          "rating": 4,
          "badge": "高RTP"
        },
        "facts": [
          {
            "label": "RTP",
            "value": "96.94%"
          },
          {
            "label": "ボラティリティ",
            "value": "低"
          },
          {
            "label": "最大配当",
            "value": "1,000倍"
          }
        ],
        "summary": "高RTPで安定した勝利を狙える定番スロット。吸血鬼の世界観が魅力。",
        "cta": {
          "text": "詳しく見る",
          "href": "/reviews/blood-suckers-2"
        }
      }
    ]
  },
  "criteria": [
    "RTP（ペイアウト率）",
    "ボラティリティ",
    "ボーナス機能",
    "ゲーム性",
    "テーマ"
  ],
  "providers": [
    {
      "provider": "NetEnt",
      "description": "業界大手のNetEnt社は、ハイクオリティなグラフィックと革新的なゲーム性で知られています。",
      "picks": [
        {
          "name": "Halloween Jack",
          "href": "/reviews/halloween-jack",
          "note": "ランタンコレクションで高配当"
        },
        {
          "name": "Blood Suckers 2",
          "href": "/reviews/blood-suckers-2",
          "note": "高RTPで安定感抜群"
        }
      ]
    },
    {
      "provider": "Yggdrasil",
      "description": "美しいグラフィックとユニークなボーナス機能が特徴。"
    },
    {
      "provider": "Play'n GO",
      "description": "モバイル最適化に力を入れているプロバイダー。"
    }
  ],
  "tips": [
    "少額から始める",
    "予算を設定する",
    "RTPとボラティリティを確認する",
    "ボーナスを有効活用する"
  ],
  "prosCons": {
    "pros": [
      "ハロウィン気分を味わえる",
      "高額賞金獲得のチャンス",
      "様々なボーナス機能"
    ],
    "cons": [
      "ギャンブル依存症のリスク",
      "資金を失う可能性"
    ]
  },
  "faq": [
    {
      "q": "ハロウィン・スロットはどこでプレイできますか？",
      "a": "当サイトのおすすめオンラインカジノでプレイ可能です。[/offers]"
    },
    {
      "q": "無料プレイはできますか？",
      "a": "多くのカジノでデモプレイが可能です。[/offers]"
    }
  ],
  "cta": {
    "text": "ハロウィン・スロットをプレイ！",
    "href": "/offers"
  }
};

export default function Page() {
  return <SlotsTemplate data={data} canonicalPath="/slots/halloween-slots" />;
}
