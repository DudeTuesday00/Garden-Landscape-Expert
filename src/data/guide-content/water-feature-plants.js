export const waterFeaturePlantsContent = {
  id: 'water-feature-plants',
  hero: {
    emoji: '💧',
    title: 'Water Feature Plants',
    subtitle: 'Choose the right aquatic and moisture-loving plants for ponds, streams, and bog gardens — and create a thriving water ecosystem in your backyard.',
  },
  intro: 'A water garden without the right plants quickly becomes a maintenance problem — algae blooms in nutrient-rich water, the ecosystem stays out of balance, and the feature loses its appeal. The right mix of aquatic plants solves this naturally: submerged oxygenators like hornwort and anacharis absorb excess nutrients and produce oxygen for fish; floating plants like water hyacinth and water lettuce shade the water surface, limiting algae; and upright emergents like pickerelweed, blue flag iris, and cattails filter nutrients from the water column through their root systems. Together, a well-planted water garden stabilizes itself into a balanced ecosystem that requires minimal chemical intervention.',
  sections: [
    {
      id: 'plant-categories-by-depth',
      title: 'Plant Categories by Water Depth',
      blocks: [
        {
          type: 'p',
          text: 'Water garden plants are categorized by their relationship to water depth, and matching a plant to its correct zone is the single most important factor in whether it thrives or struggles.',
        },
        {
          type: 'table',
          headers: ['Category', 'Water Depth', 'Example Plants', 'Role'],
          rows: [
            ['Submerged oxygenators', 'Fully underwater', 'Hornwort, anacharis, cabomba', 'Absorb excess nutrients and produce oxygen, competing with algae for the same resources'],
            ['Deep-water aquatics', '12-24 inches above the crown', 'Water lily (Nymphaea), lotus (Nelumbo)', 'Broad floating leaves shade the water surface, limiting algae growth and providing fish shelter'],
            ['Floating plants', 'Free-floating on the surface, roots trailing in water', 'Water hyacinth, water lettuce, duckweed', 'Outstanding biological filtration and surface shading; some species are regionally invasive (see warning below)'],
            ['Emergent marginals', '2-6 inches, the shallow shelf zone', 'Pickerelweed, blue flag iris, cardinal flower, lizard\'s tail, Japanese iris', 'Filter nutrients from the water column through their root systems while standing partly above water'],
            ['Bog plants', 'Consistently moist soil at the water\'s edge, not standing in water', 'Astilbe, ligularia, rodgersia', 'Extend the water garden\'s planted zone into the surrounding landscape without needing standing water'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Water hyacinth and water lettuce are outstanding floating plants for biological filtration but are classified as invasive species in warm-climate states (Zones 9-11) and must never be released into natural waterways — dispose of excess growth in a compost pile or trash, never a storm drain, ditch, or nearby pond/stream.',
        },
        {
          type: 'image',
          src: '/guides/water-feature-plants/water-lily-pond.jpg',
          alt: 'Pink water lilies blooming on the surface of a backyard garden pond',
          caption: 'Deep-water aquatics like water lilies shade the water surface, helping limit algae growth naturally.',
        },
      ],
    },
    {
      id: 'balancing-the-ecosystem',
      title: 'Balancing the Water Garden Ecosystem',
      blocks: [
        {
          type: 'p',
          text: 'A well-planted water garden becomes largely self-regulating, but reaching that balance takes a deliberate mix of plant types working together rather than a single category alone.',
        },
        {
          type: 'list',
          items: [
            'Aim for roughly 60-70% surface coverage between deep-water aquatics and floating plants — enough to shade the water and limit algae-feeding sunlight, without completely blocking gas exchange and fish visibility.',
            'Include submerged oxygenators even though they\'re rarely visible — they directly compete with algae for the same dissolved nutrients, starving out the algae bloom before it can establish.',
            'Add emergent marginals around the shallow perimeter to filter nutrients from runoff before it concentrates in open water.',
            'Avoid overfeeding fish and overfertilizing marginal plants — excess nutrients feed algae faster than they feed the plants meant to outcompete it.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌿',
          text: 'A new water garden often goes through a temporary "green water" algae bloom in its first weeks before plants establish enough biomass to outcompete it — this is normal and typically self-resolves within a few weeks rather than signaling a design failure.',
        },
        {
          type: 'image',
          src: '/guides/water-feature-plants/pickerelweed-emergent-marginal.jpg',
          alt: 'Purple-flowering pickerelweed growing as an emergent marginal plant along a pond edge',
          caption: 'Emergent marginals like pickerelweed filter nutrients from the water column through their root systems.',
        },
      ],
    },
    {
      id: 'pond-design-principles',
      title: 'Pond and Bog Garden Design Principles',
      blocks: [
        {
          type: 'p',
          text: 'Thoughtful zone design at the outset makes ongoing plant care and ecosystem balance dramatically easier than trying to correct a poorly zoned pond after the fact.',
        },
        {
          type: 'list',
          items: [
            'Build in at least two depth zones — a deep zone (18-24+ inches) for deep-water aquatics and overwintering fish, and a shallow shelf (2-6 inches) for emergent marginals.',
            'Position a bog garden zone at the pond\'s edge, using a liner with a slow-drainage design or simply consistently moist adjacent soil, to extend planting opportunities beyond the water itself.',
            'Site the pond where it receives at least 4-6 hours of direct sun for flowering aquatics like water lilies, but some afternoon shade in hot climates helps moderate water temperature and reduce evaporation.',
            'Keep planted marginal shelves wide enough (12+ inches) to support a real planting depth of soil and root room, not just a narrow ledge that limits plant choices.',
          ],
        },
        {
          type: 'tip',
          emoji: '🪴',
          text: 'Growing marginal and deep-water aquatics in individual planting baskets (rather than a soil layer across the whole pond bottom) makes maintenance, division, and winter relocation of tender plants far more manageable than an integrated planting.',
        },
        {
          type: 'image',
          src: '/guides/water-feature-plants/backyard-pond-shallow-shelf.jpg',
          alt: 'A backyard garden pond with a visible shallow planting shelf and deeper center zone',
          caption: 'A pond built with distinct depth zones — a shallow marginal shelf and a deeper center — makes plant care and fish overwintering much easier.',
        },
      ],
    },
    {
      id: 'native-vs-nonnative',
      title: 'Native vs. Non-Native Considerations',
      blocks: [
        {
          type: 'p',
          text: 'Water garden plants have an outsized capacity to escape into natural waterways compared to typical garden plants, since water itself is the dispersal mechanism — a small fragment or seed can travel far downstream from where it was planted.',
        },
        {
          type: 'table',
          headers: ['Plant', 'Status', 'Notes'],
          rows: [
            ['Water hyacinth, water lettuce', 'Invasive in warm climates (Zones 9-11)', 'Restricted or banned in several states; never release into natural waterways regardless of local regulation'],
            ['Purple loosestrife', 'Invasive nationally', 'Should not be planted anywhere in the US despite its ornamental appeal — has severely degraded wetlands nationwide'],
            ['Cattails (native species)', 'Native, but can be aggressive', 'Excellent for filtration and wildlife but can spread beyond intended bounds in larger ponds — best in contained plantings'],
            ['Pickerelweed, blue flag iris, cardinal flower', 'Native to much of the US', 'Excellent, well-behaved choices that also support pollinators and other wildlife'],
            ['Japanese iris', 'Non-native but non-invasive', 'A popular, well-behaved ornamental marginal with no significant invasive concerns'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Check your specific state\'s noxious/invasive aquatic plant list before purchasing — regulations vary significantly by state, and a plant sold at a garden center is not a guarantee it\'s legal or advisable to plant in your specific location.',
        },
        {
          type: 'image',
          src: '/guides/water-feature-plants/blue-flag-iris-cardinal-flower.jpg',
          alt: 'Blue flag iris and red cardinal flower blooming together at a pond edge',
          caption: 'Native marginals like blue flag iris and cardinal flower are well-behaved, pollinator-friendly choices for most US regions.',
        },
      ],
    },
    {
      id: 'winterizing-aquatic-plants',
      title: 'Winterizing Aquatic Plants',
      blocks: [
        {
          type: 'p',
          text: 'Aquatic plant winter care varies significantly by hardiness and by whether a pond is deep enough to avoid freezing solid — matching the right strategy to each plant prevents unnecessary winter losses.',
        },
        {
          type: 'table',
          headers: ['Plant Type', 'Winter Strategy', 'Notes'],
          rows: [
            ['Hardy water lilies', 'Lower to the pond\'s deepest point (below the freeze line) for winter', 'Most hardy varieties survive outdoors in Zones 4+ if the pond doesn\'t freeze solid to the bottom'],
            ['Tropical water lilies and lotus (in cold zones)', 'Bring indoors as a dormant tuber, or treat as an annual', 'Tropical varieties won\'t survive freezing temperatures even at pond depth'],
            ['Hardy emergent marginals (iris, pickerelweed)', 'Leave in place; most hardy natives tolerate freezing at the root zone', 'Trim dead foliage after it browns, but leave roots undisturbed'],
            ['Floating plants (hyacinth, lettuce)', 'Treat as annuals in most US zones; discard (never release) before frost', 'These are frost-tender and won\'t overwinter outdoors outside the warmest zones'],
            ['Submerged oxygenators', 'Many die back but regrow from root fragments in spring', 'Some benefit from being moved to the pond\'s deepest section for winter'],
          ],
        },
        {
          type: 'tip',
          emoji: '❄️',
          text: 'A pond deep enough (typically 24+ inches in cold climates) rarely freezes solid to the bottom, which is what allows hardy aquatic plants and overwintering fish to survive outdoors through winter without additional protection.',
        },
        {
          type: 'image',
          src: '/guides/water-feature-plants/container-water-garden-half-barrel.jpg',
          alt: 'A half-barrel container water garden on a patio with a dwarf water lily and dwarf papyrus',
          caption: 'A half-barrel container can host a scaled-down, self-regulating water garden with no pump needed.',
        },
      ],
    },
    {
      id: 'container-water-gardens',
      title: 'Plants for Container Water Gardens',
      blocks: [
        {
          type: 'p',
          text: 'A full in-ground pond isn\'t required to enjoy aquatic plants — a half-barrel or large watertight container can host a scaled-down water garden on a patio or small yard.',
        },
        {
          type: 'table',
          headers: ['Plant', 'Container Suitability', 'Notes'],
          rows: [
            ['Dwarf water lily varieties', 'Excellent', 'Bred specifically for small container water gardens, bloom well in limited root space'],
            ['Miniature cattails (dwarf varieties)', 'Good', 'Provide vertical structure without the aggressive spread of standard cattails'],
            ['Parrot\'s feather', 'Good', 'Trailing oxygenator/filler that softens a container\'s rim'],
            ['Water lettuce, water hyacinth', 'Good, but treat as annuals or discard responsibly each fall', 'Same invasive concerns apply even in a container — never release excess growth outdoors'],
            ['Dwarf papyrus', 'Excellent', 'Adds height and texture, tolerates the confined root space of a container well'],
          ],
        },
        {
          type: 'tip',
          emoji: '🛢️',
          text: 'A container water garden needs no pump or filtration system if planted with a balanced mix of oxygenators and surface coverage — the same self-regulating principles that apply to a full pond scale down effectively to container size.',
        },
      ],
    },
  ],
};
