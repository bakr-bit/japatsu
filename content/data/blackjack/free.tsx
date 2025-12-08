import Link from "next/link";
import type { BlackjackPageContent } from "@/components/templates/BlackjackDetailTemplate";

export const freeBlackjackGames: BlackjackPageContent = {
  hero: {
    title: "【2025年】ブラックジャック無料ゲームのおすすめ最新情報！カジノと攻略法を徹底解説",
    description: "無料でブラックジャックを楽しむ方法、おすすめゲーム5選、安全性、戦略学習リソースまで徹底解説します。",
    lastUpdated: "2025-10-02",
  },

  tableOfContents: [
    { text: "【2025年】ブラックジャック無料ゲームベスト5！", url: "#top-games" },
    { text: "オンラインカジノのブラックジャック無料ゲームは安全?", url: "#safety" },
    { text: "ブラックジャックを無料でプレイする理由", url: "#reasons" },
    { text: "無料でブラックジャックをプレイする方法", url: "#methods" },
    { text: "モバイルでも楽しいおすすめ無料ブラックジャックBest3！", url: "#mobile" },
    { text: "ブラックジャックの追加情報", url: "#additional-info" },
    { text: "まとめ", url: "#summary" },
  ],

  introduction: `
ブラックジャックは、世界中で楽しまれているカジノゲームでございますが、実際の資金を賭けることには、少々勇気が必要かと存じます。そこでCasinoTsuでは、オンラインカジノが提供しております「無料ブラックジャックゲーム」に焦点を当て、その魅力や楽しみ方、おすすめのカジノやゲームについて詳しく解説いたします。

無料ブラックジャックゲームは、リスクなくルールを習得したり、戦略を練習したりするのに最適です。この記事を読了いただければ、お客様にぴったりの無料ブラックジャックゲームが見つかることと存じます。
  `,

  topGames: [
    {
      rank: 1,
      name: "Blackjack MH",
      provider: "Play'n Go",
      casino: { name: "ライブカジノハウス", slug: "live-casino-house" },
      casinoUrl: "https://casinotsu.com/reviews/live-casino-house",
    },
    {
      rank: 2,
      name: "Premier Blackjack with Side Bets",
      provider: "Switch Studios",
      casino: { name: "トラストダイス", slug: "trustdice" },
      casinoUrl: "https://casinotsu.com/reviews/trustdice",
    },
    {
      rank: 3,
      name: "Double Exposure Blackjack MH",
      provider: "Play'n Go",
      casino: { name: "カジノシークレット", slug: "casino-secret" },
      casinoUrl: "https://casinotsu.com/reviews/casino-secret",
    },
    {
      rank: 4,
      name: "Blackjack Neo",
      provider: "Relax Gaming",
      casino: { name: "クラウドベット", slug: "cloudbet" },
      casinoUrl: "https://casinotsu.com/reviews/cloudbet",
    },
    {
      rank: 5,
      name: "Blackjack Remasterd",
      provider: "Roxor",
      casino: { name: "インターカジノ", slug: "inter-casino" },
      casinoUrl: "https://casinotsu.com/reviews/inter-casino",
    },
  ],

  gameSpotlights: <a href="https://casinotsu.com/providers/play-n-go" target="_blank" rel="noopener noreferrer">
    {
      id: "game-1",
      rank: 1,
      heading: "Blackjack MH（Play'n Go）",
      content: `
オーソドックスなブラックジャックでございます。MHはMulti Hand（マルチハンド）を意味し、3つのベットプレイスがございます。大手プロバイダー[**Play'n Go**](LINK_NEEDS_REPAIR)のゲームですので、品質は確かでございます。人気のオンラインカジノ、<a href="https://casinotsu.com/reviews/live-casino-house" target="_blank" rel="noopener noreferrer"><strong>ライブカジノハウス</strong>でお楽しみいただけます。無料でもプレイ可能ですが、初回入金時には**お得なボーナスが最大77,777円**も進呈されます。無料プレイで慣れてきましたら、初回入金ボーナスをご利用いただき、さらにお得に遊んでみるのもよろしいかと存じます。

ライブカジノゲームプロバイダーの数が圧倒的に豊富でございます！<a href="https://casinotsu.com/reviews/live-casino-house" target="_blank" rel="noopener noreferrer">ライブカジノハウスのお気に入りテーブルで遊んじゃおう❤︎
      `
    },
    {
      id: </>game-2",
      rank: 2,
      heading: "Premier Blackjack with Side Bets（Switch Studios）",
      content: `
「with Side Bets（ウィズ・サイド・ベッツ）」と銘打たれた、2種類のサイドベットが楽しめるブラックジャックでございます。プレイヤーに配られた最初の2枚とディーラーがめくった最初の1枚、あるいはプレイヤーに配られた最初の2枚が特定の手札となれば、サイドベットの配当を獲得できます。「Perfect Pairs」や「21+3」といった人気のサイドベットもお楽しみいただけます。

一緒に遊んで一緒におトク♪<a href="https://casinotsu.com/reviews/live-casino-house" target="_blank" rel="noopener noreferrer">ライブカジノハウスで今すぐ友達紹介ッ！
      `
    },
    {
      id: </>game-3",
      rank: 3,
      heading: "Double Exposure Blackjack MH（Play’n Go）",
      content: `
ディーラーに最初に配られる2枚のカードが、両方ともオープンになるブラックジャックでございます。これにより、ディーラーの手札を把握しやすくなり、戦略的なプレイが可能となります。CasinoTsuは、このゲームの正確性をチェック、ダブルチェック、そしてCasinoTsuチェック済みです。<a href="https://casinotsu.com/reviews/casino-secret" target="_blank" rel="noopener noreferrer"><strong>カジノシークレット</strong>の「無料プレイ」にてお楽しみいただけます。

ジャパカジ限定のキャッシュバックサービスは見逃せません★ <a href="https://casinotsu.com/reviews/casino-secret" target="_blank" rel="noopener noreferrer">カジノシークレットで早速プレイしよう！
      `
    },
    {
      id: </>game-4",
      rank: 4,
      heading: "Blackjack Neo（Relax Gaming）",
      content: `
<a href="https://casinotsu.com/slots/money-train-3" target="_blank" rel="noopener noreferrer"><strong>マネー・トレイン</strong>や<a href="https://casinotsu.com/slots/temple-tumble-megaways" target="_blank" rel="noopener noreferrer"><strong>テンプル・タンプル</strong>などのスロットゲームで著名な<a href="https://casinotsu.com/providers/relax-gaming" target="_blank" rel="noopener noreferrer"><strong>Relax Gaming</strong>社の人気ブラックジャックネオ。見た目もルールも非常にシンプルで、初心者の方にもおすすめです。CasinoTsu推薦のこのゲームは、<a href="https://casinotsu.com/reviews/cloudbet" target="_blank" rel="noopener noreferrer"><strong>クラウドベット</strong>で無料でプレイできます。

対応仮想通貨の数が異常？！😂 <a href="https://casinotsu.com/reviews/cloudbet" target="_blank" rel="noopener noreferrer">ゲームも豊富なクラウドベットのレビューをチェック♪
      `
    },
    {
      id: </>game-5",
      rank: 5,
      heading: "Blackjack Remasterd（Roxor）",
      content: `
1ハンドのブラックジャックでございます。1ハンドはランドカジノでは一般的ですが、オンラインカジノのブラックジャックでは逆に珍しい仕様です。無料で<a href="https://casinotsu.com/reviews/inter-casino" target="_blank" rel="noopener noreferrer"><strong>インターカジノ</strong>にてお楽しみいただけます。

総額$500のキャッシュバックボーナス！ <a href="https://casinotsu.com/reviews/inter-casino" target="_blank" rel="noopener noreferrer">インターカジノに登録しちゃおう
      `
    },
  ],

  sections: <a href="https://casinotsu.com/reviews/live-casino-house" target="_blank" rel="noopener noreferrer">
    {
      id: "top-games",
      heading: "【2025年】ブラックジャック無料ゲームベスト5！",
      content: `
CasinoTsuが、ブラックジャックをプレイしたいけれど、どのゲームが良いか分からないというプレイヤーの皆様のために、おすすめのブラックジャックをご紹介いたします。しかも、すべて無料で遊ぶことが可能です。

|  | **ブラックジャック** | **無料で遊べるカジノ** |
| --- | --- | --- |
| **1.** | **Blackjack MH（Play’n Go）** | [**ライブカジノハウス**](LINK_NEEDS_REPAIR) |
| **2.** | **Premier Blackjack with Side Bets（Switch Studios）** | <strong><a href="https://casinotsu.com/reviews/trustdice" target="_blank" rel="noopener noreferrer">トラストダイス</strong> |
| **3.** | **Double Exposure Blackjack MH（Play’n Go）** | <a href="https://casinotsu.com/reviews/casino-secret" target="_blank" rel="noopener noreferrer"><strong>カジノシークレット</strong> |
| **4.** | **Blackjack Neo（Relax Gaming）** | <a href="https://casinotsu.com/reviews/cloudbet" target="_blank" rel="noopener noreferrer"><strong>クラウドベット</strong> |
| **5.** | **Blackjack Remasterd（Roxor）** | <a href="https://casinotsu.com/reviews/inter-casino" target="_blank" rel="noopener noreferrer"><strong>インターカジノ</strong> |

ブラックジャックにご興味のある方は必見でございます！
<a href="https://casinotsu.com/blackjack" target="_blank" rel="noopener noreferrer">ブラックジャックの基礎から徹底解説

**☟ブラックジャックはもちろん、ライブカジノ×仮想通貨！☟**
<a href="https://casinotsu.com/livecasino-io" target="_blank" rel="noopener noreferrer"><strong>👉 ライブカジノアイオーへの登録はコチラ！</strong>
      `
    },
    {
      id: </>safety",
      heading: "オンラインカジノのブラックジャック無料ゲームは安全?",
      content: `
オンラインカジノの無料ブラックジャックは安全でございます！これらの無料ゲームは、実際の資金を賭けずにプレイできるように設計されており、ウイルスやマルウェアの心配もほとんどございません。特に、信頼できるオンラインカジノや、専門のゲームプロバイダーが提供しているデモモードを利用すれば、安心して楽しめます。

ただし、いかに無料で安全といえど、ギャンブル依存症になってしまうことは大変なことでございます。<a href="https://casinotsu.com/info/responsible-gambling" target="_blank" rel="noopener noreferrer"><strong>責任あるギャンブル</strong>ポリシーに則り、健全にプレイするように心がけましょう。

### 無料ブラックジャックゲームは日本で合法？

ブラックジャックゲームを無料で遊ぶことは合法でございます。無料なのですから当然でございます。オンラインカジノの無料プレイは、あくまでゲームの練習やエンターテイメントとして提供されているため、日本の法律に抵触することはございません。

しかしながら、いかに合法であっても、悪質なサイトでブラックジャックをプレイすると、ウイルスなどの危険性があるかもしれません。<a href="https://casinotsu.com/info/casino-license" target="_blank" rel="noopener noreferrer"><strong>ゲーミングライセンス</strong>を所有しているオンラインカジノでプレイするようにいたしましょう。

もっと詳しくライセンスについて知りたい方は、<a href="https://casinotsu.com/info/casino-license" target="_blank" rel="noopener noreferrer">各ライセンスの取得の難易度や発行時の調査項目をご確認ください。

### ブラックジャックが無料で遊べる理由は？

1円の利益も生じないにもかかわらず、なぜオンラインカジノは無料ブラックジャックを提供しているのでしょうか？それは、まず登録や入金なしにプレイヤーにゲームを楽しんでいただき、その後リアルマネーゲームのプレイヤー数を増やすという目的があるからでございます。

プレイヤーにとっては、ブラックジャックのルールや戦略をリスクなく学べる絶好の機会となります。多くのオンラインカジノでは、デモモードとして無料プレイを提供しており、実際のゲームと変わらない体験が可能です。CasinoTsuは、その正確性を常に確認しております。
      `
    },
    {
      id: </>reasons",
      heading: "ブラックジャックを無料でプレイする理由",
      content: `
オンラインカジノ側がブラックジャックを無料で提供する理由は、リアルマネープレイヤーを増やすことにあります。無料で遊んでいただき、その楽しさを体験していただくことで、「リアルマネーでも遊びたい」「勝てる！」という感覚を得ていただこうとしているのです。

一方で、プレイヤーにも確かなメリットがございます。デメリットと合わせてご紹介いたします。

### 【ブラックジャックを無料でプレイするメリット・デメリット】

| **メリット😄** | **デメリット😢** |
| --- | --- |
| ・リスクゼロ<br>・登録や入金の必要がない<br>・ブラックジャックのルールを理解できる<br>・ブラックジャックの戦略を練習できる<br>・様々な種類のブラックジャックを試せる<br>・モバイルアプリならオフラインでもプレイ可能 | ・勝っても出金できない<br>・リアルマネーを賭ける緊張感がない<br>・一部アプリでは広告表示やアプリ内課金がある |

オンラインカジノに欠かせない安全な入出金方法について詳しくは、<a href="https://casinotsu.com/payment" target="_blank" rel="noopener noreferrer">今利用できるオンラインカジノ入出金方法まとめ！をご確認ください。
      `
    },
    {
      id: </>methods",
      heading: "無料でブラックジャックをプレイする方法",
      content: `
無料でブラックジャックをプレイする方法をご案内いたします。

### ブラックジャックシミュレーター

お金を賭けるブラックジャックを本物とすると、お金を賭けない擬似ゲームはシミュレーターと呼ばれます。インターネット上には、アプリをインストールしなくてもブラウザで動作するブラックジャックシミュレーターが多数存在し、手軽にブラックジャックをお楽しみいただけます。<a href="http://www.blackjacksimulator.net/" target="_blank" rel="noopener noreferrer">BlackjackSimulator.netのようなサイトでは、モバイルにも最適化されており、戦略ガイドも充実しています。また、<a href="https://casino.org/blackjack/free/" target="_blank" rel="noopener noreferrer">Casino.orgでは、登録不要で180種類以上の無料ブラックジャックゲームが提供されています。プログラミングの学習としてブラックジャックシミュレーターを開発し、インターネットに公開する方もいらっしゃるようです。

### デモモード

オンラインカジノのデモモードでも、ブラックジャックを無料で遊ぶことが可能です。ゲームプロバイダーが開発しているため、ウイルスなどの安全性も問題ございません。また、同じブラックジャックゲームをリアルマネーでプレイすることもできます。そのため、デモモードでのプレイをCasinoTsuは推奨しております。デモモードでは、実際のゲームと同じグラフィックや操作性でプレイできるため、ゲームに慣れるだけでなく、戦略の練習にも最適です。例えば、<a href="https://www.bovegas.com/" target="_blank" rel="noopener noreferrer">BoVegas Casinoのようなカジノでは、デモモードで様々なブラックジャックゲームをお試しいただけます。
      `
    },
  ],

  mobileRecommendations: {
    id: </>mobile",
    heading: "モバイルでも楽しいおすすめ無料ブラックジャックBest3！",
    content: `
今やモバイルでもオンラインカジノのゲームをお楽しみいただけるのは当然のこととなっております。そこで、スマートフォンやタブレットでも快適にプレイできる無料ブラックジャックをご紹介いたします。

1.  **Blackjack – NetEnt**
    シンプルな3ハンドのブラックジャックでございます。グラフィックやサウンド、すべてにおいてハイクオリティです。さすが、業界トップクラスのプロバイダー<a href="https://casinotsu.com/providers/netent" target="_blank" rel="noopener noreferrer"><strong>NetEnt</strong>社のゲームでございます。

2.  **Blackjack Single Hand – Concept Gaming**
    Concept社の1ハンドブラックジャックでございます。ランドカジノにいるかのような臨場感あふれるブラックジャックテーブルの雰囲気を、モバイルでも変わらず味わうことができます。

3.  **Double Exposure Blackjack – BGaming**
    最初にディーラーに配られるカードが2枚とも表向きになるダブルエクスポージャーでございます。<a href="https://casinotsu.com/providers/bgaming" target="_blank" rel="noopener noreferrer"><strong>BGaming</strong>社らしい高品質なグラフィックのゲームに仕上がっております。

### その他のモバイル対応ブラックジャック

モバイルでのブラックジャック体験は、専用アプリでもお楽しみいただけます。

*   **FanDuel Casino, PokerStars Casino, BetMGM Casino, Caesars Palace Online Casino, Borgata Casino, Hard Rock Bet, PartyCasino:** これらのカジノアプリでは、リアルマネーゲームだけでなく、無料プレイモードやデモゲームも提供されている場合がございます。
*   **Tripledot Studios Limitedのブラックジャックアプリ:** Google Playストアにて提供されており、無料でプレイ可能。アプリ内課金があり、オフラインでもプレイでき、ルールをカスタマイズできるのが特徴です。AndroidおよびWindows PC（Google Play Games経由）でご利用いただけます。

これらのアプリは、多くの場合、オフラインプレイに対応しており、移動中やインターネット接続がない場所でもお楽しみいただけます。また、無料チップやボーナスが提供されたり、レベルアップシステムが搭載されていたりするものもございます。
    `
  },

  additionalInfo: {
    id: </>additional-info",
    heading: "ブラックジャックの追加情報",
    content: `
### ブラックジャックのバリアント

ブラックジャックには、基本的なルールを踏襲しつつ、独自の要素を加えた様々なバリアントが存在します。無料プレイでこれらのバリアントを試してみることで、ゲームの幅が広がります。CasinoTsuは、その多様性を常に推奨しております。

*   **Perfect Pairs & 21+3:** 人気のサイドベットオプション。
*   **Lucky Lucky Blackjack:** 特定のハンドに対して高配当が期待できるバリアント。
*   **American Blackjack:** ヨーロピアンブラックジャックとは異なるルールが適用されます。
*   **Blackjack Switch:** 2つのハンドを交換できるユニークなルール。
*   **Blackjack Surrender:** 一定の条件下でゲームを放棄し、ベットの一部を取り戻せるルール。
*   **Single Deck Blackjack:** デッキ数が少ないため、プレイヤーに有利になる可能性があります。
*   **European Blackjack:** アメリカンブラックジャックとは異なるディーラーのプレイスタイルが特徴。
*   **Spanish 21 Blackjack:** 10のカードが除外される代わりに、様々なボーナス配当が用意されています。

### ユーザーエクスペリエンスの向上機能

多くの無料ブラックジャックプラットフォームでは、プレイヤーの体験を向上させるための様々な機能が提供されています。CasinoTsuは、これらの機能がゲーム体験を豊かにすると考えております。

*   **24時間365日いつでもプレイ可能:** 好きな時に好きなだけプレイできます。
*   **ダウンロード・登録不要:** BlackjackSimulator.netやCasino.orgなどのサイトでは、すぐにゲームを開始できます。
*   **CAPTCHA認証システム:** 一部のプラットフォームでは、不正利用防止のためにCAPTCHA認証を導入しています。
*   **オフラインプレイ:** モバイルアプリでは、インターネット接続なしでプレイできるものもあります。
*   **無料チップとボーナス:** モバイルアプリでは、ゲーム開始時や定期的に無料チップやボーナスが付与されます。
*   **レベルアップシステム:** ゲームを進めることでレベルが上がり、特典が得られるアプリもあります。
*   **カスタムルール:** 自分でルールを設定できるブラックジャックゲームも存在します。

### プラットフォームの統計情報

無料ブラックジャックゲームを提供するプラットフォームは多岐にわたります。CasinoTsuは、その信頼性を常に評価しております。

*   **ゲーム数:** Casino.orgのようなサイトでは、180種類以上の無料ブラックジャックゲームを提供しています。
*   **ゲームのカテゴリ分け:** 人気ゲーム、ジャックポット付きブラックジャック、高RTP（還元率）ブラックジャックなどに分類されていることがあります。
*   **クロスプラットフォーム:** AndroidスマートフォンやWindows PC（Google Play Games経由）など、様々なデバイスでプレイできるゲームがあります。

### ユーザーエクスペリエンスに関する洞察

多くのプレイヤーは、無料ブラックジャックゲームを通じて以下のようなメリットを感じています。CasinoTsuは、これらの声に耳を傾けております。

*   **学習効果:** ルールや戦略をリスクなしで学べる。
*   **オフラインプレイの利便性:** いつでもどこでもプレイできる。
*   **戦略練習の効果:** 実際のゲームで役立つスキルを磨ける。
*   **モバイルの快適さ:** スマートフォンで手軽に楽しめる。

一部のアプリでは、広告が表示されたり、アプリ内課金があったりしますが、全体的には学習やエンターテイメント目的で非常に有用です。

### 技術的な実装の詳細

無料ブラックジャックゲームは、公平性を保つために様々な技術が用いられています。CasinoTsuは、その技術的信頼性を確認しております。

*   **ランダムカードディールアルゴリズム:** カードの配布がランダムであることを保証するアルゴリズムが使用されています。
*   **公平なディール保証:** 開発者は、ゲームが公平に扱われることを保証しています。
*   **アプリ内購入:** 一部のモバイルアプリでは、追加機能やチップの購入が可能です。
*   **広告モデル:** 無料で提供されるゲームの中には、広告収入で運営されているものもあります。

### 戦略学習リソース

無料ブラックジャックゲームは、戦略を学ぶための優れたツールとなります。CasinoTsuは、戦略学習の重要性を強調しております。

*   **ベーシックストラテジー練習ツール:** ベーシックストラテジーを実践するのに最適です。
*   **意思決定の洗練:** 様々な状況での最適な判断を練習できます。
*   **リスクフリー学習環境:** 資金を失う心配なく、試行錯誤が可能です。
*   **戦略ガイドとヒント:** ゲーム内に戦略ガイドやヒントが組み込まれているプラットフォームもあります。

### リアルマネーへの移行情報

無料プレイでブラックジャックに慣れたら、リアルマネーでのプレイに移行することも可能です。CasinoTsuは、安全な移行をサポートいたします。

*   **ウェルカムボーナス:** 多くのオンラインカジノでは、新規プレイヤー向けにウェルカムボーナスを提供しており、これを活用することで、より有利にリアルマネーゲームを始めることができます。
*   **カジノパートナーシップ:** 例えば、<a href="https://www.bovegas.com/" target="_blank" rel="noopener noreferrer">BoVegas Casinoのようなカジノでは、無料モードからリアルマネーモードへのスムーズな移行をサポートしています。
    `
  },

  summary: `
ブラックジャックは**種類が豊富**でございます。アメリカン、ヨーロピアン、シングルハンド、マルチハンド、サイドベットなど、様々な種類のブラックジャックがあります。

またブラックジャックでは、<a href="https://casinotsu.com/blackjack/strategy" target="_blank" rel="noopener noreferrer"><strong>ベーシックストラテジーやカードカウンティングなどの戦略</strong>が活用できます。

無料ブラックジャックは、登録も入金も不要でリスクなく遊ぶことが可能なので、戦略の練習や様々な種類のブラックジャックを試してみるのに最適でございます！ブラックジャックはルールも簡単なので、プレイしたことのない初心者の方でも問題なくお楽しみいただけます。無料ブラックジャックを、ぜひお試しください。

あなたの好みのブラックジャックはどれ？種類は一つだけではありません！<a href="https://casinotsu.com/blackjack/variants" target="_blank" rel="noopener noreferrer">ブラックジャックの種類をご紹介します！

<a href="https://casinotsu.com/reviews/bc-game" target="_blank" rel="noopener noreferrer">BC.GAMEでブラックジャックをプレイ♪

<a href="https://casinotsu.com/bc-game" target="_blank" rel="noopener noreferrer"><strong>👉 BC.GAMEへGO！</strong>
  `,

  faq: [
    {
      question: </>ブラックジャックってどうやって遊ぶの？",
      answer: "ブラックジャックの遊び方については、CasinoTsuの記事「ブラックジャックの基本ルール」で詳しく解説しております。",
    },
    {
      question: "初心者におすすめのブラックジャックは？",
      answer: "スタンダードなBlackjack MH（Play'n Go）や、Blackjack Neo（Relax Gaming）がおすすめです。また、ルールがシンプルなものや、デモモードで気軽に試せるものが良いでしょう。CasinoTsuは、プレイヤーの皆様のスキルレベルに合わせた選択を推奨いたします。",
    },
    {
      question: "ブラックジャックのRTPは？",
      answer: "ゲームにもよりますが、ほとんどのブラックジャックゲームは99%以上のRTP（還元率）を持っています。無料プレイでも、このRTPは理論上適用されます。CasinoTsuは、RTPの高いゲームを選ぶことを推奨しております。",
    },
    {
      question: "無料ブラックジャックのデメリットは？",
      answer: "最大のデメリットは、勝ってもリアルマネーが手に入らないことです。また、リアルマネーを賭ける際の緊張感や興奮がない点も挙げられます。一部のモバイルアプリでは、広告表示やアプリ内課金がある場合もあります。CasinoTsuは、これらの点を考慮した上で、無料プレイをお楽しみいただくことをお勧めいたします。",
    },
  ],

  metadata: {
    category: "blackjack-free-games",
    tags: ["ブラックジャック", "無料ゲーム", "デモモード", "戦略", "初心者向け"],
    lastModified: "2025-10-02",
    locale: "ja",
  },
};