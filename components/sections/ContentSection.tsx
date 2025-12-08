import type { ContentSection as ContentSectionType } from "@/lib/types";
import DataTableSection from "./DataTableSection";

export type ContentSectionProps = {
  /** Section data */
  section: ContentSectionType;
  /** Heading level */
  headingLevel?: "h2" | "h3" | "h4";
  /** HTML id for anchor linking */
  id?: string;
  /** Additional classes */
  className?: string;
};

/**
 * Consolidated Content Section component.
 * Replaces GSection, CSection, PkSection, etc.
 * Renders educational content with headings, paragraphs, bullets, tables, and images.
 */
export default function ContentSectionComponent({
  section,
  headingLevel = "h2",
  id,
  className = "",
}: ContentSectionProps) {
  const HeadingTag = headingLevel;
  const subHeadingTag = headingLevel === "h2" ? "h3" : headingLevel === "h3" ? "h4" : "h5";

  const headingClass =
    headingLevel === "h2"
      ? "heading-2"
      : headingLevel === "h3"
      ? "heading-3"
      : "heading-4";

  return (
    <section id={id} className={`py-8 ${className}`}>
      <HeadingTag className={`${headingClass} mb-4`}>{section.heading}</HeadingTag>

      {/* Paragraphs */}
      {section.paragraphs?.map((para, idx) => (
        <p key={idx} className="body-text-ja text-gray-700 mb-4">
          {para}
        </p>
      ))}

      {/* Bullets */}
      {section.bullets && section.bullets.length > 0 && (
        <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
          {section.bullets.map((bullet, idx) => (
            <li key={idx}>{bullet}</li>
          ))}
        </ul>
      )}

      {/* Table */}
      {section.table && (
        <DataTableSection table={section.table} className="my-4" />
      )}

      {/* Image */}
      {section.image && (
        <figure className="my-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={section.image.src}
            alt={section.image.alt}
            className="rounded-lg max-w-full h-auto"
            loading="lazy"
            decoding="async"
          />
          {section.image.caption && (
            <figcaption className="mt-2 text-sm text-gray-500 text-center">
              {section.image.caption}
            </figcaption>
          )}
        </figure>
      )}

      {/* Subsections */}
      {section.subsections?.map((sub, idx) => {
        const SubHeading = subHeadingTag as keyof JSX.IntrinsicElements;
        return (
          <div key={idx} className="mt-6">
            <SubHeading className="heading-4 mb-3">{sub.subheading}</SubHeading>

            {sub.paragraphs?.map((para, pIdx) => (
              <p key={pIdx} className="body-text-ja text-gray-700 mb-3">
                {para}
              </p>
            ))}

            {sub.bullets && sub.bullets.length > 0 && (
              <ul className="list-disc list-inside space-y-1 mb-3 text-gray-700">
                {sub.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
            )}

            {sub.table && (
              <DataTableSection table={sub.table} className="my-3" />
            )}

            {sub.image && (
              <figure className="my-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={sub.image.src}
                  alt={sub.image.alt}
                  className="rounded-lg max-w-full h-auto"
                  loading="lazy"
                  decoding="async"
                />
                {sub.image.caption && (
                  <figcaption className="mt-2 text-sm text-gray-500 text-center">
                    {sub.image.caption}
                  </figcaption>
                )}
              </figure>
            )}
          </div>
        );
      })}
    </section>
  );
}
