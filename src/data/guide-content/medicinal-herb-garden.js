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
  ],
}
