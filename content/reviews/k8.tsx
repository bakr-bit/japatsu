import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewK8: ReviewPageContent = {
  hero: {
    title: "K8カジノの入金不要ボーナス、ログイン方法から評判までをCasinoTsuが徹底調査",
    subheading: "最大$1,840ボーナス + 288回フリースピン",
    description: "CasinoTsuは、K8カジノの評判、ボーナス、入出金方法、登録方法などについて、徹底的に調査した結果をご報告いたします。プレイヤーの皆様に正確な情報をお届けすることを最優先としております。",
    score: 4.3,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 95,
        note: "人気のパチンコ台がオンラインで手軽に遊べるだけでなく、豊富なスロットやライブカジノで、あらゆるカジノプレイヤーを魅了します。",
      },
      {
        label: "規約",
        percent: 73,
        note: "期間限定の入金不要ボーナスをはじめ、多彩なプロモーションをご用意しております。VIPプログラムも充実しています。",
      },
      {
        label: "操作性",
        percent: 90,
        note: "検索機能が充実しており便利です。PCからのプレイを推奨します。",
      },
      {
        label: "サポート",
        percent: 87,
        note: "24時間メールとライブチャットで対応。日本語サポートはなく、翻訳機能の活用が必要になる場合があります。",
      },
    ],
    highlights: [
      "パチンコ台で遊ぶことが可能",
      "プロモーションの数が常時豊富♪",
      "仮想通貨の購入手数料が無料",
      "豊富なゲーム数（21,000種類以上）",
    ],
    watchouts: [
      "日本語カスタマーサポートが不在",
      "モバイルでのパチンコゲームの動作に遅延が生じる場合がある",
      "入出金時に不具合が発生することがある",
      "取引手数料が高くなる場合がある（特にビットコインの出金手数料）",
    ],
  },
  payments: {
    featured: [
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "主要な決済手段で手数料無料",
      },
      {
        name: "Vega Wallet",
        icon: "/assets/payments/vega-wallet.svg",
        href: "https://casinotsu.com/payment/vega-wallet",
        badge: "Eウォレット",
        note: "日本円での利用に便利な電子決済",
      },
      {
        name: "SticPay",
        icon: "/assets/payments/sticpay.svg",
        href: "https://casinotsu.com/payment/sticpay",
        badge: "Eウォレット",
        note: "スピーディーな入出金に対応",
      },
      {
        name: "Ethereum",
        icon: "/assets/payments/ethereum.svg",
        href: "https://casinotsu.com/payment/ethereum",
        badge: "仮想通貨",
        note: "多くのユーザーに利用される暗号資産",
      },
    ],
    deposits: [
        { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
        { name: "Bitcoin Cash" },
        { name: "Ethereum", icon: "/assets/payments/ethereum.svg", href: "https://casinotsu.com/payment/ethereum" },
        { name: "Litecoin" },
        { name: "Shiba Inu" },
        { name: "SticPay", icon: "/assets/payments/sticpay.svg", href: "https://casinotsu.com/payment/sticpay" },
        { name: "Tether" },
        { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vega-wallet" },
        { name: "USDT" },
        { name: "BNB" },
        { name: "USDC" },
        { name: "TRX" },
        { name: "DOGE" },
        { name: "XRP" },
        { name: "UnionPay" },
        { name: "PromptPay" },
        { name: "True Money" },
        { name: "UPI" },
        { name: "インドネシア銀行（BCA, BNI, BRI）" },
        { name: "bKash" },
        { name: "Nagad" },
        { name: "LINE Pay" },
        { name: "QRコード決済" },
    ],
    withdrawals: [
        { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
        { name: "Bitcoin Cash" },
        { name: "Ethereum", icon: "/assets/payments/ethereum.svg", href: "https://casinotsu.com/payment/ethereum" },
        { name: "Litecoin" },
        { name: "Shiba Inu" },
        { name: "SticPay", icon: "/assets/payments/sticpay.svg", href: "https://casinotsu.com/payment/sticpay" },
        { name: "Tether" },
        { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vega-wallet" },
        { name: "USDT" },
        { name: "BNB" },
        { name: "USDC" },
        { name: "TRX" },
        { name: "DOGE" },
        { name: "XRP" },
        { name: "UnionPay" },
        { name: "PromptPay" },
        { name: "True Money" },
        { name: "UPI" },
        { name: "インドネシア銀行（BCA, BNI, BRI）" },
        { name: "bKash" },
        { name: "Nagad" },
        { name: "LINE Pay" },
        { name: "QRコード決済" },
    ],
    notes: [
      "決済のメインは仮想通貨です。最低入金額は$10。クレジットカードは仮想通貨の購入にのみ利用可能です。",
      "出金時間は仮想通貨・電子決済で約30分以内、銀行送金関連は1-3営業日。仮想通貨の出金手数料はネットワーク手数料に依存し、高額になる場合があります。",
    ],
  },
  bonuses: {
    overview:
      "K8カジノは、パチンコやスロットをはじめとする豊富なゲームだけでなく、ボーナスやプロモーションも非常に充実しています。常時20種類以上のキャンペーンが用意されています。",
    noDeposit:
      "【期間限定】9月30日までにCasinoTsuから新規登録すると、$40の入金不要ボーナスが進呈されます。電話番号認証と本人確認レベル2までの完了が条件です。賭け条件は25倍で、パチンコ・パチスロ以外の全ゲームで利用可能です。",
    extraSpins: {
      summary:
        "初回入金時に、入金額に応じて最大288回のフリースピンも獲得できます。このフリースピンはK8カジノ内の全てのスロットで利用可能です。",
      schedule: [
        "$50～$99の入金で28回",
        "$100～$299の入金で58回",
        "$300～$499の入金で88回",
        "$500～$999の入金で188回",
        "$1000以上の入金で288回",
      ],
      warning: "フリースピンで得た勝利金には25倍の賭け条件が設定されます。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "100%", cap: "$800", code: "サポートへ申請" },
      { depositNumber: "2回目", percent: "50%", cap: "$500", code: "サポートへ申請" },
      { depositNumber: "3回目", percent: "30%", cap: "$500", code: "サポートへ申請" },
    ],
    conditions: [
      "各入金ボーナスを受け取るには、電話番号認証と本人確認レベル2までを完了し、サポートに申請する必要があります。",
      "賭け条件は、初回入金で25倍、2回目・3回目では15倍の一体型（入金額＋ボーナス額）です。",
      "このボーナスはスロットでのみベット可能です。",
      "初回入金ボーナスの有効期限は60日です。",
    ],
    prohibitedGames: [
        "パチンコ",
        "パチスロ",
        "（入金不要ボーナスは上記以外全てで利用可能）",
        "（ウェルカムボーナスはスロット専用）",
    ],
  },
  offers: [
    {
      title: "VIP限定ウィークリーボーナス",
      description: "VIPレベルに応じて毎週付与されるボーナス。プラチナレベル以上では最大5%の週次キャッシュバック（最大$3,000）を受け取ることができます。",
      highlight: "VIPレベルを上げて毎週お得な特典をゲット",
    },
    {
      title: "レベルアップ＆アニバーサリーボーナス",
      description: "新しいVIPレベルに昇格した際や、誕生日に付与される特別なボーナスです。",
    },
    {
      title: "公式X（旧Twitter）キャンペーン",
      description: "K8カジノの公式X（旧Twitter）アカウントでも、定期的にキャンペーンが開催されています。",
    },
  ],
  facts: [
    { label: "名称", value: "K8" },
    {
      label: "ローンチ",
      value: "2022-2023（※記事初出時の「2013年」という情報は、最新の情報と異なる可能性があるためご注意ください）",
    },
    { label: "運営会社", value: "Westward Way Tech N.V." },
    { label: "ライセンス", value: "GAMING CURACAO (Curaçao Gaming Control Board GCB)" },
    { label: "VIPプログラム", value: "✅" },
    {
      label: "対応言語",
      value: "英語、スペイン語、ドイツ語、ポルトガル語、日本語、フランス語、中国語、インドネシア語、韓国語、ベトナム語、タイ語、マレー語、ベンガル語",
    },
    { label: "対応通貨", value: "仮想通貨各種、日本円など" },
    {
      label: "ゲームタイプ",
      value:
        "バカラ、ブラックジャック、クラップス、ゲームショー、ライブカジノ、ポーカー、ルーレット、スロット、ビデオポーカー、ビンゴ、ジャックポットゲーム、ケノ、スクラッチカード、バーチャルスポーツ、クラッシュゲーム",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="/providers/betsoft">BetSoft</Link>, <Link href="/providers/big-time-gaming">Big Time Gaming</Link>, <Link href="/providers/blueprint-gaming">Blueprint Gaming</Link>, <Link href="/providers/booming-games">Booming Games</Link>, <Link href="/providers/endorphina">Endorphina</Link>, <Link href="/providers/golden-hero-games">Golden Hero</Link>, <Link href="/providers/habanero">Habanero</Link>, <Link href="/providers/hacksaw-gaming">Hacksaw Gaming</Link>, Lucksome, <Link href="/providers/microgaming">Microgaming</Link>, <Link href="/providers/netent">NetEnt</Link>, <Link href="/providers/nolimit-city">Nolimit City</Link>, <Link href="/providers/pg-soft">PG SOFT</Link>, <Link href="/providers/playson">Playson</Link>, <Link href="/providers/play-n-go">Play’n GO</Link>, <Link href="/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="/providers/red-tiger">Red Tiger</Link>, <Link href="/providers/relax-gaming">Relax</Link>, Slingshot Studios, <Link href="/providers/thunderkick">Thunderkick</Link>, <Link href="/providers/evolution">Evolution</Link>, <Link href="/providers/ezugi">Ezugi</Link>
        </span>
      ),
    },
    { label: "最小入金額", value: "$10" },
    { label: "最小出金額", value: "$10" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:cs@mail-k8.io">cs@mail-k8.io</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (24時間対応)" },
    { label: "信頼性", value: "High Safety Index (Casino.Guru): 8.2/10" },
  ],
  intro: {
    paragraphs: [
        "K8.io（K8カジノ）は2022年から2023年にかけてオープンした比較的新しいオンラインカジノです。しかし、すでに多くのプレイヤーから高い評価を得ており、評判・知名度ともに上昇中です。",
        "ゲームラインナップはスロットやライブカジノ、更にはスポーツベットも遊べるのに加え、なんと…日本のパチンコ台がオンラインで打てちゃうんです。",
        "その上、K8カジノでは入金不要ボーナスやプロモーションも豊富となれば、期待も膨らみます。決済方法については、種類は少ないものの仮想通貨の取り扱い種類は豊富なので、仮想通貨ユーザーにとっては嬉しい限りです！",
        "一方で、サイトの日本語に若干の不自然さを感じたり、サポートとのコミュニケーションに難があったりする点は残念な点でもあります。そんな話題のK8カジノの評判と、最新情報を深掘りしていきましょう。",
    ],
    ctas: [
      { text: "👉 K8カジノで遊んでみる♪", href: "https://go.japanesecasino.com/go/k8" },
      { text: "🆕 新カジノ続々登場！", href: "/new-casinos" },
    ],
  },
  games: [
    "K8で遊べるゲームはスロット、ライブカジノのほかにもスポーツブック、そしてなんと日本のパチンコ・パチスロ台まで楽しめる、非常に幅広いラインナップです。",
    "ユーザーの皆様からの報告によると、K8カジノには21,000種類以上のゲームが用意されているとのことです。CR 真・北斗無双、アラジン、牙狼、CR海物語など、懐かしいパチンコ・パチスロ台が勢揃いです。",
    "50社以上のプロバイダーが参加しており、ライブカジノではEvolutionやPragmatic Playを含む6社のゲームを楽しめます。",
  ],
  features: [
    "サイトは見やすく、使いやすいデザインで、画像やゲームカテゴリーのアイコンも可愛らしいです。オリジナルキャラクターのにゃちまるとハチ丸もとてもキュートです。",
    "使いやすさも抜群で、サイトの動作やゲーム検索など様々な点で使いやすさを感じますが、特にデモモードとリアルマネーモードをゲーム画面で切り替えられる点がお気に入りです。",
  ],
  editorial: {
    author: "Nanami",
    profileHref: "/authors/nanami",
    hook: "オンラインで日本のパチンコ実機が打てるのは唯一無二の魅力！ただし、サポート体制には注意が必要です。",
    theGoodStuff: "懐かしのパチンコ・パチスロ台をオンラインで楽しめるのはK8カジノ最大の強みです。2万種類を超えるゲーム数、豊富なプロモーション、仮想通貨の利便性も非常に魅力的です。",
    theHeadsUp: "一方で、日本語ネイティブのサポートがいないため、コミュニケーションに翻訳ツールが必要になる場面があります。また、モバイルでのパチンコプレイは遅延が発生する可能性があり、PC環境が推奨されます。",
    finalThought: "パチンコファンならずとも、豊富なゲームとボーナスは試す価値大です。サポート面での課題を理解した上で、このユニークなカジノ体験を楽しみましょう。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
        "CasinoTsuではプレイヤーの皆様に信頼できる情報を届けるため日々リサーチを重ねており、K8カジノはその中でも日本のパチンコ・パチスロ実機をオンラインでプレイできるという点で際立った存在です。2022-2023年に設立された新しいカジノでありながら、そのユニークな特徴で急速に知名度を上げています。",
        "サイトデザインは親しみやすく直感的で、キャラクターデザインも魅力的です。ゲーム検索機能も使いやすく、膨大なゲームライブラリから目的のゲームを簡単に見つけられます。しかし、一部の日本語表記には不自然な点が見られ、今後の改善が期待されます。",
        "ボーナスは非常に豊富で、特に期間限定の$40入金不要ボーナスや、3回にわたる最大$1,800のウェルカムボーナス、最大288回のフリースピンは魅力的です。賭け条件も業界標準かそれ以下で、プレイヤーにとって有利な設定と言えるでしょう。",
        "決済は仮想通貨が中心で、BTCやETHなど約12種類に対応しており、仮想通貨ユーザーには非常に便利です。Vega Walletなどの電子決済も利用可能ですが、選択肢は限られています。出金速度は速いと評判ですが、一部で手数料の高さや不具合が報告されています。",
        "最大の課題はカスタマーサポートです。24時間対応ですが日本語ネイティブのスタッフがおらず、翻訳ツールを介したコミュニケーションが基本となります。複雑な問題についてはメールでの問い合わせが推奨されますが、返信に時間がかかる場合もあるようです。",
        "総じて、K8カジノは特にパチンコファンや仮想通貨ユーザーにおすすめできる、ユニークで魅力的なオンラインカジノです。サポート面などの注意点を理解した上で利用すれば、他にはないゲーム体験が楽しめるでしょう。",
    ],
  },
  security: [
    "正規のキュラソーCuraçao Gaming Control Board (GCB) ライセンスを取得し運営",
    "公式サイトの「利用規約とプライバシーポリシー」に基づき個人情報を保護",
    "提携プロバイダーのゲームに乱数発生器 (RNG) を搭載し公平性を保証",
    "Casino.Guruによる信頼性評価で「High Safety Index」(8.2/10)を獲得",
  ],
  responsiblePlay: [
    "ログイン制限: 一定期間または永久にアカウントへのログインを制限",
    "自己除外: プレイヤーの申請に基づきアカウントを停止",
    "（上記の設定はカスタマーサポートへの連絡により可能）",
    "（他の大手カジノと比較すると、利用できるツールは限定的との指摘あり）",
  ],
  complaintStats: [
    "Casino.Guruによる安全性評価: 8.2/10",
    "Chipy.comでのユーザー評価: 3.8/5（986件の投票に基づく）",
  ],
  awards: [
      "特になし",
  ],
  restrictedCountries: [
    "アメリカ合衆国",
    "アメリカ領サモア",
    "アルバ",
    "オーストラリア",
    "キュラソー",
    "フランス",
    "フランス領ギアナ",
    "フランス領ポリネシア",
    "フランス領南極・南極諸島",
    "グアドループ",
    "グアム",
    "イスラエル",
    "マルティニーク",
  ],
  userConcerns: [
    "サポートの質: 出金やアカウント閉鎖に関するサポートの対応が遅い、または不十分であるとの不満の声あり",
    "技術的問題: ウェブサイトの遅延、スクロールバグ、度重なるリロードの問題が報告されており、ゲーム体験を損なう可能性",
    "パチンコの動作: スマートフォンからではゲームの動作がかなり遅くなる傾向があり、満席でプレイできない場合もある",
    "入出金の不具合: 入出金時にエラーが発生するとの口コミあり",
  ],
  summary: [
    "初回入金ボーナスやプロモーションが豊富で、ゲーム数も非常に満足できるレベルです。オリジナルキャラクターも可愛らしく、サイトデザインも魅力的です。",
    "そして何より、パチンコ店で人気のパチンコ台がオンライン上で遠隔プレイできるのは、パチスロファンの皆様にとって非常に魅力的です。",
    "決済方法の種類が少ない点や、日本人サポートが不在な点は残念ですが、徐々に改善されていることも感じられます。",
    "今後、K8カジノでは、パチンコ台だけでなく日本のお客様向けサービスがさらに充実していくことを期待しております！",
  ],
  extraLinks: [
    { text: "🔰 賭け条件ってなに？わかりやすく解説！", href: "https://www.japanesecasino.com/guides/wagering-requirements" },
    { text: "💫 時代はやっぱり仮想通貨！始め方ガイド", href: "https://www.japanesecasino.com/crypto" },
  ],
  faq: [
    {
      question: "K8カジノにスポーツベットはありますか？",
      answer: "はい、K8カジノの公式サイトで「スポーツブック」の項目を開くと、スポーツベットをお楽しみいただけます。野球、サッカー、バスケットボール、テニスなど、主要なスポーツが揃っています。",
    },
    {
      question: "K8カジノで日本のパチンコを遊ぶことはできますか？",
      answer: "はい、K8カジノでは、パチンコの実機をオンラインでプレイできます！「沖ドキ！」のような定番パチンコをはじめ、「北斗の拳」4号機のような現在では遊べない機種、そして「SAO」のスマスロのような近年のパチスロまで、様々な機種が用意されています。",
    },
    {
      question: "K8には、登録するだけで無料で受け取れる「入金不要ボーナス」はありますか？",
      answer: "はい、ジャパカジから登録すると、K8カジノから入金不要ボーナス40ドルを獲得できます。電話番号認証と本人確認レベル2まで完了していることが条件です。期間限定の可能性があるため、お早めにどうぞ。",
    },
    {
      question: "K8カジノへの入金方法にはどのようなものがありますか？",
      answer: "K8カジノでは、仮想通貨を中心に、Vaga Wallet、STICPAYなどの電子決済、各種銀行送金サービスを利用できます。クレジットカードでの入金を希望される場合は、サイトを通じて仮想通貨を購入することが可能です。",
    },
    {
      question: "K8カジノからの出金方法と申請方法について教えてください。",
      answer: "出金は、入金方法と同様に仮想通貨や電子決済が中心です。仮想通貨をご選択いただいた場合は出金上限がなくなります。出金には本人確認（KYC）が必須です。詳細はレビュー本文の「K8カジノの出金方法」をご確認ください。",
    },
    {
      question: "K8カジノで利用できる仮想通貨にはどのようなものがありますか？",
      answer: "ビットコイン（BTC）やイーサリアム（ETH）といった主要コインに加え、シバイヌコイン（SHIB）やバイナンスコイン（BNB）など、約12種類を取り揃えています。",
    },
    {
      question: "K8カジノが怪しいと聞きましたが、評判はどうなのでしょうか？",
      answer: "K8カジノは運営歴があり、総合的に非常に高い評判を得ています。過去のサイト表記やサポート体制から「怪しい」というイメージがあったかもしれませんが、実際には信頼性が高く、評判の良いカジノと言えます。Casino.Guruによる安全性評価も8.2/10と高いです。",
    },
    {
      question: "K8カジノにはVIPプログラムが用意されていますか？",
      answer: "はい、「VIP Club」が用意されており、ベット金額に応じて最大6段階までレベルアップすることが可能です！レベルが上がるとリベート率が向上し、週次ボーナスや専属サポートなどの豪華な特典が受けられます。",
    },
  ],
  cta: {
    text: "早速K8カジノに登録してボーナスをゲット！",
    href: "https://go.japanesecasino.com/go/k8",
  },
};