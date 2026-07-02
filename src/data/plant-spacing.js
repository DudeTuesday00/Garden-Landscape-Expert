/**
 * Square Foot Gardening spacing data for the Plant Spacing Planner.
 * Most entries are copied directly from guide-content/square-foot-gardening.js's
 * "Complete Plant Spacing Reference" tables so the calculator's numbers
 * match what the guide teaches. Keyed to plants.js ids — only plants that
 * exist in our 150-plant database are included (a few guide entries like
 * kohlrabi and leeks aren't yet in plants.js and are omitted rather than
 * guessed).
 *
 * A few entries (marked in their own comment below) extend beyond that
 * guide's table to well-established, widely-published Square Foot
 * Gardening conventions (e.g. Mel Bartholomew's original 4-per-square
 * strawberry spacing) for crops the guide's table doesn't cover — same
 * discipline as the rest of the site's compiled reference data, not
 * scraped from any third party.
 *
 * perSqFt: plants per square foot when >= 1 (e.g. 9 = nine plants share
 * one square). When < 1, the plant needs multiple contiguous squares —
 * 0.25 means one plant occupies 4 squares, 0.5 means one plant occupies
 * 2 squares.
 */
export const plantSpacing = {
  tomato: { perSqFt: 0.5, note: 'Cherry tomato spacing — train vertically on a strong cage (6 ft minimum). A large slicing/beefsteak variety needs 2–4 contiguous squares instead.' },
  'bell-pepper': { perSqFt: 1, note: 'Stays compact — fits a single square. Stake if heavily loaded.' },
  eggplant: { perSqFt: 1, note: 'Standard varieties need one square; dwarf varieties can share.' },
  zucchini: { perSqFt: 0.25, note: 'One of the largest SFG plants — plan 4 contiguous squares.' },
  'winter-squash': { perSqFt: 0.25, note: 'Same footprint as zucchini — plan 4 contiguous squares for the vine to sprawl.' },
  okra: { perSqFt: 1, note: 'Grows tall and upright like a small tree — one plant per square, same as kale or broccoli.' },
  cucumber: { perSqFt: 1, note: 'Must be trellised vertically — non-negotiable in SFG.' },
  'green-bean': { perSqFt: 9, note: 'The most productive use of a square foot. Succession plant every 2–3 weeks.' },
  peas: { perSqFt: 8, note: 'Train up a trellis on the north side of the bed.' },
  corn: { perSqFt: 4, note: 'Requires a block of at least 16 plants (4×4 squares) for wind pollination.' },
  lettuce: { perSqFt: 4, note: 'Leaf lettuce — cut-and-come-again. One square feeds a family of 4 weekly salads.' },
  spinach: { perSqFt: 9, note: 'Cool-season. Harvest baby (30 days) or full leaves (45 days). Bolts in heat.' },
  arugula: { perSqFt: 6, note: 'Fast-maturing (30–40 days), cut-and-come-again. Plant spring and fall.' },
  kale: { perSqFt: 1, note: 'Large plant — one planting produces from spring through winter in mild climates.' },
  broccoli: { perSqFt: 1, note: 'After the main head, side shoots keep producing for weeks.' },
  carrot: { perSqFt: 16, note: "Mel's Mix is ideal — deep, loose, stone-free. Thin ruthlessly to 3-inch spacing." },
  radish: { perSqFt: 16, note: 'The fastest SFG crop (22–30 days) — ideal to fill gaps between slower plants.' },
  beet: { perSqFt: 9, note: 'Each seed is a cluster of 2–3 — thin to one plant per 4-inch space.' },
  garlic: { perSqFt: 6, note: 'Plant individual cloves in fall (Oct–Nov). High value per square foot.' },
  chives: { perSqFt: 4, note: 'Hardy perennial — one planting lasts many years.' },
  mint: { perSqFt: 1, note: 'MUST be contained — grow in a pot buried to its rim, or it takes over the bed.' },
  thyme: { perSqFt: 1, note: 'Hardy perennial — position at bed ends/edges as a permanent anchor point.' },
  oregano: { perSqFt: 1, note: 'Hardy perennial — position at bed ends/edges as a permanent anchor point.' },
  rosemary: { perSqFt: 1, note: 'Hardy perennial — position at bed ends/edges as a permanent anchor point.' },
  sage: { perSqFt: 1, note: 'Hardy perennial — position at bed ends/edges as a permanent anchor point.' },
  basil: { perSqFt: 4, note: '1/sq ft for a large plant; 4/sq ft for regular pinching harvest.' },
  cilantro: { perSqFt: 9, note: 'Quick to bolt in heat — succession plant every 2–3 weeks in spring and fall.' },
  dill: { perSqFt: 9, note: "Tall — plant on the bed's north side so it doesn't shade others." },
  strawberry: { perSqFt: 4, note: "Mel Bartholomew's original SFG spacing — a classic, well-established Square Foot Gardening crop." },
  watermelon: { perSqFt: 0.125, note: 'One of the largest SFG plants — plan 8 contiguous squares, and trellis vertically with fruit slings to support the weight.' },
  blackberry: { perSqFt: 1 / 12, note: 'A perennial cane fruit best grown outside the annual grid on its own dedicated trellis — this converts standard 3–4 ft row spacing into an approximate square-foot figure, not a true SFG density.' },
}

export function getPlantSpacing(plantId) {
  return plantSpacing[plantId]
}
