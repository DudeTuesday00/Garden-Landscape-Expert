export const hydroponicTroubleshootingContent = {
  id: 'hydroponic-troubleshooting',
  hero: {
    emoji: '🩺',
    title: 'Hydroponic Troubleshooting',
    subtitle: 'What to check first when a hydroponic plant looks wrong — roots, leaves, water, pests, and equipment, in the order that finds the cause fastest.',
  },
  intro: 'When a hydroponic plant looks unhappy, the cause is almost always one of a short list: roots, water quality, nutrient strength or pH, light, temperature, pests, or equipment. Because there is no soil to buffer mistakes, problems show up fast — but they also have clear, checkable causes. This guide works through them in a sensible order, with tables you can match symptoms against. It applies to every system; for system-specific issues, see the Deep Water Culture, NFT, and Ebb & Flow guides, and for the numbers behind pH and strength, see Hydroponic Nutrients, pH & EC.',
  sections: [
    {
      id: 'check-in-order',
      title: 'Start Here: The Diagnostic Order',
      blocks: [
        {
          type: 'p',
          text: 'Guessing at the cause wastes time and can make things worse. Work through the same checks in the same order, because the earlier ones are the fastest to test and the most common causes.',
        },
        {
          type: 'list',
          items: [
            'Equipment: is water actually flowing and is air actually bubbling? A stopped pump or air pump explains a sudden, system-wide decline.',
            'Roots: pull one out and look. Healthy roots are white to cream and smell fresh; brown, slimy, or foul-smelling roots point to oxygen, temperature, or cleanliness problems.',
            'Water temperature: roughly 65-72°F is the comfortable range for most crops. Warm water is behind a large share of root problems.',
            'pH: outside about 5.5-6.5, plants cannot absorb nutrients that are present. Test it.',
            'Nutrient strength: measure EC or TDS. Too strong burns leaves; too weak slows growth.',
            'Light and air: is the light strong enough and the right distance away, and is the room too hot or too dry?',
            'Pests: check leaf undersides and the growing medium last, once the basics are ruled out.',
          ],
        },
        {
          type: 'tip',
          emoji: '📓',
          text: 'Change one thing at a time and write down what you did. If you adjust pH, strength, and light all at once, you will not know which fixed the problem — or which caused a new one.',
        },
        {
          type: 'image',
          src: '/guides/hydroponic-troubleshooting/examining-lettuce-yellowing.jpg',
          alt: 'A gardener examining a hydroponic lettuce plant with slightly yellowing leaves under bright light',
          caption: 'Work through the checks in order rather than guessing at the cause.',
        },
      ],
    },
    {
      id: 'roots',
      title: 'Reading the Roots',
      blocks: [
        {
          type: 'p',
          text: 'The roots are the best diagnostic tool in hydroponics, because they show problems before the leaves do. Take a look whenever anything seems off.',
        },
        {
          type: 'table',
          headers: ['What You See', 'What It Usually Means', 'What to Do'],
          rows: [
            ['White to cream, fresh smell', 'Healthy', 'Nothing — keep doing what you are doing'],
            ['Brown, slimy, or foul-smelling roots', 'Root rot from warm, poorly oxygenated, or dirty water', 'Cool and aerate the reservoir, clean the system, and replace the solution; badly rotted roots may not recover'],
            ['Light brown or tan but firm and not slimy', 'Often stained by nutrients, not rotting', 'Check for a smell and slime; if none, it is likely fine'],
            ['Green slime on roots or channel walls', 'Algae from light reaching the solution', 'Block all light from the reservoir and roots'],
            ['Very few, short roots', 'Cold water, low oxygen, or a too-strong solution', 'Check temperature, aeration, and strength'],
            ['Roots blocking a channel or drain', 'Normal growth outgrowing the space', 'Trim carefully or thin plants; keep flow paths clear'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Some growers reach for hydrogen peroxide or beneficial-microbe products at the first sign of rot. Those can help in some cases, but they do not replace fixing the cause — usually warm water, low oxygen, or light leaks. Address temperature and aeration first.',
        },
        {
          type: 'image',
          src: '/guides/hydroponic-troubleshooting/brown-slimy-roots-net-pot.jpg',
          alt: 'Brown slimy roots hanging from a net pot into a hydroponic reservoir',
          caption: 'Brown, slimy, foul-smelling roots are the clearest sign of root rot.',
        },
      ],
    },
    {
      id: 'leaves',
      title: 'Reading the Leaves',
      blocks: [
        {
          type: 'p',
          text: 'Leaf symptoms point toward likely causes, but many look alike, so treat them as hints and confirm with a pH and strength reading before changing the recipe.',
        },
        {
          type: 'table',
          headers: ['Symptom', 'Possible Cause', 'What to Check'],
          rows: [
            ['Brown, crispy leaf tips or edges', 'Solution too strong, or a calcium uptake problem', 'Measure strength; dilute if high; check heat and humidity'],
            ['Pale or yellow new growth', 'pH too high, blocking micronutrients like iron', 'Test pH and bring it back into range'],
            ['Older leaves yellowing first', 'Shortage of a mobile nutrient such as nitrogen or magnesium, or a depleted solution', 'Check strength and the feeding schedule'],
            ['Tall, pale, stretched growth', 'Not enough light', 'Raise light intensity or hours; see the Grow Lights guide'],
            ['Bleached or scorched leaf tops', 'Light too close or too strong', 'Raise the light or reduce intensity'],
            ['Curling or drooping leaves', 'Heat stress, low oxygen at the roots, or over-strong solution', 'Check air and water temperature, aeration, and strength'],
            ['Purple or reddish stems and leaf undersides', 'Cold roots or a phosphorus shortage in some crops', 'Check water temperature and the nutrient balance'],
            ['Fruit flowers drop without setting fruit', 'Temperatures too hot or too cold, or too little light', 'Check temperature and light for fruiting crops'],
          ],
        },
        {
          type: 'tip',
          emoji: '🔎',
          text: 'Note where the symptom shows up. Problems in the newest growth usually involve nutrients that plants cannot move around, like calcium and iron; problems in the oldest leaves usually involve mobile nutrients like nitrogen.',
        },
        {
          type: 'image',
          src: '/guides/hydroponic-troubleshooting/yellowing-basil-leaves.jpg',
          alt: 'A hydroponic basil plant with pale yellowing leaves',
          caption: 'Where a symptom appears — new growth or old — helps narrow the cause.',
        },
      ],
    },
    {
      id: 'water-and-pests',
      title: 'Water Problems and Pests',
      blocks: [
        {
          type: 'p',
          text: 'Two groups of problems live in and around the reservoir: the water itself, and the pests that thrive in indoor growing conditions.',
        },
        {
          type: 'table',
          headers: ['Problem', 'Likely Cause', 'Fix'],
          rows: [
            ['Green algae on walls, pots, or roots', 'Light reaching the solution', 'Use opaque containers and cover any gaps around net pots'],
            ['Foul smell from the reservoir', 'Stagnant, warm, or oxygen-poor water', 'Aerate, cool, clean the reservoir, and replace the solution'],
            ['pH keeps drifting', 'Normal plant feeding, or weak water buffering', 'Check often and adjust in small steps; expect some drift'],
            ['Strength keeps rising', 'Plants drinking water faster than nutrients', 'Top up with plain water and re-measure'],
            ['Tiny black flies around the medium', 'Fungus gnats in a constantly wet surface', 'Let the top of the medium dry, use yellow sticky traps, and consider a Bti product for larvae'],
            ['Sticky leaves, curled new growth, clusters of small insects', 'Aphids', 'Rinse plants and use insecticidal soap; see the site\'s Organic Pest Control guide'],
            ['Fine stippling and webbing on leaves', 'Spider mites, common in hot, dry rooms', 'Raise humidity, rinse leaves, and treat with insecticidal soap or neem'],
          ],
        },
        {
          type: 'tip',
          emoji: '🪰',
          text: 'Yellow sticky traps cost a few dollars and give an early warning of fungus gnats and other flying pests — hang one near the plants and check it weekly.',
        },
        {
          type: 'image',
          src: '/guides/hydroponic-troubleshooting/yellow-sticky-trap-insects.jpg',
          alt: 'A yellow sticky trap covered with tiny flying insects hanging near hydroponic plants',
          caption: 'A yellow sticky trap is an early-warning system for fungus gnats and other flying pests.',
        },
      ],
    },
    {
      id: 'equipment-and-emergencies',
      title: 'Equipment Failures and Emergencies',
      blocks: [
        {
          type: 'p',
          text: 'Hydroponic systems depend on pumps, timers, and power. Knowing what to do when one fails — and how quickly each system tolerates it — turns a crisis into a fix.',
        },
        {
          type: 'table',
          headers: ['System', 'How Fast a Failure Hurts', 'What to Do'],
          rows: [
            ['Kratky and wick (passive)', 'Not affected by power loss', 'Nothing to fix; check the water level'],
            ['Deep water culture', 'Hours to a day, faster in warm water', 'Restore air quickly and keep the reservoir cool'],
            ['Ebb & flow and Dutch bucket', 'Hours, buffered by damp medium', 'Restore the pump and timer; hand-water if needed'],
            ['NFT and vertical towers', 'Roots can dry out within hours', 'Restore flow immediately; keep a spare pump'],
          ],
        },
        {
          type: 'list',
          items: [
            'Keep spares of the parts that fail: a small pump, an air pump and stone, and a timer.',
            'Plug pumps and lights into GFCI-protected outlets, and keep cords and plugs off the floor and away from splashes.',
            'If the power is out, keep the room cool, keep roots damp by hand if you can, and restore flow as soon as power returns.',
            'Check the system every day. A quick look at flow, level, and roots catches most problems early.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Do not respond to a failure by dumping in more nutrients or pH adjusters. Restore oxygen and flow first, cool the water, and re-measure before changing the recipe.',
        },
        {
          type: 'image',
          src: '/guides/hydroponic-troubleshooting/testing-water-beaker-reservoir.jpg',
          alt: 'A gardener testing a small glass beaker of water beside a hydroponic reservoir',
          caption: 'When something looks off, measure first — pH, strength, and temperature — before changing anything.',
        },
      ],
    },
  ],
}
