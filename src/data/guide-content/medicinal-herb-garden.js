export const medicinalHerbGardenContent = {
  id: 'medicinal-herb-garden',
  hero: {
    emoji: '🌿',
    title: 'Medicinal Herb Garden',
    subtitle: 'Time-Honored Healing Herbs You Can Grow and Use at Home',
  },
  intro: 'Humans have grown medicinal herbs for as long as we have grown anything at all. Long before the first pharmacies, every household garden held plants for healing — lavender for calm, chamomile for sleep, echinacea for illness, mint for digestion. This guide reconnects you to that tradition: which plants to grow, how to cultivate them across every American climate, how to harvest and preserve their medicinal qualities, how to combine herbs into effective formulas, how to plan your year-round herb practice, and how to build a home apothecary that is genuinely useful every season. Always consult your healthcare provider when health matters are serious.',
  sections: [
    {
      id: 'safety-ethics-legal',
      title: 'Section 1: Safety, Ethics & Legal Framework',
      blocks: [
        {
          type: 'p',
          text: 'Medicinal herbs are not a category separate from medicine — they are the oldest form of medicine, and many of our most important pharmaceutical drugs are derived from or modeled on plant compounds. This heritage means that medicinal herbs carry both genuine therapeutic value and real potential for harm when used incorrectly. The home herbalist who treats this knowledge seriously — who learns to use plants thoughtfully, understands their limits, and respects the boundaries between self-care and medical treatment — will have a safe, enriching, and genuinely beneficial practice.',
        },
        {
          type: 'h3',
          text: 'The Non-Negotiable Safety Rules',
        },
        {
          type: 'list',
          items: [
            'Consult a healthcare provider for serious conditions: Medicinal herbs are appropriate for minor ailments, wellness support, and adjunct care — not as the primary treatment for serious illness, chronic disease requiring management, or emergencies. When in doubt, see a doctor first.',
            'Never stop prescribed medication to use herbs instead without medical supervision: Many people are harmed each year by discontinuing effective conventional treatment in favor of herbal alternatives. Herbs and pharmaceuticals can complement each other, but always with physician knowledge and guidance.',
            'Drug-herb interactions are real: Dozens of well-documented interactions exist between common herbs and pharmaceutical drugs. St. John\'s Wort alone interacts with 70+ drugs. Garlic thins blood similarly to warfarin. Always tell your healthcare providers what herbs you are taking.',
            'Correct identification is essential: Before using any plant medicinally, be absolutely certain of its identification. Dangerous lookalikes exist — poison hemlock resembles Queen Anne\'s lace; water hemlock resembles elderberry. Use multiple identification resources; grow from identified nursery stock rather than wild-harvesting until you have expert-level identification skills.',
            'Pregnant and breastfeeding women require special caution: Many medicinal herbs are contraindicated during pregnancy. Some — blue cohosh, pennyroyal, tansy — can cause miscarriage. Always consult your midwife or obstetrician before using any medicinal herb beyond common culinary levels.',
            'Children require adjusted doses: Herb doses for children are significantly lower than adult doses; many herbs are not appropriate for young children. Consult a qualified practitioner for appropriate dosing.',
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
            ['St. John\'s Wort', 'Antidepressants (SSRIs), blood thinners (warfarin), birth control pills, HIV medications, cyclosporine, digoxin, many chemotherapy agents', 'Induces CYP enzymes — accelerates breakdown of many drugs, reducing their effectiveness; combining with SSRIs risks serotonin syndrome', 'HIGH — one of the most significant herb-drug interactions known; do not use with any prescription medications without physician approval'],
            ['Garlic (high-dose supplements)', 'Warfarin; aspirin; other antiplatelet drugs; HIV medications', 'Antiplatelet and anticoagulant effects enhance bleeding risk; may reduce effectiveness of some HIV drugs', 'MODERATE — culinary amounts generally safe; high-dose supplements significantly increase bleeding risk, especially perioperatively'],
            ['Ginkgo biloba', 'Warfarin; aspirin; NSAIDs; SSRIs; MAOIs', 'Antiplatelet properties increase bleeding risk; may enhance or interfere with antidepressant effects', 'MODERATE — significant bleeding risk with anticoagulants; stop 2 weeks before surgery'],
            ['Valerian', 'Sedatives; benzodiazepines; barbiturates; alcohol; anesthesia', 'Additive CNS depressant effects; may enhance sedation unpredictably', 'MODERATE — avoid with prescription sedatives; stop 2 weeks before surgery'],
            ['Echinacea', 'Immunosuppressants; corticosteroids; certain antifungals', 'Immune stimulation may counteract immunosuppressant therapy', 'LOW-MODERATE — primary concern for transplant patients on immunosuppressants'],
            ['Kava', 'Alcohol; benzodiazepines; liver-processed medications', 'Additive liver stress; additive CNS depression; hepatotoxicity risk', 'HIGH — avoid with alcohol or hepatotoxic medications; not for those with liver disease'],
            ['Licorice root (high-dose)', 'Antihypertensives; diuretics; digoxin; corticosteroids', 'Raises blood pressure; potassium loss that can amplify digoxin toxicity dangerously', 'HIGH with digoxin — avoid high-dose or long-term licorice root use'],
            ['Feverfew', 'Warfarin; aspirin; NSAIDs; other antiplatelet drugs', 'Antiplatelet effects increase bleeding risk', 'MODERATE — do not use with blood thinners; stop 2 weeks before surgery'],
            ['Ginseng (Panax)', 'Warfarin; stimulants; diabetes medications; MAOIs; estrogens', 'Anticoagulant effects; may lower blood sugar excessively with diabetes drugs', 'MODERATE — monitor blood sugar with diabetes medications; avoid with MAOIs and warfarin'],
            ['Black Cohosh', 'Hormone-sensitive medications; tamoxifen; hepatotoxic drugs', 'Weak estrogenic activity may interact with hormone therapies; rare liver toxicity reports', 'LOW-MODERATE — avoid with hormone-sensitive cancers; monitor liver function with extended use'],
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
          type: 'table',
          headers: ['Topic', 'What the Law Says', 'Practical Guidance'],
          rows: [
            ['Federal regulation', 'The FDA regulates herbs sold as dietary supplements under DSHEA (1994). Herbs cannot be marketed to diagnose, treat, cure, or prevent specific diseases. Growing and using herbs in your own home is not regulated by the FDA.', 'Personal home growing and use is entirely unrestricted at the federal level.'],
            ['Growing for personal use', 'No federal restrictions on growing medicinal herbs for personal use. Some states regulate specific plants (kratom is banned or regulated in several states).', 'Check your state\'s laws for any plants you\'re uncertain about.'],
            ['Wild harvesting', 'Typically requires a permit on federal lands for commercial quantities; personal-use amounts often allowed but verify with the specific land management agency.', 'Never wild-harvest without permission on private land. Many state parks prohibit any plant collection.'],
            ['Sharing and selling', 'Sharing herbs with family and friends is generally unregulated. Selling herbal products subjects you to FDA oversight and state food safety regulations. Selling herbs with medical claims is illegal under federal law.', 'Formal herbalism practice is regulated differently by each state — many allow traditional herbalism consultation without licensure.'],
            ['Endangered species', 'American ginseng, goldenseal, and black cohosh are all of conservation concern due to overharvesting.', 'Prioritize garden-grown over wild-harvested specimens. Check the USDA Plants Database and your state\'s natural heritage program for protected status.'],
          ],
        },
      ],
    },
    {
      id: 'growing-medicinal-herb-garden',
      title: 'Section 2: Growing the Medicinal Herb Garden',
      blocks: [
        {
          type: 'p',
          text: 'A medicinal herb garden can be as simple as three pots on a windowsill or as elaborate as a formal physic garden with dozens of species organized by medicinal application. The fundamentals are not dramatically different from culinary herb growing — most medicinal plants are not difficult to grow and many thrive with minimal care once established. What distinguishes medicinal herb growing is attention to harvest timing and method, because the concentration of active compounds varies significantly by growth stage, time of day, and season.',
        },
        {
          type: 'h3',
          text: 'Siting the Medicinal Herb Garden',
        },
        {
          type: 'table',
          headers: ['Site Factor', 'Optimal Conditions', 'Acceptable Range', 'Problem Situations'],
          rows: [
            ['Sunlight', 'Full sun (6+ hours) for most Mediterranean herbs; partial shade (3–5 hours) for woodland herbs (goldenseal, black cohosh, wild ginger)', 'Most sun-lovers tolerate 4–5 hours; most shade-lovers handle morning sun with afternoon shade', 'Deep shade produces weak, leggy plants with reduced essential oil content; harsh afternoon-only sun stresses shade-lovers'],
            ['Soil drainage', 'Excellent drainage for Mediterranean herbs; consistently moist but well-drained for woodland and meadow herbs; wet conditions for skullcap, blue vervain, marshmallow', 'Most herbs tolerate average garden drainage; poor drainage is the most common site failure', 'Waterlogged soil kills most medicinal herbs within weeks; raised beds solve drainage problems universally'],
            ['Soil pH', '6.0–7.0 for most herbs; lavender/rosemary/thyme prefer 6.5–7.5; goldenseal prefers 5.5–6.5', 'Broad tolerance in the 5.5–7.5 range', 'Very alkaline soils (above 7.5) reduce iron availability; very acidic soils (below 5.0) problematic for most herbs'],
            ['Soil fertility', 'Moderate — NOT excessively rich; overly fertile soil produces lush growth with lower essential oil content; Mediterranean herbs prefer lean, well-drained soil', 'Add compost at planting for structure and micronutrients; avoid heavy fertilization', 'Overfertilized herbs produce beautiful plants with dramatically reduced medicinal value'],
            ['Air circulation', 'Good airflow reduces fungal disease pressure; lavender, chamomile, and echinacea particularly prone to crown rot in still, humid air', 'Avoid planting in corners with no air movement', 'Still, humid microclimates promote powdery mildew, crown rot, and root rot — the primary herb garden disease problems'],
          ],
        },
        {
          type: 'h3',
          text: 'Medicinal Herb Growing Across U.S. Climates',
        },
        {
          type: 'table',
          headers: ['Region / Zone', 'Opportunities', 'Challenges', 'Best Approach', 'Regional Stars'],
          rows: [
            ['Pacific Northwest (Zones 7–9)', 'Mild temperatures; consistent moisture; long growing season', 'Wet winters cause root rot in Mediterranean herbs; slugs on tender plants', 'Raised beds with excellent drainage; gravel mulch around Mediterranean herbs', 'Elderberry; valerian; skullcap; lemon balm; California poppy'],
            ['California (Zones 8–11)', 'Warm dry summers ideal for Mediterranean herbs; mild winters allow year-round growing', 'Summer drought stresses moisture-loving herbs without irrigation; fire risk', 'Drip irrigation; mulch heavily; California natives alongside Mediterranean herbs', 'Lavender; rosemary; California poppy; elderberry; sage'],
            ['Desert Southwest (Zones 7–11)', 'Excellent for heat-adapted herbs; monsoon rains harvestable', 'Extreme summer heat damages temperate herbs; alkaline soil; intense UV', 'Morning sun/afternoon shade positioning; deep mulching; shade for vulnerable herbs in summer', 'Aloe vera; holy basil; rosemary; oregano; desert lavender'],
            ['Mountain West (Zones 4–7)', 'Cool summers ideal; intense sunshine increases essential oil content', 'Short growing season; cold winters; intense UV; hail risk', 'Cold-hardy herbs as backbone; row covers for season extension; choose cold-hardy cultivars', 'Echinacea; yarrow; elderberry; valerian; lemon balm; mint'],
            ['Great Plains (Zones 4–7)', 'Native prairie medicinals superb in local conditions; good summer heat', 'Wind desiccates herbs; alkaline soils in west; drought on western plains', 'Focus on native prairie medicinals; windbreaks for tender herbs; drip irrigation in drier areas', 'Purple coneflower; black-eyed Susan; wild bergamot; elderberry; yarrow'],
            ['Midwest & Great Lakes (Zones 4–7)', 'Four distinct seasons; excellent summer growing; rich soils; abundant moisture', 'Humid summers increase fungal disease pressure; cold winters for marginal herbs', 'Most medicinal herbs grow excellently; focus on air circulation; winter mulch for marginally hardy plants', 'Echinacea; elderberry; goldenseal (shade); valerian; St. John\'s Wort'],
            ['Mid-Atlantic & Southeast (Zones 6–9)', 'Long growing season; mild winters; humid summers favor moisture-loving herbs', 'High humidity favors fungal diseases; heat stresses Mediterranean herbs in summer', 'Emphasize heat-tolerant herbs; provide afternoon shade for European herbs in Zone 8+; excellent drainage', 'Lemon balm; holy basil; passionflower; elderberry; skullcap; St. John\'s Wort'],
            ['New England & Northeast (Zones 4–6)', 'Cool temperatures produce excellent essential oil development; adequate moisture', 'Short growing season; cold winters; late spring frosts delay planting', 'Start annuals indoors 6–8 weeks before last frost; focus on cold-hardy perennials', 'Echinacea; yarrow; valerian; lemon balm; elderberry; goldenseal; boneset'],
          ],
        },
        {
          type: 'h3',
          text: 'Soil Preparation by Herb Type',
        },
        {
          type: 'list',
          items: [
            'Mediterranean herbs (lavender, thyme, oregano, rosemary, sage): Add coarse sand or pea gravel to improve drainage; avoid heavy compost; pH 6.5–7.5; no high-nitrogen fertilizers — lean soil produces more essential oils',
            'Woodland herbs (goldenseal, black cohosh, Solomon\'s seal, wild ginger): Incorporate leaf mold and compost generously; acidic pH 5.5–6.5; consistently moist but well-draining; dappled shade required',
            'Meadow and prairie herbs (echinacea, yarrow, wild bergamot): Average garden soil with good drainage; moderate compost; do not over-enrich — these are native prairie plants that thrive in lean conditions',
            'Moisture-loving herbs (skullcap, marshmallow, blue vervain): Rich, consistently moist soil; compost heavily; will tolerate heavy soils better than most herbs',
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
          text: 'Harvesting at the right time is the most underappreciated aspect of home herbalism. The same plant harvested at peak potency versus off-peak can have dramatically different concentrations of active compounds — differences that can exceed 50% in studies of timed harvesting. Getting this right means the difference between herbs with real medicinal value and essentially dried plant material.',
        },
        {
          type: 'h3',
          text: 'When and How to Harvest Each Plant Part',
        },
        {
          type: 'table',
          headers: ['Plant Part', 'Best Time to Harvest', 'Indicators of Peak Potency', 'Practical Method'],
          rows: [
            ['Aerial parts (leaves, stems, flowers together)', 'Just before or during early bloom, when plant has reached full vegetative development but has not yet committed energy to seed production', 'Buds forming or first flowers opening; leaves at full size and vibrant green; maximum essential oil aroma', 'Cut stems to 1/3–1/2 of plant height in morning after dew dries; use clean sharp scissors; do not pull or tear'],
            ['Leaves only', 'Before flowering for most medicinal herbs; plant\'s energy and chemistry is focused in leaves before it shifts to reproduction', 'Leaves fully expanded but still vibrant and unblemished; before flowering stalks elongate', 'Harvest individual leaves or full stems; strip dried or yellowing leaves; harvest outer leaves first on rosette plants'],
            ['Flowers', 'At first opening or when just fully opened; harvest before pollen is released and before any browning begins', 'Petals fully open; color vibrant; pollen not yet scattered; no browning at petal edges', 'Harvest by hand or scissors into a wide shallow basket; avoid harvesting in heavy dew (mold risk)'],
            ['Roots', 'In fall for perennials (after aerial parts die back) or in very early spring before growth resumes', 'Autumn: after first frost, stems brown and fallen; spring: before shoots emerge; roots contain highest compound concentration at these times', 'Dig carefully with a fork; wash soil off; for perennial plants, harvest only 1/3 or less of root system to allow plant recovery'],
            ['Bark', 'Spring (cambium most active) or fall; from branches removed by pruning rather than from trunk', 'Cambium layer bright and moist; inner bark has characteristic color and aroma', 'Strip from pruned branches 1–3 inches diameter; never girdle a living tree; scrape off outer rough bark to reach active inner bark'],
            ['Seeds and berries', 'At full maturity — seeds fully formed, berries deeply colored', 'Seeds: brown, firm, separating from seed head; berries: full color, firm-to-soft depending on species', 'For small seeds: cut seed heads into paper bags and allow to dry further; for berries: hand-pick at ripeness'],
          ],
        },
        {
          type: 'tip',
          emoji: '⏰',
          text: 'Time of Day Matters: Harvest most aerial parts (leaves, flowers, stems) in the morning after dew has dried but before afternoon heat drives off essential oils — typically 9 AM to noon. This is when essential oil content is highest. Avoid harvesting immediately after rain (diluted compounds, mold risk) or during extreme heat.',
        },
        {
          type: 'h3',
          text: 'Drying Methods for Medicinal Quality',
        },
        {
          type: 'table',
          headers: ['Drying Method', 'Best For', 'Temperature', 'Drying Time', 'Advantages', 'Watch Out For'],
          rows: [
            ['Hanging bunches (air drying)', 'Robust low-moisture herbs: lavender, rosemary, thyme, oregano, sage, yarrow, St. John\'s Wort', '65–90°F in dry conditions; below 90°F to preserve volatile oils', '1–3 weeks depending on humidity', 'Free; no equipment; no heat damage to volatile oils', 'Requires low humidity (below 60% RH); in humid climates, hanging bunches may mold before drying'],
            ['Screen or mesh rack drying', 'Flowers (laid flat, single layer); roots (sliced thin); high-moisture herbs (lemon balm, basil)', '65–90°F with good air circulation; elevate screens for airflow beneath', '1–2 weeks typically; flowers often faster', 'Better air circulation than hanging; ideal for flowers; faster in humid climates', 'Flowers can stick to screens if not turned; needs rack/screen equipment and dedicated space'],
            ['Dehydrator', 'Any part; especially good for thick roots, high-moisture herbs, high-humidity climates; fastest reliable method', '95–115°F maximum for leaves and flowers; 115–125°F for roots and bark; NEVER higher — destroys active compounds', '2–12 hours depending on part and moisture content', 'Consistent results; fast; works in any climate; reduces mold risk dramatically', 'Equipment cost ($40–200); check temperature carefully — many dehydrators run hotter than labeled'],
            ['Oven drying (lowest setting)', 'Emergency drying only; not recommended for aromatic herbs', 'Lowest oven setting (170–200°F) — too hot for most active compounds; use door propped open', '1–4 hours', 'Fast; widely available equipment', 'Most ovens run too hot; destroys many volatile oils and heat-sensitive compounds; use a dehydrator instead'],
          ],
        },
        {
          type: 'h3',
          text: 'Storage for Medicinal Longevity',
        },
        {
          type: 'list',
          items: [
            'Containers: Amber glass jars with tight-fitting lids are ideal — they block UV light while allowing you to see contents; clear glass must be stored in a dark location; never store herbs long-term in plastic',
            'Location: Cool, dark, and dry — pantry shelves away from the stove; a dedicated herb cabinet; never on kitchen windowsills (the worst possible location — light, heat, and steam from cooking)',
            'Labeling: Label every container with herb name, part used, harvest date, and source. This is not optional — six months from now you will not remember which unlabeled jar is marshmallow root and which is dandelion root.',
            'Shelf life: Volatile oil-rich herbs (lavender, rosemary, thyme) retain potency 1–2 years; most leaves and flowers 1–2 years; roots and bark 2–3 years; seeds 2–4 years. Mark jars with a "use by" date.',
            'Testing potency: Crush a small amount between fingers — dried herbs should still release a clear aroma. If odorless and tasteless, the herb has lost potency and should be composted and replaced.',
          ],
        },
      ],
    },
  ],
}
