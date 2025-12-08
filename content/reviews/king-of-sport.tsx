import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewKingsOfSport: ReviewPageContent = {
  hero: {
    title: "キングスオブスポーツ（Kings of Sport）レビュー",
    subheading: "最大500%ウェルカムボーナス + $8入金不要ボーナス",
    description: "豊富な仮想通貨対応と最大500%の大型ボーナスが魅力の新カジノ、キングスオブスポーツをレビュー。しかし、第三者機関から極めて低い安全性評価を受けており、利用には最大限の注意が必要です。",
    score: 4.2,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 82,
        note: "新しいカジノで知名度は低いが、豊富なゲームとプロモーションが魅力。今後の成長に期待が集まる。",
      },
      {
        label: "規約",
        percent: 74,
        note: "初回ボーナスの賭け条件40倍は厳しいが、毎週参加できるオファーが多数用意されている点は良い。",
      },
      {
        label: "操作性",
        percent: 94,
        note: "アカウント登録が非常に簡単で、ゲーム検索機能も分かりやすい。ただし決済方法の少なさが課題。",
      },
      {
        label: "サポート",
        percent: 84,
        note: "24時間対応のチャットは返信が速くスムーズ。ただし翻訳ベースで、決済関連の専門的な質問には弱い。",
      },
    ],
    highlights: [
      "最大500%の3段階ウェルカムボーナス",
      "$8の入金不要ボーナスを提供",
      "4,000種類以上の豊富なゲームラインナップ",
      "アカウント登録がメールアドレスとパスワードのみで非常に簡単",
    ],
    watchouts: [
      "Casino Guruによる安全性評価が3.1/10と極めて低い",
      "賞金紛争などプレイヤーからの苦情が多数報告されている",
      "推定年間収益100万ドル未満の小規模な運営",
      "利用可能な決済方法が少ない",
    ],
  },
  payments: {
    featured: [
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://www.casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "主要な暗号資産に対応",
      },
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://www.casinotsu.com/payment/visa",
        badge: "カード決済",
        note: "日本円での入金に対応",
      },
      {
        name: "MasterCard",
        icon: "/assets/payments/mastercard.svg",
        href: "https://www.casinotsu.com/payment/mastercard",
        badge: "カード決済",
        note: "広く利用されるクレジットカード",
      },
      {
        name: "Ethereum",
        icon: "/assets/payments/ethereum.svg",
        href: "https://www.casinotsu.com/payment/ethereum",
        badge: "仮想通貨",
        note: "人気のアルトコインで決済可能",
      },
    ],
    deposits: [
      { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg" },
      { name: "Bitcoin Cash (BCH)" },
      { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg" },
      { name: "Litecoin (LTC)" },
      { name: "Ripple (XRP)" },
      { name: "Tether (USDT)" },
      { name: "Cardano (ADA)" },
      { name: "BNB" },
      { name: "DAI" },
      { name: "Dogecoin (DOGE)" },
      { name: "TRON (TRX)" },
      { name: "USD Coin (USDC)" },
      { name: "VISA", icon: "/assets/payments/visa.svg" },
      { name: "MasterCard", icon: "/assets/payments/mastercard.svg" },
      { name: "Neteller" },
      { name: "Skrill" },
      { name: "MuchBetter" },
      { name: "Interac" },
      { name: "PIX" },
      { name: "Google Pay" },
    ],
    withdrawals: [
      { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg" },
      { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg" },
      { name: "Litecoin (LTC)" },
      { name: "Ripple (XRP)" },
      { name: "Tether (USDT)" },
    ],
    notes: [
      "仮想通貨での決済が中心ですが、クレジットカードでの日本円入金にも対応しています。",
      "出金は主に仮想通貨となります。日本円での出金可否についてはサポートからの明確な回答が得られませんでした。",
      "一部の決済方法には追加手数料がかかる場合があります。",
      "出金時間はシステム処理完了後とされており、具体的な所要時間は不明です。",
    ],
  },
  bonuses: {
    overview:
      "キングスオブスポーツは、$8の入金不要ボーナスと、3回の入金で合計最大500%（$600）に達する非常に豪華なウェルカムボーナスを提供しています。ただし、Casino Guruからはボーナスが提供されていないとの情報もあり、矛盾が見られるため、利用前には必ず公式サイトで最新情報を確認してください。",
    noDeposit:
      "新規登録するだけで$8の入金不要ボーナスが獲得できます。賭け条件は40倍、有効期限は7日間です。ボーナスを有効化し、出金するにはKYCレベル2の完了が必要です。最大出金額は$100です。",
    extraSpins: {
      summary: "金曜日に$25以上を入金すると、人気スロットのフリースピン25回分がもらえる「金曜フリースピン」プロモーションが毎週開催されています。",
      schedule: [],
      warning: "",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "130%", cap: "$200", code: "不要" },
      { depositNumber: "2回目", percent: "170%", cap: "$200", code: "不要" },
      { depositNumber: "3回目", percent: "200%", cap: "$200", code: "不要" },
    ],
    conditions: [
      "入金ボーナスの賭け条件は、ボーナス額に対して40倍です。",
      "賭け条件の達成期限は14日間です。",
      "ボーナス利用中の最大ベット額は$10です。",
      "ボーナスからの最大出金額は$500です。",
      "ボーナスはアカウント内の「ボーナスロッカー」から有効化する必要があります。",
      "スポーツベット、ライブ＆テーブルゲームは賭け条件消化の対象外です。",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "火曜日入金ボーナス",
      description: "毎週火曜日限定で、入金額の25%（最大$400）がボーナスとして追加されるリロードプロモーションです。",
      highlight: "高額入金するなら火曜日がお得",
    },
    {
      title: "KOS報酬システム (VIPプログラム)",
      description: "ベットするごとにレベルアップし、キャッシュバックやレーキバック、レベルアップボーナスが豪華になる16段階のVIPプログラムです。レベルダウンはありません。",
      highlight: "Bronzeレベル到達でKOSホイールやスクラッチが解禁",
    },
  ],
  facts: [
    { label: "名称", value: "Kings of Sport (キングス・オブ・スポーツ)" },
    { label: "ローンチ", value: "2024年" },
    { label: "運営会社", value: "Maxi Technology NV" },
    { label: "ライセンス", value: "Curaçao Gaming Control Board" },
    { label: "VIPプログラム", value: "✅" },
    {
      label: "対応言語",
      value: "英語、スペイン語、ポルトガル語、日本語、ドイツ語、韓国語、フランス語、中国語、タイ語",
    },
    {
      label: "対応通貨",
      value: "JPY, INR, THB, VND, BTC, ETH, ADA, BCH, BNB, DAI, DOGE, LTC, TRX, USDT, USDC, XRPなど25種類以上",
    },
    {
      label: "ゲームタイプ",
      value: "スロット, バカラ, ブラックジャック, クラップス, ライブカジノ, ゲームショー, ポーカー, ルーレット, ビデオポーカー, ビンゴ, キノ, スクラッチカード, eスポーツベット, バーチャルスポーツ, クラッシュゲーム",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://www.casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://www.casinotsu.com/providers/play-n-go">Play’n GO</Link>, <Link href="https://www.casinotsu.com/providers/netent">NetEnt</Link>, <Link href="https://www.casinotsu.com/providers/nolimit-city">Nolimit City</Link>, <Link href="https://www.casinotsu.com/providers/relax-gaming">Relax</Link>, <Link href="https://www.casinotsu.com/providers/hacksaw-gaming">Hacksaw Gaming</Link>, <Link href="https://www.casinotsu.com/providers/playtech">Playtech</Link>, <Link href="https://www.casinotsu.com/providers/red-tiger">Red Tiger</Link>, <Link href="https://www.casinotsu.com/providers/bgaming">BGAMING</Link>, <Link href="https://www.casinotsu.com/providers/thunderkick">Thunderkick</Link>, Wazdan, Playson, Habanero, Endorphina, Booongo, Blueprint Gaming, 1X2 Network, Belatra Games, EveryMatrix, JILI, Aspect Gaming, Smartsoft Gaming, Ortiz, Turbo Games, Skywind Group, Caleta Gaming, RTG Slots, Spribe, OneTouch, Expanse Studios, Zitro, iMoon, 3 Oaks Gaming, Kalamba Games, Revolver Gaming, Funky Games, Ruby Play, Mplay, PlayStar, XPGなど44社
        </span>
      ),
    },
    { label: "最小入金額", value: "$10 (¥1,000)" },
    { label: "最小出金額", value: "情報なし" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@kingsofsport.com">support@kingsofsport.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (24時間日本語対応)" },
    { label: "テレグラム", value: "@KOS_kingsofsport" },
  ],
  intro: {
    paragraphs: [
      "2024年に登場したキングスオブスポーツ（Kings of Sport）は、4,000種類を超える豊富なゲームと、最大500%という破格のウェルカムボーナスを掲げる新しい仮想通貨カジノです。",
      "スロットからライブカジノ、スポーツベットまで幅広いジャンルを網羅し、アカウント登録も非常に簡単なため、多くのプレイヤーにとって魅力的に映ります。",
      "しかし、その一方で第三者機関からは安全性に関する深刻な警告も出されています。このレビューでは、キングスオブスポーツの魅力と、プレイヤーが知っておくべき重大なリスクの両方を、CasinoTsuが徹底的に解説します。",
    ],
    ctas: [
      { text: "🎁 最新の入金不要ボーナスをチェックする", href: "https://www.casinotsu.com/bonuses/no-deposit" },
    ],
  },
  games: [
    "キングスオブスポーツの最大の魅力の一つは、4,230種類以上という圧巻のスロットコレクションです。『Book of Dead』や『Sweet Bonanza』などの超人気機種から最新作まで、あらゆるスロットが揃っています。",
    "ライブカジノもEvolutionやPragmatic Playをはじめとする8社のプロバイダーが参加し、バカラ、ブラックジャック、ルーレット、そして『Crazy Time』のような人気のゲームショーまで、非常に充実したラインナップです。",
    "さらに、サッカーや野球などの人気スポーツを対象としたスポーツベットも提供しており、ライブベットやクイックベット機能で快適に楽しむことができます。",
  ],
  features: [
    "キングスオブスポーツのVIPプログラム「KOS報酬システム」は、ベットするだけで自動的にレベルアップし、キャッシュバックやレーキバック、レベルアップボーナスなどの報酬が豪華になっていく仕組みです。レベルダウンがないため、自分のペースで特典を積み上げていけます。",
    "サイトデザインはシンプルで非常に使いやすく、ゲーム検索やボーナスの確認が直感的に行えます。遊び心のある動物キャラクターも、サイトの親しみやすさに貢献しています。",
  ],
  editorial: {
    author: "Nanami",
    profileHref: "/authors/rina-okabe",
    hook: "ボーナスは超豪華、でも安全性には大きな疑問符。光と影がはっきりしたカジノです。",
    theGoodStuff: "合計500%のウェルカムボーナスや$8の入金不要ボーナスは、新規プレイヤーにとって非常に魅力的です。4,000を超えるゲーム数とシンプルなサイト設計も高く評価できます。",
    theHeadsUp: "しかし、Casino Guruの安全性評価が3.1/10と極めて低い点は見過ごせません。小規模な運営体制に加え、プレイヤーからの苦情、特に出金遅延やアカウント閉鎖の報告が多数あることは、資金を預ける上で重大なリスクとなります。",
    finalThought: "魅力的なプロモーションに惹かれても、まず第一に安全性を考慮すべきです。報告されている数々の問題点を踏まえると、CasinoTsuとしては、現時点での利用を強く推奨することはできません。利用を検討する場合は、これらのリスクを完全に理解し、自己責任で行う必要があります。",
  },

  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
        "2024年に彗星のごとく現れたキングスオブスポーツは、その名の通り「スポーツの王」を目指すだけでなく、カジノゲームにおいても王者の風格を見せつけようとしています。最大の武器は、新規プレイヤーを惹きつける最大500%のウェルカムボーナスと、$8の入金不要ボーナスです。これほどまでに太っ腹なオファーは、市場でも際立っています。さらに、4,200種類を超えるスロット、8社のライブカジノプロバイダー、そして充実したスポーツブックという三本柱は、どんなタイプのプレイヤーでも満足させうるポテンシャルを秘めています。操作性においても、極限まで簡素化された登録プロセスや直感的なサイトデザインは、ユーザビリティの高さを物語っています。",
        "しかし、その輝かしい表面の下には、深刻な懸念が潜んでいます。独立した評価機関であるCasino Guruは、このカジノに10点満点中3.1点という厳しい評価を下し、「利用を強く控えるべき」と結論付けています。その根拠は、カジノの規模に対して不釣り合いなほど多いプレイヤーからの苦情です。報告されている問題は、出金の遅延や理由なきキャンセル、突然のアカウント閉鎖、入金した資金の不反映など、カジノの根幹的な信頼を揺るがすものばかりです。推定年間収益が100万ドル未満という小規模な運営であることも、高額賞金を獲得した際の支払い能力に疑問を投げかけます。",
        "カスタマーサポートは24時間対応で一見安心感がありますが、翻訳を介した対応では、特に決済のような複雑な問題に対して十分な解決策を提示できていないという報告もあります。責任あるギャンブルのツールも提供はされていますが、その機能は限定的であるとの指摘もあり、プレイヤー保護の観点からも万全とは言えません。",
        "結論として、キングスオブスポーツは、非常に魅力的で強力なプロモーションとゲームラインナップを持つ一方で、その運営の信頼性、顧客対応、そして財務的安定性において重大なリスクを抱えています。CasinoTsuの使命は、安全で公正な情報を提供することです。『正確さが第一。興奮はその次。』この原則に基づき、我々はキングスオブスポーツの利用には最大限の警戒が必要であると判断します。提供されているボーナスがいかに魅力的であっても、最終的に賞金が安全に引き出せなければ意味がありません。利用を検討される方は、これらのリスクを十分に理解した上で、自己責任において判断してください。"
    ]
  },
  security: [
    "オランダ領キュラソー政府発行のCuraçao Gaming Control Boardライセンスを取得し運営。",
    "ライセンスを持つプロバイダーのゲームを提供し、RNG（乱数生成器）により公平性を保証。",
    "利用規約内でプライバシーポリシーを公開し、個人情報の保護について記載。",
  ],
  responsiblePlay: [
    "タイムアラート（プレイ時間通知）機能を提供。",
    "自己排除機能により、一定期間のアカウント利用停止が可能。",
    "ただし、全体的に提供されているツールは限定的であると指摘されている。",
  ],
  complaintStats: [
    "Casino Guruによる安全性指数が3.1/10と非常に低い。",
    "カジノの規模と比較してプレイヤーからの苦情が非常に多いとされている。",
    "賞金の紛争における総額が大きいことが問題視されている。",
  ],
  awards: [],
  restrictedCountries: [
    "アメリカ合衆国からのプレイヤーは受け付けていません。",
    "その他の具体的な制限国リストは提供されておらず、プレイヤーは居住国の法律を自己責任で確認する必要があります。",
  ],
  userConcerns: [
    "出金の遅延や理由なきキャンセル",
    "説明のない突然のアカウント閉鎖",
    "入金した資金がアカウントに反映されない問題",
    "カスタマーサポートの対応不足（特に決済関連）",
    "ボーナスの厳しい賭け条件に関する報告",
  ],
  summary: [
    "最大500%のウェルカムボーナスと$8の入金不要ボーナスは非常に魅力的。",
    "ゲーム数は4,000種類以上と豊富で、サイトは使いやすい。",
    "しかし、Casino Guruから極めて低い安全性評価を受けており、出金遅延やアカウント閉鎖など多数の苦情が報告されている。",
    "小規模な運営であり、高額賞金の支払い能力に懸念があるため、利用には重大なリスクが伴います。",
  ],
  extraLinks: [
    { text: "🔰 オンラインカジノの本人確認（KYC）について", href: "https://www.casinotsu.com/guides/document-verification" },
    { text: "👑 VIPプログラムの仕組みを徹底解説", href: "https://www.casinotsu.com/guides/vip-program" },
  ],
  faq: [
    {
      question: "キングスオブスポーツは違法なオンラインカジノですか？",
      answer: "いいえ、キュラソーライセンスを取得し合法的に運営されています。しかし、プレイヤーからの苦情が多数報告されており、第三者機関からの安全性評価が非常に低いため、利用には注意が必要です。",
    },
    {
      question: "ボーナスの出金条件は厳しいですか？",
      answer: "はい、ウェルカムボーナスの賭け条件は40倍と、一般的もしくはやや高めの水準です。利用する前には必ず最新の利用規約を確認することをお勧めします。",
    },
  ],
  cta: {
    text: "CasinoTsuが推薦する安全な仮想通貨カジノを探す",
    href: "https://www.casinotsu.com/crypto",
  },
};