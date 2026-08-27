export const xeriscapeContent = {
  id: 'xeriscape',
  hero: {
    emoji: '🌵',
    title: 'Xeriscape Design',
    subtitle: 'Beautiful, Water-Wise Landscaping for Dry Climates and Drought-Prone Regions',
  },
  intro:
    'Xeriscape — from the Greek xeros (dry) — is a practical approach to landscape design that reduces irrigation needs by 50–75% while maintaining beauty, ecological function, and property value. The biggest misconception is that it means cactus and gravel. A properly designed xeriscape can be lush, colorful, and seasonally dynamic — with flowering perennials, ornamental grasses, shade trees, and fragrant herbs — that works with the local climate, soil, and water cycle rather than against it.',
  sections: [

    // ─── INTRO: THE WORD, THE MYTH, AND THE REALITY ──────────────────────────
    {
      id: 'intro-overview',
      title: 'Xeriscape: The Word, the Myth, and the Reality',
      blocks: [
        {
          type: 'p',
          text: 'Xeriscape was coined in 1981 by Denver Water to describe a practical approach to landscape design that dramatically reduces irrigation needs while maintaining beauty, ecological function, and property value. It has since been adopted by water utilities, municipalities, and gardeners across the United States as one of the most important tools for sustainable landscaping.',
        },
        {
          type: 'p',
          text: 'The biggest misconception about xeriscape is that it means cactus and gravel. It does not. A properly designed xeriscape can be a lush, colorful, seasonally dynamic garden — with flowering perennials, ornamental grasses, shade trees, fragrant herbs, and even edible plants — that uses 50 to 75 percent less water than a conventional turf-based landscape. The defining characteristic of xeriscape is not what it contains, but how it is designed: every element is chosen and placed to work with the local climate, soil, and water cycle rather than against it.',
        },
        {
          type: 'table',
          headers: ['Landscape Type', 'Est. Gallons/Year (5,000 sq ft)', 'Drought Resilience', 'Maintenance Level'],
          rows: [
            ['Conventional turf lawn (bluegrass, fescue)', '100,000–150,000+', 'Very low — turns brown or dies in drought', 'High: weekly mowing, fertilizing, pest management, irrigation'],
            ['Mixed conventional landscape (lawn + beds)', '60,000–100,000', 'Low — lawn fails; beds may survive', 'High: mowing, deadheading, fertilizing, irrigation'],
            ['Partial xeriscape (reduced turf, xeric beds)', '25,000–45,000', 'Moderate — xeric areas survive; lawn stressed', 'Medium: selective irrigation, annual mulching, less mowing'],
            ['Full xeriscape (no turf or native grass only)', '5,000–18,000', 'High — established plants survive drought on natural rainfall', 'Low–Medium: annual mulching, selective pruning, no mowing'],
          ],
        },
        {
          type: 'tip',
          emoji: '💧',
          text: 'Many water utilities, municipalities, and state agencies across the US offer rebates for converting turf to xeriscape — cash payments per square foot of lawn removed, free mulch programs, subsidized drip irrigation equipment, or rebates on water-efficient plants. In some areas rebates can offset 30 to 70 percent of project costs. Contact your local water utility before beginning any xeriscape project.',
        },
        { type: 'image', src: '/guides/xeriscape/drought-tolerant-garden-lavender-sage.jpg', alt: 'A lush drought-tolerant garden bed with blooming lavender, sage, and ornamental grasses', caption: 'Xeriscape does not mean cactus and gravel — a well-designed dry garden can be as full and colorful as any conventional bed.' },
      ],
    },

    // ─── SECTION 1: THE SEVEN PRINCIPLES ─────────────────────────────────────
    {
      id: 'seven-principles',
      title: 'Section 1: The Seven Principles of Xeriscape',
      blocks: [
        {
          type: 'p',
          text: 'Denver Water\'s original xeriscape framework identified seven principles that, applied together, produce landscapes requiring a fraction of conventional irrigation. These principles are not rigid rules — they are a framework that scales from a full property renovation to a single garden bed. Each principle reinforces the others: better soil preparation makes plants more drought-tolerant; appropriate plant selection reduces irrigation demand; efficient irrigation systems deliver water precisely where soil preparation and plant selection have positioned it to do the most good.',
        },
        {
          type: 'table',
          headers: ['Principle', 'Core Concept', 'Primary Benefit', 'Where to Start'],
          rows: [
            ['1. Planning & Design', 'Begin with a site analysis and a plan before buying a single plant. Understand sun exposure, prevailing winds, slope and drainage patterns, soil type, and the ways people use the space.', 'Avoids costly mistakes; ensures every element works with the site', 'Sketch your property to scale. Note sun angles at different times of day. Observe where water pools after rain and where soil dries fastest.'],
            ['2. Soil Improvement', 'Most American soils need amendment before xeric plants can establish successfully. Organic matter improves water retention in sand, drainage in clay, and biological activity in both.', 'Dramatically reduces irrigation needs during establishment; improves plant health long-term', 'Get a soil test from your local cooperative extension service before amending. Know what you have before adding anything.'],
            ['3. Practical Turf Areas', 'Limit lawn to areas where it is actively used — children\'s play, outdoor dining, pet areas. Remove turf from slopes, narrow strips, and areas rarely used but routinely irrigated.', 'Lawn is the single largest water user in most American residential landscapes; reducing it is the highest-impact single action', 'Identify turf areas by function: is this lawn actually used, or is it just there? Targeted turf reduction is usually the most cost-effective first step.'],
            ['4. Appropriate Plant Selection', 'Choose plants adapted to your region\'s natural rainfall and temperature patterns. Natives and plants from climatically similar regions — the Mediterranean, South Africa, Central Asia — require dramatically less supplemental water.', 'Reduces or eliminates ongoing irrigation; increases resilience; reduces pest and disease pressure', 'Learn your USDA Hardiness Zone and your region\'s annual rainfall. Use these as the primary filter for plant selection.'],
            ['5. Efficient Irrigation', 'When irrigation is needed, deliver water directly to the root zone with drip irrigation or soaker hoses rather than overhead sprinklers that lose 30–50% to evaporation and overspray.', 'Eliminates water waste; delivers water precisely where plants need it; reduces disease from wet foliage', 'Install a drip irrigation system from the beginning. A basic timer-controlled drip system pays for itself in water savings within one to two seasons.'],
            ['6. Mulch', 'A 3–4 inch layer of organic or inorganic mulch over all planted areas reduces evaporation by 50–70%, moderates soil temperature, suppresses weeds, and improves soil structure as it breaks down.', 'The single highest water-retention action per dollar invested; requires minimal ongoing effort', 'Apply mulch immediately after planting. Replenish organic mulch annually. Maintain consistent depth — gaps in mulch coverage create disproportionate water loss.'],
            ['7. Appropriate Maintenance', 'A xeriscape requires maintenance — but different maintenance than a conventional landscape. Pruning, mulch replenishment, and seasonal care replace mowing, fertilizing, and heavy irrigation.', 'Sustains water savings; keeps plants healthy without chemical inputs; prevents establishment of water-demanding weeds', 'Learn the growth habits of each plant you select before planting. Matching pruning and care to each plant\'s natural behavior reduces maintenance time.'],
          ],
        },
      ],
    },

    // ─── SECTION 2: SITE ANALYSIS & DESIGN PLANNING ──────────────────────────
    {
      id: 'site-analysis',
      title: 'Section 2: Site Analysis & Design Planning',
      blocks: [
        {
          type: 'p',
          text: 'A xeriscape design that fails usually fails in the planning phase — plants placed in the wrong microclimate, drainage patterns that concentrate water in unintended places, slopes that wash mulch and soil away in the first rain. A thorough site analysis before putting shovel to ground is the highest-return investment in any xeriscape project.',
        },
        {
          type: 'h3',
          text: 'Reading Your Site: The Essential Assessment',
        },
        {
          type: 'list',
          items: [
            'Sun exposure: Track sun across the site at different times of day and seasons. Note full-sun areas (6+ hours), part-shade (3–6 hours), and full-shade areas. Sun exposure is the primary determinant of plant placement.',
            'Slope and drainage: Note where water flows during and after rain. Flat areas in clay soil where water pools are opportunities for rain gardens. Steep slopes require deep-rooted plants and fast-draining mulch. Note where downspouts discharge — these are water resources to capture.',
            'Wind patterns: Prevailing winds desiccate plants and accelerate soil moisture loss. Note the wind direction and times of year when wind is strongest. Use structures, earthworks, or windbreak plantings on the windward side before placing moisture-sensitive plants in exposed positions.',
            'Existing plants: Inventory existing trees and shrubs before removing anything. A mature native tree provides shade, habitat, and carbon storage that no new planting can immediately replace. Redesign around mature trees wherever possible.',
            'Soil type: Conduct a jar test (fill a jar with soil and water, shake, let settle, and observe the layers of sand, silt, and clay) or send a soil sample to your cooperative extension service. Knowing your soil type shapes every subsequent decision about amendment, plant selection, and irrigation.',
          ],
        },
        {
          type: 'h3',
          text: 'Hydrozoning: The Design Framework',
        },
        {
          type: 'p',
          text: 'Hydrozoning is the practice of grouping plants with similar water needs together, so irrigation can be applied to each zone at the appropriate frequency and volume. It is the most practical design tool in xeriscape and the one that most directly translates site analysis into a planting plan.',
        },
        {
          type: 'table',
          headers: ['Hydrozone', 'Water Requirement', 'Typical Plants', 'Irrigation Approach', 'Placement Strategy'],
          rows: [
            ['Oasis Zone', 'Regular water — once or twice per week in peak season', 'High-use gathering areas; annuals for seasonal color; vegetables; containers; plants near the house entry', 'Drip or bubbler irrigation on a timer; most intensive irrigation zone', 'Limit to 10–20% of total landscape area. Place near the house where it is most visible and where people gather.'],
            ['Transitional Zone', 'Moderate water — once every 1–2 weeks once established', 'Adapted perennials, shrubs, and ornamental grasses; most flowering xeriscape plants fall here after establishment', 'Drip irrigation during establishment (first 1–2 seasons); reduced or eliminated irrigation thereafter', 'The largest zone in most xeriscapes — typically 40–60% of the planting area. The primary display zone for color, texture, and seasonal interest.'],
            ['Xeric Zone', 'Minimal water — rainfall only once established; supplemental only in extreme drought', 'True drought-tolerant natives, succulents, cacti, deep-rooted shrubs, native grasses, and groundcovers', 'No regular irrigation once established (after 1–2 seasons). Water only during establishment and extended drought.', 'The most ecologically valuable zone. Works on slopes, distant areas, and anywhere where running irrigation lines is impractical.'],
          ],
        },
        {
          type: 'tip',
          emoji: '💧',
          text: 'The 10–60–30 Rule: A well-designed xeriscape often follows a rough proportion guideline: 10% oasis zone (regular water, maximum visual impact near the house); 60% transitional zone (adapted plants, minimal supplemental irrigation after establishment); 30% xeric zone (no irrigation once established). Adjust these proportions to your climate — in the desert Southwest, the xeric zone may be 50% or more; in the humid mid-Atlantic, the oasis zone may be larger.',
        },
        {
          type: 'h3',
          text: 'Turf Removal: Practical Methods',
        },
        {
          type: 'list',
          items: [
            'Sheet mulching (lasagna method): The most ecologically sound method. Mow turf short, water thoroughly, then cover with overlapping sheets of cardboard (remove staples and tape). Wet the cardboard, then cover immediately with 4–6 inches of wood chip mulch. Allow 3–6 months before planting directly through the mulch. No herbicides, no digging, no soil disturbance.',
            'Solarization: Cover turf tightly with clear plastic sheeting during the hottest summer months. Solar heat trapped beneath the plastic kills turf, weed seeds, and soil pathogens within 4–6 weeks in hot climates. Effective in Zones 7–10 during summer. Less effective in cooler climates.',
            'Sod cutting: Mechanical sod cutters (rented from equipment suppliers) remove turf in a single pass by cutting just below the root zone. The removed sod can be composted. Labor-intensive but immediate — the area is ready to plant within days.',
            'Herbicide (glyphosate): Effective for large areas where manual methods are impractical. Apply when turf is actively growing, allow 2 weeks for complete kill, then till or solarize. Requires 2–3 applications for complete kill of established bermudagrass. Check local regulations and HOA rules before using.',
          ],
        },
      ],
    },

    // ─── SECTION 3: SOIL PREPARATION ─────────────────────────────────────────
    {
      id: 'soil-preparation',
      title: 'Section 3: Soil Preparation for Xeriscape',
      blocks: [
        {
          type: 'p',
          text: 'Soil is the foundation of every xeriscape and one of the most misunderstood elements of drought-tolerant landscaping. The instinct to amend soil heavily before planting can be counterproductive for true xeriscape plants. Many drought-tolerant natives and Mediterranean plants evolved in nutrient-poor, fast-draining soils. Planting them in heavily amended, rich soil often causes them to grow too fast, develop shallow roots, and become water-dependent precisely because the conditions are too comfortable.',
        },
        {
          type: 'table',
          headers: ['Soil Type', 'Water Behavior', 'Xeriscape Challenge', 'Amendment Strategy', 'Best Xeric Plants'],
          rows: [
            ['Sandy soil', 'Drains very fast; low water retention; nutrients leach quickly', 'Plants require more frequent irrigation during establishment; little buffer in drought', 'Add 2–4 inches of compost to the top 6 inches; helps retain moisture without causing drainage problems. Do not over-amend.', 'Lavender, rosemary, sedums, cacti, most Mediterranean natives, creosote, desert willow'],
            ['Clay soil', 'Holds water well but drains slowly; compacts easily; forms hard surface crust', 'Overwatering causes root rot; compaction prevents root penetration', 'Work in coarse grit and compost. For severe clay, consider raised beds or mounded planting areas. Never till wet clay.', 'Coneflowers, black-eyed Susans, prairie dropseed, buffalo grass, blue grama, lead plant'],
            ['Caliche (alkaline hardpan)', 'Present throughout the Southwest; a calcium carbonate layer that prevents drainage and restricts root penetration', 'Plants drown above caliche in rain events, then dry out rapidly; root growth stops at the hardpan', 'Break through caliche to create drainage "chimneys" for each planting hole. Fill chimneys with amended soil. Or plant in raised mounds above the caliche layer.', 'Desert marigold, penstemon, Apache plume, four-wing saltbush, ocotillo, agave'],
            ['Compacted urban soil', 'Common in new construction where topsoil has been stripped; minimal biological activity; poor drainage', 'Poor root penetration; limited water-holding capacity; hostile to plant establishment', 'Deep aeration followed by compost top-dressing. Sheet mulching rebuilds compacted soil without tilling.', 'Buffalo grass, blue grama, prairie smoke, creeping thyme, sedums'],
            ['Loam', 'Balanced drainage and water retention — the ideal soil type', 'Few challenges for xeriscape', 'Minimal amendment needed for xeric plants. Avoid over-amending.', 'The widest plant palette; focus on appropriate plant selection for your climate rather than soil correction'],
          ],
        },
        {
          type: 'tip',
          emoji: '🧪',
          text: 'A basic soil test from your cooperative extension service (typically $10–20) tells you pH, nutrient levels, organic matter content, and texture. This prevents expensive mistakes: amending soil that doesn\'t need amendment, or overlooking a pH problem that will cause chlorosis in every plant you add. Test before amending. Many drought-tolerant plants from the American West and Mediterranean are adapted to alkaline soils (pH 7.0–8.5). Work with your soil\'s natural pH rather than trying to change it.',
        },
      ],
    },

    // ─── SECTION 4: PLANT SELECTION ──────────────────────────────────────────
    {
      id: 'plant-selection',
      title: 'Section 4: Plant Selection — The Heart of Xeriscape',
      blocks: [
        {
          type: 'p',
          text: 'Plant selection is where xeriscape design becomes both a science and an art. The science is matching plants to climate, soil, and water availability with precision. The art is combining those plants into compositions that are beautiful, structurally sound across seasons, and ecologically valuable. The deep watering principle is critical: deep, infrequent watering produces drought-tolerant plants with deep root systems. Shallow, frequent watering — even of drought-tolerant species — produces plants with shallow roots that remain water-dependent. Water deeply (12–18 inches down), then wait until the soil is dry before watering again.',
        },
        {
          type: 'h3',
          text: 'Perennials for Xeriscape',
        },
        {
          type: 'table',
          headers: ['Plant', 'Zones', 'Water Need', 'Bloom Season', 'Key Strengths'],
          rows: [
            ['Lavender (Lavandula spp.)', '5–9', 'Low', 'Late spring–summer', 'Fragrant, pollinator magnet, gray-silver foliage year-round. Hates wet roots — perfect for fast-draining xeric soils.'],
            ['Salvia / Sage (Salvia spp.)', 'Varies (3–10)', 'Very low–low', 'Spring–fall (varies)', 'Extraordinary genus diversity: S. nemorosa (Z3–8), S. greggii (Z6–10), S. pachyphylla (Z5–9). Hummingbird and butterfly magnets.'],
            ['Agastache / Hyssop', '4–9 (varies)', 'Low', 'Summer–fall', 'Tubular flowers in orange, pink, purple, white. Outstanding hummingbird plant. Agastache rupestris and A. cana are among the most drought-tolerant. Fragrant foliage.'],
            ['Coneflower (Echinacea spp.)', '3–9', 'Low–moderate', 'Summer', 'Native prairie perennial. Extremely adaptable. Seedheads feed birds through winter. E. paradoxa (yellow) and E. tennesseensis are more xeric than E. purpurea.'],
            ['Black-Eyed Susan (Rudbeckia spp.)', '3–9', 'Low–moderate', 'Summer–fall', 'Native. Bold gold-yellow. Long bloom season; excellent seedhead persistence for birds. R. hirta self-seeds prolifically.'],
            ['Penstemon / Beardtongue', '3–10 (varies)', 'Very low–low', 'Spring–summer', 'One of the finest xeriscape genera in North America — hundreds of species across every climate. Tubular flowers in red, pink, purple, white. Choose species native to your specific region.'],
            ['Desert Marigold (Baileya multiradiata)', '5–11', 'Very low', 'Spring–frost', 'Brilliant yellow daisy flowers and silver-white foliage. Reseeds freely. Grows in the worst soils. Outstanding in Southwest xeriscapes.'],
            ['Yarrow (Achillea spp.)', '3–9', 'Very low', 'Late spring–summer', 'Flat-topped flower clusters in white, yellow, red, pink. Ferny aromatic foliage. Thrives in poor, dry soils. Excellent cut and dried flower.'],
            ['Russian Sage (Perovskia atriplicifolia)', '3–8', 'Very low', 'Summer–fall', 'Silver-white stems with lavender-blue flowers. Full sun, excellent drainage, alkaline-tolerant. Looks like a blue haze from a distance.'],
            ['Prairie Dropseed (Sporobolus heterolepis)', '3–9', 'Very low', 'Foliage spring–fall; fragrant flowers late summer', 'Native prairie grass with fine texture, arching form, extraordinary golden fall color, and fragrant flowers. One of the finest ornamental grasses for xeriscape.'],
          ],
        },
        {
          type: 'h3',
          text: 'Ornamental Grasses for Xeriscape',
        },
        {
          type: 'table',
          headers: ['Grass', 'Zones', 'Height', 'Water Need', 'Notes'],
          rows: [
            ['Blue Grama (Bouteloua gracilis)', '3–9', '12–18"', 'Very low', 'Native Great Plains grass. Can be mowed as a lawn alternative (4–6 inch height) or left unmowed for ornamental display. Eyelash-like seedheads are charming.'],
            ['Buffalo Grass (Bouteloua dactyloides)', '3–9', '4–8" (lawn)', 'Very low', 'The finest native lawn alternative for the Great Plains and Midwest. Goes dormant (tan) in dry spells; greens up after rain. Not suited to the Southeast or Pacific coast.'],
            ['Little Bluestem (Schizachyrium scoparium)', '3–9', '2–3 ft', 'Very low', 'Native prairie grass with extraordinary orange-copper-burgundy fall color. Outstanding winter interest. Widely adaptable across the US.'],
            ['Blue Oat Grass (Helictotrichon sempervirens)', '4–8', '2–3 ft', 'Low', 'Cool blue-silver foliage year-round. Evergreen in mild climates. Full sun, excellent drainage. Particularly effective in gravel gardens.'],
            ['Feather Reed Grass (Calamagrostis × acutiflora \'Karl Foerster\')', '4–8', '4–5 ft', 'Low–moderate', 'Architectural upright form. Feathery plumes from early summer through winter. Tolerates clay soil better than most grasses.'],
            ['Mexican Feather Grass (Nassella tenuissima)', '5–9', '18–24"', 'Very low', 'Extraordinarily fine-textured, silky, cascading. Very drought-tolerant. Note: invasive in some western states — check your state before planting.'],
            ['Muhly Grass (Muhlenbergia capillaris)', '5–10', '2–3 ft', 'Low', 'Native. Extraordinary pink-mauve fall flower plumes create a haze of color. M. reverchonii (Undaunted®) is more drought-tolerant and cold-hardy.'],
          ],
        },
        {
          type: 'h3',
          text: 'Shrubs for Xeriscape',
        },
        {
          type: 'table',
          headers: ['Shrub', 'Zones', 'Water Need', 'Size', 'Key Value'],
          rows: [
            ['Apache Plume (Fallugia paradoxa)', '4–10', 'Very low', '3–5 ft', 'Southwestern native. White rose-like flowers followed by spectacular silky pink seed plumes that last for months. One of the finest xeric shrubs.'],
            ['Four-Wing Saltbush (Atriplex canescens)', '3–10', 'Very low', '4–8 ft', 'Silver-gray foliage year-round. Tolerates alkaline soil, caliche, and saline conditions. Outstanding wildlife value.'],
            ['Desert Willow (Chilopsis linearis)', '6–10', 'Very low', '10–25 ft', 'Extraordinary orchid-like flowers in pink-lavender through summer. One of the most spectacular drought-tolerant flowering plants.'],
            ['Autumn Sage (Salvia greggii)', '6–10', 'Very low', '1–3 ft', 'Red, pink, or white tubular flowers almost continuously from spring to frost. Outstanding hummingbird plant. Perennial in Z7+.'],
            ['Rabbitbrush (Ericameria nauseosa)', '3–8', 'Very low', '2–5 ft', 'Bright yellow fall flowers and silver stems year-round. Thrives in the driest, most alkaline conditions. Exceptional wildlife habitat.'],
            ['Fernbush (Chamaebatiaria millefolium)', '4–8', 'Very low', '3–5 ft', 'Aromatic, ferny foliage with white summer flowers. Rocky Mountain native. Fragrant when brushed. Attracts pollinators prolifically.'],
            ['Sumac (Rhus spp.)', '3–9 (varies)', 'Very low', '3–15 ft (varies)', 'Multiple native species for every climate. Fragrant sumac (R. aromatica) is compact and excellent as a groundcover. Staghorn sumac (R. typhina) is bold and architectural with spectacular fall color.'],
            ['Chaste Tree (Vitex agnus-castus)', '5–9', 'Very low', '8–15 ft', 'Large shrub or small tree with fragrant lavender flower spikes throughout summer. Tolerates poor soil, alkaline conditions, reflected heat.'],
            ['Manzanita (Arctostaphylos spp.)', '5–9 (varies)', 'Very low', '1–15 ft (varies)', 'California native genus with extraordinary red-mahogany bark and small urn-shaped flowers. From low groundcover types to large shrubs. Superb for California and West Coast xeriscapes.'],
          ],
        },
        {
          type: 'h3',
          text: 'Trees for Xeriscape',
        },
        {
          type: 'table',
          headers: ['Tree', 'Zones', 'Water Need', 'Size at Maturity', 'Notes'],
          rows: [
            ['Blue Palo Verde (Parkinsonia florida)', '8–11', 'Very low', '15–25 ft', 'Sonoran desert native with green photosynthetic bark, brilliant yellow spring flowers, and light filtered shade. One of the finest desert trees.'],
            ['Gambel Oak (Quercus gambelii)', '3–8', 'Very low', '20–30 ft', 'The quintessential xeric oak of the Rockies and Great Plains. Extraordinarily drought and cold tolerant. Excellent wildlife tree with gold and russet fall color.'],
            ['Pinyon Pine (Pinus edulis)', '3–7', 'Very low', '10–20 ft', 'Slow-growing native of the Great Basin and Southwest. Produces edible pine nuts. The signature tree of the Colorado Plateau landscape character.'],
            ['Western Redbud (Cercis occidentalis)', '6–10', 'Very low–low', '10–18 ft', 'Spectacular magenta spring bloom on bare branches before leafing out. Round blue-green summer foliage. Excellent small specimen tree for California xeriscapes.'],
            ['New Mexico Locust (Robinia neomexicana)', '4–8', 'Very low', '10–20 ft', 'Pink flowers in late spring; fine-textured foliage. Fixes nitrogen. Spreads by suckering — useful for erosion control on slopes.'],
            ['Fragrant Ash (Fraxinus cuspidata)', '6–9', 'Very low', '12–20 ft', 'Fragrant white spring flowers; small fine-textured leaves. One of the most underused xeric trees. Native to rocky limestone hills from Texas to Arizona.'],
            ['Mesquite (Prosopis spp.)', '7–11', 'Very low', '15–30 ft', 'The defining tree of the Chihuahuan and Sonoran deserts. Deep taproot; once established, requires no irrigation. Nitrogen-fixing. Fragrant spring flowers. Edible seed pods.'],
          ],
        },
        {
          type: 'h3',
          text: 'Groundcovers for Xeriscape',
        },
        {
          type: 'table',
          headers: ['Groundcover', 'Zones', 'Sun', 'Water', 'Notes'],
          rows: [
            ['Creeping Thyme (Thymus serpyllum)', '3–8', 'Full sun', 'Very low', 'Dense, fragrant, flowering mat 2–3 inches tall. Tolerates foot traffic between stepping stones. Small pink-purple flowers attract pollinators.'],
            ['Prairie Smoke (Geum triflorum)', '3–8', 'Full sun–part shade', 'Very low', 'Native prairie groundcover with pink flowers and extraordinary feathery seed plumes. Outstanding for xeric meadow planting in the northern US.'],
            ['Ice Plant (Delosperma spp.)', '5–10 (varies)', 'Full sun', 'Very low', 'South African native adapted to American xeriscape. Brilliant magenta or yellow flowers. Succulent foliage. Excellent on slopes and in rock gardens.'],
            ['Sedum / Stonecrop (Sedum spp.)', '3–9 (varies)', 'Full sun–part shade', 'Very low', 'Enormous genus diversity. S. spurium, S. reflexum, S. kamtschaticum are excellent groundcovers. S. spectabile and S. \'Autumn Joy\' for larger accent.'],
            ['Native Wildflower Mix', 'Varies by mix', 'Full sun', 'Low during establishment; very low thereafter', 'A region-appropriate native wildflower seed mix is one of the most cost-effective xeric groundcovers. Contact your state native plant society for regionally appropriate mixes.'],
          ],
        },
        { type: 'image', src: '/guides/xeriscape/sedum-groundcover-stone-path.jpg', alt: 'Low-growing sedum groundcover spilling over a stone garden path in a dry landscape', caption: 'Deep, infrequent watering during establishment builds the deep root systems that make a xeric planting drought tolerant for good.' },
      ],
    },

    // ─── SECTION 5: EFFICIENT IRRIGATION ─────────────────────────────────────
    {
      id: 'irrigation',
      title: 'Section 5: Efficient Irrigation Systems',
      blocks: [
        {
          type: 'p',
          text: 'Efficient irrigation is not about irrigating less; it is about delivering the water that is needed precisely to the plants that need it, at the time and depth most beneficial, with no waste through evaporation, runoff, or overspray. A well-designed drip irrigation system operating on a properly programmed timer can reduce outdoor water use by 30 to 50 percent compared to conventional overhead sprinklers.',
        },
        {
          type: 'h3',
          text: 'Drip Irrigation: The Foundation of Xeriscape Watering',
        },
        {
          type: 'list',
          items: [
            'Components: Main supply line (1/2 inch polyethylene tubing) from the water source; 1/4 inch distribution tubing connecting to emitters; individual emitters at each plant (0.5, 1.0, or 2.0 gph depending on plant size); a filter at the connection point; a pressure regulator (drip systems operate at 20–30 psi); and a timer or smart controller.',
            'Emitter placement: Place emitters 6–12 inches from the base of small plants; 12–18 inches from the trunk of larger shrubs and trees. As plants grow, move emitters outward toward the dripline. Never place emitters directly against the trunk or crown — this creates rot conditions.',
            'Zoning: Run separate drip zones for each hydrozone — oasis, transitional, and xeric. This allows each zone to be irrigated on its own schedule. Never combine high-water and low-water plants on the same drip zone.',
          ],
        },
        {
          type: 'h3',
          text: 'Smart Controllers and Watering Schedules',
        },
        {
          type: 'p',
          text: 'A smart irrigation controller adjusts watering schedules automatically based on local weather data — reducing irrigation after rain, increasing it during heat waves, and eliminating irrigation during cool, overcast periods. Smart controllers reduce outdoor water use by an additional 20 to 40 percent compared to standard timer-based systems. ET (evapotranspiration) controllers calculate how much water the landscape is losing through plant transpiration and soil evaporation, then adjust run times automatically to replace exactly the water lost. Many water utilities offer rebates specifically for ET controller purchases.',
        },
        {
          type: 'tip',
          emoji: '🔁',
          text: 'The soak-and-cycle method: For clay soils that absorb water slowly, program the controller to run each zone in multiple short cycles rather than one long cycle. For example, instead of one 20-minute run, program three 7-minute runs with 30-minute intervals between them. This allows the soil to absorb water between cycles and prevents runoff.',
        },
        {
          type: 'h3',
          text: 'Rainwater Harvesting and Rain Gardens',
        },
        {
          type: 'list',
          items: [
            'Simple rain barrel: A 55–100 gallon barrel connected to a single downspout with a spigot for hose connection. Captures the first flush of each rain event. Cost: $50–150. Most cost-effective at small scale.',
            'Cistern systems: Larger storage tanks (500–10,000+ gallons) connected to multiple downspouts, typically underground or beside the house. Most effective in climates with distinct wet and dry seasons.',
            'Passive rainwater harvesting: Shaping the landscape itself to capture and infiltrate rainfall. Swales (shallow channels that direct and slow water), berms (low earthen ridges that hold water in place), and rain gardens (planted depressions that capture runoff) require no plumbing and deliver long-term water benefits.',
            'Rain garden siting: Position rain gardens downslope from the water source and at least 10 feet from the house foundation. Size to hold the runoff from a 1–2 inch rain event — roughly 20–30% of the area draining into it. Plant the center with moisture-tolerant natives: sedges, rushes, iris, swamp milkweed, Joe-Pye weed, buttonbush.',
          ],
        },
        { type: 'image', src: '/guides/xeriscape/drip-irrigation-emitter-plant-base.jpg', alt: 'A drip irrigation emitter delivering water directly to the base of a drought-tolerant plant', caption: 'Drip irrigation delivers water precisely where it is needed with no loss to evaporation, runoff, or overspray.' },
      ],
    },

    // ─── SECTION 6: MULCH ────────────────────────────────────────────────────
    {
      id: 'mulch',
      title: 'Section 6: Mulch — The Xeriscape Multiplier',
      blocks: [
        {
          type: 'p',
          text: 'Of all the xeriscape principles, mulch may have the highest return on investment. A 3–4 inch layer of appropriate mulch reduces soil moisture evaporation by 50 to 70 percent, moderates soil temperature, suppresses weed germination, prevents soil crusting that causes runoff, and — in the case of organic mulch — progressively improves soil structure as it decomposes. Every dollar spent on mulch reduces water bills by multiple dollars over the course of a season.',
        },
        {
          type: 'table',
          headers: ['Mulch Type', 'Depth', 'Water Retention', 'Weed Suppression', 'Best For', 'Considerations'],
          rows: [
            ['Wood chips (arborist chips)', '3–4 inches', 'Excellent', 'Very good', 'Trees, shrubs, perennial beds; the most widely recommended xeriscape mulch', 'Free from many municipal tree services. Decompose over 2–3 years, improving soil. Avoid fresh chips against plant crowns.'],
            ['Shredded bark / bark nuggets', '3–4 inches', 'Good', 'Good', 'Decorative beds near the house; formal areas where appearance matters', 'More expensive than wood chips. Larger nuggets roll downslope; use shredded bark on any grade.'],
            ['Straw / hay', '3–4 inches', 'Good', 'Moderate', 'Vegetable gardens; newly seeded wildflower areas during establishment', 'May contain weed seeds (use certified weed-free straw). Breaks down quickly — needs replenishing frequently.'],
            ['Gravel / crushed stone', '2–3 inches', 'Moderate (reduces evaporation from soil)', 'Good with fabric below', 'Desert and Mediterranean gardens; around succulents and cacti; paths', 'Does not improve soil. Can increase soil temperature. Choose locally sourced stone for the most natural appearance.'],
            ['Decomposed granite (DG)', '2–3 inches', 'Moderate', 'Good with fabric below', 'Dry gardens, paths, desert landscapes', 'The standard mulch for Southwest and California xeriscapes. Compacts over time to form a firm surface. Choose stabilized DG for paths; unstabilized for planting areas.'],
            ['Living mulch (groundcovers)', 'Variable', 'Excellent (shades and cools soil)', 'Excellent once established', 'Naturalistic xeriscapes, slopes, areas between shrubs', 'Requires establishment period with higher initial irrigation. Once established, provides better ecological function than any inorganic mulch.'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'The Mulch Volcano: Piling mulch deeply against the trunk or crown of trees and shrubs is the most common and most damaging mulch application error. Mulch against trunks traps moisture against bark, promotes fungal disease and rot, creates habitat for rodents that girdle trunks, and causes adventitious roots that strangle the base. Apply mulch in a donut shape: pull it back 3–6 inches from the trunk or crown. The center of the donut should be bare.',
        },
      ],
    },

    // ─── SECTION 7: HARDSCAPE ────────────────────────────────────────────────
    {
      id: 'hardscape',
      title: 'Section 7: Hardscape — Structure, Style & Water Management',
      blocks: [
        {
          type: 'p',
          text: 'Hardscape plays a larger role in xeriscape than in conventional landscape design. Where a conventional landscape uses lawn as the default surface between planted areas, a xeriscape uses hardscape and mulch, which require no water. The key design principle for xeriscape hardscape is permeability: wherever possible, use surfaces that allow rainwater to percolate into the soil rather than run off the property.',
        },
        {
          type: 'table',
          headers: ['Surface', 'Permeability', 'Water Management', 'Xeriscape Compatibility', 'Notes'],
          rows: [
            ['Permeable pavers', 'High — water drains through gaps between pavers', 'Allows 100% of rain to infiltrate; no runoff', 'Excellent', 'The gold standard for xeriscape hardscape. Gaps filled with gravel or fine ground cover allow water through. Higher upfront cost; no ongoing water cost.'],
            ['Decomposed granite (compacted)', 'Moderate', 'Most water infiltrates; minimal runoff on flat surfaces', 'Very good', 'The most widely used xeriscape path and patio material in the Southwest. Provides a firm, attractive surface.'],
            ['Gravel / pea stone', 'Very high', 'Excellent infiltration; no runoff', 'Excellent', 'Highly permeable; excellent for xeriscape paths and dry stream beds. Moves underfoot without edging.'],
            ['Stepping stones in groundcover', 'Near 100%', 'All water infiltrates; no runoff', 'Outstanding', 'Maximally ecological: stones provide path function; planted gaps absorb all rain. Charming and naturalistic.'],
            ['Standard concrete (solid)', 'None', 'All water runs off; contributes to storm water flow', 'Poor', 'Minimize in xeriscapes. When concrete is used, direct runoff to planted areas or rain gardens rather than storm drains.'],
            ['Asphalt', 'None', 'All water runs off; retains heat; desiccates adjacent plants', 'Poor', 'Highly impermeable and thermally damaging to nearby plants. Redirect runoff from asphalt driveways into planted swales or rain gardens.'],
          ],
        },
        {
          type: 'h3',
          text: 'Dry Creek Beds: Functional Beauty',
        },
        {
          type: 'list',
          items: [
            'Construction: Excavate a meandering channel 12–24 inches deep and 18–36 inches wide. Line with heavy landscape fabric. Fill with large boulders at the channel margins, medium river rock in the channel center, and smaller pea gravel in the shallows. Vary stone size throughout for a natural appearance.',
            'Planting: Plant the margins with plants that would naturally be found along a stream bank: native grasses, sedges, willows, native iris, and shrubs. The planting confirms the creek\'s identity and provides habitat and erosion control.',
            'Directing water: Grade the channel to flow toward an infiltration area — a rain garden, planted swale, or low area with deep-rooted plants. Avoid directing it toward property boundaries or structures.',
          ],
        },
        {
          type: 'h3',
          text: 'Retaining Walls and Terracing',
        },
        {
          type: 'p',
          text: 'Slopes present the most challenging conditions in xeriscape: water runs off rather than infiltrating, mulch washes downhill, and erosion exposes roots. Terracing with retaining walls converts a sloping site into a series of level planting areas, each able to capture and hold rainfall. Dry-stacked stone (no mortar) is the most ecologically valuable retaining wall material — the gaps between stones provide habitat for beneficial insects, lizards, and small mammals. Each terrace level becomes a planting bed: moisture-tolerant plants go at the base of walls where water collects; more drought-tolerant plants go at the top where conditions are drier.',
        },
        { type: 'image', src: '/guides/xeriscape/decomposed-granite-path-dry-garden.jpg', alt: 'A decomposed granite path winding through a xeriscape garden with drought-tolerant plants', caption: 'Permeable surfaces like decomposed granite let rainwater soak into the soil instead of running off toward a storm drain.' },
      ],
    },

    // ─── SECTION 8: REGIONAL PLANT GUIDES ────────────────────────────────────
    {
      id: 'regional-guides',
      title: 'Section 8: Regional Xeriscape Plant Guides',
      blocks: [
        {
          type: 'p',
          text: 'Xeriscape plant selection is most effective when anchored to regional ecology. A plant native to your region\'s climate has evolved over thousands of years to thrive in exactly the conditions you are working with — the rainfall patterns, soil chemistry, temperature extremes, and seasonal rhythms of your specific place.',
        },
        {
          type: 'table',
          headers: ['Region', 'Annual Rainfall / Challenge', 'Signature Xeric Trees', 'Best Xeric Shrubs & Perennials', 'Grasses & Groundcovers', 'Design Opportunity'],
          rows: [
            ['Desert Southwest (AZ, NM, NV, southern CA; Zones 7–11)', '4–12 in/year. Bimodal rainfall (winter + summer monsoon). Extreme heat. Caliche soils. Alkaline pH.', 'Blue palo verde, mesquite, desert willow, Texas mountain laurel, Arizona cypress', 'Agave, ocotillo, prickly pear, desert marigold, globe mallow, autumn sage, desert spoon, Apache plume', 'Blue grama, sideoats grama, black grama; desert zinnia, paperflower', 'The richest native xeriscape plant palette in America. Monsoon garden design. Cactus gardens. Arroyos and dry creek drainage features.'],
            ['California & Coastal West (Zones 8–10)', '10–30 in/year (Mediterranean: wet winters, dry summers). Summer drought. Fire risk in many areas.', 'Western redbud, coast live oak, California sycamore, toyon, blue elderberry', 'Manzanita, California lilac (Ceanothus), flannel bush, native salvias, monkeyflower, buckwheat (Eriogonum)', 'Purple needlegrass (CA state grass), deer grass, California poppy', 'Chaparral garden design using California natives. Fire-wise landscaping. Gravity-fed rainwater harvesting from winter storms.'],
            ['Intermountain West / Great Basin (UT, CO, ID, WY; Zones 3–7)', '8–16 in/year. Cold winters. Hot summers. Alkaline soils. Wind. Short growing season at elevation.', 'Gambel oak, pinyon pine, Rocky Mountain juniper, quaking aspen, Engelmann spruce (high elevation)', 'Rabbitbrush, sagebrush, Apache plume, fernbush, mountain mahogany, serviceberry, four-wing saltbush', 'Blue grama, galleta grass, prairie smoke, penstemons (many species), scarlet gilia', 'High-altitude xeriscape design. Native plant gardens celebrating the sagebrush-steppe character. Rock garden design using local stone.'],
            ['Southern Plains & Texas (TX, OK, KS; Zones 5–9)', '18–35 in/year. Hot summers. Highly variable rainfall with periodic severe drought. Clay and caliche soils.', 'Texas live oak, cedar elm, desert willow, Mexican plum, Lacey oak', 'Texas sage (Leucophyllum frutescens), blackfoot daisy, fall aster, agarita, autumn sage', 'Sideoats grama (TX state grass), little bluestem, Gulf muhly, buffalograss, Texas bluebonnet (annual)', 'Prairie restoration design. Rain garden design capturing summer thunderstorm runoff. Texas Hill Country limestone garden character.'],
            ['Great Plains (NE, KS, SD, ND, MN; Zones 3–6)', '15–25 in/year. Cold winters. Hot dry summers. High winds. Clay soils. Native grassland ecology.', 'Plains cottonwood (near water), bur oak, hackberry, American elm where disease-free', 'Lead plant, aromatic aster, purple prairie clover, wild bergamot, prairie coneflower, smooth sumac', 'Buffalo grass, blue grama, big bluestem, sideoats grama, little bluestem, prairie dropseed', 'Native prairie restoration is the highest-expression xeriscape for this region. Prairie gardens of native grasses and forbs are ecologically rich, visually dramatic, and require near-zero supplemental water once established.'],
            ['Southeast (FL, GA, AL, MS, LA, SC, NC; Zones 7–9)', '40–60+ in/year, but periodic summer drought inland. Humidity. Sandy coastal or clay piedmont soils.', 'Live oak, bald cypress (wet areas), longleaf pine, sparkleberry', 'Saw palmetto, beautyberry, native azaleas, native yucca, Gulf muhly, gopher apple', 'Wiregrass, longleaf pine understory wildflowers, blanket flower, black-eyed Susan, native morning glory', 'Longleaf pine savanna restoration. Native plant gardens using drought-tolerant southeastern natives. Rain garden design for clay piedmont soils.'],
            ['Mid-Atlantic & Northeast (VA, MD, NJ, NY, PA; Zones 4–7)', '35–50 in/year, but increasing summer drought. Clay piedmont soils. Sandy coastal soils.', 'Eastern red cedar, hackberry, river birch (riparian), serviceberry, native oaks (Q. rubra, Q. alba)', 'Little bluestem, aromatic aster, mountain mint, native coneflower, anise hyssop, bayberry', 'Pennsylvania sedge (Carex pensylvanica — excellent shade lawn alternative), prairie dropseed, bunchflowers', 'Lawn replacement with native plant gardens. Pennsylvania sedge as a no-mow, no-water lawn alternative for shade. Rain garden design for suburban properties with flooding issues.'],
          ],
        },
      ],
    },

    // ─── SECTION 9: LAWN ALTERNATIVES ────────────────────────────────────────
    {
      id: 'lawn-alternatives',
      title: 'Section 9: Lawn Alternatives — Beyond the Turf Monoculture',
      blocks: [
        {
          type: 'p',
          text: 'The American lawn is the single largest irrigated crop in the United States — more acreage than any food crop. Across the US, lawn irrigation accounts for approximately one-third of all residential water use, rising to 70 percent or more in arid western cities. Converting all or part of a conventional lawn to xeriscape alternatives is the highest-impact action available to most homeowners and the most financially rewarding.',
        },
        {
          type: 'table',
          headers: ['Alternative', 'Zones', 'Mowing', 'Water Need', 'Traffic Tolerance', 'Best Climate'],
          rows: [
            ['Buffalo Grass (lawn type)', '3–9', 'Optional (4–6 inches natural look; mow 2–3x/year if desired)', 'Very low — 25–50% of bluegrass', 'Moderate', 'Great Plains, Midwest, southern Rockies. Not suited to Southeast or Pacific coast.'],
            ['Blue Grama (lawn type)', '3–9', 'Optional; creates charming unmowed meadow', 'Very low', 'Moderate', 'Rocky Mountain region, Great Plains, Southwest at elevation. Excellent companion to buffalo grass.'],
            ['Pennsylvania Sedge (Carex pensylvanica)', '3–8', 'Optional — fine without mowing; can be mowed 1x/year', 'Very low once established', 'Light', 'Eastern US, particularly shaded lawns under trees. One of the finest no-mow lawn alternatives for shade.'],
            ['Creeping Red Fescue', '3–7', 'Yes but infrequently (every 3–4 weeks at 3–4 inches)', 'Low — 60–70% of bluegrass', 'Moderate', 'Pacific Northwest, northern US, high-elevation areas where cool-season lawn is preferred.'],
            ['Native Wildflower Meadow', 'Varies', 'Once per year (late winter/early spring)', 'Very low once established', 'None – low (paths through the meadow)', 'All regions with regionally appropriate native seed mixes. The most ecologically valuable lawn alternative.'],
            ['Creeping Thyme', '3–8', 'None required', 'Very low', 'Moderate (tolerates light foot traffic)', 'Full-sun positions in all but the hottest climates. Between stepping stones, on slopes, and in areas too small or irregular to mow.'],
            ['Decomposed Granite with Plants', 'All zones', 'None', 'Very low (plants only)', 'None (paths excepted)', 'Southwest, California, Rocky Mountain. The most water-efficient lawn alternative where ecological alternatives are not suited to the climate.'],
          ],
        },
        {
          type: 'tip',
          emoji: '🏘️',
          text: 'HOA Considerations: Many HOAs and municipalities have historically required conventional turf lawns. This is changing rapidly. Many western states have passed laws limiting HOAs\' ability to require turf, and some actively require conversion. Before converting a front lawn, check your HOA\'s CC&Rs (many have updated their standards to allow xeriscape), local ordinances, and your state\'s water law. Several states (California, Colorado, Nevada, Texas, and others) have passed legislation protecting homeowners\' right to xeriscape.',
        },
      ],
    },

    // ─── SECTION 10: SEASONAL CARE & TROUBLESHOOTING ─────────────────────────
    {
      id: 'seasonal-care',
      title: 'Section 10: Seasonal Care & Troubleshooting',
      blocks: [
        {
          type: 'p',
          text: 'A xeriscape is not a no-maintenance landscape — it is a different-maintenance landscape. The work shifts from weekly mowing, frequent irrigation, and regular fertilizing to seasonal mulch replenishment, selective pruning, and annual assessment of the design. Most established xeriscapes require 50 to 75 percent less maintenance time than the conventional landscapes they replace.',
        },
        {
          type: 'h3',
          text: 'The Xeriscape Annual Calendar',
        },
        {
          type: 'table',
          headers: ['Season', 'Care Tasks', 'Irrigation Guidance', 'Design Assessment'],
          rows: [
            ['Late Winter / Early Spring (before last frost)', 'Cut back ornamental grasses to 4–6 inches before new growth emerges. Remove dead stems from perennials left for winter wildlife. Test soil in areas where plants have been struggling. Order seeds for native wildflower areas.', 'Begin establishment irrigation for new plantings as soon as soil is workable. Check drip system for winter damage (cracked emitters, frozen lines). Flush and test before turning on seasonally.', 'Walk the landscape and note winter damage, plants that did not survive, and gaps in the design. This is the moment to add plants to fill gaps before summer heat arrives.'],
            ['Spring (after last frost)', 'Replenish mulch to full depth (3–4 inches) before summer heat. This is the most important single maintenance task of the year. Divide overcrowded perennials. Plant new xeric plants — spring is the best planting time in most of the US.', 'Program irrigation controller for spring schedule (less frequent than summer). Check all emitters for clogs or damage. For new plantings, begin deep watering schedule (1–2x per week, soaking deeply each time).', 'Assess the design with fresh spring eyes. Struggling plants in a xeriscape are usually in the wrong location or wrong hydrozone, not simply watered insufficiently.'],
            ['Summer (peak heat and drought season)', 'Monitor new plantings closely — the first summer is the critical establishment period. Established plants may show temporary wilting during extreme heat — wait to see if they recover overnight before increasing irrigation. Deadhead perennials if desired but leave some seedheads for birds.', 'Switch to summer schedule on controller. For established xeric zones, run only during extended drought (2+ weeks without rain). For transitional zones, water deeply every 7–14 days during peak heat.', 'The summer drought test reveals which plants are truly adapted and which are struggling. Note plants that require more water than expected — candidates for relocation to a higher-water zone or replacement.'],
            ['Fall (after first frost)', 'Fall is the best planting season in warm climates (Zone 7+) — plants establish roots through mild winter without heat stress. Plant shrubs and trees purchased for fall planting. Apply fresh mulch after the first hard frost to insulate root systems.', 'Reduce irrigation frequency as temperatures cool. Established plants need very little water in fall. New fall plantings need consistent moisture through the first winter. Winterize irrigation in freeze climates.', 'The fall color display from xeriscape plants — ornamental grasses, native asters, sumac, bluestems — often exceeds the conventional landscape it replaced. Note: are there enough fall-color plants? Sufficient winter interest?'],
            ['Winter', 'Leave ornamental grass clumps and perennial seedheads standing for bird food and wildlife cover. Protect marginally hardy plants with a fresh mulch layer after hard freeze. Inspect drip irrigation lines for freeze damage in cold climates.', 'No irrigation for established plants in most climates. New plantings in mild-winter climates (Zone 8+) may need occasional deep watering during extended dry periods.', 'Winter reveals the structural bones of the xeriscape. A well-designed xeriscape should look intentional and beautiful in winter — not just in summer bloom.'],
          ],
        },
        {
          type: 'h3',
          text: 'Troubleshooting Common Xeriscape Problems',
        },
        {
          type: 'table',
          headers: ['Problem', 'Likely Cause', 'Solution'],
          rows: [
            ['Drought-tolerant plants dying during establishment', 'Insufficient deep watering during the critical first-season establishment period; or overwatering causing root rot in poorly drained soil', 'During establishment, water deeply (12–18 inches down) once or twice per week. Never shallow-water. Check drainage — if water pools around the plant, drainage is the problem. Plant on a raised mound if needed.'],
            ['Drip emitters clogging frequently', 'Sediment in water supply; biofilm growth in warm climates; scale buildup in hard water areas', 'Install a filter at the water connection point and clean it regularly. Flush the system seasonally. Replace clogged emitters — they are inexpensive. In very hard water areas, use pressure-compensating emitters with larger openings.'],
            ['Weeds proliferating in mulched areas', 'Mulch depth insufficient (less than 3 inches); landscape fabric has degraded; wind-blown seeds germinating on top of mulch', 'Replenish mulch to 3–4 inch depth. Hand-pull weeds before they set seed. In areas with persistent weed pressure, switch from organic to inorganic mulch (gravel or DG) which does not create a seedbed on its surface.'],
            ['Native plants not performing as expected', 'Wrong plant for the specific microclimate; inadequate establishment watering; soil conditions too different from the plant\'s native habitat', 'Most native plants are regional specialists — a Texas native may not perform well in Georgia. Choose plants native to your specific climate, soil, and rainfall zone. Consult your state\'s native plant society for regionally specific recommendations.'],
            ['Ornamental grasses dying out in center', 'The natural life cycle of most clumping grasses; also caused by overwatering or poor drainage', 'Divide the clump in spring (warm-season grasses) or fall (cool-season): dig up the entire clump, discard the dead center, divide healthy outer portions into fist-sized sections, and replant. Most grasses benefit from division every 3–5 years.'],
            ['Xeriscape looking sparse or unfinished', 'Insufficient initial plant density; plants not yet at mature size; mulch coverage creating a "bare" look', 'Fill the gaps in years 1–2 with fast-growing annual wildflowers (California poppy, desert marigold, zinnia) while permanent plants establish. A xeriscape that looks sparse in year one typically looks full and beautiful in year three.'],
            ['Water bills not decreasing despite xeriscape conversion', 'Irrigation system programming not adjusted after conversion; oasis zone being over-irrigated; controller not accounting for rain events', 'Audit the irrigation system with a water meter. Check that all irrigation zones correspond to correct hydrozone plant communities. Consider a smart controller with ET adjustment. Check for leaks in the drip system (wet spots in dry weather, or a meter that runs when all zones are off).'],
          ],
        },
        { type: 'image', src: '/guides/xeriscape/ornamental-grasses-fall-xeriscape.jpg', alt: 'Ornamental grasses with golden fall color in a mature xeriscape garden', caption: 'A xeriscape is different-maintenance, not no-maintenance — the annual mulch refresh alone can cut summer watering needs by half.' },
        {
          type: 'tip',
          emoji: '🌵',
          text: 'The Xeriscape Mindset: Xeriscape design asks for a different relationship with your landscape. Instead of imposing a water-intensive vision on a dry site and fighting the climate continuously to maintain it, xeriscape starts by asking: what does this place want to be? The answers point toward landscapes of extraordinary local character — the blue-silver sage gardens of the Great Basin; the red-gold wildflower meadows of the southern Plains after summer thunderstorms; the sculptural cactus-and-palo verde gardens of the Sonoran desert; the native bunchgrass and coneflower prairies of the Midwest. Begin with one area. Remove a strip of lawn. Plant three drought-tolerant natives. Mulch deeply. Water through establishment and then back away. The plant that thrives beyond expectation — that observation is where xeriscape becomes not a design style but a philosophy.',
        },
        {
          type: 'p',
          text: '"Work with the climate. The landscape that belongs here is always more beautiful than the one imposed upon it."',
        },
      ],
    },
  ],
}
