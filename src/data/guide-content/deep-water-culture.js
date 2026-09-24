export const deepWaterCultureContent = {
  id: 'deep-water-culture',
  hero: {
    emoji: '🪣',
    title: 'Deep Water Culture (DWC)',
    subtitle: 'Roots suspended in an aerated nutrient reservoir — how to build, run, and troubleshoot the bucket system that grows everything from lettuce to tomatoes.',
  },
  intro: 'Deep water culture is the classic step up from passive growing: a plant sits in a net pot in a bucket lid, its roots hang into a reservoir of nutrient solution, and an air pump keeps that solution oxygenated. That constant supply of oxygen and nutrients is why DWC is known for fast growth, and because one bucket holds one plant, it scales from a single basil to a row of tomatoes. This guide covers how it works, how to build a bucket, the water care that keeps roots healthy, which crops suit it, and how to fix the problems that show up. If you are still choosing a system, start with the site\'s Hydroponic System Chooser; for the basics see Hydroponics for Beginners, and for the numbers behind the solution, Hydroponic Nutrients, pH & EC.',
  sections: [
    {
      id: 'how-dwc-works',
      title: 'How Deep Water Culture Works',
      blocks: [
        {
          type: 'p',
          text: 'Plant roots need oxygen as much as they need water. In soil, air pockets supply it. In a reservoir, water holds only a small amount of dissolved oxygen, so DWC adds it back mechanically: an air pump pushes air through an air stone in the bottom of the reservoir, and the rising bubbles both aerate the solution and gently circulate it.',
        },
        {
          type: 'list',
          items: [
            'The plant is held in a net pot set into a hole in the reservoir lid, with its roots hanging down into the solution.',
            'At the start, the solution level sits just touching the bottom of the net pot so young roots reach it right away. As roots grow, they extend down into the water, and many growers let the level drop slightly to leave a small air gap that the upper roots can breathe in.',
            'The air pump sits outside the bucket, connected by airline tubing to the air stone. Continuous aeration is the whole point — DWC is not a passive system.',
            'Because the roots sit in a large volume of solution, DWC is forgiving of short gaps in feeding, but not of warm, stagnant, or poorly aerated water.',
          ],
        },
        {
          type: 'tip',
          emoji: '🫧',
          text: 'Strong, steady bubbling matters more than a fancy air stone. The goal is a reservoir that is gently churning with bubbles the whole time, not a few lazy bubbles at one corner.',
        },
        {
          type: 'image',
          src: '/guides/deep-water-culture/roots-aerated-reservoir.jpg',
          alt: 'Healthy white plant roots hanging in a clear reservoir of water with bubbles rising from an air stone',
          caption: 'In DWC the roots hang in a reservoir that an air pump keeps oxygenated with a steady stream of bubbles.',
        },
      ],
    },
    {
      id: 'building-a-bucket',
      title: 'Building a DWC Bucket',
      blocks: [
        {
          type: 'p',
          text: 'A single-plant DWC bucket costs little and takes an afternoon. Use a food-safe, opaque container so light cannot reach the solution and grow algae — a white or dark 5-gallon bucket with a lid is the standard choice.',
        },
        {
          type: 'list',
          items: [
            'A 5-gallon (or larger) opaque bucket with a tight-fitting lid. For lettuce and herbs, a larger lidded tote can hold several plants in one reservoir.',
            'Net pots that fit snugly in holes cut in the lid — commonly 2 to 3 inches for greens and herbs, and larger (3 to 6 inches) for a big fruiting plant.',
            'An air pump sized for the reservoir, one or more air stones, and airline tubing. Add a small check valve on the line so that if the pump stops, water cannot siphon back down the tube and into the pump.',
            'A hydroponic nutrient, a pH test method, and an EC or TDS meter, as covered in Hydroponic Nutrients, pH & EC.',
            'A starting medium — a rockwool cube or coco plug for each seedling — and clay pebbles to fill the net pot around it for support.',
          ],
        },
        {
          type: 'p',
          text: 'To assemble: cut holes in the lid for the net pots, drill or cut a small opening for the airline, and place the air stone on the bottom of the bucket. Fill with water, add nutrients, adjust pH, seat the seedling in its net pot so the solution just touches the bottom, and start the pump.',
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Keep the air pump above the water line or use a check valve, and plug electrical equipment into a GFCI-protected outlet. Water and electricity are a bad combination if a bucket tips or a cord gets wet.',
        },
        {
          type: 'image',
          src: '/guides/deep-water-culture/net-pot-bucket-lid.jpg',
          alt: 'A hand placing a black net pot into a round hole in a white bucket lid',
          caption: 'A snug hole in an opaque lid holds each net pot and keeps light out of the reservoir.',
        },
      ],
    },
    {
      id: 'water-care',
      title: 'Water Temperature and Reservoir Care',
      blocks: [
        {
          type: 'p',
          text: 'DWC succeeds or fails on the reservoir. Roots sitting in warm, low-oxygen water are the main reason DWC plants develop root rot, so temperature and cleanliness deserve the most attention.',
        },
        {
          type: 'list',
          items: [
            'Keep the solution roughly 65-72°F. Warmer water holds less dissolved oxygen and encourages the organisms behind root rot; a bucket in a hot garage or in direct sun is a common cause of trouble.',
            'Keep light out. Opaque containers and lids prevent algae, which competes with plants for nutrients and can clog equipment.',
            'Top up with plain water between refreshes, because plants drink water faster than they use nutrients. Re-check pH and strength after topping up.',
            'Replace the whole solution on a regular schedule — commonly every one to three weeks depending on reservoir size and crop — and rinse the bucket while it is empty.',
            'Watch the roots. Healthy roots are white to cream-colored and smell fresh; brown, slimy, or foul-smelling roots signal a problem with temperature, oxygen, or cleanliness.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌡️',
          text: 'If a bucket runs warm, move it somewhere cooler, shade it, and add insulation before reaching for additives. Fixing the temperature solves more root problems than any product.',
        },
        {
          type: 'image',
          src: '/guides/deep-water-culture/air-pump-tubing-shelf.jpg',
          alt: 'A small air pump with airline tubing on a shelf beside a white bucket hydroponic reservoir',
          caption: 'The air pump stays outside the bucket, connected to the air stone by airline tubing.',
        },
      ],
    },
    {
      id: 'best-crops',
      title: 'What to Grow in DWC',
      blocks: [
        {
          type: 'p',
          text: 'DWC handles a wider range of crops than most home systems. Fast greens and herbs thrive in it, and because each large plant gets its own bucket, it is also one of the best systems for tomatoes, peppers, and cucumbers.',
        },
        {
          type: 'table',
          headers: ['Crop', 'Container', 'Notes'],
          rows: [
            ['Lettuce and leafy greens', 'Several plants per lidded tote, or one per small bucket', 'Fast and forgiving; harvest outer leaves to keep producing'],
            ['Basil and herbs', 'A tote or bucket with several plants', 'Basil is fast in DWC; keep water in the cooler part of its range'],
            ['Tomatoes', 'One plant per 5-gallon bucket', 'Needs a cage or trellis; watch calcium and magnesium closely'],
            ['Peppers', 'One plant per 5-gallon bucket', 'Needs strong light and warm air; keep the solution itself cool'],
            ['Cucumbers', 'One plant per 5-gallon bucket', 'Needs a vertical trellis; compact or mini varieties suit indoor growing'],
            ['Broccoli and other heavy brassicas', 'One plant per 5-gallon bucket', 'Larger root mass needs the bigger container'],
          ],
        },
        {
          type: 'tip',
          emoji: '🍅',
          text: 'Match the container to the plant. A lettuce is happy in a small tote, but a fruiting plant that will grow for months needs a full bucket of solution and a support system from the start.',
        },
        {
          type: 'image',
          src: '/guides/deep-water-culture/tomato-plant-five-gallon-bucket.jpg',
          alt: 'A tall healthy tomato plant growing in a white five gallon hydroponic bucket supported by a trellis',
          caption: 'Large fruiting plants like tomatoes do well in DWC, one plant per bucket with a trellis for support.',
        },
      ],
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting DWC',
      blocks: [
        {
          type: 'p',
          text: 'Nearly every DWC problem traces back to oxygen, temperature, light, or the nutrient solution. Diagnose from the roots first — they tell you what the leaves cannot.',
        },
        {
          type: 'table',
          headers: ['Symptom', 'Likely Cause', 'Fix'],
          rows: [
            ['Brown, slimy, foul-smelling roots', 'Root rot from warm or poorly aerated water', 'Cool the reservoir, boost aeration, clean and refill; badly affected plants may not recover'],
            ['Green slime on the walls or roots', 'Light is reaching the solution', 'Use an opaque bucket and lid; cover any gaps around net pots'],
            ['Wilting with a full reservoir', 'Low oxygen, warm water, or root damage', 'Check that the pump is running and the water is cool; inspect roots'],
            ['Nothing is bubbling', 'Pump failure, kinked tubing, or a clogged air stone', 'Replace the pump, straighten the line, or swap the stone; keep a spare pump on hand'],
            ['Brown, crispy leaf tips', 'Solution too strong', 'Measure strength and dilute with plain water'],
            ['Pale or yellow new growth', 'pH too high, blocking micronutrient uptake', 'Test pH and bring it back into the 5.5-6.5 range'],
            ['Roots crowd out of the net pot and touch the air stone', 'Normal growth in a healthy system', 'Trim carefully only if roots block the stone; keep the air gap and flow clear'],
          ],
        },
        {
          type: 'tip',
          emoji: '🔧',
          text: 'Keep a spare air pump and air stone. A pump failure in a warm room can damage roots within a day, and a $15 spare is the cheapest insurance in hydroponics.',
        },
        {
          type: 'image',
          src: '/guides/deep-water-culture/healthy-vs-rotting-roots.jpg',
          alt: 'Healthy white hydroponic roots compared with brown slimy rotting roots side by side',
          caption: 'Healthy roots are white and clean; brown, slimy roots are the classic sign of warm or poorly aerated water.',
        },
      ],
    },
  ],
}
