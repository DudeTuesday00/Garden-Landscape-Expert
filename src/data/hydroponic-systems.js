/**
 * Home hydroponic systems reference for the Hydroponic System Chooser tool.
 *
 * Compiled from well-established, widely published hydroponics practice
 * (university extension and CEA programs, plus common home-grower convention),
 * not scraped. Costs are typical starter-setup ranges for a small home build
 * (roughly 1-6 plants) and are approximate — DIY builds run lower, branded
 * kits run higher. Times are rough weekly check-in minutes once running.
 *
 * Fields:
 *  - powerLevel:  0 = none, 1 = one small air pump, 2 = water pump(s) + timer
 *  - spaceMin:    0 windowsill, 1 shelf/counter, 2 tent/bench, 3 greenhouse/garage
 *  - timeLevel:   0 ~10-15 min/wk, 1 ~15-45 min/wk, 2 45+ min/wk
 *  - goalFit:     0-1 suitability for leafy greens/herbs vs fruiting crops
 *  - outageRisk:  what happens if the power or pump fails
 */

export const hydroponicSystems = [
  {
    id: 'kratky',
    name: 'Kratky (Passive)',
    emoji: '🫙',
    tagline: 'A jar or tub of nutrient solution — no pump, no timer, no electricity.',
    difficulty: 'Beginner',
    powerLevel: 0,
    spaceMin: 0,
    timeLevel: 0,
    costMin: 10,
    costMax: 40,
    weeklyMinutes: '10-15',
    goalFit: { greens: 1, fruiting: 0.15 },
    outageRisk: 'None — there is nothing to fail. The main risk is the reservoir running low.',
    pros: [
      'No electricity, pumps, or timers to buy or break',
      'Cheapest possible way to start (a jar or opaque tub is enough)',
      'Silent — fine for a bedroom, office, or windowsill',
    ],
    cons: [
      'Best for short crops — lettuce, herbs, and greens, not long-season fruiting plants',
      'No aeration, so root oxygen depends on leaving an air gap as the water drops',
      'You cannot easily adjust nutrient strength mid-crop without topping up',
    ],
  },
  {
    id: 'wick',
    name: 'Wick System',
    emoji: '🕯️',
    tagline: 'A wick draws nutrient solution up into a grow medium — passive and forgiving.',
    difficulty: 'Beginner',
    powerLevel: 0,
    spaceMin: 0,
    timeLevel: 0,
    costMin: 15,
    costMax: 40,
    weeklyMinutes: '10-15',
    goalFit: { greens: 0.7, fruiting: 0.1 },
    outageRisk: 'None — fully passive.',
    pros: [
      'No power at all, and very hard to over-water',
      'Works well for herbs and small greens in a pot on a windowsill',
    ],
    cons: [
      'A wick cannot deliver enough water for thirsty, large plants',
      'Nutrient salts can build up in the medium — flush it periodically',
    ],
  },
  {
    id: 'dwc',
    name: 'Deep Water Culture (DWC)',
    emoji: '🪣',
    tagline: 'Roots hang in an aerated nutrient reservoir — fast growth for a small investment.',
    difficulty: 'Beginner–Intermediate',
    powerLevel: 1,
    spaceMin: 1,
    timeLevel: 1,
    costMin: 40,
    costMax: 120,
    weeklyMinutes: '20-30',
    goalFit: { greens: 0.9, fruiting: 0.85 },
    outageRisk: 'Moderate — plants survive several hours without the air pump, but a long outage in warm water can cause root problems.',
    pros: [
      'Some of the fastest growth of any home system',
      'A single 5-gallon bucket handles a tomato, pepper, or cucumber',
      'A bucket and an air pump are cheap and easy to find',
    ],
    cons: [
      'Needs an air pump running continuously',
      'Warm reservoirs (above about 72°F) hold less oxygen and invite root rot',
      'Reservoir needs regular pH and strength checks',
    ],
  },
  {
    id: 'nft',
    name: 'Nutrient Film Technique (NFT)',
    emoji: '🌊',
    tagline: 'A thin stream of nutrient solution flows past the roots in sloped channels.',
    difficulty: 'Intermediate',
    powerLevel: 2,
    spaceMin: 2,
    timeLevel: 2,
    costMin: 100,
    costMax: 300,
    weeklyMinutes: '30-60',
    goalFit: { greens: 1, fruiting: 0.1 },
    outageRisk: 'High — with no medium to hold water, roots dry out within hours if the pump stops.',
    pros: [
      'Excellent for lettuce, herbs, and strawberries in a compact footprint',
      'Uses very little water and nutrient solution',
      'Easy to expand by adding channels',
    ],
    cons: [
      'A pump failure can kill a crop quickly',
      'Channels clog with root mass and need slope and flow adjusted just right',
      'Not suited to large, heavy plants like tomatoes',
    ],
  },
  {
    id: 'ebb-flow',
    name: 'Ebb & Flow (Flood & Drain)',
    emoji: '⏱️',
    tagline: 'A tray floods on a timer and drains back — versatile, and holds water between cycles.',
    difficulty: 'Intermediate',
    powerLevel: 2,
    spaceMin: 2,
    timeLevel: 1,
    costMin: 120,
    costMax: 350,
    weeklyMinutes: '20-40',
    goalFit: { greens: 0.75, fruiting: 0.9 },
    outageRisk: 'Moderate — the grow medium stays damp for a while, so a short outage is usually survivable.',
    pros: [
      'Works for almost anything, including larger fruiting plants',
      'The grow medium buffers against short pump or timer failures',
    ],
    cons: [
      'Needs a pump, a timer, and a properly sealed tray and reservoir',
      'Overflow and leaks are the classic failure — set it up carefully',
      'Grow media (clay pebbles) add cost and need rinsing',
    ],
  },
  {
    id: 'drip',
    name: 'Dutch Bucket / Drip',
    emoji: '💦',
    tagline: 'Buckets of media fed by drip lines — built for tomatoes, peppers, and cucumbers.',
    difficulty: 'Intermediate',
    powerLevel: 2,
    spaceMin: 3,
    timeLevel: 1,
    costMin: 100,
    costMax: 300,
    weeklyMinutes: '20-40',
    goalFit: { greens: 0.15, fruiting: 1 },
    outageRisk: 'Moderate — the media in each bucket holds moisture through a short outage.',
    pros: [
      'The standard choice for big fruiting crops',
      'Each plant has its own bucket, so problems stay contained',
    ],
    cons: [
      'Needs the most space and a pump with drip lines',
      'Poor value for leafy greens and herbs',
      'Drip emitters clog and need occasional cleaning',
    ],
  },
  {
    id: 'tower',
    name: 'Vertical Tower',
    emoji: '🗼',
    tagline: 'Plants stacked in a column fed from the top — lots of plants in little floor space.',
    difficulty: 'Beginner–Intermediate',
    powerLevel: 2,
    spaceMin: 1,
    timeLevel: 1,
    costMin: 100,
    costMax: 300,
    weeklyMinutes: '20-40',
    goalFit: { greens: 1, fruiting: 0.2 },
    outageRisk: 'High — many tower designs dry out quickly without the pump.',
    pros: [
      'Grows 20-30 plants in about the floor space of a chair',
      'Ideal for lettuce, herbs, and strawberries',
    ],
    cons: [
      'Needs a pump and a stable, level base',
      'Heavy plants unbalance a tower and do poorly in the small pockets',
      'Top-fed designs can leave lower pockets under-watered',
    ],
  },
]

