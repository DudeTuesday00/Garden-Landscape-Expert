export const windowBoxContent = {
  id: 'window-box',
  hero: {
    emoji: '🪟',
    title: 'Window Box Gardening',
    subtitle: 'Design beautiful window boxes that look lush from the street and inside — with the right plant combinations, soil, and care for every season.',
  },
  intro: 'A well-planted window box transforms the exterior of a house in a way that few other garden elements can match for cost and effort — a few good containers planted with a compelling combination immediately give a home a cared-for, inviting quality that registers from the street. The classic design formula — thriller (tall, dramatic centerpiece), filler (mounding, bushy mid-height plant), and spiller (trailing plant that cascades over the edge) — works because it creates visual depth and prevents the flat, uniform look that makes many window boxes look underwhelming. The most important practical consideration is drainage: window boxes without drainage holes, or planted with dense garden soil rather than a quality container mix, will fail within weeks regardless of how well they were planted.',
  sections: [
    {
      id: 'thriller-filler-spiller',
      title: 'The Thriller, Filler, Spiller Design Formula',
      blocks: [
        {
          type: 'p',
          text: 'This classic three-part formula is the fastest route to a window box that looks professionally designed rather than randomly assembled. Each role serves a distinct visual purpose, and a box with all three reads as full and intentional far faster than one built from a single plant type.',
        },
        {
          type: 'table',
          headers: ['Role', 'Purpose', 'Placement', 'Example Plants'],
          rows: [
            ['Thriller', 'Tall, dramatic centerpiece that draws the eye', 'Center or back of the box', 'Ornamental grass, upright coleus, dracaena spike, snapdragon'],
            ['Filler', 'Mounding, bushy plants that fill the middle visual layer', 'Around the thriller, filling gaps', 'Petunias, calibrachoa, geraniums, begonias'],
            ['Spiller', 'Trailing plants that cascade over the box edge', 'Along the front edge', 'Trailing lobelia, ivy, sweet potato vine, trailing lysimachia'],
          ],
        },
        {
          type: 'tip',
          emoji: '🎨',
          text: 'A common ratio that reads as full without looking crowded is roughly one thriller, three fillers, and two to three spillers per standard 36-inch window box — adjust proportionally for other box lengths.',
        },
        {
          type: 'image',
          src: '/guides/window-box/thriller-filler-spiller.jpg',
          alt: 'A lush window box planted with a tall centerpiece, mounding flowers, and trailing vines cascading over the edge',
          caption: 'The thriller, filler, spiller formula creates visual depth that a single-plant-type box can\'t match.',
        },
      ],
    },
    {
      id: 'drainage-and-soil',
      title: 'Drainage and Soil — The Non-Negotiable Foundation',
      blocks: [
        {
          type: 'p',
          text: 'Window boxes without adequate drainage, or planted with the wrong growing medium, will fail within weeks regardless of how thoughtfully they were designed. This is the single most common reason a window box planting disappoints.',
        },
        {
          type: 'list',
          items: [
            'Confirm the box has drainage holes before planting — if it doesn\'t, drill several, or use a well-draining liner pot inside a decorative box instead.',
            'Use a quality container/potting mix, never dense garden soil — garden soil compacts in a confined container and suffocates roots.',
            'Add a layer of coarse material (broken pottery shards, packing peanuts, or a purpose-made drainage layer) at the very bottom only if the box is unusually deep; for most standard window boxes, a good potting mix alone drains adequately.',
            'Elevate the box slightly off a windowsill or ledge with small feet or spacers so drainage water can escape freely rather than pooling underneath.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'A window box mounted directly against a wall with no drainage gap can trap water against the house siding or brick over time — always ensure a small air gap and a way for excess water to drain away from the structure, not just out of the box.',
        },
        {
          type: 'image',
          src: '/guides/window-box/drainage-holes-potting-mix.jpg',
          alt: 'Close-up of a window box with visible drainage holes and light, well-draining potting mix',
          caption: 'Drainage holes and a quality potting mix are the non-negotiable foundation of a window box that will actually thrive.',
        },
      ],
    },
    {
      id: 'sun-plant-combinations',
      title: 'Full Sun Window Box Combinations',
      blocks: [
        {
          type: 'p',
          text: 'A south-facing window box in full sun can support a wide range of heat-tolerant, sun-loving annuals that bloom continuously through summer.',
        },
        {
          type: 'table',
          headers: ['Plant', 'Role', 'Notes'],
          rows: [
            ['Petunias', 'Filler', 'Continuous bloom all summer; deadhead or choose self-cleaning varieties to reduce maintenance'],
            ['Calibrachoa (Million Bells)', 'Filler/Spiller', 'Smaller-flowered petunia relative, excellent heat tolerance'],
            ['Geraniums', 'Filler', 'Reliable, drought-tolerant once established, classic window box choice'],
            ['Lantana', 'Filler', 'Extremely heat and drought tolerant, attracts pollinators'],
            ['Sweet potato vine', 'Spiller', 'Vigorous trailing chartreuse or purple foliage, low-maintenance'],
            ['Ornamental grasses (dwarf varieties)', 'Thriller', 'Textural contrast, tolerates heat and some drought stress'],
          ],
        },
        {
          type: 'tip',
          emoji: '☀️',
          text: 'Full-sun window boxes dry out fastest of all — plan on daily watering during peak summer heat, and consider a self-watering window box insert if daily watering isn\'t practical.',
        },
        {
          type: 'image',
          src: '/guides/window-box/petunias-geraniums-sunny.jpg',
          alt: 'A sunny window box overflowing with pink and red petunias and geraniums',
          caption: 'Petunias, geraniums, and calibrachoa bloom continuously through summer in a full-sun window box.',
        },
      ],
    },
    {
      id: 'shade-plant-combinations',
      title: 'Shade Window Box Combinations',
      blocks: [
        {
          type: 'p',
          text: 'A north-facing or heavily shaded window box needs plants genuinely suited to low light — sun-loving annuals will stretch, become leggy, and bloom poorly in shade regardless of care quality.',
        },
        {
          type: 'table',
          headers: ['Plant', 'Role', 'Notes'],
          rows: [
            ['Impatiens', 'Filler', 'The classic shade annual — continuous bloom, wide color range'],
            ['Begonias (wax or tuberous)', 'Filler', 'Tolerates deep shade well, attractive foliage even without bloom'],
            ['Fuchsia', 'Filler/Spiller', 'Distinctive pendant blooms, prefers cooler shaded conditions'],
            ['Trailing lysimachia (Creeping Jenny)', 'Spiller', 'Chartreuse trailing foliage that brightens a shaded box'],
            ['Ferns (dwarf varieties)', 'Thriller', 'Textural, shade-loving, doesn\'t need to flower to contribute visual interest'],
            ['Coleus (shade varieties)', 'Thriller/Filler', 'Foliage color carries the display where flowers would struggle'],
          ],
        },
        {
          type: 'tip',
          emoji: '🌑',
          text: 'Shaded window boxes hold moisture noticeably longer than sunny ones — check soil moisture before watering on a fixed schedule, since overwatering is the more common failure mode in shade.',
        },
        {
          type: 'image',
          src: '/guides/window-box/impatiens-begonias-shade.jpg',
          alt: 'A shaded window box filled with pink and white impatiens and begonias',
          caption: 'Impatiens and begonias thrive in a north-facing window box where sun-loving annuals would struggle.',
        },
      ],
    },
    {
      id: 'seasonal-replanting',
      title: 'Seasonal Replanting for Year-Round Interest',
      blocks: [
        {
          type: 'p',
          text: 'Swapping plantings with the seasons keeps a window box looking fresh through the whole year rather than fading after summer annuals decline, and it lets cool-season plants fill gaps that summer annuals can\'t handle.',
        },
        {
          type: 'table',
          headers: ['Season', 'Plants', 'Notes'],
          rows: [
            ['Spring', 'Pansies, violas, snapdragons, ranunculus', 'Cool-season annuals that thrive in the mild temperatures summer annuals would resent'],
            ['Summer', 'Petunias, calibrachoa, geraniums, lantana, sweet potato vine', 'Heat-tolerant classic combinations from the full sun and shade tables above'],
            ['Fall', 'Ornamental kale/cabbage, mums, pansies (second round), millet (ornamental grass)', 'Many spring cool-season plants perform a second time in fall\'s milder temperatures'],
            ['Winter (mild climates)', 'Pansies, violas, evergreen cuttings, winter-hardy heuchera', 'In frost-free or light-frost zones, a scaled-back planting can persist through winter'],
            ['Winter (cold climates)', 'Evergreen boughs, dogwood stems, pinecones, dried grasses (non-living arrangement)', 'A decorative, non-growing arrangement fills the box through hard winters where nothing can be actively grown'],
          ],
        },
        {
          type: 'tip',
          emoji: '📅',
          text: 'Replant at the shoulder seasons (roughly when night temperatures shift by 15-20°F from the prior season\'s norm) rather than on fixed calendar dates — local frost dates and heat onset vary enough by zone that this adapts naturally.',
        },
        {
          type: 'image',
          src: '/guides/window-box/fall-mums-ornamental-kale.jpg',
          alt: 'A fall window box planted with ornamental kale and mums in orange and purple tones',
          caption: 'Ornamental kale and mums extend a window box\'s seasonal interest well past the point summer annuals would fade.',
        },
      ],
    },
    {
      id: 'fertilizing-and-care',
      title: 'Fertilizing and Ongoing Care',
      blocks: [
        {
          type: 'p',
          text: 'Window box plantings are grown at high density in a small soil volume, which means nutrients deplete faster than in-ground plantings and consistent feeding matters more than it would for the same plants grown in open ground.',
        },
        {
          type: 'list',
          items: [
            'Feed with a balanced liquid fertilizer every 1-2 weeks during the growing season — container plantings need more frequent feeding than in-ground beds.',
            'Deadhead spent blooms regularly on varieties that aren\'t self-cleaning to encourage continued flowering rather than seed production.',
            'Trim back leggy growth by up to a third mid-season if plants become overgrown or stop blooming well — many annuals rebound with a fresh flush of growth and flowers.',
            'Check soil moisture daily during hot weather; a box in full sun can need water more than once a day in peak summer heat.',
            'Refresh the growing medium (or at minimum top-dress with fresh compost) at the start of each new seasonal planting rather than reusing depleted soil indefinitely.',
          ],
        },
        {
          type: 'tip',
          emoji: '✂️',
          text: 'A mid-season "haircut and feed" — trimming back leggy stems and following with a dose of fertilizer — is often enough to revive a window box that\'s started to look tired by midsummer, rather than replanting it entirely.',
        },
      ],
    },
  ],
};
