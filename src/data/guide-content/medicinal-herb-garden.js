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
          type: 'table',
          headers: ['Method', 'How To Make', 'Best For', 'Dose'],
          rows: [
            ['Standard infusion (tea)', 'Steep 1–2 tsp dried herb (or 2–4 tsp fresh) per cup of just-boiled water, covered, for 5–15 minutes. The cover traps volatile essential oils. Strain and drink.', 'Leaves, flowers, and soft aerial parts', '2–4 cups daily for acute conditions; 1–2 cups daily for tonic use'],
            ['Long nourishing infusion', 'Steep 1 oz dried herb per quart of just-boiled water, covered and sealed, for 4–8 hours or overnight. Extracts much higher concentrations of minerals and water-soluble vitamins.', 'Nettles, oatstraw, red clover, lemon balm, chamomile', '1–2 cups daily'],
            ['Decoction', 'Simmer hard plant materials at a gentle simmer for 20–45 minutes. Use 1 tablespoon dried material per cup water; begin cold; simmer covered; strain.', 'Roots, bark, seeds, dense berries — elderberry, hawthorn, valerian root, licorice root, cinnamon', '2–3 cups daily as directed'],
            ['Cold infusion', 'Place herbs in cold water in a covered jar; steep overnight at room temperature or refrigerated.', 'Mucilaginous herbs like marshmallow root — cold water preserves intact mucilage that hot water partially degrades', '1–2 cups daily'],
          ],
        },
        {
          type: 'h3',
          text: 'Tinctures: Alcohol Extractions',
        },
        {
          type: 'h3',
          text: 'Folk Method',
        },
        {
          type: 'list',
          items: [
            'Fill a clean glass jar loosely with fresh herbs or half-full with dried herbs',
            'Cover completely with 80-proof vodka (40% alcohol) for most herbs; 190-proof grain alcohol diluted to 60% for resins, fresh roots, and very tough plant materials',
            'Seal tightly; shake daily; steep for 4–6 weeks in a cool dark location',
            'Strain through cheesecloth, squeezing all liquid from the marc (plant material)',
            'Bottle in amber dropper bottles; label with herb, date, and alcohol used; store in cool dark location',
            'Standard adult dose: 30–60 drops (1–2 ml) in water, 2–3 times daily; adjust based on herb-specific guidance',
          ],
        },
        {
          type: 'h3',
          text: 'Alcohol Percentage by Herb Type',
        },
        {
          type: 'list',
          items: [
            'Dried leaf and flower tinctures: 50–60% alcohol (roughly equal parts 80-proof vodka and water)',
            'Resins, high-resin roots: 70–90% alcohol',
            'Mucilaginous herbs (marshmallow root): 25–40% alcohol (more water for mucilage extraction)',
            'Fresh plant tinctures: 1:2 ratio (1 gram fresh herb to 2 ml solvent); fresh herbs contain water which dilutes the solvent',
            'Non-alcohol alternative (glycerites): Use food-grade vegetable glycerin at 60–70% plus 30–40% water; suitable for children and those avoiding alcohol; sweeter flavor; shorter shelf life (1–2 years)',
          ],
        },
        {
          type: 'h3',
          text: 'Infused Oils & Salves',
        },
        {
          type: 'list',
          items: [
            'Cold infusion (best for volatile herbs): Fill a jar with dried herbs (fresh must be wilted 12–24 hours first); cover completely with olive oil, jojoba, or sweet almond oil; seal; place in a warm spot (70–80°F) for 4–6 weeks, shaking daily; strain; refrigerate up to 1 year',
            'Making a salve: Use 1 oz beeswax per 8 oz infused oil for a medium-firm salve (less for softer balm); melt beeswax in a double boiler; add infused oil; test on a cold plate; add essential oils off heat (10–15 drops/oz); pour into tins immediately; cool undisturbed; shelf life 1–2 years',
          ],
        },
        {
          type: 'h3',
          text: 'Other Key Preparations',
        },
        {
          type: 'table',
          headers: ['Preparation', 'Method', 'Best Applications'],
          rows: [
            ['Poultice', 'Mash or process fresh herbs into a paste; apply directly to skin. Classic: chew fresh plantain leaf and apply immediately for bee stings and insect bites.', 'Minor wounds, bee stings, insect bites, bruises, sprains'],
            ['Compress', 'Soak a clean cloth in strong herbal tea or diluted tincture; wring out; apply. Hot for muscle tension and sinus congestion; cold for fever and inflammation.', 'Muscle pain, headache, sinus congestion, fever, sprains'],
            ['Capsules', 'Grind dried herbs in a dedicated coffee grinder; fill empty vegetable capsules (size 00 = ~500mg). Typical adult dose: 1–3 capsules, 2–3 times daily.', 'Herbs with unpleasant taste: valerian, turmeric, marshmallow root'],
            ['Oxymel', 'Equal parts raw honey and apple cider vinegar; steep herbs 4–6 weeks; strain. Dose: 1–2 tablespoons as needed.', 'Respiratory herbs (thyme, elderberry, elecampane); suitable for children over 1 year'],
            ['Infused honey', 'Gently warm raw honey (110°F max); add fresh or dried herbs; infuse 2–4 weeks; strain or leave herbs in honey.', 'Lavender honey; thyme honey for coughs; ginger honey — antimicrobial synergy'],
            ['Liniment', 'Herbal preparation in alcohol or vinegar for external use only — NOT for internal use. Apply by rubbing into affected area.', 'Arnica for bruises and sports injuries; muscle and joint pain'],
          ],
        },
      ],
    },
    {
      id: 'the-herbs-part-a',
      title: 'Section 5: The Herbs — 30 Complete Profiles (Part A: Herbs 1–15)',
      blocks: [
        {
          type: 'p',
          text: 'Each profile gives you the complete picture: growing requirements, medicinal use, evidence base, best preparation, and critical safety notes. Read the safety notes — they contain herb-specific information that matters, not boilerplate. Profiles continue in Part B (herbs 16–30).',
        },
        {
          type: 'h3',
          text: 'Calming & Sleep Herbs',
        },
        {
          type: 'table',
          headers: ['Herb', 'Zones / Growing', 'Key Medicinal Uses', 'Best Preparation', 'Safety Notes'],
          rows: [
            ['Chamomile (Matricaria chamomilla)', 'All zones as annual; Roman chamomile perennial Zones 4–9. Full sun to part shade; well-drained average soil; self-seeds prolifically.', 'Anxiety and stress; digestive cramping, bloating, IBS (antispasmodic); mild insomnia; wound healing; skin inflammation; infant colic (diluted tea)', 'Tea: 1–2 tsp dried flowers per cup, covered, 5–10 min. Drink 2–3 cups daily for anxiety; 1 cup after meals for digestion. Tincture: 1:5 in 45% alcohol, 30–60 drops.', 'Asteraceae allergy warning — may react if allergic to ragweed, chrysanthemum, marigold. Avoid large medicinal doses in pregnancy (uterine stimulant at high doses).'],
            ['Lavender (Lavandula angustifolia)', 'Zones 5–8 (English); 7–10 (French/Spanish). Full sun essential. Excellent drainage mandatory. Lean soil — do not fertilize. Prone to crown rot in humid climates.', 'Anxiety reduction (strongest clinical evidence); sleep quality; headache (topical); calming skin inflammation; antimicrobial; minor wound care', 'Tea: 1 tsp dried flowers per cup, 5 min before bed. Aromatherapy: diffuser or 2–4 drops on pillow. Infused oil for topical use. Tincture: 1:5 in 60% alcohol, 20–40 drops.', 'Do not take concentrated essential oil internally without professional guidance. Rare contact dermatitis. Theoretical hormonal activity concern with repeated topical use on young children.'],
            ['Valerian (Valeriana officinalis)', 'Zones 4–9. Full sun to part shade; moist rich soil. Reaches 5 ft. Self-seeds. Cats powerfully attracted to dried root.', 'Insomnia (effects build over 2–4 weeks); anxiety and nervous tension; muscle relaxation; menstrual cramping', 'Capsules: 300–600mg standardized extract (0.8% valerenic acid), 30–60 min before bed. Tincture: 1:5 in 60% alcohol, 2–3 ml before bed. Root tea is unpleasantly flavored; most prefer capsules.', 'Additive sedation with benzodiazepines, sedatives, alcohol — avoid combining. Stop 2 weeks before surgery. Paradoxical stimulating effect in some individuals. Avoid in pregnancy.'],
            ['Lemon Balm (Melissa officinalis)', 'Zones 4–9. One of the most shade-tolerant medicinal herbs. Consistent moisture; most soils. Can become weedy — grow in contained area.', 'Anxiety without sedation; cognitive support; digestive antispasmodic; antiviral (Herpes simplex topical cream); mild sleep support', 'Tea: 2–3 tsp fresh leaf or 1–2 tsp dried per cup, 5–10 min. Use fresh or recently dried for best effect. Tincture: 1:5 in 45% alcohol, 30–60 drops 2–3x daily.', 'Thyroid caution: documented thyroid-suppressing activity — avoid in hypothyroidism or with thyroid medications without monitoring. Additive sedation when combined with valerian.'],
          ],
        },
        {
          type: 'h3',
          text: 'Immune & Anti-Infective Herbs',
        },
        {
          type: 'table',
          headers: ['Herb', 'Zones / Growing', 'Key Medicinal Uses', 'Best Preparation', 'Safety Notes'],
          rows: [
            ['Echinacea (E. purpurea / angustifolia)', 'Zones 3–9. Full sun; well-drained soil; drought-tolerant; very cold-hardy. One of the most ornamental medicinal herbs. Do not harvest roots until year 3.', 'Reduction in duration and severity of upper respiratory infections; cold frequency reduction; immune modulation. Best taken at first sign of illness.', 'Tea: 1–2 tsp dried aerial parts per cup, 10 min; or 1 tsp root decocted 15–20 min. Tincture: 3–5 ml, 3–4x daily at illness onset. Use intensively 1–2 weeks; avoid continuous use beyond 8 weeks.', 'Asteraceae allergy caution. Theoretical concern in autoimmune conditions (MS, lupus, RA) — discuss with physician. May reduce immunosuppressant effectiveness in transplant patients.'],
            ['Elderberry (Sambucus nigra)', 'Zones 3–9 (S. canadensis to Zone 3). Full sun to part shade; tolerates wet soil; very fast-growing; reaches 8–12 ft. Plant two varieties for best pollination.', 'Influenza duration and severity reduction; inhibits viral attachment; antioxidant; immune-modulating. Elderflower: fever management, sinus congestion, antiviral.', 'Elderberry syrup: simmer 1 cup dried berries in 2 cups water 20 min; strain; add 1 cup honey when cooled. 1 tbsp daily preventive; 1 tbsp 4x daily during illness. Elderflower tea: 1–2 tsp per cup, 5 min.', 'ALWAYS cook ripe berries — raw berries and all other plant parts contain sambunigrin (cyanogenic glycoside) causing nausea and vomiting. Flowers may be used raw in tea.'],
            ['Garlic (Allium sativum)', 'Zones 3–9 (hardneck); 3–11 (softneck). Plant cloves in fall; harvest following June–July. Full sun; well-drained rich soil. Allicin (key compound) forms only when cells are crushed — allow crushed garlic to rest 10 min before cooking.', 'Cardiovascular protection (blood pressure, antiplatelet, LDL reduction); broad-spectrum antimicrobial; antioxidant; immune-modulating', 'Medicinal dose: 1–2 raw cloves daily, crushed and rested 10 min. Traditional: fire cider, garlic-ginger-honey preparations for antimicrobial use.', 'HIGH supplemental doses significantly increase bleeding risk with warfarin, aspirin, NSAIDs — stop supplements 2 weeks before surgery. GI irritation in sensitive individuals. Topical raw garlic can cause burns — always dilute in oil for skin application.'],
            ['Thyme (Thymus vulgaris)', 'Zones 4–9. Full sun; excellent drainage essential; lean soil. Drought-tolerant. T. vulgaris has best medicinal and culinary qualities.', 'Bronchitis, cough, and respiratory infections (bronchodilator, expectorant, antimicrobial); antifungal; antioxidant. Clinical evidence: equivalent to pharmaceutical cough suppressants.', 'Tea: 1–2 tsp fresh or 1 tsp dried per cup, covered, 10 min; add honey; 3–4 cups daily. Steam inhalation: handful of fresh thyme in hot water. Thyme honey for coughs. Tincture: 1:5 in 60% alcohol, 2–4 ml 3x daily.', 'Avoid concentrated medicinal doses in pregnancy (uterine stimulant at high doses); culinary amounts are fine. Thyme essential oil should not be taken internally without professional guidance.'],
          ],
        },
        {
          type: 'h3',
          text: 'Digestive Herbs',
        },
        {
          type: 'table',
          headers: ['Herb', 'Zones / Growing', 'Key Medicinal Uses', 'Best Preparation', 'Safety Notes'],
          rows: [
            ['Peppermint (Mentha x piperita)', 'Zones 3–11. Part shade to full sun; moist soil. Spreads VERY aggressively by underground stolons — always grow in containers or with a 12-inch physical barrier.', 'IBS (strongest herbal evidence: multiple meta-analyses); nausea including chemotherapy-related; digestive antispasmodic; tension headache (topical); decongestant', 'Tea: 1–2 tsp dried per cup, covered, 5–10 min; drink after meals. Enteric-coated capsules for IBS (must be enteric-coated). Diluted essential oil (2–3 drops in 1 tbsp carrier oil) for headache or muscle pain.', 'Do NOT use for GERD — worsens reflux. Do not apply menthol to face or nostrils of infants/young children (respiratory distress risk). Regular peppermint oil internally causes esophageal spasm — use only enteric-coated capsules for IBS.'],
            ['Ginger (Zingiber officinale)', 'Annual throughout U.S.; perennial Zones 8–11. Rich moist soil; partial shade; warm temps. Excellent container plant in northern climates; dig before first frost.', 'Nausea of any cause (pregnancy, motion sickness, chemotherapy, post-operative); anti-inflammatory (COX-2 inhibitor); osteoarthritis; digestive stimulant', 'Fresh tea: grate 1-inch piece into cup, steep 5–10 min, add honey and lemon. Capsules: 500–1000mg dried ginger, 1–3x daily. Tincture: 1:5 fresh ginger in 60% alcohol, 10–30 drops.', 'High supplemental doses: antiplatelet effect — stop supplements 2 weeks before surgery; caution with warfarin. GI irritation at high doses. Culinary use and moderate tea safe in pregnancy; high supplemental doses need physician awareness.'],
            ['Marshmallow (Althaea officinalis)', 'Zones 3–9. Full sun to part shade; consistently moist to occasionally wet soil; tolerates clay. Tall (4–6 ft). Leave roots in ground 2 years before harvesting for best mucilage.', 'Sore throat and dry cough (mucilage coating); gastritis, ulcers, IBS; urinary tract irritation and inflammation; external wound healing and skin inflammation', 'Cold infusion (BEST): 2 tbsp dried root in 1 quart cold water overnight; strain; drink throughout day. Also: warm root decoction; honey syrup for throat; powdered root as skin poultice.', 'Excellent safety — one of the safest herbs available. Drug absorption: mucilage may slow medication absorption — take medications 1–2 hours before or after marshmallow. Safe in pregnancy and for children.'],
          ],
        },
        {
          type: 'h3',
          text: "Women's Health Herbs",
        },
        {
          type: 'table',
          headers: ['Herb', 'Zones / Growing', 'Key Medicinal Uses', 'Best Preparation', 'Safety Notes'],
          rows: [
            ['Red Raspberry Leaf (Rubus idaeus)', 'Zones 3–9. Full sun; well-drained rich soil; vigorous perennial shrub requiring support. Prune old canes after fruiting. Both fruit and leaves are harvestable.', 'Uterine tonic (traditional third-trimester preparation); menstrual irregularity and cramping; postpartum tonic; highly nutritive (iron, calcium, magnesium)', 'Tea: 1–2 tsp dried leaf per cup, steeped 10–15 min; 1–3 cups daily. Long infusion: 1 oz per quart hot water, steeped 4 hours for higher mineral extraction. Pleasant, mild flavor.', 'Generally considered safe throughout pregnancy by most midwives; some practitioners avoid large doses in first trimester. Very safe and nourishing for non-pregnant women.'],
            ['Chaste Tree Berry / Vitex (Vitex agnus-castus)', 'Zones 6–9. Full sun; well-drained soil; drought-tolerant; heat-loving. Prune in late winter; blooms on new growth. Reaches 10–15 ft; dwarf cultivars available.', 'PMS and PMDD symptom reduction; breast tenderness (mastalgia); menstrual irregularity. Works slowly — requires 3–6 months of consistent use for full effect.', 'Tincture: 1:5 in 60% alcohol, 2–4 ml in the morning (single daily dose). Standardized extract capsules (0.5% agnuside): 20–40mg in the morning. Take consistently — single morning dose is key.', 'Do not use with hormone-sensitive cancers or hormonal medications without medical supervision. May reduce effectiveness of dopamine antagonists. Avoid in pregnancy. Not for those taking fertility drugs without physician guidance.'],
            ['Black Cohosh (Actaea racemosa)', 'Zones 3–8. SHADE required — woodland understory habitat. Rich, moist, well-drained soil (pH 5.5–6.5). Reaches 4–6 ft. Do not harvest roots for 3–5 years. Buy from verified cultivated sources — wild populations are over-harvested.', 'Menopausal symptoms: hot flash reduction, sleep improvement, mood support (multiple positive trials). Also: menstrual cramping, PMS.', 'Tincture: 1:5 in 60% alcohol, 2–4 ml 2x daily. Standardized extract capsules (2.5% triterpenes): 40–80mg daily. Standard course: 6 months of consistent use.', 'Liver caution: rare hepatotoxicity case reports — stop immediately if jaundice, dark urine, or abdominal pain develops; avoid with alcohol or hepatotoxic drugs. Discuss with oncologist before use if history of hormone-sensitive cancer. Not recommended in pregnancy.'],
          ],
        },
      ],
    },
    {
      id: 'the-herbs-part-b',
      title: 'Section 5: The Herbs — 30 Complete Profiles (Part B: Herbs 16–30)',
      blocks: [
        {
          type: 'h3',
          text: 'Nervine & Adaptogenic Herbs',
        },
        {
          type: 'table',
          headers: ['Herb', 'Zones / Growing', 'Key Medicinal Uses', 'Best Preparation', 'Safety Notes'],
          rows: [
            ['Holy Basil / Tulsi (Ocimum tenuiflorum)', 'Annual throughout U.S.; perennial Zones 10–11. Full sun; warm soil (plant after last frost, soil 65°F+); well-drained soil; heat-tolerant. Multiple varieties (Vana, Rama, Krishna). Very productive.', 'Adaptogen: cortisol reduction, blood sugar regulation, cognitive support, anxiety reduction, anti-inflammatory (COX-1/COX-2), antibacterial and antiviral. Most sacred plant in Ayurvedic tradition.', 'Tea: 1–2 tsp fresh or 1 tsp dried per cup, 5–10 min; 2–3 cups daily. Tincture: 1:5 in 45% alcohol; 30–60 drops 2–3x daily. Oxymel (honey-vinegar extract) is an excellent preservation method.', 'Excellent safety profile. Mild anticoagulant — stop 2 weeks before surgery. Monitor blood sugar with diabetes medications. Traditional texts suggest caution in pregnancy (theoretical uterine stimulant).'],
            ['Ashwagandha (Withania somnifera)', 'Annual throughout U.S.; perennial Zones 8–11. Full sun; excellent drainage; lean to moderately fertile soil; drought-tolerant; heat-tolerant. Start from seed indoors 6–8 weeks before last frost. Harvest roots in fall.', 'Most evidence-based adaptogen: significant cortisol reduction; anxiety and stress reduction (comparable to pharmaceuticals in some trials); sleep quality; muscle strength and recovery; testosterone enhancement; anti-inflammatory via withanolides.', 'Root powder: 300–600mg standardized extract (5% withanolides) 1–2x daily. Moon milk: warm milk + ashwagandha + honey + cinnamon. Tincture: 1:5 in 60% alcohol; 3–5 ml 1–2x daily.', 'Thyroid caution: increases thyroid hormone — monitor if hyperthyroid. Autoimmune: use caution. Pregnancy: avoid (uterotonic). May enhance sedative medications.'],
            ['St. John\'s Wort (Hypericum perforatum)', 'Zones 3–8. Full sun to part shade; well-drained soil; drought-tolerant; spreads by seed and rhizome. NOTE: considered invasive or noxious in some western states — check locally before planting outdoors.', 'Most clinically validated herbal antidepressant: mild-moderate depression comparable to SSRIs with fewer side effects (multiple RCTs). Also: anti-inflammatory, antiviral, topical nerve pain and wound healing (red infused oil).', 'Standardized extract: 300mg (0.3% hypericin) 3x daily. Tincture of fresh flowering tops: 1:5 in 60% alcohol; 2–4 ml 3x daily. Red infused oil for topical neuralgia and wound healing.', 'CRITICAL DRUG INTERACTIONS: induces CYP3A4 and P-glycoprotein — serious interactions with warfarin, birth control pills (failure risk), SSRIs (serotonin syndrome), HIV antiretrovirals, cyclosporine, digoxin, chemotherapy. Do NOT use with any prescription medication without physician approval.'],
          ],
        },
        {
          type: 'h3',
          text: 'Skin & Wound Herbs',
        },
        {
          type: 'table',
          headers: ['Herb', 'Zones / Growing', 'Key Medicinal Uses', 'Best Preparation', 'Safety Notes'],
          rows: [
            ['Calendula (Calendula officinalis)', 'All zones as annual; self-seeds prolifically. Full sun to part shade; cool-season plant. Easy from seed; tolerates light frost. Harvest fully open flowers in the morning; deadhead regularly to extend bloom.', 'Premier wound-healing herb: anti-inflammatory, antimicrobial, wound healing acceleration (increased fibroblast migration). Clinical trials for radiation dermatitis, diaper rash, wound healing. Internal: anti-inflammatory digestive support.', 'Infused oil (primary): whole dried flowers in olive oil, cold-infused 4–6 weeks; base for calendula salve. Tea: 1–2 tsp dried flowers per cup, 10 min. Tincture: 1:5 in 60% alcohol; diluted for wound wash.', 'Outstanding external safety. Asteraceae allergy risk. Avoid medicinal doses internally in pregnancy (traditional emmenagogue). One of the best herbs to recommend to beginners.'],
            ['Plantain (Plantago major / P. lanceolata)', 'Zones 3–9 and beyond; found virtually throughout the U.S. Already growing in most lawns and gardens. If cultivating: full sun to shade; any soil; drought-tolerant.', 'Classic first-aid herb: chew fresh leaf and apply to bee sting/insect bite (antihistamine, anti-inflammatory). Tea for sore throat, IBS, UTI; expectorant for cough; wound healing; seeds as bulk laxative.', 'Fresh leaf poultice: chew leaf and apply to sting, bite, or minor wound. Tea: 1–2 tsp dried leaf per cup, 10 min. Infused oil for wound-healing salve (classic combination with calendula).', 'Excellent safety profile. Psyllium-related seed allergy rare; drink adequate water with seeds to prevent GI obstruction. Generally safe in pregnancy and for children.'],
            ['Aloe Vera (Aloe vera)', 'Outdoors: Zones 9–11; container/indoor: all zones. Easy houseplant — fast-draining cactus mix; water thoroughly but allow to dry completely. Produces offsets freely. Tolerates low light indoors.', 'Most widely used topical medicinal plant in America. Burns (first/second degree), radiation dermatitis, sunburn, minor wounds, inflammatory skin conditions. Internal (inner gel only): blood sugar lowering, digestive support.', 'Fresh gel: cut outer leaf, slice open, scoop clear inner gel, apply directly 4–6x daily for burns. Far more potent than commercial products. Refrigerate up to 1 week.', 'Do NOT use yellow latex just under the skin (aloin — harsh laxative, electrolyte disturbances). Do not use on deep wounds or surgical incisions (may delay closure). Blood sugar-lowering effect may enhance diabetes medications.'],
          ],
        },
        {
          type: 'h3',
          text: 'Circulatory, Anti-Inflammatory & Liver Herbs',
        },
        {
          type: 'table',
          headers: ['Herb', 'Zones / Growing', 'Key Medicinal Uses', 'Best Preparation', 'Safety Notes'],
          rows: [
            ['Hawthorn (Crataegus monogyna / C. laevigata)', 'Zones 3–9. Full sun to part shade; adaptable to most soils; drought-tolerant; very long-lived thorny shrub or small tree. Native Crataegus species throughout North America have similar medicinal properties.', 'Pre-eminent cardiac tonic: improved cardiac output, coronary vessel dilation, reduced peripheral resistance, antioxidant cardiovascular protection, antiarrhythmic. Used for early heart failure (NYHA Class I–II), angina support, hypertension adjunct.', 'Tincture of berries + flowers + leaves: 1:5 in 45% alcohol; 3–5 ml 2–3x daily. Berry decoction: 1–2 tbsp dried berries per cup, simmered 20 min. Standardized extract: 300mg (1.8% vitexin) twice daily. Consistency over months is key.', 'Very safe long-term. May enhance cardiac glycosides (digoxin — monitor) and antihypertensive medications. NOT a substitute for conventional heart disease treatment. Stop 2 weeks before cardiac surgery.'],
            ['Turmeric (Curcuma longa)', 'Annual throughout U.S.; perennial Zones 8–11. Rich moist soil; partial shade; warm temperatures. Start indoors 4–6 weeks before last frost; dig before first frost.', 'One of the most researched anti-inflammatories: curcumin affects NF-κB, COX-2, and dozens of inflammatory pathways. Osteoarthritis pain (comparable to ibuprofen in some trials), IBD support, metabolic syndrome, antioxidant protection.', 'Golden milk: 1 tsp turmeric + 1/4 tsp black pepper + honey + warm milk. CRITICAL: combine with black pepper (piperine increases absorption 2000%). Capsules: 500–1000mg standardized curcumin with piperine 2–3x daily.', 'Gallstones: curcumin stimulates bile flow — caution with existing gallstones. Antiplatelet activity at high doses — caution with warfarin; stop 2 weeks before surgery. Medicinal supplemental doses in pregnancy need physician awareness.'],
            ['Milk Thistle (Silybum marianum)', 'All zones as annual; check invasive status in your state. Full sun; well-drained to dry soil; very drought-tolerant. Dramatic architectural plant (3–5 ft) with white-veined leaves. Self-seeds aggressively.', 'Gold standard hepatoprotective herb. Silymarin: stabilizes hepatocyte membranes, stimulates liver regeneration, protects against toxin-induced damage, reduces liver inflammation. Alcoholic liver disease, NAFLD, hepatitis C adjunct, drug-induced liver toxicity.', 'Standardized silymarin extract (75–80% silymarin) capsules: 200–400mg 3x daily. Ground seeds added to smoothies/oatmeal/yogurt: 1–2 tbsp daily (must be broken/ground). Tincture: 1:5 in 60% alcohol; 3–5 ml 3x daily.', 'Excellent safety profile; extensively used in clinical settings. Mild transient laxative effect at high doses. Asteraceae allergy. Very safe in most populations.'],
            ['Dandelion (Taraxacum officinale)', 'All zones throughout the continental U.S. Already growing in most lawns and gardens. Ensure no herbicide treatment before harvesting. Full sun to part shade; any soil; very easy from seed if cultivating.', 'Free tonic herb. Leaves: one of the most nutritious foods (vitamins A, C, K; calcium, iron); potassium-sparing diuretic; bitter digestive stimulant. Root: liver tonic; bile stimulant; prebiotic (inulin). Flowers: high antioxidants; edible raw.', 'Root decoction: 1 tbsp chopped root per cup, simmered 15 min; 2 cups daily. Root tincture: 1:5 in 40% alcohol; 2–4 ml 3x daily. Nourishing leaf tea: 1 cup fresh leaves per cup water, 5 min. Young leaves raw in salads.', 'Asteraceae allergy caution. Only harvest from herbicide-free areas. Caution with active gallstones or bile duct obstruction. Potassium-sparing diuretic profile superior to many pharmaceuticals.'],
          ],
        },
        {
          type: 'h3',
          text: 'Additional Essential Herbs',
        },
        {
          type: 'table',
          headers: ['Herb', 'Zones / Growing', 'Key Medicinal Uses', 'Best Preparation', 'Safety Notes'],
          rows: [
            ['Yarrow (Achillea millefolium)', 'Zones 2–9; extremely cold-hardy. Full sun; well-drained to dry soil; drought-tolerant; spreads by rhizome and self-seed. Very adaptable. White-flowered plants are traditional for medicine.', 'Named for Achilles\' battlefield wound treatment. Hemostatic (stops minor bleeding), antimicrobial, anti-inflammatory. Uses: minor wounds (direct fresh leaf), fever management (diaphoretic), menstrual cramping and heavy bleeding, digestive bitter, UTI support.', 'Fresh leaf poultice for wounds: crush fresh leaves, apply to cut with gentle pressure — stops minor bleeding within 2–5 minutes. Tea: 1–2 tsp dried aerial parts per cup, 10 min. Tincture: 1:5 in 45% alcohol; 2–4 ml 3x daily.', 'Asteraceae allergy caution. Traditional emmenagogue — avoid in pregnancy in medicinal doses. Contact dermatitis uncommon.'],
            ['Nettle (Urtica dioica)', 'Zones 3–10. Part shade to full sun; rich, consistently moist soil; spreads vigorously by rhizome — grow in a contained area. Handle fresh plant with gloves. Harvest young spring growth before flowering.', 'Leaf: one of the most nutritious plants (iron, calcium, magnesium, vitamins A, C, K); freeze-dried capsules reduce allergy symptoms (RCT); anti-inflammatory for arthritis. Root: BPH symptom reduction (multiple clinical trials); often combined with saw palmetto.', 'Nourishing infusion: 1 oz dried leaf per quart hot water, steeped 4–8 hours; 2 cups daily. Freeze-dried leaf capsules: 300–600mg 2x daily for allergies. Root tincture: 1:5 in 45% alcohol; 3–5 ml 2–3x daily. Cooked: blanch 1 min; use as spinach.', 'Handle fresh plant with gloves (heat eliminates stinging). Dried or cooked: excellent safety. Root: physician supervision for BPH management. Mild anticoagulant and antihypertensive effects at high doses.'],
            ['Mullein (Verbascum thapsus)', 'All zones; found virtually throughout the continental U.S. as naturalized biennial. Year 1: velvety rosette. Year 2: 6–8 ft flowering stalk. Full sun; well-drained dry soil; tolerates poor soil. Likely already growing nearby.', 'Classic pulmonary herb: soothes inflamed respiratory membranes (mucilaginous), expectorant, anti-inflammatory, mild antiviral. Chronic bronchitis, dry cough, asthma support, ear infection (mullein flower oil soothes inflammation, inhibits bacterial growth).', 'Leaf tea: 1–2 tsp dried leaf per cup, 10–15 min; STRAIN CAREFULLY through fine cloth (leaf hairs cause throat irritation); add honey; 3–4 cups daily. Flower oil: fresh flowers in olive oil, infused 2–4 weeks; 2–3 warm drops in ear canal for ear pain.', 'Always strain leaf tea through a very fine filter — unfiltered leaf hairs irritate the throat. Do not use ear drops if eardrum may be ruptured. See a doctor if ear infection involves fever, severe pain, or discharge.'],
            ['Skullcap (Scutellaria lateriflora)', 'Zones 5–9. Part shade to full shade; consistently moist, rich woodland soil. Native North American woodland perennial. Works well near goldenseal and black cohosh in a shade garden.', 'Premier nervine in American herbalism: calms nervous system without heavy sedation. Acute anxiety and tension, nervous restlessness, scattered mind, muscle tension of nervous origin, nervous insomnia. Baicalin has documented GABA-A receptor binding.', 'Fresh plant tincture (strongly preferred — constituents degrade rapidly with drying): 1:2 fresh weight in 60% alcohol; 2–4 ml (40–80 drops) as needed for acute anxiety or before bed. Look for "fresh plant extract" designation when buying commercial products.', 'Adulteration concern: skullcap has historically been adulterated with germander (Teucrium species), which causes liver damage. Reported hepatotoxicity cases likely due to germander contamination — buy from reputable suppliers who test for Teucrium. Additive sedation with sedative medications.'],
            ['Arnica (Arnica montana / A. chamissonis)', 'Zones 4–9; best in cool mountain climates. Full sun to light shade; acidic, nutrient-poor, well-drained lean soil. A. chamissonis preferred for garden growing; A. montana is of conservation concern in the wild.', 'Classic topical herb for bruises, muscle pain, sprains, joint pain. Clinically validated: post-surgical bruising and swelling, osteoarthritis pain (topical gel comparable to ibuprofen gel), muscle soreness after exercise. STRICTLY EXTERNAL USE ONLY.', 'Infused oil: dried flowers in olive oil, cold-infused 4–6 weeks; apply to bruises, sprains, muscle pain. Arnica salve from infused oil + beeswax. Tincture: 1:10 in 70% alcohol, diluted further for compress or wash.', 'FOR EXTERNAL USE ONLY. Internal use at medicinal doses is toxic (gastroenteritis, arrhythmia, cardiovascular collapse) — do NOT take herbal arnica preparations internally. Do not apply to broken skin or open wounds. Asteraceae allergy caution.'],
          ],
        },
      ],
    },
    {
      id: 'medicinal-garden-designs',
      title: 'Section 6: Medicinal Herb Garden Designs',
      blocks: [
        {
          type: 'p',
          text: 'A well-organized medicinal herb garden is more useful than a random collection of plants because you can find what you need quickly, group plants by compatible growing requirements, and remember what you have. The following design approaches have proven practical across diverse American gardening situations.',
        },
        {
          type: 'h3',
          text: 'Design 1: The Kitchen Medicine Cabinet Garden (4×8 Raised Bed)',
        },
        {
          type: 'p',
          text: 'A curated collection of the most-used herbs for everyday wellness, organized for easy access and harvest. The highest-value medicinal garden per square foot for a beginning home herbalist.',
        },
        {
          type: 'table',
          headers: ['Position', 'Herb', 'Why Here', 'Notes'],
          rows: [
            ['Back center (tallest)', 'Echinacea purpurea', 'Tallest plant; beautiful; harvest aerial parts for immune support', '3–4 ft; divide every 3 years'],
            ['Back left', 'Lemon Balm', 'Grows large; shade-tolerant; harvest frequently to contain; anxiety and sleep', '2–3 ft; aggressive spreader — cut back regularly'],
            ['Back right', 'Valerian', 'Tall; harvest roots in fall of year 2; sleep and anxiety', '4–5 ft in bloom; dies back in winter'],
            ['Middle left', 'Chamomile', 'Self-seeds freely; flowers for tea; most versatile medicinal in the garden', '18–24 in; deadhead for continuous bloom; allow some seed set'],
            ['Middle center', 'Calendula', 'Prolific flower producer; harvest daily in peak season; wound healing and skin care', '18 in; most productive herb per flower; deadhead constantly'],
            ['Middle right', 'Peppermint (in pot sunk in soil)', 'Contained to prevent spreading; harvest throughout season; digestive and respiratory', 'Keep in large pot; harvest frequently'],
            ['Front left', 'Thyme (Greek)', 'Low-growing; drought-tolerant; harvest for respiratory and antimicrobial use', '8–12 in; perennial in Zone 5+; harvest before flowering'],
            ['Front center', 'Lavender', 'Aromatic; beautiful; medicinal flowers for sleep and anxiety; requires excellent drainage', '18–24 in; needs well-drained gritty soil'],
            ['Front right', 'Plantain (small section)', 'First-aid herb; harvest young leaves from elsewhere in garden or allow this section', 'Pull seeding stalks before they set; harvest young spring leaves'],
          ],
        },
        {
          type: 'h3',
          text: 'Design 2: The Woodland Medicinal Garden',
        },
        {
          type: 'p',
          text: 'For gardeners with shade, this design groups native woodland medicinals that thrive in dappled light and rich, moist, acidic soil. All of these herbs prefer the understory conditions found under deciduous trees.',
        },
        {
          type: 'list',
          items: [
            'Goldenseal (Hydrastis canadensis, Zones 3–8): Most important American woodland medicinal herb; antimicrobial, immune stimulating; endangered in the wild — grow your own; rich moist acidic woodland soil; dense shade',
            'Black Cohosh (Actaea racemosa, Zones 3–8): Tall dramatic plant for menopausal support; rich moist woodland soil; grows in dense shade',
            'Solomon\'s Seal (Polygonatum biflorum, Zones 3–9): Anti-inflammatory; connective tissue support; nutritive; beautiful arching habit; very easy woodland perennial',
            'Wild Ginger (Asarum canadense, Zones 3–8): Low ground-cover; digestive herb; native; shade; moist woodland soil',
            'Skullcap (Zones 5–9): Native shade-tolerant nervine; excellent companion to woodland medicinals',
          ],
        },
        {
          type: 'h3',
          text: 'Design 3: The Balcony and Container Medicinal Garden',
        },
        {
          type: 'table',
          headers: ['Container', 'Herb(s)', 'Container Size', 'Light', 'Best Use'],
          rows: [
            ['Container 1', 'Peppermint (solo — its own pot)', '12 in wide, 10 in deep', 'Part shade to sun', 'Digestive and respiratory tea; must be alone to prevent spreading'],
            ['Container 2', 'Lemon Balm', '12 in wide, 10 in deep', 'Part shade to sun', 'Anxiety, sleep, and calming teas; harvest leaves frequently'],
            ['Container 3', 'Chamomile', '10 in wide, 8 in deep', 'Full sun', 'Anti-inflammatory tea; harvest flowers as they open daily'],
            ['Container 4', 'Lavender (dwarf variety)', '12 in wide, well-draining mix', 'Full sun essential', 'Anxiety, sleep, aromatherapy; excellent drainage required'],
            ['Container 5', 'Calendula', '10 in wide', 'Full sun', 'Wound and skin preparations; harvest flowers daily for continuous production'],
            ['Container 6', 'Thyme (Greek)', '10 in wide, gritty mix', 'Full sun', 'Respiratory tea and antimicrobial support; long-lived perennial in containers'],
            ['Container 7', 'Holy Basil / Tulsi', '10 in wide, warm location', 'Full sun; warmth essential', 'Adaptogen; stress and immune tea; summer and fall only in most climates'],
            ['Container 8', 'Echinacea (\'Magnus\' or compact cultivar)', '12 in wide, 12 in deep', 'Full sun', 'Immune support; harvest flowers and aerial parts; divide every 2 years'],
            ['Large Container A (16 in)', 'Aloe Vera', '16 in wide, cactus mix', 'Bright indirect to full sun indoors', 'First aid burn and skin herb; keep indoors in most U.S. climates; low maintenance'],
            ['Large Container B (16 in)', 'Ginger (summer) / Store winter', '16 in wide, rich moist mix', 'Part shade to sun', 'Digestive, nausea, anti-inflammatory; harvest rhizomes in fall; bring inside for winter'],
          ],
        },
      ],
    },
    {
      id: 'herb-combinations-formulas',
      title: 'Section 7: Herb Combinations & Formulas',
      blocks: [
        {
          type: 'p',
          text: 'Most beginning herbalists use one herb at a time. Most experienced herbalists rarely do. The tradition of combining herbs — called "formulary" in the Western tradition and part of every major herbal medicine system worldwide — is based on centuries of observation that herbs used together often produce better results than any single herb used alone. The reasons are both practical and pharmacological: some herbs enhance the absorption of active compounds in other herbs, some provide gentler action by balancing each other\'s stronger properties, and others address different aspects of the same condition simultaneously.',
        },
        {
          type: 'p',
          text: 'Western herbalism typically organizes formula plants into roles: the primary therapeutic herb (the "chief"), supporting herbs that reinforce the primary herb\'s action, balancing herbs that smooth the edges of a strong formula, and digestive "carriers" that improve absorption and palatability.',
        },
        {
          type: 'h3',
          text: 'The Four Roles in an Herbal Formula',
        },
        {
          type: 'list',
          items: [
            'Chief / Primary herb — The herb that directly addresses the main condition. Used at the highest dose in the formula. In a sleep formula: valerian. In an acute cold formula: echinacea.',
            'Supporting herbs (Deputies) — One or two herbs that reinforce the chief herb\'s primary action or address secondary aspects. Lemon balm supports valerian\'s sedative action while also calming digestive tension that may be disrupting sleep.',
            'Balancing herbs (Assistants) — Herbs that moderate any potential harshness of the chief herb or counterbalance side effects. Ginger is a classic balancing herb: improves circulation and absorption, reduces GI irritation, warms cold or damp constitutions.',
            'Carrier / Conductor herbs — Herbs with minimal direct therapeutic effect but that improve palatability, absorption, or targeting. Licorice root sweetens formulas, soothes the digestive tract, and has documented synergistic effects with many herbs. Peppermint improves palatability and promotes GI uptake.',
          ],
        },
        {
          type: 'h3',
          text: 'Synergy and Bioavailability: Why Combinations Work',
        },
        {
          type: 'list',
          items: [
            'Enhanced bioavailability: Piperine (black pepper) increases curcumin absorption by 2000%. Ginger increases circulation to GI mucosa, improving absorption of co-administered herbs.',
            'Multi-pathway action: Most conditions involve multiple physiological pathways. Insomnia may involve elevated cortisol, racing thoughts, digestive tension, and deficient GABA activity — each requiring a different herbal approach.',
            'Buffering of strong herbs: Some highly effective herbs have narrow therapeutic windows. Combining them at lower doses with synergistic partners often produces better results with fewer problems than maximizing any single herb.',
            'Broad-spectrum antimicrobial coverage: Combining thyme, oregano, garlic, and elderberry creates overlapping antimicrobial spectra with much lower chance of pathogen resistance.',
          ],
        },
        {
          type: 'h3',
          text: 'Classic Therapeutic Formulas for Home Use',
        },
        {
          type: 'table',
          headers: ['Formula Name', 'Condition', 'Herbs & Ratios', 'Preparation', 'How to Use', 'Notes'],
          rows: [
            ['Classic Sleep Blend', 'Insomnia; difficulty falling asleep; anxious rumination before bed', 'Valerian root 40% + Lemon balm 30% + Passionflower 20% + Chamomile 10%', 'Tincture: blend individual tinctures at stated ratios; or as combined tea; or fill capsules with powdered blend', 'Tincture: 2–4 ml in water, 30–60 min before bed. Tea: 2 tsp blend per cup, steeped 15 min, covered.', 'Works better after 2–3 weeks of consistent use; valerian builds over time; passionflower adds GABA-supporting activity'],
            ['Relaxing Nervine Formula', 'Daytime anxiety; stress; nervous tension without wanting sedation', 'Lemon balm 40% + Skullcap 30% + Holy Basil 20% + Oatstraw 10%', 'Tea or tincture blend', 'Tea: 2 tsp per cup, 3 cups daily. Tincture: 2–3 ml 2–3x daily during stressful periods.', 'Calms without sedating — excellent for daytime functional anxiety; holy basil adds adaptogenic cortisol-modulating effect'],
            ['Immune Defense Formula', 'First sign of cold or flu; acute immune challenge; exposure prevention', 'Echinacea aerial/root 40% + Elderberry 30% + Thyme 20% + Ginger 10%', 'Tincture blend; or as oxymel (honey-vinegar base especially good for this formula)', 'Take at FIRST sign of illness: 2–4 ml or 1–2 tbsp oxymel every 3–4 hours for first 24 hours, then 3x daily for 1 week', '"At first sign" timing is critical — most effective in first 12–24 hours; less effective as illness progresses'],
            ['Respiratory Support Blend', 'Coughs; bronchitis; chest congestion; productive or dry cough', 'Thyme 40% + Mullein 30% + Elecampane root 20% + Licorice root 10%', 'Oxymel or syrup (ideal for respiratory formulas); also as tea or tincture', '1–2 tbsp oxymel 3–4x daily. Tea: steep 15 min; 3–4 cups. Tincture: 2–4 ml 4x daily during acute illness.', 'Elecampane root (Inula helenium): antiviral, antimicrobial, expectorant — prepare as decoction (simmer 15 min)'],
            ['Digestive Calm Formula', 'IBS symptoms; stress-related cramping; gas and bloating; nervous digestive upset', 'Chamomile 40% + Peppermint 30% + Fennel seed 20% + Lemon balm 10%', 'Tea (warm liquid itself is therapeutic); tincture for convenience', '1 cup of tea after meals; drink slowly. Tincture: 1–2 ml 20 min before meals.', 'Do NOT use peppermint component if GERD is present. Lemon balm addresses the anxiety component of nervous digestive disorders.'],
            ['Wound Healing Salve', 'Minor cuts, scrapes, burns, dry skin, insect bites, rashes', 'Calendula-infused oil 60% + St. John\'s Wort-infused oil 30% + Plantain-infused oil 10%; add lavender EO (1%) + tea tree EO (0.5%) at beeswax stage', 'Make three separate infused oils; blend at stated ratios; make into salve with beeswax (1 oz beeswax per 8 oz oil)', 'Apply to affected skin 2–4x daily as long as healing is needed', 'St. John\'s Wort oil adds anti-inflammatory and nerve pain properties; plantain adds drawing and anti-inflammatory action'],
            ['Hormone Balance Tea (Women)', 'PMS support; menstrual irregularity; perimenopausal transition', 'Red Raspberry leaf 40% + Nettle leaf 20% + Chamomile 20% + Rose petals 10% + Lemon balm 10%', 'Long nourishing infusion (overnight preferred for maximum mineral extraction)', '1–2 cups daily throughout cycle; can be drunk consistently as a daily tonic long-term', 'Gentle daily tonic — not a substitute for Vitex or Black Cohosh for acute hormonal concerns; nettle provides iron and mineral support'],
            ['Liver Support Formula', 'Liver tonic; post-medication support; fatty liver; post-illness recovery', 'Milk Thistle seed 40% + Dandelion root 30% + Burdock root 20% + Yellow dock 10%', 'Tincture blend; capsules using ground seed blend; decoction', 'Tincture: 2–3 ml 3x daily. Capsule blend: 500–1000mg 2x daily. Decoction: 1 tbsp blend per 2 cups water, simmered 20 min; 1–2 cups daily.', 'Best used over 2–3 months; burdock and yellow dock are classic alterative (slow-acting cleansing) herbs complementing milk thistle\'s hepatoprotective focus'],
          ],
        },
        {
          type: 'tip',
          emoji: '⚗️',
          text: 'Dosage for tincture blends: use the stated ratio as a proportion of total volume. A formula with Herb A 40% + Herb B 30% + Herb C 20% + Herb D 10% means 40ml + 30ml + 20ml + 10ml = 100ml total. Standard adult dose: 2–4 ml (40–80 drops) in water, 2–3 times daily. For acute illness onset, increase to 4–5x daily for first 24–48 hours, then return to standard dosing. Children\'s dosing: Clark\'s Rule — divide child\'s weight in pounds by 150 for fraction of adult dose (50 lb child = 1/3 adult dose). Always start at the lower end of any dose range.',
        },
      ],
    },
    {
      id: 'year-round-herbal-calendar',
      title: 'Section 8: The Year-Round Herbal Calendar',
      blocks: [
        {
          type: 'p',
          text: 'A successful medicinal herb practice is a year-round rhythm — not a series of disconnected events. The following calendar uses Zones 5–7 as its baseline; adjust timing 2–4 weeks earlier for warmer zones (8–10) and 2–4 weeks later for colder zones (3–4).',
        },
        {
          type: 'h3',
          text: 'Winter: Reflection, Planning, and Medicine-Making (December–February)',
        },
        {
          type: 'p',
          text: 'Winter is the season of preparation, medicine-making, and planning. Many medicinal herbs have retreated below ground; some roots were harvested in fall and await processing; and the long evenings are ideal for making tinctures, salves, and other preparations from last season\'s harvest.',
        },
        {
          type: 'table',
          headers: ['Month', 'Garden Tasks', 'Harvesting', 'Medicine-Making', 'Planning & Learning'],
          rows: [
            ['December', 'Protect marginally hardy perennials with mulch; bring tender container herbs (ginger, tulsi, aloe) indoors', 'Wild roots in unfrozen ground (dandelion, burdock); dried herbs from storage', 'Begin tinctures from fall root harvests (valerian, dandelion, black cohosh); make salves and infused oils from summer flowers', 'Order seed catalogs; plan next year\'s garden layout; inventory herb supply; note what ran low'],
            ['January', 'Check overwintering plants for frost heaving; water aloe vera and indoor herbs monthly', 'Dried herbs from storage; dried seed heads left standing (save seeds for spring planting)', 'Finish tinctures started in fall; make elderberry syrup from dried berries; prepare glycerites; process dried herbs into capsule powders', 'Order seeds early (medicinal seeds sell out quickly); read and plan; take a local herb walk or foraging class'],
            ['February', 'Start slow-growing herbs from seed indoors: ashwagandha, valerian, echinacea, black cohosh (needs cold stratification), calendula; check cold-stored ginger rhizomes', 'Early wildcraft in mild climates (Zones 7+): dandelion root, first spring greens, chickweed', 'Continue tincture-making; make herbal vinegars (dried herbs in apple cider vinegar, 4–6 weeks)', 'Catalog all existing tinctures, dried herbs, and salves; date-check everything; compost anything over 2 years old (leaves/flowers) or 3 years old (roots)'],
          ],
        },
        {
          type: 'h3',
          text: 'Spring: Planting, First Harvests, and Emerging Growth (March–May)',
        },
        {
          type: 'table',
          headers: ['Month', 'Garden Tasks', 'Harvesting', 'Medicine-Making', 'Notes'],
          rows: [
            ['March', 'Continue seeds indoors; divide established perennials (valerian, echinacea, lemon balm, yarrow) before fully leafing out; pull winter mulch back from emerging crowns', 'Spring roots before growth begins (Zones 6+): dandelion, burdock, marshmallow, yellow dock — harvest while energy is still in roots', 'Fresh dandelion root tincture; infused vinegar with spring growth (dandelion leaves, nettles, cleavers)', 'Nettles begin emerging — harvest first tender young growth with gloves; blanch and eat or make early nourishing nettle infusions'],
            ['April', 'Transplant cold-hardy starts after last hard frost: chamomile, calendula, valerian, lemon balm; direct sow chamomile, calendula, borage; divide and transplant crowded perennials', 'Spring wildcrafting at peak: young nettles, violets, dandelion flowers and leaves, chickweed, cleavers (great spring lymphatic herb), red clover in warm areas', 'Fresh nettle nourishing infusion (1 oz per quart, overnight) as classic spring tonic; fresh tinctures of cleavers and violet leaf; dandelion flower-infused honey', 'Most foraging-rich month in most of the U.S. — many medicinal plants appear for only a brief spring window; prioritize wildcrafting'],
            ['May', 'Transplant tender herbs after last frost: holy basil, ginger, lemon verbena; succession sow calendula; plant out echinacea transplants; set up supports for valerian', 'Elderflower harvest (bloom period is brief — 1–2 weeks; watch carefully); chamomile flowers begin; lemon balm first harvest; first rose petals from unsprayed roses', 'Elderflower cordial or tincture (prioritize above almost all others — brief season); fresh lemon balm tincture (fresh plant strongly preferred)', 'May is the herb garden\'s most hectic month — multiple first harvests happen simultaneously; keep a harvest journal to plan more precisely next year'],
          ],
        },
        {
          type: 'h3',
          text: 'Summer: Peak Production, Continuous Harvest (June–August)',
        },
        {
          type: 'table',
          headers: ['Month', 'Garden Tasks', 'Primary Harvests', 'Medicine-Making Priority', 'Notes'],
          rows: [
            ['June', 'Deadhead calendula and chamomile constantly; harvest thyme, oregano, sage before flowering; first lavender harvest when buds just opening; weed regularly before seed set', 'Lavender at peak bloom; chamomile (every 2–3 days); St. John\'s Wort flowers (harvest when just opening — most time-critical harvest of the year); first echinacea flowers; thyme at peak aromatic quality', 'St. John\'s Wort red infused oil (fresh flowers only, cold-infused in olive oil — start now); lavender infused oil and tincture; chamomile infused oil and tincture; begin drying everything for winter supply', 'St. John\'s Wort harvest window is narrow — flowers lose potency quickly; plant is at peak for only 2–3 weeks; prioritize this harvest above all others in June'],
            ['July', 'Continue daily calendula harvest; cut back lemon balm to prevent seed set; succession sow calendula for fall; harvest garlic when lower 1/3 of leaves brown; monitor elderberry development', 'Calendula daily; echinacea flowers and aerial parts; holy basil before seed set; yarrow flowers at peak; valerian flowers; elderflower in northern climates', 'Elderberry syrup from early ripe varieties; calendula infused oil and salve; yarrow tincture; fresh-plant echinacea tincture (fresh and dried tinctures are different — make both)', 'July is peak medicine-making season — work at capacity; what you don\'t harvest and process this month may not be available until next year'],
            ['August', 'Harvest elderberries (most varieties ripe August–September); final chamomile harvest; cut back peppermint to stimulate fresh growth; harvest seeds for saving; prepare for root harvest season', 'Elderberries (most important August harvest); ashwagandha roots in warm climates; first echinacea root harvest on 3-year-old plants; marshmallow aerial parts', 'Elderberry syrup is the primary August priority — make at least a 3-month supply; elderberry tincture from fresh berries; dry elderberries for winter; ashwagandha root preparations', 'Elderberries ripen quickly and can ferment on the plant in hot weather — harvest as soon as they reach full dark color; check daily from late July'],
          ],
        },
        {
          type: 'h3',
          text: 'Fall: Root Harvest, Preservation, and Winterizing (September–November)',
        },
        {
          type: 'table',
          headers: ['Month', 'Garden Tasks', 'Primary Harvests', 'Medicine-Making Priority', 'Notes'],
          rows: [
            ['September', 'Plant garlic for next year; sow chamomile and calendula for overwintering in Zones 7+; begin cutting back spent annuals; collect seeds from open-pollinated herbs', 'Elderberries continue in northern areas; harvest holy basil before first frost; final calendula harvest; ashwagandha roots at first frost; tulsi seeds for next year', 'Second elderberry syrup run from late harvest; dry and store all remaining summer herbs; begin tinctures from roots being harvested this month', 'Last opportunity to harvest tender annuals before frost — watch the forecast and harvest everything that won\'t survive before it comes'],
            ['October', 'Apply winter mulch after a few hard freezes; cut back dead annuals; save seeds from open-pollinated herbs; final weeding before winter', 'PRIME ROOT HARVEST MONTH: dandelion, valerian (2-year-old roots), echinacea (3-year plants), black cohosh (3+ years), marshmallow, burdock, yellow dock, elecampane root', 'Root medicine season — process all roots immediately: wash, slice, dry or tincture; fresh root tinctures (1:2 in appropriate alcohol) generally superior to dried for most roots', 'Root harvest must happen after first hard frosts (energy in roots) but before ground freezes; this window may be only 2–4 weeks in Zones 5–6'],
            ['November', 'Complete remaining root harvests before ground freezes; bring in container plants being overwintered; apply final mulch; clean and organize the apothecary', 'Late root harvests as ground allows; remaining seed heads for saving; last above-ground herb harvest in mild climates', 'Complete all tinctures started from fall roots; full apothecary inventory; plan what to make December–January from materials on hand', 'By end of November the annual herb garden cycle is essentially complete — take stock and note what you wished you had more of'],
          ],
        },
        {
          type: 'tip',
          emoji: '📅',
          text: 'Keep a harvest journal from your very first season. Recording when each herb reaches peak bloom, when you harvested, what you made, and how much you ended up using will make you dramatically more efficient by year two or three. The medicine-making calendar runs parallel to the growing calendar — both must be planned together.',
        },
      ],
    },
    {
      id: 'building-home-apothecary',
      title: 'Section 9: Building Your Home Apothecary',
      blocks: [
        {
          type: 'p',
          text: 'The difference between an herb garden and an herb practice is an apothecary — a stocked, organized collection of preparations ready for use when you need them. Building a home apothecary is a gradual process: you don\'t need everything at once, and the best apothecary is one you have actually built yourself from herbs you have grown and prepared, because those preparations have known quality and provenance.',
        },
        {
          type: 'h3',
          text: 'The Tiered Stocking Approach',
        },
        {
          type: 'table',
          headers: ['Tier', 'What It Contains', 'Est. Cost', 'Timeline', 'Who It Serves'],
          rows: [
            ['Tier 1: Essential Starter', 'Elderberry syrup; calendula salve; chamomile dried herb; lavender essential oil or dried flowers; peppermint tea; echinacea tincture; ginger (fresh or dried); raw honey', '$50–150 depending on what you grow vs. buy', 'First growing season or immediately by purchasing quality commercial preparations', 'Any household new to herbal medicine; anyone wanting immediate practical herbal first aid capability'],
            ['Tier 2: Intermediate Working', 'All of Tier 1 plus: valerian tincture; lemon balm tincture or dried herb; St. John\'s Wort infused oil; garlic in kitchen; thyme dried for teas; yarrow tincture; marshmallow root; turmeric + black pepper; milk thistle capsules or tincture; plantain infused oil; hawthorn tincture if relevant', '$150–400 to stock; much less if growing your own', '1–3 growing seasons as your garden and preparation skills expand', 'Households committed to integrating herbal medicine into their regular health practice; families with children'],
            ['Tier 3: Advanced Comprehensive', 'All of Tier 2 plus: ashwagandha; black cohosh and chaste berry if relevant; skullcap tincture; abundant nettle for nourishing infusions; full formula ingredients to blend custom tinctures; herbal vinegars; oxymels; herbal honeys; complete wound care kit (calendula salve, arnica salve, wound wash tincture)', '$400–800+ for full stocking; significantly less with home production', '2–5+ growing seasons as experience and confidence grow', 'Families who have made herbal medicine a central part of their wellness practice; anyone reducing dependence on pharmaceuticals for routine wellness concerns'],
          ],
        },
        {
          type: 'h3',
          text: 'Organizing Your Apothecary',
        },
        {
          type: 'list',
          items: [
            'Organize by use, not by plant: Group all sleep and relaxation preparations together; all immune support preparations together; all topical/skin preparations together; all digestive preparations together. This matches how you\'ll reach for herbs — by situation, not by botanical name.',
            'Label everything completely: Herb name, preparation type, part used, date prepared or purchased, source (homegrown/wildcrafted/purchased), and dosage note. Use a consistent label format for every jar and bottle.',
            'First in, first out: Keep newer preparations behind older ones; use the oldest stock first and replenish from the back. Date every label at time of preparation.',
            'Annual apothecary audit: Once per year (February is ideal — before the new growing season), go through every jar and bottle. Smell and taste-test dried herbs; discard anything past shelf life. Compost anything over 2 years old (leaves/flowers) or 3 years old (roots).',
            'The ready-access shelf: Identify the 5–7 preparations your household uses most frequently and keep them separately accessible. These should be retrievable in the dark without searching.',
          ],
        },
        {
          type: 'h3',
          text: 'The Essential Household Herbal First Aid Kit',
        },
        {
          type: 'table',
          headers: ['Preparation', 'Primary Use'],
          rows: [
            ['Calendula salve', 'Minor cuts, scrapes, burns, rashes, dry skin, insect bites, and general skin healing. The single most useful topical herbal preparation. Keep a small tin accessible at all times.'],
            ['Plantain — fresh or infused oil', 'Bee stings, insect bites, and minor wounds: fresh plantain leaf applied immediately provides rapid itch and pain relief. Infused oil as backup when fresh isn\'t available.'],
            ['Chamomile tea (dried flowers)', 'Acute stress, digestive upset, headache, and as a gentle sleep aid. The most versatile and broadly applicable herb in the kit.'],
            ['Elderberry syrup', 'Immune support at the first sign of respiratory illness. Take at the very first symptom — timing is critical. Keep at least 1–2 cups on hand through cold and flu season.'],
            ['Ginger (fresh root or tea)', 'Nausea, motion sickness, digestive cramping, and as a warming remedy for early-stage chills. Fresh ginger tea requires only the root and hot water.'],
            ['Lavender essential oil (diluted) or dried lavender', 'Headaches (diluted in carrier oil on temples), minor wound antiseptic (diluted), calming and sleep. One of the few essential oils appropriate for broader household kit use.'],
            ['Arnica salve or oil', 'Bruises, sprains, and muscle soreness. Apply as soon as possible after injury. EXTERNAL USE ONLY — keep clearly labeled.'],
            ['Aloe vera (live plant or gel)', 'Burns, sunburn, and skin irritation. A live aloe vera plant is the best option — fresh gel is far superior to commercial preparations.'],
            ['Thyme-honey preparation or syrup', 'Coughs, sore throats, and respiratory support. A jar of thyme-infused honey provides both antimicrobial and soothing effects and is acceptable to most children.'],
            ['Activated charcoal capsules', 'Traditional remedy for food poisoning and digestive upset from accidental ingestion. Know when NOT to use it — caustic ingestions and petroleum products require emergency medical treatment, not charcoal.'],
          ],
        },
        {
          type: 'h3',
          text: 'Children and Family Herbalism',
        },
        {
          type: 'p',
          text: 'Children respond well to gentle herbal medicine, but children are not small adults — their herb doses are significantly lower, some herbs appropriate for adults are inappropriate for children, and certain conditions in children always warrant medical evaluation regardless of herbal support available.',
        },
        {
          type: 'warning',
          emoji: '👶',
          text: 'Special caution for children under 2 years: No honey in any form for infants under 1 year (botulism risk). Avoid all but the most gentle herbs (chamomile tea in diluted form is the classical infant herb). Always consult a physician for any health concern in an infant. Herb doses for infants and toddlers are extremely small and should be guided by a qualified practitioner.',
        },
        {
          type: 'table',
          headers: ['Herb', 'Child Safety Rating', 'Appropriate Age', 'Notes', 'What to Avoid'],
          rows: [
            ['Chamomile', 'Very Safe', 'All ages including infants (diluted)', '1/4 strength for infants; 1/2 strength for toddlers; full strength for older children; classic for colic and sleep', 'Confirm no Asteraceae allergy; avoid very concentrated extracts for very young children'],
            ['Elderberry syrup', 'Safe', 'Over 1 year (honey component; honey-free versions safe for younger)', 'Excellent immune support; children love the sweet flavor; use Clark\'s Rule for dosing', 'Raw or uncooked elderberries are toxic — only properly prepared syrup'],
            ['Ginger', 'Safe (at appropriate doses)', 'Over 2 years', 'Ginger ale (real ginger) or diluted tea; candied ginger for older children', 'High doses may cause GI irritation in children; keep doses small'],
            ['Lemon Balm', 'Safe', 'All ages over 1 year', 'Gentle calming herb; mild tea for anxiety, sleep, digestive distress', 'Monitor for thyroid considerations if family history; generally very safe'],
            ['Peppermint tea (diluted)', 'Safe over 2 years; avoid topical menthol under 2', 'Tea over 2 years; topical menthol NOT for under 2 years on face/nostrils', '1/2 strength tea for younger children; do not apply menthol to face or nostrils of young children', 'Never apply menthol products to nostrils or face of children under 2 — risk of respiratory distress'],
            ['Calendula (topical)', 'Very Safe', 'All ages externally', 'Excellent for diaper rash, skin irritation, minor cuts; widely used in commercial baby products', 'Asteraceae allergy caution; medicinal-dose internal use not for infants'],
            ['Nettle (cooked or nourishing infusion)', 'Safe as food/nutrition', 'All ages as cooked herb', 'Excellent nutritive herb; cooked nettles completely safe; nourishing infusion appropriate as nutritive tea', 'Handle fresh plant with gloves; freeze-dried capsules for allergy: age-appropriate dosing'],
            ['Thyme tea with honey', 'Safe over 1 year', 'Over 1 year', 'Classic children\'s cough remedy; soothing, antimicrobial, and pleasant-tasting', 'Culinary tea strength is appropriate for children; avoid medicinal-strength preparations for young children'],
          ],
        },
        {
          type: 'tip',
          emoji: '⚖️',
          text: 'Children\'s dosing formulas: Clark\'s Rule (most common — weight-based): Child dose = (child\'s weight in lbs ÷ 150) × adult dose. Young\'s Rule (age-based): (age in years ÷ [age + 12]) × adult dose. Always start at the low end of the calculated dose; glycerites (vegetable glycerin-based tinctures) are preferred over alcohol tinctures for children. Never give potent herbs (valerian, black cohosh, St. John\'s Wort, vitex, kava) to children without practitioner guidance.',
        },
        {
          type: 'h3',
          text: 'Quick Reference: 30 Medicinal Herbs at a Glance',
        },
        {
          type: 'table',
          headers: ['Herb', 'Primary Use', 'Zones', 'Best Prep', 'Key Safety Note'],
          rows: [
            ['Chamomile', 'Anxiety; digestive; wound healing; anti-inflammatory', 'All zones (annual)', 'Tea; topical oil', 'Asteraceae allergy caution'],
            ['Lavender', 'Anxiety; sleep; antiseptic; pain', 'Z5–8 perennial; all annual', 'Tea; aromatherapy; infused oil', 'EO not internal without guidance; young children topical caution'],
            ['Valerian', 'Sleep; anxiety; muscle relaxation', 'Z4–9', 'Capsules; tincture; tea', 'Sedative interactions; stop 2 weeks before surgery'],
            ['Lemon Balm', 'Anxiety; herpes (topical); digestive; thyroid support', 'Z4–9', 'Tea; tincture; topical cream', 'Hypothyroidism caution'],
            ['Holy Basil (Tulsi)', 'Adaptogen; stress; blood sugar; immune', 'Annual; Z10+ perennial', 'Tea; tincture; oxymel', 'Mild anticoagulant; pregnancy caution'],
            ['Ashwagandha', 'Adaptogen; stress; sleep; muscle strength', 'Annual; Z8+ perennial', 'Capsules; root tea; tincture', 'Hyperthyroidism caution; pregnancy avoid'],
            ['St. John\'s Wort', 'Mild-moderate depression; nerve pain; wound healing', 'Z3–8', 'Standardized capsules; tincture; infused oil', 'MAJOR drug interactions — verify with all prescription drugs'],
            ['Echinacea', 'Immune support; upper respiratory infection', 'Z3–9', 'Tea; tincture; capsules', 'Autoimmune caution; immunosuppressant interaction; Asteraceae allergy'],
            ['Elderberry', 'Antiviral; flu and cold; immune', 'Z3–9', 'Syrup; tincture; elderflower tea', 'Raw berries and all other parts toxic — always cook before use'],
            ['Garlic', 'Antimicrobial; cardiovascular; immune', 'Z3–11', 'Raw or lightly cooked; honey prep', 'Anticoagulant at high doses; drug interactions; topical burns if undiluted'],
            ['Thyme', 'Respiratory; cough; bronchitis; antimicrobial', 'Z4–9', 'Tea; steam inhalation; honey', 'Avoid concentrated medicinal doses in pregnancy; EO not internal'],
            ['Peppermint', 'IBS; nausea; digestive; headache (topical)', 'Z3–11', 'Tea; enteric capsules; topical diluted EO', 'GERD contraindication; topical menthol not for infants\' faces'],
            ['Ginger', 'Nausea; anti-inflammatory; digestive; circulatory', 'Annual; Z8+ perennial', 'Fresh tea; capsules; cooking', 'Anticoagulant at high doses; pregnancy OK in moderation'],
            ['Turmeric', 'Anti-inflammatory; joint pain; liver; antioxidant', 'Annual; Z8+ perennial', 'Golden milk; capsules with black pepper', 'Poor absorption without pepper; gallstone caution; mild anticoagulant'],
            ['Marshmallow', 'Sore throat; IBS; urinary; wound (topical)', 'Z3–9', 'Cold infusion; tea; topical poultice', 'May slow drug absorption — take medications separately; very safe'],
            ['Calendula', 'Wound healing; skin; anti-inflammatory', 'All zones as annual', 'Infused oil; salve; tea; tincture', 'Asteraceae allergy; pregnancy caution in medicinal doses'],
            ['Plantain', 'Wound; sting; sore throat; urinary; expectorant', 'Z3–9', 'Fresh poultice; tea; infused oil', 'Very safe; seeds as bulk laxative only with adequate water'],
            ['Aloe Vera', 'Burns; wound; skin inflammation; digestive (internal)', 'Z9+ outdoor; all zones container', 'Fresh gel topical; inner gel internal', 'Only clear inner gel internally; latex is harsh laxative; broken skin caution'],
            ['Yarrow', 'Wound; fever; menstrual; UTI; digestive', 'Z2–9', 'Fresh poultice; tea; tincture', 'Asteraceae allergy; pregnancy avoid medicinal doses'],
            ['Skullcap', 'Anxiety; nervous tension; insomnia', 'Z5–9', 'Fresh plant tincture (preferred)', 'Buy from reputable source — adulteration with germander is a documented safety concern'],
            ['Nettle', 'Allergies; nutrition; diuretic; prostate (root)', 'Z3–10', 'Nourishing infusion; freeze-dried capsules; cooked', 'Handle fresh plant with gloves; root for BPH with MD supervision'],
            ['Hawthorn', 'Cardiovascular; heart failure support; blood pressure', 'Z3–9', 'Tincture (all parts); standardized caps; tea', 'NOT a substitute for heart disease treatment; digoxin interaction; stop 2 weeks before cardiac surgery'],
            ['Arnica', 'Bruises; muscle pain; joint pain; topical anti-inflammatory', 'Z4–9', 'Infused oil; salve; topical tincture (diluted)', 'EXTERNAL USE ONLY; do not apply to broken skin; Asteraceae allergy'],
            ['Milk Thistle', 'Liver protection; hepatoprotective; toxin exposure', 'All zones annual', 'Standardized capsules; ground seeds in food', 'Very safe; check invasive status in your state'],
            ['Dandelion', 'Liver; digestive; diuretic; nutritive tonic', 'All zones (already present)', 'Tea; decoction; tincture; cooked leaves', 'Only harvest from herbicide-free locations; bile duct caution'],
            ['Mullein', 'Respiratory; cough; bronchitis; ear pain', 'All zones (already present)', 'Tea (well strained); flower ear oil', 'Strain tea carefully through fine filter; confirm intact eardrum before ear oil'],
            ['Oregano', 'Antimicrobial; respiratory; immune; antifungal', 'Z4–9', 'Tea; oil of oregano capsules; culinary', 'Use Greek oregano for medicinal potency; EO causes burns undiluted'],
            ['Chaste Tree Berry (Vitex)', 'PMS; hormonal balance; breast tenderness; menstrual irregularity', 'Z6–9 perennial', 'Tincture; standardized capsules (morning dose)', 'Hormone-sensitive conditions; drug interactions; pregnancy avoid'],
            ['Red Raspberry Leaf', 'Uterine tonic; menstrual; nutritive; pregnancy (3rd trimester)', 'Z3–9', 'Tea; nourishing infusion; tincture', 'Good general safety; some practitioners recommend caution in first trimester'],
            ['Black Cohosh', 'Menopausal symptoms; hot flashes; menstrual; mood', 'Z3–8', 'Tincture; standardized capsules; root tea', 'Liver monitoring with long-term use; hormone-sensitive cancer: discuss with MD; not in pregnancy'],
          ],
        },
        {
          type: 'h3',
          text: 'Building Your Medicinal Herb Practice: The Long-Term Path',
        },
        {
          type: 'list',
          items: [
            'Keep a herb journal: Record what you planted, when it bloomed, when you harvested, what preparations you made, what dosage you used for what condition, and what the outcomes were. This becomes your most valuable herbal reference over time.',
            'Learn from multiple traditions: Western herbalism, Traditional Chinese Medicine, Ayurveda, and Native American healing traditions all have deep knowledge about many of the same plants. No single tradition has the complete picture.',
            'Find community: Local herb walks, herb guilds, and herbal study groups connect you with experienced practitioners. The American Herbalists Guild (americanherbalistsguild.com) maintains a directory of professional herbalists and educational programs.',
            'Know your limits: The most important mark of a skilled home herbalist is knowing when to refer to a physician. Herbal medicine is not a replacement for medical care — it is a complementary practice with enormous value in spaces where conventional medicine is unavailable, disproportionate to the need, or simply less effective.',
            'Continuously verify your knowledge: Herbal science is an active research field. The American Botanical Council (abc.herbalgram.org) and HerbMed database provide access to current research.',
          ],
        },
        {
          type: 'p',
          text: 'A medicinal herb garden is not a project with a completion date — it is a practice that deepens with each season. The first year, you learn which plants thrive in your specific conditions. The second year, you harvest with more confidence and begin to recognize the difference between a plant at peak potency and one past its moment. By the third year, you find yourself reaching for your own lavender before the sleep aids at the pharmacy, and your own elderberry syrup at the first sign of illness.',
        },
        {
          type: 'p',
          text: 'That accumulation of practical knowledge — knowing which herb to reach for, how to prepare it, when it is appropriate, and which combination serves the situation — is the real reward of growing medicinal herbs. It is a form of self-sufficiency and connection to the natural world that is genuinely satisfying, and a living link to the generations of healers who tended these same plants before the age of synthetic medicine. Begin conservatively, learn a few herbs well before adding more, stay honest about what herbs can and cannot do, and maintain your relationship with conventional medicine. The most effective approach to health care integrates both.',
        },
        {
          type: 'tip',
          emoji: '🌿',
          text: 'Start with three herbs you will actually use. Master growing, harvesting, and preparing them through a full season before adding more. Three herbs truly understood — harvested at peak, properly prepared, used with confidence — are worth far more than thirty half-known plants sitting untended in the garden.',
        },
      ],
    },
  ],
}
