

"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import SectionTitle from "@/components/ui/SectionTitle";

type QA = { q: string; a: string };

function FAQ({ questions }: { questions: QA[] }) {
  return (
    <section id="faq" className="mt-10">
      <SectionTitle title="よくある質問" as="h2" />
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
            <div className="px-4 pb-4 text-gray-800" dangerouslySetInnerHTML={{ __html: qa.a }} />
          </details>
        ))}
      </div>
    </section>
  );
}

function parseFaq(faqMarkdown: string): QA[] {
    const faq: QA[] = [];
    const lines = faqMarkdown.split("\n");
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith("**Q")) {
            const q = lines[i].replace(/\*\*Q\d+: |\*\*/g, "").trim();
            let a = "";
            i++;
            while (i < lines.length && !lines[i].startsWith("**Q") && !lines[i].startsWith("---")) {
                if(lines[i].trim() !== "") {
                    a += lines[i].trim() + " ";
                }
                i++;
            }
            i--;
            faq.push({ q, a: a.trim() });
        }
    }
    return faq;
}

export default function MarkdownArticleTemplate({ markdownContent }: { markdownContent: string }) {
  const faqSplit = markdownContent.split("## よくある質問（FAQ）");
  const mainContent = faqSplit[0];
  const faqContent = faqSplit.length > 1 ? faqSplit[1] : "";
  const faqData = parseFaq(faqContent);

  return (
    <>
        <div className="prose prose-lg max-w-none prose-a:text-red-600 hover:prose-a:text-red-700 prose-a:underline">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeSlug]}
                components={{
                h1: () => null,
                h2: ({ node, ...props }) => (
                    <h2
                    className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2"
                    {...props}
                    />
                ),
                h3: ({ node, ...props }) => (
                    <h3 className="text-xl font-bold text-gray-900 my-3" {...props} />
                ),
                p: ({ node, ...props }) => (
                    <p className="text-gray-800 leading-relaxed my-4" {...props} />
                ),
                ul: ({ node, ...props }) => (
                    <ul className="list-disc pl-5 space-y-2 my-4" {...props} />
                ),
                ol: ({ node, ...props }) => (
                    <ol className="list-decimal pl-5 space-y-2 my-4" {...props} />
                ),
                table: ({ node, ...props }) => (
                    <div className="overflow-x-auto rounded-lg border bg-white shadow-sm my-6">
                    <table className="min-w-full text-sm" {...props} />
                    </div>
                ),
                thead: ({ node, ...props }) => (
                    <thead className="bg-gray-50 text-gray-600" {...props} />
                ),
                th: ({ node, ...props }) => (
                    <th className="px-4 py-2 text-left font-semibold" {...props} />
                ),
                tbody: ({ node, ...props }) => (
                    <tbody {...props} />
                ),
                td: ({ node, ...props }) => (
                    <td className="px-4 py-2 text-gray-800" {...props} />
                ),
                blockquote: ({ node, ...props }) => (
                    <blockquote className="border-l-4 border-amber-400 bg-amber-50 p-4 my-6 text-amber-800" {...props} />
                ),
                a: ({ node, ...props }) => (
                    <a className="text-red-600 hover:text-red-700 underline" {...props} />
                )
                }}
            >
                {mainContent}
            </ReactMarkdown>
        </div>
        {faqData.length > 0 && <FAQ questions={faqData} />}
    </>
  );
}
