/**
 * Mulch application defaults and cost data for the Mulch Calculator.
 * Sourced directly from guide-content/mulching-guide.js's own tables
 * ("Depth by Application Type" and "Cost Comparison by Mulch Type") so the
 * calculator's numbers match what the guide already teaches.
 */
export const mulchApplications = [
  { id: 'trees-established', label: 'Trees & Large Shrubs (established)', depthIn: 3.5 },
  { id: 'trees-new', label: 'Newly Planted Trees', depthIn: 2.5 },
  { id: 'shrubs', label: 'Shrubs & Hedges', depthIn: 2.5 },
  { id: 'perennial-beds', label: 'Perennial Flower Beds', depthIn: 2.5 },
  { id: 'annual-beds', label: 'Annual Flower Beds', depthIn: 1.75 },
  { id: 'vegetable-rows', label: 'Vegetable Garden (between rows)', depthIn: 3 },
  { id: 'pathways', label: 'Pathways & Non-Planted Areas', depthIn: 4.5 },
  { id: 'slopes', label: 'Hillsides & Slopes (erosion control)', depthIn: 3.5 },
  { id: 'custom', label: 'Custom Depth', depthIn: 3 },
]

// soldAs: 'bag' — priced per ~2 cu ft bag, cost-per-cu-yd estimate works directly.
//         'bale' — priced per bale (not a fixed cu ft unit), shown as guide text only.
//         'free' — no cost.
export const mulchTypes = [
  { id: 'hardwood-bark', label: 'Shredded Hardwood Bark', soldAs: 'bag', bagCostRange: '$60–90', bulkCostRange: '$25–50', bulkAvg: 37.5 },
  { id: 'wood-chips', label: 'Wood Chips (Arborist)', soldAs: 'bulk-only', bagCostRange: 'Not typically bagged', bulkCostRange: '$0–20', bulkAvg: 10 },
  { id: 'pine-straw', label: 'Pine Straw', soldAs: 'bale', bagCostRange: '$30–50 per bale (≈40 sq ft at 3 in)', bulkCostRange: 'Sold by bale (Southeast)', bulkAvg: null },
  { id: 'straw', label: 'Straw (vegetable garden)', soldAs: 'bale', bagCostRange: '$7–12 per bale (≈80–100 sq ft at 3 in)', bulkCostRange: '$120–200/ton', bulkAvg: null },
  { id: 'shredded-leaves', label: 'Shredded Leaves', soldAs: 'free', bagCostRange: 'Free (generate yourself)', bulkCostRange: 'Free (municipal)', bulkAvg: 0 },
  { id: 'colored-mulch', label: 'Colored Mulch (bagged)', soldAs: 'bag', bagCostRange: '$70–95', bulkCostRange: '$30–55', bulkAvg: 42.5 },
  { id: 'gravel', label: 'Gravel / River Rock', soldAs: 'bag', bagCostRange: '$60–120', bulkCostRange: '$45–80', bulkAvg: 62.5 },
]

export function getMulchApplication(id) {
  return mulchApplications.find((a) => a.id === id)
}

export function getMulchType(id) {
  return mulchTypes.find((m) => m.id === id)
}
