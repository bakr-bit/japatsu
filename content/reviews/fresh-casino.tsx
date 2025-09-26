import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewFreshCasino: ReviewPageContent = {
  hero: {
    title: "フレッシュカジノ (Fresh Casino) レビュー",
    subheading: "最大¥150,000ウェルカムボーナス + 入金不要フリースピン50回",
    description: "6,000種類以上の豊富なゲームとスポーツブックを併せ持つハイブリッドカジノ。豪華なボーナスや宝くじが魅力のフレッシュカジノをCasinoTsuが徹底レビューします。",
    score: 4.0,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 77,
        note: "まだ知名度は高くないものの、豊富なボーナスやキャンペーンが用意されており、今後の発展が期待される。",
      },
      {
        label: "規約",
        percent: 80,
        note: "入金不要・ウェルカムボーナス共に賭け条件45倍とやや厳しいが、ウェルカムボーナスの出金上限が無制限なのは魅力的。",
      },
      {
        label: "操作性",
        percent: 81,
        note: "ゲームがカテゴリー別に整理されており検索しやすい。専用アプリも提供されており、快適なプレイ環境。",
      },
      {
        label: "サポート",
        percent: 79,
        note: "24時間ライブチャット対応は高評価。ただし自動翻訳を介した外国人スタッフが中心で、今後の日本人サポート充実に期待。",
      },
    ],
    highlights: [
      "CasinoTsu限定！入金不要フリースピン50回",
      "最大合計9万円の豪華ウェルカムボーナス",
      "カジノゲームとスポーツブックの両方が楽しめる",
      "毎週開催される宝くじやキャッシュバックキャンペーン",
    ],
    watchouts: [
      "サポートが外国人スタッフによる自動翻訳対応",
      "ボーナスの賭け条件が45倍とやや高め",
    ],
  },
  payments: {
    featured: [
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "/payment/visa",
        badge: "人気",
        note: "手軽でスピーディーなクレジットカード決済",
      },
      {
        name: "銀行振込",
        icon: "/assets/payments/bank-transfer.svg",
        href: "/payment/bank-transfer",
        badge: "安心",
        note: "多くのプレイヤーに選ばれる定番の決済方法",
      },
      {
        name: "Vega Wallet",
        icon: "/assets/payments/vega-wallet.svg",
        href: "/payment/vega-wallet",
        badge: "Eウォレット",
        note: "ポイントで管理する便利な電子決済サービス",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "/payment/payz",
        badge: "Eウォレット",
        note: "迅速な処理で人気の高い電子ウォレット",
      },
      {
        name: "Ethereum",
        icon: "/assets/payments/ethereum.svg",
        href: "/payment/ethereum",
        badge: "仮想通貨",
        note: "匿名性とスピードを両立した決済手段",
      },
    ],
    deposits: [
      { name: "VISA", icon: "/assets/payments/visa.svg", href: "/payment/visa" },
      { name: "銀行振込", icon: "/assets/payments/bank-transfer.svg", href: "/payment/bank-transfer" },
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "/payment/payz" },
      { name: "Tiger Pay", icon: "/assets/payments/tiger-pay.svg", href: "/payment/tiger-pay" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "/payment/vega-wallet" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg", href: "/payment/muchbetter" },
      { name: "MiFinity" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg", href: "/payment/ethereum" },
      { name: "Dogecoin" },
      { name: "Tether", icon: "/assets/payments/usdt.svg", href: "/payment/usdt" },
      { name: "TRON" },
    ],
    withdrawals: [
      { name: "銀行振込", icon: "/assets/payments/bank-transfer.svg", href: "/payment/bank-transfer" },
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "/payment/payz" },
      { name: "Tiger Pay", icon: "/assets/payments/tiger-pay.svg", href: "/payment/tiger-pay" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "/payment/vega-wallet" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg", href: "/payment/muchbetter" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg", href: "/payment/ethereum" },
      { name: "Dogecoin" },
      { name: "Tether", icon: "/assets/payments/usdt.svg", href: "/payment/usdt" },
      { name: "TRON" },
    ],
    notes: [
      "最低入金額は¥1,500から（Tiger Payは¥1,000）。最低出金額は€10（約¥1,500）からです。",
      "出金前に本人確認（KYC）が必要です。審査は通常0〜2日と迅速です。",
      "出金処理には通常24時間の保留期間があります。",
    ],
  },
  bonuses: {
    overview:
      "フレッシュカジノは、CasinoTsu限定の入金不要ボーナスから始まり、カジノ用とスポーツ用の両方で選べる豪華なウェルカムボーナス、さらにウィークリーキャッシュバックまで、多彩なプロモーションが魅力です。",
    noDeposit:
      "CasinoTsu経由の登録で、BGAMING社の人気スロット『Alien Fruits』で使える50回のフリースピンが進呈されます。アカウント登録後、プロモーションコード「JAPACASI50FS」を入力して申請してください。賭け条件は45倍です。なお、LCB経由では100回のフリースピン（賭け条件45倍、最大出金5倍）も提供されています。",
    extraSpins: {
      summary:
        "入金不要ボーナスとして50回のフリースピンが提供されるほか、毎週40ユーロ以上の入金で特定スロットの20回フリースピン（賭け条件40倍）を受け取れるキャンペーンもあります。",
      schedule: [],
      warning: "入金不要フリースピンの勝利金には出金上限が設定されている場合があります。",
    },
    welcomeRows: [
      { depositNumber: "初回 (カジノ)", percent: "100%", cap: "¥60,000", code: "不要" },
      { depositNumber: "2回目 (カジノ)", percent: "75%", cap: "¥30,000", code: "不要" },
      { depositNumber: "初回 (スポーツ)", percent: "150%", cap: "¥15,000", code: "不要" },
      { depositNumber: "2回目 (スポーツ)", percent: "100%", cap: "¥7,500", code: "不要" },
      { depositNumber: "3回目 (スポーツ)", percent: "50%", cap: "¥7,500", code: "不要" },
    ],
    conditions: [
      "カジノ用ウェルカムボーナスの賭け条件は45倍（入金額に対して）。",
      "スポーツ用ウェルカムボーナスの賭け条件は10倍。",
      "カジノ用ボーナスの最低入金額は¥2,000。スポーツ用は¥1,500。",
      "カジノ用ウェルカムボーナスには出金上限がありません。",
      "ボーナス資金からの最大勝利金は、入金額またはボーナス額の10倍に制限される場合があります。",
    ],
    prohibitedGames: [
      "カジノ用の入金ボーナスはスロット専用です。",
    ],
  },
  offers: [
    {
      title: "最大10%ウィークリーキャッシュバック",
      description: "毎週金曜日から木曜日までのスロットでの損失額に対し、最大10%がキャッシュバックされます。賭け条件は5倍と非常に緩やかで、有効期限は72時間です。",
      highlight: "賭け条件5倍の週間キャッシュバック",
    },
    {
      title: "毎週開催！宝くじ",
      description: "期間中に¥2,999以上を入金し、チケットを購入すると、抽選で10名に賞金が当たる宝くじに参加できます。",
      highlight: "入金額に応じて賞金獲得のチャンス",
    },
    {
      title: "Fresh Club (VIPプログラム)",
      description: "プレイするごとにフレッシュコインが貯まり、9段階のVIPレベルが上昇します。レベルアップごとにフリースピンや豪華な誕生日ボーナス（最大¥100,000）、出金上限額の緩和などの特典が受けられます。",
      highlight: "プレイすればするほどお得になるVIP特典",
    },
  ],
  facts: [
    { label: "名称", value: "フレッシュカジノ (Fresh Casino)" },
    { label: "ローンチ", value: "2018年" },
    { label: "運営会社", value: "Galaktika N.V." },
    { label: "ライセンス", value: "Antillephone (Curaçao)" },
    { label: "VIPプログラム", value: "✅" },
    { label: "対応言語", value: "日本語、英語など" },
    { label: "対応通貨", value: "JPY, USD, EUR, BTC, ETHなど多数" },
    {
      label: "ゲームタイプ",
      value: (
        <span>
          <Link href="/baccarat">バカラ</Link>, <Link href="/blackjack">ブラックジャック</Link>, <Link href="/craps">クラップス</Link>, <Link href="/game-shows">ゲームショー</Link>, <Link href="/live-casino">ライブカジノ</Link>, <Link href="/poker">ポーカー</Link>, <Link href="/roulette">ルーレット</Link>, <Link href="/slots">スロット</Link>, スポーツベット, インスタントゲーム
        </span>
      ),
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="/providers/bgaming">BGAMING</Link>, <Link href="/providers/big-time-gaming">Big Time Gaming</Link>, <Link href="/providers/blueprint-gaming">Blueprint Gaming</Link>, <Link href="/providers/elk-studios">Elk Studios</Link>, <Link href="/providers/hacksaw-gaming">Hacksaw Gaming</Link>, <Link href="/providers/netent">NetEnt</Link>, <Link href="/providers/nolimit-city">Nolimit City</Link>, <Link href="/providers/playson">Playson</Link>, <Link href="/providers/playtech">Playtech</Link>, <Link href="/providers/quickspin">Quickspin</Link>, <Link href="/providers/red-tiger">Red Tiger</Link>, <Link href="/providers/thunderkick">Thunderkick</Link> など127社以上
        </span>
      ),
    },
    { label: "最小入金額", value: "¥1,000" },
    { label: "最小出金額", value: "€10 (約¥1,500)" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support-en@fresh.casino">support-en@fresh.casino</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (24時間)" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "2018年に誕生したフレッシュカジノ（FRESH Casino）は、可愛らしいネコのキャラクターが目印のオンラインカジノです。",
      "スロットだけでも5,700種類以上、合計で6,000を超える圧倒的なゲーム数に加え、本格的なスポーツブックも楽しめるハイブリッドなプラットフォームが特徴です。",
      "CasinoTsu限定の入金不要フリースピンや、出金上限額が無制限のウェルカムボーナスなど、プレイヤーにとって魅力的なプロモーションが満載。このレビューでは、フレッシュカジノの全てをCasinoTsuが徹底的に解説します。",
    ],
    ctas: [
      { text: "👉 フレッシュカジノで今すぐボーナスをゲット！", href: "https://go.japanesecasino.com/go/fresh-casino:fresh-casino?referrer_path=%2Freviews%2Ffresh-casino" },
      { text: "🔰 オンラインカジノのアカウント管理方法をチェック", href: "/guides/account-management" },
    ],
  },
  games: [
    "フレッシュカジノの最大の魅力は、その圧倒的なゲームバラエティです。127社以上のプロバイダーから提供されるスロットは5,753種類を超え、ホラー、アジア、ファンタジーといったジャンル別に整理されており、好みのゲームを簡単に見つけることができます。",
    "ライブカジノでは、Evolution社やPlaytech社といった大手はもちろん、日本ではまだ珍しいAtmosfera社のテーブルも楽しめます。さらに、クラッシュゲームやプリンコなどのインスタントゲームも充実しており、短時間で手軽に遊べるのも嬉しいポイントです。",
  ],
  features: [
    "フレッシュカジノはカジノゲームだけでなく、本格的なスポーツブックも提供しています。サッカーやバスケットボールなど主要なスポーツはもちろん、Vスポーツも楽しめ、専用のウェルカムボーナスも用意されています。",
    "iOSとAndroidの両方に対応した専用モバイルアプリが提供されており、ブラウザを開く手間なく、いつでもどこでも快適にプレイできます。",
  ],
  editorial: {
    author: "Kotone",
    profileHref: "/authors/kotone",
    hook: "ゲームの種類の多さとボーナスの豪華さが際立つ一方、サポート体制には改善の余地あり。",
    theGoodStuff: "6,000種類を超えるゲームライブラリとスポーツブックは、どんなプレイヤーでも飽きさせません。特に、賭け条件をクリアすれば上限なく出金できるウェルカムボーナスは、大きな勝利を狙うプレイヤーにとって非常に魅力的です。",
    theHeadsUp: "最大の懸念点は、カスタマーサポートが自動翻訳を介した外国人スタッフ中心であることです。簡単な質問なら問題ありませんが、複雑なトラブルが発生した際にスムーズなコミュニケーションが難しい可能性があります。また、賭け条件45倍はやや厳しい設定です。",
    finalThought: "サポート面での若干の不安はありますが、それを補って余りあるゲームの豊富さとボーナスのポテンシャルを秘めたカジノです。特に、スロット好きやハイローラーには試してみる価値が大いにあるでしょう。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "CasinoTsuがフレッシュカジノを総合的に評価した結果、これは「圧倒的なゲームの選択肢と太っ腹なボーナスを提供する、ポテンシャルの高いカジノ」であると結論付けます。2018年の設立以来、着実にゲーム数を増やし、現在ではスロットだけで5,700種類以上、総数では6,000を超える巨大なライブラリを構築しています。これに加えて本格的なスポーツブックも備えているため、あらゆるタイプのギャンブラーのニーズに応えることが可能です。",
      "プロモーションの質も高く評価できます。CasinoTsu限定の入金不要フリースピン50回は、リスクなしでカジノを試す絶好の機会です。さらに、最大9万円のウェルカムボーナスは、賭け条件45倍とやや厳しいものの、クリア後の出金上限が無制限という大きなメリットがあります。これは、高額勝利の夢を追うプレイヤーにとって強力なインセンティブとなるでしょう。毎週のキャッシュバックや宝くじ、充実したVIPプログラムも、長期的にプレイする上でのモチベーションを維持してくれます。",
      "操作性も良好です。ゲームはジャンルごとに見やすく整理されており、目的のゲームに素早くたどり着けます。iOS・Androidの両方に対応した専用アプリの存在も、モバイルユーザーにとっては大きなプラスポイントです。また、本人確認（KYC）のプロセスが迅速であるとの評判も、スムーズな出金体験につながります。",
      "一方で、改善点も明確です。現在のところ、24時間対応のライブチャットは自動翻訳を介した外国人スタッフが中心です。これにより、コミュニケーションに齟齬が生じる可能性があり、特に初心者や緊急のサポートが必要なプレイヤーにとっては不安要素となり得ます。今後の日本人サポートの導入が強く望まれます。",
      "総括すると、フレッシュカジノはサポート体制に課題を残しつつも、それを補うだけの豊富なゲームコンテンツと魅力的なボーナスを備えています。特に、多種多様なスロットを遊び尽くしたい方や、ボーナスを活かして大きな勝利を狙いたい方には、最適な選択肢の一つと言えるでしょう。",
    ],
  },
  security: [
    "キュラソー（Antillephone）の公式ライセンスを取得し、合法的に運営",
    "運営会社はGalaktika N.V.として明記されている",
    "提供するゲームはすべてライセンスを取得した信頼性の高いプロバイダー製",
    "公式サイトに詳細な個人情報保護方針を掲載",
  ],
  responsiblePlay: [
    "自己制限ツールを提供しており、プレイヤー自身でギャンブル行動を管理可能。",
  ],
  complaintStats: [
    "LCB（Latest Casino Bonuses）のレビューサイトで、1692件中41位という高評価を獲得している。",
    "本人確認（KYC）の審査が迅速（一部では30分で完了）であるとプレイヤーから好評。",
  ],
  awards: [],
  restrictedCountries: [],
  userConcerns: [
    "ライブチャットサポートが自動翻訳を介した外国人スタッフによる対応である点。",
    "ボーナスの賭け条件が45倍と、やや厳しい設定である点。",
  ],
  summary: [
    "6,000種類以上のゲームとスポーツブックを提供する、非常に豊富なラインナップが魅力。",
    "入金不要ボーナスや、出金上限なしのウェルカムボーナスなど、プロモーションが充実している。",
    "専用アプリがあり、操作性も良好。ただし、カスタマーサポートは自動翻訳が中心。",
    "ゲームの多様性を重視し、ボーナスを最大限に活用したいプレイヤーにおすすめのカジノ。",
  ],
  extraLinks: [
    { text: "🔰 賭け条件ってなに？わかりやすく解説！", href: "/guides/wagering-requirements" },
    { text: "👑 VIPプログラムでお得にプレイ！", href: "/guides/vip-program" },
  ],
  faq: [
    {
      question: "フレッシュカジノではスポーツブックで遊べますか？",
      answer: "はい、遊べます。フレッシュカジノはカジノゲームに加え、本格的なスポーツブックとVスポーツも提供しています。",
    },
    {
      question: "フレッシュカジノのモバイルアプリはどこでダウンロードできますか？",
      answer: "公式サイトにApple App StoreおよびGoogle Playへのリンクが用意されています。そちらから安全にダウンロードすることができます。",
    },
  ],
  cta: {
    text: "フレッシュカジノで限定ボーナスを受け取ってプレイを開始する",
    href: "https://go.japanesecasino.com/go/fresh-casino:fresh-casino?referrer_path=%2Freviews%2Ffresh-casino",
  },
};