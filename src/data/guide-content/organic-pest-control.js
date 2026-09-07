export const organicPestControlContent = {
  id: 'organic-pest-control',
  hero: {
    emoji: '🐞',
    title: 'Organic Pest Control',
    subtitle: 'Manage insects, caterpillars, and garden pests effectively without synthetic chemicals — using proven biological and physical controls.',
  },
  intro: 'Organic pest control is not about eliminating all insects — it is about keeping pest populations below the threshold where they cause meaningful crop damage, while preserving the beneficial insects that do the same work for free. The most effective organic approach is layered: physical barriers prevent pests from reaching plants in the first place, biological controls (beneficials, Bt, nematodes) target specific pests without broad collateral damage, and targeted organic sprays like neem oil and insecticidal soap are used only when populations are actively damaging crops. Skipping the layered approach and going straight to spraying — even with organic products — undermines the beneficial insect community that would otherwise regulate pest populations naturally.',
  sections: [
    {
      id: 'ipm-framework',
      title: 'The Integrated Pest Management Framework',
      blocks: [
        {
          type: 'p',
          text: 'Integrated Pest Management (IPM) is the framework nearly all effective organic pest control follows: monitor first, identify the actual pest before acting, and escalate from the least disruptive control to the most disruptive only as needed. Reaching for a spray — even an organic one — as the first response skips the steps that would have prevented the problem or solved it with far less collateral damage.',
        },
        {
          type: 'table',
          headers: ['Step', 'What It Means', 'Example Action'],
          rows: [
            ['Monitor', 'Check plants regularly, before damage is severe', 'Walk the garden every few days; check the undersides of leaves, not just the tops'],
            ['Identify', 'Confirm which pest is actually responsible before treating', 'Match the damage pattern and any insect found to a known pest, not a guess'],
            ['Set a threshold', 'Decide how much damage is actually acceptable', 'A few chewed leaves on an established plant may not need any response at all'],
            ['Cultural and physical controls first', 'Prevent or physically block pests before reaching for any product', 'Row covers, hand-picking, healthy soil and spacing that reduces stress-related susceptibility'],
            ['Biological controls next', 'Introduce or support organisms that prey on or parasitize the pest', 'Beneficial nematodes, Bt, encouraging predatory insects'],
            ['Targeted organic sprays last', 'Use the least broad-spectrum, shortest-persistence option, and only on the affected plants', 'Insecticidal soap or neem oil, applied directly to an active infestation'],
          ],
        },
        {
          type: 'tip',
          emoji: '🔎',
          text: 'Misidentifying a pest is one of the most common reasons organic controls seem to "not work" — Bt does nothing to aphids, and insecticidal soap does nothing to caterpillars. Confirm what you\'re dealing with before choosing a product.',
        },
      ],
    },
    {
      id: 'physical-barriers',
      title: 'Physical Barriers — Prevention Without Any Product',
      blocks: [
        {
          type: 'p',
          text: 'A physical barrier that a pest simply cannot get past is the most reliable organic control available, because it works regardless of weather, timing, or reapplication schedules — and it has zero effect on beneficial insects that never reach the barrier in the first place.',
        },
        {
          type: 'table',
          headers: ['Barrier', 'Best For', 'How to Use It'],
          rows: [
            ['Floating row cover', 'Flea beetles, cabbage worms, cucumber beetles, squash vine borer', 'Lay directly over young plants at transplant, secure edges with soil or pins; remove before flowering if the crop needs pollinators'],
            ['Copper tape', 'Slugs and snails on raised beds and containers', 'Wrap around bed edges or pot rims — the mild electrical charge from contact deters mollusks'],
            ['Diatomaceous earth', 'Crawling insects (ants, earwigs, slugs) — see the Slug & Snail Control guide for slug-specific use', 'Dust dry soil surface around plant bases; reapply after rain or irrigation'],
            ['Collars (cardboard or plastic)', 'Cutworms', 'Push a 3-4 inch collar into the soil around each transplant stem at planting'],
            ['Netting', 'Birds on berries and fruit trees; larger pests on brassicas', 'Drape over plants or a support frame, secure at the base so pests can\'t crawl underneath'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Row cover excludes pollinators along with pests — remove it once a fruiting crop (squash, cucumbers, melons) begins flowering, or hand-pollinate while it\'s in place.',
        },
        {
          type: 'image',
          src: '/guides/organic-pest-control/row-cover.jpg',
          alt: 'White floating row cover draped over young vegetable seedlings in a garden bed',
          caption: 'Floating row cover physically excludes flea beetles, cabbage worms, and cucumber beetles with no spray needed.',
        },
      ],
    },
    {
      id: 'bacillus-thuringiensis',
      title: 'Bacillus thuringiensis (Bt) — The Caterpillar Specialist',
      blocks: [
        {
          type: 'p',
          text: 'Bacillus thuringiensis is one of the most important tools in organic vegetable gardening — a naturally occurring soil bacterium that produces proteins toxic specifically to the insect group it targets, with no toxicity to birds, mammals, pets, or most beneficial insects. Different Bt subspecies target different pests, so using the correct one matters.',
        },
        {
          type: 'table',
          headers: ['Bt Subspecies', 'Targets', 'Application Note'],
          rows: [
            ['Bt kurstaki (Btk)', 'Caterpillars — cabbage worms, tomato hornworm, squash vine borer larvae, gypsy moth', 'Spray on leaves; caterpillars must eat treated foliage for it to work, so reapply after rain and as new growth appears'],
            ['Bt israelensis (Bti)', 'Mosquito larvae, fungus gnat larvae, blackfly larvae', 'Sold as "mosquito dunks" for standing water; also used as a soil drench for fungus gnats in containers'],
            ['Bt san diego / tenebrionis', 'Colorado potato beetle larvae', 'Less commonly available; spray on young larvae for best effect'],
          ],
        },
        {
          type: 'tip',
          emoji: '🐛',
          text: 'Bt breaks down within a day or two of sun exposure, so time applications for early evening and expect to reapply every 5-7 days during an active infestation, and always after rain.',
        },
        {
          type: 'image',
          src: '/guides/organic-pest-control/tomato-hornworm.jpg',
          alt: 'A green tomato hornworm caterpillar on a tomato plant leaf',
          caption: 'Bt kurstaki targets caterpillars like the tomato hornworm specifically, without harming bees or other beneficial insects.',
        },
      ],
    },
    {
      id: 'neem-and-soap',
      title: 'Neem Oil and Insecticidal Soap — Contact and Systemic Options',
      blocks: [
        {
          type: 'p',
          text: 'Neem oil and insecticidal soap are the two most versatile organic sprays, but they work differently and are suited to different pest types and situations.',
        },
        {
          type: 'table',
          headers: ['Product', 'How It Works', 'Best Against', 'Key Limitation'],
          rows: [
            ['Neem oil', 'Azadirachtin disrupts insect feeding, growth, and reproduction — works best as prevention or at first sign of infestation, not as a rescue for heavy populations', 'Aphids, whiteflies, spider mites, scale (crawler stage), powdery mildew (secondary fungicidal effect)', 'Can harm bees if sprayed on open flowers — apply in early morning or evening when pollinators aren\'t active'],
            ['Insecticidal soap', 'Potassium salts of fatty acids disrupt the outer cell membranes of soft-bodied insects on direct contact', 'Aphids, mealybugs, whiteflies, spider mites', 'Only works on direct contact — must reach the pest, and has no residual effect after it dries'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Both products can burn foliage in direct hot sun or above roughly 90°F — apply in early morning or evening, and always test on a small area of a new plant species first.',
        },
        {
          type: 'image',
          src: '/guides/organic-pest-control/neem-oil-spray.jpg',
          alt: 'A gardener spraying neem oil solution onto plant leaves with a hand sprayer',
          caption: 'Neem oil works best applied at first sign of an infestation, in the early morning or evening when pollinators aren’t active.',
        },
      ],
    },
    {
      id: 'diatomaceous-earth-nematodes',
      title: 'Diatomaceous Earth and Beneficial Nematodes',
      blocks: [
        {
          type: 'h3',
          text: 'Diatomaceous Earth',
        },
        {
          type: 'p',
          text: 'Food-grade diatomaceous earth is a fine powder made from fossilized diatoms — under a microscope, its particles are sharp enough to damage the waxy outer layer of crawling insects, causing fatal dehydration. It works only when dry and only against insects that physically crawl through it, so it must be reapplied after every rain or irrigation.',
        },
        {
          type: 'h3',
          text: 'Beneficial Nematodes',
        },
        {
          type: 'p',
          text: 'Beneficial nematodes are microscopic parasitic roundworms applied to moist soil, where they seek out and kill specific soil-dwelling pest larvae from the inside. Different species target different pests, and correct soil moisture at application is essential — nematodes move through water films between soil particles and die quickly if the soil dries out.',
        },
        {
          type: 'table',
          headers: ['Nematode Species', 'Targets', 'Application Notes'],
          rows: [
            ['Steinernema feltiae', 'Fungus gnat larvae, thrips pupae in soil', 'Apply as a soil drench to houseplant or seedling soil; effective within about two weeks'],
            ['Heterorhabditis bacteriophora', 'Grubs (Japanese beetle, June beetle larvae), root weevil larvae', 'Apply to lawn or garden soil in late summer/early fall when grubs are actively feeding near the surface'],
            ['Steinernema carpocapsae', 'Cutworms, armyworms, fleas in soil', 'Apply to moist soil in the evening; UV light kills nematodes quickly, so avoid daytime application'],
          ],
        },
        {
          type: 'tip',
          emoji: '💧',
          text: 'Both diatomaceous earth and beneficial nematodes fail for the same underlying reason when they "don\'t work": moisture and timing. Keep DE bone-dry and reapplied; keep nematode-treated soil consistently moist for at least two weeks after application.',
        },
        {
          type: 'image',
          src: '/guides/organic-pest-control/diatomaceous-earth.jpg',
          alt: 'Fine white diatomaceous earth powder dusted around the base of a garden plant',
          caption: 'Diatomaceous earth only works while dry — reapply after every rain or irrigation for continued protection.',
        },
      ],
    },
    {
      id: 'building-beneficial-habitat',
      title: 'Building a Garden That Regulates Its Own Pests',
      blocks: [
        {
          type: 'p',
          text: 'The most sustainable organic pest control isn\'t a product at all — it\'s a garden that supports enough predatory and parasitic insects that pest populations rarely reach damaging levels in the first place. See the site\'s Attracting Beneficial Insects guide for full detail; the core principles are worth repeating here.',
        },
        {
          type: 'list',
          items: [
            'Plant flowering herbs (dill, fennel, cilantro allowed to bolt) and small-flowered natives (yarrow, alyssum) to feed adult parasitic wasps and hoverflies, whose larvae are voracious aphid predators.',
            'Avoid broad-spectrum insecticides, even organic ones like pyrethrin, except as a last resort — they kill beneficial insects as readily as pests.',
            'Leave some "acceptable" pest presence — a small aphid population feeds and sustains the predator population that will control a future, larger outbreak.',
            'Provide overwintering habitat (leaf litter, brush piles, unmowed edges) so beneficial insects survive winter to return in spring.',
            'Rotate crops and avoid dense monocultures of a single susceptible plant, which make it easy for a pest population to explode unchecked.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌼',
          text: 'A garden with a healthy predator population still has pests — the goal isn\'t zero pests, it\'s a balance where predators keep pace with them without any intervention from you.',
        },
        {
          type: 'image',
          src: '/guides/organic-pest-control/ladybug-aphids.jpg',
          alt: 'A ladybug feeding on a cluster of aphids on a garden plant stem',
          caption: 'A garden that feeds and shelters predatory insects like ladybugs needs far less active pest control.',
        },
      ],
    },
    {
      id: 'pest-specific-quick-reference',
      title: 'Quick Reference by Common Pest',
      blocks: [
        {
          type: 'table',
          headers: ['Pest', 'First-Choice Organic Control', 'Backup Option'],
          rows: [
            ['Aphids', 'Strong water spray to dislodge, then insecticidal soap if persistent', 'Neem oil; encourage ladybugs and lacewings'],
            ['Cabbage worms / loopers', 'Bt kurstaki spray', 'Row cover from transplant onward'],
            ['Japanese beetles', 'Hand-pick into soapy water in early morning', 'Beneficial nematodes (Heterorhabditis) applied to lawn/soil the prior fall'],
            ['Squash bugs', 'Hand-pick adults and egg clusters; row cover until flowering', 'Diatomaceous earth around plant base'],
            ['Spider mites', 'Strong water spray; insecticidal soap', 'Neem oil; increase humidity if indoor/greenhouse'],
            ['Tomato hornworm', 'Hand-pick; leave any hornworm covered in white wasp cocoons alone — it\'s already parasitized', 'Bt kurstaki spray on young larvae'],
            ['Flea beetles', 'Row cover from transplant', 'Diatomaceous earth; trap crops (radish)'],
          ],
        },
        {
          type: 'p',
          text: 'For a pest not listed here, or for detailed identification help, the site\'s Garden Symptom Diagnostic tool and the Garden Pests ID & Control guide cover a much broader range of pests with photos and symptom matching.',
        },
      ],
    },
  ],
}
