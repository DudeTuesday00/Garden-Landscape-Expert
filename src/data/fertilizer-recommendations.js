/**
 * Fertilizer Recommendations Engine
 *
 * This file contains the logic and data for the Fertilizer Calculator.
 * Philosophy:
 *   - Soil health first (compost + organic matter)
 *   - Match fertilizer to plant needs (heavy vs light feeders)
 *   - Give both organic and secondary synthetic options
 *   - Provide practical, advanced schedules with timing
 */

import { fertilizerTypes } from './fertilizer-types'

/**
 * Plant type categories (matching plants.js + a few practical groupings)
 */
export const plantTypeOptions = [
  { id: 'vegetable', label: 'Vegetables', emoji: '🥕' },
  { id: 'herb',      label: 'Herbs',      emoji: '🌿' },
  { id: 'flower',    label: 'Flowers',    emoji: '🌸' },
  { id: 'fruit',     label: 'Fruit (Trees & Shrubs)', emoji: '🍎' },
  { id: 'tree',      label: 'Shade & Ornamental Trees', emoji: '🌳' },
  { id: 'shrub',     label: 'Shrubs',     emoji: '🌲' },
  { id: 'vine',      label: 'Vines & Climbers', emoji: '🍇' },
  { id: 'bulb',      label: 'Bulbs',      emoji: '🌷' },
  { id: 'grass',     label: 'Ornamental Grasses', emoji: '🌾' },
  { id: 'succulent', label: 'Succulents & Cacti', emoji: '🪴' },
  { id: 'fern',      label: 'Ferns',      emoji: '🌿' },
  { id: 'groundcover', label: 'Groundcovers', emoji: '🌱' },
]

/**
 * Size / Growth Stage options
 */
export const growthStageOptions = [
  { id: 'seedling',     label: 'Seedling or Recent Transplant' },
  { id: 'young',        label: 'Young / Establishing Plant' },
  { id: 'mature',       label: 'Mature / Established Plant' },
]

/**
 * Physical size measurement options (for more advanced input)
 */
export const physicalSizeOptions = [
  { id: 'small-container',   label: 'Small Container (1–3 gallon)' },
  { id: 'medium-container',  label: 'Medium Container (5–10 gallon)' },
  { id: 'large-container',   label: 'Large Container (15+ gallon)' },
  { id: 'per-plant',         label: 'Individual Plant (in-ground)' },
  { id: 'small-bed',         label: 'Small Bed (< 10 sq ft)' },
  { id: 'medium-bed',        label: 'Medium Bed (10–50 sq ft)' },
  { id: 'large-bed',         label: 'Large Bed (50+ sq ft)' },
]

/**
 * Main recommendation generator
 * Returns an array of fertilizer recommendations with amounts and schedule.
 */
