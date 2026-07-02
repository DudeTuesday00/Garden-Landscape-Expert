/**
 * Spring/fall sowing offsets for the ~39 vegetables & herbs in plants.js,
 * expressed as weeks relative to the estimated last spring frost (LF) or
 * first fall frost (FF) — standard home-gardening convention (e.g. "start
 * tomatoes indoors 6-8 weeks before last frost; transplant 1-2 weeks after").
 *
 * Shape per plant id:
 *   startIndoors: [minWeeksBeforeLF, maxWeeksBeforeLF] | null
 *   directSow:    [minWeeksRelToLF,  maxWeeksRelToLF]  | null  (negative = before LF, positive = after)
 *   transplant:   [minWeeksRelToLF,  maxWeeksRelToLF]  | null  (negative = before LF, positive = after)
 *   fallSow:      [minWeeksBeforeFF, maxWeeksBeforeFF] | null  (direct sow or transplant for a fall crop)
 *   fallPlantOnly: true — spring windows don't apply (garlic only)
 *
 * These are compiled reference offsets (the same category of knowledge as a
 * university extension planting chart), not scraped from any third party.
 * Only vegetables/herbs get week-level precision — see hardiness-zone-info.js
 * sibling logic in src/logic/plantingCalendar.js for how every other plant
 * type falls back to a broader seasonal-band estimate from `seasons`.
 */
export const plantingWindows = {
  tomato:          { startIndoors: [6, 8],  directSow: null,        transplant: [1, 2],   fallSow: null },
  zucchini:        { startIndoors: [3, 4],  directSow: [0, 2],      transplant: [0, 1],   fallSow: [10, 12] },
  lettuce:         { startIndoors: [4, 6],  directSow: [-4, 2],     transplant: [-2, 0],  fallSow: [6, 8] },
  'bell-pepper':   { startIndoors: [8, 10], directSow: null,        transplant: [2, 3],   fallSow: null },
  'green-bean':    { startIndoors: null,    directSow: [0, 2],      transplant: null,     fallSow: [10, 12] },
  kale:            { startIndoors: [6, 8],  directSow: [-4, -2],    transplant: [-2, 0],  fallSow: [8, 10] },
  carrot:          { startIndoors: null,    directSow: [-3, 3],     transplant: null,     fallSow: [10, 12] },
  broccoli:        { startIndoors: [6, 8],  directSow: null,        transplant: [-2, 0],  fallSow: [10, 12] },
  spinach:         { startIndoors: null,    directSow: [-6, 2],     transplant: null,     fallSow: [6, 8] },
  'swiss-chard':   { startIndoors: [4, 6],  directSow: [-2, 0],     transplant: [-2, 0],  fallSow: [8, 10] },
  peas:            { startIndoors: null,    directSow: [-6, -2],    transplant: null,     fallSow: [8, 10] },
  radish:          { startIndoors: null,    directSow: [-4, 4],     transplant: null,     fallSow: [4, 6] },
  onion:           { startIndoors: [8, 10], directSow: null,        transplant: [-4, -2], fallSow: null },
  garlic:          { startIndoors: null,    directSow: null,        transplant: null,     fallSow: [4, 6], fallPlantOnly: true },
  beet:            { startIndoors: null,    directSow: [-3, 3],     transplant: null,     fallSow: [8, 10] },
  'hot-pepper':    { startIndoors: [8, 10], directSow: null,        transplant: [2, 3],   fallSow: null },
  'sweet-potato':  { startIndoors: null,    directSow: null,        transplant: [2, 4],   fallSow: null },
  cabbage:         { startIndoors: [6, 8],  directSow: null,        transplant: [-2, 0],  fallSow: [10, 12] },
  eggplant:        { startIndoors: [8, 10], directSow: null,        transplant: [2, 3],   fallSow: null },
  basil:           { startIndoors: [6, 8],  directSow: [1, 3],      transplant: [1, 2],   fallSow: null },
  mint:            { startIndoors: null,    directSow: null,        transplant: [0, 8],   fallSow: null },
  rosemary:        { startIndoors: null,    directSow: null,        transplant: [0, 6],   fallSow: null },
  chives:          { startIndoors: [8, 10], directSow: [-2, 0],     transplant: [-2, 2],  fallSow: null },
  parsley:         { startIndoors: [8, 10], directSow: [-2, 2],     transplant: [-1, 1],  fallSow: [8, 10] },
  watercress:      { startIndoors: null,    directSow: [-4, 2],     transplant: null,     fallSow: [6, 8] },
  thyme:           { startIndoors: null,    directSow: null,        transplant: [0, 6],   fallSow: null },
  oregano:         { startIndoors: null,    directSow: null,        transplant: [0, 6],   fallSow: null },
  cilantro:        { startIndoors: null,    directSow: [-2, 2],     transplant: null,     fallSow: [6, 8] },
  dill:            { startIndoors: null,    directSow: [-2, 2],     transplant: null,     fallSow: [6, 8] },
  sage:            { startIndoors: null,    directSow: null,        transplant: [0, 6],   fallSow: null },
  arugula:         { startIndoors: null,    directSow: [-4, 4],     transplant: null,     fallSow: [4, 6] },
  corn:            { startIndoors: null,    directSow: [1, 3],      transplant: null,     fallSow: null },
  'bok-choy':      { startIndoors: [4, 6],  directSow: [-2, 0],     transplant: [-2, 0],  fallSow: [6, 8] },
  'collard-greens': { startIndoors: [6, 8], directSow: [-2, 0],     transplant: [-2, 0],  fallSow: [8, 10] },
  pumpkin:         { startIndoors: null,    directSow: [1, 2],      transplant: null,     fallSow: null },
  'lemon-balm':    { startIndoors: null,    directSow: null,        transplant: [0, 6],   fallSow: null },
  chamomile:       { startIndoors: [6, 8],  directSow: [-2, 0],     transplant: [-2, 0],  fallSow: null },
  fennel:          { startIndoors: null,    directSow: [-2, 2],     transplant: null,     fallSow: [10, 12] },
  stevia:          { startIndoors: [8, 10], directSow: null,        transplant: [2, 4],   fallSow: null },
}

export function getPlantingWindow(plantId) {
  return plantingWindows[plantId]
}
