/**
 * Compost material C:N data for the Compost Calculator — copied directly
 * from the "browns vs. greens" table in guide-content/organic-fertilizing.js
 * (Section: "The Carbon-to-Nitrogen Ratio: The Most Important Compost
 * Concept") so the calculator's numbers match what the guide teaches.
 */
export const compostMaterials = [
  { id: 'dry-leaves', name: 'Dry Leaves', category: 'brown', cnRatio: '60–80:1', notes: 'Most abundant fall material; shred for faster breakdown' },
  { id: 'straw', name: 'Straw (not hay)', category: 'brown', cnRatio: '80–100:1', notes: 'Straw has no seeds; hay does — know the difference' },
  { id: 'cardboard', name: 'Cardboard (plain)', category: 'brown', cnRatio: '350:1', notes: 'Remove tape and staples; shred or wet first' },
  { id: 'wood-chips', name: 'Wood Chips', category: 'brown', cnRatio: '400:1', notes: 'Use sparingly in hot compost; best as mulch or slow pile' },
  { id: 'paper', name: 'Paper (unbleached)', category: 'brown', cnRatio: '150–200:1', notes: 'Shred first; avoid glossy or colored inks' },
  { id: 'sawdust', name: 'Sawdust (untreated)', category: 'brown', cnRatio: '300–500:1', notes: 'Never use treated/painted wood sawdust' },
  { id: 'grass-clippings', name: 'Fresh Grass Clippings', category: 'green', cnRatio: '15–20:1', notes: 'Apply in thin layers or mix in; thick layers mat and smell' },
  { id: 'kitchen-scraps', name: 'Kitchen Scraps (fruit/veg)', category: 'green', cnRatio: '15–20:1', notes: 'Bury in pile center to deter pests' },
  { id: 'coffee-grounds', name: 'Coffee Grounds', category: 'green', cnRatio: '20:1', notes: 'Myth: not strongly acidic; near-neutral pH when wet' },
  { id: 'chicken-manure', name: 'Fresh Manure (chicken)', category: 'green', cnRatio: '7:1', notes: 'Hot-compost first; never apply raw to edible plants' },
  { id: 'cow-horse-manure', name: 'Fresh Manure (cow/horse)', category: 'green', cnRatio: '20:1', notes: 'Best composted; may contain weed seeds' },
  { id: 'garden-trimmings', name: 'Garden Trimmings', category: 'green', cnRatio: '20–30:1', notes: 'Avoid diseased plant material in cool piles' },
  { id: 'seaweed', name: 'Seaweed / Kelp', category: 'green', cnRatio: '19:1', notes: 'Excellent; rinse salt water off if collected fresh' },
  { id: 'hair-wool', name: 'Hair / Wool', category: 'green', cnRatio: '4–6:1', notes: 'Works well; breaks down slowly' },
]

// Target brown:green ratio by VOLUME for hot composting, per the guide's
// pile-building instructions ("roughly 3:1 brown-to-green ratio by volume").
export const BROWN_GREEN_VOLUME_RATIO = { browns: 3, greens: 1 }

export function getCompostMaterial(id) {
  return compostMaterials.find((m) => m.id === id)
}
