export const verticalHydroponicTowersContent = {
  id: 'vertical-hydroponic-towers',
  hero: {
    emoji: '🗼',
    title: 'Vertical Hydroponic Towers',
    subtitle: 'Stack dozens of plants in the floor space of a chair — how tower systems work, what they suit, and where they fall short.',
  },
  intro: 'A vertical hydroponic tower grows plants in pockets stacked in a column, with nutrient solution pumped to the top and trickling down past the roots. Because you are growing up instead of out, a tower can hold a couple dozen lettuce, herb, or strawberry plants in about the floor space of a chair, which makes it appealing for patios, kitchens, and small yards. The tradeoffs are a pump that must not stop, small pockets that limit plant size, and uneven watering if the design is poor. This guide covers how towers work, what to grow, how to set one up, and how to keep it healthy. To compare towers with other systems, use the site\'s Hydroponic System Chooser, and for solution numbers see Hydroponic Nutrients, pH & EC.',
  sections: [
    {
      id: 'how-towers-work',
      title: 'How a Tower Works',
      blocks: [
        {
          type: 'p',
          text: 'A tower is a recirculating system arranged vertically. A pump at the base lifts solution through a tube to the top, where it is released and flows down through the column, wetting the roots in each pocket before draining back into the reservoir.',
        },
        {
          type: 'list',
          items: [
            'Plants sit in net cups or pockets around the outside of a column, with roots reaching inward to the flowing solution.',
            'Gravity does the work on the way down, so the design depends on even flow reaching every level, including the bottom.',
            'The reservoir sits at the base, which also keeps the unit stable and holds the pump.',
            'Because there is little medium to hold water, a tower loses moisture quickly if the pump stops, so it needs the same protections as NFT.',
          ],
        },
        {
          type: 'tip',
          emoji: '📏',
          text: 'The appeal is density: a tower gives you many plants per square foot of floor. It only pays off if you actually eat that many greens and herbs, so size the tower to what you will use.',
        },
        {
          type: 'image',
          src: '/guides/vertical-hydroponic-towers/lettuce-tower-patio.jpg',
          alt: 'A tall white vertical hydroponic tower with many lettuce plants growing from pockets on a patio',
          caption: 'A tower stacks many plants into a small footprint, fed from the top by a pump.',
        },
      ],
    },
    {
      id: 'what-to-grow',
      title: 'What Grows Well in a Tower',
      blocks: [
        {
          type: 'p',
          text: 'Towers suit light plants with modest root systems, because the pockets are small and the structure holds limited weight.',
        },
        {
          type: 'table',
          headers: ['Crop', 'Fit', 'Notes'],
          rows: [
            ['Lettuce and leafy greens', 'Excellent', 'The classic tower crop; harvest outer leaves for continuous production'],
            ['Basil, mint, parsley, cilantro', 'Excellent', 'Compact herbs thrive in small pockets'],
            ['Strawberries', 'Excellent', 'Fruit hangs clear of the column; everbearing types fruit over a long season'],
            ['Kale, bok choy, arugula', 'Very good', 'Fast growers that finish well in pockets'],
            ['Tomatoes, peppers, cucumbers', 'Poor', 'Too heavy for the pockets and column; use DWC or Dutch buckets instead'],
          ],
        },
        {
          type: 'list',
          items: [
            'Put larger, heavier plants in the middle levels and small ones at the edges to keep the tower balanced.',
            'Mix plants with similar light and feeding needs in one tower, so one solution suits them all.',
            'Vigorous herbs like mint can crowd their neighbors, so plant them where they have room or use a separate tower.',
          ],
        },
        {
          type: 'image',
          src: '/guides/vertical-hydroponic-towers/tower-greenhouse-rows.jpg',
          alt: 'Rows of tall white vertical hydroponic towers covered in green lettuce and herbs in a bright greenhouse',
          caption: 'Towers scale from a single patio unit to whole rows in a greenhouse.',
        },
        {
          type: 'image',
          src: '/guides/vertical-hydroponic-towers/strawberries-tower-pockets.jpg',
          alt: 'Ripe strawberries hanging from the pockets of a vertical hydroponic tower',
          caption: 'Strawberries are one of the best tower crops, with fruit hanging clear of the column.',
        },
      ],
    },
    {
      id: 'setup',
      title: 'Setting Up a Tower',
      blocks: [
        {
          type: 'p',
          text: 'Many home towers come as complete kits, which is the simplest way to start. If you build your own, the parts are a base reservoir, a pump, a column with pockets, and a top distributor.',
        },
        {
          type: 'list',
          items: [
            'Place the tower on a level, stable surface where it will not tip, near a GFCI-protected outlet, and where it gets adequate light — either strong sun or a grow light.',
            'For indoor use, position lights so every level receives enough intensity, since the bottom often gets much less than the top. See the Grow Lights guide.',
            'Fill the reservoir, adjust pH, add nutrients at a mild strength, and run the system with plain water first to confirm even flow to every level.',
            'Start seedlings in rockwool or coco plugs and place them in the pockets once roots appear.',
            'Water can evaporate quickly, especially outdoors, so plan to top up the reservoir often.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Do not put a tower where a leak or overflow can damage floors, and keep the pump and cord off wet surfaces. If you are away often, choose a system with a buffer, since a tower can dry out within hours of a pump failure.',
        },
        {
          type: 'image',
          src: '/guides/vertical-hydroponic-towers/tower-base-reservoir-pump.jpg',
          alt: 'The base of a vertical hydroponic tower showing a reservoir with a pump and tubing',
          caption: 'The reservoir and pump at the base feed solution to the top of the column.',
        },
      ],
    },
    {
      id: 'maintenance',
      title: 'Keeping a Tower Healthy',
      blocks: [
        {
          type: 'p',
          text: 'Towers are compact, so small problems spread quickly. A steady routine catches issues early.',
        },
        {
          type: 'table',
          headers: ['Symptom', 'Likely Cause', 'Fix'],
          rows: [
            ['Bottom plants dry or stunted', 'Uneven flow, with too little reaching the lower levels', 'Increase flow slightly and check for blockages or an unlevel base'],
            ['Top plants healthy, bottom plants pale', 'Too little light reaching the lower levels', 'Add or reposition lights, or put shade-tolerant crops lower'],
            ['Water flowing down the outside', 'Pockets or fittings not seated properly', 'Re-seat net cups and check the column seals'],
            ['Wilting throughout', 'Pump failure or a blocked line', 'Restore flow immediately; keep a spare pump'],
            ['Brown, crispy leaf tips', 'Solution too strong', 'Measure strength and dilute with plain water'],
            ['Green slime on the column or roots', 'Light reaching the solution', 'Cover the reservoir and any exposed channels'],
          ],
        },
        {
          type: 'tip',
          emoji: '🧼',
          text: 'Between crops, take the tower apart, scrub the column and reservoir, and rinse well. Old root debris left inside is where clogs and disease begin.',
        },
        {
          type: 'image',
          src: '/guides/vertical-hydroponic-towers/hand-checking-tower-roots.jpg',
          alt: 'A hand lifting a plant from a tower pocket to check its healthy white roots',
          caption: 'Check the roots in a few pockets regularly — they show problems before the leaves do.',
        },
      ],
    },
  ],
}
