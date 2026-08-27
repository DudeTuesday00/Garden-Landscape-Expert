export const threeSistersContent = {
  id: 'three-sisters',
  hero: {
    emoji: '🌽',
    title: 'Three Sisters Garden',
    subtitle: 'The ancient Native American companion planting trio: corn, beans, and squash',
  },
  intro: "The Three Sisters garden is, at its heart, a story about relationships. Corn grows tall and strong, providing a living trellis for the beans. Beans fix atmospheric nitrogen from the air into the soil, feeding the nitrogen-hungry corn and squash. Squash sprawls across the ground, its broad leaves shading out weeds, cooling the soil, and retaining moisture for all three plants. Each sister gives something; each sister receives something. The whole is dramatically more productive and sustainable than any of the three grown separately.",
  sections: [
    {
      id: 'at-a-glance',
      title: 'The Three Sisters at a Glance',
      blocks: [
        {
          type: 'tip',
          emoji: '🌽',
          text: 'Corn, beans, and squash have been grown together by Indigenous peoples across North America for at least 3,000 years. The system emerged from thousands of seasons of patient observation — three species that support each other structurally, nutritionally, and chemically, together forming one of the most complete and nutritionally balanced food combinations in the plant world.',
        },
        {
          type: 'table',
          headers: ['The System', 'Corn', 'Beans', 'Squash'],
          rows: [
            ['Role in the trio', 'The tall sister — structural support and canopy', 'The nurturing sister — nitrogen fixer and vine climber', 'The protective sister — ground cover and moisture keeper'],
            ['What she gives', 'A trellis for climbing beans; shade at the mound base', 'Fixed nitrogen for soil; protein for harvest', 'Weed suppression; soil moisture retention; cooling shade'],
            ['What she needs', 'Nitrogen (from beans); pollination (plant in blocks)', 'Something to climb; well-drained soil', 'Space to sprawl; consistent moisture; warm soil'],
            ['Primary harvest', 'Fresh sweet corn, dry corn, popcorn, flint corn', 'Green beans (fresh), dry beans, shell beans', 'Summer squash (fresh), winter squash (storage), seeds'],
            ['Nutritional contribution', 'Carbohydrate, calories, B vitamins, fiber', 'Complete protein (with corn), amino acids, iron, folate', 'Vitamins A and C, potassium, beta-carotene, calories'],
            ['Season length', '60–100 days depending on type', '50–65 days (fresh); 80–100 days (dry)', '50–60 days (summer); 80–120 days (winter storage)'],
          ],
        },
        {
          type: 'tip',
          emoji: '🌿',
          text: 'The Three Sisters are not merely a traditional planting arrangement with sentimental value. Research consistently confirms what Indigenous farmers discovered millennia ago: beans grown with corn and squash fix more nitrogen than beans grown alone; corn grown with beans and squash produces higher yields than corn in monoculture; squash suppresses weeds more effectively than any mechanical weed control at garden scale. Growing the Three Sisters is simultaneously an act of agricultural efficiency, cultural appreciation, and participation in one of the oldest food-growing traditions in human history.',
        },
        { type: 'image', src: '/guides/three-sisters/corn-beans-squash-garden-mound.jpg', alt: 'A traditional garden mound with tall corn stalks, climbing bean vines, and sprawling squash leaves growing together', caption: 'Each sister gives something and receives something — the whole grows more productive than any of the three planted alone.' },
      ],
    },
    {
      id: 'history-ecology',
      title: 'History, Culture & Ecological Wisdom',
      blocks: [
        {
          type: 'p',
          text: "The Three Sisters planting system developed across many Indigenous nations of North America, with different tribes developing their own varieties and techniques suited to their specific climates, soils, and growing seasons. The system is most closely associated with the Haudenosaunee (Iroquois Confederacy), but versions were practiced from the northeastern woodlands to the desert Southwest, from the Great Plains to the Gulf Coast.",
        },
        {
          type: 'tip',
          emoji: '🌿',
          text: "In Haudenosaunee (Iroquois) tradition, the Three Sisters are understood as three inseparable young women who love each other deeply. Corn grows tall and straight; Bean clings to her, spiraling upward; Squash crouches at their feet, keeping them cool and protecting the ground around them. Many nations referred to the three crops together as sustainers of life — the foundation of the community's food supply, to be tended with care and gratitude.",
        },
        { type: 'h3', text: 'The Ecology — How It Actually Works' },
        {
          type: 'table',
          headers: ['🌽 Corn\'s Contributions', '🪴 Beans\' Contributions', '🍞 Squash\'s Contributions'],
          rows: [
            [
              'Provides vertical structure: a living trellis 5–8 feet tall that beans climb without additional support.',
              'Fixes atmospheric nitrogen via Rhizobium bacteria in root nodules — converts N2 gas into plant-available ammonia.',
              'Broad leaves create a living mulch that shades out weed seeds, dramatically reducing germination.',
            ],
            [
              'Creates canopy shade at the mound base, moderating soil temperature.',
              'A mature bean plant fixes 30–50 lbs of nitrogen per acre per season.',
              'Canopy shade cools the soil by 10–15 degrees in summer heat, slowing moisture evaporation.',
            ],
            [
              'Corn stalks anchor the mound against wind and erosion. After harvest, dried stalks continue supporting late-maturing bean vines.',
              'Bean leaves decompose quickly after frost, adding nitrogen-rich organic matter to soil.',
              'Prickly stems and leaves deter some ground-level pests including raccoons and rodents.',
            ],
          ],
        },
        { type: 'h3', text: 'The Nitrogen Fixation Story' },
        {
          type: 'list',
          items: [
            'What nitrogen fixation is: Legumes form a symbiotic relationship with Rhizobium bacteria in root nodules that converts atmospheric nitrogen gas into ammonia — a form plants can absorb and use.',
            'Why corn needs it: Corn is one of the most nitrogen-demanding crops in any garden. Without adequate nitrogen, corn grows slowly, produces pale yellow foliage, and yields poorly.',
            'The timing relationship: Beans must be well-established and actively growing for their root nodules to be producing significant nitrogen. This is why corn goes in first — beans are planted only after corn reaches 4–6 inches.',
            'Soil inoculation: Rhizobium bacteria may not be present in all soils. Purchase a legume inoculant specific to beans (Rhizobium phaseoli). Wet bean seeds slightly, apply the inoculant powder to coat the seeds, and plant immediately.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌿',
          text: 'Many of the corn, bean, and squash varieties developed by Indigenous farmers over centuries are maintained today by seed libraries and Indigenous-led seed organizations. Growing these varieties — Bloody Butcher flint corn, Hidatsa Shield Figure bean, Hopi Orange squash, Cherokee White Eagle corn — participates in the living continuation of agricultural heritage. Seed Savers Exchange, Native Seeds/SEARCH (Tucson, AZ), and the Cultural Conservancy all maintain collections of Indigenous-developed varieties.',
        },
        { type: 'image', src: '/guides/three-sisters/heirloom-corn-varieties-colorful.jpg', alt: 'Colorful heirloom corn cobs with red, blue, and white kernels displayed together', caption: 'Heirloom varieties bred for this exact companion system carry the stalk strength and vine vigor that make it work.' },
      ],
    },
    {
      id: 'variety-selection',
      title: 'Variety Selection — Choosing Your Three Sisters',
      blocks: [
        {
          type: 'p',
          text: "The varieties you choose for the Three Sisters garden significantly affect both the system's ecological function and your harvest. Traditional heirloom varieties were bred specifically for this companion planting system — they have the stalk strength, vine vigor, and ground-covering habit that make the system work optimally.",
        },
        { type: 'h3', text: '🌽 Corn Varieties' },
        {
          type: 'tip',
          emoji: '🌽',
          text: 'Corn is wind-pollinated. In a single row, most pollen blows away before reaching the silk. In a block planting (at least 4 rows wide), each plant is surrounded by others shedding pollen simultaneously. A Three Sisters planting with fewer than 12–16 corn plants risks significant pollination failure — resulting in partially-filled cobs. The minimum productive size is driven almost entirely by this corn pollination requirement.',
        },
        {
          type: 'table',
          headers: ['Variety', 'Type', 'Height', 'Days', 'Best For', 'Notes'],
          rows: [
            ['Bloody Butcher', 'Red flint / flour corn', '8–12 ft', '100–110 days', 'Traditional Three Sisters; dried corn; grinding', 'One of the most dramatic varieties. Vivid dark red-maroon kernels. Excellent stalk strength for bean support.'],
            ['Hopi Blue', 'Blue/purple flint corn', '5–7 ft', '80–100 days', 'Traditional Three Sisters; Southwest gardens', 'Deep blue-grey kernels. Drought-tolerant. More compact. Rich, nutty cornmeal flavor.'],
            ['Cherokee White Eagle', 'White flour corn', '7–9 ft', '90–100 days', 'Traditional Three Sisters; stone-ground cornmeal', 'High starch content; excellent for hominy. Vigorous grower.'],
            ['Glass Gem', 'Rainbow flint corn', '5–8 ft', '110 days', 'Ornamental; dried corn; gifts and display', 'One of the most visually spectacular varieties. Every ear is different.'],
            ['Stowell\'s Evergreen', 'White sweet corn (heirloom)', '6–8 ft', '80–95 days', 'Fresh eating; moderate Three Sisters use', 'One of the oldest sweet corn varieties (pre-1848). Adequate stalk strength.'],
            ['Country Gentleman', 'White sweet corn (heirloom)', '7–8 ft', '90–100 days', 'Fresh eating; Three Sisters', 'Irregular kernel arrangement (shoepeg) is distinctive. Good stalk strength. Rich, creamy flavor.'],
          ],
        },
        { type: 'h3', text: '🪴 Bean Varieties' },
        {
          type: 'p',
          text: "Pole beans are strongly preferred over bush beans for the Three Sisters system. The companion planting relationship depends on beans using corn as a trellis — a bush bean that doesn't climb loses the structural element of the relationship.",
        },
        {
          type: 'table',
          headers: ['Variety', 'Type', 'Days', 'Bean Color', 'Best For', 'Notes'],
          rows: [
            ['Rattlesnake Pole Bean', 'Pole / snap + dry', '60–75 days snap; 90 days dry', 'Green with purple streaks', 'Traditional Three Sisters; heat-tolerant', 'One of the best Three Sisters beans. Vigorous climber (to 8 ft). Tolerates heat and drought remarkably well.'],
            ['Cherokee Trail of Tears', 'Pole / snap + dry', '65–75 days snap; 90 days dry', 'Black (dry), green (fresh)', 'Traditional Three Sisters; historical preservation', 'Named for its survival in the forced relocation of the Cherokee people. Deeply significant historical variety.'],
            ['Hidatsa Shield Figure', 'Pole / dry bean', '90–100 days', 'Tan with brown shield marking', 'Traditional Three Sisters; dry bean cooking', 'Developed by the Hidatsa people of the upper Missouri River. Very vigorous climber.'],
            ['Scarlet Runner Bean', 'Pole / snap + dry', '60–70 days fresh; 90 days dry', 'Purple/black (dry), green (fresh)', 'Three Sisters; ornamental; hummingbird garden', 'Vivid red flowers attract hummingbirds. Vigorous climber to 10–15 ft.'],
            ['Kentucky Wonder', 'Pole / snap + dry', '65 days snap; 90 days dry', 'Green (fresh), brown (dry)', 'Three Sisters; prolific fresh eating', 'One of the most reliable and productive pole beans. Moderate climber. Widely available.'],
            ['Arikara Yellow Bean', 'Bush-pole / dry bean', '85–100 days', 'Yellow (dry)', 'Traditional Three Sisters; dry bean', 'Developed by the Arikara people of the upper Missouri. Excellent, creamy dry bean.'],
          ],
        },
        { type: 'h3', text: '🍞 Squash Varieties' },
        {
          type: 'table',
          headers: ['Variety', 'Type', 'Days', 'Size / Color', 'Best For', 'Notes'],
          rows: [
            ['Long Island Cheese Pumpkin', 'Winter squash / pumpkin', '95–105 days', '10–15 lbs; ribbed, buff-tan', 'Traditional Three Sisters; excellent cooking pumpkin', 'One of the finest cooking pumpkins. Sweet, dry, orange flesh. Very vigorous vines for excellent ground cover.'],
            ['Hopi Orange Squash', 'Winter squash', '100–110 days', '4–8 lbs; deep orange skin', 'Traditional Three Sisters; Southwestern gardens', 'Developed by Hopi farmers. Excellent drought tolerance. Dense, sweet, deeply orange flesh.'],
            ['Lakota Squash', 'Winter squash', '95–100 days', '8–12 lbs; orange-red with green striping', 'Traditional Three Sisters; storage; ornamental', 'Developed by the Lakota Sioux. Striking appearance. Rich, nutty flavor. Very vigorous vine.'],
            ['Butternut (heirloom Waltham)', 'Winter squash', '80–95 days', '3–5 lbs; tan skin', 'Three Sisters; cooking; storage', 'The most widely grown winter squash. Moderate vine length. Good ground cover. Excellent sweet flavor.'],
            ['Delicata', 'Winter squash', '80–95 days', '1–2 lbs; cream with green stripes', 'Compact Three Sisters; small harvests', 'Shorter vines — good for compact plantings. Edible skin — no peeling needed.'],
            ['Blue Hubbard', 'Winter squash', '100–105 days', '15–40 lbs; blue-grey', 'Traditional Three Sisters; very long storage', 'The most vigorous squash vine — excellent ground cover for large plantings. Stores over a year in ideal conditions.'],
          ],
        },
        { type: 'image', src: '/guides/three-sisters/winter-squash-vine-garden.jpg', alt: 'Orange winter squash growing on a sprawling vine with large green leaves in a garden', caption: 'Squash\'s broad leaves shade out weed seeds and cool the soil, keeping moisture in for all three sisters.' },
      ],
    },
    {
      id: 'planning',
      title: 'Planning Your Three Sisters Garden',
      blocks: [
        {
          type: 'table',
          headers: ['Planting Scale', 'Approximate Space', 'Corn Plants', 'Bean Plants', 'Squash Plants', 'Notes'],
          rows: [
            ['Minimum productive', '10×10 ft (100 sq ft)', '16 plants (4×4 block)', '32–48 plants', '2–3 plants', 'The minimum size for reliable corn pollination.'],
            ['Small family planting', '12×12 ft (144 sq ft)', '24–36 plants', '48–72 plants', '3–4 plants', 'Generous fresh eating plus meaningful squash harvest. Good starter scale.'],
            ['Standard family planting', '20×20 ft (400 sq ft)', '50–75 plants', '100–150 plants', '6–10 plants', 'Full family fresh eating plus preservation quantities.'],
            ['Raised bed adaptation', '4×8 ft minimum; 4×12 ft preferred', '12–16 plants', '24–32 plants', '1 compact squash', 'Requires compact squash variety and hand-pollination of corn.'],
          ],
        },
        { type: 'h3', text: 'Siting the Three Sisters Garden' },
        {
          type: 'list',
          items: [
            'Full sun: Corn is among the most sun-demanding crops. The Three Sisters planting requires a minimum of 8 hours of direct sun per day.',
            'Wind protection: Corn pollination is wind-dependent, but the tall corn plants are vulnerable to severe wind damage. A windbreak on the prevailing wind side is helpful.',
            'Soil depth: The Three Sisters prefer deep, well-draining soil. Squash roots explore 18–24 inches down; corn roots anchor 12–18 inches.',
            'Space for squash spread: Even in a compact layout, squash vines will spread 6–12 feet from the base plant. Plan for this when locating the planting relative to paths and other beds.',
          ],
        },
        { type: 'h3', text: 'Soil Preparation — Feeding Three Hungry Crops' },
        {
          type: 'list',
          items: [
            'Test your soil: A basic soil test ($15–25 from your local extension service) is strongly recommended before the first year.',
            'Amend deeply: Incorporate 3–4 inches of finished compost into the top 12 inches of soil.',
            'Adjust pH if needed: The Three Sisters prefer pH 6.0–7.0. Below 6.0: add limestone; above 7.0: add sulfur.',
            'Address phosphorus: Critical for root development and bean nitrogen fixation. Incorporate rock phosphate, bone meal, or a balanced organic fertilizer.',
            'Inoculate your beans: Purchase a legume inoculant specific to beans. Wet bean seeds slightly, apply the inoculant powder to coat, and plant immediately.',
            'Add an early nitrogen source: Apply a slow-release balanced organic fertilizer to each planting mound for corn\'s early season needs, before beans are established enough to fix significant nitrogen.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌿',
          text: 'The Three Sisters system is not magic — it is a carefully managed interaction between three specific crops in conditions they are suited to. The nitrogen that beans fix and contribute to the soil is real, but it becomes significant in the second and third years of growing the system in the same location. In the first year, soil preparation and adequate amendment matter as much as the companion planting relationship itself.',
        },
      ],
    },
    {
      id: 'planting-methods',
      title: 'Planting Methods — Traditional and Modern Approaches',
      blocks: [
        {
          type: 'warning',
          emoji: '🌽',
          text: 'The single most common mistake in Three Sisters planting is planting all three sisters simultaneously. Beans planted with corn that has not yet emerged will quickly overtop and shade the corn seedlings. The correct sequence: Corn first. Wait until corn reaches 4–6 inches. Then beans. Wait one additional week. Then squash. This sequence ensures each sister enters the system at the moment when she can perform her function without competing with her sisters in the critical early establishment period.',
        },
        { type: 'h3', text: 'Method 1: The Traditional Mound System' },
        {
          type: 'p',
          text: "The mound system is the original Three Sisters layout. Individual raised mounds — each 18–24 inches in diameter, 6–8 inches high — serve as micro-raised beds that improve drainage, warm faster in spring, and give each plant grouping a defined growing zone.",
        },
        {
          type: 'list',
          items: [
            'Mark mound centers 4–5 feet apart in all directions.',
            'Build the mounds: rake and mound soil at each center into a flattened-top mound 18–24 inches in diameter, 6–8 inches high. Work in compost and slow-release fertilizer.',
            'Plant corn first: at each mound, plant 5–7 corn seeds in a circle 6 inches from center, 1–2 inches deep. Thin to 4–5 plants per mound after emergence.',
            'When corn reaches 4–6 inches: plant 3–5 bean seeds per mound at 6 inches from center, between the corn plants.',
            'One week after beans: plant 2–3 squash seeds at ground level between every second or third mound.',
          ],
        },
        { type: 'h3', text: 'Method 2: The Row Block System' },
        {
          type: 'list',
          items: [
            'Corn: plant in a block at least 4 rows wide and 4 rows deep, with plants 12–15 inches apart and rows 24–30 inches apart.',
            'Beans: after corn reaches 4–6 inches, plant 2–3 bean seeds at the base of every other corn plant throughout the block.',
            'Squash: plant around the perimeter of the entire corn-bean block, spaced 4–5 feet apart.',
            'Advantage: easier to manage than mounds; better suited to flat ground; easier to track rows for watering and fertilizing.',
          ],
        },
        { type: 'h3', text: 'Method 3: The Raised Bed Adaptation' },
        {
          type: 'list',
          items: [
            'Minimum bed size: 4×8 feet; 4×12 feet is better.',
            'Corn: plant in a 3×4 or 4×4 block in the center, spaced 9–12 inches apart. Choose a compact heirloom variety.',
            'Beans: plant at the base of corn plants once corn reaches 4–6 inches. Bush beans (Dragon Tongue, Provider) work for compact beds.',
            'Squash: plant one compact variety (Delicata, bush zucchini) at one end of the bed. Train vines over the bed edge.',
            'Hand-pollination: with fewer corn plants, hand-pollinate by collecting pollen from the tassel with a small brush and applying it to the silk.',
          ],
        },
        { type: 'h3', text: 'Planting Timeline by Zone (Adjust Dates for Your Region)' },
        {
          type: 'table',
          headers: ['Date / Stage', 'What to Do', 'What to Watch For'],
          rows: [
            ['3–4 weeks before last frost (late March)', 'Prepare soil: amend with compost, adjust pH, add phosphorus. Build mounds if using traditional system.', 'Soil temperature: corn needs 60°F minimum to germinate reliably; 65°F+ for good germination rate.'],
            ['At last frost / when soil reaches 60°F (mid-April)', 'Plant corn seeds 1–2 inches deep. 5–7 seeds per mound, thin to 4–5. Water thoroughly.', 'Germination: corn should emerge in 7–10 days in warm soil. Cover with row cover if late cold snap threatens.'],
            ['When corn reaches 4–6 inches (early May)', 'Plant beans: 3–5 seeds per mound between corn plants. Treat with Rhizobium inoculant before planting.', 'Bean germination in 7–14 days. Slugs and cutworms can decimate bean seedlings — check daily.'],
            ['One week after beans (mid-May)', 'Plant squash seeds 1 inch deep, 2–3 seeds per location, thin to one plant. Apply straw mulch around squash.', 'Squash emerges in 7–10 days. Squash vine borer moths begin flying in late spring — see pest section.'],
            ['Week 5–7: rapid growth (early June)', 'Deep watering 2–3 times per week. Fertilize with liquid fish emulsion (half rate) if plants show nitrogen deficiency.', 'Corn growing vigorously. Beans beginning to twine up stalks. Squash vines spreading. The most dramatic growth phase.'],
            ['Week 8–10: tasseling (mid-June)', 'Do NOT disturb the corn during tasseling. Water consistently — stress during pollination causes poorly-filled ears.', 'Corn tassels emerge; silk appears 2–5 days later. Silks must receive pollen within 5–7 days. Each silk strand = one kernel.'],
            ['Weeks 10–14: harvest phase (late June–July)', 'Begin harvesting beans as pods reach finger length. Do not allow overmature pods to remain.', 'Bean production is maximized by regular harvest. A pod left to mature sends the signal to stop flower production.'],
            ['First frost and final harvest (Oct–Nov)', 'Harvest all remaining beans before frost. Harvest all winter squash before hard frost. Cut dry corn when stalks are fully dried.', 'Winter squash must be harvested before hard frost (below 28°F). Skin should resist thumbnail pressure. Stem should be dry and corky.'],
          ],
        },
        { type: 'image', src: '/guides/three-sisters/bean-vines-climbing-corn-stalks.jpg', alt: 'Green bean vines climbing up tall corn stalks in a summer garden', caption: 'Corn goes in first and beans follow only once it reaches 4-6 inches — planting all three at once lets beans smother the young corn.' },
      ],
    },
    {
      id: 'seasonal-care',
      title: 'Seasonal Care — Growing Through the Season',
      blocks: [
        { type: 'h3', text: 'Watering the Three Sisters' },
        {
          type: 'list',
          items: [
            'Germination to establishment: keep soil consistently moist (not wet) until all three sisters have emerged and established first true leaves.',
            'Establishment to tasseling: deep watering 2–3 times per week (1–1.5 inches total per week). Water at the base of plants, not overhead.',
            'Tasseling through ear fill: the most critical period for corn moisture. Do not allow the planting to dry out significantly during the 3–4 weeks of ear development.',
            'Hot summer climates (Zones 7–9): Midsummer temperatures above 95–100°F can stress all three crops. Deep mulching (3–4 inches of straw) is critical for moisture retention and root cooling. Water in early morning to reduce evaporation and fungal pressure.',
          ],
        },
        { type: 'h3', text: 'Pest Management' },
        {
          type: 'table',
          headers: ['Pest', 'What It Affects', 'Identification', 'Management'],
          rows: [
            ['Corn earworm', 'Corn — tunnels into developing ears from the tip', 'Caterpillar in the ear tip; frass at silk; moths active at night during tasseling', 'Apply a few drops of mineral oil with a dropper to each ear tip immediately after silk browning. The oil smothers newly hatched larvae.'],
            ['Squash vine borer', 'Squash and pumpkin — larva tunnels into vine stem', 'Sudden wilting of vine; sawdust-like frass at stem base; red-orange wasp-like moth flying near plants May–July', 'Cover plants with row cover until female squash flowers open. Inject Bt into bored stems. Plant a second succession in mid-July to replace losses.'],
            ['Cucumber beetles', 'Squash — feeds on leaves and transmits bacterial wilt', 'Yellow-green beetles with black spots or stripes; mass emergence in early summer', 'Row cover until pollination required. Kaolin clay spray. Bacterial wilt spread by cucumber beetle feeding is often fatal to squash.'],
            ['Bean beetles (Mexican)', 'Beans — skeletonizes leaves from the underside', 'Orange-yellow oval beetle with black spots; feeds in family groups; lacy damaged leaves', 'Hand-pick adults and egg clusters (yellow eggs on leaf undersides). Neem oil. Insecticidal soap.'],
            ['Corn rootworm', 'Corn — larvae feed on roots, weakening stalk', 'Lodged corn at tasseling; corn silk damage from adult beetles', 'Crop rotation is the primary management — populations build in soil where corn is grown consecutively.'],
            ['Raccoons / deer / birds', 'Corn ears and squash fruits', 'Toppled stalks; ear husks stripped; half-eaten fruits', 'Deer: 8-foot fence. Raccoons: electric fence (2 strands at 4" and 12"). Birds at corn silk: paper bag each ear after silk browning.'],
          ],
        },
        { type: 'h3', text: 'Fertilizing Through the Season' },
        {
          type: 'list',
          items: [
            'At planting: incorporate slow-release balanced organic fertilizer (5-5-5 or equivalent) and compost into each mound.',
            'At 4–6 weeks (when beans are established): beans should now be actively fixing nitrogen. Avoid heavy nitrogen applications at this point.',
            'At tasseling: corn has its highest nutrient demand during ear development. Apply liquid fish emulsion (half label rate) as a foliar spray when the tassel emerges.',
            'Squash nutrition: squash is a heavy potassium feeder. A greensand or wood ash application (moderate — too much raises pH) when fruits are sizing supports development.',
            'After bean harvest: pull spent bean plants and compost them. The nitrogen-rich root nodules left in the soil will decompose and benefit the next planting.',
          ],
        },
      ],
    },
    {
      id: 'harvest-storage',
      title: 'Harvest, Curing & Storage',
      blocks: [
        {
          type: 'p',
          text: "The Three Sisters provide three distinct harvests at three different times, each requiring different handling. Beans provide ongoing fresh harvest from midsummer through frost. Corn has a brief window for fresh eating, then a longer period for dry corn. Squash is the long-season crop, harvested in fall and stored through winter.",
        },
        { type: 'h3', text: 'Corn Harvest' },
        {
          type: 'list',
          items: [
            'Fresh sweet corn harvest window: approximately 18–21 days from when silks turn brown and dry.',
            'The squeeze test: gently squeeze the ear through the husk. A fully developed ear feels firm throughout with no soft spots.',
            'Eat fresh corn as quickly as possible. The sugars in sweet corn begin converting to starch within hours of harvest. Refrigerate immediately if storage is unavoidable.',
            'Dry corn (flint, flour, popcorn): leave ears on the stalk until the first hard frost kills the plant, then harvest and hang in a dry, well-ventilated location for 4–6 additional weeks.',
            'Popcorn moisture: ideal moisture for popping is 13–14%. If stored popcorn won\'t pop, place kernels in a jar with a few drops of water, seal, and let sit 2–3 days.',
          ],
        },
        { type: 'h3', text: 'Bean Harvest' },
        {
          type: 'list',
          items: [
            'Snap beans: harvest when pods are plump but before seeds bulge the pod, snapping cleanly rather than bending. Regular harvest maximizes production.',
            'Shell beans: harvest when the seeds inside have fully sized but before the pod has dried — the seeds are large, colorful, and tender. Cook fresh or refrigerate briefly.',
            'Dry beans: allow pods to fully mature and begin drying on the plant. If frost is approaching before pods are fully dry, pull the entire plant and hang upside down in a dry location.',
            'Threshing: place dried plants in a large pillowcase and beat against a hard surface. Spread beans in a single layer for 1–2 additional weeks before storage.',
            'Storage: store in glass jars in a cool, dark location. Properly dried beans store for 1–3 years with good quality.',
          ],
        },
        { type: 'h3', text: 'Winter Squash Harvest and Curing' },
        {
          type: 'table',
          headers: ['Step', 'What to Do', 'Why It Matters'],
          rows: [
            ['Readiness check', 'Thumbnail test: press a thumbnail firmly into the skin. A ripe squash resists completely. Check that the stem is corky, dry, and tan-brown.', 'Immature squash has thin, easily-damaged skin that will rot quickly in storage regardless of curing.'],
            ['Harvest with stem', 'Cut squash from the vine with a sharp knife, leaving a 2–3 inch stem attached. Never carry squash by the stem.', 'The stem acts as a cap, sealing the blossom-end attachment point. Stemless squash deteriorates much faster.'],
            ['Initial curing', 'Place harvested squash in a warm (80–85°F), dry location with good air circulation for 10–14 days. Do not stack during curing.', 'Curing heals minor surface cuts, hardens the skin further, and converts some starches to sugars — improving flavor and storage quality.'],
            ['Storage conditions', 'After curing, store in a single layer at 50–60°F with moderate humidity (50–70%). A root cellar or cool basement corner is ideal.', 'Below 50°F causes chilling injury in most varieties. Above 60°F, squash deteriorates faster.'],
            ['Regular inspection', 'Check stored squash monthly. Remove and use immediately any squash showing soft spots, mold, or stem rot.', 'Squash that begins deteriorating releases ethylene gas and moisture that accelerates spoilage in neighboring fruits.'],
          ],
        },
        { type: 'image', src: '/guides/three-sisters/harvested-corn-beans-squash-basket.jpg', alt: 'A rustic basket filled with freshly harvested corn cobs, dry beans, and winter squash', caption: 'Three distinct harvests at three different times — beans through midsummer, corn briefly fresh then dried, squash stored through winter.' },
      ],
    },
    {
      id: 'cooking',
      title: 'Cooking the Three Sisters',
      blocks: [
        {
          type: 'p',
          text: "The Three Sisters are not only agriculturally complementary — they are culinarily so. Corn provides carbohydrate and calories; beans provide protein and amino acids; squash provides vitamins, minerals, and natural sweetness. Together, they form a nutritionally complete foundation for a meal that sustained entire civilizations.",
        },
        { type: 'h3', text: 'Three Sisters Succotash' },
        {
          type: 'list',
          items: [
            'Cut kernels from 4–6 fresh sweet corn cobs (about 2 cups kernels).',
            'Prepare 1.5–2 cups fresh shell beans or 1 cup soaked and cooked dry beans.',
            'Dice 2 cups summer squash into 1/2-inch cubes (or diced butternut or Delicata).',
            'In a wide skillet, melt 2 tablespoons butter or lard. Add one diced medium onion; cook until soft (8 minutes).',
            'Add squash; cook 5 minutes. Add corn kernels; cook 3–4 minutes. Add cooked beans; cook 2 minutes to heat through.',
            'Finish with fresh herbs (thyme, sage, or basil), a squeeze of lemon, and additional butter. Season with salt and pepper.',
          ],
        },
        { type: 'h3', text: 'Three Sisters Soup' },
        {
          type: 'list',
          items: [
            'Soak 1 cup dried Three Sisters beans (Cherokee Trail of Tears, Rattlesnake, or any dry bean) overnight in cold water. Drain.',
            'In a large pot, sauté 1 large diced onion, 3 garlic cloves, 2 diced carrots, and 2 diced celery stalks in 2 tablespoons fat until soft.',
            'Add soaked beans and 8 cups water or stock. Simmer 60–90 minutes until beans are just tender.',
            'Add 2 cups diced winter squash and 1 cup dried corn kernels. Continue simmering 30–40 minutes until squash is tender.',
            'Season with salt, smoked paprika, cumin, and a bay leaf. Serve with cornbread, crumbled cotija, and fresh cilantro.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌽',
          text: 'Traditional corn processing included nixtamalization: soaking and cooking dried corn in an alkaline lime solution. This dramatically increases the bioavailability of niacin in corn, making it nutritionally complete. Populations that ate corn as a staple without nixtamalizing it developed pellagra (niacin deficiency); those that nixtamalized it did not. To nixtamalize at home: dissolve 1 tablespoon food-grade calcium hydroxide per quart of water, add 1 cup dried corn, simmer 30 minutes, soak 8–12 hours, rinse and drain. The result is the basis of hominy and masa.',
        },
        { type: 'h3', text: 'Roasted Winter Squash with Sage Butter' },
        {
          type: 'list',
          items: [
            'Halve a medium winter squash (Butternut, Delicata, Hopi Orange, or Lakota). Scoop out seeds.',
            'Place cut-side down on a parchment-lined baking sheet. Roast at 400°F for 35–50 minutes until completely tender.',
            'Make sage butter: melt 3 tablespoons of butter in a small pan over medium heat. Add 8–10 fresh sage leaves and cook until butter turns golden-brown and nutty. Remove from heat.',
            'Flip squash cut-side up, pour sage brown butter over each half, and serve directly in the skin.',
          ],
        },
      ],
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting the Three Sisters Garden',
      blocks: [
        {
          type: 'table',
          headers: ['Problem', 'Likely Cause', 'Diagnosis', 'Solution'],
          rows: [
            ['Corn ears poorly filled — missing kernel rows', 'Pollination failure', 'Count ear rows — if alternate rows are missing or kernels are sparse, pollination was inadequate.', 'Plant at minimum 4×4 blocks next season. Hand-pollinate by collecting pollen from tassel and applying with a brush. Ensure silks and tassels are active simultaneously.'],
            ['Beans climbing over corn and smothering it', 'Beans planted before corn was established; overly vigorous bean variety', 'Are beans overtaking corn leadership? Are corn stalks bending under bean weight?', 'Train bean tendrils around stalks rather than over the top. Ensure corn reaches 4–6 inches before bean planting — never plant simultaneously.'],
            ['Squash vines dying suddenly mid-season', 'Squash vine borer (most likely); bacterial wilt from cucumber beetles', 'Check stem base for borer entry holes and frass. For bacterial wilt: cut stem — if stringy bacterial strands form, it is bacterial wilt.', 'Vine borer: inject Bt into bored stem; mound soil over damaged areas. Bacterial wilt has no cure — remove plant. Plant a second succession 4–6 weeks after first planting as insurance.'],
            ['Corn stalks falling over (lodging)', 'Bean weight on weak stalks; wind damage; shallow roots from wet soil', 'Examine root system — lodged corn often has sparse root development.', 'Hill soil up around base of corn plants early in the season to encourage brace root development. Choose varieties with strong stalk strength.'],
            ['Very few beans produced', 'Heat stress during flowering; nitrogen toxicity from over-fertilization', 'Are bean flowers forming but dropping? Are plants large and leafy but not producing pods?', 'Bean flower drop in heat is normal above 90°F — time plantings to avoid peak heat for bean flowering. If large, lush, non-producing plants, reduce nitrogen applications.'],
            ['Three Sisters planting appears unproductive overall', 'First-year planting in unamended native soil; insufficient sun; beans without inoculant; too small for corn pollination', 'Is this the first year? How many hours of direct sun? Were beans inoculated?', 'Add significant compost and balanced organic fertilizer. Ensure 8+ hours sun. Inoculate beans every planting. Ensure adequate corn block size.'],
          ],
        },
        {
          type: 'tip',
          emoji: '🌽',
          text: "There is something different about growing the Three Sisters that is not merely about efficiency or yield — though the system delivers both. It is about growing a relationship rather than a crop. The three plants do not merely coexist; they genuinely need each other, support each other, and produce more together than they would apart. Growing the Three Sisters today is a way of continuing an act of observation that has been ongoing for five thousand years, adding our own season's observations to a very long record of what these three plants do when they are grown together, with care.",
        },
      ],
    },
  ],
}
