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
  ],
}
