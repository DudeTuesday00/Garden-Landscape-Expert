export const growingRosesContent = {
  id: 'growing-roses',
  hero: {
    emoji: '🌹',
    title: 'Growing Roses',
    subtitle: 'Choosing tough varieties, planting, feeding, pruning, and handling black spot and Japanese beetles — everything a beginner needs to grow roses well.',
  },
  intro: 'Roses have a reputation for being difficult, and some are, but modern shrub roses are among the toughest flowering plants a home gardener can grow. Most problems come from a few causes: too little sun, poor airflow that invites fungal disease, and picking a fussy variety that suits a show garden more than a yard. This guide covers the main types, planting, feeding and watering, pruning, and the common pests and diseases. For the pruning principles that apply to all flowering shrubs, see the site\'s Pruning Basics guide; for pest and disease detail, see Organic Pest Control and Common Garden Diseases.',
  sections: [
    {
      id: 'types',
      title: 'Choosing the Right Type of Rose',
      blocks: [
        {
          type: 'p',
          text: 'The type of rose you choose decides how much work it will be. Disease resistance and hardiness vary enormously between groups, so start with the type that matches your effort and climate.',
        },
        {
          type: 'table',
          headers: ['Type', 'Character', 'Care Level'],
          rows: [
            ['Shrub and landscape roses', 'Bushy plants that bloom repeatedly with little fuss; many are bred for disease resistance', 'Easiest; the best choice for beginners'],
            ['Hybrid tea', 'The classic long-stemmed cut rose, with one large bloom per stem', 'Demanding; needs regular feeding, pruning, and disease control, and winter protection in cold climates'],
            ['Floribunda and grandiflora', 'Clusters of blooms on sturdy plants, a middle ground between shrubs and hybrid teas', 'Moderate'],
            ['Climbing and rambling roses', 'Long canes trained on a fence, arbor, or trellis', 'Moderate; need support and careful pruning'],
            ['Old garden and species roses', 'Fragrant, often once-blooming, and frequently very hardy', 'Low to moderate, and often disease-resistant'],
          ],
        },
        {
          type: 'list',
          items: [
            'Choose roses on their own roots or grafted, depending on climate. Grafted roses are common, and in cold zones you should bury the graft union deeper for protection, while own-root roses regrow true to type if the top dies back.',
            'Look for varieties described as disease-resistant, especially to black spot, if you do not want to spray.',
            'Match the mature size to your space. Many shrub roses reach 3-5 feet or more, so give them room.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌹',
          text: 'If you are new to roses, start with a couple of disease-resistant shrub roses. They give abundant bloom with far less effort than hybrid teas, and they will build your confidence.',
        },
        {
          type: 'image',
          src: '/guides/growing-roses/shrub-roses-garden-border.jpg',
          alt: 'A garden border filled with pink and red shrub roses in full bloom on bushy healthy plants',
          caption: 'Disease-resistant shrub roses give abundant bloom with far less work than fussy hybrid teas.',
        },
      ],
    },
    {
      id: 'site-and-planting',
      title: 'Site and Planting',
      blocks: [
        {
          type: 'p',
          text: 'The single most important thing you can do for a rose is give it enough sun and good airflow. Most roses that struggle are in the wrong place.',
        },
        {
          type: 'list',
          items: [
            'Choose a site with at least six hours of direct sun a day, and morning sun is especially valuable because it dries dew from the leaves and reduces disease.',
            'Avoid crowded spots with poor air circulation, and space plants so foliage can dry quickly after rain.',
            'Plant in rich, well-drained soil amended with compost. Roses dislike wet feet, and a soil pH around 6.0-6.5 suits them.',
            'Plant bare-root roses in early spring or fall while dormant, soaking the roots for a few hours first. Container roses can go in any time the ground is workable and not frozen.',
            'Dig a wide hole, set the plant at the depth recommended for your climate and rootstock, backfill with amended soil, and water in deeply.',
            'Mulch with a few inches of shredded bark or compost to hold moisture and moderate soil temperature, keeping it off the base of the canes.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Do not plant a new rose where an old rose grew without replacing the soil. Rose replant disease can stunt new plants, so choose a fresh spot or bring in fresh soil.',
        },
        {
          type: 'image',
          src: '/guides/growing-roses/planting-bare-root-rose.jpg',
          alt: 'A gardener setting a bare-root rose into a wide hole of dark amended soil in a garden bed',
          caption: 'Plant roses in a wide hole of enriched, well-drained soil in a sunny spot.',
        },
      ],
    },
    {
      id: 'water-and-feeding',
      title: 'Watering and Feeding',
      blocks: [
        {
          type: 'p',
          text: 'Roses are heavy feeders that bloom on new growth, so they respond to steady water and regular nutrition. How you water matters as much as how much.',
        },
        {
          type: 'list',
          items: [
            'Water deeply, roughly an inch a week, at the base of the plant rather than overhead. Wet foliage encourages black spot and other fungal disease.',
            'Water in the morning so any splashed leaves dry during the day.',
            'Feed at the start of the growing season and again after the first flush of bloom, using a balanced rose fertilizer, compost, or an organic option.',
            'Stop fertilizing in late summer, roughly six to eight weeks before your first frost, so new tender growth is not stimulated just before cold weather.',
            'Deadhead spent blooms on repeat-blooming roses to encourage more flowers, cutting back to a leaf with five leaflets.',
          ],
        },
        {
          type: 'tip',
          emoji: '💧',
          text: 'A drip line or soaker hose keeps water on the soil and off the leaves, which is one of the best defenses against black spot.',
        },
        {
          type: 'image',
          src: '/guides/growing-roses/soaker-hose-rose-base.jpg',
          alt: 'A black soaker hose running along the soil at the base of rose bushes under a layer of mulch',
          caption: 'Watering at the base keeps leaves dry and helps prevent fungal disease.',
        },
      ],
    },
    {
      id: 'pruning',
      title: 'Pruning Roses',
      blocks: [
        {
          type: 'p',
          text: 'Pruning intimidates many rose growers, but the basics are simple. The timing depends on whether the rose blooms repeatedly or only once a year.',
        },
        {
          type: 'table',
          headers: ['Type', 'When to Prune', 'How'],
          rows: [
            ['Repeat-blooming shrub, hybrid tea, floribunda', 'Late winter or early spring, as buds begin to swell', 'Remove dead, damaged, and crossing canes, then shorten remaining canes to shape the plant; more severe pruning suits hybrid teas'],
            ['Once-blooming old garden and rambling roses', 'Right after they finish flowering', 'Remove old, weak, and dead canes; these bloom on last year\'s wood, so spring pruning removes the flowers'],
            ['Climbing roses', 'Late winter for structure, plus light cleanup after flowering', 'Train main canes horizontally to encourage flowering side shoots, and prune those shoots back'],
          ],
        },
        {
          type: 'list',
          items: [
            'Start by removing anything dead, diseased, or damaged, and cutting back to healthy wood, which is white or light green inside rather than brown.',
            'Cut about a quarter inch above an outward-facing bud, at a slight angle sloping away from the bud, so new growth opens the center of the plant.',
            'Open the center of the bush by removing crossing and inward-growing canes for airflow.',
            'In cold climates, wait until the danger of hard freezes has passed in spring, then remove winter dieback.',
          ],
        },
        {
          type: 'tip',
          emoji: '✂️',
          text: 'Use clean, sharp bypass pruners and thick gloves. See Pruning Basics for the three basic cuts, which apply to roses as they do to any flowering shrub.',
        },
        {
          type: 'image',
          src: '/guides/growing-roses/pruning-rose-cane-outward-bud.jpg',
          alt: 'A gloved hand holding red-handled pruners beside a rose stem with a bud on a green rose bush',
          caption: 'Use clean, sharp bypass pruners and cut just above an outward-facing bud so new growth opens up the center of the plant.',
        },
      ],
    },
    {
      id: 'problems',
      title: 'Common Problems',
      blocks: [
        {
          type: 'p',
          text: 'Roses face a handful of repeat problems. Prevention through sun, airflow, and clean-up is more effective than treatment.',
        },
        {
          type: 'table',
          headers: ['Problem', 'Signs', 'Response'],
          rows: [
            ['Black spot', 'Black spots with fringed edges on leaves, which then yellow and drop', 'Water at the base, prune for airflow, and rake up and discard fallen leaves; choose resistant varieties'],
            ['Powdery mildew', 'White powdery coating on new growth and buds', 'Improve airflow and avoid overhead watering; resistant varieties help'],
            ['Japanese beetles', 'Metallic beetles skeletonizing leaves and eating blooms in summer', 'Hand-pick into soapy water in the morning; see Organic Pest Control'],
            ['Aphids', 'Clusters of small insects on new shoots and buds', 'Rinse with a strong spray of water and encourage beneficial insects'],
            ['Winter dieback', 'Blackened, dead canes after cold winters', 'Cut back to healthy wood in spring; mound mulch or soil over the base in cold zones'],
          ],
        },
        {
          type: 'list',
          items: [
            'Clean up fallen leaves and pruned canes at the end of the season, since disease overwinters on debris.',
            'In cold zones, mound soil or mulch around the base of grafted roses after the ground begins to freeze, to protect the graft union.',
            'Removing diseased leaves early and keeping the base clear of debris reduces how much disease spreads.',
          ],
        },
        {
          type: 'image',
          src: '/guides/growing-roses/black-spot-rose-leaves.jpg',
          alt: 'Green rose leaves with black spots and some yellowing leaves on a rose bush',
          caption: 'Black spot is the most common rose disease, and airflow, watering, and clean-up are the best defense.',
        },
      ],
    },
  ],
}
