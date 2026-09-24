export const hydroponicGrowLightsContent = {
  id: 'hydroponic-grow-lights',
  hero: {
    emoji: '💡',
    title: 'Grow Lights for Hydroponics',
    subtitle: 'How much light plants really need, which kind of light to buy, how high to hang it, and what it costs to run — without the marketing hype.',
  },
  intro: 'A hydroponic system can deliver perfect water and nutrients, but without enough light the plants still will not thrive — indoors, the light is the one input you have to supply entirely yourself. The good news is that light is measurable: what matters is not how bright a lamp looks or how many watts it uses, but how many usable photons reach the plants each day. This guide explains that in plain terms, compares the common light types, gives daily light targets by crop, and covers placement and running cost. Use it alongside the site\'s Grow Light DLI Calculator, which does the math for your specific light and crop.',
  sections: [
    {
      id: 'light-basics',
      title: 'What Plants Actually Need From Light',
      blocks: [
        {
          type: 'p',
          text: 'Plants use light as an energy source, and what counts is the number of photons in the useful wavelengths that land on the leaves. Three measurements come up, and only two of them matter for growing.',
        },
        {
          type: 'table',
          headers: ['Term', 'What It Measures', 'Why It Matters'],
          rows: [
            ['Lumens', 'Brightness as the human eye sees it', 'Not useful for plants — the eye and a plant respond to different wavelengths'],
            ['PPFD (µmol/m²/s)', 'Usable photons reaching a square meter of canopy each second', 'The number that tells you how intense the light is at the plants'],
            ['DLI (mol/m²/day)', 'Total usable photons over a whole day', 'The number that tells you whether plants get enough — it combines intensity and hours'],
          ],
        },
        {
          type: 'list',
          items: [
            'DLI is PPFD multiplied by the hours of light and converted to daily units: PPFD × hours × 3600 ÷ 1,000,000. A light at 200 µmol/m²/s for 16 hours delivers about 11.5 mol/m²/day.',
            'The same DLI can come from a stronger light for fewer hours or a weaker light for more hours, within reason. Plants also need a dark period, so avoid running lights 24 hours a day.',
            'PPFD drops quickly with distance from the light, so it must be measured or looked up at canopy height, not at the lamp.',
          ],
        },
        {
          type: 'tip',
          emoji: '🧮',
          text: 'Use the site\'s Grow Light DLI Calculator to turn your light\'s PPFD and hours into a DLI and see whether it matches your crop, or to work out the hours you would need at a given intensity.',
        },
        {
          type: 'image',
          src: '/guides/hydroponic-grow-lights/led-light-over-lettuce.jpg',
          alt: 'A white LED grow light bar hanging above healthy lettuce plants in a hydroponic system',
          caption: 'What matters is how much usable light reaches the plants each day, not how bright a lamp looks.',
        },
      ],
    },
    {
      id: 'light-types',
      title: 'Choosing a Type of Light',
      blocks: [
        {
          type: 'p',
          text: 'Several kinds of light can grow plants indoors. For most home hydroponic growers, full-spectrum LEDs are the practical default, but the older technologies still have a place.',
        },
        {
          type: 'table',
          headers: ['Type', 'Strengths', 'Drawbacks', 'Best For'],
          rows: [
            ['Full-spectrum white LED', 'Efficient, runs cool, long-lived, widely available in bar and panel forms', 'Quality and honesty of ratings vary; cheap units may overstate output', 'Almost everything; the standard home choice'],
            ['Fluorescent (T5 high output)', 'Affordable, cool-running, even light over a shelf', 'Less efficient than LED, and bulbs need replacing', 'Seedlings, lettuce, and herbs on shelves'],
            ['Metal halide / HPS (HID)', 'Very high output', 'Hot, power-hungry, and needs ventilation', 'Large or commercial setups; rarely worth it at home'],
            ['Ordinary household bulbs', 'Cheap and on hand', 'Low usable output for their watts, and often too weak', 'A last resort for a sprout or two'],
          ],
        },
        {
          type: 'list',
          items: [
            'Look for a manufacturer that publishes PPFD measurements at set distances rather than only lumens or "equivalent watts." Real numbers are the best sign of an honest product.',
            'Full-spectrum white LEDs (often listed somewhere around 4000-6500K) suit leafy growth well. Spectrums richer in red are often marketed for flowering and fruiting, but a good full-spectrum white light will grow both.',
            'Purple or pink "blurple" lights work, but they make it hard to judge plant health by eye, and many growers prefer white.',
          ],
        },
        {
          type: 'image',
          src: '/guides/hydroponic-grow-lights/light-types-shelf.jpg',
          alt: 'A shelf holding trays of plants with a white LED bar light above one shelf and a fluorescent tube light above another',
          caption: 'Full-spectrum LEDs are the home default, while T5 fluorescents remain a solid, affordable option for shelves.',
        },
      ],
    },
    {
      id: 'how-much-light',
      title: 'How Much Light Each Crop Needs',
      blocks: [
        {
          type: 'p',
          text: 'Different crops need very different amounts of light, and fruiting plants need far more than greens. These are typical daily light targets from controlled-environment growing — references vary, so treat them as starting points.',
        },
        {
          type: 'table',
          headers: ['Crop', 'Target DLI (mol/m²/day)', 'Typical Hours Indoors'],
          rows: [
            ['Lettuce and leafy greens', '12 – 17', '12 – 16'],
            ['Basil and similar herbs', '14 – 20', '12 – 16'],
            ['Tomatoes, peppers, cucumbers', '20 – 30', '14 – 18'],
          ],
        },
        {
          type: 'list',
          items: [
            'Greens are light feeders and are easy to satisfy with a modest LED — this is why lettuce and herbs are the classic first indoor crops.',
            'Fruiting plants need roughly double the daily light of greens, which means a much stronger light, more hours, or both. A weak light gets you leafy plants with few or no fruit.',
            'Seedlings need less than mature plants, so a young tray can sit farther from the light or under a lower intensity than a full-grown crop.',
            'Sunlight through a window counts toward the total, but winter light indoors is far weaker than most people expect, so measure rather than guess.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Too little light is the most common reason indoor plants stretch tall and pale, and the reason fruiting plants flower but never set fruit. If plants look leggy, add light before adding nutrients.',
        },
        {
          type: 'image',
          src: '/guides/hydroponic-grow-lights/leggy-vs-compact-plants.jpg',
          alt: 'Two basil plants side by side, one tall pale and leggy and one short compact and deep green',
          caption: 'Too little light produces tall, pale, leggy plants; enough light gives compact, deep-green growth.',
        },
      ],
    },
    {
      id: 'placement',
      title: 'Placement, Height, and Timing',
      blocks: [
        {
          type: 'p',
          text: 'Where you put the light matters as much as which light you buy. Intensity falls off quickly with distance, and too close can scorch leaves.',
        },
        {
          type: 'list',
          items: [
            'Follow the manufacturer\'s PPFD chart for hanging height, and start at the recommended distance for your crop. If none is published, start farther away and move closer gradually while watching the plants.',
            'Raise the light as the plants grow so the canopy stays at a consistent distance. A light that was fine for seedlings can bleach or burn a mature plant.',
            'Watch for signs of too much light: bleached or scorched leaf tops, curling, or wilting even with plenty of water.',
            'Cover the whole canopy evenly. A bar light directly above the plants gives more even light than one placed off to a side.',
            'Put lights on a timer so the photoperiod is consistent — a plant that gets irregular light will grow unevenly.',
          ],
        },
        {
          type: 'tip',
          emoji: '⏱️',
          text: 'A basic timer removes the most common lighting mistake: forgetting. Consistent hours every day matter more than getting the exact number perfect.',
        },
        {
          type: 'image',
          src: '/guides/hydroponic-grow-lights/adjusting-light-height-basil.jpg',
          alt: 'A hand adjusting the hanging height of an LED grow light above healthy basil plants',
          caption: 'Hanging height controls intensity at the plants — raise the light as they grow.',
        },
      ],
    },
    {
      id: 'cost-and-safety',
      title: 'Running Cost and Safety',
      blocks: [
        {
          type: 'p',
          text: 'Grow lights run for many hours a day, so it is worth knowing what they cost. Electricity use is simple to calculate: watts multiplied by hours, divided by 1,000, gives kilowatt-hours per day.',
        },
        {
          type: 'list',
          items: [
            'A 40-watt LED running 16 hours a day uses about 0.64 kWh per day (40 × 16 ÷ 1000).',
            'At an electricity price of $0.15 per kWh, that comes to roughly 10 cents a day, or about $3 a month. Check your own rate on your electric bill, since prices vary widely.',
            'A more powerful light for fruiting crops costs proportionally more, which is another reason greens and herbs are the economical indoor crops.',
            'Efficient LEDs produce more usable light per watt than older technologies, so they cost less to run for the same result.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Water and electricity are a risky mix. Plug lights and pumps into GFCI-protected outlets, keep cords and plugs off the floor and away from splashes, and leave a small drip loop in each cord so water runs off instead of into the outlet. Very bright LEDs can also be hard on the eyes, so avoid looking straight at the diodes.',
        },
        {
          type: 'image',
          src: '/guides/hydroponic-grow-lights/grow-tent-led-interior.jpg',
          alt: 'The inside of a grow tent with an LED grow light above rows of healthy leafy plants',
          caption: 'A tent contains light and heat, and a timer keeps the photoperiod consistent.',
        },
      ],
    },
  ],
}
