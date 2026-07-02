/**
 * Soil mix formulas for the Soil & Raised Bed Calculator.
 * Ratios are sourced from existing Plantopedia guide content so the
 * calculator's numbers match what the guides already teach:
 *   - 'raised-bed': the classic 1/3-1/3-1/3 raised bed mix from
 *     guide-content/childrens-vegetable-garden.js
 *   - 'square-foot': Mel Bartholomew's "Mel's Mix" formula from
 *     guide-content/square-foot-gardening.js
 *   - 'container': a standard container-gardening convention (not tied to
 *     one specific guide table) — mostly purchased potting mix, lightened
 *     with compost
 */
export const soilMixes = {
  'raised-bed': {
    label: 'Raised Bed (Classic Mix)',
    description: 'A forgiving, freely-draining mix for raised beds — the formula used throughout our Children’s Vegetable Garden guide.',
    guideId: 'childrens-garden',
    guideTitle: "Children's Vegetable Garden",
    components: [
      { name: 'Quality Topsoil', share: 1 / 3 },
      { name: 'Compost (well-aged)', share: 1 / 3 },
      { name: 'Coarse Perlite or Vermiculite', share: 1 / 3 },
    ],
  },
  'square-foot': {
    label: 'Square Foot Garden ("Mel’s Mix")',
    description: 'The no-native-soil formula behind Square Foot Gardening — lightweight, weed-free, and ready to plant on day one.',
    guideId: 'square-foot-gardening',
    guideTitle: 'Square Foot Gardening',
    components: [
      { name: 'Compost Blend (5+ varieties)', share: 1 / 3 },
      { name: 'Peat Moss or Coco Coir', share: 1 / 3 },
      { name: 'Coarse Vermiculite', share: 1 / 3 },
    ],
  },
  container: {
    label: 'Containers & Pots',
    description: 'A lightened, fast-draining mix for pots and patio containers.',
    guideId: null,
    guideTitle: null,
    components: [
      { name: 'Quality Potting Mix (bagged)', share: 2 / 3 },
      { name: 'Compost', share: 1 / 3 },
    ],
  },
}

// Common retail bag sizes (cubic feet) used to convert a volume into a
// shopping list. These are typical sizes, not universal — the calculator
// notes to check the product label.
export const BAG_SIZE_CU_FT = {
  topsoilCompost: 1.5, // most topsoil/compost bags: 1 to 1.5 cu ft
  perliteVermiculite: 4, // perlite/vermiculite typically sold in larger 4 cu ft bags
  pottingMix: 2, // potting mix / raised bed soil bags: often ~1.5-2 cu ft
}

export function getSoilMix(id) {
  return soilMixes[id]
}
