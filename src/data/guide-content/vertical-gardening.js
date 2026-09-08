export const verticalGardeningContent = {
  id: 'vertical-gardening',
  hero: {
    emoji: '⬆️',
    title: 'Vertical Gardening',
    subtitle: 'Maximize your growing space by training plants upward — with trellis systems, tower planters, and living walls that transform fences and walls into productive growing surfaces.',
  },
  intro: 'Vertical gardening is one of the most effective strategies for small-space growers: a six-foot trellis occupies just a few inches of ground footprint while providing the equivalent growing surface of a much larger horizontal bed. In vegetable gardens, growing vining crops upward rather than sprawling them across the ground makes harvesting easier, improves air circulation around foliage (reducing fungal disease), and keeps fruit clean and visible. In ornamental gardens, a well-placed trellis with a climbing rose, clematis, or annual vine can completely transform a fence line, blank wall, or garden boundary — adding vertical height and flower power that no other element provides at the same cost.',
  sections: [
    {
      id: 'trellis-types-by-growth-habit',
      title: 'Trellis Types Matched to Plant Growth Habit',
      blocks: [
        {
          type: 'p',
          text: 'Trellis design must match how a specific plant actually climbs — a support built for the wrong growth habit either fails to hold the plant or wastes structure the plant can\'t use.',
        },
        {
          type: 'table',
          headers: ['Growth Habit', 'How It Climbs', 'Best Support', 'Example Plants'],
          rows: [
            ['Twining vines', 'Wrap their stems around a support', 'String, wire, or narrow rails/poles', 'Pole beans, morning glory, black-eyed Susan vine, hops'],
            ['Tendriled plants', 'Grip supports with thin curling tendrils', 'Wire mesh, netting, or lattice with narrow openings', 'Cucumbers, peas, grapes, gourds, sweet peas'],
            ['Heavy-stemmed climbers', 'Woody stems that thicken significantly over years', 'Robust, permanently fixed structures (not a lightweight trellis)', 'Climbing roses, wisteria, trumpet vine'],
            ['Sprawling/non-clinging vines', 'Need to be actively tied or woven to a support', 'Any sturdy frame, with regular tying as the plant grows', 'Tomatoes (indeterminate), some squash varieties'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Heavy-stemmed climbers like wisteria and mature climbing roses can eventually exert enough force to bend or collapse a flimsy trellis — plan for a genuinely robust, well-anchored structure from the start rather than upgrading later once the plant has already invested years of growth.',
        },
        {
          type: 'image',
          src: '/guides/vertical-gardening/pole-beans-trellis.jpg',
          alt: 'Pole beans climbing a tall wooden trellis in a vegetable garden',
          caption: 'Twining vines like pole beans wrap their stems around string or narrow rails, needing no tying to climb.',
        },
      ],
    },
    {
      id: 'vining-vegetables',
      title: 'Vegetable Crops Suited to Vertical Growing',
      blocks: [
        {
          type: 'p',
          text: 'Growing vining vegetables upward rather than letting them sprawl improves air circulation (reducing fungal disease), keeps fruit clean and off the soil, and makes harvesting dramatically easier.',
        },
        {
          type: 'table',
          headers: ['Crop', 'Support Needed', 'Notes'],
          rows: [
            ['Pole beans', 'Poles, strings, or a simple teepee structure', 'One of the easiest and most productive vertical crops for beginners'],
            ['Cucumbers', 'Wire mesh, netting, or a-frame trellis', 'Growing vertically keeps fruit straight and clean, and dramatically improves air circulation'],
            ['Peas', 'Netting or twiggy brush support', 'Lightweight vines need minimal support compared to heavier crops'],
            ['Indeterminate tomatoes', 'Sturdy cage, stake and tie, or string trellis (in a greenhouse/high tunnel)', 'Requires ongoing tying since tomatoes don\'t climb on their own'],
            ['Small winter squash / melons', 'Heavy-duty trellis with fruit slings', 'Individual fruit slings (fabric or netting pouches) support the fruit\'s weight as it develops on the vine'],
            ['Malabar spinach', 'Simple trellis or netting', 'A heat-tolerant vining green, useful for vertical growing in hot climates where lettuce struggles'],
          ],
        },
        {
          type: 'tip',
          emoji: '🍈',
          text: 'For melons and winter squash grown vertically, a fruit sling made from an old t-shirt, mesh bag, or pantyhose tied to the trellis supports the fruit\'s weight as it grows, preventing it from tearing off the vine before it matures.',
        },
        {
          type: 'image',
          src: '/guides/vertical-gardening/cucumbers-wire-mesh-trellis.jpg',
          alt: 'Cucumber vines climbing a wire mesh trellis with hanging cucumbers visible',
          caption: 'Growing cucumbers vertically keeps fruit clean, straight, and easy to harvest compared to sprawling them on the ground.',
        },
      ],
    },
    {
      id: 'ornamental-climbers',
      title: 'Ornamental Vines for Vertical Structure',
      blocks: [
        {
          type: 'p',
          text: 'A well-placed vertical planting can transform a plain fence line, blank wall, or garden boundary more dramatically — and at lower cost — than almost any other single landscape element.',
        },
        {
          type: 'table',
          headers: ['Plant', 'Type', 'Bloom/Interest', 'Notes'],
          rows: [
            ['Clematis', 'Perennial vine', 'Large, showy flowers, spring through summer depending on variety', 'Prefers "cool feet, warm face" — shade the root zone while the vine climbs into sun'],
            ['Climbing roses', 'Perennial (woody)', 'Repeat or one-time bloom depending on variety', 'Needs a genuinely sturdy, permanent structure — not a lightweight trellis'],
            ['Wisteria', 'Perennial (woody, vigorous)', 'Dramatic hanging flower clusters in spring', 'Extremely vigorous and heavy at maturity; needs the most robust support of any common ornamental vine'],
            ['Morning glory', 'Annual', 'Continuous summer blooms', 'Fast, easy, inexpensive annual coverage for a season'],
            ['Black-eyed Susan vine', 'Annual (perennial in warm zones)', 'Continuous summer blooms', 'Compact enough for container growing with a small trellis'],
            ['Trumpet vine', 'Perennial (very vigorous)', 'Bright tubular flowers, attracts hummingbirds', 'Can be aggressive/spreading — best given a dedicated, contained space'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Wisteria and trumpet vine are both beautiful but can become structurally destructive if grown against a house — their vigorous woody growth can work into siding, gutters, and roof lines over years. Grow them on a freestanding structure well away from the house itself.',
        },
        {
          type: 'image',
          src: '/guides/vertical-gardening/clematis-flowering-trellis.jpg',
          alt: 'A clematis vine with large purple flowers climbing a garden trellis',
          caption: 'Clematis prefers "cool feet, warm face" — shade the root zone while letting the vine climb into full sun.',
        },
      ],
    },
    {
      id: 'tower-and-pocket-planters',
      title: 'Tower Gardens and Pocket-Style Vertical Planters',
      blocks: [
        {
          type: 'p',
          text: 'Pocket-style vertical planters and tower gardens work best for shallow-rooted crops rather than deep-rooted vegetables — matching root depth to the system\'s limited soil volume is the key to success with these compact formats.',
        },
        {
          type: 'table',
          headers: ['System', 'Best Plants', 'Notes'],
          rows: [
            ['Fabric pocket planters (wall-mounted)', 'Lettuce, herbs, strawberries, annual flowers', 'Shallow soil pockets dry out quickly — check moisture more often than a standard container'],
            ['Stacking tower planters', 'Herbs, lettuce, strawberries', 'Vertical stacking multiplies growing area in a small footprint; upper tiers can shade lower ones depending on sun angle'],
            ['Hydroponic tower systems', 'Lettuce, herbs, small greens', 'Recirculating water/nutrient system; needs shallow-rooted crops suited to the small growing cups'],
            ['Repurposed pallet planters', 'Herbs, strawberries, shallow-rooted flowers', 'A low-cost DIY option using a wooden pallet lined with landscape fabric'],
          ],
        },
        {
          type: 'tip',
          emoji: '🍓',
          text: 'Strawberries are an especially good match for tower and pocket planters — their shallow roots suit the limited soil depth, and growing them vertically keeps developing berries clean and off the ground, reducing slug damage and rot.',
        },
        {
          type: 'image',
          src: '/guides/vertical-gardening/strawberry-tower-planter.jpg',
          alt: 'A stacking tower planter growing strawberries and herbs on a patio',
          caption: 'Stacking tower planters multiply growing area for shallow-rooted crops like strawberries and herbs in a small footprint.',
        },
      ],
    },
    {
      id: 'living-walls',
      title: 'Living Wall Systems for Containers',
      blocks: [
        {
          type: 'p',
          text: 'A living wall — a structured vertical arrangement of many small planting cells or pockets — creates dense, tapestry-like plant coverage on an otherwise flat vertical surface, whether outdoors on a patio wall or indoors as a feature.',
        },
        {
          type: 'list',
          items: [
            'Modular panel systems with individual planting cells offer the most design flexibility, letting different plants be swapped in and out of individual cells over time.',
            'A reliable, even watering system (drip irrigation built into the panel, or a wicking reservoir) is essential — hand-watering a living wall evenly is difficult and time-consuming.',
            'Choose plants with similar water and light needs throughout a single living wall installation, since the whole structure is typically watered uniformly.',
            'Outdoor living walls need a sun-exposure assessment across the full wall — a tall living wall can have meaningfully different light conditions from top to bottom or side to side.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌿',
          text: 'For a first living wall project, start with a smaller panel and tough, forgiving plants (sedum, many succulents, hardy ferns depending on exposure) before investing in a larger, more complex installation.',
        },
        {
          type: 'image',
          src: '/guides/vertical-gardening/living-wall-panel-succulents.jpg',
          alt: 'A modular living wall panel densely planted with succulents and small ferns on an outdoor patio wall',
          caption: 'A modular living wall panel creates dense, tapestry-like plant coverage on an otherwise flat vertical surface.',
        },
      ],
    },
    {
      id: 'designing-a-vertical-system',
      title: 'Designing a Productive Vertical System',
      blocks: [
        {
          type: 'p',
          text: 'A successful vertical growing plan considers the whole structure — fence, wall, or freestanding frame — as a coordinated system rather than a series of unrelated individual plantings.',
        },
        {
          type: 'list',
          items: [
            'Assess sun exposure along the entire vertical surface before choosing plants — a fence or wall often has different light conditions at its base versus its top, or along its length if partially shaded by nearby structures.',
            'Position taller vertical structures on the north side of a vegetable garden so they don\'t shade shorter crops as the sun moves through the day.',
            'Anchor freestanding trellises and arbors securely — a well-grown vine can become surprisingly heavy, and wind loading on a fully leafed-out structure is significant.',
            'Combine vegetable and ornamental vertical elements in the same garden — a productive bean trellis and a flowering clematis arbor can coexist and complement each other visually.',
          ],
        },
        {
          type: 'tip',
          emoji: '📐',
          text: 'Small patios and urban gardens benefit disproportionately from vertical growing — a single well-designed trellis or living wall can add more usable growing area to a tiny space than any other single intervention.',
        },
      ],
    },
  ],
};
