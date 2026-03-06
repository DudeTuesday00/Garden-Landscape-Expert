export const salsaGardenContent = {
  id: 'salsa-garden',
  hero: {
    emoji: '🍅',
    title: 'Salsa Garden',
    subtitle: 'Everything for Fresh Salsa — Tomatoes, Peppers, Cilantro, Onions & Garlic',
  },
  intro:
    'This guide covers every crop in the salsa garden in complete depth: variety selection for maximum flavor, growing guides for all five crops, companion planting, harvest timing, and recipes from classic pico de gallo through fire-roasted salsa roja and water bath canning. There is a profound difference between salsa made from grocery store tomatoes and salsa made from five crops you grew yourself and harvested on the same morning.',

  sections: [
    {
      id: 'at-a-glance',
      title: 'The Salsa Garden — Five Crops, One Bowl',
      blocks: [
        {
          type: 'p',
          text: 'A great salsa is an exercise in balance: the sweet-acid body of ripe tomatoes, the layered heat and complexity of fresh peppers, the bright herbal lift of cilantro, the sharpness of onion, and the savory depth of garlic. All five crops have genuinely different growing requirements, rhythms, and challenges — but they share enough overlap in soil, sun, and season to work beautifully as a dedicated garden.',
        },
        {
          type: 'table',
          headers: ['Crop', 'Role in Salsa', 'Key Growing Requirement', 'Days to Harvest', 'Difficulty'],
          rows: [
            ['Tomatoes', 'The body: juice, sweetness, acidity, and texture form the base of every salsa', 'Full sun, consistent water, 60-90 warm days after transplant', '60-85 days from transplant', 'Moderate — needs support, consistent care'],
            ['Peppers (hot & mild)', 'The heat and complexity: from mild sweetness to scorching fire, plus fruity depth', 'Full sun, warm soil, slightly drier than tomatoes at maturity', '60-80 days from transplant', 'Moderate — slower than tomatoes, heat-sensitive'],
            ['Cilantro', 'The brightness: herbal, citrusy lift that ties tomato and pepper together', 'Cool season preferred; bolt-resistant varieties for summer use', '30-45 days from seed to harvest', 'Easy — but requires succession planting'],
            ['Onions', 'The sharpness: pungent allium bite and structural body in the salsa', 'Long-season crop; day-length sensitive; needs early planting', '90-120 days from sets/transplants', 'Moderate — timing and variety selection critical'],
            ['Garlic', 'The depth: savory, pungent base note that amplifies all other flavors', 'Fall-planted for summer harvest; needs cold period for bulb development', '240-270 days (fall plant, summer harvest)', 'Easy once planted — almost no maintenance'],
          ],
        },
        {
          type: 'tip',
          emoji: '📅',
          text: 'Oklahoma Salsa Garden Timing at a Glance (Zone 7a): Last frost mid-April. First fall frost mid-October. Tomatoes and peppers transplanted mid-April. Onion sets planted early March. Garlic planted October-November for the following July harvest. Cilantro succession-sown from March through October. Peak salsa season: mid-July through mid-August.',
        },
      ],
    },

    {
      id: 'tomatoes',
      title: 'Section 1: 🍅 Tomatoes — The Foundation',
      blocks: [
        {
          type: 'p',
          text: 'The tomato is the heart of every salsa — the ingredient that provides the body, juice, sweetness, and acidity that everything else builds upon. For salsa production, variety selection matters enormously. High-water beefsteak types make watery, bland salsa; the right paste and plum types make intensely flavored, thick, concentrated salsa.',
        },
        { type: 'h3', text: 'What Makes a Great Salsa Tomato?' },
        {
          type: 'list',
          items: [
            'Low water content: A high water content tomato produces a thin, watery salsa. Paste tomatoes (Roma, San Marzano, Amish Paste) have dense, meaty flesh and thick walls with small seed cavities.',
            'Rich, complex flavor: Salsa concentrates tomato flavor, so varieties with higher sugar-acid balance produce the best results. Bland tomatoes make bland salsa.',
            'Productive through midsummer: To make batches of preserved salsa, you need volume — many pounds of tomatoes at once. Choose productive varieties.',
            'Crack resistance: Irregular rain and heat cause cracking in susceptible varieties. Look for crack-resistant selections.',
            'Disease resistance codes: Look for V (Verticillium wilt), F (Fusarium wilt), N (nematodes), and T (tobacco mosaic virus) resistance codes on variety tags.',
          ],
        },
        { type: 'h3', text: 'Tomato Variety Guide for the Salsa Garden' },
        {
          type: 'table',
          headers: ['Variety', 'Type', 'Days', 'Flavor Profile', 'Salsa Quality', 'Notes'],
          rows: [
            ['Roma VF', 'Paste / plum', '75 days', 'Classic paste tomato — meaty, mild-sweet, low acid', 'Excellent — thick, low-water flesh makes ideal salsa body', 'The workhorse salsa tomato. Disease-resistant, productive in heat. The standard for canned salsa.'],
            ['San Marzano (true)', 'Paste / plum', '80 days', 'Richer than Roma — sweeter, more complex, lower acid', 'Superior — the Italian canning standard; extraordinary salsa depth', 'Slower and less productive than Roma but significantly better flavor. Worth the extra effort.'],
            ['Amish Paste', 'Paste / heirloom', '80-85 days', 'Very rich, sweet-acid balance, exceptional flavor', 'Outstanding — large fruits, dense flesh, excellent fresh or cooked', 'One of the finest heirloom paste varieties. Large fruits up to 8 oz.'],
            ['Juliet', 'Grape / mini-roma', '60 days', 'Very sweet, bright, crack-resistant', 'Excellent fresh salsa — intense flavor; halve or quarter for texture', 'The most crack-resistant variety. Reliable heavy producer all summer.'],
            ['Celebrity', 'Slicing / hybrid', '70 days', 'Classic balanced tomato flavor, mild, versatile', 'Good — drain before using; slightly higher water content', 'Full VFNTASt disease resistance package. Highly reliable performer.'],
            ['Cherokee Purple', 'Heirloom beefsteak', '80-90 days', 'Deep, complex, smoky-sweet — arguably the richest flavor', 'Excellent when drained — extraordinary flavor elevates any fresh salsa', 'Higher water content than paste types; drain chopped fruit 20 min before using.'],
            ['Green Zebra', 'Heirloom slicing', '75-80 days', 'Bright, tart, citrusy — distinctly different flavor profile', 'Specialty fresh salsa or color contrast in mixed salsas', 'A novelty with genuine culinary value. Use alongside red tomatoes for visual and flavor contrast.'],
            ['Tomatillo (Physalis ixocarpa)', 'Related species', '70-80 days', 'Tart, bright, citrusy, slightly herbal — the salsa verde foundation', 'Essential for green salsa / salsa verde', 'Treat exactly like tomatoes for growing. Plant 2+ for cross-pollination.'],
          ],
        },
        { type: 'h3', text: 'Growing Tomatoes for Maximum Salsa Production' },
        { type: 'h3', text: 'Starting from Seed Indoors (Recommended)' },
        {
          type: 'list',
          items: [
            'Starting 6-8 weeks before last frost (early March in Zone 7): Use cell trays or 4-inch pots with quality seed-starting mix.',
            'Sowing depth: Plant tomato seeds 1/4 inch deep. Tamp gently to ensure good contact with the medium.',
            'Germination warmth: Tomatoes germinate best at 75-85°F soil temperature. Use a heat mat beneath trays for best results.',
            'Light after germination: As soon as the first sprout appears, move to the brightest available light. Grow lights positioned 2-3 inches above seedlings prevent leggy growth.',
            'Potting up: When seedlings have 2-3 sets of true leaves and have outgrown their initial containers, transplant to 4-inch pots, burying the stem deeper to encourage root development.',
            'Hardening off: Two weeks before outdoor transplanting, begin exposing seedlings to outdoor conditions for increasing periods each day.',
          ],
        },
        { type: 'h3', text: 'Transplanting and Support' },
        {
          type: 'list',
          items: [
            'Transplant after last frost: In Zone 7a, transplant after mid-April when soil temperature reaches at least 60°F.',
            'Planting depth: Bury tomatoes deeply — up to 2/3 of the stem underground. Roots will develop along the buried stem.',
            'Spacing: Indeterminate varieties: 24-36 inches apart. Determinate (Celebrity): 18-24 inches apart.',
            'Support systems: Install supports at planting time, before the plant needs them. Heavy-gauge tomato cages, sturdy stakes with tying, or Florida weave trellis systems all work well.',
            'Mulch immediately: Apply 3-4 inches of straw, wood chips, or shredded leaves around each plant after transplanting to conserve moisture and prevent soil splash.',
          ],
        },
        { type: 'h3', text: 'Disease Management' },
        {
          type: 'table',
          headers: ['Disease / Problem', 'Symptoms', 'Timing', 'Management'],
          rows: [
            ['Early blight (Alternaria)', "Brown spots with concentric rings on lower leaves; yellowing and defoliation progressing upward", 'Begins June-July; worsens in heat and humidity', 'Remove affected leaves immediately. Keep lower 12" of plant clear. Apply copper fungicide preventively.'],
            ['Septoria leaf spot', 'Small circular spots with white centers and dark borders; rapid defoliation', 'June-August, especially after rain', 'Same as early blight. The two often occur simultaneously.'],
            ['Blossom end rot', 'Dark, sunken, leathery patch on blossom end of developing fruit', 'Midsummer; first fruits most affected', 'Not a disease — a calcium uptake disorder caused by irregular watering. Maintain consistent soil moisture.'],
            ['Fusarium / Verticillium wilt', 'Yellowing and wilting of leaves; brown discoloration inside the stem', 'Appears after plant stress; once present, incurable', 'No cure. Pull and remove plant. Plant resistant varieties (V, F codes) in future seasons.'],
            ['Tomato hornworm', 'Massive defoliation overnight; large 3-4" green caterpillar with white stripes', 'July-August', 'Hand-pick at dusk when caterpillars are active. Apply Bacillus thuringiensis (Bt) spray.'],
            ['Spider mites', 'Stippled, pale leaves; fine webbing on leaf undersides; worst in hot dry weather', 'July-August heat waves', 'Strong water jet dislodges most mites. Apply neem oil or insecticidal soap.'],
          ],
        },
      ],
    },

    {
      id: 'peppers',
      title: 'Section 2: 🌶️ Peppers — The Heat & Complexity',
      blocks: [
        {
          type: 'p',
          text: 'Peppers are the ingredient in salsa that offers the most creative latitude — the one variable that, more than any other, determines the character of your salsa. A pepper selection from mild and sweet through incandescent habanero completely transforms the same base recipe.',
        },
        { type: 'h3', text: 'Understanding Pepper Heat: The Scoville Scale' },
        {
          type: 'table',
          headers: ['Pepper', 'Scoville Range', 'Heat Level', 'Best Salsa Use'],
          rows: [
            ['Bell Pepper', '0 SHU', 'None — purely sweet', 'Mild salsa body, roasted salsa sweetness, pico de gallo for heat-sensitive diners'],
            ['Banana Pepper', '100-900 SHU', 'Barely warm', 'Mild salsa with tangy sweetness; pickled for mild garnish'],
            ['Poblano', '1,000-2,000 SHU', 'Mild to medium-mild', 'Roasted salsa verde; adds deep, earthy, slightly smoky flavor'],
            ['Anaheim / New Mexico', '500-2,500 SHU', 'Mild', 'Roasted green salsa; large fruits easy to roast and peel'],
            ['Jalapeño (green)', '2,500-8,000 SHU', 'Medium', 'The classic salsa pepper. Grassy, bright heat with good fruitiness.'],
            ['Jalapeño (red, ripe)', '2,500-8,000 SHU', 'Medium, sweeter', 'Sweeter and more complex than green jalapeño; excellent in salsa when ripe'],
            ['Serrano', '10,000-25,000 SHU', 'Hot', 'Authentic Mexican salsa; brighter, crisper heat than jalapeño'],
            ['Chile de árbol', '15,000-30,000 SHU', 'Hot', 'Dried/toasted salsa roja; the standard dried chile for restaurant-style cooked salsa'],
            ['Cayenne', '30,000-50,000 SHU', 'Very hot', 'Heat adjustment in cooked salsas; dried and ground as supplemental heat'],
            ['Habanero', '100,000-350,000 SHU', 'Intense — proceed carefully', 'Habanero mango salsa; Caribbean-style hot sauces; fruity, floral flavor beneath the heat'],
          ],
        },
        { type: 'h3', text: 'Pepper Varieties for the Salsa Garden' },
        {
          type: 'table',
          headers: ['Variety', 'Type', 'Days', 'Heat', 'Flavor Notes', 'Best Use & Notes'],
          rows: [
            ['Early Jalapeño', 'Hot / medium', '65-70 days', '2,500-5,000 SHU', 'Classic jalapeño: grassy, bright, clean heat', 'The most reliable jalapeño. Earlier than most; sets fruit well in summer heat.'],
            ['Mucho Nacho', 'Hot / medium', '68 days', '4,000-6,000 SHU', 'Larger than standard jalapeño, thicker walls, slightly hotter', 'Excellent production plant. Large fruits make slicing and processing easier.'],
            ['Serrano', 'Hot', '75-80 days', '10,000-23,000 SHU', 'Bright, clean heat without jalapeño grassiness; thin skin', 'No peeling needed — blend skin-on. Very productive plant.'],
            ['Poblano (Ancho when dried)', 'Mild', '70-80 days', '1,000-2,000 SHU', 'Deep, earthy, slightly smoky; complex flavor with very little heat', 'Essential for roasted salsa verde. Roast and peel over open flame or broiler.'],
            ['Anaheim / NuMex', 'Mild', '75-80 days', '500-2,500 SHU', 'Bright, slightly sweet pepper flavor; easy to roast', 'Large fruits (6-8") are the easiest to roast and peel.'],
            ['Hungarian Wax (hot)', 'Hot / medium', '65-70 days', '5,000-10,000 SHU', 'Waxy, tangy, with a building heat that sneaks up', 'Extremely productive. Yellow fruits turn red at maturity.'],
            ['Habanero (Orange)', 'Very hot', '75-90 days', '100,000-300,000 SHU', 'Intensely fruity, floral, apricot-like flavor beneath extreme heat', 'Slow to establish but produces abundantly in late summer heat.'],
            ['Cayenne Long Slim', 'Hot', '70-75 days', '30,000-50,000 SHU', 'Clean, bright, intense heat; fruity at ripe red stage', 'The standard drying chile for the home garden. Prolific production.'],
          ],
        },
        {
          type: 'tip',
          emoji: '🌶️',
          text: 'Roasting Peppers — The Technique That Changes Everything: Roasting peppers transforms them: the intense dry heat caramelizes sugars, softens the flesh, loosens the skin for peeling, and adds a complex charred character that no raw preparation can replicate. Roast over an open gas flame, under a broiler, or directly on a grill until blackened on all sides. Place in a covered bowl 10 minutes to steam; then peel, seed, and use.',
        },
        { type: 'h3', text: 'Growing Peppers' },
        {
          type: 'list',
          items: [
            'Start from seed 8-10 weeks before last frost: Peppers are slower than tomatoes. They require 80-85°F soil temperature for reliable germination — use a heat mat.',
            'Soil temperature before transplanting: Peppers are more sensitive than tomatoes to cold soil. Do not transplant until soil temperature is above 65°F.',
            'Spacing: 18-24 inches between plants in rows 30-36 inches apart.',
            'Watering: Peppers prefer slightly drier conditions than tomatoes. Consistent but not excessive moisture is ideal. Overwatering in heavy soil causes root problems.',
            'Fertilizing: At transplant use balanced slow-release fertilizer. At first flower: switch to a low-nitrogen, higher phosphorus and potassium formula to encourage fruiting over foliage.',
            'Heat and flower drop: Like tomatoes, peppers drop flowers when nighttime temperatures exceed 75°F or daytime temperatures exceed 95°F. Normal summer response — plants resume fruiting when temperatures moderate.',
            'Staking: Pepper plants loaded with fruit in late summer can snap at the main stem in wind. Install simple stakes or use tomato cages.',
          ],
        },
      ],
    },

    {
      id: 'cilantro',
      title: 'Section 3: 🌿 Cilantro — The Brightness',
      blocks: [
        {
          type: 'p',
          text: 'Cilantro is the most time-sensitive ingredient in the salsa garden — the herb that requires the most management attention. The key challenge: cilantro bolts (goes to seed) rapidly in warm weather, ending leaf production. The solution is succession planting combined with bolt-resistant variety selection.',
        },
        { type: 'h3', text: 'Cilantro Variety Guide' },
        {
          type: 'table',
          headers: ['Variety', 'Days to Harvest', 'Bolt Resistance', 'Leaf Character', 'Best Use'],
          rows: [
            ['Santo', '50-55 days', 'Good', 'Classic cilantro, upright, medium leaf size', 'The most widely available bolt-resistant selection. Reliable for spring and fall.'],
            ['Slow Bolt', '50-60 days', 'Very good', 'Classic cilantro flavor, slightly larger leaves', 'Best performer for warm-weather production.'],
            ['Calypso', '55-65 days', 'Excellent', 'Classic flavor, sturdy plant, uniform', 'Top commercial bolt-resistant variety. Excellent for succession sowing.'],
            ['Leisure', '50-55 days', 'Good', 'Rich, strongly flavored leaves, compact plant', 'Excellent flavor, moderately bolt-resistant.'],
            ['Slo Bolt (Long Standing)', '60+ days', 'Very good', 'Large, flavorful leaves', 'Good summer performer when paired with afternoon shade from taller crops.'],
            ['Vietnamese / Rau Ram (Persicaria odorata)', 'Perennial — grows all season', 'N/A — does not bolt', 'Similar cilantro flavor; heat-tolerant', 'Not true cilantro but provides similar flavor through summer heat.'],
          ],
        },
        { type: 'h3', text: 'Growing Cilantro Through the Season' },
        {
          type: 'list',
          items: [
            'Direct sow only: Cilantro does not transplant well — direct sow seeds where they will grow. Sow 1/4 inch deep.',
            'Soil temperature: Minimum 50°F for germination. Optimal 55-68°F. Cilantro actually germinates better in cool soil.',
            'Seed tip: Each "cilantro seed" is actually a dried fruit containing two seeds. Lightly crush seeds between your palms before sowing to improve germination.',
            'First spring sowing: Make the first sowing as soon as soil reaches 50°F in early March.',
            'Succession sowing every 2-3 weeks: Keep sowing small patches through the season. In midsummer, sow in afternoon shade (behind tall tomato plants) for cooler microclimate.',
            'Harvest before bolting: Harvest cilantro frequently — cut entire stems from the outside of the plant, leaving the inner growing point intact.',
            'Fall is the best season: As temperatures cool in September, cilantro thrives. A fall planting often gives the most productive and longest-lived plants of the year.',
          ],
        },
        { type: 'h3', text: 'Storing and Preserving Cilantro' },
        {
          type: 'list',
          items: [
            'Fresh storage: Stand cut cilantro stems in a glass of water like a bouquet. Cover loosely with a plastic bag; refrigerate. Lasts 7-10 days.',
            'Freezing: Blend 2 cups packed fresh cilantro leaves with 1/4 cup water or olive oil. Pour into ice cube trays; freeze. Transfer to freezer bags. Each cube = approximately 2 tablespoons fresh.',
            'Do not dry: Dried cilantro loses virtually all its essential oil and flavor. Freeze instead.',
          ],
        },
      ],
    },

    {
      id: 'onions-garlic',
      title: 'Section 4: 🧅🧄 Onions & Garlic — Sharpness & Depth',
      blocks: [
        {
          type: 'p',
          text: 'Onions and garlic are the foundation aromatics of the salsa garden — the ingredients that provide structure, sharpness, and savory depth to balance the acid of tomatoes and the heat of peppers.',
        },
        { type: 'h3', text: 'Onion Variety Guide' },
        {
          type: 'tip',
          emoji: '🧅',
          text: 'Day-Length Requirements: For Zone 7 (Oklahoma), plant short-day or intermediate varieties. Long-day onions will not form proper bulbs at southern latitudes. Short-day varieties begin bulbing at 10-12 hours of daylight; intermediate (day-neutral) at 12-14 hours.',
        },
        {
          type: 'table',
          headers: ['Variety', 'Type / Day-Length', 'Flavor Profile', 'Storage', 'Best Salsa Use & Notes'],
          rows: [
            ['Texas 1015 SuperSweet', 'Short-day / Yellow', 'Very mild, sweet, low pungency', 'Short — 2-3 months', 'The quintessential mild salsa onion. Sweet enough to eat raw in large quantities.'],
            ['Candy', 'Intermediate / Yellow', 'Mild-sweet, slightly more pungent than 1015', 'Medium — 3-4 months', 'Excellent all-purpose salsa onion. More flexible timing than pure short-day types.'],
            ['Red Burgundy', 'Short-day / Red', 'Mild, slightly sweet, beautiful purple-red color', 'Short — 2-3 months', 'Adds visual drama to fresh salsa. Color turns pink when mixed with lime juice.'],
            ['White Sweet Spanish', 'Intermediate / White', 'Clean, moderately pungent, classic white onion flavor', 'Medium — 3-4 months', 'The traditional Mexican salsa onion. White onion is standard in authentic Mexican preparations.'],
            ['Green onion / Scallion (any)', 'Harvested immature', 'Fresh, mild, bright allium flavor', 'Cut and use fresh; keeps 1 week', 'Direct sow thickly and harvest as scallions for fresh salsa throughout the season.'],
          ],
        },
        { type: 'h3', text: 'Growing Onions' },
        {
          type: 'list',
          items: [
            'Timing: For short-day bulbing onions, plant sets or transplants in late February or early March.',
            'Sets vs. transplants vs. seeds: Sets (small dried bulbs) are easiest to plant. Transplants give more variety selection. Growing from seed allows the widest variety choice but requires starting 10-12 weeks before planting.',
            'Soil: Onions demand loose, deep, well-drained soil. They perform poorly in compacted or heavy clay soils.',
            'Spacing: For large bulbs: plant sets 4-6 inches apart in rows 12 inches apart.',
            'Harvest signal: Onions signal readiness when the green tops flop over and begin to dry. This is a natural process, not a disease.',
            'Curing: After harvesting, spread onions in a single layer on a screen or hang them in mesh bags in a dry, ventilated location for 2-4 weeks before storage.',
          ],
        },
        { type: 'h3', text: 'Garlic Variety Guide' },
        {
          type: 'table',
          headers: ['Variety', 'Type', 'Cloves / Bulb', 'Flavor', 'Storage', 'Notes'],
          rows: [
            ['Music', 'Hardneck / Porcelain', '4-6 large cloves', 'Very rich, bold, complex; hot raw, mellow when cooked', '6-8 months', 'One of the most popular hardneck varieties. Large cloves are easy to peel and process.'],
            ['Chesnok Red', 'Hardneck / Rocambole-type', '8-10 cloves', 'Rich, mellow, slightly sweet — outstanding cooked flavor', '4-5 months', 'Exceptional roasted garlic salsa variety. Bakes beautifully.'],
            ['Inchelium Red', 'Softneck / Artichoke', '12-20 cloves', 'Mild, pleasant, stores well', '10-12 months', 'Award-winning flavor for a softneck. Good production. Long storage life.'],
            ['California Early', 'Softneck / Artichoke', '12-18 cloves', 'Mild, classic garlic, consistent quality', '8-10 months', 'The most widely adapted softneck for warm climates. Reliable and productive.'],
            ['Creole Red', 'Softneck / Creole', '8-12 cloves', 'Rich, strong, slightly sweet — the Southern standard', '10+ months', 'Developed for Southern heat and climate. Excellent adaptation to Zone 7.'],
          ],
        },
        { type: 'h3', text: 'Planting and Harvesting Garlic' },
        {
          type: 'list',
          items: [
            'Plant in fall: Garlic requires a cold period (vernalization) to develop normal bulbs. Plant in October-November in Zone 7.',
            'Break apart the bulb: Separate bulbs into individual cloves just before planting. Plant cloves 2 inches deep, pointed end up, 6 inches apart in rows 12 inches apart.',
            'Mulch: Apply 3-4 inches of straw mulch over the planted area. This insulates the soil and suppresses spring weeds.',
            'Remove scapes (hardneck only): In late May or early June, hardneck garlic sends up a curling central stalk (the scape). Remove it promptly — this redirects energy to bulb development.',
            'Harvest: Garlic is ready when approximately half the leaves have turned brown and dried (usually mid-June to mid-July in Zone 7).',
            'Cure: Lay harvested garlic in a single layer in a dry, well-ventilated, shaded location for 3-4 weeks. The papery wrapper dries and the flavor intensifies.',
          ],
        },
        {
          type: 'tip',
          emoji: '🧄',
          text: 'Save the Best Cloves for Next Year: Always reserve the largest, most perfect bulbs from your harvest for replanting in fall. Plant the largest cloves — they produce the largest bulbs. After 2-3 seasons of saving your own seed garlic, you will have a strain adapted to your specific garden conditions.',
        },
      ],
    },

    {
      id: 'garden-design',
      title: 'Section 5: Salsa Garden Design & Layout',
      blocks: [
        {
          type: 'p',
          text: 'A dedicated Salsa Garden can be as small as two raised beds or as large as a 20x30-foot in-ground plot. The right scale depends on how much fresh salsa you want to eat, how much you want to preserve, and how much garden space you have available.',
        },
        {
          type: 'table',
          headers: ['Scale', 'Space', "What You'll Harvest", 'Bed Configuration'],
          rows: [
            ['Patio / Container Salsa Garden', '4-6 large containers', 'Fresh pico de gallo 1-2x per week at peak; very limited preservation', '2x 15-gal pots (tomatoes), 2x 10-gal pots (peppers), 2x 5-gal pots (herbs/onions)'],
            ['Beginner Salsa Garden', 'One 4x8 raised bed + one 4x4 bed', 'Fresh salsa through summer; 5-10 jars of preserved salsa', 'Bed 1: 3 tomatoes, 4 peppers. Bed 2: onions, cilantro succession, garlic'],
            ['Family Salsa Garden', 'Two 4x8 beds or a 10x16 plot', 'Fresh salsa all summer; 20-40 jars of canned salsa; gifting surplus', 'Bed A: 4-6 tomatoes, 6-8 peppers. Bed B: garlic (fall-spring), then onions/cilantro'],
            ['Salsa Production Garden', '400+ sq ft (20x20 or multiple beds)', 'Significant canning quantities; weekly fresh salsa; market surplus potential', 'Dedicated sections for each crop with irrigation; 12-20 tomatoes, 20+ peppers'],
          ],
        },
        { type: 'h3', text: 'Companion Planting for the Salsa Garden' },
        {
          type: 'table',
          headers: ['Plant or Crop', 'Companion Benefit', 'Place Near', 'Avoid Pairing With'],
          rows: [
            ['Basil', 'Strong anecdotal evidence for aphid deterrence on tomatoes; also excellent culinary companion', 'Tomatoes (interplant throughout)', 'Nothing significant'],
            ['Marigolds (Tagetes)', 'Root exudates suppress nematodes in soil; flowers deter some foliar pests', 'Throughout the bed, especially near tomatoes and peppers', 'Nothing — marigolds are broadly beneficial'],
            ['Borage', 'Attracts beneficial insects (parasitic wasps that control tomato hornworm)', 'Near tomatoes; scattered throughout bed', 'Nothing significant'],
            ['Nasturtium', 'Trap crop for aphids — aphids preferentially colonize nasturtiums, keeping them off tomatoes', 'Near tomatoes and peppers; in corners and edges', 'Nothing — plant liberally'],
            ['Alliums near peppers', 'Allium volatile compounds may deter some insect pests', 'Adjacent to pepper rows', 'Keep alliums away from beans and peas (inhibits nitrogen fixation)'],
            ['Cilantro (allowed to flower)', 'Umbel flowers attract parasitic wasps, hoverflies, and other beneficial insects', 'Throughout the garden; especially near tomatoes', 'Nothing — allow some plants to flower for maximum benefit'],
          ],
        },
        { type: 'h3', text: 'Seasonal Succession Planning' },
        {
          type: 'table',
          headers: ['Bed / Area', 'Fall (Oct-Nov)', 'Winter (Dec-Feb)', 'Spring (Mar-Apr)', 'Summer (May-Sep)', 'Notes'],
          rows: [
            ['Tomato & Pepper Bed', 'Clear spent plants; plant winter cover crop', 'Cover crop growing; amend soil; plan varieties', 'Transplant tomatoes and peppers mid-April after last frost', 'Main production season; harvest July-September', 'Rotate: do not grow Solanaceae (tomatoes, peppers, eggplant) in same bed 2 years in a row.'],
            ['Allium Bed', 'Plant garlic October-November', 'Garlic overwintering (minimal care)', 'Plant onion sets/transplants in March; garlic continues growing', 'Harvest garlic June-July; harvest onions May-June; sow cilantro succession', 'After garlic/onion harvest, this bed becomes the cilantro succession bed for late summer.'],
            ['Cilantro & Herb Area', 'Sow fall cilantro September; harvest through November', 'Rest; plan spring sowing schedule', 'First cilantro sowing in March; succession sow every 2-3 weeks', 'Continue succession sowing; manage bolting; harvest before tomatoes peak', 'Interplant with or near tomatoes for afternoon shade; harvest before the heat shuts it down.'],
          ],
        },
      ],
    },

    {
      id: 'harvest-timing',
      title: 'Section 6: Harvest & Timing — Getting All Five Crops Ready Together',
      blocks: [
        {
          type: 'p',
          text: 'The practical challenge of the Salsa Garden is getting all five ingredients ready at approximately the same time in sufficient quantity. Understanding the harvest window of each crop allows you to plan plantings so that fresh ingredients converge.',
        },
        {
          type: 'table',
          headers: ['Crop', 'Ready Signal', 'Harvest Window', 'Peak Quality Window', 'Storage After Harvest'],
          rows: [
            ['Tomatoes (paste types)', 'Fully colored, gives slightly to pressure, separates easily from stem', '60-90 days from transplant — July through September in Zone 7', 'Use within 5-7 days of harvest; peak flavor day 1-3', 'Room temperature only; refrigeration destroys tomato flavor.'],
            ['Jalapeños (green)', 'Full size (3"), firm, glossy, dark green skin', '60-75 days from transplant; continuously from July onward', 'Pick when needed; do not allow to over-ripen if green stage desired', 'Refrigerate in paper bag up to 2 weeks.'],
            ['Serranos', 'Dark green, full size (2-3"), glossy', '75-80 days; July-September', 'Use fresh; flavor is best immediately after harvest', 'Refrigerate up to 10 days. Dry or pickle surplus.'],
            ['Poblanos', 'Full size (4-5"), glossy, dark green', '70-80 days; July-August', 'Roast the day of harvest for best flavor in cooked salsa', 'Refrigerate up to 2 weeks fresh. Roasted and peeled: freeze up to 6 months.'],
            ['Cilantro', '8-12 inches tall, full leaf development before bolting', '30-45 days from sowing; continuously with succession planting', 'Cut and use same day for best flavor; next-day acceptable', 'Stand in water in refrigerator (bouquet method) up to 7-10 days.'],
            ['Onions (bulbing)', 'Half or more of tops have fallen over and begun drying', '90-120 days from sets/transplants; late May to June', 'Cure 2-4 weeks before use for best flavor and storage', 'Cured bulbs: 2-3 months for sweet short-day types.'],
            ['Garlic', 'Half of leaves brown and dried; bulb wrapper papery and intact', 'June-July; 240-270 days from fall planting', 'Cure 3-4 weeks before use; flavor intensifies slightly with curing', 'Properly cured softneck: 8-12 months. Hardneck: 4-6 months.'],
          ],
        },
        {
          type: 'tip',
          emoji: '📅',
          text: 'Oklahoma Salsa Calendar — Convergence Window: Mid-July through mid-August is the prime salsa-making window in Zone 7. Tomatoes are producing heavily, peppers are loaded with ripe fruit, onions and garlic are cured and ready from spring harvests, and cilantro succession plantings are producing. Make the most of this window for both fresh salsa and large-batch preservation.',
        },
      ],
    },

    {
      id: 'salsa-recipes',
      title: 'Section 7: Salsa Recipes — From Garden to Bowl',
      blocks: [
        {
          type: 'p',
          text: 'The following recipes are organized from freshest and simplest (pico de gallo, raw salsa) through to cooked and preserved (fire-roasted salsa roja, water bath canned salsa). All are designed specifically for garden-grown ingredients.',
        },
        { type: 'h3', text: 'Pico de Gallo — Classic Fresh Salsa' },
        {
          type: 'p',
          text: 'Pico de gallo is the purest expression of the salsa garden: all five crops raw, fresh, and barely seasoned. The quality of pico de gallo is entirely determined by the quality and ripeness of your garden tomatoes.',
        },
        {
          type: 'list',
          items: [
            'Ingredients (makes about 2 cups): 3 cups diced ripe garden tomatoes (drain excess juice), 1 medium white or sweet onion (finely diced), 1-3 jalapeños or serranos (minced, seeds to taste), 1/2 cup packed fresh cilantro leaves (roughly chopped), juice of 1-2 limes, 2-3 garlic cloves (minced), 1 tsp salt (or to taste).',
            'Drain the tomatoes: Dice tomatoes and place in a colander over the sink. Salt lightly and let drain 15-20 minutes. This step is critical — it prevents watery pico.',
            'Prepare aromatics: Dice onion very fine. Mince jalapeños (use gloves when handling hot peppers). Mince garlic cloves.',
            'Combine: Mix all ingredients gently. Season with lime juice and salt. Taste and adjust: more lime for brightness, more jalapeño for heat, more cilantro for herb character.',
            'Rest briefly: Let pico sit for 10-15 minutes before serving. The salt draws additional moisture and the flavors meld.',
            'Serve: With warm tortilla chips, on tacos, over grilled meats, inside quesadillas, on scrambled eggs.',
          ],
        },
        { type: 'h3', text: 'Salsa Verde (Tomatillo Salsa)' },
        {
          type: 'list',
          items: [
            'Ingredients: 1 lb fresh tomatillos (husked and rinsed), 3 poblano or Anaheim peppers, 1-2 jalapeños, 1/2 medium white onion (cut into wedges), 4 unpeeled garlic cloves, 1/2 cup fresh cilantro (stems and all), juice of 1 lime, salt.',
            'Broil vegetables: Place tomatillos, peppers (whole), onion pieces, and unpeeled garlic on a foil-lined baking sheet. Broil 6-8 inches from the heating element for 5-8 minutes, turning once, until charred in spots.',
            'Cool and peel: Allow to cool 10 minutes. Peel the garlic from its skin. Peel and seed the larger peppers (poblano, Anaheim). Leave jalapeño skin on.',
            'Blend: Place all roasted vegetables in a blender. Add cilantro (stems and all — stems have excellent flavor). Pulse to desired consistency: chunky or smooth.',
            'Taste and adjust: Salsa verde should be bright, tart, and complex. Add lime for brightness, salt to taste.',
          ],
        },
        { type: 'h3', text: 'Fire-Roasted Tomato Salsa Roja' },
        {
          type: 'list',
          items: [
            'Ingredients (makes about 6 cups): 4 lbs paste tomatoes, 4-6 jalapeños or serranos, 1 large white onion (halved), 6-8 garlic cloves (unpeeled), 1 cup fresh cilantro, juice of 2 limes, salt.',
            'Roast on cast iron comal or griddle: Heat a dry cast iron skillet over high heat until smoking. Place whole tomatoes, whole peppers, onion halves, and garlic cloves directly on the dry surface. Char on all sides, turning with tongs. This takes 10-15 minutes total.',
            'Alternatively, broil: Halve tomatoes and place cut-side-up with peppers, onion, and garlic on a foil-lined pan under the broiler. Broil until charred and softened.',
            'Peel and blend: Allow to cool slightly. Peel garlic. Do not peel tomatoes — the charred skin adds flavor. Remove and discard stems from peppers. Place all in a blender; pulse to desired consistency.',
            'Simmer: Heat 2 tbsp oil in a deep saucepan over high heat. Add the blended salsa all at once (it will splatter vigorously). Reduce heat; simmer 15-20 minutes, stirring occasionally, until slightly thickened and darkened.',
            'Finish: Stir in fresh cilantro. Taste and adjust seasoning. Cool completely before jarring.',
          ],
        },
        { type: 'h3', text: 'Charred Habanero-Mango Salsa' },
        {
          type: 'list',
          items: [
            'Ingredients: 2-3 habaneros (charred briefly, seeds optional), 2 ripe mangoes (diced), 1 cup cherry tomatoes (halved), 1/4 red onion (finely minced), juice of 2 limes, 1/4 cup fresh cilantro, salt, 1 tsp honey.',
            'Char habaneros: Using tongs, hold each habanero over a gas flame or broil briefly until lightly blistered. Cool; remove seeds for less heat.',
            'Combine: Mix mango, tomatoes, onion, and minced habanero. Add lime juice, honey, cilantro, and salt.',
            'Rest 30 minutes: The flavors need time to develop. The heat will build significantly as it sits. Adjust habanero quantity conservatively — it is much easier to add more than to reduce.',
            'Serve: With fish tacos, grilled shrimp, pork, or plantain chips.',
          ],
        },
        { type: 'h3', text: 'Preserving the Salsa Harvest' },
        { type: 'h3', text: 'Water Bath Canning — Basic Salsa for Long-Term Storage' },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Why you cannot simply scale fresh salsa recipes: A fresh salsa recipe has no acid requirements because you are eating it immediately. A canned salsa recipe requires measured acid (lime juice or vinegar) in specific proportions to maintain a safe pH level. Always use USDA-tested recipes for water bath canned salsa — do not modify the proportions of low-acid ingredients.',
        },
        {
          type: 'list',
          items: [
            'The USDA-approved basic salsa formula: 3 cups chopped seeded paste tomatoes, 3/4 cup chopped onion, 1/2 cup vinegar (5% acidity) or bottled lime juice, 1/2 cup chopped jalapeños, 6 garlic cloves (minced), 1 tsp salt. Combine; bring to a boil; ladle hot into sterilized jars leaving 1/2" headspace; process in boiling water bath 15 minutes. Yield: approximately 4 half-pint jars.',
            'Yield planning: 3-4 pounds of paste tomatoes yields approximately 2 pints of canned salsa. For a year\'s supply of salsa (2 jars per month): plan for 50-75 lbs of tomatoes across multiple canning sessions.',
            'Equipment needed: Large water bath canner with rack, jar lifter, wide-mouth funnel, headspace gauge, new lids each season (bands can be reused).',
          ],
        },
        { type: 'h3', text: 'Freezer Salsa — The Easy Preservation Method' },
        {
          type: 'list',
          items: [
            'Make a large batch: Use any fresh or cooked salsa recipe. For fresh salsa frozen in quantity, drain tomatoes well before combining — excess water in frozen salsa becomes dilution when thawed.',
            'Cool completely: Cool salsa to room temperature, then refrigerate for several hours before freezing.',
            'Package in portions: Freeze in meal-sized portions (1-2 cups each) in zip-lock freezer bags. Lay flat to freeze; stack when solid.',
            'Use within 6-12 months: Freezer salsa is best within 6 months. Thaw overnight in refrigerator. Drain any accumulated liquid before serving.',
          ],
        },
      ],
    },

    {
      id: 'troubleshooting',
      title: 'Section 8: Troubleshooting the Salsa Garden',
      blocks: [
        {
          type: 'table',
          headers: ['Problem', 'Crop Affected', 'Likely Cause', 'Solution'],
          rows: [
            ['Tomatoes crack badly after rain', 'Tomatoes', 'Irregular moisture: drought followed by heavy rain causes rapid fruit expansion and skin splitting', 'Consistent deep watering prevents most cracking. Mulch heavily to moderate soil moisture swings. Choose crack-resistant varieties (Juliet, Celebrity).'],
            ['Tomatoes blossom but set no fruit', 'Tomatoes, Peppers', 'Temperature extremes: tomatoes and peppers drop flowers when nighttime temps exceed 75°F or daytime temps exceed 95°F', 'Normal summer response. Plants resume fruiting when temperatures moderate. Keep plants healthy and watered through the hot period.'],
            ['Peppers are tiny and few despite healthy plants', 'Peppers', 'Nutrient imbalance (too much nitrogen), cold soil at transplanting, or insufficient pollination', 'Reduce nitrogen fertilization after first flower. Check soil temperature was above 65°F at transplanting. Hand pollinate in low-bee periods.'],
            ['Cilantro bolts within 2 weeks of planting', 'Cilantro', 'Planting during warm weather without bolt-resistant varieties; or sowing in full afternoon sun', "Switch to 'Slow Bolt', 'Calypso', or 'Santo' varieties. Plant in afternoon shade. Succession sow every 2-3 weeks instead of one large planting."],
            ['Garlic produces tiny undeveloped bulbs', 'Garlic', 'Spring-planted (not fall-planted); wrong day-length type; harvested too late', 'Garlic in Zone 7 must be fall-planted (October-November). Spring-planted garlic will not develop proper bulbs without vernalization.'],
            ['Onions produce mostly tops and minimal bulb', 'Onions', 'Wrong day-length type for latitude; planted too late in spring; nitrogen excess late in season', 'Use short-day or intermediate varieties (Texas 1015, Candy) for Zone 7. Plant in February-March. Stop fertilizing after bulbing begins.'],
            ['Fresh salsa tastes watery and bland', 'Salsa quality', 'Grocery-quality or underripe tomatoes; insufficient salt; insufficient lime; not draining tomatoes', 'Use only peak-ripe garden tomatoes. Drain diced tomatoes before combining. Salt generously and taste before serving. Add lime juice gradually.'],
            ['Salsa is too hot after adding peppers', 'Heat management', 'Pepper heat varies dramatically even within a single variety; seeds and membranes contain the most capsaicin', 'Always taste a small piece of your specific pepper before adding to a full batch. Remove seeds and membranes for milder heat. Add peppers gradually.'],
            ['Pepper plants have yellow leaves from bottom up', 'Peppers', 'Nitrogen deficiency, overwatering, or root rot from wet soil', 'Check soil drainage. If soil stays wet more than 24 hours after rain, improve drainage. Apply balanced fertilizer if nitrogen-deficient.'],
          ],
        },
        {
          type: 'tip',
          emoji: '🍅',
          text: 'The moment that defines the Salsa Garden is when all five crops are ready at once and you make fresh salsa with everything harvested that morning. Grow them. Harvest them on the same day. Make salsa. Nothing from a jar comes close.',
        },
      ],
    },
  ],
}
