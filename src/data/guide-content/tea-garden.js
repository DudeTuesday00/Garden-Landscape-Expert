export const teaGardenContent = {
  id: 'tea-garden',
  hero: {
    emoji: '🍵',
    title: 'Tea Garden',
    subtitle: 'Grow Mint, Chamomile, Lemon Balm, and More for Your Personal Tea Collection',
  },
  intro: 'A tea garden is different from a culinary herb garden in both plant selection and philosophy. Where a cooking herb garden prioritizes flavor intensity and culinary versatility, a tea garden emphasizes aroma, gentle medicinal properties, and the pleasure of the brewing ritual itself. The plants overlap — both gardens might include thyme, lemon verbena, or rosemary — but the tea garden has its own cast of stars: mint in its many varieties, chamomile\'s apple-scented flowers, the soft lemon fragrance of lemon balm, the intensity of lemon verbena, the delicate sweetness of tulsi (holy basil), the calming depth of lavender, and the warming spice of anise hyssop. These are herbs that transform hot water into something worth sitting with.',
  sections: [
    {
      id: 'tea-garden-at-a-glance',
      title: 'The Tea Garden at a Glance',
      blocks: [
        {
          type: 'p',
          text: 'There is something quietly extraordinary about walking outside in the morning, snipping a handful of fresh herbs, and sitting down minutes later with a cup of tea made entirely from your own garden. No tea bag. No labels. No supply chain. Just plants you grew, harvested, and brewed yourself — in a cup that tastes of the season you are in.',
        },
        {
          type: 'p',
          text: 'A tea garden is one of the most rewarding, low-maintenance, and genuinely useful gardens you can plant. Most tea herbs are hardy perennials or easy annuals that ask very little and give a great deal: fragrance, flowers, beneficial insects, and — above all — an endless supply of fresh and dried material for blending teas that are precisely, personally yours.',
        },
        {
          type: 'table',
          headers: ['Garden Type', 'Space Needed', 'Primary Purpose', 'Maintenance Level', 'Best For'],
          rows: [
            ['Dedicated Tea Bed', '30–100 sq ft', 'Full tea collection, year-round harvest', 'Low–Medium', 'Gardeners wanting a beautiful, productive tea sanctuary with room to grow multiple varieties.'],
            ['Kitchen Garden Strip', '10–30 sq ft', 'Daily fresh herb access', 'Low', 'Practical growers who want fresh mint, lemon balm, and chamomile within steps of the kettle.'],
            ['Container Tea Garden', 'Patio or balcony', 'Portability, small-space growing', 'Medium (watering)', 'Apartment dwellers, renters, or anyone without in-ground space. Surprisingly productive.'],
            ['Integrated Tea Planting', 'Throughout garden', 'Tea herbs in existing beds', 'Low', 'Gardeners who want to weave chamomile, lavender, and mints through an existing landscape.'],
            ['Indoor/Window Tea Garden', 'Windowsill or grow light', 'Year-round fresh herbs', 'Medium', 'Anyone in cold climates wanting fresh mint or lemon balm through winter.'],
          ],
        },
        {
          type: 'p',
          text: 'This guide walks you through every stage of creating a personal tea garden: choosing plants for your climate, space, and taste preferences; designing a garden that is both functional and beautiful; growing and maintaining your tea herbs through the seasons; harvesting and drying material at peak flavor; and blending teas that are entirely your own. Whether you have a dedicated garden bed, a collection of containers on a balcony, or simply a sunny corner to devote to this project, the principles here apply.',
        },
        { type: 'image', src: '/guides/tea-garden/herbal-tea-garden-bed-mixed-herbs.jpg', alt: 'A lush herb garden bed with mint, chamomile, and lemon balm growing together in a sunny spot', caption: 'A tea garden emphasizes aroma and the pleasure of the brewing ritual over the flavor intensity a culinary herb bed is built for.' },
      ],
    },
    {
      id: 'essential-tea-herbs',
      title: 'Section 1: The Essential Tea Herbs — A Complete Guide',
      blocks: [
        {
          type: 'p',
          text: 'The following herbs form the core of any personal tea garden. Each entry covers flavor profile, growing requirements, harvest timing, and tea-making characteristics. Build your collection around the flavors you actually enjoy drinking — a tea garden you harvest daily is infinitely more valuable than an impressive collection you rarely use.',
        },
        {
          type: 'h3',
          text: '🌿 Mints (Mentha spp.)',
        },
        {
          type: 'p',
          text: 'Mint is the cornerstone of the tea garden — prolific, easy to grow, and available in a remarkable range of flavors. All mints share the same vigorous growth habit (requiring containment) and the same basic care requirements. The differences are in flavor, fragrance, and leaf character.',
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'The Golden Rule of Tea Garden Design: Contain your mints. Every mint variety — peppermint, spearmint, chocolate mint, apple mint — spreads aggressively by underground runners and will colonize every neighboring plant if given the chance. Always grow mints in sunken containers, raised planters, or pots buried to their rims. This single precaution is the difference between a mint accent and a mint monoculture.',
        },
        {
          type: 'h3',
          text: 'Growing Mints',
        },
        {
          type: 'list',
          items: [
            'Containment: Always grow in pots, buried containers, or raised beds with barriers. Runners spread 12–24 inches per season underground.',
            'Sun: Full sun to part shade. Mints tolerate more shade than most tea herbs and will still produce well with 4–6 hours of sun.',
            'Soil: Rich, consistently moist soil. Unlike Mediterranean herbs, mints want regular water and will not tolerate drought.',
            'Propagation: Divide established clumps every 2–3 years to maintain vigor. Root cuttings in water in spring. Rarely grown from seed (hybrids don\'t breed true).',
            'Harvest: Cut stems regularly to prevent flowering — once mint flowers, leaf quality declines. Harvest from spring through first frost. The best flavor is just before flowering.',
          ],
        },
        {
          type: 'h3',
          text: 'Mint Variety Guide',
        },
        {
          type: 'table',
          headers: ['Variety', 'Flavor Profile', 'Best Uses', 'Vigor', 'Notable Notes'],
          rows: [
            ['Peppermint (M. × piperita)', 'Bold, intensely cooling, menthol-forward', 'Classic peppermint tea, blends, digestive teas', 'Very high', 'The highest menthol content. Most medicinal of the mints. Best dried for storage.'],
            ['Spearmint (M. spicata)', 'Sweet, mild, less cooling than peppermint', 'Moroccan-style mint tea, fresh teas, blends', 'Very high', 'Better raw than peppermint — gentler and sweeter. Preferred for fresh-leaf teas.'],
            ['Chocolate Mint', 'Peppermint with faint cocoa undertone', 'Dessert teas, blends with vanilla or rooibos', 'High', 'The cocoa note is subtle but real. Lovely fresh. Grows slightly less aggressively.'],
            ['Apple Mint (M. suaveolens)', 'Fruity, round, sweet mint with apple note', 'Fruity blends, fresh summer teas', 'High', 'Downy, soft leaves. The mildest and most approachable mint. Excellent for beginners.'],
            ['Lemon Mint (M. × piperita citrata)', 'Mint-lemon combination, floral', 'Citrus blends, iced teas, fresh teas', 'High', 'Also sold as \'Bergamot Mint.\' Unusual and complex. Pairs well with lemon verbena.'],
            ['Corn Mint (M. arvensis)', 'Sharper, more medicinal, high menthol', 'Medicinal blends, strong peppermint alternative', 'Very high', 'Often used in herbal medicine. Less pleasant fresh but excellent dried.'],
          ],
        },
        {
          type: 'h3',
          text: '🌼 Chamomile (Matricaria chamomilla & Chamaemelum nobile)',
        },
        {
          type: 'p',
          text: 'Chamomile is the quintessential calming tea herb — its small, apple-scented flowers are among the most recognized and beloved in herbal medicine worldwide. Two species are widely grown, with different habits but similar flavors.',
        },
        {
          type: 'h3',
          text: 'Chamomile Types',
        },
        {
          type: 'table',
          headers: ['Type', 'Growth Habit', 'Flavor', 'Ease of Growing', 'Best For'],
          rows: [
            ['German Chamomile (M. chamomilla)', 'Annual, 18–24" tall, self-seeds prolifically', 'Classic chamomile — apple, honey, gentle floral warmth', 'Very easy', 'Tea production (highest volatile oil content), naturalizing in garden paths.'],
            ['Roman Chamomile (C. nobile)', 'Perennial, low mat 4–6" tall, spreads by runners', 'Similar but slightly more bitter, more herbal', 'Easy', 'Ground cover, lawn substitute, permanent garden feature. Less flower production.'],
            ['Double Roman (\'Flore Pleno\')', 'Perennial mat, non-flowering or few flowers', 'Decorative; poor tea producer', 'Easy', 'Ornamental only — not suitable for tea harvesting.'],
          ],
        },
        {
          type: 'h3',
          text: 'Growing Chamomile',
        },
        {
          type: 'list',
          items: [
            'German Chamomile: Direct sow in spring or fall (needs light to germinate — do not cover seed). Flowers in 8–10 weeks. Self-seeds so reliably that one planting often becomes permanent. Allow some flowers to drop seed each season.',
            'Roman Chamomile: Plant as plugs or divisions in spring. Spreads by runners to form a fragrant mat. Harvest the small flower heads as they fully open.',
            'Sun & Soil: Full sun, well-drained average soil. Chamomile tolerates poor soil better than most herbs — rich soil produces more leaf growth at the expense of flowers.',
            'Harvest timing: Pick flowers when petals are fully reflexed (bent back) from the center — this is peak volatile oil content and peak flavor. Harvest every 2–3 days during peak bloom.',
            'Drying: Spread flower heads in a single layer on a mesh screen. Dry at 95–105°F or in a warm room with good airflow. Flowers dry in 1–2 weeks and hold their scent remarkably well.',
          ],
        },
        {
          type: 'tip',
          emoji: '☕',
          text: 'Brewing Chamomile: Fresh chamomile makes a beautiful, delicate tea — use a generous handful of freshly-picked flowers per cup and steep for only 3–4 minutes to avoid bitterness. Dried chamomile is more concentrated: 1 tablespoon per cup, steeped 4–5 minutes. Chamomile pairs naturally with honey, lavender, and lemon. Classic nighttime blend: equal parts chamomile and lemon balm, a pinch of lavender.',
        },
        { type: 'image', src: '/guides/tea-garden/chamomile-flowers-blooming-closeup.jpg', alt: 'Small white and yellow chamomile flowers blooming in a garden bed, close up', caption: 'Pick when petals are fully reflexed back from the center — that\'s peak volatile oil content and peak flavor.' },
        {
          type: 'h3',
          text: '🍋 Lemon Balm (Melissa officinalis)',
        },
        {
          type: 'p',
          text: 'Lemon balm is one of the most versatile and beloved tea herbs — a hardy perennial with broad, crinkled, lemon-scented leaves that can be used fresh year-round in mild climates, or dried for winter use. It is calming, mildly antiviral, and produces tea with a gentle lemony warmth that is entirely its own.',
        },
        {
          type: 'list',
          items: [
            'Flavor: Fresh, clean lemon without citrus sharpness. Softer and more herbal than lemon verbena. Slightly sweet with a mild mint undertone (lemon balm is in the mint family).',
            'Sun: Tolerates part shade well — one of the best tea herbs for shadier gardens. Full sun in cool climates; some afternoon shade in hot climates.',
            'Soil: Adaptable. Grows in average to rich, well-drained soil. Like mint, it prefers consistent moisture but tolerates some drought once established.',
            'Growth: Clump-forming perennial. Spreads moderately (not as invasively as mint, but it will self-seed if allowed to flower). Divide clumps every 2–3 years in spring.',
            'Harvest: Cut back by half before it flowers to encourage fresh leafy growth and prevent self-seeding. Harvest in the morning after dew dries for best oil content.',
            'Tea: Use 8–10 fresh leaves per cup (they\'re large), steeped 5–7 minutes. Dried lemon balm loses some brightness — supplement with a curl of lemon zest when blending dried teas.',
            'Notable varieties: \'Aurea\' (gold-variegated leaves, ornamental); \'All Gold\' (golden-yellow foliage, slightly less vigorous).',
          ],
        },
        {
          type: 'h3',
          text: '🌿 Lemon Verbena (Aloysia citrodora)',
        },
        {
          type: 'p',
          text: 'Lemon verbena produces the most intensely lemon-scented leaves of any garden plant — more powerfully citrus than actual lemons. A single fresh leaf rubbed between the fingers fills a room with fragrance. As a tea herb, it is extraordinary: bright, vivid, and refreshing, either alone or as the citrus anchor in complex blends.',
        },
        {
          type: 'list',
          items: [
            'Flavor: Very intense pure lemon — more concentrated than lemon balm, with a slightly more floral note. A little goes a long way.',
            'Hardiness: Tender perennial (Zone 8+). In Zone 7, it will often die back to the ground in hard winters but resprout from the roots in late spring. In colder zones, grow in a large container and bring indoors for winter.',
            'Sun & Heat: Thrives in full sun and heat. The more sun and warmth, the more fragrant the leaves.',
            'Overwintering: In Zone 7, mulch heavily and expect it to be the last thing to emerge in spring (often June). Don\'t give up — lemon verbena looks dead long before it sprouts. In Zone 6 and colder, grow in containers and overwinter in a cool, frost-free location.',
            'Tea: Use 3–5 fresh leaves per cup — significantly fewer than lemon balm due to intensity. Excellent dried. Pairs brilliantly with mint, chamomile, and hibiscus.',
          ],
        },
        {
          type: 'h3',
          text: '🌺 Tulsi / Holy Basil (Ocimum tenuiflorum)',
        },
        {
          type: 'p',
          text: 'Tulsi is the sacred herb of Ayurvedic tradition and one of the most complex-flavored tea plants available — simultaneously spicy, clove-like, sweet, and herbal, with a profile unlike any other tea plant. It is an adaptogen (a plant that helps the body manage stress) and produces tea with real body and warmth.',
        },
        {
          type: 'table',
          headers: ['Variety', 'Flavor Profile', 'Leaf Character', 'Best Uses'],
          rows: [
            ['Vana (Wild) Tulsi', 'Spicy, clove-forward, intense', 'Small dark green leaves, bushy', 'Strongest flavor for single-herb teas. The most medicinal.'],
            ['Kapoor Tulsi', 'Sweet, mildly spicy, more approachable', 'Medium green, compact', 'Blends well. Good introduction to tulsi. Most widely available.'],
            ['Krishna (Purple) Tulsi', 'Spicy, complex, clove and pepper notes', 'Dark purple-green, ornamental', 'Beautiful in the garden. Excellent in blends with mint or chamomile.'],
            ['Temperate Tulsi', 'Milder, more anise-like', 'Large, vigorous leaves', 'Better suited to northern climates. Good for those who find other tulsis too intense.'],
          ],
        },
        {
          type: 'list',
          items: [
            'Growing: Warm-season annual. Start indoors 4–6 weeks before last frost; transplant after soil warms. Full sun, well-drained average to rich soil. Pinch regularly to delay flowering and extend harvest.',
            'Harvest: Cut entire stems; the plant bushes out from each pruning. Use fresh or dry quickly in a dehydrator — tulsi oxidizes and loses color rapidly at room temperature.',
          ],
        },
        {
          type: 'h3',
          text: '💜 Lavender (Lavandula spp.)',
        },
        {
          type: 'p',
          text: 'Lavender occupies a unique position in the tea garden — it is first a garden plant of extraordinary beauty, and second a tea ingredient to be used with restraint. The same intensity that makes lavender so powerfully fragrant can make tea made with too much lavender taste overwhelmingly perfumed. Used carefully, however, lavender adds a floral, slightly sweet depth to blends that no other plant provides.',
        },
        {
          type: 'list',
          items: [
            'English Lavender (L. angustifolia): The preferred species for culinary and tea use. Varieties like \'Hidcote,\' \'Munstead,\' and \'Vera\' have the sweetest, least camphor-forward flavor. Hardy to Zone 5.',
            'French Lavender (L. dentata): More camphor-forward. Beautiful garden plant but less suitable for tea. Zone 7+.',
            'Growing: Full sun, excellent drainage, average to poor soil. Lavender is a Mediterranean plant that hates wet feet — raised beds or slopes with gritty, well-drained soil are ideal. Heavy clay soils are not suitable without significant amendment with coarse grit and compost to improve drainage.',
            'Harvest for tea: Cut flower spikes when buds are 50% open. Dry upside down in bundles. Use the dried buds, not the stems or leaves — 1 teaspoon per cup maximum. Blend with chamomile or lemon balm to avoid overwhelming the cup.',
          ],
        },
        {
          type: 'h3',
          text: '🌸 Anise Hyssop (Agastache foeniculum)',
        },
        {
          type: 'p',
          text: 'Anise hyssop is one of the most underrated tea herbs — a tall, beautiful North American native with long purple flower spikes and leaves that smell and taste unmistakably of anise or licorice, with a sweet, warming quality that makes exceptional tea either alone or blended. It is also one of the best pollinator plants in the tea garden.',
        },
        {
          type: 'list',
          items: [
            'Flavor: Warm licorice/anise with a sweet herbal base. Excellent with chamomile, mint, or on its own as a warming winter tea.',
            'Growing: Hardy perennial (Zone 4–9). Full sun, well-drained soil. More drought-tolerant than most tea herbs — a good choice for hot, dry areas. Direct sow in spring or fall; self-seeds reliably. Often naturalizes in gardens.',
            'Use: Both leaves and flowers can be used in tea. Harvest leaves before flowering for the mildest flavor; flowers add sweetness. Use fresh or dried — dries quickly and holds flavor well.',
          ],
        },
        {
          type: 'h3',
          text: 'Additional Tea Garden Plants Worth Growing',
        },
        {
          type: 'table',
          headers: ['Herb', 'Flavor / Type', 'Key Considerations', 'Tea Character'],
          rows: [
            ['Echinacea (E. purpurea)', 'Earthy, slightly bitter, warming', 'Hardy perennial (Zone 3–9). Full sun. Beautiful purple daisy flowers. Root and petals both used.', 'Immune-supporting. Blend with mint or lemon balm to soften bitterness.'],
            ['Hibiscus (H. sabdariffa)', 'Tart, cranberry-like, vibrant', 'Annual in most zones. Needs a long warm season — start early indoors. Grow for calyces.', 'Deep ruby color. Excellent hot or iced. High in vitamin C. Pairs with rosehip and ginger.'],
            ['Rosehips (Rosa rugosa)', 'Tart, fruity, rose-hinted', 'Hardy shrub. Harvest hips after first frost for sweetest flavor. Dry before using.', 'High vitamin C. Rich autumn flavor. Blend with hibiscus or dried apple.'],
            ['Lemongrass (Cymbopogon citratus)', 'Clean, citrusy, grassy warmth', 'Tender perennial. Grow in large container; overwinter indoors in Zone 8 and below.', 'Refreshing and warming simultaneously. Excellent base for Southeast Asian-inspired blends.'],
            ['Valerian (Valeriana officinalis)', 'Earthy, woody, slightly sweet', 'Hardy perennial. Large plant — needs space. Roots used for most medicinal preparations.', 'Strongly calming. Most effective as dried root tea. Pair with passionflower or lemon balm.'],
            ['Passionflower (Passiflora incarnata)', 'Mildly earthy, floral', 'Hardy to Zone 6. Native vine. Use leaves and dried aerial parts.', 'Calming and sedating. Excellent in nighttime blends with chamomile and lemon balm.'],
            ['Pineapple Sage (Salvia elegans)', 'Fruity, pineapple-mint, sweet', 'Tender perennial; annual in most zones. Stunning red flowers in fall.', 'Fruity, refreshing iced or hot. The flowers are edible and make beautiful garnishes.'],
            ['Bee Balm (Monarda didyma)', 'Bergamot, oregano, citrus, spicy', 'Hardy perennial. Full sun to part shade. Spreads by rhizomes.', 'Complex, aromatic — often called \'wild bergamot tea.\' Used by Eastern woodland tribes.'],
          ],
        },
      ],
    },
    {
      id: 'designing-your-tea-garden',
      title: 'Section 2: Designing Your Tea Garden',
      blocks: [
        {
          type: 'p',
          text: 'A well-designed tea garden serves two purposes simultaneously: it is a functional growing space that produces reliable harvests of quality tea material, and it is a beautiful, fragrant garden space that you want to spend time in. These goals are not in conflict — the most productive tea gardens are often the most beautiful, because healthy, well-sited plants are inherently beautiful plants.',
        },
        {
          type: 'h3',
          text: 'Siting Your Tea Garden',
        },
        {
          type: 'list',
          items: [
            'Sun: Most tea herbs prefer 6–8 hours of direct sun. Chamomile, lemon balm, and mints are the most shade-tolerant (4–6 hours). Plan your sunniest spot for lavender, lemon verbena, tulsi, and anise hyssop.',
            'Access to water: Tea herbs vary widely in water needs. Mints and lemon balm prefer consistent moisture; lavender and rosemary need sharp drainage. Group plants by water needs whenever possible.',
            'Proximity to the kitchen: The best tea garden is the one you use daily. Situate at least a core collection — mint, lemon balm, chamomile — close to the kitchen door. Fragrant herbs along a path you walk every morning become a daily ritual.',
            'Drainage: Amend beds with compost and grit before planting. Heavy clay soils are the primary killer of Mediterranean tea herbs (lavender, lemon verbena). A raised bed of 8–12 inches is the most reliable solution in problematic soils.',
          ],
        },
        {
          type: 'h3',
          text: 'Grouping by Water and Cultural Needs',
        },
        {
          type: 'p',
          text: 'The single most important design decision in a tea garden is separating plants by their water and soil preferences. Mixing Mediterranean drought-lovers with moisture-hungry mints in the same bed, on the same watering schedule, will leave one group stressed and underperforming.',
        },
        {
          type: 'table',
          headers: ['Group', 'Plants', 'Soil', 'Water Needs', 'Design Approach'],
          rows: [
            ['Mediterranean / Dry', 'Lavender, lemon verbena, anise hyssop, rosemary, thyme', 'Well-drained, average to poor, gritty, slightly alkaline', 'Drought-tolerant once established; infrequent deep watering', 'Raised bed or slope. Gravel mulch or bare soil. No organic mulch.'],
            ['Moisture-Loving Perennials', 'Mint (contained), lemon balm, bee balm, valerian, passionflower', 'Rich, consistently moist, well-drained, slightly acidic to neutral', 'Regular watering; do not allow to dry completely', 'Ground-level beds with organic mulch. Irrigation or weekly watering.'],
            ['Warm-Season Annuals', 'Tulsi, lemongrass, hibiscus, pineapple sage', 'Average to rich, well-drained', 'Regular watering during establishment; moderate once established', 'Rotate annually. Start indoors. Plant after last frost.'],
            ['Easy Perennials (Adaptable)', 'Chamomile, echinacea, rosehips (Rosa rugosa), anise hyssop', 'Average, well-drained, tolerant of variation', 'Moderate — tolerates both some drought and occasional moisture', 'Can bridge the two main groups. Use as transitional planting.'],
          ],
        },
        {
          type: 'h3',
          text: 'Design Layouts for Every Space',
        },
        {
          type: 'h3',
          text: 'The Dedicated Tea Bed (50–100 sq ft)',
        },
        {
          type: 'p',
          text: 'A dedicated rectangular or curved bed designed specifically for tea herbs. Organize by height — tall plants (lemon verbena, bee balm, valerian) at the back, medium plants (tulsi, chamomile, anise hyssop, lemon balm) in the middle, low plants (mints in buried pots, thyme, chamomile mat) at the front. A central path allows access without stepping on plants.',
        },
        {
          type: 'list',
          items: [
            'Back row: Lemon verbena, anise hyssop, valerian, passionflower vine on trellis',
            'Middle row: Chamomile, lemon balm, tulsi, bee balm, echinacea',
            'Front row: Mints (in buried containers), lavender, thyme, Roman chamomile',
            'Accent: Rosehip shrub at corner or end anchor',
          ],
        },
        {
          type: 'h3',
          text: 'The Container Tea Garden (Patio or Balcony)',
        },
        {
          type: 'p',
          text: 'A collection of 6–12 pots ranging from 6 to 24 inches in diameter. Mints go in their own large containers (this is ideal since containment is automatic). Lemon balm, chamomile, and tulsi each do well in 12-inch pots. Lemon verbena needs a large container — at least 18 inches — to thrive.',
        },
        {
          type: 'list',
          items: [
            'Essential 5-pot starter: Peppermint or spearmint (large pot), German chamomile (12" pot), lemon balm (12" pot), lemon verbena (18" pot), tulsi (12" pot)',
            'Expanded 10-pot collection: Add chocolate mint, apple mint, lavender (12" pot with excellent drainage), anise hyssop, bee balm, pineapple sage (summer annual pot)',
            'Container tip: Group pots together to create microclimate humidity; separate lavender slightly for better drainage and airflow',
          ],
        },
        {
          type: 'h3',
          text: 'The Kitchen Door Herb Strip (10–20 sq ft)',
        },
        {
          type: 'p',
          text: 'A narrow bed or series of containers positioned within steps of the kitchen entrance. Focus on daily-use, fresh-harvest herbs: spearmint or chocolate mint (in buried pot), lemon balm (clump), chamomile (allowed to self-seed through the strip), tulsi (summer annual). Add a small lavender for fragrance as you pass.',
        },
        {
          type: 'tip',
          emoji: '🌿',
          text: 'Design Tip: The Fragrant Path — If you have a path to your front or back door, plant creeping or mat-forming tea herbs along its edges: Roman chamomile (releases apple fragrance when walked on), thyme, and low-growing mints in buried pots. Brush against lemon balm positioned at knee height as you pass. A path through fragrant herbs transforms a daily walk into a sensory ritual — and ensures you notice when herbs are ready to harvest.',
        },
        { type: 'image', src: '/guides/tea-garden/lavender-mint-tea-garden-path.jpg', alt: 'A garden path lined with blooming lavender and green mint growing along the edges', caption: 'Fragrant herbs planted along a path you walk daily become part of the ritual — and a natural reminder of what\'s ready to harvest.' },
      ],
    },
    {
      id: 'growing-planting-seasonal-care',
      title: 'Section 3: Growing, Planting & Seasonal Care',
      blocks: [
        {
          type: 'h3',
          text: 'Starting Your Tea Garden',
        },
        {
          type: 'p',
          text: 'Most tea herbs can be started from seed, but the fastest and most reliable way to build a collection is through transplants and divisions. A mix of both approaches — seeds for chamomile and tulsi, transplants or divisions for perennials — gives you a productive garden in the first season.',
        },
        {
          type: 'table',
          headers: ['Herb', 'Best Starting Method', 'When to Plant', 'Time to First Harvest'],
          rows: [
            ['Mints', 'Division or rooted cutting (seeds don\'t breed true)', 'Spring after last frost; fall in Zone 7+', '4–6 weeks after planting'],
            ['German Chamomile', 'Direct seed (needs light; do not cover)', 'Early spring or fall; self-seeds thereafter', '8–10 weeks from seed'],
            ['Lemon Balm', 'Transplant or division; or seed indoors', 'Spring; or fall in mild zones', '6–8 weeks from transplant'],
            ['Lemon Verbena', 'Transplant (softwood cutting or nursery plant)', 'After last frost when soil warm', '8–10 weeks from transplant'],
            ['Tulsi', 'Seed indoors 4–6 weeks before last frost', 'Transplant after soil warms to 65°F+', '8–10 weeks from transplant'],
            ['Lavender', 'Transplant (cuttings or nursery plant)', 'Spring after frost; or fall in Zone 7+', 'Second year for substantial harvest'],
            ['Anise Hyssop', 'Direct seed or transplant', 'Spring; self-seeds in subsequent years', '8–10 weeks from seed'],
            ['Echinacea', 'Transplant or seed (slow from seed)', 'Spring or fall', 'Second year for best harvest'],
          ],
        },
        {
          type: 'h3',
          text: 'Soil Preparation',
        },
        {
          type: 'list',
          items: [
            'For moisture-loving herbs (mints, lemon balm, bee balm): Amend with 3–4 inches of compost worked in to 12 inches depth. Soil should be rich, moisture-retentive but not waterlogged. Mulch with 2–3 inches of shredded bark or straw.',
            'For Mediterranean herbs (lavender, lemon verbena, anise hyssop): Add coarse grit or perlite (25–30% by volume) to improve drainage. Avoid over-enriching — these herbs produce more fragrant leaves in leaner soil. Do not mulch with organic material; gravel mulch is acceptable.',
            'For annuals (chamomile, tulsi, hibiscus): Average to rich, well-drained soil. A balanced slow-release fertilizer at planting is sufficient for the season.',
          ],
        },
        {
          type: 'h3',
          text: 'Watering',
        },
        {
          type: 'list',
          items: [
            'Mints and lemon balm: Water when the top inch of soil is dry. In hot summers, this may mean every 2–3 days for container-grown plants. Wilting is a sign of drought stress — these herbs recover quickly after watering but regular drought reduces oil content and flavor.',
            'Chamomile: Moderate watering. Established German chamomile is surprisingly drought-tolerant. Overwatering in clay soil is more likely to kill chamomile than underwatering in good-draining beds.',
            'Lavender and lemon verbena: Deep, infrequent watering. Allow soil to dry almost completely between waterings. In-ground lavender in well-prepared beds may need no supplemental irrigation after the first season.',
            'Tulsi: Regular watering but allow to dry slightly between waterings. Never allow prolonged drought — tulsi bolts (runs to seed) quickly under stress.',
          ],
        },
        {
          type: 'h3',
          text: 'Fertilizing Tea Herbs',
        },
        {
          type: 'p',
          text: 'Most tea herbs need minimal fertilization. Unlike vegetables grown for yield, herbs grown for aromatic oil content often produce their most flavorful leaves in modestly fertile soil — the mild stress of limited nutrients concentrates the volatile oils that give herbs their character. Over-fertilizing produces lush, fast-growing plants with diluted flavor.',
        },
        {
          type: 'list',
          items: [
            'Perennials: A light top-dressing of compost in spring is generally sufficient. Avoid high-nitrogen fertilizers.',
            'Containers: Pot-grown herbs deplete nutrients faster. Apply a balanced slow-release fertilizer at the start of the growing season and supplement monthly with liquid seaweed or fish emulsion at half strength.',
            'Mediterranean herbs: Do not fertilize after midsummer — late-season growth is soft and frost-vulnerable.',
          ],
        },
        {
          type: 'h3',
          text: 'Pruning & Maintaining Tea Herbs',
        },
        {
          type: 'list',
          items: [
            'Mints: Cut back to 4–6 inches after each major harvest (typically 3–4 times per season). Remove flower buds as they form — flowering mint produces coarser, less flavorful leaves. Divide congested clumps every 2–3 years.',
            'Lemon balm: Cut to 4–6 inches after flowering or when stems get leggy. It will flush with fresh, flavorful growth. The third cutting of the season is often the most fragrant.',
            'Chamomile: Regular flower harvesting is the pruning of chamomile — the more you pick, the more flowers the plant produces. Once the plant finishes its flush, allow some flowers to set seed for next year.',
            'Lavender: Cut back by one-third immediately after flowering. Never cut into old woody growth — lavender does not regenerate from bare wood. Replace plants every 5–7 years as they become woody and center-sparse.',
            'Lemon verbena: Prune hard in early spring as new growth emerges. Tip-prune throughout the season to encourage bushy growth and delay flowering.',
          ],
        },
        {
          type: 'h3',
          text: 'Overwintering',
        },
        {
          type: 'table',
          headers: ['Herb', 'Hardiness', 'Overwintering Strategy'],
          rows: [
            ['Mint varieties', 'Zone 3–9', 'Cut to ground after frost. Mulch lightly in Zone 5 and colder. Virtually indestructible.'],
            ['Lemon Balm', 'Zone 4–9', 'Cut back after frost. Mulch in colder zones. Emerges reliably in spring.'],
            ['German Chamomile', 'Annual (self-seeds)', 'Allow to self-seed. New plants will emerge in spring from dormant seed.'],
            ['Roman Chamomile', 'Zone 4–9', 'Evergreen in Zone 7+. Dies back but survives to Zone 4 with mulch.'],
            ['Lavender', 'Zone 5–9 (variety dependent)', 'Good drainage is more important than cold protection. Do not cut back in fall.'],
            ['Lemon Verbena', 'Zone 8–10 (root hardy to Zone 7)', 'Mulch heavily; emerges late in spring (be patient). Container plants: store cool and frost-free.'],
            ['Anise Hyssop', 'Zone 4–9', 'Dies back. Self-seeds reliably. May need light mulch in Zone 4–5.'],
            ['Tulsi', 'Annual everywhere', 'Collect seeds in fall before frost. Start fresh each spring from saved seed.'],
          ],
        },
        { type: 'image', src: '/guides/tea-garden/lemon-balm-lush-green-leaves.jpg', alt: 'Lush green lemon balm leaves growing densely in a garden bed', caption: 'Cut back by half before it flowers and lemon balm rewards you with fresh, oil-rich regrowth all season long.' },
      ],
    },
    {
      id: 'harvesting-drying-tea-herbs',
      title: 'Section 4: Harvesting & Drying Your Tea Herbs',
      blocks: [
        {
          type: 'p',
          text: 'The difference between tea made from herbs harvested and dried correctly and tea made from poorly-timed, poorly-dried herbs is profound. Correct harvest timing — the stage of growth, the time of day, the condition of the plant — is what separates a cup of real flavor from something that tastes vaguely of plant matter.',
        },
        {
          type: 'h3',
          text: 'When to Harvest',
        },
        {
          type: 'list',
          items: [
            'Time of day: Harvest in the morning, after dew has dried but before the heat of midday. Essential oils are at their peak concentration in the early part of the day — after extended heat, some volatile oils evaporate.',
            'Stage of growth — leaves: Harvest leafy herbs just before or at the beginning of flowering. Once a plant flowers fully, the leaves often become tougher, more bitter, and less fragrant as the plant redirects energy to seed production.',
            'Stage of growth — flowers: Harvest chamomile and lavender flowers at specific stages (see individual entries). For most flowering tea herbs, pick when flowers are at peak or just past peak opening — not when buds are still closed.',
            'Plant condition: Never harvest from stressed, drought-affected, or diseased plants. Wait until the plant has recovered from any stress before harvesting for tea.',
            'Frequency: Regular harvesting encourages more growth. Harvesting 25–33% of the plant at any one time allows rapid recovery. Chamomile should be picked every 2–3 days at peak bloom.',
          ],
        },
        {
          type: 'tip',
          emoji: '🫖',
          text: 'Fresh vs. Dried Tea: Fresh and dried herbs make fundamentally different teas, and neither is universally better. Fresh tea — a handful of mint leaves, lemon balm, or chamomile flowers steeped immediately — is brighter, greener, and more vegetal. Dried tea is more concentrated, longer shelf-stable, and in some cases more complex — the drying process changes certain flavor compounds. Dried chamomile in particular develops a warmth and honey-note that fresh chamomile lacks. The best approach: use fresh herbs throughout the growing season, and rely on a stock of beautifully dried herbs through winter.',
        },
        {
          type: 'h3',
          text: 'Drying Methods',
        },
        {
          type: 'h3',
          text: 'Air Drying (Best for Most Tea Herbs)',
        },
        {
          type: 'list',
          items: [
            'Bundle and hang: Tie stems in small bundles of 6–8 stems. Larger bundles trap moisture and promote mold. Hang upside down in a warm, dry, well-ventilated location out of direct sun (direct sun fades color and degrades oils).',
            'Screen drying: Spread individual leaves or flower heads in a single layer on a wire mesh screen or clean window screen. Allow airflow above and below. Best for chamomile flowers and individual leaves.',
            'Paper bag method: For herbs that drop seeds or petals easily (chamomile, anise hyssop), place bundled stems in a paper bag with the bundle heads down, cut holes in the bag for airflow. Fallen flowers and seeds collect in the bag.',
            'Check for dryness: Properly dried herbs are completely crisp — leaves shatter, not bend. Stems snap cleanly. Any flexibility indicates remaining moisture and risk of mold in storage. Most herbs take 1–3 weeks to dry fully in a warm room.',
          ],
        },
        {
          type: 'h3',
          text: 'Dehydrator Drying (Fastest, Best for Tulsi and Lemon Verbena)',
        },
        {
          type: 'p',
          text: 'A food dehydrator set to 95–105°F produces consistently dried herbs in 4–12 hours. This method is particularly valuable for tulsi (which oxidizes and discolors quickly) and lemon verbena (which holds its bright flavor better with quick drying). Do not exceed 115°F — higher temperatures degrade volatile oils.',
        },
        {
          type: 'h3',
          text: 'Storage',
        },
        {
          type: 'list',
          items: [
            'Containers: Store dried herbs in airtight glass jars (canning jars are ideal). Avoid plastic, which can absorb flavors. Dark glass or dark storage location is best.',
            'Labeling: Always label with herb name and harvest date. Most dried tea herbs hold good flavor for 12–18 months; after that, flavor decreases but the herbs remain usable.',
            'Avoid: Do not refrigerate dried herbs — temperature changes cause condensation. Do not store near the stove or in direct sun.',
            'Whole vs. crumbled: Store leaves whole and crumble just before brewing. Crumbling increases surface area and speeds flavor loss. Whole chamomile flowers, in particular, hold their flavor far longer than pre-crumbled material.',
          ],
        },
        { type: 'image', src: '/guides/tea-garden/dried-herbs-bundles-hanging.jpg', alt: 'Small bundles of dried herbs hanging upside down to dry in a rustic wooden setting', caption: 'Properly dried herbs are completely crisp — leaves shatter rather than bend, and stems snap cleanly.' },
      ],
    },
    {
      id: 'blending-your-personal-tea-collection',
      title: 'Section 5: Blending Your Personal Tea Collection',
      blocks: [
        {
          type: 'p',
          text: 'Tea blending is part flavor alchemy, part intuition, and part patience. Unlike commercial blends formulated for mass appeal, your personal blends can be calibrated exactly to your taste: the level of mint intensity you actually want, the proportion of chamomile that suits your palate, the hint of lavender that lifts a blend without overwhelming it. Start with proven combinations, then adjust, experiment, and keep notes.',
        },
        {
          type: 'h3',
          text: 'Brewing Guidelines',
        },
        {
          type: 'table',
          headers: ['Herb', 'Fresh Quantity (per cup)', 'Dried Quantity (per cup)', 'Steep Time', 'Water Temp'],
          rows: [
            ['Peppermint', '10–15 leaves + stem tip', '1 tbsp', '5–7 min', '212°F (boiling)'],
            ['Spearmint / Apple Mint', '12–18 leaves', '1 tbsp', '4–6 min', '212°F'],
            ['Chamomile (German)', '1/4 cup fresh flowers', '1 tbsp dried flowers', '4–5 min', '200°F'],
            ['Lemon Balm', '8–12 large leaves', '1 tbsp', '5–7 min', '200°F'],
            ['Lemon Verbena', '3–5 leaves (intense!)', '1 tsp', '5 min', '200°F'],
            ['Tulsi', '5–8 leaves', '1 tbsp', '5–7 min', '212°F'],
            ['Lavender', '4–5 fresh flower spikes', '1 tsp dried buds only', '3–4 min', '200°F (avoid bitter)'],
            ['Anise Hyssop', '6–8 leaves or 2–3 flower spikes', '1 tbsp', '5–7 min', '212°F'],
            ['Echinacea (petals)', '8–10 fresh petals', '1 tbsp dried petals', '7–10 min', '212°F'],
            ['Lemongrass', '2–3" fresh stalk, bruised', '1 tbsp', '7–10 min', '212°F'],
          ],
        },
        {
          type: 'h3',
          text: 'Starter Blends',
        },
        {
          type: 'h3',
          text: 'Classic Calming Blend',
        },
        {
          type: 'p',
          text: '2 parts chamomile, 2 parts lemon balm, 1 part lavender (buds), ½ part passionflower',
        },
        {
          type: 'p',
          text: 'The classic evening blend. Chamomile and lemon balm are the base; lavender adds floral depth; passionflower deepens the calming effect without adding strong flavor. Steep for 5–7 minutes in 200°F water. Excellent with a drizzle of honey.',
        },
        {
          type: 'h3',
          text: 'Bright Morning Mint',
        },
        {
          type: 'p',
          text: '2 parts peppermint, 1 part spearmint, 1 part lemon verbena, ½ part anise hyssop',
        },
        {
          type: 'p',
          text: 'A stimulating, aromatic wake-up blend. Peppermint provides the cooling base; spearmint adds sweetness; lemon verbena brings citrus brightness; anise hyssop gives a warming backend. Steep 5–6 minutes at full boil. Skip sweetener — this blend is naturally complex.',
        },
        {
          type: 'h3',
          text: 'Summer Garden Iced Tea',
        },
        {
          type: 'p',
          text: '2 parts spearmint, 2 parts lemon balm, 1 part hibiscus, 1 part lemon verbena',
        },
        {
          type: 'p',
          text: 'Brew as a concentrate (double strength), allow to cool, pour over ice. Hibiscus gives ruby color and tartness; lemon verbena sharpens the citrus note; mint and lemon balm round and cool. Sweeten with simple syrup if desired. One of the finest summer drinks a garden can produce.',
        },
        {
          type: 'h3',
          text: 'Winter Warming Spice',
        },
        {
          type: 'p',
          text: '2 parts tulsi, 1 part anise hyssop, 1 part dried lemon verbena, 1 part dried chamomile, ½ part dried lemongrass',
        },
        {
          type: 'p',
          text: 'A warming, complex blend for cold weather. Tulsi provides spice and depth; anise hyssop adds sweet licorice warmth; lemon verbena brightens; chamomile smooths and sweetens; lemongrass gives an aromatic lift. Steep 7 minutes at full boil. Add fresh ginger or cinnamon stick for additional warmth.',
        },
        {
          type: 'h3',
          text: 'Immune Support Blend',
        },
        {
          type: 'p',
          text: '2 parts echinacea petals, 2 parts tulsi, 1 part peppermint, 1 part dried rosehips',
        },
        {
          type: 'p',
          text: 'Echinacea and tulsi are the active components; peppermint makes the blend more palatable; rosehips add vitamin C and gentle tartness. Steep 8–10 minutes at full boil. Best used at first signs of illness or during cold and flu season.',
        },
        {
          type: 'tip',
          emoji: '📋',
          text: 'Keep a Tea Journal: The most valuable tool in tea blending is a notebook. Record every blend: the herbs used, proportions, steeping time, water temperature, and your tasting notes. What worked and what didn\'t. What you\'d change. Which herbs were ready to harvest and which were past their prime. Over a single season, a well-kept tea journal becomes an invaluable reference. After two or three seasons, it is something richer: a personal record of your garden\'s character, your palate\'s development, and the discovery of blends that are genuinely, irreproducibly yours.',
        },
      ],
    },
    {
      id: 'tea-garden-seasonal-calendar',
      title: 'Section 6: Tea Garden Seasonal Calendar',
      blocks: [
        {
          type: 'p',
          text: 'A tea garden follows its own seasonal rhythm. Understanding what to do — and harvest — in each season keeps your garden productive and your tea cupboard stocked year-round. The calendar below uses Zone 7 as a reference point. Shift dates 2–4 weeks later for colder zones (5–6) or 2–4 weeks earlier for warmer zones (8–9). The harvest sequence and principles apply across all climates.',
        },
        {
          type: 'table',
          headers: ['Season / Month', 'Garden Tasks', 'What to Harvest', 'What to Brew Fresh'],
          rows: [
            ['Late Winter\n(Feb–Mar)', 'Order seeds; start tulsi and lemon verbena indoors under lights. Prune lavender lightly. Top-dress beds with compost.', 'Nothing yet — patience!', 'Dried chamomile, peppermint, lemon balm from last year\'s stores.'],
            ['Spring\n(Apr–May)', 'Transplant tulsi after last frost (mid-April in Zone 7). Direct sow chamomile. Divide mint and lemon balm clumps. Plant new transplants.', 'First mint tips, early lemon balm. German chamomile begins blooming.', 'Fresh mint, fresh lemon balm — first fresh tea of the season.'],
            ['Early Summer\n(Jun)', 'Begin regular mint pruning to prevent flowering. Harvest chamomile intensively every 2–3 days. Pinch tulsi flower buds.', 'Chamomile (peak season), mint, lemon balm, early anise hyssop.', 'Fresh chamomile, spearmint iced tea, lemon balm on its own.'],
            ['Midsummer\n(Jul–Aug)', 'Harvest and dry in batches. Second mint cut. Mulch moisture-loving herbs. Water containers daily in heat. Begin drying reserves.', 'Tulsi, bee balm, anise hyssop, lemon verbena, lavender, mints.', 'Summer iced tea blends with hibiscus and lemon verbena. Peak fresh herb season.'],
            ['Early Fall\n(Sep–Oct)', 'Allow chamomile to self-seed. Collect tulsi and anise hyssop seeds. Final lavender cut. Begin moving container lemon verbena indoors.', 'Echinacea (petals and seeds), rosehips (after first frost), final tulsi.', 'Warming tulsi blends. Last fresh chamomile if plants rebloomed.'],
            ['Late Fall / Winter\n(Nov–Jan)', 'Cut mints and lemon balm to ground. Mulch in cold zones. Organize and inventory dried herb stores. Plan next year\'s collection.', 'Nothing fresh; preserve previous harvests.', 'Full dried herb season — chamomile, peppermint, lemon verbena, tulsi, rosehip. All blends from dried stores.'],
          ],
        },
      ],
    },
    {
      id: 'troubleshooting-common-tea-garden-problems',
      title: 'Section 7: Troubleshooting Common Tea Garden Problems',
      blocks: [
        {
          type: 'table',
          headers: ['Problem', 'Likely Cause', 'Solution'],
          rows: [
            ['Mint has escaped the bed and is spreading everywhere', 'Planted without containment; runners escaped pot or barrier', 'Remove runners immediately. Dig out spreading colonies. In future, only grow mint in pots or with solid physical barriers buried to 12" depth.'],
            ['Chamomile not blooming', 'Too much nitrogen / rich soil; or planted too late', 'Move to leaner, less-amended soil. Sow seeds earlier (late March in Zone 7). German chamomile blooms more reliably than Roman.'],
            ['Lavender dying over winter or in summer', 'Poor drainage; clay soil holding moisture', 'Lavender death is almost always root rot from poor drainage. Rebuild bed with 25–30% grit amendment or use raised bed. Ensure no standing water after rain.'],
            ['Lemon verbena not emerging in spring', 'Normal! Lemon verbena is extremely late to wake up', 'Wait until June before assuming it has died. Scratch the bark of a stem — if green underneath, it is alive. Mulch the root zone next fall.'],
            ['Tea tastes bland / flat despite fresh herbs', 'Harvested too late in day; herbs past prime; water too cool', 'Harvest morning herbs. Use proper water temperature — mint needs boiling water; chamomile and lemon balm brew better at 200°F. Use more herb material.'],
            ['Tulsi bolting (going to seed) quickly', 'Heat stress or drought; natural in short-season climates', 'Pinch flower buds every 5–7 days religiously. Keep well-watered. Start indoors earlier to extend the season before fall frost.'],
            ['Dried herbs losing flavor quickly in storage', 'Exposure to light, heat, or air; stored pre-crumbled', 'Store whole leaves in dark, airtight glass jars away from stove heat. Crumble just before use. Replace stores after 18 months.'],
            ['Lemon balm sprawling and flopping', 'Natural growth habit + overcrowding; needs cutting back', 'Cut to 4–6 inches after flowering. This is normal management, not a problem. The regrowth is the most flavorful growth of the season.'],
          ],
        },
        {
          type: 'tip',
          emoji: '🍵',
          text: 'The Philosophy of the Tea Garden: A tea garden is fundamentally different from other productive gardens. A vegetable garden demands attention, struggle, and urgency — harvests must happen at exactly the right moment or the season is lost. A tea garden asks something more patient: observation, daily attention, gentle harvesting throughout a long season. The chamomile you miss today will bloom again. The mint you didn\'t prune this week will still be there next week, slightly coarser but still harvestable. The best reward of a personal tea garden isn\'t any single herb or blend. It is the way the garden changes your relationship to your yard: turning a daily walk through it into a sensory ritual, a morning\'s harvesting into meditation, and the act of sitting with a cup of tea you grew entirely yourself into something quietly extraordinary.',
        },
      ],
    },
  ],
};
