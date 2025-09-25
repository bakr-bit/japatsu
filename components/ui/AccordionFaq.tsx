import { Fragment } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type AccordionFaqProps = {
  items: FaqItem[];
  className?: string;
};

export default function AccordionFaq({ items, className = "" }: AccordionFaqProps) {
  return (
    <div className={`rounded-2xl border border-slate-200 bg-white divide-y ${className}`}>
      {items.map((qa, idx) => (
        <Fragment key={`${qa.question}-${idx}`}>
          <details className="group">
            <summary className="list-none cursor-pointer select-none px-4 py-4 flex items-center justify-between gap-4">
              <span className="font-medium text-gray-900 group-open:text-rose-600">{qa.question}</span>
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
            <div className="px-4 pb-4 text-sm leading-relaxed text-gray-800">{qa.answer}</div>
          </details>
        </Fragment>
      ))}
    </div>
  );
}

