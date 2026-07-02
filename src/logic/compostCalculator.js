import { BROWN_GREEN_VOLUME_RATIO, getCompostMaterial } from '../data/compost-materials.js'

export const pilePresets = [
  { id: 'small', label: 'Small (3×3×3 ft — hot-composting minimum)', cuFt: 27 },
  { id: 'medium', label: 'Medium (4×4×4 ft)', cuFt: 64 },
  { id: 'large', label: 'Large (5×5×5 ft — hot-composting maximum)', cuFt: 125 },
  { id: 'custom', label: 'Custom volume', cuFt: null },
]

/**
 * Splits a target pile volume into browns/greens by volume, using the
 * guide's 3:1 brown-to-green ratio, then distributes each share evenly
 * across the selected materials of that category.
 */
export function computeCompostPlan({ totalCuFt, brownIds = [], greenIds = [] }) {
  if (!(totalCuFt > 0)) return null

  const { browns: brownParts, greens: greenParts } = BROWN_GREEN_VOLUME_RATIO
  const totalParts = brownParts + greenParts
  const brownsCuFt = totalCuFt * (brownParts / totalParts)
  const greensCuFt = totalCuFt * (greenParts / totalParts)

  const brownMaterials = brownIds.map((id) => getCompostMaterial(id)).filter(Boolean)
  const greenMaterials = greenIds.map((id) => getCompostMaterial(id)).filter(Boolean)

  const brownBreakdown = brownMaterials.map((m) => ({
    ...m,
    cuFt: brownMaterials.length > 0 ? brownsCuFt / brownMaterials.length : 0,
  }))
  const greenBreakdown = greenMaterials.map((m) => ({
    ...m,
    cuFt: greenMaterials.length > 0 ? greensCuFt / greenMaterials.length : 0,
  }))

  return {
    totalCuFt,
    brownsCuFt,
    greensCuFt,
    brownBreakdown,
    greenBreakdown,
    isValidHotPile: totalCuFt >= 27, // minimum 3x3x3 ft for hot composting per the guide
  }
}
