/**
 * Central contentMap used by GuideDetail (rendering) and
 * the [guideId] page file (generateMetadata / generateStaticParams).
 * Add each new guide here when it goes live.
 */

import { shadeTreeContent } from './shade-trees.js'
import { fruitTreeContent } from './fruit-trees.js'
import { ornamentalTreeContent } from './ornamental-trees.js'
import { dwarfTreeContent } from './dwarf-trees.js'
import { evergreenTreeContent } from './evergreen-trees.js'
import { privacyTreeContent } from './privacy-trees.js'
import { streetTreeContent } from './street-trees.js'
import { fallColorTreeContent } from './fall-color-trees.js'
import { plantsForColorContent } from './plants-for-color.js'
import { moonGardenContent } from './moon-garden.js'
import { cottageGardenContent } from './cottage-garden.js'
import { pollinatorGardenContent } from './pollinator-garden.js'
import { cutFlowerGardenContent } from './cut-flower-garden.js'
import { wildflowerMeadowContent } from './wildflower-meadow.js'
import { springBulbGardenContent } from './spring-bulb-garden.js'
import { longBloomingPerennialsContent } from './long-blooming-perennials.js'
import { annualFlowersContent } from './annual-flowers.js'
import { pizzaGardenContent } from './pizza-garden.js'
import { saladGardenContent } from './salad-garden.js'
import { herbGardenDesignContent } from './herb-garden-design.js'
import { teaGardenContent } from './tea-garden.js'
import { childrensGardenContent } from './childrens-vegetable-garden.js'
import { squareFootGardeningContent } from './square-foot-gardening.js'
import { threeSistersContent } from './three-sisters.js'
import { edibleFlowersContent } from './edible-flowers.js'
import { salsaGardenContent } from './salsa-garden.js'
import { medicinalGardenContent } from './medicinal-garden.js'
import { plantsForFragranceContent } from './plants-for-fragrance.js'
import { curbAppealContent } from './curb-appeal.js'
import { porchPlantsContent } from './porch-plants.js'
import { culinaryHerbGardenContent } from './culinary-herb-garden.js'
import { japaneseGardenContent } from './japanese-garden.js'
import { winterGardenPrepContent } from './winter-garden-prep.js'
import { xeriscapeContent } from './xeriscape.js'
import { commonGardenDiseasesContent } from './common-garden-diseases.js'
import { rainBarrelContent } from './rain-barrel.js'
import { zenGardenContent } from './zen-garden.js'
import { modernMinimalistGardenContent } from './modern-minimalist-garden.js'
import { indoorHouseplantsContent } from './indoor-houseplants.js'
import { weedManagementContent } from './weed-management.js'
import { gardenPestsContent } from './garden-pests.js'
import { attractingBeneficialInsectsContent } from './attracting-beneficial-insects.js'
import { butterflyGardenContent } from './butterfly-garden.js'
import { rabbitProofGardenContent } from './rabbit-proof-garden.js'
import { fourSeasonGardenContent } from './four-season-garden.js'
import { organicFertilizingContent } from './organic-fertilizing.js'
import { hummingbirdGardenContent } from './hummingbird-garden.js'
import { sunroomPlantsContent } from './sunroom-plants.js'
import { indoorHerbGardenContent } from './indoor-herb-garden.js'
import { rainGardenContent } from './rain-garden.js'
import { mulchingGuideContent } from './mulching-guide.js'
import { privacyScreeningContent } from './privacy-screening.js'
import { medicinalHerbGardenContent } from './medicinal-herb-garden.js'
import { fragrantGardenPathContent } from './fragrant-garden-path.js'
import { aromatherapyGardenContent } from './aromatherapy-garden.js'
import { lowMaintenanceLandscapeContent } from './low-maintenance-landscape.js'
import { cottageLandscapeContent } from './cottage-landscape.js'
import { foundationPlantingContent } from './foundation-planting.js'
import { springStartupContent } from './spring-startup.js'
import { summerMaintenanceContent } from './summer-maintenance.js'
import { fallPlantingContent } from './fall-planting.js'
import { postHarvestContent } from './post-harvest.js'
import { yearRoundCalendarContent } from './year-round-calendar.js'
import { overwinteringContent } from './overwintering.js'
import { coldFramesContent } from './cold-frames.js'
import { pestEliminatingPlantsContent } from './pest-eliminating-plants.js'
import { organicPestControlContent } from './organic-pest-control.js'
import { deerResistantContent } from './deer-resistant.js'
import { slugControlContent } from './slug-control.js'
import { petFriendlyPlantsContent } from './pet-friendly-plants.js'
import { nativePlantsContent } from './native-plants.js'
import { sensoryGardenContent } from './sensory-garden.js'
import { waterFeaturePlantsContent } from './water-feature-plants.js'
import { fireSafeLandscapingContent } from './fire-safe-landscaping.js'
import { birdGardenContent } from './bird-garden.js'
import { cuttingGardenContent } from './cutting-garden.js'
import { balconyGardenContent } from './balcony-garden.js'
import { windowBoxContent } from './window-box.js'
import { hangingBasketsContent } from './hanging-baskets.js'
import { containerVegetablesContent } from './container-vegetables.js'
import { verticalGardeningContent } from './vertical-gardening.js'
import { compostingBasicsContent } from './composting-basics.js'
import { waterWiseGardeningContent } from './water-wise-gardening.js'
import { companionPlantingContent } from './companion-planting.js'
import { soilHealthContent } from './soil-health.js'
import { noDigGardeningContent } from './no-dig-gardening.js'
import { seedSavingContent } from './seed-saving.js'

