import type { DataTable } from "@/lib/types";

export type DataTableSectionProps = {
  /** Table data */
  table: DataTable;
  /** Visual variant */
  variant?: "simple" | "striped" | "bordered";
  /** Section title (overrides table.title) */
  sectionTitle?: string;
  /** HTML id for anchor linking */
  id?: string;
  /** Additional classes */
  className?: string;
};

const variantClasses = {
  simple: "",
  striped: "[&_tbody_tr:nth-child(odd)]:bg-gray-50",
  bordered: "border border-gray-200",
};

/**
 * Consolidated Data Table Section component.
 * Replaces 20+ table variations across templates.
 */
export default function DataTableSection({
  table,
  variant = "striped",
  sectionTitle,
  id,
  className = "",
}: DataTableSectionProps) {
  if (!table?.rows?.length) return null;

  const title = sectionTitle ?? table.title;
  const columns = table.headers ?? table.columns;

  return (
    <section id={id} className={`py-6 ${className}`}>
      {title && <h3 className="heading-3 mb-4">{title}</h3>}

      {table.caption && (
        <p className="text-sm text-gray-600 mb-3">{table.caption}</p>
      )}

      <div className="overflow-x-auto">
        <table
          className={`w-full text-sm ${variantClasses[variant]}`}
        >
          {columns?.length > 0 && (
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                {columns.map((col, idx) => (
                  <th
                    key={idx}
                    className="px-4 py-3 text-left font-semibold text-gray-700"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {table.rows.map((row, rowIdx) => (
              <tr key={rowIdx} className="border-b border-gray-100">
                {row.map((cell, cellIdx) => (
                  <td key={cellIdx} className="px-4 py-3 text-gray-700">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {table.note && (
        <p className="mt-3 text-xs text-gray-500">{table.note}</p>
      )}
    </section>
  );
}
