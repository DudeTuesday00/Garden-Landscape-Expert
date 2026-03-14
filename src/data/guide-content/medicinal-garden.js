export const medicinalGardenContent = {
  id: 'medicinal-garden',
  hero: {
    emoji: '🌿',
    title: 'Medicinal Herb Garden',
    subtitle: 'Grow Medicinal Herbs at Home — Tinctures, Teas, Salves, Syrups & Remedies',
  },
  intro:
    'A medicinal garden is not a collection of cure-all miracle plants. It is a thoughtfully cultivated space growing herbs and plants with well-documented traditional and/or evidence-based uses — plants that have supported human health and wellbeing for centuries, that are accessible to the home grower, and whose preparations can be made safely at home with basic knowledge and technique. This guide covers the full medicinal garden lifecycle: growing profiles for 30+ medicinal herbs across all US climates (Zones 3–11), harvesting and processing, preparation techniques from simple teas to tinctures, syrups, salves, and infused oils, safety and drug interaction awareness, and the specific considerations around cannabis and adaptogens. This guide is an educational and horticultural reference — not medical advice. Consult a qualified healthcare provider before using medicinal herbs to treat any health condition, particularly if you take prescription medications, are pregnant, or have a chronic health condition.',

  sections: [
    {
      id: 'planning',
      title: 'Planning Your Medicinal Garden',
      blocks: [
        {
          type: 'p',
          text: 'A medicinal herb garden does not need to be large or complex. Even a single raised bed or a collection of containers can hold enough echinacea, chamomile, lemon balm, and calendula to supply a household with homegrown remedies throughout the year. The key is choosing plants that are well-suited to your climate, easy to grow, and genuinely useful to you.',
        },
        { type: 'h3', text: 'Design Principles' },
        {
          type: 'list',
          items: [
            'Start with 5–8 plants: Master a small collection before expanding. Echinacea, chamomile, calendula, lemon balm, and peppermint are the best starting five — hardy, productive, and broadly useful.',
            'Group by water needs: Mediterranean herbs (lavender, rosemary, thyme) want excellent drainage and infrequent watering. Moisture-lovers (mint, lemon balm, elderberry) prefer consistently moist soil. Keeping these groups separate simplifies care.',
            'Plan for perennials: Most medicinal herbs are perennials that return each year and expand over time. Space them for their mature size — echinacea, valerian, and comfrey all get significantly larger than their first-year appearance suggests.',
            'Include annuals for quick results: Chamomile, calendula, and tulsi are annuals that provide a harvest in the first season. Interplant them with slower-establishing perennials for immediate productivity.',
            'Consider containment: Mint, lemon balm, and comfrey spread aggressively. Grow them in sunken containers or define a dedicated area with edging to prevent them from overtaking neighboring plants.',
          ],
        },
        {
          type: 'table',
          headers: ['Garden Scale', 'Space', 'What You Can Grow', 'Annual Yield'],
          rows: [
            ['Container Collection', '6–8 large pots (5–15 gal)', 'Mint, lemon balm, calendula, chamomile, tulsi', 'Enough for regular fresh tea; limited dried stores'],
            ['Small Raised Bed (4×8)', 'One 4×8 ft bed', 'Echinacea, calendula, chamomile, lemon balm, mint (contained)', 'Significant dried herb supply; 1–2 tinctures per year'],
            ['Dedicated Herb Plot', '100–200 sq ft', 'Full range: echinacea, elderberry, valerian, comfrey, calendula, chamomile, tulsi, lavender, yarrow, St. John\'s Wort', 'Year-round supply of dried herbs, tinctures, salves, and teas'],
            ['Integrated Landscape', 'Throughout yard', 'All of the above plus elderberry shrubs, echinacea drifts, comfrey under fruit trees', 'Abundance — enough to share and preserve'],
          ],
        },
        {
          type: 'tip',
          emoji: '📋',
          text: 'Before You Plant: Make a list of the health concerns you most want to address — stress and sleep, immune support, digestion, skin healing, or pain relief. Then choose plants that directly serve those goals. A purposeful collection of 6 well-chosen herbs is more valuable than 20 plants you don\'t know how to use.',
        },
      ],
    },

    {
      id: 'essential-herbs',
      title: 'The Medicinal Garden at a Glance',
      blocks: [
        {
          type: 'p',
          text: 'The herbs and plants in this guide range from the entirely familiar (chamomile tea, peppermint for digestion, lavender for sleep) to the increasingly mainstream (echinacea for immune support, elderberry syrup, ashwagandha as an adaptogen) to the more specialized (valerian, skullcap, holy basil) to the legally complex but widely used (cannabis). What they share is a meaningful relationship between the plant, its constituents, and human physiology — a relationship accumulated across thousands of years of use and, increasingly, validated by modern research.',
        },
        {
          type: 'table',
          headers: ['Herb', 'Primary Uses', 'Part Used', 'Preparation', 'Ease', 'Cautions'],
          rows: [
            ['Echinacea', 'Immune support; cold/flu duration reduction', 'Roots, flowers, leaves', 'Tincture, tea, capsule', 'Easy', 'Autoimmune conditions; very long-term use'],
            ['Elderberry', 'Immune support; antiviral; antioxidant', 'Berries, flowers', 'Syrup, tincture, tea', 'Moderate', 'Raw berries toxic — must cook/prepare properly'],
            ['Chamomile', 'Sleep; anxiety; digestion; anti-inflammatory', 'Flowers', 'Tea, tincture, salve', 'Very easy', 'Asteraceae allergy; blood thinner interaction'],
            ['Lavender', 'Anxiety; sleep; headache; antimicrobial', 'Flowers', 'Tea, essential oil, tincture', 'Very easy', 'Avoid large internal doses; skin sensitizer'],
            ['Peppermint', 'Digestion; headache; nausea; antimicrobial', 'Leaves', 'Tea, tincture, essential oil', 'Very easy', 'GERD; infants/young children; drug interactions'],
            ['Lemon Balm', 'Anxiety; sleep; herpes; digestion', 'Leaves', 'Tea, tincture, salve', 'Very easy', 'Hypothyroidism (high doses); sedative interaction'],
            ['Valerian', 'Sleep; anxiety; muscle tension', 'Root', 'Tincture, capsule, tea', 'Easy', 'Sedative drugs; driving; morning grogginess'],
            ['St. John\'s Wort', 'Mild-moderate depression; nerve pain; wounds', 'Flowers, leaves', 'Tincture, oil, tea', 'Easy', 'MAJOR drug interactions — see safety section'],
            ['Ashwagandha', 'Adaptogen; stress; fatigue; thyroid support', 'Root', 'Powder, tincture, capsule', 'Moderate', 'Pregnancy; thyroid medications; nightshade family'],
            ['Tulsi / Holy Basil', 'Adaptogen; stress; immune; blood sugar', 'Leaves, flowers', 'Tea, tincture, fresh', 'Very easy', 'Anticoagulants; fertility medications'],
            ['Skullcap', 'Anxiety; insomnia; nerve pain; muscle spasm', 'Aerial parts', 'Tincture, tea', 'Moderate', 'Adulteration risk; liver (high doses); sedatives'],
            ['Calendula', 'Wound healing; skin inflammation; antifungal', 'Flowers', 'Salve, oil, tincture, tea', 'Very easy', 'Asteraceae allergy; pregnancy (internal, high dose)'],
            ['Plantain (Plantago)', 'Wound first aid; insect bites; cough; gut', 'Leaves', 'Poultice, tea, salve, syrup', 'Very easy', 'Anticoagulants (very high doses)'],
            ['Yarrow', 'Wound bleeding; fever; digestion; anti-inflammatory', 'Aerial parts', 'Tea, tincture, poultice', 'Easy', 'Pregnancy; Asteraceae allergy; anticoagulants'],
            ['Elderflower', 'Decongestant; fever; antiviral; anti-inflammatory', 'Flowers', 'Tea, tincture, syrup, cordial', 'Moderate', 'Identify correctly — toxic lookalikes exist'],
            ['Mullein', 'Respiratory; cough; ear infections; lymph', 'Leaves, flowers, root', 'Tea, infused oil, tincture', 'Easy', 'Very few; leaf hairs irritating — strain tea well'],
            ['Ginger', 'Nausea; digestion; anti-inflammatory; circulation', 'Root (rhizome)', 'Tea, tincture, fresh, powder', 'Moderate (container)', 'Anticoagulants at high doses; gallstones'],
            ['Turmeric', 'Anti-inflammatory; antioxidant; digestion; liver', 'Root (rhizome)', 'Powder, tincture, tea', 'Moderate', 'Anticoagulants; gallbladder disease; iron absorption'],
            ['Rosemary', 'Circulation; memory; antimicrobial; antioxidant', 'Leaves', 'Tea, tincture, infused oil', 'Very easy', 'Epilepsy (large doses); pregnancy (large doses)'],
            ['Thyme', 'Respiratory; antimicrobial; cough; digestion', 'Leaves', 'Tea, syrup, tincture, honey', 'Very easy', 'Very few at culinary/herbal doses'],
            ['Sage', 'Sore throat; hot flashes; antimicrobial; digestion', 'Leaves', 'Tea, tincture, gargle', 'Very easy', 'Pregnancy (large doses); epilepsy; estrogenic'],
            ['Marshmallow Root', 'Soothing irritated mucous membranes; cough; gut', 'Root, leaves', 'Cold infusion, tea, tincture', 'Moderate', 'Drug absorption timing (2 hours from medications)'],
            ['Passionflower', 'Anxiety; insomnia; nerve pain; blood pressure', 'Aerial parts', 'Tea, tincture', 'Moderate', 'Sedatives; MAOIs; pregnancy; driving'],
            ['Rhodiola', 'Adaptogen; fatigue; stress; cognitive function', 'Root', 'Tincture, powder, capsule', 'Difficult (cool climate)', 'Bipolar disorder; stimulating — avoid evening use'],
            ['Milk Thistle', 'Liver protection; liver detox support; antioxidant', 'Seeds', 'Tincture, seed meal, capsule', 'Easy', 'Asteraceae allergy; hormonal cancers (possible)'],
            ['Astragalus', 'Immune tonic; adaptogen; longevity; antiviral', 'Root', 'Decoction, tincture, powder', 'Moderate', 'Autoimmune conditions; immunosuppressants'],
            ['Hawthorn', 'Cardiovascular; heart tonic; anxiety; antioxidant', 'Berries, leaves, flowers', 'Tincture, tea, jam', 'Easy', 'Cardiac medications — use with medical supervision'],
            ['Cannabis (CBD-dominant)', 'Anxiety; pain; sleep; inflammation; seizure (CBD)', 'Flowers, leaves', 'Tincture, infused oil, tea, topical', 'Moderate', 'See cannabis section; drug interactions; legal status varies'],
            ['Cannabis (THC-dominant)', 'Pain; nausea; appetite; sleep; spasm (THC)', 'Flowers', 'Tincture, infused oil, edibles, inhalation', 'Moderate', 'See cannabis section; psychoactive; legal status varies'],
            ['Licorice Root', 'Adrenal support; anti-inflammatory; soothing; antiviral', 'Root', 'Decoction, tincture, tea', 'Moderate', 'Hypertension; hypokalemia; long-term use caution'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Safety First — Critical Principles: (1) Herbs are biologically active — they contain compounds that interact with human physiology. This is why they work, and why they can interact with medications. (2) Drug interactions are real and serious. St. John\'s Wort alone interacts with dozens of prescription medications including antidepressants, birth control, HIV medications, and blood thinners. Full interaction tables are in the Safety section. (3) Pregnancy and breastfeeding require extra caution — many herbs have uterine-stimulating effects or pass into breast milk. When in doubt, avoid. (4) Quality and identification matter — skullcap is frequently adulterated with germander, which causes liver damage. Grow your own from identified seed or buy from reputable suppliers. (5) This guide is educational, not medical advice. Do not use herbal preparations as a replacement for evaluation and treatment of serious health conditions.',
        },
      ],
    },

    {
      id: 'science',
      title: 'The Science of Plant Medicine',
      blocks: [
        {
          type: 'p',
          text: 'Understanding how medicinal plants work — what they contain, how those constituents interact with the body, and why different preparation methods extract different compounds — transforms herb growing from passive gardening into informed practice. You do not need a chemistry degree to use this knowledge effectively, but having a basic framework for thinking about plant constituents and preparations makes you a significantly more effective medicinal gardener.',
        },
        { type: 'h3', text: 'Major Classes of Medicinal Plant Constituents' },
        {
          type: 'list',
          items: [
            'Flavonoids & Polyphenols: The largest class of plant polyphenols, with over 6,000 identified compounds. Responsible for much of the antioxidant, anti-inflammatory, and cardiovascular-protective activity attributed to medicinal plants. Quercetin (elderberry, echinacea, calendula), rutin (elderflower), and hypericin (St. John\'s Wort) are well-studied examples. Generally water-soluble and extracted efficiently into teas and water-alcohol tinctures.',
            'Essential Oils (Terpenoids): The aromatic compounds in lavender, peppermint, thyme, and rosemary. Volatile terpenoid compounds that give plants their characteristic scents and have direct antimicrobial, antifungal, and anti-inflammatory activity. Menthol (peppermint), linalool (lavender), thymol (thyme), and carvacrol (oregano) are among the most studied. They evaporate with heat — teas using aromatic herbs should be covered while steeping. Extract most efficiently into alcohol or fixed oils.',
            'Alkaloids: Nitrogen-containing compounds that often have powerful physiological effects. Morphine, caffeine, and berberine are all alkaloids. In the medicinal garden, berberine (goldenseal, barberry) has documented antimicrobial activity; pyrrolizidine alkaloids (comfrey, coltsfoot) have hepatotoxic effects — the reason comfrey is not recommended for internal use despite its traditional reputation.',
            'Tannins: Astringent polyphenolic compounds — the \'drying\' sensation in strong tea or unripe fruit is tannin activity. In herbal medicine, tannins provide wound-healing, tissue-tightening, and antimicrobial effects. Yarrow, witch hazel, and raspberry leaf are high-tannin plants. Water-soluble and extract well into teas. Also bind to some minerals and may interfere with iron absorption when consumed in large quantities.',
            'Mucilaginous Compounds (Polysaccharides): Mucilaginous herbs contain polysaccharides that swell in water to produce a slippery, coating consistency. Marshmallow root, slippery elm, and plantain all contain mucilage that physically soothes and protects irritated mucous membranes in the throat, esophagus, stomach, and intestines. Mucilage extracts best in cold or room-temperature water — hot water can break down the polysaccharides. Cold infusion is the recommended preparation method.',
            'Immune-Modulating Polysaccharides: Distinct from mucilage, certain plant polysaccharides directly interact with the immune system. Echinacea\'s alkylamides and polysaccharides, astragalus polysaccharides, and elderberry\'s anthocyanin-containing compounds have documented immune-modulating effects. Generally water-soluble and extract into both teas and alcohol-water tinctures, though optimal extraction solvent varies by compound.',
          ],
        },
        { type: 'h3', text: 'Why Preparation Method Matters' },
        {
          type: 'p',
          text: 'Different constituents extract into different solvents. Understanding this principle allows you to choose the right preparation for the plant and the desired effect. The same plant prepared differently will have a meaningfully different chemical profile.',
        },
        {
          type: 'table',
          headers: ['Preparation', 'Solvent', 'Best Extracts', 'Poor At Extracting', 'Use For'],
          rows: [
            ['Hot water infusion (tea)', 'Water', 'Flavonoids, tannins, some volatile oils (if covered), water-soluble polysaccharides', 'Resins, fat-soluble compounds, some alkaloids', 'Flowers, leaves, most aromatic herbs; best for everyday use'],
            ['Decoction (simmered tea)', 'Water (heated)', 'Roots, bark, seeds; hard plant materials; minerals', 'Volatile compounds (lost to steam)', 'Echinacea root, valerian root, elderberry, ashwagandha, hard seeds'],
            ['Cold infusion', 'Water (cold)', 'Mucilaginous polysaccharides; delicate volatile oils', 'Most resins and deep constituents', 'Marshmallow root, rose petals — anything where heat degrades the desired compound'],
            ['Alcohol tincture (1:5)', 'Ethanol (alcohol) 25–60%', 'Alkaloids, resins, glycosides, essential oils, most plant constituents broadly', 'Some large polysaccharides (mucilage)', 'Standard extraction for most roots and leaves; long shelf life (3–5 years)'],
            ['Glycerite (glycerin extract)', 'Vegetable glycerin', 'Similar to water; sweet taste; no alcohol', 'Resins, many alkaloids, fat-soluble compounds', 'Children\'s preparations; alcohol-free adults; milder extraction than tincture'],
            ['Infused oil (cold or warm)', 'Fixed oil (olive, coconut, jojoba)', 'Fat-soluble compounds, essential oils (partially), resins', 'Water-soluble flavonoids, tannins, most polysaccharides', 'Topical use: salves, balms, massage oils'],
            ['Vinegar extract (oxymel)', 'Apple cider vinegar + honey', 'Alkaloids (best in acidic medium), some flavonoids, minerals', 'Fat-soluble compounds', 'Mineral-rich herbs (nettles), some alkaloids; pleasant taste; shorter shelf life'],
            ['Syrup', 'Water + sugar or honey', 'Water-soluble constituents of the initial infusion/decoction', 'Fat-soluble, resinous', 'Elderberry syrup, thyme cough syrup; preservative sugar extends shelf life'],
          ],
        },
        { type: 'h3', text: 'The Evidence Spectrum — Evaluating Herbal Research' },
        {
          type: 'p',
          text: 'Medicinal herbs occupy a wide spectrum of evidence quality. Understanding this spectrum helps calibrate realistic expectations.',
        },
        {
          type: 'list',
          items: [
            'Strong clinical evidence (randomized controlled trials): Elderberry (antiviral activity, reduced flu duration), St. John\'s Wort (mild-moderate depression, equivalent to SSRIs in multiple trials), Peppermint oil (IBS, tension headache), Echinacea (immune support, modest reduction in cold duration), Valerian (sleep quality), Hawthorn (cardiovascular support), Ginger (nausea).',
            'Good traditional use with emerging evidence: Ashwagandha, Tulsi/Holy Basil, Calendula (wound healing), Marshmallow root, Yarrow, Lemon Balm, Skullcap, Passionflower, Milk Thistle (liver protection — good evidence), Astragalus.',
            'Long traditional use with limited modern research: Many minor herbs and garden plants with deep cultural history but few or no clinical trials. Their value lies in centuries of documented use rather than controlled studies.',
            'Mechanistic evidence only (weakest form): Studies showing in vitro (laboratory) activity. Many compounds that kill bacteria in a petri dish are not useful as medicines. Always look for in vivo (animal or human) research before attributing clinical significance to in vitro findings.',
          ],
        },
        {
          type: 'tip',
          emoji: '🔬',
          text: 'The Best Herbs Have Both: The most reliable medicinal herbs in this guide have a combination of long traditional use across multiple cultures AND modern clinical evidence. When an herb has centuries of consistent cross-cultural use and modern trials confirming its effects, that convergence is meaningful. Elderberry, chamomile, valerian, peppermint, and echinacea all have this dual validation.',
        },
      ],
    },

    {
      id: 'immune-antiviral',
      title: 'Immune & Antiviral Plants',
      blocks: [
        {
          type: 'p',
          text: 'These are the most important medicinal plants for immune support and antiviral activity. They are among the most evidence-supported and most practical plants for the home medicinal garden, with applications that most people will find immediately relevant and preparations that are straightforward to make.',
        },
        { type: 'h3', text: '🌸 Echinacea (Echinacea purpurea, E. angustifolia, E. pallida)' },
        {
          type: 'p',
          text: 'Echinacea is the most widely studied immune herb in Western herbal medicine and one of the best-selling herbal supplements globally. Three species are used medicinally, each with somewhat different constituent profiles. Echinacea purpurea is the easiest to grow and the most clinically researched; E. angustifolia has the strongest traditional reputation in North American herbalism; E. pallida is primarily used in European phytomedicine.',
        },
        {
          type: 'list',
          items: [
            'Active constituents: Alkylamides (immunomodulatory — produce the characteristic tingling on the tongue), caffeic acid derivatives (echinacoside, cichoric acid — antioxidant, antiviral), polysaccharides (immune-stimulating), essential oils.',
            'Evidence: Meta-analyses show modest but statistically significant reductions in cold incidence (approximately 10–58%) and duration (approximately 1.4 days). Effects are more consistent for prevention than treatment. E. purpurea aerial parts and E. angustifolia root show the strongest results.',
            'Parts used: E. purpurea — aerial parts (leaves, stems, flowers) during bloom; roots in fall. E. angustifolia — roots. E. pallida — roots.',
            'Preparations: Tincture (1:5 in 60% alcohol) is the most effective preparation for alkylamides — it should produce a noticeable tingling-numbing sensation on the tongue. Tea (less effective for alkylamides but still contains polysaccharides and caffeic acids). Glycerite (alcohol-free option, some loss of alkylamide extraction).',
            'Contraindications: Autoimmune conditions (lupus, MS, rheumatoid arthritis) — theoretical contraindication based on immune-stimulating activity. Avoid in organ transplant recipients on immunosuppressants. Limit continuous use to 8–12 weeks; use seasonally or intermittently.',
            'Growing across US climates: All three species are prairie perennials hardy in Zones 3–9. E. purpurea tolerates more humidity and heavier soil — the better choice for the South and East. E. angustifolia prefers lean, well-drained soils of the Great Plains and West. Direct sow in fall for spring germination, or cold-stratify seeds 4–6 weeks before spring sowing. Harvest roots in fall of year 3+ for medicinal quality.',
          ],
        },
        { type: 'h3', text: '🫐 Elder (Sambucus nigra) — Elderberry & Elderflower' },
        {
          type: 'p',
          text: 'Elder is one of the most medicinally versatile plants in temperate gardens, providing two distinct medicines from the same plant at different times of year: elderflowers in late spring (anti-inflammatory, diaphoretic, decongestant) and elderberries in late summer and fall (antiviral, immune-modulating, extraordinarily high in anthocyanins and flavonoids). Both have strong evidence bases and excellent safety profiles when properly prepared.',
        },
        {
          type: 'list',
          items: [
            'Active constituents (berries): Anthocyanins (cyanidin-3-glucoside and cyanidin-3-sambubioside — antiviral activity, inhibit viral hemagglutinin), flavonoids (quercetin, kaempferol), sambunigrin (cyanogenic glycoside — denatured by heat or 40%+ alcohol).',
            'Evidence: Multiple clinical trials show elderberry extract significantly reduces duration and severity of influenza and cold symptoms. A 2016 randomized trial showed elderberry supplementation reduced cold duration by an average of 2 days.',
            'Elderflower preparations: Tea (diaphoretic — promotes sweating during fever; decongestant; anti-inflammatory), tincture, cordial. Elderflowers can be used fresh or dried.',
            'Growing across US climates: Sambucus nigra is extremely widely adapted in Zones 3–9. Native American Sambucus canadensis (American black elder) is an excellent choice for eastern gardeners and is native across the entire eastern US. In the arid Southwest and high Plains, provide supplemental irrigation and mulch. Plant 2 varieties for cross-pollination and maximum berry set. Expect first significant harvest in year 2–3.',
          ],
        },
        {
          type: 'warning',
          emoji: '🚫',
          text: 'Raw Elderberries Are Toxic: Fresh or dried elderberries contain sambunigrin, which hydrolyzes to hydrogen cyanide. Raw elderberries cause nausea, vomiting, and in large quantities, serious toxicity. All elderberry preparations for internal use must use heat or alcohol to denature the cyanogenic compounds. Cooked elderberry syrup, tinctures in 40%+ alcohol, and fully cooked preparations are all safe. Red elderberry (Sambucus racemosa) is always toxic and must never be used.',
        },
        { type: 'h3', text: '🌱 Astragalus (Astragalus membranaceus)' },
        {
          type: 'p',
          text: 'Astragalus is a foundational herb in Traditional Chinese Medicine, used for over 2,000 years as a deep immune tonic and restorative herb. This distinction is important: astragalus is best used as a long-term immune tonic (weeks to months), not as an acute treatment during active infection — it complements echinacea rather than replacing it.',
        },
        {
          type: 'list',
          items: [
            'Active constituents: Astragalosides (saponins — including astragaloside IV with documented telomere research), polysaccharides (astragalans — immune-modulating), flavonoids.',
            'Preparations: Decoction (simmer root slices 30–45 minutes and drink as tea), tincture, powder added to soups and broths. Traditional Chinese use often involves simmering whole root slices in broth for immune tonic benefit.',
            'Contraindications: Active autoimmune conditions; immunosuppressant medications. Not a substitute for echinacea during acute illness.',
            'Growing across US climates: Hardy perennial legume across Zones 5–9. Full sun, excellent drainage, lean soil. Grows well across the Midwest, Plains, South, and West. In the humid Southeast, ensure very good drainage to prevent root rot. In Zones 3–4, grow as a self-seeding annual or mulch roots heavily before winter. Inoculate seeds with rhizobium legume inoculant for best establishment. Harvest roots in fall of year 3–4.',
          ],
        },
        { type: 'h3', text: '🧄 Garlic (Allium sativum) — The Kitchen Medicine' },
        {
          type: 'p',
          text: 'Garlic is the most evidence-supported antimicrobial plant in any kitchen garden. Allicin — the compound formed when garlic is crushed, releasing alliinase enzyme to convert alliin — has potent broad-spectrum antimicrobial activity. It is unstable, volatile, and destroyed by heat, which is why raw garlic has stronger medicinal activity than cooked.',
        },
        {
          type: 'list',
          items: [
            'Active constituents: Allicin (unstable, antimicrobial, formed on crushing), S-allyl cysteine (more stable, cardiovascular effects, present in aged garlic), sulfur compounds broadly.',
            'Preparations: Raw crushed garlic in honey (1–2 raw crushed cloves in honey for immune support during illness), oxymel (garlic in apple cider vinegar and honey), Fire Cider (apple cider vinegar infused with garlic, horseradish, ginger, onion, and cayenne for 4–6 weeks; strain; add honey).',
            'Cautions: At culinary amounts (1–2 cloves), drug interactions are not clinically significant. Supplement doses or concentrated preparations may increase bleeding risk with anticoagulants such as warfarin.',
            'Growing across US climates: Garlic is grown across all 50 states. In most of the continental US (Zones 3–8), plant hardneck or softneck cloves in fall (October–November) after first frost but before hard freeze. In mild-winter areas (Zones 9–10 — Southern California, Gulf Coast, Florida, Hawaii), plant October–December and choose softneck varieties that require less cold vernalization.',
          ],
        },
        {
          type: 'tip',
          emoji: '🛡️',
          text: 'Stacking Immune Herbs: Echinacea, elderberry, astragalus, and garlic work through different mechanisms and complement each other well. A practical protocol: astragalus as a daily long-term tonic (in tea or soups), elderberry syrup daily through cold and flu season, echinacea at the first sign of illness for 7–10 days, and raw garlic or fire cider during active infection.',
        },
      ],
    },

    {
      id: 'growing-guide',
      title: 'Growing Guide — Detailed Herb Profiles',
      blocks: [
        { type: 'h3', text: '🌼 Chamomile (Matricaria chamomilla — German Chamomile)' },
        {
          type: 'list',
          items: [
            'Annual — grows in all zones. Self-seeds prolifically once established; a planting can perpetuate indefinitely.',
            'Sun and soil: Full sun; average to poor, well-drained soil. Tolerates lean conditions. Does not compete well with aggressive weeds.',
            'Growing: Direct sow on the soil surface in early spring (chamomile needs light to germinate — do not cover). Thin to 6–9 inches apart. In mild climates, sow again in fall for early spring blooms.',
            'Harvest: Pick flowers when petals are fully reflexed (swept backward from the central cone) and the cone is firm. This is peak essential oil content. Harvest every 2–3 days at peak bloom.',
            'Medicinal use: Chamomile tea promotes relaxation, reduces anxiety, and soothes an irritated digestive tract. Applied topically (as a strong tea or infused oil), it calms inflamed or sensitive skin. One of the safest herbs for children.',
          ],
        },
        { type: 'h3', text: '🧡 Calendula (Calendula officinalis)' },
        {
          type: 'list',
          items: [
            'Annual — grows in all zones. Prefers cool weather; blooms best in spring and fall.',
            'Sun and soil: Full sun; average well-drained soil. Direct sow in early spring 2–3 weeks before last frost (seeds tolerate light frost).',
            'Growing: The more you harvest, the more it blooms. A single plant cut regularly will produce 50–100 flowers over a season. Stop producing in extreme summer heat; cut back and it rebounds in fall.',
            'Harvest: Pick flowers when fully open. Use fresh in infused oil or dry on screens in a warm location with airflow.',
            'Medicinal use: Calendula is the premier herb for skin: wound healing, soothing burns and rashes, treating eczema and dry skin, and promoting cell repair. It works primarily as an infused oil or salve applied topically. Calendula tea soothes the digestive tract lining and has mild antifungal properties.',
          ],
        },
        { type: 'h3', text: '🍋 Lemon Balm (Melissa officinalis)' },
        {
          type: 'list',
          items: [
            'Zones: 3–7 as a perennial; grown as an annual in warmer climates.',
            'Sun and soil: Full sun to part shade; moist, fertile soil. Grows vigorously and spreads — plant in a contained area or sunken pot.',
            'Growing: Direct sow or transplant after last frost. Cut back to 6 inches two or three times per season to prevent flowering and extend leaf production.',
            'Harvest: Cut stems before the plant flowers for highest essential oil content. Use fresh or dry immediately — lemon balm loses much of its aroma when dried slowly. Dry in a single layer at low heat.',
            'Medicinal use: Lemon balm is calming without causing drowsiness — ideal for daytime anxiety, nervous tension, and digestive upset triggered by stress. Topically, a strong lemon balm tea applied to cold sores (oral herpes) has clinical evidence for reducing healing time.',
          ],
        },
        { type: 'h3', text: '🌿 Peppermint & Spearmint (Mentha × piperita, M. spicata)' },
        {
          type: 'list',
          items: [
            'Zones: 3–11. Extremely vigorous perennials — grow in buried containers to prevent garden takeover.',
            'Sun and soil: Full sun to part shade; moist, fertile soil. Tolerates a wide range of conditions.',
            'Growing: Do not grow from seed — mint seeds are unreliable and often revert to less flavorful strains. Purchase named variety transplants.',
            'Harvest: Cut stems frequently before flowering for best flavor and essential oil content. Mints regenerate quickly — 3–4 harvests per season is easily achievable.',
            'Medicinal use: Peppermint is the more potent of the two. Peppermint tea relieves nausea, bloating, and irritable bowel symptoms. Diluted peppermint essential oil applied to the temples relieves tension headaches (clinical evidence supports this). Spearmint is gentler and preferred for children\'s teas.',
          ],
        },
        { type: 'h3', text: '💜 Lavender (Lavandula angustifolia)' },
        {
          type: 'list',
          items: [
            'Zones: 5–9 (English lavender is the hardiest; French lavender Zones 7+).',
            'Sun and soil: Full sun; excellent drainage; average to poor, alkaline soil. Heavy clay soils must be amended with coarse grit for drainage. Raised beds are ideal in wet climates.',
            'Growing: Plant transplants in spring. Space 18–24 inches apart. Prune after flowering — cut back by 1/3 but never into old wood, which does not regenerate.',
            'Harvest: Cut flower spikes when buds are 50% open for maximum essential oil. Bundle and hang upside down to dry in a warm, ventilated location.',
            'Medicinal use: Lavender aromatherapy reduces anxiety and promotes sleep — clinical trials support this. Lavender tea (1 tsp dried buds per cup, steeped 5 minutes) is calming and mildly analgesic. Diluted lavender essential oil applied topically soothes minor burns and insect stings.',
          ],
        },
        { type: 'h3', text: '🌻 Yarrow (Achillea millefolium)' },
        {
          type: 'list',
          items: [
            'Zones: 3–9. Tough, drought-tolerant native perennial. Spreads by rhizome — site accordingly.',
            'Sun and soil: Full sun; poor to average, very well-drained soil. Tolerates drought and neglect. Performs poorly in rich, moist soil.',
            'Harvest: Cut flower clusters with leaves when fully open. Dry in bundles or on screens.',
            'Medicinal use: Yarrow is one of the oldest wound herbs — pressed against a cut, it acts as a styptic (stops bleeding). Strong yarrow tea induces diaphoresis (sweating), which can help break a fever. Internally, yarrow tea supports digestion and reduces cramping.',
          ],
        },
        { type: 'h3', text: '🌱 Tulsi / Holy Basil (Ocimum tenuiflorum)' },
        {
          type: 'list',
          items: [
            'Annual in all zones (perennial in Zone 10+). Tropical herb that thrives in summer heat.',
            'Sun and soil: Full sun; well-drained, moderately fertile soil. Start from seed indoors 6–8 weeks before last frost, or direct sow after soil warms above 65°F.',
            'Growing: Pinch flower buds continuously to extend leaf production. Frost-sensitive — protect or harvest before the first fall frost.',
            'Harvest: Cut stems regularly, leaving 2–3 pairs of leaves on the plant for regrowth. Dry at low heat or use fresh.',
            'Medicinal use: Tulsi is an adaptogen — it helps the body regulate stress and supports immune function without stimulating or sedating. Daily tulsi tea reduces stress markers in clinical studies. It also has antimicrobial and anti-inflammatory properties. The flavor (clove-like, slightly sweet) is appealing enough for daily use.',
          ],
        },
        { type: 'h3', text: '🌿 Comfrey (Symphytum officinale)' },
        {
          type: 'list',
          items: [
            'Zones: 3–9. Extremely vigorous perennial — once established it is nearly impossible to eradicate. Site permanently and deliberately.',
            'Sun and soil: Full sun to part shade; moist, fertile soil. Grows large (4 feet tall, 4 feet wide).',
            'Important: Comfrey contains pyrrolizidine alkaloids that are liver-toxic when ingested. Use TOPICALLY ONLY as a salve, poultice, or infused oil applied to unbroken skin. Do not make comfrey tea for drinking.',
            'Harvest: Cut large leaves throughout the growing season. Use fresh for poultices or infuse in oil for salves.',
            'Medicinal use: Comfrey contains allantoin, which stimulates cell proliferation and speeds healing of bruises, sprains, fractures, and muscle soreness. Applied as a salve or poultice to an unbroken injury site, it is genuinely effective — clinical trials confirm it outperforms conventional anti-inflammatory creams for blunt-force injuries.',
          ],
        },
        { type: 'h3', text: '😴 Valerian (Valeriana officinalis)' },
        {
          type: 'list',
          items: [
            'Zones: 4–9. Tall perennial (4–5 feet) with clusters of small white to pale pink flowers in early summer. Very ornamental — fits well in the back of a border.',
            'Sun and soil: Full sun to part shade; moist, fertile soil. Tolerates average garden conditions once established.',
            'Growing: Start from seed (sow indoors 6–8 weeks before last frost) or plant divisions. Takes two years to develop roots worth harvesting. Do not disturb established plants unnecessarily — the root system takes time to mature.',
            'Harvest: Dig roots in fall of the plant\'s second or third year, after aerial parts begin to die back. Wash thoroughly, slice into 1/4-inch pieces, and dry at 95–105°F. Note: fresh valerian root has little odor; dried root develops its characteristic strong, earthy smell as iridoid compounds break down.',
            'Medicinal use: Valerian root is among the most studied herbal sleep aids. It reduces the time to fall asleep and improves sleep quality without causing morning grogginess (unlike pharmaceutical sedatives). Also used for anxiety and muscle tension. Best taken as a tea (1 tsp dried root per cup, decocted 20 minutes) or tincture 30–60 minutes before bed.',
          ],
        },
        { type: 'h3', text: '☀️ St. John\'s Wort (Hypericum perforatum)' },
        {
          type: 'list',
          items: [
            'Zones: 3–8. Sprawling perennial, 1–3 feet tall, with bright yellow flowers. Spreads readily by seed and rhizome — give it space or confine it.',
            'Sun and soil: Full sun; average to poor, well-drained soil. Tolerates dry, rocky, or infertile ground. Thrives in disturbed areas and roadsides in the wild.',
            'Growing: Direct sow in fall (seeds need cold stratification) or start indoors 6–8 weeks before last frost with a 4–6 week cold period. Transplants establish easily. The plant self-seeds prolifically once established.',
            'Identification tip: Hold a leaf up to light — the translucent oil glands appear as tiny clear dots perforating the leaf (hence "perforatum"). Crush a bud between your fingers — it should release a red-purple stain from the hypericin pigment.',
            'Harvest: Collect flower buds and flowers together when buds are just beginning to open (not fully open flowers). This is when hypericin content is highest. Use fresh for tincturing immediately — the fresh plant makes a superior preparation to dried.',
            'Medicinal use: Clinical evidence supports St. John\'s Wort for mild to moderate depression, comparable in effect to low-dose SSRIs with fewer side effects. Also effective topically as an infused oil for nerve pain, sciatica, and bruising. Critical drug interactions — see the Safety section before use.',
          ],
        },
        { type: 'h3', text: '🫙 Skullcap (Scutellaria lateriflora)' },
        {
          type: 'list',
          items: [
            'Zones: 5–8. Native North American perennial, 1–2 feet tall, with small blue-purple tubular flowers along the stems in summer.',
            'Sun and soil: Part shade to full sun; moist, rich, well-drained soil. Prefers woodland edge conditions — consistent moisture with good drainage.',
            'Growing: Start from seed indoors 6–8 weeks before last frost (surface sow; needs light). Transplant after last frost. Establish slowly the first year; more productive by year 2–3. Divide clumps every 3–4 years to maintain vigor.',
            'Harvest: Cut the entire aerial portion (stems, leaves, and flowers) when in full bloom. Use fresh for tincturing — skullcap loses significant potency when dried. If drying, dry quickly at low heat and use within 6 months.',
            'Medicinal use: Skullcap is a nervine tonic — it calms nervous tension, anxiety, and muscle spasms without sedating. Effective for racing thoughts that interfere with sleep, nervous exhaustion, and tension headaches. Works best as a fresh plant tincture rather than tea. One of the most reliable herbs for anxiety that can be used during the day without impairing function.',
          ],
        },
        { type: 'h3', text: '🌿 Ashwagandha (Withania somnifera)' },
        {
          type: 'list',
          items: [
            'Zones: 8–10 as a perennial; grown as an annual in Zones 5–7. A shrubby plant from the nightshade family, growing 2–4 feet tall.',
            'Sun and soil: Full sun; light, well-drained, sandy or loamy soil. Adapted to hot, dry conditions — does not tolerate wet or heavy clay soils.',
            'Growing: Start seeds indoors 6–8 weeks before last frost in warm climates, or direct sow after soil reaches 70°F. Germinates in 7–14 days with warmth. In colder zones, treat as an annual and harvest roots at the end of the first season (roots will be smaller but still medicinally useful).',
            'Harvest: Dig roots in fall after the first frost blackens the foliage (or at the end of the growing season in annual plantings). Roots should be pencil-thick or larger. Wash, chop into 1/2-inch pieces, and dry at 105–115°F.',
            'Medicinal use: Ashwagandha is the premier adaptogen in Ayurvedic medicine — it helps the body adapt to stress, supports adrenal function, improves sleep quality, and sustains energy over time. Clinical trials show significant reduction in cortisol levels and self-reported stress with 300–600 mg of root extract daily. Traditionally taken as a warm milk decoction (golden milk base) or as a tincture. Effects build over 4–8 weeks of consistent use.',
          ],
        },
        { type: 'h3', text: '💜 Motherwort (Leonurus cardiaca)' },
        {
          type: 'list',
          items: [
            'Zones: 4–8. Tall, upright perennial (3–5 feet) in the mint family, with whorls of small pink-purple flowers along the stem in summer. Self-seeds freely — deadhead after bloom to prevent spreading.',
            'Sun and soil: Full sun to part shade; average, well-drained soil. Tolerates poor soil, drought, and urban conditions. Very adaptable.',
            'Growing: Direct sow in early spring or fall (seeds need cold stratification for best germination). Transplants establish easily. Once established, it will self-seed and spread — manage the seedlings or it will naturalize throughout the garden.',
            'Harvest: Cut the aerial parts (stems with leaves and flowers) when in full bloom. Use fresh for tincturing or dry quickly at low heat.',
            'Medicinal use: Motherwort is the herb for the heart — used traditionally and in modern herbalism for heart palpitations related to anxiety, rapid heartbeat triggered by stress or menopause, and nervous tension that presents as cardiac symptoms. It also has a long history of use for menstrual irregularity and cramps, and as a uterine tonic. Do not use during pregnancy — it stimulates uterine contractions. Requires medical supervision for anyone on heart medications.',
          ],
        },
        { type: 'h3', text: '🌿 Cannabis (Cannabis sativa / C. indica — Hemp & CBD Varieties)' },
        {
          type: 'warning',
          emoji: '⚖️',
          text: 'Legal Status Varies: Cannabis is federally legal to grow as hemp if plants contain less than 0.3% THC (dry weight). Medical cannabis is legal in most states; recreational/adult-use cannabis is legal in many states but remains illegal in others. Before growing any cannabis — including hemp — verify your state and local regulations. Possession and cultivation laws differ significantly by jurisdiction.',
        },
        {
          type: 'list',
          items: [
            'Varieties for the medicinal garden: Hemp varieties bred for high CBD and low THC (under 0.3%) are legal federally and widely available. Look for certified hemp seed varieties such as Cherry Wine, Wife, Suver Haze, or Elektra. Medical and recreational cannabis varieties (higher THC) are available through licensed dispensaries in legal states.',
            'Zones: Annual in all zones; thrives in Zones 5–10. Frost-sensitive — start indoors or direct sow after last frost when soil has warmed to at least 60°F.',
            'Sun and soil: Full sun (8+ hours); rich, well-drained, loamy soil with a pH of 6.0–7.0. Cannabis is a heavy feeder and responds well to organic compost-amended soil. Avoid waterlogged or compacted ground.',
            'Growing: Start seeds indoors 3–4 weeks before last frost in 4-inch pots. Transplant after frost danger passes. Space plants 3–5 feet apart — cannabis grows rapidly and can reach 4–8 feet tall in a single season depending on variety. Feminized seeds (available from licensed hemp seed suppliers) prevent male plants, which do not produce medicinal flowers.',
            'Watering: Cannabis needs consistent moisture during vegetative growth. Reduce watering slightly during flowering to encourage resin production. Overwatering causes root rot — always allow the top inch of soil to dry between waterings.',
            'Harvest for CBD hemp: Harvest when trichomes (the tiny crystal-like glands on flowers) turn from clear to milky white — before they amber. Use a jeweler\'s loupe or handheld microscope. Cut whole branches; hang upside down in a cool (60–70°F), dark, well-ventilated space for 7–14 days until stems snap cleanly.',
            'Processing: Dried hemp flowers can be used to make CBD-infused oil (same method as other herbal oil infusions, using a carrier oil at low heat), tinctures (using high-proof alcohol), or topical salves. Decarboxylation (heating at 220–245°F for 30–45 minutes before infusing) activates cannabinoids for maximum effect in edible or tincture preparations.',
          ],
        },
        {
          type: 'tip',
          emoji: '🔬',
          text: 'CBD vs. THC — Understanding the Difference: CBD (cannabidiol) is non-psychoactive and is the primary medicinal compound in hemp. It has evidence for reducing anxiety, improving sleep, reducing inflammation, and managing certain seizure disorders. THC (tetrahydrocannabinol) is psychoactive and is the primary compound in medical/recreational cannabis. Most medicinal garden growers focus on high-CBD hemp varieties, which are federally legal and straightforward to grow without licensing in most states.',
        },
      ],
    },

    {
      id: 'harvesting-processing',
      title: 'Harvesting & Processing Medicinal Herbs',
      blocks: [
        {
          type: 'p',
          text: 'The quality of any medicinal preparation depends entirely on the quality of the herb going in. Correctly harvested and carefully dried herbs retain their volatile oils, flavonoids, and active constituents for 1–2 years. Improperly handled herbs lose potency within weeks.',
        },
        { type: 'h3', text: 'Harvest Timing by Plant Part' },
        {
          type: 'table',
          headers: ['Part', 'When to Harvest', 'Why This Timing', 'Examples'],
          rows: [
            ['Leaves', 'Just before the plant flowers, in the morning after dew dries', 'Highest essential oil and active compound concentration before flowering; morning harvest before heat volatilizes oils', 'Mint, lemon balm, tulsi, motherwort, skullcap'],
            ['Flowers', 'When just opening — not fully open, not past peak', 'Peak active compounds at early bloom; flowers deteriorate quickly once fully open', 'Chamomile, calendula, St. John\'s Wort, echinacea, elderflower'],
            ['Roots', 'Fall of the plant\'s second or third year, after aerial parts die back', 'Plants concentrate energy into roots for winter; highest root compound levels in fall', 'Echinacea, valerian, ashwagandha, comfrey'],
            ['Berries', 'Fully ripe — deeply colored and slightly soft', 'Unripe berries of many medicinal plants are toxic or ineffective; flavor is the best guide', 'Elderberry, rosehip, hawthorn'],
            ['Bark', 'Spring or fall, from young stems (not main trunk)', 'Active compounds concentrate in bark when sap is moving; young stems are more potent than old bark', 'Elder bark, willow bark'],
          ],
        },
        { type: 'h3', text: 'Drying for Long-Term Storage' },
        {
          type: 'list',
          items: [
            'Temperature: Dry at 95–115°F for most leafy herbs. Higher temperatures (up to 125°F) for roots and bark. Avoid temperatures above 130°F — heat destroys delicate volatile oils.',
            'Airflow: Good airflow prevents mold. Spread herbs in a single layer on drying screens, or hang bundles upside down in a warm, ventilated space.',
            'Light: Keep herbs out of direct sunlight during drying. UV light degrades chlorophyll and many active compounds.',
            'Time: Leafy herbs dry in 1–2 weeks air-dried; 4–8 hours in a food dehydrator. Roots and bark take 1–3 weeks.',
            'Ready test: Leaves should crumble when rubbed; stems should snap cleanly; roots should be brittle throughout with no flex.',
            'Storage: Store dried herbs in airtight glass jars in a cool, dark location. Label with plant name, part, harvest date. Use within 1–2 years.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌡️',
          text: 'The Paper Bag Test: If you don\'t have a dehydrator, place herbs loosely in a paper bag, fold the top closed, and set in a warm, dry location. Check after one week. This method dries herbs slowly with good airflow and protects them from light. It works reliably for most leafy herbs — chamomile, lemon balm, mint, calendula, and tulsi.',
        },
      ],
    },

    {
      id: 'remedies',
      title: 'Making Remedies — Teas, Tinctures & Salves',
      blocks: [
        {
          type: 'p',
          text: 'The three most useful home preparations are herbal teas (infusions and decoctions), alcohol tinctures, and infused oil salves. Each extracts different constituents and is appropriate for different herbs and uses.',
        },
        { type: 'h3', text: 'Herbal Teas: Infusions and Decoctions' },
        {
          type: 'table',
          headers: ['Method', 'For', 'How To', 'Steep Time', 'Best For'],
          rows: [
            ['Infusion (standard tea)', 'Leaves, flowers, soft plant parts', 'Pour just-boiled water over herb in a covered vessel (cover is essential to capture volatile oils). Use 1 tbsp fresh herb or 1 tsp dried per cup of water.', '5–15 minutes covered', 'Chamomile, mint, lemon balm, tulsi, calendula, lavender'],
            ['Decoction', 'Roots, bark, berries, seeds', 'Simmer herb in cold water, covered, over low heat. Use 1 tbsp dried root or bark per cup of water.', '20–40 minutes simmer, then steep 10 more minutes', 'Echinacea root, valerian root, elderberry, ashwagandha'],
            ['Long Infusion (cold)', 'Delicate roots and mucilaginous herbs', 'Combine herb and room-temperature water; cover and steep overnight (8–12 hours) in the refrigerator.', '8–12 hours, cold', 'Marshmallow root, slippery elm; retains mucilage better than hot water'],
          ],
        },
        { type: 'h3', text: 'Alcohol Tinctures' },
        {
          type: 'p',
          text: 'Tinctures extract and preserve a broad range of plant constituents — including alcohol-soluble resin compounds not captured by water — and last 3–5 years. They are the most concentrated and shelf-stable form of most medicinal herbs.',
        },
        {
          type: 'list',
          items: [
            'Alcohol: Use food-grade alcohol at 40–60% ABV (80–120 proof). 80-proof vodka (40% alcohol) works for most leaves and flowers. 60% alcohol (Everclear diluted) is needed for resins and roots with high resin content.',
            'Folk method (ratio): Fill a clean glass jar loosely with fresh herb (or half-fill with dried herb). Cover completely with alcohol. Cap tightly and store in a cool, dark place for 4–6 weeks, shaking daily.',
            'Weight/volume method (precise): Use 1 gram of dried herb per 5 ml of alcohol for standard strength (1:5 ratio). For more potent herbs like valerian or St. John\'s Wort, use 1:3 or 1:4 ratio.',
            'Straining: After 4–6 weeks, strain through cheesecloth, pressing the herb mass to extract maximum liquid. Pour into dark glass dropper bottles.',
            'Dosage: Standard adult dose is 30–40 drops (1–2 ml) in a small amount of water, 2–3 times daily. Always research specific dosing for individual herbs.',
            'Shelf life: Properly made tinctures in dark glass bottles last 3–5 years stored in a cool, dark location.',
          ],
        },
        { type: 'h3', text: 'Infused Oils and Salves' },
        {
          type: 'list',
          items: [
            'Best herbs for oil infusion: Calendula, comfrey leaf, lavender, St. John\'s Wort (fresh flowers turn the oil a brilliant red — this is correct).',
            'Carrier oils: Extra virgin olive oil is traditional and effective. Fractionated coconut oil, jojoba, or sunflower oil are alternatives with longer shelf lives.',
            'Slow infusion (preferred): Fill a clean jar with dried herb (fresh herbs can introduce water that causes mold). Cover with oil, leaving 1 inch headspace. Place in a warm spot (a sunny windowsill or a yogurt maker at 100°F) for 4–6 weeks. Strain and bottle in dark glass.',
            'Quick infusion: Gently heat herb in oil in a double boiler at 100–120°F for 2–4 hours. Do not overheat — heat destroys delicate constituents.',
            'Making a salve from infused oil: For every 1 cup of infused oil, melt 1 oz (28g) of beeswax. Stir together; pour into tins or small jars while still liquid. It solidifies as it cools. Add a few drops of lavender or vitamin E oil as a preservative.',
            'Shelf life: Infused oils: 6–12 months refrigerated. Salves with beeswax: 12–18 months at room temperature.',
          ],
        },
        {
          type: 'tip',
          emoji: '🫙',
          text: 'Label Everything: Every jar of tincture, infused oil, or dried herb needs a label with: plant name (common and Latin), plant part, harvest date, preparation date, alcohol percentage (for tinctures), and any other relevant notes. Memory is unreliable. A jar of dried root from two years ago that you cannot identify is worthless. A well-labeled jar is a precise record of your work.',
        },
        { type: 'h3', text: 'Elderberry Syrup — The Most Popular Home Remedy' },
        {
          type: 'list',
          items: [
            'Ingredients: 1 cup dried elderberries (or 2 cups fresh), 3 cups water, 1 cinnamon stick, 4 whole cloves, 1 tablespoon fresh grated ginger, 1 cup raw honey.',
            'Simmer: Combine elderberries, water, cinnamon, cloves, and ginger in a saucepan. Bring to a boil, then reduce heat and simmer uncovered until the liquid reduces by about half — approximately 40–45 minutes.',
            'Mash and strain: Mash the softened berries with a spoon or potato masher. Strain through cheesecloth into a bowl, pressing to extract all liquid.',
            'Cool and sweeten: Allow the liquid to cool to below 110°F — hot temperatures destroy honey\'s beneficial compounds. Stir in honey thoroughly.',
            'Store: Refrigerate in a glass jar. Keeps 2–3 months refrigerated.',
            'Dose: Adults: 1 tablespoon daily as prevention; 1 tablespoon every 2–3 hours at onset of illness. Children over 1 year: 1 teaspoon daily. Do not give honey to children under 12 months.',
          ],
        },
      ],
    },

    {
      id: 'zone-calendar',
      title: 'Seasonal Garden Calendar',
      blocks: [
        {
          type: 'p',
          text: 'The calendar below uses Zone 7 as a reference (last frost mid-April, first fall frost mid-October). Adjust planting and harvest windows by 2–4 weeks per zone — later for colder zones (5–6), earlier for warmer zones (8–9). Harvest timing follows plant phenology more than calendar dates — let the plants tell you when they are ready.',
        },
        {
          type: 'table',
          headers: ['Season / Month', 'Garden Tasks', 'What to Harvest', 'What to Prepare'],
          rows: [
            ['Late Winter\n(Feb–Mar)', 'Start chamomile, calendula, tulsi, and ashwagandha indoors. Order bare-root elderberry. Prune lavender lightly. Top-dress established herb beds with compost.', 'Nothing yet — review and inventory dried stores from last season.', 'Plan tincture batches for the coming season. Inventory glass jars and supplies.'],
            ['Spring\n(Apr–May)', 'Transplant tulsi, calendula, and chamomile after last frost. Plant elderberry bare-root. Divide mint, lemon balm, and yarrow clumps. Direct sow chamomile on soil surface.', 'First lemon balm and mint leaves. Elderflower clusters when fully open.', 'Make elderflower tincture or cordial. Begin fresh mint and lemon balm teas.'],
            ['Early Summer\n(Jun)', 'Pinch tulsi flower buds to extend leaf production. Begin regular chamomile harvest — every 2–3 days at peak bloom. Harvest calendula as flowers open.', 'Chamomile (peak), calendula, yarrow, lemon balm, St. John\'s Wort flowers (when buds begin opening).', 'St. John\'s Wort tincture in alcohol (fresh flowers). Calendula oil infusion. Chamomile dried in batches.'],
            ['Midsummer\n(Jul–Aug)', 'Harvest and dry in batches. Second mint cut. Mulch moisture-loving herbs deeply. Water lavender minimally. Begin harvesting tulsi regularly.', 'Tulsi, lemon balm, mint, yarrow, lavender, calendula. Elderberries when fully ripe and dark purple-black.', 'Elderberry syrup (major annual batch). Lavender sachets and dried bundles. Calendula salve from infused oil.'],
            ['Early Fall\n(Sep–Oct)', 'Collect tulsi and yarrow seeds. Allow chamomile and calendula to self-seed. Final lavender cut. Begin reducing water for lavender and other Mediterranean herbs.', 'Last calendula and chamomile flowers. Echinacea seeds. Rosehips after first frost.', 'Echinacea tincture from fresh root divisions. Rosehip tea preparations. Final herb drying before frost.'],
            ['Late Fall / Winter\n(Nov–Jan)', 'Dig and divide echinacea and valerian roots (year 3+ plants) for tincturing. Cut mint and lemon balm to the ground. Mulch perennial beds in cold zones. Organize and label all stores.', 'Valerian and echinacea roots. Ashwagandha roots after frost kills top growth.', 'Root tinctures (echinacea, valerian, ashwagandha). Full dried herb season — chamomile, peppermint, tulsi blends from stores.'],
          ],
        },
      ],
    },

    {
      id: 'safety-responsible-use',
      title: 'Safety & Responsible Use',
      blocks: [
        {
          type: 'p',
          text: 'Medicinal herbs are effective because they contain biologically active compounds. This is their value — and the source of their risks. Responsible use means understanding not just what an herb does, but when not to use it.',
        },
        {
          type: 'table',
          headers: ['Herb', 'Key Cautions', 'Drug Interactions', 'Avoid If'],
          rows: [
            ['Echinacea', 'Not for daily long-term use; use for acute illness periods', 'May reduce effectiveness of immunosuppressants', 'Autoimmune conditions (lupus, MS, rheumatoid arthritis); organ transplant recipients'],
            ['Elderberry (cooked)', 'Raw berries toxic — always cook; red elderberry is always toxic', 'None well-documented', 'Autoimmune conditions (stimulates immune activity)'],
            ['St. John\'s Wort', 'Major drug interactions — do not use casually', 'Reduces effectiveness of: birth control pills, antiretrovirals, cyclosporine, digoxin, warfarin, many antidepressants. Can cause serotonin syndrome with SSRIs.', 'Anyone on prescription medications without medical supervision'],
            ['Valerian', 'Can cause vivid dreams; rarely causes paradoxical stimulation', 'Additive effect with sedatives, benzodiazepines, alcohol', 'Do not combine with prescription sleep aids or anti-anxiety medications without guidance'],
            ['Comfrey', 'Contains liver-toxic pyrrolizidine alkaloids', 'Not applicable — topical use only', 'Never ingest; do not apply to broken skin or open wounds'],
            ['Motherwort', 'Uterine stimulant — stimulates contractions', 'May interact with heart medications (digoxin)', 'Pregnancy (contraindicated); heart arrhythmia patients on medication'],
            ['Ashwagandha', 'Thyroid-stimulating effect; sedating in large doses', 'May interact with thyroid medications, immunosuppressants', 'Pregnancy; thyroid disorders without medical supervision'],
            ['Cannabis / CBD hemp', 'May cause drowsiness; THC is psychoactive; legal status varies', 'CBD inhibits CYP450 enzymes — can affect blood thinners, seizure medications, and other drugs metabolized by the liver', 'Pregnancy and nursing; children (except prescribed medical CBD); operating heavy machinery when using THC-containing products'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'St. John\'s Wort Drug Interactions: This herb is included in this guide because it is a genuinely effective treatment for mild depression and nerve pain — but it has more documented drug interactions than almost any other herb. If you take any prescription medication, research St. John\'s Wort interactions thoroughly before use. The interactions include birth control failure, transplant rejection, and antidepressant toxicity. Use only with informed awareness.',
        },
        { type: 'h3', text: 'Growing for Children' },
        {
          type: 'list',
          items: [
            'Safe herbs for children\'s teas: Chamomile, lemon balm, spearmint, and elderflower are gentle and well-tolerated by most children. Doses are proportional to body weight — approximately half the adult dose for school-age children.',
            'Avoid for children: Echinacea, St. John\'s Wort, valerian, motherwort, ashwagandha, and comfrey should not be used for children without guidance from a pediatric herbalist or integrative physician.',
            'Elderberry syrup for children: Well-tolerated by children over age 1 (do not give honey to children under 12 months). The pleasant flavor makes it easy to administer.',
            'Garden safety: Mark comfrey with clear signage and explain its topical-only status to household members. Ensure children understand that touching plants is fine, but eating unknown plants is not.',
          ],
        },
        {
          type: 'tip',
          emoji: '📚',
          text: 'Recommended Resources: "The Herbal Medicine-Maker\'s Handbook" by James Green is the most practical book for home preparation. "Rosemary Gladstar\'s Medicinal Herbs" is the best beginner overview. For plant-drug interactions, the Natural Medicines database (naturaldatabase.therapeuticresearch.com) is the most rigorously evidence-based reference — many public libraries provide free access. The American Herbalists Guild (americanherbalistsguild.com) maintains a directory of professional clinical herbalists for consultation.',
        },
      ],
    },
  ],
}
