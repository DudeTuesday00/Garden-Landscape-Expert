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
  ],
}
