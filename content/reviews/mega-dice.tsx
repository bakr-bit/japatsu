import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewMegaDice: ReviewPageContent = {
  hero: {
    title: "メガダイス（Mega Dice）レビュー",
    subheading: "最大1BTCの200%初回入金ボーナス + 50回フリースピン",
    description: "2023年登場の仮想通貨特化型カジノ、メガダイスを徹底レビュー。最大1BTCの豪華ボーナス、5,000種以上のゲーム、KYC不要の匿名性が魅力で、特に仮想通貨ユーザーにおすすめです。",
    score: 3.7,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 69,
        note: "新興カジノで知名度はまだ低いが、豪華なボーナスで仮想通貨プレイヤーからの人気が急速に高まっている。",
      },
      {
        label: "規約",
        percent: 74,
        note: "最大1BTCのウェルカムボーナスは非常に魅力的。週ごとのリロードやフリースピンなど継続的なプロモも充実。",
      },
      {
        label: "操作性",
        percent: 77,
        note: "登録は非常に簡単で、Telegramで直接プレイできるユニークな機能も提供。一部サイトの翻訳には改善の余地あり。",
      },
      {
        label: "サポート",
        percent: 84,
        note: "24時間対応のライブチャットは迅速で丁寧。自動翻訳を介するが、プレイヤーの疑問にしっかりと対応してくれる。",
      },
    ],
    highlights: [
      "最大1BTCの超豪華ウェルカムボーナス",
      "原則KYC不要で匿名性の高いプレイが可能",
      "5,000種類以上の豊富なゲーム数とスポーツベット",
      "世界初、Telegramアプリ上で直接プレイできるライセンスカジノ",
    ],
    watchouts: [
      "出金は仮想通貨のみに限定",
      "責任あるギャンブルに関する機能が限定的",
      "サイトの一部で日本語翻訳が不完全",
      "仮想通貨ウォレットが必須",
    ],
    avatarSrc: "/assets/casino/mega-dice.png",
    avatarAlt: "Mega diceのロゴ",
  },
  payments: {
    featured: [
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "最大1BTCのボーナス対象",
      },
      {
        name: "Ethereum",
        icon: "/assets/payments/ethereum.svg",
        href: "https://casinotsu.com/payment/ethereum",
        badge: "主要アルトコイン",
        note: "主要な仮想通貨に幅広く対応",
      },
      {
        name: "クレジットカード",
        icon: "/assets/payments/visa.svg",
        badge: "購入専用",
        note: "サイト内で直接仮想通貨を購入可能",
      },
      {
        name: "銀行振込",
        icon: "/assets/payments/bank-transfer.svg",
        badge: "購入専用",
        note: "銀行振込で仮想通貨を購入できる",
      },
    ],
    deposits: [
      { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg" },
      { name: "Bitcoin Cash (BCH)" },
      { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg" },
      { name: "TRON (TRX)" },
      { name: "Tether (USDT)", icon: "/assets/payments/tether.svg" },
      { name: "Litecoin (LTC)" },
      { name: "USD Coin (USDC)" },
      { name: "Dogecoin (DOGE)" },
      { name: "Cardano (ADA)" },
      { name: "BNB" },
      { name: "Ripple (XRP)" },
      { name: "Solana (SOL)" },
      { name: "PEPE" },
      { name: "クレジットカード (仮想通貨購入用)", icon: "/assets/payments/visa.svg" },
      { name: "銀行送金 (仮想通貨購入用)", icon: "/assets/payments/bank-transfer.svg" },
    ],
    withdrawals: [
      { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg" },
      { name: "Bitcoin Cash (BCH)" },
      { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg" },
      { name: "TRON (TRX)" },
      { name: "Tether (USDT)", icon: "/assets/payments/tether.svg" },
      { name: "Litecoin (LTC)" },
      { name: "USD Coin (USDC)" },
      { name: "Dogecoin (DOGE)" },
      { name: "Cardano (ADA)" },
      { name: "BNB" },
      { name: "Ripple (XRP)" },
      { name: "Solana (SOL)" },
      { name: "PEPE" },
    ],
    notes: [
      "メガダイスは仮想通貨特化型カジノです。出金は仮想通貨のみ対応しているため、事前に仮想通貨ウォレットの準備が必要です。",
      "入金時には、サイト内でクレジットカードや銀行振込を利用して直接仮想通貨を購入することができます。",
      "カジノ側での入出金手数料は無料ですが、各仮想通貨のネットワーク手数料（ガス代）は別途発生します。",
    ],
  },
  bonuses: {
    overview:
      "メガダイスの最大の魅力は、業界でもトップクラスのウェルカムボーナスです。新規登録後の初回入金で、最大1BTCという破格の200%ボーナスが進呈されます。さらに、人気スロットで使える50回のフリースピンと、$5相当の無料スポーツベットも付いてくる、非常に豪華なパッケージです。",
    noDeposit:
      "現在、メガダイスでは入金不要ボーナスは提供されていません。ウェルカムボーナスを受け取るには初回入金が必要です。",
    extraSpins: {
      summary:
        "初回入金を行うと、Hacksaw Gaming社の人気スロット『Wanted Dead or a Wild』で利用できる50回のフリースピンが進呈されます。",
      schedule: [
        "初回入金時に自動的に付与",
        "対象スロット: Wanted Dead or a Wild",
        "賭け条件: 勝利金に対して40倍",
        "有効期限: 7日間",
      ],
      warning: "フリースピンの勝利金には40倍の賭け条件が適用されます。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "200%", cap: "1 BTC", code: "不要" },
    ],
    conditions: [
      "初回入金ボーナスの賭け条件は35倍です。",
      "ボーナスはリアルマネーを使い切った後に有効化されます。",
      "ボーナス利用中の最大ベット額は5ユーロ相当額です。",
      "初回入金ボーナスは登録から30日以内に申請する必要があります。",
      "賭け条件への反映率: スロット100%、ライブカジノ50%、その他のゲーム20%。",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "毎週水曜フリースピン",
      description: "毎週水曜日に入金すると、入金額に応じて最大150回のフリースピンがプレゼントされるリロードプロモーションです。",
      highlight: "水曜日に入金するだけでフリースピンがもらえる",
    },
    {
      title: "月曜リロードボーナス",
      description: "週の始まりを応援するプロモーションとして、毎週月曜日に入金するとリロードボーナスが受け取れます。",
    },
    {
      title: "各種トーナメント",
      description: "週末トーナメント、マンスリードロップ＆ウィン、ウィークリーフットボールトーナメントなど、定期的に高額賞金が狙えるイベントが開催されています。",
    },
  ],
  facts: [
    { label: "名称", value: "Mega Dice (メガダイス)" },
    { label: "ローンチ", value: "2023年" },
    { label: "運営会社", value: "情報なし" },
    { label: "ライセンス", value: "GAMING CURACAO, Anjouan Gaming Board" },
    { label: "VIPプログラム", value: "✅" },
    { label: "対応言語", value: "日本語、英語など" },
    { label: "対応通貨", value: "13種類以上の仮想通貨" },
    {
      label: "ゲームタイプ",
      value: "バカラ, ブラックジャック, クラップス, ゲームショー, ライブカジノ, ポーカー, ルーレット, スロット, スポーツベット, クラッシュゲーム",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://casinotsu.com/providers/betsoft">BetSoft</Link>, <Link href="https://casinotsu.com/providers/big-time-gaming">Big Time Gaming</Link>, <Link href="https://casinotsu.com/providers/blueprint-gaming">Blueprint Gaming</Link>, <Link href="https://casinotsu.com/providers/elk-studios">Elk Studios</Link>, Fantasma, <Link href="https://casinotsu.com/providers/habanero">Habanero</Link>, <Link href="https://casinotsu.com/providers/hacksaw-gaming">Hacksaw Gaming</Link>, Lucksome, <Link href="https://casinotsu.com/providers/netent">NetEnt</Link>, <Link href="https://casinotsu.com/providers/nolimit-city">Nolimit City</Link>, Octoplay, PG SOFT, Playson, <Link href="https://casinotsu.com/providers/play-n-go">Play’n GO</Link>, <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://casinotsu.com/providers/red-tiger">Red Tiger</Link>, <Link href="https://casinotsu.com/providers/relax-gaming">Relax</Link>, Spinomenalなど40社以上
        </span>
      ),
    },
    { label: "最小入金額", value: "仮想通貨により異なる" },
    { label: "最小出金額", value: "仮想通貨により異なる" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:help@megadice.com">help@megadice.com</Link> },
    { label: "ライブチャット", value: "24時間対応" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "メガダイス（Mega Dice）は、2023年6月に登場した仮想通貨に特化した次世代のオンラインカジノです。",
      "最大の特徴は、最大1BTCという驚異的なウェルカムボーナスと、原則としてKYC（本人確認）が不要な高い匿名性です。これにより、プレイヤーはメールアドレス一つで迅速にプレイを開始できます。",
      "さらに、世界で初めてTelegramメッセンジャーアプリ上で直接カジノゲームをプレイできるライセンスカジノとして、革新的なゲーム体験を提供しています。このレビューでは、メガダイスの魅力と注意点を余すことなく解説します。",
    ],
    ctas: [
      { text: "👉 メガダイスで今すぐプレイ！", href: "https://www.japanesecasino.com/reviews/megadice" },
      { text: "💰 仮想通貨が使えるカジノ特集", href: "https://casinotsu.com/crypto" },
    ],
  },
  games: [
    "メガダイスは5,000種類を超える圧巻のゲームライブラリを誇ります。スロットだけでも3,000種類以上あり、メガウェイズやジャックポット、ボーナス購入機能付きの最新機種まで幅広くカバーしています。",
    "ライブカジノはEvolution社を中心に180以上のテーブルが用意されており、『クレイジータイム』などの人気ゲームショーも楽しめます。また、『Aviator』や『Spaceman』といった人気のクラッシュゲームも充実しています。",
    "さらに、39以上の市場をカバーする本格的なスポーツブックも併設しており、競争力のあるオッズでサッカーやeスポーツなど様々な試合にベット可能です。",
  ],
  features: [
    "メガダイスの最もユニークな特徴は、Telegramとの連携です。Telegramアプリ内のボットを通じて、アカウント作成から入出金、ゲームプレイまで、すべての操作を完結させることができます。これにより、アプリを切り替えることなく、シームレスなカジノ体験が可能です。",
    "もう一つの大きな特徴は、VPNフレンドリーなポリシーと、原則としてKYCが不要である点です。これにより、プレイヤーはプライバシーを最大限に保護しながら、世界中どこからでもアクセスしてプレイを楽しむことができます。",
  ],
  editorial: {
    author: "CasinoTsu編集部",
    profileHref: "/authors",
    hook: "最大1BTCのボーナスとKYC不要の匿名性は、仮想通貨ユーザーにとって最高の環境です。",
    theGoodStuff: "200%最大1BTCというウェルカムボーナスは、現在の市場で最も魅力的なオファーの一つです。5,000を超えるゲーム数と本格的なスポーツブック、そしてTelegramでのプレイという革新性は、他のカジノにはない大きな強みです。",
    theHeadsUp: "最大の注意点は、出金が仮想通貨に限定されることです。法定通貨での出金を希望するプレイヤーには向いていません。また、責任あるギャンブル機能が自己規制の申請など手動のプロセスに限られており、自己管理ツールが不足している点は改善が望まれます。",
    finalThought: "メガダイスは、明確に仮想通貨ユーザーをターゲットにしたカジノです。その条件に合致するプレイヤーにとっては、巨大なボーナス、豊富なゲーム、そして高い匿名性という三拍子が揃った、他に類を見ない理想的なプラットフォームと言えるでしょう。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "2023年に設立されたメガダイスは、オンラインカジノ業界に新しい風を吹き込む仮想通貨特化型プラットフォームです。CasinoTsuがこのカジノを評価する上で最も注目したのは、その圧倒的なウェルカムボーナスと、プレイヤーのプライバシーを最優先する姿勢です。初回入金で提供される「200%最大1BTC」というボーナスは、現在のレートで1,500万円以上に相当する可能性があり、ハイローラーから絶大な支持を集めるポテンシャルを秘めています。",
      "ゲームの多様性も特筆すべき点です。40社以上のプロバイダーから供給される5,000以上のゲームは、スロット、ライブカジノ、テーブルゲームはもちろん、人気のクラッシュゲームまで網羅しています。これに加えて、39以上の市場をカバーする本格的なスポーツブック機能も備えており、まさにオールインワンのギャンブルサイトと言えます。",
      "操作性の面では、世界初のTelegram統合が際立っています。これにより、普段使いのメッセンジャーアプリから離れることなく、登録からプレイ、入出金まで完結できるという、これまでにない利便性を実現しています。また、原則としてKYCが不要で、VPNの利用も許可されているため、匿名性を重視するプレイヤーにとっては理想的な環境です。",
      "しかし、このカジノが万人向けでないことも明確です。最大のハードルは、出金が仮想通貨に限定される点です。仮想通貨ウォレットを持っていない、または利用に慣れていないプレイヤーにとっては、不便に感じるでしょう。また、責任あるギャンブルのための自己制限ツールがサイト上で直接設定できず、サポートへの連絡が必要な点も、今後の改善を期待したいポイントです。",
      "総じて、メガダイスは仮想通貨を主軸とするプレイヤーのために設計された、非常にパワフルで魅力的なカジノです。その条件に合致するならば、巨大なボーナスと無限に近いゲームの選択肢、そしてストレスフリーな匿名プレイという、最高の体験が待っています。CasinoTsuは、仮想通貨ユーザーに対して自信を持って推薦できるプラットフォームであると結論付けます。",
    ],
  },
  security: [
    "GAMING CURACAOおよびAnjouan Gaming Boardのデュアルライセンスを取得して合法的に運営",
    "原則としてKYC（本人確認）が不要なため、個人情報の提出リスクが低い",
    "VPNの利用が許可されており、プレイヤーのプライバシーと匿名性を保護",
  ],
  responsiblePlay: [
    "責任あるギャンブルに関する機能は限定的です。",
    "自己排除などの制限を設定したい場合は、カスタマーサポートに直接連絡する必要があります。",
  ],
  complaintStats: [],
  awards: [],
  restrictedCountries: [],
  userConcerns: [
    "出金方法が仮想通貨のみに限定されている",
    "サイト内での自己制限ツールの提供がなく、責任あるギャルブル機能が不十分",
    "新しいカジノのため、長期的な信頼性に関する実績がまだ少ない",
    "一部のページで日本語の翻訳が自然ではない箇所がある",
  ],
  summary: [
    "仮想通貨プレイヤーにとって、最大1BTCのウェルカムボーナスは非常に魅力的。",
    "KYC不要とVPNフレンドリーなポリシーにより、高い匿名性でプレイ可能。",
    "5,000以上のゲームとスポーツベット、さらにTelegramでのプレイというユニークな特徴を持つ。",
    "出金が仮想通貨に限定されるため、仮想通貨に慣れていないプレイヤーには不向き。",
  ],
  extraLinks: [
    { text: "💰 仮想通貨が使えるおすすめカジノ特集", href: "https://casinotsu.com/crypto" },
  ],
  faq: [
    {
      question: "メガダイスでは、仮想通貨以外は使えますか？",
      answer: "入金時にはクレジットカードや銀行振込で仮想通貨を購入できますが、サイトからの出金は仮想通貨のみとなります。",
    },
    {
      question: "Telegramはどこでダウンロードできますか？",
      answer: "お使いのスマートフォンのApp Store（iOS）またはGoogle Play（Android）から無料でダウンロードできます。",
    },
  ],
  cta: {
    text: "メガダイスで最大1BTCボーナスをゲット！",
    href: "https://www.japanesecasino.com/reviews/megadice",
  },
};