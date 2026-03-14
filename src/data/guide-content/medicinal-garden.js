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
      id: 'nervines',
      title: 'Nervines, Anxiety & Sleep Herbs',
      blocks: [
        {
          type: 'p',
          text: 'Nervines are herbs that act on the nervous system, producing calming, sedating, or tonifying effects on nervous tissue. They range from gentle relaxing herbs (lemon balm, chamomile) appropriate for daily use and for children, to more potent hypnotics (valerian, passionflower) best used situationally, to tonic nervines (skullcap) that build nervous system resilience over time.',
        },
        { type: 'h3', text: '🌼 Chamomile (Matricaria chamomilla / Anthemis nobilis)' },
        {
          type: 'p',
          text: 'Chamomile is the most widely consumed medicinal herb globally — gentle, effective, pleasant-tasting, broadly applicable, and extremely safe for most people including children. German chamomile (Matricaria chamomilla) is the standard medicinal species; Roman chamomile (Anthemis nobilis) has a similar but slightly different profile.',
        },
        {
          type: 'list',
          items: [
            'Active constituents: Apigenin (flavonoid — binds GABA receptors, produces calming, mild sedative effect), bisabolol (anti-inflammatory, anti-spasmodic, wound-healing), chamazulene (anti-inflammatory, formed during steam distillation), flavonoids broadly.',
            'Clinical evidence: Several trials show chamomile extract superior to placebo for generalized anxiety disorder. Studies show improved sleep quality. Anti-inflammatory and wound-healing activity well-documented.',
            'Preparations: Tea (1–2 tablespoons dried flowers per cup; steep covered 10–15 minutes — the cover retains volatile essential oils), tincture (stronger effect for anxiety), salve (wound healing, eczema, skin inflammation), bath (add strong chamomile tea for skin and relaxation effects).',
            'Growing across US climates: German chamomile is an adaptable annual grown in every US climate zone. Direct sow on soil surface — seeds need light to germinate. In Zones 3–7: sow in early spring as soon as soil is workable. In Zones 8–10: sow in fall for winter-spring bloom; summer heat causes rapid bolting. Roman chamomile is a low perennial hardy to Zone 4, especially well-suited to the Pacific Northwest and cool-summer regions. Both self-seed prolifically once established. Harvest flowers when petals are fully reflexed (bent back) from the yellow disk center.',
            'Caution: Individuals with known ragweed or daisy-family (Asteraceae) allergies should introduce chamomile cautiously — oral allergy syndrome is possible.',
          ],
        },
        { type: 'h3', text: '🍋 Lemon Balm (Melissa officinalis)' },
        {
          type: 'p',
          text: 'Lemon balm is a remarkably versatile, gentle nervine with particular value for the anxiety-with-digestive-symptoms pattern. It is also well-studied as an antiviral herb specific to the herpes simplex virus (HSV), applied topically or taken internally to reduce outbreak frequency and severity.',
        },
        {
          type: 'list',
          items: [
            'Active constituents: Rosmarinic acid (anti-inflammatory, antiviral, antioxidant), flavonoids (luteolin and apigenin — GABA modulators), essential oils (citral, linalool, geraniol — calming, antimicrobial).',
            'Clinical evidence: Multiple trials show lemon balm extract reduces anxiety and improves mood. Studies demonstrate topical lemon balm cream reduces herpes simplex healing time. Shown to reduce agitation in dementia patients.',
            'Preparations: Tea (fresh or dried; use generous amounts — lemon balm is gentle), tincture, glycerite (good for children), topical cream or salve (antiviral, wound healing). Fresh lemon balm is more potently aromatic than dried; use larger quantities when fresh.',
            'Growing across US climates: Hardy perennial in Zones 4–9. In Zones 3–4, provide winter mulch for root protection. In Zones 9–10, grow in afternoon shade and treat as a cool-season crop; severe summer heat causes die-back that regrows in fall. Spreads vigorously by seed and division — harvest frequently or contain. Self-seeds prolifically in favorable climates.',
            'Caution: High doses over extended periods may inhibit thyroid function. Individuals with hypothyroidism should use moderate amounts and consult their practitioner.',
          ],
        },
        { type: 'h3', text: '😴 Valerian (Valeriana officinalis)' },
        {
          type: 'p',
          text: 'Valerian is the most studied herbal sleep aid in Western research, with multiple randomized trials demonstrating improved sleep latency and sleep quality. It is a potent herb working through multiple mechanisms including GABA modulation. Fresh valerian root has a much more pleasant scent than dried — the characteristic strong, earthy smell develops as iridoid compounds break down during drying.',
        },
        {
          type: 'list',
          items: [
            'Active constituents: Valerenic acid (GABA-A receptor modulation, sedative), isovaleric acid (sedative), valepotriates (iridoids — unstable, captured best in fresh plant tinctures), antioxidants.',
            'Clinical evidence: Multiple controlled trials show reduced sleep latency and improved sleep quality. Evidence is stronger for short-term insomnia. Some studies show effects equivalent to small benzodiazepine doses.',
            'Preparations: Tincture (fresh root in 50–60% alcohol captures valepotriates better than dried — preferred preparation), capsule of powdered root, tea (unpalatable for many due to odor). Take 30–60 minutes before bed. Allow 2–4 weeks of consistent use before evaluating effectiveness.',
            'Growing across US climates: Hardy perennial in Zones 4–9. Moist, fertile soil; full sun to part shade. Well-suited to the Pacific Northwest, Great Lakes region, Appalachian mountains, and New England. In Zones 8–9, afternoon shade moderates summer stress. Plants reach 4–6 feet tall and attract cats, which respond to valerian similarly to catnip. Harvest roots in fall of year 2.',
            'Cautions: Do not combine with sedative medications, benzodiazepines, alcohol, or other CNS depressants without medical supervision. Disclose to anesthesiologist before procedures.',
          ],
        },
        { type: 'h3', text: '🌺 Passionflower (Passiflora incarnata)' },
        {
          type: 'p',
          text: 'Passionflower is a North American native vine with extraordinary flowers and well-documented anxiolytic and hypnotic effects. It is one of the most effective herbs for anxiety involving racing thoughts, an overactive mind at bedtime, and muscle tension. It is the state wildflower of Tennessee and native across the entire southeastern and south-central US.',
        },
        {
          type: 'list',
          items: [
            'Active constituents: Flavonoids (chrysin — studied for anxiolytic effects; apigenin; luteolin), beta-carboline alkaloids (harmane, harmine — possible MAOI-like activity at high doses), maltol (sedative).',
            'Clinical evidence: Multiple small trials show passionflower equivalent or superior to benzodiazepines for preoperative anxiety with fewer side effects. Shown to improve subjective sleep quality in a randomized trial.',
            'Preparations: Tincture (aerial parts including leaves, stems, and flowers; 60% alcohol), tea (milder but pleasant; combine with valerian and lemon balm for a synergistic sleep blend), glycerite.',
            'Growing across US climates: Vigorous deciduous vine native to Zones 6–9 across the Southeast, Mid-Atlantic, and South-Central US; hardy to Zone 5 with root mulching. In Zones 7–9, it spreads enthusiastically by underground runners. In Zones 3–5, grow from seed as a vigorous annual or overwinter roots under deep mulch. In the arid West, supplemental irrigation is needed. Produces edible maypop fruits where summers are long enough.',
            'Cautions: Avoid combining with MAOIs, sedative medications, or during pregnancy. Beta-carboline alkaloids have possible MAOI-like activity — the MAOI interaction is the most clinically important. May cause drowsiness.',
          ],
        },
        { type: 'h3', text: '🫙 Skullcap (Scutellaria lateriflora)' },
        {
          type: 'p',
          text: 'American skullcap is a North American native with a long history as a nervine for anxiety, nervous tension, muscle spasm, and insomnia. It is one of the most respected herbs in traditional North American herbalism — and also one of the most frequently adulterated herbs on the market, making growing your own essential.',
        },
        {
          type: 'list',
          items: [
            'Active constituents: Baicalin and baicalein (flavonoids with GABA-A modulating activity, anti-inflammatory, antioxidant), scutellarein, lateriflorin, wogonin.',
            'Preparations: Tincture of fresh herb in 50–60% alcohol (considered most effective — fresh plant captures volatile constituents that dry poorly), dried herb tincture (good but less potent than fresh), tea. Works best as a fresh plant tincture rather than tea.',
            'Growing across US climates: Native perennial wildflower, hardy in Zones 4–8. Native habitat is moist, rich woodland edges and streambanks across the eastern and central US. Grows best in the mid-Atlantic, New England, Great Lakes region, Midwest, and mountain South. In the arid West, provide consistent moisture and afternoon shade. Does not transplant well; direct sow or start in deep pots. Harvest aerial parts in summer when in flower.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Skullcap Adulteration: Commercial skullcap is frequently adulterated with germander (Teucrium spp.), which contains pyrrolizidine-like alkaloids associated with hepatotoxicity. Liver damage from "skullcap" products has almost certainly been germander contamination in many documented cases. Grow your own from properly identified seed (Scutellaria lateriflora), or purchase only from suppliers who provide certificates of analysis confirming species identity.',
        },
        {
          type: 'tip',
          emoji: '🌙',
          text: 'Sleep Tea Blend: Combine 2 parts chamomile flowers + 2 parts lemon balm leaf + 1 part passionflower aerial parts + 1 part lavender flowers. Add 1 part valerian root for deeper sleep effect (the aroma is challenging but effectiveness increases substantially). Use 1–2 tablespoons of blend per cup, steep covered 15–20 minutes, drink 30–60 minutes before bed. Consistent use over several weeks produces the most reliable effects.',
        },
      ],
    },

    {
      id: 'adaptogens',
      title: 'Adaptogens — Stress Resilience & Vitality',
      blocks: [
        {
          type: 'p',
          text: 'Adaptogens are a pharmacological category of plants defined by three criteria: they must be non-toxic at normal doses, they must produce a non-specific response that increases resistance to multiple stressors (physical, chemical, biological), and they must normalize physiological function in either direction — bringing high cortisol down and low energy up rather than simply sedating or stimulating. The concept was formalized by Soviet pharmacologist Nikolai Lazarev in 1947, though the plants themselves have been used in Ayurvedic and Chinese medicine for centuries.',
        },
        { type: 'h3', text: '🌿 Ashwagandha (Withania somnifera)' },
        {
          type: 'p',
          text: 'Ashwagandha is the most studied adaptogen in Ayurvedic medicine and one of the most comprehensively researched adaptogens globally, with substantial clinical trial evidence for stress reduction, cortisol normalization, athletic performance, thyroid support, and male fertility.',
        },
        {
          type: 'list',
          items: [
            'Active constituents: Withanolides (steroidal lactones — primary active compounds; anti-inflammatory, neuroprotective, immunomodulatory), withaferin A (specific withanolide with anticancer research), alkaloids (isopelletierine, anaferine), iron.',
            'Clinical evidence: Multiple RCTs demonstrate significant reductions in stress and anxiety scores — one study showed a 27.9% reduction in serum cortisol vs. placebo. Studies also show improvements in thyroid hormone levels in subclinical hypothyroidism, improved exercise performance, and male fertility markers.',
            'Preparations: Powder in warm milk (traditional Ayurvedic "moon milk" — some withanolides are fat-soluble and extract better into fat-containing milk than plain water), tincture, capsule. Effects build over 4–8 weeks of consistent use.',
            'Growing across US climates: Zones 8–11 as a perennial (harvest roots in the dormant season). Zones 5–7: grow as a warm-season annual — start indoors 6–8 weeks before last frost, transplant after soil warms above 60°F. Full sun, very well-drained sandy or loamy soil; does not tolerate wet roots or heavy clay. Harvest roots in fall when plant begins to die back.',
            'Cautions: Pregnancy (contraindicated — uterine-stimulating). Thyroid conditions (withanolides stimulate thyroid function — monitor if on thyroid medication). Nightshade family sensitivity possible. Autoimmune conditions. Take with food to reduce GI upset.',
          ],
        },
        { type: 'h3', text: '🌱 Tulsi / Holy Basil (Ocimum tenuiflorum)' },
        {
          type: 'p',
          text: 'Tulsi is the most sacred plant in Hinduism — traditionally kept in every home and revered as a direct manifestation of Vishnu. Its medicinal profile is extensive: adaptogen, immune modulator, antibacterial, antiviral, anti-inflammatory, antioxidant, and blood sugar regulator. It is also one of the most pleasant-tasting medicinal herbs.',
        },
        {
          type: 'list',
          items: [
            'Active constituents: Eugenol (primary active compound — antimicrobial, anti-inflammatory, analgesic), ursolic acid (anti-inflammatory, antitumor, hepatoprotective), rosmarinic acid, flavonoids (orientin, vicenin — antioxidant), essential oils broadly.',
            'Three varieties: Vana tulsi (wild tulsi — lighter flavor, most adaptogenic), Rama tulsi (common green-leaved tulsi — mild flavor), Krishna/Shyama tulsi (dark-purple-leaved — strong clove-pepper flavor, considered most potent medicinally). All are effective; mixing varieties produces a complex blend.',
            'Preparations: Tea (both fresh and dried — one of the most delicious medicinal herb teas; drink daily for adaptogenic effect), tincture, fresh in food, oxymel. Regular daily consumption over weeks to months is significantly more effective than occasional use.',
            'Growing across US climates: Tropical perennial grown as a warm-season annual in Zones 3–9. In Zones 10–11 (South Florida, Hawaii, Southern California), it grows as a true perennial. Start indoors 6–8 weeks before last frost. Transplant after all frost risk passes and soil is warm. Full sun. Self-seeds prolifically in warm climates (Zones 8+).',
          ],
        },
        { type: 'h3', text: '🏔️ Rhodiola (Rhodiola rosea)' },
        {
          type: 'p',
          text: 'Rhodiola is a high-altitude Arctic and alpine succulent with one of the strongest evidence bases among adaptogens. It is stimulating rather than sedating — an important distinction from ashwagandha and tulsi. Rhodiola reduces fatigue, improves cognitive function under stress, and has demonstrated antidepressant effects in clinical trials. Take it in the morning, not the evening.',
        },
        {
          type: 'list',
          items: [
            'Active constituents: Rosavins (rosavin, rosin, rosarin — primary markers for standardization), salidroside (tyrosol glucoside — neuroprotective, adaptogenic), p-tyrosol.',
            'Clinical evidence: Studies demonstrate reduction in mental fatigue and improved cognitive performance under stress. A 2015 trial comparing rhodiola to sertraline (Zoloft) for mild-moderate depression found rhodiola less effective overall but with significantly fewer adverse effects.',
            'Preparations: Tincture, capsule, powder. Commercial extracts are standardized to 3% rosavins and 1% salidroside — look for this on labels when purchasing.',
            'Growing across US climates: Rhodiola\'s natural habitat is Arctic tundra and alpine rockfields. It performs well in Zones 3–6 (northern tier: New England, upper Midwest, Rocky Mountains, Pacific Northwest at altitude) and poorly in warm climates. It is the right plant for Vermont, Montana, the Cascades, and Colorado highlands — and the wrong plant for Texas or Florida. Requires cool to cold temperatures, excellent drainage, and gritty alkaline soil. In Zones 7+, success is marginal without a cool microclimate. Harvest roots after year 4–5.',
            'Cautions: Bipolar disorder (stimulating effect may trigger mania). Avoid use in the evening. Not recommended during pregnancy.',
          ],
        },
        { type: 'h3', text: '🌿 Eleuthero / Siberian Ginseng (Eleutherococcus senticosus)' },
        {
          type: 'p',
          text: 'Eleuthero is the original "adaptogen" — the plant on which Lazarev\'s classification was first based. A shrubby plant from Siberia and northeast Asia with decades of research from the Soviet Union (given to cosmonauts, athletes, and soldiers). It is an energy tonic without stimulant effects — building vitality over time rather than providing an immediate boost.',
        },
        {
          type: 'list',
          items: [
            'Active constituents: Eleutherosides (phenylpropanoids and lignans — eleutherosides E and B are primary standardization markers), polysaccharides (immune-modulating), syringin.',
            'Preparations: Decoction (roots — simmer 20–30 minutes), tincture, powder. Used as a tonic over 6–8 week cycles with breaks rather than continuous use.',
            'Growing across US climates: Shrub, Zones 3–8. Exceptionally cold-hardy and well-suited to the northern US: New England, upper Midwest, Pacific Northwest, and mountain states. Full sun to part shade; moist, well-drained soil. Grows poorly in hot, humid southern climates. Harvest roots in fall of year 3+.',
          ],
        },
        {
          type: 'tip',
          emoji: '⚡',
          text: 'Choosing Your Adaptogen: Ashwagandha is the best choice for stress with fatigue, poor sleep, and anxiety — it is calming as well as restorative. Tulsi is the best daily-use adaptogen for most people — mild enough to drink as tea every day, broadly beneficial. Rhodiola is best for mental fatigue, brain fog, and performance under acute stress — but is stimulating, so avoid if anxiety is the primary concern. Eleuthero is the classic choice for physical endurance and long-term resilience building.',
        },
      ],
    },

    {
      id: 'topical-respiratory',
      title: 'Topical, Wound Healing & Respiratory Plants',
      blocks: [
        {
          type: 'p',
          text: 'This section covers the herbs most valued for wound healing and topical use, followed by the plants most effective for respiratory conditions. Many of these plants cross categories — calendula is both a wound herb and an anti-inflammatory internally; yarrow acts as both a topical hemostatic and an internal fever herb.',
        },
        { type: 'h3', text: 'Wound Healing & Topical Herbs' },
        { type: 'h3', text: '🧡 Calendula (Calendula officinalis)' },
        {
          type: 'p',
          text: 'Calendula is the premier wound-healing herb of Western herbalism, with documented anti-inflammatory, antifungal, antiseptic, and vulnerary (wound-healing) activity. It is also one of the most beautiful garden plants — bright orange and gold daisy flowers that bloom from spring through frost.',
        },
        {
          type: 'list',
          items: [
            'Active constituents: Triterpenoid saponins (oleanolic acid, faradiol — the most anti-inflammatory constituents), flavonoids (isorhamnetin, quercetin, narcissin), carotenoids (the orange pigments — tissue-healing), polysaccharides, essential oils.',
            'Preparations: Calendula-infused oil (pack dried flowers in olive oil; solar infusion 4–6 weeks or warm oil method at low heat; strain through cheesecloth; use as-is or melt with beeswax for salve), tincture (internal anti-inflammatory; topical), tea (internal use for gut inflammation, lymphatic support).',
            'Uses: Burns, cuts, abrasions, eczema, psoriasis, diaper rash, fungal infections, chapped lips, post-radiation skin care, inflamed mucous membranes, gastric ulcers (internal use).',
            'Growing across US climates: Annual grown in all US climate zones. In Zones 3–7: direct sow outdoors in early spring — calendula tolerates light frost. It blooms spring through summer and again after fall temperatures drop. In Zones 8–10: sow in fall for winter-spring bloom; summer heat causes poor performance — grow as a cool-season crop. Deadhead regularly to extend bloom. Harvest flowers when fully open in the morning.',
          ],
        },
        { type: 'h3', text: '🌿 Plantain (Plantago major / P. lanceolata)' },
        {
          type: 'p',
          text: 'Plantain is quite literally a weed in most American lawns — the broad-leaved or lance-leaved rosette that grows in compacted soil and path edges. It is also one of the most useful first-aid herbs available, requiring no cultivation and no preparation: a leaf chewed briefly and applied to an insect sting or bee sting provides near-immediate relief.',
        },
        {
          type: 'list',
          items: [
            'Active constituents: Aucubin (iridoid glycoside — anti-inflammatory), allantoin (promotes cell proliferation and wound healing — the same constituent that makes comfrey effective), mucilage (soothing), tannins (astringent, antimicrobial).',
            'Preparations: Fresh leaf poultice (chew briefly or mash; apply directly to insect stings, bee stings, minor cuts — the fastest topical first aid available in any American garden), tea (respiratory soothing, cough, gut healing), syrup (respiratory support), salve (wound healing, skin inflammation), tincture.',
            'Growing: Both Plantago major (broad-leaf) and P. lanceolata (narrow-leaf, ribwort) are already naturalized throughout North America — check your lawn before planting. If growing intentionally: direct sow, any soil, sun or shade, any zone. Harvest from chemical-free areas only.',
          ],
        },
        { type: 'h3', text: '🌻 Yarrow (Achillea millefolium)' },
        {
          type: 'p',
          text: 'Yarrow takes its botanical name from the myth that Achilles used it to staunch the wounds of his soldiers at Troy — and its hemostatic property is genuinely one of the most well-documented first-aid effects of any plant. Applied directly to a wound as a fresh poultice, yarrow reduces bleeding faster than pressure alone in most minor wounds.',
        },
        {
          type: 'list',
          items: [
            'Active constituents: Achilleine (alkaloid — specific hemostatic activity), flavonoids (anti-inflammatory, antispasmodic), sesquiterpene lactones (anti-inflammatory), essential oils (anti-inflammatory, antimicrobial), tannins.',
            'Preparations: Fresh leaf poultice (hemostasis — press directly to bleeding wound), tea (fever — strong yarrow tea is diaphoretic, promoting sweating to break fever; digestive bitter; anti-inflammatory), tincture (bitter digestive tonic, anti-inflammatory, menstrual regulation), sitz bath (perineal wound healing postpartum).',
            'Growing across US climates: Hardy perennial wildflower native across North America, Zones 3–9. Full sun, well-drained soil. Drought-tolerant once established — an excellent choice for the dry West, Great Plains, and Southwest. In the humid South and Southeast, provide good air circulation to prevent fungal issues. Spreads aggressively by rhizome — site accordingly. White-flowered A. millefolium is the standard medicinal form; colored ornamental varieties have less potent medicinal activity.',
            'Cautions: Pregnancy (uterine stimulant — avoid). Asteraceae allergy. Theoretical anticoagulant interaction. Contact dermatitis in sensitive individuals.',
          ],
        },
        { type: 'h3', text: 'Respiratory Herbs' },
        { type: 'h3', text: '🕯️ Mullein (Verbascum thapsus)' },
        {
          type: 'p',
          text: 'Mullein is the classic respiratory herb of American folk medicine, deeply embedded in Appalachian, Native American, and early settler traditions. A biennial weed with enormous flannel-soft leaves in a first-year rosette and a dramatic 6-foot flower spike in year two. The leaves address respiratory congestion and chronic cough; the flowers infused in olive oil are a traditional ear pain remedy.',
        },
        {
          type: 'list',
          items: [
            'Active constituents: Mucilage (soothing, expectorant), saponins (expectorant, anti-inflammatory), iridoid glycosides, flavonoids.',
            'Preparations: Leaf tea (use generous amounts; strain well through fine cloth — the leaf hairs are irritating to mucous membranes; add honey for cough syrup effect), mullein flower ear oil (infuse fresh yellow flowers in warm olive oil; apply with dropper to ear canal for ear pain — do NOT use if eardrum may be perforated), tincture.',
            'Growing across US climates: Biennial naturalized across the entire continental US — it is likely already growing on roadsides, disturbed ground, or meadow edges near you, from Maine to California. If growing intentionally: direct sow in fall or early spring on poor, dry, disturbed soil. Full sun. Self-seeds prolifically. Year one: rosette of large woolly leaves. Year two: tall flower spike up to 6 feet.',
          ],
        },
        { type: 'h3', text: '🌿 Thyme (Thymus vulgaris)' },
        {
          type: 'p',
          text: 'Thyme is simultaneously one of the most useful culinary herbs and one of the most effective respiratory herbs in the garden. Thymol and carvacrol, its primary essential oil components, have strong antimicrobial activity against the bacteria that cause respiratory tract infections, as well as bronchodilating and expectorant effects.',
        },
        {
          type: 'list',
          items: [
            'Active constituents: Thymol (antimicrobial, expectorant, bronchodilating), carvacrol (antimicrobial), rosmarinic acid (anti-inflammatory), flavonoids.',
            'Clinical evidence: A well-designed German clinical trial demonstrated that thyme-ivy syrup was equivalent to the prescription bronchodilator ambroxol for acute bronchitis.',
            'Preparations: Thyme honey (pack fresh thyme sprigs into a jar; cover completely with raw honey; infuse 2–4 weeks at room temperature; take by the spoonful for cough or sore throat), thyme syrup (strong decoction with honey), steam inhalation (steep thyme in just-boiled water; breathe steam with a towel over the head for bronchial congestion), tea, tincture.',
            'Growing across US climates: Hardy perennial in Zones 4–9; marginally hardy in Zone 3 with mulching. Full sun, well-drained soil. Drought-tolerant — a reliable performer in the arid West, Southwest, and Mediterranean-climate California. In cold-winter Zones 3–4, treat as a tender perennial or bring containers indoors.',
          ],
        },
        { type: 'h3', text: '🌾 Elecampane (Inula helenium)' },
        {
          type: 'p',
          text: 'Elecampane is a magnificent large perennial — 4–6 feet tall with enormous leaves and golden daisy-like flowers — and one of the most important herbs in Western herbal medicine for deep, chronic respiratory conditions. While thyme and mullein address acute respiratory symptoms, elecampane is indicated for established chronic bronchitis, lingering respiratory infections, and wet, productive coughs with thick mucus.',
        },
        {
          type: 'list',
          items: [
            'Active constituents: Inulin (prebiotic polysaccharide — approximately 50% of root by weight), sesquiterpene lactones (alantolactone, isoalantolactone — antimicrobial, anti-inflammatory, expectorant), essential oil.',
            'Preparations: Decoction (root: simmer 20–30 minutes; combine the strained liquid with honey and lemon for a cough syrup decoction), tincture, syrup.',
            'Growing across US climates: Hardy perennial in Zones 3–9 — one of the most cold-tolerant large medicinal herbs. Naturalized widely across the eastern US and adaptable throughout the country. Moist, rich soil; part shade to full sun. Thrives in the humid East, Great Lakes region, and Pacific Northwest. In dry western climates, provide supplemental irrigation and rich mulch. Reaches 5–6 feet in good conditions; plant at the back of borders. Harvest roots in fall of year 2–3.',
          ],
        },
        {
          type: 'tip',
          emoji: '🫁',
          text: 'Respiratory Herb Matching: Use mullein or thyme for acute respiratory infections and coughs — both work quickly. Use elecampane for chronic or lingering respiratory conditions where the infection has cleared but congestion and cough persist. Thyme honey is the simplest and most palatable preparation for children\'s coughs. Plantain tea soothes dry, irritated respiratory membranes and is safe for all ages.',
        },
      ],
    },

    {
      id: 'growing-guide',
      title: 'Growing Guide — Detailed Herb Profiles',
      blocks: [
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
