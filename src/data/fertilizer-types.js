/**
 * Fertilizer & Amendment Catalog for the Fertilizer Calculator
 *
 * This file defines the available fertilizers and amendments used by the calculator.
 * Philosophy: Organic-first, soil-health focused, practical rates for home gardeners.
 */

export const fertilizerTypes = [
  // === ORGANIC SOIL BUILDERS (Foundation) ===
  {
    id: 'compost',
    name: 'Finished Compost',
    type: 'organic',
    category: 'soil-builder',
    npk: 'Varies (typically 1-1-1 to 2-2-2)',
    description: 'The single best long-term amendment. Improves soil structure, water retention, and feeds soil biology.',
    whenToUse: 'At planting and as annual top-dressing',
    applicationNotes: 'Best all-around choice. Use generously.',
  },
  {
    id: 'worm-castings',
    name: 'Worm Castings',
    type: 'organic',
    category: 'soil-builder',
    npk: '1-0-0 to 2-1-1 (plus beneficial microbes)',
    description: 'Mild, slow-release fertilizer packed with microbes and plant growth hormones. Excellent for containers and seedlings.',
    whenToUse: 'Mix into potting soil or top-dress established plants',
    applicationNotes: 'Very gentle — safe to use frequently.',
  },

  // === NITROGEN SOURCES (Leafy Growth) ===
  {
    id: 'blood-meal',
    name: 'Blood Meal',
    type: 'organic',
    category: 'nitrogen',
    npk: '12-0-0',
    description: 'Fast-acting organic nitrogen source. Great for heavy-feeding leafy vegetables and correcting nitrogen deficiency.',
    whenToUse: 'Early season for leafy growth; side-dress mid-season',
    applicationNotes: 'Use sparingly — too much causes lush growth with few flowers/fruit.',
  },
  {
    id: 'fish-emulsion',
    name: 'Fish Emulsion / Fish Fertilizer',
    type: 'organic',
    category: 'nitrogen',
    npk: '5-1-1 (varies by brand)',
    description: 'Liquid organic fertilizer. Fast-acting nitrogen plus micronutrients. Excellent for containers and quick green-up.',
    whenToUse: 'Every 2–4 weeks during active growth',
    applicationNotes: 'Dilute according to label. Smells strong but dissipates.',
  },

  // === PHOSPHORUS SOURCES (Roots, Flowers, Fruit) ===
  {
    id: 'bone-meal',
    name: 'Bone Meal',
    type: 'organic',
    category: 'phosphorus',
    npk: '3-15-0 (or 4-12-0)',
    description: 'Excellent source of phosphorus and calcium. Promotes strong root systems and flowering/fruiting.',
    whenToUse: 'At planting for bulbs, perennials, fruit trees, and tomatoes',
    applicationNotes: 'Especially valuable for flowering and fruiting plants.',
  },
  {
    id: 'rock-phosphate',
    name: 'Rock Phosphate',
    type: 'organic',
    category: 'phosphorus',
    npk: '0-3-0 (very slow release)',
    description: 'Long-term phosphorus source. Releases over several years.',
    whenToUse: 'Work into soil at planting for long-term beds',
    applicationNotes: 'Best used preventatively in new garden beds.',
  },

  // === POTASSIUM & MICRONUTRIENTS ===
  {
    id: 'kelp-meal',
    name: 'Kelp / Seaweed Meal',
    type: 'organic',
    category: 'potassium',
    npk: '1-0-2 (plus trace minerals)',
    description: 'Rich in potassium, trace minerals, and growth hormones. Improves stress resistance and fruit quality.',
    whenToUse: 'Side-dress or as tea during flowering/fruiting stage',
    applicationNotes: 'Great for tomatoes, peppers, fruit trees, and roses.',
  },
  {
    id: 'greensand',
    name: 'Greensand',
    type: 'organic',
    category: 'potassium',
    npk: '0-0-3 (plus iron and trace minerals)',
    description: 'Slow-release potassium and iron source. Good for clay soils and iron-deficient plants.',
    whenToUse: 'Incorporate into soil or top-dress',
    applicationNotes: 'Especially useful in the Southeast and Midwest.',
  },

  // === CONTAINER / LIQUID FEEDING ===
  {
    id: 'compost-tea',
    name: 'Compost Tea',
    type: 'organic',
    category: 'liquid',
    npk: 'Varies',
    description: 'Brewed liquid fertilizer made from compost or worm castings. Feeds both plants and soil microbes.',
    whenToUse: 'Every 1–3 weeks as a soil drench or foliar spray',
    applicationNotes: 'Best used fresh. Excellent for containers.',
  },

  // === SYNTHETIC OPTIONS (Secondary) ===
  {
    id: 'balanced-granular',
    name: 'Balanced Granular (10-10-10 or 5-5-5)',
    type: 'synthetic',
    category: 'synthetic',
    npk: '10-10-10 or 5-5-5',
    description: 'All-purpose synthetic fertilizer. Provides quick N-P-K in equal ratios.',
    whenToUse: 'Early season or when soil test shows general deficiency',
    applicationNotes: 'Use at half the recommended rate if combining with organic matter.',
  },
  {
    id: 'bloom-booster',
    name: 'Bloom Booster (5-10-10 or 10-30-20)',
    type: 'synthetic',
    category: 'synthetic',
    npk: 'Varies (high phosphorus)',
    description: 'Higher phosphorus formula designed to encourage flowering and fruit set.',
    whenToUse: 'When plants begin flowering or setting fruit',
    applicationNotes: 'Use only after plants have established good vegetative growth.',
  },
  {
    id: 'slow-release',
    name: 'Slow-Release Granular (Osmocote-style)',
    type: 'synthetic',
    category: 'synthetic',
    npk: 'Varies (e.g., 14-14-14)',
    description: 'Coated synthetic fertilizer that releases over 3–6 months. Convenient for containers.',
    whenToUse: 'Mix into potting soil at planting or top-dress containers',
    applicationNotes: 'Reduces the need for frequent liquid feeding.',
  },

  // === HYDROPONICS NUTRIENTS ===
  {
    id: 'masterblend',
    name: 'Masterblend 4-18-38 + Calcium Nitrate + Epsom Salt',
    type: 'synthetic',
    category: 'hydroponic',
    npk: '5-11-26 (custom mixed)',
    description: 'The gold standard for most hydroponic systems. Excellent all-purpose formula used by many commercial growers.',
    whenToUse: 'Primary nutrient solution in recirculating or drain-to-waste systems',
    applicationNotes: 'Typical mix: 1 tsp Masterblend + 1 tsp Calcium Nitrate + 0.5 tsp Epsom Salt per gallon. Adjust based on EC.',
  },
  {
    id: 'general-hydroponics-flora',
    name: 'General Hydroponics Flora Series (FloraGro + FloraBloom + FloraMicro)',
    type: 'synthetic',
    category: 'hydroponic',
    npk: 'Varies by ratio',
    description: 'Popular 3-part liquid nutrient system. Highly customizable for different growth stages.',
    whenToUse: 'Vegetative (more Gro), Transition, and Flowering/Fruiting (more Bloom)',
    applicationNotes: 'Follow the GH feeding chart for your plant type. Common starting ratio for veg: 3-2-1 (Gro-Bloom-Micro).',
  },
  {
    id: 'hydro-cal-mag',
    name: 'Cal-Mag Supplement (Calcium + Magnesium)',
    type: 'synthetic',
    category: 'hydroponic',
    npk: 'N/A (secondary nutrients)',
    description: 'Essential in hydroponics and coco coir to prevent blossom end rot and interveinal chlorosis.',
    whenToUse: 'Add to almost every nutrient solution, especially with RO water or high-light conditions',
    applicationNotes: 'Usually 1–2 ml per gallon alongside base nutrients. Critical for tomatoes, peppers, and cannabis.',
  },
  {
    id: 'hydroponic-silicic-acid',
    name: 'Potassium Silicate / Silicic Acid',
    type: 'synthetic',
    category: 'hydroponic',
    npk: '0-0-0 (with silica)',
    description: 'Strengthens cell walls, improves disease resistance, and helps plants handle stress in hydro systems.',
    whenToUse: 'Add to nutrient solution during vegetative growth',
    applicationNotes: 'Use a stabilized form (like AgSil or Rhino Skin). Add before pH adjustment.',
  },
]

/**
 * Helper to get a fertilizer by ID
 */
export function getFertilizerById(id) {
  return fertilizerTypes.find(f => f.id === id)
}
