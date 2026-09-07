export const containerVegetablesContent = {
  id: 'container-vegetables',
  hero: {
    emoji: '🥬',
    title: 'Vegetables in Containers',
    subtitle: 'Grow a productive food garden entirely in pots — with the right varieties, container sizes, and feeding practices for each crop.',
  },
  intro: 'Container vegetable gardening has expanded far beyond the cherry tomato in a five-gallon bucket — modern compact varieties make it possible to grow full-size harvests of peppers, cucumbers, eggplant, beans, and even small winter squash in containers on a patio or deck. The critical principle is matching container volume to crop size: underpotting is the most common mistake, leading to stunted plants, poor yield, and constant water stress. Tomatoes need a minimum of five gallons — and preferably ten to fifteen for indeterminate varieties; most other fruiting vegetables need at least three to five gallons. Container vegetables also need more frequent fertilizing than in-ground crops because nutrients leach out with every watering.',
  sections: [
    {
      id: 'minimum-container-sizes',
      title: 'Minimum Container Sizes by Crop',
      blocks: [
        {
          type: 'p',
          text: 'Underpotting is the single most common mistake in container vegetable gardening — a plant crammed into too small a container will be perpetually water-stressed, produce a fraction of its potential yield, and often fail outright in hot weather.',
        },
        {
          type: 'table',
          headers: ['Crop', 'Minimum Container Size', 'Notes'],
          rows: [
            ['Tomatoes (determinate/patio)', '5 gallons', 'Compact varieties bred for containers stay manageable at this size'],
            ['Tomatoes (indeterminate)', '10-15 gallons', 'Full-size vining tomatoes need substantial root volume and a sturdy cage or stake'],
            ['Peppers', '3-5 gallons', 'Compact pepper varieties do well even at the lower end of this range'],
            ['Eggplant', '3-5 gallons', 'Similar sizing to peppers; benefits from consistent moisture'],
            ['Cucumbers (bush varieties)', '5 gallons', 'Bush types stay compact; vining types need a trellis and slightly more root room'],
            ['Bush beans', '2-3 gallons per few plants', 'Shallow-rooted and efficient — one of the easier crops to fit into a smaller container'],
            ['Leafy greens (lettuce, spinach, chard)', '1-2 gallons, or a wide shallow container', 'Shallow root systems make these ideal for window boxes and shallow containers'],
            ['Root vegetables (carrots, radishes)', '2+ gallons, deep container required', 'Container depth matters more than volume — a shallow wide pot restricts root development'],
            ['Small winter squash / zucchini', '10+ gallons', 'Even compact bush varieties are heavy feeders and need substantial root room'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'When in doubt, size up rather than down — a larger container is more forgiving of missed watering, holds nutrients longer between feedings, and rarely causes problems the way an undersized container reliably does.',
        },
        {
          type: 'image',
          src: '/guides/container-vegetables/tomato-large-container.jpg',
          alt: 'A tomato plant loaded with fruit growing in a large container on a patio',
          caption: 'Indeterminate tomatoes need 10-15 gallons of root room to reach their full potential in a container.',
        },
      ],
    },
    {
      id: 'best-compact-varieties',
      title: 'The Best Compact Varieties for Containers',
      blocks: [
        {
          type: 'p',
          text: 'Varieties bred specifically for container culture — usually labeled "patio," "bush," "dwarf," or "compact" — perform far better in pots than standard varieties sized for open garden rows.',
        },
        {
          type: 'table',
          headers: ['Crop', 'Recommended Varieties', 'Container Size'],
          rows: [
            ['Tomato', 'Tumbling Tom, Patio, Bush Early Girl, Better Bush', '5-7 gallons'],
            ['Cucumber', 'Bush Pickle, Spacemaster, Salad Bush', '5 gallons'],
            ['Eggplant', 'Patio Baby, Fairy Tale', '3-4 gallons'],
            ['Pepper', 'Shishito, Mini Bell varieties, Patio Snacker', '3-4 gallons'],
            ['Zucchini/Summer Squash', 'Patio Star, Astia', '10 gallons'],
            ['Beans', 'Bush Blue Lake, Provider', '2-3 gallons per few plants'],
          ],
        },
        {
          type: 'tip',
          emoji: '🏷️',
          text: 'When shopping for seeds or transplants, look specifically for "patio," "bush," "dwarf," or "compact" in the variety name or description — these are reliable signals a variety was bred with container performance in mind, not an afterthought.',
        },
        {
          type: 'image',
          src: '/guides/container-vegetables/compact-pepper-container.jpg',
          alt: 'A compact pepper plant with multiple peppers growing in a container',
          caption: 'Compact varieties bred specifically for container culture perform far better in pots than standard garden-row varieties.',
        },
      ],
    },
    {
      id: 'potting-mix',
      title: 'Potting Mix — Never Use Garden Soil',
      blocks: [
        {
          type: 'p',
          text: 'Garden soil, however good it is in the ground, performs poorly in a container — it compacts under repeated watering, drains poorly once compacted, and can introduce pests, weed seeds, or disease into an otherwise clean growing space.',
        },
        {
          type: 'list',
          items: [
            'Use a high-quality commercial potting mix formulated for containers, not garden or topsoil.',
            'A simple, effective DIY blend: one-third quality potting mix, one-third finished compost, one-third perlite for drainage and aeration.',
            'Avoid mixes that are mostly peat with no aeration additive — they compact over a season and drain poorly by midsummer.',
            'Refresh or replace at least the top third of a container\'s soil each season, since nutrients and structure both degrade with a full season of watering and feeding.',
          ],
        },
        {
          type: 'tip',
          emoji: '🪴',
          text: 'A container mix that\'s noticeably heavier or denser after a season of watering has likely broken down and compacted — this is normal and expected, which is why refreshing at least part of the mix between seasons matters even if you\'re reusing the same container.',
        },
        {
          type: 'image',
          src: '/guides/container-vegetables/potting-mix-compost-perlite.jpg',
          alt: 'A wheelbarrow mixing potting mix, compost, and perlite for container vegetable gardening',
          caption: 'A one-third potting mix, one-third compost, one-third perlite blend gives container roots the drainage and aeration they need.',
        },
      ],
    },
    {
      id: 'fertilizing-schedule',
      title: 'Fertilizing Container Vegetables',
      blocks: [
        {
          type: 'p',
          text: 'Container vegetables need feeding far more often than the same crop grown in-ground, because frequent watering — necessary in a limited soil volume — steadily leaches nutrients out of the container.',
        },
        {
          type: 'table',
          headers: ['Approach', 'Frequency', 'Notes'],
          rows: [
            ['Liquid fertilizer', 'Weekly to bi-weekly', 'Fast-acting, easy to adjust strength; the most common approach for container vegetables'],
            ['Slow-release granular (incorporated at planting)', 'Reapply per label, typically every 2-3 months', 'Provides a steady baseline; often paired with occasional liquid feeding during peak fruiting'],
            ['Compost tea', 'Weekly', 'A gentler, organic option; less concentrated than synthetic liquid fertilizers so more frequent application helps'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Pale foliage, stunted growth, and poor fruit set despite otherwise good care are the classic signs of nutrient depletion in a container — before assuming a pest or disease problem, check whether a feeding has simply been missed.',
        },
      ],
    },
    {
      id: 'heat-stress-management',
      title: 'Managing Heat Stress on Hot Patios',
      blocks: [
        {
          type: 'p',
          text: 'A container sitting on a concrete or paved patio absorbs and radiates significant heat, often pushing root zone temperatures well above what the same plant would experience in open garden soil — this can stress roots even when air temperature seems reasonable.',
        },
        {
          type: 'list',
          items: [
            'Use light-colored containers rather than dark ones, which absorb significantly more heat in direct sun.',
            'Elevate containers slightly off a hot paved surface with pot feet or a stand, reducing heat transfer from the pavement into the root zone.',
            'Group containers together for mutual shading, or provide afternoon shade for containers in the hottest, most exposed locations.',
            'Water more frequently during heat waves — container soil in full sun on a hot patio can dry out significantly faster than the same container in a partially shaded spot.',
            'Mulch the container surface with straw or bark mulch to reduce evaporation and moderate soil temperature swings.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌡️',
          text: 'On especially hot patios, root zone temperature — not air temperature — is often the real limiting factor. A pale or dark container left in full afternoon sun can reach soil temperatures that stress roots even when the plant looks otherwise fine above ground.',
        },
        {
          type: 'image',
          src: '/guides/container-vegetables/light-colored-pots-patio.jpg',
          alt: 'Light-colored vegetable containers elevated on pot feet on a sunny patio',
          caption: 'Light-colored, elevated containers absorb and transfer far less heat into the root zone than dark pots sitting directly on hot pavement.',
        },
      ],
    },
    {
      id: 'watering-blossom-end-rot',
      title: 'Watering Strategies to Prevent Blossom End Rot',
      blocks: [
        {
          type: 'p',
          text: 'Blossom end rot — a dark, sunken lesion on the bottom of tomatoes, peppers, and squash — is usually a calcium uptake problem caused by inconsistent watering, not a true calcium deficiency in the soil. Containers are especially prone to this because their limited soil volume swings between wet and dry much faster than garden beds.',
        },
        {
          type: 'list',
          items: [
            'Water consistently rather than letting containers dry out completely between waterings — erratic moisture swings disrupt the plant\'s ability to take up calcium even when calcium is present in the soil.',
            'Check soil moisture daily during fruiting, since this is when consistent water matters most.',
            'Mulch the container surface to moderate moisture swings between waterings.',
            'Consider a self-watering container or a drip irrigation system on a timer for genuinely consistent moisture without daily manual attention.',
            'If blossom end rot appears despite consistent watering, a foliar calcium spray can provide short-term relief while you address the underlying watering consistency issue.',
          ],
        },
        {
          type: 'tip',
          emoji: '🍅',
          text: 'Blossom end rot on the first few fruits of the season, followed by normal fruit afterward, is common and not usually a sign of an ongoing problem — it often reflects the establishment period before watering habits and root systems have both stabilized.',
        },
        {
          type: 'image',
          src: '/guides/container-vegetables/drip-irrigation-containers.jpg',
          alt: 'A simple drip irrigation system watering several vegetable containers on a patio',
          caption: 'Consistent watering via drip irrigation is one of the most reliable ways to prevent blossom end rot in container-grown tomatoes and peppers.',
        },
      ],
    },
  ],
};
