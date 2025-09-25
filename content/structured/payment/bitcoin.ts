import { PaymentPageData } from "@/components/templates/PaymentTemplate";

const data: PaymentPageData = {
  "title": "BITCOIN",
  "banner": {
    "menu": [
      {
        "href": "#howto",
        "label": "使い方",
        "icon": "🧭"
      },
      {
        "href": "#fees",
        "label": "手数料",
        "icon": "💸"
      },
      {
        "href": "#proscons",
        "label": "メリデメ",
        "icon": "⚖️"
      },
      {
        "href": "#safety",
        "label": "注意点",
        "icon": "🛡️"
      },
      {
        "href": "#comparison",
        "label": "比較",
        "icon": "📊"
      },
      {
        "href": "#faq",
        "label": "FAQ",
        "icon": "❓"
      }
    ],
    "title": "Bitcoin入金ガイド",
    "subheading": "安全性・手数料・使い方",
    "description": "ビットコインでの入金方法、手数料、注意点、比較をまとめて解説。"
  },
  "intro": "- [![JapaneseCasino.com](https://www.japanesecasino.com/wp-content/themes/tokyo/public/svg/logo-header-small-jp.c69314.svg)](https://www.japanesecasino.com/)\n- [![crown](https://img.japanesecasino.com/svg/jp/nav/crown.svg)\\\\\nジャパカジ厳選](https://www.japanesecasino.com/reviews)",
  "howto": [
    "[Home](https://www.japanesecasino.com/)",
    "[Payment](https://www.japanesecasino.com/payment)",
    "[Bitcoin](https://www.japanesecasino.com/payment/bitcoin)"
  ],
  "feeTable": {
    "columns": [
      "単位",
      "BTC換算"
    ],
    "rows": [
      [
        "BTC（ビットコイン）",
        "1BTC"
      ],
      [
        "mBTC（ミリビットコイン）",
        "0.001BTC"
      ],
      [
        "μBTC（マイクロビットコイン）<br>bits（ビッツ）",
        "0.000001BTC"
      ],
      [
        "Satoshi（サトシ）",
        "0.00000001BTC"
      ]
    ]
  },
  "cta": {
    "text": "入出金ガイド一覧を見る",
    "href": "/payment"
  }
} as const;

export default data;
