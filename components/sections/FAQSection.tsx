import AccordionFaq from "@/components/ui/AccordionFaq";
import type { FAQItem } from "@/lib/types";

export type FAQSectionProps = {
  /** Array of FAQ items */
  items: FAQItem[];
  /** Section title */
  title?: string;
  /** HTML id for anchor linking */
  id?: string;
  /** Additional classes for the section */
  className?: string;
  /** Whether to include FAQ schema JSON-LD */
  includeSchema?: boolean;
};

/**
 * Consolidated FAQ Section component.
 * Replaces 37+ inline FAQ implementations across templates.
 * Wraps AccordionFaq with consistent styling and optional schema.
 */
export default function FAQSection({
  items,
  title = "よくある質問",
  id = "faq",
  className = "",
  includeSchema = true,
}: FAQSectionProps) {
  if (!items?.length) return null;

  const schemaData = includeSchema
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <section id={id} className={`py-10 ${className}`}>
      {includeSchema && schemaData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      )}

      <div className="container-default">
        <h2 className="heading-2 mb-6">{title}</h2>
        <AccordionFaq
          items={items.map((item) => ({
            question: item.question,
            answer: item.answer,
          }))}
        />
      </div>
    </section>
  );
}
