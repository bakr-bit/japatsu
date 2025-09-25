"use client";

// Minimal markdown → HTML renderer for headings, lists, links, images, bold.
// Not exhaustive; good enough for content scaffolding.

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderBasicMarkdown(md: string): string {
  const lines = md.replace(/\r\n?/g, "\n").split("\n");
  const out: string[] = [];
  let inUl = false;
  let inOl = false;

  const flushLists = () => {
    if (inUl) { out.push("</ul>"); inUl = false; }
    if (inOl) { out.push("</ol>"); inOl = false; }
  };

  for (let raw of lines) {
    let line = raw;

    // Heading
    if (/^###\s+/.test(line)) { flushLists(); out.push(`<h3>${escapeHtml(line.replace(/^###\s+/, ""))}</h3>`); continue; }
    if (/^##\s+/.test(line)) { flushLists(); out.push(`<h2>${escapeHtml(line.replace(/^##\s+/, ""))}</h2>`); continue; }
    if (/^#\s+/.test(line)) { flushLists(); out.push(`<h1>${escapeHtml(line.replace(/^#\s+/, ""))}</h1>`); continue; }

    // Ordered list
    if (/^\d+\.\s+/.test(line)) {
      if (!inOl) { flushLists(); out.push("<ol>"); inOl = true; }
      const item = line.replace(/^\d+\.\s+/, "");
      out.push(`<li>${escapeHtml(item)}</li>`);
      continue;
    }

    // Unordered list
    if (/^[-*+]\s+/.test(line)) {
      if (!inUl) { flushLists(); out.push("<ul>"); inUl = true; }
      const item = line.replace(/^[-*+]\s+/, "");
      out.push(`<li>${escapeHtml(item)}</li>`);
      continue;
    }

    // Horizontal rule (three dashes)
    if (/^---\s*$/.test(line)) { flushLists(); out.push("<hr/>"); continue; }

    // Blank line → paragraph break
    if (/^\s*$/.test(line)) { flushLists(); out.push(""); continue; }

    // Fallback paragraph with inline conversions
    flushLists();
    let html = escapeHtml(line);
    // bold **text**
    html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    // images ![alt](src)
    html = html.replace(/!\[([^\]]*)\]\(([^\s\)]+)(?:\s+"([^"]+)")?\)/g, (m, alt, src) => `<img src="${src}" alt="${alt}" />`);
    // links [text](href)
    html = html.replace(/\[([^\]]+)\]\(([^\s\)]+)\)/g, (m, text, href) => `<a href="${href}">${text}</a>`);
    out.push(`<p>${html}</p>`);
  }

  flushLists();
  return out.join("\n");
}

export default function Markdown({ content, className = "" }: { content: string; className?: string }) {
  const html = renderBasicMarkdown(content);
  return (
    <div
      className={className}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

