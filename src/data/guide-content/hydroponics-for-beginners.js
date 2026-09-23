export const hydroponicsForBeginnersContent = {
  id: 'hydroponics-for-beginners',
  hero: {
    emoji: '💧',
    title: 'Hydroponics for Beginners',
    subtitle: 'What hydroponics really is, which system to build first, what you need to buy, and how to grow a first crop without the common mistakes.',
  },
  intro: 'Hydroponics means growing plants without soil, with their roots fed by a nutrient solution instead. That single change removes soil-borne pests, lets you grow year-round indoors, and — in a well-run system — often produces faster growth from the same light than soil does. It also swaps one set of skills for another: you stop worrying about weeds and soil, and start managing water quality, nutrients, and light. This guide covers the fundamentals and a realistic first-crop plan. To match a specific system to your space and budget, use the site\'s Hydroponic System Chooser tool; for the nutrient and pH detail this guide only introduces, see Hydroponic Nutrients, pH & EC; and for the simplest possible way to begin, see The Kratky Method.',
  sections: [
    {
      id: 'how-hydroponics-works',
      title: 'How Hydroponics Actually Works',
      blocks: [
        {
          type: 'p',
          text: 'Soil does four jobs for a plant: it anchors the roots, holds water, holds dissolved nutrients, and lets air reach the roots. Hydroponics replaces the soil with something else that does the same four jobs — a net pot and a little grow medium for support, and a nutrient solution that carries water and food straight to the roots.',
        },
        {
          type: 'list',
          items: [
            'Water and nutrients arrive already dissolved, so the plant spends less energy searching for them — one reason growth is often faster than in soil under the same light.',
            'Roots still need oxygen. Every hydroponic system is, at heart, a different answer to the question "how do we get air to submerged roots?" — an air pump, a flowing film, periodic flooding, or an air gap.',
            'There is no soil to buffer mistakes, so a wrong nutrient mix or a pump failure shows up fast. Hydroponics rewards attention more than experience.',
            'Light and temperature matter just as much as in any garden. A perfect nutrient solution cannot make up for a dim window.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌱',
          text: 'Hydroponic does not automatically mean better or organic. It is simply a different way to deliver the same water and nutrients — the advantages are control, speed, and year-round growing, not a guarantee of superior flavor or yield.',
        },
        {
          type: 'image',
          src: '/guides/hydroponics-for-beginners/lettuce-roots-net-pots-reservoir.jpg',
          alt: 'Healthy white roots of hydroponic lettuce plants hanging through net pots into a water reservoir',
          caption: 'In hydroponics the roots take up water and nutrients directly from the solution — no soil required.',
        },
      ],
    },
    {
      id: 'choosing-a-system',
      title: 'Choosing Your First System',
      blocks: [
        {
          type: 'p',
          text: 'The right first system depends on what you want to grow and how much electricity, money, and attention you want to commit. There are seven common home designs; the differences that matter most are whether it needs power, how big a plant it can support, and what happens when something fails.',
        },
        {
          type: 'table',
          headers: ['System', 'How It Works', 'Needs Power?', 'Best For'],
          rows: [
            ['Kratky', 'Roots hang in a still reservoir; an air gap forms as the water level drops', 'No', 'Lettuce, herbs, and greens; the easiest start'],
            ['Wick', 'A wick draws solution up into a grow medium', 'No', 'Herbs and small plants on a windowsill'],
            ['Deep Water Culture (DWC)', 'Roots sit in an aerated reservoir', 'Air pump', 'Fast growth; greens, and single large plants in a bucket'],
            ['NFT', 'A thin film of solution flows down sloped channels', 'Pump', 'Lettuce, herbs, and strawberries in a compact footprint'],
            ['Ebb & Flow', 'A tray floods on a timer, then drains', 'Pump and timer', 'Versatile, including larger fruiting plants'],
            ['Dutch Bucket / Drip', 'Media-filled buckets fed by drip lines', 'Pump', 'Tomatoes, peppers, and cucumbers'],
            ['Vertical Tower', 'Plants stacked in a column fed from the top', 'Pump', 'Many greens and herbs in little floor space'],
          ],
        },
        {
          type: 'tip',
          emoji: '🧭',
          text: 'Not sure? Use the site\'s Hydroponic System Chooser tool — it ranks these seven systems against your goals, electricity comfort, budget, space, and time, and shows exactly why the others were ruled out.',
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Pump-driven systems fail in two directions: NFT and towers can dry out and lose a crop within hours of a pump stopping, while a leaking or overflowing ebb-and-flow tray can flood a floor. If the system will run unattended, start with a passive system or plan for a way to notice a failure quickly.',
        },
        {
          type: 'image',
          src: '/guides/hydroponics-for-beginners/countertop-dwc-basil-system.jpg',
          alt: 'A small countertop deep water culture bucket system with healthy basil plants growing',
          caption: 'A single-bucket deep water culture system is a popular step up from passive growing once you are comfortable with the basics.',
        },
      ],
    },
    {
      id: 'what-you-need',
      title: 'What You Need to Buy',
      blocks: [
        {
          type: 'p',
          text: 'A beginner setup needs a short list of items, and most of the cost goes into the nutrients, the light, and a way to measure. The container can be improvised; the measuring cannot.',
        },
        {
          type: 'list',
          items: [
            'An opaque reservoir. Light reaching the nutrient solution grows algae, so use a dark container or wrap a clear one.',
            'Net pots or net cups to hold each plant at the top of the reservoir.',
            'A starting medium — rockwool cubes, coco coir plugs, or peat-free starter plugs for seeds — and, in systems that use one, a grow medium such as expanded clay pebbles.',
            'A nutrient made specifically for hydroponics. Regular garden or lawn fertilizer is not formulated for this and can leave plants short of key elements.',
            'A pH test method (a calibrated pH pen or a reliable drop test) plus pH-up and pH-down adjusters, and an EC or TDS meter to measure nutrient strength.',
            'A light if the setup is indoors or the window is weak: a full-spectrum LED grow light is the standard choice.',
            'An air pump and air stone for deep water culture; a submersible pump and timer for pump-driven systems.',
          ],
        },
        {
          type: 'table',
          headers: ['Crop Type', 'Light Per Day (indoors)', 'Notes'],
          rows: [
            ['Lettuce, greens, most herbs', '12–16 hours', 'Strong light produces compact, flavorful plants; too little makes them leggy'],
            ['Fruiting plants (tomato, pepper, cucumber)', '14–18 hours', 'Needs noticeably stronger light than greens to flower and set fruit'],
          ],
        },
        {
          type: 'image',
          src: '/guides/hydroponics-for-beginners/hydroponic-supplies-laid-out.jpg',
          alt: 'Beginner hydroponic supplies laid out on a table including net pots, clay pebbles, rockwool cubes and plain bottles',
          caption: 'Most of a beginner budget goes to nutrients, light, and measuring tools — the container itself can be improvised.',
        },
      ],
    },
    {
      id: 'first-crop',
      title: 'Your First Crop, Step by Step',
      blocks: [
        {
          type: 'p',
          text: 'Start with lettuce or basil. Both are fast, forgiving, and well suited to nearly every system — lettuce typically finishes in about 30-45 days in hydroponics and basil in roughly 20-25 days from transplant, so you get feedback quickly.',
        },
        {
          type: 'list',
          items: [
            'Start seeds in moist rockwool or coco plugs, kept warm (roughly 65-75°F) and gently misted, not soaked. Lettuce and basil usually sprout within a few days.',
            'Once roots show at the bottom of the plug and the first true leaves appear, set the plug into a net pot.',
            'Fill the reservoir with water, add the nutrient at a mild strength for seedlings (start at the low end of the label rate), and adjust pH to the 5.5-6.5 range.',
            'Keep the solution cool — roughly 65-72°F — because warm water holds less oxygen and encourages root problems.',
            'Give the plants light for the hours listed above, then measure pH and nutrient strength every few days at first, so you learn how your particular setup drifts.',
            'Refresh the solution on a regular schedule (see Hydroponic Nutrients, pH & EC) and harvest outer leaves so lettuce and herbs keep producing.',
          ],
        },
        {
          type: 'tip',
          emoji: '📓',
          text: 'Keep a simple log of the date, pH, nutrient strength, and anything you changed. Hydroponic problems are almost always traceable to a number that drifted — a log turns a mystery into a pattern within a couple of crops.',
        },
        {
          type: 'image',
          src: '/guides/hydroponics-for-beginners/seedlings-rockwool-led-light.jpg',
          alt: 'Young seedlings sprouting in rockwool cubes in a tray under an LED grow light',
          caption: 'Seeds sprout in moist rockwool or coco plugs, then move into a net pot once roots appear.',
        },
      ],
    },
    {
      id: 'common-mistakes',
      title: 'Common Beginner Mistakes',
      blocks: [
        {
          type: 'p',
          text: 'Nearly every failed first hydroponic crop traces back to one of a small set of mistakes. Most are cheap to avoid once you know them.',
        },
        {
          type: 'table',
          headers: ['Mistake', 'What Goes Wrong', 'Fix'],
          rows: [
            ['Clear reservoir in a bright room', 'Light reaches the solution and grows green algae that competes with roots', 'Use an opaque container or wrap it in dark material'],
            ['Using soil fertilizer', 'Not formulated for water-only growing; can leave plants short of calcium, magnesium, or micronutrients', 'Use a hydroponic-specific nutrient'],
            ['Ignoring pH', 'Outside the right range, plants cannot absorb nutrients that are present in the water', 'Test regularly and adjust into the 5.5-6.5 range'],
            ['Too much nutrient', 'Tip burn, scorched leaf edges, stunted growth', 'Follow the label, start weak, and measure strength rather than guessing'],
            ['Warm water', 'Low oxygen and root rot, especially in still or slowly aerated systems', 'Keep the reservoir cool and shaded; aerate where the system calls for it'],
            ['Too little light', 'Leggy, pale plants and no fruit', 'Match light hours and intensity to the crop; see the light table above'],
            ['Starting too big', 'A complex system and a demanding crop together make failures hard to diagnose', 'Start with one simple system and one easy crop'],
          ],
        },
        {
          type: 'image',
          src: '/guides/hydroponics-for-beginners/harvesting-hydroponic-lettuce.jpg',
          alt: 'A gardener harvesting fresh lettuce leaves from a hydroponic system',
          caption: 'Harvesting outer leaves keeps lettuce and herbs producing for weeks from the same plants.',
        },
      ],
    },
  ],
}
