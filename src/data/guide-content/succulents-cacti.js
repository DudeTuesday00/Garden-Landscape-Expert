export const succulentsCactiContent = {
  id: 'succulents-cacti',
  hero: {
    emoji: '🌵',
    title: 'Growing Succulents and Cacti',
    subtitle: 'Gritty soil, strong light, and water only when the soil is dry — how to keep succulents compact and healthy indoors and out.',
  },
  intro: 'Succulents and cacti store water in thick leaves, stems, or roots, which lets them survive dry spells that would kill most plants. That adaptation is also their main vulnerability in a home garden: too much water. Nearly every problem people have with these plants comes down to soil that stays wet, light that is too weak, or watering on a habit instead of on need. Get those three things right and most succulents are easy and long-lived. This guide covers the difference between the types, the right soil and pots, light, watering, outdoor growing and winter cold, and propagation and common problems. For other indoor plants, see Indoor Houseplants 101, and for the numbers behind indoor light, see the Grow Lights guide.',
  sections: [
    {
      id: 'know-your-plant',
      title: 'Succulents, Cacti, and Which Are Hardy',
      blocks: [
        {
          type: 'p',
          text: 'All cacti are succulents, but not all succulents are cacti. Cacti have small cushion-like structures called areoles, from which spines grow. Beyond that, the biggest question for a gardener is whether a plant is tender, meaning it cannot take frost, or hardy, meaning it can stay outdoors through cold winters.',
        },
        {
          type: 'table',
          headers: ['Plant', 'Type', 'Cold tolerance', 'Notes'],
          rows: [
            ['Echeveria', 'Rosette succulent', 'Tender; damaged by frost', 'Popular and colorful; needs bright light to stay compact'],
            ['Haworthia', 'Small rosette succulent', 'Tender', 'Tolerates lower light than most; a good indoor choice'],
            ['Jade plant (Crassula)', 'Woody succulent', 'Tender', 'Long-lived and forgiving; grows into a small tree-like shrub'],
            ['Aloe vera', 'Rosette succulent', 'Tender', 'Needs bright light and very good drainage'],
            ['Hens and chicks (Sempervivum)', 'Rosette succulent', 'Hardy in many cold climates', 'Grows outdoors year-round in well-drained soil'],
            ['Sedum, stonecrop', 'Groundcover and upright succulents', 'Many are hardy; some are tender', 'Check the specific type; hardy types are excellent for rock gardens'],
            ['Prickly pear (Opuntia)', 'Cactus', 'Some species are hardy in cold climates', 'Needs sun and excellent drainage; wet cold is more damaging than dry cold'],
            ['Barrel and columnar cacti', 'Cactus', 'Mostly tender', 'Slow growing; need full sun and very sparing water'],
          ],
        },
        {
          type: 'tip',
          emoji: '🏷️',
          text: 'When you buy a succulent, learn its exact name and check whether it is hardy. Many plants sold as houseplants can spend summer outdoors but cannot survive freezing weather.',
        },
      ],
    },
    {
      id: 'soil-and-pots',
      title: 'Soil and Pots',
      blocks: [
        {
          type: 'p',
          text: 'The soil is the most important thing you can get right. Ordinary potting soil holds water for too long, and succulent roots rot in constantly damp conditions. A gritty, fast-draining mix lets water run through and the roots dry between drinks.',
        },
        {
          type: 'list',
          items: [
            'Use a commercial cactus and succulent mix as a starting point, or make your own with roughly equal parts potting soil and coarse mineral material such as pumice, perlite, or coarse sand.',
            'Aim for a mix where water runs straight through the pot and the soil feels dry within days.',
            'Always use a pot with a drainage hole. A decorative pot without holes is fine as an outer cover, but keep the plant in a pot with holes inside it.',
            'Terracotta is an excellent choice, since the clay wicks moisture from the soil and helps it dry faster.',
            'Choose a pot only slightly larger than the plant. A large pot holds a lot of soil that stays wet around a small root system.',
            'Repot when the plant outgrows its container, usually every couple of years, in spring or early summer, and let the roots dry for a day or two before watering afterward.',
          ],
        },
        {
          type: 'image',
          src: '/guides/succulents-cacti/gritty-mix.jpg',
          alt: 'A gritty gravelly potting mix of coarse sand, pumice, and perlite being scooped into a terracotta pot',
          caption: 'A gritty, fast-draining mix keeps succulent roots from sitting in water.',
        },
      ],
    },
    {
      id: 'light',
      title: 'Light',
      blocks: [
        {
          type: 'p',
          text: 'Most succulents want as much bright light as you can give them, and most of the shape problems gardeners see are light problems. Without enough light a succulent stretches toward the source, becoming pale, leggy, and loose, in a change called etiolation.',
        },
        {
          type: 'list',
          items: [
            'Indoors, place plants in your brightest window, often a south-facing or west-facing one in the northern hemisphere. A few hours of direct sun a day suits most types.',
            'Haworthias and a few others accept less light, and can burn in strong direct sun.',
            'If window light is weak, add a full-spectrum grow light for 10-14 hours a day. See the Grow Lights guide.',
            'Move plants to stronger light gradually. Succulents moved suddenly from a dim room to full sun can sunburn, with pale, bleached, or brown patches on the leaves.',
            'Turn the pot a quarter turn every week or two so growth stays even.',
            'A stretched plant does not shrink back. You can cut the top off, let it callus, and root it, then let the stump regrow more compactly, as described under propagation below.',
          ],
        },
        {
          type: 'image',
          src: '/guides/succulents-cacti/etiolated-vs-compact.jpg',
          alt: 'A tall pale stretched succulent with widely spaced leaves leaning toward a window beside a compact healthy rosette succulent',
          caption: 'A stretched succulent on the left has been starved of light; the compact rosette on the right has enough.',
        },
      ],
    },
    {
      id: 'watering',
      title: 'Watering: Soak, Then Let It Dry',
      blocks: [
        {
          type: 'p',
          text: 'The best method for most succulents is to soak the soil thoroughly and then wait until it is completely dry before watering again. Small sips more often keep the top damp and the roots shallow.',
        },
        {
          type: 'list',
          items: [
            'Water deeply until it runs out of the drainage hole, then empty any saucer.',
            'Wait until the soil is dry all the way through before watering again. Push a finger or a wooden skewer into the soil to check.',
            'In warm growing weather this may be every week or two, and in cool winter months much less often, sometimes once a month or less.',
            'Water the soil and not the leaves, especially on rosettes, where water pooled in the center can cause rot.',
            'Many succulents and cacti slow or stop growing in winter or in hot summer dormancy, and need very little water during that period.',
            'Shriveled, soft leaves can mean a plant is thirsty, but mushy, translucent, or blackened leaves mean too much water. Check the soil and roots before you decide.',
          ],
        },
        {
          type: 'image',
          src: '/guides/succulents-cacti/soak-watering.jpg',
          alt: 'A gardener watering a succulent by soaking the soil with a small watering can spout with water not touching the leaves',
          caption: 'Water the soil, not the leaves, and let it dry out completely before the next drink.',
        },
      ],
    },
    {
      id: 'outdoors-and-winter',
      title: 'Growing Outdoors and Through Winter',
      blocks: [
        {
          type: 'p',
          text: 'Succulents make excellent outdoor container plants and, where hardy, rock garden plantings. The key is understanding both frost and cold rain, since cold, wet conditions do more harm than cold dry weather.',
        },
        {
          type: 'list',
          items: [
            'Tender succulents can spend summer outdoors once nights are reliably warm, hardened off gradually to full sun so they do not burn.',
            'Bring tender plants indoors before the first frost, and keep them in bright light through winter with reduced watering.',
            'Hardy types such as hens and chicks, and many sedums, can stay outdoors year-round if planted where water drains away quickly, such as on a slope, in a raised bed, or in gritty soil.',
            'Protect outdoor containers of hardy succulents from winter rain if you can, since soggy soil in freezing weather is what usually kills them.',
            'Group pots on a shelf or bench in full sun, and use terracotta so they dry quickly after rain.',
            'A layer of gravel over the soil surface keeps the leaves of low plants off the wet ground.',
          ],
        },
        {
          type: 'image',
          src: '/guides/succulents-cacti/terracotta-pots.jpg',
          alt: 'A row of small terracotta pots each with a different succulent on a sunny outdoor shelf with drainage holes visible in the bases',
          caption: 'Terracotta pots with drainage holes suit succulents, on a sunny shelf with good airflow.',
        },
      ],
    },
    {
      id: 'propagation-and-problems',
      title: 'Propagation and Common Problems',
      blocks: [
        {
          type: 'p',
          text: 'Succulents are among the easiest plants to multiply. Many will grow a whole new plant from a single leaf or cutting, which makes it easy to share them or to rescue a stretched plant.',
        },
        {
          type: 'list',
          items: [
            'Leaf cuttings: gently twist a healthy leaf off the stem, including the base, let it dry for a day or two until the end has calloused, and lay it on dry gritty soil. Mist lightly or water sparingly until roots and a small rosette appear, which can take weeks.',
            'Stem cuttings: cut a piece of stem, let the cut end dry for several days, then plant it in gritty soil and water sparingly once roots form.',
            'Offsets: many rosette succulents, such as hens and chicks, produce small pups at the base that can be separated and potted.',
            'Do not water new cuttings heavily, since they have no roots to take up the water and will rot.',
          ],
        },
        {
          type: 'table',
          headers: ['Symptom', 'Likely cause', 'What to do'],
          rows: [
            ['Soft, mushy, translucent, or black leaves or stem', 'Too much water, or rot', 'Stop watering, unpot and inspect the roots, cut away rotten parts, and repot in dry gritty mix'],
            ['Tall, pale, stretched growth', 'Not enough light', 'Move to brighter light; behead and reroot the plant if it is badly stretched'],
            ['Shriveled, wrinkled leaves', 'Underwatering, or damaged roots', 'Soak the soil thoroughly; if roots are rotten, treat as for rot'],
            ['Bleached or brown patches on leaves', 'Sunburn after a sudden move to strong sun', 'Move to light shade and reintroduce sun gradually'],
            ['White cottony spots', 'Mealybugs', 'Touch each with a cotton swab dipped in rubbing alcohol; repeat as needed'],
            ['Lower leaves drying and dropping', 'Normal aging, or overwatering', 'Remove dry leaves; check watering if many drop at once'],
          ],
        },
        {
          type: 'image',
          src: '/guides/succulents-cacti/leaf-propagation.jpg',
          alt: 'A succulent leaf lying on top of dry soil with tiny pink roots and a tiny baby rosette growing from its end',
          caption: 'A single healthy leaf can grow roots and a new rosette when laid on dry, gritty soil.',
        },
      ],
    },
  ],
}
