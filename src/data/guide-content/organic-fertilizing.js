/**
 * Organic Fertilizing Guide
 * Source: organic-fertilizing.docx
 */
export const organicFertilizingContent = {
  id: 'organic-fertilizing',
  hero: {
    emoji: '🌿🐟🪱🍂🌱',
    title: 'Organic Fertilizing',
    subtitle: 'Feed Your Plants Naturally with Compost, Fish Emulsion, Worm Castings, and Every Organic Option in Between',
  },
  intro:
    'Healthy plants begin in healthy soil. This guide covers everything you need to know about feeding your garden organically — from understanding what your soil actually needs, to choosing the right amendment for every plant and situation, to making your own fertilizers at home for pennies. No synthetic chemicals, no guesswork, just practical wisdom that works in every American climate and growing zone.',
  sections: [
    /* ── Overview ── */
    {
      id: 'overview',
      title: 'Why Organic Fertilizing Is Worth Understanding',
      blocks: [
        {
          type: 'p',
          text: 'Walk into any garden center and you\'ll find shelves of fertilizer bags promising bigger tomatoes, greener lawns, and more beautiful flowers — most of them synthetic, fast-release formulas that do exactly what they promise in the short term. And then, season after season, you need more of them, because the soil underneath never gets healthier. In fact, with heavy synthetic fertilizer use, it often gets worse.',
        },
        {
          type: 'p',
          text: 'Organic fertilizing works differently. At its core, organic fertilizing is about feeding the soil ecosystem — the billions of bacteria, fungi, earthworms, and other organisms that break down organic matter and make nutrients available to plants in exactly the forms and quantities they need. When you fertilize organically, you\'re investing in a living system, not just pushing nutrition into a passive substrate.',
        },
        {
          type: 'p',
          text: 'The result is a garden that gets progressively easier to manage over time. Soil structure improves, water retention increases, pest and disease pressure often decreases, and your plants develop deeper root systems that draw on a broader nutrient base. The transition from synthetic to organic fertilizing takes patience — usually two to three growing seasons before you see the full benefit — but the long-term payoff is a genuinely self-sustaining garden that costs less to maintain and produces more.',
        },
        {
          type: 'tip',
          emoji: '🌍',
          text: 'Organic Fertilizing Across America: The principles of organic soil health are universal, but the specific challenges vary enormously by region. Sandy soils in coastal Southeast Florida drain nutrients rapidly and need frequent organic amendments. Heavy clay soils in the Midwest hold nutrients but restrict root growth. Alkaline soils in the arid West lock up iron and manganese. This guide addresses the full range of American soil and climate conditions — look for region-specific guidance throughout.',
        },
      ],
    },
    /* ── Section 2: Understanding Soil & Plant Nutrition ── */
    {
      id: 'soil-nutrition',
      title: 'Section 1: Understanding Soil & Plant Nutrition',
      blocks: [
        {
          type: 'p',
          text: 'Before choosing any fertilizer — organic or otherwise — you need to understand what you\'re trying to provide. Plants require 17 essential nutrients to complete their life cycle. These fall into three categories: primary macronutrients (N-P-K), secondary nutrients (calcium, magnesium, sulfur), and micronutrients needed in smaller but essential quantities.',
        },
        {
          type: 'h3',
          text: 'The Macronutrients: N-P-K and Beyond',
        },
        {
          type: 'p',
          text: 'Every fertilizer bag displays three numbers on the label — these are the N-P-K ratio, representing the percentages by weight of nitrogen (N), phosphorus (P), and potassium (K). These are the three primary macronutrients:',
        },
        {
          type: 'table',
          headers: ['Nutrient', 'Symbol', 'Role in Plant Growth', 'Deficiency Signs', 'Excess Signs'],
          rows: [
            [
              'Nitrogen',
              'N',
              'Fuels leafy, vegetative growth; responsible for deep green color; component of chlorophyll and amino acids',
              'Yellowing of older leaves first; slow, stunted growth; pale overall color',
              'Lush, dark green growth but few flowers or fruit; increased pest susceptibility; water pollution risk',
            ],
            [
              'Phosphorus',
              'P',
              'Root development, flower formation, fruit set, seed production; critical for energy transfer within the plant',
              'Purple or reddish discoloration on undersides of leaves; poor root development; delayed flowering',
              'Rarely toxic to plants but blocks uptake of zinc, iron, manganese; contributes to waterway pollution',
            ],
            [
              'Potassium',
              'K',
              'Overall plant vigor; disease resistance; water regulation; activates enzymes; improves fruit quality',
              'Browning or scorching of leaf margins, starting with older leaves; weak stems; poor fruit quality',
              'Interferes with calcium and magnesium uptake; rarely a problem from organic sources',
            ],
            [
              'Calcium',
              'Ca',
              'Cell wall strength; root tip development; prevents blossom end rot in tomatoes/peppers; regulates soil pH',
              'Distorted new growth; blossom end rot in fruiting vegetables; tip burn in lettuce',
              'Raises soil pH; can compete with magnesium and potassium for uptake',
            ],
            [
              'Magnesium',
              'Mg',
              'Central atom of chlorophyll; enzyme activation; sugar production and transport',
              'Yellowing between leaf veins on older leaves (interveinal chlorosis)',
              'Rare; can compete with calcium and potassium uptake at very high levels',
            ],
            [
              'Sulfur',
              'S',
              'Component of amino acids; contributes to flavor in brassicas and alliums; enzyme activation',
              'Yellowing of younger leaves (unlike N deficiency which starts on older leaves)',
              'Lowers soil pH; can damage plants in excess, though rare from organic sources',
            ],
          ],
        },
        {
          type: 'h3',
          text: 'Secondary Nutrients and Micronutrients',
        },
        {
          type: 'p',
          text: 'Beyond the primary macronutrients, plants require secondary nutrients and a suite of micronutrients in small but essential quantities. Unlike synthetic fertilizers, well-made compost and diverse organic amendments naturally supply most of these micronutrients — one of the greatest practical advantages of organic fertilizing.',
        },
        {
          type: 'table',
          headers: ['Micronutrient', 'Key Role', 'Common Deficiency Situation', 'Organic Sources'],
          rows: [
            ['Iron (Fe)', 'Chlorophyll production; enzyme systems', 'Alkaline soils (pH above 7.0); common in Western U.S.', 'Compost; chelated iron; iron sulfate; acidifying amendments'],
            ['Manganese (Mn)', 'Photosynthesis; enzyme activation', 'High pH soils; waterlogged soils', 'Compost; kelp meal; acidifying amendments'],
            ['Zinc (Zn)', 'Hormone production; enzyme systems; growth regulation', 'High pH soils; soils high in phosphorus', 'Compost; kelp meal; zinc sulfate'],
            ['Copper (Cu)', 'Enzyme systems; lignin formation', 'Peaty or sandy soils; high-pH soils', 'Compost; kelp meal; copper sulfate (use cautiously)'],
            ['Boron (B)', 'Cell division; sugar transport; fruit and seed set', 'Sandy, low-organic-matter soils; high-pH soils', 'Compost; kelp meal; borax (small amounts)'],
            ['Molybdenum (Mo)', 'Nitrogen fixation; nitrate reduction', 'Acidic soils; very rare deficiency', 'Compost; lime (raising pH helps availability)'],
            ['Chlorine (Cl)', 'Osmosis; stomatal regulation', 'Rarely deficient in any soil', 'Rainwater; compost; naturally abundant'],
          ],
        },
        {
          type: 'h3',
          text: 'The pH Factor: Why Nothing Works Without It',
        },
        {
          type: 'p',
          text: 'Soil pH — the measure of acidity or alkalinity on a 0–14 scale — is arguably more important than any individual nutrient, because pH determines whether nutrients already present in your soil are available to plant roots at all. Even rich, organic soil will produce nutrient-deficient plants if the pH is wrong, because nutrients become chemically bound and inaccessible outside their optimal range.',
        },
        {
          type: 'table',
          headers: ['pH Range', 'Classification', 'Nutrient Availability', 'Common U.S. Regions', 'Organic Correction'],
          rows: [
            [
              'Below 5.5',
              'Strongly Acid',
              'Aluminum and manganese may become toxic; phosphorus, calcium, magnesium poorly available; most plants struggle',
              'Southeast, Pacific Northwest, parts of Northeast',
              'Agricultural lime (calcium carbonate) or dolomitic lime; wood ash; oyster shell',
            ],
            [
              '5.5–6.5',
              'Slightly Acid',
              'Optimal for most vegetables, fruits, and ornamentals; broadest nutrient availability',
              'Eastern U.S. broadly; most well-managed garden soils',
              'Maintain with organic matter; compost; slightly acidifying fertilizers',
            ],
            [
              '6.5–7.0',
              'Near Neutral',
              'Excellent for most plants; slightly reduced iron and manganese; very good overall',
              'Upper Midwest; well-limed eastern soils',
              'Maintain with organic matter; use slightly acidifying amendments for acid-lovers',
            ],
            [
              '7.0–7.5',
              'Neutral to Slightly Alkaline',
              'Iron, zinc, manganese availability declines; most common source of yellowing in otherwise-healthy plants',
              'Great Plains; parts of Mountain West; irrigated Western soils',
              'Sulfur applications; acidifying fertilizers; peat moss; pine needle mulch',
            ],
            [
              'Above 7.5',
              'Alkaline',
              'Major deficiencies in iron, manganese, zinc, copper; phosphorus poorly available; most plants severely stressed',
              'Desert Southwest; arid West; soils over limestone',
              'Elemental sulfur; acidifying organic matter; chelated micronutrients; raised beds with imported soil',
            ],
          ],
        },
        {
          type: 'tip',
          emoji: '🧪',
          text: 'Always Test Before You Fertilize: A soil test is the single most valuable investment you can make before applying any fertilizer. Most state Cooperative Extension offices offer testing for $15–30 and will give you specific recommendations for your crops. Testing every 2–3 years is ideal. At minimum, test before starting a new garden or if you see unexplained plant problems. Without a soil test, fertilizing is guesswork — you may be adding nutrients that are already in excess while missing the ones that are actually limiting.',
        },
      ],
    },
    /* ── Section 3: Compost — The Foundation of Everything ── */
    {
      id: 'compost',
      title: 'Section 2: Compost — The Foundation of Everything',
      blocks: [
        {
          type: 'p',
          text: 'If you\'re going to do one thing for your garden\'s long-term health, make it compost. Not buy a bag of 10-10-10. Not apply fish emulsion. Compost. Finished compost is the product of decomposed organic matter — kitchen scraps, yard waste, leaves, food scraps — broken down by microbes into a stable, humus-rich material that does more for your soil than anything else you can add.',
        },
        {
          type: 'p',
          text: 'Compost is simultaneously a soil amendment (improving structure, drainage, and water retention), a slow-release fertilizer (providing a balanced supply of macro and micronutrients), a pH buffer (moderating soil acidity and alkalinity), and a biological inoculant (introducing billions of beneficial microbes). No synthetic product comes close to doing all four things at once.',
        },
        {
          type: 'h3',
          text: 'What Compost Does for Your Soil',
        },
        {
          type: 'table',
          headers: ['Benefit', 'What Actually Happens', 'Timeline'],
          rows: [
            [
              'Improves soil structure',
              'Humus particles bind with sand, silt, and clay to create aggregates — the crumb structure that gives healthy soil its sponge-like quality. Sandy soils gain water retention; clay soils gain drainage and aeration.',
              'Noticeable after 1 season; full effect in 2–3 years of regular application',
            ],
            [
              'Feeds soil life',
              'A single teaspoon of finished compost contains over a billion bacteria, plus fungi, nematodes, protozoa, and other organisms that form the food web converting organic matter into plant-available nutrients.',
              'Immediate — organisms are active as soon as compost is incorporated',
            ],
            [
              'Slow-release nutrients',
              'Nitrogen, phosphorus, potassium, and dozens of micronutrients are released gradually as microbes break down organic compounds — matching plant uptake rates and minimizing leaching.',
              'Nutrients release over weeks to months throughout the growing season',
            ],
            [
              'Buffers pH',
              'The organic acids and humus compounds in compost act as a buffer, resisting extreme swings in pH. Especially valuable in regions with inherently alkaline or acidic soils.',
              'Gradual; significant pH moderation takes 1–2 years of regular use',
            ],
            [
              'Suppresses disease',
              'Beneficial microbes in compost compete with and suppress soil-borne pathogens. Compost tea and compost mulch have shown documented suppression of common fungal diseases.',
              'Active biological suppression from first application',
            ],
            [
              'Sequesters carbon',
              'Incorporating organic matter into soil stores atmospheric carbon in stable humus compounds. Organic gardening is one of the most accessible forms of practical carbon sequestration.',
              'Ongoing as long as organic matter is added regularly',
            ],
          ],
        },
        {
          type: 'h3',
          text: 'The Carbon-to-Nitrogen Ratio: The Most Important Compost Concept',
        },
        {
          type: 'p',
          text: 'Hot composting — building a pile that heats to 130–160°F internally — is the fastest way to produce finished compost (in as little as 4–8 weeks) and the most reliable way to kill weed seeds and pathogens. Every compost problem — piles that don\'t heat, slimy piles, piles that smell — ultimately comes down to the carbon-to-nitrogen (C:N) ratio. The ideal ratio for hot composting is roughly 25–30 parts carbon to 1 part nitrogen by weight. In practice, this means balancing "browns" (high-carbon materials) with "greens" (high-nitrogen materials):',
        },
        {
          type: 'table',
          headers: ['Material', 'Type', 'C:N Ratio', 'Best Use', 'Notes'],
          rows: [
            ['Dry leaves', 'Brown (Carbon)', '60–80:1', 'Bulk carbon for balancing greens', 'Most abundant fall material; shred for faster breakdown'],
            ['Straw (not hay)', 'Brown (Carbon)', '80–100:1', 'Bulk carbon; good aeration', 'Straw has no seeds; hay does — know the difference'],
            ['Cardboard (plain)', 'Brown (Carbon)', '350:1', 'Layer at pile base; worm bedding', 'Remove tape and staples; shred or wet first'],
            ['Wood chips', 'Brown (Carbon)', '400:1', 'Bulking agent; long-term carbon', 'Use sparingly in hot compost; best as mulch or slow pile'],
            ['Paper (unbleached)', 'Brown (Carbon)', '150–200:1', 'Layering with wet materials', 'Shred first; avoid glossy or colored inks'],
            ['Sawdust (untreated)', 'Brown (Carbon)', '300–500:1', 'Mix with high-N material', 'Never use treated/painted wood sawdust'],
            ['Fresh grass clippings', 'Green (Nitrogen)', '15–20:1', 'Excellent nitrogen activator', 'Apply in thin layers or mix in; thick layers mat and smell'],
            ['Kitchen scraps (fruit/veg)', 'Green (Nitrogen)', '15–20:1', 'Core nitrogen source', 'Bury in pile center to deter pests'],
            ['Coffee grounds', 'Green (Nitrogen)', '20:1', 'Great nitrogen source', 'Myth: not strongly acidic; near-neutral pH when wet'],
            ['Fresh manure (chicken)', 'Green (Nitrogen)', '7:1', 'Powerful nitrogen activator', 'Hot-compost first; never apply raw to edible plants'],
            ['Fresh manure (cow/horse)', 'Green (Nitrogen)', '20:1', 'Balanced nitrogen addition', 'Best composted; may contain weed seeds'],
            ['Garden trimmings', 'Green (Nitrogen)', '20–30:1', 'Bulk nitrogen material', 'Avoid diseased plant material in cool piles'],
            ['Seaweed / kelp', 'Green (Nitrogen)', '19:1', 'Micronutrient booster', 'Excellent; rinse salt water off if collected fresh'],
            ['Hair / wool', 'Green (Nitrogen)', '4–6:1', 'Slow-release nitrogen boost', 'Works well; breaks down slowly'],
          ],
        },
        {
          type: 'h3',
          text: 'Building the Perfect Hot Compost Pile',
        },
        {
          type: 'p',
          text: 'Follow this sequence for a pile that heats reliably and produces finished compost in 4–8 weeks:',
        },
        {
          type: 'list',
          items: [
            'Choose your location: Partial shade is ideal — full sun dries the pile too fast; full shade slows it. Ensure good drainage underneath.',
            'Size it right: Minimum pile size for hot composting is 3×3×3 feet. Smaller piles lose heat too fast. Maximum useful size is about 5×5×5 feet — larger piles are hard to turn.',
            'Layer browns and greens: Start with a 4–6 inch layer of coarse browns for aeration at the base. Then alternate 2–4 inch layers of greens with 4–6 inch layers of browns. Target a roughly 3:1 brown-to-green ratio by volume.',
            'Moisture is critical: Each layer should feel like a wrung-out sponge — moist but not dripping. Too dry and decomposition stalls; too wet and the pile goes anaerobic (slimy, smelly).',
            'Turn for oxygen: A hot pile needs oxygen. Turn every 3–7 days by moving the outside material to the inside of a new pile. Each turning reintroduces oxygen and restarts heating.',
            'Watch the temperature: Use a compost thermometer. The pile should reach 130–160°F within 48–72 hours. Below 130°F, add more nitrogen (greens) or moisture. If it exceeds 165°F, turn immediately — above this temperature, beneficial organisms die off.',
            'Know when it\'s done: Finished compost is dark, crumbly, and smells like rich earth — not like any of its original ingredients. No recognizable original materials should remain.',
          ],
        },
        {
          type: 'tip',
          emoji: '🪱',
          text: 'Cold Composting: The Low-Effort Alternative: If turning a hot pile every few days sounds like too much work, cold composting produces excellent compost with almost no effort. Simply pile up organic material, keep it moist, and let it decompose on its own timeline. The result in 6–18 months is finished compost just as valuable as hot-composted material. The trade-off: weed seeds and pathogens may survive, and the process is slower. For most home gardeners, cold composting is the practical choice.',
        },
        {
          type: 'h3',
          text: 'Vermicomposting: Worm Castings at Home',
        },
        {
          type: 'p',
          text: 'Vermicomposting — composting with worms, specifically red wigglers (Eisenia fetida) — produces worm castings, which are widely considered the most biologically active and nutrient-dense organic fertilizer available. Worm castings are rich in plant-available nutrients, beneficial microbes, and plant growth hormones, and they can be produced year-round in a bin indoors or in a garage.',
        },
        {
          type: 'table',
          headers: ['Aspect', 'Details'],
          rows: [
            ['Worm species', 'Red wigglers (Eisenia fetida) — NOT earthworms, which don\'t thrive in bins. Red wigglers are surface-dwelling composters that process material rapidly.'],
            ['Bin requirements', 'Opaque bin with drainage and ventilation; 8–12 inches deep; 1 sq ft per pound of weekly food scraps; can be purchased or DIY (wooden or plastic)'],
            ['Bedding materials', 'Shredded newspaper, cardboard, coconut coir, or leaf litter at 70–80% moisture; creates the worms\' living environment'],
            ['What to feed', 'Fruit and vegetable scraps, coffee grounds and filters, tea bags, crushed eggshells, bread in small amounts; bury food in bedding to avoid fruit flies'],
            ['What to avoid', 'Meat, fish, dairy, oily foods, citrus (in large quantities), onions and garlic (in large quantities), pet waste'],
            ['Harvesting castings', 'Every 3–4 months; separate worms by moving finished castings to one side and adding fresh bedding; worms migrate toward new food; harvest finished material'],
            ['How to use', 'Mix into potting mix (up to 25%); side-dress around plants (1–2 inches); brew into worm casting tea; use as a seed-starting amendment'],
            ['Worm casting tea', 'Steep 1–2 cups castings in 1 gallon non-chlorinated water for 24 hours (with air bubbler if possible); apply to soil or as foliar spray; use immediately'],
          ],
        },
        {
          type: 'h3',
          text: 'How to Apply Compost: Rates and Methods',
        },
        {
          type: 'table',
          headers: ['Application', 'Rate / Method', 'Timing', 'Best For'],
          rows: [
            ['Bed preparation', '2–4 inches incorporated 6–8 inches deep', 'Before planting; fall for spring beds', 'New beds; exhausted soil; heavy clay or sandy soil'],
            ['Annual top-dress', '1–2 inches spread on surface', 'Early spring; after harvest', 'Established beds; vegetable gardens; perennial borders'],
            ['Transplant amendment', 'Mix 25–30% compost into backfill', 'At planting time', 'Individual trees, shrubs, perennials at transplant'],
            ['Seed starting mix', 'Up to 30% by volume in mix', 'When preparing mix', 'Starting seeds; must be well-finished compost only'],
            ['Lawn topdress', '1/4–1/2 inch raked into lawn', 'Fall or early spring', 'Improving lawn soil; overseeding; thin turf areas'],
            ['Mulch layer', '2–3 inches around plants', 'Spring; after planting', 'Moisture retention; weed suppression; slow soil amendment'],
            ['Compost tea', '1–2 cups per gallon water, steeped 24 hr', 'Every 2–4 weeks growing season', 'Foliar feeding; soil drench; disease suppression'],
          ],
        },
      ],
    },
    /* ── Section 4: Organic Fertilizer Types ── */
    {
      id: 'fertilizer-types',
      title: 'Section 3: Organic Fertilizer Types',
      blocks: [
        {
          type: 'p',
          text: 'Compost is the foundation — but organic gardening has a rich toolkit of specialized fertilizers, each with distinct nutrient profiles, release rates, and best uses. Understanding what each product delivers helps you choose the right tool for each situation, whether you\'re pushing nitrogen for leafy growth, boosting phosphorus for root development, or correcting a specific deficiency.',
        },
        {
          type: 'h3',
          text: 'Fish-Based Fertilizers: Fast Nitrogen with Benefits',
        },
        {
          type: 'p',
          text: 'Fish-based fertilizers have been used as soil amendments for thousands of years — Native Americans buried fish in planting hills long before European contact. Today\'s fish fertilizers are manufactured products derived from the fish processing industry, but the core benefit is the same: a nitrogen-rich, biologically active amendment that releases nutrients relatively quickly while also supplying micronutrients.',
        },
        {
          type: 'table',
          headers: ['Product', 'Typical N-P-K', 'Release Speed', 'Best Uses', 'Notes'],
          rows: [
            [
              'Fish emulsion',
              '4-1-1 to 5-2-2',
              'Fast-moderate (days to weeks)',
              'Heavy feeders (corn, tomatoes, brassicas); leafy vegetables; lawns; new transplants; nitrogen boost during season',
              'Odor can be significant; dilute 2–4 tbsp per gallon; apply every 2–3 weeks; drench soil or apply as foliar feed',
            ],
            [
              'Fish meal',
              '10-6-2',
              'Slow (weeks to months)',
              'Season-long soil amendment; worked into beds before planting',
              'Highest-nitrogen fish product; excellent all-season feeding when incorporated pre-planting',
            ],
            [
              'Fish bone meal',
              '3-18-0',
              'Moderate (weeks)',
              'Root development at transplanting; supporting flowering and fruiting; phosphorus-deficient soils',
              'Primarily a phosphorus fertilizer; use at planting time when phosphorus demand is highest',
            ],
          ],
        },
        {
          type: 'h3',
          text: 'Manure-Based Amendments: Time-Honored Soil Building',
        },
        {
          type: 'p',
          text: 'Animal manures have been the backbone of soil fertility management for all of human agricultural history. Used correctly — ideally composted — they are among the most complete and affordable organic soil amendments available. The key word is correctly: raw manure applied improperly can burn plants, contaminate edible crops with pathogens, and create nutrient imbalances.',
        },
        {
          type: 'table',
          headers: ['Manure Type', 'N-P-K (approx)', 'Relative Strength', 'Best Uses', 'Key Considerations'],
          rows: [
            ['Chicken (composted)', '3-2-2', 'Hot — high in nitrogen', 'Vegetable gardens; heavy feeders; soil building', 'Must be fully composted; raw is "hot" and will burn plants and may contain Salmonella; composted bagged versions are reliable and widely available'],
            ['Cow (composted)', '1-1-1', 'Mild — excellent soil conditioner', 'General soil amendment; all garden types; lawns', 'Most benign and widely available; good weed seed elimination if properly hot-composted; excellent structure improver'],
            ['Horse (composted)', '1.5-1-1.5', 'Moderate', 'Bulk soil building; mulching; compost pile activator', 'Frequently contains weed seeds if not hot-composted; availability varies — often free from local stables'],
            ['Sheep/Goat (composted)', '2-1-2', 'Moderate', 'Vegetables; flower gardens', 'Pelletized sheep manure widely available; excellent nutrient balance; lower odor than chicken'],
            ['Rabbit', '2-1-1', 'Mild — cold manure', 'Can be applied directly without composting', 'One of the few manures safe to use without composting first; excellent all-purpose amendment; low odor'],
            ['Worm castings', '1-0-0 (but much more)', 'Mild but biologically extraordinary', 'Transplanting; seed starting; foliar teas; high-value plants', 'Nutrient numbers are misleading — the real value is the biological activity and plant growth hormones; best amendment for delicate plants'],
            ['Bat guano', '10-3-1 (high N type)', 'Very concentrated', 'Container plants; fruiting plants; targeted nitrogen boost', 'Two types: high-N (seabird/bat from coastal/cave) and high-P (aged deposits); buy from reputable sources; expensive but powerful'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Raw Manure Safety Rules: The FDA Food Safety Modernization Act (FSMA) and USDA National Organic Program guidelines both address raw manure use near food crops. For organic certification, raw manure must be applied at least 120 days before harvest for crops with edible portions that contact soil, or 90 days for crops whose edible portions do not contact soil. Even if you\'re not certified organic, these are sensible food safety guidelines to follow. The safest approach: always compost manure before using it on food crops.',
        },
        {
          type: 'h3',
          text: 'Plant-Based Organic Fertilizers',
        },
        {
          type: 'p',
          text: 'Plant-derived fertilizers are some of the most versatile in the organic toolkit — many are byproducts of food and fiber processing that would otherwise be waste. They tend to have moderate release rates, are safe to handle, and integrate well into vegetable gardens and ornamental beds alike.',
        },
        {
          type: 'table',
          headers: ['Fertilizer', 'N-P-K', 'Release', 'Best Use', 'Notes'],
          rows: [
            ['Alfalfa meal/pellets', '3-1-2', 'Moderate (weeks)', 'Roses; perennials; compost activator; general soil builder', 'Contains triacontanol, a natural plant growth stimulant; great all-purpose amendment; widely available at feed stores'],
            ['Soybean meal', '7-2-1', 'Moderate', 'High-nitrogen applications; corn; leafy vegetables; lawns', 'Inexpensive when bought in bulk at feed stores; excellent nitrogen content; breaks down in soil quickly'],
            ['Cottonseed meal', '6-1-2', 'Moderate-slow', 'Acid-loving plants (blueberries, azaleas, rhododendrons); lawns', 'Slightly acidifying; excellent for plants preferring pH 4.5–6.0; may contain pesticide residues unless labeled organic'],
            ['Kelp meal', '1-0-2 + micronutrients', 'Slow', 'Micronutrient correction; plant growth promotion; soil biology boost', 'Primary value is 70+ trace minerals and natural plant hormones (cytokinins); use as a supplement, not primary fertilizer'],
            ['Corn gluten meal', '9-0-0', 'Moderate', 'Lawn fertilizing; pre-emergent weed suppression', 'Doubles as a pre-emergent herbicide — suppresses seed germination; do NOT use where you\'re planting from seed'],
            ['Blood meal', '12-0-0', 'Fast', 'Quick nitrogen boost; nitrogen-deficient soils; brassicas; corn', 'Fastest-releasing organic nitrogen source; use cautiously — can burn if over-applied; will repel some animals'],
            ['Feather meal', '12-0-0', 'Slow', 'Season-long nitrogen supply; soil building', 'High nitrogen but very slow release — takes months to fully break down; best worked into soil before planting'],
            ['Canola/Neem cake', '5-1-2', 'Moderate', 'Pest-suppressing soil amendment; general feeding', 'Neem cake has additional pest and disease suppression properties; excellent all-purpose amendment'],
          ],
        },
        {
          type: 'h3',
          text: 'Mineral-Based Organic Amendments',
        },
        {
          type: 'p',
          text: 'Natural rock minerals and mined deposits are an essential category of organic fertilizing, particularly for correcting specific mineral deficiencies and adjusting pH. These products release nutrients very slowly — often over years — making them excellent long-term soil investments.',
        },
        {
          type: 'table',
          headers: ['Amendment', 'Primary Nutrients', 'pH Effect', 'Best Use', 'Application Rate'],
          rows: [
            ['Agricultural lime (calcium carbonate)', 'Calcium; raises pH', 'Raises pH', 'Correcting acid soils; adding calcium; improving clay soil structure', '50–150 lbs per 1,000 sq ft depending on soil type and current pH; apply fall for spring benefit'],
            ['Dolomitic lime', 'Calcium + Magnesium; raises pH', 'Raises pH', 'Correcting acid soils that are also magnesium-deficient; common in Southeast', 'Same as ag lime; use when soil test shows low Mg; do not use if magnesium is already adequate'],
            ['Elemental sulfur', 'Sulfur', 'Lowers pH', 'Acidifying alkaline soils; pH correction in Western U.S.; acid-loving plants', '1–2 lbs per 100 sq ft to drop pH by 1 unit (varies by soil type); very slow — test 3–6 months later'],
            ['Greensand', 'Potassium + 30+ trace minerals', 'Neutral', 'Long-term potassium and mineral supply; improving soil texture', '5–10 lbs per 100 sq ft; very slow release — a multi-year investment in soil fertility'],
            ['Rock phosphate', 'Phosphorus (slow)', 'Slightly lowering', 'Long-term phosphorus building in deficient soils; most effective in acidic soils', '5–10 lbs per 100 sq ft; most effective in soils below pH 6.5; slow-release over 3–5 years'],
            ['Granite dust/meal', 'Potassium + trace minerals', 'Neutral', 'Very long-term potassium supply; improving soil mineral content', '10–20 lbs per 100 sq ft; extremely slow release; a generational soil investment'],
            ['Azomite (volcanic ash)', '70+ trace minerals', 'Neutral', 'Trace mineral correction; remineralization of depleted soils; all garden types', '1–2 lbs per 100 sq ft; annual or biannual application; excellent supplemental mineral source'],
            ['Oyster shell flour', 'Calcium; some pH raising', 'Slightly raises', 'Calcium supplementation; blossom end rot prevention; slight pH adjustment', '5–10 lbs per 100 sq ft; slower than lime but more sustained calcium release'],
            ['Gypsum (calcium sulfate)', 'Calcium + Sulfur', 'Neutral', 'Breaking up heavy clay; adding calcium without pH change; blossom end rot', '20–40 lbs per 1,000 sq ft; one of the few amendments that improves clay without affecting pH'],
          ],
        },
        {
          type: 'h3',
          text: 'Liquid Organic Fertilizers: Fast Action, Foliar Feeding',
        },
        {
          type: 'p',
          text: 'Liquid organic fertilizers are the "fast food" of the organic world — they provide nutrients in plant-available forms that can be taken up quickly through roots or directly through leaf surfaces (foliar feeding). While they don\'t build soil organic matter the way solid amendments do, they are invaluable for addressing acute deficiencies, giving transplants a boost, or feeding container plants.',
        },
        {
          type: 'table',
          headers: ['Liquid Fertilizer', 'N-P-K', 'Speed', 'Best Application', 'Notes'],
          rows: [
            ['Fish emulsion', '4-1-1 to 5-2-2', 'Fast (days)', 'Soil drench or foliar; heavy feeders; transplant booster; nitrogen boost during season', 'Odor is significant; extremely effective; dilute 2–4 tbsp per gallon before use'],
            ['Liquid kelp/seaweed', '1-0-2 + hormones', 'Fast', 'Foliar spray; stress recovery; micronutrient delivery; root stimulation', 'Primary value is plant hormones (cytokinins, auxins) and 70+ trace elements, not macronutrients; excellent stress reducer after transplanting'],
            ['Compost tea (actively aerated)', 'Variable (low)', 'Moderate', 'Soil drench; foliar spray to suppress disease; biological inoculant', 'Brew with an aquarium pump for 24 hours; use immediately; inoculates soil with beneficial microbes'],
            ['Worm casting tea', 'Variable (low)', 'Moderate', 'Transplants; seedlings; container plants; foliar feeding on any plant', 'Same method as compost tea; particularly rich in beneficial microbes and plant growth hormones'],
            ['Liquid fish/kelp blend', '3-2-2 typical', 'Fast', 'General purpose liquid feeding; vegetables; ornamentals; lawns', 'Best of both worlds — nitrogen from fish, trace minerals and hormones from kelp; most versatile liquid organic fertilizer'],
            ['Nettle tea (homemade)', 'High N + iron', 'Moderate', 'Nitrogen boost; iron correction; general tonic for all plants', 'Steep fresh stinging nettles in water for 2–4 weeks; dilute 10:1 before use; powerful and free if you have nettles growing nearby'],
            ['Comfrey tea (homemade)', 'High K + N + P', 'Moderate', 'Fruiting plants; tomatoes, peppers; root vegetables', 'Steep comfrey leaves for 3–6 weeks; dilute 15:1; very high in potassium — excellent for fruiting/flowering stage'],
            ['Molasses (blackstrap)', 'Negligible N-P-K but rich in sugars', 'Fast', 'Soil biology activator; mixed into compost tea', '1–2 tbsp per gallon water; the sugars feed soil microbes, amplifying biological activity; use with compost tea, not alone'],
          ],
        },
      ],
    },
    {
      id: 'diy-fertilizers',
      title: 'Section 5: DIY Organic Fertilizers',
      blocks: [
        {
          type: 'p',
          text: 'Some of the most effective organic fertilizers cost nothing — or nearly nothing. They can be made from kitchen scraps, garden weeds, and plants grown specifically for the purpose. DIY fertilizers are particularly valuable because they put nutrients back into the garden from materials that would otherwise go to waste, closing the loop in a home-scale nutrient cycle.',
        },
        {
          type: 'h3',
          text: 'Comfrey: The Permaculture Powerhouse',
        },
        {
          type: 'p',
          text: 'Comfrey (Symphytum officinale and especially the sterile hybrid Bocking 14) is arguably the single most useful plant for an organic gardener. Its deep taproot — sometimes reaching 6 feet — mines subsoil minerals that most plants cannot access. The leaves break down rapidly and are extraordinarily rich in potassium, nitrogen, phosphorus, and a suite of trace minerals. Plant comfrey in an out-of-the-way corner; it returns year after year and you can harvest the leaves three to five times per season.',
        },
        {
          type: 'list',
          items: [
            'Comfrey mulch: Lay fresh or wilted leaves directly around fruiting plants (tomatoes, peppers, squash, strawberries) as a thick mulch. As they decompose, they release a slow but potent dose of potassium and other minerals directly into the root zone.',
            'Comfrey tea: Pack a bucket with comfrey leaves, weigh them down with a brick, fill with water, and cover loosely. Steep 3–6 weeks until the liquid is dark and pungent. Dilute 15:1 (15 parts water to 1 part tea) before applying as a soil drench. This is one of the highest-potassium liquid feeds you can make, ideal for the fruiting and flowering stage.',
            'Comfrey activator: Chop and drop comfrey leaves into compost or directly into planting holes when transplanting. The rapid breakdown accelerates compost decomposition and enriches the planting zone.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌿',
          text: 'Use Bocking 14 comfrey — it is a sterile hybrid that does not set viable seed, so it will not spread aggressively through your garden the way common comfrey can.',
        },
        {
          type: 'h3',
          text: 'Nettle Tea: A Free Nitrogen and Iron Tonic',
        },
        {
          type: 'p',
          text: 'Stinging nettles (Urtica dioica) are one of the most nutrient-dense wild plants in North America. Where they grow — typically in moist, disturbed, nitrogen-rich ground — they are essentially free fertilizer waiting to be harvested. Nettle tea is high in nitrogen, iron, calcium, magnesium, and a range of micronutrients. It acts as a general tonic for all plants and is particularly useful for correcting iron deficiency in acid-loving plants like blueberries, rhododendrons, and strawberries.',
        },
        {
          type: 'list',
          items: [
            'Wear gloves when harvesting — the sting comes from formic acid in the leaf hairs and disappears completely once leaves are wilted or submerged.',
            'Pack fresh nettles into a bucket (do not use metal, as the acids will react), weigh down, fill with water, and cover. Steep 2–4 weeks. The smell is strong — keep it away from doorways.',
            'Dilute 10:1 before use. Apply as a soil drench every 2–3 weeks during the growing season, or use as a foliar spray for a quick micronutrient hit.',
            'Nettle tea can also be made quickly by simmering fresh leaves for 20 minutes, cooling, and diluting — but the longer cold-steep version extracts more minerals.',
          ],
        },
        {
          type: 'h3',
          text: 'Banana Peel Fertilizer: Potassium for Fruiting Plants',
        },
        {
          type: 'p',
          text: 'Banana peels are high in potassium (around 42% of dry weight) with moderate amounts of phosphorus and calcium. They are particularly useful during the flowering and fruiting stage, when potassium demand increases and nitrogen demand decreases. They will not substitute for a complete fertilizer program, but they are a useful supplement — especially for container plants and fruiting crops like tomatoes and peppers.',
        },
        {
          type: 'list',
          items: [
            'Buried: Chop or tear peels into small pieces and bury 4–6 inches deep in the soil near the root zone. They break down in 2–4 weeks, releasing potassium gradually.',
            'Tea: Soak two to three banana peels in a quart of water for 24–48 hours. Use the water directly on plants — no dilution needed. Quick, convenient, and nearly odor-free.',
            'Dried and powdered: Dry peels in a low oven (200°F / 95°C) or a food dehydrator until brittle, then grind to a powder. Sprinkle around plants and work in lightly. The dried powder is shelf-stable and makes a convenient potassium amendment year-round.',
          ],
        },
        {
          type: 'h3',
          text: 'Eggshell Amendment: Slow-Release Calcium',
        },
        {
          type: 'p',
          text: 'Eggshells are approximately 95% calcium carbonate — the same compound as agricultural lime. They break down slowly in the soil, making them a gentle, long-term calcium amendment rather than a quick fix. Calcium is critical for cell wall integrity in plants. Calcium deficiency manifests as blossom end rot in tomatoes and peppers, tip burn in lettuce and cabbage, and poor fruit set and keeping quality across many crops.',
        },
        {
          type: 'list',
          items: [
            'Dry eggshells thoroughly (a few hours in a low oven prevents odor), then crush in a food processor, blender, or mortar and pestle. Finer particle size = faster breakdown.',
            'Work crushed shells into the top 2–3 inches of soil in spring, or add to planting holes at transplanting time.',
            'Add liberally to compost — they provide calcium to the finished compost and help maintain a slightly alkaline pH that benefits decomposer organisms.',
            'For a faster calcium hit in cases of confirmed deficiency, use agricultural gypsum or foliar calcium rather than eggshells, which are too slow-acting to correct acute deficiency mid-season.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Eggshells are a slow calcium supplement, not a fast fix. If your tomatoes already have blossom end rot mid-season, use a foliar calcium spray or calcium nitrate drench — not eggshells, which will not break down fast enough to help this season.',
        },
        {
          type: 'h3',
          text: 'Bokashi: Fermenting Kitchen Waste',
        },
        {
          type: 'p',
          text: 'Bokashi is a Japanese fermentation system that processes kitchen scraps — including meat, dairy, cooked food, and citrus, which traditional composting cannot handle — using a spray or bran inoculated with effective microorganisms (EM). Rather than decomposing waste, bokashi ferments it into a pre-compost that is then buried in soil or added to a compost pile to finish breaking down.',
        },
        {
          type: 'list',
          items: [
            'How it works: Layer kitchen scraps in an airtight bokashi bucket, sprinkling bokashi bran (available at garden centers or online) between layers. Seal tightly. The anaerobic fermentation process takes 2–4 weeks at room temperature.',
            'The result is a pickled, acidic fermented material — not compost. It must be buried 6–8 inches deep in a garden bed and left for another 2–4 weeks to finish breaking down before planting in that spot.',
            'Advantages: Processes all kitchen waste including dairy and meat; no odor when sealed; faster total cycle than traditional composting; adds beneficial microorganisms to soil.',
            'The liquid that drains into the bottom of a two-part bokashi bucket is highly concentrated and should be diluted 100:1 as a drain cleaner or 200:1 as a plant fertilizer. Do not apply undiluted — the acidity will damage roots.',
          ],
        },
        {
          type: 'h3',
          text: 'Homemade Compost Tea: The Basics',
        },
        {
          type: 'p',
          text: 'Actively aerated compost tea (AACT) amplifies the biology in finished compost by brewing it with oxygen and a food source for microbes, multiplying the microbial population several-fold in 24 hours. The result is applied as a soil drench or foliar spray to inoculate plants and soil with beneficial bacteria and fungi, suppress foliar disease, and stimulate plant immune response.',
        },
        {
          type: 'list',
          items: [
            'Equipment needed: 5-gallon bucket, aquarium air pump with air stone and tubing, mesh bag or old pillowcase (to hold the compost), unsulfured blackstrap molasses.',
            'Recipe: Fill the bucket with dechlorinated water (let tap water sit uncovered for 24 hours, or use collected rainwater). Add 1–2 cups of mature finished compost in a mesh bag. Add 1 tablespoon of blackstrap molasses to feed the microbes. Run the air pump continuously for 24 hours.',
            'Strain the liquid through cheesecloth or a fine mesh. The finished tea should have an earthy, pleasant smell — not sour or sulfuric. A bad smell indicates anaerobic conditions and the batch should be discarded.',
            'Use immediately — microbial populations decline rapidly once aeration stops. Do not store. Apply as a soil drench around the root zone or as a foliar spray in early morning so leaves dry before nightfall.',
            'Apply every 2–4 weeks during the growing season, or whenever plants are under stress.',
          ],
        },
        {
          type: 'tip',
          emoji: '🫧',
          text: 'The most important ingredient in compost tea is the quality of the compost you start with. Well-finished compost from a diverse mix of materials — kitchen scraps, leaves, grass, wood chips — will produce far more biologically diverse tea than young or poorly finished compost.',
        },
      ],
    },
    {
      id: 'feeding-by-plant-type',
      title: 'Section 6: Feeding by Plant Type',
      blocks: [
        {
          type: 'p',
          text: 'Different plants have dramatically different nutrient needs. A lawn needs high nitrogen applied differently than a blueberry bush, which needs very different treatment than a tomato plant or a daylily. This section gives you specific, practical guidance for every major garden category.',
        },
        {
          type: 'h3',
          text: 'Vegetable Gardens: High-Performance Organic Feeding',
        },
        {
          type: 'p',
          text: 'Vegetable gardens are the highest-demand systems in any home landscape — they are intensively planted, regularly harvested (removing nutrients with every harvest), and expected to produce abundantly. Organic vegetable gardening requires a proactive, layered approach to soil fertility.',
        },
        {
          type: 'table',
          headers: ['Vegetable Type', 'Nutrient Priority', 'Recommended Organic Approach', 'Timing Notes'],
          rows: [
            ['Leafy greens (lettuce, spinach, kale, chard)', 'High nitrogen; moderate everything else', 'Blood meal or fish emulsion side-dresses every 3–4 weeks; compost-enriched bed preparation; soybean meal at planting', 'Start nitrogen feeding at planting; continue through harvest; stop feeding 1 week before harvest for flavor'],
            ['Fruiting vegetables (tomatoes, peppers, squash, cucumbers)', 'Balanced N early; then high K + P for fruiting', 'Compost + fish bone meal at planting; fish emulsion biweekly until flowering; switch to comfrey tea or liquid kelp at flowering for potassium push', 'High nitrogen early for plant establishment; reduce N and increase K/P when first flowers appear — excess N at fruiting causes leaf growth at expense of fruit'],
            ['Root vegetables (carrots, beets, radishes, turnips)', 'Moderate N; high phosphorus; good potassium', 'Compost + rock phosphate at bed preparation; avoid high-nitrogen amendments after planting (causes hairy, forked roots); side-dress with kelp', 'Front-load amendments before planting; avoid nitrogen-heavy feeding once plants are established; one kelp drench mid-season'],
            ['Legumes (beans, peas)', 'Low nitrogen (they fix their own); phosphorus and trace minerals', 'Inoculate seed with rhizobium inoculant; compost at planting; rock phosphate or bone meal for phosphorus; kelp for trace minerals', 'Fertilize less than other vegetables — legumes fix atmospheric nitrogen through root nodules; excess N inhibits fixation'],
            ['Alliums (onions, garlic, leeks)', 'High nitrogen early; high potassium late', 'Heavy compost incorporation; soybean or blood meal for nitrogen early; wood ash or greensand for potassium as bulbs develop', 'Heavy feeding from planting through mid-season; reduce nitrogen in last 4–6 weeks as bulbs size up; stop all feeding 2–3 weeks before harvest'],
            ['Brassicas (cabbage, broccoli, cauliflower, Brussels sprouts)', 'Very high nitrogen; calcium; pH above 6.5', 'Compost at planting; blood meal or chicken manure for nitrogen; lime to maintain pH above 6.5 (club root prevention); weekly fish emulsion', 'Consistent feeding throughout growing season; calcium and pH management are critical for preventing tip burn and club root'],
            ['Corn', 'Very high nitrogen at multiple stages', 'Heavy compost + soybean or feather meal preplant; blood meal or fish emulsion side-dress at knee-high stage; repeat at tasseling', 'Nitrogen is the primary limiting nutrient; two side-dressings during the season are standard; also add potassium for strong stalks and good ear fill'],
          ],
        },
        {
          type: 'h3',
          text: 'Lawns: Organic Feeding for a Healthy Turf',
        },
        {
          type: 'p',
          text: 'Organic lawn care is one of the most transformative shifts a homeowner can make — not just for soil health, but for the surrounding environment. Synthetic lawn fertilizers are among the most significant sources of nutrient pollution in American waterways. Organic alternatives, applied correctly, produce lawns that are just as lush, far more resilient, and genuinely better for the watershed. The core principle of organic lawn feeding: feed the soil, and the grass feeds itself. A lawn with 3–5% organic matter, living soil biology, and good pH will outperform a synthetically fertilized lawn on depleted soil within 3–4 years of consistent organic management.',
        },
        {
          type: 'table',
          headers: ['Season', 'Organic Action', 'Products', 'Cool-Season vs. Warm-Season Notes'],
          rows: [
            ['Early Spring', 'Light nitrogen application; soil biology activation', 'Corn gluten meal (also pre-emergent); compost topdress (¼ inch); liquid fish emulsion', 'Cool-season grasses (fescue, bluegrass, ryegrass) are actively growing — apply nitrogen now. Warm-season grasses (Bermuda, zoysia, St. Augustine) are still dormant — wait.'],
            ['Late Spring', 'Core aeration + compost topdress; weed control if needed', 'Compost; corn gluten meal if weeds are a concern', 'Corn gluten meal prevents seed germination — do not apply if overseeding. Both grass types can receive compost topdress in late spring.'],
            ['Summer', 'Minimal for cool-season; main feeding for warm-season', 'Slow-release organic N (feather meal, soybean meal); liquid kelp for stress resistance', 'Cool-season grasses go semi-dormant in summer heat — do not push with nitrogen. Warm-season grasses are at peak growth — this is their main feeding season.'],
            ['Fall', 'Most important feeding for cool-season grasses; final feeding for warm-season', 'Compost topdress; slow-release organic N (feather meal, soybean meal); overseeding with compost', 'The single most important lawn feeding of the year for cool-season grasses — fall fertilizing determines winter hardiness and spring greenup. Warm-season grasses: one final light feeding in early fall.'],
            ['Anytime', 'pH correction; topdress for compaction', 'Lime if below 6.0; gypsum for clay compaction; compost', 'Soil test drives lime applications — do not lime without testing. Most lawn problems trace back to pH being off or soil compaction, not nitrogen deficiency.'],
          ],
        },
        {
          type: 'h3',
          text: 'Trees and Shrubs: Long-Term Soil Building',
        },
        {
          type: 'p',
          text: 'Established trees and shrubs are often over-fertilized by homeowners who worry about them the same way they worry about annual vegetables. In most cases, a well-sited, established tree or shrub in decent soil needs very little supplemental fertilization — the leaf litter, natural soil biology, and slow mineral weathering supply what they need. The exceptions are newly planted specimens, trees in compacted or nutrient-poor urban soils, and plants showing visible signs of deficiency.',
        },
        {
          type: 'list',
          items: [
            'New plantings: Mix compost into backfill (25–30%); water in with diluted fish emulsion; mulch with 3–4 inches of wood chips in a ring (not touching the trunk)',
            'Established trees in good soil: Let the leaf litter cycle nutrients naturally; no fertilizer needed unless a soil test shows deficiency',
            'Established trees in poor or urban soil: Compost topdress under the drip line annually; annual application of a balanced organic fertilizer (4-4-4 type); deep-root watering with liquid organic fertilizer',
            'Flowering shrubs: One application of a balanced organic fertilizer in early spring as growth begins; compost topdress after blooming',
            'Acid-loving shrubs (blueberries, azaleas, rhododendrons): Cottonseed meal or acidified fertilizer; sulfur to maintain pH 4.5–6.0; avoid lime',
          ],
        },
        {
          type: 'tip',
          emoji: '🌳',
          text: 'A 4-inch deep ring of wood chip mulch extending to the drip line of a tree (kept away from the trunk) does more for long-term tree health than almost any fertilizer. As the chips decompose, they feed soil fungi that form mycorrhizal networks with tree roots, dramatically expanding the tree\'s ability to access water and nutrients. This is not just mulch — it\'s creating the forest floor ecosystem that trees evolved to grow in.',
        },
        {
          type: 'h3',
          text: 'Roses: Heavy Feeders with Specific Needs',
        },
        {
          type: 'p',
          text: 'Roses have a reputation as fussy plants, but much of that reputation comes from growing them in poor soil with sporadic feeding. Organically grown roses in well-prepared, compost-rich soil are remarkably resilient and often less disease-prone than synthetically fed plants, which tend to produce the succulent, soft growth that diseases love.',
        },
        {
          type: 'list',
          items: [
            'Bed preparation: Incorporate 4–6 inches of compost and 1–2 cups of alfalfa meal per plant; roses need deep, rich, well-drained soil',
            'Spring startup: Apply 1–2 cups of alfalfa meal or pellets per plant as growth begins; water in; follow with liquid fish emulsion every 2 weeks',
            'Midsummer: Apply 1 cup of greensand and 1 cup of kelp meal per plant to replenish potassium and trace minerals; continue biweekly liquid feeding',
            'After each bloom flush: Cut back, apply 1 cup alfalfa meal, water in; this reliably stimulates repeat blooming in reblooming varieties',
            'Fall: Final application of compost as mulch (3–4 inches around base); no nitrogen after late summer — promotes cold-hardy hardening-off',
          ],
        },
        {
          type: 'h3',
          text: 'Container Plants: Organic Feeding in Confined Space',
        },
        {
          type: 'p',
          text: 'Container gardening presents a unique challenge for organic fertilizers — many slow-release solid amendments cannot be incorporated into existing containers, and the limited volume of potting mix gets depleted of nutrients very quickly. Liquid organic fertilizers and worm castings are the workhorses of container organic fertilizing.',
        },
        {
          type: 'table',
          headers: ['Strategy', 'Method', 'Frequency'],
          rows: [
            ['Top-dress with compost', 'Replace the top 1–2 inches of potting mix with finished compost or worm castings each spring', 'Once per season — spring'],
            ['Liquid fish emulsion', 'Dilute 2–3 tbsp per gallon; water containers thoroughly', 'Every 2–3 weeks during active growing season'],
            ['Liquid kelp', 'Add 1 tbsp per gallon to regular watering; can be combined with fish emulsion', 'Every 2–3 weeks; especially at transplanting and during stress'],
            ['Worm casting tea', 'Steep 1 cup castings in 1 gallon water for 24 hrs; apply as regular watering', 'Every 2–4 weeks; excellent for edibles and flowering containers'],
            ['Slow-release organic pellets', 'Work 1–2 tbsp of balanced organic granular fertilizer into top inch of soil', 'Once every 4–6 weeks; choose products with 3-month release window'],
            ['Repotting', 'Replace potting mix entirely or add 25–30% fresh compost when repotting', 'Every 1–3 years depending on plant size and growth rate'],
          ],
        },
        {
          type: 'tip',
          emoji: '🪴',
          text: 'Container plants flush nutrients through with every watering — there is no soil reserve to draw on. Even well-made potting mixes are largely depleted of nutrients within 4–6 weeks of planting. Consistent liquid feeding through the season is not optional for containers; it is the entire fertility program.',
        },
      ],
    },
    {
      id: 'regional-guide',
      title: 'Section 7: Regional Organic Fertilizing Guide & Fertilizer Selector',
      blocks: [
        {
          type: 'p',
          text: 'Soil chemistry, climate, native mineral content, and rainfall patterns create dramatically different baseline conditions across the United States. A fertilizing approach that works perfectly in the Ohio River valley may fail completely in the Sonoran Desert or the Florida panhandle. This section addresses the primary organic fertility challenges and solutions for each major American growing region.',
        },
        {
          type: 'table',
          headers: ['Region', 'Common Soil Challenges', 'Priority Amendments', 'Key Notes'],
          rows: [
            ['Northeast (ME, NH, VT, MA, RI, CT, NY, PA, NJ)', 'Naturally acidic; thin topsoil in rocky areas; clay subsoils in river valleys; heavy rainfall leaches nutrients rapidly', 'Lime (often needed annually); compost; wood ash for potassium; balanced organic fertilizers; rock phosphate', 'Test pH every 2–3 years — acid rain and heavy rainfall acidify soils continuously. Excellent compost materials from abundant deciduous leaves. Short growing season rewards fast-releasing organic N (fish emulsion, blood meal).'],
            ['Mid-Atlantic & Southeast Coast (MD, DE, VA, NC, SC, coastal GA, FL coast)', 'Sandy, low-organic-matter soils that drain (and lose nutrients) rapidly; humid summers promote disease; pH often acidic but variable', 'Heavy compost incorporation; mulching (critical for moisture and organic matter); fish emulsion for frequent feeding; kelp for trace minerals; lime as needed by test', 'Sandy coastal soils need compost applied generously and often — it breaks down fast in heat and humidity. Mulch is essential: 3–4 inches prevents moisture loss and adds organic matter. Frequent liquid organic feeding (every 2 weeks) compensates for rapid leaching.'],
            ['Inland Southeast & Deep South (inland GA, AL, MS, TN, AR, LA)', 'Heavy red clay soils; often acidic; heat and humidity cause rapid organic matter decomposition; long growing seasons', 'Gypsum for clay; compost heavily; lime; cover crops year-round; fish emulsion; soybean or cottonseed meal', 'Organic matter burns off rapidly in Southern heat — adding compost once or twice a year is not enough. Use cover crops year-round to keep organic matter building. Long seasons mean you can feed plants all year, but also that soils deplete all year.'],
            ['Florida (subtropical/tropical)', 'Sand-dominant soils with almost no native organic matter; alkaline in south Florida (limestone bedrock); acidic in north Florida; year-round growing but leaching constant', 'Continuous compost additions; heavy mulching; liquid feeding every 2 weeks; vermicompost; rock phosphate; sulfur in south FL to lower pH', 'Florida soils are some of the most challenging in the country for organic gardening. Build raised beds with imported soil if gardening in south FL. In central and north FL, focus on constant organic matter addition — it breaks down in 4–8 weeks in subtropical conditions.'],
            ['Midwest & Great Plains (OH, IN, IL, IA, MO, MN, WI, MI, KS, NE, ND, SD)', 'Naturally fertile prairie soils with high organic matter; some areas have heavy clay; alkaline in parts of western Great Plains; excellent growing conditions broadly', 'Compost for structure; balanced organic fertilizers; potassium from greensand or wood ash; minimal pH correction needed in most areas', 'The heartland has some of America\'s best native soil — protect and build it with compost. Western Great Plains (KS, NE, parts of SD) become alkaline — sulfur and acidifying amendments may be needed.'],
            ['Texas', 'Highly variable — acidic sandy soils in East Texas; heavy black clay (Houston area); alkaline caliche soils in Central and West Texas; extreme heat', 'East TX: lime, compost, organic N; Central TX (clay): gypsum, compost, mulch heavily; West TX: sulfur, raised beds, chelated micronutrients, drip irrigation with organic liquid feeding', 'Texas is three states in one. East Texas gardeners follow Southeast protocols. Houston-area gardeners deal with heavy black clay — gypsum and heavy compost are the solution. West Texas alkaline soils may require raised beds with imported soil mix.'],
            ['Mountain West (CO, UT, WY, ID, MT, NV inland)', 'Alkaline soils from limestone parent material; dry climate; cold winters; short growing seasons at elevation; low organic matter in most native soils', 'Sulfur for pH; heavy compost; raised beds; chelated micronutrients; drip irrigation; slow-release organic fertilizers for efficiency', 'Alkaline pH is the central challenge — iron, zinc, and manganese deficiencies are extremely common even in fertile soil. Test pH first. Raised beds with acidified soil mix are the most reliable solution. Short growing seasons benefit from fast-releasing nitrogen (blood meal, fish emulsion) over slow minerals.'],
            ['Pacific Northwest (western WA, western OR, northern CA coast)', 'Naturally acidic; excellent rainfall but nutrient leaching; volcanic soils with good mineral content; mild temperatures allow year-round growing in mild areas', 'Compost; lime as needed; balanced organic fertilizers; kelp (local availability); minimal micronutrient correction needed', 'Outstanding conditions for organic gardening — climate and soil are generally favorable. Lime is often needed for brassicas and legumes. The abundance of wood chips, compost materials, and local fish-based fertilizers makes the PNW ideal for organic approaches.'],
            ['California (inland and southern)', 'Alkaline soils common in valleys and south; Mediterranean climate (dry summer, wet winter) creates unique challenges; excellent growing climate overall', 'Sulfur for pH; compost; mulch heavily (water conservation); drip irrigation with liquid organic feeding; kelp and fish emulsion for micronutrients', 'California\'s water constraints make organic matter and mulch critical — every amendment that improves water retention reduces irrigation needs. Southern CA alkaline soils need acidifying attention. Central Valley soils are excellent but depleted — compost restoration is the priority.'],
            ['Desert Southwest (AZ, NM, southern NV, southern UT)', 'Highly alkaline; low organic matter; caliche hardpan; intense heat; extremely low humidity; irrigation required', 'Raised beds with imported soil mix often essential; sulfur; compost; heavy mulching; drip irrigation; liquid organic feeding every 1–2 weeks', 'The greatest organic gardening challenge in America. Native soils may be genuinely impossible to garden in without major amendment. Raised beds with quality imported growing mix are not a luxury in the desert — they\'re often the only practical approach. Focus on native and desert-adapted plants in the ground; import your growing conditions for vegetables.'],
          ],
        },
        {
          type: 'h3',
          text: 'Quick Reference: The Organic Fertilizer Selector',
        },
        {
          type: 'p',
          text: 'Use this table to quickly identify the best organic fertilizer for any specific gardening need or problem. For best results, always start with a soil test to confirm deficiencies before adding amendments.',
        },
        {
          type: 'table',
          headers: ['Situation / Goal', 'Best Organic Choices', 'Application Method', 'Speed of Action'],
          rows: [
            ['Quick nitrogen boost for yellowing plants', 'Blood meal (12-0-0); fish emulsion (5-1-1); soybean meal (7-2-1)', 'Blood meal: scratch into soil; fish emulsion: soil drench or foliar', 'Blood meal: days; fish emulsion: days–weeks; soybean meal: weeks'],
            ['Season-long nitrogen for heavy feeders', 'Feather meal; composted chicken manure; soybean meal worked into soil', 'Incorporate into top 3–4 inches of soil before planting', 'Slow (months) — the goal is sustained season-long supply'],
            ['Improve root development at transplanting', 'Fish bone meal (3-18-0); rock phosphate; mycorrhizal inoculant', 'Mix into planting hole; apply mycorrhizae directly to roots', 'Fish bone meal: weeks; rock phosphate: months'],
            ['Boost flowering and fruiting', 'Comfrey tea; liquid kelp; wood ash; greensand; potassium sulfate', 'Comfrey tea drench; wood ash broadcast; greensand worked into soil', 'Comfrey tea: days–weeks; wood ash: weeks; greensand: months–years'],
            ['Add calcium (blossom end rot prevention)', 'Gypsum; lime; oyster shell flour; eggshells', 'Gypsum: broadcast and water in; lime: soil incorporation; eggshells: bury near plants', 'Gypsum: weeks; lime: months; oyster shell: months–years'],
            ['Improve heavy clay soil', 'Gypsum; compost; composted manure; cover crops', 'Gypsum: broadcast 20–40 lbs per 1,000 sq ft; compost: 3–4 inch incorporation', 'Gypsum: rapid structural change; compost: 1–2 seasons'],
            ['Improve sandy soil (water/nutrient retention)', 'Heavy compost (4–6 inches incorporated); worm castings; biochar (amended with compost)', 'Incorporate deeply; reapply annually; mulch to slow loss', 'Noticeable improvement after 1 season; significant change in 3+ years'],
            ['Raise soil pH (correct acidity)', 'Agricultural lime; dolomitic lime (if Mg also needed); wood ash; oyster shell', 'Broadcast and incorporate; apply fall for spring benefit; rate from soil test', 'Lime: months; full pH correction takes 1–2 years'],
            ['Lower soil pH (correct alkalinity)', 'Elemental sulfur; acidifying fertilizers (cottonseed meal); peat moss; pine needle mulch', 'Sulfur: broadcast and water in; repeat test in 3–6 months', 'Sulfur: 3–6 months for significant change; peat moss: slower'],
            ['Correct iron deficiency (yellowing between veins)', 'Chelated iron; sulfur to lower pH; compost; acidifying amendments', 'Chelated iron: foliar spray or soil drench; sulfur: soil incorporation', 'Chelated iron foliar: days; soil applications: weeks to months'],
            ['Feed a lawn organically', 'Corn gluten meal; compost topdress; soybean meal; feather meal', 'Broadcast and water in; compost: ¼–½ inch topdress', 'Corn gluten meal: weeks; compost: season-long gradual'],
            ['Feed container plants', 'Fish emulsion; worm casting tea; liquid kelp; slow-release organic granules', 'Diluted liquid every 2–3 weeks; granules once per month', 'Liquids: days–weeks; slow-release granules: 4–8 weeks'],
            ['Add broad-spectrum trace minerals', 'Kelp meal; azomite; worm castings; compost', 'Kelp meal: 1–2 lbs per 100 sq ft; azomite: 1–2 lbs per 100 sq ft', 'Kelp meal: weeks–months; azomite: slow but sustained'],
            ['Feed acid-loving plants (blueberries, azaleas)', 'Cottonseed meal; sulfur; acidified fertilizers; pine needle mulch', 'Cottonseed meal: surface apply; sulfur: work into soil; mulch: 3–4 inches', 'Cottonseed meal: weeks; sulfur: months'],
            ['General soil building before new bed', 'Compost (4–6 inches); balanced organic fertilizer; rock phosphate; greensand', 'Deep incorporation 8–12 inches; let rest 2–4 weeks if using manure', 'One season of excellent growing conditions; soil continues improving for years'],
            ['Stimulate soil biology (microbial activity)', 'Compost tea; molasses drench; worm casting tea; bokashi', 'Soil drench; foliar spray; compost tea immediately after brewing', 'Microbial stimulation within days; long-term biology improves over seasons'],
          ],
        },
      ],
    },
  ],
}