export function getFertilizerRecommendations({
  plantType,
  growthStage,
  physicalSize,
  growingMethod = 'in-ground', // 'in-ground' | 'container' | 'hydroponic'
}) {
  const recommendations = []

  // === UNIVERSAL BASE RECOMMENDATION (Soil Health First) ===
  recommendations.push({
    fertilizerId: 'compost',
    priority: 'essential',
    amount: getCompostAmount(physicalSize, growingMethod),
    unit: 'per application',
    timing: 'At planting + annually in spring or fall',
    notes: 'The foundation of healthy plants. Improves soil structure and feeds microbes. Apply 1–3 inches as a top-dress or mix into planting hole.',
    why: 'Most “fertilizer problems” are actually soil problems. Compost fixes the root cause.',
  })

  // === HYDROPONICS RECOMMENDATIONS ===
  if (growingMethod === 'hydroponic') {
    recommendations.push({
      fertilizerId: 'masterblend',
      priority: 'high',
      amount: '1 tsp Masterblend + 1 tsp Calcium Nitrate + ½ tsp Epsom Salt per gallon of water',
      unit: '',
      timing: 'Mix fresh nutrient solution every 7–14 days (or when EC drops significantly)',
      notes: 'This is the most popular and reliable general-purpose hydroponic formula for vegetables, herbs, and many flowers.',
      why: 'Provides balanced N-P-K plus calcium and magnesium in a stable, cost-effective form.',
    })

    recommendations.push({
      fertilizerId: 'hydro-cal-mag',
      priority: 'high',
      amount: '1–2 ml per gallon (or follow product label)',
      unit: '',
      timing: 'Add to every nutrient solution change',
      notes: 'Especially important when using RO or distilled water, or under high light/heat.',
      why: 'Prevents common hydro deficiencies like blossom end rot and tip burn.',
    })

    if (['vegetable', 'fruit'].includes(plantType)) {
      recommendations.push({
        fertilizerId: 'general-hydroponics-flora',
        priority: 'medium',
        amount: 'Follow 3-part GH feeding chart (example veg: 3-2-1 tsp/gal Gro-Bloom-Micro)',
        unit: '',
        timing: 'Change solution every 7–10 days during peak growth',
        notes: 'More flexible than single-part formulas. Increase Bloom ratio once flowering starts.',
        why: 'Allows precise control over N-P-K ratios as plants move from vegetative to reproductive stages.',
      })
    }

    recommendations.push({
      fertilizerId: 'hydroponic-silicic-acid',
      priority: 'medium',
      amount: 'Follow product instructions (typically 1–2 ml per gallon)',
      unit: '',
      timing: 'Add during vegetative growth and early flowering',
      notes: 'Add to reservoir before pH adjustment.',
      why: 'Strengthens stems and improves resistance to pests and environmental stress in hydro systems.',
    })

    // Add a hydro-specific note
    recommendations.push({
      type: 'important-note',
      message: 'Hydroponics requires regular monitoring of pH (typically 5.5–6.5) and EC/PPM. Flush the system with plain pH-adjusted water every 2–4 weeks to prevent nutrient lockout and salt buildup.',
    })

    return recommendations // Return early for hydro — soil-based recommendations don’t apply
  }

  // === PLANT-TYPE SPECIFIC RECOMMENDATIONS ===

  if (plantType === 'vegetable') {
    // Heavy feeders — tomatoes, peppers, corn, squash, brassicas, etc.
    recommendations.push({
      fertilizerId: 'blood-meal',
      priority: 'high',
      amount: growthStage === 'seedling' ? '1 tsp per plant' : '1–2 tbsp per plant',
      unit: '',
      timing: growthStage === 'seedling' ? '2–3 weeks after transplant' : 'At planting + side-dress every 4–6 weeks',
      notes: 'Excellent for leafy growth early in the season.',
      why: 'Most vegetables are heavy nitrogen feeders during vegetative growth.',
    })

    recommendations.push({
      fertilizerId: 'bone-meal',
      priority: 'high',
      amount: '1–2 tbsp per plant',
      unit: '',
      timing: 'At planting, worked into the root zone',
      notes: 'Especially important for tomatoes, peppers, and root crops.',
      why: 'Supports strong roots and fruit development.',
    })

    recommendations.push({
      fertilizerId: 'kelp-meal',
      priority: 'medium',
      amount: '1 tbsp per plant',
      unit: '',
      timing: 'When flowering begins, then every 4–6 weeks',
      notes: 'Improves fruit quality and stress resistance.',
      why: 'Potassium is critical once plants start flowering and setting fruit.',
    })

    // Liquid option for containers
    if (growingMethod === 'container') {
      recommendations.push({
        fertilizerId: 'fish-emulsion',
        priority: 'medium',
        amount: '1–2 tbsp per gallon of water',
        unit: '',
        timing: 'Every 2–3 weeks during active growth',
        notes: 'Dilute and apply as a soil drench.',
        why: 'Fast-acting nitrogen + micronutrients for container vegetables.',
      })
    }
  }

  if (plantType === 'herb') {
    // Most herbs are light feeders — over-fertilizing reduces flavor and essential oils
    recommendations.push({
      fertilizerId: 'worm-castings',
      priority: 'high',
      amount: growthStage === 'seedling' ? '1 tsp per plant' : '2–4 tbsp per plant',
      unit: '',
      timing: 'Mix into soil at planting + light top-dress mid-season',
      notes: 'Very gentle. Excellent choice for herbs.',
      why: 'Herbs perform best with low fertility. Too much nitrogen makes them leggy and less flavorful.',
    })

    recommendations.push({
      fertilizerId: 'compost-tea',
      priority: 'medium',
      amount: '1 part tea to 4 parts water',
      unit: '',
      timing: 'Every 3–4 weeks as a soil drench',
      notes: 'Use sparingly compared to vegetables.',
      why: 'Provides mild nutrition without pushing excessive leafy growth.',
    })
  }

  if (plantType === 'flower') {
    recommendations.push({
      fertilizerId: 'bone-meal',
      priority: 'high',
      amount: '1–2 tbsp per plant',
      unit: '',
      timing: 'At planting for perennials and bulbs',
      notes: 'Especially valuable for peonies, roses, and spring bulbs.',
      why: 'Phosphorus supports strong root systems and abundant blooming.',
    })

    recommendations.push({
      fertilizerId: 'kelp-meal',
      priority: 'medium',
      amount: '1 tbsp per plant',
      unit: '',
      timing: 'Early spring and again when buds form',
      notes: 'Great for roses and heavy-blooming perennials.',
      why: 'Potassium improves flower quality and disease resistance.',
    })
  }

  if (plantType === 'fruit' || plantType === 'tree' || plantType === 'shrub') {
    recommendations.push({
      fertilizerId: 'bone-meal',
      priority: 'high',
      amount: '1/2 to 1 cup per tree/shrub (depending on size)',
      unit: '',
      timing: 'At planting + every 2–3 years in early spring',
      notes: 'Work into the soil around the drip line.',
      why: 'Strong root development is critical for long-lived woody plants.',
    })

    if (plantType === 'fruit') {
      recommendations.push({
        fertilizerId: 'kelp-meal',
        priority: 'high',
        amount: '1/4 to 1/2 cup per mature plant',
        unit: '',
        timing: 'Early spring + light application when fruit begins to size',
        notes: 'Especially helpful for apples, peaches, berries, and citrus.',
        why: 'Potassium dramatically improves fruit size, flavor, and storage life.',
      })
    }
  }

  if (plantType === 'bulb') {
    recommendations.push({
      fertilizerId: 'bone-meal',
      priority: 'essential',
      amount: '1–2 tsp per bulb',
      unit: '',
      timing: 'At planting, placed below the bulb',
      notes: 'One of the best amendments for tulips, daffodils, lilies, etc.',
      why: 'Bulbs need phosphorus to build strong roots and future blooms.',
    })
  }

  if (['succulent', 'fern', 'groundcover', 'grass'].includes(plantType)) {
    // Light feeders — mostly rely on compost + occasional gentle feeding
    recommendations.push({
      fertilizerId: 'worm-castings',
      priority: 'medium',
      amount: '1–2 tbsp per plant',
      unit: '',
      timing: 'Light top-dress in spring',
      notes: 'These plants generally need very little additional fertilizer.',
      why: 'Over-fertilizing succulents and many groundcovers leads to weak, floppy growth.',
    })
  }

  // === SYNTHETIC SECONDARY OPTIONS (always shown as alternatives) ===
  if (['vegetable', 'flower', 'fruit'].includes(plantType)) {
    recommendations.push({
      fertilizerId: 'balanced-granular',
      priority: 'alternative',
      amount: getSyntheticAmount(physicalSize),
      unit: '',
      timing: 'Early spring (and mid-season for vegetables)',
      notes: 'Use only if you do not have good organic matter in the soil.',
      why: 'Quick nutrient boost when organic options are not available.',
    })

    if (plantType === 'vegetable' || plantType === 'flower') {
      recommendations.push({
        fertilizerId: 'bloom-booster',
        priority: 'alternative',
        amount: 'Follow label rates for your plant size',
        unit: '',
        timing: 'When plants begin flowering',
        notes: 'Switch to this after good vegetative growth is established.',
        why: 'Higher phosphorus can encourage more blooms and fruit.',
      })
    }
  }

  // === CONTAINER-SPECIFIC ADJUSTMENTS ===
  if (growingMethod === 'container') {
    // Add a note about more frequent feeding in containers
    recommendations.push({
      type: 'note',
      message: 'Containers dry out and deplete nutrients faster than in-ground plantings. Plan on more frequent (but lighter) applications, and flush the soil monthly to prevent salt buildup.',
    })
  }

  // === ALWAYS INCLUDE SOIL TEST ADVICE ===
  recommendations.push({
    type: 'important-note',
    message: 'For best results, get a soil test before applying significant amounts of any fertilizer. Many nutrient problems are actually pH or soil structure issues that fertilizer alone cannot fix.',
  })

  return recommendations
}

