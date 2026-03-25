/**
 * Four-Season Garden Design Guide
 * Source: four-season-garden.docx
 */
export const fourSeasonGardenContent = {
  id: 'four-season-garden',
  hero: {
    emoji: '🌱🌸🌻🍂❄️',
    title: 'Four-Season Garden Design',
    subtitle: 'Keep Your Garden Interesting Every Month of the Year',
  },
  intro:
    'Most gardens have a peak season — a glorious window of three or four months — and then they quietly give up. This guide teaches you to design differently: to layer plants, textures, structure, and color so that every single month offers something worth looking at. No dead zones. No apologies. Just a garden that earns its keep year-round.',
  sections: [
    /* ── Overview: Why Most Gardens Have a Dead Zone ── */
    {
      id: 'overview',
      title: 'Why Most Gardens Have a "Dead Zone" — and How to Fix It',
      blocks: [
        {
          type: 'p',
          text: 'Walk through most neighborhoods in January, or even late September, and you\'ll notice the same thing: garden beds of bare dirt or brown sticks, container pots with dried husks, and patios that haven\'t been visited since Labor Day. This is the dead zone — the long, dispiriting stretch of the year when most home gardens simply stop trying.',
        },
        {
          type: 'p',
          text: 'It doesn\'t have to be this way. The dead zone is a design problem, not a climate problem. Gardeners who plan deliberately for all four seasons — choosing plants that take turns providing interest, layering structure and texture alongside ephemeral flowers, and thinking about their garden as a 12-month show rather than a 12-week sprint — never have a dead zone at all.',
        },
        {
          type: 'p',
          text: 'This guide teaches you exactly how to build a garden that delivers something worth looking at in every month of the year. The approach works whether you\'re gardening in Zone 3 in northern Minnesota, Zone 7 in the Mid-Atlantic, or Zone 10 in Southern California. The plants will be different, but the design principles are universal.',
        },
        {
          type: 'tip',
          emoji: '🌍',
          text: 'American Gardens Are All Different: Gardeners in Seattle deal with mild, wet winters and dry summers. Gardeners in Chicago face brutal cold followed by hot, humid summers. Gardeners in Houston battle heat and humidity nearly year-round. This guide addresses all these climates — look for the zone and region callouts throughout to find guidance specific to your area.',
        },
        {
          type: 'h3',
          text: 'The Four Pillars of Year-Round Garden Interest',
        },
        {
          type: 'p',
          text: 'A garden that works in every season is built on four pillars — and you need all four. Most gardeners only think about the first one:',
        },
        {
          type: 'list',
          items: [
            'Bloom sequence — which plants flower in each season and how they hand off to each other',
            'Foliage — the 90% of the time when your garden is leaves, not flowers',
            'Structure — the bones: trees, shrubs, hardscaping, and seedheads that provide form when flowers are gone',
            'Texture and light — how bark, seedpods, ornamental grasses, and evergreens interact with winter light, frost, and snow',
          ],
        },
        {
          type: 'p',
          text: 'Think of it like staging a four-act play. Each act (season) needs its own cast, but the supporting characters — trees, shrubs, structural plants — remain onstage throughout, providing continuity between acts. When you design with all four pillars, your garden never goes dark between performances.',
        },
        {
          type: 'h3',
          text: 'Understanding Your Region: A National Overview',
        },
        {
          type: 'p',
          text: 'The United States spans an enormous range of climates. Before applying any of the season-by-season guidance in this guide, identify your USDA Hardiness Zone at planthardiness.ars.usda.gov. Then find your region in the table below:',
        },
        {
          type: 'table',
          headers: ['USDA Zones', 'Region', 'Design Considerations'],
          rows: [
            [
              'Zones 3–4',
              'Northern Plains, Upper Midwest, Northern New England (MN, ND, SD, northern WI, ME, NH, VT)',
              'Short growing season (May–Sept). Winters are long and cold. Extra emphasis on spring bulbs, fall color, and plants with excellent winter structure. Native conifers and ornamental grasses become especially critical.',
            ],
            [
              'Zones 5–6',
              'Midwest, Mid-Atlantic, lower New England, Pacific NW mountains (OH, IN, IL, PA, NJ, NY, lower New England, W OR/WA)',
              'Four distinct seasons with moderate intensity. Most of the advice in this guide applies directly. Best of all worlds for four-season design.',
            ],
            [
              'Zones 6–7',
              'Mid-South, Transition Zone, lower Midwest, Piedmont (VA, NC, TN, KY, MO, KS, lower Mid-Atlantic)',
              'Excellent four-season potential. Winters mild enough for broadleaf evergreens; summers hot enough for bold tropical-style annuals. Diverse plant palette.',
            ],
            [
              'Zones 7–8',
              'South, Pacific Coast, Mid-Atlantic coast (GA, AL, MS, LA, SC, OR coast, WA coast, N CA coast)',
              'Mild winters allow many tender perennials to overwinter. Summer heat is the challenge; cool-season plants thrive in fall and spring. Evergreens dominant year-round.',
            ],
            [
              'Zones 9–10',
              'Gulf Coast, Southern CA, Central Valley CA, desert Southwest (TX Gulf, FL, AZ, SoCal, Central CA)',
              'Winter is the prime growing season for cool-season plants. Summers are extreme. Four-season design shifts: spring = summer annuals, fall = your "spring." Succulents provide year-round structure.',
            ],
            [
              'Zone 11+',
              'South Florida, Hawaii, Puerto Rico',
              'Near-tropical; frost-free. Four-season design relies on bloom rotation among tropical species, dry/wet season adaptation, and texture layering since there is no dormancy period.',
            ],
          ],
        },
      ],
    },
  ],
}
