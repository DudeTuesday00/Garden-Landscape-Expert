export const deerResistantContent = {
  id: 'deer-resistant',
  hero: {
    emoji: '🦌',
    title: 'Deer-Resistant Plants',
    subtitle: 'Discover which plants deer reliably leave alone — and build a landscape strategy that stops the damage without an eight-foot fence.',
  },
  intro: 'Deer pressure is intensifying across the United States as suburban development fragments habitat and deer populations grow without natural predators. "Deer-resistant" is not the same as "deer-proof" — a hungry deer in winter or a new population moving through an unfamiliar area will sample plants it would otherwise ignore. That said, certain plants are so reliably unappealing to deer that they form the backbone of low-browse-pressure landscapes: strongly aromatic herbs and ornamentals (lavender, catmint, Russian sage, ornamental alliums), plants with toxic compounds (foxglove, monkshood, daffodils, hellebores), and those with textures deer dislike (lamb\'s ear, ferns, ornamental grasses with sharp edges). The practical strategy is to surround more vulnerable plants with reliably resistant ones, creating a protective buffer.',
  sections: [
    {
      id: 'why-resistance-varies',
      title: 'Why "Deer-Resistant" Isn\'t "Deer-Proof"',
      blocks: [
        {
          type: 'p',
          text: 'Deer resistance ratings, including the ones in this guide, describe likelihood, not certainty. A deer population that has learned a particular plant is safe to eat (through repeated exposure with no negative consequence) will sample it regardless of its reputation, and a starving deer in a harsh winter will eat almost anything to survive. Resistance comes down to three real mechanisms — knowing which one applies to a given plant tells you how reliable it actually is.',
        },
        {
          type: 'table',
          headers: ['Resistance Mechanism', 'How It Works', 'Reliability', 'Example Plants'],
          rows: [
            ['Toxicity', 'The plant contains compounds that are genuinely harmful if eaten in quantity', 'High — deer learn to avoid these quickly and reliably', 'Foxglove, monkshood, daffodil, hellebore, boxwood'],
            ['Strong scent/taste', 'Aromatic oils or bitter compounds make the plant unpalatable', 'High under normal pressure, can fail under severe hunger', 'Lavender, Russian sage, catmint, ornamental alliums, most culinary herbs'],
            ['Texture', 'Fuzzy, prickly, leathery, or tough foliage discourages browsing', 'Moderate — deer will still sample these when hungry enough', 'Lamb\'s ear, most ferns, ornamental grasses, holly'],
            ['Simply unfamiliar/untested', 'A plant deer haven\'t encountered before in your specific area', 'Low and unpredictable — not a real strategy on its own', 'Newly introduced ornamentals with no local track record'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Regional deer populations develop different preferences based on what they\'ve grown up eating — a plant considered reliably resistant in one region can be readily browsed in another. Treat published resistance lists (including this one) as a strong starting point, not a guarantee for your specific yard.',
        },
        {
          type: 'image',
          src: '/guides/deer-resistant/deer-in-yard.jpg',
          alt: 'A deer standing at the edge of a suburban backyard near garden plantings',
          caption: 'Deer pressure varies widely by region and season — treat resistance ratings as likelihood, not certainty.',
        },
      ],
    },
    {
      id: 'reliable-perennials-bulbs',
      title: 'Reliable Deer-Resistant Perennials and Bulbs',
      blocks: [
        {
          type: 'table',
          headers: ['Plant', 'Zones', 'Resistance Mechanism', 'Notes'],
          rows: [
            ['Lavender', '5-9', 'Strong scent', 'Full sun, excellent drainage; one of the most reliably ignored plants across most regions'],
            ['Russian sage', '4-9', 'Strong scent', 'Tall, airy texture; thrives in poor, dry soil'],
            ['Catmint (Nepeta)', '3-8', 'Strong scent', 'Long bloom season, tolerates heat and drought once established'],
            ['Ornamental allium', '3-9', 'Strong scent (bulb family)', 'Reliable spring/summer bloom; deer avoid the entire onion family'],
            ['Daffodil', '3-8', 'Toxicity', 'One of the most deer-proof spring bulbs available — plant liberally where deer pressure is high'],
            ['Foxglove', '4-8', 'Toxicity', 'Toxic to pets and livestock too — site with that in mind'],
            ['Hellebore', '4-9', 'Toxicity', 'Blooms in late winter/early spring when little else is available, without being browsed'],
            ['Lamb\'s ear', '4-8', 'Texture', 'Fuzzy foliage deters most browsing; can rot in humid climates with poor drainage'],
            ['Yarrow', '3-9', 'Strong scent/taste', 'Drought-tolerant, long bloom, attracts pollinators'],
            ['Ornamental grasses (most)', 'Varies by species', 'Texture', 'Sharp-edged blades discourage browsing; a few species (some fescues) are more palatable, so verify per species'],
          ],
        },
        {
          type: 'tip',
          emoji: '🌼',
          text: 'Tulips and hostas are the two most commonly and severely browsed ornamentals — if deer pressure is significant, consider substituting daffodils for tulips and ferns or heucheras for hostas rather than fighting a losing battle with repellents alone.',
        },
        {
          type: 'image',
          src: '/guides/deer-resistant/lavender-russian-sage.jpg',
          alt: 'A garden border planted with lavender and Russian sage in full bloom',
          caption: 'Lavender and Russian sage are among the most reliably deer-resistant perennials across most US regions.',
        },
      ],
    },
    {
      id: 'reliable-shrubs-trees',
      title: 'Reliable Deer-Resistant Shrubs and Trees',
      blocks: [
        {
          type: 'table',
          headers: ['Plant', 'Zones', 'Resistance Mechanism', 'Notes'],
          rows: [
            ['Boxwood', '5-9', 'Toxicity/bitter compounds', 'Classic foundation shrub, reliably ignored even under heavy pressure'],
            ['Barberry (Japanese)', '4-8', 'Thorns', 'Check local invasive species status before planting — restricted in some states'],
            ['Spirea', '4-9', 'Bitter foliage', 'Reliable flowering shrub, easy care'],
            ['Butterfly bush', '5-9', 'Strong scent', 'Attracts pollinators while repelling deer; check invasive status in your region'],
            ['Inkberry holly', '5-9', 'Toxicity/texture', 'Good boxwood alternative for wetter or acidic soils'],
            ['Bald cypress', '4-10', 'Unusual foliage texture', 'Reliable as a young tree, unlike many other young trees that are readily browsed'],
            ['American holly', '5-9', 'Prickly leaves', 'Berries provide winter wildlife food without browse damage to the plant itself'],
            ['Eastern red cedar', '2-9', 'Strong scent, tough foliage', 'Reliable windbreak/screening tree with low deer damage'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Young trees of almost any species — including otherwise "resistant" ones — are far more vulnerable than mature specimens, both to browsing and to antler rubbing by bucks in fall. Protect trunks and lower branches with tree guards or fencing for the first several years regardless of species.',
        },
        {
          type: 'image',
          src: '/guides/deer-resistant/boxwood-hedge.jpg',
          alt: 'A well-maintained boxwood hedge along a garden foundation planting',
          caption: 'Boxwood is a classic foundation shrub that deer reliably ignore, even under heavy browse pressure.',
        },
      ],
    },
    {
      id: 'repellents',
      title: 'Repellent Sprays — What Works and How to Use Them',
      blocks: [
        {
          type: 'p',
          text: 'Repellent sprays work by taste, scent, or both, and effectiveness depends heavily on consistent reapplication and rotation — deer that encounter the same repellent repeatedly can habituate to it over time.',
        },
        {
          type: 'table',
          headers: ['Repellent Type', 'How It Works', 'Reapplication', 'Notes'],
          rows: [
            ['Putrescent whole-egg solids', 'Smell mimics predator kill sites, triggering an avoidance instinct', 'Every 2-4 weeks, sooner after heavy rain', 'One of the most consistently effective repellent categories in independent trials'],
            ['Predator urine (coyote, bobcat, wolf)', 'Scent signals predator presence', 'Every 2-3 weeks', 'Effectiveness varies regionally depending on whether that predator is actually present locally'],
            ['Capsaicin-based sprays', 'Bitter, irritating taste on contact', 'Weekly, and always after rain', 'Best on ornamentals, not on edible plants intended for harvest'],
            ['Soap-based repellents (bar soap shavings)', 'Scent deterrent', 'Monthly', 'Low-cost, widely available, moderate effectiveness'],
          ],
        },
        {
          type: 'tip',
          emoji: '🔄',
          text: 'Rotate between at least two different repellent types through a growing season rather than relying on one product continuously — this is the single most effective way to slow habituation.',
        },
        {
          type: 'image',
          src: '/guides/deer-resistant/spraying-repellent.jpg',
          alt: 'A gardener applying deer repellent spray to ornamental shrubs',
          caption: 'Consistent reapplication and rotating between repellent types are essential — deer can habituate to a single product over time.',
        },
      ],
    },
    {
      id: 'physical-deterrents',
      title: 'Fencing and Physical Deterrents',
      blocks: [
        {
          type: 'p',
          text: 'Fencing remains the only truly reliable deer deterrent — everything else, including every plant and spray in this guide, reduces pressure rather than eliminating it entirely.',
        },
        {
          type: 'table',
          headers: ['Method', 'How It Works', 'Cost', 'Best For'],
          rows: [
            ['8-foot woven wire or mesh fence', 'Deer generally won\'t jump a fence this tall', 'High', 'Whole-property or large garden protection where budget allows'],
            ['Double fence (two 4-foot fences, 4-5 feet apart)', 'Deer can\'t judge the total distance needed to clear both, so they won\'t attempt the jump', 'Moderate-high', 'A lower-cost alternative to a single tall fence'],
            ['Electric fence (baited with peanut butter)', 'A mild shock while baited teaches deer to avoid the fence entirely', 'Moderate', 'Vegetable gardens and orchards'],
            ['Motion-activated sprinklers', 'Sudden water spray startles deer away from a specific area', 'Low-moderate', 'Protecting a single bed or high-value planting rather than a whole property'],
            ['Individual plant cages', 'Simple wire cages around especially vulnerable young plants', 'Low', 'New plantings, small orchards, vegetable seedlings'],
          ],
        },
        {
          type: 'tip',
          emoji: '🥜',
          text: 'An electric fence works best when deer are lured to touch it directly — smearing peanut butter on foil strips clipped to the wire teaches them the fence is dangerous within one or two encounters.',
        },
        {
          type: 'image',
          src: '/guides/deer-resistant/tall-fence-garden.jpg',
          alt: 'A tall wire mesh fence surrounding a vegetable garden to keep deer out',
          caption: 'A tall fence remains the only truly reliable deer deterrent — everything else reduces pressure rather than eliminating it.',
        },
      ],
    },
    {
      id: 'landscape-strategy',
      title: 'Building a Deer-Resistant Landscape Strategy',
      blocks: [
        {
          type: 'list',
          items: [
            'Place your most vulnerable, high-value plants (roses, hostas, tulips, fruit trees) closest to the house, where deer are more hesitant to approach.',
            'Surround vulnerable plants with a buffer ring of reliably resistant plants (lavender, Russian sage, catmint) rather than isolating them.',
            'Protect young trees and shrubs with cages or trunk guards for their first several years regardless of species reputation.',
            'Accept that severe deer pressure may require fencing for anything you genuinely cannot afford to lose — repellents and plant selection reduce damage but rarely eliminate it under heavy pressure.',
            'Reassess plant choices after a season of observation — local deer preferences vary, and what worked in a published guide may need local adjustment.',
          ],
        },
        {
          type: 'tip',
          emoji: '🏡',
          text: 'A landscape built primarily from resistant plants, with fencing reserved only for the few things you truly can\'t risk losing (a vegetable garden, a young orchard), is usually more sustainable than trying to protect everything with sprays and cages indefinitely.',
        },
      ],
    },
  ],
};
