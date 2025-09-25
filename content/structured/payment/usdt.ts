import { PaymentPageData } from "@/components/templates/PaymentTemplate";

const data: PaymentPageData = {
  "title": "USDT",
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
    "title": "USDT入金ガイド",
    "subheading": "安全性・手数料・使い方",
    "description": "USDTでの入金方法、チェーン選択、手数料、注意点を解説。"
  },
  "intro": "- [![JapaneseCasino.com](https://www.japanesecasino.com/wp-content/themes/tokyo/public/svg/logo-header-small-jp.c69314.svg)](https://www.japanesecasino.com/)\n- [![crown](https://img.japanesecasino.com/svg/jp/nav/crown.svg)\\\\\nジャパカジ厳選](https://www.japanesecasino.com/reviews)",
  "howto": [
    "[Home](https://www.japanesecasino.com/)",
    "[Payment](https://www.japanesecasino.com/payment)",
    "[Usdt](https://www.japanesecasino.com/payment/usdt)"
  ],
  "feeTable": {
    "columns": [
      "カジノ"
    ],
    "rows": [
      [
        "①",
        "[**BitStarz**](https://www.japanesecasino.com/reviews/bitstarz \"ビットスターズのレビューへ\")"
      ],
      [
        "②",
        "[**Cloudbet**](https://www.japanesecasino.com/reviews/cloudbet)"
      ],
      [
        "③",
        "[**Bitcasino.io**](https://www.japanesecasino.com/reviews/bitcasino-io)"
      ]
    ]
  },
  "summary": "ビットスターズはひとつのアカウントで色々な通貨を保有、使い分けのできる便利なカジノ。USDTでもプレイできるから、試してみてね！",
  "faq": [
    {
      "q": "USDTとは？",
      "a": "USTDとは仮想通貨の一種。アメリカドルや円などの法定通貨とほぼ連動した価値を持ちます。"
    },
    {
      "q": "なぜ価格が固定されている？",
      "a": "価格が固定されている理由は、発行するUSDTと同額のUSDを保有することにあると発表されています。"
    },
    {
      "q": "USTDのデメリットは？",
      "a": "USDTは価格固定のためテザー社で中央集権体制で管理されているので、固有のデメリットがあります。"
    },
    {
      "q": "[![最新オンカジ人気ランキング](https://www.japanesecasino.com/wp-content/uploads/japacasi-oncasi-ranking_300x150.svg)](https://www.japanesecasino.com/reviews \"最新オンカジ人気ランキング\")",
      "a": "[![入金不要ボーナス](https://www.japanesecasino.com/wp-content/uploads/no-deposit-bonus_300x150.svg)](https://www.japanesecasino.com/bonuses/no-deposit \"入金不要ボーナス\")"
    },
    {
      "q": "[![オンラインパチンコガイド](https://www.japanesecasino.com/wp-content/uploads/sidebar-pachinko_300x150.svg)](https://www.japanesecasino.com/guides/pachinko \"オンラインパチンコガイド\")",
      "a": "[ジャパカジ仮想通貨完全ガイド](https://www.japanesecasino.com/crypto \"ジャパカジ仮想通貨完全ガイド\")"
    },
    {
      "q": "[ハイローラーカジノガイド](https://www.japanesecasino.com/guides/high-roller \"ハイローラーカジノガイド\")",
      "a": "[バカラ](https://www.japanesecasino.com/baccarat \"バカラ\")"
    }
  ],
  "cta": {
    "text": "入出金ガイド一覧を見る",
    "href": "/payment"
  }
} as const;

export default data;
