import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewWazamba: ReviewPageContent = {
  hero: {
    title: "Wazamba（ワザンバ）2025年最新評価｜各ボーナス・入出金・安全性まで全解説",
    subheading: "RPG的な育成要素×5,000〜10,000超のゲーム数／スポーツベット対応",
    description:
      "当編集部は、Wazambaのライセンス・ボーナス・ゲーム・決済・サポートを網羅的に検証。RPG風のゲーミフィケーション、分離型に類似した独自の賭け条件進行、対応通貨・入出金手段、サポート実態、責任あるプレイ情報まで、実利用時の留意点を含めて整理しました。",
    score: 4.0,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 75,
        note:
          "日本での知名度は限定的だが、ゲーム数とキャンペーン量で一定の支持。文体・表現は客観的に再整理。",
      },
      {
        label: "規約",
        percent: 78,
        note:
          "最大$1,200のウェルカム（分離型系の進行で30倍）。一部ボーナスで最大80倍となる場合があり要注意。",
      },
      {
        label: "操作性",
        percent: 89,
        note:
          "視認性・カテゴリ検索は良好。モバイル最適化は良いが、専用アプリなし／一部端末で読み込み遅延の報告あり。",
      },
      {
        label: "サポート",
        percent: 76,
        note:
          "24時間ライブチャットとメール対応。日本語オペレーターに接続しづらい時間帯があり、返信が定型的な事例も。",
      },
    ],
    highlights: [
      "RPG風の育成・アバター収集・アチーブメントなどゲーミフィケーションが豊富",
      "5,000〜10,000超の幅広いゲームラインナップ＋スポーツベット対応",
      "分離型に類似した賭け条件進行でリアルマネー賭けでもW/Rが減算",
      "主要ウォレットと仮想通貨に広く対応（合計11種）",
    ],
    watchouts: [
      "一部ボーナスで賭け条件が最大80倍に達する場合あり（規約要確認）",
      "VIP上限・出金上限の段階設定あり／KYCに時間を要する報告",
      "責任あるギャンブルの制限系ツール（入金/損失制限など）が未提供",
    ],
    avatarSrc: "/assets/casino/wazamba.png",
    avatarAlt: "Wazambaのロゴ",
  },

  payments: {
    featured: [
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://www.japanesecasino.com/payment/visa",
        badge: "最小 $10",
        note: "即時反映。出金には非対応。",
      },
      {
        name: "MasterCard",
        icon: "/assets/payments/mastercard.svg",
        href: "https://www.japanesecasino.com/payment/mastercard",
        badge: "主要カード",
        note: "入金のみ対応（日本向け）。",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://www.japanesecasino.com/payment/payz",
        badge: "Eウォレット",
        note: "入出金に対応。概ね24時間以内目安。",
      },
      {
        name: "Vega Wallet",
        icon: "/assets/payments/vega-wallet.svg",
        href: "https://www.japanesecasino.com/payment/vega-wallet",
        badge: "人気",
        note: "日本ユーザーでの利用実績多数。",
      },
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://www.japanesecasino.com/payment/bitcoin",
        badge: "暗号資産",
        note: "最速2〜3時間での出金事例（承認後）。",
      },
    ],
    deposits: [
      { name: "American Express", icon: "/assets/payments/american-express.svg" },
      {
        name: "AstroPay",
        icon: "/assets/payments/astropay.svg",
        href: "https://www.japanesecasino.com/payment/astropay",
      },
      {
        name: "銀行振込（Bank Transfer）",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://www.japanesecasino.com/payment/bank-transfer",
      },
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://www.japanesecasino.com/payment/bitcoin",
      },
      { name: "Bitcoin Cash", icon: "/assets/payments/bitcoin-cash.svg" },
      {
        name: "Ethereum",
        icon: "/assets/payments/ethereum.svg",
        href: "https://www.japanesecasino.com/payment/ethereum",
      },
      { name: "Litecoin", icon: "/assets/payments/litecoin.svg" },
      {
        name: "MasterCard",
        icon: "/assets/payments/mastercard.svg",
        href: "https://www.japanesecasino.com/payment/mastercard",
      },
      {
        name: "MuchBetter",
        icon: "/assets/payments/muchbetter.svg",
        href: "https://www.japanesecasino.com/payment/muchbetter",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://www.japanesecasino.com/payment/payz",
      },
      { name: "Ripple (XRP)", icon: "/assets/payments/ripple.svg" },
      {
        name: "Sticpay",
        icon: "/assets/payments/sticpay.svg",
        href: "https://www.japanesecasino.com/payment/sticpay",
      },
      { name: "Tether (USDT)", icon: "/assets/payments/tether.svg" },
      {
        name: "Vega Wallet",
        icon: "/assets/payments/vega-wallet.svg",
        href: "https://www.japanesecasino.com/payment/vega-wallet",
      },
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://www.japanesecasino.com/payment/visa",
      },
      // 追加入金手段（本文言及）
      { name: "Interac" },
      { name: "Neosurf" },
      { name: "Flexepin" },
      { name: "Jeton" },
      { name: "eZeeWallet" },
      { name: "Paysafecard" },
      { name: "Neteller" },
      { name: "Siru Mobile" },
      { name: "Inovapay" },
      { name: "Pix" },
      { name: "Boleto" },
    ],
    withdrawals: [
      // 本文では詳細テーブルは入金中心のため、出金可否/上限・時間を notes に集約
      { name: "Payz", icon: "/assets/payments/payz.svg" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg" },
      { name: "Sticpay", icon: "/assets/payments/sticpay.svg" },
      { name: "MiFinity" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg" },
      { name: "Litecoin", icon: "/assets/payments/litecoin.svg" },
      { name: "Ripple (XRP)", icon: "/assets/payments/ripple.svg" },
      { name: "Bitcoin Cash", icon: "/assets/payments/bitcoin-cash.svg" },
      { name: "Tether (USDT)", icon: "/assets/payments/tether.svg" },
      { name: "USD Coin (USDC)" },
      { name: "DAI" },
      { name: "Dogecoin (DOGE)" },
      { name: "Cardano (ADA)" },
      { name: "Binance Coin (BNB)" },
    ],
    notes: [
      "最小入金額は概ね$10。入金は即時反映が基本。",
      "出金時間目安：暗号資産 最速2〜3時間／電子ウォレット 1〜3日／カード 3〜5日。初回出金時はKYCで最大72時間の保留が発生する場合あり。",
      "出金手数料は原則無料。",
      "上限例：BTCは最低$60、MiFinityは$2,500、その他多くの方法で$5,000が一般的に設定。",
      "本文言及の追加入金手段（Interac, Neosurf, Flexepin, Jeton, eZeeWallet, Paysafecard, Neteller, Siru Mobile, Inovapay, Pix, Boleto）にも対応。",
    ],
  },

  bonuses: {
    overview:
      "ウェルカム（最大$1,200／分離型系の進行で賭け条件30倍）やSNSフォローボーナス、日次の“ボーナスクラブ”など、常時プロモーションが多い構成です。スポーツベット側の初回入金特典（最大$100の100%）も選択可能（カジノ用とどちらか一方）。",
    noDeposit:
      "公式SNSフォロー特典：Twitter（@wazamba_casino）とLINE（@765ztoqa）の連携で『Big Bass Splash』の15フリースピン。過去に1回以上の入金履歴が必要。",
    extraSpins: {
      summary:
        "SNSフォロー特典のフリースピンは入金不要タイプだが、アカウントに入金履歴が1回以上あることが条件。獲得後7日以内に利用。",
      schedule: [
        "LINEのトークでTwitter IDとWazambaユーザーネームを送付→自動付与",
        "FS有効期限：7日以内",
        "FSからの勝利金の賭け条件：40倍／最大勝利$80／最大ベット$5",
      ],
      warning: "他のボーナスと併用不可。賭け条件はボーナス有効化後10日以内に消化。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "100%", cap: "$500", code: "" },
      { depositNumber: "2回目", percent: "50%", cap: "$400", code: "" },
      { depositNumber: "3回目", percent: "75%", cap: "$300", code: "" },
    ],
    conditions: [
      "ウェルカムは分離型に類似：リアルマネー賭けでも賭け条件が減算される独自仕様。",
      "賭け条件：原則30倍（例：ボーナス$30なら総賭け$900）。一部ボーナスは最大80倍（入金40倍＋ボーナス40倍）の場合あり。",
      "ボーナス獲得の最低入金$20、ボーナス中の最大ベット$5、賭け条件は有効化から10日以内に消化。",
      "ボーナス請求前/有効化後の出金申請でボーナス資格は失効。",
      "賭け条件寄与率：スロット/ビンゴ/スクラッチ/キノ 100%、テーブル/カード/ビデオポーカー/ライブ（バカラ除く）10%、バカラ0%。ジャックポットスロットは対象外。",
    ],
    prohibitedGames: [],
  },

  offers: [
    {
      title: "ボーナスクラブ（毎日初回入金で1ポイント）",
      description:
        "クレーンゲーム風の“ボーナスクラブ”に挑戦可能。当選で各種ボーナスを獲得。",
      highlight: "ウェルカム時に1回ぶんの無料プレイ付与。",
    },
    {
      title: "スポーツ初回入金100%（最大$100）",
      description:
        "スポーツベット派はカジノ用ウェルカムと排他選択。リロードやキャッシュバック等のスポーツ側プロモも常設。",
    },
  ],

  facts: [
    { label: "名称", value: "Wazamba" },
    { label: "ローンチ", value: "2019" },
    {
      label: "ライセンス",
      value: "Antillephone N.V.（Curaçao）, Anjouan Gaming Board, PAGCOR",
    },
    { label: "運営会社", value: "Rabidi N.V.（関連: Probe Investments LTD）" },
    { label: "VIPプログラム", value: "✅（5段階／日本人VIPマネージャーに言及）" },
    {
      label: "ゲームタイプ",
      value:
        "Baccarat, Blackjack, Craps, Game Shows, Live Casino, Poker, Roulette, Slots, Arcade & Instant Win（スクラッチ、キノ、クラッシュ、ダイス、ビンゴ、マインズ、タワーズ）",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://www.japanesecasino.com/providers/betsoft">BetSoft</Link>,{" "}
          <Link href="https://www.japanesecasino.com/providers/big-time-gaming">Big Time Gaming</Link>,{" "}
          <Link href="https://www.japanesecasino.com/providers/elk-studios">Elk Studios</Link>,{" "}
          <Link href="https://www.japanesecasino.com/providers/fantasma-games">Fantasma</Link>,{" "}
          <Link href="https://www.japanesecasino.com/providers/golden-hero-games">Golden Hero</Link>,{" "}
          <Link href="https://www.japanesecasino.com/providers/habanero">Habanero</Link>,{" "}
          <Link href="https://www.japanesecasino.com/providers/microgaming">Microgaming</Link>,{" "}
          <Link href="https://www.japanesecasino.com/providers/netent">NetEnt</Link>,{" "}
          <Link href="https://www.japanesecasino.com/providers/playson">Playson</Link>,{" "}
          <Link href="https://www.japanesecasino.com/providers/play-n-go">Play’n GO</Link>,{" "}
          <Link href="https://www.japanesecasino.com/providers/pragmatic-play">Pragmatic Play</Link>,{" "}
          <Link href="https://www.japanesecasino.com/providers/quickspin">Quickspin</Link>,{" "}
          <Link href="https://www.japanesecasino.com/providers/red-tiger">Red Tiger</Link>,{" "}
          <Link href="https://www.japanesecasino.com/providers/relax-gaming">Relax</Link>, Slingshot Studios,{" "}
          <Link href="https://www.japanesecasino.com/providers/yggdrasil">Yggdrasil</Link>,{" "}
          <strong>Playtech, Nolimit City, Wazdan, Thunderkick, Hacksaw Gaming, SmartSoft Gaming, Ezugi</strong>
        </span>
      ),
    },
    { label: "最小入金額", value: "$10" },
    { label: "最小出金額", value: "$10（方法により異なる）" },
    { label: "電話サポート", value: "✅（LINE経由の要望ベース）" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@wazamba.com">support@wazamba.com</Link> },
    { label: "ライブチャット", value: "24時間対応（日本語接続に待ち時間あり）" },
  ],

  intro: {
    paragraphs: [
      "Wazambaは、RPG風のキャラクター収集やアチーブメントを備えたゲーミフィケーション重視のオンラインカジノです。カジノとスポーツベットの両方を1アカウントで利用可能で、日本のユーザーがよく使うウォレットや暗号資産にも幅広く対応しています。",
      "本稿は、宣伝的表現や絵文字を整理し、客観・簡潔・信頼性を重視したトーンで全情報を再構成しています。重要な規約やKYC、上限、賭け条件の例外など、実務上の注意点も明示しています。",
    ],
    ctas: [
      { text: "賭け条件の基礎を学ぶ", href: "https://www.japanesecasino.com/guides/wagering-requirements" },
      { text: "カジノライセンスの信頼性とは", href: "https://www.japanesecasino.com/info/casino-license" },
      { text: "カジノ用語辞典", href: "https://www.japanesecasino.com/guides/glossary" },
    ],
  },

  games: [
    "スロット／ライブカジノ／テーブル（BJ・ルーレット・ポーカー等）／ゲームショーのほか、クラッシュ・ダイス・スクラッチ・キノ・ビンゴ・マインズ・タワーズなどのインスタント系を網羅。",
    "スポーツベットは30種超（競馬・eスポーツ・ライブイベントを含む）。一部スポーツページに未翻訳箇所あり。",
    "独占タイトル（Wazamba Roulette、エラゲーム制作のWazambaテーマ機種）を提供。",
  ],

  features: [
    "RPG的な“ヒーロー”選択、アバターやマスク収集、ショップ購入など継続動機を設計。",
    "プロバイダー別・カテゴリ別の検索動線が明快で、目的ゲームへ到達しやすいUI。",
    "“ボーナスクラブ”やトーナメント、アチーブメントの常時開催で回遊性を担保。",
  ],

  editorial: {
    author: "当編集部",
    profileHref: "/authors/rina-okabe",
    hook:
      "独自の賭け条件進行は一見メリットだが、規約の例外（最大80倍など）とKYC、出金上限を理解して運用するのが前提です。",
    theGoodStuff:
      "ゲーム数・決済対応・ゲーミフィケーションが強み。日次ポイント“ボーナスクラブ”や独占ルーレットなど付加価値も明確。",
    theHeadsUp:
      "責任あるギャンブルの制限系ツールが未提供。日本語接続の待ち時間や定型的回答、VIP透明性への不満も報告あり。",
    finalThought:
      "RPG調の体験を求める層に好適。一方で規約・上限・KYCの運用を把握し、自己管理前提で活用すべきブランドです。",
  },

  longform: {
    kicker: "レビューの骨子",
    title: "ライセンス／規約／決済／体験設計を多面的に評価",
    paragraphs: [
      "ライセンスはAntillephone（Curaçao）に加え、Anjouan、PAGCORも明記。第三者監査やRNGの導入を前提とする運営体制で、形式面の安全性要件は満たしています。",
      "ウェルカムは最大$1,200、原則30倍。リアルマネー賭けでも賭け条件が減る進行は現金化確率をわずかに押し上げる設計ですが、例外的に最大80倍となるボーナスも存在するため、オファー単位での規約確認が必須です。",
      "入出金はカード・主要ウォレット・暗号資産に広く対応。入金即時／出金は手段別に2〜5日レンジ。KYC初回時は最大72時間の保留を見込み、上限設定（手段別・VIP別）にも留意が必要です。",
      "UIは明快で、RPG風の収集や日次ポイント、トーナメント等で体験を拡張。スポーツ面の未翻訳箇所や、モバイル読み込みの遅延報告など細部の荒さは残ります。",
      "総じて“楽しませる仕掛け”は強い一方、セルフリミット系の責任あるプレイツールが未提供であるため、自己管理と資金規律を重視するユーザーに推奨します。",
    ],
  },

  security: [
    "SSL/TLSで通信・個人情報を保護",
    "RNG（乱数発生器）でゲームの公平性を担保",
    "第三者監査に基づく運用（ライセンス要件）",
  ],

  responsiblePlay: [
    "自己診断テスト／自己排除（一定期間・恒久）",
    "支援団体への導線を案内",
    "（現時点で未提供）入金/賭け金/損失/時間制限、クールダウン等のアカウント内ツール",
    "自己管理（予算・時間）の徹底を推奨",
  ],

  complaintStats: ["AskGamblers経由の苦情への平均一次応答は約2日とされる記載あり"],

  awards: ["SBC Awards 2020の受賞（41社の一社として選出）"],

  restrictedCountries: [
    "アメリカ合衆国",
    "イギリス",
    "オランダ",
    "カナダ・オンタリオ州（同国の他地域は可）",
  ],

  userConcerns: [
    "一部ボーナスで賭け条件が高い（最大80倍）",
    "日本語オペレーター接続待ち・定型回答の指摘",
    "ゲームフィルタリングの改善余地",
    "モバイルでの読み込み遅延報告",
    "VIPプログラムの透明性に関する懸念",
    "KYC認証に時間がかかる事例",
  ],

  summary: [
    "RPG的な要素で継続動機を設計し、ゲーム数・決済対応・独占コンテンツで差別化。",
    "一方で規約の例外（最大80倍）や責任あるプレイツールの不足、KYC/上限の運用が要点。",
    "自己規律前提で“遊びの幅”を求めるユーザーに適した選択肢。",
  ],

  extraLinks: [
    {
      text: "ライセンスの基礎知識を確認する",
      href: "https://www.japanesecasino.com/info/casino-license",
    },
    {
      text: "🔰 賭け条件とは？やさしく解説",
      href: "https://www.japanesecasino.com/guides/wagering-requirements",
    },
    {
      text: "用語集（初心者向け）",
      href: "https://www.japanesecasino.com/guides/glossary",
    },
  ],

  faq: [
    {
      question: "Wazambaでスポーツベットはできますか？",
      answer: "はい。30種類以上のスポーツ（競馬・eスポーツ・ライブイベント含む）に対応しています。",
    },
    {
      question: "カジノとスポーツのウェルカムを同時に受け取れますか？",
      answer:
        "いいえ。カジノ用またはスポーツ用のいずれかを選択する必要があります。登録時に希望する方を選んでください。",
    },
    {
      question: "KYC（本人確認）はいつ必要ですか？",
      answer:
        "初回出金時に必要となるのが一般的です。身分証・住所証明・入金手段の証憑を提出します。審査に時間がかかる場合があります。",
    },
    {
      question: "責任あるプレイのための制限ツールはありますか？",
      answer:
        "自己排除と自己診断、外部支援へのリンクは用意されていますが、入金/損失/賭け/時間制限やクールダウン機能は提供されていません。",
    },
  ],

  cta: {
    text: "最新プロモーションと詳細規約をWazambaで確認する",
    href: "https://www.japanesecasino.com/reviews/wazamba#main-content",
  },
};