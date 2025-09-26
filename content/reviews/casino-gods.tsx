import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewCasinoGods: ReviewPageContent = {
  hero: {
    title: "Casino Gods (カジノゴッズ) レビュー (閉鎖済み)",
    subheading: "最大$1,200 + 220フリースピン",
    description: "神話をテーマにしたCasino Godsは、2021年9月に日本市場を、その後グローバル市場全体で閉鎖しました。このレビューは、同カジノが提供していたサービスに関する過去の記録です。",
    score: 4.2,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 77,
        note: "知名度はあったものの、際立った強みがなく平均的な人気に留まっていた。",
      },
      {
        label: "規約",
        percent: 93,
        note: "ウェルカムボーナスやキャッシュバックが豊富で、プロモーションを重視するプレイヤーには魅力的だった。",
      },
      {
        label: "操作性",
        percent: 84,
        note: "決済方法が豊富で利便性が高かったが、特に秀でた機能はなく標準的な使いやすさだった。",
      },
      {
        label: "サポート",
        percent: 93,
        note: "対応は非常に丁寧で好印象だったが、サポート時間が17時〜24時と限られていた。",
      },
    ],
    highlights: [
      "非常に豊富な決済方法",
      "スロットとライブカジノで選べるウェルカムボーナス",
      "MGAやUKGCなど信頼性の高いライセンスを複数取得",
      "毎週10%のキャッシュバックプロモーション",
    ],
    watchouts: [
      "日本市場およびグローバル市場で完全に閉鎖済み",
      "出金に数週間〜数ヶ月かかるとのプレイヤー報告多数",
      "運営会社の関連プログラムがブラックリストに掲載",
      "アカウントの不当な閉鎖や未払いに関する報告あり",
      "すべての出金に2%の手数料がかかる場合があった",
    ],
  },
  payments: {
    featured: [
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://casinotsu.com/payment/visa",
        badge: "クレジットカード",
        note: "主要なカードブランドに対応",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://casinotsu.com/payment/payz",
        badge: "Eウォレット",
        note: "迅速な入出金で人気の決済手段",
      },
      {
        name: "MuchBetter",
        icon: "/assets/payments/muchbetter.svg",
        href: "https://casinotsu.com/payment/muchbetter",
        badge: "Eウォレット",
        note: "アプリベースで手軽に利用可能",
      },
      {
        name: "Venus Point",
        icon: "/assets/payments/venus-point.svg",
        badge: "ポイント制",
        note: "ポイントでの資金管理が便利",
      },
      {
        name: "PayPal",
        icon: "/assets/payments/paypal.svg",
        badge: "対応",
        note: "世界的に信頼されている決済サービス",
      },
    ],
    deposits: [
      { name: "VISA" }, { name: "Mastercard" }, { name: "JCB" }, { name: "AMEX" }, { name: "Diners Club" },
      { name: "VenusPoint" }, { name: "Payz" }, { name: "MuchBetter" }, { name: "AstroPay" },
      { name: "Maestro" }, { name: "Paysafecard" }, { name: "Skrill" }, { name: "Neteller" },
      { name: "Boku" }, { name: "Trustly" }, { name: "PayPal" }, { name: "Jeton" }, { name: "iDebit" },
      { name: "Interac" }, { name: "instaDebit" }, { name: "Easy EFT" }, { name: "Sofort" },
      { name: "Giropay" }, { name: "Zimpler" }, { name: "Rapid Transfer" }, { name: "Euteller" },
      { name: "Neosurf" }, { name: "American Express" }, { name: "ApplePay" }, { name: "Ecobanq" },
      { name: "eZeeWallet" }, { name: "Google Pay" }, { name: "RuPay" }, { name: "Paytm" },
      { name: "Brite" }, { name: "MiFinity" }, { name: "UPI" },
    ],
    withdrawals: [
      { name: "VenusPoint" }, { name: "Payz" }, { name: "MuchBetter" }, { name: "AstroPay" },
      { name: "Bank Wire Transfer" }, { name: "Trustly" }, { name: "PayPal" }, { name: "iDebit" },
      { name: "Interac" }, { name: "instaDebit" }, { name: "Rapid Transfer" }, { name: "Euteller" },
    ],
    notes: [
      "全ての出金に対し、2%の手数料が適用される場合がありました。",
      "米ドルの出金限度額は週$5,500、月$22,000でした。",
      "Eウォレットでの出金は0〜1時間と非常に迅速でしたが、プレイヤーからは大幅な遅延が多数報告されていました。",
    ],
  },
  bonuses: {
    overview:
      "⚠️重要なお知らせ⚠️ Casino Godsは完全に閉鎖されており、以下のボーナスは現在利用できません。この情報は過去の記録として掲載しています。Casino Godsはスロット用とライブカジノ用で選べるウェルカムボーナスを提供していました。",
    noDeposit:
      "特定の入金不要ボーナスはありませんでしたが、サプライズギフトなどのプロモーションがありました。",
    extraSpins: {
      summary:
        "スロット用ウェルカムボーナスの一部として、合計200回のフリースピンが提供されていました。",
      schedule: [
        "初回入金日に20スピンが付与",
        "その後9日間にわたり、毎日ログイン時に20スピンずつ付与",
      ],
      warning: "フリースピンの有効期限は72時間で、勝利金の出金上限額は$100でした。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "100%", cap: "$300 + 200 FS", code: "チェックボックス" },
      { depositNumber: "2回目", percent: "50%", cap: "$300", code: "JPGODS2" },
      { depositNumber: "3回目", percent: "25%", cap: "$300", code: "JPGODS3" },
      { depositNumber: "4回目", percent: "25%", cap: "$300", code: "JPGODS4" },
    ],
    conditions: [
      "ボーナスの賭け条件はボーナス額の40倍。",
      "ボーナスの有効期限は14日間。",
      "ボーナスマネーでの最大ベット額は、スロット$5、その他ゲーム$30。",
      "最低入金額は$15。",
    ],
    prohibitedGames: [
      "全てのジャックポットゲーム", "全てのライブカジノゲーム", "ビデオポーカーゲーム",
      "Beautiful Bones", "Castle Builder", "Castle Builder II", "Cool Buck", "Dragons Myth",
      "Forsaken Kingdom", "Peek-a-Boo", "Scrooge", "Stardust", "Untamed Bengal Tiger",
      "Untamed Crowned Eagle", "Untamed Giant Panda", "Untamed Wolf Pack", "Blood Suckers",
      "Dead or Alive", "Devil’s Delight™", "EggOMatic", "Jack Hammer 2", "Kings of Chicago",
      "Mega Joker", "Robin Hood", "The Wish Master", "Tomb Raider", "Zombies",
      "Eye of The Kraken", "Tower Quest", "Pearls of India", "Tomb Raider 2", "Big Bang",
      "Jackpot 6000", "Super Nudge 6000", "Vampire: The Masquerade – Las Vegas", "Gem Rocks",
      "Dead or Alive 2™", "Zombie Hoard",
    ],
  },
  offers: [
    {
      title: "ライブカジノ専用ウェルカムボーナス",
      description: "初回入金時に最大$100の100%ライブカジノボーナスを選択できました。賭け条件は40倍で、ライブルーレットなどは10%、ライブブラックジャックは5%が消化率に反映されました。",
      highlight: "ライブカジノファン向けの選択肢",
    },
    {
      title: "月曜日はゴッズ還元デー (10%キャッシュバック)",
      description: "毎週月曜日に、前週の純損失額の10%（最低$2〜最大$3,000）がキャッシュバックされていました。賭け条件は1倍でした。",
      highlight: "毎週受け取れる保険のようなボーナス",
    },
    {
      title: "神からのサプライズギフト",
      description: "月に2回、入金時に3つのギフトボックスから1つを選び、サプライズボーナスを受け取ることができました。",
      highlight: "お楽しみ要素のある定期プロモーション",
    },
  ],
  facts: [
    { label: "名称", value: "Casino Gods (カジノゴッズ)" },
    { label: "ローンチ", value: "2019" },
    { label: "運営会社", value: "Genesis Global Limited" },
    { label: "ライセンス", value: "Malta Gaming Authority (MGA), UK Gambling Commission (UKGC), Swedish Gambling Authority (SGA)" },
    { label: "VIPプログラム", value: "✅ (招待制)" },
    { label: "対応言語", value: "日本語, English, German, Finnish, Norwegian, Swedish" },
    { label: "対応通貨", value: "EUR, NOK, GBP, CHF, CAD, AUD, ZAR, CZK, PLN, DKK, RON, GEL, TRY, CNY, NZD, MXN, NGN, BGN, HUF, HRK, PEN, KRW, UAH, SEK, BHD, KWD, QAR, SAR, AEDなど多数" },
    {
      label: "ゲームタイプ",
      value: "バカラ, ブラックジャック, クラップス, ゲームショー, ライブカジノ, ポーカー, ルーレット, スロット, ビデオポーカー, ビンゴ, スクラッチカードなど",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://casinotsu.com/providers/big-time-gaming">Big Time Gaming</Link>, <Link href="https://casinotsu.com/providers/netent">NetEnt</Link>, <Link href="https://casinotsu.com/providers/play-n-go">Play’n GO</Link>, <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://casinotsu.com/providers/push-gaming">Push Gaming</Link>, <Link href="https://casinotsu.com/providers/quickspin">Quickspin</Link>, <Link href="https://casinotsu.com/providers/red-tiger">Red Tiger</Link>, <Link href="https://casinotsu.com/providers/relax-gaming">Relax</Link>, <Link href="https://casinotsu.com/providers/yggdrasil">Yggdrasil</Link>, Games Global (Microgaming), Nyx Interactive, Gamomat, Lightning Box, 2 By 2 Gaming, NextGen Gaming, Skywind Group, iSoftBet, Ezugi, Wazdan
        </span>
      ),
    },
    { label: "最小入金額", value: "$15" },
    { label: "最小出金額", value: "$15" },
    { label: "電話サポート", value: "✅ (+356 27782826)" },
    { label: "メールサポート", value: "✅ (support@casinogods.com)" },
    { label: "Eメール", value: <Link href="mailto:complaints@casinogods.com">complaints@casinogods.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "⚠️重要なお知らせ⚠️ Casino Godsは2021年9月に日本市場を撤退し、その後グローバル市場でも完全に閉鎖されました。このレビューは過去の記録として保持しています。",
      "Casino Godsは、神話をテーマにした世界観を持つオンラインカジノで、大手企業Genesis Global Limitedによって運営されていました。豊富なゲームラインナップと多彩な決済方法、魅力的なボーナスで一時は注目を集めました。",
      "しかし、その裏では出金の遅延やサポート問題など、多くのプレイヤーが深刻な問題を報告していました。このページでは、同カジノが提供していたサービスと、閉鎖に至る背景となった問題点を詳しく解説します。",
    ],
    ctas: [
      { text: "超カンタン解説！🔰オンラインカジノのはじめ方", href: "https://casinotsu.com/guides" },
      { text: "🌟 CasinoTsu推薦の優良カジノをチェック", href: "https://casinotsu.com/reviews" },
    ],
  },
  games: [
    "Casino Godsは、約1,500から3,000以上のゲームを提供しており、NetEnt, Play'n GO, Microgamingなど多数の人気プロバイダーと提携していました。日本人プレイヤーに人気のGolden Hero社のスロットもプレイ可能でした。",
    "ライブカジノはEvolution GamingとEzugi社を採用し、テーブル数が豊富で常にプレイしやすい環境が整っていました。",
  ],
  features: [
    "VIPプログラムは招待制で、選ばれたプレイヤーには専属アカウントマネージャーや限定イベントへの招待など、特別な待遇が提供されていました。",
    "ギリシャ神話をモチーフにしたユニークなデザインとキャラクターが、カジノの世界観を演出していました。",
  ],
  editorial: {
    author: "CasinoTsu編集部",
    profileHref: "/authors",
    hook: "豊富な決済方法とボーナスが魅力でしたが、多くのプレイヤー問題がその評価を大きく下げました。",
    theGoodStuff: "MGAライセンスの取得、毎週のキャッシュバック、豊富な決済オプションなど、堅実な運営基盤とプレイヤーへの還元意欲が見られました。サポートの対応自体は丁寧だったと評価されています。",
    theHeadsUp: "しかし、実際には出金が数ヶ月遅延する、本人確認が非常に困難、理由なくアカウントが閉鎖されるといった深刻な問題が多発しました。運営会社の関連プログラムがブラックリスト入りしている事実も、信頼性を揺るがす大きな要因です。",
    finalThought: "結局のところ、Casino Godsはプレイヤー保護の観点から多くの課題を抱えており、閉鎖は必然だったのかもしれません。ボーナスやライセンスといった表面的な情報だけでなく、実際のプレイヤーからの評判がいかに重要かを示す教訓的な事例です。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "Casino Godsは、その壮大な神話のテーマと大手Genesis Global Limitedによる運営という背景から、登場時には大きな期待が寄せられました。MGAやUKGCといった一流のライセンスを保有し、1,500種類を超えるゲーム、驚くほど多様な決済方法、そして魅力的なキャッシュバック制度など、成功するカジノの要素をすべて備えているように見えました。",
      "しかし、実態はプレイヤーの期待を裏切るものでした。最も深刻だったのは出金に関する問題です。数週間、場合によっては数ヶ月も出金が処理されないという報告が相次ぎ、プレイヤーの信頼を大きく損ないました。複雑で時間のかかる本人確認プロセスや、スクリプト通りの対応に終始するカスタマーサポートも、問題をさらに悪化させました。",
      "これらの問題は、運営会社の体質に起因する可能性があります。関連するアフィリエイトプログラムが非倫理的な慣行を理由にブラックリストに掲載されている事実は、企業としての信頼性に疑問符を付けます。",
      "総じて、Casino Godsは「カタログスペックは良いが、実際のサービスは劣悪」という典型的な例でした。どんなに魅力的なボーナスやゲームがあっても、賞金を公正かつ迅速に引き出せなければ意味がありません。このカジノの閉鎖は、プレイヤーがカジノを選ぶ際に、第三者機関の評価や実際のプレイヤーの声を重視すべきであるという、重要な教訓を残しました。",
    ],
  },
  security: [
    "最新の暗号化技術を使用してプレイヤーのデータを保護",
    "認定された乱数発生器（RNG）によりゲームの公平性を確保",
  ],
  responsiblePlay: [
    "賭け金制限ツール", "損失制限ツール", "時間/セッション制限ツール",
    "クールオフ/タイムアウトツール", "リアリティチェックツール", "自己評価テスト",
    "出金ロック", "Gamstopへの参加",
  ],
  complaintStats: [
    "AskGamblers: プレイヤー評価 3.1/10, ステータス「閉鎖」, アフィリエイトプログラムはブラックリスト掲載",
    "Casino Guru: 安全性指数 7.6/10, ステータス「カジノ閉鎖」",
    "OnlineCasinos.co.uk: 4/5星 (閉鎖前の評価)",
  ],
  awards: [],
  restrictedCountries: [],
  userConcerns: [
    "出金処理の大幅な遅延（数週間〜数ヶ月）",
    "複雑で時間のかかる本人確認（KYC）プロセス",
    "スクリプト通りの対応で問題が解決しないカスタマーサポート",
    "正当な理由なくアカウントが閉鎖され、賞金が支払われないとの報告",
    "公表されていなかった2%の出金手数料",
    "40倍という高い賭け条件",
  ],
  summary: [
    "2021年9月に日本市場を撤退し、その後グローバル市場でも完全に閉鎖されました。",
    "MGAライセンスを保有し、豊富なボーナスや決済方法を提供していましたが、多くのプレイヤー問題を抱えていました。",
    "出金の深刻な遅延、困難な本人確認、不当なアカウント閉鎖などが報告され、信頼性に欠けていました。",
    "運営会社の関連プログラムがブラックリスト入りしており、企業としての姿勢にも疑問がありました。",
  ],
  extraLinks: [
    { text: "🔰 賭け条件ってなに？わかりやすく解説！", href: "https://casinotsu.com/guides/wagering-requirements" },
    { text: "💬 丁寧なオンカジサポートを提供するカジノを徹底解説", href: "https://casinotsu.com/customer-support" },
  ],
  faq: [],
  cta: {
    text: "CasinoTsuが推薦する他の安全なカジノを探す",
    href: "https://casinotsu.com/reviews",
  },
};