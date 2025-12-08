import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewSushiCasino: ReviewPageContent = {
  hero: {
    title: "スシカジノ（Sushi Casino）の評判を全解説",
    subheading: "最大¥200,000 + 50フリースピン",
    description: "カジノ用と、スポーツベット用の2種類から選択することができる初回入金ボーナスをはじめ、ボリュームたっぷりのオファーやキャンペーン、さらには超豪華なVIPプログラムまで用意されている最新オンラインカジノ「スシカジノ（Sushi Casino）」を、CasinoTsuが徹底レビューしていきます。",
    score: 4.0,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 82,
        note: "豪華なボーナス、豊富なキャンペーン、充実したVIPプログラムが魅力。ゲーム数も豊富で、今後の成長に期待が高まります。",
      },
      {
        label: "規約",
        percent: 74,
        note: "選べるウェルカムボーナスは最大20万円と豪華ですが、賭け条件が一体型35倍と非常に厳しいため注意が必要です。",
      },
      {
        label: "操作性",
        percent: 83,
        note: "日本語に未翻訳のページや準備中の決済方法があり、ゲーム検索機能もやや不便。今後の改善が待たれます。",
      },
      {
        label: "サポート",
        percent: 77,
        note: "24時間日本語対応は可能ですが、外国人スタッフによる翻訳を介すため、スピードや正確性に懸念が残ります。",
      },
    ],
    highlights: [
      "12,000以上の豪華なゲーム数！",
      "カジノとスポーツ、自分の好みに合わせて選べるウェルカムボーナス♪",
      "充実したVIPプログラム★",
      "日本人向けの親しみやすいテーマとデザイン",
    ],
    watchouts: [
      "初回入金ボーナスの出金条件は厳しめ",
      "まだ日本語に翻訳されていない準備中のページも",
      "決済方法が少なめ",
      "出金遅延やKYCに関する複数のネガティブな報告あり",
    ],
    avatarSrc: "/assets/casino/sushi-casino.png",
    avatarAlt: "Sushi casinoのロゴ",
  },
  payments: {
    featured: [
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "主要な暗号資産に対応",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://casinotsu.com/payment/payz",
        badge: "Eウォレット",
        note: "迅速な電子決済サービス",
      },
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://casinotsu.com/payment/visa",
        badge: "準備中",
        note: "定番のクレジットカード決済",
      },
      {
        name: "銀行振込",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://casinotsu.com/payment/bank-transfer",
        badge: "準備中",
        note: "安心の国内送金",
      },
    ],
    deposits: [
      { name: "VISA", icon: "/assets/payments/visa.svg" },
      { name: "MasterCard", icon: "/assets/payments/mastercard.svg" },
      { name: "Bank Transfer", icon: "/assets/payments/bank-transfer.svg" },
      { name: "MiFINITY" },
      { name: "eZeeWallet" },
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "Bitcoin Cash" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg", href: "https://casinotsu.com/payment/ethereum" },
      { name: "Cardano" },
      { name: "DAI" },
      { name: "Dogecoin" },
      { name: "Litecoin" },
      { name: "Ripple" },
      { name: "Tether" },
      { name: "USD Coin" },
      { name: "Solana" },
    ],
    withdrawals: [
        { name: "MiFINITY" },
        { name: "eZeeWallet" },
        { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
        { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
        { name: "Bitcoin Cash" },
        { name: "Ethereum", icon: "/assets/payments/ethereum.svg", href: "https://casinotsu.com/payment/ethereum" },
        { name: "Cardano" },
        { name: "DAI" },
        { name: "Dogecoin" },
        { name: "Litecoin" },
        { name: "Ripple" },
        { name: "Tether" },
        { name: "USD Coin" },
        { name: "Solana" },
    ],
    notes: [
      "クレジットカードと銀行送金は現在準備中です。電子ウォレットの最低入金額は¥1,800、仮想通貨は¥8,500からとなります。",
      "出金審査に最大3日、処理に最大7営業日、KYCに最大5営業日かかる場合があり、合計で最大2週間程度要する可能性があります。",
      "ユーザーからは、出金に数ヶ月かかる、KYCプロセスが非常に困難である、といった深刻な報告が複数寄せられています。",
    ],
  },
  bonuses: {
    overview:
      "スシカジノには初回入金ボーナスをはじめ、キャッシュバック、ウィークリーボーナス、デイリーミッションなど楽しいボーナスやキャンペーンが盛りだくさん。初回入金ボーナスはカジノ用とスポーツベット用の2種類から選べます。",
    noDeposit:
      "残念ながら、現在スシカジノでは入金不要ボーナスは提供されていません。しかし、その他の豊富なプロモーションを活用することでお得にプレイを開始できます。",
    extraSpins: {
      summary:
        "カジノ用初回入金ボーナスには、BGAMING社の人気スロット『Bonanza Billion』で使える50回のフリースピンが含まれています。",
      schedule: [
        "初回入金（最低¥1,800）でボーナスと共に付与されます。",
      ],
      warning: "フリースピンから得た勝利金には40倍の賭け条件が適用されます。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "100%", cap: "¥200,000", code: "不要" },
      { depositNumber: "2回目", percent: "75%", cap: "€1000", code: "不要" },
      { depositNumber: "3回目", percent: "125%", cap: "€500", code: "不要" },
    ],
    conditions: [
      "カジノ初回入金ボーナスの賭け条件は35倍（入金額＋ボーナス額）。",
      "スポーツ初回入金ボーナスの賭け条件は6倍（入金額＋ボーナス額）。",
      "利用規約には、ボーナスの過剰請求やボーナスハンティングと見なされる行為が賞金没収につながる可能性がある旨が記載されています。",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "スポーツ専用初回入金ボーナス",
      description: "スポーツベット派のプレイヤー向けに、100%最大5万円の初回入金ボーナスも選択可能です。賭け条件は6倍（一体型）とカジノ用に比べて緩やかです。",
      highlight: "賭け条件6倍でスポーツベットを楽しめる",
    },
    {
      title: "ライブカジノ・ウィークリーキャッシュバック",
      description: "毎週のライブカジノでの純損失に対して、最大20%（上限4万円）がキャッシュバックされます。賭け条件は1倍です。",
      highlight: "賭け条件1倍のライブカジノ専用キャッシュバック",
    },
    {
        title: "平日＆週末リロードボーナス",
        description: "毎週「平日スペシャル（50%最大5万円）」、「マンデーマネーブースト（100%最大2万円）」、「ウィークエンドブースト（30%最大10万円）」など、ほぼ毎日リロードボーナスのチャンスがあります。",
        highlight: "毎週複数回の入金ボーナスチャンス",
    }
  ],
  facts: [
    { label: "名称", value: "Sushi Casino" },
    {
      label: "ローンチ",
      value: "2023年",
    },
    { label: "運営会社", value: "Willx N.V. / SoftGenius N.V." },
    { label: "ライセンス", value: "Curaçao Gaming Control Board" },
    { label: "VIPプログラム", value: "✅" },
    { label: "対応言語", value: "日本語、英語ほか" },
    { label: "対応通貨", value: "JPY, EUR, USDほか" },
    {
      label: "ゲームタイプ",
      value:
        "バカラ, ブラックジャック, クラップス, ゲームショー, ライブカジノ, ポーカー, ルーレット, スロット, スポーツベット",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://www.japanesecasino.com/providers/bgaming">BGAMING</Link>, <Link href="https://www.japanesecasino.com/providers/betsoft">BetSoft</Link>, <Link href="https://www.japanesecasino.com/providers/big-time-gaming">Big Time Gaming</Link>, <Link href="https://www.japanesecasino.com/providers/blueprint-gaming">Blueprint Gaming</Link>, <Link href="https://www.japanesecasino.com/providers/booming-games">Booming Games</Link>, <Link href="https://www.japanesecasino.com/providers/ela-games">ELA Games</Link>, <Link href="https://www.japanesecasino.com/providers/endorphina">Endorphina</Link>, <Link href="https://www.japanesecasino.com/providers/netent">NetEnt</Link>, <Link href="https://www.japanesecasino.com/providers/nolimit-city">Nolimit City</Link>, <Link href="https://www.japanesecasino.com/providers/pg-soft">PG SOFT</Link>, <Link href="https://www.japanesecasino.com/providers/playtech">Playtech</Link>, <Link href="https://www.japanesecasino.com/providers/play-n-go">Play’n GO</Link>, <Link href="https://www.japanesecasino.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://www.japanesecasino.com/providers/quickspin">Quickspin</Link>, <Link href="https://www.japanesecasino.com/providers/red-tiger">Red Tiger</Link>, <Link href="https://www.japanesecasino.com/providers/relax-gaming">Relax</Link>, <Link href="https://www.japanesecasino.com/providers/yggdrasil">Yggdrasil</Link> 他多数
        </span>
      ),
    },
    { label: "最小入金額", value: "¥1,800" },
    { label: "最小出金額", value: "VIPレベルによる" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@sushicasino72850.com">support@sushicasino72850.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (24時間日本語対応)" },
  ],
  intro: {
    paragraphs: [
      "いかにも日本向けである事が名前からも伝わってくるオンラインカジノ『スシカジノ（Sushi Casino）』。2023年にオープンした比較的新しいカジノです！",
      "てんこ盛りのボーナスやキャンペーン、豪華なVIPプログラムが魅力ですが、その一方で厳しい賭け条件やユーザーからの気になる評判も。CasinoTsuがその実態を隅々までチェックしていきます。",
    ],
    ctas: [
      { text: "👉 スシカジノはこちらから🍣", href: "https://go.japanesecasino.com/go/sushi-casino" },
    ],
  },
  games: [
    "スシカジノは8,000種類以上、プロバイダーは120社以上という圧倒的なゲーム数を誇ります。スロットだけでも約2,883種類、ライブカジノは約443種類と、あらゆるプレイヤーの好みに対応しています。",
    "Nolimit CityやRelaxなどの人気プロバイダーはもちろん、マイナーなスタジオのゲームも豊富。Hawaiian Dreamのようなパチスロ風スロットや、Crazy Timeなどの人気ゲームショー、さらには30種類以上のスポーツベットも楽しめます。",
  ],
  features: [
    "日本人プレイヤーに親しみやすい「寿司」をテーマにしたデザインが特徴です。サイトは全体的にカラフルで楽しい雰囲気です。",
    "しかし、新しいカジノであるためか、一部ページが日本語に翻訳されていなかったり、ゲーム検索機能がプロバイダー名かゲーム名でしか検索できず、やや不便に感じられる部分もあります。",
  ],
  editorial: {
    author: "Nanami",
    profileHref: "/authors/rina-okabe",
    hook: "ゲーム数とボーナスの量は圧巻！しかし、厳しい規約とユーザーからのネガティブな評判には細心の注意が必要です。",
    theGoodStuff: "8,000を超えるゲームライブラリと、ほぼ毎日何かしらのオファーがあるボーナスの豊富さは大きな魅力です。特に、カジノとスポーツで選べるウェルカムボーナスや、ランクが上がるほど特典が豪華になるVIPプログラムはプレイヤーのモチベーションを高めてくれます。",
    theHeadsUp: "最大の注意点は、一体型35倍という非常に厳しい賭け条件です。さらに、複数のレビューサイトで出金が数ヶ月遅延する、KYCが異常に厳しい、勝利するとアカウントが閉鎖されるといった深刻な報告が散見されます。これらは単なる使い勝手の問題ではなく、カジノの信頼性に関わる重大な懸念点です。",
    finalThought: "魅力的なオファーの裏に潜むリスクを十分に理解する必要があります。特に初心者には推奨しづらく、厳しい条件をクリアし、万が一のトラブルにも対処できる経験豊富なプレイヤー向けのサイトと言えるでしょう。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "2023年に登場したスシカジノは、その名の通り日本人プレイヤーを強く意識したオンラインカジノです。8,000種類以上の膨大なゲームセレクションと、カジノ・スポーツから選べるウェルカムボーナス、そして豪華なVIPプログラムは、一見すると非常に魅力的に映ります。",
      "しかし、その華やかなオファーの裏側を詳しく見ると、いくつかの重大な注意点が浮かび上がってきます。まず、カジノ用初回入金ボーナスに課せられる「入金額＋ボーナス額の35倍」という賭け条件は、業界でもトップクラスに厳しい設定であり、達成は容易ではありません。",
      "操作性に関しても、サイトの一部が未翻訳であったり、主要な決済方法であるはずのクレジットカードや銀行振込が「準備中」のままであったりと、発展途上の印象は否めません。24時間対応の日本語サポートも、実際には翻訳ツールを介した外国人スタッフによるもので、コミュニケーションの質にはばらつきがあるようです。",
      "そして最も懸念すべきは、複数の外部レビューサイトやフォーラムで報告されているユーザーからの声です。数ヶ月に及ぶ出金の遅延、理不尽とも思える厳しい本人確認（KYC）、そして勝利を重ねた結果のアカウント閉鎖など、プレイヤーの資金と権利を脅かしかねない深刻な問題が指摘されています。",
      "結論として、スシカジノは豊富なゲームとボーナスという大きなポテンシャルを秘めていますが、現状では運営体制の未熟さと信頼性に関する深刻な懸念から、万人におすすめできるカジノとは言えません。特に初心者は、より透明性が高く、実績のあるカジノを選ぶ方が賢明でしょう。利用を検討する場合は、これらのリスクを十分に理解した上で、自己責任で行う必要があります。",
    ],
  },
  security: [
    "キュラソー政府のCuraçao Gaming Control Boardライセンスを取得して運営",
    "SSL暗号化プロトコルを使用し、プレイヤーの個人情報と取引データを保護",
    "RNG（乱数発生器）により、提携プロバイダーのゲームの公平性を保証",
  ],
  responsiblePlay: [
    "BeGambleAwareやGamCareといったギャンブル依存症対策団体と提携",
    "公式サイトの「ゲーム制限」ページは準備中であり、具体的なツールは不明",
    "自己排除システムが機能しないというユーザーからの重大な報告があり、依存対策の実効性には大きな疑問符がつきます。",
    "各種制限ツールの利用については、カスタマーサポートへの直接の問い合わせが必要です。",
  ],
  complaintStats: [
    "Wizard of Odds: 2.0/5.0 (非推奨)",
    "Casino Guru: 8.7/10 (高評価)",
    "Trustpilot: 2.8/5.0 (平均的)",
    "Casinos.com: 4.5/5 stars (高評価)",
    "（評価サイトによって評価が大きく分かれている点に注意が必要です）",
  ],
  awards: [],
  restrictedCountries: [
    "アメリカ合衆国",
    "イギリス",
    "オランダ",
    "フランス",

    "日本",
  ],
  userConcerns: [
    "出金遅延: 数ヶ月単位での出金遅延が複数報告されています。",
    "困難なKYC: 本人確認プロセスが非常に厳しく、頻繁に却下されるとの声があります。",
    "アカウント閉鎖: 頻繁に勝利したプレイヤーのアカウントが閉鎖されるという報告があります。",
    "機能しない自己排除: 責任あるギャンブルの根幹である自己排除システムが機能しないという深刻な指摘があります。",
  ],
  summary: [
    "ゲーム数が非常に多く、ボーナスやVIPプログラムも充実しており、一見すると非常に魅力的なカジノです。",
    "しかし、初回入金ボーナスの賭け条件が一体型35倍と極めて厳しい上に、サイトの未完成な部分も目立ちます。",
    "さらに、出金遅延やアカウント閉鎖のリスクなど、ユーザーからの深刻なネガティブな報告が複数存在するため、特に初心者の方が安心して遊ぶにはハードルが高いカジノと言えます。",
    "豊富なコンテンツとは裏腹に、運営の信頼性には多くの課題が残るため、経験豊富なプレイヤー向けのサイトと言えるでしょう。",
  ],
  extraLinks: [
    { text: "🎁 オンラインカジノのボーナスとは？", href: "https://www.japanesecasino.com/bonuses" },
    { text: "👑 VIPプログラムで有利にプレイ！", href: "https://www.japanesecasino.com/guides/vip-program" },
  ],
  faq: [
    {
      question: "スシカジノは、決済方法にクレジットカードや銀行送金は使えますか？",
      answer: "いいえ、現在準備中です。今のところ利用することはできませんが、将来的には導入される予定です。",
    },
    {
      question: "スシカジノには、入金不要ボーナスはありますか？",
      answer: "いいえ、スシカジノに入金不要ボーナスはありません。しかし、ウェルカムボーナスやウィークリーキャッシュバックなど、他の魅力的なボーナスが多数用意されています。",
    },
    {
      question: "スシカジノのライブチャットサポートは日本語対応ですか？",
      answer: "はい、24時間日本語での問い合わせは可能ですが、外国人スタッフが翻訳機能を使用して対応するため、コミュニケーションの速度や正確さには限界がある場合があります。",
    },
    {
        question: "スシカジノは日本からプレイできますか？",
        answer: "いいえ。利用規約によると、日本は制限された国の一つに含まれており、日本からのアクセスおよびプレイは許可されていません。プレイする前にお住まいの地域の法律とカジノの利用規約を必ずご確認ください。",
    },
  ],
  cta: {
    text: "スシカジノのボーナス詳細を確認する",
    href: "https://go.japanesecasino.com/go/sushi-casino:sushi-casino?referrer_path=%2Freviews%2Fsushi-casino",
  },
    images: {
    casino: [
      "/assets/casino/sushi-casino.jpg",
      "/assets/casino/sushi-casino.png",
    ],
  },
};