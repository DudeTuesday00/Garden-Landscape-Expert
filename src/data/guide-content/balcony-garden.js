export const balconyGardenContent = {
  id: 'balcony-garden',
  hero: {
    emoji: '🏙️',
    title: 'Balcony Garden',
    subtitle: 'Turn a small balcony into a productive, beautiful growing space — with the right containers, plants, and watering system for high-rise conditions.',
  },
  intro: 'Balcony gardening presents a unique set of challenges that ground-level gardeners never encounter: weight limits that restrict soil volume, wind exposure that desiccates plants and topples tall containers, reflected heat from glass and concrete that pushes temperatures well above ambient air temperature, and limited outdoor water access that makes frequent container watering a logistical challenge. None of these obstacles are insurmountable — but ignoring them leads to expensive failures. A successful balcony garden starts with a realistic assessment of sun exposure (south-facing balconies receive full sun; north-facing may be too shaded for most vegetables), checking the building\'s load-bearing capacity, and selecting containers and growing media designed for weight reduction.',
  sections: [
    {
      id: 'weight-and-structure',
      title: 'Weight Limits and Structural Considerations',
      blocks: [
        {
          type: 'p',
          text: 'A saturated container of standard potting soil is dramatically heavier than the same container dry — a single 24-inch pot filled with wet soil can weigh well over 100 pounds. Multiply that across several containers, and a balcony garden can approach or exceed load limits that were never designed with gardening in mind.',
        },
        {
          type: 'list',
          items: [
            'Check with a building manager, HOA, or condo association for the balcony\'s rated load capacity before committing to large containers — this information isn\'t always intuitive from the balcony\'s appearance.',
            'Distribute weight toward the balcony\'s perimeter and structural supports (near the building wall) rather than concentrating it at the outer edge or center of a cantilevered slab.',
            'Use several smaller, lighter containers rather than one enormous one — this also gives more flexibility to rearrange as plants grow or conditions change.',
            'Favor lightweight container materials (fabric grow bags, resin, fiberglass) over ceramic or concrete, which add substantial weight before any soil goes in.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Older buildings and older balconies, especially cantilevered concrete slabs without visible support beams, deserve extra caution — when in doubt, keep total container weight conservative and check with a structural professional for a genuinely heavy planting scheme.',
        },
        {
          type: 'image',
          src: '/guides/balcony-garden/city-balcony-containers.jpg',
          alt: 'Several small potted plants arranged along the edge of a city apartment balcony',
          caption: 'Distributing several smaller containers near a balcony\'s structural supports is safer than concentrating weight in one large pot.',
        },
      ],
    },
    {
      id: 'lightweight-growing-media',
      title: 'Lightweight Growing Media and Containers',
      blocks: [
        {
          type: 'p',
          text: 'Standard potting soil, and especially garden soil, is far heavier than growing media formulated for weight reduction. Swapping to a lighter mix is one of the highest-leverage changes a balcony gardener can make.',
        },
        {
          type: 'table',
          headers: ['Growing Media', 'Weight (relative)', 'Notes'],
          rows: [
            ['Standard potting soil', 'Heaviest', 'Fine for ground-level containers, not ideal for weight-restricted balconies'],
            ['Perlite-heavy container mix', 'Light', 'Excellent drainage and aeration; commonly used in professional container growing'],
            ['Coco coir-based blend', 'Light', 'Sustainable, holds moisture well, rehydrates easily if it dries out'],
            ['Commercial soilless "container mix"', 'Light', 'Purpose-built for pots — no field soil, which is the primary source of excess weight'],
            ['Garden/field soil', 'Heaviest, also compacts poorly in containers', 'Avoid entirely for balcony containers regardless of weight — drains poorly in a pot'],
          ],
        },
        {
          type: 'tip',
          emoji: '🎒',
          text: 'Fabric grow bags are noticeably lighter than plastic or ceramic pots of equivalent volume and provide excellent air pruning of roots, which produces a healthier root system than a solid-walled container of the same size.',
        },
        {
          type: 'image',
          src: '/guides/balcony-garden/fabric-grow-bags.jpg',
          alt: 'Fabric grow bags planted with vegetables on a balcony floor',
          caption: 'Fabric grow bags are significantly lighter than ceramic or plastic pots of the same volume — an easy weight-saving swap.',
        },
      ],
    },
    {
      id: 'wind-management',
      title: 'Managing Wind Exposure',
      blocks: [
        {
          type: 'p',
          text: 'Wind is often the most underestimated balcony challenge, particularly on upper floors where wind speeds are noticeably higher than at street level. Wind desiccates foliage faster than the same temperature at ground level, and it can physically topple top-heavy containers or snap tall, brittle stems.',
        },
        {
          type: 'list',
          items: [
            'Choose compact, sturdy-stemmed varieties over tall, top-heavy ones where wind exposure is significant.',
            'Use heavier containers (or add weight low in a lightweight container) for stability rather than relying on plant weight alone.',
            'Install a wind-permeable screen (lattice, mesh windbreak fabric) rather than a solid barrier — a solid wall creates destructive turbulence on its leeward side instead of simply blocking wind.',
            'Group containers together rather than spacing them widely — plants partially shelter each other from direct wind exposure.',
            'Water more frequently on windy days, since wind accelerates moisture loss from both soil and foliage.',
          ],
        },
        {
          type: 'tip',
          emoji: '💨',
          text: 'A wind-exposed balcony on an upper floor can dry out a container two to three times faster than an equivalent container at ground level in still air — factor this into your watering plan, not just your plant selection.',
        },
        {
          type: 'image',
          src: '/guides/balcony-garden/wind-screen-balcony.jpg',
          alt: 'A mesh wind-permeable screen installed along a balcony railing with potted plants',
          caption: 'A wind-permeable screen protects plants without creating the destructive turbulence a solid barrier would on a high-rise balcony.',
        },
      ],
    },
    {
      id: 'best-plants-by-exposure',
      title: 'Best Plants by Sun Exposure',
      blocks: [
        {
          type: 'table',
          headers: ['Exposure', 'Vegetables', 'Herbs', 'Ornamentals'],
          rows: [
            ['Full sun (south-facing)', 'Tomatoes (determinate/patio varieties), peppers, cucumbers (bush varieties), bush beans', 'Basil, rosemary, thyme, oregano', 'Petunias, geraniums, lantana, zinnias'],
            ['Partial sun (east/west-facing)', 'Lettuce, spinach, radishes, bush beans', 'Parsley, chives, mint', 'Begonias, impatiens (with some direct sun), coleus'],
            ['Shade (north-facing)', 'Leafy greens only, and even these will be slow-growing', 'Mint, chives (tolerate more shade than most herbs)', 'Impatiens, begonias, fuchsia, ferns'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'A north-facing balcony genuinely limits productive vegetable growing — most fruiting vegetables (tomatoes, peppers, cucumbers) need at least 6 hours of direct sun and will underperform badly in shade regardless of care quality. Lean into shade-tolerant ornamentals and leafy greens rather than fighting the exposure.',
        },
        {
          type: 'image',
          src: '/guides/balcony-garden/tomatoes-peppers-balcony.jpg',
          alt: 'Container-grown tomato and pepper plants thriving on a sunny balcony',
          caption: 'A south-facing balcony in full sun can support fruiting vegetables like tomatoes and peppers in the right patio varieties.',
        },
      ],
    },
    {
      id: 'watering-systems',
      title: 'Drip Irrigation and Self-Watering Containers',
      blocks: [
        {
          type: 'p',
          text: 'Container plants dry out far faster than in-ground plants, and a balcony\'s limited outdoor water access makes daily hand-watering a real logistical burden, especially during vacation or a hot stretch of weather.',
        },
        {
          type: 'table',
          headers: ['System', 'How It Works', 'Best For'],
          rows: [
            ['Self-watering containers (built-in reservoir)', 'A water reservoir at the base wicks moisture up to roots as needed, refilled every few days to a week', 'Anyone without easy outdoor water access; reduces watering frequency significantly'],
            ['Drip irrigation on a timer', 'Slow, steady drip delivered to each container on an automated schedule', 'Multiple containers, vacation coverage, consistent watering without daily attention'],
            ['Water-retention granules mixed into soil', 'Absorb and slowly release water within the growing medium', 'Supplementing either method above during hot stretches'],
            ['Simple saucer trays', 'Catch runoff and allow limited re-absorption', 'Low-cost baseline for any container, though not a substitute for a real watering system in hot weather'],
          ],
        },
        {
          type: 'tip',
          emoji: '💧',
          text: 'Connecting a drip irrigation timer to an indoor faucet via a hose running out a window or door is a practical workaround on balconies with no dedicated outdoor spigot.',
        },
      ],
    },
    {
      id: 'vertical-growing',
      title: 'Vertical Growing Systems for Maximizing Space',
      blocks: [
        {
          type: 'p',
          text: 'A small balcony footprint doesn\'t have to limit growing space if vertical structures are used to multiply the usable area beyond the floor plan.',
        },
        {
          type: 'list',
          items: [
            'Railing planters hang directly on the balcony railing, adding a full planting tier without using any floor space.',
            'Wall-mounted pocket planters or vertical garden systems turn a bare wall into growing area for herbs, lettuce, and strawberries.',
            'A trellis or vertical support lets vining crops (cucumbers, pole beans, small melons) grow upward rather than sprawling, dramatically increasing yield per square foot of floor space.',
            'Tiered plant stands stack multiple pots vertically in a small footprint while keeping each individually accessible for watering and harvest.',
          ],
        },
        {
          type: 'tip',
          emoji: '📐',
          text: 'Combine railing planters, a wall system, and one or two floor containers with a trellis rather than choosing just one approach — the combination genuinely multiplies a small balcony\'s effective growing area.',
        },
        {
          type: 'image',
          src: '/guides/balcony-garden/vertical-trellis-balcony.jpg',
          alt: 'A vertical trellis with climbing vegetables on a small balcony alongside railing planters',
          caption: 'Railing planters and a vertical trellis together can multiply a small balcony\'s effective growing area well beyond its floor space.',
        },
      ],
    },
  ],
};
