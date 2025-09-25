import SlotsTemplate, { SlotsPageData } from "@/components/templates/SlotsTemplate";

const data: SlotsPageData = {
  "title": "Hold and Win スロット徹底解説【2024年最新】",
  "intro": "Hold and Win スロットは、特殊なボーナスゲームでシンボルを固定し賞金を積み重ねる、人気急上昇中のスロットタイプです。高額配当のチャンスやシンプルながらも奥深いゲーム性で多くのプレイヤーを魅了しています。本記事では、Hold and Win スロットの仕組みや遊び方、おすすめ機種、攻略法まで徹底解説！魅力を最大限に引き出し、勝利を目指しましょう。",
  "featured": {
    "title": "おすすめ Hold and Win スロット",
    "items": [
      {
        "name": "サンダーキャッシュ (Thunder Cash)",
        "href": "/slots/thunder-cash",
        "img": "https://example.com/thunder-cash.jpg",
        "provider": "Pragmatic Play",
        "rtp": "96.5%",
        "volatility": "高",
        "maxMultiplier": "1000x",
        "rating": 4.5,
        "badge": "人気No.1"
      },
      {
        "name": "ファイアストライク (Fire Strike)",
        "href": "/slots/fire-strike",
        "img": "https://example.com/fire-strike.jpg",
        "provider": "Pragmatic Play",
        "rtp": "96.5%",
        "volatility": "中",
        "maxMultiplier": "25000x",
        "rating": 4,
        "badge": "高配当"
      }
    ]
  },
  "rankings": {
    "title": "Hold and Win スロットランキング TOP3",
    "items": [
      {
        "rank": 1,
        "slot": {
          "name": "サンダーキャッシュ (Thunder Cash)",
          "href": "/slots/thunder-cash",
          "img": "https://example.com/thunder-cash.jpg",
          "provider": "Pragmatic Play",
          "rtp": "96.5%",
          "volatility": "高",
          "maxMultiplier": "1000x",
          "rating": 4.5
        },
        "facts": [
          {
            "label": "RTP",
            "value": "96.5%"
          },
          {
            "label": "ボラティリティ",
            "value": "高"
          },
          {
            "label": "最大配当",
            "value": "1000倍"
          }
        ],
        "summary": "ジャックポット搭載で爆発力抜群！",
        "cta": {
          "text": "詳しく見る",
          "href": "/slots/thunder-cash"
        }
      }
    ]
  },
  "criteria": [
    "RTP（還元率）",
    "ボラティリティ",
    "最大配当",
    "ボーナス機能",
    "ゲーム性"
  ],
  "tips": [
    "予算を決めてプレイしましょう。",
    "高ボラティリティ機種は資金管理が重要です。",
    "無料デモで練習してからリアルマネーでプレイしましょう。"
  ],
  "prosCons": {
    "pros": [
      "高額配当のチャンスがある",
      "シンプルなルールで初心者にもわかりやすい",
      "ボーナスゲームがエキサイティング"
    ],
    "cons": [
      "ボラティリティが高い機種が多い",
      "ボーナス獲得まで時間がかかる場合がある"
    ]
  },
  "faq": [
    {
      "q": "Hold and Win スロットとは？",
      "a": "特定のシンボルを固定し、再スピンで賞金を積み重ねていくタイプのオンラインスロットです。"
    },
    {
      "q": "RTP とは何ですか？",
      "a": "Return to Player の略で、賭け金に対する理論上の還元率です。数値が高いほど、プレイヤーに有利と言えます。"
    }
  ],
  "cta": {
    "text": "Hold and Win スロットをプレイする",
    "href": "/offers"
  }
};

export default function Page() {
  return <SlotsTemplate data={data} canonicalPath="/slots/hold-and-win" />;
}
