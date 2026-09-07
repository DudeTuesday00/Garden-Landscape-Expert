export const soilHealthContent = {
  id: 'soil-health',
  hero: {
    emoji: '🌱',
    title: 'Soil Health & Amendment',
    subtitle: 'Understand what your soil is, what it\'s lacking, and how to build the living, fertile growing medium that productive gardens depend on.',
  },
  intro: 'Healthy soil is not simply a medium that holds plants upright — it is a living ecosystem containing billions of microorganisms per teaspoon, a network of fungal hyphae connecting plant roots, earthworms that aerate and compost organic matter, and a chemistry that makes nutrients available or locks them away depending on pH. Most garden failures that appear to be fertilizer problems are actually soil health problems: compacted soil where roots cannot penetrate, pH imbalances that make nutrients chemically unavailable regardless of how much fertilizer is applied, or biological dead zones where soil organisms have been eliminated by compaction, synthetic chemical overuse, or lack of organic matter. A soil test is the essential first step because it reveals what your specific soil actually contains rather than requiring you to guess.',
  sections: [
    {
      id: 'soil-testing',
      title: 'Soil Testing — Know Before You Amend',
      blocks: [
        {
          type: 'p',
          text: 'A professional soil test through your state university extension service costs five to fifteen dollars and returns pH, macronutrient and micronutrient levels, organic matter percentage, and specific amendment recommendations calibrated to your actual soil — not a generic guess. Home test kits (strips or a simple pH meter) can give a rough pH reading but are unreliable for nutrient levels; treat them as a quick check between real lab tests, not a substitute.',
        },
        {
          type: 'h3',
          text: 'Taking a Good Sample',
        },
        {
          type: 'list',
          items: [
            'Sample from 6-8 spots across the growing area and mix them into one composite sample — a single spot doesn’t represent the whole bed.',
            'Dig 6-8 inches deep for a typical vegetable bed (shallower, 3-4 inches, for a lawn test).',
            'Remove surface debris and mulch before sampling — you want soil, not decomposing organic material.',
            'Let the sample air-dry before mailing if your extension office requests it; wet soil can skew certain readings.',
            'Test every 2-3 years for an established garden, or annually while actively correcting a known deficiency.',
          ],
        },
        {
          type: 'tip',
          emoji: '📋',
          text: 'Request the "vegetable garden" or "home garden" test package specifically, if offered — it typically includes organic matter percentage and more actionable amendment recommendations than a basic lawn-focused test.',
        },
        {
          type: 'image',
          src: '/guides/soil-health/soil-sample.jpg',
          alt: 'A trowel taking a soil sample from a garden bed, showing dark rich earth',
          caption: 'A composite sample from several spots across the bed gives a far more accurate soil test than a single scoop.',
        },
      ],
    },
    {
      id: 'understanding-ph',
      title: 'Understanding and Adjusting Soil pH',
      blocks: [
        {
          type: 'p',
          text: 'Soil pH controls nutrient availability more than almost any other single factor — even soil rich in nitrogen, phosphorus, and potassium will starve plants if the pH locks those nutrients into chemically unavailable forms. Most vegetables and ornamentals prefer a slightly acidic to neutral range, roughly 6.0 to 7.0, where the broadest range of nutrients stays available.',
        },
        {
          type: 'table',
          headers: ['pH Range', 'What It Means', 'Nutrient Availability Issue', 'Correction'],
          rows: [
            ['Below 5.5 (strongly acidic)', 'Common in high-rainfall regions, under conifers, or heavily weathered soils', 'Phosphorus, calcium, and magnesium become less available; aluminum and manganese can reach toxic levels', 'Add agricultural lime (calcitic or dolomitic) per soil test recommendation'],
            ['5.5–6.5 (slightly acidic)', 'Ideal range for most vegetables, and required by acid-lovers like blueberries and azaleas', 'Good availability across most nutrients', 'Usually no correction needed for general vegetables'],
            ['6.5–7.0 (near neutral)', 'Ideal range for the broadest range of garden plants', 'Best overall nutrient availability', 'No correction needed'],
            ['7.0–7.5 (slightly alkaline)', 'Common in arid and limestone-derived soils', 'Iron, manganese, and phosphorus availability begins to drop, causing interveinal chlorosis in sensitive plants', 'Add elemental sulfur or acidifying organic matter (pine needles, peat) gradually'],
            ['Above 7.5 (strongly alkaline)', 'Common in desert Southwest, caliche soils', 'Significant micronutrient lockout — iron chlorosis is common', 'Elemental sulfur over multiple seasons; chelated iron for immediate plant relief; raised beds with imported soil for problem areas'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Never guess at lime or sulfur application rates — over-liming can push pH too high and lock out different nutrients than the deficiency you started with, and it takes months to correct. Apply exactly what your soil test recommends, and retest before adding more.',
        },
      ],
    },
    {
      id: 'soil-texture',
      title: 'Working With Your Soil Type',
      blocks: [
        {
          type: 'p',
          text: 'Soil texture — the relative proportion of sand, silt, and clay particles — determines how water moves through your soil, how easily roots penetrate, and how quickly nutrients leach away. You can\'t change your fundamental soil texture, but you can dramatically improve how it functions by building organic matter.',
        },
        {
          type: 'table',
          headers: ['Soil Type', 'Characteristics', 'Challenges', 'Amendment Strategy'],
          rows: [
            ['Clay', 'Dense, holds water and nutrients well, drains slowly, compacts easily when worked wet', 'Poor drainage, root suffocation, cracks when dry, slow to warm in spring', 'Generous compost and aged organic matter to open structure; never till or work when wet; consider raised beds in severe cases'],
            ['Sandy', 'Loose, drains quickly, warms fast in spring, easy to work', 'Poor water and nutrient retention — both leach through quickly', 'Heavy organic matter additions to increase water-holding capacity; more frequent, lighter fertilizing; mulch heavily to slow evaporation'],
            ['Silty', 'Smooth texture, holds moisture better than sand, more fertile than clay', 'Can compact and crust; moderate drainage issues', 'Organic matter improves structure and prevents surface crusting'],
            ['Loam', 'Balanced mix of sand, silt, and clay — the horticultural ideal', 'Minimal — still benefits from ongoing organic matter to maintain structure', 'Annual compost application to sustain what you already have'],
            ['Chalky/Alkaline', 'Free-draining, often shallow over limestone, naturally alkaline', 'Nutrient lockout at high pH, particularly iron and manganese', 'Organic matter plus targeted sulfur; choose alkaline-tolerant plants where correction isn’t practical'],
          ],
        },
        {
          type: 'tip',
          emoji: '🫙',
          text: 'The jar test is a free, low-tech way to estimate your soil texture at home: fill a clear jar one-third with soil, add water to near the top, shake vigorously, then let it settle for 24 hours. Sand settles first (bottom layer), then silt, then clay (top layer) — the relative thickness of each layer estimates your soil’s texture percentages.',
        },
        {
          type: 'image',
          src: '/guides/soil-health/soil-cross-section.jpg',
          alt: 'Close-up cross-section of layered garden soil showing dark topsoil with visible organic matter and root structure',
          caption: 'Good soil structure — dark, crumbly topsoil with visible organic matter — looks different depending on your starting texture, but the goal is the same everywhere.',
        },
      ],
    },
    {
      id: 'organic-matter',
      title: 'Building Organic Matter Over Time',
      blocks: [
        {
          type: 'p',
          text: 'The single most impactful thing most gardeners can do for their soil is apply two to four inches of compost annually and stop tilling. Organic matter is the common fix for nearly every soil texture problem: it opens compacted clay, helps sandy soil retain water and nutrients, feeds the microbial life that makes nutrients plant-available, and buffers pH swings. Building meaningful organic matter is a multi-year project, not a one-time fix.',
        },
        {
          type: 'h3',
          text: 'Sources of Organic Matter',
        },
        {
          type: 'list',
          items: [
            'Finished compost — the gold standard, whether homemade or purchased; apply as a 1-3 inch top-dress annually.',
            'Aged manure (never fresh — fresh manure can burn roots and carries pathogen risk) — excellent nitrogen and organic matter source.',
            'Shredded fall leaves (leaf mold) — free, abundant, and excellent for structure; takes a season or two to fully break down.',
            'Cover crops (clover, winter rye, buckwheat) — grown specifically to be cut and left on the bed or turned in, adding both organic matter and, for legume covers, nitrogen.',
            'Aged wood chips — best used as a surface mulch rather than tilled in, where they break down slowly and feed fungal soil life without causing the temporary nitrogen tie-up that occurs when fresh wood is incorporated into the soil.',
          ],
        },
        {
          type: 'tip',
          emoji: '🪱',
          text: 'Stop tilling where you can. Tillage physically destroys the fungal hyphae networks that transport nutrients and water to plant roots, accelerates the breakdown (and loss) of existing organic matter, and brings buried weed seeds to the surface where they germinate. A no-dig approach — top-dressing with compost annually and letting soil organisms incorporate it naturally — builds organic matter faster over time than repeated tilling.',
        },
        {
          type: 'image',
          src: '/guides/soil-health/compost-spreading.jpg',
          alt: 'A wheelbarrow of finished compost being spread onto a garden bed with a shovel',
          caption: 'Two to four inches of finished compost, applied annually as a top-dress, is the single highest-leverage soil improvement most gardeners can make.',
        },
      ],
    },
    {
      id: 'soil-biology',
      title: 'The Biology of Living Soil',
      blocks: [
        {
          type: 'p',
          text: 'A teaspoon of healthy garden soil can contain billions of bacteria, miles of fungal hyphae, and a diverse community of protozoa, nematodes, and arthropods — together known as the soil food web. This community is what actually makes nutrients available to plants: bacteria and fungi break down organic matter and mineral particles into plant-usable forms, and mycorrhizal fungi form symbiotic relationships with plant roots, extending their effective root system dramatically in exchange for sugars the plant produces through photosynthesis.',
        },
        {
          type: 'table',
          headers: ['Soil Organism', 'Role', 'What Supports It', 'What Harms It'],
          rows: [
            ['Bacteria', 'Break down organic matter, fix nitrogen (in the case of rhizobia), cycle nutrients', 'Organic matter, moderate moisture, aeration', 'Compaction, synthetic fungicides in excess, prolonged drought'],
            ['Mycorrhizal fungi', 'Extend plant root systems, improve water and phosphorus uptake', 'Minimal soil disturbance, diverse plantings, organic matter', 'Tillage, high-phosphorus fertilizer (suppresses the symbiosis), fungicides'],
            ['Earthworms', 'Physically aerate soil, break down organic matter into castings rich in available nutrients', 'Organic matter, consistent moisture, undisturbed soil', 'Tillage (kills and displaces them), compaction, synthetic pesticide overuse'],
            ['Nematodes (beneficial species)', 'Prey on pest nematodes and other soil organisms, cycle nutrients', 'Organic matter, diverse soil life', 'Soil fumigants, severe compaction'],
            ['Arthropods (springtails, mites)', 'Shred organic matter into smaller pieces bacteria and fungi can further decompose', 'Surface organic matter, mulch, minimal disturbance', 'Bare, compacted, frequently tilled soil'],
          ],
        },
        {
          type: 'tip',
          emoji: '🍄',
          text: 'A visible sign of healthy soil biology: after adding compost or mulch, look for fine white fungal threads (mycelium) a few weeks later, and check for earthworms when you dig a small test hole. Their presence is a better real-time indicator of soil health than any single number on a lab report.',
        },
        {
          type: 'image',
          src: '/guides/soil-health/earthworms.jpg',
          alt: 'Overhead close-up of dark crumbly garden soil rich with organic matter and earthworms visible on the surface',
          caption: 'Visible earthworm activity is one of the simplest, most reliable signs that soil biology is thriving.',
        },
      ],
    },
    {
      id: 'nutrient-basics',
      title: 'Understanding Nutrient Deficiencies',
      blocks: [
        {
          type: 'p',
          text: 'A soil test reports exact nutrient levels, but recognizing deficiency symptoms in the garden helps you catch a developing problem between tests and understand what a lab report is actually telling you.',
        },
        {
          type: 'table',
          headers: ['Nutrient', 'Deficiency Symptom', 'Common Cause', 'Organic Correction'],
          rows: [
            ['Nitrogen (N)', 'Uniform yellowing of older leaves first; stunted, spindly growth', 'Low organic matter, heavy rainfall leaching, high-carbon mulch tied up in decomposition', 'Blood meal, fish emulsion, well-finished compost'],
            ['Phosphorus (P)', 'Dark green or purplish leaves, especially on undersides; poor root and flower development', 'Low pH locking phosphorus into unavailable forms; naturally low native phosphorus', 'Bone meal, rock phosphate (adjust pH first if that’s the actual cause)'],
            ['Potassium (K)', 'Yellowing or browning leaf edges (scorch) while the leaf interior stays green; weak stems', 'Sandy soil leaching, low organic matter', 'Kelp meal, greensand, wood ash (in moderation — raises pH)'],
            ['Calcium', 'Blossom end rot on tomatoes and peppers; distorted new growth', 'Often an uptake/watering-consistency problem rather than a true soil deficiency', 'Consistent watering first; gypsum or lime (if pH also needs raising) if a true deficiency is confirmed'],
            ['Iron', 'Interveinal chlorosis (yellowing between green veins) on new growth', 'High pH locking out iron, not usually a true lack of iron in the soil', 'Lower pH with sulfur over time; chelated iron for immediate relief'],
            ['Magnesium', 'Interveinal chlorosis on older leaves, sometimes with reddish-purple tints', 'Sandy, leached soil; excessive potassium fertilization competing for uptake', 'Epsom salt (magnesium sulfate) as a foliar spray or soil drench'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Many deficiency-looking symptoms are actually pH or watering problems, not a true absence of the nutrient in the soil. Before buying an amendment, confirm with a soil test — adding a nutrient that’s already present but chemically locked up by pH won’t fix the plant and can create a new imbalance.',
        },
      ],
    },
    {
      id: 'improvement-plan',
      title: 'A Multi-Year Soil Improvement Plan',
      blocks: [
        {
          type: 'p',
          text: 'Meaningful soil improvement — raising organic matter percentage, correcting a significant pH imbalance, or rebuilding compacted structure — takes multiple seasons. Trying to fix everything in one application usually means over-applying an amendment. A phased plan gets better, more stable results.',
        },
        {
          type: 'h3',
          text: 'Year One: Assess and Establish',
        },
        {
          type: 'list',
          items: [
            'Get a professional soil test before amending anything.',
            'Apply lime or sulfur only to the extent the test recommends, never more.',
            'Top-dress with 2-3 inches of compost across all growing beds.',
            'Start a compost pile or bin if you don’t already have one, so future organic matter is free and ongoing.',
            'Stop tilling; switch to top-dressing and minimal disturbance going forward.',
          ],
        },
        {
          type: 'h3',
          text: 'Year Two: Build and Refine',
        },
        {
          type: 'list',
          items: [
            'Retest pH if a correction was applied in Year One — adjust further only if still outside range.',
            'Continue annual compost top-dressing.',
            'Add a cover crop in any bed left fallow over winter, particularly a nitrogen-fixing legume cover.',
            'Begin mulching pathways and bed surfaces with wood chips or straw to build organic matter passively between growing seasons.',
          ],
        },
        {
          type: 'h3',
          text: 'Year Three and Beyond: Maintain',
        },
        {
          type: 'p',
          text: 'By year three, most gardens on this plan show visibly darker, better-structured soil, easier-to-work texture, and reduced fertilizer need. From here, an annual compost top-dress, a retest every 2-3 years, and continued no-till practice is usually enough to maintain — and continue slowly improving — soil health indefinitely.',
        },
        {
          type: 'tip',
          emoji: '🌾',
          text: 'Soil improvement compounds — each year’s added organic matter feeds the biology that helps break down and incorporate the next year’s addition, which is why the visible improvement in year two and three is often more dramatic than the improvement most gardeners see in year one.',
        },
        {
          type: 'image',
          src: '/guides/soil-health/thriving-garden.jpg',
          alt: 'A healthy vegetable garden bed with thriving green plants growing in dark rich mulched soil',
          caption: 'A multi-year soil-building plan pays off as visibly darker, better-structured soil and healthier plants with less fertilizer input.',
        },
      ],
    },
  ],
}
