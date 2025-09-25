import OffersTemplate, { OffersPageData } from "@/components/templates/OffersTemplate";

const data: OffersPageData = {
  "title": "バレンタインデー限定！オンラインカジノのお得なキャンペーン情報まとめ【2024年】",
  "intro": "バレンタインデーは、大切な人との時間を特別なものにする絶好の機会です。オンラインカジノでも、この時期ならではの豪華なキャンペーンが多数開催されています。この記事では、2024年のバレンタインデーにおすすめのオンラインカジノキャンペーンを厳選してご紹介します。お得なボーナスやフリースピンをゲットして、素敵なバレンタインデーをお過ごしください。",
  "promos": [
    {
      "href": "/offers",
      "title": "最新オンラインカジノボーナス情報はこちら",
      "expiry": "随時更新"
    },
    {
      "href": "/reviews",
      "title": "おすすめカジノランキング",
      "expiry": "随時更新"
    }
  ],
  "offers": [
    {
      "link": "/offers/casino-a",
      "img": "casino_a_valentine.jpg",
      "text": "Casino A：最大14,000円の入金ボーナス＋140回のフリースピン！",
      "expiry": "2024年2月14日まで",
      "alt": "Casino Aのバレンタインキャンペーン"
    },
    {
      "link": "/offers/casino-b",
      "img": "casino_b_valentine.jpg",
      "text": "Casino B：バレンタイン限定トーナメントで豪華賞金をゲット！",
      "expiry": "2024年2月19日まで",
      "alt": "Casino Bのバレンタインキャンペーン"
    },
    {
      "link": "/offers/casino-c",
      "img": "casino_c_valentine.jpg",
      "text": "Casino C：バレンタイン特別抽選会でロマンチックな旅行を当てよう！",
      "expiry": "2024年2月29日まで",
      "alt": "Casino Cのバレンタインキャンペーン"
    }
  ],
  "faq": [
    {
      "q": "オンラインカジノのバレンタインキャンペーンは誰でも利用できますか？",
      "a": "各カジノによって利用条件が異なります。利用規約をよくご確認ください。また、未成年の方はご利用いただけません。"
    },
    {
      "q": "ボーナスやフリースピンには賭け条件がありますか？",
      "a": "多くの場合、ボーナスやフリースピンには賭け条件が設定されています。賭け条件を満たさないと出金できないため、事前に確認しておきましょう。詳細は各カジノの利用規約をご覧ください。"
    },
    {
      "q": "オンラインカジノで安全にプレイするにはどうすればいいですか？",
      "a": "ライセンスを取得している信頼できるカジノを選び、責任あるギャンブルを心がけることが大切です。/safety で安全なオンラインカジノの選び方について詳しく解説しています。"
    }
  ]
};

export default function Page() {
  return <OffersTemplate data={data} canonicalPath="/offers/valentines-day" />;
}
