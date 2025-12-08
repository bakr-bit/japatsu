type FaqItem = {
  question: string;
  answer: string;
};

type FaqProps = {
  title?: string;
  items?: FaqItem[];
  fullWidth?: boolean;
  className?: string;
};

const defaultItems: FaqItem[] = [
  {
    question: "オンラインカジノは安全ですか？",
    answer:
      "信頼できる運営元・ライセンスを持つカジノを選べば安全性は高いです。レビューや評価を確認しましょう。",
  },
  {
    question: "ボーナスの賭け条件とは？",
    answer:
      "ボーナスを出金するために必要なベットの合計額です。各オファーの規約を必ず確認してください。",
  },
  {
    question: "入金方法のおすすめは？",
    answer:
      "手数料や反映速度、本人確認の有無などで選びます。クレカ・銀行振込・暗号資産などが一般的です。",
  },
];

export default function Faq({ title = "よくある質問", items = defaultItems, fullWidth = false, className = "" }: FaqProps) {
  return (
    <section className={`bg-gray-50 ${className}`} aria-labelledby="faq-title">
      <div className={`${fullWidth ? "w-full max-w-none" : "container mx-auto"} px-4 py-12` }>
        <h2 id="faq-title" className="text-2xl font-bold mb-6 text-gray-900">
          {title}
        </h2>
        <div className="divide-y rounded-lg border-gray-200 border bg-white">
          {items.map((it, idx) => (
            <details key={idx} className="group">
              <summary className="list-none cursor-pointer select-none px-4 py-4 flex items-center justify-between gap-4">
                <span className="font-medium text-gray-900 group-open:text-red-600">{it.question}</span>
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
              <div className="px-4 pb-4 text-gray-700">{it.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
