import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewTrustdice: ReviewPageContent = {
  hero: {
    title: "トラストダイス（TRUST DICE） オンラインカジノ最新レビュー",
    subheading: "最大3BTC＋合計100フリースピン相当（例：初回20FSを含む3回構成）",
    description:
      "仮想通貨フォーセットやTXTマイニング・ステーク配当が特長の次世代型オンラインカジノ。入金不要オファー、決済、サポート、ライセンス安全性までCasinoTsuが徹底検証しました。",
    score: 4.0,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 75,
        note:
          "日本での認知度は控えめだが、チャットルーム機能や太っ腹なボーナスで“尖った”体験を求める層に刺さる。",
      },
      {
        label: "規約",
        percent: 78,
        note:
          "入金不要や登録系の無料特典が豊富。一方で初回入金系の賭け条件は60倍（以前は35〜40倍表記もあり）と厳しめ。期限は7日。",
      },
      {
        label: "操作性",
        percent: 81,
        note:
          "アプリはないがモバイル/PCブラウザで快適。ゲームもカジノ/ライブ/スポーツまで横断しやすい導線。",
      },
      {
        label: "サポート",
        percent: 87,
        note:
          "日本語ライブチャットは月〜木7:00–15:00、金土7:00–21:00（JST）。時間外は翻訳ツール併用で日本語対応。丁寧さに定評。",
      },
    ],
    highlights: [
      "最大3BTCのウェルカム（3回構成）＋初回20FS（合計100FS相当の案内あり）",
      "TXT（独自トークン）をマイニング→ステークして配当獲得",
      "チャットルームでボーナス配布やランキング発表などコミュニティが活発",
      "スロット約8,000、ライブ約540、スポーツベットまで楽しめるハイブリッド型",
    ],
    watchouts: [
      "Payz（ペイズ）など一部メジャー電子決済が未対応",
      "USD非対応（JPY/EUR/AUD/KRW/CAD/BRLなどは対応）",
      "日本語サポートの時間が限られる（時間外は機械翻訳対応）",
    ],
    avatarSrc: "/assets/casino/trustdice.png",
    avatarAlt: "Trustdiceのロゴ",
  },

  payments: {
    featured: [
      {
        name: "銀行送金",
        icon: "https://img.japanesecasino.com/svg/jp/payments/bank-transfer.svg",
        href: "https://casinotsu.com/payment/bank-transfer",
        badge: "数分反映",
        note: "定番で安心。日本円対応。",
      },
      {
        name: "VISA",
        icon: "https://img.japanesecasino.com/svg/jp/payments/visa.svg",
        href: "https://casinotsu.com/payment/visa",
        badge: "¥4,000〜",
        note: "クレカ/デビット対応、即時反映。",
      },
      {
        name: "MasterCard",
        icon: "https://img.japanesecasino.com/svg/jp/payments/mastercard.svg",
        href: "https://casinotsu.com/payment/mastercard",
        badge: "¥4,000〜",
        note: "主要ブランド対応。",
      },
      {
        name: "Sticpay",
        icon: "https://img.japanesecasino.com/svg/jp/payments/sticpay.svg",
        href: "https://casinotsu.com/payment/sticpay",
        badge: "¥1,000〜",
        note: "日本円の入出金に便利（出金は最長48h）。",
      },
      {
        name: "Vega Wallet",
        icon: "https://img.japanesecasino.com/svg/jp/payments/vega-wallet.svg",
        href: "https://casinotsu.com/payment/vega-wallet",
        badge: "¥1,000〜",
        note: "国内プレイヤーに人気のEウォレット。",
      },
      {
        name: "Bitcoin",
        icon: "https://img.japanesecasino.com/svg/jp/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "暗号資産",
        note: "入金数分〜/出金即時〜数分。",
      },
      {
        name: "Ethereum",
        icon: "https://img.japanesecasino.com/svg/jp/payments/ethereum.svg",
        href: "https://casinotsu.com/payment/ethereum",
        badge: "暗号資産",
        note: "主要チェーン対応。",
      },
      {
        name: "Tether (USDT)",
        icon: "https://img.japanesecasino.com/svg/jp/payments/tether.svg",
        badge: "上限大",
        note: "月間100万USDTまで出金可能。",
      },
    ],
    deposits: [
      { name: "VISA / MasterCard", icon: "https://img.japanesecasino.com/svg/jp/payments/visa.svg" },
      { name: "銀行送金", icon: "https://img.japanesecasino.com/svg/jp/payments/bank-transfer.svg" },
      { name: "Apple Pay" },
      { name: "Sticpay", icon: "https://img.japanesecasino.com/svg/jp/payments/sticpay.svg", href: "https://casinotsu.com/payment/sticpay" },
      { name: "Vega Wallet", icon: "https://img.japanesecasino.com/svg/jp/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vega-wallet" },
      { name: "Jeton" },
      { name: "MiFinity" },
      { name: "MuchBetter" },
      { name: "MoonPay" },
      { name: "American Express" },
      { name: "Google Pay" },
      { name: "PayPal" },
      { name: "Paysafecard" },
      { name: "Revolut" },
      { name: "Skrill" },
      // 暗号資産（代表例）
      { name: "Bitcoin (BTC)" },
      { name: "Ethereum (ETH)" },
      { name: "Tether (USDT)" },
      { name: "USD Coin (USDC)" },
      { name: "TXT" },
      { name: "EOS" },
      { name: "Litecoin (LTC)" },
      { name: "Dogecoin (DOGE)" },
      { name: "TRON (TRX)" },
    ],
    withdrawals: [
      { name: "Sticpay", icon: "https://img.japanesecasino.com/svg/jp/payments/sticpay.svg", href: "https://casinotsu.com/payment/sticpay" },
      { name: "Vega Wallet", icon: "https://img.japanesecasino.com/svg/jp/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vega-wallet" },
      { name: "Jeton" },
      { name: "MiFinity" },
      { name: "MuchBetter" },
      { name: "銀行送金", icon: "https://img.japanesecasino.com/svg/jp/payments/bank-transfer.svg" },
      // 暗号資産（代表例）
      { name: "BTC / ETH / USDT / USDC / EOS / LTC / DOGE / TRX" },
    ],
    notes: [
      "入金目安：クレカ/銀行/電子ウォレットは数分、暗号資産は数分〜数10分で反映。",
      "出金目安：電子ウォレットは即時〜数分（最大48時間）、暗号資産は即時〜数分。",
      "日/週/月の出金上限：$5,000 / $15,000 / $50,000相当（USDTは月間$1,000,000まで）。",
      "最低入金（例）：カード/銀行¥4,000、主要Eウォレット¥1,000。最低出金は手段により異なる。",
      "一部メジャーEウォレット（Payz等）は非対応。",
    ],
  },

  bonuses: {
    overview:
      "登録直後から“無料でもらえる”特典が充実。フォーセット（6時間ごと請求、VIPで短縮）やタスク報酬、ログインボーナス（1TXT）に加え、ジャパカジ限定の入金不要ボーナスも提供。",
    noDeposit:
      "【ジャパカジ限定】新規登録後5日間、毎日ログイン＆プレイで最大$25または25フリースピンを入金不要で進呈。さらに初回登録だけで100サトシ（0.000001BTC）を付与。フォーセットで暗号資産を6時間ごとに無料請求可（VIPで短縮）、SNSフォローやメール認証などのタスク報酬もあり。",
    extraSpins: {
      summary:
        "初回入金時に20回、2回目30回、3回目50回のフリースピン（合計100FS相当）。受取から7日以内に利用が必要。",
      schedule: [
        "初回入金ボーナスと同時に20FS付与",
        "2回目入金で30FS、3回目入金で50FS",
        "フリースピン利用期限は受取から7日",
      ],
      warning:
        "フリースピン勝利金やボーナスには原則60倍の賭け条件。プロモ規約の最新条件を必ず確認してください。",
    },
    welcomeRows: [
      { depositNumber: "1回目", percent: "100%", cap: "最大1BTC / $30,000", code: "" },
      { depositNumber: "2回目", percent: "75%", cap: "最大1BTC / $30,000", code: "" },
      { depositNumber: "3回目", percent: "50%", cap: "最大1BTC / $30,000", code: "" },
    ],
    conditions: [
      "ボーナス/フリースピンの有効期限は受取から7日。",
      "賭け条件はボーナス額の60倍（以前より厳格化）。",
      "入金不要/登録系ボーナスは配布条件（ログイン継続など）を満たす必要あり。",
    ],
    prohibitedGames: [],
  },

  offers: [
    {
      title: "キャッシュレース＆ダイス・トーナメント",
      description:
        "定期開催のキャッシュレースやサイコロトーナメントで賞金山分け。上位入賞を目指して挑戦。",
      highlight: "毎週の『カジノクラッシュトーナメント』では総額400 USDTを用意。",
    },
    {
      title: "スポーツ・フリーベット",
      description:
        "スポーツブックで最大$100、Eスポーツで最大$30の返金（フリーベット）特典を実施。",
    },
    {
      title: "紹介プログラム",
      description:
        "友人がフォーセット請求する度に50%コミッション獲得。コミュニティ連動で稼げる設計。",
    },
  ],

  facts: [
    { label: "名称", value: "Trustdice" },
    { label: "ローンチ", value: "2018" },
    {
      label: "ライセンス",
      value: "Antillephone（OGL/2024/664/0280｜2024年7月16日発行／Curaçao eGaming Authority）",
    },
    { label: "運営会社", value: "Satoshi Gaming Group N.V." },
    { label: "VIPプログラム", value: "✅（Shrimp to Satoshi／全13段階）" },
    {
      label: "対応通貨",
      value:
        "JPY, EUR, AUD, KRW, CAD, BRL など（USDは未対応）",
    },
    {
      label: "ゲームタイプ",
      value:
        "Baccarat, Blackjack, Game Shows, Live Casino, Poker, Roulette, Slots, Crash, Dice, Sportsbook, Esports",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://casinotsu.com/providers/bgaming">BGAMING</Link>,{" "}
          <Link href="https://casinotsu.com/providers/booming-games">Booming Games</Link>,{" "}
          <Link href="https://casinotsu.com/providers/endorphina">Endorphina</Link>,{" "}
          <Link href="https://casinotsu.com/providers/habanero">Habanero</Link>,{" "}
          <Link href="https://casinotsu.com/providers/nolimit-city">Nolimit City</Link>,{" "}
          <Link href="https://casinotsu.com/providers/playtech">Playtech</Link>,{" "}
          <Link href="https://casinotsu.com/providers/play-n-go">Play’n GO</Link>,{" "}
          <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>,{" "}
          <Link href="https://casinotsu.com/providers/relax-gaming">Relax</Link>,{" "}
          <Link href="https://casinotsu.com/providers/spinomenal">Spinomenal</Link>,{" "}
          <Link href="https://casinotsu.com/providers/thunderkick">Thunderkick</Link>{" "}
          ほか約40社
        </span>
      ),
    },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:info@trustdice.win">info@trustdice.win</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート（日本語は時間限定）" },
    { label: "スカイプサポート", value: "❌" },
  ],

  intro: {
    paragraphs: [
      "トラストダイス（Trust Dice）は2018年創業の仮想通貨対応オンラインカジノ。TXTトークンのマイニング＆ステーク配当で“遊びながら資産運用”という独自体験を実現しています。",
      "入金不要ボーナスやフォーセット、タスク報酬など“無料で試せる”導線が豊富。仮想通貨特化ながら法定通貨やクレジットカードにも対応し、カジノ/ライブ/スポーツまで遊べるハイブリッド構成です。",
      "一方で日本語サポートの時間帯が限定的、Payz等の未対応、USD非対応など注意点も。以下で要点を詳説します。",
    ],
    ctas: [
      {
        text: "👉 今すぐプレイ！",
        href: "https://go.japanesecasino.com/go/trustdice:trustdice?referrer_path=%2Freviews%2Ftrustdice",
      },
      { text: "🔰 賭け条件の基礎を学ぶ", href: "https://casinotsu.com/guides/wagering-requirements" },
    ],
  },

  games: [
    "スロットは約8,000種、ライブカジノは約540種、プロバイダーは約40社。カジノ/ライブ/スポーツベット/Esportsまで幅広く網羅。",
    "オリジナル（インハウス）ゲーム：Dice（2018/9）、Crash（2019/5）、Plinko（2025/4予定）。",
    "注記：総ゲーム数は“3,000超”という表記もあるが、スロット単体で“約8,000”という情報もあり、表示のタイミングや基準により差異がある可能性。",
  ],

  features: [
    "TXTトークンを“マイニング→配布→ステーク”して配当を得るエコシステム（スロット/クラッシュ/ダイスが対象、ライブ等は対象外）。",
    "チャットルームでボーナス配布、ランキング発表、当選速報、チップ交換などコミュニティ連動機能が充実。",
    "スポーツブックは約50種のスポーツ、Valorant/CS2/Dota2/LoL等のEスポーツにも対応。ライブベッティングは詳細スタッツ/グラフィック提供（配信は非対応）。",
    "モバイル（iOS/Android）ブラウザ最適化。専用アプリなしでも快適。",
  ],

  editorial: {
    author: "CasinoTsu編集部",
    profileHref: "/authors/rina-okabe",
    hook: "“遊ぶ×稼ぐ”の両立を狙えるトークン設計は唯一無二。条件の厳格化や未対応決済は事前に把握を。",
    theGoodStuff:
      "無料系特典（フォーセット/ログイン/タスク）やジャパカジ限定入金不要、最大3BTCウェルカムで序盤の軍資金を後押し。",
    theHeadsUp:
      "ボーナスの賭け条件は60倍＆7日。日本語サポートは時間限定、Payz未対応、USD非対応などの制約に注意。",
    finalThought:
      "仮想通貨フレンドリーでコミュニティ性の高い環境。条件と対応手段を理解した上で、TXTエコシステムも活用しながら計画的に楽しもう。",
  },

  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "トラストダイスは、一般的なオンラインカジノと異なり独自トークンTXTを軸に“プレイ→マイニング→配布→ステーク配当”という循環を備えています。対象ゲーム（スロット/クラッシュ/ダイス）での実プレイに応じてマイニングパワーが蓄積し、日本時間18時にTXTが配布。ステーク残高に応じて配当を受け取れる仕組みです。",
      "プロモーションは“無料でもらえる”導線が厚く、フォーセットはデフォルト6時間ごと（VIPで短縮）、ログインで1TXT、SNSフォロー等のタスク報酬、100サトシのサインアップ特典、さらにジャパカジ限定で5日間継続の入金不要$25/25FS。仮想通貨派に嬉しいエコシステムと言えるでしょう。",
      "ウェルカムは3回構成（100%/75%/50% 各最大1BTC/3万ドル相当＋合計100FS相当）。ただし有効期限7日・賭け条件60倍へと厳格化されています。フリースピンは受取から7日以内に消化が必要で、恩恵を最大化するには計画的なプレイが必須です。",
      "決済はカード/銀行/代表的Eウォレットに加えBTC・ETH・USDT等の主要チェーンを広くカバー。日本円対応で、電子ウォレット出金は即時〜数分（最長48h）。一方、Payz未対応やUSD非対応は明確な注意点です。",
      "日本語サポートは月〜木7:00–15:00、金土7:00–21:00（祝日等で変更の可能性あり）。時間外は翻訳ツールで日本語対応。電話はなく、ライブチャット/メールのみ。対応は丁寧で好印象でした。",
      "ライセンスはCuraçaoのAntillephone（OGL/2024/664/0280、2024/7/16発行）。運営はSatoshi Gaming Group N.V.。RNGの採用やスマートコントラクトの公開で透明性を担保し、SSL/TLSと2FAでアカウント/通信の保護が図られています。",
    ],
  },

  security: [
    "SSL/TLS暗号化で通信保護、2段階認証（2FA）に対応",
    "RNG採用でゲームの公平性を担保",
    "スマートコントラクトが閲覧可能で透明性を確保",
    "プライバシーポリシーに基づく個人情報保護",
  ],

  responsiblePlay: [
    "入金制限ツール",
    "ベット制限ツール",
    "損失制限ツール",
    "時間/セッション制限ツール",
    "クールダウン/タイムアウトツール",
    "リアリティチェックツール",
    "自己評価テスト",
    "自己規制（一定期間アカウント閉鎖）",
    "外部支援団体リンクの提供",
  ],

  complaintStats: [
    "ネガティブレビューの99%に48時間以内で返信",
    "Trustpilot: 4.3/5（4,524件）",
    "AskGamblers: CasinoRank 8.5/10、プレイヤー評価 8.9/10（477件）",
  ],

  awards: [
    "コミュニティ活性化（チャットルーム/Discord）で話題性が高いプラットフォーム",
  ],

  restrictedCountries: [
    "アルバ",
    "ボネール",
    "シント・ユースタティウスおよびサバ",
    "キュラソー",
    "シント・マールテン（フランス領）など",
    "米国（技術的制限あり・VPN推奨とされる記載）",
    "英国（ゲームの利用可能性に制限あり）",
  ],

  userConcerns: [
    "Payzなど一部メジャー電子決済が未対応",
    "USD非対応",
    "日本語ライブチャットの対応時間が限定的",
    "通貨/地域により一部プロバイダーやゲームが利用不可の場合あり",
  ],

  summary: [
    "TXTエコシステムと無料特典が豊富で、仮想通貨派・コミュニティ志向のプレイヤーに適した設計。",
    "ボーナス条件は厳格化（60倍/7日）。受取スケジュールと上限を理解して計画的に消化するのがコツ。",
    "決済は広範だがPayz未対応・USD非対応は明確な注意点。日本円/Eウォレット/暗号資産では快適。",
    "まずは入金不要やフォーセットで手触りを確認し、合うと感じたらウェルカムとTXTステークを活用。",
  ],

  extraLinks: [
    { text: "🎰 トラストダイス公式レビュー元ページ", href: "https://www.japanesecasino.com/reviews/trustdice" },
    { text: "💳 決済方法の詳説", href: "https://casinotsu.com/payment" },
    { text: "🪙 仮想通貨で遊べるカジノ特集", href: "https://casinotsu.com/crypto" },
    { text: "🔰 入金不要ボーナスまとめ", href: "https://casinotsu.com/bonuses/no-deposit" },
    { text: "💡 カジノライセンスの信頼性", href: "https://casinotsu.com/info/casino-license" },
    { text: "🧊 責任あるゲームプレイ", href: "https://casinotsu.com/info/responsible-gambling" },
  ],

  faq: [
    {
      question: "VIPのレベルはどれくらい？",
      answer: "「Shrimp to Satoshi」プログラムは貝殻からサトシVまで全13段階（通常8＋Satoshi5）。",
    },
    {
      question: "TXTはどうやって貯まる？",
      answer:
        "スロット・クラッシュ・ダイスを実プレイするとマイニングパワーが貯まり、毎日18時にTXTが配布。ログインボーナスやフォーセット、タスク報酬でも獲得可。ライブは対象外。",
    },
    {
      question: "KYC（本人確認）は必要？",
      answer:
        "通常は任意。高額出金時など必要に応じてサポートから連絡。身分証・住所証明の提出が求められる場合があります。",
    },
    {
      question: "日本語サポートはある？",
      answer:
        "あります。月〜木7:00–15:00、金土7:00–21:00（JST）。時間外は外国人オペレーターが自動翻訳で日本語対応。",
    },
  ],

  cta: {
    text: "今すぐボーナスをチェックしてプレイ！",
    href: "https://go.japanesecasino.com/go/trustdice:trustdice?referrer_path=%2Freviews%2Ftrustdice",
  },
};