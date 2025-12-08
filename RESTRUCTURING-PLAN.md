# Japanese Casino Site Restructuring Plan

**Last Updated**: December 8, 2025

## Overview

Comprehensive refactor to transform this Next.js 15 site into a scalable, maintainable platform with unified content management.

---

## Progress Summary

| Phase | Status | Description |
|-------|--------|-------------|
| 1. Design System | ✅ Done | Tokens, CSS variables, brand colors |
| 2. Component Architecture | ✅ Done | Shared sections, consolidated types |
| 3. Template Refactoring | ✅ Done | SlotTemplate, BonusDetailTemplate reduced |
| 4. Content Registries | 🔄 Partial | Bonuses + Game Shows done |
| 5. Content Extraction | ⏳ Pending | Providers, Payments, Slots |
| 6. Home Page | ⏳ Pending | 1374 lines → ~200 target |

---

## Completed Work

### Phase 1: Design System ✅

**Created**: `/lib/design-tokens.ts`
- Brand colors, typography scale, component styles

**Modified**: `/app/globals.css` (38 → 317 lines)
- CSS custom properties
- Utility classes: `.heading-1` to `.heading-5`, `.body-text`
- Component classes: `.card-base`, `.btn-primary`, `.badge-brand`

**Color Migration**: All `#4392f1` replaced with `bg-brand`/`text-brand`
- 9 component files updated
- 34+ instances replaced

### Phase 2: Component Architecture ✅

**Created**: `/components/sections/`

| Component | Purpose |
|-----------|---------|
| `FAQSection` | FAQ with schema.org JSON-LD |
| `DataTableSection` | Generic tables |
| `CTASection` | Call-to-action buttons |
| `ContentSection` | Educational content |
| `ReviewHeroSection` | Casino review heroes |
| `EditorialSection` | Author reviews |
| `MethodologySection` | Review methodology |
| `GameShowHeroSection` | Game show heroes |
| `AuthorSection` | Expert info cards |
| `ResponsibleGamblingSection` | Gambling warnings |

**Created**: `/components/ui/Stars.tsx`
- Consolidated from 11 duplicate implementations

**Expanded**: `/lib/types.ts` (30 → 400 lines)
- 25+ consolidated types

### Phase 3: Template Refactoring ✅

| Template | Before | After | Reduction |
|----------|--------|-------|-----------|
| `SlotTemplate.tsx` | 932 | 679 | -253 (27%) |
| `BonusDetailTemplate.tsx` | 885 | 831 | -54 (6%) |
| `ReviewDetailTemplate.tsx` | 894 | 652 | -242 (27%) |
| `GameShowDetailTemplate.tsx` | 1081 | 992 | -89 (8%) |

### Phase 4: Content Registries (Partial) ✅

**Created**:
- `/content/data/bonuses/bonuses-map.ts` - 54 bonus pages
- `/content/data/game-shows/game-shows-map.ts` - 16 TypeScript game show pages

**Registry Pattern**:
```typescript
export const bonusesMap: Record<string, BonusPageContent> = { ... };
export const bonusSlugs = Object.keys(bonusesMap);
export function getBonusBySlug(slug: string) { return bonusesMap[slug]; }
```

---

## Remaining Work

### 1. Providers Registry (56 pages)
**Effort**: Medium
**Pattern**: Extract inline `const data: ProvidersPageData` from routes

```
/app/providers/netent/page.tsx (450+ lines inline)
→ /content/providers/netent.tsx + providers-map.ts
```

### 2. Payments Registry (28 pages)
**Effort**: Medium-High
**Pattern**: Convert markdown to TypeScript

```
/NewContent/payment/bitcoin/rewritten.md
→ /content/payments/bitcoin.tsx + payments-map.ts
```

### 3. Slots Registry (217 pages)
**Effort**: High (script recommended)
**Pattern**: Extract inline data from routes

```
/app/slots/starburst/page.tsx (inline data)
→ /content/slots/starburst.tsx + slots-map.ts
```

### 4. Game Shows Markdown Conversion (22 files)
**Effort**: Medium
**Pattern**: Convert remaining markdown to TypeScript

### 5. Home Page Refactoring
**Current**: 1374 lines
**Target**: ~200 lines

---

## Content Loading Patterns

| Type | Files | Current Pattern | Target |
|------|-------|-----------------|--------|
| Reviews | 87 | ✅ TypeScript registry | Reference |
| Bonuses | 54 | ✅ TypeScript registry | Done |
| Game Shows | 16 TS / 22 MD | ⚠️ Partial registry | Unify to TS |
| Providers | 56 | ❌ Inline in routes | Extract |
| Payments | 28 | ❌ Markdown only | Convert |
| Slots | 217 | ❌ Inline in routes | Extract |

---

## Files Created This Session

### New Files
- `/content/data/bonuses/bonuses-map.ts`
- `/content/data/game-shows/game-shows-map.ts`

### Modified Files
- `/components/templates/SlotTemplate.tsx` (refactored)
- `/components/templates/BonusDetailTemplate.tsx` (refactored)
- `/app/globals.css` (fixed Tailwind v4 @apply issue)

---

## Next Steps (Priority Order)

1. **Extract Providers** → Create `/content/providers/` + registry
2. **Convert Payments** → Create `/content/payments/` + registry
3. **Create Slots Script** → Automate 217 file extraction
4. **Convert Game Shows Markdown** → Complete the 22 remaining files
5. **Refactor Home Page** → Extract data, create sections

---

## Technical Notes

### Tailwind v4 Compatibility
Custom CSS classes cannot be used with `@apply` in Tailwind v4. Fixed by inlining utility classes in badge variants.

### Registry API
```typescript
// Get single item
getBonusBySlug('stake-rake-back')

// Get all slugs (for generateStaticParams)
bonusSlugs // ['stake-rake-back', 'christmas', ...]

// Full map
bonusesMap // Record<string, BonusPageContent>
```
