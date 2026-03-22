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
  ],
}
