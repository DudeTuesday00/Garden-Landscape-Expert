export const growingPotatoesContent = {
  id: 'growing-potatoes',
  hero: {
    emoji: '🥔',
    title: 'Growing Potatoes',
    subtitle: 'Seed potatoes, planting time, hilling, and harvest — how to grow a real crop in beds, rows, or containers, and cure it so it stores.',
  },
  intro: 'Potatoes are one of the most forgiving and most productive crops a home garden can grow, and freshly dug potatoes taste nothing like store-bought ones. They also have a few rules that are easy to miss: you plant pieces of a potato rather than seeds, tubers turn green and bitter in light, and the plant needs soil piled up around its stems as it grows. This guide covers choosing and preparing seed potatoes, planting and hilling, water and feeding, the main problems, and harvesting and storing the crop. Potatoes are nightshades like tomatoes and peppers, so rotation matters; see the site\'s Post-Harvest Garden Care guide for the framework.',
  sections: [
    {
      id: 'seed-potatoes',
      title: 'Choosing and Preparing Seed Potatoes',
      blocks: [
        {
          type: 'p',
          text: 'Potatoes are grown from tubers, called seed potatoes, not from true seed. Where you get them matters, because potatoes carry diseases that pass from one generation to the next.',
        },
        {
          type: 'list',
          items: [
            'Buy certified seed potatoes from a garden center or mail-order supplier. Grocery-store potatoes are often treated to prevent sprouting and can carry disease, so they are a poor choice for planting.',
            'Choose a type for how you will use it. Early varieties mature quickest, while mid-season and late varieties usually yield more and store longer.',
            'Chit, or pre-sprout, seed potatoes for a couple of weeks before planting by setting them in a bright, cool spot until short, sturdy sprouts form. This gives an earlier, more even start.',
            'Cut large seed potatoes into pieces about the size of an egg, each with at least one or two eyes, and let the cut surfaces dry and heal for a day or two before planting to reduce rot. Small seed potatoes can be planted whole.',
          ],
        },
        {
          type: 'table',
          headers: ['Type', 'Typical Character', 'Best For'],
          rows: [
            ['Early or new potatoes', 'Mature quickly and are harvested young', 'Fresh eating, boiling, and salads'],
            ['Mid-season varieties', 'Good yield with a range of uses', 'All-purpose cooking and moderate storage'],
            ['Late varieties', 'Take the longest and often yield the most', 'Long storage and baking'],
          ],
        },
        {
          type: 'tip',
          emoji: '🌱',
          text: 'Choose varieties suited to your season length. A late variety that needs a long season is a poor bet where summers are short, while an early type will finish reliably.',
        },
        {
          type: 'image',
          src: '/guides/growing-potatoes/chitted-seed-potatoes-sprouts.jpg',
          alt: 'Seed potatoes with short green and purple sprouts sitting in an egg carton on a bright windowsill',
          caption: 'Chitting seed potatoes in a bright, cool spot gives them a stronger, earlier start.',
        },
      ],
    },
    {
      id: 'planting-and-hilling',
      title: 'Planting and Hilling',
      blocks: [
        {
          type: 'p',
          text: 'Potatoes prefer cool weather to get started, so they go into the ground earlier than most warm-season vegetables. The other defining technique is hilling, piling soil around the growing stems.',
        },
        {
          type: 'list',
          items: [
            'Plant a few weeks before the last frost date, once the soil is workable and no longer waterlogged, commonly cited as soil around 45°F or warmer. Light frosts on emerged foliage can damage it, so be ready to cover young shoots.',
            'Choose a spot with full sun and loose, well-drained, slightly acidic soil. Heavy, soggy soil promotes rot and misshapen tubers.',
            'Plant seed pieces cut-side down about 3-4 inches deep and roughly 10-12 inches apart, in rows spaced about 2-3 feet apart.',
            'When shoots are about 6-8 inches tall, mound soil or mulch up around the stems so only the top few inches of leaves show. Repeat as the plants grow.',
            'Hilling matters because tubers form along the buried stem, and it also covers developing potatoes so light cannot turn them green.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Green potato skin and green flesh contain natural toxins called glycoalkaloids, which taste bitter and can make you sick. Keep tubers covered with soil, and cut away any green areas or discard heavily green potatoes rather than eating them. Never eat the leaves, stems, or berries of the plant.',
        },
        {
          type: 'image',
          src: '/guides/growing-potatoes/hilling-potato-plants.jpg',
          alt: 'A raised ridge of loose dark soil heaped between rows of young leafy potato plants with a shovel leaning beside it',
          caption: 'Hilling soil up around the stems increases the crop and keeps tubers covered from light.',
        },
      ],
    },
    {
      id: 'containers-and-methods',
      title: 'Growing in Containers, Bags, and Bins',
      blocks: [
        {
          type: 'p',
          text: 'You do not need a garden bed to grow potatoes. Deep containers make hilling easy and suit patios and small spaces, and they also make harvest simple.',
        },
        {
          type: 'list',
          items: [
            'Use a large container with drainage holes, such as a grow bag, a sturdy tub, or a barrel. A depth of at least a foot or so is a common starting point, and larger containers hold more moisture and yield better.',
            'Start with several inches of potting mix in the bottom, plant seed pieces, and cover them lightly. Add more mix as the plants grow, burying the stems until the container is nearly full.',
            'Containers dry out quickly, so water consistently and feed lightly, since nutrients wash through pots faster than through garden soil.',
            'Yield per plant in containers is often modest, so grow several containers if you want a meaningful harvest.',
          ],
        },
        {
          type: 'tip',
          emoji: '🪣',
          text: 'Tipping out a grow bag onto a tarp makes harvest quick and lets you find every tuber, a real advantage over digging in a bed.',
        },
        {
          type: 'image',
          src: '/guides/growing-potatoes/potato-grow-bag-patio.jpg',
          alt: 'A large fabric grow bag on a sunny patio filled with soil and green leafy potato plants growing from the top',
          caption: 'Grow bags and deep containers make potatoes possible on a patio and simplify harvest.',
        },
      ],
    },
    {
      id: 'care-and-problems',
      title: 'Water, Feeding, and Common Problems',
      blocks: [
        {
          type: 'p',
          text: 'Potatoes want steady moisture, especially once tubers start to form after flowering. Uneven watering causes cracked or hollow potatoes, and too much nitrogen builds foliage at the expense of tubers.',
        },
        {
          type: 'list',
          items: [
            'Water deeply and evenly, roughly an inch a week, and mulch to hold moisture and keep the soil cool.',
            'Mix compost into the soil before planting rather than adding heavy nitrogen fertilizer, which favors leaves over tubers.',
            'Avoid overhead watering late in the day, which encourages fungal diseases on the foliage.',
          ],
        },
        {
          type: 'table',
          headers: ['Problem', 'Signs', 'Response'],
          rows: [
            ['Colorado potato beetle', 'Yellow-orange striped beetles and orange larvae stripping leaves', 'Hand-pick beetles, larvae, and orange egg clusters on leaf undersides; see Organic Pest Control'],
            ['Early and late blight', 'Dark spots on leaves and stems, and rapid collapse in wet weather', 'Use resistant varieties and certified seed, improve airflow, and remove affected plants promptly; see Common Garden Diseases'],
            ['Scab', 'Rough, corky patches on the skin, often in dry, alkaline soil', 'Keep soil evenly moist during tuber formation and avoid over-liming'],
            ['Wireworms', 'Small tunnels bored into tubers', 'Rotate beds and avoid planting potatoes right after sod or lawn'],
            ['Green tubers', 'Skin turns green in light', 'Hill up soil and keep tubers covered'],
          ],
        },
        {
          type: 'tip',
          emoji: '🔄',
          text: 'Potatoes share diseases with tomatoes, peppers, and eggplant. Rotating them so nightshades do not return to the same bed for 3-4 years prevents blight and pests from building up in the soil.',
        },
        {
          type: 'image',
          src: '/guides/growing-potatoes/colorado-potato-beetle-leaf.jpg',
          alt: 'A striped yellow and black Colorado potato beetle on a green potato leaf with chewed edges',
          caption: 'Colorado potato beetles and their larvae can strip a potato plant, so check leaves regularly.',
        },
      ],
    },
    {
      id: 'harvest-and-storage',
      title: 'Harvesting, Curing, and Storing',
      blocks: [
        {
          type: 'p',
          text: 'You can dig potatoes at two stages, and the way you handle them afterward determines how long they keep.',
        },
        {
          type: 'list',
          items: [
            'New potatoes can be harvested by gently digging around plants a couple of weeks after flowering, while the skins are thin and delicate.',
            'For storage potatoes, wait until the vines have died back and turned yellow and brown, then leave the potatoes in the ground for a week or two so the skins set and toughen.',
            'Dig carefully with a garden fork, starting well away from the plant to avoid spearing tubers, and lift them gently. Bruised or cut potatoes should be eaten first rather than stored.',
            'Cure storage potatoes by letting them sit in a cool, dark, humid place, commonly cited at around 50-60°F, for a week or two to heal minor damage and toughen the skins. Brush off loose soil but do not wash them before storage.',
            'Store cured potatoes in a cool, dark, well-ventilated place, roughly 40-45°F. Do not store them with apples, and avoid the refrigerator, where cold turns starch to sugar and darkens them when cooked.',
            'Check stored potatoes regularly and remove any that soften or sprout, since one rotting potato spreads to its neighbors.',
          ],
        },
        {
          type: 'tip',
          emoji: '🍽️',
          text: 'Eat damaged and small potatoes first. Only sound, unblemished tubers are worth the effort of curing and long storage.',
        },
        {
          type: 'image',
          src: '/guides/growing-potatoes/digging-potatoes-fork.jpg',
          alt: 'A garden fork lifting a cluster of freshly dug golden potatoes out of dark soil',
          caption: 'Dig with a fork well away from the plant to avoid spearing tubers.',
        },
      ],
    },
  ],
}
