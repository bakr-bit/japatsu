import OffersTemplate, { OffersPageData } from "@/components/templates/OffersTemplate";

const data: OffersPageData = {
  "title": "ハロウィン限定オンラインカジノボーナスオファー2024",
  "intro": "ハロウィンのお祭り騒ぎに、オンラインカジノで特別なボーナスをゲットしませんか？👻🎃 このページでは、2024年のハロウィンシーズンに開催される限定オファーを厳選してご紹介します。豪華な入金ボーナスやフリースピン、キャッシュバックなど、様々な特典であなたのゲーム体験をさらに盛り上げます。各カジノの安全性や評判も確認済みなので、安心してハロウィンキャンペーンをお楽しみいただけます。責任あるギャンブルを心がけ、最高のハロウィンをお過ごしください。",
  "promos": [
    {
      "href": "/offers/casino-a-halloween",
      "title": "カジノA：最大10万円ボーナス＋100フリースピン！",
      "expiry": "2024-10-31",
      "img": "https://example.com/casino-a-halloween.jpg"
    },
    {
      "href": "/offers/casino-b-halloween",
      "title": "カジノB：入金不要ボーナス5,000円！",
      "expiry": "2024-10-31",
      "img": "https://example.com/casino-b-halloween.jpg"
    },
    {
      "href": "/offers/casino-c-halloween",
      "title": "カジノC：ハロウィン限定スロットトーナメント開催！",
      "expiry": "2024-10-31",
      "img": "https://example.com/casino-c-halloween.jpg"
    }
  ],
  "offers": [
    {
      "link": "/reviews/casino-a",
      "img": "https://example.com/casino-a-logo.png",
      "text": "カジノAの詳細レビューはこちら",
      "alt": "カジノAのロゴ"
    },
    {
      "link": "/reviews/casino-b",
      "img": "https://example.com/casino-b-logo.png",
      "text": "カジノBの詳細レビューはこちら",
      "alt": "カジノBのロゴ"
    },
    {
      "link": "/reviews/casino-c",
      "img": "https://example.com/casino-c-logo.png",
      "text": "カジノCの詳細レビューはこちら",
      "alt": "カジノCのロゴ"
    }
  ],
  "faq": [
    {
      "q": "ハロウィンボーナスはどこで確認できますか？",
      "a": "各カジノの公式サイト、または当サイトのプロモーションページ(/offers)からご確認いただけます。"
    },
    {
      "q": "ボーナスを受け取るための条件はありますか？",
      "a": "カジノによって異なります。賭け条件（出金条件）や最低入金額などが設定されている場合があるので、利用規約をよくご確認ください。"
    },
    {
      "q": "複数のハロウィンボーナスを併用できますか？",
      "a": "通常、複数のボーナスを同時に利用することはできません。各カジノのボーナス規約をご確認ください。"
    },
    {
      "q": "オンラインカジノは安全ですか？",
      "a": "ライセンスを取得し、適切なセキュリティ対策を講じているカジノであれば安全にプレイできます。当サイトでは、安全性が確認されたカジノのみをご紹介しています。ただし、ご自身の責任においてご利用ください。"
    }
  ]
};

export default function Page() {
  return <OffersTemplate data={data} canonicalPath="/offers/halloween" />;
}
