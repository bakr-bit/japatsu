import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewQueenCasino: ReviewPageContent = {
  hero: {
    title: "クイーンカジノ（Queen Casino）レビュー",
    subheading: "最大$1,800入金ボーナス + 最大$88入金不要ボーナス",
    description: "2023年に大規模リニューアル！パチンコ・パチスロ、麻雀、ポーカーも遊べるアジア市場の王者がさらに進化。CasinoTsuがその全貌を徹底解説します。",
    score: 4.3,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 92,
        note: "パチンコ・パチスロ導入で日本市場での人気が再燃。アジアでの確固たる地位と豊富なゲームが魅力。",
      },
      {
        label: "規約",
        percent: 85,
        note: "タスク完了型の入金不要ボーナスは豪華。入金ボーナスの賭け条件も段階的に緩やかになるのが良い。",
      },
      {
        label: "操作性",
        percent: 88,
        note: "サイトは洗練されており、初心者向けガイドも充実。決済方法も豊富でスムーズに利用できる。",
      },
      {
        label: "サポート",
        percent: 95,
        note: "24時間365日、日本人スタッフによるライブチャット対応は業界最高水準。安心して利用できる。",
      },
    ],
    highlights: [
      "伝説の4号機や5号機などオンラインパチンコ・パチスロが遊べる",
      "プレイヤー同士で対戦できる麻雀やオンラインポーカーも提供",
      "最大$88＋88回FSのタスク完了型入金不要ボーナス",
      "24時間365日対応の完全日本語カスタマーサポート",
      "レベルダウンなしの豪華なVIPプログラム「ロイヤルティクラブ」",
    ],
    watchouts: [
      "ボーナスはパチンコ・パチスロ・ライブカジノでは利用不可",
      "ボーナスからの勝利金のキャッシュ移行上限は5倍",
      "リニューアル後も一部で出金が遅いとのユーザー報告あり",
    ],
    avatarSrc: "/assets/casino/queen-casino.png",
    avatarAlt: "Queen casinoのロゴ",
  },
  payments: {
    featured: [
      {
        name: "銀行振込",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://www.japanesecasino.com/payment/bank-transfer",
        badge: "迅速",
        note: "原則15分以内に着金するスピーディーな国内送金",
      },
      {
        name: "クレジットカード",
        icon: "/assets/payments/visa.svg",
        href: "https://www.japanesecasino.com/payment/visa",
        badge: "手軽",
        note: "VISA, MasterCard, AMEXに対応",
      },
      {
        name: "Vega Wallet",
        icon: "/assets/payments/vega-wallet.svg",
        href: "https://www.japanesecasino.com/payment/vega-wallet",
        badge: "人気",
        note: "多くの日本人プレイヤーに利用されるEウォレット",
      },
      {
        name: "仮想通貨",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://www.japanesecasino.com/payment/crypto",
        badge: "12種類対応",
        note: "BTC, ETH, USDTなど主要な暗号資産に対応",
      },
    ],
    deposits: [
      { name: "銀行振込", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Visa", icon: "/assets/payments/visa.svg" },
      { name: "MasterCard", icon: "/assets/payments/mastercard.svg" },
      { name: "AMEX" },
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://www.japanesecasino.com/payment/payz" },
      { name: "Sticpay", icon: "/assets/payments/sticpay.svg" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg" },
      { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg" },
      { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg" },
      { name: "Tether (USDT)" },
      { name: "USD Coin (USDC)" },
      { name: "Dogecoin (DOGE)" },
      { name: "Litecoin (LTC)" },
      { name: "TRON (TRX)" },
      { name: "DAI" },
      { name: "Ripple (XRP)" },
      { name: "Cardano (ADA)" },
    ],
    withdrawals: [
      { name: "銀行振込", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Sticpay", icon: "/assets/payments/sticpay.svg" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg" },
      { name: "仮想通貨 (12種類)" },
    ],
    notes: [
      "出金手数料は無料です。出金処理は平均24時間以内、通常5分～12時間で完了します。",
      "クレジットカードで入金した場合、残高はUSDTで反映され、出金は仮想通貨で行う必要があります。",
      "Vega Walletと仮想通貨を利用する場合、KYC（本人確認）なしで入出金が可能です。",
    ],
  },
  bonuses: {
    overview:
      "クイーンカジノのボーナスは非常に多層的で豪華です。新規登録者は、本人確認の進捗に応じて最大$88＋88回のフリースピンがもらえるタスク完了型の入金不要ボーナスからスタートできます。その後、初回から3回目までの入金で合計最大1,800 USDTのボーナスと、時間限定で最大200回のフリースピンが提供されます。",
    noDeposit:
      "新規登録後、本人確認（KYC）のレベルを進めるごとにボーナスとフリースピンが進呈されます。合計で最大88 USDTと88回のフリースピン（対象機種: Queen Casino Bonanza）を獲得できます。ボーナスの賭け条件は30倍、フリースピン勝利金は20倍です。",
    extraSpins: {
      summary: "入金不要ボーナスで最大88回、さらに初回から3回目の入金を特定の時間内に行うことで、人気スロット『Sweet Bonanza』のフリースピンが合計で最大200回分追加で付与されます。",
      schedule: [
        "KYCレベル1完了: 10回",
        "KYCレベル2完了: 28回",
        "KYCレベル3完了: 50回",
        "初回入金（登録から3時間以内）: 60回",
        "2回目入金（登録から24時間以内）: 70回",
        "3回目入金（登録から48時間以内）: 70回",
      ],
      warning: "フリースピン勝利金の賭け条件は20倍です。勝利金が$100以上になるとボーナスに変換され、そこから賭け条件の消化が始まります。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "100%", cap: "800 USDT", code: "不要" },
      { depositNumber: "2回目", percent: "50%", cap: "500 USDT", code: "不要" },
      { depositNumber: "3回目", percent: "30%", cap: "500 USDT", code: "不要" },
    ],
    conditions: [
      "入金ボーナスの賭け条件は（入金額＋ボーナス額）に適用されます（初回25倍、2回目以降15倍）。",
      "各入金ボーナスの最低入金額は$10です。",
      "ボーナスからの勝利金をキャッシュに移行する際の上限額は、受け取ったボーナス額の5倍です。",
      "ボーナスの有効期限は3日間です。",
    ],
    prohibitedGames: [
      "全てのパチンコ・パチスロ機種",
      "iSLOT",
      "ライブカジノ",
    ],
  },
  offers: [
    {
      title: "VIPプログラム「ロイヤルティクラブ」",
      description: "全プレイヤーが参加できるVIPプログラム。月間ベット額に応じてレベルが上がり、レベルアップボーナスや誕生日ギフト、キャッシュバック（最大6%）などの報酬が受け取れます。レベルダウンがないため、着実に昇格できます。",
      highlight: "最高位「レジェンド」は世界旅行への招待など超豪華特典",
    },
  ],
  facts: [
    { label: "名称", value: "Queen Casino（クイーンカジノ）" },
    { label: "ローンチ", value: "2016年（2023年にリニューアル）" },
    { label: "運営会社", value: "ZEN ESTRATEGA BV Limited" },
    { label: "ライセンス", value: "Curaçao" },
    { label: "VIPプログラム", value: "✅「ロイヤルティクラブ」" },
    {
      label: "対応言語",
      value: "日本語、英語",
    },
    { label: "対応通貨", value: "JPY, USD, 仮想通貨" },
    {
      label: "ゲームタイプ",
      value:
        "パチンコ, パチスロ, 麻雀, オンラインポーカー, スポーツブック, スロット, ライブカジノ, ゲームショー, ジャックポット, ビデオポーカー",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://www.japanesecasino.com/providers/red-tiger">Red Tiger</Link>, <Link href="https://www.japanesecasino.com/providers/relax-gaming">Relax</Link>, <Link href="https://www.japanesecasino.com/providers/play-n-go">Play’n GO</Link>, PG Soft, WinFast (Golden Hero), <Link href="https://www.japanesecasino.com/providers/evolution">Evolution</Link>, <Link href="https://www.japanesecasino.com/providers/pragmatic-play">Pragmatic Play</Link>, EEZEなど合計24社
        </span>
      ),
    },
    { label: "最小入金額", value: "¥840 / $10" },
    { label: "最小出金額", value: "情報なし" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@queen-casino.com">support@queen-casino.com</Link> },
    { label: "ライブチャット", value: "24時間365日 日本語対応" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "クイーンカジノは2016年から運営されているアジア市場のベテランですが、2023年の大規模リニューアルによって全く新しいカジノへと生まれ変わりました。",
      "最大の目玉は、日本のファンにはたまらないオンラインパチンコ・パチスロの導入です。伝説的な4号機や5号機をオンラインで楽しめるだけでなく、プレイヤー同士で対戦できる麻雀やオンラインポーカーまで完備しています。",
      "豪華なウェルカムボーナス、充実したVIPプログラム、そして24時間対応の日本語サポートを備え、初心者からハイローラーまで、あらゆるプレイヤーに最高の体験を提供することを目指しています。",
    ],
    ctas: [
      { text: "👉 クイーンカジノでパチンコをプレイ！", href: "https://go.japanesecasino.com/go/queen-casino" },
      { text: "🔰 パチンコ初心者向けガイドはこちら", href: "https://www.japanesecasino.com/guides/pachinko" },
    ],
  },
  games: [
    "クイーンカジノのゲームライブラリは、その多様性において他の追随を許しません。3,000種類以上のスロットゲームはもちろん、最大の魅力は日本独自のゲーム文化を取り入れた点にあります。",
    "「くいぱち」セクションでは、『ミリオンゴッド-神々の凱旋-』や『CR 真・北斗無双』といった伝説的なパチスロ4号機・5号機やパチンコCR機をオンラインでプレイできます。さらに、プレイヤー同士で腕を競うことができる麻雀やオンラインポーカーも提供しており、単なるカジノゲームの枠を超えた総合的なエンターテイメントプラットフォームとなっています。",
    "ライブカジノでは、クイーンカジノ独占のテーブルも用意されており、定番からニッチなゲームまで幅広く楽しめます。スポーツブックも完備しており、世界中のスポーツイベントにベット可能です。",
  ],
  features: [
    "クイーンカジノの「ロイヤルティクラブ」は、レベルダウンのない優れたVIPプログラムです。月間のベット額に応じてレベルが上がり、キャッシュバックや豪華なレベルアップボーナスがもらえます。最高レベルの「レジェンド」になると、世界旅行への招待など、まさに王族のような待遇を受けられます。",
    "初心者への配慮も手厚く、決済ページには仮想通貨の購入方法やVega Walletの利用方法が図解付きで丁寧に説明されており、初めての方でも安心して入出金を行うことができます。",
  ],
  editorial: {
    author: "Kotone",
    profileHref: "/authors/rina-okabe",
    hook: "パチンコ・麻雀・ポーカーまで揃えた、まさにエンタメの王様。リニューアルで弱点を克服し、最強カジノの一つに。",
    theGoodStuff: "リニューアル後の進化は目覚ましく、特にパチンコ・パチスロの導入は日本のプレイヤーにとって最大の魅力です。24時間365日の手厚い日本語サポートと迅速な決済は、安心して遊べる基盤を固めています。ボーナスも非常に豪華で、初心者でも始めやすい環境が整っています。",
    theHeadsUp: "リニューアル前の評判であった出金の遅さは改善傾向にありますが、一部のユーザーからはまだ遅延の報告が見られます。また、豪華なボーナスには「キャッシュへの移行上限5倍」や「パチンコ・ライブカジノで利用不可」といった制限があるため、利用規約の確認は必須です。",
    finalThought: "弱点を克服し、独自の強みを大幅に強化したクイーンカジノは、間違いなくプレイする価値のあるトップクラスのカジノです。特にパチンコや麻雀が好きな方にとっては、これ以上ない選択肢と言えるでしょう。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "CasinoTsuがクイーンカジノを評価するにあたり、最も注目したのは2023年の大規模リニューアルがもたらした変革です。かつてはアジア市場で一定の評価を得つつも、出金の遅さなどが課題とされていましたが、リニューアル後はその評価を一変させました。運営体制の刷新と共に、サイトデザインは洗練され、決済システムは大幅に高速化しました。",
      "しかし、真の変革はそのゲームラインナップにあります。クイーンカジノは、単なるスロットとライブカジノの集合体から、日本のギャンブル文化を深く理解した総合エンターテイメントハブへと進化しました。その象徴が「くいぱち」と名付けられたオンラインパチンコ・パチスロセクションです。ホールから姿を消した伝説の4号機や5号機を、オンラインでいつでもプレイできるという事実は、多くのファンにとって夢のような話でしょう。さらに、プレイヤー同士の真剣勝負が楽しめる麻雀やオンラインポーカーを導入したことで、運だけでなくスキルも試される、より深いゲーム体験を提供しています。",
      "ボーナス制度も非常に魅力的です。本人確認（KYC）のステップをクリアするごとに報酬がもらえるタスク完了型の入金不要ボーナスは、プレイヤーに登録後のアクションを促す優れた仕組みです。続く3段階の入金ボーナスも、合計で最大1,800 USDTと非常に高額であり、新規プレイヤーを強力にサポートします。レベルダウンのないVIPプログラム「ロイヤルティクラブ」も、長期的にプレイするプレイヤーにとって大きなモチベーションとなるでしょう。",
      "安全性とサポート体制も万全です。キュラソーライセンスに加え、iTech Labsによる第三者認証はゲームの公平性を保証し、128ビットSSL暗号化はプレイヤーのデータを守ります。そして何より、24時間365日、いつでも日本語ネイティブのスタッフに繋がるライブチャットは、プレイヤーにとって最大の安心材料です。",
      "もちろん、課題が全くないわけではありません。ボーナスにはキャッシュ移行上限などの制限があり、リニューアル後も出金速度に関する一部のネガティブな口コミは散見されます。しかし、これらの点を差し引いても、クイーンカジノが提供する独自の価値と総合的な品質は非常に高く、CasinoTsuとして自信を持って推薦できるオンラインカジノであると結論付けます。",
    ],
  },
  security: [
    "キュラソー政府発行のライセンスに基づき、厳格な監査のもとで運営",
    "128ビットSSLデータ暗号化技術で全ての個人情報と取引データを保護",
    "iTech Labsなどの第三者機関によってテストされたRNG（乱数生成器）を使用し、ゲームの公平性を保証",
  ],
  responsiblePlay: [
    "入金制限: 日・週・月単位で入金額の上限を設定可能",
    "損失制限: 一定期間の損失額に上限を設定可能",
    "ベット制限: 一定期間の総ベット額に上限を設定可能",
    "プレイ時間制限: プレイ時間に上限を設定可能",
    "クールオフ: 24時間から7日間アカウントを一時的に停止",
    "自己排除: 6ヶ月から無期限でアカウントを閉鎖可能",
  ],
  complaintStats: [],
  awards: [],
  userConcerns: [
    "リニューアル前は出金が遅いという評判があった",
    "リニューアル後も、一部のユーザーから仮想通貨の出金が遅いという報告がある",
  ],
  summary: [
    "2023年のリニューアルで大幅に進化し、特にパチンコ・パチスロ、麻雀、ポーカーが遊べる点が最大の魅力。",
    "タスク完了型の入金不要ボーナスや3段階の入金ボーナスなど、プロモーションが非常に豪華。",
    "24時間365日対応の日本語サポートは業界トップクラスの品質で、初心者でも安心して利用できる。",
    "出金速度は大幅に改善されたが、一部で遅延の報告もあるため、今後の安定化に期待。",
    "総合的に見て、ユニークなゲームと手厚いサポートを兼ね備えた、非常に推薦価値の高いカジノ。",
  ],
  extraLinks: [
    { text: "✅ オンカジの本人確認（KYC）について詳しく解説", href: "https://www.japanesecasino.com/guides/document-verification" },
  ],
  faq: [
    {
      question: "クイーンカジノでパチンコ・パチスロをプレイするにはどうすれば良いですか？",
      answer: "クイーンカジノのゲームカテゴリー「くいぱち」からプレイできます。ゲームはPokepachiポイント（1ポイント＝1円）を使用して遊びます。公式サイトには初心者向けのガイドも用意されています。",
    },
    {
      question: "クイーンカジノにアプリはありますか？",
      answer: "専用のモバイルアプリはありませんが、ウェブサイトは完全にモバイル最適化されており、どのスマートフォンのブラウザからでも快適にプレイできます。",
    },
    {
      question: "クイーンカジノでは伝説のパチスロ4号機や5号機も遊べますか？",
      answer: "はい、クイーンカジノでは『ミリオンゴッド-神々の凱旋-』など、ホールで人気を博した4号機や5号機を含む、多数のオンラインパチンコ・パチスロをプレイすることが可能です。",
    },
  ],
  cta: {
    text: "クイーンカジノでパチンコ・麻雀をプレイ！",
    href: "https://go.japanesecasino.com/go/queen-casino",
  },
};