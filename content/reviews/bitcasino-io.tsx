import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewBitcasinoIo: ReviewPageContent = {
  hero: {
    title: "ビットカジノ (Bitcasino.io) レビュー",
    subheading: "最大¥200,000の100%初回入金ボーナス",
    description: "元祖仮想通貨カジノとして名高いビットカジノをCasinoTsuが徹底解説。仮想通貨と法定通貨（日本円）を便利に使い分けられる柔軟性、豊富なゲーム、そしてプレイヤーに有利な「ライブRTP」機能などが高く評価されています。",
    score: 4.3,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 91,
        note: "プレイヤーからの認知度も人気も高く、ゲームの種類や決済方法においてユニークな体験を提供。",
      },
      {
        label: "規約",
        percent: 74,
        note: "ウェルカムボーナスは賭け条件40倍だが最大20万円と高額。VIPプログラムでは賭け条件なしの特典が豊富。",
      },
      {
        label: "操作性",
        percent: 96,
        note: "モバイル版の操作性は非常に高い。デスクトップ版は重くなることがあるが、Androidアプリも完備。",
      },
      {
        label: "サポート",
        percent: 84,
        note: "24時間365日対応の日本語サポートは専門知識が豊富で、非常に丁寧な対応。",
      },
    ],
    highlights: [
      "仮想通貨と日本円の両方に対応",
      "ロイヤリティクラブで賭け条件なしの特典がもらえる",
      "24時間365日利用可能な日本語チャットサポート",
      "業界最速クラスの出金スピード（平均2分）",
      "リアルタイムで還元率がわかる「ライブRTP」機能",
    ],
    watchouts: [
      "クレジットカードや一部電子マネーでの直接入金に非対応",
      "デスクトップ版サイトの動作が重くなる場合がある",
      "ウェルカムボーナスの賭け条件が40倍とやや高め",
    ],
    avatarSrc: "/assets/casino/bitcasinoio.png",
    avatarAlt: "Bitcasino ioのロゴ",
  },
  payments: {
    featured: [
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "KYC不要で最速出金の代表格",
      },
      {
        name: "銀行振込",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://casinotsu.com/payment/bank-transfer",
        badge: "法定通貨",
        note: "ネットバンクやATMから手軽に入金",
      },
      {
        name: "PayPay銀行",
        icon: "/assets/payments/paypay.svg",
        href: "https://casinotsu.com/payment/paypay",
        badge: "人気",
        note: "日本のプレイヤーに便利な銀行送金",
      },
      {
        name: "Ethereum",
        icon: "/assets/payments/ethereum.svg",
        href: "https://casinotsu.com/payment/ethereum",
        badge: "仮想通貨",
        note: "主要なアルトコインとして広く利用可能",
      },
      {
        name: "Vega Wallet",
        icon: "/assets/payments/vega-wallet.svg",
        href: "https://casinotsu.com/payment/vega-wallet",
        badge: "Eウォレット",
        note: "入金に利用できる便利な電子マネー",
      },
    ],
    deposits: [
      { name: "インターネットバンキング送金", icon: "/assets/payments/bank-transfer.svg" },
      { name: "ATM経由での国内送金", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vega-wallet" },
      { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg" },
      { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg" },
      { name: "Tether (USDT)" },
      { name: "USD Coin (USDC)" },
      { name: "Ripple (XRP)" },
      { name: "Litecoin (LTC)" },
      { name: "TRON (TRX)" },
      { name: "Cardano (ADA)" },
      { name: "Binance Coin (BNB)" },
      { name: "Toncoin (TON)" },
      { name: "Dogecoin (DOGE)" },
      { name: "Polygon (MATIC)" },
      { name: "Bitcoin Cash (BCH)" },
    ],
    withdrawals: [
      { name: "インターネットバンキング送金", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg" },
      { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg" },
      { name: "Tether (USDT)" },
      { name: "USD Coin (USDC)" },
      { name: "Ripple (XRP)" },
      { name: "Litecoin (LTC)" },
      { name: "TRON (TRX)" },
      { name: "Cardano (ADA)" },
      { name: "Binance Coin (BNB)" },
      { name: "Toncoin (TON)" },
      { name: "Dogecoin (DOGE)" },
      { name: "Polygon (MATIC)" },
    ],
    notes: [
      "仮想通貨でのプレイは原則本人確認（KYC）が不要で、平均2分という超高速出金が可能です。",
      "クレジットカードや一部電子マネーは直接入金できませんが、Onramper等のサービス経由で仮想通貨を購入する際に利用できます。",
      "Vega Walletは入金専用で、出金には利用できません。",
      "高額勝利時（50BTC相当以上）は、週に最大50BTC相当額が支払われる場合があります。",
    ],
  },
  bonuses: {
    overview:
      "以前はウェルカムボーナスがありませんでしたが、現在は最大20万円という非常に豪華な初回入金ボーナスを提供しています。さらに、ロイヤリティクラブを通じて賭け条件なしの特典を継続的に獲得できるのが大きな魅力です。",
    noDeposit:
      "現在、ビットカジノでは入金不要ボーナスは提供されていません。その代わり、豪華な初回入金ボーナスやロイヤリティ特典が用意されています。",
    extraSpins: {
      summary:
        "ウェルカムボーナスにフリースピンは含まれていませんが、ロイヤリティクラブのレベルアップ報酬として、賭け条件なしのフリースピンを頻繁に獲得することができます。",
      schedule: [],
      warning: "ロイヤリティクラブで獲得した特典には出金条件がありません。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "100%", cap: "¥200,000 / 1,500 USDT", code: "不要" },
    ],
    conditions: [
      "初回入金ボーナスは分離型（ノンステッキー）です。",
      "賭け条件はボーナス額の40倍です。",
      "ボーナスの有効期限は7日間です。",
      "ロイヤリティクラブやトーナメントで獲得した賞金の多くには賭け条件がありません。",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "《停止中》ジャパカジ限定キャッシュバック",
      description: "過去には、初回入金から7日間の純損失額に対して最大20%（上限25,000 USDT）のキャッシュバックキャンペーンが実施されていました。※現在は停止中です。",
      highlight: "初回入金額に応じてキャッシュバック率が変動",
    },
    {
      title: "ロイヤリティクラブ",
      description: "プレイするだけでポイントが貯まり、レベルアップするごとに賭け条件なしのフリースピンや最大10%のキャッシュバックなどの報酬がもらえます。ポイントは毎月リセットされますが、レベルは維持されます。",
      highlight: "全ての報酬に出金条件なし",
    },
    {
      title: "VIPプログラム (招待制)",
      description: "ハイローラー向けの招待制VIPプログラム。専任マネージャー、海外旅行などの特別イベントへの招待、VIP限定キャンペーン、出金限度額の引き上げなど、特別な待遇が受けられます。",
      highlight: "アドリア海クルーズなどの豪華イベント実績",
    },
  ],
  facts: [
    { label: "名称", value: "Bitcasino.io (ビットカジノ)" },
    { label: "ローンチ", value: "2014年" },
    { label: "運営会社", value: "Moon Technologies B.V. (Yolo Group傘下)" },
    { label: "ライセンス", value: "Curaçao eGaming (1668/JAZ)" },
    { label: "VIPプログラム", value: "✅ (招待制)" },
    {
      label: "対応言語",
      value: "日本語、英語、ドイツ語、スペイン語、フランス語、トルコ語、ベトナム語、韓国語、アラビア語、タイ語、中国語、ポルトガル語、ロシア語、ウクライナ語 (計14言語)",
    },
    { label: "対応通貨", value: "JPY, BTC, ETH, USDT, LTC, XRP, ADA, DOGE, BNB, BUSD, TRX, USDC, TON, MATIC" },
    {
      label: "ゲームタイプ",
      value:
        "バカラ, ブラックジャック, クラップス, ゲームショー, ライブカジノ, ポーカー, ルーレット, スロット, バーチャルスポーツ",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://casinotsu.com/providers/bgaming">BGAMING</Link>, <Link href="https://casinotsu.com/providers/betsoft">BetSoft</Link>, <Link href="https://casinotsu.com/providers/big-time-gaming">Big Time Gaming</Link>, <Link href="https://casinotsu.com/providers/blueprint-gaming">Blueprint Gaming</Link>, <Link href="https://casinotsu.com/providers/booming-games">Booming Games</Link>, <Link href="https://casinotsu.com/providers/booongo">Booongo</Link>, <Link href="https://casinotsu.com/providers/ela-games">ELA Games</Link>, <Link href="https://casinotsu.com/providers/elk-studios">Elk Studios</Link>, <Link href="https://casinotsu.com/providers/endorphina">Endorphina</Link>, <Link href="https://casinotsu.com/providers/fantasma-games">Fantasma</Link>, <Link href="https://casinotsu.com/providers/golden-hero-games">Golden Hero</Link>, <Link href="https://casinotsu.com/providers/habanero">Habanero</Link>, <Link href="https://casinotsu.com/providers/hacksaw-gaming">Hacksaw Gaming</Link>, Lucksome, <Link href="https://casinotsu.com/providers/manna-play">Manna Play</Link>, <Link href="https://casinotsu.com/providers/microgaming">Microgaming</Link>, <Link href="https://casinotsu.com/providers/netent">NetEnt</Link>, <Link href="https://casinotsu.com/providers/nolimit-city">Nolimit City</Link>, <Link href="https://casinotsu.com/providers/octoplay">Octoplay</Link>, <Link href="https://casinotsu.com/providers/pg-soft">PG SOFT</Link>, <Link href="https://casinotsu.com/providers/playson">Playson</Link>, <Link href="https://casinotsu.com/providers/playtech">Playtech</Link>, <Link href="https://casinotsu.com/providers/play-n-go">Play’n GO</Link>, <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://casinotsu.com/providers/quickspin">Quickspin</Link>, <Link href="https://casinotsu.com/providers/red-tiger">Red Tiger</Link>, <Link href="https://casinotsu.com/providers/relax-gaming">Relax</Link>, Slingshot Studios, <Link href="https://casinotsu.com/providers/spinomenal">Spinomenal</Link>, <Link href="https://casinotsu.com/providers/thunderkick">Thunderkick</Link>, Win Fast, <Link href="https://casinotsu.com/providers/yggdrasil">Yggdrasil</Link>, <Link href="https://casinotsu.com/providers/yolted">Yolted</Link>
        </span>
      ),
    },
    { label: "最小入金額", value: "¥1,000 / 0.007 mBTC" },
    { label: "最小出金額", value: "50 USDT相当額" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:japancs@bitcasino.io">japancs@bitcasino.io</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (24時間日本語対応)" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "ビットカジノは、世界で初めて合法的にライセンスを取得した仮想通貨カジノとして2014年に誕生した、業界のパイオニアです。当初はビットコイン専用でしたが、現在では多くの仮想通貨と法定通貨（日本円など）に対応し、より多くのプレイヤーが利用しやすくなっています。",
      "2023年にはEGRアワードで「年間最優秀仮想通貨オペレーター賞」を受賞するなど、その革新性と信頼性は業界で高く評価されています。仮想通貨なら本人確認不要で平均2分の超高速出金が可能、法定通貨なら国内銀行振込で手軽に入金できるなど、利便性の高さが魅力です。",
      "CasinoTsuでは、この進化した元祖仮想通貨カジノの全貌を、豪華なウェルカムボーナスから独自の機能まで詳しくレビューしていきます。",
    ],
    ctas: [
      { text: "👉 ビットカジノで今すぐプレイ！", href: "https://go.casinotsu.com/go/bitcasino-io:bitcasino-io?referrer_path=%2Freviews%2Fbitcasino-io" },
      { text: "🤓 オンラインカジノ初心者ガイド", href: "https://casinotsu.com/guides" },
    ],
  },
  games: [
    "ビットカジノでは、約60社のプロバイダーから6,000種類以上のゲームが提供されています。スロットだけでも4,500種類を超え、新作から定番まで幅広いラインナップを誇ります。",
    "特筆すべきはオリジナルゲームの存在で、『ゲーツ・オブ・ビットカジノ』のような人気スロットの限定バージョンや、ビットカジノ専用のライブカジノテーブルで特別な体験ができます。",
    "ハイローラー向けには、高額ベットが可能な専用ライブカジノ「Bombay Club」も用意されています。",
  ],
  features: [
    "「ライブRTP」はビットカジノの画期的な機能で、各ゲームのリアルタイム還元率を24時間、週、月単位で確認できます。これにより、現在どのゲームが勝ちやすい状況にあるかを判断する材料になります。",
    "ゲーム検索機能が非常に優れており、RTP、ボラティリティ、ヒット率などで絞り込みが可能。また、ゲーム画面でデモプレイとリアルマネープレイをワンタッチで切り替えられるなど、徹底したユーザー目線の設計が高く評価できます。",
  ],
  editorial: {
    author: "Kotone",
    profileHref: "/authors/rina-okabe",
    hook: "元祖仮想通貨カジノの看板は伊達じゃない。ユーザー第一主義を貫く機能性と信頼性が最大の魅力です。",
    theGoodStuff: "仮想通貨での平均2分という驚異的な出金スピードと、原則KYC不要という手軽さは他の追随を許しません。ライブRTP機能や賭け条件なしのロイヤリティ報酬など、プレイヤーにとって本当に価値のあるサービスを提供しようという姿勢が随所に見られます。",
    theHeadsUp: "ウェルカムボーナスの賭け条件が40倍と少し厳しい点と、デスクトップ版サイトが時々重く感じられる点が改善点です。また、クレジットカードで直接入金できないため、初心者には少しハードルが高いかもしれません。",
    finalThought: "仮想通貨ユーザーにとっては間違いなく最高の環境の一つです。法定通貨ユーザーも銀行振込で手軽に始められ、一度慣れてしまえばその利便性と豊富な特典の虜になるでしょう。評判の高さも納得の優良カジノです。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "ビットカジノをレビューするにあたり、CasinoTsuが最も感銘を受けたのは、その「ユーザーフレンドリー」な姿勢です。2014年の設立以来、仮想通貨カジノのパイオニアとして業界を牽引してきましたが、その地位に安住することなく、常にプレイヤーにとって何が最善かを追求し続けています。",
      "その象徴が「ライブRTP」機能です。これは単なるギミックではなく、プレイヤーがより戦略的にゲームを選ぶための強力なツールとなります。また、ロイヤリティクラブで提供される報酬がすべて「賭け条件なし」である点も、プレイヤーの利益を第一に考えるカジノの哲学を物語っています。",
      "仮想通貨と法定通貨のハイブリッドモデルへの移行も見事です。仮想通貨のメリットであるスピードと匿名性を維持しつつ、銀行振込という日本のプレイヤーにとって最も身近な決済手段も提供することで、ユーザー層を大きく広げることに成功しました。",
      "もちろん、課題もあります。デスクトップサイトのパフォーマンスや、ウェルカムボーナスの賭け条件の高さは今後の改善に期待したい点です。しかし、24時間365日の質の高い日本語サポート、6,000を超える豊富なゲームセレクション、そして業界をリードする安全性と信頼性を考慮すれば、これらの欠点を補って余りある魅力があると言えるでしょう。",
      "総じて、ビットカジノは初心者からハイローラーまで、特に仮想通貨でのプレイを考えている全てのプレイヤーに自信を持って推薦できる、トップクラスのオンラインカジノです。",
    ],
  },
  security: [
    "世界で初めて合法ライセンスを取得した仮想通貨カジノプラットフォームとしての実績",
    "信頼性の高いキュラソーライセンス（1668/JAZ）を取得して運営",
    "サイト全体でのSSL暗号化技術と、二段階認証（2FA）によるアカウント保護",
    "認定された乱数生成器（RNG）と、一部ゲームでのProvably Fairシステムによる公平性の保証",
  ],
  responsiblePlay: [
    "自己規制プログラムを通じて、プレイヤーは自身のギャンブル行動を管理できます。",
    "サポートへのメール申請により、24時間のクーリングオフ、一定期間のアカウント制限、または永久的なアカウント閉鎖が可能です。",
  ],
  complaintStats: [],
  awards: [
    "EGR Awards 2023にて「Crypto Operator of the Year」を受賞",
  ],
  restrictedCountries: [
    "アフガニスタン", "アメリカ領サモア", "オーストラリア", "ベルギー", "エストニア", "フランス", "ドイツ", "グアム", "イラン", "イラク", "リトアニア", "マルタ", "ミャンマー", "オランダ", "北マリアナ諸島", "北朝鮮", "プエルトリコ", "シリア・アラブ共和国", "トリニダード・トバゴ", "イギリス", "アメリカ合衆国（全ての属領、軍事基地、および地域を含む）", "ヴァージン諸島（米）", "イエメン",
  ],
  userConcerns: [
    "デスクトップ版サイトの動作が重くなることがある",
    "ダークモードが利用可能",
    "インターフェースはスタイリッシュでモダン、クリーンで応答性が高いと評価されている",
  ],
  summary: [
    "仮想通貨と法定通貨（日本円）の両方に対応したハイブリッド型カジノ。",
    "仮想通貨利用時の平均出金時間は2分と業界最速クラスで、原則KYCも不要。",
    "リアルタイムの還元率がわかる「ライブRTP」など、プレイヤーに有利な独自機能が豊富。",
    "ロイヤリティクラブの報酬はすべて賭け条件なしで、プレイヤーへの還元率が高い。",
    "豪華なウェルカムボーナスが用意されているが、賭け条件は40倍とやや高め。",
  ],
  extraLinks: [
    { text: "🔰 仮想通貨と電子マネーの違いとは？", href: "https://casinotsu.com/payment/bitcoin" },
    { text: "✅ オンラインカジノの本人確認（KYC）について", href: "https://casinotsu.com/guides/document-verification" },
  ],
  faq: [
    {
      question: "ビットカジノでは、仮想通貨以外の決済方法も利用できますか？",
      answer: "はい、銀行送金、ATM振込（入金のみ）、Vega Wallet（入金のみ）が利用可能です。クレジットカードや一部電子マネーは、仮想通貨購入サービスを経由して利用できる場合があります。",
    },
    {
      question: "ビットカジノにはVIPプログラムはありますか？",
      answer: "はい、招待制で用意されています。VIPプレイヤーには、専用マネージャーのサポートや特別キャンペーンへの参加権などが提供されます。",
    },
    {
      question: "ビットカジノに入金不要ボーナスはありますか？",
      answer: "いいえ、現在入金不要ボーナスは提供されておりません。ビットカジノでは、代わりに初回入金ボーナスやキャッシュバックボーナスが提供されています。",
    },
  ],
  cta: {
    text: "ビットカジノで遊んでみる♪",
    href: "https://go.casinotsu.com/go/bitcasino-io",
  },
    images: {
    casino: [
      "/assets/casino/bitcasinoio.png",
      "/assets/jp/bitcasino-io.png",
      "/assets/casino/bitcasinoio.jpg",
    ],
  },
};