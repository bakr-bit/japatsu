import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewQueenCasino: ReviewPageContent = {
  hero: {
    title: "Queen Casino（クイーンカジノ）レビュー",
    subheading:
      "ライブバカラNo.1を掲げるアジア向け総合カジノ — パチンコ/パチスロ対応で国内ユーザーにも親和性あり",
    description:
      "CasinoTsu が検証した Queen Casino の信頼性、ボーナス、入出金、ゲームラインナップ、サポート、責任あるギャンブルの取り組み。正確さが第一、興奮はその次。",
    score: 4.3,
    scoreMax: 5,
    scoreBreakdown: [],
    highlights: [
      "キュラソーライセンス保有による運営基盤",
      "128ビットSSLによる通信暗号化とRNG・第三者検証の導入",
      "登録のみで段階的に獲得できる入金不要ボーナス（最大88USDT + 88FS）",
      "初回〜3回目入金で合計最大1,800USDTのウェルカムパッケージ",
      "パチンコ・パチスロを含む幅広いゲームラインナップ（パチンコ300+、スロット2,500+）",
      "日本語ネイティブのサポート体制と多チャネル対応（チャット/LINE/電話）",
    ],
    watchouts: [
      "ボーナスの賭け条件は30x（ボーナス）／20x（フリースピン）とやや高め",
      "フリースピンやボーナスの有効期限が短め（例：3日）で即消化が必要",
      "VIP上位に到達するための条件（累計ベット額）が非常に高額でハードルが高い",
      "休眠アカウント（12〜18ヶ月）に対する残高没収リスクあり",
    ],
  },
  payments: {
    featured: [
      {
        name: "銀行振込",
        icon: "",
        href: "https://www.japanesecasino.com/payment/bank-transfer",
        badge: "",
        note: "日本の主要銀行による入金に対応。反映は通常短時間〜1時間程度の案内。",
      },
      {
        name: "Payz / SticPay / Vega Wallet",
        icon: "",
        href: "https://www.japanesecasino.com/payment",
        badge: "",
        note: "電子ウォレット各種に対応。即時〜数分での入出金が可能で利便性が高い。",
      },
      {
        name: "仮想通貨（BTC / ETH / USDT 等）",
        icon: "",
        href: "https://www.japanesecasino.com/crypto",
        badge: "",
        note: "複数のコインをサポート。入金は即時、出金は通常10分程度との案内がある（ネットワーク依存）。",
      },
    ],
    deposits: [
      {
        name: "銀行振込",
        icon: "",
        href: "https://www.japanesecasino.com/payment/bank-transfer",
      },
      {
        name: "Payz",
        icon: "",
        href: "https://www.japanesecasino.com/payment/payz",
      },
      {
        name: "SticPay",
        icon: "",
        href: "https://www.japanesecasino.com/payment/sticpay",
      },
      {
        name: "Vega Wallet",
        icon: "",
        href: "https://www.japanesecasino.com/payment/vega-wallet",
      },
      {
        name: "仮想通貨（BTC/BCH/ETH/LTC/DOGE/USDT 等）",
        icon: "",
        href: "https://www.japanesecasino.com/crypto",
      },
    ],
    withdrawals: [
      {
        name: "銀行振込",
        icon: "",
        href: "https://www.japanesecasino.com/payment/bank-transfer",
      },
      {
        name: "電子ウォレット（Payz / SticPay / Vega 等）",
        icon: "",
        href: "https://www.japanesecasino.com/payment",
      },
      {
        name: "仮想通貨（BTC / ETH / USDT 等）",
        icon: "",
        href: "https://www.japanesecasino.com/crypto",
      },
    ],
    notes: [
      "銀行振込での入金・出金をサポート（銀行出金は処理が長くなる場合あり）",
      "電子ウォレットを使った出金は非常に高速（ユーザー報告で1分〜10分程度の例あり）",
      "一部決済で手数料が発生する場合あり（例：銀行振込や特定のサービス）",
      "出金上限が設けられている（例：日$500,000 等の案内があるため高額処理は事前確認を推奨）",
      "KYC未完了の場合は出金が保留・拒否されることがあるので事前に本人確認を済ませることを推奨",
    ],
  },
  bonuses: {
    overview:
      "Queen Casino は登録ベースの段階的入金不要ボーナス（最大88USDT＋88FS）や、初回〜3回目の入金で合計最大1,800USDTの充実したウェルカム、リベート・VIP特典、週次や月次のキャッシュバックといった多彩なプロモを展開しています。各オファーは条件（賭け条件・有効期限・最大出金）を必ず確認してください。",
    noDeposit:
      "入金不要ボーナス（段階制）：KYCレベルに応じて2USDT＋10FS→36USDT＋28FS→50USDT＋50FS、合計最大88USDT＋88FS。ボーナス賭け条件30倍、フリースピン賭け条件20倍、有効期限3日。",
    extraSpins: {
      summary:
        "段階的に合計88回のフリースピンを付与。フリースピン勝利金は20倍の賭け条件が適用され、対象はQueen Casino Bonanza等に限定される場合あり。",
      schedule: [
        "KYCレベル1完了で10FS",
        "KYCレベル2完了で28FS",
        "KYCレベル3完了で50FS",
      ],
      warning:
        "短期間での消化が必要（有効期限3日）。フリースピン勝利金は最大出金上限対象となる場合あり。",
    },
    welcomeRows: [
      {
        depositNumber: "初回入金",
        percent: "100%",
        cap: "800USDT",
        code: "",
      },
      {
        depositNumber: "2回目入金",
        percent: "50%",
        cap: "500USDT",
        code: "",
      },
      {
        depositNumber: "3回目入金",
        percent: "30%",
        cap: "500USDT",
        code: "",
      },
    ],
    conditions: [
      "入金不要ボーナスの賭け条件：30x（ボーナス）、フリースピン勝利金は20x",
      "入金ウェルカムの賭け条件例：初回25x（案内例）、2/3回目は15x等（プロモにより異なる）",
      "ボーナス獲得にはKYCレベルや入金タイミングなどの条件がある",
      "ボーナスの最大キャッシュ移行はボーナス額の5倍等の制限が適用される場合がある",
      "禁止ゲーム：ライブカジノ・iSLOT・パチ/パチスロ等がボーナス対象外になることがある",
    ],
    prohibitedGames: [
      "ライブカジノ",
      "iSLOT",
      "パチンコ・パチスロ（入金不要/ボーナス利用時）",
    ],
  },
  offers: [
    {
      title: "登録で最大88USDT＋88FS（段階式）",
      description:
        "登録＆KYC完了に応じて段階的にボーナスとフリースピンを付与。合計で最大88USDTと88回分のフリースピン獲得が可能。",
      highlight: "入金不要で試せる段階式オファー（有効期限短め）",
    },
    {
      title: "初回〜3回目のウェルカムパッケージ（最大1,800USDT）",
      description:
        "初回〜3回目の入金で合計最大1,800USDTのボーナスを受け取れるウェルカムセット。各入金に最低額や賭け条件が設定される。",
      highlight: "複数回の入金で大きく受け取れるウェルカム",
    },
    {
      title: "VIPリベート＆ランクアップ報酬",
      description:
        "ロイヤルティプログラムによりリベート還元、レベルアップ報酬、バースデーギフト等の特典を提供。累計ベットでランクが決定され、降格がない設計に変更された。",
      highlight: "ハイローラー向けの高還元特典",
    },
  ],
  facts: [
    {
      label: "ローンチ",
      value: "2022（案内）",
    },
    {
      label: "評価点",
      value: "4.3 / 5",
    },
    {
      label: "入金不要ボーナス",
      value: "最大88USDT + 88FS（段階式、賭け条件30x / 20x）",
    },
    {
      label: "ウェルカム（要約）",
      value:
        "初回入金100%最大800USDT、2回目50%最大500USDT、3回目30%最大500USDT（賭け条件例あり）",
    },
    {
      label: "ライセンス",
      value: "Antillephone（キュラソー）表記",
    },
    {
      label: "運営会社",
      value: "ZEN ESTRATEGA BV Limited（コスタリカ拠点運営の案内）",
    },
    {
      label: "ゲーム数",
      value:
        "スロット約2,500～3,000、ライブ180以上、パチンコ/パチスロ300+（案内）",
    },
    {
      label: "プロバイダー数",
      value: "約30社（BetSoft, NetEnt, Play'n GO, Pragmatic, Yggdrasil 等）",
    },
    {
      label: "サポート",
      value:
        "日本語サポート（24時間体制の案内）、メール: support@queen-casino.com",
    },
  ],
  intro: {
    paragraphs: [
      "Queen Casino はアジア市場で存在感を高めるオンラインカジノです。ライブバカラの充実、豊富なプロモ、仮想通貨対応、そして日本語サポートとUXの向上に注力しており、CasinoTsu はこれらの要素を詳細に検証しました。",
      "本ページでは、ライセンス・セキュリティ・ボーナス・入出金・ゲームラインナップ・KYC・サポート等、プレイ前に知るべきポイントを網羅的にご案内します。",
    ],
    ctas: [
      {
        text: "Queen Casino を試す（公式）",
        href: "https://go.japanesecasino.com/go/queen-casino:queen-casino",
      },
      {
        text: "入金不要ボーナスを受け取る",
        href: "https://www.japanesecasino.com/offers/shinqueen-no-deposit-bonus",
      },
    ],
  },
  games: [
    "ライブバカラ各種テーブル（複数バリアント）",
    "ライブカジノ（ルーレット、ブラックジャック、ポーカー等）約180種",
    "スロット（約2,500～3,000種）",
    "パチンコ・パチスロ（300種以上）",
    "ゲームショー（Crazy Time 等）",
    "スポーツベット（Classic / Premier の2種類）",
  ],
  features: [
    "段階式の入金不要ボーナス（KYC連動）",
    "初回〜複数回の入金ボーナスと短期フリースピンの組合せ",
    "VIPロイヤルティクラブ（多段階ランク／累計ベットで昇格）",
    "仮想通貨と電子ウォレットを含む多様な決済手段",
    "日本語ネイティブサポートと多チャネル運用（LINE/電話/チャット）",
  ],
  security: [
    "ライセンス：Antillephone（キュラソー）表記",
    "運営：ZEN ESTRATEGA BV Limited（運営・決済分離の構成あり）",
    "通信保護：128bit SSL 暗号化採用",
    "ゲーム公平性：RNG採用、iTech‑Labs 等第三者認証の案内あり",
    "KYC：出金時に身分証・住所確認等の提出が必須となるケースあり",
  ],
  responsiblePlay: [
    "入金制限、損失制限、賭け制限、セッション制限、自己排除、リアリティチェック等のツールを提供",
    "休眠口座ポリシーに注意（12〜18ヶ月の非アクティブで残高没収の可能性あり）",
  ],
  complaintStats: [
    "SNSやユーザーレビューで高速出金を評価する声多数",
    "一方でVIP基準やリベート改定に関する不満が一部見られる",
    "Casino Guru による低評価や警告がある場合が報告されているため注意が必要（検証推奨）",
  ],
  awards: [],
  restrictedCountries: [],
  userConcerns: [
    "入金不要ボーナスの出金上限（ボーナス額の5倍）や短い有効期限で消化が難しい点",
    "休眠口座ポリシーによる残高没収リスク",
    "VIP到達条件の高さとそれに伴う期待の不一致",
    "サービスの地域制限や決済方法の可否に関する事前確認が必要",
  ],
  summary: [
    "Queen Casino はライブバカラを軸に、日本人向けに最適化されたサービスを提供するオンラインカジノです。入金不要ボーナスや多段階ウェルカム、豪華なVIP特典を擁し、出金の速さや日本語サポートが魅力です。",
    "一方でボーナス規約の複雑さ、休眠口座の規約、VIP条件の高さ、そして一部外部評価での懸念点など、利用前に規約と公式告知を十分確認する必要があります。",
    "CasinoTsu は、初めて利用される方は少額で試し、KYC書類を事前に準備した上で利用することを推奨します。",
  ],
  extraLinks: [
    {
      text: "Queen Casino 公式（CasinoTsu経由）",
      href: "https://go.japanesecasino.com/go/queen-casino:queen-casino",
    },
    {
      text: "Queen Casino 限定オファー",
      href: "https://www.japanesecasino.com/offers/shinqueen-no-deposit-bonus",
    },
    {
      text: "CasinoTsu ボーナスガイド",
      href: "https://www.japanesecasino.com/guides/wagering-requirements",
    },
    {
      text: "Cookies Policy",
      href: "https://www.japanesecasino.com/about/cookie-policy",
    },
  ],
  faq: [
    {
      question: "入金不要ボーナスはどうやって受け取るの？",
      answer:
        "アカウント登録後にKYCレベル1〜3を順に完了することで段階的に受け取れます。登録情報入力で2USDT+10FS、身分証提出で36USDT+28FS、住所確認で50USDT+50FS。受取にはボーナスコードや携帯認証が必要な場合があります。",
    },
    {
      question: "フリースピン勝利金の賭け条件は？",
      answer:
        "フリースピンの勝利金には20倍の賭け条件が適用されます。フリースピンの有効期限は3日間など短めの設定が多いので早めの消化が必要です。",
    },
    {
      question: "出金前に本人確認は必要ですか？",
      answer:
        "はい。出金申請時にはKYC（身分証、住所確認、決済方法の証明等）の提出が一般的に必要です。事前に書類を準備しておくことを推奨します。",
    },
    {
      question: "休眠アカウントの扱いは？",
      answer:
        "12〜18ヶ月間アカウントを放置すると残高が没収される可能性があります。長期不使用に注意し、必要なら自己排除等の手続きを行ってください。",
    },
  ],
  cta: {
    text: "Queen Casino を試す",
    href: "https://go.japanesecasino.com/go/queen-casino:queen-casino?referrer_path=%2Freviews%2Fqueen-casino",
  },
  textBlocks: [],
};
