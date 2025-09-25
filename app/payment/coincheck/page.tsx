import SectionScaffold from "@/components/shell/SectionScaffold";
import Markdown from "@/components/ui/Markdown";

type IntroProps = { text: string };
function Intro({ text }: IntroProps) {
  return (
    <section className="mt-4">
      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <p className="text-lg text-gray-800 leading-relaxed">{text}</p>
      </div>
    </section>
  );
}

type FeeItem = { fee: string; cost: string };
function FeeTable({ rows }: { rows: FeeItem[] }) {
  if (!rows || rows.length === 0) return null;
  return (
    <section id="fees" className="mt-8">
      <div className="overflow-x-auto rounded-lg border bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-4 py-2 text-left font-semibold">項目</th>
              <th className="px-4 py-2 text-left font-semibold">目安</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {rows.map((r, i) => (
              <tr key={i}>
                <td className="px-4 py-2 font-semibold text-gray-900">{r.fee}</td>
                <td className="px-4 py-2 text-gray-800">{r.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  if ((!pros || pros.length === 0) && (!cons || cons.length === 0)) return null;
  return (
    <section id="proscons" className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pros && pros.length > 0 ? (
          <div className="rounded-lg border bg-white p-4">
            <h3 className="font-semibold text-green-700 mb-2">メリット</h3>
            <ul className="space-y-2 text-gray-800">
              {pros.map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-600" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {cons && cons.length > 0 ? (
          <div className="rounded-lg border bg-white p-4">
            <h3 className="font-semibold text-red-700 mb-2">デメリット</h3>
            <ul className="space-y-2 text-gray-800">
              {cons.map((c, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function SafetyTips({ tips }: { tips: string[] }) {
  if (!tips || tips.length === 0) return null;
  return (
    <section id="safety" className="mt-10">
      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold text-amber-800 bg-amber-50">
          <span aria-hidden>🧠</span>
          <span>注意点・対処法／安全のヒント</span>
        </div>
        <ul className="space-y-2 text-gray-800">
          {tips.map((t, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

type ComparisonItem = {
  title: string;
  description: string;
  meta?: Array<{ label: string; value: string }>;
};
function Comparison({ items }: { items: ComparisonItem[] }) {
  if (!items || items.length === 0) return null;
  return (
    <section id="comparison" className="mt-10">
      <div className={`grid grid-cols-1 ${items.length === 4 ? "md:grid-cols-4" : "md:grid-cols-3"} gap-6`}>
        {items.map((it, i) => (
          <div key={i} className="rounded-lg border bg-white p-4 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-1">{it.title}</h3>
            <p className="text-gray-800 text-sm leading-relaxed">{it.description}</p>
            {it.meta && it.meta.length > 0 ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {it.meta.map((m, j) => (
                  <span
                    key={j}
                    className="text-xs font-semibold text-gray-700 bg-gray-100 border rounded-full px-2 py-0.5"
                  >
                    {m.label}: {m.value}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

type QA = { q: string; a: string };
function FAQ({ questions }: { questions: QA[] }) {
  if (!questions || questions.length === 0) return null;
  return (
    <section id="faq" className="mt-10">
      <div className="rounded-lg border bg-white divide-y">
        {questions.map((qa, i) => (
          <details key={i} className="group">
            <summary className="list-none cursor-pointer select-none px-4 py-4 flex items-center justify-between gap-4">
              <span className="font-medium text-gray-900 group-open:text-red-600">{qa.q}</span>
              <svg
                className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </summary>
            <div className="px-4 pb-4 text-gray-800">{qa.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}

function CallToAction({ text, href }: { text: string; href: string }) {
  if (!text || !href) return null;
  return (
    <section className="mt-10">
      <div className="rounded-lg border bg-gradient-to-r from-rose-50 to-white p-5 flex items-center justify-between gap-4">
        <p className="text-gray-900 font-semibold">{text}</p>
        <a
          href={href}
          className="inline-flex items-center gap-2 bg-red-600 text-white font-bold py-2.5 px-5 rounded-md hover:bg-red-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
        >
          詳しく見る
        </a>
      </div>
    </section>
  );
}

export default function Page() {
  const pageTitle = "Coincheck";

  const introText =
    "Coincheck（コインチェック）は国内で人気の仮想通貨取引所。ビットコインをはじめ複数の暗号資産を扱え、オンラインカジノの仮想通貨入出金にも活用できます。";

  const feeRows: FeeItem[] = [
    { fee: "アカウント開設", cost: "無料（KYC完了が必要）" },
    { fee: "取引・送金手数料", cost: "ネットワーク・方法により変動（画面に表示）" },
    { fee: "対応通貨", cost: "BTC, ETH, XRP ほか多数（変更あり）" },
  ];

  const pros = [
    "アプリが見やすく操作がわかりやすい",
    "ビットコイン以外のアルトコインも対応",
    "質問・情報交換に使えるチャット機能（サポートではない）",
  ];
  const cons = [
    "本人確認の提出など初期手続きが必要",
    "手数料は時期・方法で変動",
  ];

  const tips: string[] = [
    "登録後は本人確認・個人情報の入力を済ませておくと取引が楽",
    "カジノへ送金する際は宛先・ネットワークを必ず確認",
    "対応通貨・手数料は変更されうるため公式で最新情報を確認",
  ];

  const comparisonItems: ComparisonItem[] = [
    {
      title: "Coincheck",
      description: "国内人気の取引所。UIのわかりやすさが魅力。",
      meta: [
        { label: "使いやすさ", value: "◎" },
        { label: "通貨数", value: "◎" },
        { label: "手数料", value: "○" },
      ],
    },
    {
      title: "bitFlyer",
      description: "国内大手。ビットコインの取引で定評。",
      meta: [
        { label: "使いやすさ", value: "◎" },
        { label: "通貨数", value: "○" },
        { label: "手数料", value: "○" },
      ],
    },
    {
      title: "電子決済（Payz等）",
      description: "仮想通貨以外の資金管理を含め柔軟に対応。",
      meta: [
        { label: "使いやすさ", value: "○" },
        { label: "互換性", value: "◎" },
        { label: "コスト", value: "○" },
      ],
    },
  ];

  const faq: QA[] = [
    { q: "口座開設は本当に10秒ですか？", a: "登録自体はすぐ終わりますが、本人確認（KYC）完了までは追加手続きが必要です。" },
    { q: "オンラインカジノで使えますか？", a: "仮想通貨に対応しているカジノであれば、入出金に活用できます。" },
    { q: "手数料は安いですか？", a: "銀行・カードと比較して総じて低コストですが、ネットワーク・相場により変動します。" },
  ];

  const cta = { text: "ビットコイン決済の基礎を確認する", href: "/payment/bitcoin" };

  const leftoverMarkdown = `
## かんたん口座開設（要約）
1. 公式サイトでメール・パスワードを設定→アカウント作成
2. 確認メールを開いて認証
3. 必要書類の提出・個人情報の入力を完了

※ フェイスブック連携の簡易登録も記載あり。登録後はKYCまで済ませておくと取引がスムーズです。
`;

  return (
    <SectionScaffold title={pageTitle}>
      <div className="grid grid-cols-1 gap-8">
        <div className="space-y-10">
          <Intro text={introText} />
          <FeeTable rows={feeRows} />
          <ProsCons pros={pros} cons={cons} />
          <SafetyTips tips={tips} />
          <Comparison items={comparisonItems} />
          <FAQ questions={faq} />
          <section className="mt-10">
            <div className="rounded-xl border bg-white p-5 shadow-sm">
              <Markdown content={leftoverMarkdown} className="prose prose-sm max-w-none text-gray-800" />
            </div>
          </section>
          <CallToAction text={cta.text} href={cta.href} />
        </div>
      </div>
    </SectionScaffold>
  );
}
