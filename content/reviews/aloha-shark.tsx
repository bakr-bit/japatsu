import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewAlohaShark: ReviewPageContent = {
  hero: {
    title: "Aloha Shark（アロハシャーク） — 日本市場撤退のお知らせ",
    subheading: "2024年12月に日本市場でのサービスを終了／出金手続き期限あり",
    description:
      "Aloha Shark は 2024年12月をもって日本市場でのサービスを終了しました。CasinoTsu では出金手続きの期限（2024-12-16）や代替の推薦カジノ情報など重要事項をお知らせします。",
    score: 4.3,
    scoreMax: 5,
    scoreBreakdown: [
      {
        "label": "ボーナスとプロモーション",
        "percent": 85,
        "note": "提供時は最大$1,000のボーナスや多彩なプロモは魅力的だったが、賭け条件40倍（ボーナス）や出金不可のSticky形式などの制約もあった。"
      },
      {
        "label": "ゲームとソフトウェア",
        "percent": 92,
        "note": "68社のプロバイダーと1,300種以上のゲームは充実。人気スロットからライブカジノ、スポーツベットまで幅広く提供されていた。"
      },
      {
        "label": "利便性と決済手段",
        "percent": 80,
        "note": "決済手段は豊富でUIも検索しやすかったが、出金限度額や反映時間の情報にばらつきが見られた点が課題だった。"
      },
      {
        "label": "信頼性とサポート",
        "percent": 35,
        "note": "日本市場撤退に加え、CasinoMentorによる低評価や出金遅延等のユーザー苦情が報告されており、信頼性には大きな懸念があった。"
      }
    ],
    highlights: [
      "日本市場でのサービス終了（2024年12月）",
      "出金手続きの案内：2024年12月16日までに手続きを完了するよう案内あり",
      "提供時はフリースピン150回／最大ボーナス $1,000 を提供",
      "約1,300種類以上のゲーム、68社のプロバイダー導入（提供時）",
      "多様な入出金方法と日本語サポート（提供時）",
    ],
    watchouts: [
      "日本市場撤退に伴い新規登録・ボーナス提供終了",
      "残高があるユーザーは出金期限に注意が必要（2024-12-16）",
      "CasinoMentor による信頼性評価が低く利用規約の公平性に懸念あり",
      "出金限度や反映時間の情報にばらつきがあった",
    ],
    avatarSrc: "/assets/casino/aloha-shark.png",
    avatarAlt: "Aloha sharkのロゴ",
  },
  payments: {
    featured: [
      {
        name: "Visa / MasterCard",
        icon: "",
        href: "https://casinotsu.com/payment/visa",
        badge: "",
        note: "入金は即時反映（提供時）。最低入金例：$10。",
      },
      {
        name: "E-wallets（Payz / Vega Wallet / MuchBetter / Venus Point）",
        icon: "",
        href: "https://casinotsu.com/payment",
        badge: "",
        note: "即時入金・即時出金の選択肢が多い（提供時）。上限や対応通貨はサービスにより異なる。",
      },
      {
        name: "銀行振込（J-Pay / 銀行送金）",
        icon: "",
        href: "https://casinotsu.com/payment/j-pay",
        badge: "",
        note: "J‑Pay は¥1,000から入金可能（反映30分～2営業日）。銀行送金の出金は2〜7日程度（提供時の案内）。",
      },
      {
        name: "仮想通貨（Bitpace等）",
        icon: "",
        href: "https://casinotsu.com/crypto",
        badge: "",
        note: "仮想通貨入金は即時、出金は30分～2時間程度（提供時の案内）",
      },
    ],
    deposits: [
      {
        name: "Visa",
        icon: "",
        href: "https://casinotsu.com/payment/visa",
      },
      {
        name: "MasterCard",
        icon: "",
        href: "https://casinotsu.com/payment/mastercard",
      },
      {
        name: "Payz",
        icon: "",
        href: "https://casinotsu.com/payment/payz",
      },
      {
        name: "Vega Wallet",
        icon: "",
        href: "https://casinotsu.com/payment/vega-wallet",
      },
      {
        name: "MuchBetter",
        icon: "",
        href: "https://casinotsu.com/payment/muchbetter",
      },
      {
        name: "Venus Point",
        icon: "",
        href: "https://casinotsu.com/payment/venus-point",
      },
      {
        name: "J-Pay（銀行振込）",
        icon: "",
        href: "https://casinotsu.com/payment/j-pay",
      },
      {
        name: "銀行送金",
        icon: "",
        href: "https://casinotsu.com/payment/bank-transfer",
      },
      {
        name: "仮想通貨（Bitpace等）",
        icon: "",
        href: "https://casinotsu.com/crypto",
      },
    ],
    withdrawals: [
      {
        name: "E-wallet（Payz / Vega / MuchBetter 等）",
        icon: "",
        href: "https://casinotsu.com/payment",
      },
      {
        name: "銀行送金",
        icon: "",
        href: "https://casinotsu.com/payment/bank-transfer",
      },
      {
        name: "仮想通貨（Bitpace等）",
        icon: "",
        href: "https://casinotsu.com/crypto",
      },
    ],
    notes: [
      "提供時は銀行送金以外は基本的に即時反映だったが、手段によって反映時間は異なる",
      "銀行振込の出金反映は2〜7日が目安（提供時）",
      "仮想通貨出金はネットワーク状況により30分〜2時間が目安（提供時）",
      "出金限度額や手数料は情報源にばらつきがあり一貫性がなかったため注意が必要",
    ],
  },
  bonuses: {
    overview:
      "提供時は豪華なウェルカムボーナスや常設プロモーションを多数用意していましたが、日本市場撤退に伴い新規提供・限定オファーは終了しています。ここでは提供時の代表的なボーナス内容をまとめます。",
    noDeposit:
      "提供時に登録のみで付与されるジャパカジ限定登録ボーナス（20回フリースピン）などがあったが、現在は新規提供終了。",
    extraSpins: {
      summary:
        "提供時は初回入金や登録特典、アプリダウンロード特典などでフリースピンが配布されていた。",
      schedule: [
        "初回入金：フリースピン（例：50回）",
        "2回目入金：フリースピン（例：100回）",
        "ジャパカジ限定登録：登録のみで20回（Moon Princess対象）",
        "Androidアプリ特典：10回（Moon Princess対象）",
      ],
      warning:
        "フリースピンの勝利金には賭け条件（例：30倍）が設定されていた。提供時の条件を必ず確認すること。",
    },
    welcomeRows: [
      {
        depositNumber: "初回入金（提供時）",
        percent: "100%",
        cap: "$600",
        code: "",
      },
      {
        depositNumber: "2回目入金（提供時）",
        percent: "50%",
        cap: "$400",
        code: "",
      },
    ],
    conditions: [
      "提供時のウェルカムボーナスはボーナス額の賭け条件40倍が設定されていた（フリースピン勝利金は30倍）",
      "ボーナス有効期限：ボーナス14日、フリースピン5日（提供時）",
      "ウェルカムボーナスは Sticky Bonus（ボーナス額自体は出金不可）",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "過去のウェルカムボーナス（提供時）",
      description:
        "初回入金100%最大$600 + フリースピン50回、2回目入金50%最大$400 + フリースピン100回（提供時、現在は日本市場終了により新規提供停止）",
      highlight: "提供時は豪華なウェルカムオファーを実施",
    },
    {
      title: "Alohaハッピーチューズデー（提供時）",
      description:
        "毎週火曜日にライブカジノで利用できる$5ボーナスがログインだけで獲得可能（提供時）",
      highlight: "ログインで獲得できる入金不要プロモ（提供時）",
    },
    {
      title: "月間ライブカジノ ドロップ＆ウィン（提供時）",
      description: "賞金総額$500,000規模の大型ライブカジノプロモ（提供時）",
      highlight: "大規模プロモーション（提供時）",
    },
  ],
  facts: [
    {
      label: "サービス終了（日本市場）",
      value: "2024年12月（新規登録・限定ボーナスの受付終了）",
    },
    {
      label: "出金手続き締切（案内）",
      value: "2024年12月16日までに出金手続きを完了する旨の案内あり",
    },
    {
      label: "評価点",
      value: "4.3 / 5",
    },
    {
      label: "ボーナス（要約・提供時）",
      value:
        "フリースピン: 150回（賭け条件30倍）、ボーナス: 最大 $1,000（賭け条件40倍）",
    },
    {
      label: "運営会社",
      value: "Fun Entertainment B.V.（拠点：キュラソー）",
    },
    {
      label: "ライセンス",
      value: "キュラソーライセンス（提供時に保有）",
    },
    {
      label: "ゲーム数（提供時）",
      value: "約1,300種類以上",
    },
    {
      label: "プロバイダー数（提供時）",
      value: "68社（Evolution, Pragmatic Play, Playtech 等）",
    },
    {
      label: "対応通貨（仮想通貨）",
      value: "BTC, BCH, ETH, LTC, XRP, USDT, USDC（当時の対応7種）",
    },
  ],
  intro: {
    paragraphs: [
      "CasinoTsu（カジノツウ） は、Aloha Shark（アロハシャーク）の日本市場撤退に関する重要なお知らせをお届けします。Aloha Shark は 2024年12月をもって日本市場でのサービスを終了しました。これにより、CasinoTsu 経由の限定登録ボーナス提供や新規登録の受付は終了となります。",
      "該当ユーザーは Aloha Shark からの案内に従い、2024年12月16日までに出金手続きを完了するよう速やかに対応してください。今後は CasinoTsu 推薦の他カジノをぜひご検討ください。",
    ],
    ctas: [
      {
        text: "Bons.com を見る（推奨）",
        href: "https://go.japanesecasino.com/go/bons-com:bons?referrer_path=%2Freviews%2Faloha-shark",
      },
      {
        text: "Yuugado を見る（推奨）",
        href: "https://go.japanesecasino.com/go/yuugado:yuugado?referrer_path=%2Freviews%2Faloha-shark",
      },
      {
        text: "Mystino を見る（推奨）",
        href: "https://go.japanesecasino.com/go/mystino:mystino?referrer_path=%2Freviews%2Faloha-shark",
      },
      {
        text: "Vera&John を見る（推奨）",
        href: "https://go.japanesecasino.com/go/vera-john:vera-john?referrer_path=%2Freviews%2Faloha-shark",
      },
    ],
  },
  games: [
    "スロット（花魁ドリーム、ムーンプリンセス等の人気タイトルを含む）",
    "ライブカジノ（Evolution、Pragmatic Play 等のプロバイダー）",
    "ジャックポット／ビデオスロット",
    "ゲームショー／特殊ゲーム（提供時）",
    "スポーツベット（提供時）",
  ],
  features: [
    "提供時は日本語サポートを用意（午後12時〜午前0時）",
    "多様な入出金方法（カード、電子財布、銀行送金、仮想通貨等・提供時）",
    "モバイル対応（Androidアプリあり、iOSは提供なしの場合あり）",
    "豊富なプロバイダー導入（68社）",
    "カテゴリー分けが細かく検索しやすいUI（提供時）",
  ],
  security: [
    "キュラソーライセンス（提供時）",
    "運営会社：Fun Entertainment B.V.（キュラソー拠点）",
    "全ゲームにRNGを採用（公平性）",
    "128ビットSSL暗号化で個人情報と取引データを保護（提供時の記載）",
    "ただし CasinoMentor による信頼性評価は低く、利用規約の公平性に関して懸念あり",
  ],
  responsiblePlay: [
    "入金制限、タイムアウト、自己規制などの設定がマイアカウントから可能（提供時）",
    "サポート経由でリアリティチェックや自己評価テストの案内が可能（提供時）",
    "CasinoTsu は責任あるゲームプレイを推奨",
  ],
  complaintStats: [
    "CasinoMentor による評価：信頼性は『悪い』とされる（利用規約の公平性に関する評価が低い）",
    "ユーザー苦情の主な内容（提供時）：出金遅延、アカウント凍結、サポート対応の不備",
  ],
  awards: [],
  restrictedCountries: [
    "アフガニスタン",
    "アルバニア",
    "アルジェリア",
    "アメリカ領サモア",
    "アンゴラ",
    "オーストラリア",
    "オーストリア",
    "バーレーン",
    "ベルギー",
    "ブラジル",
    "カナダ",
    "中国",
    "キューバ",
    "チェコ共和国",
    "デンマーク",
    "エリトリア",
    "エストニア",
    "エチオピア",
    "フランス",
    "ジョージア",
    "ギリシャ",
    "グリーンランド",
    "グアム",
    "香港",
    "インドネシア",
    "イラン",
    "イラク",
    "イタリア",
    "ヨルダン",
    "北朝鮮",
    "クウェート",
    "リビア",
    "リトアニア",
    "マレーシア",
    "マーシャル諸島",
    "モーリタニア",
    "モーリシャス",
    "モロッコ",
    "ノーフォーク島",
    "北マリアナ諸島",
    "オマーン",
    "パキスタン",
    "ポルトガル",
    "プエルトリコ",
    "カタール",
    "ルワンダ",
    "サウジアラビア",
    "スロベニア",
    "ソマリア",
    "スペイン",
    "スーダン",
    "シリア",
    "チュニジア",
    "トルコ",
    "アメリカ合衆国",
    "バージン諸島（英国）",
    "イエメン",
  ],
  userConcerns: [
    "日本市場撤退によるサービス停止・新規登録不可・ボーナス終了",
    "出金手続きの締切（2024-12-16）に間に合うかの懸念",
    "CasinoMentor による低評価や利用規約の公平性に関する不安",
    "出金限度額や反映時間に関する情報のばらつき",
  ],
  summary: [
    "Aloha Shark は明るく使いやすいデザインと豊富なゲーム、複数の入出金手段を持つ魅力的なカジノでしたが、2024年12月に日本市場から撤退しサービスを終了しました。",
    "日本在住でアカウントに残高があるユーザーは、Aloha Shark からの案内（出金手続き締切：2024-12-16）に従い速やかに出金対応してください。",
    "提供時の利点としてプロバイダー数の多さや多彩なプロモーションがありましたが、信頼性評価の低さや利用規約の不明瞭さといった懸念も報告されていました。",
    "CasinoTsu は代替として Bons.com、Yuugado、Mystino、Vera&John などの推薦カジノを紹介しています。",
  ],
  extraLinks: [
    {
      text: "Bons.com（推奨）",
      href: "https://go.japanesecasino.com/go/bons-com:bons?referrer_path=%2Freviews%2Faloha-shark",
    },
    {
      text: "Yuugado（推奨）",
      href: "https://go.japanesecasino.com/go/yuugado:yuugado?referrer_path=%2Freviews%2Faloha-shark",
    },
    {
      text: "Mystino（推奨）",
      href: "https://go.japanesecasino.com/go/mystino:mystino?referrer_path=%2Freviews%2Faloha-shark",
    },
    {
      text: "Vera&John（推奨）",
      href: "https://go.japanesecasino.com/go/vera-john:vera-john?referrer_path=%2Freviews%2Faloha-shark",
    },
    {
      text: "CasinoTsu 入出金方法ページ",
      href: "https://casinotsu.com/payment",
    },
    {
      text: "CasinoTsu ライセンスと安全性ページ",
      href: "https://casinotsu.com/info/license",
    },
    {
      text: "Cookies Policy",
      href: "https://casinotsu.com/about/cookie-policy",
    },
  ],
  faq: [
    {
      question: "Aloha Shark で仮想通貨は利用できましたか？",
      answer:
        "はい。提供時は BTC、LTC、ETH、XRP、USDT、USDC、BCH などの仮想通貨が利用可能でしたが、日本市場撤退に伴い現在は該当サービスの提供が終了しています。",
    },
    {
      question: "出金手続きの締切はいつですか？",
      answer:
        "Aloha Shark からの案内では、2024年12月16日までに出金手続きを完了するよう案内が発信されています。残高がある方は速やかにご対応ください。",
    },
    {
      question: "Alohaハッピーチューズデーとは何ですか？",
      answer:
        "提供時のプロモーションで、毎週火曜日にライブカジノで使える$5ボーナスがログインだけで獲得できる入金不要のキャンペーンでした（現在は日本市場終了により提供停止）。",
    },
    {
      question: "サービス終了後に残高がある場合はどうすればよいですか？",
      answer:
        "Aloha Shark からの公式案内に従い、出金手続きを行ってください。案内に記載の締切（2024-12-16）までに出金が完了するよう手続きしてください。問題がある場合は、サポートへ連絡してください。",
    },
    {
      question: "Aloha Shark はどの国から利用できませんでしたか？",
      answer:
        "提供時には多くの国からのアクセスが制限されていました。主な制限国は本文の制限国リストを参照してください。",
    },
  ],
  cta: {
    text: "Aloha Shark に関する詳細と代替カジノを見る",
    href: "https://casinotsu.com/reviews",
  },
  textBlocks: [],
};
