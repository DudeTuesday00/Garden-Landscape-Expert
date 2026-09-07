export const birdGardenContent = {
  id: 'bird-garden',
  hero: {
    emoji: '🐦',
    title: 'Bird-Friendly Garden',
    subtitle: 'Attract more birds to your yard by providing what they actually need — food, shelter, water, and nesting habitat — using plants that do the work naturally.',
  },
  intro: 'Feeders bring birds to your yard, but plants keep them there. The most bird-rich gardens are those that offer a diversity of native food sources — berry-producing shrubs, seed-bearing flowers, and insect-supporting trees — along with dense shrubs for shelter and nesting, reliable water sources, and freedom from the pesticides that eliminate the insects birds depend on for raising young. Even if every adult bird in your yard were a strict seed eater, their nestlings require caterpillars and soft insects during the first weeks of life — making native insect-supporting plants, particularly native trees like oaks, cherries, and serviceberry, essential to successful breeding populations.',
  sections: [
    {
      id: 'berry-producing-shrubs',
      title: 'Berry-Producing Shrubs — High-Value Food Sources',
      blocks: [
        {
          type: 'p',
          text: 'Berry-producing shrubs are among the highest-value plants you can add for birds, and timing their fruit across the seasons keeps food available when birds need it most.',
        },
        {
          type: 'table',
          headers: ['Plant', 'Fruiting Time', 'Key Birds Attracted', 'Notes'],
          rows: [
            ['Serviceberry (Amelanchier)', 'Late spring', 'Robins, waxwings, orioles, catbirds', 'Fruits when migratory birds are building fat reserves — one of the most valuable early-season food sources'],
            ['Native viburnums', 'Fall through winter', 'Bluebirds, robins, cedar waxwings', 'Many species hold fruit well into winter, unlike faster-consumed berries'],
            ['Elderberry', 'Late summer', 'Catbirds, thrushes, waxwings, orioles', 'Prolific producer, also supports pollinators when flowering'],
            ['Native dogwoods', 'Fall', 'Migrating songbirds, especially warblers and thrushes', 'High-fat berries essential for fall migrant fueling before long flights'],
            ['Native hollies', 'Fall through winter', 'Robins, mockingbirds, bluebirds, cedar waxwings', 'Persistent winter fruit — a critical food source when little else is available'],
            ['Winterberry (deciduous holly)', 'Fall through winter', 'Robins, waxwings, bluebirds', 'Bright red berries visible and available well into winter after leaves drop'],
          ],
        },
        {
          type: 'tip',
          emoji: '🍒',
          text: 'Choosing berry plants that fruit at different times — spring (serviceberry), late summer (elderberry), and persisting through winter (holly, viburnum) — keeps food available across the full year rather than concentrated in one short window.',
        },
        {
          type: 'image',
          src: '/guides/bird-garden/cedar-waxwing-berries.jpg',
          alt: 'A cedar waxwing bird eating red berries from a native shrub',
          caption: 'Berry-producing native shrubs like viburnum and holly provide critical food for birds like cedar waxwings.',
        },
      ],
    },
    {
      id: 'seed-bearing-plants',
      title: 'Seed-Bearing Perennials and Fall Cleanup Timing',
      blocks: [
        {
          type: 'p',
          text: 'Seed-bearing perennials provide critical winter food for ground-feeding sparrows, juncos, and finches — but only if their seed heads are left standing rather than cut back in a tidy fall cleanup.',
        },
        {
          type: 'list',
          items: [
            'Coneflowers (Echinacea) — seed heads are a favorite of goldfinches, which will cling to and work the spent flower heads through fall and winter.',
            'Black-eyed Susans (Rudbeckia) — similar seed value to coneflowers, and equally important to leave standing.',
            'Native sunflowers — larger seed heads support a wide range of seed-eating birds and are easy to grow from seed.',
            'Native grasses (little bluestem, switchgrass) — seed heads persist through winter and also provide cover for ground-feeding birds.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'The most common mistake in a bird-friendly garden is a thorough fall cleanup — cutting back seed heads and clearing leaf litter removes the winter food and insect-overwintering habitat the whole design depends on. Delay major cleanup until late winter or early spring.',
        },
        {
          type: 'image',
          src: '/guides/bird-garden/goldfinch-coneflower-seedhead.jpg',
          alt: 'A goldfinch perched on a dried coneflower seed head in winter',
          caption: 'Leaving coneflower and black-eyed Susan seed heads standing through winter feeds goldfinches and other seed-eating birds.',
        },
      ],
    },
    {
      id: 'water-features-and-shelter',
      title: 'Water Features and Shelter Habitat',
      blocks: [
        {
          type: 'p',
          text: 'Reliable water and safe shelter matter as much as food for a bird-friendly yard — many species will visit a yard with modest food resources if water and cover are genuinely good.',
        },
        {
          type: 'list',
          items: [
            'A simple birdbath, kept clean and refreshed regularly, draws a wider range of species than feeders alone — moving or dripping water is especially attractive and also helps deter mosquito breeding.',
            'Dense shrubs (native viburnum, holly, elderberry) planted in groups rather than as single specimens provide the kind of thick cover many species need for safe nesting and predator evasion.',
            'Brush piles made from pruned branches are a low-cost, high-value addition — ground-nesting and thicket-dwelling species use them for shelter and foraging that a tidy, open lawn simply can\'t provide.',
            'A layered planting — canopy trees, understory shrubs, and a groundcover/perennial layer — supports far more bird species than a single-layer lawn-and-tree landscape, since different species prefer different vertical zones.',
          ],
        },
        {
          type: 'tip',
          emoji: '💦',
          text: 'A birdbath positioned near — but not directly under — dense shrub cover gives birds a quick escape route to shelter if a hawk or cat appears, and birds are noticeably more willing to use water sources they perceive as safe.',
        },
        {
          type: 'image',
          src: '/guides/bird-garden/birdbath-shrub-cover.jpg',
          alt: 'A small bird bathing in a stone birdbath positioned near dense shrub cover in a garden',
          caption: 'A birdbath near — but not under — dense shrub cover gives birds a quick escape route while still drawing them in.',
        },
      ],
    },
    {
      id: 'nest-boxes',
      title: 'Nest Box Specifications by Species',
      blocks: [
        {
          type: 'p',
          text: 'A nest box built to the wrong dimensions for the target species — especially the entrance hole size — either fails to attract the intended bird or, worse, admits a larger, more aggressive species that outcompetes it.',
        },
        {
          type: 'table',
          headers: ['Species', 'Entrance Hole Diameter', 'Floor Size', 'Mounting Height'],
          rows: [
            ['Chickadees', '1 1/8 in', '4x4 in', '5-15 ft'],
            ['Bluebirds', '1 1/2 in', '5x5 in', '4-6 ft, facing open habitat'],
            ['House wrens', '1 in', '4x4 in', '5-10 ft'],
            ['Tree swallows', '1 3/8 in', '5x5 in', '5-15 ft, near open water or fields'],
            ['Purple martins', '2 1/8 in (multi-unit housing)', 'Multi-chamber structure', '10-20 ft, in open areas away from trees'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'An entrance hole even slightly larger than specified can let in house sparrows or starlings — both non-native, aggressive competitors that will take over nest boxes and displace or kill native cavity-nesting species. Precision on hole diameter matters more than any other nest box dimension.',
        },
        {
          type: 'image',
          src: '/guides/bird-garden/bluebird-nest-box.jpg',
          alt: 'A wooden bluebird nest box mounted on a post in a garden with an eastern bluebird nearby',
          caption: 'Correct entrance hole diameter is the single most important nest box dimension for keeping out aggressive non-native competitors.',
        },
      ],
    },
    {
      id: 'pesticide-free-management',
      title: 'Pesticide-Free Pest Management',
      blocks: [
        {
          type: 'p',
          text: 'Nestlings of nearly every songbird species — even those that eat seeds as adults — are fed almost entirely on caterpillars and soft-bodied insects during their first weeks of life. A garden treated with broad-spectrum insecticides removes this food source at the exact moment breeding birds need it most.',
        },
        {
          type: 'list',
          items: [
            'Avoid broad-spectrum insecticides entirely in a bird-friendly garden — even organic options like pyrethrin harm the caterpillar and soft-insect populations nestlings depend on.',
            'Plant native trees, especially oaks, cherries, and willows — these host dramatically more caterpillar species than non-native ornamentals, directly translating to more food for nesting birds.',
            'Tolerate some visible leaf damage from caterpillars as a sign the garden is functioning as intended, not a problem requiring intervention.',
            'Let natural pest control (birds themselves, along with other predatory insects) do more of the work — a garden that supports birds also becomes progressively less dependent on any pest intervention at all.',
          ],
        },
        {
          type: 'tip',
          emoji: '🐛',
          text: 'A single native oak tree can host several hundred species of caterpillars over its lifetime, compared to a handful for many common non-native ornamental trees — tree species choice has an outsized impact on a garden\'s ability to actually support breeding birds.',
        },
        {
          type: 'image',
          src: '/guides/bird-garden/parent-bird-feeding-caterpillar.jpg',
          alt: 'A parent songbird bringing a caterpillar to feed nestlings in a nest',
          caption: 'Nearly all songbird nestlings are fed caterpillars and soft insects — a pesticide-free garden with native trees keeps that food source available.',
        },
      ],
    },
    {
      id: 'year-round-food-availability',
      title: 'Creating Year-Round Food Availability',
      blocks: [
        {
          type: 'p',
          text: 'A genuinely bird-rich garden avoids food gaps across the year by combining plants with staggered bloom, fruiting, and seeding times, rather than relying on a single season of abundance.',
        },
        {
          type: 'table',
          headers: ['Season', 'Food Sources', 'Key Plants'],
          rows: [
            ['Spring', 'Early insects on new growth, early-fruiting shrubs', 'Serviceberry, native cherries, early-emerging insects on oak/willow foliage'],
            ['Summer', 'Peak insect activity for feeding nestlings, early berries', 'Elderberry, native trees hosting caterpillars, flowering perennials for seed-set later'],
            ['Fall', 'High-fat migration fuel berries, ripening seed heads', 'Native dogwood, viburnum, coneflower and black-eyed Susan seed heads'],
            ['Winter', 'Persistent berries, standing seed heads, brush pile shelter', 'Holly, winterberry, ornamental grasses, uncut perennial seed heads'],
          ],
        },
        {
          type: 'tip',
          emoji: '🗓️',
          text: 'Reviewing this seasonal table against your own yard\'s current plantings quickly reveals gaps — a garden heavy on spring and summer bloomers but with nothing for fall/winter fruit or seed is a common and easily correctable pattern.',
        },
      ],
    },
  ],
};
