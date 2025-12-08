import Link from "next/link";
import type { ReactNode } from "react";
import type { RichParagraph, TextSegment, ContentTable } from "@/lib/types";

// =============================================================================
// RENDER MARKDOWN - Drop-in replacement for stripMarkdown
// =============================================================================

/**
 * Renders a string with markdown formatting as React elements.
 * Drop-in replacement for stripMarkdown() that preserves formatting.
 *
 * Handles:
 * - **bold** text (including nested links)
 * - *italic* text
 * - [link text](url) links (including nested bold/italic)
 *
 * Does NOT handle (returns as plain text):
 * - Tables (use parseMarkdownTable + RichTable for these)
 * - Multi-line lists (use parseMarkdownList for these)
 *
 * @example
 * <p>{renderMarkdown("This is **bold** and [link](/page)")}</p>
 */
export function renderMarkdown(text: string): ReactNode {
  if (!text || typeof text !== "string") {
    return text;
  }

  // Check if this looks like a table - render as HTML table
  if (text.includes("| --- |") || text.match(/^\|.*\|.*\|/m)) {
    const table = parseMarkdownTable(text);
    if (table) {
      return <InlineTable table={table} />;
    }
    // Fallback to cleaned text if parsing fails
    return cleanMarkdownText(text);
  }

  return renderMarkdownInternal(text, { key: 0 });
}

/**
 * Inline table component for tables embedded in paragraphs.
 * Uses a simpler, more compact style than RichTable.
 */
function InlineTable({ table }: { table: ContentTable }) {
  const { headers, rows } = table;

  return (
    <span className="block my-3 overflow-x-auto">
      <table className="min-w-full text-sm border-collapse">
        <thead>
          <tr className="bg-slate-100">
            {headers.map((header, i) => (
              <th
                key={i}
                className="px-3 py-2 text-left font-semibold text-slate-900 border border-slate-200"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="even:bg-slate-50">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-3 py-2 text-slate-700 border border-slate-200"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </span>
  );
}

/**
 * Internal recursive markdown renderer with shared key counter
 */
function renderMarkdownInternal(
  text: string,
  state: { key: number }
): ReactNode {
  if (!text || typeof text !== "string") {
    return text;
  }

  const elements: ReactNode[] = [];

  // Combined regex for bold, italic, and links
  // Order matters: check bold (**) before italic (*)
  const markdownRegex = /\*\*(.+?)\*\*|\*(.+?)\*|\[([^\]]+)\]\(([^)]+)\)/g;

  let lastIndex = 0;
  let match;

  while ((match = markdownRegex.exec(text)) !== null) {
    // Add text before this match
    if (match.index > lastIndex) {
      elements.push(text.slice(lastIndex, match.index));
    }

    if (match[1]) {
      // Bold: **text** - recursively process inner content for links
      const innerContent = renderMarkdownInternal(match[1], state);
      elements.push(
        <strong key={state.key++} className="font-semibold">
          {innerContent}
        </strong>
      );
    } else if (match[2]) {
      // Italic: *text* - recursively process inner content
      const innerContent = renderMarkdownInternal(match[2], state);
      elements.push(<em key={state.key++}>{innerContent}</em>);
    } else if (match[3] && match[4]) {
      // Link: [text](url) - recursively process link text for bold/italic
      const linkTextContent = renderMarkdownInternal(match[3], state);
      const url = match[4];
      const isExternal = url.startsWith("http");

      if (isExternal) {
        elements.push(
          <a
            key={state.key++}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:text-brand-hover underline"
          >
            {linkTextContent}
          </a>
        );
      } else {
        elements.push(
          <Link
            key={state.key++}
            href={url}
            className="text-brand hover:text-brand-hover underline"
          >
            {linkTextContent}
          </Link>
        );
      }
    }

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    elements.push(text.slice(lastIndex));
  }

  // If no markdown was found, return original text
  if (elements.length === 0) {
    return text;
  }

  return <>{elements}</>;
}

/**
 * Cleans markdown syntax from text without rendering.
 * Use this for cases where you just want plain text.
 */
function cleanMarkdownText(text: string): string {
  if (!text || typeof text !== "string") {
    return text;
  }

  return text
    // Remove bold/italic
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\*(.+?)\*/g, "$1")
    // Remove links, keep text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    // Remove table separators
    .replace(/\|\s*-+\s*/g, "")
    // Clean up extra whitespace
    .replace(/\s+/g, " ")
    .trim();
}

export type RichTextProps = {
  /** Rich paragraph content - array of text segments */
  content: RichParagraph;
  /** Additional classes for the paragraph wrapper */
  className?: string;
};

/**
 * Renders a single text segment with appropriate formatting
 */
