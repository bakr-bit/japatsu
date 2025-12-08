import { Star, StarHalf } from "lucide-react";

export type StarsProps = {
  /** Rating score */
  score?: number;
  /** Maximum score (default 5) */
  max?: number;
  /** Size variant */
  size?: "sm" | "md" | "lg";
  /** Show numeric label */
  showLabel?: boolean;
  /** Additional classes */
  className?: string;
};

const sizeClasses = {
  sm: "h-3 w-3",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

/**
 * Consolidated Stars rating component.
 * Replaces 11+ duplicate implementations across templates.
 */
export default function Stars({
  score = 0,
  max = 5,
  size = "md",
  showLabel = false,
  className = "",
}: StarsProps) {
  const safeMax = max && max > 0 ? max : 5;
  const clamped = Math.max(0, Math.min(safeMax, score ?? 0));

  // Convert to 5-star scale for display
  const fiveStarRating = (clamped / safeMax) * 5;
  const full = Math.floor(fiveStarRating);
  const hasHalf = fiveStarRating - full >= 0.5;
  const empty = 5 - full - (hasHalf ? 1 : 0);

  const iconClass = sizeClasses[size];

  return (
    <div
      className={`inline-flex items-center gap-0.5 ${className}`}
      aria-label={`Rating ${clamped} out of ${safeMax}`}
    >
      {/* Full stars */}
      {Array.from({ length: full }).map((_, i) => (
        <Star
          key={`full-${i}`}
          className={`${iconClass} text-yellow-400 fill-yellow-400`}
          aria-hidden="true"
        />
      ))}

      {/* Half star */}
      {hasHalf && (
        <StarHalf
          className={`${iconClass} text-yellow-400 fill-yellow-400`}
          aria-hidden="true"
        />
      )}

      {/* Empty stars */}
      {Array.from({ length: empty }).map((_, i) => (
        <Star
          key={`empty-${i}`}
          className={`${iconClass} text-gray-300`}
          aria-hidden="true"
        />
      ))}

      {/* Optional label */}
      {showLabel && (
        <span className="ml-1.5 text-sm text-gray-600">
          {clamped} / {safeMax}
        </span>
      )}
    </div>
  );
}
