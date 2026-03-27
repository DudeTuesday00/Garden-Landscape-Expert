export const hummingbirdGardenContent = {
  id: 'hummingbird-garden',
  hero: {
    emoji: '🐦',
    title: 'Hummingbird Garden',
    subtitle: 'Plants, Feeders, and Design for Year-Round Hummingbird Habitat',
  },
  intro: 'Hummingbirds are among the most captivating visitors a garden can attract — impossibly fast, iridescent, and fiercely territorial. Creating a garden that supports them goes far beyond hanging a red feeder. The most effective hummingbird habitats layer native tubular flowers through the full growing season, offer clean reliable nectar sources, and provide the structural diversity these birds need for perching, nesting, and hunting insects. This guide covers the plants, feeders, design principles, and regional strategies that turn any yard into a hummingbird destination.',

  sections: [
    {
      id: 'meet-the-hummingbirds',
      title: 'Section 1: Meet the Hummingbirds',
      blocks: [
        {
          type: 'p',
          text: 'More than 15 hummingbird species visit the contiguous United States, though most gardeners will encounter only one or two species depending on their region. Understanding which species use your area — and when — is the first step to designing a garden that works for them.',
        },
        {
          type: 'table',
          headers: ['Species', 'Range', 'Presence', 'ID Notes', 'Garden Notes'],
          rows: [
            ['Ruby-throated Hummingbird', 'Eastern US / Midwest', 'Migratory (Apr–Oct)', 'Male has iridescent red throat; female plain white throat', 'Only breeding species east of the Mississippi; returns reliably to the same garden each year'],
            ['Rufous Hummingbird', 'Western US / migrates through all regions', 'Migratory (Feb–Oct, route-dependent)', 'Male fiery orange-red; most aggressive of common species', 'Visits western gardens in summer; appears in eastern states during fall migration more than once thought'],
            ["Anna's Hummingbird", 'Pacific Coast (CA, OR, WA)', 'Year-round resident', 'Male rose-red crown and throat; stocky build', 'Year-round feeder and garden presence; often nests in winter; needs winter-blooming plants'],
            ["Costa's Hummingbird", 'Desert Southwest (CA, AZ, NV)', 'Year-round / seasonal', 'Male purple crown and extended gorget; small size', 'Adapted to Mojave and Sonoran Desert; prefers desert natives like penstemon and chuparosa'],
            ['Black-chinned Hummingbird', 'Western US (widespread)', 'Migratory (Apr–Sep)', 'Male black chin with violet band below; female similar to Ruby-throated', 'The western equivalent of the Ruby-throated; common in urban and suburban gardens'],
            ['Broad-tailed Hummingbird', 'Rocky Mountains / Mountain West', 'Migratory (May–Sep)', 'Male rose-magenta gorget; distinctive wing trill in flight', 'High-altitude specialist; common in Rocky Mountain gardens above 5,000 ft; arrives with first wildflowers'],
            ['Calliope Hummingbird', 'Mountain West / Pacific NW', 'Migratory (Apr–Aug)', 'Smallest US bird; male has streaked magenta gorget like a starburst', 'Attracted to native penstemons and paintbrush; passes through many mountain-state gardens during migration'],
            ["Allen's Hummingbird", 'Coastal California', 'Resident/migratory', 'Nearly identical to Rufous; male orange flanks and tail, green back', 'One of the earliest migrants; present along CA coast Feb–Aug; island population is year-round resident'],
            ['Broad-billed Hummingbird', 'Southern Arizona / New Mexico', 'Migratory (Mar–Sep)', 'Male brilliant blue-green body with red bill; unmistakable', 'Attracted to Mexican sage, ocotillo, and desert willow; regular in Southeast AZ garden feeders'],
            ['Blue-throated Mountain-gem / Rivoli\'s (Magnificent)', 'Southeast AZ / SW NM', 'Seasonal resident (May–Oct)', 'Large species; male has blue or purple throat; Rivoli\'s has green-purple iridescence', 'Occasionally visit feeders in mountain canyons; more common in higher-elevation riparian gardens in sky islands'],
          ],
        },
        {
          type: 'h3',
          text: 'Hummingbird Biology: Key Facts for Gardeners',
        },
        {
          type: 'table',
          headers: ['Trait', 'Detail', 'Garden Implication'],
          rows: [
            ['Heart rate', 'Up to 1,260 beats per minute during flight', 'Hummingbirds must feed constantly — they visit hundreds of flowers daily and cannot survive more than a few hours without food'],
            ['Wing beats', '40–80 beats per second (species-dependent)', 'The hovering ability that lets them access tubular flowers; they also catch small insects in flight'],
            ['Metabolism', 'Highest of any warm-blooded animal; burn ~10 calories/day', 'A garden with 20–30 tubular flower species in bloom can meaningfully reduce energy expenditure vs. scattered single-plant feeders'],
            ['Torpor', 'Enter nightly hypothermia to conserve energy (body temp drops 50°F)', 'Dense shrubs and trees for night roost sites matter as much as flowers; avoid disturbing known roosting spots at dusk'],
            ['Memory', 'Exceptional spatial memory; remember every flower and feeder visited', 'Once a hummingbird finds your garden, it will return reliably — year after year if migratory, or daily if resident'],
            ['Territory', 'Males fiercely defend food sources; females range more widely', 'Multiple feeders placed out of sight of each other reduce aggressive monopolization and allow more birds to feed'],
            ['Lifespan', '3–5 years average; banded birds recorded to 12 years', 'Investing in perennial plants and habitat structure pays dividends over many seasons'],
            ['Diet', '~80% nectar, ~20% small insects and spiders (protein source)', 'Insect-supporting plants (aphid-prone plants, flying insect hosts) are part of complete hummingbird habitat'],
            ['Migration cue', 'Photoperiod (day length), not temperature or feeder presence', 'Leaving feeders up in fall does NOT prevent migration; it provides critical fueling for the journey south'],
            ['Color preference', 'Strong attraction to red, orange, and hot pink; learn any reliable food source regardless of color', 'Red flowers and red feeders attract initial scouting birds; white, purple, and blue flowers are visited readily once the garden is established'],
          ],
        },
        {
          type: 'tip',
          emoji: '📱',
          text: 'Download the free eBird app (Cornell Lab of Ornithology) to see exactly which hummingbird species have been reported in your county and when they typically arrive and depart. This data, collected by thousands of local birders, is far more precise than general range maps and helps you time feeder setup and early-blooming plant choices.',
        },
      ],
    },
    {
      id: 'best-plants',
      title: 'Section 2: The Best Hummingbird Plants',
      blocks: [
        {
          type: 'p',
          text: 'Hummingbirds and tubular flowers co-evolved over millions of years. The long, narrow flower tube fits a hummingbird\'s bill and excludes most other pollinators, while the bird receives concentrated nectar in exchange for reliable cross-pollination. This relationship means that truly tubular, nectar-rich flowers — especially native species — will always outperform flat-faced blooms. A garden built around a succession of these plants, blooming from the moment your local hummingbirds arrive through the end of their season, is the single most powerful thing you can do to attract and retain them.',
        },
        {
          type: 'tip',
          emoji: '🌿',
          text: 'Native plants are the gold standard for hummingbird gardens. They evolved alongside local hummingbird populations, typically offer higher nectar volume and concentration than non-native cultivars, and support the insects hummingbirds eat. Where possible, source straight species or minimally-bred cultivars rather than heavily doubled or modified forms — breeders often prioritize appearance over nectar production.',
        },
        {
          type: 'h3',
          text: 'Top Native Hummingbird Plants',
        },
        {
          type: 'table',
          headers: ['Plant', 'Type', 'Bloom Season', 'Regions', 'Zones', 'Rating'],
          rows: [
            ['Trumpet Honeysuckle (Lonicera sempervirens)', 'Vine', 'Spring–Fall', 'East, Midwest, SE', '4–9', '★★★★★'],
            ['Scarlet Sage / Tropical Sage (Salvia coccinea)', 'Annual / tender perennial', 'Spring–Fall', 'SE, Gulf, SW', '8–11 (annual elsewhere)', '★★★★★'],
            ['Cardinal Flower (Lobelia cardinalis)', 'Perennial', 'Midsummer–Fall', 'East, Midwest, SE, SW', '3–9', '★★★★★'],
            ['Trumpet Vine (Campsis radicans)', 'Vine', 'Summer', 'East, Midwest, SE', '4–9', '★★★★☆'],
            ['Bee Balm (Monarda didyma)', 'Perennial', 'Summer', 'East, Midwest, NE', '3–9', '★★★★★'],
            ['Scarlet Gilia / Skyrocket (Ipomopsis aggregata)', 'Biennial/perennial', 'Summer', 'Mountain West, SW', '4–9', '★★★★★'],
            ['Firecracker Penstemon (Penstemon eatonii)', 'Perennial', 'Spring', 'Desert SW, Mountain West', '4–9', '★★★★★'],
            ['Rocky Mountain Penstemon (Penstemon strictus)', 'Perennial', 'Late Spring–Summer', 'Mountain West', '3–9', '★★★★☆'],
            ['Hummingbird Sage (Salvia spathacea)', 'Perennial', 'Spring', 'California', '8–10', '★★★★★'],
            ['Red Columbine (Aquilegia canadensis)', 'Perennial', 'Spring', 'East, Midwest, Mountain West', '3–8', '★★★★★'],
            ['Standing Cypress (Ipomopsis rubra)', 'Biennial', 'Summer', 'SE, South-Central', '6–9', '★★★★☆'],
            ['Cigar Plant (Cuphea ignea)', 'Annual / tender perennial', 'Summer–Fall', 'SE, Gulf (annual elsewhere)', '10–11 (annual elsewhere)', '★★★★☆'],
            ['Wild Columbine / Eastern Columbine (Aquilegia canadensis)', 'Perennial', 'Spring', 'East, Midwest', '3–8', '★★★★★'],
            ['Ocotillo (Fouquieria splendens)', 'Shrub/tree', 'Spring', 'Desert SW', '8–11', '★★★★★'],
            ['Chuparosa (Justicia californica)', 'Shrub', 'Winter–Spring', 'Desert SW (CA, AZ)', '9–11', '★★★★★'],
          ],
        },
        {
          type: 'h3',
          text: 'Non-Native Plants Worth Growing',
        },
        {
          type: 'p',
          text: 'Well-chosen non-native plants can extend bloom season, fill regional gaps, and provide exceptional nectar volume. The following perform reliably for hummingbirds across a wide range of US gardens without becoming invasive problems (verify invasive status for your specific region before planting).',
        },
        {
          type: 'table',
          headers: ['Plant', 'Type', 'Bloom Season', 'Zones', 'Notes'],
          rows: [
            ['Salvia guaranitica (Anise-scented sage)', 'Tender perennial', 'Summer–Fall', '7–11 (annual elsewhere)', 'Deep blue flowers; visited enthusiastically despite non-red color; \'Black and Blue\' is the most common cultivar'],
            ['Salvia elegans (Pineapple sage)', 'Tender perennial', 'Fall', '8–11 (annual elsewhere)', 'Blooms late; critical fuel for migrating hummingbirds in Sep–Oct; pineapple-scented foliage'],
            ['Agastache (Hyssop / Hummingbird mint)', 'Perennial', 'Summer–Fall', '5–9 (varies by species)', 'Exceptionally long bloom; drought-tolerant; \'Blue Fortune\', \'Desert Sunrise\', and native hybrids all perform well'],
            ['Crocosmia (Montbretia)', 'Bulb', 'Summer', '5–9', 'Orange-red arching sprays; reliable hummingbird magnet; can spread aggressively in mild climates'],
            ['Fuschia (hardy forms)', 'Shrub / annual', 'Summer–Fall', '6–10 (species-dependent)', 'Hanging tubes are perfectly designed for feeding; \'Gartenmeister Bonstedt\' particularly productive'],
            ['Cannas (Canna × generalis)', 'Bulb', 'Summer–Fall', '7–11 (annual elsewhere)', 'Vivid red/orange species types more productive than heavily hybridized cultivars; good tropical effect'],
            ['Cigar plant (Cuphea micropetala)', 'Tender perennial', 'Fall', '9–11 (annual elsewhere)', 'Orange-and-yellow tubes bloom late into fall; often the last hummingbird plant still producing'],
            ['Lantana (Lantana camara)', 'Annual / shrub', 'Summer–Fall', '8–11 (annual elsewhere)', 'Extremely productive nectar source; treat as invasive and do not allow to naturalize in warm-winter climates'],
            ['Tithonia (Mexican sunflower)', 'Annual', 'Summer–Fall', 'Annual', 'Orange 3-inch flowers; visited by hummingbirds for nectar and insects attracted to bloom'],
            ['Red hot poker (Kniphofia uvaria)', 'Perennial', 'Summer', '5–9', 'Torch-like spikes; visited frequently by hummingbirds; tolerates dry conditions once established'],
            ['Salvia microphylla (Baby sage / Graham\'s sage)', 'Shrub', 'Spring–Fall (long)', '7–10', 'Exceptionally long season; small red-pink flowers; many named cultivars available'],
            ['Impatiens (standard)', 'Annual', 'Summer–Fall', 'Annual', 'Lower-rated than tubular options but visited for nectar; useful in deep shade where other options fail'],
            ['Weigela (red-flowering forms)', 'Shrub', 'Spring', '4–8', 'One of the best spring shrubs for early migrants; \'Wine and Roses\' and species forms most productive'],
          ],
        },
        {
          type: 'h3',
          text: 'Season-by-Season Bloom Calendar',
        },
        {
          type: 'p',
          text: 'The goal is unbroken bloom from the day your local hummingbirds arrive through their last day in the garden. Use this calendar as a planning tool — your exact timing will shift 2–4 weeks per USDA zone.',
        },
        {
          type: 'table',
          headers: ['Season', 'Target Bloom Window', 'Key Plants', 'Goal'],
          rows: [
            ['Early Spring (Zones 7–9) / Late Spring (Zones 5–6)', 'First hummingbird arrival + 2 weeks', 'Red columbine, weigela, native azaleas, early penstemons, trumpet honeysuckle (first flush)', 'Greet arriving birds immediately; establish territory before they range further'],
            ['Late Spring / Early Summer', 'Weeks 3–8 of bird presence', 'Bee balm, salvia species, penstemon peak, columbine second flush, early trumpet vine', 'Support territory establishment and early nesting females who need maximum calories'],
            ['Midsummer', 'Peak season for most regions', 'Trumpet vine, cardinal flower, agastache, lantana, tithonia, Salvia guaranitica, canna', 'Highest competition period; supplement with feeders; prioritize plants with high nectar volume'],
            ['Late Summer / Early Fall', '4–6 weeks before last expected bird', 'Pineapple sage, cigar plant, late agastache, Salvia microphylla, late bee balm, cardinal flower second flush', 'Critical fueling period before and during migration; do not cut back late-blooming plants'],
            ['Winter (Zones 8–11 with resident Anna\'s)', 'Year-round', 'Chuparosa, winter-blooming aloes, Salvia leucantha, early-winter natives', "Anna's hummingbirds in CA/PNW require winter flowers; feeders become primary fuel source for most of the country"],
            ['Year-round feeder rule', '—', '—', 'Keep at least one feeder up through the entire season — even in a garden rich with flowers. Feeders act as an anchor that draws birds into range of your plants.'],
          ],
        },
        {
          type: 'tip',
          emoji: '📅',
          text: 'The "12-month feeder" rule: if you live in a region with year-round residents (Pacific Coast, Desert Southwest) or where unexpected late migrants appear, keep a feeder up every month of the year. For purely migratory areas (most of the East and Midwest), set your feeder out one week before your local average first-arrival date and leave it up two weeks after your average last-sighting date — the birds that linger latest need fuel most urgently.',
        },
      ],
    },
    {
      id: 'feeders',
      title: 'Section 3: Hummingbird Feeders',
      blocks: [
        {
          type: 'p',
          text: 'A well-maintained feeder is a powerful complement to a planted hummingbird garden — it draws birds in from a distance, anchors territory, and provides critical calories during periods when flowers are between bloom cycles. The key word is well-maintained: a neglected feeder with spoiled nectar is worse than no feeder at all, as moldy sugar water can cause fatal fungal infections in the birds that drink it.',
        },
        {
          type: 'h3',
          text: 'Feeder Types',
        },
        {
          type: 'table',
          headers: ['Type', 'How It Works', 'Pros', 'Cons', 'Best For'],
          rows: [
            ['Saucer / dish feeder', 'Shallow reservoir; ports sit above the nectar surface', 'Easy to clean; bee and wasp resistant; no drips', 'Smaller capacity; exposed nectar heats faster in direct sun', 'Most gardeners; beginners; anyone prioritizing cleanliness'],
            ['Bottle / inverted tube feeder', 'Inverted bottle creates vacuum seal; nectar drawn up through ports', 'Larger capacity; widely available; many decorative options', 'Drips when temperature changes create vacuum breaks; harder to clean bottle neck', 'High-traffic gardens; regions with multiple birds needing high-volume supply'],
            ['Window-mount feeder', 'Suction-cup mounted directly to glass; birds feed inches from indoors', 'Exceptional close-up viewing; no pole required', 'Small capacity; must be cleaned frequently; some birds initially wary', 'Close observation; patios and apartment balconies; photography'],
            ['Decorative ceramic / glass feeder', 'Hand-blown glass or ceramic; typically bottle-style with decorative ports', 'Attractive; sturdy; less UV degradation than plastic', 'Often difficult to clean thoroughly; irregular shapes may harbor mold', 'Aesthetic-focused gardens where appearance matters; low-traffic sites'],
            ['Large capacity / multiple port feeder', 'High-volume reservoirs with 6–10+ feeding ports; often with perches', 'Serves many birds simultaneously; reduces refill frequency', 'Perches can encourage aggressive monopolizing; large reservoir = faster spoilage if turnover is low', 'High-density areas with many birds; late summer migration fueling stations'],
          ],
        },
        {
          type: 'h3',
          text: 'Feeder Buying Guide',
        },
        {
          type: 'list',
          items: [
            'Choose red feeders or feeders with red ports — initial scouting birds are drawn to red; do not add red dye to the nectar itself',
            'Prioritize ease of cleaning above all else — if you cannot disassemble and scrub every surface, the feeder will grow mold',
            'Avoid feeders with yellow bee guards — yellow attracts bees and wasps; most saucer-style feeders naturally resist insects because the nectar sits below port level',
            'Look for wide-mouth openings and smooth interior curves — bottle-style feeders with narrow necks are nearly impossible to clean properly without a bottle brush set',
            'Perches are optional — hummingbirds can hover to feed, but perches allow tired migrants to rest and make for better observation; they do let aggressive males monopolize a feeder more easily',
            'BPA-free, UV-stable plastic or glass are both acceptable materials; avoid cheap plastic that cracks or discolors quickly',
          ],
        },
        {
          type: 'h3',
          text: 'Nectar Recipe',
        },
        {
          type: 'p',
          text: 'The correct nectar formula is simple, cheap, and matches the sugar concentration of the flowers hummingbirds evolved to visit. Use plain white granulated cane sugar and clean water — nothing else.',
        },
        {
          type: 'tip',
          emoji: '🍬',
          text: 'Standard nectar recipe: 1 part white granulated sugar to 4 parts water (1:4 ratio). Boil water briefly, stir in sugar until fully dissolved, cool completely before filling the feeder. This produces approximately a 20% sucrose solution — within the natural range of hummingbird-adapted flowers. Store unused nectar in the refrigerator for up to two weeks.',
        },
        {
          type: 'h3',
          text: 'What Not to Use',
        },
        {
          type: 'list',
          items: [
            'Red dye or food coloring — completely unnecessary and potentially harmful; the red feeder body is sufficient to attract birds',
            'Honey — ferments rapidly and can cause fatal fungal infections (Candidiasis); never use in feeders',
            'Brown sugar, raw sugar, turbinado, or coconut sugar — contain molasses and other compounds that are difficult for hummingbirds to process; stick to plain white cane sugar',
            'Artificial sweeteners — provide no calories; hummingbirds will abandon a feeder filled with zero-calorie liquid',
            'Nectar concentrate products — some commercial mixes contain additives, preservatives, or incorrect ratios; mixing fresh 1:4 sugar water is cheaper and safer',
            'Well water high in minerals — use filtered or tap water; very high mineral content can leave residue and affect palatability',
          ],
        },
        {
          type: 'h3',
          text: 'Nectar Freshness — How Often to Change',
        },
        {
          type: 'p',
          text: 'Nectar spoilage is temperature-dependent. Fermented or moldy nectar is the leading cause of feeder-related hummingbird illness. When in doubt, change the nectar — the cost of a cup of sugar water is trivial compared to the harm spoiled nectar causes.',
        },
        {
          type: 'table',
          headers: ['Temperature', 'Change Nectar Every', 'Notes'],
          rows: [
            ['Below 60°F', 'Every 5–7 days', 'Cool weather slows fermentation; still check for cloudiness or floating particles'],
            ['60–70°F', 'Every 3–4 days', 'Moderate fermentation risk; inspect visually at each fill'],
            ['70–80°F', 'Every 2–3 days', 'Fermentation noticeably faster; nectar may appear cloudy before full spoilage'],
            ['80–90°F', 'Every 1–2 days', 'High risk; nectar can begin fermenting within 24 hours in full sun; move feeder to shade'],
            ['Above 90°F', 'Daily', 'Critical — partial fills help so less nectar is wasted with daily changes; shade placement is essential'],
          ],
        },
        {
          type: 'warning',
          emoji: '🧼',
          text: 'Deep cleaning protocol: Every time you refill, rinse the feeder with hot water and scrub all surfaces. Every 1–2 weeks (or whenever you see black mold spots), disassemble completely and soak in a 1:10 bleach-to-water solution or undiluted white vinegar for 1–2 hours, then scrub every surface with a bottle brush and port cleaner, rinse thoroughly multiple times, and air-dry completely before refilling. Black mold in feeder ports is a serious health hazard to hummingbirds — it cannot be rinsed away.',
        },
        {
          type: 'h3',
          text: 'Feeder Placement',
        },
        {
          type: 'list',
          items: [
            'Place in partial shade or morning sun only — direct afternoon sun accelerates nectar spoilage significantly',
            'Hang near tubular flowers so birds moving between feeder and plants encounter your plantings naturally',
            'Position multiple feeders out of sight of each other — a dominant male cannot guard what he cannot see; this is the most effective strategy for serving more birds',
            'Keep at least 10–15 feet from windows to prevent collision risk; window-mount feeders are the exception (inches away is safe)',
            'Hang high enough to be accessible to hummingbirds but reachable by you for cleaning — a feeder you cannot easily remove will not get cleaned often enough',
            'Avoid placing near ant-prone surfaces; use an ant moat (a water-filled barrier above the hanger) to prevent ants from reaching the nectar',
          ],
        },
      ],
    },
  ],
}
