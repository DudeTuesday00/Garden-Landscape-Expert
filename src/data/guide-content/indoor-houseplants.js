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
  ],
}
