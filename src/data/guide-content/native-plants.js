export const nativePlantsContent = {
  id: 'native-plants',
  hero: {
    emoji: '🌍',
    title: 'Native Plants Guide',
    subtitle: 'Discover why native plants outperform traditional landscaping for wildlife, water use, and long-term maintenance — and which species belong in your region.',
  },
  intro: 'Native plants are those that evolved in a specific region over thousands of years, developing relationships with local insects, birds, and soil organisms that non-native species simply cannot replicate. A single native oak tree supports hundreds of caterpillar species — the primary food source for nesting songbirds — while a non-native ornamental tree of similar size may support none. Beyond ecology, established native plants are dramatically more resilient: their deep root systems access water and nutrients that shallow-rooted ornamentals cannot reach, meaning they typically require no irrigation once established and thrive without synthetic fertilizer. This is not a philosophical stance but a practical one — native plants are genuinely lower-maintenance in the landscape they evolved to inhabit.',
  sections: [
    {
      id: 'ecological-case',
      title: 'The Ecological Case for Native Plants',
      blocks: [
        {
          type: 'p',
          text: 'The ecological value of native plants comes down to co-evolved relationships that took thousands of years to develop, and that a non-native substitute — however attractive — simply cannot replicate regardless of how well it grows.',
        },
        {
          type: 'table',
          headers: ['Relationship', 'How Natives Deliver It', 'What Non-Natives Typically Miss'],
          rows: [
            ['Caterpillar host plants', 'Native trees like oak, cherry, and willow host hundreds of caterpillar species, the primary food for nesting songbirds', 'Many popular ornamental trees (ginkgo, most non-native maples) host few or no caterpillar species'],
            ['Specialist pollinators', 'Many native bees and other pollinators are specialists tied to specific native plant genera', 'A specialist pollinator often cannot use an unrelated non-native substitute, even one with abundant flowers'],
            ['Soil microbial partnerships', 'Native plants have co-evolved relationships with local mycorrhizal fungi and soil bacteria', 'Non-natives often lack equivalent local soil partnerships, limiting their resilience without added inputs'],
            ['Bloom timing matched to local wildlife cycles', 'Native bloom times align with when local pollinators and birds actually need those resources', 'An ornamental with a mismatched bloom season can look full but provide little practical ecological value'],
          ],
        },
        {
          type: 'tip',
          emoji: '🦋',
          text: 'A garden doesn\'t need to be 100% native to deliver real ecological value — even converting a portion of a conventional landscape to native plants measurably increases the insect and bird activity a yard can support.',
        },
        {
          type: 'image',
          src: '/guides/native-plants/oak-tree-caterpillar-habitat.jpg',
          alt: 'A mature native oak tree with a caterpillar visible on a leaf, in a garden setting',
          caption: 'A single native oak can host hundreds of caterpillar species — the primary food source for nesting songbirds.',
        },
      ],
    },
    {
      id: 'sourcing-local-ecotypes',
      title: 'Sourcing Local Ecotypes',
      blocks: [
        {
          type: 'p',
          text: 'The most important principle when buying native plants is sourcing local ecotypes — plants grown from seed collected within your region adapt more readily and support more local wildlife than the same species grown from seed collected in another part of its range.',
        },
        {
          type: 'list',
          items: [
            'Native plant societies (most states have one) often maintain plant sales, sourcing guides, and lists of reputable regional native nurseries.',
            'Local conservation districts and Soil and Water Conservation Districts frequently host affordable native plant sales, especially for trees and shrubs, in spring and fall.',
            'University extension programs are a reliable source of region-specific native plant recommendations and often list vetted local nurseries.',
            'A "native" species label alone doesn\'t guarantee a local ecotype — a species native to the eastern US broadly can still be sourced from seed collected hundreds of miles away; ask nurseries directly about seed provenance when it matters for restoration-grade projects.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Big-box garden centers frequently sell "native" plants that are actually native cultivars ("nativars") bred for different flower colors or more compact forms — some nativars retain full ecological value, but others (especially those bred for double flowers) can be significantly less useful to pollinators than the straight species.',
        },
        {
          type: 'image',
          src: '/guides/native-plants/native-plant-sale-nursery.jpg',
          alt: 'Trays of small native plant seedlings for sale at a local native plant nursery event',
          caption: 'Local native plant society sales and conservation district events are reliable sources of locally sourced ecotypes.',
        },
      ],
    },
    {
      id: 'plants-by-region',
      title: 'Native Plant Selection by US Region',
      blocks: [
        {
          type: 'p',
          text: 'Native plant selection is inherently regional — a plant genuinely native to the Southeast may be entirely absent from, or even invasive in, the Pacific Northwest. Start with these representative regional standouts, then confirm specifics with a local native plant society for your exact area.',
        },
        {
          type: 'table',
          headers: ['Region', 'Notable Native Trees/Shrubs', 'Notable Native Perennials/Grasses'],
          rows: [
            ['Northeast', 'Serviceberry, native oaks, winterberry holly, spicebush', 'Wild bergamot, New England aster, little bluestem'],
            ['Mid-Atlantic', 'Redbud, native dogwood, inkberry holly', 'Black-eyed Susan, coneflower, switchgrass'],
            ['Southeast', 'Southern magnolia (regional native), native azaleas, American beautyberry', 'Coreopsis, Joe Pye weed, muhly grass'],
            ['Midwest', 'Bur oak, hackberry, chokeberry', 'Prairie dropseed, purple coneflower, native milkweed'],
            ['Great Plains', 'Bur oak, native plum, buffaloberry', 'Little bluestem, blazing star, native sunflower'],
            ['Mountain West', 'Quaking aspen, serviceberry, native junipers', 'Blanket flower, penstemon, blue grama grass'],
            ['Pacific Northwest', 'Douglas fir, vine maple, native rhododendron', 'Sword fern, camas, native columbine'],
            ['California', 'California live oak, toyon, manzanita', 'California poppy, native sage, deergrass'],
            ['Desert Southwest', 'Palo verde, mesquite, desert willow', 'Penstemon, desert marigold, native agave'],
          ],
        },
        {
          type: 'tip',
          emoji: '🗺️',
          text: 'The site\'s Plant Database and USDA Zone Finder tools can help narrow candidates by zone, but a regional native plant society\'s own list is the most reliable source for confirming a species is genuinely native to your specific area, not just your broader zone.',
        },
        {
          type: 'image',
          src: '/guides/native-plants/purple-coneflower-native-grasses.jpg',
          alt: 'Purple coneflowers and little bluestem grass growing together in a native garden bed',
          caption: 'Purple coneflower and little bluestem are reliable native perennial and grass choices across much of the Midwest and Northeast.',
        },
      ],
    },
    {
      id: 'water-and-maintenance-benefits',
      title: 'Water Savings and Reduced Maintenance',
      blocks: [
        {
          type: 'p',
          text: 'Established native plants deliver real, measurable savings in both water and ongoing maintenance — not because they demand less attention out of some inherent virtue, but because their evolved traits genuinely match local conditions.',
        },
        {
          type: 'list',
          items: [
            'Deep, extensive root systems access moisture and nutrients from soil layers that shallow-rooted ornamentals can\'t reach, reducing or eliminating supplemental irrigation once established.',
            'Natives are adapted to local pest and disease pressure, typically requiring far less pesticide and fungicide intervention than non-native ornamentals.',
            'Regional soil fertility usually matches what natives evolved to thrive in, reducing or eliminating the need for synthetic fertilizer.',
            'A well-chosen native planting, once established (typically 1-3 years), requires meaningfully less watering, feeding, and pest management than an equivalent conventional bed.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'The water and maintenance savings apply to established native plants, not new plantings — natives still need regular watering through their first one to three years while root systems develop, the same as any new planting.',
        },
        {
          type: 'image',
          src: '/guides/native-plants/deep-rooted-native-perennials.jpg',
          alt: 'A thriving native perennial garden bed requiring minimal irrigation, with drought-tolerant blooms',
          caption: 'Established native plantings develop deep root systems that access moisture shallow-rooted ornamentals simply can\'t reach.',
        },
      ],
    },
    {
      id: 'transitioning-a-landscape',
      title: 'Transitioning a Conventional Landscape to Natives',
      blocks: [
        {
          type: 'p',
          text: 'A full landscape overhaul isn\'t necessary to meaningfully increase native plant coverage — a phased approach spreads cost and effort over time while still delivering real ecological benefit at every stage.',
        },
        {
          type: 'list',
          items: [
            'Start with the highest-impact swap: replace one non-native ornamental tree or large shrub with a native equivalent that supports significantly more insect life (a native oak in place of a non-native maple, for instance).',
            'Convert border and edge plantings first — these areas are lower-visibility and lower-risk for experimenting with new species before committing prominent focal areas.',
            'Reduce lawn area incrementally, replacing sections with native groundcovers, meadow plantings, or shrub borders rather than converting an entire lawn at once.',
            'Keep any non-native plants that are already well-behaved and non-invasive if there\'s no compelling reason to remove them — the goal is meaningfully increasing native coverage, not achieving a purist 100% native yard.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌳',
          text: 'Replacing even one large non-native shade tree with a keystone native species (oak, native cherry, willow) can have more ecological impact than converting an entire perennial border, since large keystone trees support disproportionately more insect and bird life than any other single planting choice.',
        },
        {
          type: 'image',
          src: '/guides/native-plants/converted-lawn-native-border.jpg',
          alt: 'A section of lawn converted into a native shrub and perennial border in a suburban yard',
          caption: 'Converting lawn sections incrementally into native borders delivers real ecological benefit without an all-at-once overhaul.',
        },
      ],
    },
  ],
};