export const contentMap = {
  'shade-trees': shadeTreeContent,
  'fruit-trees': fruitTreeContent,
  'ornamental-trees': ornamentalTreeContent,
  'dwarf-trees': dwarfTreeContent,
  'evergreen-trees': evergreenTreeContent,
  'privacy-trees': privacyTreeContent,
  'street-trees': streetTreeContent,
  'fall-color-trees': fallColorTreeContent,
  'plants-for-color': plantsForColorContent,
  'moon-garden': moonGardenContent,
  'cottage-garden': cottageGardenContent,
  'pollinator-garden': pollinatorGardenContent,
  'cut-flower-garden': cutFlowerGardenContent,
  'wildflower-meadow': wildflowerMeadowContent,
  'spring-bulb-garden': springBulbGardenContent,
  'long-blooming-perennials': longBloomingPerennialsContent,
  'annual-flowers': annualFlowersContent,
  'pizza-garden': pizzaGardenContent,
  'salad-garden': saladGardenContent,
  'herb-garden-design': herbGardenDesignContent,
  'tea-garden': teaGardenContent,
  'childrens-garden': childrensGardenContent,
  'square-foot-gardening': squareFootGardeningContent,
  'three-sisters': threeSistersContent,
  'edible-flowers': edibleFlowersContent,
  'salsa-garden': salsaGardenContent,
  'medicinal-garden': medicinalGardenContent,
  'plants-for-smell': plantsForFragranceContent,
  'curb-appeal': curbAppealContent,
  'porch-plants': porchPlantsContent,
  'culinary-herb-garden': culinaryHerbGardenContent,
  'japanese-garden': japaneseGardenContent,
  'winter-garden-prep': winterGardenPrepContent,
  'xeriscape': xeriscapeContent,
  'common-diseases': commonGardenDiseasesContent,
  'rain-barrel': rainBarrelContent,
  'zen-garden': zenGardenContent,
  'modern-minimalist-garden': modernMinimalistGardenContent,
  'indoor-houseplants': indoorHouseplantsContent,
  'weed-management': weedManagementContent,
  'garden-pests': gardenPestsContent,
  'beneficial-insects': attractingBeneficialInsectsContent,
  'butterfly-garden': butterflyGardenContent,
  'rabbit-proof': rabbitProofGardenContent,
  'four-season-garden': fourSeasonGardenContent,
  'organic-fertilizing': organicFertilizingContent,
  'hummingbird-garden': hummingbirdGardenContent,
  'sunroom-plants': sunroomPlantsContent,
  'indoor-herb-garden': indoorHerbGardenContent,
  'rain-garden': rainGardenContent,
  'mulching-guide': mulchingGuideContent,
  'privacy-screening': privacyScreeningContent,
  'medicinal-herb-garden': medicinalHerbGardenContent,
  'fragrant-garden-path': fragrantGardenPathContent,
  'aromatherapy-garden': aromatherapyGardenContent,
  'low-maintenance-landscape': lowMaintenanceLandscapeContent,
  'cottage-landscape': cottageLandscapeContent,
  'foundation-planting': foundationPlantingContent,
  'spring-startup': springStartupContent,
  'summer-maintenance': summerMaintenanceContent,
  'fall-planting': fallPlantingContent,
  'post-harvest': postHarvestContent,
  'year-round-calendar': yearRoundCalendarContent,
  'overwintering': overwinteringContent,
  'cold-frames': coldFramesContent,
  'pest-eliminating-plants': pestEliminatingPlantsContent,
  'organic-pest-control': organicPestControlContent,
  'deer-resistant': deerResistantContent,
  'slug-control': slugControlContent,
  'pet-friendly-plants': petFriendlyPlantsContent,
  'native-plants': nativePlantsContent,
  'sensory-garden': sensoryGardenContent,
  'water-feature-plants': waterFeaturePlantsContent,
  'fire-safe-landscaping': fireSafeLandscapingContent,
  'bird-garden': birdGardenContent,
  'cutting-garden': cuttingGardenContent,
  'balcony-garden': balconyGardenContent,
  'window-box': windowBoxContent,
  'hanging-baskets': hangingBasketsContent,
  'container-vegetables': containerVegetablesContent,
  'vertical-gardening': verticalGardeningContent,
  'composting-basics': compostingBasicsContent,
  'water-wise-gardening': waterWiseGardeningContent,
  'companion-planting': companionPlantingContent,
  'soil-health': soilHealthContent,
  'no-dig-gardening': noDigGardeningContent,
  'seed-saving': seedSavingContent,
}
