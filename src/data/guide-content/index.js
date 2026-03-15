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
}
