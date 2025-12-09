import Link from "next/link";
import type { GuidePageContent } from "@/components/templates/GuideDetailTemplate";

export const casinoEnglishVocabulary: GuidePageContent = {
  hero: {
    title: "カジノで使える英語の専門用語＆フレーズ集",
    description: "英語に苦手意識があっても大丈夫！このガイドでは、ライブカジノやランドカジノのテーブルゲームで今すぐ使える基本的な専門用語や便利なフレーズを詳しく解説します。自信を持ってゲームを楽しみましょう！",
    featureImage: "https://casinotsu.com/images/learn-terminology.png",
    lastUpdated: "2025-10-02",
  },

  tableOfContents: [
    { text: "テーブルゲーム全般", url: "#table-games-general" },
    { text: "各テーブルゲームで使える用語", url: "#specific-game-terms" },
    { text: "ルーレット", url: "#roulette" },
    { text: "バカラ", url: "#baccarat" },
    { text: "ブラックジャック", url: "#blackjack" },
    { text: "ポーカー", url: "#poker" },
    { text: "クラップス", url: "#craps" },
    { text: "まとめ", url: "#summary" },
    { text: "よくある質問", url: "#faq" },
  ],

  featuredCasinos: [
    {
      name: "Vera&John",
      slug: "vera-john",
      description: "オンカジといえば、やっぱりベラジョン！",
      rating: 4.5,
      imageUrl: "https://casinotsu.com/images/VeraJohn_375x375-1.png",
      cta: {
        text: "今すぐプレイ！",
        href: "https://go.casinotsu.com/go/vera-john:vera-john?referrer_path=%2Fguides%2Fcasino-english-vocabulary",
      },
      reviewHref: "https://casinotsu.com/reviews/vera-john",
    },
    {
      name: "Wonder Casino",
      slug: "wonder-casino",
      description: "業界最速の出金スピードと仮想通貨特化ボーナス！",
      rating: 4.5,
      imageUrl: "https://casinotsu.com/images/wonder-casino_375x375.png",
      cta: {
        text: "今すぐプレイ！",
        href: "https://go.casinotsu.com/go/wonder-casino:wonder-casino?referrer_path=%2Fguides%2Fcasino-english-vocabulary",
      },
      reviewHref: "https://casinotsu.com/reviews/wonder-casino",
    },
    {
      name: "Konibet",
      slug: "konibet",
      description: "パチンコ・パチスロが遊べるオンラインカジノ！",
      rating: 4.5,
      imageUrl: "https://casinotsu.com/images/konibet_375x375.png",
      cta: {
        text: "今すぐプレイ！",
        href: "https://go.casinotsu.com/go/konibet:konibet?referrer_path=%2Fguides%2Fcasino-english-vocabulary",
      },
      reviewHref: "https://casinotsu.com/reviews/konibet",
    },
    {
      name: "Winz",
      slug: "winz-io",
      description: "ウェルカムオファーやボーナスに賭け条件なし♪",
      rating: 4.5,
      imageUrl: "https://casinotsu.com/images/casino/winz.jpg",
      cta: {
        text: "今すぐプレイ！",
        href: "https://go.casinotsu.com/go/winz:winz-io?referrer_path=%2Fguides%2Fcasino-english-vocabulary",
      },
      reviewHref: "https://casinotsu.com/reviews/winz-io",
    },
  ],

  introduction: `
CasinoTsu は、カジノゲームをより深く楽しむために役立つ、カジノ英語とフレーズをご紹介します。✨

## 知ってるだけ自信がつく！ゲームプレイに今すぐ使えるカジノ英語を知ろう！


!<a href="https://casinotsu.com/images/learn-terminology.png" target="_blank" rel="noopener noreferrer">カジノ専門用語


英語に苦手意識があっても、 **カジノゲームには専門用語が沢山** あります。

英語を母国語とする方でも、カジノ用語を知らないと最初は戸惑うことがあります。😅

実は、CasinoTsuも慣れない英語でゲームに参加する際は緊張しましたが、周囲を見渡すと **英語を母国語としないプレイヤーもたくさん** いました。そのため、英語に自信がない私たちでも **安心してプレイできる** のです。😎👍

なぜなら、 **実際のゲーム中にディーラーと頻繁に会話することはありません**。

とはいえ、 **ゲームで使われる用語** や **よく使うフレーズ** を理解できれば、ゲームプレイがよりスムーズに、そして楽しく進むことは間違いありません。(๑•̀ㅂ•́)و✧

**カジノ用語を理解するメリット** は、ゲームを円滑に進めるだけでなく、ディーラーや他のプレイヤーとのコミュニケーションを円滑にし、より没入感のある体験を可能にすることです。また、オンラインカジノとランドカジノでは、使われる用語や雰囲気が異なる場合があるため、両方を理解しておくと、どのような環境でも自信を持ってプレイできるようになります。

そこで、 **「知っておくと役に立つカジノ英語用語＆フレーズ」** をCasinoTsuがご紹介しますよ～✨

⇓ CasinoTsu 推薦：<a href="https://casinotsu.com/reviews/wonder-casino" target="_blank" rel="noopener noreferrer">ワンダーカジノ のライブカジノでリアルな雰囲気を楽しもう♪⇓

<a href="https://go.casinotsu.com/go/wonder-casino" target="_blank" rel="noopener noreferrer"><strong>👉 ワンダーカジノはコチラ！</strong>

**⭐️オンラインカジノの醍醐味の一つはライブカジノ！**

海の向こうのディーラーと <a href="https://casinotsu.com/live-casino" target="_blank" rel="noopener noreferrer">ライブカジノゲーム をリアルタイムでプレイできます。
  `,

  sections: <a href="https://casinotsu.com/reviews/parimatch" target="_blank" rel="noopener noreferrer">
    {
      id: "table-games-general",
      heading: "テーブルゲームで使えるカジノ英語＆フレーズ",
      content: `
まず、全ての **テーブルゲーム** で **ディーラーが必ず発するフレーズ** があります😊

テーブルゲームをプレイされたことがある方なら、「ああ、あれね！」と思い当たるかもしれません。

そのようなカジノ用語の一部をご紹介します👇

### 【 基本のカジノ英語 – テーブルゲーム全般編】

| カジノ英語／カナ読み | 意味 |
| --- | --- |
| **Croupier**<br>**クルピエー** | ディーラーのこと（特にヨーロッパではディーラーをクルピエーと呼ぶカジノもあります） |
| **Cashier**<br>**キャシアー** | キャッシャー、レジ係、勘定係のこと |
| **Pit boss**<br>**ピット ボス** | カジノの各エリアを管理するマネージャーのこと |
| **Deal**<br>**ディール** | カードを配ること |
| **Shuffle time**<br>**シャッフル タイム** | カードを混ぜる時です |
| **Place your bets please**<br>**プレイス ユァ ベット プリーズ** | ベットを置いてください |
| **No more bets, thank you**<br>**ノー モァ ベット, サンキュー** | もうベットを置かないでください |
| **Final bets**<br>**ファイナル ベッツ** | 最後のベットをしてください |
| **That’s below the table minimum**<br>**ザッツ ビロゥ ザ テーブル ミニマム** | それは最低ベット額に達していません |
| **That’s over the table maximum**<br>**ザッツ オーヴァー ザ テーブル マキシマム** | それは最高ベット額を超えています |
| **No pictures, please**<br>**ノー ピクチャーズ プリーズ** | 写真撮影禁止です（カジノ内では写真撮影が禁止されています） |
| **Is This Table Open?**<br>**イズ ディス テーブル オープン？** | このテーブルでプレイできますか？ |
| **Hold on, can I reconfirm my (your) cards please?**<br>**ホールドン、キャナイ リコンファーム マイ(ユァ）カーズ プリーズ？** | ちょっと待ってください、私の（あなたの）カードを再確認できますか？（今のゲームに疑問がある、または確認したい場合） |
| **You gave me the wrong chips**<br>**ユー ゲイヴ ミー ザ ロング チップス** | チップの数が間違っています（間違った数のチップを受け取った場合など） |
| **Bankroll (バンクロール)** | ギャンブルのために用意した資金のこと。失ってもよいと思える範囲の金額でプレイすることが推奨されます。 |
| **House Edge (ハウスエッジ)** | カジノが統計的に持つ有利性のこと。パーセンテージで表されます。 |
| **Action (アクション)** | プレイされた総額、またはプレイヤーの行動番のこと。 |
| **Payout/Payoff (ペイアウト)** | 勝った際にプレイヤーが受け取る賞金の額。 |
| **Jackpot (ジャックポット)** | 固定またはプログレッシブ（増加型）の最高賞金額。 |
| **High Roller/Whale (ハイローラー/ホエール)** | 大金を賭けるプレイヤーのこと。 |
| **Comps (コンプ)** | カジノが提供する無料の特典（無料ドリンク、食事、宿泊など）。 |
| **Tipping/Toking (チップ/トーキング)** | ディーラーにチップ（心付け）を渡すこと。 |
| **Tilt (ティルト)** | 欲求不満や精神的な動揺により、無謀なプレイをしてしまう状態。 |

⇓ CasinoTsu 推薦：[パリマッチ](https://www.casinotsu.com/reviews/parimatch) でバカラを存分に楽しみましょう♪⇓

<a href="https://go.casinotsu.com/go/parimatch" target="_blank" rel="noopener noreferrer"><strong>👉 パリマッチに登録！</strong>

**😎CasinoTsuから登録して無料ボーナス5,250円分をゲット！**

<a href="https://casinotsu.com/offers/parimatch-exclusive" target="_blank" rel="noopener noreferrer">パリマッチのオファー 詳細ページをチェック♪

### 【その他の使えるフレーズ - 会話編】

| カジノ英語／カナ読み | 意味 |
| --- | --- |
| **Give me a picture!**<br>**ギヴミー ア ピクチャー！** | 絵札ちょうだい！（ブラックジャックやバカラなどで、ディーラーがカードを配る際に願いを込めて言います） |
| **Excuse me, I’ll be back soon**<br>**エクス キューズミー、アイルビー バックスーン** | ちょっと失礼、すぐ戻ってきます（トイレなどで席を外す時） |
| **It’s not my day**<br>**イッツノット マイデイ** | 今日はツイていない |
| **So close!**<br>**ソー クロース！** | 危なかったな、ギリギリだったな（ゲームで危ない場面を免れた時） |
| **OK, that’s it!**<br>**オウケィ、ザッツィッ！** | これでおしまい！ |
| **I had a good time thanks to you!**<br>**アイ ハド グッタイム、サンクス トゥーユー！** | あなた（達）のおかげで楽しい時間を過ごせたよ！ |
| **Good luck to you!**<br>**グッド ラック トゥーユー！** | あなた（達）の幸運を祈っています。 |

😍 **ライブカジノゲームプロバイダーの数がとにかく豊富！**

<a href="https://casinotsu.com/reviews/live-casino-house" target="_blank" rel="noopener noreferrer">ライブカジノハウス のお気に入りのテーブルで遊びましょう❤︎
      `
    },
    {
      id: </>specific-game-terms",
      heading: "各テーブルゲームで使える用語",
      content: ``
    },
    {
      id: "roulette",
      heading: "ルーレットテーブル",
      content: `
<strong><a href="https://casinotsu.com/roulette" target="_blank" rel="noopener noreferrer">ルーレット</strong> では、他のテーブルとは異なり、色付きのチップを使用します。ルーレットチップと呼ばれるこのチップは、1枚が最低額のチップとなり、ベットする際に **他のプレイヤーのチップと混ざらないよう**、 **プレイヤー一人一人に異なる色のチップ** が渡されます。

ルーレットはテーブルゲームの中でもカードを使わないため、 **運の要素が強いゲーム** として、初心者の方が始めやすいゲームの一つです。もちろんギャンブルですので、 <a href="https://casinotsu.com/roulette/strategy" target="_blank" rel="noopener noreferrer"><strong>ルーレットの戦略</strong> を身につけて勝率アップを狙うことも可能です。😎

人気テーブルゲームであるルーレットをさらに楽しむためには、こちらの用語をチェックしましょう👇

### 【ルーレットで使えるカジノ英語＆フレーズ】

| カジノ英語／カナ読み | 意味 |
| --- | --- |
| **Full stack**<br>**フル スタック** | スタックとはチップの山のこと（フルスタックとは20枚のチップを指します） |
| **Colour, please**<br>**カラー プリーズ** | カラーチップをお願いします |
| **Colour Up, please**<br>**カラーアップ プリーズ** | 高い価値のチップに交換してください |
| **Can you place this on zero for me?**<br>**キャンユー プレイス ディス オン ゼロ フォーミー？** | これを0に賭けてもらえますか？ |
| **Cash me in, please**<br>**キャッシュミー イン プリーズ** | 現金に交換してください（キャッシャーでカジノチップを現金に交換する際） |
| **Change after the spin**<br>**チェンジ アフター ザ スピン** | スピンが終わってから交換します（スピン中にチップ交換を頼んだ場合、ディーラーが忙しくてすぐに対応できない時にこう言われることがあります） |
| **Can you take your mobile off the layout please?**<br>**キャンユー テイク ユァ モバイル オフ ザ レイアウト プリーズ？** | あなたの携帯電話をテーブルレイアウトから下げてください（ゲームテーブルにはグラスやスマートフォンなどを置かないようにしましょう） |
| **Please don’t touch the wheel**<br>**プリーズ ドンタッチ ザ ホウィール** | ホイールに触れないでください |
| **American Roulette (アメリカンルーレット)** | 0と00の2つのポケットがあるルーレット。 |
| **European/French Roulette (ヨーロピアン/フレンチルーレット)** | シングル0のポケットがあるルーレット。ヨーロピアンルーレットの方がハウスエッジが低い傾向があります。 |
| **Inside Bets (インサイドベット)** | 個別の数字や少数の数字の組み合わせに賭けるベット（ストレートアップ、スプリット、コーナー、ストリート、ラインベットなど）。 |
| **Outside Bets (アウトサイドベット)** | 赤/黒、偶数/奇数、ハイ/ロー、カラム、ダズンなど、より広い範囲の数字に賭けるベット。 |
| **Plaque (プラーク)** | チップよりも高額な価値を持つプラスチック製のトークン。主にハイローラーが使用します。 |

🏹 ルーレットについてさらに詳しく知りたい方はこちら！

初心者でも <a href="https://casinotsu.com/roulette" target="_blank" rel="noopener noreferrer">ルーレット を完全に攻略しましょう！
      `
    },
    {
      id: </>baccarat",
      heading: "バカラ",
      content: `
<strong><a href="https://casinotsu.com/baccarat" target="_blank" rel="noopener noreferrer">バカラ</strong> は非常にシンプルなゲームで、プレイヤーの判断は **「バンカー」か「プレイヤー」のどちらが勝つか** を予想するだけです。あとはディーラーが <a href="https://casinotsu.com/baccarat/rules" target="_blank" rel="noopener noreferrer">バカラのルール に沿ってゲームを進めてくれます。あなたはベットした後、特別な判断をする必要はありません。テーブルゲーム初心者にもおすすめです。

<a href="https://casinotsu.com/reviews/live-casino-house" target="_blank" rel="noopener noreferrer"><strong>ライブカジノハウス（Live Casino House）</strong> は、ライブカジノ全般に力を入れている <strong><a href="https://casinotsu.com/" target="_blank" rel="noopener noreferrer">人気のオンラインカジノ</strong> です🌟

**11社** のライブカジノ <a href="https://casinotsu.com/providers" target="_blank" rel="noopener noreferrer">プロバイダー を取り揃え、水着姿のディーラーが登場する <a href="https://casinotsu.com/providers/vivo-gaming" target="_blank" rel="noopener noreferrer"><strong>Vivo Gaming</strong> 社などの <a href="https://casinotsu.com/live-casino/live-baccarat" target="_blank" rel="noopener noreferrer"><strong>ライブバカラ</strong> でも遊ぶことができます👙✨

ライブカジノハウスのウェルカムオファーは（スポーツベットを除き） **禁止ゲームがない** ので、珍しいライブゲームで遊んでみましょう💃💖

😍 **ライブカジノゲームプロバイダーの数がとにかく豊富！**

<a href="https://casinotsu.com/reviews/live-casino-house" target="_blank" rel="noopener noreferrer">ライブカジノハウス のお気に入りのテーブルで遊びましょう❤︎

<a href="https://go.casinotsu.com/go/live-casino-house" target="_blank" rel="noopener noreferrer"><strong>👉 ライブカジノハウスに登録♪</strong>

バカラを始めるには、まずこれだけ知っておけば十分です👇

### 【 バカラで使えるカジノ英語＆フレーズ】

| カジノ英語／カナ読み | 意味 |
| --- | --- |
| **Tie**<br>**タイ** | 引き分けのこと（引き分けを予想する場合は、タイにベットします） |
| **Natural**<br>**ナチュラル** | 最初の2枚のカードの合計が8または9になること。ナチュラル8、ナチュラル9と呼びます。 |
| **Pair**<br>**ペア** | 同じ数字のカードが2枚出ること（それを予想して賭けます） |
| **Squeeze**<br>**スクィーズ** | カードの確認方法の一つで、カードを「絞る」動作を指します。ディーラーまたはマカオのカジノでは、プレイヤーに配られたカードを開けさせることがあり、この時に端からめくっていく確認方法で、スリル感を高めるために行われます。 |
| **Commission (コミッション)** | 手数料。バンカーに賭けて勝利した場合にのみ、勝利金からコミッション（通常5％）が引かれます。 |
| **Blackjack (ブラックジャック)** | エースと10のバリューカード（10, J, Q, K）の組み合わせで、合計が21になるハンドのこと。 |
| **Soft Hand (ソフトハンド)** | エースを含むハンドで、エースを1または11として数えることができる状態。 |
| **Hard Hand (ハードハンド)** | エースを含まないハンド、またはエースを1としてしか数えられないハンド。 |
| **Bust/Break (バスト/ブレイク)** | 合計が21を超えてしまい、自動的に負けとなること。 |
| **Surrender (サレンダー)** | 手札を諦めて、ベットの半額を失うこと。 |
| **Perfect Pair (パーフェクトペア)** | 最初の2枚のカードが同じ数字・同じスートのペアであるサイドベット。 |

💛 バカラのルールについてさらに詳しく知りたい方はこちら！

<a href="https://casinotsu.com/baccarat" target="_blank" rel="noopener noreferrer">バカラを完全に攻略！初心者はまずここから始めましょう。
      `
    },
    {
      id: </>blackjack",
      heading: "ブラックジャック",
      content: `
運とスキルが求められる <a href="https://casinotsu.com/blackjack" target="_blank" rel="noopener noreferrer">ブラックジャック は、<a href="https://casinotsu.com/blackjack/strategy" target="_blank" rel="noopener noreferrer"><strong>カードカウンティング</strong> やカードを引くか引かないかの **戦略を知れば勝率がアップ** すると言われています。カードの合計数が21に近い方が勝ちという **基本的な <a href="https://casinotsu.com/blackjack/rules" target="_blank" rel="noopener noreferrer">ルール** は難しくなく、一度プレイするとその楽しさに魅了されることでしょう。

**エンパイア777（Empire777）** では、なんと **246種類のブラックジャックゲーム**（ライブゲーム229、バーチャルゲーム17）を用意しています。これだけの数のブラックジャックゲームがあれば、たくさん練習できますね🌟

<a href="https://go.casinotsu.com/go/empire777" target="_blank" rel="noopener noreferrer"><strong>👉 エンパイア777で遊ぶ！</strong>

**♧ライブカジノ好きにはたまらないカジノはこちら**

<a href="https://casinotsu.com/reviews/empire777" target="_blank" rel="noopener noreferrer">Empire777（エンパイア777） のレビューページをチェック。

練習の前に、こちらのブラックジャックの用語をチェックしましょう👇

### 【 ブラックジャックで使えるカジノ英語＆フレーズ】

| カジノ英語／カナ読み | 意味 |
| --- | --- |
| **Shoe**<br>**シュー** | カードが収められている透明の容器（少し前のめりに傾いており、ハイヒールシューズに似ていることからこの名称になりました） |
| **Hole Card & Up Card**<br>**ホールカード＆アップカード** | ディーラーが持つ2枚のカードのうち、表向きに公開されているカードがアップカード、伏せられているカードがホールカードと呼ばれます。 |
| **Box**<br>**ボックス** | ベットを置くテーブル上の四角い枠 |
| **Hand**<br>**ハンド** | 手（札）、持ち札 |
| **Split**<br>**スプリット** | 2枚のカードを2つに分けること |
| **Double down**<br>**ダブルダウン** | 倍賭けをすること。単にダブルとも言います。 |
| **Stand**<br>**スタンド** | カードを引かないこと（stay／ステイとも言えます） |
| **Hit**<br>**ヒット** | もう1枚カードを引くこと（Card／カードと言ってもOK） |
| **Insurance**<br>**インシュアランス** | 保険としてベットをすること。ディーラーのアップカードがエースの場合に選択できます。 |
| **Picture**<br>**ピクチャー** | J, Q, Kの絵柄カードのこと（10としてカウントされます）。 |
| **Even Money**<br>**イーヴン マニー** | 同額のチップのこと。プレイヤーがブラックジャックで、ディーラーのアップカードがエースの場合に、同額の配当で保険（インシュアランス）を受ける選択肢。 |
| **Aces are high, aces are low**<br>**エースィズ アー ハイ, エースィズ アーロゥ** | A（エース）は11にも1にも数えられるということ。 |
| **I’d like to split**<br>**アイドライク トゥ スプリット** | 2つに分けたいです（単にスプリットと言ってもOK） |
| **Can I double on this?**<br>**キャナイ ダブル オン ディス？** | これに倍賭けはできますか？ |
| **Can I play more than one box?**<br>**キャナイ プレイ モァザン ワンボックス？** | 1つ以上のボックスに賭けられますか？ |
| **I’ll take even money please**<br>**アイル テイク イーヴン マニー プリーズ** | 同額のチップを受け取ります（自分とディーラーのハンドが両方ともブラックジャックの可能性がある場合、ディーラーのハンドを公開する前に、プレイヤーは同額のチップを受け取るか、勝負するか選択できます。本来より少ない、同額のチップで承諾する場合はこのフレーズを言いましょう） |
| **Would you like another card?**<br>**ウッジュー ライク アナザー カード？** | もう1枚カードを希望しますか？（ディーラーがプレイヤーに聞く場合） |
| **Too many**<br>**トゥー メニー** | 21を超えてしまったこと（バスト）。 |
| **Double or draw?**<br>**ダブル オァ ドロゥ？** | 倍賭け？ それともカードを引きますか？（ディーラーがプレイヤーに確認する場合） |
| **This box is free (available)**<br>**ディスボックスィズ フリー（アヴァイラブル）** | このボックスは空いています。 |
| **Please don’t touch the cards**<br>**プリーズ ドン タッチ ザ カーズ** | カードに触れないでください。 |
| **You need to be seated to play**<br>**ユー ニートゥビー シーテッド トゥ プレイ** | プレイされるには着席していただく必要があります。 |

🖤 ブラックジャックについてさらに詳しく知りたい方はこちら

<a href="https://casinotsu.com/blackjack/rules" target="_blank" rel="noopener noreferrer">ブラックジャックのルール と遊び方をマスターしましょう！
      `
    },
    {
      id: </>poker",
      heading: "ポーカー",
      content: `
世界的に有名なテーブルゲームで、人気のある <a href="https://casinotsu.com/poker" target="_blank" rel="noopener noreferrer"><strong>ポーカー</strong> には様々な種類があり、現在の主流は <a href="https://casinotsu.com/poker/texas-hold-em" target="_blank" rel="noopener noreferrer"><strong>テキサスホールデム</strong> です。ポーカーはカジノゲームの中で最も奥深いゲームと言われています。

<a href="https://casinotsu.com/poker/rules" target="_blank" rel="noopener noreferrer">ポーカーのルール を覚えるのは簡単ですが、完全に習得するには生涯かかると言われています。(ﾟдﾟ)！

ポーカー愛好家には欠かせない、 **世界最大のポーカーオンラインカジノ** と言えば <a href="https://casinotsu.com/reviews/pokerstars" target="_blank" rel="noopener noreferrer"><strong>ポーカースターズ</strong> 🃏✨

ポーカーのプレイ方法を学ぶのに最適なカジノで、少額トーナメントから高額トーナメントまで幅広く楽しめます。 **初心者から上級者まで** ポーカーを存分に楽しめるカジノとなっていますよ～😎💕

⇓ポーカーをプレイするなら、やはりこのカジノ！！⇓

<a href="https://go.casinotsu.com/go/pokerstars-poker" target="_blank" rel="noopener noreferrer"><strong>👉 ポーカースターズで遊ぶ！</strong>

**♠世界最大のポーカーカジノサイト**

<a href="https://casinotsu.com/reviews/pokerstars" target="_blank" rel="noopener noreferrer">ポーカースターズ について徹底解説！

ポーカーをプレイする際に覚えておきたい用語はこちら👇

### 【 ポーカーで使えるカジノ英語＆フレーズ】

| カジノ英語／カナ読み | 意味 |
| --- | --- |
| **Dealer Button**<br>**ディーラーボタン** | 親のこと。単にボタンとも言えます。 |
| **Hand**<br>**ハンド** | 手札、役のこと。 |
| **Pot**<br>**ポット** | プレイヤー全員のベットを集める場所。 |
| **Raise**<br>**レイズ** | ベットを引き上げること。 |
| **Call**<br>**コール** | ゲームを続ける意思があり、ベットを置くこと。 |
| **Re-Raise**<br>**リレイズ** | 他のプレイヤーがレイズした後、さらにベットを引き上げること。 |
| **Check**<br>**チェック** | パスすること（ベットを置かずに他のプレイヤーのアクションを見たい時に使います。ただし、あなたの前に誰かがコールしている場合は使用できません）。 |
| **Fold**<br>**フォールド** | ゲームを降りること。 |
| **Bluff**<br>**ブラフ** | ハッタリをかけて相手を騙すこと（悪いハンドでもブラフで相手を降ろさせるために使います）。 |
| **Card Suits**<br>**カードスーツ** | カードの模様：<br>Hearts（ハーツ）<br>Clubs（クラブス） <br>Diamonds（ダイアモンズ） <br>Spades（スペーズ） |
| **Poker Hands**<br>**ポーカーハンズ** | 役：<br>High card（ハイカード＝役なし）<br>Pair（ペア＝ワンペア）<br>Two pair（トゥペア）<br>Three of a kind（スリーオブアカインド＝スリーカード）<br>Flush（フラッシュ）<br>Straight（ストレイト）<br>Full house（フルハウス）<br>Four of a kind（フォーオブアカインド＝フォーカード）<br>Straight flush（ストレイトフラッシュ）<br>Royal flush（ローヤルフラッシュ＝ロイヤルストレートフラッシュ） |
| **Ante (アンティ)** | カードが配られる前に支払う、全てのプレイヤーに義務付けられた最低限のベット。 |
| **Blinds (ブラインド)** | ディーラーボタンの左隣のプレイヤーから順に強制的に行われるベット。通常、スモールブラインドとビッグブラインドがあります。 |
| **Betting Rounds (ベッティングラウンド)** | プレイヤーがベット、チェック、コール、レイズ、フォールドを行うことができるゲームの段階。 |
| **Community Cards (コミュニティカード)** | 全プレイヤーが共有して使用できるカード（フロップ、ターン、リバー）。 |
| **Flop (フロップ)** | フェイスアップで配られる最初の3枚のコミュニティカード。 |
| **Turn (ターン)** | フェイスアップで配られる4枚目のコミュニティカード。 |
| **River (リバー)** | フェイスアップで配られる5枚目（最後）のコミュニティカード。 |
| **Nuts (ナッツ)** | その時点で可能な限り最高のハンド。 |
| **Fish (フィッシュ)** | 経験が浅く、頻繁に負けるプレイヤー。 |
| **Shark (シャーク)** | 弱いプレイヤーを狙う、非常にスキルの高いプレイヤー。 |
| **Rake (レーキ)** | カジノがポットから手数料として徴収する割合。 |

😍 まずはこのページでオンラインポーカーの基礎知識と始め方をマスターしましょう！

<a href="https://casinotsu.com/poker" target="_blank" rel="noopener noreferrer">オンラインポーカー入門／どうやってプレイする？
      `
    },
    {
      id: </>craps",
      heading: "クラップス用語",
      content: `
クラップスは、サイコロを使用したダイナミックなカジノゲームですが、独特の用語が多く存在します。ここでは、クラップスでよく使われる英語の用語とその意味をご紹介します。

| カジノ英語／カナ読み | 意味 |
| --- | --- |
| **Come Out Roll (カムアウトロール)** | ポイントを設定するための最初のサイコロの出目。 |
| **Point (ポイント)** | カムアウトロールで出た数字（4, 5, 6, 8, 9, 10）で、シューターが次に同じ数字を7より先に出す必要がある目標値。 |
| **Pass Line Bet (パスラインベット)** | シューターが勝つ（ナチュラルで勝つか、ポイントを出す）ことに賭けるベット。最も基本的なベットです。 |
| **Don't Pass Line Bet (ドントパスラインベット)** | シューターが負ける（クラップスでロールするか、ポイントの前に7を出す）ことに賭けるベット。パスラインベットの反対です。 |
| **Hardway (ハードウェイ)** | 特定のペア（例: Hard 4は2つの2）を特定の順番で出すことに賭けるベット。 |
| **Snake Eyes (スネークアイズ)** | サイコロで両方とも1が出る（合計2）こと。 |
| **Natural (ナチュラル)** | カムアウトロールで7または11が出ること。パスラインベットは勝ちとなります。 |
| **Craps (クラップス)** | カムアウトロールで2、3、または12が出ること。パスラインベットは負けとなります。 |
      `
    },
  ],

  epilogue: `
## まとめ｜カジノ英語は事前にチェックすれば心配なし🌟

<a href="https://casinotsu.com/live-casino" target="_blank" rel="noopener noreferrer"><strong>オンラインのライブカジノ</strong> で、プロの外国人ディーラーとプレイすることに不安を感じていた方…。と思っていた方も、 <strong><a href="https://casinotsu.com/" target="_blank" rel="noopener noreferrer">CasinoTsu</strong> のカジノ英語や使えるフレーズをチェックして、少し自信がついたのではないでしょうか？(❁´◡\`❁)

初めて挑戦する際には、誰でも少し躊躇してしまうものです。

しかし、少しだけカジノ用語を、たとえ一つのゲームだけでも覚えていただければ、これまでとは違ったオンラインカジノライフを楽しんでいただけるはずです😆

さらに多くのカジノ用語を知りたいと思った方は、さらに詳しい <strong><a href="https://casinotsu.com/guides/glossary" target="_blank" rel="noopener noreferrer">カジノ用語集</strong> のページもありますので、ぜひそちらもチェックしてオンカジ上級者を目指してください🏆✨

知識を深めて、もっともっと **オンラインカジノ** をエンジョイしましょう(๑•̀ㅂ•́)و✧

<a href="https://go.casinotsu.com/go/casitabi:casitabi?referrer_path=%2Freviews%2Fcasitabi" target="_blank" rel="noopener noreferrer"><strong>👉 カジ旅で遊ぶ！</strong>

**🍒日本人に人気のオンラインカジノ、「カジ旅」**

<a href="https://casinotsu.com/reviews/casitabi" target="_blank" rel="noopener noreferrer">カジ旅 のレビューはこちら！
  `,

  faq: [
    {
      question: </>お役立ちカジノ英語やフレーズはどこで使えますか？",
      answer: "こちらで紹介したカジノ英語やフレーズは、本場の外国人ディーラーと直接プレイできるライブカジノのテーブルで活用できます。ランドカジノでも同様に使用可能です。",
    },
    {
      question: "英語が話せなくても、このカジノ英語を覚えたら問題ないですか？",
      answer: "はい。基本的にはライブカジノでもディーラーと直接会話する機会は少ないため、問題ありません。ゲームの流れやルールを理解できる程度の英語用語を事前に確認しておくと、スムーズなゲームプレイが楽しめるでしょう。オンラインカジノであれば、チャットサポートが充実している場合も多いため、言葉に不安があっても安心してプレイできます。",
    },
  ],

  author: {
    name: "Kotone",
    nameJapanese: "琴音",
    role: "コンテンツライター",
    avatarUrl: "https://casinotsu.com/images/53_150x164.webp",
    bio: "海外のランドカジノで約16年前に初めてカジノを体験。その後、オンラインカジノオペレーター企業でコンテンツマネージャーとしてサイト運営・マーケティングなどに約3年間携わりました。 海外在住約17年のグローバルな経験や幅広いサイト管理の経験から、オンラインカジノ業界の最新情報やトレンドをリサーチし、各カジノを鋭くレビューすることを得意としています！現在はジャパカジでカジノレビューや主要ページの校正・編集を担当。ユーザー目線の情報をいち早くお届けできるよう努めます✨",
    authorPageUrl: "https://casinotsu.com/authors/kotone",
  },

  metadata: {
    category: "casino-guides",
    tags: ["カジノ英語", "フレーズ", "用語集", "初心者", "テーブルゲーム"],
    lastModified: "2025-10-02",
    locale: "ja",
  },
};