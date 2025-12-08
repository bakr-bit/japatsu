import Link from "next/link";
import type { CTAButton } from "@/lib/types";

export type CTASectionProps = {
  /** Primary CTA button */
  primary: CTAButton;
  /** Optional secondary CTA */
  secondary?: CTAButton;
  /** Section title */
  title?: string;
  /** Description text */
  description?: string;
  /** Visual variant */
  variant?: "default" | "highlight" | "dark";
  /** HTML id for anchor linking */
  id?: string;
  /** Additional classes */
  className?: string;
};

const variantClasses = {
  default: "bg-gray-50 border-y border-gray-200",
  highlight: "bg-brand-light border-y border-brand/20",
  dark: "bg-slate-900 text-white",
};

/**
 * Consolidated CTA Section component.
 * Provides consistent call-to-action sections across pages.
 */
export default function CTASection({
  primary,
  secondary,
  title,
  description,
  variant = "default",
  id,
  className = "",
}: CTASectionProps) {
  const isDark = variant === "dark";

  return (
    <section id={id} className={`py-12 ${variantClasses[variant]} ${className}`}>
      <div className="container-default text-center">
        {title && (
          <h2 className={`heading-2 mb-3 ${isDark ? "text-white" : ""}`}>
            {title}
          </h2>
        )}

        {description && (
          <p
            className={`mb-6 max-w-2xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {description}
          </p>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primary.href}
            className="btn-primary"
            target={primary.newTab ? "_blank" : undefined}
            rel={primary.newTab ? "noopener noreferrer" : undefined}
          >
            {primary.badge && (
              <span className="mr-2 badge-brand">{primary.badge}</span>
            )}
            {primary.text}
          </Link>

          {secondary && (
            <Link
              href={secondary.href}
              className={isDark ? "btn-ghost text-white" : "btn-secondary"}
              target={secondary.newTab ? "_blank" : undefined}
              rel={secondary.newTab ? "noopener noreferrer" : undefined}
            >
              {secondary.text}
            </Link>
          )}
        </div>

        {primary.label && (
          <p className={`mt-3 text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            {primary.label}
          </p>
        )}
      </div>
    </section>
  );
}
