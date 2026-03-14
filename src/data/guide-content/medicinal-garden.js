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
      title: 'Growing the Medicinal Garden',
      blocks: [
        {
          type: 'p',
          text: 'Growing medicinal herbs shares most principles with growing culinary herbs and ornamental plants, with a few additional considerations specific to medicinal quality: harvesting at the right growth stage, drying properly to preserve active constituents, and maintaining organic growing conditions that ensure no pesticide contamination in medicines you will take internally.',
        },
        { type: 'h3', text: 'Understanding USDA Hardiness Zones' },
        {
          type: 'p',
          text: 'The USDA Plant Hardiness Zone Map divides the US into 13 zones based on average annual minimum winter temperature — the most useful single factor for determining whether a perennial plant will survive winter in your location. Most medicinal herbs are grown as perennials (returning each year from roots), as annuals (completing their cycle in one season), or as biennials (two-year cycle). Knowing your zone guides which plants will become permanent garden residents and which you will need to replant each year.',
        },
        {
          type: 'table',
          headers: ['Zone Range', 'Approximate Region', 'Growing Season', 'Key Implications for Medicinal Garden'],
          rows: [
            ['Zones 3–4', 'Northern MN, WI, MI; VT, ME, NH; mountain West (MT, WY, ID highlands)', '90–140 frost-free days', 'Many Mediterranean herbs (lavender, rosemary) must be brought indoors or treated as annuals. Hardy native medicinals (echinacea, valerian, yarrow, elderberry, skullcap, eleuthero) thrive. Rhodiola excellent here. Short season requires indoor seed starting 8–10 weeks early.'],
            ['Zones 5–6', 'Upper Midwest (MN, IA, IL), mid-Atlantic (PA, NJ, NY), New England coast, Pacific Northwest (Portland, Seattle), CO front range', '150–180 frost-free days', 'Excellent zone for the widest range of medicinal herbs. Most perennials are reliably hardy. Lavender hardy with good drainage (Zone 6). Rosemary hardy in Zone 6 with protection. Start warm-season annuals (tulsi, ashwagandha) indoors 6–8 weeks before last frost.'],
            ['Zones 7–8', 'Mid-Atlantic (VA, NC, TN), South (AR, TX north), Pacific coast (SF Bay Area, OR coast, western WA), mountain South', '180–220 frost-free days', 'Long growing season. Most medicinals thrive. Rosemary and lavender fully hardy outdoors. Cool-season herbs (chamomile) may struggle in midsummer heat — grow spring and fall. Start warm-season annuals indoors 6–8 weeks before last spring frost.'],
            ['Zones 9–10', 'Southern CA, Central Valley CA, Gulf Coast (LA, MS, AL, FL panhandle), South TX, AZ desert, HI coastal', '240–300+ frost-free days', 'Nearly year-round growing. Most tender perennials (tulsi, lemon verbena, ashwagandha) are permanent. Cool-season herbs (chamomile, echinacea) require shading in peak summer or grown as fall–winter–spring crops. Heat and humidity management critical for fungal issues.'],
            ['Zone 11+', 'South Florida, Hawaii, Puerto Rico', 'Year-round tropical growing', 'Tropical and subtropical medicinals (ginger, turmeric, tulsi) are permanent perennials. Cool-climate herbs (valerian, rhodiola, echinacea) require elevation or indoor growing. Unique opportunities for tropical medicinal plants.'],
          ],
        },
        { type: 'h3', text: 'Garden Design for Medicinal Plants' },
        {
          type: 'list',
          items: [
            'Organize by growing requirements, not by use: A bed organized as "immune herbs" or "sleep herbs" mixes plants with incompatible growing requirements. Group by cultural needs: dry-soil Mediterranean herbs (lavender, rosemary, thyme, sage) together; moist-soil woodland herbs (skullcap, black cohosh) together; annual herbs (tulsi, ashwagandha, chamomile) in a separate easily-turned bed.',
            'Perennial backbone: Most of the most valuable medicinal herbs are perennials — echinacea, valerian, lemon balm, passionflower, elderberry, yarrow, hawthorn, astragalus. Design the garden around these long-term plantings.',
            'Include a root-harvest area: Valerian, echinacea root, astragalus, marshmallow, elecampane, and ashwagandha all require root harvest. Plant these in a dedicated area of deep, well-amended, loose soil where digging is easy.',
            'Shade consideration: Several woodland medicinals (skullcap, black cohosh) require part to full shade. If you have a shaded area under trees or on the north side of a structure, this is ideal.',
            'Vining and climbing: Passionflower and hops are vigorous vines needing strong support. Plan for a trellis, fence, or arbor.',
          ],
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
      ],
    },

    {
      id: 'cannabis',
      title: 'Cannabis (Hemp & Medicinal Cannabis)',
      blocks: [
        {
          type: 'warning',
          emoji: '⚖️',
          text: 'Legal Status — Understand Your State\'s Laws Before Growing: Cannabis law in the US is a complex patchwork of federal law and 50 different state frameworks. FEDERAL LAW: Hemp (Cannabis sativa L. with less than 0.3% THC dry weight) is federally legal under the 2018 Farm Bill, though states may impose additional regulations. Cannabis above 0.3% THC remains Schedule I federally. As of 2025, 38 states have legalized medical cannabis and 24 states plus DC have legalized recreational adult-use cannabis. Hemp can be grown legally in most states without a medical license; some states require registration. Always verify your current state and local laws before growing any cannabis.',
        },
        {
          type: 'p',
          text: 'Cannabis (Cannabis sativa L.) is the most pharmacologically versatile plant in this guide. It contains over 100 phytocannabinoids, more than 150 terpenes, and numerous other bioactive compounds that interact with the human endocannabinoid system — a regulatory network involved in pain perception, mood, sleep, appetite, immune function, and inflammation.',
        },
        { type: 'h3', text: 'The Endocannabinoid System' },
        {
          type: 'list',
          items: [
            'The human endocannabinoid system (ECS) consists of endogenous ligands (anandamide and 2-AG), receptors (CB1 and CB2), and metabolic enzymes. Plant cannabinoids interact with these receptors, which is why cannabis has such broad physiological effects.',
            'CB1 receptors: Located primarily in the brain (basal ganglia, cerebellum, hippocampus, cortex) and peripheral nervous system. THC\'s psychoactive effects result from CB1 agonism. CB1 activation also modulates pain, nausea, appetite, and mood.',
            'CB2 receptors: Located primarily in immune cells, spleen, gut, and peripheral tissues. CBD and other non-psychoactive cannabinoids interact more with CB2. CB2 activation modulates inflammation, immune response, and pain.',
            'CBD mechanism: CBD does not directly bind CB1 or CB2 receptors with high affinity. It modulates the ECS indirectly by inhibiting anandamide breakdown, acts as an antagonist at GPR55, a 5-HT1A agonist (serotonin receptor — possibly explaining anxiolytic effects), and modulates TRPV1 pain receptors.',
          ],
        },
        { type: 'h3', text: 'CBD vs. THC — Properties and Uses' },
        {
          type: 'table',
          headers: ['Property', 'CBD (Cannabidiol)', 'THC (Tetrahydrocannabinol)'],
          rows: [
            ['Psychoactive', 'No', 'Yes — produces euphoria, altered perception; anxiety at high doses'],
            ['Legal status (US federal)', 'Legal from hemp (<0.3% THC)', 'Schedule I federally; legal medicinally/recreationally in many states'],
            ['Evidence-based uses', 'Epilepsy (FDA-approved Epidiolex); anxiety; sleep; inflammation; nausea; neuropathic pain', 'Pain (chronic, neuropathic); nausea/vomiting; appetite; muscle spasm; sleep; PTSD'],
            ['Anxiety effects', 'Anxiolytic at moderate doses', 'Anxiolytic at low doses; anxiogenic (causes anxiety) at high doses'],
            ['Sleep', 'Improves sleep quality at moderate–high doses; possibly stimulating at very low doses', 'Reduces sleep latency; may suppress REM with regular use'],
            ['Side effects', 'Drowsiness (high doses); diarrhea; elevated liver enzymes (high doses); drug interactions', 'Impairment; anxiety/paranoia (high doses); memory impairment; dependency potential'],
            ['Drug interactions', 'Significant — inhibits CYP450 enzymes; blood thinners, anticonvulsants, immunosuppressants', 'CYP450 interactions; CNS depressants; medications with narrow therapeutic windows'],
            ['Entourage effect', 'Works better in combination with other cannabinoids and terpenes than in isolation', 'Modulated by CBD and terpenes; CBD reduces THC anxiety at appropriate ratios'],
          ],
        },
        { type: 'h3', text: 'Growing Hemp (CBD-Dominant Cannabis) Across US Climates' },
        {
          type: 'list',
          items: [
            'Variety selection: Purchase feminized hemp seeds from a licensed hemp seed supplier to ensure female plants (highest cannabinoid content) and guaranteed <0.3% THC compliance. Varieties include Cherry Wine, Special Sauce, Lifter, and Sour Space Candy. Specify your climate region when purchasing — suppliers can recommend varieties suited to your conditions.',
            'Climate adaptability: Hemp is a warm-season annual grown spring through fall in most of the continental US. In Zones 5–9, transplant after last frost. In Zones 9–10, two crops may be possible (spring and fall). In Zones 3–4, use early-maturing varieties and start indoors.',
            'Soil and sun: Full sun (8+ hours); excellent drainage; pH 6.0–7.0. Cannabis is a heavy feeder — amend with compost and balanced organic fertilizer. Raised beds are ideal in heavy clay soils.',
            'Regional considerations: In the humid Southeast and Gulf Coast, fungal pressure (botrytis/bud rot) is the primary challenge — choose disease-resistant varieties with excellent air circulation. In the arid Southwest, hemp grows exceptionally well with irrigation (some of the best hemp comes from southern Colorado). In the Pacific Northwest, choose early-maturing varieties to beat fall rains.',
            'Harvesting: Harvest when approximately 50–70% of trichomes have turned from clear to milky white, with 10–20% amber. Use a jeweler\'s loupe or digital microscope. This is typically 8–10 weeks after flowering begins (triggered by shortening days after summer solstice).',
            'Drying and curing: Hang whole branches upside down in a dark, well-ventilated space at 60–70°F and 45–55% relative humidity. In humid climates, a dehumidifier is essential. Dry 7–14 days until smaller stems snap. Cure dried flowers in sealed glass jars, "burping" (opening briefly) daily for 2 weeks.',
          ],
        },
        { type: 'h3', text: 'Cannabis Preparations' },
        {
          type: 'list',
          items: [
            'CBD/Cannabis Infused Oil: The most versatile preparation — used as a topical, taken internally, or as the base for salves and capsules. Cannabinoids are fat-soluble and must be extracted into fat for full bioavailability.',
            'Decarboxylate first: Raw cannabis contains THCA and CBDA (acid forms) rather than active THC and CBD. Spread dried flower on a baking sheet; heat at 240°F for 40–45 minutes. This step is essential — skipping it dramatically reduces potency.',
            'Infuse: Combine 1 oz decarboxylated hemp flower with 2 cups coconut oil or olive oil in a slow cooker on the lowest setting for 4–6 hours, stirring occasionally. Keep below 200°F — higher temperatures degrade cannabinoids.',
            'Strain: Pour through a fine-mesh strainer lined with cheesecloth. Squeeze to extract all oil. Refrigerate in a sealed glass jar; use within 2 months or freeze for longer storage.',
            'Cannabis Tincture: Decarboxylate as above. Pack loosely into a mason jar; cover with high-proof alcohol (Everclear 190-proof is standard; 80-proof vodka works but extracts less efficiently). Infuse 3–4 weeks shaking daily, or use the cold/fast QWET method (freeze cannabis and alcohol separately 24 hours; combine, shake 3 minutes, strain immediately). Bottle in dark glass dropper bottles.',
            'Dosing: CBD-dominant hemp tincture: start with 10–20mg CBD equivalent. THC tincture (where legal): start with 2.5mg THC and wait 2 hours before considering additional dose.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌿',
          text: 'The Entourage Effect — Why Whole-Plant Preparations Matter: Isolated CBD (like pharmaceutical Epidiolex) is effective for specific conditions, particularly epilepsy. But research increasingly supports the "entourage effect" — the hypothesis that the full spectrum of cannabinoids, terpenes, and other compounds work synergistically. A whole-plant infused oil or tincture from high-CBD hemp will contain CBD plus trace cannabinoids (CBG, CBC, CBN), terpenes (myrcene, limonene, linalool, beta-caryophyllene), flavonoids, and chlorophylls. This full-spectrum preparation may be more effective than isolated CBD for anxiety, pain, and inflammation — one of the strongest arguments for making your own preparations from whole-plant material.',
        },
      ],
    },

    {
      id: 'harvesting-processing',
      title: 'Harvesting for Maximum Medicinal Quality',
      blocks: [
        {
          type: 'p',
          text: 'Harvesting at the right time and processing correctly preserves the active constituents that make medicinal herbs effective. The same plant harvested at different growth stages and dried at different temperatures can have dramatically different constituent profiles.',
        },
        {
          type: 'table',
          headers: ['Plant Part', 'Best Harvest Stage', 'Time of Day', 'Drying Temperature', 'Storage Life'],
          rows: [
            ['Aromatic leaves\n(lavender, lemon balm, tulsi, rosemary, sage, thyme)', 'Just before or as flowers begin to open — essential oil content peaks at this stage', 'Morning after dew dries but before midday heat volatilizes oils', '95–105°F (low heat preserves volatile oils); air dry in shade is ideal', '1–2 years in sealed, dark containers'],
            ['Flowers\n(chamomile, calendula, echinacea, elderflower, yarrow)', 'Fully open but not yet past peak; petals fresh and vivid', 'Morning; pick before heat of day', '95–105°F maximum; higher heat destroys essential oils and pigments', '1 year; flowers deteriorate faster than leaves'],
            ['Roots\n(valerian, echinacea, ashwagandha, marshmallow, astragalus)', 'Fall after aerial parts die back — energy (and constituents) have moved from leaves into root', 'Anytime; root harvest is not time-of-day sensitive', 'Low and slow: 95–115°F; roots are dense and take longer to dry fully', '2–3 years whole dried; 1–2 years powdered'],
            ['Berries\n(elderberry, hawthorn, rose hips)', 'Fully ripe and deeply colored; after first frost for hawthorn and rose hips (frost improves flavor and sugar content)', 'Anytime; avoid harvesting wet berries', '125–135°F for berries — higher heat needed to dry dense, moist fruit without mold', '1–2 years dried; process fresh for syrup and tincture'],
            ['Seeds\n(milk thistle, fennel, fenugreek)', 'When seed heads are dry and brown on the plant but before they shatter and fall', 'Morning; cut whole heads and allow to finish drying indoors over paper', 'Air dry naturally after cutting; minimal applied heat needed', '3–5 years; good longevity'],
            ['Bark\n(willow, crampbark, oak)', 'Spring (inner bark richest in constituents) or fall; harvest sustainably — never ring an entire trunk', 'Anytime', 'Air dry or low heat (105°F)', '3–5 years dried bark'],
          ],
        },
        { type: 'h3', text: 'Drying Methods' },
        {
          type: 'list',
          items: [
            'Screen drying (best for flowers and leaves): Stretch window screen or food-grade drying mesh over a frame. Spread herbs in a single layer. Place in a warm (85–105°F), well-ventilated location out of direct sunlight. Air circulation is more important than heat.',
            'Hanging bundles: Tie stems in small loose bundles; hang upside down in a warm, dry, ventilated location. Works well for lavender, thyme, rosemary, sage, yarrow, and other herbs with long stems. Bundles too dense dry slowly and may mold in the center.',
            'Dehydrator: A food dehydrator at 95–105°F provides the most reliable and consistent drying. Best investment for a dedicated medicinal garden. Avoid dehydrating aromatic herbs above 110°F — essential oil loss accelerates significantly.',
            'Oven drying (least desirable): Even the lowest oven setting is often too hot for aromatic herbs. If using an oven, set to the lowest possible temperature (150°F or below) with the door propped open.',
            'Testing dryness: Herbs are fully dry when leaves crumble easily and stems snap rather than bend. Seal-test: place a small amount in a sealed jar; if condensation forms on the inside of the glass within 24 hours, herbs are not fully dry and will mold in storage.',
          ],
        },
        { type: 'h3', text: 'Storing Dried Herbs' },
        {
          type: 'list',
          items: [
            'Airtight glass jars: Mason jars, amber glass, or any airtight glass container. Glass does not absorb volatile oils the way plastic does.',
            'Dark storage: Light degrades pigments, flavonoids, and essential oils. Store in a cupboard, closet, or use amber/dark-colored glass. A beautiful herb collection on a sunny kitchen shelf loses medicinal potency faster than one stored in a dark cabinet.',
            'Cool and dry: Heat and humidity accelerate degradation. Avoid storing above the stove, near the dishwasher, or anywhere that experiences moisture fluctuations.',
            'Label completely: Label every jar with the herb name, part (root, flower, leaf), date of harvest or purchase, and source. Unlabeled jars become mysteries within a year.',
            'Shelf life reference: Aromatic leaves and flowers: 1–2 years. Roots and bark: 2–4 years. Seeds: 3–5 years. Tinctures: 3–5 years. Infused oils: 6–12 months. Syrups (refrigerated): 2–4 months.',
          ],
        },
      ],
    },

    {
      id: 'remedies',
      title: 'Preparations, Recipes & Techniques',
      blocks: [
        {
          type: 'p',
          text: 'The following recipes and techniques represent the core preparation skills of the medicinal herbalist. Mastering these methods gives you the ability to process and use virtually any herb in your garden effectively.',
        },
        { type: 'h3', text: 'Herbal Teas: Infusions and Decoctions' },
        {
          type: 'table',
          headers: ['Method', 'For', 'How To', 'Steep Time', 'Best For'],
          rows: [
            ['Infusion (standard tea)', 'Leaves, flowers, soft plant parts', 'Pour just-boiled water over herb in a covered vessel (cover captures volatile oils). Use 1 tbsp fresh herb or 1 tsp dried per cup of water.', '5–15 minutes covered', 'Chamomile, mint, lemon balm, tulsi, calendula, lavender'],
            ['Decoction', 'Roots, bark, berries, seeds', 'Simmer herb in cold water, covered, over low heat. Use 1 tbsp dried root or bark per cup of water.', '20–40 minutes simmer, then steep 10 more minutes', 'Echinacea root, valerian root, elderberry, ashwagandha'],
            ['Long Infusion (cold)', 'Delicate roots and mucilaginous herbs', 'Combine herb and room-temperature water; cover and steep overnight (8–12 hours) in the refrigerator.', '8–12 hours, cold', 'Marshmallow root, slippery elm — retains mucilage better than hot water'],
          ],
        },
        { type: 'h3', text: 'Tinctures — The Most Versatile Preparation' },
        {
          type: 'p',
          text: 'A tincture is an alcohol extract of plant material. Alcohol is the most broadly effective extraction solvent for medicinal plant constituents and provides a finished preparation with 3–5 year shelf life. Making tinctures requires almost no equipment and is the highest-impact skill in the medicinal garden.',
        },
        {
          type: 'list',
          items: [
            'Pack plant material: Fill a clean glass jar with plant material. For fresh plant material: pack very firmly. For dried plant material: fill about 3/4 full.',
            'Cover with alcohol: Pour 80-proof vodka (40% alcohol) or higher-proof alcohol over the plant material until completely covered and then 1–2 inches above. For resinous plants and roots: use higher-proof spirits (100-proof vodka or 190-proof grain alcohol diluted to approximately 60% with water).',
            'Seal and store: Cap tightly. Label with date, herb, and alcohol proof. Store in a cool, dark place. Shake daily — shaking improves extraction.',
            'Strain after 4–6 weeks: Pour through a fine-mesh strainer lined with cheesecloth. Squeeze the marc (spent plant material) firmly to extract all available tincture.',
            'Bottle and label: Pour tincture into dark glass dropper bottles. Label completely: herb name, plant part, fresh or dried, alcohol percentage, date prepared.',
          ],
        },
        { type: 'h3', text: 'Weight-to-Volume Method (More Precise)' },
        {
          type: 'list',
          items: [
            'Standard ratio: For a 1:5 tincture (the standard herbal pharmacy ratio), use 1 gram of dried herb per 5 mL of menstruum (solvent). A tincture of 100g dried herb requires 500mL of alcohol. This produces consistent, reproducible preparations.',
            'Menstruum selection by constituent: 30–40% alcohol (60–80 proof) for water-soluble constituents, mucilage, polysaccharides — good for marshmallow root, plantain. 50–60% alcohol for most herbs; optimal broad-spectrum extraction. 70–90% alcohol for resins, alkaloids, essential oils — use for echinacea root, ginger, turmeric, resinous plants.',
            'Calculating proof: 80-proof vodka = 40% alcohol. To make a 60% alcohol menstruum using 190-proof grain alcohol: (60/95) × 100 = 63mL 190-proof + 37mL water per 100mL total.',
          ],
        },
        {
          type: 'tip',
          emoji: '🫙',
          text: 'Label Everything: Every jar of tincture, infused oil, or dried herb needs a label with: plant name (common and Latin), plant part, harvest date, preparation date, alcohol percentage (for tinctures), and any other relevant notes. Memory is unreliable. A jar of unlabeled dried root from two years ago is worthless. A well-labeled jar is a precise record of your work.',
        },
        { type: 'h3', text: 'Elderberry Syrup — The Gateway Preparation' },
        {
          type: 'p',
          text: 'Elderberry syrup is the ideal first medicinal preparation — delicious, effective, safe, easy to make, and unmistakably medicinal in its results.',
        },
        {
          type: 'list',
          items: [
            'Ingredients: 1 cup dried elderberries (or 2 cups fresh/frozen), 3 cups water, 1 cup raw honey (added after cooling), 1 cinnamon stick, 5 whole cloves, 1 teaspoon fresh grated ginger (or 1/2 teaspoon dried).',
            'Simmer: Combine elderberries, water, cinnamon, cloves, and ginger in a medium saucepan. Bring to a gentle boil, reduce heat, and simmer uncovered 45 minutes to 1 hour until liquid is reduced by approximately half.',
            'Mash and strain: Remove from heat. Mash berries gently. Pour through a fine-mesh strainer; press solids to extract all juice. Discard spent berries.',
            'Cool and add honey: Allow to cool to below 100°F — heat destroys honey\'s beneficial compounds. Stir in honey. Adjust sweetness.',
            'Bottle and store: Pour into a clean glass jar with a lid. Refrigerate. Use within 2–3 months.',
            'Dosing: Preventive: 1 tablespoon (children: 1 teaspoon) daily during cold/flu season. Acute: 1 tablespoon every 2–3 hours at first signs of illness, maximum 4–5 days. Do not give honey to children under 12 months.',
          ],
        },
        { type: 'h3', text: 'Calendula Salve — The Essential Topical' },
        {
          type: 'p',
          text: 'A good calendula salve is arguably the single most useful thing you can make from a medicinal garden: effective on cuts, burns, eczema, dry skin, fungal issues, diaper rash, chapped lips, and dozens of other topical conditions.',
        },
        {
          type: 'list',
          items: [
            'Step 1 — Dry the flowers: Spread freshly harvested calendula flowers on a drying screen for 24–48 hours until they feel papery and no longer soft. Fresh flowers contain too much water and will cause oil to mold. Fully dried flowers are essential.',
            'Step 1 — Pack and infuse: Fill a clean dry glass jar with dried calendula flowers (pack firmly). Cover completely with olive oil, 1 inch above flowers. Solar method: place jar in a warm, sunny window for 4–6 weeks, shaking daily. Warm method: place jar in a slow cooker on "warm" (below 110°F) for 24–48 hours. Warm method produces equivalent results in far less time.',
            'Step 1 — Strain: Pour through cheesecloth; squeeze marc firmly. Infused oil will be golden to dark orange from carotenoids.',
            'Step 2 — Measure beeswax: For a firm salve: 1 oz beeswax per 1 cup of infused oil. For a softer balm: 3/4 oz per cup. For lip balm: 1.5 oz per cup.',
            'Step 2 — Melt and test: Combine infused oil and beeswax in a double boiler over low heat, stirring to combine. Test consistency by placing a small amount on a cold plate — if too soft, add more beeswax; if too hard, add more oil.',
            'Step 2 — Pour and cool: Remove from heat. Optionally add 10–15 drops lavender essential oil and/or vitamin E oil (preservative). Pour immediately into small tins or glass jars. Do not disturb until fully set (1–2 hours). Label with contents and date. Shelf life 12–18 months.',
          ],
        },
        { type: 'h3', text: 'Thyme Honey — Simple Cough Remedy' },
        {
          type: 'p',
          text: 'One of the most effective and simplest preparations in this guide: raw honey infused with fresh thyme. Clinical evidence supports both thyme and honey independently for cough.',
        },
        {
          type: 'list',
          items: [
            'Pack: Fill a small jar with fresh thyme sprigs (washed and thoroughly dried). Pack firmly.',
            'Cover with honey: Pour raw honey over the thyme until completely covered. Stir gently to eliminate air pockets. Seal.',
            'Infuse: Leave at room temperature 2–4 weeks. The honey becomes noticeably herbal in flavor.',
            'Use: Take directly by the spoonful for cough or sore throat. Stir into warm (not hot) tea. No straining needed.',
            'Variations: Substitute garlic slices for an antimicrobial honey-garlic syrup, or layer thyme, garlic, ginger, and lemon for a comprehensive cold and cough formula.',
          ],
        },
        { type: 'h3', text: 'Simple Nervine Sleep Tea Blend' },
        {
          type: 'p',
          text: 'Combining several nervines in a blended tea produces synergistic effects greater than any single herb.',
        },
        {
          type: 'list',
          items: [
            'Base blend: 2 parts chamomile flowers + 2 parts lemon balm leaf + 1 part passionflower aerial parts + 1 part lavender flowers.',
            'Add for deeper sleep: 1 part valerian root (the aroma is challenging but effectiveness increases substantially).',
            'Add for taste: 1 part tulsi/holy basil + a few rose petals.',
            'Blend and store: Combine dried herbs in a jar. Shake to mix. Label with blend name, ingredients, and date.',
            'Prepare and use: Use 1–2 tablespoons of blend per 8-oz cup of just-boiled water. Cover and steep 15–20 minutes. Strain. Drink 1–2 cups 30–60 minutes before bed. Consistent use over several weeks produces the most reliable effects.',
          ],
        },
        { type: 'h3', text: 'Oxymel (Vinegar-Honey Herbal Extract)' },
        {
          type: 'p',
          text: 'An oxymel ("oxys" = sharp, "mel" = honey in Greek) is an ancient preparation combining apple cider vinegar and honey as the extraction menstruum. An excellent alternative to alcohol tincture — particularly effective for alkaloid-containing herbs, mineral-rich herbs, and warming herbs.',
        },
        {
          type: 'list',
          items: [
            'Formula: 1 part herb (fresh or dried) + 1 part raw apple cider vinegar + 1 part raw honey. Alternatively, infuse in vinegar first for 3–4 weeks, strain, then add honey.',
            'Best herbs for oxymel: Garlic, thyme, rosemary, elderberry, echinacea, fire cider herbs (horseradish, ginger, cayenne, onion), sage, astragalus.',
            'Combine: Pack herb into jar. Mix vinegar and honey; pour over herb. Cover tightly — vinegar corrodes metal lids, so use a plastic lid or place parchment paper between jar and metal ring.',
            'Infuse: 4–6 weeks at room temperature, shaking daily.',
            'Strain and bottle: Pour through cheesecloth; squeeze marc. Bottle in dark glass. Shelf life 6–12 months refrigerated.',
          ],
        },
      ],
    },

    {
      id: 'zone-calendar',
      title: 'Seasonal Growing Calendar by Region',
      blocks: [
        {
          type: 'p',
          text: 'Because last frost dates vary by more than two months across the US — from mid-February in deep South Texas to mid-June in northern Minnesota — the following calendar organizes tasks by season relative to your local last frost date (LFD) rather than by calendar month.',
        },
        {
          type: 'table',
          headers: ['Timing', 'Task', 'Notes by Region'],
          rows: [
            ['10–12 weeks before LFD', 'Start slow-growing seeds indoors: valerian, passionflower, echinacea (all species), ashwagandha, tulsi', 'LFD reference: Zone 9 = early Feb; Zone 8 = early March; Zone 7 = mid-April; Zone 6 = mid-May; Zone 5 = late May; Zone 4 = late May–June'],
            ['6–8 weeks before LFD', 'Start chamomile, lemon balm, calendula, skullcap, marshmallow indoors. Begin hardening off earlier-started seedlings.', 'In Zones 8–10: sow cool-season herbs directly outdoors now for spring crop'],
            ['2–4 weeks before LFD', 'Direct sow cold-tolerant herbs outdoors: calendula, chamomile, yarrow, plantain, mullein. Begin hardening off warm-season starts.', 'Many medicinal herbs tolerate light frost; check individual profiles'],
            ['At LFD / soil 50°F+', 'Transplant echinacea, valerian, lemon balm, skullcap, marshmallow outdoors. Direct sow astragalus.', 'Wait until soil warms adequately; cold soil causes setback worse than cold air for most medicinals'],
            ['2–4 weeks after LFD / soil 60°F+', 'Transplant heat-lovers: tulsi, ashwagandha, ginger, turmeric. All risk of frost is past in most years.', 'Zones 9–10: shift warm-season crops to late summer planting; this timing may be for cool-season spring crops'],
            ['Peak summer (6–10 weeks after LFD)', 'Primary harvest season for most aerial herbs: echinacea flowers, chamomile, lavender, calendula, lemon balm, tulsi, yarrow, passionflower, thyme, sage', 'Zones 3–5: season is short; harvest aggressively during peak. Zones 8–10: many herbs slow in peak heat; harvest in morning'],
            ['Late summer – early fall', 'Harvest elderberries; harvest hawthorn berries; harvest mullein seed heads; begin watching for root harvest timing', 'Elderberries ripe after color deepens fully (late Aug–Oct, varies by region). Hawthorn and rose hips best after first frost.'],
            ['6 weeks before first fall frost', 'Begin root harvest: valerian, echinacea root, ashwagandha, marshmallow root, astragalus. Plant garlic.', 'Zones 5–7: plant garlic October–November. Zones 3–4: plant September–October. Zones 8–9: plant November–December.'],
            ['At first fall frost', 'Protect borderline-hardy perennials with mulch; bring tender perennials indoors (rosemary, lemon verbena in cold zones)', 'Zones 7+: many tender perennials survive light frosts and can be left outdoors'],
            ['Winter', 'Process and label tinctures; make syrups and salves from harvest; inventory and plan next year; order seeds', 'Zones 9–11: winter is primary growing season for cool-season medicinals'],
          ],
        },
      ],
    },

    {
      id: 'safety-responsible-use',
      title: 'Safety, Drug Interactions & Contraindications',
      blocks: [
        {
          type: 'p',
          text: 'This section is among the most important in the guide. Herbs are real medicines with real effects on human physiology, and they interact with prescription medications in ways that can be clinically significant. The following tables cover the most important interactions and contraindications for the herbs in this guide.',
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Most Important Safety Rule — Tell Your Healthcare Providers: The most important single action you can take to use herbal medicine safely is to tell your physician, pharmacist, and other healthcare providers exactly which herbs you are taking, in what amounts, and how regularly. Many drug-herb interactions are predictable and avoidable once providers know what you are taking. This conversation is particularly important if you take: anticoagulants (warfarin, heparin, newer blood thinners), antidepressants or psychiatric medications, HIV medications, immunosuppressants (post-transplant), chemotherapy agents, anticonvulsants, cardiovascular medications, or diabetes medications.',
        },
        { type: 'h3', text: 'Major Drug Interactions by Herb' },
        {
          type: 'table',
          headers: ['Herb', 'Interacts With', 'Mechanism', 'Clinical Significance'],
          rows: [
            ['St. John\'s Wort', 'SSRIs, SNRIs, MAOIs, triptans (serotonin syndrome risk); warfarin, birth control pills, HIV antiretrovirals, cyclosporine, digoxin, anticonvulsants', 'Potent inducer of CYP3A4, CYP2C9 enzymes and P-glycoprotein efflux; also has serotonergic activity', 'MAJOR — Can reduce blood levels of many medications by 30–70%, causing therapeutic failure. Serotonin syndrome with serotonergic drugs is potentially life-threatening. ALWAYS disclose to providers.'],
            ['Ginkgo', 'Anticoagulants (warfarin, aspirin, clopidogrel), NSAIDs, antidiabetics, MAOIs, trazodone', 'Antiplatelet activity (PAF inhibition); possible CYP interactions', 'SIGNIFICANT — Increased bleeding risk with anticoagulants and antiplatelet drugs. Case reports of serious bleeding events. Monitor INR if on warfarin.'],
            ['Garlic (high dose)', 'Warfarin, saquinavir (HIV), antiplatelet drugs', 'Antiplatelet activity; possible CYP3A4 and CYP2C9 interaction at high doses', 'MODERATE — Culinary amounts (1–2 cloves) are generally not clinically significant. Supplement doses or concentrated preparations may increase bleeding risk.'],
            ['Hawthorn', 'Digoxin, antihypertensives, nitrates, PDE-5 inhibitors (sildenafil)', 'Positive inotropic effects; vasodilation; may potentiate cardiac medications', 'SIGNIFICANT — Hawthorn has real cardiovascular activity. Combination with cardiac medications requires medical supervision.'],
            ['Valerian', 'CNS depressants (benzodiazepines, barbiturates, alcohol, opioids, sedating antihistamines), anesthesia', 'Additive/synergistic sedation via GABA modulation', 'MODERATE to SIGNIFICANT — Enhanced CNS depression. Avoid combining without medical guidance. Disclose to anesthesiologist before any procedure.'],
            ['Passionflower', 'MAOIs, CNS depressants, sedatives', 'Beta-carboline alkaloids have possible MAOI-like activity; additive sedation with depressants', 'MODERATE — Do not combine with MAOIs. Additive effect with other sedatives.'],
            ['Licorice root (high/long-term dose)', 'Antihypertensives, diuretics, digoxin, corticosteroids, warfarin', 'Mineralocorticoid effect causes sodium retention and potassium loss; hypokalemia potentiates digoxin toxicity', 'SIGNIFICANT at high doses — Can cause serious hypertension, edema, and electrolyte disturbances. Use deglycyrrhizinated licorice (DGL) for gut applications.'],
            ['Echinacea', 'Immunosuppressants (cyclosporine, tacrolimus), potentially hepatotoxic drugs (long-term use)', 'Immune stimulation may oppose immunosuppression; theoretical hepatotoxicity concern', 'LOW to MODERATE — Theoretical concern; avoid in organ transplant patients on immunosuppressants.'],
            ['CBD (Cannabis)', 'Warfarin, clobazam and other anticonvulsants, tacrolimus, SSRIs, many others', 'CYP2C9 and CYP3A4 inhibition; elevated levels of co-administered drugs', 'SIGNIFICANT — CBD\'s CYP450 inhibition is clinically significant, particularly for narrow-therapeutic-index drugs. Warfarin INR can increase substantially. Disclose to all providers.'],
          ],
        },
        { type: 'h3', text: 'Herbs to Avoid in Specific Conditions' },
        {
          type: 'table',
          headers: ['Condition', 'Herbs to Avoid or Use with Caution', 'Reason'],
          rows: [
            ['Pregnancy', 'Sage (large doses), yarrow, passionflower, blue cohosh, pennyroyal, tansy, wormwood, high-dose tulsi, ashwagandha, licorice (high dose)', 'Uterine stimulant effects, potential teratogenicity, or insufficient safety data. Use only gentle food-grade herbs (ginger for nausea has good evidence of safety) in pregnancy; consult provider for anything else.'],
            ['Breastfeeding', 'High-dose sage (suppresses lactation — sometimes used intentionally for weaning), any uterine stimulant, herbs with insufficient safety data', 'Risk of transfer to infant in milk; some herbs affect milk production.'],
            ['Autoimmune conditions (lupus, MS, RA, IBD)', 'Echinacea, astragalus, cat\'s claw, andrographis (immune stimulants generally)', 'Theoretical risk of exacerbating autoimmune activity. Adaptogens may be used but with provider awareness.'],
            ['Epilepsy / seizure disorders', 'Sage (large doses), rosemary (large doses), wormwood, hyssop (large doses)', 'Pro-convulsant activity at high doses due to thujone (sage) or camphor (rosemary) content. Culinary amounts are safe.'],
            ['Hypothyroidism', 'High-dose lemon balm, high-dose bugleweed', 'Thyrotropin inhibition; may reduce thyroid hormone levels.'],
            ['Liver disease', 'Kava, high-dose comfrey, germander, pennyroyal, high-dose licorice, chaparral', 'Direct or indirect hepatotoxic potential. Even herbs with low hepatotoxicity risk should be used with caution in compromised liver function.'],
            ['Hormone-sensitive cancers (breast, uterine, ovarian)', 'Phytoestrogen-rich herbs (red clover, dong quai, black cohosh, high-dose flaxseed); possibly sage', 'Potential estrogen-receptor stimulating activity. Consult oncologist before using any herbal product.'],
            ['Before surgery / procedures', 'Blood-thinning herbs (garlic, ginger, ginkgo, turmeric, dong quai, feverfew) within 2 weeks of surgery', 'Increased bleeding risk intraoperatively and postoperatively. Disclose ALL supplements to your surgical team.'],
          ],
        },
        { type: 'h3', text: 'Using Herbs Safely with Children' },
        {
          type: 'list',
          items: [
            'Safe herbs for children\'s teas: Chamomile, lemon balm, spearmint, and elderflower are gentle and well-tolerated by most children. Doses are proportional to body weight — approximately half the adult dose for school-age children.',
            'Avoid for children: Echinacea, St. John\'s Wort, valerian, motherwort, ashwagandha, and comfrey should not be used for children without guidance from a pediatric herbalist or integrative physician.',
            'Elderberry syrup for children: Well-tolerated by children over age 1. Do not give honey to children under 12 months.',
            'Garden safety: Mark comfrey with clear signage. Ensure children understand that touching plants is fine, but eating unknown plants is not.',
          ],
        },
        {
          type: 'tip',
          emoji: '📚',
          text: 'Recommended Resources: "The Herbal Medicine-Maker\'s Handbook" by James Green is the most practical book for home preparation. "Rosemary Gladstar\'s Medicinal Herbs" is the best beginner overview. For plant-drug interactions, the Natural Medicines database (naturaldatabase.therapeuticresearch.com) is the most rigorously evidence-based reference — many public libraries provide free access. The American Herbalists Guild (americanherbalistsguild.com) maintains a directory of professional clinical herbalists for consultation.',
        },
      ],
    },
    {
      id: 'additional-herb-profiles',
      title: 'Additional Herb Profiles',
      blocks: [
        {
          type: 'p',
          text: 'The following profiles cover additional medicinal herbs of significant value beyond the main sections. These are plants you may encounter in herbal traditions, see in seed catalogs, or find growing wild across different regions of the United States.',
        },

        { type: 'h3', text: 'St. John\'s Wort (Hypericum perforatum) — Zones 3–8' },
        {
          type: 'list',
          items: [
            'Uses: Mild-to-moderate depression; nerve pain (topically); wound healing; antiviral.',
            'Constituents: Hypericin, hyperforin, flavonoids.',
            'Preparation: Tincture of fresh flowers; infused oil in olive oil (turns blood-red — for topical nerve pain); tea; capsule.',
            'ID: Leaves have translucent dots when held to light; petals have black dots at margins.',
            'Growing: Perennial across most of the US (Zones 3–8); naturalized along roadsides from California to Maine. Thrives in sunny, well-drained disturbed ground. Harvest flowering tops when just opening.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'St. John\'s Wort has the most significant herb-drug interactions in Western herbalism — it can reduce blood levels of many medications by 30–70%. See Section 9 (Safety) before using if you take any prescription medication.',
        },

        { type: 'h3', text: 'Milk Thistle (Silybum marianum) — Annual/Biennial' },
        {
          type: 'list',
          items: [
            'Uses: Liver protection; liver support in toxin exposure; antioxidant.',
            'Constituents: Silymarin complex (silibinin, silydianin, silychristin) — found in seeds only.',
            'Evidence: Good evidence for hepatoprotection in toxic hepatitis, cirrhosis, and alcohol-related liver disease.',
            'Preparation: Ground seeds in smoothies; tincture of seeds; capsule.',
            'Growing: Large biennial adaptable across all US zones as an annual or biennial; self-seeds readily, especially in Zones 7+. Harvest seed heads when they turn fluffy white.',
          ],
        },

        { type: 'h3', text: 'Marshmallow Root (Althaea officinalis) — Zones 3–9' },
        {
          type: 'list',
          items: [
            'Uses: Soothing irritated mucous membranes; dry cough; heartburn/GERD; IBS; UTI soothing.',
            'Constituents: 25–35% mucilage polysaccharides; flavonoids.',
            'Preparation: Cold infusion ONLY — heat degrades mucilage. Soak 1 tbsp root in 2 cups cold water for 4–8 hours, then strain and drink. Do not simmer.',
            'Drug interaction: Delays absorption of medications — take 2 hours away from any prescription or OTC drugs.',
            'Growing: Tall perennial (up to 6 ft). Hardy across most of the US in Zones 3–9. Prefers moist, rich soil. Harvest roots in fall of year 2 or later.',
          ],
        },

        { type: 'h3', text: 'Lemon Verbena (Aloysia citrodora) — Zones 9–11 / Annual elsewhere' },
        {
          type: 'list',
          items: [
            'Uses: Digestive support; relaxing nervine; anti-inflammatory; antioxidant.',
            'Constituents: Verbenalin (iridoid), citral, limonene (essential oils).',
            'Preparation: One of the most pleasant-tasting medicinal herbs — delicious as fresh or dried tea.',
            'Growing: Tender perennial; grows as an annual in Zones 3–8. In Zones 9–11 (Southern California, Gulf Coast, Hawaii) it is a hardy perennial. Can overwinter as a container plant indoors anywhere in the US. Full sun and heat-loving — thrives in the South and Southwest.',
          ],
        },

        { type: 'h3', text: 'Hops (Humulus lupulus) — Zones 4–8' },
        {
          type: 'list',
          items: [
            'Uses: Insomnia; anxiety; menopausal hot flashes (phytoestrogen activity); bitter digestive.',
            'Constituents: 2-methylbutenol (sedative), lupulone and humulone (bitter acids, sedative), phytoestrogens.',
            'Preparation: Tincture; hops pillow (dried hop cones — the aroma has a direct sedative effect); tea (very bitter).',
            'Growing: Vigorous climbing vine, 15–25 ft per season. Hardy in Zones 4–8; excellent in the Pacific Northwest (WA, OR), upper Midwest, and Mountain West where commercial hops are grown. Dies back to roots in winter. Harvest female cones (strobiles) in late summer.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Avoid hops in depression — it may have a depressogenic effect at high or long-term doses.',
        },

        { type: 'h3', text: 'Black Cohosh (Actaea racemosa) — Zones 3–8' },
        {
          type: 'list',
          items: [
            'Uses: Menopausal symptoms (hot flashes, night sweats); dysmenorrhea; muscular pain; nervine.',
            'Constituents: Triterpene glycosides (actein, cimifugoside); flavonoids; isoferulic acid.',
            'Evidence: Multiple RCTs demonstrate reduction in menopausal symptom scores.',
            'Growing: Native eastern North American woodland perennial requiring deep, moist, rich, acidic soil in part to full shade. Native from Maine to Georgia and west to the Great Plains; thrives in Appalachia, the mid-Atlantic, and the Great Lakes woodlands. Slow to establish from seed — purchase divisions. Not well-suited to the arid West without significant shade and irrigation.',
            'Cautions: Rare hepatotoxicity reports. Avoid in hormone-sensitive cancers and pregnancy. Not for long-term use (>6 months).',
          ],
        },

        { type: 'h3', text: 'Ginger (Zingiber officinale) — Tropical' },
        {
          type: 'list',
          items: [
            'Uses: Nausea (including chemotherapy nausea and morning sickness — one of the safest options in pregnancy); digestion; anti-inflammatory; circulation; pain.',
            'Constituents: Gingerols (fresh), shogaols (dried/heated), paradols; anti-inflammatory sesquiterpenes.',
            'Evidence: Multiple trials confirm efficacy for nausea; several trials support use for osteoarthritis pain.',
            'Preparation: Fresh grated in tea; decoction; tincture (60% alcohol); crystallized ginger; capsule.',
            'Growing: Tropical rhizome. In Zones 9–11 (Hawaii, South Florida, Gulf Coast, Southern California): outdoor perennial. Everywhere else: grow in a container using grocery store ginger rhizomes — pot up in spring, harvest by fall. Excellent patio plant.',
          ],
        },

        { type: 'h3', text: 'Turmeric (Curcuma longa) — Tropical' },
        {
          type: 'list',
          items: [
            'Uses: Anti-inflammatory; antioxidant; liver support; gut inflammation.',
            'Constituents: Curcumin (primary polyphenol, poor bioavailability alone); essential oil (tumerone, ar-tumerone).',
            'Bioavailability: Combine with piperine (black pepper — 20× absorption increase) or dietary fat for meaningful systemic levels.',
            'Preparation: Golden milk (turmeric + black pepper + fat in warm milk); tincture (60–70% alcohol); cook with fat and pepper.',
            'Growing: Same conditions as ginger — a tropical container plant in all but the warmest US zones (9–11). Beautiful ornamental with spectacular flowers when grown as a landscape plant.',
          ],
        },

        { type: 'h3', text: 'Hawthorn Berry (Crataegus spp.) — Zones 4–8' },
        {
          type: 'list',
          items: [
            'Uses: Cardiovascular tonic; mild heart failure (NYHA Class I–II); anxiety; antioxidant.',
            'Constituents: Oligomeric proanthocyanidins (OPCs), vitexin-rhamnoside, quercetin, tannins.',
            'Evidence: Multiple trials show improved exercise tolerance in heart failure. The long-term SPICE trial confirmed safety.',
            'Preparation: Tincture (berries + leaves + flowers), decoction, jam, syrup.',
            'Growing: Spiny shrub/small tree native across all regions of the US in various species. Crataegus monogyna (English hawthorn) is widely naturalized; many native North American hawthorn species were used similarly by Indigenous peoples. Harvest red or black berries in fall, ideally after the first frost.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Hawthorn has real cardiovascular activity. Combining it with digoxin, antihypertensives, nitrates, or PDE-5 inhibitors requires provider supervision. See Section 9.',
        },
      ],
    },

    {
      id: 'closing-reflection',
      title: 'The Medicinal Garden as Relationship with the Living World',
      blocks: [
        {
          type: 'p',
          text: 'Growing a medicinal garden is different from other kinds of gardening in a specific way: the plants you grow will, at some point, become something you take into your body to affect your health. This creates a relationship of attention and care that goes beyond the ordinary. You will know exactly where your elderberry grew, what soil it grew in, that no prohibited chemicals touched it, when you harvested it, how carefully you dried it. You will have a relationship with your medicine that no supplement aisle can provide.',
        },
        {
          type: 'p',
          text: 'This relationship is also one of humility. Plants are complex biological systems containing hundreds of active compounds whose full interactions with each other and with human physiology remain incompletely understood. Modern research validates much of what traditional herbalists observed over centuries. It also revises traditional understanding, identifies unexpected interactions, and occasionally reveals that a plant\'s reputation was inflated. Engaging with that complexity — growing plants, reading their research, making preparations with care, using them thoughtfully — is a genuine education in both botany and biology.',
        },
        {
          type: 'tip',
          emoji: '🌱',
          text: 'Start with one or two plants you feel a connection to. Grow chamomile and lemon balm because they are beautiful and easy and the tea is genuinely soothing. Grow echinacea because it is magnificent in the garden and useful in winter. Plant an elderberry because a mature elder in full flower is one of the most beautiful sights in a spring garden anywhere from Maine to Oregon — and the syrup you make from its berries in September will be something you reach for every winter for years. The garden will teach you what it has to teach.',
        },
        {
          type: 'p',
          text: 'Grow it. Harvest it with care. Understand what you are making. The garden has been medicine since the first human noticed which plants helped.',
        },
      ],
    },
  ],
}
