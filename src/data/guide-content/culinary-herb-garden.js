export const culinaryHerbGardenContent = {
  id: 'culinary-herb-garden',
  hero: {
    emoji: '🍽️',
    title: 'Culinary Herb Garden',
    subtitle: 'The essential kitchen herbs — how to grow, harvest, and preserve them',
  },
  intro:
    'A culinary herb garden is the most practical garden you can grow. Snipping fresh basil onto a pizza, pinching thyme into a braise, or tucking mint into a cocktail — the distance between your garden and your kitchen collapses entirely. Herbs are forgiving, compact, and disproportionately rewarding: a single well-tended basil plant produces more leaves than most households use in a summer. This guide covers the ten essential kitchen herbs, how to grow them together or separately, how to harvest without harming the plant, and how to preserve the surplus.',

  sections: [
    {
      id: 'essential-herbs-overview',
      title: 'The Essential Kitchen Herbs at a Glance',
      blocks: [
        {
          type: 'p',
          text: 'These ten herbs cover the vast majority of everyday cooking needs — from Mediterranean roasts to Asian sauces, fresh salads to baked breads. They span annual and perennial life cycles, so understanding which return each year shapes how you design and maintain your garden.',
        },
        {
          type: 'table',
          headers: ['Herb', 'Type', 'Sunlight', 'Water', 'USDA Zones (Perennial)', 'Flavor Profile', 'Primary Culinary Uses'],
          rows: [
            ['Basil', 'Annual', 'Full sun (6+ hrs)', 'Moderate', 'Annual everywhere', 'Sweet, clove-like, peppery', 'Italian, Thai, pesto, tomatoes, pizza'],
            ['Parsley', 'Biennial (grown annual)', 'Full sun / part shade', 'Moderate', 'Annual everywhere', 'Bright, grassy, mild', 'Garnish, tabbouleh, chimichurri, stocks'],
            ['Rosemary', 'Tender perennial', 'Full sun (6+ hrs)', 'Low', 'Zones 7–11 (grow as annual colder)', 'Piney, resinous, woodsy', 'Roasted meats, bread, potatoes, oils'],
            ['Thyme', 'Hardy perennial', 'Full sun (6+ hrs)', 'Low', 'Zones 4–9', 'Earthy, floral, slightly minty', 'Soups, stews, roasts, eggs, butter'],
            ['Oregano', 'Hardy perennial', 'Full sun (6+ hrs)', 'Low', 'Zones 5–10', 'Pungent, peppery, slightly bitter', 'Pizza, pasta, Greek dishes, marinades'],
            ['Chives', 'Hardy perennial', 'Full sun / part shade', 'Moderate', 'Zones 3–9', 'Mild onion, grassy', 'Eggs, cream cheese, soups, potatoes'],
            ['Mint', 'Hardy perennial', 'Part shade (tolerates sun)', 'Moderate–high', 'Zones 3–9', 'Cool, sweet, menthol', 'Drinks, desserts, lamb, sauces, salads'],
            ['Cilantro', 'Annual (cool-season)', 'Full sun / part shade', 'Moderate', 'Annual everywhere', 'Citrusy, bright, distinctive', 'Mexican, Asian, Indian, salsa, guacamole'],
            ['Sage', 'Hardy perennial', 'Full sun (6+ hrs)', 'Low', 'Zones 4–8', 'Savory, musky, earthy', 'Brown butter, stuffing, pork, pasta, beans'],
            ['Dill', 'Annual (cool-season)', 'Full sun (6+ hrs)', 'Moderate', 'Annual everywhere', 'Anise-like, fresh, tangy', 'Pickles, fish, eggs, potatoes, yogurt sauces'],
          ],
        },
        {
          type: 'tip',
          emoji: '🌿',
          text: 'Annuals (basil, cilantro, dill) must be replanted each year but grow quickly from seed. Perennials (thyme, oregano, chives, mint, sage, rosemary) return each season once established and often spread — giving you more plant for less effort over time.',
        },
      ],
    },
    {
      id: 'planning-and-design',
      title: 'Planning Your Culinary Herb Garden',
      blocks: [
        {
          type: 'p',
          text: "The most important design decision is location: herbs need light. Most kitchen herbs originate from the Mediterranean basin — a region of long sunny days, dry summers, and lean soils. They evolved to tolerate drought and neglect far better than shade. Situate your herb garden as close to your kitchen door as possible; research consistently shows that proximity is the single greatest predictor of whether a cook actually harvests fresh herbs.",
        },
        {
          type: 'h3',
          text: 'In-Ground Beds',
        },
        {
          type: 'p',
          text: "A dedicated in-ground herb bed 4 feet wide (reachable from both sides without stepping in) and 8–12 feet long accommodates all ten essential herbs comfortably. Good drainage is critical — most herbs will rot in waterlogged soil. Amend heavy clay with 3–4 inches of compost and coarse sand worked in to a depth of 12 inches. Slightly raised beds naturally improve drainage.",
        },
        {
          type: 'h3',
          text: 'Raised Beds',
        },
        {
          type: 'p',
          text: "A 4×8-foot raised bed filled with a mix of topsoil, compost, and coarse sand (roughly 60/30/10) is the easiest way to create ideal herb conditions regardless of your native soil. Raised beds warm faster in spring (earlier planting), drain freely, and remain weed-suppressed under a mulch of straw or wood chips. Cedar and pine are good material choices; cedar resists rot naturally.",
        },
        {
          type: 'h3',
          text: 'Container Growing',
        },
        {
          type: 'p',
          text: "Herbs excel in containers — a 12-inch pot holds a single specimen beautifully; a 24-inch pot or half-barrel handles three to four compatible herbs. Use a well-draining potting mix (not garden soil, which compacts). Containers dry out faster than ground beds and require more frequent watering — check daily in summer heat. Terracotta and unglazed clay pots breathe better than plastic, reducing root rot risk.",
        },
        {
          type: 'tip',
          emoji: '⚠️',
          text: 'Mint is best grown in its own container, always. It spreads aggressively via underground rhizomes and will colonize a shared bed within two seasons, crowding out every other herb. A 12-inch pot sunk into the ground (with the rim above soil level) contains it while keeping it accessible.',
        },
        {
          type: 'table',
          headers: ['Growing Method', 'Best For', 'Key Advantage', 'Main Challenge'],
          rows: [
            ['In-ground bed', 'Perennial herbs (thyme, oregano, sage, chives, rosemary)', 'Low maintenance once established; herbs spread naturally', 'Drainage issues in clay; harder to control spreaders'],
            ['Raised bed', 'All herbs, especially annuals and mixed plantings', 'Perfect drainage; easy to customize soil; warms early', 'Requires building or purchasing; dries faster than ground'],
            ['Containers', 'Mint (alone), apartment/patio growing, tender perennials', 'Total control; moveable; wintering tender herbs indoors', 'Frequent watering; nutrients leach faster; smaller yield'],
            ['Window box', 'Chives, thyme, parsley, basil (short-season)', 'Ultra-convenient harvest; indoor/outdoor flexible', 'Limited root depth; dries very quickly'],
          ],
        },
      ],
    },
    {
      id: 'growing-each-herb',
      title: 'Growing Each Herb: Profiles & Tips',
      blocks: [
        {
          type: 'h3',
          text: '🌿 Basil',
        },
        {
          type: 'p',
          text: "Basil is the quintessential summer annual. It demands heat — do not transplant until nighttime temperatures reliably stay above 50°F. Cold stress triggers early bolting. Basil grows well from seed (germination in 5–7 days at 70°F) or transplant. Space plants 12 inches apart; they grow into full, bushy specimens with generous light. Pinch out the central flower spike the moment it appears — this redirects the plant's energy into leaf production and extends the harvest by weeks. Left to flower, basil rapidly becomes bitter and woody.",
        },
        {
          type: 'list',
          items: [
            'Best varieties for cooking: \'Genovese\' (classic pesto, large leaves), \'Sweet Basil\' (all-purpose), \'Thai Basil\' (anise flavor, holds up in stir-fries), \'Lemon Basil\' (citrus notes, excellent with fish), \'Purple Ruffles\' (ornamental + edible)',
            'Watering: Keep soil evenly moist but never soggy. Water at the base — wet foliage promotes fungal disease. Basil wilts dramatically when dry but recovers quickly if watered promptly.',
            'Fertilize: A light application of balanced fertilizer (10-10-10) or compost tea every 3–4 weeks keeps basil producing aggressively. Too much nitrogen produces lush leaves with reduced flavor intensity.',
            'Common problem: Fusarium wilt — sudden wilting with brown streaks on stems. No cure; remove and discard the plant, do not compost. Choose resistant varieties (\'Nufar\', \'Eleonora\') in gardens with a history of the disease.',
          ],
        },
        {
          type: 'h3',
          text: '🌿 Parsley',
        },
        {
          type: 'p',
          text: "Parsley is a biennial that gardeners treat as an annual — in its second year it flowers, sets seed, and declines, so most cooks replant fresh each spring. Flat-leaf (Italian) parsley has superior flavor for cooking; curly parsley is milder and better as a garnish. Parsley seed germinates slowly — 14–21 days — because of a germination inhibitor in the seed coat. Soaking seeds in warm water for 24 hours before planting speeds germination. Direct-sow 3–4 weeks before last frost, or start transplants 8–10 weeks ahead indoors.",
        },
        {
          type: 'list',
          items: [
            'Tolerates partial shade better than most herbs — useful for garden spots with afternoon shadow.',
            'Harvest outer stems first, cutting at the base. The central growing crown regenerates quickly.',
            'Parsley is a host plant for black swallowtail butterfly caterpillars — consider planting extra for wildlife.',
          ],
        },
        {
          type: 'h3',
          text: '🌿 Rosemary',
        },
        {
          type: 'p',
          text: "Rosemary is a woody perennial shrub that thrives with neglect once established. It detests wet roots — in Zones 7–11, plant it in well-drained soil and step back. In Zones 6 and colder, grow rosemary in containers and bring it indoors for winter (a sunny south-facing window works; avoid radiator heat, which dries it too fast). Rosemary grows slowly from seed; start from a nursery transplant or stem cutting. After 2–3 seasons, a rosemary plant becomes large enough to harvest heavily — cutting stems up to 4 inches long without harm.",
        },
        {
          type: 'list',
          items: [
            'Best upright varieties for cooking: \'Tuscan Blue\', \'Miss Jessopp\'s Upright\', \'Arp\' (one of the hardiest, to Zone 6)',
            'Prostrate (trailing) varieties like \'Huntington Carpet\' are ornamental and edible but produce less harvestable stem.',
            'Indoor overwintering tip: Reduce watering significantly in winter — rosemary needs much less water than in summer. The most common cause of death in overwintered rosemary is overwatering, not cold.',
          ],
        },
        {
          type: 'h3',
          text: '🌿 Thyme',
        },
        {
          type: 'p',
          text: "Thyme is one of the easiest perennial herbs to grow — low water needs, excellent drought tolerance, and hardy to Zone 4. It forms a low mat and works as a ground cover between stepping stones or along bed edges, releasing fragrance when brushed. Common thyme (Thymus vulgaris) has the strongest culinary flavor. Lemon thyme (T. citriodorus) is excellent with fish and poultry. After 3–4 seasons, thyme plants become woody at the base; cut them back by one-third in early spring to rejuvenate them, or divide and replant with young outer sections.",
        },
        {
          type: 'h3',
          text: '🌿 Oregano',
        },
        {
          type: 'p',
          text: "Culinary oregano (Origanum vulgare hirtum — Greek or Italian oregano) has far superior flavor to common ornamental oregano, which is often flavorless. Flavor intensifies as the plant matures and is strongest just before flowering — the ideal time to harvest for drying. Oregano is drought-tolerant and thrives in slightly poor, well-drained soil. Rich, moist soil produces lush growth but diluted flavor. Cut stems back by half after the first flush of flowers to encourage a second harvest and prevent the plant from becoming too woody.",
        },
        {
          type: 'h3',
          text: '🌿 Chives',
        },
        {
          type: 'p',
          text: "Chives are among the most low-maintenance herbs in the garden — they emerge reliably each spring, tolerate moderate shade, and self-seed readily. The purple flowers that appear in late spring are edible and make a beautiful addition to salads. Snip leaves to within 2 inches of the ground when harvesting; the plant regrows quickly. Divide clumps every 2–3 years in spring or fall to maintain vigor — a single purchased plant becomes a large clump within two seasons.",
        },
        {
          type: 'list',
          items: [
            'Garlic chives (Allium tuberosum) have flat leaves and white flowers with a mild garlic flavor — excellent in Asian cooking.',
            'Deadhead flowers after bloom if you want to limit self-seeding; leave them if you welcome naturalization.',
          ],
        },
        {
          type: 'h3',
          text: '🌿 Mint',
        },
        {
          type: 'p',
          text: "Mint is the easiest herb to grow and the easiest to lose control of. Given space, it will spread to fill it. Grow in a dedicated container or in a buried pot. Flavor varies significantly by variety — spearmint (Mentha spicata) is classic for cooking and beverages; peppermint (M. × piperita) is more intense and medicinal; chocolate mint and apple mint offer novelty. Mint prefers slightly moister conditions than most Mediterranean herbs and tolerates partial shade, making it one of the few herbs that performs well in less-than-ideal spots.",
        },
        {
          type: 'h3',
          text: '🌿 Cilantro',
        },
        {
          type: 'p',
          text: "Cilantro is a cool-season annual that bolts (flowers and sets seed) rapidly in summer heat. The key to a continuous harvest is succession planting: sow a new batch of seeds every 3–4 weeks from early spring through early summer, and again in late summer into fall. Direct seeding outperforms transplanting — cilantro dislikes root disturbance. When it does bolt, the seeds (coriander) are a separate spice worth harvesting: cut the seed heads when they turn tan, paper-bag them, and let them dry.",
        },
        {
          type: 'list',
          items: [
            'Slow-bolt varieties like \'Calypso\' and \'Santo\' extend the harvest window in warm weather.',
            'Cilantro performs best in fall in Zones 7–11 — planted in late August, it produces abundantly through winter and early spring.',
          ],
        },
        {
          type: 'h3',
          text: '🌿 Sage',
        },
        {
          type: 'p',
          text: "Common culinary sage (Salvia officinalis) is a hardy perennial shrub with strong, distinctive flavor that intensifies when leaves are dried or cooked in fat. Fresh sage is more subtle; cooked in brown butter it becomes rich and nutty. Sage prefers lean, well-drained soil — too much moisture causes root rot. Like rosemary, it becomes woody over time; cut it back by one-third each spring to keep it productive. In Zones 4–6, mulch the crown heavily in fall for winter protection.",
        },
        {
          type: 'h3',
          text: '🌿 Dill',
        },
        {
          type: 'p',
          text: "Dill is a cool-season annual that bolts in summer heat, similar to cilantro. Direct-sow in early spring (it tolerates light frost) or in late summer for a fall harvest. Do not transplant — dill's taproot makes it sensitive to disturbance. Succession sow every 3–4 weeks for continuous supply. Both the feathery leaves (dill weed) and seeds are used in cooking, so allowing some plants to go to seed is worthwhile. Note: dill and fennel are cross-pollinating — do not grow them near each other, as the result is 'fennel-dill' with inferior flavor of both.",
        },
      ],
    },
    {
      id: 'harvesting',
      title: 'Harvesting: How, When, and How Much',
      blocks: [
        {
          type: 'p',
          text: 'Proper harvesting is what keeps herb plants producing rather than declining. The principle for most herbs is the same: harvest the top one-third of growth, never more, and do so in a way that encourages branching. For woody herbs (rosemary, thyme, oregano, sage), cut just above a leaf node — the plant will send out two new shoots from that point.',
        },
        {
          type: 'table',
          headers: ['Herb', 'When to Harvest', 'How to Harvest', 'Maximum Per Session', 'Peak Flavor Timing'],
          rows: [
            ['Basil', 'Once plant has 6+ leaf pairs', 'Pinch just above a leaf node; pinch flower buds immediately', '1/3 of plant', 'Before flowering; midsummer morning'],
            ['Parsley', 'Once 6–8 stems present', 'Cut outer stems at the base', '1/3 of stems', 'Any time; flavor is consistent'],
            ['Rosemary', 'After plant is established (1 season)', 'Cut 4–6 inch stem tips with sharp scissors', '1/3 of new growth only', 'Just before flowering'],
            ['Thyme', 'Once sprigs reach 4–5 inches', 'Cut stem tips, leaving lower woody portion', '1/3 of plant', 'Just before or during bloom'],
            ['Oregano', 'Once 4–6 inches tall', 'Cut stems back by half', '1/2 of plant height', 'Just before flowering in summer'],
            ['Chives', 'Once 6 inches tall', 'Cut leaves to 2 inches above soil', 'Entire top portion', 'Any time; regrows in 2–3 weeks'],
            ['Mint', 'Once 6–8 inches tall', 'Cut stems back to 1/3 of height', '1/2 of plant', 'Before flowering; morning harvest'],
            ['Cilantro', 'Once 4–6 inches tall', 'Cut outer leaves and stems at base', '1/3 of plant', 'Young leaves; harvest before bolting'],
            ['Sage', 'Second season onwards', 'Cut young stems; leave woody base', '1/3 of new growth', 'Just before flowering; fall harvest'],
            ['Dill', 'Once 8+ inches tall', 'Snip feathery leaves; or cut entire plant', '1/3 of plant', 'Before flower heads open'],
          ],
        },
        {
          type: 'tip',
          emoji: '⏰',
          text: 'Harvest herbs in the morning after any dew has dried but before midday heat. Essential oil concentration — which drives flavor and aroma — peaks in the morning. Herbs harvested mid-afternoon after hours of hot sun have measurably less flavor than morning-harvested herbs from the same plant.',
        },
      ],
    },
    {
      id: 'preserving',
      title: 'Preserving Your Herb Harvest',
      blocks: [
        {
          type: 'p',
          text: 'Most culinary herbs produce more than any household can use fresh during peak season. Preservation allows you to stockpile summer abundance for winter cooking. Different herbs suit different preservation methods based on their moisture content and flavor chemistry.',
        },
        {
          type: 'h3',
          text: 'Air Drying',
        },
        {
          type: 'p',
          text: "Best for: rosemary, thyme, oregano, sage, mint, dill (seed heads and leaves), lavender. Bundle 8–12 stems loosely with a rubber band (rubber bands contract as stems shrink). Hang upside down in a warm, dry, well-ventilated spot out of direct sun — a pantry, barn, or covered porch works well. Drying takes 1–3 weeks depending on humidity. Leaves are ready when they crumble easily between fingers. Strip from stems and store whole (not crumbled) in airtight glass jars — crumble just before using to preserve volatile oils. Dried herbs store well for 1 year; after that, flavor diminishes significantly.",
        },
        {
          type: 'h3',
          text: 'Freezing',
        },
        {
          type: 'p',
          text: "Best for: basil, parsley, chives, cilantro, mint — tender herbs with high moisture content that do not dry well. Two methods work well: (1) Chop herbs and pack into ice cube trays, top with olive oil or water, freeze solid, then transfer cubes to a freezer bag. Drop a cube directly into soups, sauces, or sautés. (2) Freeze whole leaves in a single layer on a baking sheet until solid, then transfer to a bag. Frozen herbs are soft when thawed and best used in cooked applications, not as fresh garnish.",
        },
        {
          type: 'h3',
          text: 'Herb-Infused Oils and Vinegars',
        },
        {
          type: 'p',
          text: "Herbs infuse beautifully into olive oil and vinegar, capturing their character in a shelf-stable form. For infused oil: lightly bruise fresh herb sprigs, place in a sterilized jar, cover completely with good-quality olive oil, and store in the refrigerator for up to 2 weeks (fresh herb oils can harbor botulism at room temperature — always refrigerate and use within 2 weeks, or use dried herbs for room-temperature oils). For infused vinegar: white wine or apple cider vinegar works well; steep 2–3 weeks at room temperature; strain and bottle. Excellent for salad dressings.",
        },
        {
          type: 'h3',
          text: 'Herb Salt and Herb Butter',
        },
        {
          type: 'p',
          text: "Herb salt: blend finely chopped fresh herbs with coarse kosher salt in a 1:4 ratio (herbs:salt) by volume. Spread on a baking sheet to dry for 24 hours, then jar and store at room temperature for 6+ months. Excellent finishing salt for roasts, eggs, or pasta water. Herb butter (compound butter): soften unsalted butter, mix in finely chopped herbs, roll in parchment, and freeze in a log. Slice discs directly onto cooked steaks, fish, or roasted vegetables. Lasts 3 months in the freezer.",
        },
        {
          type: 'table',
          headers: ['Herb', 'Best Preservation Method(s)', 'Avoid'],
          rows: [
            ['Basil', 'Freeze in oil (cubes); pesto (freeze pesto without cheese)', 'Air drying — turns black and loses flavor'],
            ['Parsley', 'Freeze; herb salt', 'Drying — loses most flavor'],
            ['Rosemary', 'Air dry; herb-infused oil; herb salt', 'Freezing — texture becomes mushy'],
            ['Thyme', 'Air dry; freeze', 'Nothing to avoid — preserves well both ways'],
            ['Oregano', 'Air dry — flavor actually improves', 'Freezing — unnecessary; drying is superior'],
            ['Chives', 'Freeze (chopped in cubes)', 'Drying — loses flavor almost entirely'],
            ['Mint', 'Air dry; freeze in water cubes; mint syrup', 'Infused oil — flavor does not transfer well'],
            ['Cilantro', 'Freeze in oil or water cubes; chimichurri (freeze)', 'Drying — loses nearly all flavor'],
            ['Sage', 'Air dry; herb butter; fry in brown butter and freeze', 'Nothing significant'],
            ['Dill', 'Air dry (seeds and leaves); freeze dill weed', 'Nothing significant'],
          ],
        },
      ],
    },
    {
      id: 'companion-planting',
      title: 'Companion Planting with Herbs',
      blocks: [
        {
          type: 'p',
          text: 'Herbs do not merely produce food — they actively support the rest of your garden. Many culinary herbs repel pest insects, attract beneficial predators, and improve the vigor of neighboring plants. Integrating herbs throughout your vegetable beds (rather than isolating them in a separate herb garden) puts these benefits to work across the entire garden.',
        },
        {
          type: 'table',
          headers: ['Herb', 'Good Companions', 'Why It Helps', 'Keep Away From'],
          rows: [
            ['Basil', 'Tomatoes, peppers, asparagus', 'Repels aphids, spider mites, and thrips; may improve tomato flavor', 'Sage — they inhibit each other'],
            ['Parsley', 'Tomatoes, roses, asparagus', 'Attracts beneficial wasps and hoverflies that prey on aphids', 'Nothing significant'],
            ['Rosemary', 'Beans, brassicas, carrots', 'Repels bean beetles, cabbage moths, and carrot fly with aromatic oils', 'Cucumbers — may inhibit growth'],
            ['Thyme', 'Brassicas, strawberries, tomatoes', 'Repels cabbage worms; attracts pollinators; deters aphids', 'Nothing significant'],
            ['Oregano', 'Most vegetables generally', 'Strong scent confuses and deters many pest insects; attracts pollinators', 'Nothing significant'],
            ['Chives', 'Roses, carrots, tomatoes', 'Repels aphids and Japanese beetles; may deter carrot fly', 'Beans, peas — may suppress legumes'],
            ['Mint', 'Brassicas, tomatoes', 'Strongly repels aphids, cabbage moth, and rodents', 'Do not plant in the ground near anything — too invasive'],
            ['Cilantro', 'Spinach, anise, tomatoes', 'Attracts beneficial insects (especially parasitic wasps)', 'Fennel — cross-pollinates and ruins both flavors'],
            ['Sage', 'Brassicas, carrots, strawberries', 'Repels cabbage moths, carrot fly, and slugs', 'Basil, cucumbers'],
            ['Dill', 'Cabbage, lettuce, onions', 'Attracts beneficial wasps; host plant for swallowtail caterpillars', 'Fennel (cross-pollinates); avoid near tomatoes when flowering'],
          ],
        },
        {
          type: 'tip',
          emoji: '🐝',
          text: "Let a few herb plants flower each season rather than pinching every bloom. Herb flowers are among the best nectar sources for small beneficial insects — parasitic wasps, hoverflies, and lacewings — that prey on garden pests. Flowering thyme, oregano, dill, and fennel in particular are magnets for these allies. A garden with flowering herbs rarely needs pesticides.",
        },
      ],
    },
    {
      id: 'seasonal-calendar',
      title: 'Seasonal Calendar',
      blocks: [
        {
          type: 'p',
          text: 'This calendar uses Zone 7 as a reference point (last frost mid-April, first frost late October). Shift tasks 2–4 weeks earlier per zone warmer, later per zone cooler. Check your local frost dates before transplanting tender herbs outdoors.',
        },
        {
          type: 'table',
          headers: ['Month', 'Key Tasks'],
          rows: [
            ['January–February', 'Start basil, parsley, sage, and chives indoors under grow lights (8–10 weeks before last frost). Order seeds for cilantro, dill successions. Check overwintered rosemary and potted herbs — water sparingly.'],
            ['March', 'Direct-sow cilantro and dill outdoors (both tolerate light frost). Harden off parsley seedlings. Divide established chive clumps if overcrowded. Mulch perennial herb beds to retain moisture as soil thaws.'],
            ['April', 'Transplant parsley, chives, and sage after last frost risk. Continue hardening off basil indoors. Begin first cilantro and dill succession sow outdoors. Start thyme and oregano divisions or transplants.'],
            ['May', 'Transplant basil after nighttime temps reliably exceed 50°F. Plant rosemary outdoors (containers in Zone 6 and colder). Begin regular pinching of basil flower buds. Sow second cilantro succession.'],
            ['June', 'Harvest basil heavily; pinch any flowers immediately. Third cilantro sow (last effective succession in Zone 7 — too hot afterward). Harvest thyme and oregano before they bloom for drying.'],
            ['July–August', 'Basil peak season — harvest generously; make pesto; freeze in oil. Cilantro bolts — harvest seed (coriander) when tan. Dill may bolt — harvest dill weed; collect seeds. Perennial herbs slow in heat; light watering; hold fertilizer.'],
            ['September', 'Resume cilantro and dill sowings for fall harvest. Harvest sage heavily before first frost — flavor peaks in fall. Divide and replant thyme and oregano if needed. Cut basil before any frost threatens; make final pesto batches.'],
            ['October', 'Pot up rosemary for indoor overwintering before first hard frost. Cut back mint heavily; mulch roots. Harvest remaining herbs; dry or freeze. Clear annual herbs (basil, cilantro, dill) from beds after first frost.'],
            ['November–December', 'Apply 3-inch mulch over perennial herb crowns in Zone 5–6 for winter protection. Water rosemary indoors only when soil is dry 1 inch deep. Plan next year\'s layout; order seeds early for popular varieties.'],
          ],
        },
      ],
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting Common Problems',
      blocks: [
        {
          type: 'table',
          headers: ['Problem', 'Likely Cause', 'Solution'],
          rows: [
            ['Basil turns black or wilts after transplanting', 'Cold shock (below 50°F nights)', 'Transplant later; cover with row cover if cold snap expected; choose a warmer spot near a south-facing wall'],
            ['Herbs leggy and pale', 'Insufficient light', 'Relocate to full sun; supplement with grow lights for indoor herbs (14–16 hrs); do not fertilize — more light is the fix'],
            ['Rosemary dies suddenly indoors in winter', 'Overwatering; low humidity; root rot', 'Water only when soil is completely dry; improve air circulation; check for root rot; reduce watering immediately'],
            ['Mint escapes container', 'Root rhizomes grew through drainage holes', 'Check holes seasonally; use a pot within a pot; replace container with one that has fewer/smaller holes'],
            ['Cilantro and dill bolt immediately', 'Heat and long days', 'Plant earlier in spring or wait for fall; use shade cloth during hottest part of day; choose slow-bolt varieties'],
            ['Herbs dying in containers', 'Waterlogged soil; no drainage', 'Always use containers with drainage holes; use well-draining potting mix; never let pots sit in standing water'],
            ['Powdery white coating on leaves (powdery mildew)', 'Poor air circulation; humidity', 'Improve spacing; remove affected leaves; spray diluted neem oil; avoid overhead watering'],
            ['Tiny insects on stems (aphids)', 'Common on basil and mint especially', 'Knock off with water spray; apply neem oil; introduce ladybugs or encourage natural predators with nearby flowering herbs'],
          ],
        },
        {
          type: 'tip',
          emoji: '🌱',
          text: "The most common reason herb gardens fail is placing them too far from the kitchen. A beautiful herb bed at the far corner of the yard is rarely harvested. Herbs belong within steps of the back door — in window boxes, pots on the porch, or a small raised bed directly outside the kitchen. Convenience drives use, and use drives the regular cutting that keeps plants productive. Plant them close, harvest them often, and they will reward you all season long.",
        },
      ],
    },
  ],
}
