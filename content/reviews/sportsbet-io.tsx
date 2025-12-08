import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewSportsbetIo: ReviewPageContent = {
  hero: {
    title: "スポーツベットアイオー（Sportsbet.io）を全解説",
    subheading: "最大1,000USDTのキャッシュバックオファー",
    description: "スポーツベットはもちろんのこと、オンラインスロットやライブカジノ、ゲームショーも豊富に揃っております。使いやすさ抜群のスポーツベットアイオーで、ぜひお楽しみください。",
    score: 4.3,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 82,
        note: "ブックメーカーとしての印象が強いですが、カジノゲーム対象のキャンペーンが増えればさらに人気が高まるでしょう。",
      },
      {
        label: "規約",
        percent: 82,
        note: "スポーツベットのボーナス条件はユニークですが、賭け条件6倍のバスケ専用ボーナスは魅力的です。",
      },
      {
        label: "操作性",
        percent: 93,
        note: "専用アプリがあり、スマートフォンでの操作性も抜群。日本円と仮想通貨の両方に対応しており利便性が高いです。",
      },
      {
        label: "サポート",
        percent: 87,
        note: "日本人サポートが在籍しており対応レベルは高いです。時間帯によっては翻訳を介したサポートになります。",
      },
    ],
    highlights: [
      "スポーツベット特化型ハイブリッドカジノ",
      "仮想通貨も日本円も利用可能！",
      "スロット配信5,000種類以上、業界トップクラスの品揃え",
    ],
    watchouts: [
      "eウォレットの決済方法が利用できない",
      "カジノ専用のウェルカムボーナスが少ない",
      "サポートがボット対応から始まるため、返答に時間がかかる場合がある",
    ],
    avatarSrc: "/assets/casino/sportsbetio.png",
    avatarAlt: "Sportsbet ioのロゴ",
  },
  payments: {
    featured: [
      {
        name: "銀行振込",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://casinotsu.com/payment/bank-transfer",
        badge: "日本円対応",
        note: "PayPay銀行など主要銀行に対応",
      },
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "手数料無料でスピーディーな決済",
      },
      {
        name: "PayPay",
        icon: "/assets/payments/paypay.svg",
        href: "https://casinotsu.com/payment/paypay",
        badge: "銀行送金",
        note: "PayPay銀行経由で簡単入金",
      },
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://casinotsu.com/payment/visa",
        badge: "仮想通貨購入",
        note: "カードで直接仮想通貨を購入可能",
      },
    ],
    deposits: [
      { name: "銀行振込", icon: "/assets/payments/bank-transfer.svg", href: "https://casinotsu.com/payment/bank-transfer" },
      { name: "PayPay銀行", icon: "/assets/payments/paypay.svg", href: "https://casinotsu.com/payment/paypay" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg", href: "https://casinotsu.com/payment/ethereum" },
      { name: "Litecoin", icon: "/assets/payments/litecoin.svg" },
      { name: "Ripple", icon: "/assets/payments/ripple.svg" },
      { name: "Tether (USDT)" },
      { name: "Tron (TRX)" },
      { name: "Cardano (ADA)" },
      { name: "Dogecoin (DOGE)" },
      { name: "Binance Coin (BNB)" },
      { name: "USD Coin (USDC)" },
      { name: "Solana (SOL)" },
      { name: "Shiba Inu (SHIB)" },
      { name: "VISA (仮想通貨購入)", icon: "/assets/payments/visa.svg" },
      { name: "Apple Pay (仮想通貨購入)" },
      { name: "Google Pay (仮想通貨購入)" },
    ],
    withdrawals: [
      { name: "銀行振込", icon: "/assets/payments/bank-transfer.svg", href: "https://casinotsu.com/payment/bank-transfer" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg", href: "https://casinotsu.com/payment/ethereum" },
      { name: "Litecoin", icon: "/assets/payments/litecoin.svg" },
      { name: "Ripple", icon: "/assets/payments/ripple.svg" },
      { name: "Tether (USDT)" },
      { name: "Tron (TRX)" },
      { name: "Cardano (ADA)" },
      { name: "Dogecoin (DOGE)" },
      { name: "Binance Coin (BNB)" },
      { name: "USD Coin (USDC)" },
      { name: "Solana (SOL)" },
      { name: "Shiba Inu (SHIB)" },
    ],
    notes: [
      "取引手数料は一切かかりません（仮想通貨のネットワーク手数料は別途発生）。",
      "銀行振込の着金時間は約2営業日、仮想通貨は即時〜数分です。VIPプレイヤーは取引限度額が無制限になります。",
    ],
  },
  bonuses: {
    overview:
      "スポーツベットアイオーのボーナスはスポーツベットに焦点を当てたユニークなものが多いですが、カジノプレイヤー向けのトーナメントやブースト機能も充実しています。",
    noDeposit:
      "現在、登録するだけでもらえる入金不要ボーナスは提供されていません。代わりに、スポーツベットに特化した初回入金オファーが用意されています。",
    extraSpins: {
      summary:
        "ロイヤリティプログラム「クラブハウス」では、ベット額に応じてレベルが上がり、特典としてフリースピンが付与されることがあります。",
      schedule: [
          "ロイヤリティレベルの上昇時に報酬として獲得",
          "特定のキャンペーンやプロモーションで提供",
      ],
      warning: "フリースピンの賭け条件や対象ゲームは、オファーごとに異なります。クラブハウスプログラムは仮想通貨でのプレイが対象です。",
    },
    welcomeRows: [],
    conditions: [
      "ボーナスの内容はスポーツベット関連が中心です。",
      "カジノゲームの賭け条件は、特に記載がない場合40倍が適用されることがあります。",
      "各プロモーションには個別の利用規約があるため、参加前に必ず確認が必要です。",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "初回入金ボーナス “Basketball Forever”",
      description: "バスケットボール専用の初回入金ボーナス。2,999円以上の初回入金で、入金額の100%（最大300 USDT）のボーナスを獲得できます。",
      highlight: "賭け条件はスポーツベットで6倍と魅力的（カジノは40倍）",
    },
    {
      title: "野球専用ホームランキャッシュバック",
      description: "初回入金後7日間の野球ベットでの純損失額に対し、最大20%（上限1,000 USDT）のキャッシュバックが受けられます。",
      highlight: "負けても資金が戻ってくる安心のオファー",
    },
    {
      title: "ラッキー連勝リーダーボード",
      description: "毎週開催されるスロットトーナメント。上位100名で15,000 USDTの賞金を山分けします。7位には特別賞金も用意されています。",
    },
    {
      title: "カジノブースト",
      description: "毎日カジノゲームで最大20%のブースト（勝利金増額）を獲得できるプロモーションです。",
    },
  ],
  facts: [
    { label: "名称", value: "Sportsbet.io" },
    { label: "ローンチ", value: "2016年" },
    { label: "運営会社", value: "mBet Solutions N.V. (Yolo Group傘下)" },
    { label: "ライセンス", value: "キュラソーeGaming (OGL/2023/110/0072)" },
    { label: "VIPプログラム", value: "✅" },
    { label: "対応言語", value: "日本語、英語など複数言語" },
    { label: "対応通貨", value: "JPY, USDT, BTC, ETH, LTC, TRX, ADA, DOGE, BNB, USDC, SOL, SHIBなど" },
    {
      label: "ゲームタイプ",
      value:
        "スポーツベット, eスポーツ, バカラ, ブラックジャック, クラップス, ゲームショー, ライブカジノ, ポーカー, ルーレット, スロット, ビデオビンゴ, スクラッチカード, キノ, クラッシュゲーム",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://www.casinotsu.com/providers/bgaming">BGAMING</Link>, <Link href="https://www.casinotsu.com/providers/betsoft">BetSoft</Link>, <Link href="https://www.casinotsu.com/providers/big-time-gaming">Big Time Gaming</Link>, <Link href="https://www.casinotsu.com/providers/blueprint-gaming">Blueprint Gaming</Link>, <Link href="https://www.casinotsu.com/providers/booming-games">Booming Games</Link>, <Link href="https://www.casinotsu.com/providers/ela-games">ELA Games</Link>, <Link href="https://www.casinotsu.com/providers/endorphina">Endorphina</Link>, <Link href="https://www.casinotsu.com/providers/habanero">Habanero</Link>, <Link href="https://www.casinotsu.com/providers/hacksaw-gaming">Hacksaw Gaming</Link>, <Link href="https://www.casinotsu.com/providers/netent">NetEnt</Link>, <Link href="https://www.casinotsu.com/providers/nolimit-city">Nolimit City</Link>, <Link href="https://www.casinotsu.com/providers/octoplay">Octoplay</Link>, <Link href="https://www.casinotsu.com/providers/pg-soft">PG SOFT</Link>, <Link href="https://www.casinotsu.com/providers/playson">Playson</Link>, <Link href="https://www.casinotsu.com/providers/playtech">Playtech</Link>, <Link href="https://www.casinotsu.com/providers/play-n-go">Play’n GO</Link>, <Link href="https://www.casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://www.casinotsu.com/providers/quickspin">Quickspin</Link>, <Link href="https://www.casinotsu.com/providers/red-tiger">Red Tiger</Link>, <Link href="https://www.casinotsu.com/providers/relax-gaming">Relax</Link>, <Link href="https://www.casinotsu.com/providers/spinomenal">Spinomenal</Link>, <Link href="https://www.casinotsu.com/providers/thunderkick">Thunderkick</Link>, Win Fast, Winfinity, Live Solutions
        </span>
      ),
    },
    { label: "最小入金額", value: "¥1,000 / 0.000007 BTC" },
    { label: "最小出金額", value: "通貨による" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:japan@sportsbet.io">japan@sportsbet.io</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (24時間)" },
  ],
  intro: {
    paragraphs: [
      "こんにちは！CasinoTsu です。今回は、カジノ名からもその特徴が明確な、スポーツベットに特化したオンカジ「スポーツベットアイオー」について、詳しくレビューいたします！",
      "イングランド・プレミアリーグのサッカーチームや、元プロ野球選手の高橋聡文さんなど、著名な方々とも提携されており、その活動は多岐にわたります。",
      "そして、スポーツベットだけでなく、スロットやライブカジノのラインナップも非常に豊富です。早速、スポーツベットアイオーの魅力について、CasinoTsu が徹底的に評価させていただきます！",
    ],
    ctas: [
      { text: "👉 スポーツベットアイオーで遊ぶ！", href: "https://go.japanesecasino.com/go/sportsbet-io:sportsbet-io" },
    ],
  },
  games: [
    "スポーツベットアイオーは、その名の通り30種類以上のスポーツを網羅したブックメーカーですが、カジノゲームの充実度も業界トップクラスです。50社以上のプロバイダーが提供するスロットは5,000種類を超え、Play’n GOやPragmatic Playなどの人気作から、Winfastのパチスロ風スロットまで幅広く楽しめます。",
    "ライブカジノも9社以上のプロバイダーから210種類以上を提供。さらに「Gates of Sportsbet 1000」などの独占ゲームもあり、RTPやボラティリティでゲームをソートできるユニークな機能も搭載しています。",
  ],
  features: [
    "全体的にスマートで洗練されたカジノという印象です。Android向けのネイティブアプリと、iPhone向けのプログレッシブウェブアプリ（PWA）を提供しており、モバイルデバイスでのプレイは非常に快適です。",
    "小さな画面でも見やすく操作しやすいように最適化されており、いつでもどこでもサクサクとストレスフリーで楽しめます。",
  ],
  editorial: {
    author: "Kotone",
    profileHref: "/authors/rina-okabe",
    hook: "スポーツベットの雄は、実はカジノも超一流。仮想通貨と日本円の二刀流で遊びつくせるハイブリッドカジノです。",
    theGoodStuff: "5,000種類以上のスロットと充実したライブカジノは、専門カジノにも引けを取りません。仮想通貨と銀行振込の両方に対応した柔軟な決済、そして非常に優れたモバイル体験は大きな魅力です。",
    theHeadsUp: "eウォレット決済に対応していない点は一部のユーザーにとって不便かもしれません。また、サポートは日本語対応していますが、ボットから始まるため、急ぎの際にはもどかしく感じる可能性があります。",
    finalThought: "スポーツファンはもちろん、純粋なカジノプレイヤーにも自信を持っておすすめできる、非常に完成度の高いプラットフォームです。特に仮想通貨ユーザーにとっては最高の環境の一つと言えるでしょう。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "CasinoTsuがレビューするスポーツベットアイオーは、2016年に設立された、スポーツベットを主軸としながらもカジノゲームの品揃えで他を圧倒するハイブリッドプラットフォームです。運営元のmBet Solutions N.V.は業界大手Yolo Groupの傘下にあり、キュラソーの正規ライセンス下で運営されているため、安全性と信頼性は非常に高いレベルにあります。",
      "特筆すべきはそのゲームの多様性です。30種類以上のスポーツマーケットに加え、5,000を超えるスロット、210以上のライブカジノテーブルが用意されており、あらゆるプレイヤーのニーズに応えます。特に、仮想通貨を基軸としたロイヤリティプログラム「クラブハウス」は、プレイすればするほどリワードがもらえる魅力的なシステムです。",
      "決済面では、14種類以上の仮想通貨と日本円の銀行振込に対応。取引手数料が無料である点も高く評価できますが、eウォレットが使えない点は改善が望まれます。仮想通貨はサイト内で直接購入することも可能で、初心者にも優しい設計です。",
      "ボーナス体系はスポーツベット中心で、バスケ専用の初回入金ボーナスや野球のキャッシュバックなどユニークなものが揃っています。カジノ専用の大型ウェルカムボーナスがない点は少し残念ですが、トーナメントやブースト機能で補っています。",
      "サポートは24時間対応で、日本語スタッフも在籍していますが、初期対応がボットであることや、時間帯によって待ち時間が発生する点は留意すべきでしょう。しかし、全体として、スポーツベットアイオーは非常に質が高く、スマートで、幅広いプレイヤーにおすすめできる優良オンラインカジノです。",
    ],
  },
  security: [
    "キュラソー政府公認ライセンス（OGL/2023/110/0072）を取得",
    "SSL暗号化技術およびTLS暗号化を導入し、プレイヤー情報を厳重に管理",
    "業界標準のファイアウォールで不正アクセスを防止",
    "乱数生成器（RNG）によりゲームの公平性を保証",
    "一部ゲームではプレイヤーが公平性を検証できる「Provably Fair」を導入",
  ],
  responsiblePlay: [
    "ベット制限: プレイごとの賭け金上限を設定可能",
    "入金制限: 入金額の上限を設定可能",
    "損失制限: 一定期間の損失額を管理",
    "時間制限: プレイ時間の上限を設定",
    "自己排除: 一定期間または無期限でアカウントを休止（関連サイトにも適用）",
    "（上記の設定は、safergaming@sportsbet.ioへのメール連絡にて申請が必要）",
  ],
  complaintStats: [],
  awards: [
    "2022年 EGR MARKETING & INNOVATION AWARDS 「Brand of the Year」受賞",
  ],
  restrictedCountries: [],
  userConcerns: [
    "カスタマーサポートの応答速度: 初期対応がボットであり、オペレーターに繋がるまで平均4分以上待つ場合がある",
    "サポートのセッションタイムアウト: ライブチャットで7分間操作がないとセッションが自動的に終了する",
    "画一的なサポート対応: 返答が画一的であったり、情報が食い違っているとの声も一部あり",
  ],
  summary: [
    "スポーツベットアイオーは、その名の通りスポーツベットに特化したカジノですが、カジノゲームのラインナップも非常に豊富です。スロット、ライブカジノ、ゲームショーはもちろん、多様なゲームをお楽しみいただけます。",
    "ロイヤリティプログラムへの参加には仮想通貨でのプレイが推奨されますが、日本円での銀行振込にも対応しており、幅広いプレイヤーが利用しやすい環境です。",
    "まずは気軽にプレイしてみて、もし気に入ったら仮想通貨でのプレイに挑戦し、クラブハウスの特典を堪能するのも良いでしょう。",
  ],
  extraLinks: [
    { text: "💫 仮想通貨でボーナスがもらえるオンラインカジノ特集！", href: "https://www.casinotsu.com/bonuses/crypto" },
    { text: "🏆 受賞歴のある実力派カジノをチェック！", href: "https://www.casinotsu.com/most-awards" },
  ],
  faq: [
    {
      question: "スポーツベットアイオーに新規プレイヤー向けのカジノ対象ボーナスはないのですか？",
      answer: "現在のところ、新規登録者向けの一般的なカジノボーナスはございません。その代わりとして、バスケ専用の初回入金ボーナスと、野球専用のキャッシュバックプロモーションがございます！",
    },
    {
      question: "仮想通貨を利用しなくても、スポーツベットアイオーで遊ぶことはできますか？",
      answer: "はい、銀行振込にも対応しておりますので、日本円でもお楽しみいただけます。",
    },
  ],
  cta: {
    text: "今すぐプレイ！",
    href: "https://go.japanesecasino.com/go/sportsbet-io:sportsbet-io?referrer_path=%2Freviews%2Fsportsbet-io",
  },
};