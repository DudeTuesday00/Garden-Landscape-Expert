export const homeGreenhouseGuideContent = {
  id: 'home-greenhouse-guide',
  hero: {
    emoji: '🏡',
    title: 'The Home Greenhouse Guide',
    subtitle: 'Choosing, siting, and running a backyard greenhouse — the covering, the ventilation, the heat, and what to grow in it through the year.',
  },
  intro: 'A greenhouse extends your season at both ends, protects tender plants from frost, and gives seedlings a stable place to grow. It is also the garden project most likely to disappoint if planned carelessly: the classic failures are a structure too small to be useful, a site with too little winter sun, and above all a house that overheats on a sunny day. This guide covers the decisions that matter — what type to build or buy, where to put it, how to cover it, how to ventilate and heat it, and how to manage it through the seasons. For smaller-scale protection, see the site\'s Cold Frames & Season Extension guide; for starting seeds inside, Starting Seeds Indoors; and for soil-free growing in a greenhouse, the Hydroponics for Beginners guide.',
  sections: [
    {
      id: 'types-and-covering',
      title: 'Types and Coverings',
      blocks: [
        {
          type: 'p',
          text: 'Greenhouses differ in structure, and in what covers them. Both choices shape cost, durability, and how well the greenhouse holds heat.',
        },
        {
          type: 'table',
          headers: ['Type', 'Description', 'Best For'],
          rows: [
            ['Freestanding', 'A standalone frame on a level footing', 'Most home gardeners; the most flexible for placement and size'],
            ['Lean-to', 'Built against a house or garage wall', 'Small spaces and easy access to water and power; borrows heat from the building'],
            ['Hoop house', 'Curved metal or plastic ribs covered in polyethylene film', 'Low-cost, large growing area; good for season extension and vegetables'],
            ['Cold frame', 'A low, unheated box with a transparent lid', 'Hardening off and winter greens; covered in a separate guide'],
          ],
        },
        {
          type: 'table',
          headers: ['Covering', 'Strengths', 'Drawbacks'],
          rows: [
            ['Twin-wall polycarbonate', 'Insulates well, durable, diffuses light, hard to break', 'Costs more than film; can yellow over many years'],
            ['Glass', 'Clear and long-lasting', 'Heavy, breakable, and poorly insulating unless double-glazed'],
            ['Polyethylene film', 'Cheapest and easy to install', 'Needs replacing every few years and degrades in sunlight'],
          ],
        },
        {
          type: 'tip',
          emoji: '📐',
          text: 'Buy or build bigger than you think you need. Nearly every greenhouse owner wishes they had more space within a season or two, and a larger house also holds a steadier temperature than a tiny one.',
        },
        {
          type: 'image',
          src: '/guides/home-greenhouse-guide/polycarbonate-greenhouse-garden.jpg',
          alt: 'A small freestanding polycarbonate greenhouse with an aluminum frame in a sunny backyard garden',
          caption: 'A freestanding polycarbonate greenhouse is the most common home choice.',
        },
      ],
    },
    {
      id: 'siting',
      title: 'Siting the Greenhouse',
      blocks: [
        {
          type: 'p',
          text: 'Location matters more than any feature you add later. A greenhouse in the wrong spot is hard to fix.',
        },
        {
          type: 'list',
          items: [
            'Choose a spot with as much sun as possible through winter, when the sun is low. Trees and buildings that shade a site in winter matter more than summer shade.',
            'Aim for a level, well-drained site. A greenhouse in a low spot collects cold air and water.',
            'A common recommendation is to orient the long axis roughly east to west so the long side faces the low winter sun, though many good greenhouses are simply placed wherever sun and access allow.',
            'Place it near water and electricity if possible. Carrying water long distances and running extension cords is tiring and unsafe.',
            'Provide wind protection. A windbreak reduces heat loss and physical strain on the structure, but keep it far enough away not to shade the greenhouse.',
            'Anchor the frame properly to a foundation or ground anchors. A lightweight greenhouse can be lifted by strong wind.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Check local rules before building. Many areas require permits for structures above a certain size, and homeowner associations may have their own limits on placement and appearance.',
        },
        {
          type: 'image',
          src: '/guides/home-greenhouse-guide/greenhouse-winter-sun-site.jpg',
          alt: 'A small greenhouse sitting on a level gravel base in an open sunny yard with low winter sunlight',
          caption: 'A sunny, level, well-drained site with good winter light is the foundation of a successful greenhouse.',
        },
      ],
    },
    {
      id: 'ventilation-and-heat',
      title: 'Ventilation, Shade, and Heat',
      blocks: [
        {
          type: 'p',
          text: 'Managing temperature is the central task of greenhouse gardening. A closed greenhouse on a sunny day can climb to temperatures that cook plants in minutes, even in cold weather.',
        },
        {
          type: 'list',
          items: [
            'Ventilation comes first. Roof vents let hot air escape and side vents pull cooler air in. Many references suggest vent area equal to roughly 15-20 percent of the floor area, and more is better in hot climates.',
            'Automatic vent openers that respond to temperature without electricity are inexpensive insurance against a hot day you are not there for.',
            'In summer, use shade cloth, commonly 30 to 50 percent density, or a shading paint on the roof to cut heat and scorch. Remove or reduce it in fall to keep winter light.',
            'Heating is optional. An unheated greenhouse still protects plants from frost and extends the season by several weeks. A small heater that keeps the house above roughly 40-45°F allows overwintering of tender plants, though it adds cost and needs safe, vented equipment.',
            'Air circulation with a small fan reduces fungal disease and evens out temperature.',
            'Water in the morning so foliage dries during the day, and avoid wetting plants late in the day when it is cool.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌡️',
          text: 'A simple minimum-maximum thermometer left in the greenhouse shows the real swing between day and night. Most beginners are surprised by how extreme it is.',
        },
        {
          type: 'image',
          src: '/guides/home-greenhouse-guide/open-roof-vent.jpg',
          alt: 'An open roof vent at the peak of a greenhouse letting hot air escape above green plants',
          caption: 'Roof vents let heat escape — ventilation matters more than any other feature.',
        },
      ],
    },
    {
      id: 'what-to-grow',
      title: 'What to Grow, Season by Season',
      blocks: [
        {
          type: 'p',
          text: 'A greenhouse earns its keep by producing when the garden outside is not. Plan crops around the seasons.',
        },
        {
          type: 'table',
          headers: ['Season', 'Uses', 'Examples'],
          rows: [
            ['Late winter and spring', 'Starting seedlings and hardening them off', 'Tomatoes, peppers, brassicas, flowers; see Starting Seeds Indoors'],
            ['Summer', 'Heat-loving crops that want a longer, warmer season', 'Tomatoes, peppers, cucumbers, eggplant, basil'],
            ['Fall', 'Extending harvests and starting cool-season crops', 'Lettuce, spinach, kale, radishes, herbs'],
            ['Winter', 'Cold-tolerant greens, overwintering tender plants, and getting a head start', 'Winter salad greens, geraniums, citrus in pots, cuttings'],
          ],
        },
        {
          type: 'list',
          items: [
            'Grow in benches, containers, or a ground bed. Benches keep plants at working height and improve airflow, while ground beds give tomatoes and other tall crops more root room.',
            'Fruiting crops in a greenhouse often need hand pollination or a gentle shake of the flowers on days when there are no bees present.',
            'Greenhouse soil and pots can carry disease over time, so refresh potting mix, rotate crops in ground beds where you can, and clean pots and benches between crops.',
          ],
        },
        {
          type: 'tip',
          emoji: '🍅',
          text: 'Tomatoes ripen weeks earlier in a greenhouse, but they demand steady water, good airflow, and consistent care. See Growing Tomatoes for the details.',
        },
        {
          type: 'image',
          src: '/guides/home-greenhouse-guide/seedlings-on-greenhouse-benches.jpg',
          alt: 'Trays of young green seedlings on wooden benches inside a bright greenhouse',
          caption: 'A greenhouse is an ideal place to start and harden off seedlings in spring.',
        },
      ],
    },
    {
      id: 'pests-and-upkeep',
      title: 'Pests, Hygiene, and Upkeep',
      blocks: [
        {
          type: 'p',
          text: 'Warm, sheltered conditions suit pests as much as plants, and a greenhouse has no winter to knock populations back. Prevention and early detection matter most.',
        },
        {
          type: 'table',
          headers: ['Problem', 'Signs', 'Approach'],
          rows: [
            ['Whiteflies', 'Tiny white insects that fly up when leaves are disturbed; sticky leaves', 'Yellow sticky traps, remove badly infested leaves, insecticidal soap; see Organic Pest Control'],
            ['Aphids', 'Clusters of small insects on new growth', 'Rinse with water, soap sprays, and encourage beneficial insects'],
            ['Spider mites', 'Fine stippling and webbing, especially in hot, dry conditions', 'Raise humidity, rinse leaves, and use insecticidal soap or neem'],
            ['Fungal disease (gray mold, mildew)', 'Fuzzy gray or white growth on leaves and stems', 'Improve airflow, water in the morning, remove affected material'],
          ],
        },
        {
          type: 'list',
          items: [
            'Inspect new plants before bringing them in and keep them separate for a couple of weeks.',
            'Keep the floor, benches, and pots clean and remove plant debris promptly.',
            'Hang a few yellow sticky traps as an early warning system and check them weekly.',
            'Clean the glazing at least once a year so plants get maximum light, especially through winter.',
            'Check seals, doors, and vents before winter so drafts and leaks do not undo your heating and insulation work.',
          ],
        },
        {
          type: 'image',
          src: '/guides/home-greenhouse-guide/tomatoes-inside-greenhouse.jpg',
          alt: 'Tall tomato plants with ripening fruit growing along the inside of a bright greenhouse',
          caption: 'Tomatoes ripen weeks earlier in a greenhouse, but they need steady water and good airflow.',
        },
      ],
    },
  ],
}
