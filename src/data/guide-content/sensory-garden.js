export const sensoryGardenContent = {
  id: 'sensory-garden',
  hero: {
    emoji: '✋',
    title: 'Sensory Garden',
    subtitle: 'Design a garden that engages all five senses — fragrance, texture, sound, taste, and color — for a space that is as therapeutic as it is beautiful.',
  },
  intro: 'A sensory garden is designed intentionally to engage all five senses rather than focusing solely on visual beauty — and the result is a space that feels alive in a way that purely ornamental gardens rarely do. The sound of water moving over stones, the softness of lamb\'s ear leaves, the fragrance of jasmine on a warm evening, the sharp taste of a fresh-picked herb, and the vibrant color of a pollinator-covered coneflower create an immersive experience with genuine therapeutic value. Sensory gardens are particularly meaningful for children, older adults, and people with sensory processing differences, but the benefits extend to anyone who uses the space — gardening researchers consistently find that time in sensory-rich outdoor environments reduces cortisol levels and improves mood.',
  sections: [
    {
      id: 'plants-for-fragrance',
      title: 'Plants for Fragrance',
      blocks: [
        {
          type: 'p',
          text: 'Fragrance is often the most immediately evocative sense in a garden — a single well-placed fragrant plant near a seating area or path can define a space\'s character more powerfully than any visual element.',
        },
        {
          type: 'table',
          headers: ['Plant', 'Fragrance Character', 'Best Placement'],
          rows: [
            ['Lavender', 'Clean, calming, herbal', 'Path edges, seating areas — releases scent when brushed'],
            ['Jasmine', 'Sweet, strongest in evening', 'Near a patio or window where evening scent can be enjoyed'],
            ['Rosemary', 'Resinous, herbal', 'Path edges, kitchen garden proximity'],
            ['Sweet alyssum', 'Honey-sweet, low-growing', 'Border edges, container plantings'],
            ['Lilac', 'Strong, sweet, seasonal', 'A single specimen near a frequently used entry or window'],
            ['Chocolate cosmos', 'Genuinely chocolate-scented', 'A novelty and conversation piece near seating'],
          ],
        },
        {
          type: 'tip',
          emoji: '🌸',
          text: 'Layer fragrance by bloom season (see the site\'s Fragrant Garden Path and Plants for Fragrance guides for detailed seasonal plant lists) so the sensory garden has scent available across as much of the year as possible, not just a single peak week.',
        },
        {
          type: 'image',
          src: '/guides/sensory-garden/lavender-jasmine-fragrant-path.jpg',
          alt: 'Lavender and jasmine planted along a garden path near a seating area',
          caption: 'Fragrant plants placed near seating and paths define a sensory garden\'s character more powerfully than any visual element.',
        },
      ],
    },
    {
      id: 'plants-for-texture',
      title: 'Plants for Touch and Texture',
      blocks: [
        {
          type: 'p',
          text: 'Touch is an underused sense in most gardens, but contrasting textures — smooth versus rough, soft versus firm — create an engaging tactile landscape that rewards close, hands-on exploration.',
        },
        {
          type: 'table',
          headers: ['Plant/Material', 'Texture', 'Notes'],
          rows: [
            ['Lamb\'s ear', 'Soft, velvety fuzz', 'One of the most reliably delightful touch plants for any age'],
            ['Mullein', 'Soft, felted leaves', 'Large, dramatic leaves add scale to the tactile experience'],
            ['Ornamental grasses', 'Fine, flowing, slightly rough', 'Movement adds a kinetic touch element beyond the leaf texture itself'],
            ['River stones', 'Smooth, cool', 'Path edging or a dry creek bed feature'],
            ['Bark mulch', 'Rough, textured underfoot', 'Path surface contrast against smoother paved areas'],
            ['Succulents (many varieties)', 'Firm, waxy, sometimes ridged', 'Container groupings at a touchable height'],
          ],
        },
        {
          type: 'tip',
          emoji: '🖐️',
          text: 'Position high-value touch plants like lamb\'s ear directly along path edges at a height easy to brush by hand, rather than tucked into the back of a bed where they\'re only visible, not touchable.',
        },
        {
          type: 'image',
          src: '/guides/sensory-garden/lambs-ear-soft-texture.jpg',
          alt: 'Close-up of soft velvety lambs ear leaves along a garden path edge',
          caption: 'Lamb\'s ear\'s velvety texture makes it one of the most reliably delightful touch plants for any age.',
        },
      ],
    },
    {
      id: 'plants-and-features-for-sound',
      title: 'Designing for Sound',
      blocks: [
        {
          type: 'p',
          text: 'Sound is often the most overlooked sensory dimension in garden design, but it does significant work — masking unwanted background noise and creating a genuine sense of enclosure and calm.',
        },
        {
          type: 'list',
          items: [
            'Ornamental grasses (little bluestem, feather reed grass, Mexican feather grass) rustle audibly in even a light breeze, creating a constant, gentle background sound layer.',
            'A small recirculating water feature — even a modest container water garden — adds the sound of moving water, which reliably masks traffic noise and creates a sense of enclosed calm.',
            'Wind chimes, though not plant-based, are a simple, low-cost addition that pairs naturally with a sensory garden\'s broader intent.',
            'Plants that attract birds (see the site\'s Bird-Friendly Garden guide) add birdsong as an additional, ever-changing sound layer through the seasons.',
          ],
        },
        {
          type: 'tip',
          emoji: '💧',
          text: 'Even a very small water feature — a tabletop fountain or a simple recirculating container — reliably improves a garden\'s sense of calm and encloses the space acoustically far more than its modest size would suggest.',
        },
        {
          type: 'image',
          src: '/guides/sensory-garden/ornamental-grasses-water-feature.jpg',
          alt: 'Ornamental grasses swaying near a small recirculating water feature in a garden',
          caption: 'Ornamental grasses and a small water feature together create a constant, calming layer of natural sound.',
        },
      ],
    },
    {
      id: 'plants-for-taste',
      title: 'Plants for Taste',
      blocks: [
        {
          type: 'p',
          text: 'A sensory garden that includes edible plants adds a dimension no purely ornamental garden can — the direct, immediate experience of taste, best delivered through easy, safe-to-sample herbs and fruits.',
        },
        {
          type: 'table',
          headers: ['Plant', 'Taste Experience', 'Notes'],
          rows: [
            ['Mint (spearmint, chocolate mint)', 'Cool, sharp, refreshing', 'Grow in containers to control its famously aggressive spread'],
            ['Basil', 'Sweet, peppery, aromatic', 'Easy annual, rewards regular pinching/harvesting'],
            ['Strawberries', 'Sweet, immediately rewarding', 'A favorite for children\'s sensory gardens specifically'],
            ['Chives', 'Mild oniony bite', 'Perennial, low-maintenance, edible flowers too'],
            ['Nasturtium', 'Peppery flowers and leaves', 'Both edible and visually striking, doubles as a companion plant'],
            ['Cherry tomatoes', 'Sweet-tart, satisfying to pick', 'A reliable favorite in edible sensory plantings'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'In any sensory garden intended for children or a shared public space, keep edible "taste" plants clearly separated from ornamental plants elsewhere in the garden that may be toxic — see the site\'s Pet-Friendly Plants guide\'s toxicity framework, which applies to curious children as well.',
        },
        {
          type: 'image',
          src: '/guides/sensory-garden/child-picking-strawberries.jpg',
          alt: 'A child picking fresh strawberries in a garden bed',
          caption: 'Strawberries are a favorite in sensory gardens designed for children, offering an immediate, rewarding taste experience.',
        },
      ],
    },
    {
      id: 'accessible-design',
      title: 'Accessible Design Considerations',
      blocks: [
        {
          type: 'p',
          text: 'Sensory gardens are particularly meaningful for older adults and people with mobility or sensory processing differences — designing with accessibility in mind from the start ensures the space genuinely serves everyone it\'s meant to reach.',
        },
        {
          type: 'list',
          items: [
            'Use raised beds at a comfortable height for wheelchair users or anyone who can\'t easily bend or kneel, positioned close enough to touch and smell plants without reaching awkwardly.',
            'Choose smooth, stable, wide paths (avoiding loose gravel or uneven stepping stones) so the space is navigable for wheelchairs, walkers, and anyone with balance concerns.',
            'Include seating at regular intervals along paths, not just at a single destination point, so the journey through the garden itself remains accessible.',
            'Ensure adequate width for wheelchair passage throughout, not just at entry points — a garden that\'s accessible only at its edges isn\'t genuinely accessible.',
          ],
        },
        {
          type: 'tip',
          emoji: '♿',
          text: 'Raised beds serve a dual sensory-and-accessibility purpose — they bring fragrant and touchable plants up to an easily reachable height for everyone, not just wheelchair users, making the sensory experience more immediate for all visitors.',
        },
        {
          type: 'image',
          src: '/guides/sensory-garden/raised-bed-wheelchair-accessible-path.jpg',
          alt: 'A raised garden bed with a smooth wide path suitable for wheelchair access',
          caption: 'Raised beds and smooth, wide paths make a sensory garden genuinely accessible to everyone, not just able-bodied visitors.',
        },
      ],
    },
    {
      id: 'small-space-layouts',
      title: 'Layering Multiple Senses in a Small Space',
      blocks: [
        {
          type: 'p',
          text: 'A full multi-sense garden doesn\'t require a large footprint — even a small courtyard or patio can layer several sensory elements if the design is deliberate about using vertical space and combining functions.',
        },
        {
          type: 'list',
          items: [
            'Combine a small container water feature with a nearby fragrant plant and a touch plant (lamb\'s ear) in one compact seating nook, delivering sound, scent, and touch in a few square feet.',
            'Use vertical space (a trellis with fragrant jasmine, a hanging planter with trailing herbs) to add sensory layers without consuming floor area.',
            'Choose plants that serve multiple senses at once — many herbs offer both fragrance and taste, and ornamental grasses offer both sound and texture.',
            'Concentrate the most impactful sensory elements (the most fragrant plant, the water feature) near the seating or entry point where they\'ll be experienced most directly, rather than spreading them evenly across a small space.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌿',
          text: 'Prioritize dual-purpose plants in a small sensory garden — a single pot of mint, for instance, delivers fragrance, taste, and touch all at once, which matters more in a tight footprint than it would in a large garden with room to dedicate separate zones to each sense.',
        },
      ],
    },
  ],
};
