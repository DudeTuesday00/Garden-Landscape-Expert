export const medicinalHerbGardenContent = {
  id: 'medicinal-herb-garden',
  hero: {
    emoji: '🌿',
    title: 'Medicinal Herb Garden',
    subtitle: 'Time-Honored Healing Herbs You Can Grow and Use at Home',
  },
  intro: 'Humans have grown medicinal herbs for as long as we have grown anything at all. Long before the first pharmacies, every household garden held plants for healing — lavender for calm, chamomile for sleep, echinacea for illness, mint for digestion. This guide reconnects you to that tradition: which plants to grow, how to cultivate them across every American climate, how to harvest and preserve their medicinal qualities, and how to prepare simple remedies that have served generations of healers. Always consult your healthcare provider when health matters are serious.',
  sections: [
    {
      id: 'safety-ethics-legal',
      title: 'Section 1: Safety, Ethics & Legal Framework',
      blocks: [
        {
          type: 'p',
          text: 'Medicinal herbs are not a category separate from medicine — they are the oldest form of medicine, and many of our most important pharmaceutical drugs are derived from or modeled on plant compounds. This heritage means that medicinal herbs carry both genuine therapeutic value and real potential for harm when used incorrectly. The home herbalist who treats this knowledge seriously — who learns to use plants thoughtfully, understand their limits, and respect the boundaries between self-care and medical treatment — will have a safe, enriching, and genuinely beneficial practice.',
        },
        {
          type: 'p',
          text: 'This guide takes a safety-first approach throughout. Every herb profile includes honest information about interactions, contraindications, and appropriate limitations of use. Please read this section before working with any medicinal plants.',
        },
        {
          type: 'h3',
          text: 'The Non-Negotiable Safety Rules',
        },
        {
          type: 'list',
          items: [
            'Consult a healthcare provider for serious conditions: Medicinal herbs are appropriate for minor ailments, wellness support, and adjunct care — not as the primary treatment for serious illness, chronic disease requiring management, or emergencies. When in doubt, see a doctor first.',
            'Never stop prescribed medication to use herbs instead without medical supervision: Many people are harmed each year by discontinuing effective conventional treatment in favor of herbal alternatives. Herbs and pharmaceuticals are not in opposition — they can complement each other, but always with physician knowledge and guidance.',
            'Drug-herb interactions are real: Dozens of well-documented interactions exist between common herbs and pharmaceutical drugs. St. John\'s Wort alone interacts with 70+ drugs. Garlic thins blood similarly to warfarin. Ginkgo interacts with blood thinners. Always tell your healthcare providers what herbs you are taking.',
            'Correct identification is essential: Before using any plant medicinally, be absolutely certain of its identification. Dangerous lookalikes exist. Poison hemlock resembles Queen Anne\'s lace. Water hemlock resembles elderberry. Use multiple identification resources; grow from identified nursery stock rather than wild-harvesting until you have expert-level identification skills.',
            'Pregnant and breastfeeding women require special caution: Many medicinal herbs are contraindicated during pregnancy. Some — like blue cohosh, pennyroyal, and tansy — can cause miscarriage. Others may affect fetal development. When pregnant or nursing, consult your midwife or obstetrician before using any medicinal herb beyond common culinary levels.',
            'Children require adjusted doses: Herb doses for children are significantly lower than adult doses; many herbs are not appropriate for very young children at all. When using herbs with children, consult a qualified practitioner for appropriate dosing.',
            'Start low, go slow: When trying a new herb, begin with the lowest effective dose and observe your response for several days before increasing. Individual responses to plant compounds vary considerably.',
          ],
        },
        {
          type: 'h3',
          text: 'Drug-Herb Interactions: The Most Important List',
        },
        {
          type: 'table',
          headers: ['Herb', 'Interacts With', 'Type of Interaction', 'Clinical Significance'],
          rows: [
            ['St. John\'s Wort (Hypericum perforatum)', 'Antidepressants (SSRIs), blood thinners (warfarin), birth control pills, HIV medications, cyclosporine, digoxin, many chemotherapy agents', 'Induces CYP enzymes — accelerates breakdown of many drugs, reducing their effectiveness; combining with SSRIs risks serotonin syndrome', 'HIGH — one of the most significant herb-drug interactions known; do not use St. John\'s Wort with any prescription medications without physician approval'],
            ['Garlic (high-dose supplements)', 'Warfarin; aspirin; other antiplatelet drugs; HIV medications', 'Antiplatelet and anticoagulant effects enhance bleeding risk; may reduce effectiveness of HIV drugs', 'MODERATE — culinary amounts are generally safe; high-dose garlic supplements significantly increase bleeding risk, especially perioperatively'],
            ['Ginkgo (Ginkgo biloba)', 'Warfarin; aspirin; NSAIDs; SSRIs; MAOIs', 'Antiplatelet properties increase bleeding risk; may enhance or interfere with antidepressant effects', 'MODERATE — significant bleeding risk with anticoagulants; stop 2 weeks before surgery'],
            ['Valerian', 'Sedatives; benzodiazepines; barbiturates; alcohol; anesthesia', 'Additive CNS depressant effects; may enhance sedation unpredictably', 'MODERATE — avoid with prescription sedatives; stop 2 weeks before surgery'],
            ['Echinacea', 'Immunosuppressants; corticosteroids; certain antifungals; hepatotoxic drugs', 'Immune stimulation may counteract immunosuppressant therapy; theoretical liver concerns with long-term use + hepatotoxic drugs', 'LOW-MODERATE — primary concern for transplant patients on immunosuppressants; generally safe for healthy adults short-term'],
            ['Kava', 'Alcohol; benzodiazepines; liver-processed medications (many)', 'Additive liver stress; additive CNS depression; hepatotoxicity risk', 'HIGH — kava has caused liver failure in some cases; avoid with alcohol or any hepatotoxic medications; not for those with liver disease'],
            ['Licorice root (high-dose)', 'Antihypertensives; diuretics; digoxin; corticosteroids', 'Raises blood pressure; causes potassium loss that can dangerously amplify digoxin toxicity', 'HIGH with digoxin — avoid high-dose or long-term licorice root use; small amounts in teas generally safe'],
            ['Feverfew', 'Warfarin; aspirin; NSAIDs; other antiplatelet drugs', 'Antiplatelet effects increase bleeding risk', 'MODERATE — do not use with blood thinners; stop 2 weeks before surgery'],
            ['Ginseng (Panax)', 'Warfarin; stimulants; diabetes medications; MAOIs; estrogens', 'Anticoagulant effects; may lower blood sugar excessively with diabetes drugs; stimulant interactions', 'MODERATE — monitor blood sugar with diabetes medications; avoid with MAOIs and warfarin'],
            ['Black Cohosh', 'Hormone-sensitive medications; tamoxifen; hepatotoxic drugs', 'Weak estrogenic activity may interact with hormone therapies; rare liver toxicity reports', 'LOW-MODERATE — avoid with hormone-sensitive cancers; use quality-verified products; stop if liver symptoms develop'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚕️',
          text: 'Medical Disclaimer: This guide is for educational purposes only. It does not constitute medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider before using any herb medicinally, especially if you have existing health conditions, take prescription medications, are pregnant or breastfeeding, or are treating children. The information presented reflects traditional use and available research but should not replace professional medical care.',
        },
        {
          type: 'h3',
          text: 'Legal Considerations for Home Herbalists',
        },
        {
          type: 'p',
          text: 'The legal framework around medicinal herbs in the United States is different from pharmaceuticals but not without structure. Understanding it helps home herbalists work confidently and legally.',
        },
        {
          type: 'table',
          headers: ['Topic', 'What the Law Says', 'Practical Guidance'],
          rows: [
            ['Federal regulation of herbs', 'The FDA regulates herbs sold as dietary supplements under DSHEA (1994). Herbs cannot be marketed to diagnose, treat, cure, or prevent specific diseases — but can be marketed for general wellness and structure/function claims.', 'Growing and using herbs in your own home is not regulated by the FDA.'],
            ['Growing for personal use', 'No federal restrictions on growing medicinal herbs for personal use. Some states have restrictions on specific plants — particularly those with potential for misuse (kratom is regulated or banned in several states).', 'Check your state\'s laws for any plants you\'re uncertain about.'],
            ['Wild harvesting', 'Wild harvesting on federal lands (National Forests, BLM land) typically requires a permit for commercial quantities; personal-use amounts are often allowed but check with the specific land management agency. Many state parks prohibit any plant collection.', 'Never wild-harvest without permission on private land.'],
            ['Sharing and selling', 'Sharing herbs with family and friends is generally unregulated. Selling herbal products as food or dietary supplements subjects you to FDA oversight and state food safety regulations. Selling herbs with medical claims (e.g., "cures diabetes") is illegal under federal law.', 'Formal herbalism practice is regulated differently by each state — many states allow traditional herbalism consultation without licensure, while others have restrictions.'],
            ['Endangered and protected species', 'Some medicinal plants are protected under state or federal law due to overharvesting — American ginseng (Panax quinquefolius), goldenseal (Hydrastis canadensis), and black cohosh (Actaea racemosa) are all of conservation concern.', 'Prioritize garden-grown over wild-harvested specimens of any plant with conservation concerns. Check the USDA Plants Database and your state\'s natural heritage program for protected status.'],
          ],
        },
      ],
    },
    {
      id: 'growing-the-medicinal-herb-garden',
      title: 'Section 2: Growing the Medicinal Herb Garden',
      blocks: [
        {
          type: 'p',
          text: 'A medicinal herb garden can be as simple as three pots on a windowsill or as elaborate as a formal physic garden with dozens of species organized by medicinal application. The fundamentals of growing medicinal herbs successfully are not dramatically different from culinary herb growing — most medicinal plants are not difficult to grow and many thrive with minimal care once established.',
        },
        {
          type: 'p',
          text: 'What distinguishes medicinal herb growing from purely culinary herb growing is attention to harvest timing and method. The concentration of active compounds in medicinal plants varies significantly by growth stage, time of day, season, and part of the plant. Understanding when and how to harvest for maximum medicinal quality is as important as knowing how to grow the plant itself.',
        },
        {
          type: 'h3',
          text: 'Siting the Medicinal Herb Garden',
        },
        {
          type: 'p',
          text: 'Most medicinal herbs originated in the Mediterranean region or in woodland and meadow habitats — which translates to the following growing preferences:',
        },
        {
          type: 'table',
          headers: ['Site Factor', 'Optimal Conditions', 'Acceptable Range', 'Problem Situations'],
          rows: [
            ['Sunlight', 'Full sun (6+ hours direct) for most Mediterranean herbs (lavender, rosemary, thyme, sage, chamomile); partial shade (3–5 hours) for woodland herbs (goldenseal, black cohosh, wild ginger, Solomon\'s seal)', 'Most sun-lovers tolerate 4–5 hours; most shade-lovers can handle morning sun with afternoon shade', 'Deep shade produces weak, leggy plants with reduced essential oil content; harsh afternoon-only sun stresses shade-lovers'],
            ['Soil drainage', 'Excellent drainage for Mediterranean herbs; consistently moist but well-drained for many woodland and meadow herbs; wet conditions for specialized herbs like skullcap, blue vervain, and marshmallow', 'Most herbs tolerate average garden drainage; poor drainage is the most common site failure', 'Waterlogged soil kills most medicinal herbs within weeks; raised beds solve drainage problems universally'],
            ['Soil pH', '6.0–7.0 for most herbs; lavender, rosemary, and thyme prefer 6.5–7.5; acid-loving plants like goldenseal prefer 5.5–6.5', 'Broad tolerance in the 5.5–7.5 range; extremes reduce nutrient availability and stress plants', 'Very alkaline soils (above 7.5) reduce iron availability; very acidic soils (below 5.0) are problematic for most herbs'],
            ['Soil fertility', 'Moderate fertility — NOT excessively rich soil; overly fertile soil produces lush growth with lower essential oil content; Mediterranean herbs specifically prefer lean, well-drained soil', 'Add compost at planting for structure and micronutrients; avoid heavy fertilization', 'Overfertilized herbs produce beautiful-looking plants with dramatically reduced medicinal value; resist the temptation to fertilize heavily'],
            ['Air circulation', 'Good airflow around plants reduces fungal disease pressure; lavender, chamomile, and echinacea are particularly prone to crown rot in still, humid air', 'Avoid planting in corners with no air movement', 'Still, humid microclimates promote powdery mildew, crown rot, and root rot — the primary disease problems in herb gardens'],
          ],
        },
        {
          type: 'h3',
          text: 'Herb Garden Design by Space',
        },
        {
          type: 'p',
          text: 'The traditional physic garden — a formal layout organizing herbs by medicinal use, enclosed by low hedges of boxwood or lavender — is beautiful but not necessary. Medicinal herbs can be grown in almost any configuration that meets their cultural requirements.',
        },
        {
          type: 'h3',
          text: 'The Windowsill and Container Medicinal Garden',
        },
        {
          type: 'p',
          text: 'For apartment dwellers, renters, or anyone with limited outdoor space, a surprisingly productive medicinal herb garden is possible in containers. The most medicinal-value-per-square-foot plants for container growing: chamomile (window box), peppermint (dedicated container — it spreads), lemon balm (large container), lavender (well-draining container in full sun), and basil and holy basil (tulsi) in warm months.',
        },
        {
          type: 'list',
          items: [
            'Use containers 8–12 inches deep minimum for most herbs; 16+ inches for lemon balm and rosemary',
            'Ensure every container has drainage holes — no exceptions',
            'A 1:1 mix of quality potting mix and perlite serves most medicinal herbs well',
            'Grow lights (full spectrum LED, 14–16 hours daily) allow year-round production in northern climates',
          ],
        },
        {
          type: 'h3',
          text: 'The Dedicated Raised Bed Medicinal Garden',
        },
        {
          type: 'p',
          text: 'A 4×8 foot raised bed filled with a well-draining mix (50% quality topsoil, 30% compost, 20% coarse sand) is the most productive format for a beginner medicinal herb garden. It provides controlled soil conditions, excellent drainage, and manageable weed pressure while accommodating 8–12 different medicinal herbs at productive densities.',
        },
        {
          type: 'h3',
          text: 'The Integrated Garden Approach',
        },
        {
          type: 'p',
          text: 'Medicinal herbs need not be segregated into their own dedicated bed. Many medicinal herbs are beautiful enough for ornamental border planting — lavender, echinacea, calendula, black-eyed Susan, and yarrow are excellent perennial border plants that are also medicinally useful. This integration approach allows a much larger medicinal plant collection without dedicating specialized space.',
        },
        {
          type: 'h3',
          text: 'Medicinal Herb Growing Across U.S. Climates',
        },
        {
          type: 'table',
          headers: ['Region / Zone', 'Opportunities', 'Challenges', 'Best Approach', 'Regional Stars'],
          rows: [
            ['Pacific Northwest (Zones 7–9, western)', 'Mild temperatures; consistent moisture; long growing season; excellent for most temperate herbs', 'Wet winters cause root rot in Mediterranean herbs; overcast winters reduce light for windowsill growing; slugs on tender plants', 'Raised beds with excellent drainage; gravel mulch around Mediterranean herbs; covered winter protection for lavender and rosemary in northern areas', 'Elderberry (native); California poppy; valerian; skullcap; lemon balm'],
            ['California (Zones 8–11)', 'Warm dry summers ideal for Mediterranean herbs; mild winters allow year-round growing; drought-adapted herbs need minimal irrigation after establishment', 'Summer drought stresses moisture-loving herbs without irrigation; fire-prone areas limit flammable aromatic herbs near structures', 'Drip irrigation; mulch heavily; plant California natives (California poppy, yerba santa) alongside Mediterranean and culinary herbs', 'Lavender; rosemary; California poppy; sage (Salvia apiana native); elderberry'],
            ['Desert Southwest (Zones 7–11)', 'Alkaline soils benefit some herbs; warm season long; monsoon rains can be harnessed; excellent for heat-adapted herbs', 'Extreme summer heat damages many temperate herbs; alkaline soil limits acid-preferring plants; intense UV; limited water', 'Morning sun / afternoon shade positioning; desert-adapted herbs (desert lavender, Mormon tea); deep mulching; shade structures for vulnerable herbs in summer', 'Aloe vera; holy basil; rosemary; oregano; Mexican oregano; desert lavender'],
            ['Mountain West (Zones 4–7)', 'Cool summers ideal for many herbs; less humidity means fewer disease problems; intense sunshine increases essential oil content; excellent soil mineral diversity', 'Short growing season limits tender annuals; cold winters kill many zone-marginal plants; intense UV at altitude; hail risk', 'Cold-hardy herbs as perennial backbone; protect Zone 7 marginally hardy plants in Zone 5–6; extend season with row covers; choose cold-hardy cultivars', 'Echinacea; yarrow; elderberry; valerian; lemon balm; mint family'],
            ['Great Plains (Zones 4–7)', 'Prairie natives are superb medicinal herbs adapted to local conditions; good summer heat; adequate moisture in eastern plains', 'Wind desiccates many herbs; wide temperature swings; western plains drought; alkaline soils in the west; few nursery sources for native medicinals', 'Focus on native prairie medicinals (echinacea, black-eyed Susan, wild bergamot); windbreaks for tender herbs; drip irrigation in drier areas', 'Purple coneflower/echinacea; black-eyed Susan; wild bergamot; elderberry; yarrow'],
            ['Midwest & Great Lakes (Zones 4–7)', 'Four distinct seasons support a wide range of medicinal herbs; excellent summer growing conditions; rich soils; abundant moisture in most years', 'Cold winters require winter protection for zone-marginal herbs; humid summers increase fungal disease pressure', 'Most medicinal herbs grow excellently; focus on good air circulation to reduce fungal issues; winter mulch for marginally hardy perennials', 'Echinacea; elderberry; goldenseal (shade garden); valerian; St. John\'s Wort; black cohosh'],
            ['Mid-Atlantic & Southeast (Zones 6–9)', 'Long growing season; mild winters allow some herbs to overwinter as perennials; humid summers favor moisture-loving herbs', 'High humidity favors fungal diseases; heat and humidity stress Mediterranean herbs in midsummer; fire ant and pest pressure in southern areas', 'Emphasize heat-tolerant and moisture-loving herbs; provide afternoon shade for European herbs in Zone 8+; excellent drainage critical', 'Lemon balm; holy basil; passionflower; elderberry; tulsi; skullcap; St. John\'s Wort'],
            ['New England & Northeast (Zones 4–6)', 'Cool temperatures produce excellent essential oil development in many herbs; adequate moisture; good soil for woodland medicinals', 'Short growing season for tender annuals; cold winters kill marginal species; late spring frosts delay planting', 'Start annuals indoors 6–8 weeks before last frost; focus on cold-hardy perennial herbs; protect marginally hardy herbs with heavy mulch', 'Echinacea; yarrow; valerian; lemon balm; elderberry; goldenseal (shade); boneset; wild bergamot'],
          ],
        },
        {
          type: 'h3',
          text: 'Soil Preparation for Medicinal Herbs',
        },
        {
          type: 'p',
          text: 'Soil preparation for medicinal herbs differs from vegetable garden preparation in one important way: do not overfertilize. Many medicinal plants — especially the Mediterranean aromatics (lavender, thyme, oregano, rosemary, sage) — produce their highest essential oil content when grown in lean, well-drained soil with modest fertility. Pampering these herbs with rich garden soil produces beautiful, lush plants that smell less and heal less.',
        },
        {
          type: 'list',
          items: [
            'For Mediterranean herbs (lavender, thyme, oregano, rosemary, sage): Add coarse sand or pea gravel to improve drainage; avoid heavy compost additions; pH 6.5–7.5; no high-nitrogen fertilizers',
            'For woodland herbs (goldenseal, black cohosh, Solomon\'s seal, wild ginger): Incorporate leaf mold and compost generously; acidic pH 5.5–6.5; consistently moist but well-draining; dappled shade',
            'For meadow and prairie herbs (echinacea, yarrow, black-eyed Susan, wild bergamot): Average garden soil with good drainage; moderate compost; these are native prairie plants that do not need rich soil',
            'For moisture-loving herbs (skullcap, blue vervain, marshmallow, meadowsweet): Rich, consistently moist soil; compost heavily; will tolerate heavy soils better than most herbs',
            'Universal principle: Excellent drainage is more important than fertility for most medicinal herbs; a raised bed prevents the waterlogging that kills more medicinal herbs than any other single cause',
          ],
        },
      ],
    },
    {
      id: 'harvesting-drying-preservation',
      title: 'Section 3: Harvesting, Drying & Preservation',
      blocks: [
        {
          type: 'p',
          text: 'Harvesting at the right time is the most underappreciated aspect of home herbalism. The same plant harvested at peak potency versus off-peak can have dramatically different concentrations of active compounds — differences that can exceed 50% in studies of timed harvesting. Getting this right means the difference between herbs with real medicinal value and herbs that are essentially dried plant material.',
        },
        {
          type: 'h3',
          text: 'When and How to Harvest Each Plant Part',
        },
        {
          type: 'table',
          headers: ['Plant Part', 'Best Time to Harvest', 'Indicators of Peak Potency', 'Practical Method'],
          rows: [
            ['Aerial parts (leaves, stems, flowers together)', 'Just before or during early bloom, when the plant has reached full vegetative development but has not yet committed its energy to seed production', 'Buds forming or first flowers opening; leaves at full size and vibrant green; maximum essential oil aroma', 'Cut stems to 1/3–1/2 of plant height in morning after dew dries but before afternoon heat; use clean sharp scissors or pruning shears; do not pull or tear'],
            ['Leaves only', 'Before flowering for most medicinal herbs; the plant\'s energy and chemistry is focused in leaves before it shifts to reproduction', 'Leaves fully expanded but still vibrant and unblemished; before flowering stalks elongate', 'Harvest individual leaves or full stems; strip dried or yellowing leaves; harvest outer leaves first on rosette plants'],
            ['Flowers', 'At first opening or when just fully opened — the precise moment varies by plant but the general rule is harvest before pollen is released and before any browning begins', 'Petals fully open; color vibrant; pollen not yet scattered (anthers still closed or just opening); no browning at petal edges', 'Harvest by hand or with scissors; harvesting into a wide shallow basket preserves flower structure; avoid harvesting in heavy dew (mold risk)'],
            ['Roots', 'In fall for perennials (after aerial parts have died back and the plant has moved its energy reserves into roots) or in very early spring before growth resumes', 'Autumn: after first frost, stems brown and fallen; spring: before shoots emerge from ground; roots typically contain highest compound concentration at these times', 'Dig carefully with a digging fork or hand fork; wash soil off roots; for perennial plants, harvest only a portion (1/3 or less) of root system to allow plant recovery; for annuals, harvest the full root at plant\'s end of life'],
            ['Bark', 'Spring (cambium most active, easiest to peel) or fall; from branches removed by pruning rather than from trunk (to protect plant health)', 'Cambium layer is bright and moist; inner bark has characteristic color and aroma of the species', 'Strip from pruned branches 1–3 inches in diameter; never girdle a living tree by removing bark all the way around (kills the tree); scrape off outer rough bark to reach the medicinally active inner bark (cambium layer)'],
            ['Seeds and berries', 'At full maturity — seeds fully formed, berries deeply colored; some seeds are harvested slightly before full maturity to prevent shattering', 'Seeds: brown, firm, and separating from seed head; berries: full color, firm-to-soft depending on species', 'For small seeds: cut whole seed heads into paper bags and allow to dry further; for berries: hand-pick at ripeness; test a few by cutting open to verify seed development'],
            ['Resin / gum', 'Typically harvested in fall or spring when flow is active; from cuts in bark that allow resin to accumulate', 'Resin flowing freely from natural wounds or cuts; high aromatic quality', 'Make small cuts in bark; collect accumulated resin; allow 1–2 weeks between harvests from the same site; applicable to specific trees and shrubs (pine, myrrh, calendula flowers excrete resin)'],
          ],
        },
        {
          type: 'tip',
          emoji: '⏰',
          text: 'Time of Day Matters: Harvest most aerial parts (leaves, flowers, stems) in the morning after the dew has dried but before the afternoon heat drives off essential oils — typically 9 AM to noon. This is when essential oil content is highest. Root harvesting time of day matters less than season. Avoid harvesting any part immediately after rain (diluted compounds, mold risk) or during extreme heat (volatile oils dissipate rapidly).',
        },
        {
          type: 'h3',
          text: 'Drying Methods for Medicinal Quality',
        },
        {
          type: 'p',
          text: 'Drying is the transformation point where fresh plant material becomes a stable, preservable medicine. Done correctly, drying preserves most of the plant\'s active compounds. Done poorly — too slow, too hot, or with too much light — drying degrades the very compounds you\'re trying to preserve.',
        },
        {
          type: 'table',
          headers: ['Drying Method', 'Best For', 'Temperature', 'Drying Time', 'Advantages', 'Watch Out For'],
          rows: [
            ['Hanging bunches (air drying)', 'Robust herbs with low moisture content: lavender, rosemary, thyme, oregano, sage, yarrow, St. John\'s Wort; aerial parts generally', '65–90°F in dry conditions; below 90°F to preserve volatile oils', '1–3 weeks depending on humidity and plant moisture content', 'Free; no equipment; maintains beautiful form for ornamental value; no heat damage to volatile oils', 'Requires low humidity (below 60% RH); in humid climates, hanging bunches may mold before drying; dust accumulation; slow'],
            ['Screen or mesh rack drying', 'Flowers (lay flat in a single layer); roots (sliced thin); any plant material in humid climates where hanging risks mold; high-moisture herbs (lemon balm, basil)', '65–90°F with good air circulation; elevate screens for airflow beneath', '1–2 weeks typically; flowers often faster', 'Better air circulation than hanging; allows monitoring of each piece; ideal for flowers; faster in humid climates', 'Needs rack or screen equipment; flowers can stick to screens if not turned; needs dedicated space'],
            ['Dehydrator', 'Any part; especially good for thick roots, high-moisture herbs (comfrey, marshmallow root), and in high-humidity climates; fastest reliable method', '95–115°F maximum for herb leaves and flowers; 115–125°F for roots and bark; NEVER higher — destroys active compounds', '2–12 hours depending on part and moisture content', 'Consistent results; fast; works in any climate and weather; reduces mold risk dramatically; year-round use', 'Equipment cost ($40–200 for quality dehydrator); electricity cost; check temperature carefully — many dehydrators run hotter than labeled'],
            ['Oven drying (lowest setting)', 'Emergency drying only; not recommended for aromatic herbs', 'Lowest possible oven setting, typically 170–200°F — too hot for most active compounds; use only with door propped open', '1–4 hours', 'Everyone has an oven; fast', 'Most ovens run too hot for proper herb drying; destroys many volatile oils and heat-sensitive compounds; poor results for aromatic herbs; use a dehydrator instead'],
            ['Microwave drying (short duration)', 'Small batches of leaves only; for quick drying, not for compounds sensitive to heat or microwave radiation', 'Microwave heat — not ideal for most medicinal purposes', '30–90 seconds in bursts with cooling', 'Fast; convenient for small amounts', 'Degrades heat-sensitive and microwave-sensitive compounds; not appropriate for roots; only for small convenience drying, not medicinal quality production'],
            ['Freeze drying (commercial method)', 'Any plant material; preserves highest percentage of active compounds of any drying method', 'Freezing temperatures (below 0°F) with vacuum; not practical for home use', 'Hours to days in commercial equipment', 'Superior compound preservation; excellent color and aroma retention; longest shelf life', 'Expensive specialized equipment ($2,000+); impractical for home use; buy freeze-dried products from quality suppliers if this quality level is needed'],
          ],
        },
        {
          type: 'h3',
          text: 'Storage for Medicinal Longevity',
        },
        {
          type: 'p',
          text: 'Properly dried and stored medicinal herbs retain most of their potency for 1–3 years depending on the plant part and storage conditions. The three enemies of herb potency are light, heat, and moisture — design your storage system to exclude all three.',
        },
        {
          type: 'list',
          items: [
            'Containers: Amber glass jars with tight-fitting lids are ideal — they block UV light while allowing you to see the contents; clear glass must be stored in a dark location; never store herbs long-term in plastic (plastic is gas-permeable; aromatic compounds escape; some plastics leach into herbs)',
            'Location: Cool, dark, and dry — pantry shelves away from the stove; a dedicated herb cabinet; a drawer or cupboard. Kitchen windowsills look beautiful but are the worst possible location — they expose herbs to light, heat, and steam from cooking.',
            'Labeling: Label every container with herb name, part used, harvest date, and source (homegrown, wild-harvested, purchased). This is not optional — six months from now you will not remember which unlabeled jar is marshmallow root and which is dandelion root.',
            'Shelf life guidelines: Volatile oil-rich herbs (lavender, rosemary, thyme) retain potency 1–2 years; most dried leaves and flowers 1–2 years; roots and bark 2–3 years; seeds 2–4 years. Mark jars with a "use by" date at time of storage.',
            'Testing potency: Crush a small amount between your fingers — dried herbs should still release a clear aroma. Taste a small amount — taste should be present and characteristic. If herb is odorless and tasteless, it has lost potency and should be composted and replaced.',
          ],
        },
      ],
    },
    {
      id: 'preparing-herbal-remedies',
      title: 'Section 4: Preparing Herbal Remedies',
      blocks: [
        {
          type: 'p',
          text: 'The gap between a jar of dried herbs and a usable herbal remedy is the art of preparation. Different plant compounds are extracted by different solvents — some are water-soluble (extracted by tea or decoction), others are alcohol-soluble (extracted by tinctures), others are fat-soluble (extracted by infused oils). Understanding which extraction method suits which herb and which application is the practical foundation of home herbalism.',
        },
        {
          type: 'h3',
          text: 'Herbal Teas, Infusions & Decoctions',
        },
        {
          type: 'p',
          text: 'An infusion — what most people call herbal tea — is the simplest and one of the most effective herbal preparations for delicate plant parts like leaves and flowers. It extracts water-soluble compounds including volatile essential oils, water-soluble vitamins, and many active constituents.',
        },
        {
          type: 'table',
          headers: ['Preparation Type', 'Method', 'Best For', 'Dosage'],
          rows: [
            ['Standard infusion (tea)', 'Steep 1–2 teaspoons dried herb (or 2–4 teaspoons fresh herb) per cup of just-boiled water, covered, for 5–15 minutes. The cover is important — it traps volatile essential oils that would otherwise evaporate. Strain and drink.', 'Leaves, flowers, and soft aerial parts', '2–4 cups per day during acute conditions; 1–2 cups daily for tonic or preventive use'],
            ['Long infusion (nourishing infusion)', 'Steep 1 ounce dried herb per quart of just-boiled water, covered and sealed, for 4–8 hours or overnight. Extracts a much higher concentration of minerals, water-soluble vitamins, and other compounds than a brief tea.', 'Nutritive herbs: nettles, oatstraw, red clover, comfrey leaf', '1–2 cups daily'],
            ['Decoction', 'Simmer hard plant materials in water at a gentle simmer for 20–45 minutes. Use 1 tablespoon dried material per cup water; begin with cold water; bring to gentle simmer; cover; strain.', 'Roots, bark, seeds, dense berries — elderberry, astragalus, licorice root, burdock root, valerian root, cinnamon', '2–3 cups per day as directed'],
            ['Cold infusion', 'Place herbs in cold water in a covered jar; steep overnight in the refrigerator.', 'Mucilaginous herbs like marshmallow root — cold water preserves intact mucilaginous compounds that hot water partially degrades', '1–2 cups per day'],
            ['Sun tea', 'Place herbs in cold water in a clear jar; set in full sun for 4–6 hours.', 'Delicate herbs for culinary enjoyment; limited medicinal potency; consume same day (bacterial growth risk in warm water)', 'As desired — same day only'],
          ],
        },
        {
          type: 'h3',
          text: 'Tinctures: Alcohol Extractions',
        },
        {
          type: 'p',
          text: 'A tincture is a concentrated herbal extract made by steeping plant material in alcohol, which extracts a broader range of compounds than water alone — including resinous, oily, and many bioactive compounds that don\'t extract well into water. Tinctures are more concentrated than teas, have a long shelf life (3–5 years), and allow precise dosing.',
        },
        {
          type: 'h3',
          text: 'Folk Method (Simple Ratio Method)',
        },
        {
          type: 'list',
          items: [
            'Fill a clean glass jar loosely with fresh herbs or half-full with dried herbs',
            'Cover completely with 80-proof vodka (40% alcohol) for most herbs; 190-proof grain alcohol diluted to 60% for resins, fresh roots, and very tough plant materials',
            'Seal tightly; shake daily; steep for 4–6 weeks in a cool dark location',
            'Strain through cheesecloth or muslin, squeezing all liquid from the marc (plant material)',
            'Bottle in amber dropper bottles; label with herb, date, and alcohol used; store in cool dark location',
            'Standard adult dose: 30–60 drops (1–2 ml) in water, 2–3 times daily; adjust based on herb-specific guidance',
          ],
        },
        {
          type: 'h3',
          text: 'Weight-to-Volume Method (More Precise)',
        },
        {
          type: 'list',
          items: [
            '1:5 ratio (standard for dried herbs): 1 gram dried herb to 5 ml menstruum (solvent); weigh 200g dried herb; measure 1,000 ml alcohol-water mixture at appropriate percentage for the herb',
            '1:2 ratio (standard for fresh herbs): 1 gram fresh herb to 2 ml solvent; fresh herbs contain water which dilutes the solvent, so less liquid is added',
            'Alcohol percentage by herb type — Dried leaf and flower: 50–60% alcohol; Resins, high-resin roots: 70–90% alcohol; Mucilaginous herbs: 25–40% alcohol (more water for mucilage extraction); Dried roots, bark, and seeds: 50–70% alcohol',
          ],
        },
        {
          type: 'tip',
          emoji: '🍯',
          text: 'Non-Alcohol Alternatives (Glycerites): For those avoiding alcohol — children, recovering alcoholics, or those preferring alcohol-free preparations — vegetable glycerin can replace alcohol as the extracting solvent. Glycerites are sweet-tasting but extract fewer compounds than alcohol and have a shorter shelf life (1–2 years). Use 60–70% food-grade vegetable glycerin and 30–40% water. Preparation method is identical to alcohol tinctures.',
        },
        {
          type: 'h3',
          text: 'Infused Oils',
        },
        {
          type: 'p',
          text: 'Infused oils extract fat-soluble compounds from plant material and form the base of salves, balms, and topical applications. They are NOT the same as essential oils (which are concentrated aromatic distillates requiring specialized equipment). Infused oils are simple kitchen preparations.',
        },
        {
          type: 'list',
          items: [
            'Cold infusion method (best for volatile herbs): Fill a clean glass jar with dried herbs (fresh herbs must be wilted 12–24 hours first to reduce moisture that causes rancidity); cover completely with olive oil, jojoba, sunflower, or sweet almond oil; seal tightly; place in a warm sunny spot (70–80°F) for 4–6 weeks, shaking daily; strain through cheesecloth; bottle in amber glass; refrigerate for up to 1 year',
            'Warm infusion method (faster): Place herbs and oil in a double boiler or slow cooker set to lowest setting (100–110°F); maintain low temperature for 4–8 hours, stirring occasionally — do not allow oil to exceed 140°F or simmer (destroys volatile compounds and degrades oil); strain and bottle as above',
            'Best herbs for infused oils: calendula (classic wound-healing oil), St. John\'s Wort (pain relief; anti-inflammatory), lavender (calming; antiseptic), comfrey (tissue healing), plantain (drawing; anti-inflammatory), arnica (bruises; muscle pain — for external use only)',
          ],
        },
        {
          type: 'h3',
          text: 'Salves and Balms',
        },
        {
          type: 'p',
          text: 'A salve is simply an infused oil that has been thickened with beeswax (or candelilla wax for a vegan alternative) to produce a solid or semi-solid topical preparation. It is one of the most versatile and useful preparations in the home herbalist\'s repertoire.',
        },
        {
          type: 'list',
          items: [
            'Prepare infused oil by either method above',
            'The standard ratio: 1 ounce beeswax per 8 ounces of infused oil produces a medium-firm salve; for a softer balm, use less wax; for a harder lip balm or stick, use more',
            'Melt beeswax in a double boiler; add infused oil and stir to combine; test consistency by placing a small amount on a cold plate — adjusting wax up or down as needed',
            'Remove from heat; add any essential oils at this point (10–15 drops per ounce if desired); pour immediately into clean tins or small glass jars before the wax begins to set',
            'Allow to cool undisturbed; label and date; shelf life 1–2 years stored at room temperature away from heat and light',
          ],
        },
        {
          type: 'h3',
          text: 'Other Preparation Methods',
        },
        {
          type: 'table',
          headers: ['Preparation', 'Method', 'Best Applications', 'Notes'],
          rows: [
            ['Poultice', 'Mash or process fresh herbs into a paste and apply directly to skin; hold in place with a cloth bandage. Alternatively, moisten dried herbs with hot water to soften.', 'Fresh plantain poultice for bee stings and insect bites; comfrey poultice for bruises and sprains; cabbage poultice for inflammation', 'The classic field medicine application: chew a fresh plantain leaf and apply immediately to insect stings'],
            ['Compress', 'Soak a clean cloth in strong herbal tea or diluted tincture; wring out; apply to affected area. Hot compress for muscle tension, sinus congestion, cramping. Cold compress for fever, inflammation, headache.', 'Larger surface topical application; more comfortable than poultice for some situations', 'Allows easy reapplication by re-soaking cloth in warm tea'],
            ['Liniment', 'Herbal preparation in alcohol (or vinegar) designed for external use on muscles and joints — NOT for internal use. Make similarly to a tincture using rubbing alcohol or high-proof grain alcohol; apply externally.', 'Arnica liniment for bruises and sports injuries; camphor liniment for muscle pain', 'Label clearly "FOR EXTERNAL USE ONLY"; keep out of reach of children'],
            ['Capsules & powders', 'Grind dried herbs to powder in a dedicated coffee grinder; fill into empty vegetable capsules (size 00 holds ~500mg). Standard adult dose: 1–3 capsules, 2–3 times daily.', 'Herbs with strong or unpleasant taste: valerian, turmeric, marshmallow root', 'Coffee grinder dedicated to herbs only; clean between herbs to avoid flavor cross-contamination'],
            ['Oxymel', 'Equal parts raw honey and apple cider vinegar; add herbs; steep for 4–6 weeks; strain. Dose: 1–2 tablespoons as needed.', 'Respiratory herbs (thyme, elderberry, elecampane); excellent for children', 'Not for children under 1 year due to honey/botulism risk'],
            ['Herb-infused honey', 'Gently warm raw honey (110°F maximum — preserves beneficial enzymes); add fresh or dried herbs; steep for 2–4 weeks; strain or leave herbs in honey.', 'Lavender honey, thyme honey (excellent for coughs), ginger honey', 'Antimicrobial honey combined with medicinal herbs creates a synergistic preparation'],
          ],
        },
      ],
    },
  ],
}
