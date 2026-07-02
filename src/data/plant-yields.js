/**
 * Expected harvest yield per plant for the Garden Yield Estimator.
 * Compiled reference figures (the same category of knowledge as a
 * university extension yield chart, and the same discipline used for
 * plants.js `daysToHarvest`) — not scraped from any third party.
 *
 * `yieldType: 'weight'` — lbPerPlant: [min, max] average total harvest
 *   weight over the plant's productive life.
 * `yieldType: 'ongoing'` — most herbs and cut-and-come-again greens don't
 *   have a meaningful total-weight figure; shown as a qualitative note
 *   instead of a fabricated number.
 */
export const plantYields = {
  tomato: { yieldType: 'weight', lbPerPlant: [8, 12], note: 'Indeterminate cherry tomato, full season, well-fed plant.' },
  zucchini: { yieldType: 'weight', lbPerPlant: [6, 10], note: 'One of the most prolific vegetables — a single plant is often plenty for a family.' },
  cucumber: { yieldType: 'weight', lbPerPlant: [5, 10], note: 'Trellised, well-watered vine.' },
  'bell-pepper': { yieldType: 'weight', lbPerPlant: [3, 5], note: 'Full season, mature plant.' },
  'hot-pepper': { yieldType: 'weight', lbPerPlant: [0.5, 1], note: 'Smaller fruit than bell peppers, but heavy-bearing.' },
  eggplant: { yieldType: 'weight', lbPerPlant: [3, 5], note: 'Full season, mature plant.' },
  'green-bean': { yieldType: 'weight', lbPerPlant: [0.5, 1], note: 'Bush bean; pole beans run somewhat higher over a longer season.' },
  peas: { yieldType: 'weight', lbPerPlant: [0.25, 0.5], note: 'Shelling weight of pods harvested over the season.' },
  kale: { yieldType: 'weight', lbPerPlant: [1, 2], note: 'Cut-and-come-again over the season.' },
  lettuce: { yieldType: 'weight', lbPerPlant: [0.5, 1], note: 'Cut-and-come-again loose-leaf, or one head for head lettuce.' },
  spinach: { yieldType: 'weight', lbPerPlant: [0.25, 0.5], note: 'Cut-and-come-again; bolts in heat.' },
  'swiss-chard': { yieldType: 'weight', lbPerPlant: [1, 2], note: 'Cut-and-come-again over a long season.' },
  'collard-greens': { yieldType: 'weight', lbPerPlant: [1, 2], note: 'Cut-and-come-again over the season.' },
  'bok-choy': { yieldType: 'weight', lbPerPlant: [0.5, 1], note: 'Whole-head harvest.' },
  arugula: { yieldType: 'weight', lbPerPlant: [0.25, 0.5], note: 'Cut-and-come-again, light yield per cutting.' },
  broccoli: { yieldType: 'weight', lbPerPlant: [0.75, 1.5], note: 'Main head plus side shoots over several weeks.' },
  cabbage: { yieldType: 'weight', lbPerPlant: [2, 5], note: 'One head per plant.' },
  carrot: { yieldType: 'weight', lbPerPlant: [0.1, 0.15], note: 'Weight of a single root — carrots are grown many-per-square, not per isolated plant.' },
  beet: { yieldType: 'weight', lbPerPlant: [0.25, 0.5], note: 'Root plus edible greens.' },
  radish: { yieldType: 'weight', lbPerPlant: [0.06, 0.12], note: 'Weight of a single root — radishes are grown many-per-square.' },
  onion: { yieldType: 'weight', lbPerPlant: [0.25, 0.5], note: 'Weight of a single bulb.' },
  garlic: { yieldType: 'weight', lbPerPlant: [0.1, 0.2], note: 'Weight of a single bulb.' },
  'sweet-potato': { yieldType: 'weight', lbPerPlant: [2, 4], note: 'Multiple tubers per plant.' },
  corn: { yieldType: 'weight', lbPerPlant: [1, 1.5], note: '2–3 ears per plant at roughly half a pound each.' },
  pumpkin: { yieldType: 'weight', lbPerPlant: [8, 20], note: '1–2 fruits per plant; pie pumpkins run smaller, carving pumpkins larger.' },
  'winter-squash': { yieldType: 'weight', lbPerPlant: [8, 15], note: '3–5 fruits per vine at 2–4 lbs each for butternut/acorn-type squash.' },
  okra: { yieldType: 'weight', lbPerPlant: [1.5, 3], note: 'Continuous harvest all summer — pick every day or two once pods start.' },
  strawberry: { yieldType: 'weight', lbPerPlant: [0.5, 1], note: 'Established June-bearing plant, full season.' },
  watermelon: { yieldType: 'weight', lbPerPlant: [15, 30], note: '1–2 fruits per vine at 15–25 lbs each for standard (non-icebox) varieties.' },
  blackberry: { yieldType: 'weight', lbPerPlant: [5, 10], note: 'Established cane, year 2 or later.' },
  basil: { yieldType: 'ongoing', note: 'Continuous harvest — regular pinching all season keeps plants productive and bushy.' },
  cilantro: { yieldType: 'ongoing', note: 'Bolts quickly in heat — succession plant for a steady supply rather than one big harvest.' },
  dill: { yieldType: 'ongoing', note: 'Continuous harvest of feathery leaves; let some flower/seed for seed-saving or pickling.' },
  parsley: { yieldType: 'ongoing', note: 'Continuous harvest of outer stems over a long season.' },
  chives: { yieldType: 'ongoing', note: 'Perennial — snip as needed all season, comes back for years.' },
  mint: { yieldType: 'ongoing', note: 'Vigorous perennial — harvest freely; the challenge is containing it, not growing enough.' },
  oregano: { yieldType: 'ongoing', note: 'Perennial — light, continuous harvest.' },
  thyme: { yieldType: 'ongoing', note: 'Perennial — light, continuous harvest.' },
  rosemary: { yieldType: 'ongoing', note: 'Perennial — light, continuous harvest; slow to establish in year one.' },
  sage: { yieldType: 'ongoing', note: 'Perennial — light, continuous harvest.' },
}

export function getPlantYield(plantId) {
  return plantYields[plantId]
}
