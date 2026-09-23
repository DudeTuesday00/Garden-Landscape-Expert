export const hydroponicNutrientsPhEcContent = {
  id: 'hydroponic-nutrients-ph-ec',
  hero: {
    emoji: '🧪',
    title: 'Hydroponic Nutrients, pH & EC',
    subtitle: 'The three numbers that decide whether a hydroponic crop thrives — what to feed, how to read pH and EC, and how to manage the reservoir.',
  },
  intro: 'In soil, the ground buffers most mistakes. In hydroponics, the nutrient solution is the soil, so three things need attention: what is in it (the nutrients), how acidic it is (pH), and how concentrated it is (EC). Get those roughly right and hydroponic plants grow quickly; ignore them and problems appear within days. This guide explains each in plain terms, gives typical target ranges, and shows how to manage a reservoir day to day. The ranges here are widely used starting points — always defer to the feeding chart on your specific nutrient product, since formulas differ. For the fundamentals of setting up a system, see Hydroponics for Beginners, and for a soil-free feeding plan by plant type, the site\'s Fertilizer Calculator has a hydroponic mode.',
  sections: [
    {
      id: 'what-plants-need',
      title: 'What Plants Need in the Solution',
      blocks: [
        {
          type: 'p',
          text: 'A plant needs the same handful of elements whether it grows in soil or water. In hydroponics you supply every one of them yourself, in dissolved form, so the nutrient product you choose matters far more than it does for a soil garden.',
        },
        {
          type: 'table',
          headers: ['Group', 'Elements', 'Why It Matters'],
          rows: [
            ['Primary macronutrients', 'Nitrogen, phosphorus, potassium', 'Leaf growth, roots and flowering, and overall vigor and fruit quality'],
            ['Secondary macronutrients', 'Calcium, magnesium, sulfur', 'Cell walls and tip health (calcium), chlorophyll (magnesium), and proteins (sulfur)'],
            ['Micronutrients', 'Iron, manganese, zinc, copper, boron, molybdenum', 'Needed in tiny amounts, but a shortage of any one can stall growth'],
          ],
        },
        {
          type: 'list',
          items: [
            'Use a nutrient made for hydroponics. Standard garden and lawn fertilizers are not built to supply the full range of elements, including calcium and magnesium, that soil would normally provide.',
            'One-part nutrients are the simplest: one bottle, one dose. Multi-part systems (often two or three parts) let you adjust ratios for different growth stages, but add complexity.',
            'Your tap water already carries dissolved minerals, especially calcium and magnesium in hard water. Very hard water can make it harder to control the mix; a water test or an EC reading of your plain tap water tells you where you are starting from.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'With multi-part nutrients, add each part to the water separately and stir between them. Mixing the concentrated bottles together directly can cause the nutrients to precipitate out of solution, making them unavailable to the plants.',
        },
        {
          type: 'image',
          src: '/guides/hydroponic-nutrients-ph-ec/dropper-adding-nutrient-reservoir.jpg',
          alt: 'A hand adding liquid nutrient from a plain dropper bottle into a clear water reservoir',
          caption: 'Hydroponic nutrients are added to the water at a measured rate — never eyeballed.',
        },
      ],
    },
    {
      id: 'ph',
      title: 'pH: Making Nutrients Available',
      blocks: [
        {
          type: 'p',
          text: 'pH measures how acidic or alkaline the water is, on a scale where 7 is neutral. It matters because it controls which nutrients a plant can actually absorb — a nutrient can be sitting in the water and still be unavailable if the pH is off. Most hydroponic crops do best in a slightly acidic range of roughly 5.5 to 6.5.',
        },
        {
          type: 'table',
          headers: ['Crop', 'Typical pH Range', 'Notes'],
          rows: [
            ['Lettuce, leafy greens, most herbs', '5.5 – 6.5', 'A target near 5.8-6.2 is a common sweet spot'],
            ['Strawberries', '5.5 – 6.5', 'Tolerant within the standard range'],
            ['Tomatoes', '5.8 – 6.3', 'Slightly narrower window for fruiting plants'],
            ['Hot peppers', '5.8 – 6.3', 'Keep within this band for steady uptake'],
            ['Bell peppers', '6.0 – 6.5', 'Slightly higher than hot peppers'],
          ],
        },
        {
          type: 'list',
          items: [
            'Measure with a calibrated pH pen (recalibrate regularly against buffer solution) or a reliable drop test. Cheap, uncalibrated meters are a common source of confusing readings.',
            'Adjust with pH-down (commonly an acid such as phosphoric or citric acid) or pH-up (commonly potassium hydroxide or bicarbonate). Add a small amount, stir, wait 15-30 minutes, then re-test — overshooting and chasing the number back and forth is the classic mistake.',
            'Expect pH to drift on its own as plants feed. A small daily or every-few-days check is normal, and a slow drift is not an emergency.',
            'Adjust the pH of plain water first, then add nutrients, and re-check afterward, since most nutrients shift it a little.',
          ],
        },
        {
          type: 'tip',
          emoji: '🎯',
          text: 'Staying inside the range matters more than hitting one exact number. A pH that wanders between 5.8 and 6.4 is fine; one that sits at 7.5 will produce yellowing new growth even in a fully fed solution.',
        },
        {
          type: 'image',
          src: '/guides/hydroponic-nutrients-ph-ec/ph-pen-testing-water.jpg',
          alt: 'A digital pH pen being held in a glass of water on a workbench with the display out of focus',
          caption: 'A calibrated pH pen is one of the most valuable tools a hydroponic grower can own.',
        },
      ],
    },
    {
      id: 'ec',
      title: 'EC and TDS: Measuring Nutrient Strength',
      blocks: [
        {
          type: 'p',
          text: 'EC (electrical conductivity) measures how much dissolved salt — and therefore nutrient — is in the water, in millisiemens per centimeter (mS/cm). TDS (total dissolved solids) meters report the same idea in parts per million (ppm), converted from EC. The catch is that TDS meters use different conversion factors, commonly 500 or 700 ppm per 1.0 mS/cm, so a ppm reading is only meaningful if you know which scale your meter uses. When in doubt, use EC.',
        },
        {
          type: 'table',
          headers: ['Crop / Stage', 'Typical EC (mS/cm)', 'Notes'],
          rows: [
            ['Seedlings and cuttings', '0.4 – 0.8', 'Start weak; young roots are easily burned'],
            ['Lettuce and leafy greens', '0.8 – 1.4', 'Greens are light feeders'],
            ['Herbs (basil and similar)', '1.0 – 1.6', 'Slightly hungrier than lettuce'],
            ['Fruiting plants (tomato, pepper, cucumber)', '1.8 – 3.0', 'Heavy feeders once flowering and fruiting; ramp up gradually'],
          ],
        },
        {
          type: 'list',
          items: [
            'Follow the feeding chart on your specific nutrient product first. The ranges above are general starting points, not a substitute for the manufacturer\'s guidance.',
            'Measure your plain tap water\'s EC before adding nutrients, so you know how much of your reading is the nutrient and how much is what came out of the tap.',
            'Rising EC usually means plants are drinking water faster than they are using nutrients, so add plain water. Falling EC usually means they are consuming nutrients, so add nutrient at a reduced strength — it is easy to overcorrect.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Too strong is a bigger risk than too weak. An overconcentrated solution causes tip burn and stunted growth quickly, while a slightly weak one simply grows a bit slower — when unsure, go lighter and increase gradually.',
        },
        {
          type: 'image',
          src: '/guides/hydroponic-nutrients-ph-ec/healthy-lettuce-vs-tip-burn.jpg',
          alt: 'Two hydroponic lettuce leaves side by side, one healthy and green and one with brown burnt tips',
          caption: 'Tip burn — brown, crispy leaf edges — is a classic sign of a nutrient solution that is too strong.',
        },
      ],
    },
    {
      id: 'reservoir-management',
      title: 'Managing the Reservoir Day to Day',
      blocks: [
        {
          type: 'p',
          text: 'A hydroponic reservoir is a small living system. A few steady habits keep it stable and prevent almost every common problem.',
        },
        {
          type: 'list',
          items: [
            'Keep the solution cool — roughly 65-72°F. Warm water holds less dissolved oxygen and encourages root rot and algae.',
            'Keep light out of the reservoir. Opaque containers and covered lids prevent algae, which competes with plants for nutrients and clogs pumps.',
            'Top up with plain water between refreshes, since plants drink water faster than they use nutrients, and check pH and EC after topping up.',
            'Replace the solution on a regular schedule — commonly every one to three weeks depending on reservoir size and crop — rather than waiting for problems. Small reservoirs need refreshing more often than large ones.',
            'Flush the system with plain, pH-adjusted water every few weeks to prevent salt buildup and nutrient lockout, especially in systems that use a grow medium.',
            'Provide oxygen where the system calls for it: an air pump and air stone for deep water culture, flowing water in NFT, or the air gap in a Kratky container.',
          ],
        },
        {
          type: 'tip',
          emoji: '📓',
          text: 'Write down the pH, EC, temperature, and date each time you check. A short log turns mysterious problems into obvious patterns, and it is the fastest way to learn how your particular setup behaves.',
        },
        {
          type: 'image',
          src: '/guides/hydroponic-nutrients-ph-ec/air-stone-bubbling-reservoir.jpg',
          alt: 'An air stone bubbling in a clear reservoir of nutrient solution beneath hydroponic plants',
          caption: 'An air pump and air stone keep the solution oxygenated in deep water culture.',
        },
      ],
    },
    {
      id: 'diagnosing-problems',
      title: 'Diagnosing Nutrient Problems',
      blocks: [
        {
          type: 'p',
          text: 'Leaf symptoms point toward likely causes, but several problems look similar, so treat these as starting hypotheses and confirm with a pH and EC reading before changing anything.',
        },
        {
          type: 'table',
          headers: ['Symptom', 'Possible Cause', 'What to Check'],
          rows: [
            ['Brown, crispy leaf tips or edges', 'Solution too strong, or a calcium uptake problem', 'Measure EC; dilute if high; check for very high temperatures or humidity swings'],
            ['Pale or yellow new growth', 'pH too high, making iron and other micronutrients unavailable', 'Test pH and bring it back into range'],
            ['Older leaves turning yellow first', 'Shortage of a mobile nutrient such as nitrogen or magnesium', 'Check EC and the nutrient schedule; the solution may be depleted'],
            ['Slow growth, small leaves', 'Too little light, solution too weak, or cold roots', 'Check light hours, EC, and water temperature'],
            ['Wilting despite full reservoir', 'Root rot from warm water or low oxygen', 'Inspect roots for a brown, slimy texture and cool and aerate the system'],
          ],
        },
        {
          type: 'tip',
          emoji: '🔍',
          text: 'Healthy hydroponic roots are white to cream-colored and smell fresh. Brown, slimy, or foul-smelling roots are the clearest single sign that something is wrong with oxygen, temperature, or cleanliness.',
        },
        {
          type: 'image',
          src: '/guides/hydroponic-nutrients-ph-ec/inspecting-healthy-white-roots.jpg',
          alt: 'A gardener inspecting the healthy white roots of a hydroponic lettuce plant',
          caption: 'Healthy hydroponic roots are white to cream-colored and smell fresh.',
        },
      ],
    },
  ],
}
