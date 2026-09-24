export const wickSystemHydroponicsContent = {
  id: 'wick-system-hydroponics',
  hero: {
    emoji: '🕯️',
    title: 'Wick System Hydroponics',
    subtitle: 'A wick draws nutrient solution up into the grow medium — the simplest passive setup with no pump, no timer, and no electricity.',
  },
  intro: 'A wick system is one of the oldest and simplest forms of hydroponics. Plants sit in a pot of grow medium, a strip of absorbent material runs from the medium down into a reservoir of nutrient solution, and capillary action pulls the solution up as the plants use it. With no pump, timer, or electricity, there is nothing to fail, which makes it a gentle first system for a windowsill herb or small plant. Its limits are real, though: a wick can only deliver so much water, so it suits small, low-demand plants rather than big, thirsty ones. This guide covers how it works, how to build one, what to grow, and how to handle salt buildup. For the other passive system, see The Kratky Method, and to compare all systems, use the Hydroponic System Chooser.',
  sections: [
    {
      id: 'how-it-works',
      title: 'How a Wick System Works',
      blocks: [
        {
          type: 'p',
          text: 'Capillary action is the same effect that lets a paper towel soak up a spill. A wick — a strip of absorbent material — has one end in the nutrient reservoir and the other in the grow medium around the plant. As the medium dries, it draws more solution up the wick.',
        },
        {
          type: 'list',
          items: [
            'The plant sits in a pot of medium such as perlite, vermiculite, or coco coir, which holds moisture and lets air reach the roots.',
            'One or more wicks run from the medium down into a reservoir beneath or beside the pot.',
            'Because the plant only pulls up what it needs, the system is very hard to over-water.',
            'There is no aeration and no circulation, so the reservoir stays still, which is fine for small plants but limits how much a plant can drink.',
          ],
        },
        {
          type: 'tip',
          emoji: '🕯️',
          text: 'Cotton rope or felt wicks are common, but avoid anything treated or dyed. Pick a material that is absorbent and clean, and use enough of it for the size of the plant.',
        },
        {
          type: 'image',
          src: '/guides/wick-system-hydroponics/wick-rope-pot-reservoir.jpg',
          alt: 'A small pot of grow medium with a cotton rope wick running down into a reservoir of water below',
          caption: 'A wick draws nutrient solution up from the reservoir into the grow medium.',
        },
      ],
    },
    {
      id: 'building-one',
      title: 'Building a Wick System',
      blocks: [
        {
          type: 'p',
          text: 'A basic wick setup needs only a few items and can be made from household containers.',
        },
        {
          type: 'list',
          items: [
            'A pot or net cup for the plant, with drainage or an opening at the bottom to pass the wick through.',
            'A reservoir underneath — an opaque container, or a clear one wrapped in dark material, to keep light out and prevent algae.',
            'An absorbent wick, such as cotton rope, several inches longer than the distance from the medium to the reservoir.',
            'A light, well-draining grow medium such as perlite, vermiculite, or coco coir, or a mix of them.',
            'A hydroponic nutrient and a way to check pH.',
          ],
        },
        {
          type: 'p',
          text: 'Thread the wick through the bottom of the pot, fan the top end out in the medium around the roots, and set the pot so the other end reaches the bottom of the reservoir. Fill the reservoir with mild nutrient solution at a corrected pH, then plant.',
        },
        {
          type: 'image',
          src: '/guides/wick-system-hydroponics/perlite-medium-close.jpg',
          alt: 'Close-up of white perlite grow medium in a small pot with a cotton wick fanned out among the pieces',
          caption: 'A light, free-draining medium like perlite lets the wick deliver moisture without waterlogging.',
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Use a mild solution. Because water evaporates from the medium and leaves nutrient salts behind, a strong mix builds up faster in a wick system than in other setups.',
        },
        {
          type: 'image',
          src: '/guides/wick-system-hydroponics/herbs-windowsill-wick-pots.jpg',
          alt: 'Small pots of herbs on a bright windowsill each sitting above a small reservoir of water',
          caption: 'Herbs on a windowsill are the classic use for a simple wick system.',
        },
      ],
    },
    {
      id: 'best-crops',
      title: 'What to Grow',
      blocks: [
        {
          type: 'p',
          text: 'Wick systems suit small plants with modest water needs. Large, thirsty plants outrun what a wick can deliver.',
        },
        {
          type: 'table',
          headers: ['Crop', 'Fit', 'Notes'],
          rows: [
            ['Basil, mint, chives, oregano, thyme', 'Good', 'Compact herbs are the best match for a wick'],
            ['Small lettuce and baby greens', 'Fair', 'Works for a plant or two, but drier spells can slow growth'],
            ['Small houseplants', 'Good', 'Foliage plants with steady, low water needs do well'],
            ['Tomatoes, peppers, cucumbers', 'Poor', 'A wick cannot supply enough water for a large fruiting plant'],
            ['Anything large or fast-growing', 'Poor', 'Use deep water culture, ebb & flow, or Dutch buckets instead'],
          ],
        },
        {
          type: 'tip',
          emoji: '🌿',
          text: 'If a plant keeps wilting even though the reservoir is full, the wick is not keeping up. Add a second wick, use a thicker one, or move to a system that delivers more water.',
        },
        {
          type: 'image',
          src: '/guides/wick-system-hydroponics/basil-perlite-pot.jpg',
          alt: 'A healthy basil plant growing in a small pot filled with white perlite',
          caption: 'Compact herbs like basil suit the modest water delivery of a wick.',
        },
      ],
    },
    {
      id: 'care',
      title: 'Care and Troubleshooting',
      blocks: [
        {
          type: 'p',
          text: 'A wick system needs little attention, but the medium and reservoir still need occasional care.',
        },
        {
          type: 'table',
          headers: ['Symptom', 'Likely Cause', 'Fix'],
          rows: [
            ['White crust on the medium', 'Salt buildup from evaporation', 'Flush the medium with plain, pH-adjusted water and use a milder solution'],
            ['Wilting with a full reservoir', 'Wick not delivering enough water', 'Add or thicken the wick, or choose a smaller plant'],
            ['Constantly soggy medium and a foul smell', 'Too much wicking or poor drainage', 'Use a lighter, more free-draining medium and a thinner wick'],
            ['Green slime in the reservoir', 'Light reaching the solution', 'Use an opaque container or wrap a clear one'],
            ['Slow growth and pale leaves', 'Depleted solution', 'Replace the reservoir solution with a fresh, mild mix'],
          ],
        },
        {
          type: 'list',
          items: [
            'Top up the reservoir with plain water as it drops, and replace the solution every couple of weeks.',
            'Flush the medium with plain water every few weeks to wash out accumulated salts.',
            'Check the wick for mold or slime and replace it if it looks dirty.',
          ],
        },
        {
          type: 'image',
          src: '/guides/wick-system-hydroponics/salt-crust-on-medium.jpg',
          alt: 'A close-up of white mineral crust on the surface of the growing medium in a small plant pot',
          caption: 'White crust on the medium is a sign of salt buildup — flush with plain water.',
        },
      ],
    },
  ],
}
