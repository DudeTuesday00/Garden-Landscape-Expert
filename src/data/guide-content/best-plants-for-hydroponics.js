export const bestPlantsForHydroponicsContent = {
  id: 'best-plants-for-hydroponics',
  hero: {
    emoji: '🥬',
    title: 'Best Plants for Hydroponics',
    subtitle: 'The crops that grow best without soil — ranked by how easy they are, how fast they finish, and which system suits each one.',
  },
  intro: 'Not every plant is equally happy in a hydroponic system. Fast-growing leafy greens and herbs are the easiest and most rewarding, fruiting crops like tomatoes and peppers pay off but demand strong light and more attention, and some plants — deep roots, trees, big vines and grains — are simply poor fits. This guide sorts the crops that do well into tiers, gives typical time to harvest for each, and matches them to the right kind of system. The timings come from the site\'s Plant Database. To see how these fit your space, use the Hydroponic System Chooser, and for the wizard\'s hydroponic path, the Garden Architect.',
  sections: [
    {
      id: 'how-to-choose',
      title: 'What Makes a Good Hydroponic Crop',
      blocks: [
        {
          type: 'p',
          text: 'A few traits predict success in a soilless system. Crops that check most of these boxes are the easiest to start with.',
        },
        {
          type: 'list',
          items: [
            'Fast growth. The sooner a crop finishes, the sooner you learn what works and the less time a problem has to develop.',
            'Modest size. Small, light plants fit easily in net pots and channels, while large, heavy plants need bigger containers, real support, and more light.',
            'Shallow, fibrous roots. Plants adapted to a wet, loose root zone do well; crops that need deep, firm soil to develop, like most root vegetables, struggle.',
            'Cut-and-come-again harvests. Plants you can harvest repeatedly, like lettuce leaves and herbs, give the most food from one setup.',
            'Tolerance for indoor conditions. Cooler-season greens like spinach and arugula do best at moderate temperatures, while fruiting crops need warmth and strong light.',
          ],
        },
        {
          type: 'tip',
          emoji: '🧭',
          text: 'If you are new to hydroponics, start with one easy crop in one simple system. Basil and lettuce are the classic first choices because they grow fast and forgive mistakes.',
        },
        {
          type: 'image',
          src: '/guides/best-plants-for-hydroponics/lettuce-basil-mixed-system.jpg',
          alt: 'Healthy lettuce and basil plants growing together in a hydroponic system',
          caption: 'Fast-growing greens and herbs are the easiest and most rewarding crops to start with.',
        },
      ],
    },
    {
      id: 'greens',
      title: 'Leafy Greens: The Easiest Crops',
      blocks: [
        {
          type: 'p',
          text: 'Leafy greens are the backbone of home hydroponics. They grow quickly, tolerate a range of conditions, and suit nearly every system, especially Kratky, deep water culture, NFT, and towers.',
        },
        {
          type: 'table',
          headers: ['Crop', 'Typical Time to Harvest', 'Best Systems', 'Notes'],
          rows: [
            ['Arugula', '20–40 days', 'Kratky, NFT', 'One of the fastest; baby leaves in about three weeks; prefers cooler temperatures'],
            ['Watercress', '15–25 days', 'NFT, DWC', 'Naturally suited to water; grows extremely fast'],
            ['Spinach', '20–40 days', 'Kratky, NFT', 'Prefers cool conditions, roughly 50–70°F'],
            ['Swiss chard', '25–35 days to first harvest', 'DWC, NFT', 'More heat-tolerant than lettuce; harvest outer stalks continuously'],
            ['Lettuce', '30–45 days in hydroponics', 'Kratky, DWC, NFT, towers', 'The classic first crop; harvest outer leaves for continuous production'],
            ['Bok choy', '30–50 days', 'NFT, Kratky', 'Baby heads at about 30 days; a great brassica for hydroponics'],
            ['Kale', '40–60 days in hydroponics', 'NFT, DWC', 'Likes slightly cooler temperatures, roughly 60–70°F'],
            ['Collard greens', '60–80 days', 'DWC, NFT', 'Slower and larger; harvest outer leaves continuously'],
          ],
        },
        {
          type: 'tip',
          emoji: '🥬',
          text: 'Harvest the outer leaves and leave the center growing. A single lettuce or chard plant can keep producing for weeks instead of being cut once.',
        },
        {
          type: 'image',
          src: '/guides/best-plants-for-hydroponics/harvesting-outer-leaves.jpg',
          alt: 'A hand picking outer leaves from a lettuce plant growing in a hydroponic channel',
          caption: 'Harvesting outer leaves keeps greens producing for weeks.',
        },
      ],
    },
    {
      id: 'herbs',
      title: 'Herbs: Fast, Compact, and Useful',
      blocks: [
        {
          type: 'p',
          text: 'Herbs are ideal for small setups. They are compact, valuable, and mostly forgiving, and many grow noticeably faster in hydroponics than in soil.',
        },
        {
          type: 'table',
          headers: ['Crop', 'Typical Time to Harvest', 'Best Systems', 'Notes'],
          rows: [
            ['Basil', '20–25 days in hydroponics', 'Any system', 'Among the best hydroponic herbs; pinch flowers to keep leaves coming'],
            ['Cilantro', '20–30 days', 'Kratky, NFT', 'Bolts more slowly at cool indoor temperatures; succession plant every few weeks'],
            ['Dill', '25–35 days for leaves', 'DWC, Kratky', 'Needs a deeper container for its taproot; compact varieties suit indoor growing'],
            ['Chives', '30–40 days', 'Kratky, NFT', 'Snip about 2 inches above the net cup for regrowth'],
            ['Mint', '30–40 days from cutting', 'Kratky, NFT', 'Very fast and vigorous; harvest often and keep it in its own container'],
            ['Lemon balm', '35–50 days', 'Kratky, NFT', 'Grows quickly; good for tea'],
            ['Parsley', '50–70 days', 'Kratky, NFT', 'Slow to germinate, so buying seedlings can save weeks'],
            ['Oregano', '6–8 weeks', 'Kratky, NFT', 'Prefers slightly drier conditions; pinch regularly for bushy growth'],
            ['Thyme', '6–8 weeks to harvestable size', 'Kratky', 'Slow to start but low-maintenance; avoid waterlogged roots'],
            ['Rosemary', '8–12 weeks to harvestable size', 'Kratky', 'Slow but reliable; likes some air exposure between waterings'],
            ['Stevia', '60–90 days to first harvest', 'Kratky, NFT', 'Harvest regularly to keep it compact; dry the leaves for a natural sweetener'],
          ],
        },
        {
          type: 'tip',
          emoji: '🌿',
          text: 'Keep vigorous herbs like mint in their own container. They grow fast enough to crowd out neighbors and to tangle roots in a shared reservoir.',
        },
        {
          type: 'image',
          src: '/guides/best-plants-for-hydroponics/basil-mint-net-pots.jpg',
          alt: 'Basil and mint plants growing in black net pots over a hydroponic reservoir',
          caption: 'Herbs are compact, fast, and valuable — ideal for small hydroponic setups.',
        },
      ],
    },
    {
      id: 'fruiting',
      title: 'Fruiting Crops: Bigger Rewards, More Work',
      blocks: [
        {
          type: 'p',
          text: 'Tomatoes, peppers, cucumbers, and eggplant do very well in hydroponics, but they ask more of the grower. They need strong light, warmth, support, and stronger nutrient solutions, and they take months rather than weeks.',
        },
        {
          type: 'table',
          headers: ['Crop', 'Typical Time to Harvest', 'Best Systems', 'Notes'],
          rows: [
            ['Cucumber', '40–60 days in hydroponics', 'DWC, ebb & flow, Dutch bucket', 'Needs a vertical trellis; compact varieties suit indoor growing'],
            ['Tomato', '60–80 days', 'DWC, ebb & flow, Dutch bucket', 'Needs a cage or trellis; watch calcium and magnesium'],
            ['Eggplant', '65–80 days', 'DWC, ebb & flow', 'Warm and bright; support branches as fruit develops'],
            ['Bell pepper', '70–90 days', 'DWC, ebb & flow, Dutch bucket', 'Strong light for 16–18 hours a day; keep pH 6.0–6.5'],
            ['Hot pepper', '70–100 days', 'DWC, ebb & flow, Dutch bucket', 'Compact varieties do best indoors; warm conditions'],
            ['Broccoli', '55–80 days in hydroponics', 'DWC, ebb & flow', 'Needs cool temperatures and a larger root space'],
            ['Strawberry', '60–90 days from transplant', 'NFT, towers', 'One of the best hydroponic fruits; everbearing types fruit through the year'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Fruiting crops fail most often from too little light. If you cannot give them roughly 14–18 hours of strong light, choose greens and herbs, or add a proper grow light and check the numbers with the Grow Light DLI Calculator.',
        },
        {
          type: 'image',
          src: '/guides/best-plants-for-hydroponics/tomatoes-in-hydroponic-greenhouse.jpg',
          alt: 'Tomato plants with ripening fruit growing in a hydroponic greenhouse',
          caption: 'Fruiting crops reward the effort but need strong light and support.',
        },
      ],
    },
    {
      id: 'poor-fits',
      title: 'Crops That Are Poor Fits',
      blocks: [
        {
          type: 'p',
          text: 'Knowing what not to grow saves frustration. Some crops can technically be grown in a soilless system but rarely make sense at home.',
        },
        {
          type: 'list',
          items: [
            'Most root vegetables, such as carrots, potatoes, parsnips, and beets, need firm, deep growing material to shape properly. Radishes are the exception, and they do well in Kratky or deep water culture with a deep net cup.',
            'Corn, wheat, and other grains need a great deal of space and light for a small harvest.',
            'Trees, shrubs, and large vines take too much room and support for a home system.',
            'Heavy long-season crops such as squash and melons sprawl and are usually better in soil or large containers.',
          ],
        },
        {
          type: 'tip',
          emoji: '🥕',
          text: 'If you want to grow roots or other soil crops indoors, consider containers or the Garden Architect\'s non-hydroponic paths instead. Hydroponics shines with greens, herbs, and fruiting crops.',
        },
        {
          type: 'image',
          src: '/guides/best-plants-for-hydroponics/radishes-hydroponic-net-cup.jpg',
          alt: 'Fresh red radishes growing in net cups above a hydroponic reservoir',
          caption: 'Radishes are the one common root crop that does well in hydroponics.',
        },
      ],
    },
  ],
}
