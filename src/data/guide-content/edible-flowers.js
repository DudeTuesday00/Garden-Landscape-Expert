export const edibleFlowersContent = {
  id: 'edible-flowers',
  hero: {
    emoji: '🌸',
    title: 'Edible Flowers',
    subtitle: 'Beautiful Blooms You Can Eat — in Salads, Desserts, and Drinks',
  },
  intro:
    'This guide covers the edible flower garden in full depth: the safety framework every grower must understand, complete profiles of the most useful edible flowers, growing and harvesting techniques, long-term preservation methods, and recipes from crystallized violets to elderflower cordial. The garden is full of things to eat — some of them are flowers.',

  sections: [
    {
      id: 'at-a-glance',
      title: 'Edible Flowers at a Glance',
      blocks: [
        {
          type: 'table',
          headers: ['Flower', 'Flavor Profile', 'Best Uses', 'Season', 'Grow or Forage'],
          rows: [
            ['Nasturtium', 'Peppery, bright, slightly spicy — like a mild radish', 'Salads, garnish, compound butter, pickled as capers', 'Summer – frost', 'Very easy to grow'],
            ['Viola / Pansy', 'Mild, slightly sweet, faintly grassy', 'Salads, crystallized, cake decoration, drinks', 'Spring & fall', 'Very easy to grow'],
            ['Borage', 'Clean, bright cucumber flavor', 'Drinks, salads, frozen in ice cubes, desserts', 'Summer', 'Self-seeds readily'],
            ['Lavender', 'Floral, sweet, slightly herbal, perfumed', 'Baking, honey, drinks, savory meat dishes', 'Early summer', 'Grow; perennial'],
            ['Rose', 'Floral, sweet, faintly fruity — varies by variety', 'Desserts, jam, crystallized, drinks, vinegars', 'Summer', 'Grow; many varieties'],
            ['Calendula', 'Mildly spicy, slightly bitter, saffron-like color', 'Rice, salads, butter, soups, baking', 'Summer – frost', 'Very easy to grow'],
            ['Elderflower', 'Intensely floral, honey-sweet, slightly musty', 'Cordial, fritters, infused cream, drinks', 'Late spring', 'Forage or grow'],
            ['Chive blossom', 'Mild onion, delicate allium flavor', 'Salads, vinegar, compound butter, garnish', 'Late spring', 'Grow; perennial herb'],
            ['Squash blossom', 'Mild, delicate squash flavor, slightly sweet', 'Stuffed & fried, fritters, pizza, pasta', 'Summer', 'Grow with squash'],
            ['Chamomile', 'Apple, honey, slightly bitter finish', 'Tea, baking, infused cream, desserts', 'Summer', 'Very easy to grow'],
            ['Hibiscus', 'Tart, cranberry-like, bold and fruity', 'Tea, drinks, jam, sorbet, syrup', 'Summer', 'Grow; tender perennial'],
            ['Dandelion', 'Slightly bitter, honey-sweet (petals only)', 'Wine, fritters, salads, honey, jam', 'Spring & fall', 'Forage; wild'],
          ],
        },
      ],
    },

    {
      id: 'safety-framework',
      title: 'Section 1: Safety, Identification & the Edible Flower Framework',
      blocks: [
        {
          type: 'p',
          text: 'The single most important thing to understand about edible flowers is that not all flowers are edible — and some are seriously toxic. A beautiful flower is not a safe flower. Before eating any flower from your garden or the wild, you must be completely certain of its identity.',
        },
        { type: 'h3', text: 'The Five Safety Principles' },
        {
          type: 'list',
          items: [
            'Positive identification is mandatory: Never eat a flower you cannot identify with complete certainty. Use multiple identification resources — field guides, university extension publications, and reliable online sources with clear photographs.',
            'Grow your own or buy food-grade: The safest edible flowers are ones you grew yourself from identified seed. Specialty food suppliers and farmers markets that explicitly label flowers as edible are the next safest source.',
            'Organic and spray-free only: Even known edible flowers become hazardous if grown with pesticides, herbicides, or systemic fertilizers. Never eat flowers from florists, garden centers, or roadsides.',
            'Introduce new flowers gradually: Even flowers that are completely safe for most people can cause reactions in sensitive individuals. Introduce each new flower in small amounts.',
            'Know what parts are edible: For most edible flowers, only the petals are used. The stamen, pistil, calyx, and stem are often bitter, less palatable, or occasionally irritating even in otherwise edible species.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'The Golden Rule of Edible Flowers: Before eating any flower, you must be completely certain of its identity. If in doubt, do not eat it. This rule applies equally to flowers from your own garden and from the wild.',
        },
        { type: 'h3', text: 'Flowers That Are NOT Safe to Eat' },
        {
          type: 'p',
          text: 'The following list covers the most common dangerous flowers that are sometimes confused with edible species or that are widely grown in ornamental gardens.',
        },
        {
          type: 'table',
          headers: ['Toxic Flower', 'Botanical Name', 'Danger Level', 'Why It Matters / Confusion Risk'],
          rows: [
            ['Foxglove', 'Digitalis purpurea', 'HIGHLY TOXIC — can be fatal', 'Contains cardiac glycosides. Beautiful tubular flowers sometimes mistaken by beginners for edible bell-shaped flowers.'],
            ['Monkshood / Wolfsbane', 'Aconitum spp.', 'HIGHLY TOXIC — all parts', 'One of the most toxic plants in temperate gardens. Blue-purple flowers attractive but extremely dangerous.'],
            ['Datura / Jimsonweed', 'Datura stramonium', 'HIGHLY TOXIC — hallucinogenic, potentially fatal', 'Large white trumpet flowers. Sometimes confused with edible members of the nightshade family.'],
            ['Lily of the Valley', 'Convallaria majalis', 'HIGHLY TOXIC — cardiac effects', 'Tiny white bell flowers on arching stems. Frequently grown in shaded gardens.'],
            ['Autumn Crocus', 'Colchicum autumnale', 'HIGHLY TOXIC — can be fatal', 'Purple-pink crocus-like flowers in fall. Contains colchicine; sometimes confused with true crocus.'],
            ['Bleeding Heart', 'Lamprocapnos / Dicentra spp.', 'TOXIC — causes nausea, seizures', 'Delicate pink heart-shaped flowers on arching stems. A very common garden ornamental.'],
            ['Sweet Pea (ornamental)', 'Lathyrus odoratus', 'TOXIC — seeds especially harmful', 'Do NOT confuse with edible garden pea (Pisum sativum). Sweet pea flowers are ornamental only.'],
            ['Oleander', 'Nerium oleander', 'EXTREMELY TOXIC — all parts', 'Pink, white, or red flowers on an evergreen shrub. Very common in warm-climate landscaping.'],
            ['Rhododendron / Azalea', 'Rhododendron spp.', 'TOXIC — causes nausea, cardiac effects', 'Very common ornamental shrubs. All parts contain grayanotoxins.'],
            ['Wisteria', 'Wisteria sinensis / floribunda', 'TOXIC — causes GI distress', 'Spectacular purple flowering vine. Seeds and pods are particularly toxic.'],
            ['Hydrangea', 'Hydrangea spp.', 'MILDLY TOXIC — contains cyanogenic glycosides', 'Widely grown ornamental. All parts contain trace amounts of cyanogenic compounds.'],
            ['Lantana', 'Lantana camara', 'TOXIC — especially unripe berries', 'Colorful clustered flowers common in warm climates. Toxic to humans and animals.'],
          ],
        },
        { type: 'h3', text: 'Sourcing Safe Edible Flowers' },
        {
          type: 'list',
          items: [
            'Grow from seed: The gold standard. Purchase seeds from reputable seed companies and grow flowers yourself without pesticides.',
            'Specialty food suppliers: A growing number of specialty food distributors supply edible flowers specifically for culinary use, clearly labeled as food-grade.',
            'Farmers markets: Many small farms now grow edible flowers specifically for food use. Ask vendors directly about spray practices.',
            'Well-labeled grocery and specialty food stores: Some upscale grocery stores and specialty food retailers carry packaged edible flowers.',
            'Never from: Florists, garden centers selling ornamental plants, roadsides, parks, lawns (unknown pesticide history), or any unlabeled source.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌼',
          text: 'Asteraceae Allergy Consideration: The Asteraceae (daisy) family includes some of the most valuable edible flowers — calendula, chamomile, dandelion, sunflower. However, individuals with ragweed allergies or known Asteraceae sensitivities may experience reactions to these flowers. Introduce in small amounts first.',
        },
      ],
    },

    {
      id: 'complete-profiles',
      title: 'Section 2: Complete Edible Flower Profiles',
      blocks: [
        {
          type: 'p',
          text: 'The following profiles cover the most useful, most commonly grown, and most culinarily versatile edible flowers. Organized by flavor character to help you plan pairings and applications.',
        },
        { type: 'h3', text: '🌶️ Peppery, Bright & Spicy Flowers' },
        { type: 'h3', text: 'Nasturtium (Tropaeolum majus)' },
        {
          type: 'p',
          text: 'Nasturtium is the single most culinarily useful edible flower for most gardeners — the one that begins a lifetime of cooking with flowers. Every part of the plant is edible: flowers, leaves, and immature seed pods.',
        },
        {
          type: 'list',
          items: [
            'Flavor: Peppery, bright, slightly spicy, faintly sweet — similar in character to watercress or arugula.',
            'Parts used: Petals (most delicate), whole flowers (most common), young leaves (peppery greens), green seed pods (pickled as nasturtium capers).',
            'Culinary applications: Salads (both flowers and leaves), garnish for soups and charcuterie, folded into compound butters, stuffed with cream cheese, petals scattered over pasta.',
            'Colors: Orange, yellow, red, cream, and bi-color varieties.',
            'Growing: Direct sow after last frost in average to poor soil — rich soil produces more leaves and fewer flowers.',
            'Harvest tip: Pick flowers in the morning after dew dries. Use within 2-3 days; they do not hold long.',
          ],
        },
        { type: 'h3', text: 'Arugula Flowers (Eruca vesicaria ssp. sativa)' },
        {
          type: 'p',
          text: 'When arugula bolts in summer heat, it produces small white flowers with delicate purple veining that carry an intensified version of arugula\'s characteristic flavor.',
        },
        {
          type: 'list',
          items: [
            'Flavor: Intense arugula pepper, nutty, slightly bitter — more concentrated than the leaf.',
            'Culinary applications: Salads, garnish for pasta and pizza, scattered over hummus or labneh. Use sparingly — the flavor is strong.',
            'Harvest tip: Pick flowers just as they open fully. Leave some to set seed for self-seeding next season.',
          ],
        },
        { type: 'h3', text: 'Radish Flowers (Raphanus sativus)' },
        {
          type: 'list',
          items: [
            'Flavor: Mild radish heat, clean, slightly sweet. Much gentler than nasturtium.',
            'Culinary applications: Salads, garnish for cold dishes, open-faced sandwiches, scattered over deviled eggs.',
          ],
        },
        { type: 'h3', text: '🌷 Sweet, Floral & Perfumed Flowers' },
        { type: 'h3', text: 'Rose (Rosa spp.)' },
        {
          type: 'p',
          text: 'Rose petals are among the most versatile and historically significant edible flowers in the world. The key variable is fragrance — only strongly scented varieties deliver meaningful culinary flavor.',
        },
        {
          type: 'list',
          items: [
            'Flavor: Floral, sweet, faintly fruity, varies by variety. Strongly scented varieties have the most culinary value.',
            'Parts used: Petals only. Remove the white base of each petal (the heel), which is slightly bitter.',
            'Culinary applications: Rose water, rose jam, rose petal shortbread, crystallized petals, scattered over rice dishes, infused into cream for panna cotta.',
            'Best varieties for eating: Tuscany Superb (intensely fragrant, deep crimson), Rosa damascena (Damask rose — the standard for rose water), Apothecary\'s Rose (Rosa gallica officinalis).',
            'Growing: Full sun. Rich, well-drained soil with regular deep watering. No systemic pesticides — ever.',
            'Harvest tip: Cut petals from just-opened flowers in the morning. Use the same day or store loosely in a covered container in the refrigerator.',
          ],
        },
        { type: 'h3', text: 'Lavender (Lavandula angustifolia)' },
        {
          type: 'p',
          text: 'Lavender is one of the most powerful flavors in the edible flower repertoire — and that power is the greatest hazard. Used with restraint, lavender adds a magical floral quality to baked goods, drinks, and savory dishes. Used too liberally, it tastes like soap.',
        },
        {
          type: 'list',
          items: [
            'Flavor: Intensely floral, sweet, herbal, slightly camphorous. English lavender (Lavandula angustifolia) is sweetest and most culinary-appropriate.',
            'Parts used: Individual florets plucked from the stem, or dried flower buds.',
            'Culinary applications: Lavender shortbread, lavender-honey ice cream, lavender lemonade, lavender simple syrup, herbes de Provence blends.',
            'Measure carefully: Start with one-quarter of the amount of lavender a recipe calls for and taste before adding more.',
            'Growing: Full sun. Excellent drainage — lavender dies in wet soil. Once established, very drought tolerant.',
          ],
        },
        { type: 'h3', text: 'Violet & Viola (Viola odorata, Viola cornuta, Viola x wittrockiana)' },
        {
          type: 'list',
          items: [
            'Flavor: Sweet violet: floral, lightly perfumed, faintly sweet. Garden viola and pansy: mild, slightly sweet, faintly grassy — less pronounced than sweet violet.',
            'Parts used: Whole flowers. Remove the stem.',
            'Culinary applications: Crystallized violets (the classic confectionery application), scattered in salads, frozen in ice cubes, pressed onto butter.',
            'Growing: Cool-season plants. Plant in fall for spring bloom, or in early spring. Full sun in cool weather; afternoon shade in warm climates.',
            'Harvest tip: Pick fully open flowers. They will close after cutting but can be stored face-up on a damp paper towel in the refrigerator for 3-5 days.',
          ],
        },
        { type: 'h3', text: 'Elderflower (Sambucus nigra)' },
        {
          type: 'p',
          text: 'Elderflower is one of the most aromatic and intensely flavored edible flowers, producing cordials, wine, fritters, and infused creams of extraordinary delicacy from its brief late-spring window.',
        },
        {
          type: 'list',
          items: [
            'Flavor: Intensely floral, honey-sweet, slightly musty and grape-like. Unmistakable.',
            'Parts used: Individual florets and small clusters from the compound flower head. Remove as much of the bitter green stem material as possible.',
            'Culinary applications: Elderflower cordial, elderflower fritters (dipped in batter and fried), elderflower-infused cream for desserts, elderflower wine.',
            'Safety note: Use only flowers of Sambucus nigra (common elder) or Sambucus canadensis (American elder). Other elderberry species or unripe berries can cause nausea.',
            'Growing: Large shrubs or small trees, 10-20 feet tall at maturity. Full sun to part shade. Moist, well-drained soil.',
          ],
        },
        { type: 'h3', text: 'Jasmine (Jasminum sambac — Arabian Jasmine only)' },
        {
          type: 'list',
          items: [
            'Flavor: Intensely floral, sweet, almost overwhelming in large quantities. Use sparingly as flavoring rather than as a garnish eaten in volume.',
            'Culinary applications: Jasmine tea (place fresh flowers with dry tea leaves overnight to absorb the fragrance), jasmine rice (cook rice with a few flowers), jasmine simple syrup, jasmine-infused cream or milk for desserts, jasmine sugar.',
            'Growing: Tender tropical or subtropical plant. Grow outdoors in Zone 9+; in pots that overwinter indoors in Zone 8 and colder. Full sun. Blooms best in heat.',
          ],
        },
        { type: 'h3', text: '🌿 Mild, Delicate & Vegetable-Forward Flowers' },
        { type: 'h3', text: 'Borage (Borago officinalis)' },
        {
          type: 'p',
          text: 'Borage produces small, intensely vivid blue star-shaped flowers that are among the most beautiful in the edible garden. The flavor is a clean, bright cucumber that makes borage flowers uniquely refreshing.',
        },
        {
          type: 'list',
          items: [
            'Flavor: Clean, fresh cucumber — mild, cooling, with almost no bitterness.',
            'Parts used: Individual florets only. Pinch the floret away from the calyx (hairy green base). The hairs of the calyx are not pleasant to eat.',
            'Culinary applications: Floating in gin and tonics, Pimm\'s Cup, and other summer drinks; frozen in ice cubes; scattered over cold cucumber soup; in salads.',
            'Growing: Direct sow after last frost. Full sun. Any well-drained soil. Self-seeds so aggressively it essentially becomes a perennial.',
            'Color note: Borage flowers turn from pink to blue as they mature — use blue flowers for the most dramatic visual impact.',
          ],
        },
        { type: 'h3', text: 'Squash Blossom (Cucurbita spp.)' },
        {
          type: 'list',
          items: [
            'Flavor: Mild, delicate, faintly sweet squash flavor. Slightly floral, very gentle.',
            'Parts used: The entire flower, minus the stamen (male) or pistil (female) in the center.',
            'Culinary applications: Stuffed with ricotta, goat cheese, or seasoned cream cheese and fried in tempura batter (the Italian classic); added to pizza, frittata, or pasta.',
            'Harvest timing: Pick male blossoms in the early morning when fully open. They close by midday and become unusable.',
            'Growing: Every squash plant produces abundant male flowers — any summer squash (zucchini, yellow squash, pattypan) gives you blossoms throughout summer.',
          ],
        },
        { type: 'h3', text: 'Chive Blossom (Allium schoenoprasum)' },
        {
          type: 'list',
          items: [
            'Flavor: Mild onion, delicate allium, faintly sweet and grassy. The individual florets are more delicate than the whole head.',
            'Parts used: Individual florets separated from the round flower head, or the whole head torn apart over a dish.',
            'Culinary applications: Chive blossom vinegar (pack blossoms into white wine vinegar — turns a brilliant pink after 2 weeks), compound butter, scattered over potato salad or egg dishes.',
            'Growing: Perennial herb in Zone 3-9. Full sun to light shade. Divide clumps every 2-3 years.',
          ],
        },
        { type: 'h3', text: '🌺 Tart, Bold & Distinctive Flowers' },
        { type: 'h3', text: 'Hibiscus (Hibiscus sabdariffa and H. rosa-sinensis)' },
        {
          type: 'list',
          items: [
            'Flavor: Tart, cranberry-like, fruity and slightly floral. Strongly acidic. Hibiscus sabdariffa (roselle) is the culinary standard.',
            'Parts used: Calyces (the fleshy red cup that holds the seedpod) of H. sabdariffa; petals of both species.',
            'Culinary applications: Hibiscus tea (agua de jamaica), hibiscus syrup, hibiscus jam, hibiscus sorbet, dried calyces for baking.',
            'Growing: H. sabdariffa is a tropical annual; plant after last frost in full sun. Harvest calyces in late summer as they swell.',
          ],
        },
        { type: 'h3', text: 'Calendula (Calendula officinalis)' },
        {
          type: 'list',
          items: [
            'Flavor: Mildly spicy, slightly bitter, vaguely saffron-like. Earthy and herbal rather than sweet or floral.',
            'Parts used: Petals only. Pull petals away from the central disk (which is more bitter) and use them alone.',
            'Culinary applications: Scattered over rice or risotto for color (a saffron extender in traditional European cooking), in salads, stirred into compound butter, added to soups.',
            'Growing: Direct sow in early spring (tolerates light frost). Full sun. Average soil. Deadhead regularly for continuous bloom through frost.',
          ],
        },
        { type: 'h3', text: 'Chamomile (Matricaria chamomilla / Anthemis nobilis)' },
        {
          type: 'list',
          items: [
            'Flavor: Apple-like, honey-sweet, slightly bitter finish, distinctly herbal. German chamomile (Matricaria chamomilla) is sweeter; Roman chamomile (Anthemis nobilis) is slightly more bitter.',
            'Parts used: Whole flower heads for tea; petals and whole small flowers for culinary use.',
            'Culinary applications: Chamomile tea and infusions, chamomile-infused cream for panna cotta and crème brûlée, chamomile shortbread, scattered over fruit desserts.',
          ],
        },
        { type: 'h3', text: '🌸 Quick Reference: Additional Edible Flowers' },
        {
          type: 'list',
          items: [
            '🟡 Sunflower — Petals: mild, nutty, slightly bitter. Seeds: nutty, rich. Petals scattered over salads; seeds for everything.',
            '🌷 Tulip — Mild, slightly sweet, faintly floral. Use as edible cups for fillings, or petals in salads. Remove pistils and stamens.',
            '🌼 Daylily (Hemerocallis) — Sweet, mild, slightly vegetable. Petals only — all other Hemerocallis species may cause reactions.',
            '🟣 Lilac — Floral, slightly lemony, bitter if overused. Scatter individual florets sparingly over desserts and drinks.',
            '🌸 Cherry Blossom — Mild, slightly bitter, faintly almond-like. Salt-pickled in Japanese tradition (sakura); used to flavor drinks and confections.',
            '🟢 Pea Flower (Pisum sativum) — Sweet pea flavor, mild, very pleasant. Use only edible garden pea flowers; ornamental sweet pea flowers are toxic.',
            '🟡 Marigold (Tagetes tenuifolia / Signet Marigold) — Citrusy, slightly spicy. Use signet marigolds (lemon gem, tangerine gem) not African or French marigolds.',
            '🟣 Anise Hyssop — Licorice-anise, faintly sweet, herb-forward. Excellent with fruit desserts, cold drinks, and honey.',
          ],
        },
      ],
    },

    {
      id: 'growing-edible-flowers',
      title: 'Section 3: Growing Edible Flowers',
      blocks: [
        {
          type: 'p',
          text: 'The best edible flower garden is one designed around two goals simultaneously: beauty in the garden and usefulness in the kitchen. Most edible flowers are simultaneously excellent ornamental plants and effective companion plants.',
        },
        { type: 'h3', text: 'Designing the Edible Flower Garden' },
        {
          type: 'list',
          items: [
            'Integrate with the vegetable garden: Most edible flowers are simultaneously excellent companion plants. Nasturtiums repel aphids; calendula attracts beneficial insects; borage deters tomato hornworm.',
            'Create a dedicated cutting bed: A small dedicated edible flower bed (even 4x8 feet) planted densely allows regular harvest without stripping ornamental plantings.',
            'Use containers strategically: Lavender, chive, basil, and violas all grow well in containers. A collection of pots near the kitchen door makes grabbing a handful of flowers as easy as picking herbs.',
            'Plan for seasonal succession: No single edible flower blooms from spring through fall. Design for succession: violas in spring, then borage and nasturtium for summer, calendula through first frost.',
            'Site requirements: Most edible flowers require at least 6 hours of full sun. Violas and some herbs tolerate partial shade.',
          ],
        },
        { type: 'h3', text: 'Seed Starting and Planting Guide' },
        {
          type: 'table',
          headers: ['Flower', 'Start Method', 'Start Time (Zone 7)', 'Spacing', 'Days to First Bloom', 'Notes'],
          rows: [
            ['Nasturtium', 'Direct sow outdoors', 'After last frost (mid-April)', '12-18"', '45-55 days', 'Dislikes transplanting. Direct sow only. Do not start indoors. Plant in poor, un-amended soil for maximum flowers.'],
            ['Viola / Pansy', 'Start indoors, or buy transplants', '10-12 weeks before last frost (Jan-Feb)', '6-8"', '60-80 days', 'Cool-season. Transplant to garden 4-6 weeks before last frost. Replace in fall for second season.'],
            ['Borage', 'Direct sow outdoors', 'After last frost or in fall', '12-18"', '50-60 days', 'Self-seeds prolifically. One planting establishes a permanent self-renewing patch.'],
            ['Lavender', 'Start indoors or buy transplants', 'Slow from seed — buy starts', '18-36"', 'Blooms year 2+ from seed', 'Perennial. Buy established plants for first bloom. Plant in early spring.'],
            ['Rose', 'Buy bare root or container plant', 'Plant bare root in early spring', '36-48" between plants', 'Year 1 (limited); Year 2+ (full)', 'Perennial shrub. Site permanently. No systemic pesticides.'],
            ['Calendula', 'Direct sow or start indoors', '4-6 weeks before last frost', '9-12"', '45-60 days', 'Cool-season annual. Tolerates light frost. Sow successionally every 3-4 weeks.'],
            ['Chamomile', 'Direct sow (do not cover seeds)', 'After last frost; or in fall', '6-9"', '45-60 days', 'Scatter seeds on soil surface and press gently — seeds need light to germinate.'],
            ['Chive blossom', 'Direct sow or buy transplants', 'Early spring (frost-tolerant)', '6-9" (clumps)', 'Blooms year 2 from seed', 'Perennial. Buy established transplants for first-year bloom. Divides and spreads.'],
            ['Hibiscus (roselle)', 'Start indoors 6-8 weeks before last frost', 'March-April indoors', '24-36"', '80-90 days to calyx harvest', 'Heat-loving tropical annual. Needs a long, hot season. Start early indoors.'],
            ['Elderflower', 'Buy bare root or established shrub', 'Plant spring or fall', '8-12 ft apart', 'Blooms year 3-4 from planting', 'Large shrub. Site in a permanent location. Choose a named fruiting variety for best flowers.'],
            ['Squash blossom', 'Direct sow with squash crop', 'After last frost', 'Per squash variety', '45-55 days from sowing', 'Grow any squash for blossoms. Male flowers appear first and are most abundant.'],
          ],
        },
        { type: 'h3', text: 'Soil Preparation and Fertility' },
        {
          type: 'list',
          items: [
            'Most edible flowers prefer moderate fertility: Unlike vegetables, most edible flowers do not need heavily amended soil. Rich soil often produces lush foliage at the expense of flowers.',
            'Drainage is critical: Very few edible flowers tolerate waterlogged soil. Lavender, in particular, will die in wet conditions. Raised beds or well-amended in-ground beds with organic matter improve drainage.',
            'pH for most edible flowers: 6.0-7.0. Lavender prefers slightly alkaline soil (6.5-7.5).',
            'Nasturtium exception: Nasturtium specifically performs better in poor, un-amended soil. Rich soil produces more leaves and fewer flowers.',
            'No systemic pesticides, ever: If you are growing flowers for eating, you must manage pests without systemic insecticides. Once a systemic insecticide is applied, that plant should not be eaten for the remainder of the season.',
          ],
        },
        { type: 'h3', text: 'Organic Pest and Disease Management' },
        {
          type: 'table',
          headers: ['Problem', 'Flowers Affected', 'Organic Solution', 'Prevention'],
          rows: [
            ['Aphids', 'Roses, nasturtium, calendula, violas', 'Strong water jet dislodges most colonies. Insecticidal soap spray. Introduce ladybugs and lacewings.', 'Plant borage and calendula nearby as aphid-deterrents and beneficial insect attractors.'],
            ['Powdery mildew', 'Roses, squash blossoms, zucchini', 'Baking soda spray (1 tsp per quart water). Potassium bicarbonate spray.', 'Plant in full sun with good spacing. Avoid overhead watering. Choose resistant rose varieties.'],
            ['Japanese beetle', 'Roses, chamomile, borage', 'Hand-pick into soapy water early morning. Neem oil spray. Row cover during peak season.', 'Avoid synthetic attractants. Milky spore disease for long-term grub control.'],
            ['Slugs', 'Violas, basil, chamomile', 'Iron phosphate bait (Sluggo — safe for food gardens). Diatomaceous earth around crowns.', 'Remove debris where slugs shelter. Water in morning so soil surface dries by evening.'],
            ['Botrytis (gray mold)', 'Roses, violas, lavender', 'Improve air circulation. Remove infected tissue immediately.', 'Plant with appropriate spacing. Grow in full sun. Keep irrigation at root level.'],
            ['Thrips', 'Roses, lavender, calendula', 'Insecticidal soap. Reflective mulch deters adult thrips. Spinosad spray.', 'Inspect plants regularly. Thrips damage is more aesthetic than functional for edible flowers.'],
          ],
        },
      ],
    },

    {
      id: 'harvesting-preserving',
      title: 'Section 4: Harvesting, Handling & Preserving Edible Flowers',
      blocks: [
        {
          type: 'p',
          text: 'How you harvest, handle, and store edible flowers determines whether they arrive at the table beautiful and flavorful or wilted and bruised. Edible flowers are far more perishable than vegetables and require more care at every stage.',
        },
        { type: 'h3', text: 'Harvesting Principles' },
        {
          type: 'list',
          items: [
            'Harvest in the morning: Pick edible flowers after the dew has dried but before the heat of the day. Morning flowers have the highest fragrance compound concentration and will hold longest after cutting.',
            'Pick at the right stage: Harvest flowers at peak bloom — fully open but not beginning to fade or drop petals.',
            'Use scissors, not fingers: Clean scissors cause less stem damage than pinching. For small florets (borage, chive), pinch individual florets with clean fingertips.',
            'Handle minimally: Flower petals bruise easily. Pick into a shallow basket or tray, not a deep bag where flowers pile up and crush each other.',
            'Inspect for insects: Small insects take shelter in edible flowers, particularly squash blossoms, roses, and chamomile. Gently shake each flower over a light-colored surface before use.',
            'Harvest regularly: Most edible flowers bloom more prolifically when harvested regularly. Allowing flowers to go to seed signals the plant to slow flower production.',
          ],
        },
        { type: 'h3', text: 'Short-Term Storage — Using Flowers Fresh' },
        {
          type: 'table',
          headers: ['Flower', 'Shelf Life Cut', 'Best Storage Method', 'Notes'],
          rows: [
            ['Nasturtium', '1-2 days', 'Dry paper towel in open container in refrigerator', 'Very perishable. Use day of harvest when possible.'],
            ['Viola / Pansy', '3-5 days', 'Face-up in single layer on barely-damp paper towel in covered container in refrigerator', 'Best-keeping edible flower. Revives if gently misted.'],
            ['Borage', '1-2 days', 'Submerge florets in cold water in a small jar in refrigerator', 'Individual florets hold better than whole stems.'],
            ['Rose petals', '2-3 days', 'Dry container in refrigerator, loosely covered', 'Pick petals from flower before storage. Keep away from ethylene-producing fruit.'],
            ['Lavender', '3-5 days fresh; indefinitely dried', 'Upright in a small jar of water at room temperature, or refrigerator', 'Dries beautifully. Dried lavender is culinarily superior to fresh for most baking.'],
            ['Squash blossom', 'Same day only', 'Wrap in damp paper towel; use within hours', 'The most perishable edible flower. Harvest just before use whenever possible.'],
            ['Chamomile', '2-3 days fresh; excellent dried', 'Dry on screen in warm room for 1-2 weeks; store dried in sealed jar', 'Drying concentrates flavor. Dried chamomile superior to fresh for most uses.'],
            ['Elderflower', 'Use same day fresh', 'Use immediately after harvest', 'Fragrance dissipates quickly once cut. Pick and infuse into cordial or fritters immediately.'],
            ['Calendula petals', '1-2 days fresh; excellent dried', 'Dry petals on a screen in warm room out of direct sun for 1-2 weeks', 'Dried petals retain color and flavor well.'],
            ['Hibiscus calyces', 'Indefinitely dried', 'Dry calyces at 100°F in oven for 2-3 hours; store in sealed jar', 'Fresh calyces perishable; dried calyces are the standard culinary form.'],
          ],
        },
        { type: 'h3', text: 'Crystallized / Candied Flowers' },
        {
          type: 'p',
          text: 'Crystallized flowers are one of the most beautiful and ancient preserved flower preparations — flowers coated in egg white and superfine sugar, then dried until crisp. They keep for months and are stunning on cakes, pastries, and confections.',
        },
        {
          type: 'list',
          items: [
            'Select perfect flowers: Use only fully open, undamaged flowers at peak bloom. Violas, rose petals, pansies, lavender sprigs, and small borage florets work best.',
            'Beat egg white: Lightly beat one egg white with a few drops of water until frothy but not stiff. Alternatively, use pasteurized egg white or a mixture of 1 tsp meringue powder in 2 tbsp water for food safety.',
            'Coat the flower: Using a fine pastry brush, paint a thin, even layer of egg white over every surface of the flower — front, back, and inside petals.',
            'Sugar generously: Holding the coated flower over parchment, sprinkle superfine (caster) sugar over all surfaces. Gently shake off excess.',
            'Dry completely: Place sugared flowers on a parchment-lined tray in a warm, dry location (a barely-warm oven works well) for 12-24 hours until completely crisp.',
            'Store: Layer between sheets of parchment paper in a sealed container at room temperature. Crystallized flowers keep for 2-3 months.',
          ],
        },
        { type: 'h3', text: 'Flower-Infused Oils' },
        {
          type: 'list',
          items: [
            'Best flowers for oil: Lavender, rose petals, calendula, chamomile, herb flowers (thyme, rosemary, tarragon).',
            'Method: Pack flowers loosely into a clean glass jar. Cover with a neutral oil (good quality extra-virgin olive oil or neutral vegetable oil). Seal and place in a warm sunny window for 2 weeks, shaking daily. Strain through cheesecloth and store in a dark, cool location.',
            'Safety: Flower oils made this way are shelf-stable because they contain no water. Use dry flowers and dry jars.',
          ],
        },
        { type: 'h3', text: 'Flower Syrups and Cordials' },
        {
          type: 'list',
          items: [
            'Basic flower simple syrup: Combine 1 cup sugar and 1 cup water in a saucepan. Bring to a simmer, stirring until sugar dissolves. Remove from heat. Add 1/2 cup packed flower petals (rose, lavender, violet, elderflower). Cover and steep 30 minutes. Strain; discard petals. Refrigerate up to 3 weeks.',
            'Elderflower cordial: Use 20-25 elderflower heads, 4 cups sugar, 4 cups water, 2 lemons (zest and juice), 1.5 oz citric acid. Combine sugar and water into syrup; cool to lukewarm. Add flowers, lemon, and citric acid. Cover; steep 24 hours. Strain. Bottle; refrigerate up to 4-6 weeks.',
            'Hibiscus syrup: Simmer 1 cup dried hibiscus calyces in 2 cups water for 10 minutes. Add 1 cup sugar; stir until dissolved. Strain; refrigerate up to 3 weeks.',
          ],
        },
        { type: 'h3', text: 'Flower Vinegars' },
        {
          type: 'list',
          items: [
            'Method: Pack a clean glass jar with fresh edible flowers. Cover completely with good quality white wine vinegar or champagne vinegar. Seal; steep in a cool, dark location for 2-4 weeks. Strain; bottle in decorative glass.',
            'Best flowers for vinegar: Chive blossoms (pink, onion-forward), rose petals (floral, slightly fruity), lavender (intensely aromatic), tarragon flowers (anise-forward).',
          ],
        },
        { type: 'h3', text: 'Flower Butters' },
        {
          type: 'list',
          items: [
            'Sweet flower butter: 8 oz softened unsalted butter + 2 tbsp finely minced rose petals or lavender + 1 tbsp honey. Beat until combined. Roll in plastic wrap; refrigerate or freeze.',
            'Savory flower butter: 8 oz softened unsalted butter + 3 tbsp minced chive blossoms + 1 tbsp nasturtium petals + salt to taste. Excellent on grilled fish, steaks, or bread.',
            'Storage: Refrigerate for up to 2 weeks; freeze for up to 3 months.',
          ],
        },
      ],
    },

    {
      id: 'culinary-techniques',
      title: 'Section 5: Culinary Techniques & Recipes',
      blocks: [
        {
          type: 'p',
          text: 'The following recipes represent the best and most versatile applications of edible flowers — from simple fresh preparations to preserved confections.',
        },
        { type: 'h3', text: '🥗 The Edible Flower Salad' },
        {
          type: 'list',
          items: [
            'Build from complementary flavors: Pair peppery nasturtium flowers and leaves with mild butter lettuce; combine sweet violas with frisée; balance hibiscus tartness with mild spinach.',
            'The standard formula: 4 cups mild greens (butter lettuce, spinach, mesclun) + 1 cup assorted edible flower petals + optional: sliced cucumber, toasted nuts, crumbled cheese.',
            'Dressing guidance: Use a very light, simple vinaigrette — edible flowers are delicate. Good quality olive oil, white wine vinegar, a touch of honey, salt. Dress at the last moment before serving.',
          ],
        },
        { type: 'h3', text: 'Nasturtium Capers' },
        {
          type: 'p',
          text: 'Green nasturtium seed pods pickled in spiced vinegar become a near-perfect caper substitute: peppery, tangy, complex. One of the most underrated preparations in the edible flower garden.',
        },
        {
          type: 'list',
          items: [
            'Collect: Gather green (unripe) nasturtium seed pods. They should still be bright green and tender, not yellowed or hard.',
            'Brine overnight: Cover pods with a light brine (2 tsp salt per cup of water) and let soak overnight.',
            'Prepare pickling liquid: Combine 1 cup white wine vinegar, 1/2 cup water, 1 tsp sugar, 5 black peppercorns, 1 bay leaf. Bring to a boil.',
            'Pack and cover: Pack drained pods into sterilized jars. Pour hot pickling liquid over pods, ensuring complete coverage.',
            'Rest before using: Refrigerate for at least 2 weeks before tasting. Flavor develops and mellows significantly. Use exactly as you would capers.',
          ],
        },
        { type: 'h3', text: 'Stuffed Squash Blossoms (Fiori di Zucca)' },
        {
          type: 'p',
          text: 'The Italian classic: squash blossoms stuffed with seasoned ricotta and fried in a light batter.',
        },
        {
          type: 'list',
          items: [
            'Prepare blossoms: Gently open 12 large squash blossoms. Remove the central stamen or pistil with a small spoon or fingers.',
            'Make filling: Mix 1 cup whole-milk ricotta with 2 oz finely grated Parmesan, 1 tbsp fresh thyme leaves, salt, pepper, and a pinch of lemon zest.',
            'Fill blossoms: Use a small spoon or piping bag to fill each blossom about 2/3 full. Twist the petal tips gently to seal.',
            'Make batter: Whisk together 1 cup cold sparkling water, 3/4 cup all-purpose flour, pinch of salt until just combined (lumpy is fine).',
            'Fry: Heat 2 inches of neutral oil to 375°F. Dip stuffed blossoms in batter, let excess drip off. Fry 2-3 at a time for 2-3 minutes until golden. Drain on paper towels. Serve immediately with lemon wedges.',
          ],
        },
        { type: 'h3', text: '🍰 Lavender Honey Shortbread' },
        {
          type: 'list',
          items: [
            'Make lavender sugar: Process 1 tsp dried culinary lavender buds with 1/2 cup superfine sugar in a food processor until lavender is fine. Sift to remove any coarse pieces.',
            'Make the dough: Beat 8 oz (2 sticks) room-temperature unsalted butter with 1/2 cup lavender sugar until light. Add 1.5 cups all-purpose flour and 1/4 cup rice flour (for crispness); mix until dough just comes together.',
            'Shape and bake: Press dough into parchment-lined 8x8 inch pan. Score into rectangles. Bake at 325°F for 25-30 minutes until pale golden at the edges.',
            'Finish: Drizzle cooled shortbread lightly with good quality honey (lavender honey if available).',
          ],
        },
        { type: 'h3', text: 'Rose Petal Jam' },
        {
          type: 'list',
          items: [
            'Select petals: Use petals from the most fragrant roses available — at least 2 cups of packed petals. Remove the bitter white heel from each petal.',
            'Macerate: Toss petals with 1 cup sugar and the juice of 1 lemon. Let sit for 2-4 hours at room temperature. Petals will soften and release their liquid.',
            'Cook: Transfer macerated petals and syrup to a heavy saucepan. Add another 1/2 cup sugar and 1/4 cup water. Bring to a boil, then reduce to a simmer. Cook 20-25 minutes until jam is thick and petals are translucent.',
            'Finish: Remove from heat. Stir in 1 tsp rose water for additional floral intensity if desired.',
            'Jar: Pour into sterilized jars. Refrigerate for up to 3 months, or process in a water bath for shelf-stable storage.',
          ],
        },
        { type: 'h3', text: '🍹 Elderflower Cordial' },
        {
          type: 'list',
          items: [
            'Gather flowers: Collect 20-25 elderflower heads at peak bloom on a dry morning, when pollen is fresh and fragrant. Use immediately — the aroma fades within hours.',
            'Prepare the syrup base: Dissolve 4 cups sugar in 4 cups water over medium heat. Cool to lukewarm.',
            'Infuse: Place elderflower heads in a large non-reactive bowl. Add 2 lemons (zest and sliced rounds), 1.5 oz citric acid. Pour cooled syrup over all. Cover with a cloth; steep 24-48 hours.',
            'Strain: Pour through a fine-mesh strainer lined with cheesecloth. Squeeze gently to extract all liquid.',
            'Bottle and store: Pour into sterilized bottles. Refrigerate for up to 4-6 weeks. Freeze for up to 1 year. Dilute 1:5 to 1:8 with still or sparkling water to serve.',
          ],
        },
        { type: 'h3', text: 'Borage Ice Cubes' },
        {
          type: 'list',
          items: [
            'Pick florets: Harvest individual borage florets at peak blue color in the morning.',
            'Fill ice cube trays: Place one or two borage florets face-down in each compartment. Fill 1/4 full with water; freeze until solid.',
            'Top up: Fill the rest of each compartment with water and freeze until fully solid. The two-step freezing keeps the flower centered and visible.',
            'Use: Add to gin and tonics, sparkling water, lemonade, or any clear cold drink. As the ice melts, the flower is revealed.',
          ],
        },
        { type: 'h3', text: 'Hibiscus Agua Fresca (Agua de Jamaica)' },
        {
          type: 'p',
          text: 'The Mexican agua de jamaica is one of the most beautiful and refreshing cold drinks made from an edible flower, and one of the simplest: dried hibiscus calyces simmered with sugar, cooled, diluted with water, and served over ice. The color is an extraordinary vivid crimson.',
        },
        {
          type: 'list',
          items: [
            'Simmer: Bring 4 cups water to a boil. Add 1 cup dried hibiscus calyces and 1/2 cup sugar (adjust to taste). Simmer 10 minutes.',
            'Cool and dilute: Remove from heat; steep a further 30 minutes. Strain; discard calyces. Add juice of 1–2 limes. Dilute with 4–6 cups cold water to desired strength.',
            'Serve: Pour over ice. Garnish with a lime slice. Serves 6.',
            'Variation — hibiscus iced tea: Steep dried hibiscus calyces with black tea leaves for a tart, tannic, brilliantly colored iced tea.',
          ],
        },
        { type: 'h3', text: 'Lavender Lemonade' },
        {
          type: 'p',
          text: 'Lavender and lemon are one of the great flavor marriages — the perfumed sweetness of lavender against the clean bright acidity of lemon. Lavender lemonade has become widely known for good reason: it is exceptionally good.',
        },
        {
          type: 'list',
          items: [
            'Make lavender syrup: Combine 1 cup sugar, 1 cup water, and 2 tbsp fresh culinary lavender (or 1 tbsp dried) in a saucepan. Bring to a simmer, stirring until sugar dissolves. Remove from heat. Steep 30–45 minutes. Strain.',
            'Make lemonade: Juice 6–8 large lemons to yield 1 cup fresh lemon juice. Combine with lavender syrup and 4 cups cold water in a large pitcher. Stir well.',
            'Taste and adjust: Add more lemon for tartness, more syrup for sweetness, more water for dilution.',
            'Serve: Pour over ice. Garnish with a sprig of fresh lavender and a lemon slice. The color is a beautiful pale lavender-gold.',
          ],
        },
        { type: 'h3', text: '🍰 Crystallized Violet Cake' },
        {
          type: 'p',
          text: 'A simple white butter cake decorated with crystallized violet flowers is one of the most striking and genuinely impressive desserts an edible flower garden can produce. The crystallized violets do all the visual work; the cake itself needs only to be well-made.',
        },
        {
          type: 'list',
          items: [
            'The cake: Use any well-tested white or vanilla butter cake recipe. Bake in two 8-inch layers. Cool completely before decorating.',
            'The frosting: Italian meringue buttercream tinted the palest lavender-purple works beautifully with violets. Alternatively, barely-sweetened whipped cream or mascarpone lets the violets be the only color.',
            'The decoration: Arrange crystallized violets (prepared using the method in Section 4) across the top and sides of the frosted cake. They adhere to buttercream without any additional adhesive.',
            'Finishing touch: Add a few fresh (uncrystallized) violas for color contrast and to signal that the decoration is edible.',
          ],
        },
      ],
    },

    {
      id: 'seasonal-calendar',
      title: 'Section 6: The Edible Flower Garden — A Month-by-Month Reference',
      blocks: [
        {
          type: 'table',
          headers: ['Month (Zone 7)', 'In Bloom & Edible', 'Kitchen Uses This Month', 'Garden Tasks'],
          rows: [
            ['February – March', 'Viola / pansy (if planted in fall); chive starts emerging', 'Scatter violas in winter salads; press onto softened butter', 'Start violas and pansies indoors if not already in ground. Order seeds for the season.'],
            ['April', 'Violas, pansies, chive blossoms, dandelion, early borage', 'Chive blossom vinegar; dandelion fritters; viola crystallizing; borage ice cubes', 'Direct sow nasturtium, borage, calendula, chamomile. Harden off viola transplants.'],
            ['May', 'Chive blossoms peak, viola, lilac, elderflower (late May), borage, arugula flowers', 'Elderflower cordial (brief window); chive blossom compound butter; lilac sugar', 'Elderflower harvest — pick, make cordial immediately. Plant out basil, hibiscus after frost.'],
            ['June', 'Roses peak, lavender, borage, nasturtium starts, calendula, chamomile, squash blossoms start', 'Rose petal jam; lavender shortbread; lavender lemonade; chamomile cream infusions', 'Harvest rose petals in morning. Begin deadheading calendula and chamomile for continuous bloom.'],
            ['July', 'Nasturtium peak, borage, calendula, rose (rebloom), squash blossoms, hibiscus starts', 'Stuffed squash blossoms; nasturtium salads; hibiscus agua fresca; lavender-infused honey', 'Begin collecting nasturtium seed pods for capers. Succession sow borage and calendula.'],
            ['August', 'Nasturtium, squash blossoms, hibiscus peak, calendula, borage, anise hyssop', 'Nasturtium caper pickling; hibiscus syrup; flower vinegars; crystallized flowers for holiday baking', 'Harvest hibiscus calyces as they swell. Dry calendula petals in bulk for year-round use.'],
            ['September – October', 'Calendula (heavy fall bloom), nasturtium through first frost, viola (fall planting)', 'Last nasturtium harvest; crystallize remaining flowers before frost; calendula petal drying', 'Plant fall violas for late harvest. Collect seeds from chamomile, borage, calendula.'],
            ['November – January', 'Nothing fresh unless viola survived mild spell; dried flowers from harvest', 'Use dried lavender, calendula, hibiscus, chamomile all winter in baking, teas, and infusions', 'Review the season. Order seeds. Plan next year\'s edible flower garden.'],
          ],
        },
        {
          type: 'tip',
          emoji: '🌸',
          text: 'Growing and eating edible flowers changes how you see the garden. Once you understand that flowers are not just for looking at but for tasting, preserving, and sharing at the table, the entire growing season becomes richer. Grow them. Harvest them. Taste them.',
        },
      ],
    },

    {
      id: 'the-edible-flower-garden-as-a-way-of-seeing',
      title: 'The Edible Flower Garden as a Way of Seeing',
      blocks: [
        {
          type: 'p',
          text: 'Growing and eating edible flowers changes how you see the garden. Once you know that the violet is edible, the nasturtium is peppery and delicious, the borage flower tastes of cucumber, and the rose petal can be made into jam, the garden stops being a collection of beautiful objects and becomes a larder of extraordinary things.',
        },
        {
          type: 'p',
          text: 'This is a genuinely old way of seeing the world — the way every gardener saw their garden before the modern separation between ornamental and edible, between the flower bed and the kitchen garden, became the norm. To grow edible flowers is to collapse that separation: to have a garden that is beautiful to look at, alive with insects and birds, and also full of things to cook and drink and eat with joy.',
        },
        {
          type: 'p',
          text: 'Start with one plant. Nasturtium from seed, or a potted chive on the windowsill. Taste it. Notice how different a flower eaten fresh from the plant is from anything that comes from a market. Then plant more.',
        },
        {
          type: 'tip',
          emoji: '🌸',
          text: 'The garden is full of things to eat. Some of them are flowers. Grow them. Harvest them. Taste them.',
        },
      ],
    },
  ],
};
