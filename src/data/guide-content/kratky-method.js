export const kratkyMethodContent = {
  id: 'kratky-method',
  hero: {
    emoji: '🫙',
    title: 'The Kratky Method',
    subtitle: 'Passive hydroponics with no pump, no timer, and no electricity — a jar, a net cup, and a nutrient solution is all it takes to grow fresh greens and herbs.',
  },
  intro: 'The Kratky method is the simplest form of hydroponics there is: a plant sits in a net cup over a container of nutrient solution, and nothing moves, bubbles, or plugs in. It is named for Dr. Bernard Kratky of the University of Hawaii, whose research popularized non-circulating hydroponics for small-scale growers. Because there is no equipment to fail, it is the best way for a complete beginner to learn what hydroponic plants actually need. This guide covers how it works, how to build one, what grows well in it, and how to fix the handful of problems that show up. For a broader introduction see Hydroponics for Beginners; for the nutrient and pH detail, see Hydroponic Nutrients, pH & EC.',
  sections: [
    {
      id: 'how-kratky-works',
      title: 'How the Kratky Method Works',
      blocks: [
        {
          type: 'p',
          text: 'Every hydroponic system has to solve the same problem: roots need water and nutrients, but they also need oxygen. Most systems solve it with a pump. Kratky solves it with an air gap that opens up on its own.',
        },
        {
          type: 'list',
          items: [
            'At the start, the nutrient solution is filled so it just touches the bottom of the net cup, giving the young roots immediate access to water.',
            'As the plant grows it drinks, and the water level slowly drops. The roots that were once submerged are now in humid air, where they take up oxygen.',
            'The roots at the bottom stay in the solution and keep drinking, while the upper roots breathe. The plant is never sitting entirely in water and never entirely dry.',
            'You fill the container once, plant, and wait — the falling water level is not a problem to fix, it is the mechanism that makes the system work.',
          ],
        },
        {
          type: 'tip',
          emoji: '🫧',
          text: 'The air gap is the whole trick. If you top the container back up to the net cup after roots have developed, you drown the oxygen-breathing roots and lose the very thing that makes Kratky work without a pump.',
        },
        {
          type: 'image',
          src: '/guides/kratky-method/roots-air-gap-water-level.jpg',
          alt: 'A clear container showing a plant with roots partly in the air gap and partly in the nutrient solution',
          caption: 'As the water level falls, the upper roots breathe in the air gap while the lower roots keep drinking from the solution.',
        },
      ],
    },
    {
      id: 'building-a-kratky-jar',
      title: 'Building a Kratky Jar',
      blocks: [
        {
          type: 'p',
          text: 'A basic Kratky setup takes about ten minutes and costs very little. The container matters more than anything else: it must be opaque to keep algae out.',
        },
        {
          type: 'list',
          items: [
            'A container: a wide-mouth quart or half-gallon jar for a single herb or small lettuce, or a lidded bucket or tub for larger plants. Clear glass must be wrapped or painted dark so no light reaches the solution.',
            'A lid with a hole sized for a net cup (a 2-inch net cup is the common choice for jars).',
            'A net cup, and a starter plug (rockwool or coco) holding a seedling with roots just showing.',
            'A hydroponic nutrient and a way to check pH. Mix the solution before planting and adjust pH into the 5.5-6.5 range.',
          ],
        },
        {
          type: 'p',
          text: 'To assemble: fill the container with the prepared solution, set the lid on, and seat the net cup with the seedling so the solution just touches the bottom of the cup. Place it in bright light and leave it.',
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Do not refill a mature Kratky container back to the net cup. If the reservoir runs low before harvest, top up with plain water or a diluted solution only enough to keep most of the root mass in the air gap — never to the point of submerging it again.',
        },
        {
          type: 'image',
          src: '/guides/kratky-method/wrapped-jar-net-cup-seedling.jpg',
          alt: 'A mason jar wrapped in dark paper with a net cup and a young seedling seated in the lid',
          caption: 'Wrapping or painting a clear jar dark keeps light out of the solution and prevents algae.',
        },
      ],
    },
    {
      id: 'best-crops',
      title: 'What Grows Well in Kratky',
      blocks: [
        {
          type: 'p',
          text: 'Kratky works best for short-cycle crops that finish before the reservoir runs low. Fast leafy greens and compact herbs are ideal; long-season fruiting plants like tomatoes and peppers are a poor fit for a passive system.',
        },
        {
          type: 'table',
          headers: ['Crop', 'Typical Time to Harvest', 'Notes'],
          rows: [
            ['Arugula', 'Baby leaves at about 21 days', 'One of the fastest hydroponic crops; prefers cooler temperatures'],
            ['Spinach', 'About 3-4 weeks', 'Prefers cool conditions; excellent in Kratky'],
            ['Lettuce', 'About 30-45 days in hydroponics', 'Use a larger container for full heads; leaf varieties are the most forgiving'],
            ['Bok choy', 'Baby at about 30 days, full size 45-50 days', 'Works well as baby heads in a compact container'],
            ['Basil', 'About 20-25 days from transplant', 'Pinch flowers to keep leaf production going'],
            ['Mint, chives, cilantro, parsley', 'Cut-and-come-again once established', 'Mint grows very fast; cilantro bolts more slowly in cool indoor temperatures'],
          ],
        },
        {
          type: 'tip',
          emoji: '🥬',
          text: 'Match the container to the plant: a quart or half-gallon jar suits a single herb or baby greens, while a full head of lettuce does better in a gallon or more, and a larger lidded tub can hold several plants at once.',
        },
        {
          type: 'image',
          src: '/guides/kratky-method/lettuce-basil-jars-windowsill.jpg',
          alt: 'Several jars on a bright windowsill with lettuce and basil growing in a Kratky setup',
          caption: 'Lettuce, basil, and other fast greens and herbs are the best fit for passive Kratky growing.',
        },
      ],
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting a Kratky Jar',
      blocks: [
        {
          type: 'p',
          text: 'With no moving parts, Kratky problems come down to a short list of causes — nearly all of them related to light, temperature, or the water level.',
        },
        {
          type: 'table',
          headers: ['Symptom', 'Likely Cause', 'Fix'],
          rows: [
            ['Green slime on the container or roots', 'Light is reaching the solution', 'Wrap or paint the container so it is fully opaque'],
            ['Wilting even though the jar looks full', 'Warm solution, low oxygen, or root damage', 'Move somewhere cooler; check that roots are white rather than brown and slimy'],
            ['Wilting with no water left in the jar', 'The reservoir ran dry before harvest', 'Top up with water; use a larger container next time'],
            ['Brown, slimy, foul-smelling roots', 'Root rot from warm water and low oxygen', 'Start over with a fresh solution and a cooler location; the plant may not recover'],
            ['Pale or yellowing leaves late in the crop', 'The nutrient has been used up', 'Top up with a diluted solution, keeping the air gap; for a long crop, plan a partial refresh'],
            ['Tall, leggy growth', 'Not enough light', 'Move to a brighter window or add a grow light'],
          ],
        },
        {
          type: 'image',
          src: '/guides/kratky-method/topping-up-jar-solution.jpg',
          alt: 'A hand pouring water into an opaque jar holding a growing lettuce plant',
          caption: 'If the reservoir runs low, top up carefully so most of the roots stay in the air gap.',
        },
      ],
    },
    {
      id: 'when-to-upgrade',
      title: 'When to Move Beyond Kratky',
      blocks: [
        {
          type: 'p',
          text: 'Kratky is a great classroom, but it has limits — no aeration, no easy way to adjust nutrients mid-crop, and a poor fit for big fruiting plants. Most growers who stay with hydroponics eventually add a small air pump and move to deep water culture, then consider a pump-driven system if they want more plants in less space.',
        },
        {
          type: 'list',
          items: [
            'Stay with Kratky if you want low effort, no electricity, and fast greens or herbs.',
            'Move to deep water culture (DWC) when you want faster growth or a single large plant like a tomato, pepper, or cucumber in a 5-gallon bucket.',
            'Consider NFT or a vertical tower when you want many lettuces or herbs in a compact footprint and are comfortable with a pump.',
          ],
        },
        {
          type: 'tip',
          emoji: '🧭',
          text: 'Not sure which direction fits you? The site\'s Hydroponic System Chooser tool compares all seven home systems against your space, budget, electricity comfort, and time, and shows which plants each one suits.',
        },
        {
          type: 'image',
          src: '/guides/kratky-method/bucket-lid-several-lettuces.jpg',
          alt: 'A large lidded bucket with several lettuce plants growing in net cups',
          caption: 'A larger lidded tub can hold several lettuce plants in a single passive reservoir.',
        },
      ],
    },
  ],
}
