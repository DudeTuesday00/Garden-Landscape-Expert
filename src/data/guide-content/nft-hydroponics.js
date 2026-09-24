export const nftHydroponicsContent = {
  id: 'nft-hydroponics',
  hero: {
    emoji: '🌊',
    title: 'NFT Hydroponics (Nutrient Film Technique)',
    subtitle: 'A thin stream of nutrient solution flowing past the roots — the compact, water-efficient system behind most commercial lettuce, and how to run it at home.',
  },
  intro: 'In the nutrient film technique, plants sit in a sloped channel while a shallow stream of nutrient solution flows continuously along the bottom, wetting the tips of the roots and returning to a reservoir to be pumped around again. Because the water is a thin film rather than a deep bath, NFT uses very little solution, packs many plants into a small footprint, and suits lettuce, herbs, and strawberries especially well. The tradeoff is that it depends on a pump that must not stop. This guide covers how NFT works, how to build a small system, what to grow, how to protect against pump failure, and how to keep channels flowing. For choosing between systems, see the site\'s Hydroponic System Chooser; for solution numbers, see Hydroponic Nutrients, pH & EC.',
  sections: [
    {
      id: 'how-nft-works',
      title: 'How NFT Works',
      blocks: [
        {
          type: 'p',
          text: 'An NFT system is a loop. A pump lifts nutrient solution from a reservoir up to the high end of a channel, gravity carries it in a thin film down the slope past the roots, and it drains back into the reservoir at the low end to be recirculated.',
        },
        {
          type: 'list',
          items: [
            'The bottom of each root mass sits in the flowing film, taking up water and nutrients, while the upper roots stay in the air and get plenty of oxygen.',
            'The channel is set on a gentle slope — commonly cited as roughly 1 to 3 percent, or about an inch of drop for every 3 to 8 feet of channel — so the film moves steadily without pooling or rushing.',
            'Flow is modest: a commonly cited target is roughly a liter per minute (about a quarter gallon) per channel. Too fast and the film deepens and floods the roots; too slow and the far end of the channel goes short of nutrients.',
            'There is no grow medium storing water, so the roots depend entirely on the flowing film staying constant.',
          ],
        },
        {
          type: 'tip',
          emoji: '💧',
          text: 'The film should be thin — the bottom of the root mass should be wet, but the plant should not be sitting in a pool. If water is pooling, the slope is too shallow or the channel is blocked.',
        },
        {
          type: 'image',
          src: '/guides/nft-hydroponics/thin-film-flowing-channel.jpg',
          alt: 'A thin film of water flowing along the bottom of a white channel past the white roots of lettuce plants',
          caption: 'In NFT a shallow film of solution flows continuously past the tips of the roots.',
        },
      ],
    },
    {
      id: 'building-a-small-system',
      title: 'Building a Small NFT System',
      blocks: [
        {
          type: 'p',
          text: 'A starter NFT setup needs only a few parts and can be built from purpose-made channels or from PVC pipe. The parts are the same at any size.',
        },
        {
          type: 'list',
          items: [
            'Channels: purpose-made NFT channels or PVC pipe or rectangular gutter with holes cut for net pots, set at a slight slope. Keep channels fairly short at home — long channels make the far end harder to keep supplied.',
            'A reservoir: an opaque tank or tote below the low end of the channels, big enough that pumping does not draw it dangerously low. Bigger reservoirs also change temperature and strength more slowly.',
            'A submersible pump and tubing to lift solution to the high end, with a way to split flow evenly to each channel.',
            'A return path from the low end of each channel back into the reservoir, positioned so returning water splashes and aerates.',
            'Net pots and starting plugs, plus hydroponic nutrients, a pH test method, and an EC meter.',
          ],
        },
        {
          type: 'p',
          text: 'Set the channels on a stand with a consistent slope, connect the pump and tubing, and run the system with plain water first to check for leaks, pooling, and even flow before adding plants or nutrients.',
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Test the whole system with plain water before planting. Leaks, blocked tubing, and uneven flow are far easier to fix with an empty system than with a crop in it — and plug the pump into a GFCI-protected outlet.',
        },
        {
          type: 'image',
          src: '/guides/nft-hydroponics/small-nft-system-stand.jpg',
          alt: 'A small NFT hydroponic system with sloped white channels on a stand and a reservoir with tubing below',
          caption: 'A small NFT system needs sloped channels, a reservoir, a submersible pump, and a return path.',
        },
      ],
    },
    {
      id: 'best-crops',
      title: 'What to Grow and How to Space It',
      blocks: [
        {
          type: 'p',
          text: 'NFT is at its best with light plants that have modest root masses. Fast greens and herbs, and strawberries, thrive; large, heavy fruiting plants do not suit a shallow channel.',
        },
        {
          type: 'table',
          headers: ['Crop', 'Fit', 'Notes'],
          rows: [
            ['Lettuce', 'Excellent', 'The classic NFT crop; roughly 6-8 inches between plants for full heads, tighter for baby leaf'],
            ['Basil, mint, parsley, cilantro, chives', 'Excellent', 'Fast growing; harvest often to keep plants compact'],
            ['Kale, spinach, arugula, bok choy', 'Very good', 'Fast growers that finish well in a channel'],
            ['Watercress', 'Excellent', 'Naturally suited to flowing water'],
            ['Strawberries', 'Excellent', 'Everbearing varieties fruit repeatedly; keep pH around 5.5-6.5'],
            ['Tomatoes, cucumbers, peppers', 'Poor', 'Heavy plants and big root masses clog channels; use DWC or a drip system instead'],
          ],
        },
        {
          type: 'tip',
          emoji: '🍓',
          text: 'Strawberries are the surprise standout in NFT: the channel keeps fruit off the ground and the roots supplied, and everbearing types can fruit for months.',
        },
        {
          type: 'image',
          src: '/guides/nft-hydroponics/strawberries-in-channel.jpg',
          alt: 'Ripe red strawberries growing on plants in a white NFT channel',
          caption: 'Strawberries and leafy greens are the best fit for NFT channels.',
        },
      ],
    },
    {
      id: 'pump-failure',
      title: 'Protecting Against Pump Failure',
      blocks: [
        {
          type: 'p',
          text: 'NFT\'s biggest weakness is that there is no medium holding water between the roots and the pump. If the pump stops, the roots can dry out within hours, especially in a warm room, and a whole crop can be lost in a day.',
        },
        {
          type: 'list',
          items: [
            'Check the pump and flow daily. A quick look at whether water is moving along every channel takes seconds and catches most failures.',
            'Keep a spare pump on hand so a failure is a five-minute fix instead of a lost crop.',
            'Consider a simple backup: a battery backup or a second pump on a separate outlet, especially if you are away often or live where power outages are common.',
            'Line the channel bottoms with a thin capillary mat so roots stay damp for longer if flow stops. This buys time rather than replacing the pump.',
            'Keep the room cool. Roots dry out much faster in a warm, dry space.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'If you travel or cannot check the system daily, choose a system with a buffer — Kratky, deep water culture, or ebb and flow with a medium — rather than NFT. The system chooser tool weighs exactly this tradeoff.',
        },
        {
          type: 'image',
          src: '/guides/nft-hydroponics/submersible-pump-reservoir.jpg',
          alt: 'A small submersible pump with tubing inside a dark hydroponic reservoir',
          caption: 'The submersible pump is the heart of an NFT system — keep a spare and check flow daily.',
        },
      ],
    },
    {
      id: 'maintenance',
      title: 'Keeping Channels Flowing',
      blocks: [
        {
          type: 'p',
          text: 'Most NFT problems are flow problems. As plants grow, their root mats can build up and block the channel, so regular attention keeps the film moving.',
        },
        {
          type: 'table',
          headers: ['Symptom', 'Likely Cause', 'Fix'],
          rows: [
            ['Water pooling in the channel', 'Slope too shallow, or roots blocking the flow', 'Increase the slope slightly; trim or thin dense root mats'],
            ['Plants at the far end are pale or stunted', 'Flow too slow or a channel too long', 'Increase flow, shorten the channel, or feed from both ends'],
            ['Water overflowing the channel sides', 'Flow too fast or a blocked outlet', 'Reduce flow; clear the drain'],
            ['Brown, crispy leaf tips', 'Solution too strong', 'Measure strength and dilute with plain water'],
            ['Green slime in the channel or reservoir', 'Light reaching the solution', 'Cover channels and reservoir so no light gets in'],
            ['Wilting plants with a dry channel', 'Pump failure or a blocked line', 'Restore flow immediately; check tubing and the pump'],
          ],
        },
        {
          type: 'tip',
          emoji: '🧼',
          text: 'Between crops, flush and scrub the channels and reservoir with a mild cleaner and rinse well. Old root debris left in a channel is where clogs and disease start.',
        },
        {
          type: 'image',
          src: '/guides/nft-hydroponics/lettuce-root-mat-channel.jpg',
          alt: 'A hand lifting a lettuce plant out of an NFT channel showing a dense mat of white roots',
          caption: 'Root mats grow dense over time — check them so they do not block the flow.',
        },
      ],
    },
  ],
}
