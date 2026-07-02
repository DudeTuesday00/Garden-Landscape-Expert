/**
 * Companion planting relationships for the Companion Planting Checker.
 * Compiled from widely-published, well-established companion planting
 * knowledge (the same category of horticultural convention as a Rodale's-
 * or extension-style companion chart — not proprietary to any source),
 * grounded in the mechanisms already named in guide-content/companion-planting.js's
 * stub intro (Three Sisters, allium-carrot fly deterrence, fennel
 * allelopathy, dill/carrot/tomato cautions).
 *
 * Each entry is one unordered pairing — checkCompanionship() below checks
 * both directions, so a pair only needs to be listed once.
 */
export const companionPairings = [
  // ─── Good companions ────────────────────────────────────────────────
  { a: 'tomato', b: 'basil', type: 'good', reason: 'Classic kitchen and garden pairing — basil thrives in the same warm, sunny conditions tomatoes need, and many gardeners report reduced pest pressure when grown together.' },
  { a: 'tomato', b: 'carrot', type: 'good', reason: "Carrots' deep, loosening roots improve soil structure around tomato roots without competing for the same growing space." },
  { a: 'tomato', b: 'onion', type: 'good', reason: "Alliums' strong scent helps confuse and deter many common tomato pests." },
  { a: 'tomato', b: 'garlic', type: 'good', reason: "Alliums' strong scent helps confuse and deter many common tomato pests." },
  { a: 'tomato', b: 'chives', type: 'good', reason: "Alliums' strong scent helps confuse and deter many common tomato pests." },
  { a: 'carrot', b: 'onion', type: 'good', reason: 'Onion scent genuinely reduces carrot fly pressure through scent confusion — one of the better-supported companion planting effects.' },
  { a: 'carrot', b: 'garlic', type: 'good', reason: 'Allium scent genuinely reduces carrot fly pressure through scent confusion — one of the better-supported companion planting effects.' },
  { a: 'carrot', b: 'chives', type: 'good', reason: 'Allium scent genuinely reduces carrot fly pressure through scent confusion — one of the better-supported companion planting effects.' },
  { a: 'carrot', b: 'lettuce', type: 'good', reason: 'Lettuce is shallow-rooted and shade-tolerant enough to intercrop between carrot rows without competing.' },
  { a: 'carrot', b: 'peas', type: 'good', reason: 'Peas fix nitrogen in the soil, benefiting the heavier-feeding carrot planted nearby.' },
  { a: 'corn', b: 'green-bean', type: 'good', reason: 'The Three Sisters combination — corn provides a living trellis for climbing beans.' },
  { a: 'corn', b: 'pumpkin', type: 'good', reason: 'The Three Sisters combination — squash leaves shade the soil, retaining moisture and suppressing weeds around corn.' },
  { a: 'corn', b: 'zucchini', type: 'good', reason: 'Squash-family leaves shade the soil around corn, retaining moisture and suppressing weeds.' },
  { a: 'green-bean', b: 'pumpkin', type: 'good', reason: 'Nitrogen-fixing beans benefit the heavy-feeding squash sharing the bed, in the classic Three Sisters pattern.' },
  { a: 'green-bean', b: 'zucchini', type: 'good', reason: 'Nitrogen-fixing beans benefit the heavy-feeding squash sharing the bed.' },
  { a: 'green-bean', b: 'cucumber', type: 'good', reason: 'Classic pairing — beans fix nitrogen that benefits the heavier-feeding cucumber.' },
  { a: 'green-bean', b: 'carrot', type: 'good', reason: 'Compatible growth habits and root depths, with beans adding nitrogen to the shared bed.' },
  { a: 'broccoli', b: 'dill', type: 'good', reason: "Dill's flowers attract parasitic wasps and other predatory insects that prey on cabbage worms and other brassica pests." },
  { a: 'cabbage', b: 'dill', type: 'good', reason: "Dill's flowers attract parasitic wasps and other predatory insects that prey on cabbage worms and other brassica pests." },
  { a: 'kale', b: 'dill', type: 'good', reason: "Dill's flowers attract parasitic wasps and other predatory insects that prey on brassica pests." },
  { a: 'cabbage', b: 'chamomile', type: 'good', reason: 'A classic pairing — chamomile is reputed to improve the growth and flavor of nearby brassicas.' },
  { a: 'cucumber', b: 'radish', type: 'good', reason: 'Radish is a classic trap crop for cucumber beetles, drawing pest pressure away from the cucumber.' },
  { a: 'lettuce', b: 'chives', type: 'good', reason: "Chives' scent helps deter aphids, a common pest on tender lettuce leaves." },
  { a: 'bell-pepper', b: 'basil', type: 'good', reason: 'Classic pairing — basil is reputed to improve pepper flavor and help repel common pests.' },
  { a: 'hot-pepper', b: 'basil', type: 'good', reason: 'Classic pairing — basil is reputed to help repel common pepper pests.' },
  { a: 'eggplant', b: 'green-bean', type: 'good', reason: 'Beans are thought to help repel Colorado potato beetle, which also attacks eggplant.' },
  { a: 'radish', b: 'spinach', type: 'good', reason: 'Fast-growing radish is a compatible, non-competing filler crop between slower-growing spinach.' },
  { a: 'beet', b: 'onion', type: 'good', reason: 'Compatible growth habits and non-competing root structures.' },
  { a: 'beet', b: 'cabbage', type: 'good', reason: "Beet's mineral-accumulating roots and the brassica's different nutrient needs make this a low-competition pairing." },

  // ─── Plants to keep apart ───────────────────────────────────────────
  { a: 'green-bean', b: 'onion', type: 'avoid', reason: 'Alliums are widely reported to stunt the growth of beans and other legumes when planted nearby.' },
  { a: 'green-bean', b: 'garlic', type: 'avoid', reason: 'Alliums are widely reported to stunt the growth of beans and other legumes when planted nearby.' },
  { a: 'green-bean', b: 'chives', type: 'avoid', reason: 'Alliums are widely reported to stunt the growth of beans and other legumes when planted nearby.' },
  { a: 'peas', b: 'onion', type: 'avoid', reason: 'Alliums are widely reported to stunt the growth of peas and other legumes when planted nearby.' },
  { a: 'peas', b: 'garlic', type: 'avoid', reason: 'Alliums are widely reported to stunt the growth of peas and other legumes when planted nearby.' },
  { a: 'carrot', b: 'dill', type: 'avoid', reason: 'Same family (Apiaceae) — the two can cross-pollinate if allowed to flower, and dill can outcompete young carrots.' },
  { a: 'tomato', b: 'dill', type: 'avoid', reason: 'Dill is beneficial to tomatoes when young, but mature, flowering dill is reported to inhibit tomato growth.' },
  { a: 'tomato', b: 'corn', type: 'avoid', reason: 'Tomato and corn share a major pest (corn earworm / tomato fruitworm is the same insect), so planting them together concentrates pest pressure.' },
  { a: 'tomato', b: 'cabbage', type: 'avoid', reason: 'Commonly cited as competing for similar soil nutrients; better given separate space.' },
  { a: 'tomato', b: 'broccoli', type: 'avoid', reason: 'Commonly cited as competing for similar soil nutrients; better given separate space.' },
  { a: 'tomato', b: 'fennel', type: 'avoid', reason: 'Fennel is allelopathic — it releases compounds that inhibit the germination and growth of many neighboring plants, tomato included.' },
  { a: 'green-bean', b: 'fennel', type: 'avoid', reason: 'Fennel is allelopathic — it releases compounds that inhibit the germination and growth of most neighboring vegetables.' },
  { a: 'cabbage', b: 'fennel', type: 'avoid', reason: 'Fennel is allelopathic — it releases compounds that inhibit the germination and growth of most neighboring vegetables.' },
  { a: 'peas', b: 'fennel', type: 'avoid', reason: 'Fennel is allelopathic — it releases compounds that inhibit the germination and growth of most neighboring vegetables.' },
]

/**
 * Looks up the relationship between two plant ids, checking both
 * directions since pairings are stored once as unordered pairs.
 * Returns null (neutral / no documented relationship) rather than
 * guessing when no entry matches.
 */
export function checkCompanionship(idA, idB) {
  if (idA === idB) return null
  return (
    companionPairings.find((p) => (p.a === idA && p.b === idB) || (p.a === idB && p.b === idA)) || null
  )
}

/** All plant ids that appear in at least one pairing — drives the picker UI. */
export const companionCheckerPlantIds = [
  ...new Set(companionPairings.flatMap((p) => [p.a, p.b])),
]
