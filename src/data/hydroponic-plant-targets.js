/**
 * Maps hydroponic-compatible plants (plants.js, hydroponic: true) to the crop
 * groups in hydroponic-targets.js, so plant pages can show pH, nutrient
 * strength (EC), and light targets without inventing per-plant numbers.
 *
 *  - 'exact': the crop is literally one of the groups in hydroponic-targets.js
 *  - 'group': the plant is a close relative treated as part of a broader group
 *             (e.g. spinach as a leafy green). The page labels these as typical
 *             group ranges, not plant-specific figures.
 *  - unlisted plants (radish, broccoli, eggplant, strawberry, and the woody
 *    Mediterranean herbs rosemary, thyme, oregano, plus stevia) deliberately
 *    get no EC/light target: the site has no sourced range for them, so the
 *    page shows only system fit, days to harvest, and the plant-specific notes.
 */
export const plantTargetGroup = {
  lettuce: { group: 'leafy', basis: 'exact', label: 'lettuce' },
  spinach: { group: 'leafy', basis: 'group', label: 'leafy greens' },
  arugula: { group: 'leafy', basis: 'group', label: 'leafy greens' },
  'swiss-chard': { group: 'leafy', basis: 'group', label: 'leafy greens' },
  'bok-choy': { group: 'leafy', basis: 'group', label: 'leafy greens' },
  kale: { group: 'leafy', basis: 'group', label: 'leafy greens' },
  'collard-greens': { group: 'leafy', basis: 'group', label: 'leafy greens' },
  watercress: { group: 'leafy', basis: 'group', label: 'leafy greens' },

  basil: { group: 'herbs', basis: 'exact', label: 'basil' },
  mint: { group: 'herbs', basis: 'group', label: 'herbs' },
  chives: { group: 'herbs', basis: 'group', label: 'herbs' },
  parsley: { group: 'herbs', basis: 'group', label: 'herbs' },
  cilantro: { group: 'herbs', basis: 'group', label: 'herbs' },
  dill: { group: 'herbs', basis: 'group', label: 'herbs' },
  'lemon-balm': { group: 'herbs', basis: 'group', label: 'herbs' },

  tomato: { group: 'tomato', basis: 'exact', label: 'tomatoes' },
  'hot-pepper': { group: 'hot-pepper', basis: 'exact', label: 'hot peppers' },
  'bell-pepper': { group: 'bell-pepper', basis: 'exact', label: 'bell peppers' },
  cucumber: { group: 'cucumber', basis: 'exact', label: 'cucumbers' },
}

// Where each hydroponic system is covered in depth on the site.
export const systemGuideHref = {
  kratky: '/guides/kratky-method/',
  wick: '/guides/wick-system-hydroponics/',
  dwc: '/guides/deep-water-culture/',
  nft: '/guides/nft-hydroponics/',
  'ebb-flow': '/guides/ebb-and-flow-hydroponics/',
  drip: '/guides/dutch-bucket-hydroponics/',
  tower: '/guides/vertical-hydroponic-towers/',
}

// The general pH range stated across the hydroponics guides and the Fertilizer
// Calculator; used when a plant has no crop-specific range.
export const GENERAL_HYDRO_PH = [5.5, 6.5]