// === Helper Functions ===

function getCompostAmount(physicalSize, growingMethod) {
  if (growingMethod === 'container') {
    if (physicalSize?.includes('small')) return '1–2 inches on top or 10–20% of potting mix'
    if (physicalSize?.includes('medium')) return '2 inches on top or mix 15–25% into soil'
    return '2–3 inches top-dress or 20–30% of mix'
  }

  // In-ground
  if (physicalSize?.includes('small-bed')) return '1–2 inches across the bed'
  if (physicalSize?.includes('medium-bed')) return '2 inches across the bed'
  if (physicalSize?.includes('large-bed')) return '2–3 inches across the bed'

  return '1–2 inches around the plant or 1–2 gallons per plant'
}

function getSyntheticAmount(physicalSize) {
  if (!physicalSize) return 'Follow package rates for your plant size'

  if (physicalSize.includes('small')) return '1–2 tsp per plant'
  if (physicalSize.includes('medium')) return '1–2 tbsp per plant'
  if (physicalSize.includes('large')) return '1/4 cup per plant'

  if (physicalSize.includes('bed')) return '1–2 lbs per 100 sq ft'

  return 'Follow package rates'
}

/**
 * Returns a human-friendly summary of the plant type's general feeding needs.
 */
export function getFeedingProfile(plantType, growingMethod) {
  if (growingMethod === 'hydroponic') {
    return 'Hydroponic plants are usually moderate to heavy feeders. Precise control of EC, pH (5.5–6.5), and nutrient ratios is more important than in soil or coco.'
  }

  const profiles = {
    vegetable: 'Heavy feeder — requires consistent nutrition for high yields.',
    herb: 'Light feeder — over-fertilizing reduces flavor and aroma.',
    flower: 'Moderate feeder — benefits from phosphorus and potassium for blooming.',
    fruit: 'Moderate to heavy feeder — especially needs potassium for fruit quality.',
    tree: 'Low to moderate feeder once established — focus on soil health.',
    shrub: 'Low to moderate feeder — avoid high-nitrogen formulas on flowering shrubs.',
    vine: 'Moderate feeder — consistent feeding improves flowering and fruiting.',
    bulb: 'Low feeder after planting — phosphorus at planting is most important.',
    grass: 'Low feeder — most ornamental grasses thrive with minimal fertility.',
    succulent: 'Very light feeder — too much fertilizer causes weak, leggy growth.',
    fern: 'Low to moderate feeder — prefers consistent moisture and organic matter.',
    groundcover: 'Low feeder — most groundcovers perform best with lean fertility.',
  }

  return profiles[plantType] || 'Moderate feeder.'
}
