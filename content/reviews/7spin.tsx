import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const review7Spin: ReviewPageContent = {
  hero: {
    title: "7SPIN (7スピンカジノ) レビュー",
    subheading: "$40ボーナス (賭け条件5倍)",
    description: "7スピンカジノはCasinoTsuと提携していません。登録とプレイは自己責任でお願いします。このレビューはCasino.guruからの警告を含みます。",
    score: 3.9,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 74,
        note: "2023年オープンの新しいカジノで知名度は低いが、豪華なリベートボーナスとVIPプログラムに将来性あり。",
      },
      {
        label: "規約",
        percent: 82,
        note: "リベートやキャッシュバックの賭け条件が1倍と非常に低く、プレイヤーにとって魅力的。",
      },
      {
        label: "操作性",
        percent: 74,
        note: "シンプルで使いやすいプラットフォーム。サイトの動作も軽快で快適なプレイが可能。",
      },
      {
        label: "サポート",
        percent: 89,
        note: "24時間対応の日本語サポートは非常に心強く、X(旧Twitter)でも迅速な対応が受けられる。",
      },
    ],
    highlights: [
      "低い賭け条件で提供されるボーナス",
      "毎日もらえるリベートボーナス (スロット & ライブカジノ)",
      "充実したVIPプログラム",
      "24時間対応の日本語サポート",
    ],
    watchouts: [
      "Casino.guruから『避けるべきカジノ』として警告あり",
      "高額賞金の没収事例など、プレイヤーからの多数の苦情",
      "年間収益100万ドル未満の小規模な運営",
      "決済方法が限定的",
    ],
  },
  payments: {
    featured: [
      {
        name: "銀行送金",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://casinotsu.com/payment/bank-transfer",
        badge: "定番",
        note: "日本のプレイヤーに安心の決済方法",
      },
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "スピーディーで匿名性の高い決済",
      },
      {
        name: "MasterCard",
        icon: "/assets/payments/mastercard.svg",
        href: "https://casinotsu.com/payment/mastercard",
        badge: "人気",
        note: "広く利用されているクレジットカード",
      },
      {
        name: "JCB",
        icon: "/assets/payments/jcb.svg",
        href: "https://casinotsu.com/payment/jcb",
        badge: "対応",
        note: "日本発の国際カードブランド",
      },
      {
        name: "SticPay",
        icon: "/assets/payments/sticpay.svg",
        href: "https://casinotsu.com/payment/sticpay",
        badge: "Eウォレット",
        note: "オンライン決済で便利なEウォレット",
      },
    ],
    deposits: [
        { name: "銀行送金", icon: "/assets/payments/bank-transfer.svg", href: "https://casinotsu.com/payment/bank-transfer" },
        { name: "ビットコイン", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
        { name: "イーサリアム", icon: "/assets/payments/ethereum.svg", href: "https://casinotsu.com/payment/ethereum" },
        { name: "JCB", icon: "/assets/payments/jcb.svg", href: "https://casinotsu.com/payment/jcb" },
        { name: "MasterCard", icon: "/assets/payments/mastercard.svg", href: "https://casinotsu.com/payment/mastercard" },
        { name: "SticPay", icon: "/assets/payments/sticpay.svg", href: "https://casinotsu.com/payment/sticpay" },
        { name: "テザー", icon: "/assets/payments/usdt.svg", href: "https://casinotsu.com/payment/usdt" },
    ],
    withdrawals: [
        { name: "銀行送金", icon: "/assets/payments/bank-transfer.svg", href: "https://casinotsu.com/payment/bank-transfer" },
        { name: "ビットコイン", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
        { name: "イーサリアム", icon: "/assets/payments/ethereum.svg", href: "https://casinotsu.com/payment/ethereum" },
        { name: "SticPay", icon: "/assets/payments/sticpay.svg", href: "https://casinotsu.com/payment/sticpay" },
        { name: "テザー", icon: "/assets/payments/usdt.svg", href: "https://casinotsu.com/payment/usdt" },
    ],
    notes: [
      "決済方法はまだ限定的ですが、主要な銀行送金、クレジットカード、仮想通貨に対応しています。",
      "1日の出金上限額は€10,000、1ヶ月の出金上限額は€50,000です。",
    ],
  },
  bonuses: {
    overview:
      "7スピンカジノは、特に賭け条件が低いボーナスが豊富で、プレイヤーにとって非常に魅力的です。初回入金キャッシュバックや毎日もらえるリベートボーナスが特徴です。",
    noDeposit:
      "メインボーナスとして$40のボーナスが賭け条件5倍で提供されています。",
    extraSpins: {
      summary: "週末限定の100%入金ボーナスや期間限定のフリースピンオファーが提供されることがあります。",
      schedule: [],
      warning: "詳細はプロモーションページで確認が必要です。",
    },
    welcomeRows: [
      { depositNumber: "初回入金", percent: "60%キャッシュバック", cap: "$300", code: "60CB" },
    ],
    conditions: [
      "初回入金キャッシュバックの賭け条件は1倍。",
      "リベートボーナスの賭け条件は1倍。",
      "キャッシュバックを受け取るには、残高が$1未満になった後、ライブチャットでの申請が必要。",
      "ボーナス利用時のベット上限額: ライブ/ビデオゲーム$25、スロット/シューティング$10。",
    ],
    prohibitedGames: [
      "Collectボタンがあるゲーム",
      "「NO BONUS」のアイコンがあるゲーム",
      "すべてのビデオポーカー、テーブルゲーム、アーケード、チェスのゲーム",
      "オンラインポーカー",
    ],
  },
  offers: [
    {
      title: "スロットで最大1.6%リベートボーナス",
      description: "スロットでのリアルマネーベット額に応じて、毎日最大1.6%のリベートボーナスが自動で進呈されます。賭け条件は1倍です。",
      highlight: "毎日もらえる賭け条件1倍のリベート",
    },
    {
      title: "ライブカジノで最大1.1%リベートボーナス",
      description: "ライブカジノでのベット額に対しても、毎日最大1.1%のリベートボーナスが進呈されます。こちらも賭け条件は1倍です。",
      highlight: "ライブカジノ好きにも嬉しいデイリーリベート",
    },
  ],
  facts: [
    { label: "名称", value: "7Spin (7スピンカジノ)" },
    { label: "ローンチ", value: "2023年" },
    { label: "運営会社", value: "情報なし" },
    { label: "ライセンス", value: "Curaçao Antillephone N.V., Anjouan Gaming" },
    { label: "VIPプログラム", value: "✅" },
    { label: "対応言語", value: "日本語" },
    { label: "対応通貨", value: "USD" },
    {
      label: "ゲームタイプ",
      value: (
        <span>
          <Link href="https://casinotsu.com/baccarat">バカラ</Link>, <Link href="https://casinotsu.com/blackjack">ブラックジャック</Link>, <Link href="https://casinotsu.com/game-shows">ゲームショー</Link>, <Link href="https://casinotsu.com/live-casino">ライブカジノ</Link>, <Link href="https://casinotsu.com/poker">ポーカー</Link>, <Link href="https://casinotsu.com/roulette">ルーレット</Link>, <Link href="https://casinotsu.com/slots">スロット</Link>
        </span>
      ),
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://casinotsu.com/providers/betsoft">BetSoft</Link>, <Link href="https://casinotsu.com/providers/big-time-gaming">Big Time Gaming</Link>, <Link href="https://casinotsu.com/providers/blueprint-gaming">Blueprint Gaming</Link>, Gacha Studios, <Link href="https://casinotsu.com/providers/habanero">Habanero</Link>, <Link href="https://casinotsu.com/providers/hacksaw-gaming">Hacksaw Gaming</Link>, Lucksome, <Link href="https://casinotsu.com/providers/microgaming">Microgaming</Link>, <Link href="https://casinotsu.com/providers/netent">NetEnt</Link>, <Link href="https://casinotsu.com/providers/nolimit-city">Nolimit City</Link>, <Link href="https://casinotsu.com/providers/playtech">Playtech</Link>, <Link href="https://casinotsu.com/providers/play-n-go">Play’n GO</Link>, <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://casinotsu.com/providers/red-tiger">Red Tiger</Link>, <Link href="https://casinotsu.com/providers/relax-gaming">Relax</Link>, Slingshot Studios, <Link href="https://casinotsu.com/providers/thunderkick">Thunderkick</Link>, <Link href="https://casinotsu.com/providers/yggdrasil">Yggdrasil</Link>
        </span>
      ),
    },
    { label: "最小入金額", value: "情報なし" },
    { label: "最小出金額", value: "情報なし" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:customer-support@7spin.com">customer-support@7spin.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (24時間日本語対応)" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "7スピンカジノ（7SPIN CASINO）は2023年にサービスを開始した、比較的新しいオンラインカジノです。",
      "ポップなネコのキャラクターが特徴的なカジュアルなデザインで、初心者にも親しみやすいサイト構成になっています。リベートボーナスや初回入金キャッシュバックなど、特に低い賭け条件のボーナスが豊富に用意されています。",
      "しかし、このレビューでは、Casino.guruから発せられている重大な警告についても詳しく解説します。CasinoTsuは提携しておらず、プレイは自己責任となりますので、情報をよくご確認の上、慎重にご判断ください。",
    ],
    ctas: [
        { text: "🌟CasinoTsu推薦の信頼できるカジノをチェック", href: "https://casinotsu.com/reviews" },
    ],
  },
  games: [
    "7スピンカジノでは、スロット、ライブカジノ、テーブルゲームなど、多様なジャンルのゲームが提供されています。",
    "Pragmatic Play, NetEnt, Play'n GO, Microgamingなど、業界をリードする多数の有名プロバイダーと提携しており、高品質なゲーム体験が期待できます。",
  ],
  features: [
    "アメリカンコミック風の親しみやすいネコのキャラクターがサイトの魅力を高めています。",
    "初心者向けのガイドが充実しており、サイトの使いやすさと相まって、オンラインカジノが初めての方でも安心して始められます。",
  ],
  editorial: {
    author: "CasinoTsu編集部",
    profileHref: "/authors",
    hook: "ボーナス条件は非常に魅力的ですが、それを上回る重大なリスクが報告されています。",
    theGoodStuff: "賭け条件1倍のキャッシュバックやリベートボーナスは、業界でもトップクラスの好条件です。24時間対応の日本語サポートも心強いです。",
    theHeadsUp: "最大のリスクは、Casino.guruから『避けるべきカジノ』という最低評価を受けている点です。150万ユーロの賞金没収事例や、運営規模の小ささからくる支払い能力への懸念は、決して無視できません。",
    finalThought: "魅力的なボーナスに惹かれる気持ちは理解できますが、資金の安全性が最優先です。CasinoTsuとしては、これらの重大な警告を考慮すると、プレイを推奨することはできません。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "CasinoTsuが7スピンカジノを評価する上で最も重視したのは、プレイヤーの安全性です。2023年に設立されたこの新しいカジノは、一見すると非常に魅力的です。特に、賭け条件が1倍という初回入金キャッシュバックや日々のリベートボーナスは、経験豊富なプレイヤーでさえ目を引く好条件です。また、24時間日本語で対応してくれるライブチャットサポートは、安心感を提供します。",
      "しかし、その裏には看過できない深刻な問題が存在します。独立したカジノ評価サイトであるCasino.guruは、7スピンカジノの安全性指数を100点満点中わずか4.0点とし、『このカジノは避けるべき』と断じています。この評価の背景には、過去に報告された150万ユーロもの賞金没収という、極めて悪質な事例があります。カジノ側がこの問題に対応しなかったという事実は、その運営姿勢に大きな疑問を投げかけます。",
      "さらに、年間収益が100万ドル未満という小規模な運営である点も懸念材料です。大規模なジャックポットが出た際に、果たして支払い能力があるのかという不安が残ります。",
      "結論として、7スピンカジノは、プレイヤーを惹きつける魅力的なプロモーションと、その安全性を根底から揺るがす重大なリスクを併せ持っています。CasinoTsuの基本姿勢は『正確さが第一。興奮はその次』です。このカジノでプレイすることは、興奮よりも遥かに大きなリスクを伴う可能性があるため、当サイトとしては推奨いたしかねます。登録・プレイを検討される場合は、これらの情報を踏まえ、ご自身の責任で慎重にご判断ください。",
    ],
  },
  security: [
    "Curaçao Antillephone N.V.とAnjouan Gamingのライセンスを保有",
    "ライセンスを持つゲームプロバイダーのゲームを提供",
    "サイト内でプライバシーポリシーを公開",
  ],
  responsiblePlay: [
    "限定的な責任あるギャンブルのオプションのみ提供されています。",
    "詳細なツールや設定については、カスタマーサポートへの直接の問い合わせが必要です。",
  ],
  complaintStats: [
    "Casino.guruにて安全性指数4.0/100と評価され、『避けるべき』と警告",
    "過去に150万ユーロの賞金没収に関する重大な苦情が報告されている",
    "プレイヤーからの苦情における『拒否された出金額』の総額がカジノの規模に対して著しく高い",
  ],
  awards: [],
  restrictedCountries: [],
  userConcerns: [
    "出金拒否・賞金没収のリスク",
    "小規模運営による支払い能力への懸念",
    "カジノの公平性および安全性に対する深刻な懸念",
  ],
  summary: [
    "賭け条件1倍のボーナスなど、プロモーションは非常に魅力的。",
    "しかし、独立機関からの厳しい警告や、過去の重大な出金トラブルを考慮すると、リスクが非常に高いカジノと言えます。",
    "運営規模も小さく、高額勝利金の支払い能力にも疑問符がつきます。",
    "CasinoTsuは提携しておらず、安全なプレイを最優先するため、このカジノの利用は推奨しません。",
  ],
  extraLinks: [
    { text: "🕵️‍♂️ オンラインカジノライセンスについて詳しく知る", href: "https://casinotsu.com/info/casino-license" },
    { text: "⚖️ 責任あるギャンブル", href: "https://casinotsu.com/info/responsible-gambling" },
  ],
  faq: [],
  cta: {
    text: "CasinoTsuが推薦する安全なカジノのリストを見る",
    href: "https://casinotsu.com/reviews",
  },
};