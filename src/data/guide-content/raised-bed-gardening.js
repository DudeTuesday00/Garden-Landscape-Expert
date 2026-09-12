export const raisedBedGardeningContent = {
  id: 'raised-bed-gardening',
  hero: {
    emoji: '🪵',
    title: 'Raised Bed Gardening',
    subtitle: 'Build, size, and fill a raised bed correctly — better drainage, easier maintenance, and full control over your growing soil from day one.',
  },
  intro: 'A raised bed is simply a contained mound of growing soil, built up above the surrounding ground level — and that one change solves several of the most common problems gardeners face with in-ground beds: poor native soil, drainage issues, soil compaction from foot traffic, and the physical strain of bending all the way to ground level. This guide covers material selection, sizing, and filling a raised bed from scratch. For the specific grid-based intensive planting system many gardeners use once a raised bed is built, see the site\'s Square Foot Gardening guide — this guide covers the bed itself, that one covers what to do inside it. For calculating exact soil volume and a shopping list once you\'ve settled on dimensions, use the site\'s Soil & Raised Bed Calculator tool.',
  sections: [
    {
      id: 'why-raised-beds',
      title: 'Why Build a Raised Bed',
      blocks: [
        {
          type: 'p',
          text: 'Raised beds solve several distinct problems at once, which is why they\'ve become the default recommendation for anyone starting a new vegetable garden rather than working with existing ground soil.',
        },
        {
          type: 'list',
          items: [
            'Full control over soil quality — instead of amending poor native soil (heavy clay, compacted urban lots, contaminated soil near an old structure) over several years, a raised bed starts with exactly the soil mix you choose.',
            'Better drainage — soil in a raised bed drains faster than the surrounding ground, which matters enormously in a wet spring or a yard with poor natural drainage.',
            'Warms up faster in spring — raised soil warms several degrees faster than ground-level soil, allowing earlier planting in cooler zones.',
            'No soil compaction from foot traffic — since beds are narrow enough to reach across, no one ever walks on the growing soil, keeping it loose and well-aerated all season.',
            'Easier on the body — a taller bed (18-24 inches) can be gardened from a stool or even standing, a real consideration for anyone with mobility or back limitations.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌱',
          text: 'A raised bed also gives a clean physical edge that keeps grass and spreading weeds from creeping into the growing area — a small but meaningful maintenance savings over an unedged in-ground bed.',
        },
        {
          type: 'image',
          src: '/guides/raised-bed-gardening/cedar-raised-beds-vegetable-garden.jpg',
          alt: 'A row of cedar raised garden beds filled with thriving vegetable plants in a backyard',
          caption: 'A raised bed gives full control over soil quality from day one, rather than amending poor native soil over several years.',
        },
      ],
    },
    {
      id: 'materials-and-construction',
      title: 'Materials and Construction',
      blocks: [
        {
          type: 'p',
          text: 'Material choice is mostly a tradeoff between upfront cost and how many years the bed will last before needing to be rebuilt — there\'s no single correct answer, just the right fit for budget and how permanent you want the structure to be.',
        },
        {
          type: 'table',
          headers: ['Material', 'Typical Lifespan', 'Notes'],
          rows: [
            ['Untreated pine/fir', '3-5 years', 'Cheapest option; rots fastest, especially in contact with wet soil'],
            ['Cedar or redwood', '10-15 years', 'Naturally rot- and insect-resistant without chemical treatment; the most common recommendation for food gardens'],
            ['Pressure-treated lumber (modern formulations)', '15-20 years', 'Modern pressure-treated wood (since 2003) no longer uses the arsenic-based preservatives of older lumber and is considered safe for food gardens by most extension services, though some gardeners still prefer to avoid it out of caution'],
            ['Composite/recycled plastic lumber', '20+ years', 'Higher upfront cost, doesn\'t rot, doesn\'t need replacement — the best long-term value if budget allows'],
            ['Galvanized metal (corrugated steel)', '15-20+ years', 'Increasingly popular; can heat up soil faster in full sun, which is an advantage in cool climates and a drawback in hot ones'],
            ['Concrete block or brick', 'Effectively permanent', 'Highest upfront cost and labor; the only option that reads as permanent landscape architecture rather than a garden structure'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Avoid using old railroad ties, utility poles, or any reclaimed lumber that may have been treated with creosote or older chromated-copper-arsenate (CCA) preservatives — both can leach into soil used to grow food.',
        },
        {
          type: 'image',
          src: '/guides/raised-bed-gardening/building-cedar-bed-frame.jpg',
          alt: 'A gardener assembling a cedar raised bed frame with a drill in a backyard',
          caption: 'Cedar and redwood resist rot naturally without chemical treatment, making them the most common recommendation for food gardens.',
        },
      ],
    },
    {
      id: 'sizing-and-height',
      title: 'Sizing and Height',
      blocks: [
        {
          type: 'p',
          text: 'Bed dimensions matter more than they might seem — a bed built too wide is a genuine, lasting inconvenience every single time you garden it.',
        },
        {
          type: 'list',
          items: [
            'Keep width to 4 feet or less if accessible from both sides, or 2-3 feet if only accessible from one side — this is the single most important sizing rule, since it ensures you can reach the center to plant, weed, and harvest without ever stepping into the bed.',
            'Length is flexible and mostly limited by available space and lumber lengths — 8 feet is a common standard that avoids excessive cutting or waste.',
            'A 6-8 inch depth is the practical minimum for most vegetables, but 12 inches is a better standard depth for strong root development in most crops.',
            'Go to 18-24 inches for root vegetables that need deep, loose soil (carrots, parsnips) or if accessibility (gardening from a stool or standing) matters.',
          ],
        },
        {
          type: 'tip',
          emoji: '📏',
          text: 'If mobility is a real consideration, a 24-30 inch tall bed lets most people garden from a standing position without bending at all — worth the extra material cost for anyone for whom that changes whether gardening stays comfortable long-term.',
        },
        {
          type: 'image',
          src: '/guides/raised-bed-gardening/measuring-raised-bed-width.jpg',
          alt: 'A gardener measuring the width of a raised garden bed frame with a tape measure',
          caption: 'Keeping width to 4 feet or less (accessible from both sides) ensures the center can always be reached without stepping into the bed.',
        },
      ],
    },
    {
      id: 'filling-the-bed',
      title: 'Filling the Bed with Soil',
      blocks: [
        {
          type: 'p',
          text: 'What goes inside the bed matters as much as the bed itself — a well-built frame filled with poor soil produces poor results, while even a simple frame filled with a good mix performs well.',
        },
        {
          type: 'list',
          items: [
            'A standard, well-tested raised bed mix is roughly 1/3 topsoil, 1/3 compost, and 1/3 aeration material (perlite, vermiculite, or coarse sand) — this combination balances nutrition, drainage, and moisture retention.',
            'For a deep bed (18+ inches), filling the bottom third with coarse organic material (small branches, straw, leaves — a "hugelkultur"-style base) before adding the soil mix above it reduces the total volume of purchased soil needed and breaks down slowly to feed the bed over years.',
            'Avoid filling entirely with bagged topsoil or garden soil alone — both compact heavily over time without the compost and aeration components mixed in.',
            'Top off with 1-2 inches of fresh compost each spring rather than refilling the whole bed — raised bed soil settles and depletes gradually, and an annual top-dressing keeps it productive indefinitely.',
          ],
        },
        {
          type: 'tip',
          emoji: '🧮',
          text: 'Use the site\'s Soil & Raised Bed Calculator tool to compute exact cubic feet needed for your specific bed dimensions and get a bag-count shopping list broken down by mix component — far more reliable than estimating by eye.',
        },
        {
          type: 'image',
          src: '/guides/raised-bed-gardening/filling-raised-bed-soil-mix.jpg',
          alt: 'A gardener shoveling a soil and compost mix into an empty raised bed frame',
          caption: 'A standard mix of one-third topsoil, one-third compost, and one-third aeration material balances nutrition, drainage, and moisture retention.',
        },
      ],
    },
    {
      id: 'placement-and-first-season',
      title: 'Placement and Your First Season',
      blocks: [
        {
          type: 'p',
          text: 'Where a bed goes and how it\'s handled in its first season sets the tone for everything that follows — a few decisions made before planting anything save real trouble later.',
        },
        {
          type: 'list',
          items: [
            'Site the bed for at least 6-8 hours of direct sun for most vegetables — a beautifully built bed in too much shade will always underperform no matter what\'s planted in it.',
            'Orient a long bed north-to-south where possible, so taller plants don\'t shade shorter ones for most of the day.',
            'Level the ground before assembly — an unlevel bed causes soil and water to pool unevenly on one side.',
            'Line the bottom with hardware cloth if burrowing pests (voles, gophers) are a known problem in your area, installed before filling with soil.',
            'Water more frequently than an in-ground bed would need in the first season — raised beds drain faster and dry out faster, which is a real advantage in wet conditions but means the watering habit needs to adjust upward.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'A brand-new raised bed dries out noticeably faster than gardeners expect coming from in-ground growing — check soil moisture more often in the first season rather than assuming the same watering schedule that worked in the ground will be enough.',
        },
        {
          type: 'image',
          src: '/guides/raised-bed-gardening/thriving-raised-bed-first-season.jpg',
          alt: 'A newly built raised garden bed with young vegetable plants thriving in its first growing season',
          caption: 'Raised beds drain and dry out faster than in-ground soil — a real advantage in wet conditions, but one that requires more frequent watering.',
        },
      ],
    },
  ],
};
