export const rabbitProofGardenContent = {
  id: 'rabbit-proof',
  hero: {
    emoji: '🐰',
    title: 'The Complete Guide to the Rabbit-Proof Garden',
    subtitle: 'Stop Rabbits from Destroying Your Garden with Plants & Smart Strategies',
  },
  intro:
    'Rabbits are the second most destructive garden pest in America after deer — and among the most frustrating because they are everywhere, adaptable, and relentless. The Eastern cottontail is found in all 48 contiguous states, and in suburban settings rabbit populations have exploded as predator pressure has declined. This guide takes a different approach from the spray-and-hope strategy most gardeners default to: effective rabbit management is about understanding rabbit behavior well enough to make your garden physically inaccessible, composed primarily of plants they find unattractive, or both.',
  sections: [
    {
      id: 'overview',
      title: 'Strategy Overview: From Easiest to Most Comprehensive',
      blocks: [
        {
          type: 'p',
          text: 'Most gardeners respond to rabbit damage reactively: they try one repellent spray, find it works for a week, try another, get frustrated, and eventually accept that their garden is going to be eaten. The strategies in this guide range from the immediately practical — fencing specifications that actually work — through the elegantly sustainable: designing a garden so beautiful to humans that rabbits find almost nothing worth eating.',
        },
        {
          type: 'p',
          text: 'The most important thing this guide will tell you is this: repellents alone are not a strategy. They are a temporary measure that works until the rabbit\'s hunger exceeds its aversion, or until rain washes the product away, or until the rabbit habituates to the scent. The gardeners with the fewest rabbit problems are the ones who have combined physical exclusion with smart plant choices and good habitat management.',
        },
        {
          type: 'table',
          headers: ['Strategy', 'Effectiveness', 'Cost', 'Labor', 'Best For'],
          rows: [
            [
              'Physical fencing',
              'Very high — the most reliable method when correctly installed',
              'Low–moderate (hardware cloth + posts)',
              'Moderate (installation); low (maintenance)',
              'Vegetable gardens, raised beds, high-value plantings',
            ],
            [
              'Individual plant protection',
              'Very high for specific plants',
              'Low (wire cylinders)',
              'Low–moderate',
              'Young trees, transplants, individual high-value specimens',
            ],
            [
              'Repellent sprays (commercial)',
              'Low–moderate; requires frequent reapplication; effectiveness decreases as rabbits habituate',
              'Low–moderate (ongoing cost)',
              'Moderate (reapplication every 1–2 weeks or after rain)',
              'Supplement to other methods; not standalone',
            ],
            [
              'Homemade repellents',
              'Low–moderate; highly variable results',
              'Very low',
              'Moderate (preparation + application)',
              'Very limited budgets; supplemental use only',
            ],
            [
              'Plant selection (rabbit-resistant plants)',
              'High over time; builds a garden that rabbits largely ignore',
              'Varies (new plant purchases)',
              'Low (after planting)',
              'Long-term garden redesign; ornamental gardens',
            ],
            [
              'Habitat modification',
              'Moderate; reduces rabbit use of the garden but rarely eliminates it entirely',
              'Low–moderate',
              'Low–moderate (brush removal, etc.)',
              'Reducing overall rabbit activity in the yard',
            ],
            [
              'Natural predator attraction / support',
              'Low–moderate; unpredictable and limited in urban areas',
              'Very low',
              'Low (providing raptor perches, etc.)',
              'Rural and semi-rural properties; supplement to other methods',
            ],
            [
              'Humane trapping and relocation',
              'Effective for reducing local population; often temporary as new rabbits fill vacated territory',
              'Moderate (trap purchase or rental)',
              'Moderate (baiting, monitoring, transport)',
              'High-pressure situations; before installing permanent exclusion',
            ],
          ],
        },
        {
          type: 'tip',
          emoji: '🐰',
          text: 'No single strategy eliminates rabbit damage on its own. The most effective approach combines at least two methods: typically physical exclusion for your highest-priority areas plus resistant plant selection for everything else. Think of rabbit management as layers — each layer reduces pressure so the next layer has less work to do.',
        },
      ],
    },
    {
      id: 'know-your-rabbit',
      title: 'Section 1: Know Your Rabbit — Biology, Behavior & Damage Patterns',
      blocks: [
        {
          type: 'p',
          text: 'Effective rabbit management requires understanding how rabbits live, what drives their behavior, and how to distinguish their damage from that of other garden pests. A management strategy perfectly suited to eastern cottontail behavior may be less effective for jackrabbits in the Southwest; a fence that stops cottontails may not address the snowshoe hares in a northern garden.',
        },
        {
          type: 'h3',
          text: 'American Rabbit Species: Who\'s Eating Your Garden',
        },
        {
          type: 'table',
          headers: ['Species', 'Range', 'Size', 'Garden Damage Pattern', 'Key Management Note'],
          rows: [
            [
              'Eastern Cottontail (Sylvilagus floridanus)',
              'All 48 contiguous states — the most widespread and most common garden pest',
              '2–4 lbs; 14–17 inches',
              'Clean, angled 45-degree cuts on stems; 12–18 inch browse height; preference for tender new growth, vegetables, flowering annuals, and bark of young trees in winter',
              'Responds well to all standard management strategies; the primary audience for most of this guide',
            ],
            [
              'Desert Cottontail (Sylvilagus audubonii)',
              'Western US: California, Nevada, Arizona, New Mexico, Colorado, Utah, Texas, Oklahoma, western plains',
              '1.5–3 lbs; 12–15 inches',
              'Same clean-cut feeding pattern as eastern cottontail; tends to feed at dawn and dusk; may be active year-round in warm desert climates',
              'Desert-adapted plants (agave, cacti) are naturally resistant; focus protection on vegetable gardens and non-xeric ornamentals',
            ],
            [
              'Brush Rabbit (Sylvilagus bachmani)',
              'Pacific Coast: western Oregon, California',
              '1–2 lbs; 11–14 inches — the smallest North American cottontail',
              'Close-to-cover feeding; seldom ventures far into open gardens; more targeted damage near brush edges',
              'Maintaining a clear, open zone between brush and garden reduces incursions; low fences may be adequate',
            ],
            [
              'New England Cottontail (Sylvilagus transitionalis)',
              'New England, NY, PA; declining range; conservation concern in several states',
              '2–3 lbs; similar to eastern cottontail',
              'Similar to eastern cottontail; focus in gardens near dense shrubby habitat',
              'Less abundant in most gardens than eastern cottontail; same management applies',
            ],
            [
              'Black-tailed Jackrabbit (Lepus californicus)',
              'Western US and Great Plains: California, Nevada, Arizona, New Mexico, Colorado, Kansas, Oklahoma, Texas, Oregon',
              '4–8 lbs; 18–25 inches — MUCH larger than cottontails',
              'Heavier feeding than cottontails; can reach higher on plants (24–30 inches); more mobile and wide-ranging; eats grasses, forbs, cacti, shrubs',
              'Standard cottontail fences (18–24 inches) are NOT adequate for jackrabbits; requires 30–36 inch hardware cloth or additional electric wire at the top',
            ],
            [
              'Snowshoe Hare (Lepus americanus)',
              'Canada, Alaska, northern US: Minnesota, Wisconsin, Michigan, Maine, Vermont, New Hampshire, Pacific Northwest mountains',
              '3–4 lbs; 15–20 inches; turns white in winter',
              'Winter bark girdling is a serious threat to young trees when snow provides elevated access; summer damage similar to cottontail',
              'Winter tree protection must account for snow depth — extend hardware cloth guards well above expected snow level; apply guards in fall before first snow',
            ],
          ],
        },
        {
          type: 'h3',
          text: 'Understanding Rabbit Behavior',
        },
        {
          type: 'list',
          items: [
            'Feeding patterns: Rabbits are crepuscular — most active at dawn and dusk, with some nighttime activity. Peak damage occurs in early morning. In winter in cold climates, activity concentrates around midday when temperatures are slightly warmer.',
            'Territory and range: A single cottontail\'s home range is typically 1 to 4 acres. However, a single yard can support multiple rabbits with overlapping ranges. Once a rabbit has established a regular feeding route through your garden, it will return consistently.',
            'Shelter requirements: Rabbits rest in "forms" — shallow depressions in dense vegetation, or in borrowed burrows (they do not dig their own). Dense ornamental grasses, brush piles, thick ground covers, and spaces under decks and sheds are preferred. A yard providing excellent shelter near food will have a higher rabbit population.',
            'Water needs: Rabbits get most of their water from the plants they eat; they do not need a standing water source, which means removing water does not reduce rabbit pressure.',
            'Seasonal patterns: Damage peaks in spring (tender new growth, new transplants) and winter (bark girdling when other food is scarce and snow reduces ground-level food access). Fall planting of tulip bulbs is a high-risk period.',
            'Breeding: Eastern cottontails breed from February through September in most of the US; up to 6 litters per year with 4 to 7 young per litter. Young rabbits become independent at 4 to 5 weeks. A single pair can produce 20 to 30 offspring in one season. This reproductive rate means that reducing local populations through trapping provides only temporary relief unless other management is implemented simultaneously.',
          ],
        },
        {
          type: 'h3',
          text: 'Identifying Rabbit Damage: What to Look For',
        },
        {
          type: 'p',
          text: 'Rabbit damage has specific, recognizable characteristics that distinguish it from deer damage, insect damage, and other garden problems. Accurate identification before taking action prevents wasted effort managing the wrong pest.',
        },
        {
          type: 'list',
          items: [
            'The 45-degree clean cut: Rabbits have sharp incisors that produce a clean, diagonal cut on stems. This is the most diagnostic sign. Deer lack upper incisors and tear rather than cut stems, leaving a ragged, torn appearance. If the cut is clean and angled, it is a rabbit (or other rodent); if it is ragged and torn, it is deer.',
            'Browse height: Cottontail damage occurs from ground level to about 18 inches. Jackrabbit damage can reach 24 to 30 inches. Winter damage in snowy climates may appear higher because the rabbit is standing on snow. Deer damage typically occurs from 2 to 6 feet high.',
            'Preferred targets: Rabbits strongly prefer tender, young growth — seedlings and transplants, new stems, young bark on trees under 1 inch diameter, vegetable crops (especially beans, peas, brassicas, carrots, lettuce), tulips and other spring bulbs, and flowering annuals. They are much less likely to damage established, woody plants unless starvation conditions occur in winter.',
            'Droppings: Small, round, brown or olive-colored pellets, 1/4 to 3/8 inch diameter; typically found in groups along feeding routes or near shelter. Deer droppings are oval, larger (1/2 to 3/4 inch), and often clustered in irregular piles.',
            'No slime trails: Unlike slugs, rabbits leave no slime trails. If slime trails are present alongside leaf damage, slugs are the primary cause, not rabbits.',
          ],
        },
        {
          type: 'tip',
          emoji: '🔍',
          text: 'Before buying any repellent or installing fencing, confirm the pest is actually a rabbit. Check for the clean 45-degree cut at browse height (under 18 inches for cottontails). Treating for rabbits when deer are the real culprit — or vice versa — wastes time and money and leaves the actual pest problem unaddressed.',
        },
      ],
    },
  ],
}
