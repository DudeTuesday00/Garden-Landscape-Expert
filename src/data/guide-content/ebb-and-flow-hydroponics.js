export const ebbAndFlowHydroponicsContent = {
  id: 'ebb-and-flow-hydroponics',
  hero: {
    emoji: '⏱️',
    title: 'Ebb & Flow Hydroponics',
    subtitle: 'A tray that floods on a timer and drains back to the reservoir — the versatile, medium-buffered system that handles almost any crop, and how to set it up without leaks.',
  },
  intro: 'Ebb and flow, also called flood and drain, keeps plants in a tray of grow medium that is periodically flooded with nutrient solution and then drained back into a reservoir below. Between floods the medium holds moisture and air around the roots, which is why the system is so forgiving and why it works for everything from lettuce to peppers. It does need a pump, a timer, and carefully sealed fittings, and the classic failure is an overflow. This guide covers how it works, the parts and setup, how to choose a flood schedule, what to grow, and how to fix the usual problems. To compare it with other systems, use the site\'s Hydroponic System Chooser; for solution numbers, see Hydroponic Nutrients, pH & EC.',
  sections: [
    {
      id: 'how-it-works',
      title: 'How Ebb & Flow Works',
      blocks: [
        {
          type: 'p',
          text: 'The grow tray sits above a reservoir. On a timer, a submersible pump in the reservoir fills the tray with nutrient solution. When the pump shuts off, gravity drains the solution back down through the same fitting, and the roots are left surrounded by damp medium and fresh air until the next flood.',
        },
        {
          type: 'list',
          items: [
            'Flooding wets the roots and delivers nutrients; draining pulls fresh air down into the medium, so roots get the oxygen they need.',
            'An overflow fitting sets the maximum water level in the tray. It is usually set an inch or so below the top of the medium so the surface stays dry, which discourages algae and fungus gnats.',
            'Because the medium holds moisture between floods, the system tolerates a short pump or timer failure better than NFT, though not a long one.',
            'Everything runs on a simple timer, so the schedule is easy to change as plants grow.',
          ],
        },
        {
          type: 'tip',
          emoji: '🧭',
          text: 'Ebb and flow is the "do-almost-anything" system: leafy greens, herbs, and fruiting plants all grow in it. If you want one setup that can change with what you grow, this is a strong choice.',
        },
        {
          type: 'image',
          src: '/guides/ebb-and-flow-hydroponics/tray-over-reservoir.jpg',
          alt: 'An ebb and flow hydroponic setup with a black grow tray of clay pebbles and plants above a reservoir tank',
          caption: 'The grow tray sits above a reservoir; a pump floods it on a timer and gravity drains it back.',
        },
      ],
    },
    {
      id: 'parts-and-setup',
      title: 'Parts and Setup',
      blocks: [
        {
          type: 'p',
          text: 'A small ebb and flow system uses a handful of parts. Most of the care goes into the plumbing, since that is where leaks and overflows come from.',
        },
        {
          type: 'list',
          items: [
            'A grow tray sized for the number of plants, sturdy enough to hold the weight of wet medium and plants.',
            'An opaque reservoir below or beside the tray, large enough to flood the tray without running dry. Bigger reservoirs change temperature and strength more slowly.',
            'A submersible pump, a fill and drain fitting through the tray, and an overflow standpipe to cap the water level.',
            'An outlet timer to control flood times, plugged into a GFCI-protected outlet.',
            'Grow medium: expanded clay pebbles are the common choice because they drain well and can be rinsed and reused. Rockwool cubes or plugs are typically used to start seedlings.',
            'Hydroponic nutrients, a pH test method, and an EC meter.',
          ],
        },
        {
          type: 'p',
          text: 'Assemble the tray and plumbing, fill the reservoir with plain water, and run a full flood-and-drain cycle with no plants. Check every fitting for leaks and confirm the overflow keeps the water where you want it before adding medium and plants.',
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Test the overflow with plain water before planting. A tray that floods past its limit, or a fitting that leaks, can soak a floor in minutes. Keep the setup on a waterproof surface or in a tub, and never skip the GFCI outlet.',
        },
        {
          type: 'image',
          src: '/guides/ebb-and-flow-hydroponics/overflow-standpipe.jpg',
          alt: 'A white overflow standpipe fitting rising through the bottom of a black grow tray filled with clay pebbles',
          caption: 'The standpipe sets the highest water level in the tray, preventing overflows.',
        },
      ],
    },
    {
      id: 'flood-schedule',
      title: 'Choosing a Flood Schedule',
      blocks: [
        {
          type: 'p',
          text: 'There is no single correct schedule. How often to flood depends on the medium, the size of the plants, and the temperature and light. The goal is medium that is damp but not soggy between floods.',
        },
        {
          type: 'list',
          items: [
            'Fast-draining media such as clay pebbles dry out sooner, so they need more frequent floods than water-holding media like rockwool or coconut coir.',
            'Small seedlings need only a few floods a day. Large, thirsty plants in bright light and warm rooms may need a flood every hour or two during the light period.',
            'A flood typically fills the tray and lets it sit briefly before draining — commonly on the order of 10 to 20 minutes for the whole cycle — but adjust to your tray and pump.',
            'Many growers run fewer floods, or none, during the dark period, since plants use less water at night.',
            'Start with a moderate schedule and watch the plants and the medium. Wilting between floods means flood more often; a constantly wet, smelly medium means flood less often.',
          ],
        },
        {
          type: 'tip',
          emoji: '🕒',
          text: 'Check the medium a couple of hours after a flood. It should feel damp but not dripping. If it is dry, flood more often; if it is still waterlogged, flood less often or check that the tray is draining fully.',
        },
        {
          type: 'image',
          src: '/guides/ebb-and-flow-hydroponics/pump-and-timer.jpg',
          alt: 'A submersible pump with clear tubing beside a dark reservoir and a plug-in outlet timer',
          caption: 'A pump and a simple timer are all the automation ebb and flow needs.',
        },
      ],
    },
    {
      id: 'best-crops',
      title: 'What to Grow',
      blocks: [
        {
          type: 'p',
          text: 'Ebb and flow is one of the most flexible home systems. The tray suits many small plants at once, and the medium supports larger ones.',
        },
        {
          type: 'table',
          headers: ['Crop', 'Fit', 'Notes'],
          rows: [
            ['Lettuce and leafy greens', 'Good', 'Works well, though NFT or Kratky are simpler for greens alone'],
            ['Herbs (basil, mint, parsley)', 'Good', 'Fast growth; harvest often to keep plants compact'],
            ['Tomatoes', 'Excellent', 'Needs a cage or trellis and strong light; watch calcium and magnesium'],
            ['Peppers and eggplant', 'Excellent', 'Warm, bright conditions; support branches as fruit develops'],
            ['Cucumbers', 'Very good', 'Needs a vertical trellis; compact varieties suit indoor growing'],
            ['Strawberries', 'Good', 'Everbearing types fruit repeatedly; keep pH in range'],
          ],
        },
        {
          type: 'tip',
          emoji: '🌶️',
          text: 'Because one tray can hold a mix of plants, ebb and flow is a good choice for a "kitchen garden" of herbs, a pepper, and a tomato — just group plants with similar light and feeding needs.',
        },
        {
          type: 'image',
          src: '/guides/ebb-and-flow-hydroponics/peppers-in-tray.jpg',
          alt: 'Healthy pepper plants with red peppers growing in a large tray of clay pebbles',
          caption: 'Fruiting plants like peppers and tomatoes do very well in ebb and flow.',
        },
      ],
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting Ebb & Flow',
      blocks: [
        {
          type: 'p',
          text: 'Most ebb and flow problems come from the plumbing and the schedule. Check those first before suspecting the nutrients.',
        },
        {
          type: 'table',
          headers: ['Symptom', 'Likely Cause', 'Fix'],
          rows: [
            ['Water overflowing or leaking', 'Loose fitting, blocked overflow, or pump running too long', 'Re-seat fittings, clear the standpipe, and shorten the flood time'],
            ['Tray not draining fully', 'Clogged drain fitting or roots blocking it', 'Clear the drain; keep roots and medium from packing into the fitting'],
            ['Medium stays soggy and smells', 'Flooding too often or poor drainage', 'Flood less often and confirm the tray drains completely'],
            ['Wilting between floods', 'Not flooding often enough', 'Add floods, especially during the bright, warm part of the day'],
            ['White crust on the medium', 'Salt buildup from nutrients', 'Flush the medium with plain, pH-adjusted water and check solution strength'],
            ['Algae or fungus gnats', 'Wet, lit surface', 'Set the overflow below the medium surface and keep light off the solution'],
            ['Plants suddenly drooping everywhere', 'Pump or timer failure', 'Check the pump, timer, and outlet right away; keep a spare pump'],
          ],
        },
        {
          type: 'tip',
          emoji: '🔧',
          text: 'Keep a spare pump and a spare timer. A stuck timer or dead pump is the most common cause of a sudden problem, and a five-minute swap is far better than a lost crop.',
        },
        {
          type: 'image',
          src: '/guides/ebb-and-flow-hydroponics/clay-pebbles-seedling.jpg',
          alt: 'Brown expanded clay pebbles around the base of a young green plant in a black tray',
          caption: 'Clay pebbles drain well and can be rinsed and reused between crops.',
        },
      ],
    },
  ],
}
