export const compostTeaContent = {
  id: 'compost-tea',
  hero: {
    emoji: '🫖',
    title: 'Compost Tea: What It Is, How to Brew It, and How to Use It Safely',
    subtitle: 'A liquid made from finished compost — an honest look at what it can and cannot do, a simple aerated recipe, and the safety steps for edible plants.',
  },
  intro: 'Compost tea is a liquid made by steeping finished compost in water, then using the strained liquid to water soil or to spray leaves. Gardeners use it to add beneficial microorganisms and a small amount of dissolved nutrients. It is popular, inexpensive, and easy to make, but it is also surrounded by strong claims that research does not always support. Results in studies are mixed, and the tea is best understood as a gentle supplement, not a replacement for compost itself or for a proper soil-building program. This guide explains what compost tea is, what it can realistically do, how to brew a simple aerated batch, how to apply it, and the food-safety precautions that matter most when edible plants are involved. For the foundation, see the Composting Basics and Organic Fertilizing guides, and for soil, see Soil Health.',
  sections: [
    {
      id: 'what-it-is',
      title: 'What Compost Tea Is, and What to Expect',
      blocks: [
        {
          type: 'p',
          text: 'Compost tea is not the same as compost leachate, which is the dark liquid that drains from a compost pile. It is a deliberate brew: finished compost steeped in water, often with air bubbled through it, so that the microorganisms in the compost are released into the liquid.',
        },
        {
          type: 'list',
          items: [
            'It supplies living microorganisms and small amounts of dissolved nutrients. It is not a strong fertilizer, and it does not replace one.',
            'Scientific studies of compost tea have produced inconsistent results. Some show benefits for plant vigor or reduced leaf disease, and others show little or no effect, and results depend heavily on the compost and the method.',
            'Spreading finished compost on the soil is a proven, dependable way to improve soil and feed plants. Tea is a supplement to that, not a shortcut around it.',
            'Claims that tea cures or prevents specific plant diseases should be treated cautiously, since the evidence is uneven.',
            'The main advantages are low cost and low risk when brewed and used properly, and many gardeners find their plants respond well.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌱',
          text: 'If you have to choose between making tea and simply spreading an inch or two of compost over your beds, spread the compost. Use tea as an extra, particularly for seedlings, transplants, and container plants.',
        },
      ],
    },
    {
      id: 'ingredients',
      title: 'Ingredients and Equipment',
      blocks: [
        {
          type: 'p',
          text: 'A good tea starts with good compost. Because the microorganisms come from the compost, the quality of the finished product matters more than any other choice you make.',
        },
        {
          type: 'list',
          items: [
            'Finished compost: dark, crumbly, and earthy-smelling, with no recognizable food scraps and no sour or rotten odor. Worm castings, a type of compost, also work.',
            'Water: chlorinated tap water can be left to stand in an open bucket for several hours before use, which lets much of the chlorine dissipate. Rainwater works well.',
            'A container: a clean 5-gallon bucket is a common size.',
            'A porous bag for the compost, such as a fine mesh bag or a clean nylon stocking, so the liquid is easy to strain.',
            'An aeration source: an aquarium air pump with an air stone, or a similar small bubbler, keeps oxygen in the brew.',
            'Optional food for the microbes: a small amount of unsulfured molasses, sometimes about a tablespoon per gallon of water, is commonly used to feed them.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Use only well-finished compost. Compost that is still raw, or that contains fresh manure, can carry harmful bacteria, and steeping it in a warm liquid can multiply them. Where edible plants are involved, avoid manure-based compost for tea.',
        },
        {
          type: 'image',
          src: '/guides/compost-tea/finished-compost.jpg',
          alt: 'Dark crumbly finished compost being scooped from an open bag with a metal scoop',
          caption: 'Only fully finished, sweet-smelling compost belongs in a tea bag.',
        },
      ],
    },
    {
      id: 'brewing',
      title: 'Brewing an Aerated Batch',
      blocks: [
        {
          type: 'p',
          text: 'Aeration is what separates a good tea from a risky one. Without oxygen, the liquid turns sour and foul-smelling as anaerobic organisms take over, and that is not what you want to put on plants.',
        },
        {
          type: 'list',
          items: [
            'Fill a clean bucket with roughly 5 gallons of water and, if using tap water, let it stand for several hours first.',
            'Put a couple of cups of finished compost into the mesh bag, tie it closed, and hang or place it in the water.',
            'Place the air stone in the bucket, connect it to the pump, and turn on the bubbler so the liquid stays actively moving.',
            'Add a small amount of unsulfured molasses if you wish, then brew for roughly 24 hours, and no longer than a day and a half in warm weather.',
            'Smell the tea: it should smell earthy and fresh. If it smells sour, rotten, or like sewage, discard it and start again with better compost.',
            'Remove the bag, squeeze out the liquid, and return the solids to the compost pile or garden.',
          ],
        },
        {
          type: 'tip',
          emoji: '⏱️',
          text: 'Use the tea within a few hours of finishing. The microorganisms need oxygen, and a finished tea that sits without aeration begins to spoil.',
        },
        {
          type: 'image',
          src: '/guides/compost-tea/aerated-brewing.jpg',
          alt: 'A plastic bucket of brown liquid with an aquarium air stone bubbling and a mesh bag of compost hanging in it',
          caption: 'An air stone keeps the brew oxygenated so it stays fresh-smelling.',
        },
      ],
    },
    {
      id: 'applying',
      title: 'How and When to Apply It',
      blocks: [
        {
          type: 'p',
          text: 'You can apply compost tea to the soil or to the leaves. Soil application is the simplest, the safest, and the most widely useful.',
        },
        {
          type: 'list',
          items: [
            'Soil drench: dilute the tea if it is very dark, roughly to the color of weak tea or a light iced tea, and pour it around the base of plants, on the soil and not on the edible parts.',
            'Apply in the morning or evening, and to moist soil, so the liquid soaks in easily.',
            'Seedlings and transplants: a light drench at planting time is a gentle boost and a good use of tea.',
            'Container plants: tea suits pots, which have less soil life than the ground, though it is still a supplement and not a complete feed.',
            'Frequency: every two to four weeks in the growing season is typical, and more often is not necessarily better.',
          ],
        },
        {
          type: 'image',
          src: '/guides/compost-tea/watering-soil.jpg',
          alt: 'A gardener pouring dark brown compost tea from a watering can onto the soil around young vegetable seedlings in a raised bed',
          caption: 'Pouring tea onto the soil at the base of the plants is the simplest and safest way to apply it.',
        },
      ],
    },
    {
      id: 'foliar-sprays',
      title: 'Spraying the Leaves',
      blocks: [
        {
          type: 'p',
          text: 'Some gardeners also spray compost tea on leaves, in the hope that the microorganisms will crowd out leaf diseases. Evidence for this is mixed, so treat it as an optional experiment, not a proven disease control.',
        },
        {
          type: 'list',
          items: [
            'Strain the tea very well through fine cloth so it does not clog the sprayer.',
            'Spray in the early morning or evening, avoiding hot sun, and wet both leaf surfaces lightly.',
            'Keep spray off any leaf, fruit, or herb you plan to eat fresh, and stop spraying edible crops well before harvest.',
            'Do not rely on tea to control a disease that is already spreading. Remove affected leaves and see the Common Garden Diseases guide.',
          ],
        },
        {
          type: 'image',
          src: '/guides/compost-tea/foliar-spray.jpg',
          alt: 'A hand-held pump garden sprayer misting the leaves of a healthy tomato plant early in the morning',
          caption: 'If you spray leaves, strain the tea well and choose a cool part of the day.',
        },
      ],
    },
    {
      id: 'food-safety',
      title: 'Food Safety and Common Problems',
      blocks: [
        {
          type: 'p',
          text: 'Because compost tea contains living organisms, food safety is the most important practical concern when using it near edible plants. The risk is low with careful sourcing and use, but it is worth taking seriously.',
        },
        {
          type: 'list',
          items: [
            'Use compost made from plant material, and avoid manure and pet waste as ingredients for anything that touches food crops.',
            'Apply tea to the soil, not to the edible parts of leafy greens, herbs, and other crops eaten raw, especially close to harvest.',
            'Avoid spraying tea on crops within a couple of weeks of harvest, and keep it off any fruit or leaf you plan to eat fresh.',
            'Wash all produce thoroughly before eating, as you should for any garden crop.',
            'Wear gloves when handling and applying tea, and wash your hands and your equipment afterward.',
            'Keep the tea out of reach of children and pets, and do not drink it or let it stand where animals can drink it.',
          ],
        },
        {
          type: 'table',
          headers: ['Problem', 'Likely cause', 'What to do'],
          rows: [
            ['Tea smells sour or rotten', 'Not enough oxygen, or poor or immature compost', 'Discard it, check the pump and air stone, and use better compost next time'],
            ['Sprayer keeps clogging', 'Particles in the tea', 'Strain through fine cloth or a second layer of mesh'],
            ['No visible effect on plants', 'Tea is a mild supplement, and soil may already be healthy', 'Focus first on compost, mulch, and soil testing; tea is an optional extra'],
            ['Leaf spots after spraying', 'Spraying in hot sun, or contaminated tea', 'Spray in cool weather and discard any tea that smells off'],
            ['Foam on the brew', 'Normal from aeration and molasses', 'A little foam is fine; reduce molasses if it is excessive'],
          ],
        },
        {
          type: 'image',
          src: '/guides/compost-tea/washing-produce.jpg',
          alt: 'A gardener wearing rubber gloves rinsing freshly picked lettuce leaves under a running garden tap',
          caption: 'Wash all produce before eating, particularly leafy crops grown near soil that has had tea applied.',
        },
      ],
    },
  ],
}
