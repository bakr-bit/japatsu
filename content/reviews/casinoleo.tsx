import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewCasinoLeo: ReviewPageContent = {
  hero: {
    title: "CasinoLeo（カジノレオ）レビュー",
    subheading: "最大¥150,000ボーナス + 賭け条件なしフリースピン10回",
    description: "豪華なボーナスで注目された新星カジノ、カジノレオをCasinoTsuがレビュー。⚠️重要：カジノレオは2025年8月に日本市場から撤退しました。このページは記録として保持されています。",
    score: 4.2,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 77,
        note: "YouTuberヒカル氏とのコラボなどで認知度を上げていたが、2022年設立と新しく、今後の展開が期待されていた。",
      },
      {
        label: "規約",
        percent: 89,
        note: "賭け条件なしの入金不要フリースピンは画期的。最大¥150,000のウェルカムボーナスも賭け条件20倍と好条件だった。",
      },
      {
        label: "操作性",
        percent: 84,
        note: "スマホでもPCでも快適にプレイ可能。コンビニ決済はユニークだったが、全体的な決済方法の少なさが課題だった。",
      },
      {
        label: "サポート",
        percent: 90,
        note: "24時間対応の日本語チャットサポートは非常に親切で高評価。迅速な問題解決が期待できた。",
      },
    ],
    highlights: [
      "賭け条件なしの入金不要フリースピン10回",
      "最大15万円の太っ腹なウェルカムボーナス",
      "24時間対応の親切な日本語チャットサポート",
      "豊富なキャンペーンやプロモーション",
    ],
    watchouts: [
      "2025年8月に日本市場から撤退",
      "利用可能な決済方法が限定的だった",
      "VIPプログラムやポイントサービスがなかった",
    ],
  },
  payments: {
    featured: [
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://casinotsu.com/payment/visa",
        badge: "人気",
        note: "主要なクレジットカードに対応",
      },
      {
        name: "銀行振込",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://casinotsu.com/payment/bank-transfer",
        badge: "定番",
        note: "日本のプレイヤーに便利な決済手段",
      },
      {
        name: "Vega Wallet",
        icon: "/assets/payments/vega-wallet.svg",
        href: "https://casinotsu.com/payment/vega-wallet",
        badge: "Eウォレット",
        note: "迅速な処理が可能な電子ウォレット",
      },
      {
        name: "コンビニ決済",
        icon: "/assets/payments/konbini.svg",
        badge: "ユニーク",
        note: "手軽に入金できる便利な方法",
      },
    ],
    deposits: [
      { name: "クレジットカード (VISA, MasterCard, JCB)", icon: "/assets/payments/visa.svg" },
      { name: "銀行振込", icon: "/assets/payments/bank-transfer.svg" },
      { name: "インターネットバンキング" },
      { name: "銀行振込 (ATM)" },
      { name: "コンビニ決済" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vega-wallet" },
      { name: "Payz" },
      { name: "E-Wallet (ZAKZAK)" },
      { name: "ビットコイン (BTC)", icon: "/assets/payments/bitcoin.svg" },
      { name: "イーサリアム (ETH)", icon: "/assets/payments/ethereum.svg" },
      { name: "テザー (USDT)" },
      { name: "ライトコイン (LTC)" },
      { name: "リップル (XRP)" },
    ],
    withdrawals: [
      { name: "銀行振込", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vega-wallet" },
      { name: "Payz" },
      { name: "ビットコイン (BTC)", icon: "/assets/payments/bitcoin.svg" },
      { name: "イーサリアム (ETH)", icon: "/assets/payments/ethereum.svg" },
      { name: "テザー (USDT)" },
      { name: "ライトコイン (LTC)" },
      { name: "リップル (XRP)" },
    ],
    notes: [
      "銀行振込での出金には3.5%の手数料がかかりました。",
      "1回の最大出金額は¥1,000,000、毎月の最大出金額は¥10,000,000でした。",
      "近年、銀行振込は入出金トラブルの報告があるため、利用には注意が必要とされていました。",
    ],
  },
  bonuses: {
    overview:
      "⚠️重要：カジノレオは2025年8月に日本市場から撤退しました。以下のボーナス情報は過去の記録です。カジノレオは、賭け条件のない入金不要ボーナスや、合計最大15万円の3回にわたるウェルカムボーナスなど、非常に豪華なプロモーションで知られていました。",
    noDeposit:
      "CasinoTsuからの登録で、人気スロット『花魁ドリーム』で使えるフリースピン10回分が提供されていました。このボーナスの最大の特徴は、勝利金がキャッシュとして進呈され【賭け条件が一切なかった】点です。プロモーションコード『SPINS10』の入力が必要でした。",
    extraSpins: {
      summary:
        "入金不要ボーナスとして提供された10回のフリースピンは、勝利金の即時出金も可能という、非常に珍しく価値の高いものでした。",
      schedule: [],
      warning: "登録時にプロモーションコードの入力を忘れると受け取れませんでした。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "100%", cap: "¥30,000", code: "不要" },
      { depositNumber: "2回目", percent: "100%", cap: "¥50,000", code: "不要" },
      { depositNumber: "3回目", percent: "100%", cap: "¥70,000", code: "不要" },
    ],
    conditions: [
      "初回入金ボーナスは分離型で、賭け条件はボーナス額の20倍でした。",
      "ボーナスの有効期限は受領後30日間。",
      "ボーナス利用中の最大ベット額は¥500、または入金額の10%のうち低い方でした。",
      "ゲームごとの賭け条件消化率：スロット100%、ライブカジノ・テーブルゲーム10%。",
    ],
    prohibitedGames: [
      "ボーナス資金でのプレイが禁止されているゲームがありました。詳細は利用規約で確認する必要がありました。",
    ],
  },
  offers: [
    {
      title: "期間限定イベント",
      description: "カジノレオでは、期間限定のイベントが豊富に用意されており、プレイヤーを飽きさせない工夫がされていました。",
      highlight: "公式Twitterなどで常に最新情報をチェックする必要があった",
    },
  ],
  facts: [
    { label: "名称", value: "CasinoLeo (カジノレオ)" },
    { label: "ローンチ", value: "2022年" },
    { label: "運営会社", value: "Dawg Entertainment B.V." },
    { label: "ライセンス", value: "GAMING CURACAO" },
    { label: "VIPプログラム", value: "❌" },
    { label: "対応言語", value: "日本語" },
    { label: "対応通貨", value: "JPY" },
    {
      label: "ゲームタイプ",
      value:
        "バカラ, ブラックジャック, クラップス, ゲームショー, ライブカジノ, ポーカー, ルーレット, スロット",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://casinotsu.com/providers/microgaming">Microgaming</Link>, <Link href="https://casinotsu.com/providers/nolimit-city">Nolimit City</Link>, <Link href="https://casinotsu.com/providers/play-n-go">Play’n GO</Link>, <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://casinotsu.com/providers/relax-gaming">Relax</Link>, Slingshot Studios, <Link href="https://casinotsu.com/providers/yggdrasil">Yggdrasil</Link>, <Link href="https://casinotsu.com/providers/golden-hero-games">Golden Hero</Link>, <Link href="https://casinotsu.com/providers/netent">NetEnt</Link>, <Link href="https://casinotsu.com/providers/evolution">Evolution</Link>, <Link href="https://casinotsu.com/providers/vivo-gaming">Vivo Gaming</Link> など40社以上
        </span>
      ),
    },
    { label: "最小入金額", value: "¥1,000" },
    { label: "最小出金額", value: "情報なし" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@casinoleo.com">support@casinoleo.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (24時間日本語対応)" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "⚠️重要なお知らせ⚠️ CasinoTsuは、カジノレオ（Casino Leo）が2022年9月のサービス開始から約3年後の2025年8月をもって、日本市場から撤退したことを確認しました。このレビューは、同カジノが提供していたサービスを記録として残すものです。",
      "カジノレオは、その豪華なボーナス、特に賭け条件のない入金不要フリースピンで大きな注目を集めたオンラインカジノでした。また、24時間対応の質の高い日本語サポートも、多くの日本人プレイヤーから評価されていました。",
      "YouTuberヒカル氏とのコラボレーションなど、ユニークなマーケティングも展開していましたが、決済方法の限定性やVIPプログラムの不在といった課題も抱えていました。",
    ],
    ctas: [
      { text: "🌟 CasinoTsuが推薦する他の優良カジノはこちら", href: "https://casinotsu.com/reviews" },
    ],
  },
  games: [
    "サービス開始当初はゲーム数が少なかったものの、最終的には約3,000種類までラインナップを拡充しました。Microgamingのプログレッシブジャックポットや、Golden Hero社の人気パチスロ風スロットなど、日本のプレイヤーに人気のゲームが揃っていました。",
    "ライブカジノも充実しており、Evolution社による日本語テーブルや、Vivo Gaming社のセクシーなディーラーとのプレイが楽しめるなど、多彩な選択肢が提供されていました。",
  ],
  features: [
    "カジノレオの無料版「レオファン」では、人気YouTuberヒカル氏とのコラボスロット「ヒカルスーパーライブ」が提供されるなど、ユニークで話題性のある試みを行っていました。",
    "特別なアプリのダウンロードは不要で、モバイルファーストの考え方に基づいたデザインにより、どのデバイスからでもブラウザ経由で快適にプレイが可能でした。",
  ],
  editorial: {
    author: "Kotone",
    profileHref: "/authors/rina-okabe",
    hook: "ボーナスの魅力とサポートの質はトップクラスでしたが、基盤となるサービスの拡充が待たれる中での撤退となりました。",
    theGoodStuff: "賭け条件ゼロの入金不要スピンと、条件が緩めの最大15万円ウェルカムボーナスは、新規プレイヤーにとって非常に魅力的でした。また、24時間いつでも親切な日本人オペレーターにつながるチャットサポートは、絶大な安心感を提供していました。",
    theHeadsUp: "一方で、決済方法の種類が少なく、特に主要なEウォレットの選択肢が限られていた点は大きな弱点でした。また、長期プレイヤーを繋ぎ止めるためのVIPプログラムやロイヤリティ制度がなかったことも、今後の成長における課題と見られていました。",
    finalThought: "プレイヤーにとってのメリットが非常に分かりやすいカジノでしたが、インフラ面の拡充が追いつく前に市場から去ることになり、そのポテンシャルを惜しむ声も少なくありません。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "2022年9月に日本市場に登場したカジノレオは、短期間で多くのプレイヤーの注目を集めることに成功しました。その最大の武器は、疑いようもなく「ボーナス」でした。特に、登録するだけで貰え、勝利金に賭け条件が一切かからない入金不要フリースピンは、業界に衝撃を与えました。これは、カジノ側の自信の表れであり、プレイヤーにリスクなくサイトを試してもらいたいという強い意志の現れでした。続く3回にわたる最大15万円のウェルカムボーナスも、賭け条件が20倍の分離型と、非常に良心的な設定でした。",
      "サポート体制も特筆すべき点です。24時間365日、いつでも日本語ネイティブのスタッフとライブチャットで繋がることができる環境は、初心者からベテランまで、すべてのプレイヤーに安心感を与えました。その対応は迅速かつ丁寧で、カジノレオの信頼性を高める大きな要因となっていました。",
      "ゲームのラインナップも、サービス開始後の急速な拡充により、最終的には約3,000種類と十分な規模に達しました。人気プロバイダーを網羅し、日本人プレイヤーの好みに合わせたゲーム選定がなされていました。",
      "しかし、その輝かしい側面の裏で、いくつかの課題も抱えていました。最も顕著だったのは決済方法の乏しさです。クレジットカードと一部の決済サービスには対応していたものの、多くのプレイヤーが利用する主要な電子ウォレットが不足しており、利便性の面で他の大手カジノに劣っていました。また、リピーターを優遇するVIPプログラムが存在しなかったことも、長期的な視点で見ればマイナス要素でした。",
      "これらの課題を克服し、さらなる成長が期待される中での2025年8月の日本市場撤退は、非常に残念なニュースでした。カジノレオは、プレイヤーへの還元を重視した姿勢で、オンラインカジノ市場に一石を投じた存在として記憶されるでしょう。",
    ],
  },
  security: [
    "多くのオンラインカジノが採用するキュラソーライセンスを取得し、合法的に運営されていました。",
    "運営会社はDawg Entertainment B.V.で、サイトにはプライバシーポリシーが明記されていました。",
    "SSL暗号化技術によりプレイヤーの個人データは厳格に保護されていました。",
    "提供されるゲームはすべて第三者機関の監査を受けたRNGを搭載し、公平性が保証されていました。",
    "日本国内からのプレイには法的なリスクが伴うこと、そしてその対策（VPNや仮想通貨の利用）についても注意喚起がありました。",
  ],
  responsiblePlay: [
    "入金制限: 日・週・月単位で入金額の上限を設定可能でした。",
    "セッション制限: プレイ時間を制限する機能がありました。",
    "ロス制限: 損失額の上限を設定可能でした。",
    "リアリティチェック: プレイ時間や収支を定期的に通知する機能がありました。",
    "自己排除オプション: サポートへの連絡により、アカウントの一時的または永久的な閉鎖が可能でした。",
    "バンクロール管理のアドバイスや、問題ギャンブルの兆候に関する情報提供も行われていました。",
  ],
  complaintStats: [],
  awards: [],
  restrictedCountries: [],
  userConcerns: [],
  summary: [
    "2025年8月に日本市場から撤退。このレビューは過去のサービス内容を記録したものです。",
    "賭け条件なしの入金不要ボーナスと、条件の緩い高額ウェルカムボーナスが最大の魅力でした。",
    "24時間対応の日本語ライブチャットサポートは、非常に質が高く評価されていました。",
    "決済方法の少なさとVIPプログラムの不在が、サービス上の主な課題でした。",
  ],
  extraLinks: [
    { text: "🔰 賭け条件とは？分離型と一体型の違いを解説", href: "https://casinotsu.com/guides/wagering-requirements" },
    { text: "🎰 人気のパチスロ風スロット特集", href: "https://casinotsu.com/guides/pachinko" },
  ],
  faq: [
    {
      question: "カジノ・レオでクレジットカードは使えましたか？",
      answer: "はい、サービス提供期間中はVISA、Mastercard、JCBのクレジットカードによる入金が可能でした。",
    },
    {
      question: "レオファンに登録すればカジノ・レオも利用できましたか？",
      answer: "いいえ、無料版の「レオファン」とリアルマネー版の「カジノ・レオ」は別々のサービスであり、それぞれ個別の登録が必要でした。",
    },
  ],
  cta: {
    text: "CasinoTsuが推薦する他の優良カジノを探す",
    href: "https://casinotsu.com/reviews",
  },
};