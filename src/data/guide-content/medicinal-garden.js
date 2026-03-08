export const medicinalGardenContent = {
  id: 'medicinal-garden',
  hero: {
    emoji: '🌿',
    title: 'Medicinal Herb Garden',
    subtitle: 'Grow Your Own Apothecary — Healing Plants from Garden to Remedy',
  },
  intro:
    'Humans have grown medicinal herbs for thousands of years, and the tradition continues today for good reason: a well-chosen collection of healing plants provides teas, tinctures, salves, and remedies that are genuinely effective, inexpensive, and deeply satisfying to produce yourself. This guide covers 15 of the most reliable and useful medicinal herbs — how to grow them, how to harvest and process them, and how to make basic preparations at home. All plants in this guide are legal throughout the United States and appropriate for home gardens in most USDA zones.',

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
      title: 'The Essential Apothecary — 15 Must-Grow Medicinal Herbs',
      blocks: [
        {
          type: 'table',
          headers: ['Herb', 'Zones', 'Type', 'Primary Uses', 'Parts Used', 'Difficulty'],
          rows: [
            ['Echinacea (Purple Coneflower)', '3–9', 'Perennial', 'Immune support, cold & flu', 'Roots, flowers, leaves', 'Easy'],
            ['Elderberry (Sambucus nigra)', '3–9', 'Shrub', 'Antiviral, immune support, syrup', 'Berries, flowers', 'Easy'],
            ['Chamomile (German)', 'Annual (all zones)', 'Annual', 'Sleep, anxiety, digestion, skin', 'Flowers', 'Very easy'],
            ['Calendula', 'Annual (all zones)', 'Annual', 'Skin healing, anti-inflammatory, salves', 'Flowers', 'Very easy'],
            ['Lemon Balm', '3–7', 'Perennial', 'Anxiety, sleep, digestion, cold sores', 'Leaves', 'Very easy'],
            ['Peppermint / Spearmint', '3–11', 'Perennial', 'Digestion, headaches, nausea, energy', 'Leaves', 'Very easy'],
            ['Lavender', '5–9', 'Perennial', 'Anxiety, sleep, headaches, skin burns', 'Flowers', 'Easy'],
            ['Valerian', '4–9', 'Perennial', 'Insomnia, anxiety, muscle tension', 'Roots', 'Moderate'],
            ['St. John\'s Wort', '3–8', 'Perennial', 'Mild depression, nerve pain, wound healing', 'Flowers and buds', 'Moderate'],
            ['Tulsi (Holy Basil)', 'Annual (all zones)', 'Annual', 'Stress adaptogen, immunity, digestion', 'Leaves and flowers', 'Easy'],
            ['Yarrow', '3–9', 'Perennial', 'Wound healing, fever reduction, digestion', 'Flowers and leaves', 'Easy'],
            ['Comfrey', '3–9', 'Perennial', 'Wound and bruise healing, salves only (topical)', 'Leaves and roots', 'Very easy'],
            ['Skullcap', '5–8', 'Perennial', 'Anxiety, nerve calming, muscle tension', 'Aerial parts', 'Moderate'],
            ['Ashwagandha', '8–10 (or annual)', 'Perennial/Annual', 'Stress adaptogen, energy, sleep', 'Roots', 'Moderate'],
            ['Motherwort', '4–8', 'Perennial', 'Heart palpitations, menstrual support, anxiety', 'Aerial parts', 'Easy'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Important Safety Note: Medicinal herbs are biologically active — that is exactly why they work. Some interact with prescription medications, and some are contraindicated during pregnancy, nursing, or with certain health conditions. Always research each herb fully before use. Consult a healthcare provider before using medicinal herbs alongside prescription medications, especially blood thinners, antidepressants, or immunosuppressants. This guide is educational — it does not constitute medical advice.',
        },
      ],
    },

    {
      id: 'growing-guide',
      title: 'Growing Guide — Detailed Herb Profiles',
      blocks: [
        { type: 'h3', text: '🌸 Echinacea (Echinacea purpurea, E. angustifolia)' },
        {
          type: 'list',
          items: [
            'Zones: 3–9. Hardy perennial that establishes slowly but lives for decades.',
            'Sun and soil: Full sun; well-drained average soil. Tolerates clay and drought once established. Excellent native prairie plant.',
            'Growing: Start from seed (stratify 4–6 weeks in moist medium in the refrigerator before sowing) or plant transplants. Expect modest growth the first year; full production by year 2–3.',
            'Harvest: Flowers and leaves throughout the growing season. Roots are harvested in fall of year 3 or later — dig the entire root, wash, and dry or tincture immediately.',
            'Medicinal use: E. purpurea flower/leaf preparations support immune function. E. angustifolia root is the most potent form. Best used at the onset of illness for 7–10 days, not as a daily supplement.',
          ],
        },
        { type: 'h3', text: '🫐 Elderberry (Sambucus nigra)' },
        {
          type: 'list',
          items: [
            'Zones: 3–9. Large deciduous shrub, 8–12 feet tall and wide. Plant at least two for cross-pollination.',
            'Sun and soil: Full sun to part shade; moist, fertile soil. Elderberry grows wild along stream banks and woodland edges — it loves moisture.',
            'Growing: Plant bare-root plants or rooted cuttings in spring. Prune in late winter — remove old canes after 3 years, keep the most vigorous newer canes.',
            'Caution: Only ripe black/dark purple berries of Sambucus nigra are used medicinally. Raw berries contain sambunigrin, which can cause nausea — always cook berries before making syrup or preparations. Red elderberry (S. racemosa) is toxic and must not be used.',
            'Harvest: Flowers (elderflower) in late spring/early summer — cut whole flower clusters. Berries in late summer when fully ripe and dark purple-black.',
            'Medicinal use: Elderberry syrup is among the most well-studied herbal preparations for reducing flu duration and severity. Elderflower makes a gentle tea for fever, sinus congestion, and mild upper respiratory infection.',
          ],
        },
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