export function getHydroponicSystem(id) {
  return hydroponicSystems.find((s) => s.id === id)
}

// Plant classes used to decide which systems suit which plants. Keyed by
// plants.js id; anything hydroponic: true but not listed falls back to 'leafy'.
export const plantSystemClass = {
  lettuce: 'leafy', kale: 'leafy', spinach: 'leafy', 'swiss-chard': 'leafy',
  arugula: 'leafy', 'bok-choy': 'leafy', 'collard-greens': 'leafy', watercress: 'leafy',
  radish: 'root',
  basil: 'herb', mint: 'herb', rosemary: 'herb', chives: 'herb', parsley: 'herb',
  thyme: 'herb', oregano: 'herb', cilantro: 'herb', dill: 'herb',
  'lemon-balm': 'herb', stevia: 'herb',
  strawberry: 'berry',
  tomato: 'heavy', 'bell-pepper': 'heavy', 'hot-pepper': 'heavy',
  eggplant: 'heavy', cucumber: 'heavy', broccoli: 'heavy',
}

// system x plant-class compatibility: 'great' | 'ok' | 'no'
export const systemPlantFit = {
  kratky:     { leafy: 'great', herb: 'great', root: 'ok',    berry: 'no',    heavy: 'no' },
  wick:       { leafy: 'ok',    herb: 'great', root: 'no',    berry: 'no',    heavy: 'no' },
  dwc:        { leafy: 'great', herb: 'great', root: 'ok',    berry: 'ok',    heavy: 'great' },
  nft:        { leafy: 'great', herb: 'great', root: 'no',    berry: 'great', heavy: 'no' },
  'ebb-flow': { leafy: 'ok',    herb: 'ok',    root: 'ok',    berry: 'ok',    heavy: 'great' },
  drip:       { leafy: 'no',    herb: 'no',    root: 'no',    berry: 'ok',    heavy: 'great' },
  tower:      { leafy: 'great', herb: 'great', root: 'no',    berry: 'great', heavy: 'no' },
}
