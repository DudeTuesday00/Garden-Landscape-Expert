/**
 * Shared categorical chart palette for the garden tools' visualizations.
 * Validated with the dataviz skill's scripts/validate_palette.js against
 * both light (surface #fcfcfb) and dark (surface #1f2937, this repo's
 * dark:bg-gray-800 card surface) — ALL CHECKS PASS for the 3-slot set below
 * in both modes (CVD deutan separation lands in the 6-8 "warn" band, which
 * is legal per the skill only with secondary encoding — hence every
 * consumer of this palette must also show a label/legend, never color alone).
 *
 * Fixed order — never cycle or reassign per-filter. Extend by appending,
 * never by inserting or reordering.
 */
export const CATEGORICAL = [
  { name: 'garden', hex: '#5eae3d', hexDark: '#4f9e3a', bg: 'bg-[#5eae3d] dark:bg-[#4f9e3a]', fill: 'fill-[#5eae3d] dark:fill-[#4f9e3a]', text: 'text-[#4f8a30] dark:text-[#6cbd57]' },
  { name: 'earth', hex: '#a8742c', hexDark: '#9a6a1e', bg: 'bg-[#a8742c] dark:bg-[#9a6a1e]', fill: 'fill-[#a8742c] dark:fill-[#9a6a1e]', text: 'text-[#8a5f24] dark:text-[#c99a4a]' },
  { name: 'blue', hex: '#2563eb', hexDark: '#3b82f6', bg: 'bg-[#2563eb] dark:bg-[#3b82f6]', fill: 'fill-[#2563eb] dark:fill-[#3b82f6]', text: 'text-[#2563eb] dark:text-[#60a5fa]' },
]

// Status colors are reserved (never reused for a 4th categorical series) —
// same red/amber this repo already uses site-wide for warnings/over-capacity.
export const STATUS = {
  good: { bg: 'bg-[#5eae3d] dark:bg-[#4f9e3a]', fill: 'fill-[#5eae3d] dark:fill-[#4f9e3a]', stroke: 'stroke-[#5eae3d] dark:stroke-[#4f9e3a]', text: 'text-garden-700 dark:text-garden-400', ring: 'border-garden-300 dark:border-garden-700' },
  avoid: { bg: 'bg-red-500 dark:bg-red-600', fill: 'fill-red-500 dark:fill-red-600', stroke: 'stroke-red-500 dark:stroke-red-600', text: 'text-red-700 dark:text-red-400', ring: 'border-red-300 dark:border-red-800' },
  neutral: { bg: 'bg-gray-400 dark:bg-gray-500', fill: 'fill-gray-400 dark:fill-gray-500', stroke: 'stroke-gray-400 dark:stroke-gray-500', text: 'text-gray-600 dark:text-gray-400', ring: 'border-gray-300 dark:border-gray-700' },
}

// Sequential single-hue ramp (garden) for magnitude bars — light->dark reads
// low->high, single hue only, per the dataviz "sequential = one hue" rule.
export const SEQUENTIAL = {
  track: 'bg-garden-100 dark:bg-gray-700',
  fillLow: 'bg-garden-300 dark:bg-garden-800',
  fillHigh: 'bg-garden-600 dark:bg-garden-500',
}

export function categoricalAt(index) {
  return CATEGORICAL[index % CATEGORICAL.length]
}

// Wider tint palette for grid-based tools (bed layout, spacing) where many
// plant types can appear at once — a real garden bed easily has 6-8 kinds
// selected simultaneously, more than a clean pairwise-distinct hue set can
// guarantee. Identity is never carried by these tints alone: every consumer
// pairs a tint with the plant's own emoji in the same cell/legend swatch
// (secondary encoding), so pairwise CVD-adjacency is a soft goal here, not
// the hard requirement it is for the 3-slot CATEGORICAL set above.
export const GRID_TINTS = [
  'bg-garden-100 dark:bg-garden-900/40',
  'bg-earth-100 dark:bg-earth-900/40',
  'bg-blue-100 dark:bg-blue-900/40',
  'bg-purple-100 dark:bg-purple-900/40',
  'bg-pink-100 dark:bg-pink-900/40',
  'bg-amber-100 dark:bg-amber-900/40',
  'bg-teal-100 dark:bg-teal-900/40',
  'bg-red-100 dark:bg-red-900/40',
]

export function gridTintAt(index) {
  return GRID_TINTS[index % GRID_TINTS.length]
}
