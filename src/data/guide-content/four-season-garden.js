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
    /* ── Section 2: Spring ── */
    {
      id: 'spring',
      title: '🌸 Spring — The Awakening: Maximizing the Season Everyone Expects',
      blocks: [
        {
          type: 'p',
          text: 'Spring is the season every gardener gets excited about — but it\'s also the easiest season to let slip past before you\'ve enjoyed it. The key to a great spring garden is layering — so that bloom follows bloom from the very first warm days in late winter all the way to summer\'s arrival. Without layering, you get one glorious week and then nothing.',
        },
        {
          type: 'h3',
          text: 'The Three-Wave Approach',
        },
        {
          type: 'p',
          text: 'The three-wave approach is the foundation of great spring design. Plant these waves to succeed each other seamlessly:',
        },
        {
          type: 'list',
          items: [
            'Early spring (Wave 1): Bulbs and early shrubs that bloom before the leaves emerge — crocus, snowdrops, forsythia, winter aconite',
            'Mid-spring (Wave 2): Peak bloomers — daffodils, tulips, bleeding heart, magnolia, cherry',
            'Late spring (Wave 3): The bridge to summer — allium, iris, peonies, columbine, baptisia',
          ],
        },
        {
          type: 'tip',
          emoji: '🌷',
          text: 'The Bulb Rule: Plant bulbs in fall for spring bloom — that\'s when the roots establish. A good rule of thumb: plant bulb depth at 2–3× the bulb\'s diameter. Naturalize bulbs in drifts of 15–25 or more for visual impact rather than scattering individuals. In Zones 8–10, many tulips and hyacinths need pre-chilling in the refrigerator for 6–8 weeks before planting.',
        },
        {
          type: 'h3',
          text: 'Top Spring Performers',
        },
        {
          type: 'table',
          headers: ['Plant', 'Type', 'Zones', 'Bloom Time', 'Height', 'Design Role'],
          rows: [
            ['Snowdrop (Galanthus)', 'Bulb', '3–7', 'Late Jan–Mar', '4–6 in', 'First sign of life; naturalizes well'],
            ['Crocus', 'Corm', '3–8', 'Feb–Mar', '3–5 in', 'Mass plantings in lawn or borders'],
            ['Winter Aconite (Eranthis)', 'Tuber', '3–7', 'Jan–Mar', '3–4 in', 'Yellow carpet under trees'],
            ['Forsythia', 'Shrub', '5–8', 'Mar–Apr', '6–10 ft', 'Bold yellow before leaves emerge'],
            ['Daffodil (Narcissus)', 'Bulb', '3–8', 'Mar–Apr', '6–18 in', 'Deer-resistant; naturalizes reliably'],
            ['Magnolia (saucer/star)', 'Tree', '4–9', 'Mar–Apr', '15–25 ft', 'Spectacular early focal point'],
            ['Tulip (species)', 'Bulb', '3–7', 'Apr–May', '6–18 in', 'Color in sweeping drifts'],
            ['Bleeding Heart (Dicentra)', 'Perennial', '3–9', 'Apr–May', '18–36 in', 'Shade gardens; elegant arching form'],
            ['Allium (ornamental onion)', 'Bulb', '4–8', 'May–Jun', '18–48 in', 'Structural globes bridge spring/summer'],
            ['Peony (Paeonia)', 'Perennial', '3–8', 'May–Jun', '24–36 in', 'Long-lived, fragrant, showstopping'],
            ['Iris (bearded)', 'Perennial', '3–10', 'May–Jun', '18–48 in', 'Wide color range; excellent mid-border'],
            ['Baptisia (wild indigo)', 'Perennial', '3–9', 'May–Jun', '3–4 ft', 'Native; structural seedpods persist'],
            ['Redbud (Cercis)', 'Tree/shrub', '4–9', 'Mar–Apr', '20–30 ft', 'Magenta bloom on bare branches'],
            ['Flowering Dogwood', 'Tree', '5–9', 'Apr–May', '15–25 ft', 'Layered horizontal form; fall color too'],
            ['Creeping Phlox', 'Groundcover', '3–9', 'Apr–May', '4–6 in', 'Cascading color on slopes/walls'],
          ],
        },
        {
          type: 'h3',
          text: 'Spring Design Strategies by Region',
        },
        {
          type: 'p',
          text: 'Northern gardens (Zones 3–5) have shorter windows — bulbs are critical, and late spring perennials must carry extra weight. Southern gardens (Zones 7–10) should focus on cool-season annuals like pansies, snapdragons, and larkspur that bloom through winter and peak in early spring. Pacific Northwest gardeners enjoy an exceptionally long spring that can stretch from February to May.',
        },
        {
          type: 'tip',
          emoji: '🌧️',
          text: 'Cool-Season Annuals for Zones 7–10: In warmer climates, cool-season annuals (pansies, violas, snapdragons, larkspur, stock, nigella) planted in fall or late winter give you the equivalent of a northern spring garden. They bloom through mild winters and peak in your "spring" (Feb–April), then give way to warm-season plants as heat arrives.',
        },
      ],
    },
    /* ── Section 3: Summer ── */
    {
      id: 'summer',
      title: '☀️ Summer — The Long Game: Designing Sustained Color Through Heat',
      blocks: [
        {
          type: 'p',
          text: 'Summer is the season most home gardens are designed for — and yet it\'s also the season where gardens most often fall apart. The problem: most gardeners rely too heavily on annuals that wear out in July, or perennials that bloom beautifully for three weeks and then contribute nothing for the rest of the season.',
        },
        {
          type: 'p',
          text: 'Great summer garden design is about the long game. You want plants that carry interest from June through September — or failing that, a relay race where something new is always stepping up as another finishes.',
        },
        {
          type: 'list',
          items: [
            'Reblooming perennials — deadhead or cut back for a second flush: coneflowers, salvia, catmint, coreopsis',
            'Long-blooming annuals — zinnias, lantana, pentas, marigolds, and portulaca bloom relentlessly from planting to frost',
            'Foliage plants — caladiums, coleus, ornamental sweet potato, and cannas carry the load between flowering bursts',
            'Ornamental grasses — not primarily summer bloomers, but their texture and movement add summer garden structure',
          ],
        },
        {
          type: 'tip',
          emoji: '☀️',
          text: 'The Summer Succession Principle: For every perennial that blooms in June, plan a companion that blooms in July–August. For every perennial that fades in August, have a fall partner starting to emerge. A border designed this way never has an empty moment — it just shifts emphasis as the season progresses.',
        },
        {
          type: 'h3',
          text: 'Top Summer Performers',
        },
        {
          type: 'table',
          headers: ['Plant', 'Type', 'Zones', 'Bloom/Season', 'Height', 'Design Role'],
          rows: [
            ['Purple Coneflower (Echinacea)', 'Perennial', '3–9', 'Jun–Sep', '2–4 ft', 'Native; long-blooming; wildlife magnet'],
            ['Black-eyed Susan (Rudbeckia)', 'Perennial/Ann', '3–10', 'Jun–Oct', '2–3 ft', 'Cheerful; native; extends into fall'],
            ['Salvia (blue sage spp.)', 'Perennial/Ann', '4–11', 'Jun–frost', '18–36 in', 'Reliable long-bloomer; pollinator favorite'],
            ['Catmint (Nepeta)', 'Perennial', '3–8', 'May–Sep', '12–24 in', 'Reblooms; blue-lavender edging plant'],
            ['Daylily (Hemerocallis)', 'Perennial', '3–10', 'Jun–Aug', '18–48 in', 'Wide color range; tough; repeats with deadheading'],
            ['Coneflower (Helenium)', 'Perennial', '3–8', 'Jul–Sep', '2–4 ft', 'Rich fall-toned colors; excellent pollinators'],
            ['Coreopsis (tickseed)', 'Perennial', '4–9', 'Jun–Sep', '12–24 in', 'Heat-tolerant; nonstop yellow/orange/pink bloom'],
            ['Zinnia', 'Annual', 'All zones', 'Jun–frost', '12–36 in', 'Maximum color; easy; cut-and-come-again'],
            ['Lantana', 'Ann/tender per', '9–11', 'May–frost', '18–48 in', 'Extreme heat tolerant; butterfly attractor'],
            ['Caladium', 'Tender bulb', '9–11', 'All summer', '12–24 in', 'Tropical foliage; shade or part-shade star'],
            ['Monarda (bee balm)', 'Perennial', '3–9', 'Jun–Aug', '3–4 ft', 'Native; hummingbird magnet; fragrant'],
            ['Agastache (hyssop)', 'Perennial', '5–10', 'Jun–frost', '18–36 in', 'Fragrant; drought-tolerant; long-blooming'],
            ['Veronicastrum', 'Perennial', '3–8', 'Jul–Aug', '4–6 ft', 'Tall architectural spikes; back-of-border'],
            ['Garden Phlox', 'Perennial', '3–8', 'Jul–Sep', '3–4 ft', 'Fragrant; bold color; mid-border height'],
            ['Dahlia', 'Tender tuber', '8–11', 'Jul–frost', '18–72 in', 'Extraordinary range; cut flower; bold color'],
          ],
        },
        {
          type: 'h3',
          text: 'Designing for Heat Tolerance by Region',
        },
        {
          type: 'p',
          text: 'Summer is when regional differences matter most. The table below highlights how to adapt summer garden design to your specific conditions:',
        },
        {
          type: 'table',
          headers: ['Region / Climate', 'Summer Design Strategy'],
          rows: [
            [
              'Hot & Humid (Gulf Coast, Southeast, Mid-Atlantic coast)',
              'Choose plants rated one zone warmer than your zone. Emphasize shade (large trees, pergolas) and container plants you can move. Crape myrtle, knockout roses, lantana, pentas, and vinca thrive. Water deeply but less frequently to discourage fungal disease. Add shade cloth to vegetable gardens.',
            ],
            [
              'Hot & Dry (Southwest, Great Plains, High Desert)',
              'Native and drought-adapted plants are your core: agave, yucca, salvia, desert marigold, globe mallow, lavender, ornamental grasses. Deep infrequent watering trains roots downward. Mulch 3–4 inches deep to retain soil moisture and lower soil temperature.',
            ],
            [
              'Cool Summers (Pacific Northwest, Northern New England, Mountain West)',
              'Mediterranean plants thrive here — lavender, rosemary, cistus. You can grow plants that struggle in humidity: delphinium, foxglove, lupine. Take advantage of cooler conditions to push the season with plants rated 1–2 zones colder.',
            ],
            [
              'Continental Midwest & Great Plains',
              'Four-season region par excellence. Wide temperature swings mean choosing plants with proven toughness. Native prairie plants — coneflower, prairie dropseed, little bluestem, rattlesnake master — are engineered for exactly this climate.',
            ],
          ],
        },
      ],
    },
    /* ── Section 4: Fall ── */
    {
      id: 'fall',
      title: '🍂 Fall — The Underrated Season: Color, Texture, and Wildlife Value',
      blocks: [
        {
          type: 'p',
          text: 'Fall is having a moment in garden design — and rightfully so. For decades, American gardeners treated fall as the garden\'s ending: time to cut everything down, rake the leaves, and close up shop. Today\'s best garden designers know that fall is actually one of the richest seasons for beauty and wildlife, and that cleaning up in fall is often the worst thing you can do for your garden\'s ecosystem and winter structure.',
        },
        {
          type: 'p',
          text: 'A fall garden has three sources of beauty that most gardeners exploit poorly:',
        },
        {
          type: 'list',
          items: [
            'Fall-blooming plants — asters, sedums, rudbeckia, toad lily, and witch hazel that bloom September through November',
            'Fall foliage — the brilliant color show of deciduous trees and shrubs that shifts the entire landscape',
            'Seedheads and structure — the skeletal beauty of coneflowers, grasses, baptisia, and other plants that provide interest (and wildlife food) through winter',
          ],
        },
        {
          type: 'tip',
          emoji: '🐦',
          text: 'Leave the Leaves (and Seedheads): Research consistently shows that seedheads left standing through winter provide critical food for overwintering birds — goldfinches, nuthatches, chickadees, and sparrows rely on them. Hollow stems also house native bees and beneficial insects. Cut back only what is truly diseased; leave the rest until spring. Your garden will look better and your local wildlife will thank you.',
        },
        {
          type: 'h3',
          text: 'Top Fall Performers',
        },
        {
          type: 'table',
          headers: ['Plant', 'Type', 'Zones', 'Season', 'Height', 'Fall Feature'],
          rows: [
            ['New England Aster', 'Perennial', '3–8', 'Sep–Oct', '3–5 ft', 'Purple flowers; butterfly magnet'],
            ['Sedum (Hylotelephium)', 'Perennial', '3–11', 'Aug–Oct', '12–24 in', 'Pink/red flowers; copper seedheads into winter'],
            ['Japanese Anemone', 'Perennial', '4–8', 'Aug–Oct', '2–4 ft', 'Elegant pink/white flowers; late-season delicacy'],
            ['Rudbeckia (black-eyed Susan)', 'Perennial', '3–10', 'Jun–Oct', '2–3 ft', 'Glowing gold into October; birds love seedheads'],
            ['Ornamental Grasses (misc)', 'Perennial', '3–10', 'Sep–Feb', '2–8 ft', 'Feathery plumes; movement and sound in wind'],
            ['Witch Hazel (Hamamelis)', 'Shrub/tree', '3–9', 'Oct–Feb', '10–20 ft', 'Spidery flowers; some species bloom in winter!'],
            ['Toad Lily (Tricyrtis)', 'Perennial', '4–9', 'Sep–Oct', '24–36 in', 'Orchid-like spotted flowers; shade garden gem'],
            ['Goldenrod (Solidago)', 'Perennial', '3–9', 'Aug–Oct', '2–4 ft', 'Native; pollinator powerhouse; feathery gold'],
            ['Firethorn (Pyracantha)', 'Shrub', '6–9', 'Fall–winter', '6–12 ft', 'Brilliant orange-red berries through winter'],
            ['Beautyberry (Callicarpa)', 'Shrub', '5–8', 'Sep–Dec', '4–6 ft', 'Stunning magenta-purple berry clusters'],
            ['Oakleaf Hydrangea', 'Shrub', '5–9', 'Fall–winter', '4–8 ft', 'Papery white flowerheads; exfoliating bark; fall leaf color'],
            ['Burning Bush (native alt: Itea)', 'Shrub', '5–9', 'Sep–Nov', '4–6 ft', 'Brilliant red fall foliage; Itea is a native substitute'],
            ['Sugar Maple', 'Tree', '3–8', 'Sep–Nov', '60–80 ft', 'Quintessential fall color: gold to orange to scarlet'],
            ['Serviceberry (Amelanchier)', 'Tree/shrub', '3–9', 'Sep–Oct', '6–25 ft', 'Red-orange fall color; native; multi-season interest'],
            ['Switchgrass (Panicum)', 'Grass', '3–9', 'Sep–Jan', '3–5 ft', 'Native; airy texture; burgundy-red fall color'],
          ],
        },
        {
          type: 'h3',
          text: 'Planning the Fall Foliage Show',
        },
        {
          type: 'p',
          text: 'Fall foliage is the most spectacular large-scale color event in the American landscape — and you can deliberately design for it. A few key principles:',
        },
        {
          type: 'list',
          items: [
            'Layer your fall color: some trees color in late September, others in October, others in November. Choose trees that give you a sequence, not all at once.',
            'Native species tend to give the most reliable fall color in their home regions. Sugar and red maples in the Northeast; sweetgum and tupelo in the South; quaking aspen and bigtooth aspen in the Mountain West.',
            'Pair fall-foliage trees with evergreen backgrounds — the contrast between brilliant deciduous color and dark green conifers or broadleaf evergreens is electrifying.',
            'Shrubs add color at eye level where you notice it most: oakleaf hydrangea, fothergilla, viburnum, itea, and native blueberry all give excellent fall shrub color.',
          ],
        },
      ],
    },
    /* ── Section 5: Winter ── */
    {
      id: 'winter',
      title: '❄️ Winter — The Forgotten Season: Structure, Texture, and Quiet Beauty',
      blocks: [
        {
          type: 'p',
          text: 'Winter is the season that separates intentionally designed gardens from accidentally planted ones. Strip away the flowers, most of the foliage, and the lush summer growth — and what remains? The answer is either "not much" or "something deeply beautiful." That answer is determined entirely by design choices.',
        },
        {
          type: 'p',
          text: 'A winter garden is defined by four elements:',
        },
        {
          type: 'list',
          items: [
            'Evergreen structure — plants that maintain foliage and form year-round, providing visual anchors when everything else is bare',
            'Bark and stem color — the extraordinary texture show of exfoliating birch bark, red-twig dogwood stems, and paperbark maple',
            'Persistent fruits and berries — holly, winterberry, firethorn, and crabapple that color the garden red and orange',
            'Architectural seedheads — the skeletal geometry of ornamental grasses, coneflowers, and alliums dusted with frost or snow',
          ],
        },
        {
          type: 'tip',
          emoji: '❄️',
          text: 'Winter Is the Ultimate Design Test: Photograph your garden on a gray January day. If you like what you see — if there\'s structure, texture, something worth looking at — your design is working. If all you see is bare soil and brown sticks, that\'s your shopping list for fall planting.',
        },
        {
          type: 'h3',
          text: 'Top Winter Interest Plants',
        },
        {
          type: 'table',
          headers: ['Plant', 'Type', 'Zones', 'Winter Feature', 'Height', 'Notes'],
          rows: [
            ['Winterberry Holly (Ilex verticillata)', 'Shrub (native)', '3–9', 'Brilliant red berries', '6–10 ft', 'Deciduous; berries persist; needs male pollinator'],
            ['American Holly (Ilex opaca)', 'Tree (native)', '5–9', 'Red berries + evergreen foliage', '15–50 ft', 'Excellent bird plant; classic winter look'],
            ['Red-twig Dogwood (Cornus sericea)', 'Shrub (native)', '2–9', 'Brilliant red stems', '6–8 ft', 'Native; wet tolerant; cut 1/3 annually for best stem color'],
            ['Yellow-twig Dogwood (Cornus sericea \'Flaviramea\')', 'Shrub', '2–8', 'Bright yellow stems', '6–8 ft', 'Contrast with red-twig for stunning winter pairing'],
            ['River Birch (Betula nigra)', 'Tree (native)', '4–9', 'Peeling, cinnamon-colored bark', '40–70 ft', 'Multi-trunk form; incredible texture year-round'],
            ['Paper Birch (Betula papyrifera)', 'Tree (native)', '2–7', 'White peeling bark', '40–60 ft', 'Iconic northern winter silhouette; multi-stem form'],
            ['Paperbark Maple (Acer griseum)', 'Tree', '4–8', 'Cinnamon exfoliating bark', '20–30 ft', 'Stunning bark show; three-season interest'],
            ['Ornamental Grasses (Miscanthus, Panicum)', 'Perennial', '3–9', 'Feathery plumes; movement', '3–8 ft', 'Leave standing through winter; cut back in late Feb–Mar'],
            ['Coneflower (Echinacea) seedheads', 'Perennial', '3–9', 'Spiky seedheads; bird food', '2–4 ft', 'Leave standing; goldfinches will feed on seeds all winter'],
            ['Leatherleaf Viburnum', 'Shrub', '5–8', 'Semi-evergreen; burgundy winter foliage', '5–6 ft', 'Excellent textural screen in winter'],
            ['Hellebore (Lenten rose)', 'Perennial (evergreen)', '4–9', 'Evergreen foliage; late winter blooms', '18–24 in', 'Blooms Feb–April; deer resistant'],
            ['Firethorn (Pyracantha)', 'Shrub', '6–9', 'Orange-red berries', '6–12 ft', 'Evergreen; persists into winter; birds will eventually eat berries'],
            ['Crabapple (ornamental)', 'Tree', '4–8', 'Persistent small fruits', '15–25 ft', 'Choose persistent-fruited varieties like \'Donald Wyman\''],
            ['Beautyberry (Callicarpa)', 'Shrub', '5–8', 'Purple/magenta berries persist', '4–6 ft', 'Best berry show of any shrub; deer resistant'],
            ['Mugo Pine / Dwarf conifers', 'Shrub', '2–7', 'Evergreen structure + texture', '2–6 ft', 'Dwarf conifers provide low structure without overwhelming borders'],
          ],
        },
        {
          type: 'h3',
          text: 'Designing for Winter in Your Climate',
        },
        {
          type: 'p',
          text: 'Winter design varies dramatically by region. In northern zones, evergreens are critical anchors — choose cold-hardy broadleafs like inkberry holly and winterberry along with native conifers. In the mid-South, broadleaf evergreens like camellias, mahonia, and sweet box bloom in winter itself. In mild coastal climates, winter may be your best growing season for cool-season interest plants.',
        },
        {
          type: 'tip',
          emoji: '🌿',
          text: 'Broadleaf Evergreens for Winter Interest: In Zones 6–9, consider these winter stars: Southern magnolia, camellias (Zones 7–9; bloom Nov–Mar), mahonia (Zones 5–9; yellow winter flowers), boxwood (structure), nandina (Zones 6–9; red winter berries and foliage), and sweet box (Sarcococca; Zones 6–9; fragrant winter flowers). These plants give you a garden that looks genuinely alive in January.',
        },
      ],
    },
    /* ── Section 6: Design Principles ── */
    {
      id: 'design-principles',
      title: 'Design Principles for the Four-Season Garden',
      blocks: [
        {
          type: 'p',
          text: 'The specific plants matter — but the design principles that govern how you put them together matter more. These are the rules that four-season garden designers return to again and again:',
        },
        {
          type: 'h3',
          text: '1. Anchor with Structure First',
        },
        {
          type: 'p',
          text: 'Before choosing any perennial or annual, lay out your structural framework: trees, shrubs, and hardscaping elements that provide visual anchors year-round. A good rule of thumb: 50–60% of your garden\'s volume should be structural plants (shrubs and small trees) with the remainder devoted to perennials, grasses, bulbs, and annuals.',
        },
        {
          type: 'tip',
          emoji: '🏗️',
          text: 'The Structural Framework Rule: If you removed every perennial from your garden beds, would anything be left worth looking at? If the answer is no, you need more structural planting. A garden with no woody framework — only perennials — will look great for 3 months and bare for 9. Add shrubs, small trees, ornamental grasses, and evergreens to provide the year-round backbone.',
        },
        {
          type: 'h3',
          text: '2. Think in Layers',
        },
        {
          type: 'p',
          text: 'A well-designed border has four distinct height layers, each contributing interest at different times of year:',
        },
        {
          type: 'list',
          items: [
            'Canopy layer (15+ feet): Shade trees, large ornamental trees — flowering dogwood, serviceberry, magnolia, ornamental crabapple',
            'Understory layer (6–15 feet): Large shrubs and small trees — viburnum, witch hazel, native hollies, oakleaf hydrangea',
            'Shrub layer (2–6 feet): Medium shrubs — hydrangeas, spireas, native asters, ornamental grasses, roses',
            'Ground layer (0–2 feet): Perennials, groundcovers, bulbs, low grasses — the seasonal color engine of the border',
          ],
        },
        {
          type: 'h3',
          text: '3. Plant in Drifts, Not Spots',
        },
        {
          type: 'p',
          text: 'A single purple coneflower disappears in a border. Seven purple coneflowers planted in a flowing drift create an impact. Three or more of anything — planted in odd numbers, drifting diagonally through a bed — reads as intentional design rather than random placement. For spring bulbs, think in terms of dozens to hundreds, not threes and fives.',
        },
        {
          type: 'h3',
          text: '4. Repeat Colors and Forms',
        },
        {
          type: 'p',
          text: 'The most visually unified borders repeat the same colors and forms throughout the planting in different plants. If you love purple, plant it in multiple spots along the border — catmint, allium, asters, and salvia all sharing the same hue creates a through-line of color that ties the composition together. The eye follows repetition; without it, borders look restless and confused.',
        },
        {
          type: 'h3',
          text: '5. Celebrate Transitions',
        },
        {
          type: 'p',
          text: 'The moments between seasons — late winter into spring, spring into summer, summer into fall — are design opportunities. Plant "bridge" plants that carry beauty across the transition: alliums that extend from late spring into early summer; rudbeckia that carries from midsummer through fall; ornamental grasses that peak in fall and persist beautifully through winter. These bridges eliminate the gap that typically exists between seasons.',
        },
      ],
    },
  ],
}
