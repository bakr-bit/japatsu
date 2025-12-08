import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewBetgoat: ReviewPageContent = {
  hero: {
    title: "BETGOAT（ベットゴート）レビュー",
    subheading: "初回入金でミステリーボックス＆賭け条件1倍の77%キャッシュバック",
    description: "2025年9月リリースの最新クリプトカジノ、BETGOAT（ベットゴート）。14種類の仮想通貨に対応し、KYC不要でプレイ可能な匿名性の高さをCasinoTsuが徹底検証しました。",
    score: 3.8,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 73,
        note: "リリース直後で知名度は低いが、仮想通貨特化型カジノとして今後の利用者の増加に期待。",
      },
      {
        label: "規約",
        percent: 65,
        note: "ボーナス・プロモーションは少なめ。VIPプログラムがなく、長期プレイヤー向けの特典が課題。",
      },
      {
        label: "操作性",
        percent: 81,
        note: "ゲームプレイはスムーズで登録も簡単。ただし、利用規約などの重要情報が見つけにくい点は要改善。",
      },
      {
        label: "サポート",
        percent: 77,
        note: "24時間日本語対応は心強いが、翻訳ベースのため不自然な表現も。応答速度は速いが混雑時は待つことも。",
      },
    ],
    highlights: [
      "13種類以上の仮想通貨での入出金に対応",
      "原則として本人確認（KYC）不要で出金可能",
      "24時間対応の日本語ライブチャットサポート",
      "60社以上のプロバイダーによる豊富なゲームラインナップ",
      "ブロックチェーン技術を用いた「Provably Fair」ゲームを搭載",
    ],
    watchouts: [
      "VIPプログラムやロイヤリティ制度がない",
      "ボーナスやプロモーションの種類が少ない",
      "サイト内で利用規約などの情報が見つけにくい",
      "仮想通貨以外の決済方法には非対応",
    ],
    avatarSrc: "/assets/casino/betgoat.png",
    avatarAlt: "Betgoatのロゴ",
  },
  payments: {
    featured: [
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "人気",
        note: "最も広く利用されている仮想通貨",
      },
      {
        name: "Ethereum",
        icon: "/assets/payments/ethereum.svg",
        href: "https://casinotsu.com/payment/ethereum",
        badge: "主要コイン",
        note: "スマートコントラクトで知られる主要通貨",
      },
      {
        name: "Tether",
        icon: "/assets/payments/tether.svg",
        href: "https://casinotsu.com/payment/usdt",
        badge: "ステーブル",
        note: "米ドルに連動し価格が安定",
      },
      {
        name: "Ripple",
        icon: "/assets/payments/xrp.svg",
        href: "https://casinotsu.com/payment/ripple",
        badge: "高速送金",
        note: "国際送金に強く、処理が速い",
      },
      {
        name: "Solana",
        icon: "/assets/payments/solana.svg",
        badge: "新世代",
        note: "高速・低コストで注目のブロックチェーン",
      },
    ],
    deposits: [
      { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg", href: "https://casinotsu.com/payment/ethereum" },
      { name: "Tether (USDT)", icon: "/assets/payments/tether.svg", href: "https://casinotsu.com/payment/usdt" },
      { name: "TRON (TRX)" },
      { name: "Binance (BNB)" },
      { name: "Litecoin (LTC)" },
      { name: "XRP", icon: "/assets/payments/ripple.svg", href: "https://casinotsu.com/payment/ripple" },
      { name: "USD Coin (USDC)" },
      { name: "Cardano (ADA)" },
      { name: "Dogecoin (DOGE)" },
      { name: "Polygon (POL)" },
      { name: "Solana (SOL)" },
      { name: "Toncoin (TON)" },
      { name: "Shiba Inu (SHIB)" },
    ],
    withdrawals: [
      { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg", href: "https://casinotsu.com/payment/ethereum" },
      { name: "Tether (USDT)", icon: "/assets/payments/tether.svg", href: "https://casinotsu.com/payment/usdt" },
      { name: "TRON (TRX)" },
      { name: "Binance (BNB)" },
      { name: "Litecoin (LTC)" },
      { name: "XRP", icon: "/assets/payments/ripple.svg", href: "https://casinotsu.com/payment/ripple" },
      { name: "USD Coin (USDC)" },
      { name: "Cardano (ADA)" },
      { name: "Dogecoin (DOGE)" },
      { name: "Polygon (POL)" },
      { name: "Solana (SOL)" },
      { name: "Toncoin (TON)" },
      { name: "Shiba Inu (SHIB)" },
    ],
    notes: [
      "ベットゴートは仮想通貨専門カジノです。法定通貨（円、ドルなど）での入出金はできません。",
      "カジノ側での入出金手数料は無料ですが、各仮想通貨のネットワーク手数料（ガス代）はプレイヤー負担となります。",
      "最低出金額は20USDT（または相当額）です。出金時間は通常0〜24時間です。",
    ],
  },
  bonuses: {
    overview:
      "ベットゴートのボーナスは種類が少ないものの、ユニークで魅力的な内容です。特に初回入金者向けのミステリーボックスと、賭け条件が1倍のキャッシュバックは注目です。",
    noDeposit:
      "現在、ベットゴートでは登録するだけで受け取れる入金不要ボーナスは提供されていません。",
    extraSpins: {
      summary:
        "初回入金ボーナスの「ミステリーボックス」からフリースピンがランダムで出現する可能性があります。",
      schedule: [],
      warning: "内容は完全にランダムであり、フリースピンが確実にもらえるわけではありません。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "77%キャッシュバック", cap: "300 USDT", code: "申請不要 (要有効化)" },
    ],
    conditions: [
      "77%キャッシュバックの賭け条件は1倍です。",
      "対象となるには、入金前にプロモーションページで有効化し、50 USDT以上をUSDTで入金する必要があります。",
      "キャッシュバックは初回入金後24時間以内の純損失（総ベット額 - 総勝利額）に基づいて計算されます。",
      "キャッシュバック利用中の最大ベット額は20 USDTです。",
      "ミステリーボックスは50 USDT以上の初回入金で自動的に付与され、ボーナスの内容はランダムです。",
    ],
    prohibitedGames: [
        "77%キャッシュバックはスロットゲームでの損失が対象です。対象外のスロットもありますのでご注意ください。",
    ],
  },
  offers: [
    {
      title: "ウィークリー5%キャッシュバック",
      description: "毎週の損失額に対して5%（最大500 USDT）がキャッシュバックされます。このキャッシュバックには賭け条件がなく、受け取ったらすぐに出金も可能です。",
      highlight: "賭け条件なし！申請不要で毎週自動付与",
    },
    {
      title: "100%カジノ初回入金ボーナス",
      description: "キャッシュバックの代わりに選択できる、最大1,000 USDTの100%初回入金ボーナスも提供されています。",
      highlight: "より高額なボーナスを求める方向け",
    },
    {
      title: "100%スポーツボーナス",
      description: "スポーツベット専用の初回入金ボーナスとして、最大300 USDTの100%ボーナスも用意されています。",
      highlight: "スポーツベット派にも嬉しいオファー",
    },
  ],
  facts: [
    { label: "名称", value: "Betgoat (ベットゴート)" },
    { label: "ローンチ", value: "2025年9月18日" },
    { label: "運営会社", value: "Cyclone Tech Solution Pte. Ltd." },
    { label: "ライセンス", value: "Anjouan Internet Gaming License (ALSI-202505045-FI2)" },
    { label: "VIPプログラム", value: "❌" },
    { label: "対応言語", value: "日本語、英語など" },
    { label: "対応通貨", value: "仮想通貨のみ" },
    {
      label: "ゲームタイプ",
      value: (
        <span>
            <Link href="https://casinotsu.com/baccarat">バカラ</Link>, <Link href="https://casinotsu.com/blackjack">ブラックジャック</Link>, <Link href="https://casinotsu.com/craps">クラップス</Link>, <Link href="https://casinotsu.com/game-shows">ゲームショー</Link>, <Link href="https://casinotsu.com/live-casino">ライブカジノ</Link>, <Link href="https://casinotsu.com/poker">ポーカー</Link>, <Link href="https://casinotsu.com/roulette">ルーレット</Link>, <Link href="https://casinotsu.com/slots">スロット</Link>, スポーツベット
        </span>
      ),
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://casinotsu.com/providers/bgaming">BGAMING</Link>, <Link href="https://casinotsu.com/providers/betsoft">BetSoft</Link>, <Link href="https://casinotsu.com/providers/big-time-gaming">Big Time Gaming</Link>, <Link href="https://casinotsu.com/providers/ela-games">ELA Games</Link>, <Link href="https://casinotsu.com/providers/fantasma-games">Fantasma</Link>, <Link href="https://casinotsu.com/providers/habanero">Habanero</Link>, <Link href="https://casinotsu.com/providers/hacksaw-gaming">Hacksaw Gaming</Link>, <Link href="https://casinotsu.com/providers/microgaming">Microgaming</Link>, <Link href="https://casinotsu.com/providers/netent">NetEnt</Link>, <Link href="https://casinotsu.com/providers/nolimit-city">Nolimit City</Link>, <Link href="https://casinotsu.com/providers/novomatic">Novomatic</Link>, <Link href="https://casinotsu.com/providers/pg-soft">PG SOFT</Link>, <Link href="https://casinotsu.com/providers/playson">Playson</Link>, <Link href="https://casinotsu.com/providers/playtech">Playtech</Link>, <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://casinotsu.com/providers/red-tiger">Red Tiger</Link>, <Link href="https://casinotsu.com/providers/relax-gaming">Relax</Link>, <Link href="https://casinotsu.com/providers/spinomenal">Spinomenal</Link>, Win Fast
        </span>
      ),
    },
    { label: "最小入金額", value: "1 USDT (または相当額)" },
    { label: "最小出金額", value: "20 USDT (または相当額)" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:admin@betgoat.com">admin@betgoat.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (24時間日本語対応)" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "2025年9月18日にサービスを開始した「ベットゴート（BETGOAT）」は、仮想通貨での決済に特化した最新のオンラインカジノです。",
      "最大の魅力は、メールアドレスだけで登録でき、原則として本人確認（KYC）が不要で出金まで可能な高い匿名性です。13種類以上の主要な仮想通貨に対応し、迅速な入出金を実現しています。",
      "CasinoTsuでは、この新しいクリプトカジノのボーナス、ゲームラインナップ、安全性、そして実際の使い勝手まで、プレイヤーが知りたい情報を徹底的に掘り下げていきます。",
    ],
    ctas: [
      { text: "👉 ベットゴートで今すぐプレイ！🐐", href: "https://go.japanesecasino.com/go/betgoat" },
      { text: "🔰 仮想通貨カジノの始め方をチェック", href: "https://www.casinotsu.com/crypto" },
    ],
  },
  games: [
    "ベットゴートは、1,000種類から4,000種類以上とも言われる豊富なゲームを提供しています。60社以上のゲームプロバイダーと提携しており、スロットからライブカジノまで、幅広いジャンルのゲームが楽しめます。",
    "ライブゲームだけでも300種類以上あり、EvolutionやPragmatic Playなどの定番はもちろん、ユニークなゲームショーも充実しています。さらに、Jリーグやプロ野球も対象のスポーツベットもプレイ可能です。",
  ],
  features: [
    "ベットゴートの最大の特徴は、仮想通貨の高い匿名性を活かしたKYC不要のシステムです。メールアドレス、ユーザー名、パスワードの3点を入力するだけでアカウント作成が完了し、すぐにプレイと入出金ができます。",
    "ブロックチェーン技術を利用した「Provably Fair」アルゴリズムを採用しており、プレイヤー自身がゲーム結果の公平性・透明性を検証できる点も、クリプトカジノならではの強みです。",
  ],
  editorial: {
    author: "Nanami",
    profileHref: "/authors/rina-okabe",
    hook: "サイトの応答速度とKYC不要の手軽さは感動的！ただし、情報整理にはまだ改善の余地あり。",
    theGoodStuff: "実際にプレイして最も感心したのは、サイトの軽快な動作とゲームの起動速度です。KYC不要で登録から出金までできる手軽さは、仮想通貨ユーザーにとって大きなメリット。ゲーム数も豊富で飽きさせません。",
    theHeadsUp: "一方で、新しいカジノのためか、サイト内の情報整理がまだ不十分な印象です。責任あるギャンブルのページが見つけにくかったり、ボーナスの説明が実際と異なったりする点がありました。今後の改善に期待したいです。",
    finalThought: "仮想通貨でのプレイに特化し、匿名性とスピードを求めるプレイヤーには最適なカジノです。ボーナスがシンプルな分、初心者にも分かりやすいでしょう。今後のサイト改善とプロモーション拡充に期待が高まります。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "CasinoTsuがベットゴートをレビューして見えてきたのは、「スピードと匿名性を追求した、新世代クリプトカジノのスタンダード」という姿です。2025年9月に誕生したばかりのこのカジノは、仮想通貨ユーザーが求める核心的なニーズ、すなわち「手軽さ」「速さ」「プライバシー」を的確に捉えています。",
      "特筆すべきは、原則として本人確認（KYC）を必要としない点です。メールアドレスだけで登録が完了し、そのまま入出金まで行えるフローは、従来のオンラインカジノの煩雑な手続きに慣れたプレイヤーにとっては革命的とも言える快適さです。13種類以上の仮想通貨に対応している点も、選択の自由度を高めています。",
      "ゲーム体験も非常にスムーズで、サイトの応答速度はストレスを感じさせません。60社以上のプロバイダーが提供する数千のゲームは、量・質ともに満足のいくレベルです。ブロックチェーン技術で公平性を担保する「Provably Fair」ゲームの搭載も、信頼性を高める要素となっています。",
      "もちろん、新しいカジノゆえの課題も見られます。ボーナスやプロモーションの種類はまだ少なく、VIPプログラムも未導入です。また、利用規約やプライバシーポリシーといった重要情報がサイト上で見つけにくい点は、透明性の観点から早急な改善が望まれます。",
      "総じて、ベットゴートは明確な強みを持つカジノです。仮想通貨をメインに使い、面倒な手続きを省いてすぐに遊びたいプレイヤーにとって、これ以上ないほど適した環境でしょう。いくつかの改善点を乗り越え、今後どのような進化を遂げるのか、大いに期待が持てるカジノです。",
    ],
  },
  security: [
    "アンジュアン島発行のゲーミングライセンス（ALSI-202505045-FI2）を取得し合法的に運営",
    "GDPR（EU）やCCPA（カリフォルニア）などの国際的なプライバシー法に準拠し個人情報を保護",
    "RNG（乱数発生器）に加え、ブロックチェーン技術を用いた「Provably Fair」アルゴリズムでゲームの公平性を確保",
    "海外レビューサイトでセキュリティ面が10点満点と評価されている",
  ],
  responsiblePlay: [
    "自己排除: 最低6ヶ月のアカウントアクセス制限を設定可能",
    "クーリングオフ: 7日間のプレイ停止期間を設定可能",
    "上記の設定はカスタマーサポートへの連絡を通じて行える",
    "サイト上で関連情報が見つけにくいため、利用の際はサポートへの問い合わせが必要",
  ],
  complaintStats: [
    "海外のカジノレビューサイトで「セキュリティ面が10点満点」という高評価を獲得",
    "一部のレビューサイトではプロモーションの少なさやRTPデータの透明性への懸念から5.8/10という評価も見られる",
  ],
  awards: [],
  restrictedCountries: [
    "オーストリア", "コモロ", "フランス", "フランス領南方・南極地域", "ドイツ", "グアドループ", "グアム", "イラン", "北朝鮮", "マルティニーク", "ミャンマー", "オランダ", "ニューカレドニア", "フランス領ポリネシア", "レユニオン", "スペイン", "イギリス", "アメリカ", "アメリカ領サモア", "アメリカ領太平洋諸島", "バージン諸島（アメリカ）", "フランス領ギアナ", "サン・マルタン（フランス領）",
  ],
  userConcerns: [
    "サイト内で利用規約や責任あるギャンブルなどの重要情報が見つけにくい",
    "ボーナスの利用方法に関する説明が、実際の仕様と異なる場合がある",
    "スロットの検索結果に他のジャンルのゲームが混ざって表示されることがある",
  ],
  summary: [
    "13種類以上の仮想通貨に対応し、KYC不要で高い匿名性を誇るクリプトカジノ。",
    "登録はメールアドレスだけで完了し、入出金は数分で処理されるスピード感が魅力。",
    "賭け条件なしのキャッシュバックなど、シンプルで分かりやすいボーナスを提供。",
    "新しいカジノのためVIPプログラムがなく、サイト内の情報整理には改善の余地がある。",
    "仮想通貨をメインに、手軽かつスピーディーにプレイしたいユーザーに最適。",
  ],
  extraLinks: [
    { text: "🔰 オンラインカジノの本人確認（KYC）が不要な理由とは？", href: "https://www.casinotsu.com/guides/document-verification" },
  ],
  faq: [
    {
      question: "ベットゴートとは何ですか？",
      answer: "2025年9月18日にサービスを開始した仮想通貨専用のオンラインカジノです。スロット、ライブカジノ、スポーツベッティングなど幅広いゲームを提供しています。",
    },
    {
      question: "ベットゴートで本人確認（KYC）は必要ですか？",
      answer: "基本的には本人確認（KYC）は不要です。メールアドレスだけでアカウント登録から入出金まで可能です。ただし、利用規約違反などが疑われる場合は書類提出を求められることがあります。",
    },
    {
      question: "ベットゴートに仮想通貨以外で入金できますか？",
      answer: "いいえ、ベットゴートは仮想通貨専用カジノのため、日本円や米ドルなどの法定通貨には対応していません。",
    },
    {
      question: "ベットゴートは違法ですか？",
      answer: "ベットゴートはアンジュアン島のカジノライセンスを取得し、合法的に運営されています。ただし、お住まいの国の法律を遵守し、自己責任でプレイする必要があります。",
    },
    {
      question: "ベットゴートのアカウントが凍結された場合はどうすれば良いですか？",
      answer: "重複アカウントの作成や利用規約違反などが凍結の主な原因です。まずは24時間対応のライブチャットサポートに連絡して状況を確認してください。",
    },
    {
      question: "ベットゴートに入金不要ボーナスはありますか？",
      answer: "現在、ベットゴートでは入金不要ボーナスは提供されていません。",
    },
  ],
  cta: {
    text: "ベットゴートで匿名性の高いプレイを始める🐐",
    href: "https://go.japanesecasino.com/go/betgoat",
  },
    images: {
    casino: [
      "/assets/casino/betgoat.png",
      "/assets/casino/betgoat.jpg",
    ],
  },
};