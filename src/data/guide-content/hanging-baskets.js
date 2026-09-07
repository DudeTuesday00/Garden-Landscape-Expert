export const hangingBasketsContent = {
  id: 'hanging-baskets',
  hero: {
    emoji: '🧺',
    title: 'Hanging Basket Guide',
    subtitle: 'Create lush, cascading hanging baskets that stay full and beautiful all season — with the right plants, soil mix, and feeding schedule.',
  },
  intro: 'Hanging baskets look effortless when done well, but the lush, overflowing baskets that drip with color all summer are the result of specific practices that most casual gardeners never learn. The basket must be generously sized — a twelve-inch basket is the practical minimum for a rewarding display; fourteen to sixteen inches allows a planting dense enough to mask the container entirely within a few weeks. The growing medium matters enormously: standard potting soil dries out too quickly and becomes hydrophobic when it does, while a basket-specific mix with coir, perlite, and a water-retaining polymer holds moisture long enough to survive the inevitable days when watering is delayed.',
  sections: [
    {
      id: 'sizing-and-liners',
      title: 'Basket Sizing and Liner Selection',
      blocks: [
        {
          type: 'p',
          text: 'Basket size and liner choice together determine how much soil volume — and therefore how much water and nutrient reserve — a basket has to work with. Bigger baskets are more forgiving of missed watering days and support a fuller, longer-lasting display.',
        },
        {
          type: 'table',
          headers: ['Basket Size', 'Best For', 'Notes'],
          rows: [
            ['10-12 inches', 'A single trailing plant or a simple 2-3 plant combination', 'The practical minimum for a rewarding display; dries out fastest of all sizes'],
            ['14-16 inches', 'A full thriller/filler/spiller combination, 4-6 plants', 'Dense enough to mask the container entirely within a few weeks; the sweet spot for most gardeners'],
            ['18+ inches', 'Large statement displays, multiple plant types', 'Heavy when watered — confirm the mounting hardware and structure can support the full wet weight'],
          ],
        },
        {
          type: 'h3',
          text: 'Liner Materials',
        },
        {
          type: 'table',
          headers: ['Liner', 'Water Retention', 'Notes'],
          rows: [
            ['Coco fiber', 'Moderate', 'Attractive natural look, breathable, moderate longevity (1-2 seasons)'],
            ['Sphagnum moss', 'Good', 'Classic look, holds moisture well, needs replacing more often than synthetic options'],
            ['Plastic/foam liners', 'Best', 'Least attractive on their own but hold moisture longest; often used with a decorative outer liner'],
            ['Pre-formed plastic basket pots', 'Best', 'No liner needed, built-in reservoir on some models, most convenient and lowest-maintenance option'],
          ],
        },
        {
          type: 'tip',
          emoji: '📏',
          text: 'When in doubt, size up rather than down — a slightly larger basket than you think you need is far more forgiving of hot weather, wind, and the occasional missed watering day.',
        },
        {
          type: 'image',
          src: '/guides/hanging-baskets/large-hanging-basket.jpg',
          alt: 'A large, full hanging basket overflowing with colorful trailing flowers on a porch',
          caption: 'A generously sized 14-16 inch basket is dense enough to mask the container entirely within a few weeks.',
        },
      ],
    },
    {
      id: 'soil-and-planting-density',
      title: 'Soil Mix and Planting Density',
      blocks: [
        {
          type: 'p',
          text: 'Standard potting soil dries out too quickly in a hanging basket and becomes hydrophobic (water-repellent) once bone dry, causing water to run straight through instead of rehydrating the root ball. A basket-specific mix solves both problems.',
        },
        {
          type: 'list',
          items: [
            'Use a basket or container mix containing coir or peat, perlite for aeration, and ideally a water-retaining polymer additive to extend the time between waterings.',
            'Never use garden soil — it compacts in a hanging basket, drains poorly, and dries into a dense, hard-to-rehydrate mass.',
            'Plant more densely than feels natural at first — hanging baskets are meant to look full quickly, and crowding plants slightly at planting produces a lush look faster than spacing them out to "grow into" the basket.',
            'Include plants at multiple heights and habits (upright, mounding, trailing) rather than a single plant type repeated, for a fuller, more dimensional look.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'If a basket has already dried out to the point of hydrophobic soil, submerging the entire root ball in a bucket of water for 15-20 minutes rehydrates it far more effectively than top-watering, which will simply run off a bone-dry mix.',
        },
        {
          type: 'image',
          src: '/guides/hanging-baskets/planting-basket-densely.jpg',
          alt: 'Hands planting several small flowering plants closely together into a hanging basket',
          caption: 'Planting a basket more densely than feels natural produces a lush, full look much faster than spacing plants out.',
        },
      ],
    },
    {
      id: 'sun-basket-combinations',
      title: 'Full Sun Basket Combinations',
      blocks: [
        {
          type: 'table',
          headers: ['Plant', 'Role', 'Notes'],
          rows: [
            ['Calibrachoa (Million Bells)', 'Filler/Spiller', 'Continuous small-flowered bloom, excellent heat tolerance'],
            ['Trailing petunias', 'Spiller', 'Classic hanging basket staple, wide color range'],
            ['Bacopa', 'Spiller', 'Delicate small white or blue flowers, softens harder-edged combinations'],
            ['Lobularia (Alyssum)', 'Filler', 'Fragrant, continuous small blooms, tolerates heat well'],
            ['Sweet potato vine', 'Spiller', 'Vigorous chartreuse or purple foliage, adds bold texture'],
            ['Zonal geraniums', 'Thriller', 'Reliable upright bloom, drought-tolerant once established'],
            ['Osteospermum (African Daisy)', 'Thriller/Filler', 'Bold daisy-like blooms, tolerates heat and some drought'],
          ],
        },
        {
          type: 'tip',
          emoji: '☀️',
          text: 'A full-sun basket built from this table\'s plants can typically go slightly longer between waterings than a mixed-tolerance basket, since all the included plants share similar drought tolerance — mixing a thirsty plant into a mostly drought-tolerant basket forces you to water for the thirstiest one.',
        },
        {
          type: 'image',
          src: '/guides/hanging-baskets/calibrachoa-petunia-basket.jpg',
          alt: 'A sunny hanging basket filled with trailing calibrachoa and petunias in bright colors',
          caption: 'Calibrachoa, trailing petunias, and bacopa form a reliable, heat-tolerant combination for full-sun baskets.',
        },
      ],
    },
    {
      id: 'shade-basket-combinations',
      title: 'Shade Basket Combinations',
      blocks: [
        {
          type: 'table',
          headers: ['Plant', 'Role', 'Notes'],
          rows: [
            ['Fuchsia', 'Thriller/Spiller', 'Classic shade basket plant with distinctive pendant blooms; prefers cooler shaded conditions'],
            ['Trailing begonias', 'Spiller', 'Continuous bloom, tolerates deep shade well'],
            ['Impatiens', 'Filler', 'The most reliable shade annual, wide color range, continuous bloom'],
            ['Torenia (Wishbone Flower)', 'Filler', 'Underused shade annual with distinctive bicolor blooms, heat-tolerant for a shade plant'],
            ['Ivy (English or trailing)', 'Spiller', 'Reliable foliage trailer, especially useful for winter/evergreen interest in mild climates'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Fuchsia and impatiens both naturally wilt in temperatures above 90°F even when the soil is adequately moist, then recover fully once temperatures drop in the evening — watering a heat-wilted basket that\'s already moist causes root rot rather than solving the actual problem.',
        },
        {
          type: 'image',
          src: '/guides/hanging-baskets/fuchsia-shade-basket.jpg',
          alt: 'A shaded hanging basket with pendant fuchsia blooms and trailing begonias',
          caption: 'Fuchsia and trailing begonias thrive in a shaded hanging basket where sun-loving annuals would struggle.',
        },
      ],
    },
    {
      id: 'watering-feeding',
      title: 'Watering and Feeding Schedules',
      blocks: [
        {
          type: 'p',
          text: 'Hanging baskets dry out and deplete nutrients faster than almost any other container type because of their small soil volume, full sun exposure on most sides, and wind exposure at a hanging height. Consistency in both watering and feeding matters more here than for any other container planting.',
        },
        {
          type: 'list',
          items: [
            'Water when the top inch of soil feels dry — in peak summer heat, this can mean daily watering for smaller baskets.',
            'Water until it drains from the bottom, ensuring the entire root ball is rehydrated, not just the surface.',
            'Feed weekly with a liquid fertilizer at half the labeled strength, or incorporate a slow-release granular fertilizer at planting with a monthly liquid top-up.',
            'Watch for pale, yellowing foliage or stalled bloom — both are common signs of nutrient depletion in a frequently-watered basket, since nutrients leach out with each watering.',
          ],
        },
        {
          type: 'tip',
          emoji: '💧',
          text: 'A basket that needs watering more than once a day in normal summer weather is usually undersized for its plant load or location — consider sizing up or relocating to slightly less intense sun rather than accepting a demanding watering schedule as inevitable.',
        },
      ],
    },
    {
      id: 'preventing-summer-decline',
      title: 'Preventing and Recovering from Summer Decline',
      blocks: [
        {
          type: 'p',
          text: 'Many hanging baskets look spectacular in June and decline noticeably by August — leggy growth, sparse bloom, and a generally tired appearance. This decline is preventable with a few mid-season interventions rather than accepted as inevitable.',
        },
        {
          type: 'list',
          items: [
            'Pinch or trim back leggy stems by up to a third in midsummer — most annuals respond with a fresh flush of compact growth and renewed bloom within a couple of weeks.',
            'Increase feeding frequency slightly during the most intense summer heat, when growth and bloom demand peak and nutrients leach out fastest.',
            'Remove spent blooms on varieties that aren\'t self-cleaning to redirect the plant\'s energy toward new flowers rather than seed production.',
            'Check for root-bound conditions if growth stalls despite good care — a basket that\'s been in place for a full season may benefit from being refreshed with new plants rather than nursed along indefinitely.',
          ],
        },
        {
          type: 'tip',
          emoji: '✂️',
          text: 'A "midsummer haircut and feed" — trimming back leggy growth and following immediately with a full-strength liquid feed — is the single most effective intervention for reviving a basket that\'s started to look tired, and it works on nearly every basket combination in this guide.',
        },
        {
          type: 'image',
          src: '/guides/hanging-baskets/trimming-basket.jpg',
          alt: 'Hands trimming back leggy stems on a hanging basket with garden shears',
          caption: 'A midsummer trim-and-feed revives a tired basket faster than any other single intervention.',
        },
      ],
    },
  ],
};
