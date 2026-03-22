export const indoorHouseplantsContent = {
  id: 'indoor-houseplants',
  hero: {
    emoji: '🌱',
    title: 'Indoor Houseplants 101',
    subtitle: 'Choose, Place & Care for Indoor Plants with Confidence',
  },
  intro: 'Plants have been inside human spaces since humans built them. The impulse to bring living green things indoors is ancient, nearly universal across cultures, and now supported by a substantial body of research. This guide covers everything a beginner needs — from light and watering fundamentals through the 25 best starter plants, room-by-room placement, soil, feeding, pests, propagation, and seasonal care.',
  sections: [
    {
      id: 'overview',
      title: 'Why Houseplants? The Case Beyond Decoration',
      blocks: [
        {
          type: 'p',
          text: "Plants have been inside human spaces since humans built them. The impulse to bring living green things indoors is ancient, nearly universal across cultures, and now supported by a substantial body of research. NASA's landmark Clean Air Study found that many common houseplants remove measurable quantities of volatile organic compounds (VOCs) including benzene, formaldehyde, and trichloroethylene from indoor air. Subsequent studies have shown that the presence of indoor plants is associated with reduced psychological stress, improved attention and memory performance, faster recovery from mental fatigue, and measurably higher scores on mood and wellbeing scales.",
        },
        {
          type: 'p',
          text: 'Beyond the science: a living plant in a room changes the character of that room. It introduces something that responds to its environment, that grows and changes, that requires a small recurring act of attention. In a world of screens and schedules, that quality — the plant that needs watering today, the new leaf that appeared overnight — provides a kind of grounding contact with living things that many people find genuinely restorative.',
        },
        {
          type: 'p',
          text: 'The good news for beginners is that the learning curve is shallow and the barrier to entry is low. You do not need specialized knowledge, expensive equipment, or a particularly green thumb. You need to understand a small number of core principles — light, water, soil, and temperature — and to choose plants whose requirements match the conditions you can provide. This guide covers all of that, from the absolute basics through propagation and the management of common problems, in the most practical and direct way possible.',
        },
        {
          type: 'tip',
          emoji: '🌿',
          text: 'The most important thing this guide will tell you is also the most counterintuitive for beginners: most houseplants die from too much water, not too little. The second most important thing: most houseplants need more light than most homes provide. Everything else flows from these two facts.',
        },
        {
          type: 'h3',
          text: 'The 25 Best Beginner Houseplants — At a Glance',
        },
        {
          type: 'table',
          headers: ['Botanical Name', 'Common Name', 'Light', 'Watering', 'Humidity', 'Difficulty'],
          rows: [
            ['Sansevieria trifasciata', 'Snake Plant / Mother-in-Law\'s Tongue', 'Low to bright indirect', 'Every 2–6 wks (very drought tolerant)', 'Any', '★ Very Easy'],
            ['Epipremnum aureum', 'Pothos / Devil\'s Ivy', 'Low to medium indirect', 'When top inch is dry', 'Any', '★ Very Easy'],
            ['Zamioculcas zamiifolia', 'ZZ Plant', 'Low to medium indirect', 'Every 2–4 wks', 'Any', '★ Very Easy'],
            ['Chlorophytum comosum', 'Spider Plant', 'Bright indirect', 'When top inch is dry', 'Medium', '★ Very Easy'],
            ['Dracaena spp.', 'Dracaena / Corn Plant', 'Low to bright indirect', 'When top half of soil is dry', 'Medium', '★ Very Easy'],
            ['Aglaonema spp.', 'Chinese Evergreen', 'Low to medium indirect', 'When top inch is dry', 'Medium', '★ Very Easy'],
            ['Aspidistra elatior', 'Cast Iron Plant', 'Low to medium indirect', 'Every 2–3 wks', 'Low–medium', '★ Very Easy'],
            ['Tradescantia spp.', 'Spiderwort / Wandering Dude', 'Bright indirect', 'When top inch is dry', 'Medium', '★ Very Easy'],
            ['Aloe vera', 'Aloe Vera', 'Bright indirect to full sun', 'Every 2–3 wks (drought tolerant)', 'Low', '★ Very Easy'],
            ['Crassula ovata', 'Jade Plant', 'Bright indirect to direct', 'Every 2–3 wks', 'Low', '★ Easy'],
            ['Monstera deliciosa', 'Swiss Cheese Plant', 'Medium to bright indirect', 'When top 1–2 inches are dry', 'Medium–high', '★★ Easy'],
            ['Ficus lyrata', 'Fiddle Leaf Fig', 'Bright indirect (consistent)', 'When top inch is dry; dislikes drying completely', 'Medium', '★★★ Moderate'],
            ['Strelitzia reginae', 'Bird of Paradise', 'Bright indirect to direct sun', 'When top 2 inches are dry', 'Medium', '★★ Easy'],
            ['Epipremnum aureum (Marble Queen, Neon)', 'Variegated Pothos types', 'Medium to bright indirect', 'When top inch is dry', 'Any', '★ Very Easy'],
            ['Philodendron hederaceum', 'Heartleaf Philodendron', 'Low to bright indirect', 'When top inch is dry', 'Medium', '★ Very Easy'],
            ['Rhipsalis spp.', 'Mistletoe Cactus', 'Bright indirect (no direct sun)', 'When top half of soil is dry', 'Medium–high', '★★ Easy'],
            ['Pilea peperomioides', 'Chinese Money Plant / UFO Plant', 'Bright indirect', 'When top inch is dry', 'Medium', '★★ Easy'],
            ['Calathea / Maranta spp.', 'Prayer Plant / Calathea', 'Low to medium indirect (no direct sun)', 'Keep evenly moist; sensitive to dry', 'High — mist or pebble tray', '★★★ Moderate'],
            ['Haworthia spp.', 'Haworthia / Zebra Plant', 'Bright indirect (tolerates low light for a succulent)', 'Every 2–3 wks', 'Low', '★ Very Easy'],
            ['Peperomia spp.', 'Peperomia (many varieties)', 'Low to bright indirect', 'When top half of soil is dry; stores water in leaves', 'Medium', '★ Very Easy'],
            ['Hedera helix', 'English Ivy', 'Low to bright indirect', 'When top inch is dry', 'Medium', '★★ Easy'],
            ['Ficus elastica', 'Rubber Plant', 'Medium to bright indirect', 'When top inch is dry', 'Medium', '★★ Easy'],
            ['Spathiphyllum spp.', 'Peace Lily', 'Low to medium indirect', 'When leaves just begin to droop slightly', 'Medium–high', '★★ Easy'],
            ['Schlumbergera spp.', 'Christmas / Holiday Cactus', 'Bright indirect', 'When top inch is dry; reduce in fall to trigger bloom', 'Medium', '★★ Easy'],
            ['Beaucarnea recurvata', 'Ponytail Palm', 'Bright indirect to full sun', 'Every 3–4 wks (stores water in base)', 'Low', '★ Very Easy'],
          ],
        },
      ],
    },
    {
      id: 'light',
      title: 'Section 1: Light — The Most Important Factor',
      blocks: [
        {
          type: 'p',
          text: 'Light is the single most important variable in houseplant success, and it is the variable that beginners most consistently underestimate. What feels like a bright room to a person — well-lit, comfortable, clearly visible — often provides far less light than a plant needs to thrive. The human eye automatically adjusts to light levels, making us poor judges of how much light is actually present. A plant has no such adjustment mechanism.',
        },
        {
          type: 'h3',
          text: 'Understanding Light Levels',
        },
        {
          type: 'p',
          text: "Light for plants is measured in foot-candles (fc) or, in scientific contexts, micromoles per meter squared per second (μmol/m²/s). For practical purposes, the foot-candle is the most useful unit: 1 foot-candle is approximately the light produced by one candle at a distance of one foot. A sunny outdoor day might measure 10,000 fc; a shaded outdoor spot, 1,000 fc; a typical well-lit room interior away from windows, 50–100 fc. Most houseplants described as 'low light tolerant' need a minimum of 25–50 fc to survive; those described as needing 'bright indirect light' typically need 200–500 fc or more to truly thrive.",
        },
        {
          type: 'table',
          headers: ['Light Category', 'Foot-Candle Range', 'Where in a Room', 'Best Plants', 'Notes'],
          rows: [
            [
              'Direct sun',
              '1,000–10,000+ fc',
              'Within 1–2 feet of a south- or west-facing window with no obstruction',
              'Cacti, succulents, aloe, jade, ponytail palm, bird of paradise, some herbs',
              'Many tropical houseplants cannot tolerate direct summer sun through glass, which can scorch leaves. Exceptions are true sun-lovers from desert environments.',
            ],
            [
              'Bright indirect light',
              '200–500 fc',
              'Within 3–4 feet of a south or west window; or within 2 feet of an unobstructed east window',
              'Monstera, fiddle leaf fig, rubber plant, Chinese money plant, pothos (thrives here), most philodendrons, most tropical aroids',
              'The sweet spot for most popular tropical houseplants. An east window with morning sun but no intense afternoon sun provides this range.',
            ],
            [
              'Medium indirect light',
              '50–200 fc',
              '4–8 feet from a south or west window; or 3–4 feet from an east window; or near a north window',
              'Snake plant, pothos, heartleaf philodendron, ZZ plant, dracaena, aglaonema, peace lily, spider plant, cast iron plant',
              'The most common light level in American homes and offices. A wide range of plants can survive here; fewer will actively thrive and produce new growth.',
            ],
            [
              'Low light',
              '10–50 fc',
              '6+ feet from windows; hallways; bathrooms without windows; dim interior rooms',
              'Snake plant, ZZ plant, cast iron plant, aglaonema (dark-leaved varieties)',
              "The most frequently overstated plant category. Plants that 'tolerate low light' will survive but not grow actively; they will slowly decline if kept in true low-light conditions indefinitely. No plant truly thrives in low light.",
            ],
          ],
        },
        {
          type: 'h3',
          text: 'The Window Direction Guide',
        },
        {
          type: 'list',
          items: [
            'South-facing windows: The brightest in North America. Direct sun through most of the day in winter; partial sun in summer as the sun angle increases. Ideal for sun-loving plants and the best option for all tropical plants that need bright light.',
            'East-facing windows: Morning sun (gentle, cool light) and indirect light from midday onward. Excellent for most tropical houseplants — the morning sun is rarely intense enough to scorch, and the indirect afternoon light is still substantial.',
            'West-facing windows: Afternoon sun, which is more intense (especially in summer) than morning sun. Good for sun-tolerant plants; can scorch some tropicals in summer unless partially shaded.',
            'North-facing windows: No direct sun; the dimmest exposure. Suitable only for the most shade-tolerant plants: cast iron plant, ZZ plant, and snake plant can survive here. Most other houseplants will slowly decline in a north window alone.',
          ],
        },
        {
          type: 'h3',
          text: 'How to Measure Light in Your Home',
        },
        {
          type: 'list',
          items: [
            'The shadow test: Hold your hand 12 inches above a white sheet of paper in the location you are considering. In bright indirect light, your hand casts a distinct shadow with clear edges. In medium light, the shadow is soft and fuzzy. In low light, the shadow is barely visible or absent. This is a quick, reliable, free test.',
            'A light meter app: Free smartphone apps (Lux Meter, Light Meter) use the phone\'s camera sensor to measure light in lux (1 foot-candle ≈ 10.76 lux). Hold the phone at the plant\'s height with the sensor facing the light source. Reading guide: below 500 lux = low light; 500–3,000 lux = medium indirect; 3,000–10,000 lux = bright indirect; above 10,000 lux = direct sun.',
            'The seasonal consideration: Light levels in most American homes change significantly between summer and winter. A bright south window in July may provide the same light in January as a medium window does in summer, due to the sun\'s lower angle and shorter day length. Plants that thrive in a south window all summer may need supplemental light or relocation in winter, particularly in northern states (Zones 4–6).',
          ],
        },
        {
          type: 'h3',
          text: 'Grow Lights: Supplementing Natural Light',
        },
        {
          type: 'p',
          text: 'In rooms without adequate natural light, or during winter months in northern climates when natural light is significantly reduced, supplemental grow lights allow you to grow plants successfully where you otherwise could not. Modern LED grow lights are energy-efficient, run cool, and produce the light spectrum plants need at a fraction of the electricity cost of older fluorescent or HID systems.',
        },
        {
          type: 'list',
          items: [
            "Full-spectrum LED grow lights: The best option for most indoor plant situations. Look for lights labeled 'full spectrum' with a color temperature of 4,000–6,500K and a high CRI (90+). These produce light that closely resembles natural daylight and supports both foliage and flowering plants.",
            'Distance and duration: Most houseplants need grow lights positioned 12–24 inches above the plant canopy. Run lights 12–16 hours per day for active growth; 8–12 hours for maintenance of established plants. A simple timer ensures consistent light cycles without daily intervention.',
            'Signs of too much light: Bleaching or yellowing of leaves facing the light; leaf curl; crispy brown tips. Move the light further away or reduce hours.',
            'Signs of too little light: Leggy, stretched growth reaching toward the light; smaller new leaves than existing ones; pale coloration; no new growth.',
          ],
        },
        {
          type: 'tip',
          emoji: '☀️',
          text: 'Before buying any plant, assess the light in the spot where you plan to keep it — not the spot where it would look nicest. A plant placed in too little light will decline no matter how well you water and feed it. Match the plant to the light you have, not the light you wish you had.',
        },
      ],
    },
    {
      id: 'watering',
      title: 'Section 2: Watering — The Skill Every Beginner Must Master',
      blocks: [
        {
          type: 'p',
          text: 'Overwatering is the number one killer of houseplants in America, and it kills them not by drowning the leaves but by rotting the roots. When soil stays wet for too long, the oxygen that roots need to function is displaced by water, and root cells begin to die. Dead roots cannot absorb water, which creates a cruel irony: a plant dying of overwatering often looks like it needs more water — wilting, yellowing, drooping. The beginner pours on more water and the plant dies faster.',
        },
        {
          type: 'h3',
          text: 'The Core Watering Principles',
        },
        {
          type: 'list',
          items: [
            "Water according to the soil, not the schedule: The most important watering principle. Different plants in different pots in different locations with different soil mixes dry out at completely different rates. A schedule that says 'water every Sunday' will overwater some plants and underwater others. Check the soil before every watering — it takes 5 seconds and provides precise information.",
            'The finger test: Push your finger 1–2 inches into the soil. If it feels moist, wait. If it feels dry at that depth, water. For drought-tolerant plants (succulents, cacti, ZZ plant, snake plant), wait until the soil is dry down to 2–3 inches or more. For moisture-loving plants (calathea, ferns, peace lily), water when the top 1–2 inches dry.',
            'Water thoroughly when you do water: When it is time to water, water until water runs freely from the drainage holes. This ensures the entire root ball is moistened — not just the top few inches — and that any salt buildup from fertilizer is flushed through. Then stop and let the soil dry appropriately before watering again.',
            'Always use pots with drainage holes: Without drainage, excess water has nowhere to go and accumulates at the bottom of the pot where roots sit in it and rot. If you love a decorative pot without holes, use it as a cachepot: place the plant in a plain nursery pot with drainage inside the decorative pot and remove the inner pot to water, allowing it to drain completely before returning it.',
            'Dump the saucer: After watering, any water that collects in the saucer beneath the pot should be emptied after 30 minutes. Plants sitting in standing water in their saucers are vulnerable to the same root rot as overwatered plants.',
          ],
        },
        {
          type: 'h3',
          text: 'Watering Needs by Plant Type',
        },
        {
          type: 'table',
          headers: ['Plant Type / Category', 'Watering Frequency', 'Water When…', 'Signs of Overwatering', 'Signs of Underwatering'],
          rows: [
            [
              'Succulents & cacti (aloe, jade, echeveria, haworthia, cacti)',
              'Every 2–6 weeks depending on season and light',
              'Soil is completely dry to the bottom of the pot',
              'Soft, mushy, translucent leaves; black or brown stem base; soggy soil',
              'Shriveled, puckered, or wrinkled leaves; soil bone dry for extended periods',
            ],
            [
              'Low-water tropicals (ZZ plant, snake plant, cast iron plant, ponytail palm)',
              'Every 2–4 weeks',
              'Soil dry down 2–3 inches',
              'Yellowing lower leaves; soft mushy stems; soil that stays wet for weeks',
              'Curling or wrinkling of leaves (rare — these plants are very drought tolerant)',
            ],
            [
              'Average tropical houseplants (pothos, philodendron, monstera, rubber plant, dracaena)',
              'Every 7–14 days in summer; every 14–21 days in winter',
              'Top 1–2 inches of soil are dry',
              'Yellowing leaves; wilting despite moist soil; root rot smell; fungus gnats',
              'Wilting when soil is dry; brown crispy leaf tips; soil pulling away from pot edges',
            ],
            [
              'Moisture-loving tropicals (calathea, maranta, ferns, peace lily)',
              'Every 5–10 days; keep consistently moist but not wet',
              'Top inch begins to dry; do not allow to dry out completely',
              'Root rot; mold on soil surface; fungus gnats; consistently wet soil',
              'Crispy brown leaf edges; drooping; leaf curl; browning tips (also a humidity issue)',
            ],
            [
              'Flowering plants (African violet, orchid, Christmas cactus)',
              'Varies significantly by species — see individual plant profiles in Section 3',
              'Species-specific; see profiles',
              'Species-specific',
              'Species-specific',
            ],
          ],
        },
        {
          type: 'h3',
          text: 'Water Quality: Does It Matter?',
        },
        {
          type: 'p',
          text: 'Tap water is fine for most houseplants in most American households. However, a few situations warrant consideration:',
        },
        {
          type: 'list',
          items: [
            'Chlorinated tap water: Most municipalities use chlorine or chloramine to treat drinking water. Many plants are fine with this. If you notice tip browning on sensitive plants (spider plants, calathea), try leaving tap water in an open container overnight before using — this allows chlorine (but not chloramine) to off-gas. Alternatively, use filtered water.',
            'Fluoride sensitivity: A small number of plants — most notably spider plants, dracaenas, and peace lilies — are sensitive to fluoride in tap water and show brown or tan tip burning as a result. Use distilled, filtered, or rainwater for these plants if tip burn is a persistent problem despite correct watering.',
            'Hard water (high mineral content): In areas with very hard tap water, mineral deposits (white crusty buildup on the soil surface and pot rim) can gradually affect pH and nutrient availability. Flush the pot thoroughly monthly by running a large volume of water through the soil to dissolve and carry out salt buildup. Or switch to filtered or rainwater.',
            'Temperature: Very cold tap water can shock tropical houseplants. Let water sit until it reaches room temperature before watering, or mix warm and cold tap water to achieve room temperature.',
          ],
        },
        {
          type: 'tip',
          emoji: '💧',
          text: 'When in doubt, underwater rather than overwater. A wilting plant from underwatering can recover within hours of a good drink. A plant with root rot from overwatering may be beyond saving. The single best habit a beginning plant parent can develop is checking the soil with their finger before every single watering.',
        },
      ],
    },
    {
      id: 'plant-profiles',
      title: 'Section 3: The 25 Essential Plants — In-Depth Profiles',
      blocks: [
        {
          type: 'p',
          text: 'This section provides detailed care profiles for the 25 best houseplants for beginners. Each profile covers the plant\'s character and appeal, specific light and water requirements, soil and pot preferences, humidity needs, common problems, and propagation. The plants are organized from easiest to most demanding.',
        },
        {
          type: 'h3',
          text: '🌿 Snake Plant (Sansevieria trifasciata / Dracaena trifasciata)',
        },
        {
          type: 'p',
          text: 'The snake plant is the single most forgiving houseplant available and the best starting point for any beginner or self-described plant killer. Its architectural, upright form with striking yellow-edged or banded sword-shaped leaves earns it a place in any interior, and its tolerance for neglect is genuinely extraordinary.',
        },
        {
          type: 'list',
          items: [
            'Light: Survives in near-dark corners but grows fastest and most vigorously in bright indirect light. Will tolerate a range from very low light to direct morning sun.',
            'Water: Water every 2–6 weeks — one of the most drought-tolerant houseplants. In winter, or in low light, water as infrequently as once per month. Allow soil to dry completely between waterings. Overwatering causes root rot quickly in this plant.',
            'Soil and pot: Well-draining potting mix; cactus/succulent mix or a standard potting mix amended with 25–30% perlite. Drainage holes essential. Prefers to be slightly rootbound.',
            'Common problems: Root rot from overwatering is the primary cause of death. Soggy soil + cold temperatures = death. Otherwise, nearly indestructible.',
            'Propagation: Division (separate pups/offsets from the base at repotting); leaf cuttings (sections of leaf placed in water or soil, though variegation is lost in leaf-propagated plants).',
          ],
        },
        {
          type: 'h3',
          text: '🌿 Pothos (Epipremnum aureum)',
        },
        {
          type: 'p',
          text: 'Pothos may be the most popular houseplant in America — easy to find, easy to grow, hard to kill, and capable of producing long, trailing vines of heart-shaped leaves that are genuinely beautiful in a hanging basket or trailing from a high shelf.',
        },
        {
          type: 'list',
          items: [
            'Light: Tolerates low to medium indirect light but produces its finest foliage growth and best variegation in bright indirect light. In very low light, growth slows and variegation fades to plain green.',
            'Water: Water when the top inch of soil is dry. Yellowing leaves usually indicate overwatering; wilting with dry soil indicates underwatering. Highly forgiving of occasional underwatering — recovers quickly when watered.',
            'Growth habit: Vining; trails naturally. Pin to a moss pole or coir totem to encourage larger leaf development — aerial roots support climbing and trigger larger leaf expression in many aroid species including pothos.',
            'Propagation: Cut stems with at least one node (the point where a leaf meets the stem) and root in water or directly in moist potting mix. One of the easiest plants to propagate.',
          ],
        },
        {
          type: 'h3',
          text: '🌿 ZZ Plant (Zamioculcas zamiifolia)',
        },
        {
          type: 'p',
          text: 'The ZZ plant stores water in its thick rhizomes (underground stems), making it extraordinarily drought tolerant. Its glossy, deep-green leaves and slow, upright growth are handsome in any interior style. A virtually indestructible plant for low-to-medium light conditions.',
        },
        {
          type: 'list',
          items: [
            'Light: One of the best low-light houseplants. Survives in dim conditions; grows faster in medium indirect light.',
            'Water: Every 2–4 weeks in the growing season; even less frequently in winter. Truly tolerates drought. The most common mistake with ZZ plants is watering too often — the rhizomes store enough water to sustain the plant for weeks.',
            'Propagation: Leaf petiole cuttings placed in water or soil (extremely slow but reliable); or division at repotting.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'All parts of the ZZ plant are toxic if ingested and the sap can irritate skin. Wash hands after handling. Keep away from pets and children.',
        },
        {
          type: 'h3',
          text: '🌿 Monstera deliciosa (Swiss Cheese Plant)',
        },
        {
          type: 'p',
          text: 'Monstera is one of the most popular and most visually striking houseplants of the past decade — its large, fenestrated (hole-punched) leaves are as recognizable as any plant in interior design. A relatively easy plant given adequate light and thoughtful watering.',
        },
        {
          type: 'list',
          items: [
            'Light: Needs medium to bright indirect light for good fenestration (the development of holes in the leaves). In low light, leaves remain small and undivided. Near a bright north or east window minimum.',
            'Water: Allow the top 1–2 inches of soil to dry before watering. This plant dislikes both consistent overwatering and prolonged drought. Check weekly; water when ready.',
            'Support: Monstera is a natural climber. A moss pole or coir totem allows the plant to climb, produces larger leaves, and keeps the plant upright. Without support, it sprawls.',
            'Propagation: Stem cuttings with a node and at least one aerial root root readily in water or moist potting mix.',
          ],
        },
        {
          type: 'h3',
          text: '🌿 Peace Lily (Spathiphyllum spp.)',
        },
        {
          type: 'p',
          text: 'The peace lily is remarkable for thriving in lower light than most flowering houseplants and for being one of the few readily available indoor plants that blooms reliably in home conditions. It is also one of the best air-purifying plants in the NASA Clean Air Study.',
        },
        {
          type: 'list',
          items: [
            'Light: Medium to low indirect light. One of the best blooming plants for lower-light situations. Bright indirect light produces more flowers.',
            'Water: Peace lilies are somewhat unique in their watering cue: they will slightly droop when they need water. Many experienced growers use this drooping as their watering signal rather than checking the soil. Do not let it wilt severely, but a slight, consistent droop is fine. Water thoroughly when this occurs.',
            'Humidity: Appreciates higher humidity. Brown leaf tips are often a sign of low humidity rather than watering problems. Misting, a pebble tray with water beneath the pot, or a humidifier nearby all help.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Toxic to cats and dogs. Peace lily contains calcium oxalate crystals that cause oral irritation and swelling.',
        },
        {
          type: 'h3',
          text: '🌿 Fiddle Leaf Fig (Ficus lyrata)',
        },
        {
          type: 'p',
          text: 'The fiddle leaf fig is one of the most popular interior plants of the past 15 years and one of the most notorious for being difficult. It is not genuinely difficult — it has specific, consistent requirements — but it is unforgiving of their violation in a way that more casual plants are not.',
        },
        {
          type: 'list',
          items: [
            'Light: Needs bright, consistent indirect light — near a south or west window. The word "consistent" matters: fiddle leaf figs are sensitive to being moved. Find the right spot, put it there, and do not move it unless the plant is suffering.',
            'Water: Water when the top inch of soil is dry. Do not allow to dry completely (brown leaf edges and dropping older leaves result). Do not overwater (root rot causes the same symptoms). Consistent, correct moisture is the key.',
            'Sensitivity: Fiddle leaf figs drop leaves when moved to a new location, when drafts hit them, when heat vents blow on them, or when temperature changes significantly. Position away from all drafts, vents, and frequently opened doors.',
            'Propagation: Stem cuttings with at least one leaf and node; root in water or moist potting mix. Slow but reliable.',
          ],
        },
        {
          type: 'h3',
          text: '🌿 Calathea / Prayer Plant (Calathea, Maranta, Ctenanthe spp.)',
        },
        {
          type: 'p',
          text: 'Calatheas and their relatives are grown for their extraordinary foliage — dramatically patterned in combinations of green, white, pink, and purple that no other plant group can match. They are the most humidity-demanding common houseplant and require more attention than the plants above, but reward that attention with some of the most beautiful foliage available.',
        },
        {
          type: 'list',
          items: [
            'Light: Low to medium indirect light. Direct sun scorches the delicate foliage. A north or low-east window works well. One of the few plants that actually prefers less light.',
            'Water: Keep the soil evenly moist — not wet, not dry. These plants do not tolerate drying out; the beautiful leaf edges will turn brown rapidly if the soil dries. Use filtered or distilled water if your tap water is heavily chlorinated or fluorinated.',
            'Humidity: The greatest challenge for calathea in most American homes. They need 50–60%+ relative humidity. Solutions: group multiple plants together (plants transpire and raise humidity in the immediate area), use a pebble tray with water beneath the pot, or use a small ultrasonic humidifier near the plants.',
            'Movement: Calatheas and marantas fold their leaves upward at night and open them in the morning — the "prayer plant" motion. This is normal and healthy behavior.',
          ],
        },
        {
          type: 'h3',
          text: 'Quick Reference: Eight More Essential Plants',
        },
        {
          type: 'table',
          headers: ['Plant', 'Key Care Note', 'Common Mistake', 'Special Feature'],
          rows: [
            [
              'Spider Plant (Chlorophytum comosum)',
              'Bright to medium indirect light; water when top inch is dry; produces babies (spiderettes) on long runners — root these in water for free new plants',
              'Fluoride-sensitive — brown tips in fluoride-heavy tap water; use filtered water if tip burn is a problem',
              'One of the most prolific propagators — a single plant produces dozens of babies per year; a gifter\'s plant',
            ],
            [
              'Aloe Vera',
              'Bright indirect to direct sun; water every 2–3 weeks; plant in cactus mix',
              'Overwatering; planted in regular potting mix that stays too wet',
              'Practical plant: slice open a leaf and apply the clear gel directly to minor burns, sunburn, and skin irritation',
            ],
            [
              'Rubber Plant (Ficus elastica)',
              'Medium to bright indirect light; water when top inch is dry; wipe glossy leaves with a damp cloth to keep them shining',
              'Moving the plant frequently (like fiddle leaf fig, it adapts to its spot); overwatering',
              'Comes in classic green, burgundy, pink-variegated (\'Tineke\'), and lime-yellow (\'Yellow Gem\') — variegated types need brighter light',
            ],
            [
              'Chinese Evergreen (Aglaonema spp.)',
              'Tolerates low to medium light better than most plants; water when top inch is dry; comes in green, red-pink, silver, and orange varieties',
              'Bright-colored varieties (red, orange, pink) require bright indirect light to maintain color; dark-leaved varieties tolerate lower light',
              'One of the toughest large-leaved tropical plants; highly recommended for offices and spaces with low natural light',
            ],
            [
              'Bird of Paradise (Strelitzia reginae)',
              'Needs very bright light — a direct south window is ideal; water when top 2 inches are dry; grows large (6+ feet indoors)',
              'Insufficient light (the most common reason it never flowers indoors); small pots (it flowers better when somewhat rootbound)',
              'One of the most architectural houseplants; produces its iconic orange flowers only after years of good growing — patience required',
            ],
            [
              'Pilea peperomioides (Chinese Money Plant)',
              'Bright indirect light; water when top inch is dry; rotate 1/4 turn weekly for even growth',
              'Insufficient light causes legginess; direct sun burns the leaves',
              'Produces abundant offsets (pups) at the base that can be separated and potted; one of the most shared plants among enthusiasts',
            ],
            [
              'Peperomia spp.',
              'Low to medium indirect light for most varieties; water when top half of soil is dry (stores water in thick leaves); comes in hundreds of varieties',
              'Overwatering; planted in dense, heavy soil that stays wet',
              'One of the best plants for offices, desks, and small spaces — compact, slow-growing, and tolerant of office conditions',
            ],
            [
              'Christmas / Holiday Cactus (Schlumbergera spp.)',
              'Bright indirect light; water when top inch is dry; reduce watering and move to a cooler (55–65°F) location in fall for 4–6 weeks to trigger winter bloom',
              'Overwatering in summer; not providing the cool temperature/reduced watering trigger in fall = no blooms',
              'A reliable, spectacular winter flower display that can last 4–6 weeks when properly triggered',
            ],
          ],
        },
        {
          type: 'tip',
          emoji: '🌱',
          text: 'Start with the easiest plants first — snake plant, pothos, ZZ plant — and let your success with these build your understanding of light and watering before moving to more demanding plants like calathea or fiddle leaf fig. Every plant you keep successfully teaches you something that makes the next one easier.',
        },
      ],
    },
    {
      id: 'placement',
      title: 'Section 4: Placement — Matching Plants to Every Room',
      blocks: [
        {
          type: 'p',
          text: 'The right plant in the right place requires understanding both what the plant needs and what each room in your home provides. Light is always the primary consideration; temperature and humidity follow. A plant perfectly suited to your bathroom may decline in your office; one that thrives on your kitchen windowsill may struggle in your bedroom. This section matches plants to the specific conditions of every common room.',
        },
        {
          type: 'h3',
          text: 'Room-by-Room Placement Guide',
        },
        {
          type: 'table',
          headers: ['Room', 'Typical Light', 'Typical Humidity', 'Temperature Range', 'Best Plants', 'Plants to Avoid'],
          rows: [
            [
              'Living Room (south or west windows)',
              'Medium to bright indirect; possibly direct afternoon sun',
              'Average home humidity (30–50%)',
              '68–78°F',
              'Fiddle leaf fig, bird of paradise, rubber plant, monstera, large snake plant, trailing pothos, ZZ plant, large peace lily',
              'Humidity-loving plants (calathea, ferns) unless you add a humidifier; cacti/succulents only if within 2 feet of a south window',
            ],
            [
              'Living Room (north windows or interior)',
              'Low to medium indirect',
              'Average home humidity',
              '68–78°F',
              'Snake plant, ZZ plant, cast iron plant, aglaonema (dark-leaved varieties), pothos, heartleaf philodendron, peace lily',
              'Sun-loving plants (succulents, bird of paradise, herbs); any plant requiring bright light',
            ],
            [
              'Bedroom',
              'Variable; often medium indirect; blackout curtains may reduce morning light',
              'Average (may be slightly lower due to climate control)',
              '65–75°F (typically slightly cooler)',
              'Snake plant (releases oxygen at night), pothos, ZZ plant, peace lily, lavender (on a bright sill for fragrance), spider plant',
              'Large plants that outgrow the space; strong-scented plants that may disturb sleep',
            ],
            [
              'Kitchen',
              'Highly variable; windowsill may have bright direct light; countertops may have low light',
              'Typically higher humidity from cooking and washing',
              '68–80°F (fluctuates with cooking)',
              'Herbs (on a bright south or west sill: basil, thyme, rosemary, mint); pothos (trailing from a high shelf); aloe vera (for kitchen burns); spider plant; small succulents on a sunny sill',
              'Large statement plants that take up counter space; fussy plants that react to temperature fluctuations from oven use',
            ],
            [
              'Bathroom',
              'Often low; frosted windows; OR bright if skylight or clear window present',
              'Highest in the house (steam from showers; 50–70% RH)',
              '70–80°F; warm, stable',
              'Calathea and maranta (ideal humidity), peace lily, ferns (Boston, maidenhair, bird\'s nest), orchids (Phalaenopsis loves bathroom humidity), pothos, monstera in a larger bright bathroom',
              'Succulents, cacti, and drought-tolerant plants that dislike high humidity; plants needing bright light if the bathroom has no natural light',
            ],
            [
              'Home Office',
              'Variable; depends on window placement; often north or shaded',
              'Average to low (often dry from electronics and HVAC)',
              '68–76°F',
              'Snake plant, ZZ plant, pothos (hanging from shelving or trailing across a desk), peperomia (excellent for desks), aglaonema, cast iron plant, philodendron',
              'High-maintenance plants that require frequent monitoring; plants that drop leaves or require daily deadheading',
            ],
            [
              'Sunroom or Bright Conservatory',
              'Bright to very bright; possible direct sun',
              'Variable; can be very dry in summer with direct sun',
              'Variable; can be very hot in summer, cold in winter',
              'Cacti, succulents, bird of paradise, herbs, aloe, jade plant, citrus trees, geraniums (winter), poinsettia, Christmas cactus, any light-loving plant',
              'Shade-loving plants (calathea, ferns, peace lily); plants sensitive to temperature extremes in poorly insulated sunrooms',
            ],
          ],
        },
        {
          type: 'h3',
          text: 'Plants for Specific Challenges',
        },
        {
          type: 'list',
          items: [
            'Low light spaces: Snake plant, ZZ plant, cast iron plant. Do not try to grow sun-loving plants in dark corners and then wonder why they decline — the single most common plant failure is wrong plant for the light level.',
            'High humidity spaces (bathrooms): Calathea, maranta, Boston fern, bird\'s nest fern, peace lily, orchids. These humidity-lovers often struggle in the dry air of other rooms but thrive in bathroom conditions.',
            'Forgetful waterers: Snake plant, ZZ plant, pothos, spider plant, aloe, jade plant, ponytail palm. These plants are genuinely tolerant of weeks between waterings.',
            'Pet-safe households: Calathea, spider plant, haworthia, Boston fern, peperomia, prayer plant, African violet, Christmas cactus, ponytail palm. Many popular houseplants are toxic to cats and dogs; if pets are present, verify safety before purchasing.',
            'Air purifying: Peace lily, spider plant, pothos, snake plant, dracaena, rubber plant are all documented in the NASA Clean Air Study for removing common indoor air pollutants. The practical caveat: you would need many plants (some estimate 10–20 per 100 square feet) for measurable air quality improvement in a typical home. The benefit is real but shouldn\'t be the primary reason to buy plants.',
          ],
        },
        {
          type: 'warning',
          emoji: '🐾',
          text: 'Pet-toxic plants to know: Pothos, philodendron, ZZ plant, monstera, peace lily, snake plant (toxic to cats and dogs), dieffenbachia, aloe, jade plant. If pets chew plants, avoid these entirely or place them completely out of reach.',
        },
        {
          type: 'tip',
          emoji: '📍',
          text: 'Before buying any plant, stand in the intended location and honestly assess the light. Hold a book up — if you can read it comfortably without turning on a light, you have medium light at minimum. If the space feels dim even during the day, you have low light. Match your plant selection to that honest assessment and you will avoid the most common cause of houseplant failure.',
        },
      ],
    },
    {
      id: 'soil-pots-repotting',
      title: 'Section 5: Soil, Pots & Repotting',
      blocks: [
        {
          type: 'p',
          text: 'The potting mix and container you choose affect every other aspect of plant care — how quickly the soil dries, how well the roots are oxygenated, how efficiently nutrients are available, and how susceptible the plant is to root rot. Good decisions here prevent problems that no amount of attentive watering or fertilizing can fix afterward.',
        },
        {
          type: 'h3',
          text: 'Potting Mixes: What\'s in the Bag and What to Add',
        },
        {
          type: 'p',
          text: 'Standard all-purpose potting mix is suitable for most common tropical houseplants straight from the bag, but it benefits from amendment for specific plant types. Potting mix is not garden soil — it contains little or no actual soil but is instead a blend of peat or coco coir, perlite, vermiculite, and sometimes bark or compost. This blend provides adequate drainage and aeration for most plants in most conditions.',
        },
        {
          type: 'table',
          headers: ['Soil Type', 'Best For', 'How to Make It', 'Key Benefit'],
          rows: [
            [
              'Standard potting mix (as-sold)',
              'Moisture-loving tropicals: calathea, peace lily, ferns, pothos, philodendron in medium-to-bright light',
              'Purchase standard all-purpose potting mix; use as-is',
              'Good moisture retention; widely available; suitable for most average tropical houseplants',
            ],
            [
              'Well-draining tropical mix',
              'Most aroids (monstera, philodendron, pothos), rubber plant, ZZ plant',
              'Standard potting mix + 20–25% perlite by volume. Mix thoroughly.',
              'Improved drainage and root aeration; reduces risk of root rot in plants that prefer to dry slightly between waterings',
            ],
            [
              'Cactus/succulent mix',
              'Cacti, succulents, aloe, haworthia, jade plant, echeveria',
              'Purchase premixed cactus/succulent potting mix; OR standard potting mix + 50% coarse perlite + small amount of coarse sand',
              'Very fast drainage; prevents the root rot that kills succulents in standard mixes',
            ],
            [
              'Orchid bark mix',
              'Phalaenopsis orchids, some epiphytic plants',
              'Purchase premixed orchid bark; or large bark chips + perlite + a small amount of sphagnum moss',
              'Orchid roots need air, not soil; bark mix provides the support and moisture retention orchids require without smothering roots',
            ],
            [
              'High-humidity mix (moisture-retaining)',
              'Ferns, calathea in low-humidity environments; terrarium plants',
              'Standard potting mix + 20% coco coir + reduce perlite to 10%; or add a small amount of sphagnum moss',
              'Enhanced moisture retention helps maintain consistent moisture for plants that cannot tolerate drying out',
            ],
          ],
        },
        {
          type: 'tip',
          emoji: '🌿',
          text: 'Perlite — those tiny white balls in potting mix that look like styrofoam beads — is a volcanic glass heated until it pops into a lightweight, porous particle. Adding 20–25% perlite to standard potting mix is the single most impactful amendment you can make to prevent root rot. For succulents, increase to 40–50%. A bag costs $5–10 and lasts for years.',
        },
        {
          type: 'h3',
          text: 'Choosing the Right Pot',
        },
        {
          type: 'list',
          items: [
            'Size matters enormously: The most common potting mistake is choosing a pot that is too large. A plant in an oversized pot sits in soil that takes weeks to dry out, creating chronically moist conditions that promote root rot. Choose a pot that is 1–2 inches larger in diameter than the plant\'s current root ball.',
            'Drainage holes are non-negotiable: Every pot used for a living plant should have at least one drainage hole. If a beautiful decorative pot lacks holes, use it as a cachepot — place the plant in a plain nursery pot with drainage inside the decorative pot and remove the inner pot to water.',
            'Terracotta (unglazed clay): Porous terracotta allows air and moisture movement through the pot walls, which dries soil faster and reduces root rot risk. Ideal for succulents, cacti, Mediterranean herbs, and any plant that prefers drying between waterings. Trade-off: you may need to water more frequently.',
            'Glazed ceramic and plastic: Non-porous; holds moisture longer than terracotta. Better for moisture-loving plants (calathea, ferns, peace lily) and in low-humidity environments where soil would otherwise dry too quickly.',
            'Self-watering pots: Feature a reservoir at the bottom that wicks water up to the roots as needed. Genuinely useful for forgetful waterers and plants that benefit from consistent moisture. Less appropriate for drought-tolerant plants that need the soil to dry completely between waterings.',
          ],
        },
        {
          type: 'h3',
          text: 'Repotting: When and How',
        },
        {
          type: 'p',
          text: 'Most houseplants benefit from repotting every 1–2 years, though some prefer to be somewhat rootbound (snake plant, ZZ plant, peace lily) and should be repotted less frequently. The signs that a plant needs repotting are reliable: roots emerging from drainage holes; roots circling the soil surface; the plant drying out extremely rapidly after watering; soil that has become compacted or has broken down into a dense mass.',
        },
        {
          type: 'list',
          items: [
            'Choose the right time: Spring is the ideal time to repot most houseplants — the beginning of the active growth season gives roots the longest possible warm period to establish in their new container. Avoid repotting in winter when the plant is growing slowly, or when the plant is severely stressed by pests, disease, or root rot.',
            'Choose the right pot: One size up only — 1–2 inches larger in diameter. No larger.',
            'Prepare the new pot: Place a coffee filter or mesh screen over the drainage hole to prevent soil from washing out while still allowing drainage. Add a layer of fresh potting mix to the bottom.',
            'Remove the plant: Tip the pot on its side and gently slide the plant out. If stuck, run a knife or thin spatula around the inside edge. Do not pull the stem.',
            'Inspect and prepare the root ball: Shake off the old soil gently. Examine the roots — white and firm is healthy; brown, black, or mushy roots are rotted and should be trimmed away with clean scissors. If significant root rot is present, repotting is urgent; trim all rotted roots, let the plant dry for a few hours, and repot in fresh, dry mix.',
            'Position and fill: Place the plant in the center of the new pot at the same depth it was previously growing. Fill in around the root ball with fresh potting mix, pressing gently to eliminate large air pockets. Leave 1 inch of space below the pot rim for watering.',
            'Water and wait: Water thoroughly after repotting. Then wait at least 4–6 weeks before fertilizing — give any damaged roots time to recover before adding fertilizer.',
          ],
        },
        {
          type: 'tip',
          emoji: '🪴',
          text: 'Spring repotting tip: if you are unsure whether a plant needs repotting, gently tip it out of its pot in spring to check. If the roots are tightly circling the pot or have filled the entire soil mass, it\'s time. If the roots still have room to grow, slide the plant back in and check again next spring.',
        },
      ],
    },
    {
      id: 'feeding',
      title: 'Section 6: Feeding — Fertilizing Your Houseplants',
      blocks: [
        {
          type: 'p',
          text: 'Fertilizer is the most overdone aspect of beginner houseplant care. Most beginners who lose plants to overwatering or insufficient light compensate by adding more fertilizer, which does not address the actual problem and can make things worse. A plant that is receiving incorrect light or water is not able to use added nutrients effectively; over-fertilizing stressed plants burns roots and creates salt buildup in the soil.',
        },
        {
          type: 'p',
          text: 'The correct approach to fertilizing houseplants is: fertilize healthy, actively growing plants during their active growing season, and stop or significantly reduce fertilizer during the plant\'s rest period (typically fall and winter for most temperate-origin and many tropical houseplants). Fix light and water problems first; then address fertility.',
        },
        {
          type: 'h3',
          text: 'Fertilizer Basics: N-P-K and What It Means',
        },
        {
          type: 'list',
          items: [
            'The three numbers: Every fertilizer label shows three numbers separated by hyphens (e.g., 20-20-20 or 10-5-5). These are the N-P-K ratio: Nitrogen (N) for foliage and stem growth; Phosphorus (P) for root development and flowering; Potassium (K) for overall health, stress resistance, and disease resistance.',
            'For foliage plants: A balanced fertilizer (equal or near-equal N-P-K, such as 20-20-20 or 10-10-10) supports all-round growth and is appropriate for most tropical foliage houseplants.',
            'For flowering plants: A formula with higher phosphorus (the middle number, such as 5-10-5 or 7-9-5) supports flower production. Switch to a higher-phosphorus formula when plants are approaching their bloom season.',
            'For cacti and succulents: Use a dilute balanced fertilizer at 1/4 strength, or a specific cactus fertilizer. These plants are adapted to nutrient-poor soils and require very little fertilizer.',
          ],
        },
        {
          type: 'h3',
          text: 'When and How Much: The Simple Schedule',
        },
        {
          type: 'table',
          headers: ['Plant Category', 'Fertilizing Season', 'Frequency', 'Rate', 'Winter Approach'],
          rows: [
            [
              'Active tropical foliage plants (pothos, monstera, philodendron, rubber plant)',
              'Spring through fall (March–September in most of the US)',
              'Every 2–4 weeks during active growth',
              'Half the manufacturer\'s recommended rate — half-strength is safer and still effective',
              'Do not fertilize, or fertilize once at full dormancy (December–January) only',
            ],
            [
              'Slow-growing or low-light plants (ZZ plant, snake plant, cast iron plant)',
              'Spring through summer only',
              'Every 4–6 weeks at most',
              'Quarter to half strength',
              'No fertilizer in fall or winter',
            ],
            [
              'Succulents and cacti',
              'Spring and early summer only',
              'Once per month maximum',
              'Quarter strength; or once with a slow-release granular at the start of the growing season',
              'No fertilizer from September through February',
            ],
            [
              'Orchids (Phalaenopsis)',
              'Year-round but less in winter',
              'Every 2–3 weeks with a dilute orchid fertilizer ("weakly weekly" at 1/4 strength is a common approach)',
              'Quarter strength weekly; or half strength biweekly',
              'Reduce to monthly in winter',
            ],
            [
              'Flowering annuals and seasonal plants',
              'Actively growing and flowering period',
              'Every 1–2 weeks with a higher-phosphorus formula',
              'Per label; do not reduce for flowering plants at the height of bloom',
              'Depends on plant cycle',
            ],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Signs of over-fertilizing: white crusty deposits on soil surface or pot rim; yellowing or browning leaf tips; wilting despite adequate watering; or in severe cases, root burn (roots turn brown). Remedy: flush the soil thoroughly with water to wash out excess salts; wait 4–6 weeks before fertilizing again.',
        },
        {
          type: 'tip',
          emoji: '🌱',
          text: 'Signs of under-fertilizing: slow or stalled growth despite adequate light and water; progressively paler, smaller new leaves; loss of variegation in variegated plants. These symptoms are slow to develop and may also indicate other problems — particularly insufficient light. Assess light first before reaching for fertilizer.',
        },
      ],
    },
    {
      id: 'pests-troubleshooting',
      title: 'Section 7: Pests, Problems & Troubleshooting',
      blocks: [
        {
          type: 'p',
          text: 'Every houseplant owner eventually encounters pests or problems. The key is early detection — catching an insect infestation when it is small and treating it quickly rather than discovering it after the entire collection is affected. Inspect plants carefully every time you water: look under leaves, at stem joints, and along soil surfaces. A hand lens or the camera zoom on your phone reveals pests that are invisible to the naked eye.',
        },
        {
          type: 'h3',
          text: 'Common Pests: Identification and Treatment',
        },
        {
          type: 'table',
          headers: ['Pest', 'What You See', 'Favorite Plants', 'Treatment', 'Prevention'],
          rows: [
            [
              'Fungus Gnats',
              'Tiny black flies hovering near soil; larvae are thin white worms in the top inch of soil; adults are more annoying than damaging; larvae damage roots of seedlings',
              'Any plant in moist potting mix; worst in overwatered plants',
              '(1) Let soil dry more thoroughly between waterings — larvae cannot survive in dry soil; (2) Apply a Bti product (Bacillus thuringiensis israelensis, sold as Mosquito Bits or Gnatrol) to the soil — kills larvae without harming plants; (3) Yellow sticky traps catch adults',
              'The only reliable prevention is allowing soil to dry appropriately. Fungus gnats are primarily a symptom of overwatering.',
            ],
            [
              'Spider Mites',
              'Fine webbing on leaf undersides and between stems; stippled, pale, or bronzed leaves; tiny red-brown or white moving dots visible with magnification; worst in hot, dry conditions',
              'Most houseplants; particularly bad on ivies, roses, and plants near heating vents',
              '(1) Blast plant with water (shower or outdoor hose) to physically remove mites and webbing; (2) Apply neem oil or insecticidal soap to all leaf surfaces including undersides — repeat every 5–7 days for 3 treatments; (3) Isolate affected plant',
              'Maintain adequate humidity (mites thrive in dry conditions); mist leaves periodically; keep plants away from hot, dry heating vents',
            ],
            [
              'Mealybugs',
              'White, cottony, fluffy masses in leaf axils and along stems; sticky honeydew on leaves below; distorted new growth',
              'Succulents, cacti, pothos, philodendron, orchids, citrus; almost any houseplant',
              '(1) Remove visible colonies with a cotton swab dipped in 70% isopropyl alcohol; wipe all surfaces; (2) Apply neem oil or insecticidal soap to all plant surfaces; (3) Repeat every week for 4–6 weeks — mealybugs are persistent; (4) Isolate affected plant',
              'Inspect plants carefully before purchase; quarantine new plants for 2–3 weeks before introducing them to your collection',
            ],
            [
              'Scale Insects',
              'Brown, tan, or gray oval bumps attached to stems and leaves (look like part of the plant); sticky honeydew below; sooty black mold on leaves',
              'Ficus, citrus, orchids, ferns; many woody-stemmed houseplants',
              '(1) Scrape off individual scales with a toothbrush or fingernail; (2) Wipe stems and leaves with a cotton pad soaked in isopropyl alcohol; (3) Apply neem oil or horticultural oil; repeat weekly for 4–6 weeks; (4) Severely infested plants may not be worth saving',
              'Inspect new plants before purchasing; quarantine new arrivals',
            ],
            [
              'Aphids',
              'Soft-bodied, small insects (green, black, white, or pink) clustered on new growth, flower buds, and shoot tips; sticky honeydew; distorted new growth',
              'Any fast-growing plants with tender new growth; herbs, tropical plants, flowering plants',
              '(1) Blast off with water — most aphid populations are physically removed this way; (2) Insecticidal soap spray on all surfaces; (3) Repeat every 5–7 days; (4) Neem oil for severe infestations',
              'Inspect new growth regularly; aphid populations explode quickly when undetected; early detection is critical',
            ],
            [
              'Thrips',
              'Tiny, slender, fast-moving insects; silvery streaking or stippling on leaves; black fecal specks visible with a hand lens; can vector viral diseases',
              'Any houseplant; particularly bad on fiddle leaf fig, monstera, and orchids',
              '(1) Isolate affected plant immediately; (2) Neem oil spray, especially on new growth and undersides of leaves; (3) Insecticidal soap; (4) Repeat every 5–7 days for 4 treatments; (5) Yellow sticky traps monitor population levels',
              'Thrips can enter the house on cut flowers, clothing, or through open windows; there is no reliable prevention, only early detection and rapid response',
            ],
          ],
        },
        {
          type: 'h3',
          text: 'Common Non-Pest Problems: Quick Diagnosis',
        },
        {
          type: 'table',
          headers: ['Symptom', 'Most Likely Cause(s)', 'Less Common Cause', 'Solution'],
          rows: [
            [
              'Yellow leaves, older leaves first',
              'Overwatering (most common); underwatering; natural aging of older leaves at the base',
              'Nitrogen deficiency after months without fertilizing; rootbound',
              'Check soil moisture — if wet, let dry and improve drainage; if dry, water more consistently. A few yellow leaves at the base is normal; many yellowing leaves throughout is a problem.',
            ],
            [
              'Brown crispy leaf tips',
              'Low humidity (most common, especially in winter); fluoride in tap water (for sensitive species); inconsistent watering; fertilizer salt buildup',
              'Underwatering',
              'Increase humidity (humidifier, pebble tray, grouping plants); switch to filtered water for sensitive species; flush soil monthly to remove salt buildup',
            ],
            [
              'Soft, mushy stems or crown',
              'Overwatering / root rot; bacterial or fungal infection',
              'Physical damage',
              'Act quickly: remove affected soil; trim rotted roots; repot in fresh dry mix; reduce watering significantly. If the entire stem is mushy at the base, the plant may be unrecoverable.',
            ],
            [
              'Leggy, stretched growth toward light',
              'Insufficient light; the plant is reaching for a brighter source',
              'Infrequent rotation',
              'Move to a brighter location; or add a grow light. Rotate the plant 1/4 turn weekly for even growth.',
            ],
            [
              'Leaves dropping (particularly fiddle leaf fig)',
              'Sudden change in location or environment; cold drafts; heat vent exposure; inconsistent watering',
              'Overwatering; pest stress',
              'Stabilize the plant\'s environment; move away from vents and drafts; establish a consistent watering routine and do not move the plant.',
            ],
            [
              'No new growth for months',
              'Insufficient light (most common); dormancy or rest period (winter); rootbound; severely depleted soil after years without repotting',
              'Temperature too cold',
              'Assess light first. If light is adequate: check if rootbound (repot if yes); fertilize if not done recently; verify temperature is appropriate for the species.',
            ],
            [
              'White crusty buildup on soil or pot rim',
              'Mineral and fertilizer salt accumulation from tap water and fertilizer; harmless aesthetically but can affect soil chemistry over time',
              'Calcium deposits from hard water',
              'Flush the soil by running a large volume of water through it monthly. Reduce fertilizer concentration or frequency. Consider switching to filtered water.',
            ],
            [
              'Mold or fungus on soil surface',
              'Overwatering; poor air circulation; organic debris on soil surface; high humidity',
              'Poor-quality potting mix with organic matter at the surface',
              'Let soil dry more thoroughly; improve air circulation; remove the mold physically; sprinkle a thin layer of perlite on the soil surface to deter mold growth',
            ],
          ],
        },
        {
          type: 'tip',
          emoji: '🔍',
          text: 'Quarantine every new plant for 2–3 weeks before placing it near your existing collection. A plant that looks healthy at the garden center may be harboring early-stage mealybugs, scale, or spider mites that only become visible once the plant is home. This single habit prevents the most common cause of widespread pest outbreaks in a houseplant collection.',
        },
      ],
    },
  ],
}
