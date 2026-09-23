/**
 * Typical hydroponic target ranges, shared by the EC/pH Assistant and the
 * Grow Light DLI Calculator. These are widely used starting points (matching
 * the ranges in the Hydroponic Nutrients, pH & EC guide and plants.js
 * hydroponicsNotes) — always defer to the feeding chart on the nutrient
 * product being used, since formulas differ.
 *
 *  - ph:        [min, max]
 *  - ec:        mS/cm, per stage ('seedling' | 'established')
 *  - dli:       daily light integral target, mol/m²/day (typical ranges;
 *               commercial CEA references vary)
 *  - lightHours: typical photoperiod range indoors
 */
export const hydroponicCrops = [
  {
    id: 'leafy',
    name: 'Lettuce & leafy greens',
    emoji: '🥬',
    ph: [5.5, 6.5],
    ec: { seedling: [0.4, 0.8], established: [0.8, 1.4] },
    dli: [12, 17],
    lightHours: [12, 16],
  },
  {
    id: 'herbs',
    name: 'Herbs (basil & similar)',
    emoji: '🌿',
    ph: [5.5, 6.5],
    ec: { seedling: [0.4, 0.8], established: [1.0, 1.6] },
    dli: [14, 20],
    lightHours: [12, 16],
  },
  {
    id: 'tomato',
    name: 'Tomatoes',
    emoji: '🍅',
    ph: [5.8, 6.3],
    ec: { seedling: [0.4, 0.8], established: [1.8, 3.0] },
    dli: [20, 30],
    lightHours: [14, 18],
  },
  {
    id: 'hot-pepper',
    name: 'Hot peppers',
    emoji: '🌶️',
    ph: [5.8, 6.3],
    ec: { seedling: [0.4, 0.8], established: [1.8, 3.0] },
    dli: [20, 30],
    lightHours: [14, 18],
  },
  {
    id: 'bell-pepper',
    name: 'Bell peppers',
    emoji: '🫑',
    ph: [6.0, 6.5],
    ec: { seedling: [0.4, 0.8], established: [1.8, 3.0] },
    dli: [20, 30],
    lightHours: [14, 18],
  },
  {
    id: 'cucumber',
    name: 'Cucumbers',
    emoji: '🥒',
    ph: [5.5, 6.5],
    ec: { seedling: [0.4, 0.8], established: [1.8, 3.0] },
    dli: [20, 30],
    lightHours: [14, 18],
  },
]

export function getHydroponicCrop(id) {
  return hydroponicCrops.find((c) => c.id === id)
}

// TDS meters convert EC (mS/cm) to ppm with different factors.
export const tdsScales = [
  { id: 'ec', label: 'EC (mS/cm)', factor: 1 },
  { id: 'ppm500', label: 'TDS ppm (500 scale)', factor: 500 },
  { id: 'ppm700', label: 'TDS ppm (700 scale)', factor: 700 },
]
