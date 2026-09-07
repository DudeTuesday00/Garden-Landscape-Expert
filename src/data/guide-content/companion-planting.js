export const companionPlantingContent = {
  id: 'companion-planting',
  hero: {
    emoji: '🤝',
    title: 'Companion Planting',
    subtitle: 'Strategic plant pairings that deter pests, improve yield, and support soil health — based on what the research actually shows works.',
  },
  intro: 'Companion planting sits at the intersection of gardening tradition and plant science — some combinations have strong research support, others are garden folklore passed down without scrutiny, and distinguishing between them helps gardeners invest their space in pairings that actually deliver results. The Three Sisters combination of corn, beans, and squash is among the most well-documented: corn provides a trellis for nitrogen-fixing beans, while squash leaves shade the soil to retain moisture and suppress weeds — a functional polyculture that indigenous farmers in North America practiced for centuries. Tomatoes and basil are frequently cited together; while basil makes an excellent kitchen companion to tomatoes, the evidence for direct pest-repelling effects in the garden is mixed — but the combination is still worth planting simply because basil thrives in similar conditions. This guide separates the mechanisms with real evidence behind them from the folklore, and gives you a practical framework for planning a companion-planted garden.',
  sections: [
    {
      id: 'how-it-works',
      title: 'How Companion Planting Actually Works',
      blocks: [
        {
          type: 'p',
          text: 'Every genuine companion planting effect traces back to one of a handful of real mechanisms — scent confusion, trap cropping, nitrogen fixation, physical structure sharing, or allelopathy. Understanding which mechanism is at play for a given pairing tells you whether it will actually work in your garden, or whether it is folklore that happened to get repeated often enough to sound authoritative.',
        },
        {
          type: 'table',
          headers: ['Mechanism', 'How It Works', 'Example', 'Evidence Strength'],
          rows: [
            ['Scent confusion / masking', 'Strong-smelling plants disrupt a pest’s ability to locate its host plant by scent', 'Onions and garlic confusing carrot rust fly', 'Well-supported'],
            ['Trap cropping', 'A more attractive plant is sacrificed to draw pests away from the main crop', 'Nasturtiums drawing aphids away from beans; radish drawing cucumber beetles', 'Well-supported'],
            ['Nitrogen fixation', 'Legume roots host bacteria that convert atmospheric nitrogen into soil-available forms', 'Beans and peas feeding nearby heavy feeders like corn or squash', 'Well-supported (soil chemistry, not folklore)'],
            ['Physical structure sharing', 'One plant provides a trellis, shade, or windbreak for another', 'Corn stalks trellising climbing beans; tall crops shading lettuce in summer', 'Well-supported (mechanical, not biochemical)'],
            ['Beneficial insect attraction', 'Flowering plants draw in predatory or parasitic insects that prey on pests', 'Dill and fennel flowers attracting parasitic wasps that parasitize cabbage worms', 'Well-supported'],
            ['Allelopathy', 'A plant releases chemical compounds through roots or leaf litter that suppress germination or growth of neighbors', 'Fennel and black walnut suppressing many nearby plants', 'Well-supported as a reason to avoid pairings'],
            ['Improved flavor / general vigor', 'Claimed but mechanistically unexplained improvement in a neighbor’s taste or growth', 'Basil "improving" tomato flavor; chamomile as a "physician plant"', 'Anecdotal — plant in the garden for other reasons, not this one'],
          ],
        },
        {
          type: 'tip',
          emoji: '🔬',
          text: 'When you read a companion planting claim, ask which mechanism it relies on. "Deters pests through scent" or "fixes nitrogen" are testable, well-documented effects. "Improves flavor" or "makes a good neighbor" with no stated mechanism is usually inherited folklore — harmless to try, but don’t plan your garden layout around it.',
        },
        {
          type: 'image',
          src: '/guides/companion-planting/carrots-onions.jpg',
          alt: 'Rows of carrots and green onion tops growing side by side in dark garden soil',
          caption: 'Onion scent genuinely reduces carrot fly pressure — one of companion planting’s better-supported effects.',
        },
      ],
    },
    {
      id: 'three-sisters',
      title: 'The Three Sisters and Classic Polycultures',
      blocks: [
        {
          type: 'p',
          text: 'The Three Sisters — corn, pole beans, and winter squash or pumpkins — is the best-documented companion planting system in North American horticulture, developed and refined by Indigenous farmers over centuries. Each plant performs a distinct, complementary function: corn grows tall and provides a living trellis so beans don’t need a separate structure; beans climb the corn and fix nitrogen in the soil that benefits both the corn and the following season’s crops; squash sprawls along the ground between the corn stalks, its broad leaves shading the soil to suppress weeds and retain moisture, while its prickly stems and leaves discourage raccoons and other animals from raiding the corn.',
        },
        {
          type: 'h3',
          text: 'Planting a Three Sisters Bed',
        },
        {
          type: 'list',
          items: [
            'Plant corn first, in a block (not a single row) of at least 4x4 plants — corn is wind-pollinated and needs a block to pollinate reliably.',
            'Wait until corn is 4-6 inches tall before planting beans at its base — beans planted at the same time can overwhelm young corn seedlings.',
            'Plant squash or pumpkin seeds around the perimeter of the block roughly two weeks after the beans, giving corn and beans a head start before the sprawling squash vines fill in.',
            'Use pole bean varieties, not bush beans — bush beans won’t climb the corn and will simply compete with it at ground level.',
            'Space the whole system generously — a mature Three Sisters planting needs significantly more room per corn plant than corn grown alone.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌽',
          text: 'The Three Sisters is a nutrient-balanced system, not just a space-saving trick: corn is a heavy nitrogen feeder, beans replace nitrogen in the soil, and squash needs relatively little of either — the three crops divide the garden’s resources instead of competing for the same ones.',
        },
        {
          type: 'p',
          text: 'Other classic polycultures follow the same "different needs, complementary functions" logic. A "living mulch" pairing — a low, spreading crop like lettuce, radish, or bush beans planted beneath a taller crop like tomatoes or corn — shades the soil and suppresses weeds while producing a second harvest from the same bed footprint. Interplanting fast-maturing crops (radish, lettuce, spinach) between slow-maturing ones (broccoli, tomatoes, peppers) lets you harvest the quick crop before the slow one needs the space, effectively doubling a bed’s productivity during the season’s early weeks.',
        },
        {
          type: 'image',
          src: '/guides/companion-planting/three-sisters.jpg',
          alt: 'Climbing pole bean vines twining up corn stalks with squash leaves covering the soil below',
          caption: 'The Three Sisters — corn, beans, and squash — is the best-documented polyculture in North American gardening.',
        },
      ],
    },
    {
      id: 'pest-deterrent-pairings',
      title: 'Pest-Deterrent Pairings and Trap Crops',
      blocks: [
        {
          type: 'p',
          text: 'Two distinct strategies fall under "pest control" companion planting: repelling pests with scent, and sacrificing a trap crop to draw pests away from the plant you actually want to protect. Both work, but they work differently and are planted differently.',
        },
        {
          type: 'table',
          headers: ['Protected Crop', 'Companion', 'Strategy', 'Placement Note'],
          rows: [
            ['Carrots', 'Onions, garlic, chives', 'Scent masking', 'Interplant directly within carrot rows for the strongest effect'],
            ['Beans, brassicas', 'Nasturtiums', 'Trap crop for aphids', 'Plant upwind or along the bed perimeter, not mixed into the main crop'],
            ['Cucumbers, squash', 'Radish, blue hubbard squash (for larger farms)', 'Trap crop for cucumber beetles', 'Plant a border row slightly ahead of the main crop so it matures first'],
            ['Tomatoes', 'Marigolds (French)', 'Root secretions reduce root-knot nematodes', 'Interplant throughout the bed, or grow as a full-season cover the prior year'],
            ['Brassicas (broccoli, cabbage, kale)', 'Dill, fennel, cilantro (allowed to flower)', 'Attracts parasitic wasps that parasitize cabbage worms', 'Let a portion of the herb bolt and flower near the brassica bed'],
            ['Squash', 'Nasturtiums', 'Trap crop for squash bugs', 'Plant densely around the squash hill perimeter'],
            ['Corn', 'Marigolds, minimal effect documented for corn earworm', 'Weak evidence — physical row covers work far better', 'Not a primary strategy for corn pests'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'A trap crop only works if the pest actually prefers it over your main crop, and if you monitor and remove the trap crop (with its pest load) before the pests multiply and spread back to your protected plants. An unmonitored trap crop can become a pest nursery instead of a sink.',
        },
        {
          type: 'image',
          src: '/guides/companion-planting/nasturtium-trap-crop.jpg',
          alt: 'Bright orange nasturtium flowers planted along the edge of a vegetable garden bed as a trap crop',
          caption: 'Nasturtiums draw aphids and other pests away from beans and squash when planted along a bed’s perimeter.',
        },
      ],
    },
    {
      id: 'pairing-table',
      title: 'Comprehensive Companion Pairing Table',
      blocks: [
        {
          type: 'p',
          text: 'The pairings below cover the most common vegetables and herbs grown in home gardens, organized by the crop you’re planning around. This is the same underlying data that powers the site’s interactive Companion Planting Checker tool — use that tool to check any two specific plants, or use this table as a quick planning reference while laying out a bed.',
        },
        {
          type: 'table',
          headers: ['Plant', 'Good Companions', 'Avoid'],
          rows: [
            ['Tomato', 'Basil, carrot, onion, garlic, chives', 'Corn, cabbage, broccoli, fennel, mature dill'],
            ['Carrot', 'Onion, garlic, chives, lettuce, peas', 'Dill (same family, cross-pollinates and competes)'],
            ['Corn', 'Pole beans, pumpkin, zucchini', 'Tomato (shares corn earworm/tomato fruitworm)'],
            ['Green bean', 'Corn, pumpkin, zucchini, cucumber, carrot', 'Onion, garlic, chives, fennel'],
            ['Peas', 'Carrot', 'Onion, garlic, fennel'],
            ['Cabbage', 'Dill, chamomile', 'Tomato, broccoli (same family — concentrate pests/disease), fennel'],
            ['Broccoli', 'Dill', 'Tomato, cabbage (same family), fennel'],
            ['Kale', 'Dill', 'Fennel'],
            ['Cucumber', 'Radish, green bean', '—'],
            ['Lettuce', 'Carrot, chives', '—'],
            ['Bell pepper', 'Basil', '—'],
            ['Hot pepper', 'Basil', '—'],
            ['Eggplant', 'Green bean', '—'],
            ['Radish', 'Spinach, cucumber (as trap crop)', '—'],
            ['Beet', 'Onion, cabbage', '—'],
            ['Onion, garlic, chives', 'Carrot, tomato, cabbage, beet', 'Beans, peas (alliums stunt legumes)'],
          ],
        },
        {
          type: 'tip',
          emoji: '🧰',
          text: 'For a pairing not listed here, the site’s Companion Planting Checker tool covers additional relationships and honestly reports "no documented relationship" for pairs with no established interaction — that’s a genuinely useful answer, not a gap in the data. Plants without a strong documented relationship can usually be grown near each other without concern.',
        },
        {
          type: 'image',
          src: '/guides/companion-planting/tomato-basil.jpg',
          alt: 'A gardener transplanting a tomato seedling next to a basil plant in a raised garden bed',
          caption: 'Tomato and basil share the same warm, sunny growing conditions — a reliable pairing even where the pest-repelling evidence is thin.',
        },
      ],
    },
    {
      id: 'plants-to-avoid',
      title: 'Plants to Keep Apart',
      blocks: [
        {
          type: 'p',
          text: 'Most "bad companion" claims fall into one of three real categories: allelopathy (chemical suppression), shared pest and disease pressure (planting family members or pest-sharing crops together concentrates the problem instead of diluting it), and genuinely competing nutrient or water demands. Knowing which category applies tells you whether the concern is serious or minor.',
        },
        {
          type: 'h3',
          text: 'Allelopathic Plants',
        },
        {
          type: 'p',
          text: 'Fennel is the classic vegetable-garden allelopath — it releases compounds from its roots and leaf litter that inhibit the germination and growth of most nearby vegetables, tomatoes and beans especially. Give fennel its own bed, well away from the main vegetable garden, or grow it in a large container. Black walnut trees are the most extreme allelopathic example in the home landscape (though not a vegetable garden companion issue) — their roots release juglone, which is toxic to tomatoes, peppers, and many other plants for a substantial radius around the trunk.',
        },
        {
          type: 'h3',
          text: 'Shared Pest and Disease Pressure',
        },
        {
          type: 'list',
          items: [
            'Tomato and corn share the same major pest — corn earworm and tomato fruitworm are the same insect species — so planting them together concentrates rather than dilutes pest pressure.',
            'Grouping all brassicas (cabbage, broccoli, kale, Brussels sprouts) in one dense block makes it easier for cabbage worms and flea beetles to move from plant to plant; interspersing them with unrelated crops slows pest spread.',
            'Planting all nightshades (tomato, pepper, eggplant, potato) in the same soil year after year builds up soil-borne diseases like early blight and verticillium wilt — rotate the whole family, not just individual crops.',
          ],
        },
        {
          type: 'h3',
          text: 'Legumes and Alliums',
        },
        {
          type: 'p',
          text: 'Onions, garlic, and chives are widely reported to stunt the growth of beans and peas when planted in the same bed — the reverse of the beneficial relationship alliums have with carrots and tomatoes. Keep the allium family and the legume family in separate beds or at opposite ends of the same bed.',
        },
      ],
    },
    {
      id: 'family-rotation',
      title: 'Companion Planting and Crop Rotation Together',
      blocks: [
        {
          type: 'p',
          text: 'Companion planting and crop rotation solve overlapping problems and work best used together. Rotation moves a plant family to a different bed each year so soil-borne pests and diseases specific to that family don’t build up; companion planting arranges what grows next to what within a single season. A garden that rotates families year to year but ignores companion relationships within the season is still vulnerable to the pest-concentration and allelopathy issues covered above.',
        },
        {
          type: 'table',
          headers: ['Plant Family', 'Members', 'Rotation Note'],
          rows: [
            ['Solanaceae (nightshades)', 'Tomato, pepper, eggplant, potato', 'Avoid replanting in the same bed for 3–4 years — shared soil-borne diseases'],
            ['Brassicaceae', 'Cabbage, broccoli, kale, Brussels sprouts, radish', 'Rotate to break the clubroot and flea beetle cycle'],
            ['Cucurbitaceae', 'Cucumber, squash, pumpkin, melon', 'Rotate to reduce cucumber beetle and squash vine borer carryover'],
            ['Fabaceae (legumes)', 'Beans, peas', 'Plant where a nitrogen-hungry crop grew the prior year to take advantage of soil-building'],
            ['Apiaceae', 'Carrot, dill, fennel, parsley, cilantro', 'Rotate; also watch for cross-family allelopathy from fennel regardless of rotation'],
            ['Alliaceae', 'Onion, garlic, leek, chives', 'Rotate away from legume beds the following year'],
          ],
        },
        {
          type: 'tip',
          emoji: '🔄',
          text: 'A simple, effective rotation-plus-companion approach: follow a legume bed with a heavy feeder (corn, brassicas, or tomatoes) the next season to use the nitrogen the legumes left behind, then follow the heavy feeder with a light feeder (root vegetables or herbs) before returning to legumes.',
        },
      ],
    },
    {
      id: 'designing-the-garden',
      title: 'Designing a Companion-Planted Vegetable Garden',
      blocks: [
        {
          type: 'p',
          text: 'Planning a companion-planted garden works best as a layered process: start with your main crops, then layer in nitrogen fixers, pest deterrents, and trap crops around them, and finally check the whole layout against the "avoid" list before you plant.',
        },
        {
          type: 'list',
          items: [
            'Start with your main crops — the vegetables you actually want to harvest, placed for their sun, water, and space needs first.',
            'Add a nitrogen-fixing legume near each heavy feeder (corn, tomatoes, brassicas, squash) — even a border row of bush beans helps.',
            'Add scent-masking alliums along the edges of root vegetable beds, especially carrots.',
            'Add a flowering herb (dill, cilantro, fennel — in its own dedicated spot, not mixed in) somewhere in the garden to draw in beneficial insects for the whole space, not just one bed.',
            'Add a trap crop (nasturtiums, radish) at the perimeter of any bed with a known pest problem from previous seasons.',
            'Check every planned pairing against the "Plants to Keep Apart" list above before finalizing the layout.',
          ],
        },
        {
          type: 'tip',
          emoji: '📐',
          text: 'For an exact plant-count and spacing plan once your bed layout is set, use the site’s Plant Spacing & Square Foot Garden Planner — it doesn’t account for companion relationships directly, but combined with the pairing table above it lets you place companions precisely within a square-foot grid.',
        },
        {
          type: 'image',
          src: '/guides/companion-planting/garden-layout.jpg',
          alt: 'A tidy backyard vegetable garden with multiple raised beds each planted with a different mix of vegetables and herbs',
          caption: 'A layered companion-planted layout: main crops first, then nitrogen fixers, scent-maskers, and trap crops added around them.',
        },
      ],
    },
    {
      id: 'troubleshooting',
      title: 'Common Companion Planting Mistakes',
      blocks: [
        {
          type: 'table',
          headers: ['Mistake', 'Why It Backfires', 'Fix'],
          rows: [
            ['Planting an unmonitored trap crop', 'Pests build up on the trap crop and spread back to the main crop once it’s exhausted', 'Check trap crops regularly and remove them (with pests) once they’ve done their job'],
            ['Mixing fennel into the main vegetable bed', 'Allelopathic compounds suppress germination and growth of most neighbors', 'Grow fennel in its own bed or a large container, away from other vegetables'],
            ['Planting beans and onions in the same row', 'Alliums are reported to stunt legume growth', 'Keep the allium and legume families in separate sections of the garden'],
            ['Assuming every "companion" pairing has a mechanism', 'Some folklore pairings (like basil "improving" tomato flavor) have no demonstrated effect beyond compatible growing conditions', 'Plant folklore pairings for their other genuine benefits (shared conditions, kitchen use) rather than expecting a magic effect'],
            ['Ignoring family grouping when planning companion beds', 'Densely grouping the same plant family concentrates family-specific pests and diseases even if companion herbs are interspersed', 'Combine companion planting with basic crop rotation and family spacing, not as a replacement for it'],
          ],
        },
        {
          type: 'p',
          text: 'Companion planting rewards a season or two of observation more than any fixed formula — track what actually reduced pest pressure or improved a harvest in your own garden, and treat these pairings as a well-grounded starting point rather than a rulebook.',
        },
      ],
    },
  ],
}
