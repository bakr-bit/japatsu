/**
 * Design System Tokens
 *
 * Centralized design tokens for the Japanese Casino site.
 * These tokens are used in conjunction with CSS custom properties in globals.css.
 */

// =============================================================================
// COLOR PALETTE
// =============================================================================

export const colors = {
  brand: {
    primary: '#4392f1',      // Main brand blue - navigation, CTAs, links
    primaryHover: '#2f80e6', // Darker blue for hover states
    primaryLight: '#dbeafe', // Light blue for backgrounds
    secondary: '#1e40af',    // Footer blue (blue-800)
    accent: '#dc2626',       // Red accent for highlights (red-600)
  },
  surface: {
    dark: '#020617',         // slate-950 - home page background
    light: '#f9fafb',        // gray-50 - inner pages background
    card: '#ffffff',         // Card backgrounds
    elevated: '#f8fafc',     // slate-50 - slightly elevated surfaces
  },
  text: {
    primary: '#1e293b',      // slate-800 - main text
    secondary: '#64748b',    // slate-500 - secondary text
    muted: '#94a3b8',        // slate-400 - muted text
    inverse: '#ffffff',      // White text on dark backgrounds
  },
  border: {
    default: '#e2e8f0',      // slate-200
    light: '#f1f5f9',        // slate-100
    dark: '#cbd5e1',         // slate-300
  },
  status: {
    success: '#16a34a',      // green-600
    warning: '#d97706',      // amber-600
    error: '#dc2626',        // red-600
    info: '#0284c7',         // sky-600
  },
} as const;

// =============================================================================
// BANNER THEME VARIANTS
// =============================================================================

export const bannerThemes = {
  red: { bg: 'bg-rose-200', ring: 'focus-visible:ring-rose-400', bgHex: '#fecdd3' },
  rose: { bg: 'bg-rose-200', ring: 'focus-visible:ring-rose-400', bgHex: '#fecdd3' },
  blue: { bg: 'bg-sky-200', ring: 'focus-visible:ring-sky-400', bgHex: '#bae6fd' },
  sky: { bg: 'bg-sky-200', ring: 'focus-visible:ring-sky-400', bgHex: '#bae6fd' },
  indigo: { bg: 'bg-indigo-200', ring: 'focus-visible:ring-indigo-400', bgHex: '#c7d2fe' },
  violet: { bg: 'bg-violet-200', ring: 'focus-visible:ring-violet-400', bgHex: '#ddd6fe' },
  purple: { bg: 'bg-violet-200', ring: 'focus-visible:ring-violet-400', bgHex: '#ddd6fe' },
  emerald: { bg: 'bg-emerald-200', ring: 'focus-visible:ring-emerald-400', bgHex: '#a7f3d0' },
  green: { bg: 'bg-emerald-200', ring: 'focus-visible:ring-emerald-400', bgHex: '#a7f3d0' },
  teal: { bg: 'bg-teal-200', ring: 'focus-visible:ring-teal-400', bgHex: '#99f6e4' },
  cyan: { bg: 'bg-cyan-200', ring: 'focus-visible:ring-cyan-400', bgHex: '#a5f3fc' },
  amber: { bg: 'bg-amber-200', ring: 'focus-visible:ring-amber-400', bgHex: '#fde68a' },
  orange: { bg: 'bg-amber-200', ring: 'focus-visible:ring-amber-400', bgHex: '#fde68a' },
  slate: { bg: 'bg-gray-100', ring: 'focus-visible:ring-gray-400', bgHex: '#f3f4f6' },
  gray: { bg: 'bg-gray-100', ring: 'focus-visible:ring-gray-400', bgHex: '#f3f4f6' },
} as const;

export type BannerTheme = keyof typeof bannerThemes;

// =============================================================================
// TYPOGRAPHY
// =============================================================================

export const typography = {
  // Headings
  h1: 'text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight',
  h2: 'text-2xl sm:text-3xl font-bold',
  h3: 'text-xl font-bold',
  h4: 'text-lg font-semibold',
  h5: 'text-base font-semibold',
  h6: 'text-sm font-semibold',

  // Body text
  body: 'text-base leading-relaxed',
  bodyLarge: 'text-lg leading-relaxed',
  bodySmall: 'text-sm leading-relaxed',

  // Special
  caption: 'text-xs text-slate-500',
  label: 'text-xs font-semibold uppercase tracking-[0.3em]',
  labelSubtle: 'text-xs font-semibold uppercase tracking-[0.2em] text-slate-500',

  // Japanese-optimized (wider line-height for readability)
  bodyJa: 'text-base leading-[1.8]',
  bodyJaSmall: 'text-sm leading-[1.8]',
} as const;

// =============================================================================
// SPACING (8px base unit)
// =============================================================================

export const spacing = {
  section: 'py-16 md:py-20',
  sectionSm: 'py-10 md:py-12',
  sectionLg: 'py-20 md:py-24',
  container: 'px-4 sm:px-6 lg:px-8',
  cardPadding: 'p-4 sm:p-6',
  inlinePadding: 'px-4 py-2',
} as const;

// =============================================================================
// CONTAINERS
// =============================================================================

export const containers = {
  default: 'mx-auto max-w-screen-xl px-4',
  narrow: 'mx-auto max-w-4xl px-4',
  wide: 'mx-auto max-w-6xl px-4',
  full: 'mx-auto w-full px-4',
} as const;

// =============================================================================
// COMPONENT STYLES
// =============================================================================

export const buttons = {
  primary: 'inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2',
  secondary: 'inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50',
  ghost: 'inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-hover transition',
  danger: 'inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700',
} as const;

export const cards = {
  base: 'rounded-2xl border border-slate-200 bg-white shadow-sm',
  elevated: 'rounded-2xl border border-slate-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200',
  interactive: 'rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-brand/30 hover:shadow-md transition-all duration-200',
  dark: 'rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm',
} as const;

export const badges = {
  default: 'inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700',
  brand: 'inline-flex items-center rounded-full bg-brand px-2.5 py-0.5 text-xs font-medium text-white',
  success: 'inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700',
  warning: 'inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700',
  error: 'inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-700',
} as const;

// =============================================================================
// SHADOWS
// =============================================================================

export const shadows = {
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  card: 'shadow-[0_2px_8px_rgba(0,0,0,0.08)]',
  cardHover: 'shadow-[0_8px_24px_rgba(0,0,0,0.12)]',
} as const;

// =============================================================================
// BORDER RADIUS
// =============================================================================

export const radius = {
  sm: 'rounded-md',
  md: 'rounded-lg',
  lg: 'rounded-xl',
  xl: 'rounded-2xl',
  '2xl': 'rounded-3xl',
  full: 'rounded-full',
} as const;

// =============================================================================
// Z-INDEX SCALE
// =============================================================================

export const zIndex = {
  dropdown: 'z-10',
  sticky: 'z-20',
  fixed: 'z-30',
  modalBackdrop: 'z-40',
  modal: 'z-50',
  popover: 'z-60',
  tooltip: 'z-70',
} as const;

// =============================================================================
// TRANSITIONS
// =============================================================================

export const transitions = {
  fast: 'transition duration-150',
  default: 'transition duration-200',
  slow: 'transition duration-300',
  colors: 'transition-colors duration-200',
  transform: 'transition-transform duration-200',
  all: 'transition-all duration-200',
} as const;
