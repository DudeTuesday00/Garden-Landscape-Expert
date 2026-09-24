export const startingSeedsIndoorsContent = {
  id: 'starting-seeds-indoors',
  hero: {
    emoji: '🌱',
    title: 'Starting Seeds Indoors',
    subtitle: 'The mix, containers, warmth, light, and watering that produce sturdy transplants — and how to avoid the leggy, collapsing seedlings that ruin most first attempts.',
  },
  intro: 'Starting your own seeds gives you access to far more varieties than a garden center stocks, costs a fraction of buying transplants, and lets you time your plants to your own climate. It also fails in predictable ways: weak, stretched seedlings from too little light, and seedlings that collapse overnight from a fungal problem called damping off. Nearly all of it comes down to five things — a clean mix, warmth to germinate, strong light once they sprout, careful watering, and gradual hardening off. This guide covers each in turn. For when to start each crop relative to your frost date, see the site\'s Spring Garden Startup guide and the Garden Planting Calendar tool; for tomato-specific timing, see Growing Tomatoes.',
  sections: [
    {
      id: 'mix-and-containers',
      title: 'The Right Mix and Containers',
      blocks: [
        {
          type: 'p',
          text: 'Seedlings are fragile, and the medium they start in matters more than most gardeners expect. Garden soil is the most common mistake — it is heavy, compacts in a small container, and carries the fungi that cause damping off.',
        },
        {
          type: 'list',
          items: [
            'Use a seed-starting mix, a light, fine, soilless blend of peat or coir with perlite or vermiculite. It drains well, holds even moisture, and is sterile, which protects young seedlings from disease.',
            'Pre-moisten the mix before filling containers until it feels like a wrung-out sponge, so seeds are not washed around by the first watering.',
            'Any container works if it has drainage holes and is clean: purpose-made cell trays, small pots, or recycled containers with holes added. Wash reused containers with a mild bleach solution or hot soapy water to remove disease organisms.',
            'Cell trays keep roots separate and make transplanting easier. Sowing directly into individual cells avoids the root disturbance of separating a crowded flat later.',
            'A humidity dome or a loose covering of plastic wrap over the tray helps hold moisture until seeds sprout, but it must come off promptly afterward.',
          ],
        },
        {
          type: 'tip',
          emoji: '🏷️',
          text: 'Label every tray with the variety and sowing date the moment you plant it, using a pencil or a waterproof marker. Seedlings of different crops look nearly identical, and dates tell you when to expect germination and when to pot up.',
        },
        {
          type: 'image',
          src: '/guides/starting-seeds-indoors/seed-tray-mix-cells.jpg',
          alt: 'A black seed starting tray filled with fine dark seed starting mix in individual cells with tiny green seedlings',
          caption: 'A fine, sterile, soilless mix in individual cells gives seedlings the best start.',
        },
      ],
    },
    {
      id: 'sowing-and-germination',
      title: 'Sowing and Germination',
      blocks: [
        {
          type: 'p',
          text: 'Most seeds need only three things to sprout: moisture, the right temperature, and the right planting depth. Light is not needed for germination in most vegetables, but it is essential the moment they emerge.',
        },
        {
          type: 'list',
          items: [
            'Plant seeds at about twice their thickness deep unless the packet says otherwise; very fine seeds are often just pressed onto the surface and lightly covered or left uncovered if they need light to germinate.',
            'Sow two or three seeds per cell and thin to the strongest seedling afterward by snipping the extras at soil level. This covers the seeds that do not sprout without leaving gaps.',
            'Keep the mix evenly moist but never soggy until seedlings emerge.',
            'Warm-season crops germinate faster with bottom heat. A seedling heat mat set to about 75-80°F speeds germination of tomatoes, peppers, and eggplant significantly, and can be removed once they sprout.',
            'Cool-season crops like lettuce and brassicas germinate best at cooler temperatures and can fail to sprout in a very warm room.',
          ],
        },
        {
          type: 'table',
          headers: ['Crop', 'Typical Germination Time', 'Best Germination Temperature'],
          rows: [
            ['Tomato', '5-10 days', '70-80°F'],
            ['Pepper and eggplant', '7-14 days', '75-85°F'],
            ['Cucumber and squash', '3-7 days', '70-90°F'],
            ['Basil', '5-10 days', '70-80°F'],
            ['Broccoli, cabbage, and kale', '4-7 days', '65-75°F'],
            ['Lettuce', '2-7 days', '60-70°F (high heat can prevent sprouting)'],
          ],
        },
        {
          type: 'tip',
          emoji: '🌡️',
          text: 'Check trays daily once sowing is a few days old. The moment the first seedlings appear, remove the cover and move the tray under light — seedlings left in dim light even briefly stretch and weaken.',
        },
        {
          type: 'image',
          src: '/guides/starting-seeds-indoors/sowing-seeds-cell.jpg',
          alt: 'A hand pressing a single small seed into a cell of dark seed starting mix in a seedling tray',
          caption: 'Sow two or three seeds per cell and thin to the strongest seedling once they sprout.',
        },
      ],
    },
    {
      id: 'light-and-warmth',
      title: 'Light: The Most Common Failure',
      blocks: [
        {
          type: 'p',
          text: 'A sunny windowsill is rarely enough for strong seedlings, especially in late winter when days are short and the light is weak and angled. The typical result is tall, pale, floppy seedlings that fall over — a condition called legginess.',
        },
        {
          type: 'list',
          items: [
            'Use a grow light. A full-spectrum LED or a fluorescent shop light works well and is inexpensive compared to the plants it saves.',
            'Keep the light very close to the seedlings — commonly just a few inches above the tops — and raise it as they grow. Distance matters far more than the wattage printed on the box.',
            'Run lights for about 14-16 hours a day on a timer. Seedlings need a dark period too, so avoid running lights around the clock.',
            'Room temperature of around 65-70°F is fine once seedlings are up; very warm rooms make seedlings grow fast and weak.',
            'A small fan on low, running gently across the seedlings for part of the day, strengthens stems and improves airflow that helps prevent disease.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Leggy seedlings cannot be fixed by adding fertilizer or moving them outside. Stretched growth from too little light is permanent — the best response is more light for the seedlings that remain, and starting fresh seeds if the damage is severe. For light numbers by crop, see the Grow Light DLI Calculator and Grow Lights guide.',
        },
        {
          type: 'image',
          src: '/guides/starting-seeds-indoors/led-light-over-seedlings.jpg',
          alt: 'A white LED grow light bar hanging a few inches above trays of short sturdy green seedlings',
          caption: 'Keeping the light a few inches above the seedlings produces short, sturdy plants instead of leggy ones.',
        },
      ],
    },
    {
      id: 'water-and-feeding',
      title: 'Watering, Feeding, and Damping Off',
      blocks: [
        {
          type: 'p',
          text: 'Overwatering kills more seedlings than underwatering, and it is the main driver of damping off, the fungal disease that makes stems pinch at the soil line and topple over. Once it starts, it can spread through a tray within a day or two.',
        },
        {
          type: 'list',
          items: [
            'Water from the bottom by setting cell trays in a shallow tray of water for a short time until the surface feels damp. This keeps the surface drier, which discourages fungus.',
            'Let the surface dry slightly between waterings rather than keeping it constantly wet, and make sure excess water can drain away.',
            'Start with a sterile mix and clean containers, and give seedlings good airflow. These prevention steps matter more than any treatment.',
            'Once seedlings have their first true leaves, feed lightly with a diluted balanced fertilizer at about a quarter to half strength. Seed-starting mix has almost no nutrients, so seedlings start to fade without feeding after the first couple of weeks.',
            'Remove any seedling that collapses along with the mix around it, and improve airflow and drying right away to protect the rest.',
          ],
        },
        {
          type: 'tip',
          emoji: '💧',
          text: 'The first pair of leaves are seed leaves (cotyledons). The leaves that look like the mature plant are the true leaves, and their arrival is the signal to begin feeding and to consider potting up.',
        },
        {
          type: 'image',
          src: '/guides/starting-seeds-indoors/bottom-watering-tray.jpg',
          alt: 'A seedling cell tray sitting in a shallow tray of water soaking up moisture from below',
          caption: 'Bottom watering keeps the surface drier, which helps prevent damping off.',
        },
      ],
    },
    {
      id: 'potting-up-and-hardening-off',
      title: 'Potting Up and Hardening Off',
      blocks: [
        {
          type: 'p',
          text: 'As seedlings grow, they outgrow their cells and then must be toughened before they can survive outdoor conditions. Both steps prevent stress and stalled growth after transplanting.',
        },
        {
          type: 'list',
          items: [
            'Pot up fast growers like tomatoes into larger containers once they have a couple of sets of true leaves and roots fill the cell. Handle seedlings by the leaves, not the fragile stem.',
            'Tomatoes can be planted deeper when potted up, since they root along the buried stem. Most other crops should stay at the same depth.',
            'Begin hardening off about a week to ten days before transplanting outdoors. Start with an hour or two in a sheltered, shady spot and gradually increase both time outdoors and exposure to sun and wind.',
            'Bring seedlings inside on cold nights until they are fully hardened and the weather is settled.',
            'Transplant on a cloudy day or in the evening, and water the plants in well. Skipping hardening off is the most common reason that healthy indoor seedlings stall or scorch outdoors.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌤️',
          text: 'A cold frame is an ideal halfway house for hardening off. See the site\'s Cold Frames & Season Extension guide for how to build and manage one.',
        },
        {
          type: 'image',
          src: '/guides/starting-seeds-indoors/hardening-off-tray-outdoors.jpg',
          alt: 'A tray of green seedlings sitting outdoors on a bench in dappled sunlight during hardening off',
          caption: 'Hardening off gradually toughens seedlings for full sun and wind outdoors.',
        },
      ],
    },
  ],
}