function renderSegment(segment: TextSegment, index: number) {
  // Plain string
  if (typeof segment === "string") {
    return <span key={index}>{segment}</span>;
  }

  // Link segment
  if ("link" in segment) {
    const isExternal = segment.link.startsWith("http");
    if (isExternal) {
      return (
        <a
          key={index}
          href={segment.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:text-brand-hover underline"
        >
          {segment.text}
        </a>
      );
    }
    return (
      <Link
        key={index}
        href={segment.link}
        className="text-brand hover:text-brand-hover underline"
      >
        {segment.text}
      </Link>
    );
  }

  // Formatted text (bold/italic)
  let element = <>{segment.text}</>;

  if (segment.italic) {
    element = <em>{element}</em>;
  }
  if (segment.bold) {
    element = <strong className="font-semibold">{element}</strong>;
  }

  return <span key={index}>{element}</span>;
}

/**
 * RichText component for rendering formatted text content.
 * Replaces raw markdown strings with structured data rendering.
 *
 * Usage:
 * ```tsx
 * <RichText content={[
 *   "Normal text, ",
 *   { text: "bold text", bold: true },
 *   ", and ",
 *   { text: "a link", link: "/page" }
 * ]} />
 * ```
 */
export default function RichText({ content, className = "" }: RichTextProps) {
  if (!content || content.length === 0) {
    return null;
  }

  return (
    <p className={`text-gray-800 leading-relaxed ${className}`}>
      {content.map((segment, index) => renderSegment(segment, index))}
    </p>
  );
}

// =============================================================================
// CONTENT TABLE COMPONENT
// =============================================================================

export type ContentTableProps = {
  /** Table data */
  table: ContentTable;
  /** Additional classes */
  className?: string;
  /** Table style variant */
  variant?: "default" | "striped" | "bordered";
};

/**
 * Renders a structured content table.
 * For use with ContentTable type from rich text content.
 */
export function RichTable({
  table,
  className = "",
  variant = "default",
}: ContentTableProps) {
  const { headers, rows, caption, note } = table;

  const variantClasses = {
    default: "",
    striped: "[&_tbody_tr:nth-child(odd)]:bg-slate-50",
    bordered: "border border-slate-200 [&_th]:border [&_td]:border",
  };

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table
        className={`min-w-full text-sm ${variantClasses[variant]}`}
      >
        {caption && (
          <caption className="text-left text-sm text-slate-600 mb-2">
            {caption}
          </caption>
        )}
        <thead>
          <tr className="bg-slate-100 border-b border-slate-200">
            {headers.map((header, i) => (
              <th
                key={i}
                className="px-4 py-3 text-left font-semibold text-slate-900"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-slate-50">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-3 text-slate-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {note && (
        <p className="mt-2 text-xs text-slate-500">{note}</p>
      )}
    </div>
  );
}

// =============================================================================
// HELPER FUNCTIONS FOR PARSING MARKDOWN TO RICH TEXT
// =============================================================================

/**
 * Parses a string with **bold** markers into RichParagraph format.
 * Useful for converting existing markdown content.
 *
 * @example
 * parseMarkdownBold("This is **bold** text")
 * // Returns: ["This is ", { text: "bold", bold: true }, " text"]
 */
export function parseMarkdownBold(text: string): RichParagraph {
  if (!text) return [];

  const segments: RichParagraph = [];
  const boldRegex = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match;

  while ((match = boldRegex.exec(text)) !== null) {
    // Add text before the bold segment
    if (match.index > lastIndex) {
      segments.push(text.slice(lastIndex, match.index));
    }
    // Add the bold segment
    segments.push({ text: match[1], bold: true });
    lastIndex = match.index + match[0].length;
  }

  // Add remaining text after last match
  if (lastIndex < text.length) {
    segments.push(text.slice(lastIndex));
  }

  return segments.length > 0 ? segments : [text];
}

/**
 * Parses a markdown table string into ContentTable format.
 *
 * @example
 * parseMarkdownTable("| Col1 | Col2 |\n| --- | --- |\n| A | B |")
 * // Returns: { headers: ["Col1", "Col2"], rows: [["A", "B"]] }
 */
export function parseMarkdownTable(markdown: string): ContentTable | null {
  if (!markdown || !markdown.includes("|")) return null;

  const lines = markdown
    .trim()
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  if (lines.length < 2) return null;

  // Parse cells from a line
  const parseLine = (line: string): string[] =>
    line
      .split("|")
      .map((cell) => cell.trim())
      .filter((cell) => cell.length > 0 && !cell.match(/^-+$/));

  // First line is headers
  const headers = parseLine(lines[0]);
  if (headers.length === 0) return null;

  // Find the separator line (contains ---)
  const separatorIndex = lines.findIndex((line) => line.includes("---"));
  const dataStartIndex = separatorIndex >= 0 ? separatorIndex + 1 : 1;

  // Remaining lines are data rows
  const rows: string[][] = [];
  for (let i = dataStartIndex; i < lines.length; i++) {
    const cells = parseLine(lines[i]);
    if (cells.length > 0) {
      rows.push(cells);
    }
  }

  return { headers, rows };
}

/**
 * Parses a markdown list string into an array of items.
 *
 * @example
 * parseMarkdownList("-   Item 1\n-   Item 2")
 * // Returns: ["Item 1", "Item 2"]
 */
export function parseMarkdownList(markdown: string): string[] {
  if (!markdown) return [];

  return markdown
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("-") || line.startsWith("*"))
    .map((line) => line.replace(/^[-*]\s*/, "").trim())
    .filter((item) => item.length > 0);
}
