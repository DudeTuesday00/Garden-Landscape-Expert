export const waterWiseGardeningContent = {
  id: 'water-wise-gardening',
  hero: {
    emoji: '💧',
    title: 'Water-Wise Gardening',
    subtitle: 'Cut your garden\'s water use dramatically while keeping plants healthy — with smart irrigation, strategic mulching, and drought-tolerant plant selection.',
  },
  intro: 'Water-wise gardening is not about tolerating a dry, sparse landscape — it is about working with how water moves through your soil and matching your plants to the water that naturally falls in your region. In most of the United States, the single most effective change a gardener can make is switching from overhead sprinklers to drip irrigation or soaker hoses: drip irrigation delivers water directly to root zones, loses almost nothing to evaporation, and keeps foliage dry which dramatically reduces fungal disease. Paired with a two-to-four-inch layer of organic mulch that slows evaporation from the soil surface, drip irrigation can cut garden water use by more than half without any reduction in plant health. This guide focuses on techniques any garden can apply to use less water — see the site\'s Xeriscape Design guide for a full ground-up low-water landscape redesign, including its detailed regional plant tables.',
  sections: [
    {
      id: 'drip-irrigation',
      title: 'Drip Irrigation System Design and Installation',
      blocks: [
        {
          type: 'p',
          text: 'Switching from overhead sprinklers to drip irrigation is the single highest-leverage change most gardens can make — sprinklers lose a substantial share of water to evaporation and wind drift before it ever reaches the soil, while drip delivers water directly to the root zone.',
        },
        {
          type: 'list',
          items: [
            'Run drip tubing or soaker hose along each row or bed, with emitters placed near the base of individual plants rather than broadcasting water across open soil.',
            'Connect to a hose-end timer for consistent, hands-off scheduling — most timers allow multiple daily start times and precise duration control.',
            'Use pressure-compensating emitters on longer runs so plants at the far end of the line receive the same flow as those near the source.',
            'Check emitters periodically for clogs (common with hard water or debris) — a single clogged emitter can leave a plant chronically underwatered even while the rest of the system runs normally.',
          ],
        },
        {
          type: 'tip',
          emoji: '💧',
          text: 'A basic drip irrigation kit for a modest vegetable garden or perennial bed costs relatively little and typically pays for itself within a season or two in water savings alone, on top of the labor saved from hand-watering.',
        },
        {
          type: 'image',
          src: '/guides/water-wise-gardening/drip-irrigation-vegetable-bed.jpg',
          alt: 'Black drip irrigation tubing running along rows of vegetables in a garden bed',
          caption: 'Drip irrigation delivers water directly to root zones, losing almost nothing to evaporation compared to overhead sprinklers.',
        },
      ],
    },
    {
      id: 'mulching-strategies',
      title: 'Mulching Strategies for Water Retention',
      blocks: [
        {
          type: 'p',
          text: 'A two-to-four-inch layer of organic mulch dramatically slows evaporation from the soil surface, moderates soil temperature swings, and suppresses the weeds that would otherwise compete for available moisture.',
        },
        {
          type: 'table',
          headers: ['Mulch Type', 'Water Retention Value', 'Best For'],
          rows: [
            ['Wood chips / arborist chips', 'Excellent', 'Trees, shrubs, and perennial beds — breaks down slowly, feeding fungal soil life over time'],
            ['Shredded bark', 'Good', 'Ornamental beds where a tidier finished look matters'],
            ['Straw', 'Good', 'Vegetable gardens — lightweight, easy to work around, breaks down quickly enriching soil'],
            ['Shredded leaves (leaf mold)', 'Good', 'Free, abundant in fall, excellent all-purpose mulch'],
            ['Compost', 'Moderate', 'Doubles as a light feeding layer but breaks down faster than coarser mulches, needing more frequent reapplication'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Keep mulch pulled back a few inches from plant stems and tree trunks — mulch piled directly against a stem traps moisture against it and invites rot and pest issues, undermining the very water-management benefit the mulch is meant to provide.',
        },
        {
          type: 'image',
          src: '/guides/water-wise-gardening/wood-chip-mulch-garden-bed.jpg',
          alt: 'A thick layer of wood chip mulch spread around plants in a garden bed',
          caption: 'A two-to-four-inch mulch layer slows evaporation, moderates soil temperature, and suppresses moisture-competing weeds.',
        },
      ],
    },
    {
      id: 'hydrozoning',
      title: 'Hydrozoning — Grouping Plants by Water Need',
      blocks: [
        {
          type: 'p',
          text: 'Hydrozoning means grouping plants with similar water needs together so irrigation can be scheduled per zone rather than uniformly across the whole garden — it prevents both overwatering drought-tolerant plants and underwatering thirsty ones sharing the same zone.',
        },
        {
          type: 'table',
          headers: ['Zone', 'Typical Plants', 'Irrigation Approach'],
          rows: [
            ['High water (oasis zone)', 'Vegetable gardens, lawn areas, moisture-loving ornamentals', 'Regular, consistent watering — closest to the house/patio where it gets the most attention and use'],
            ['Moderate water (transitional zone)', 'Most shrubs and perennials, established trees', 'Deep, less frequent watering; often the largest zone in a typical yard'],
            ['Low water (xeric zone)', 'Drought-tolerant natives, succulents, ornamental grasses', 'Minimal supplemental irrigation once established, positioned furthest from the house or in the most exposed locations'],
          ],
        },
        {
          type: 'tip',
          emoji: '🚿',
          text: 'A multi-zone drip irrigation system with a separate timer or valve per zone lets each hydrozone receive exactly the watering schedule it needs, rather than compromising on a single schedule that overwaters some plants and underwaters others.',
        },
        {
          type: 'image',
          src: '/guides/water-wise-gardening/hydrozoned-garden-beds.jpg',
          alt: 'A garden landscape showing distinct zones of lush plants near the house and drought-tolerant plants further out',
          caption: 'Grouping plants into water-need zones lets irrigation be scheduled precisely for each area instead of compromising across the whole yard.',
        },
      ],
    },
    {
      id: 'deep-watering-technique',
      title: 'Deep, Infrequent Watering vs. Shallow Daily Watering',
      blocks: [
        {
          type: 'p',
          text: 'How you water matters as much as how much — deep, infrequent watering develops deeper root systems than shallow daily watering, since roots grow toward available moisture and stay shallow if water never penetrates far into the soil.',
        },
        {
          type: 'list',
          items: [
            'Water to a depth of 8-12 inches for most established garden plants, then let the top few inches of soil dry out before watering again.',
            'Check watering depth by digging a small test hole after watering — a quick surface-only watering often looks adequate but only penetrates an inch or two.',
            'Water early morning rather than evening — water pressure is typically highest, evaporation is lowest, and foliage that gets wet dries quickly as temperatures rise (evening watering leaves foliage wet overnight, inviting fungal disease).',
            'New plantings need more frequent, shallower watering during establishment (their first several weeks to months) before transitioning to the deep, infrequent schedule appropriate for an established plant.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'A daily shallow watering habit — even if it feels attentive — actually trains a shallower, less drought-resilient root system than watering deeply every few days, making plants more dependent on frequent irrigation long-term, not less.',
        },
        {
          type: 'image',
          src: '/guides/water-wise-gardening/early-morning-watering.jpg',
          alt: 'A gardener watering plants deeply with a hose in the early morning light',
          caption: 'Watering deeply in the early morning develops deeper, more drought-resilient roots than frequent shallow watering.',
        },
      ],
    },
    {
      id: 'soil-amendment-for-water-retention',
      title: 'Soil Amendment to Improve Water Retention',
      blocks: [
        {
          type: 'p',
          text: 'Soil structure has an outsized effect on how efficiently water is used in the garden — the same amount of applied water goes much further in soil with good organic matter content than in compacted or sandy soil that drains too fast to be absorbed.',
        },
        {
          type: 'list',
          items: [
            'Work compost into sandy soil to increase its water-holding capacity — sandy soil\'s large particle size lets water drain through before roots can absorb it.',
            'Add organic matter to compacted clay soil to open its structure, since compacted clay can shed water as runoff before it soaks in at all.',
            'Apply a 1-3 inch compost top-dress annually as an ongoing water-retention investment, not a one-time fix — see the site\'s Soil Health guide for the full soil-improvement approach this fits into.',
            'Avoid tilling, which disrupts the soil structure and fungal networks that actually help hold moisture in place over time.',
          ],
        },
        {
          type: 'tip',
          emoji: '🪱',
          text: 'Soil rich in organic matter can hold significantly more available water per cubic foot than depleted soil of the same texture — meaning better soil doesn\'t just save water directly, it also gets more value out of every watering that does happen.',
        },
      ],
    },
    {
      id: 'rainwater-harvesting',
      title: 'Rainwater Harvesting as a Supplement',
      blocks: [
        {
          type: 'p',
          text: 'Capturing rainwater reduces reliance on municipal or well water and puts otherwise-wasted roof runoff to direct use in the garden — even a modest system meaningfully offsets summer watering demand.',
        },
        {
          type: 'table',
          headers: ['System', 'Capacity', 'Best For'],
          rows: [
            ['Rain barrel (single, 50-80 gallons)', 'Modest — fills quickly in a real rain event', 'Container gardens, small beds, supplementing hand-watering'],
            ['Linked rain barrels (multiple units)', 'Moderate', 'Larger gardens wanting more storage without a major installation'],
            ['Cistern (large-capacity tank)', 'Substantial — hundreds to thousands of gallons', 'Whole-property rainwater capture for serious water-wise gardeners'],
            ['Rain garden (infiltration, not storage)', 'N/A — water soaks into the ground rather than being stored', 'Managing stormwater runoff while feeding it to nearby plantings rather than a storm drain'],
          ],
        },
        {
          type: 'tip',
          emoji: '🌧️',
          text: 'See the site\'s Starting a Rain Barrel guide for full setup detail — a single barrel connected to a downspout is the easiest, lowest-cost entry point into rainwater harvesting and pairs naturally with the drip irrigation and hydrozoning approaches covered here.',
        },
        {
          type: 'image',
          src: '/guides/water-wise-gardening/rain-barrel-downspout.jpg',
          alt: 'A rain barrel connected to a downspout beside a garden bed',
          caption: 'A single rain barrel connected to a downspout is the easiest entry point into rainwater harvesting for the home garden.',
        },
      ],
    },
  ],
};
