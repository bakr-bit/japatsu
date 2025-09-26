import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewCaibo: ReviewPageContent = {
  hero: {
    title: "Caibo Casino レビュー",
    subheading: "最大 17,500 USDT + 175 フリースピン",
    description: "【重要】Caibo Casinoは現在閉鎖されているか、技術的な問題により新規プレイヤーの受付を停止している可能性が非常に高いです。このレビューは過去の情報として記録されています。",
    score: 3.8,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 73,
        note: "新興カジノで知名度は発展途上。高額ボーナスが仮想通貨ユーザーの注目を集めていた。",
      },
      {
        label: "規約",
        percent: 84,
        note: "破格のウェルカムボーナスが魅力的だが、賭け条件45倍は厳しめ。デイリーキャッシュバックも提供。",
      },
      {
        label: "操作性",
        percent: 71,
        note: "モバイル対応はしているが、ゲームの検索機能に難があり、目的のゲームを探しにくい。",
      },
      {
        label: "サポート",
        percent: 74,
        note: "24時間365日対応は良いが、日本語は自動翻訳。質は高いが、意思疎通が難しい場合がある。",
      },
    ],
    highlights: [
      "仮想通貨に特化したオンラインカジノ",
      "最大17,500 USDTの超高額ウェルカムボーナス",
      "最大20%のデイリーキャッシュバック",
      "24時間365日のチャットサポート",
    ],
    watchouts: [
      "閉鎖、または新規受付を停止している可能性が高い",
      "出金遅延や賞金没収の苦情が多数報告されている",
      "CasinoGuruから低評価（4.8/10）で「避けるべき」と推奨",
      "不公平な規約（低リスクベットで賞金没収の可能性）が存在する",
      "賭け条件が45倍と厳しい",
    ],
  },
  payments: {
    featured: [
      {
        name: "Tether (USDT)",
        icon: "/assets/payments/tether.svg",
        href: "https://casinotsu.com/payment/usdt",
        badge: "仮想通貨",
        note: "カジノの基軸通貨でボーナスも豊富",
      },
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "人気",
        note: "最も有名な暗号資産",
      },
      {
        name: "Ethereum",
        icon: "/assets/payments/ethereum.svg",
        href: "https://casinotsu.com/payment/ethereum",
        badge: "仮想通貨",
        note: "主要なアルトコインとして広く利用",
      },
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://casinotsu.com/payment/visa",
        badge: "入金のみ",
        note: "一部地域で法定通貨入金に対応",
      },
      {
        name: "銀行送金",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://casinotsu.com/payment/bank-transfer",
        badge: "出金のみ",
        note: "法定通貨での出金オプション",
      },
    ],
    deposits: [
      { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg" },
      { name: "Bitcoin Cash (BCH)" },
      { name: "Litecoin (LTC)" },
      { name: "Dogecoin (DOGE)" },
      { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg" },
      { name: "Tether ERC20 (USDT)", icon: "/assets/payments/tether.svg" },
      { name: "Tether TRC20 (USDT)", icon: "/assets/payments/tether.svg" },
      { name: "Tron (TRX)" },
      { name: "Ripple (XRP)" },
      { name: "Cardano (ADA)" },
      { name: "Binance Coin (BNB)" },
      { name: "Dai (DAI)" },
      { name: "Toncoin (TON)" },
      { name: "Visa", icon: "/assets/payments/visa.svg" },
      { name: "MasterCard", icon: "/assets/payments/mastercard.svg" },
      { name: "Google Pay" },
    ],
    withdrawals: [
      { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg" },
      { name: "Bitcoin Cash (BCH)" },
      { name: "Litecoin (LTC)" },
      { name: "Dogecoin (DOGE)" },
      { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg" },
      { name: "Tether ERC20 (USDT)", icon: "/assets/payments/tether.svg" },
      { name: "Tether TRC20 (USDT)", icon: "/assets/payments/tether.svg" },
      { name: "Tron (TRX)" },
      { name: "Ripple (XRP)" },
      { name: "Cardano (ADA)" },
      { name: "Binance Coin (BNB)" },
      { name: "Dai (DAI)" },
      { name: "Toncoin (TON)" },
      { name: "Bank Transfer", icon: "/assets/payments/bank-transfer.svg" },
    ],
    notes: [
      "入出金は14種類の仮想通貨が中心です。Caibo自体は手数料無料ですが、ネットワーク手数料がかかる場合があります。",
      "出金上限額は1日€5,000、1ヶ月€50,000相当です。",
      "出金には、入金額の最低1倍のベットが必要です。満たない場合、8%の手数料が課される可能性があります。",
      "アカウント残高が総入金額の10倍を超えると、出金上限が€5,000に制限される規約があります。",
    ],
  },
  bonuses: {
    overview:
      "Caibo Casinoは、特に新規プレイヤー向けに非常に高額なウェルカムボーナスパッケージを提供していました。既存プレイヤーもデイリーキャッシュバックなどの恩恵を受けられました。",
    noDeposit: "明確な入金不要ボーナスの提供はありませんでした。",
    extraSpins: {
      summary:
        "ウェルカムパッケージの一部として、初回から3回目の入金まで合計で最大225回のフリースピンが提供されていました。",
      schedule: [
        "初回入金: 100回 (Aztec Gems)",
        "2回目入金: 75回 (Lion Gems)",
        "3回目入金: 50回",
      ],
      warning: "フリースピンの有効期限は7日間と短めでした。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "100%", cap: "10,000 USDT", code: "CAI100 (任意)" },
      { depositNumber: "2回目", percent: "75%", cap: "7,500 USDT", code: "不要" },
      { depositNumber: "3回目", percent: "50%", cap: "5,000 USDT", code: "不要" },
    ],
    conditions: [
      "ボーナスの賭け条件は45倍です。",
      "最低入金額は10 USDTです。",
      "ボーナスは入金前にプロフィールページで有効化する必要がありました。",
      "ボーナスマネーの有効期限は1ヶ月間です。",
    ],
    prohibitedGames: [
      "規約には「低リスクプレイでも賞金が没収される可能性がある」という項目があり、特定のゲームだけでなくプレイスタイルも制限されるリスクがありました。",
    ],
  },
  offers: [
    {
      title: "デイリーキャッシュバック (最大20%)",
      description: "3回目の入金以降、前日の損失額に応じて最大20%が毎日キャッシュバックされました。キャッシュバックの賭け条件は5倍です。",
      highlight: "損失額に応じて毎日最大10,000 USDT還元",
    },
    {
      title: "ウィークリースロット・オブ・ザ・ウィーク",
      description: "毎週指定されたスロットで利用できるフリースピンがもらえるプロモーションが開催されていました。",
    },
    {
      title: "トーナメント",
      description: "定期的にトーナメントが開催され、プレイヤーは賞金をかけて競い合うことができました。",
    },
  ],
  facts: [
    { label: "名称", value: "Caibo Casino" },
    { label: "ローンチ", value: "2023年10月" },
    { label: "運営会社", value: "MIBS N.V." },
    { label: "ライセンス", value: "Gaming Curacao, Anjouan Gaming Licence" },
    { label: "VIPプログラム", value: "✅ (非公開・招待制)" },
    { label: "対応言語", value: "日本語（自動翻訳）、英語" },
    { label: "対応通貨", value: "各種仮想通貨" },
    {
      label: "ゲームタイプ",
      value: "スロット, ライブカジノ, ゲームショー, クラッシュゲーム, スポーツベット",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://casinotsu.com/providers/evolution">Evolution</Link>, <Link href="https://casinotsu.com/providers/play-n-go">Play’n GO</Link>, <Link href="https://casinotsu.com/providers/big-time-gaming">Big Time Gaming</Link>, <Link href="https://casinotsu.com/providers/spribe">Spribe</Link>, Push Gaming, Ezugi, Elk Studios, Pocket Games Soft, Skywind Groupなど合計78社
        </span>
      ),
    },
    { label: "最小入金額", value: "仮想通貨により異なる (例: 2 USDT)" },
    { label: "最小出金額", value: "仮想通貨により異なる (例: 10 USDT)" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@caibo.fun">support@caibo.fun</Link> },
    { label: "ライブチャット", value: "24時間365日対応" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "Caibo Casinoは2023年10月にオープンした、仮想通貨に特化したオンラインカジノです。遊び心のあるサイトデザインと、最大17,500 USDTという非常に高額なウェルカムボーナスで注目を集めました。",
      "しかし、その魅力的なオファーとは裏腹に、運営開始から間もなくして深刻な問題が浮上しました。CasinoguruやAskGamblersなどの信頼できる第三者機関は、このカジノが『閉鎖された』と報告しています。",
      "CasinoTsuでは、プレイヤーの安全を第一に考え、このカジノの危険性について詳しく解説します。このレビューは過去の記録として、注意喚起を目的としています。",
    ],
    ctas: [
      { text: "🌟 CasinoTsu推薦の安全な仮想通貨カジノを見る", href: "https://casinotsu.com/crypto" },
    ],
  },
  games: [
    "サポートによると約3,500種類のスロットゲームが提供されており、新作も随時追加されていました。Big Time Gaming社の『Bonanza Falls』のような人気シリーズもプレイ可能でした。",
    "ライブカジノはEvolutionやPragmatic Playなどの主要プロバイダーが参加。さらに、Spribe社の『Aviator』をはじめとする人気のクラッシュゲームや、スポーツベットも提供しており、ゲームの多様性は豊富でした。",
  ],
  features: [
    "アカウント開設がメールアドレス、ユーザー名、パスワードの入力だけで完了する手軽さが特徴でした。",
    "サイト全体がUSTDのテーマカラーである緑を基調とし、可愛い猫のキャラクター『Cai（カイ）』が案内するなど、ユニークな世界観を持っていました。",
  ],
  editorial: {
    author: "CasinoTsu編集部",
    profileHref: "/authors",
    hook: "超高額ボーナスという甘い蜜の裏には、深刻な安全性の問題が隠されていました。",
    theGoodStuff: "最大17,500 USDTのウェルカムボーナスと最大20%のデイリーキャッシュバックは、特にハイローラーにとって破格のオファーでした。78社ものプロバイダーと提携し、ゲームの選択肢が広かった点も評価できます。",
    theHeadsUp: "しかし、それら全ての長所を無に帰すほどの重大な欠陥がありました。多数報告されている出金遅延や賞金没収、そしてそれらの苦情に対する『ノーリアクションポリシー』は、カジノとしての信頼性を根本から覆すものです。",
    finalThought: "結局、多くのプレイヤーに損害を与えたまま閉鎖された可能性が高いです。Caibo Casinoの事例は、魅力的なボーナスだけに惑わされず、カジノの評判や安全性を徹底的に調査することの重要性を教えてくれる教訓となりました。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "CasinoTsuがCaibo Casinoをレビューするにあたり、まず目に飛び込んできたのはその圧倒的なウェルカムボーナスでした。最大17,500 USDTという数字は、仮想通貨カジノの中でも群を抜いており、多くのプレイヤー、特にハイローラーの関心を引くには十分すぎるほどのインパクトを持っていました。しかし、『正確さが第一。興奮はその次』を信条とする我々は、その魅力的な数字の裏にある現実を調査する必要がありました。",
      "調査を進める中で明らかになったのは、深刻な信頼性の欠如です。運営開始からわずかな期間で、プレイヤーからは数週間から数ヶ月に及ぶ出金遅延、さらには賞金の理不尽な没収といった苦情が多数寄せられました。最も問題なのは、これらの重大な苦情に対してカジノ側が一切反応しないという『ノーリアクションポリシー』が確認されている点です。これは、プレイヤー保護を完全に放棄しているに等しい行為です。",
      "CasinoGuruが安全性指数を4.8/10という低評価にし、『避けるべき』と強く警告しているのも当然と言えます。ライセンスは保有しているものの、実質的な運営はプレイヤーの資金を危険に晒すものでした。",
      "結論として、Caibo Casinoは、高額ボーナスでプレイヤーを誘引し、その資金を不当に扱う可能性が極めて高い、危険なプラットフォームであったと評価せざるを得ません。現在、サイトが閉鎖されている可能性が高いという事実は、その無責任な運営が行き着いた必然的な結末かもしれません。プレイヤーの皆様には、このようなカジノの存在を認識し、常に信頼できる情報源を元に安全なカジノ選びをされることを強く推奨します。",
    ],
  },
  security: [
    "キュラソーおよびコモロのライセンスを取得していましたが、ライセンスの監督が機能していたかには疑問が残ります。",
    "RNGによるゲームの公平性はプロバイダー側で保証されていました。",
    "プレイヤーからの多数の苦情により、カジノ全体の安全性と信頼性は極めて低いと評価されています。",
  ],
  responsiblePlay: [
    "自己排除: 6ヶ月から5年の期間設定が可能。",
    "各種制限ツール: 入金、ベット、損失、セッション時間に対する制限を設定可能。",
    "クールダウン/タイムアウト: 短期間のプレイ中断が可能。",
    "自己診断テストやリアリティチェック機能も提供されていました。",
    "公的な自己排除登録制度には参加していませんでした。",
  ],
  complaintStats: [],
  awards: [],
  restrictedCountries: [],
  userConcerns: [
    "数週間から数ヶ月にわたる出金遅延",
    "賞金の没収",
    "カジノ側が苦情に全く反応しない『ノーリアクションポリシー』",
    "『低リスクプレイで賞金が没収される可能性がある』という不公平な規約",
  ],
  summary: [
    "【閉鎖】現在、新規受付停止または閉鎖されている可能性が非常に高いです。",
    "超高額のウェルカムボーナスが特徴でしたが、その裏で深刻な安全性の問題が報告されていました。",
    "出金遅延、賞金没収、苦情への無対応など、プレイヤーにとって極めてリスクの高いカジノでした。",
    "CasinoTsuとしては、絶対に推奨できないプラットフォームです。",
  ],
  extraLinks: [
    { text: "👑 VIPプログラムの仕組みを徹底解説！", href: "https://casinotsu.com/guides/vip-program" },
    { text: "💨 出金が早いカジノはどこ？ランキングをチェック", href: "https://casinotsu.com/instant-withdrawal-casinos" },
  ],
  faq: [
    {
      question: "カイボのキャラクターの名前は何ですか？",
      answer: "可愛い猫のキャラクターはCai（カイ）という名前でした。",
    },
    {
      question: "カイボで対応していた決済方法は？",
      answer: "主に14種類の仮想通貨に対応していましたが、一部地域ではVisa、MasterCard、Google Payでの入金や銀行送金での出金も可能でした。",
    },
    {
      question: "カイボでライブカジノやスポーツベットも遊べましたか？",
      answer: "はい、スロットやクラッシュゲームの他に、ライブカジノやスポーツベットも提供されていました。",
    },
  ],
  cta: {
    text: "CasinoTsuが推薦する、安全で信頼できる仮想通貨カジノを探す",
    href: "https://casinotsu.com/crypto",
  },
};