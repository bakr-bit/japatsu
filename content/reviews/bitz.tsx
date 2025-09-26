import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewBitz: ReviewPageContent = {
  hero: {
    title: "ビッツカジノ（Bitz）レビュー",
    subheading: "最大$1,000ボーナス (賭け条件29倍)",
    description: "本人確認不要で匿名性も抜群な最新仮想通貨カジノ、BitzをCasinoTsuが徹底解説。約6,800種類のゲームと還元率98%以上の独占ゲームが魅力です。",
    score: 4.0,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 73,
        note: "まだ知名度は低いが、匿名性の高さとユニークなボーナスで今後人気を集める可能性を秘めている。",
      },
      {
        label: "規約",
        percent: 84,
        note: "最大$1,000の初回ボーナスに加え、複数回もらえる入金不要ボーナスや賭け条件なしのキャッシュバックが魅力的。",
      },
      {
        label: "操作性",
        percent: 87,
        note: "登録が非常にシンプルで本人確認も不要。一部ゲームの混在や不自然な日本語訳は今後の改善に期待。",
      },
      {
        label: "サポート",
        percent: 84,
        note: "24時間日本語対応は心強いが、翻訳機能を使った外国人スタッフのため、時折不自然な日本語になることがある。",
      },
    ],
    highlights: [
      "原則として本人確認書類の提出が不要",
      "還元率(RTP)98%以上の魅力的な独占ゲーム",
      "複数回獲得可能なユニークな入金不要ボーナス",
      "賭け条件なしの月次キャッシュバック",
    ],
    watchouts: [
      "まだ新しく知名度が低く、プレイヤーの口コミが少ない",
      "サイト内の日本語に時折不自然な箇所が見られる",
      "決済は仮想通貨がメインで日本円には非対応",
    ],
  },
  payments: {
    featured: [
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "人気",
        note: "最も広く使われている仮想通貨",
      },
      {
        name: "Ethereum",
        icon: "/assets/payments/ethereum.svg",
        href: "https://casinotsu.com/payment/ethereum",
        badge: "主要コイン",
        note: "スマートコントラクトで知られる",
      },
      {
        name: "Tether",
        icon: "/assets/payments/tether.svg",
        href: "https://casinotsu.com/payment/usdt",
        badge: "安定",
        note: "米ドルに連動するステーブルコイン",
      },
      {
        name: "Litecoin",
        icon: "/assets/payments/litecoin.svg",
        badge: "高速",
        note: "ビットコインより高速な決済が可能",
      },
    ],
    deposits: [
      { name: "Tether (USDT)" },
      { name: "BNB" },
      { name: "Bitcoin (BTC)" },
      { name: "Ethereum (ETH)" },
      { name: "Litecoin (LTC)" },
      { name: "TRON (TRX)" },
      { name: "Dogecoin (DOGE)" },
      { name: "Polygon (POL)" },
      { name: "Toncoin (TON)" },
      { name: "USD Coin (USDC)" },
    ],
    withdrawals: [
      { name: "Tether (USDT)" },
      { name: "BNB" },
      { name: "Bitcoin (BTC)" },
      { name: "Ethereum (ETH)" },
      { name: "Litecoin (LTC)" },
      { name: "TRON (TRX)" },
      { name: "Dogecoin (DOGE)" },
      { name: "Polygon (POL)" },
      { name: "Toncoin (TON)" },
      { name: "USD Coin (USDC)" },
    ],
    notes: [
      "決済は仮想通貨が中心です。カジノ側での手数料は無料ですが、ネットワーク利用料が発生する場合があります。",
      "出金には、入金額に対して1倍の賭け条件（ターンオーバー）が適用されます。",
      "平均出金時間は最大3時間とされていますが、状況により最大24時間かかる場合があります。",
    ],
  },
  bonuses: {
    overview:
      "ビッツカジノはプロモーションが非常に充実しています。最大1,000 USDTの初回入金ボーナスを筆頭に、複数回獲得できる入金不要ボーナスや、賭け条件なしのキャッシュバックなど、プレイヤーにとって魅力的なオファーが満載です。",
    noDeposit:
      "ビッツカジノの入金不要ボーナスはユニークです。「Kickチャンネル」の配信に参加して貯めたポイントをボーナスと交換する形式で、VIPレベルが上がるたびに再度参加できるため、複数回獲得が可能です。",
    extraSpins: {
      summary:
        "ウェルカムボーナスにはフリースピンは含まれていませんが、「クエスト」機能をクリアすることで報酬としてフリースピンなどを獲得できます。",
      schedule: [],
      warning: "クエストの達成条件は参加するクエストによって異なります。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "100%", cap: "1,000 USDT", code: "不要" },
    ],
    conditions: [
      "初回入金ボーナスの賭け条件は29倍。",
      "ボーナスの有効期限は7日間。",
      "禁止ゲームが細かく設定されているため、利用前に利用規約の確認が必要です。",
    ],
    prohibitedGames: [
      "禁止ゲームの詳細は利用規約で定められています。プレイ前に必ず確認してください。",
    ],
  },
  offers: [
    {
      title: "月2回もらえるキャッシュバックボーナス",
      description: "毎月2日と16日に、期間中の損失額の5%がキャッシュバックされます。このキャッシュバックには賭け条件がないため、即時出金も可能です。",
      highlight: "賭け条件なしで損失額の5%が戻ってくる",
    },
    {
      title: "クエスト機能",
      description: "「対象スロットをプレイ」「指定条件で勝利」といったミッションをクリアすることで、フリースピンなどのボーナスがもらえる楽しい機能です。",
      highlight: "ゲームを楽しみながら追加ボーナスをゲット",
    },
    {
      title: "フォーチュンホイール",
      description: "一定額をベットすると参加できる抽選機能。ホイールを回して最大10BTC相当の賞金やフリースピンなどの豪華賞品が当たるチャンスがあります。",
      highlight: "一攫千金のチャンスがあるデイリープロモーション",
    },
  ],
  facts: [
    { label: "名称", value: "Bitz (ビッツカジノ)" },
    { label: "ローンチ", value: "2024" },
    { label: "運営会社", value: "WinSector N.V." },
    { label: "ライセンス", value: "Anjouan Gaming License" },
    { label: "VIPプログラム", value: "✅" },
    { label: "対応言語", value: "日本語、英語など" },
    { label: "対応通貨", value: "BTC, ETH, USDTなど10種類の仮想通貨" },
    {
      label: "ゲームタイプ",
      value: "バカラ, ブラックジャック, クラップス, ゲームショー, ライブカジノ, ポーカー, ルーレット, スロット, スポーツベット",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://casinotsu.com/providers/bgaming">BGAMING</Link>, <Link href="https://casinotsu.com/providers/betsoft">BetSoft</Link>, <Link href="https://casinotsu.com/providers/big-time-gaming">Big Time Gaming</Link>, <Link href="https://casinotsu.com/providers/blueprint-gaming">Blueprint Gaming</Link>, <Link href="https://casinotsu.com/providers/booming-games">Booming Games</Link>, <Link href="https://casinotsu.com/providers/endorphina">Endorphina</Link>, <Link href="https://casinotsu.com/providers/fantasma-games">Fantasma</Link>, <Link href="https://casinotsu.com/providers/habanero">Habanero</Link>, <Link href="https://casinotsu.com/providers/hacksaw-gaming">Hacksaw Gaming</Link>, Iron Dog Studio, <Link href="https://casinotsu.com/providers/netent">NetEnt</Link>, <Link href="https://casinotsu.com/providers/nolimit-city">Nolimit City</Link>, <Link href="https://casinotsu.com/providers/octoplay">Octoplay</Link>, <Link href="https://casinotsu.com/providers/pg-soft">PG SOFT</Link>, <Link href="https://casinotsu.com/providers/playson">Playson</Link>, <Link href="https://casinotsu.com/providers/play-n-go">Play’n GO</Link>, <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://casinotsu.com/providers/print-studios">Print Studios</Link>, <Link href="https://casinotsu.com/providers/push-gaming">Push Gaming</Link>, <Link href="https://casinotsu.com/providers/red-tiger">Red Tiger</Link>, <Link href="https://casinotsu.com/providers/relax-gaming">Relax</Link>, <Link href="https://casinotsu.com/providers/spinomenal">Spinomenal</Link>, <Link href="https://casinotsu.com/providers/thunderkick">Thunderkick</Link>, <Link href="https://casinotsu.com/providers/yggdrasil">Yggdrasil</Link>
        </span>
      ),
    },
    { label: "最小入金額", value: "0.1 USDT相当" },
    { label: "最小出金額", value: "5 USDT相当" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@bitzmail.io">support@bitzmail.io</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (24時間日本語対応)" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "2024年にオープンしたビッツカジノ（Bitz）は、仮想通貨に特化した次世代のオンラインカジノです。最大の魅力は、本人確認書類の提出がほぼ不要で、簡単な登録手続きだけで出金まで可能な高い匿名性にあります。",
      "しかし、魅力はそれだけではありません。還元率98%以上を誇る独占ゲームや、複数回獲得できるユニークな入金不要ボーナスなど、プレイヤーを惹きつける要素が満載です。",
      "CasinoTsuでは、この注目の最新クリプトカジノを、安全性、ボーナス、ゲームラインナップなど、あらゆる角度から徹底的にレビューします。",
    ],
    ctas: [
      { text: "👉 ビッツカジノで今すぐプレイ！", href: "https://go.casinotsu.com/go/bitz" },
      { text: "🔰 オンラインカジノのはじめ方", href: "https://casinotsu.com/guides" },
    ],
  },
  games: [
    "ビッツカジノは60社以上のプロバイダーと提携し、スロット、ライブカジノ、スポーツベットを含む約6,800種類の豊富なゲームを提供しています。",
    "特筆すべきは『RTP98％』と名付けられた独占ゲームカテゴリーです。ここには還元率が98%以上に設定された勝ちやすいスロットが集められており、プレイヤーにとって大きなアドバンテージとなります。",
    "スロットは6,400種類以上、ライブカジノは約400種類と、あらゆるプレイヤーの好みに応えるラインナップを誇ります。",
  ],
  features: [
    "ビッツカジノは、プレイヤーがゲームの公平性を自ら検証できる「プロバブリーフェア」システムを導入しています。これにより、従来のRNGとは異なり、暗号化アルゴリズムを用いて結果の透明性を確保しています。",
    "Telegramボットとの連携により、サポートへの問い合わせやプロモーション情報の受け取りが手軽に行えます。",
    "Androidユーザー向けには専用のモバイルアプリが提供されており、ブラウザ版と合わせて快適なモバイル体験が可能です。",
  ],
  editorial: {
    author: "Nanami",
    profileHref: "/authors/nanami",
    hook: "匿名性の高さとユニークなボーナスが光る、初心者から上級者まで楽しめるクリプトカジノです。",
    theGoodStuff: "登録から出金まで本人確認書類が不要という手軽さと、プライバシーが保護される安心感は最大の魅力です。RTP98%の独占ゲームや賭け条件なしのキャッシュバックは、プレイヤーにとって非常に有利な条件と言えます。",
    theHeadsUp: "新しいカジノであるため、サイトの日本語訳に不自然な部分が見られたり、ゲームカテゴリーの整理が不十分な点があります。今後の改善に期待したいところです。",
    finalThought: "いくつかの改善点はありますが、ゲームの質、ボーナスの魅力、そして何より匿名性の高さを考慮すると、非常にポテンシャルの高いカジノです。特に仮想通貨ユーザーには、ぜひ試してみてほしいプラットフォームです。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "CasinoTsuのスタッフが実際にプレイしたところ、ビッツカジノはサイトの使いやすさ、ゲーム数、ボーナス内容のすべてにおいて高い満足度が得られる、バランスの取れたオンラインカジノであるとの印象を受けました。",
      "最大の評価ポイントは、やはり登録から本人確認までの手続きの簡潔さです。メールアドレスとパスワードだけで始められ、出金時も書類提出が不要なため、ストレスフリーかつプライバシーが守られる点は、他のカジノにはない大きな利点です。",
      "ゲーム面では、RTP98%の独占スロットカテゴリーが非常にユニークで魅力的です。高還元率のゲームがまとめられているため、効率的に勝利を目指したいプレイヤーには最適でしょう。また、複数回獲得できる入金不要ボーナスや、賭け条件のないキャッシュバックなど、プロモーションも独創的でプレイヤーを楽しませる工夫が凝らされています。",
      "まだ新しいカジノのため、サイトの翻訳に若干の不自然さが見られるなど、改善の余地はありますが、ゲームプレイ自体には何の問題もありません。初心者から経験豊富なプレイヤーまで、幅広い層におすすめできる完成度の高いクリプトカジノです。",
    ],
  },
  security: [
    "信頼性の高い「Anjouan Gaming License」を取得して合法的に運営",
    "ブロックチェーン技術を活用し、全トランザクションの透明性と安全性を確保",
    "資産保護のため、マルチシグウォレットやコールドストレージを採用",
    "SSL暗号化と強力なファイアウォールで個人情報と取引データを保護",
    "アカウント保護を強化する二段階認証（2FA）の設定が可能",
    "プレイヤーが公平性を検証できる「プロバブリーフェア」システムを導入",
    "デバイスフィンガープリンティング防止など、高度な匿名性保護機能を搭載",
  ],
  responsiblePlay: [
    "自己排除: サポートへの連絡により、アカウントを一時的または無期限に凍結可能",
    "入金制限: サポートへの連絡により、入金額の上限を設定可能",
    "セッション時間制限: プレイ時間の上限を設定",
    "損失制限: 許容できる損失額の上限を設定",
    "自己評価ツール: 自身のギャンブル行動を評価するためのツールを提供",
  ],
  complaintStats: [],
  awards: [],
  restrictedCountries: [
    "ビッツカジノはグローバルにアクセス可能ですが、各国の法律によりオンラインギャンブルが禁止されている地域からの利用は制限される可能性があります。VPNの利用は利用規約を確認の上、自己責任で行う必要があります。",
  ],
  userConcerns: [
    "No KYCカジノの性質上、マネーロンダリングのリスクや消費者保護が限定的になる可能性",
    "仮想通貨ギャンブルに関する法的なグレーゾーンや税務上の責任はプレイヤー自身にある",
    "サイトの日本語訳が一部不自然である点",
  ],
  summary: [
    "登録から出金まで本人確認書類が原則不要で、高い匿名性が魅力のクリプトカジノ。",
    "RTP98%の独占ゲームや、複数回もらえる入金不要ボーナスなど、ユニークでプレイヤーに有利なプロモーションが豊富。",
    "サイトの使いやすさ、ゲーム数、サポート体制のバランスが良く、初心者から上級者まで幅広く楽しめる。",
    "まだ新しいカジノだが、完成度が高く、今後の成長が期待される。",
  ],
  extraLinks: [
    { text: "✅ オンラインカジノの本人確認（KYC）について", href: "https://casinotsu.com/guides/document-verification" },
    { text: "💰 仮想通貨が使えるおすすめカジノ", href: "https://casinotsu.com/crypto" },
  ],
  faq: [
    {
      question: "ビッツカジノでは、日本円やドルなどの法定通貨を利用できますか？",
      answer: "いいえ、現時点では日本円およびドルの取り扱いはありません。決済は基本的に仮想通貨のみとなります。",
    },
    {
      question: "ビッツカジノは、本人確認手続き（KYC）が必要ですか？",
      answer: "原則として書類提出は不要ですが、アカウントの「個人情報」ページで名前、電話番号、メールアドレスの登録・認証が必要です。",
    },
    {
      question: "ビッツカジノでおすすめのゲームは何ですか？",
      answer: "独占ゲームカテゴリー『RTP98％』内にある高還元率スロットが特におすすめです。勝ちやすさが魅力なので、ぜひお試しください。",
    },
  ],
  cta: {
    text: "ビッツカジノ公式サイトで最新情報をチェック！",
    href: "https://go.casinotsu.com/go/bitz",
  },
};