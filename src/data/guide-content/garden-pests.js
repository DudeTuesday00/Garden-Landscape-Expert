export const gardenPestsContent = {
  id: 'garden-pests',
  hero: {
    emoji: '🐛',
    title: 'Common Garden Pests',
    subtitle: 'Visual Identification Charts with Organic Controls — 50+ Pests • ID by Symptom • Organic & Cultural Controls • Beneficial Insects • Crop-by-Crop Reference • Seasonal Timing',
  },
  intro: 'This guide is a field reference for organic and low-spray garden management. Most garden pest problems are manageable with organic controls when caught early. The three most important principles are: (1) correct identification before taking any action; (2) early intervention when populations are small; and (3) supporting natural enemies that do much of the pest control work for free.',
  sections: [
    {
      id: 'how-to-use',
      title: 'How to Use This Guide',
      blocks: [
        {
          type: 'p',
          text: 'This guide is designed as a field reference for organic and low-spray garden management. It is organized to help you quickly identify what you\'re seeing and take the most effective action. Most garden pest problems are manageable with organic controls when caught early. The three most important principles in organic pest management are: (1) correct identification before taking any action; (2) early intervention when populations are small and damage is minimal; and (3) supporting natural enemies that do much of the pest control work for free.',
        },
        {
          type: 'p',
          text: 'Organization: Section 1 is a rapid symptom key — if you see damage and don\'t know the cause, start here. Sections 2 through 7 provide individual pest profiles organized by pest type (sucking insects, chewing insects, soil pests, caterpillars, beetles, and other pests). Section 8 covers beneficial insects that are your allies. Sections 9 and 10 provide crop-by-crop and seasonal reference tables.',
        },
        {
          type: 'p',
          text: 'Geographic scope: This guide covers pests found across the United States. Regional prevalence notes are included in each profile. Pest pressure and species composition varies by climate zone, region, and season — your state cooperative extension service can provide the most locally specific pest management guidance.',
        },
        {
          type: 'warning',
          emoji: '🌿',
          text: 'A note on organic controls: "Organic" in this guide refers to controls derived from natural sources and approved for use in certified organic production under the USDA National Organic Program. OMRI (Organic Materials Review Institute) listing indicates a product has been reviewed and approved for organic use. Even organic pesticides can harm beneficial insects and should be used as a last resort after cultural and physical controls have been tried. The goal is not zero pests — it is pest populations below the level of significant damage.',
        },
        {
          type: 'h3',
          text: 'Organic Pesticide Quick Reference',
        },
        {
          type: 'table',
          headers: ['Product', 'Active Ingredient / Source', 'Effective Against', 'Key Limitations', 'OMRI Listed?'],
          rows: [
            [
              'Insecticidal soap',
              'Potassium salts of fatty acids (plant oils)',
              'Soft-bodied sucking insects: aphids, whitefly, spider mites, mealybugs, scale crawlers, thrips',
              'Contact only; must hit the pest directly; no residual; ineffective on beetles, caterpillars, and hard-bodied insects; can damage some plants (check label)',
              'Yes',
            ],
            [
              'Neem oil (clarified hydrophobic)',
              'Azadirachtin + other neem compounds',
              'Wide spectrum: aphids, whitefly, thrips, mites, mealybugs; some caterpillar deterrence; some fungal disease suppression',
              'Contact action primarily; avoid spraying in bloom (harms bees); spray in evening; can phytotox in heat; needs surfactant',
              'Yes',
            ],
            [
              'Spinosad',
              'Saccharopolyspora spinosa bacteria fermentation product',
              'Outstanding for caterpillars/Lepidoptera larvae; thrips; some beetles; Colorado potato beetle',
              'Toxic to bees when wet; spray in evening after bee activity; resistance develops rapidly — rotate with other modes of action; limited residual',
              'Yes',
            ],
            [
              'Bt (Bacillus thuringiensis)',
              'Bt kurstaki: caterpillars/Lepidoptera. Bt israelensis: fungus gnats, mosquito larvae. Bt tenebrionis: Colorado potato beetle larvae',
              'Caterpillars (Bt k); specific pest groups per strain; must be ingested by the larvae',
              'Species-specific — each strain targets a different pest group. Must be consumed; no contact action. Short residual (1–3 days). Does not affect eggs or adults.',
              'Yes',
            ],
            [
              'Pyrethrin',
              'Pyrethrum flowers (Chrysanthemum cinerariifolium)',
              'Broad spectrum: aphids, beetles, caterpillars, thrips, whitefly, leafhoppers; good knockdown',
              'Toxic to bees, fish, and aquatic insects; short residual; do not apply in or near water; spray in evening; resistance develops. Not the same as synthetic pyrethroids.',
              'Yes',
            ],
            [
              'Kaolin clay',
              'Fine clay particles (Surround WP)',
              'Physical barrier: prevents feeding by many insects; particularly effective for apple maggot, plum curculio, Colorado potato beetle, thrips',
              'Must be reapplied after rain; covers plant with white coating; labor-intensive application; does not kill pests but deters and confuses them',
              'Yes',
            ],
            [
              'Diatomaceous earth (food-grade)',
              'Fossilized diatom shells (silica)',
              'Soft-bodied crawling insects: slugs, earwigs, ants, fungus gnats; works by physical abrasion of insect cuticle',
              'Loses effectiveness when wet; must be reapplied; wear dust mask when applying; not effective against flying insects or caterpillars; can harm beneficial soil insects',
              'Yes',
            ],
            [
              'Copper (fixed copper; copper soap)',
              'Copper-based compounds',
              'Primarily fungal and bacterial diseases; some deterrent effect against slugs and snails at soil level',
              'Primarily for disease control; not an insecticide. Toxic to aquatic organisms; can build up in soil with repeated use.',
              'Yes',
            ],
          ],
        },
        {
          type: 'tip',
          emoji: '🐞',
          text: 'Always identify the pest before treating. Many products harm beneficial insects, and the wrong treatment is wasted effort. When in doubt, wait a day and observe — early intervention is most effective when you know exactly what you\'re targeting.',
        },
      ],
    },
    {
      id: 'rapid-symptom-key',
      title: 'Section 1: Rapid Symptom Key — Identify by What You See',
      blocks: [
        {
          type: 'p',
          text: 'Use this table when you see damage and don\'t immediately know the cause. Observe symptoms carefully before treating — many symptoms have multiple possible causes, and treating for the wrong pest wastes money and may harm beneficial insects.',
        },
        {
          type: 'table',
          headers: ['What You See on the Plant', 'Where on Plant', 'Most Likely Pest(s)', 'Confirming Clue', 'Go to Profile'],
          rows: [
            [
              'Tiny stippled dots; silvery or bronze discoloration; fine webbing',
              'Leaf surfaces, especially undersides; worst in hot, dry weather',
              'Spider mites',
              'Tiny red-brown or white moving dots visible under magnification; fine silk webbing between leaves and stems',
              'Section 2',
            ],
            [
              'Sticky honeydew; sooty black mold; distorted new growth',
              'New shoots, leaf undersides, stem tips',
              'Aphids',
              'Clusters of soft-bodied insects in green, black, white, pink, or brown; ants tending colonies',
              'Section 2',
            ],
            [
              'Small pale insects flying in clouds when plant is disturbed',
              'Leaf undersides of tomatoes, squash, beans, many ornamentals',
              'Whitefly',
              'Tiny white moth-like insects with powdery white wings; oval yellow eggs on leaf undersides',
              'Section 2',
            ],
            [
              'White cottony masses; sticky residue; yellowing',
              'Stem joints, leaf axils, leaf undersides',
              'Mealybugs; woolly aphids',
              'Waxy, cottony white covering; slow-moving or stationary insects',
              'Section 2',
            ],
            [
              'Small brown, gray, or tan bumps on stems; sticky honeydew below',
              'Stems, branches, leaves; tends to be on woody plants',
              'Scale insects',
              'Bumps that look like part of the plant; scraping reveals insect beneath',
              'Section 2',
            ],
            [
              'Silvery streaks or scars on leaf surface; stippling; black specks (frass)',
              'Upper leaf surface; new growth and flowers',
              'Thrips',
              'Tiny (1/16″) slender fast-moving insects; scratch leaf and observe; black fecal specks',
              'Section 2',
            ],
            [
              'Large irregular holes in leaves; skeletonized leaves',
              'Leaf surface; outer leaf margins eaten first',
              'Caterpillars; beetles; slugs',
              'Caterpillars: look for green/brown larvae and dark frass pellets. Slugs: slime trails at night. Beetles: check nearby for hard-shelled adults.',
              'Sections 4, 5, 6',
            ],
            [
              'Holes with smooth edges; skeletonized lower surface; silvery patches',
              'Lower leaf surface skeletonized; upper surface intact then holes',
              'Colorado potato beetle larvae; Mexican bean beetle; caterpillars',
              'Look for orange-yellow egg masses on leaf undersides; striped or spotted larvae',
              'Section 5',
            ],
            [
              'Small round holes throughout leaves (\'shotgun\' pattern)',
              'Across entire leaf; young seedlings most affected; spring emergence worst',
              'Flea beetles',
              'Tiny (1/16″) black or metallic jumping beetles that hop when disturbed; worst on seedlings in spring',
              'Section 5',
            ],
            [
              'Wilting despite adequate water; plant collapses or dies suddenly',
              'Whole plant or one side; cut stem may show discoloration',
              'Cucumber beetles (bacterial wilt vector); squash vine borer; wireworm (roots); cutworm (stem at soil line)',
              'Thread test for bacterial wilt (cucumber beetle). Check stem base for frass/entry hole (SVB). Dig to check roots.',
              'Sections 3, 5',
            ],
            [
              'Tomato / pepper fruit with entry holes; frass at entry point',
              'Fruit surface; entry hole with surrounding frass or discoloration',
              'Tomato fruitworm / corn earworm; hornworm damage extends to fruit late season',
              'Frass visible at entry hole; larvae inside fruit when opened',
              'Section 4',
            ],
            [
              'Plants cut off at soil line overnight; young transplants lying flat',
              'Stem severed at or just below soil surface; plant wilts and falls',
              'Cutworms',
              'C-shaped gray-brown caterpillar in soil at the base of the cut plant; 1–2 inch long',
              'Section 4',
            ],
            [
              'Snake-like trails or blotches inside leaves; leaf surface intact',
              'Interior of leaf tissue; visible as pale trails or blotches on leaf surface',
              'Leafminers (various species)',
              'Hold leaf to light — serpentine mine pattern visible inside the leaf; tiny larvae visible inside mine in early stages',
              'Section 6',
            ],
            [
              'Foamy white mass on stems; plant weakness',
              'Stem junctions; new growth',
              'Spittlebug (meadow spittlebug)',
              'White foamy \'spit\' on plant stems; green or yellow insect found inside the foam',
              'Section 6',
            ],
            [
              'Chewed flowers; holes in flower petals; pollen eaten',
              'Flower heads; petals; buds',
              'Japanese beetles; caterpillars; earwigs; cucumber beetles',
              'Japanese beetles: shiny green with copper wings, often in groups. Earwigs: distinctive rear pincers; feed at night.',
              'Sections 5, 6',
            ],
            [
              'Leaves turn yellow; plant growth stunted; roots damaged',
              'Whole plant yellowing and decline; examination of roots reveals damage',
              'Root knot nematodes; wireworm; root maggots; grubs',
              'Root knot nematode: bumpy galls on roots. Wireworm: slender yellow-brown worm in soil. Root maggots: white maggots on roots.',
              'Section 3',
            ],
            [
              'Galls (abnormal growths) on leaves, stems, or roots',
              'Various locations depending on species',
              'Gall-forming insects (various); root-knot nematodes (roots)',
              'Leaf galls: hollow chambers containing larva when opened. Root galls: firm, non-hollow knots (nematode).',
              'Sections 6, 3',
            ],
            [
              'Fruit or berries disappear or are partially eaten',
              'Fruit of tomatoes, strawberries, corn, etc.',
              'Birds; rodents; slugs; earwigs; hornworm in advanced stage',
              'Slug: slime trail; irregular feeding. Bird: clean peck wounds. Rodent: tooth marks.',
              'Section 6',
            ],
          ],
        },
        {
          type: 'tip',
          emoji: '🔍',
          text: 'Bring a hand lens or use your phone camera macro mode when diagnosing pest problems. Many key identifying features — mite webbing, thrips frass, aphid cast skins — are only visible up close. Check both sides of leaves and at soil level around the stem base before concluding you have a pest problem.',
        },
      ],
    },
    {
      id: 'sucking-insects',
      title: 'Section 2: Sucking Insects — Aphids, Mites, Whitefly, Scale & Thrips',
      blocks: [
        {
          type: 'p',
          text: 'Sucking insects feed by inserting a piercing mouthpart (stylet) into plant tissue and withdrawing cell contents, sap, or phloem fluid. They cause stippling, distortion, yellowing, and honeydew deposition. Most sucking insects are best controlled with contact products (insecticidal soap, neem oil) that must directly contact the pest to be effective. Natural enemies (ladybugs, lacewings, parasitic wasps) are highly effective and should be protected whenever possible.',
        },
        {
          type: 'h3',
          text: 'Aphids (Multiple species — family Aphididae)',
        },
        {
          type: 'list',
          items: [
            'Size: 1/16″ – 1/8″ (1–3 mm); visible to naked eye in clusters',
            'Color: Green, black, yellow, pink, white, gray, or woolly white — color varies dramatically by species',
            'Shape: Soft, pear-shaped body; 2 small tubes (cornicles) projecting from rear; may be winged or wingless',
            'What you see: Clusters on new growth, stem tips, leaf undersides; distorted curled leaves; sticky honeydew; sooty black mold; ants tending colonies',
            'Hosts: Almost all vegetables, fruits, flowers, and ornamentals — one of the broadest pest host ranges of any insect group',
            'Regions: All 50 states; year-round in warm climates; spring–fall in northern states. Most problematic in spring during rapid plant growth.',
          ],
        },
        {
          type: 'list',
          items: [
            'Organic controls: (1) Strong water spray to knock off colonies — very effective; repeat every 2–3 days. (2) Insecticidal soap spray directly on aphid clusters — must contact the insect. (3) Neem oil. (4) Introduce or encourage ladybugs, lacewings, and parasitic wasps — a single ladybug larva consumes 400 aphids in its development. (5) Pyrethrin for severe infestations.',
            'Natural enemies to protect: Ladybugs (adult and larvae), green lacewing larvae, parasitic wasps (Aphidius spp. — mummified brown aphids are a sign they are working), hoverfly larvae, soldier beetles',
            'Cultural controls: Avoid excessive nitrogen fertilization (promotes the succulent new growth aphids prefer). Plant pest-repelling companions: nasturtium (aphid trap plant), garlic, chives, catnip near susceptible plants. Reflective mulch disorients aphids flying in from adjacent areas.',
          ],
        },
        { type: 'image', src: '/guides/garden-pests/aphid-cluster.jpg', alt: 'Extreme macro of a cluster of green aphids on a plant stem with an ant walking among them', caption: 'An ant tending an aphid colony like this is a reliable early-warning sign — ants farm and protect aphids from predators.' },
        {
          type: 'h3',
          text: 'Spider Mites (Tetranychus urticae and related species)',
        },
        {
          type: 'list',
          items: [
            'Size: Microscopic — 1/50″ (0.5 mm); barely visible as moving dots to the naked eye; magnification reveals ovoid body with 4 pairs of legs',
            'Color: Yellow-green with dark spots (two-spotted spider mite); red (European red mite); russet mite (microscopic)',
            'Webbing: Fine silk webbing on leaf undersides, between leaves, and along stems — webbing distinguishes mites from all other pests',
            'What you see: Stippled, bronzed, or silvered leaves; premature leaf drop in severe infestations; fine webbing; worst in hot, dry conditions',
            'Hosts: Tomatoes, cucumbers, beans, strawberries, roses, conifers, fruit trees, houseplants — very wide host range',
            'Regions: All regions; most severe in hot, dry climates (Southwest, Midwest during drought). Populations explode rapidly in heat. Indoor/greenhouse populations year-round.',
          ],
        },
        {
          type: 'list',
          items: [
            'Organic controls: (1) FIRST: strong water spray to undersides of leaves — physically removes mites and their webbing; most effective non-chemical control. (2) Increase humidity — mites thrive in dry conditions. (3) Insecticidal soap to leaf undersides — repeat every 5–7 days for 3 treatments. (4) Neem oil. (5) Predatory mites (Phytoseiulus persimilis) — available from online suppliers; excellent for greenhouse and high-value situations.',
            'Natural enemies to protect: Predatory mites (Phytoseiidae family), minute pirate bugs, lacewing larvae, predatory thrips (Scolothrips spp.)',
            'Cultural controls: Avoid dusty conditions (dust suppresses natural predators). Do not overfertilize with nitrogen. Maintain adequate irrigation — water-stressed plants are more susceptible. Avoid broad-spectrum insecticides that kill predatory mites.',
          ],
        },
        { type: 'image', src: '/guides/garden-pests/spider-mite-damage.jpg', alt: 'Close-up of a leaf with silvery stippled bronze discoloration and fine spider mite webbing', caption: 'Stippled, bronzed leaf tissue plus fine silk webbing is the combination that distinguishes spider mites from every other sucking pest.' },
        {
          type: 'h3',
          text: 'Whitefly (Bemisia tabaci, Trialeurodes vaporariorum, and others)',
        },
        {
          type: 'list',
          items: [
            'Size: Adults 1/16″; oval yellow body with powdery white wings. Nymphs are flat, oval, scale-like, and barely visible on leaf undersides.',
            'Color: Adults white; nymph instars pale yellow to transparent flat ovals on leaf undersides',
            'What you see: Adults fly in white clouds when plant is disturbed; yellowing; wilting; sticky honeydew; sooty black mold; nymphs on leaf undersides',
            'Hosts: Tomatoes, peppers, squash, melons, sweet potatoes, beans, cucumbers, poinsettia, many tropical ornamentals',
            'Regions: Most severe in the South (Zone 7+), California, and in greenhouses nationwide. Silverleaf whitefly is a tropical species most problematic in warm climates and greenhouses. Year-round in Zone 9+.',
          ],
        },
        {
          type: 'list',
          items: [
            'Organic controls: (1) Yellow sticky traps — highly effective for monitoring and reducing adult populations; change weekly. (2) Insecticidal soap to leaf undersides — targets crawlers and nymphs; must contact directly. (3) Neem oil. (4) Spinosad. (5) Reflective silver mulch reduces whitefly landing rates significantly. (6) Pyrethrin for severe infestations in the evening.',
            'Natural enemies to protect: Encarsia formosa parasitic wasp (excellent biological control; commercially available for greenhouse use); Delphastus catalinae predatory beetle; lacewings',
            'Cultural controls: Remove and dispose of heavily infested leaves (do not compost). Avoid overfertilizing. Inspect and quarantine new transplants before placing near existing plants.',
          ],
        },
        { type: 'image', src: '/guides/garden-pests/whitefly.jpg', alt: 'Tiny white whitefly insects flying up from the underside of a disturbed green leaf', caption: 'That characteristic cloud of tiny white insects rising when you brush a leaf is the fastest field confirmation for whitefly.' },
        {
          type: 'h3',
          text: 'Mealybugs (Pseudococcus spp., Planococcus citri, and others)',
        },
        {
          type: 'list',
          items: [
            'Size: 1/16″ – 1/4″; oval, soft-bodied insects covered in a white, waxy, mealy coating',
            'Color: White to gray; the waxy coating makes them appear fluffy or cottony',
            'What you see: White cottony masses in leaf axils, stem joints, root crown; sticky honeydew; sooty mold; yellowing and wilting in severe infestations',
            'Hosts: Citrus, grapes, succulents, cacti, orchids, houseplants, many ornamentals; outdoors in warm climates on vegetables',
            'Regions: Year-round in Zone 9+; warm greenhouses and houseplant collections nationwide. Most common as an indoor/greenhouse pest in northern states.',
          ],
        },
        {
          type: 'list',
          items: [
            'Organic controls: (1) Rubbing alcohol on a cotton swab — wipe individual colonies directly; extremely effective for small infestations. (2) Insecticidal soap applied to all plant surfaces. (3) Neem oil (good residual deterrent). (4) Repeat applications weekly for 4–6 weeks — mealybugs are persistent and have protected egg stages. (5) Introduce Cryptolaemus montrouzieri (mealybug destroyer beetle) for large greenhouse infestations.',
            'Natural enemies to protect: Cryptolaemus montrouzieri (mealybug destroyer ladybug); lacewing larvae; Leptomastix parasitic wasps',
            'Cultural controls: Inspect new plants carefully before introducing to your collection; quarantine for 2–3 weeks. Remove ants that protect mealybugs from natural enemies. Isolate infested plants immediately.',
          ],
        },
        {
          type: 'h3',
          text: 'Scale Insects (Armored scale — Diaspididae; Soft scale — Coccidae; many species)',
        },
        {
          type: 'list',
          items: [
            'Adults: Sessile (permanently attached). Armored scale: hard, removable waxy covering separate from the body. Soft scale: the body itself is the covering.',
            'Crawlers: The mobile first-instar nymphs are the most vulnerable stage — tiny, flat, oval, and yellow to orange',
            'What you see: Brown, tan, white, or gray bumps on stems and leaves; yellowing; honeydew and sooty mold (soft scale more than armored); plant decline',
            'Hosts: Fruit trees, ornamental shrubs, houseplants, citrus, grapes, junipers, roses — heaviest on woody plants and shrubs',
            'Regions: Found in all regions; most species more problematic in warm climates (Zone 7+). Significant indoor/greenhouse problem nationwide.',
          ],
        },
        {
          type: 'list',
          items: [
            'Organic controls: (1) Horticultural oil — dormant oil for dormant-season application; summer-weight oil during the growing season; highly effective by smothering overwintering eggs and crawlers. (2) Insecticidal soap on crawlers. (3) Rubbing alcohol on a toothbrush for removing scale from woody stems. (4) Neem oil.',
            'Natural enemies to protect: Parasitic wasps (many species specific to scale); scale-eating ladybugs (Chilocorus spp.); predatory beetles',
            'Cultural controls: Monitor for crawler emergence in spring with sticky tape wrapped around branches. Prune and dispose of severely infested branches. Maintain plant vigor — stressed plants are more susceptible.',
          ],
        },
        {
          type: 'h3',
          text: 'Thrips (Frankliniella occidentalis, F. tritici, Thrips tabaci, and others)',
        },
        {
          type: 'list',
          items: [
            'Size: 1/20″ – 1/16″ (1–1.5 mm); slender, fast-moving; barely visible to naked eye; fringed wings on adults',
            'Color: Yellow to brown to black; very variable by species and instar',
            'What you see: Silvery scarring or streaking on leaf surfaces; distorted new growth; black fecal specks on leaves; flower petals with dark streaks or brown edges; fruit scarring',
            'Hosts: Onions, beans, squash, peppers, tomatoes, cucumbers, flowers (especially roses, impatiens, gladiolus) — very wide host range',
            'Regions: All regions; most severe in warm, dry conditions. Western flower thrips is the most economically important and widely distributed species. Also vectors tomato spotted wilt virus (TSWV) and impatiens necrotic spot virus (INSV).',
          ],
        },
        {
          type: 'list',
          items: [
            'Organic controls: (1) Blue or yellow sticky traps for monitoring — blue traps are more effective for thrips specifically. (2) Insecticidal soap on all plant surfaces including flowers. (3) Spinosad — the most effective organic control for thrips; apply in late afternoon after bee activity. (4) Neem oil as a deterrent. (5) Reflective mulch reduces thrips landing rates.',
            'Natural enemies to protect: Minute pirate bugs (Orius spp.) — among the most effective predators; commercially available. Predatory mites (Amblyseius cucumeris). Lacewing larvae.',
            'Cultural controls: Remove and dispose of heavily infested flowers and plant material. Avoid excessive nitrogen that promotes the succulent growth thrips prefer. Inspect new transplants carefully — thrips are often introduced on new plants.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌿',
          text: 'For all sucking insects: ants are a warning sign. Ants actively farm aphids, mealybugs, and soft scale — herding them, protecting them from predators, and moving them to new growth. If you see heavy ant traffic on a plant, check immediately for sucking insects. Banding tree trunks with sticky barriers (Tanglefoot) stops ants and allows natural enemies to do their work.',
        },
      ],
    },
    {
      id: 'soil-pests',
      title: 'Section 3: Soil Pests — Cutworms, Grubs, Wireworms & Nematodes',
      blocks: [
        {
          type: 'p',
          text: 'Soil pests damage plants at or below the soil surface, making them difficult to detect until significant damage has occurred. Prevention — physical barriers, crop rotation, beneficial nematodes, and healthy soil biology — is more reliable than treatment for most soil pests. When soil pest damage is suspected, dig around the base of affected plants to examine the root zone.',
        },
        {
          type: 'h3',
          text: 'Cutworms (Agrotis ipsilon, Peridroma saucia, and others)',
        },
        {
          type: 'list',
          items: [
            'Adult: Gray-brown moths; nocturnal; non-damaging as adults',
            'Larva: 1–2 inch plump caterpillars, gray to brown to nearly black; curl into a C-shape when disturbed; greasy appearance',
            'What you see: Young transplants and seedlings severed at or just below soil line overnight; plants topple and wilt; the plant appears cut off cleanly',
            'Hosts: Nearly any young transplant or seedling; particularly destructive on tomatoes, peppers, cabbage family, corn, and annual flowers at transplanting time',
            'Regions: All 50 states; most damaging at the time of spring and fall transplanting when populations of overwintering or spring-hatched larvae are active in the soil',
          ],
        },
        {
          type: 'list',
          items: [
            'Organic controls: (1) Physical collar barriers — a 3–4 inch cylinder of cardboard, newspaper, or plastic pushed 1 inch into the soil and extending 2–3 inches above; most effective prevention. (2) Beneficial nematodes (Steinernema carpocapsae) applied to moist soil before transplanting; effective for 4–6 weeks. (3) Bt kurstaki applied to soil surface at dusk. (4) Diatomaceous earth around transplant bases. (5) Hand-pick by digging 2–3 inches below cut plants at night.',
            'Natural enemies to protect: Ground beetles, tachinid flies, parasitic wasps, birds, toads',
            'Cultural controls: Cultivate soil 2–3 weeks before transplanting to expose larvae to birds and weather. Remove plant debris (cutworms hide under it during the day). Check planting areas at dusk with a flashlight for active larvae.',
          ],
        },
        { type: 'image', src: '/guides/garden-pests/cutworm.jpg', alt: 'A gray-brown C-shaped cutworm caterpillar curled in dark soil next to a seedling', caption: 'That tight C-shaped curl is diagnostic — a physical collar barrier at transplanting prevents this damage far more reliably than any spray.' },
        {
          type: 'h3',
          text: 'White Grubs (Japanese Beetle, June Bug, May Beetle larvae — Popillia japonica and related scarab species)',
        },
        {
          type: 'list',
          items: [
            'Larva: 1/2″ – 1.5″ C-shaped grubs with a white or cream body, brown head capsule, and 3 pairs of true legs; found in soil, particularly in lawns',
            'Adult: Beetles emerge in summer — Japanese beetle is metallic green with copper-brown wing covers (1/2″); June bugs are reddish-brown (3/4″ – 1″)',
            'What you see in lawns: Irregular dead patches; sod rolls back like carpet revealing C-shaped grubs; raccoons and skunks dig up lawn',
            'What you see in gardens: Roots chewed; plants wilt and die; tugging the plant reveals no root attachment',
            'Hosts (larvae): Grass roots (primary); vegetable root systems; ornamental plant roots in ground',
            'Regions: Japanese beetle is primarily eastern US (east of the Mississippi, expanding westward); most damaging in the Northeast and Midwest. Grub damage most visible in late summer and fall.',
          ],
        },
        {
          type: 'list',
          items: [
            'Organic controls for grubs: (1) Milky spore disease (Paenibacillus popilliae) — specific to Japanese beetle grubs; apply to lawns; takes 2–3 seasons to establish but persists for years. (2) Beneficial nematodes (Heterorhabditis bacteriophora) — apply in late summer/early fall when young grubs are near the surface; must be applied to moist soil. (3) Steinernema glaseri for larger grubs.',
            'Organic controls for adult beetles: (1) Hand-pick adults into soapy water in early morning when sluggish. (2) Row cover over vulnerable plants during peak adult flight. (3) Kaolin clay deterrent. (4) Pyrethrin. AVOID Japanese beetle traps — research shows they attract more beetles than they catch and increase damage in the surrounding area.',
            'Cultural controls: Reduce lawn area (primary grub habitat). Maintain healthy, deep-rooted turf. Attract and support natural predators: birds, ground beetles, parasitic wasps.',
          ],
        },
        {
          type: 'h3',
          text: 'Wireworms (Agriotes spp., Melanotus spp., and other click beetle larvae)',
        },
        {
          type: 'list',
          items: [
            'Larva: 1/2″ – 1.5″ long; slender, hard-bodied, shiny, yellow-brown; cylindrical with distinct segments; live in soil 3–6+ years before pupating',
            'Adult: Click beetles (1/2″ – 3/4″); not directly damaging; make a clicking sound when flipped onto their back',
            'What you see: Small round holes bored into potato tubers, carrot roots, corn kernels at germination, beets; wilting seedlings with damaged roots; round tunnels through root crops',
            'Hosts: Root crops (potatoes, carrots, beets, sweet potatoes, radishes); corn and small grain seedlings; transplant roots of many vegetables',
            'Regions: All regions; most problematic in the Pacific Northwest, California, and in recently turned sod or fields converted from grass. Populations highest in soils with high organic matter.',
          ],
        },
        {
          type: 'list',
          items: [
            'Organic controls: (1) Beneficial nematodes (Steinernema feltiae) applied to moist soil before planting. (2) Trap crops: bury pieces of potato or carrot as bait traps; dig up and destroy weekly. (3) Diatomaceous earth incorporated into the planting area. (4) Mustard seed meal (biofumigant) incorporated into soil.',
            'Cultural controls: Avoid planting root crops in areas recently converted from sod. Rotate root crops to new areas annually. Deep cultivation exposes wireworms to birds and desiccation. Allow soil to dry somewhat before planting in wireworm-prone areas.',
          ],
        },
        {
          type: 'h3',
          text: 'Root-Knot Nematodes (Meloidogyne incognita, M. arenaria, M. hapla, and related species)',
        },
        {
          type: 'list',
          items: [
            'What they are: Microscopic roundworms in the soil; females induce the formation of galls (knots) on roots where they feed and lay eggs; cannot be seen without a microscope',
            'What you see above ground: Plants stunted, yellowing, wilting despite adequate water — symptoms appear when plants should be vigorous',
            'What you see below ground: Bumpy, knotted galls on roots — the diagnostic sign. Not the same as nitrogen-fixing nodules (which are smooth and pink).',
            'Hosts: Tomatoes, peppers, cucumbers, melons, squash, beans, carrots — very wide host range; most vegetable crops are susceptible',
            'Regions: Most severe in the South and Southwest (Zone 7+) where hot, sandy soils support large populations. M. hapla is the northern root-knot species, active in cooler soils. Worst in light, sandy, warm soils.',
          ],
        },
        {
          type: 'list',
          items: [
            'Organic controls: (1) French marigolds (Tagetes patula) as a dense interplanting or cover crop — roots exude compounds toxic to root-knot nematodes; plant densely and till in at season end for best effect (requires a full season). (2) Beneficial nematodes (Steinernema and Heterorhabditis spp.) have some suppressive effect. (3) Soil solarization — highly effective in summer in warm climates; reduces populations in the top 6 inches significantly. (4) Neem cake (meal remaining after oil extraction) incorporated into soil.',
            'Cultural controls: Choose resistant varieties — look for N in tomato hybrid codes (VFN = Verticillium, Fusarium, Nematode resistant). Crop rotation using non-host crops (corn, onions, garlic, small grains) for 1–2 seasons. Improve soil organic matter to promote natural nematode enemies. Add compost generously.',
          ],
        },
        {
          type: 'tip',
          emoji: '🪱',
          text: 'Beneficial nematodes appear as a control across three of the four soil pest profiles above — they are one of the most versatile tools in the organic gardener\'s toolkit. Different species target different pests: Steinernema carpocapsae for cutworms near the soil surface, Heterorhabditis bacteriophora for white grubs, and Steinernema feltiae for wireworms and fungus gnats. Apply to moist soil at dusk or on a cloudy day; UV light kills them quickly. Refrigerate and use within the date on the package.',
        },
      ],
    },
    {
      id: 'caterpillars',
      title: 'Section 4: Caterpillars & Larvae — The Leaf & Fruit Eaters',
      blocks: [
        {
          type: 'p',
          text: 'Caterpillars are the larvae of moths and butterflies (order Lepidoptera). They are among the most damaging garden pests by volume of plant tissue consumed, but also among the most effectively managed with targeted organic controls — particularly Bt (Bacillus thuringiensis), which kills caterpillars specifically without harming other insects when used correctly.',
        },
        {
          type: 'h3',
          text: 'Tomato Hornworm & Tobacco Hornworm (Manduca quinquemaculata & M. sexta)',
        },
        {
          type: 'list',
          items: [
            'Size: One of the largest garden caterpillars — 3–4 inches long when mature; green with white diagonal stripes; a horn on the rear end',
            'Tomato vs. tobacco: Tomato hornworm has V-shaped white marks on its sides and a black horn. Tobacco hornworm has diagonal white stripes and a red horn. Both cause identical damage.',
            'What you see: Dramatic defoliation of tomato, pepper, and eggplant; large dark green or black droppings (frass) on leaves below the feeding site; stems stripped of leaves; the green larva is extremely well-camouflaged',
            'Adults: Large sphinx moths (hummingbird moths); wingspan 4–5 inches; not damaging but lay eggs on plant',
            'Regions: Throughout the continental US; M. quinquemaculata more common in northern states; M. sexta more prevalent in the South. Peak caterpillar feeding in mid-to-late summer.',
          ],
        },
        {
          type: 'list',
          items: [
            'Organic controls: (1) Hand-pick — the most effective control; hornworms are large enough to find by their frass and by black-light inspection at night (they fluoresce). (2) Bt kurstaki sprayed on foliage — larvae must ingest treated foliage; most effective on young larvae. (3) Spinosad.',
            'Natural enemies to protect: Cotesia congregata parasitic wasp — hornworms bearing small white cocoons on their backs are being controlled by this wasp and should not be killed; they will not survive to reproduce. Trichogramma egg parasites. Ground beetles.',
            'Cultural controls: Till soil in fall to expose pupae to birds and cold. Plant dill, basil, and marigold to attract beneficial wasps. Row cover over young transplants before egg-laying period.',
          ],
        },
        { type: 'image', src: '/guides/garden-pests/tomato-hornworm.jpg', alt: 'A large green tomato hornworm with white diagonal stripes camouflaged on a tomato plant stem', caption: 'Hornworms are surprisingly well camouflaged despite their size — frass on the leaves below is often the first clue one is present.' },
        {
          type: 'h3',
          text: 'Imported Cabbageworm (Pieris rapae)',
        },
        {
          type: 'list',
          items: [
            'Adult: The familiar cabbage white butterfly — white wings with black-tipped forewings; adults are not damaging but lay pale yellow bullet-shaped eggs on cabbage family leaves',
            'Larva: Velvety green caterpillar with a faint yellow dorsal stripe; 1–1.5 inches at maturity; very well camouflaged on green leaves',
            'What you see: Ragged holes in outer leaves of cabbage, broccoli, cauliflower, kale, and brussels sprouts; green frass inside cabbage heads; frass on leaf surfaces below feeding sites',
            'Hosts: All Brassica species — cabbage, broccoli, cauliflower, kale, brussels sprouts, kohlrabi, bok choy, arugula, radish, turnip',
            'Regions: Throughout the US; 2–3 generations per season in most regions; most damaging in spring and fall when brassicas are in season. Year-round in mild climates.',
          ],
        },
        {
          type: 'list',
          items: [
            'Organic controls: (1) Row cover from transplanting through harvest — most effective prevention; removes the butterfly from contact with the plant entirely. (2) Bt kurstaki applied weekly when butterflies are active — must be ingested by larvae; reapply after rain. (3) Spinosad. (4) Hand-pick larvae and yellow eggs. (5) Trichogramma parasitic wasps released when adults are present.',
            'Natural enemies to protect: Trichogramma parasitic wasps (attack eggs); Cotesia glomerata (larval parasitoid); spiders; ground beetles',
            'Cultural controls: Inspect plants twice weekly and hand-remove eggs (pale yellow, bullet-shaped on leaf undersides). Plant purple or red cabbage varieties — some studies show they receive less egg-laying.',
          ],
        },
        {
          type: 'h3',
          text: 'Squash Vine Borer (Melittia cucurbitae)',
        },
        {
          type: 'list',
          items: [
            'Adult: Day-flying moth resembling a wasp — red abdomen with black dots, metallic green wings; forewing span 1–1.5 inches; present in early summer',
            'Larva: Creamy white caterpillar, 1–1.5 inches; found inside the vine stem; wrinkled body; brown head capsule',
            'What you see: Sudden wilting of a mature squash vine that had appeared healthy; sawdust-like frass (orange-green) at a small entry hole on the stem base; vine yellows and dies rapidly; cutting open the stem reveals the larva inside',
            'Hosts: Butternut and acorn squash (most susceptible); zucchini; pumpkins (less so); winter squash; sometimes cucumbers and melons',
            'Regions: Eastern US, Midwest, and southern states; less common in the West. Most damaging from June through August. Adult flight period is 4–6 weeks.',
          ],
        },
        {
          type: 'list',
          items: [
            'Organic controls: (1) Row cover from transplanting until flowering (remove for pollination). (2) Time planting to avoid peak adult flight: in northern regions, plant zucchini in mid-June or early July so vines are small during early July peak; or plant in early spring so vines are large and past peak vulnerability. (3) Wrap stem bases with aluminum foil to deter egg-laying. (4) Inject Bt into stem at entry holes. (5) Cut out larvae with a knife and bury the vine node in soil — it may root and continue producing.',
            'Natural enemies to protect: Parasitic wasps attack eggs; spiders; predatory wasps',
            'Cultural controls: Monitor for orange, flat eggs on stem bases from June onward. Grow resistant varieties (butternut is more resistant than acorn). Remove and destroy infested vines promptly to prevent larvae from completing development.',
          ],
        },
        {
          type: 'h3',
          text: 'Corn Earworm / Tomato Fruitworm (Helicoverpa zea)',
        },
        {
          type: 'list',
          items: [
            'Larva: 1.5–2 inches; highly variable in color — green, brown, pink, or nearly black with pale stripes; spiny head capsule visible with a hand lens',
            'What you see on corn: Silks eaten; tip of ear shows frass and feeding; larva in tip of ear when husked; chewed kernels at the ear tip',
            'What you see on tomato: Entry hole in fruit near the stem scar area; frass at entry hole; hollow cavity inside fruit; larva inside',
            'Hosts: Corn (primary); tomatoes, peppers, beans, squash, sorghum; broad host range late in season',
            'Regions: Throughout the US; a major economic pest. Overwinters in the deep South and migrates northward on storm fronts each spring. Northern regions see 1–2 generations; southern regions 3–4+ per year.',
          ],
        },
        {
          type: 'list',
          items: [
            'Organic controls on corn: (1) Apply a few drops of mineral oil to each silk mass 3–4 days after silk emergence — prevents larvae from entering the ear. (2) Inject Bt into each ear at silk stage every 3–5 days. (3) Spinosad timed to silk emergence. (4) Trichogramma egg wasps released at tasseling.',
            'Organic controls on tomato: (1) Bt or spinosad applied when adult moths are flying (use pheromone traps to monitor flight). (2) Pyrethrin. (3) Remove and dispose of infested fruit immediately.',
            'Natural enemies to protect: Trichogramma parasitic wasps; Cotesia marginiventris; earwigs (predators of eggs and young larvae); ground beetles',
          ],
        },
        {
          type: 'h3',
          text: 'Cabbage Looper (Trichoplusia ni)',
        },
        {
          type: 'list',
          items: [
            'Adult: Brown moth with a silver figure-eight marking on each forewing; nocturnal; flies spring through fall',
            'Larva: 1.5–2 inches; pale green; moves in a characteristic looping motion, arching its back as it walks like an inchworm; thin white lines along each side',
            'What you see: Ragged holes in leaves of brassicas, lettuce, spinach, celery, and tomatoes; similar damage to imported cabbageworm but with a broader host range',
            'Hosts: Cabbage family, lettuce, spinach, celery, parsley, tomatoes, cucumbers — broader than imported cabbageworm',
            'Regions: Throughout the US; 3–5 generations per year in warm climates; overwinters in warm southern states and migrates northward. Year-round pest in Zone 8+.',
          ],
        },
        {
          type: 'list',
          items: [
            'Organic controls: (1) Bt kurstaki — highly effective; apply to all leaf surfaces including undersides; repeat after rain. (2) Spinosad. (3) Row cover to prevent egg-laying. (4) Hand-pick larvae.',
            'Natural enemies to protect: Trichogramma parasitic wasps (attack eggs); Microplitis brassicae (larval parasitoid); spiders; ground beetles; birds',
            'Cultural controls: Row cover is the most effective prevention. Check plants 2–3 times per week. Loopers are often present alongside imported cabbageworm, so the same management serves both.',
          ],
        },
        {
          type: 'tip',
          emoji: '🦋',
          text: 'Before spraying Bt or spinosad, check each caterpillar for small white rice-grain-shaped cocoons attached to its body — these are the pupal cases of Cotesia parasitic wasps. A hornworm or cabbageworm carrying cocoons is already doomed and is acting as a host nursery for your next generation of pest control. Leave these parasitized caterpillars in the garden. Spraying them wastes product and kills the wasps emerging from them.',
        },
      ],
    },
    {
      id: 'beetles-weevils',
      title: 'Section 5: Beetles & Weevils',
      blocks: [
        {
          type: 'p',
          text: 'Beetles (order Coleoptera) are the most species-rich order of insects on earth. Most beetle species are beneficial or neutral in the garden; a small number are significant pests. Both larvae and adults of pest beetle species may cause damage, sometimes in very different ways. Beetles are generally harder to control with organic tools than soft-bodied insects or caterpillars, making cultural and physical controls especially important.',
        },
        {
          type: 'h3',
          text: 'Colorado Potato Beetle (Leptinotarsa decemlineata)',
        },
        {
          type: 'list',
          items: [
            'Adult: 3/8″ oval beetle; yellow-orange with 10 black stripes on wing covers; hard-shelled; found on plant surfaces',
            'Larva: Plump, red-orange with black spots; rows of black spots along the sides; humpbacked; feeds in groups; 1/2″ – 3/4″ when mature',
            'Eggs: Bright yellow-orange oval eggs in clusters of 20–40 on leaf undersides',
            'What you see: Heavily skeletonized leaves; complete defoliation in severe infestations; egg clusters on leaf undersides; all life stages may be present simultaneously',
            'Hosts: Potatoes, tomatoes, eggplant, peppers — primarily Solanaceae family',
            'Regions: Throughout the US east of the Rockies; lower pressure in the Rocky Mountain states and Pacific Coast. Has developed resistance to many synthetic insecticides in many regions.',
          ],
        },
        {
          type: 'list',
          items: [
            'Organic controls: (1) Hand-pick adults, larvae, and crush egg masses daily when populations are low. (2) Bt tenebrionis — the specific Bt strain for beetle larvae; must be consumed by larvae; less effective on large larvae. (3) Spinosad. (4) Kaolin clay applied to the whole plant surface — deters adults from feeding and egg-laying. (5) Pyrethrin. (6) Neem oil deters egg-laying.',
            'Natural enemies to protect: Edovum puttleri parasitic wasp (attacks eggs); Perillus bioculatus (spined soldier bug); ground beetles consume eggs and young larvae',
            'Cultural controls: Crop rotation — adults overwinter in soil, so rotating Solanaceae to new beds each year forces adults to walk farther to find hosts. Straw mulch provides habitat for ground beetles that eat eggs and larvae. Inspect plants daily during adult emergence. Use eggplant as a trap crop to draw beetles away from potatoes.',
          ],
        },
        {
          type: 'h3',
          text: 'Cucumber Beetles (Acalymma vittatum — striped; Diabrotica undecimpunctata — spotted)',
        },
        {
          type: 'list',
          items: [
            'Striped cucumber beetle: 1/4″; yellow with 3 black stripes; often seen on flowers; vectors bacterial wilt disease (Erwinia tracheiphila)',
            'Spotted cucumber beetle: 1/4″; greenish-yellow with 12 black spots; same pest group, broader host range',
            'What you see: Adult feeding on flowers, pollen, leaves, and fruit rinds; plant wilt from bacterial wilt transmission; larval root damage underground; use the thread test for bacterial wilt (see Section 1)',
            'Hosts: Cucumbers (most susceptible to bacterial wilt), squash, melons, pumpkins; spotted beetle also damages corn and beans',
            'Regions: Striped: eastern and central US. Spotted: throughout the US. Both emerge in spring when plants are first transplanted — the most vulnerable period.',
          ],
        },
        {
          type: 'list',
          items: [
            'Organic controls: (1) Row cover from transplanting through early bloom — critical for preventing bacterial wilt transmission during the vulnerable seedling period; remove for pollination. (2) Hand-pick adults in early morning when sluggish. (3) Kaolin clay on all plant surfaces. (4) Pyrethrin. (5) Spinosad. (6) Yellow sticky traps for monitoring.',
            'Natural enemies to protect: Tachinid flies (larval parasitoids); parasitic nematodes on larvae; ground beetles',
            'Cultural controls: Plant resistant cucumber varieties (\'Saladin,\' \'Marketmore 76,\' \'Diva\'). Use transplants rather than direct seeding — larger plants are less vulnerable. Grow companion plants that deter beetles: catnip, tansy, radish. Remove and destroy any plant confirmed to have bacterial wilt immediately.',
          ],
        },
        {
          type: 'h3',
          text: 'Japanese Beetle (Popillia japonica)',
        },
        {
          type: 'list',
          items: [
            'Adult: 1/2″; distinctive metallic green thorax and copper-brown wing covers; tuft of white hairs along each side of the abdomen; adults feed in groups; peak summer emergence',
            'Larva: C-shaped white grub — see white grub profile in Section 3 for larval management',
            'What you see: Adults skeletonize leaves (consume all tissue between veins, leaving a lace-like skeleton); heavily damaged flowers and fruit; adults often congregate in large numbers, preferring the sun-exposed top of plants',
            'Hosts (adults): Roses, grapes, raspberries, beans, corn silk, apple, linden, Japanese maple, and 300+ other plant species',
            'Regions: Eastern US (east of the Mississippi primarily, expanding into the Midwest and some western states). Peak adult emergence late June through August. Adults live 4–6 weeks.',
          ],
        },
        {
          type: 'list',
          items: [
            'Organic controls: (1) Hand-pick into soapy water in early morning — adults are sluggish and drop when disturbed; hold the bucket under the branch and tap it. (2) Kaolin clay on plant surfaces — deters feeding and reduces egg-laying. (3) Pyrethrin for severe infestations. (4) Row cover during peak adult flight protects vulnerable plants. DO NOT use Japanese beetle traps — research consistently shows they attract more beetles than they capture, increasing damage in the surrounding area.',
            'Natural enemies to protect: Tiphia vernalis parasitic wasp (attacks grubs); Istocheta aldrichi fly (attacks adults); birds',
            'Cultural controls: See Section 3 (white grubs) for larval management. Grow resistant plants where possible: forsythia, arborvitae, boxwood, junipers, and many native plants are less preferred.',
          ],
        },
        {
          type: 'h3',
          text: 'Flea Beetles (Epitrix spp. on Solanaceae; Phyllotreta spp. on Brassicas; many other species)',
        },
        {
          type: 'list',
          items: [
            'Size: 1/16″ – 1/8″; tiny hard-shelled beetles with enlarged hind femurs for jumping; hop when disturbed',
            'Color: Shiny black (most common); blue-black; or striped — varies by species',
            'What you see: Numerous tiny round holes across leaves giving a "shotgun" or "shot-hole" appearance; seedlings most vulnerable; worst in spring and early summer',
            'Hosts: Brassica seedlings — turnips, arugula, radish, cabbage family (Phyllotreta spp.); eggplant, tomato, potato, pepper (Epitrix spp.); also affect corn, beans, spinach',
            'Regions: All regions; spring emergence is the most critical period when seedlings are most vulnerable. Populations typically peak in early spring and again in late summer.',
          ],
        },
        {
          type: 'list',
          items: [
            'Organic controls: (1) Row cover from seeding or transplanting through establishment — most effective prevention for spring seedlings. (2) Diatomaceous earth applied to soil surface and plant base. (3) Kaolin clay on plant surfaces. (4) Yellow sticky traps at plant height for monitoring and some population reduction. (5) Pyrethrin for severe infestations. (6) Spinosad.',
            'Natural enemies to protect: Ground beetles and rove beetles consume flea beetle larvae and pupae in the soil',
            'Cultural controls: Seed or transplant early in cool weather when flea beetles are less active. Start with larger transplants (4–6 inches) that tolerate early feeding better than seedlings. Use trap crops: radish draws flea beetles away from other brassicas; mustard attracts Phyllotreta beetles.',
          ],
        },
        {
          type: 'tip',
          emoji: '🪲',
          text: 'Ground beetles (family Carabidae) are among the most valuable pest-control allies in the garden. These fast-moving, shiny black or iridescent beetles and their larvae prey on Colorado potato beetle eggs, flea beetle pupae, cutworms, slugs, and many other pests — entirely at night when you\'re not watching. Protect them by minimizing soil disturbance, maintaining permanent mulched pathways as daytime refuges, and avoiding broad-spectrum insecticide sprays. A single ground beetle can consume dozens of pests per night.',
        },
      ],
    },
    {
      id: 'other-pests',
      title: 'Section 6: Other Common Pests — Slugs, Earwigs, Leafhoppers, Leafminers & More',
      blocks: [
        {
          type: 'p',
          text: 'This section covers common garden pests that don\'t fit neatly into the beetle, caterpillar, or sucking insect categories but are frequently encountered and sometimes difficult to identify or control.',
        },
        {
          type: 'h3',
          text: 'Slugs & Snails (Arion spp., Deroceras spp. — slugs; Cornu aspersum and others — snails)',
        },
        {
          type: 'list',
          items: [
            'What they are: Mollusks, not insects; slugs lack shells; snails have coiled shells; both are soft-bodied and nocturnal; leave characteristic slime trails',
            'Size: Slugs 1/2″ – 3″; snails 3/4″ – 1.5″ with shell',
            'What you see: Irregular holes in leaves with smooth edges; complete consumption of seedlings; slime trails on leaves, soil, and nearby surfaces; primarily nocturnal — rarely seen in daylight; worst in cool, moist conditions',
            'Hosts: Almost any plant; particularly damaging to seedlings, lettuce, hostas, strawberries, and the cabbage family; thrives under mulch',
            'Regions: All regions; most severe in the Pacific Northwest, Northeast, and other high-humidity climates. Population explosions after cool, wet springs.',
          ],
        },
        {
          type: 'list',
          items: [
            'Organic controls: (1) Iron phosphate bait (Sluggo, Escar-Go) — highly effective; safe for wildlife, pets, and children; OMRI-listed; apply in the evening when slugs are active; reapply after rain. (2) Diatomaceous earth around plant bases (loses effectiveness when wet; must be reapplied). (3) Copper tape as a barrier around raised beds — electrical charge deters slug crossing. (4) Hand-pick at night with a flashlight; drop into soapy water or salt. (5) Beer traps (containers sunk to rim level, filled with beer — slugs drown; effective but requires frequent emptying).',
            'Natural enemies to protect: Ground beetles; rove beetles; toads and frogs (excellent slug predators — a toad in the garden is worth a dozen treatments); garter snakes; birds (especially robins and ducks)',
            'Cultural controls: Reduce moisture and mulch depth in slug-prone areas during wet seasons. Water in the morning rather than evening so the soil surface dries before nightfall. Eliminate hiding spots (boards, dense ground covers, leaf piles) near vulnerable plants.',
          ],
        },
        {
          type: 'h3',
          text: 'Earwigs (Forficula auricularia — European earwig)',
        },
        {
          type: 'list',
          items: [
            'Appearance: 3/4″ – 1″; reddish-brown; distinctive rear pincers (forceps); 6 legs; wings folded under short wing covers; nocturnal; moves quickly',
            'Role in garden: IMPORTANT — earwigs are omnivores. They eat plant material AND pest insects (aphids, insect eggs, soft-bodied larvae). They are considered beneficial in many situations; management is warranted only when plant damage is significant.',
            'What you see: Ragged holes in flowers, soft leaves, and seedlings; damage to corn silk and strawberry fruit; no slime trail (distinguishes from slug damage); found hiding in mulch, under boards, and in curled leaves during the day',
            'Hosts: Marigolds, dahlias, lettuces, strawberries, corn, soft-tissue seedlings; significant plant damage is most common only in dense populations',
            'Regions: Throughout the US; most populations in the western states are European earwig, introduced in the early 20th century. They are abundant and largely beneficial.',
          ],
        },
        {
          type: 'list',
          items: [
            'Organic controls (only when damage warrants): (1) Eliminate hiding places — reduce mulch depth near vulnerable plants; remove boards and debris. (2) Trap: roll up damp newspaper at night and dispose of in the morning; or use a tuna can filled with a small amount of oil — earwigs fall in and drown. (3) Diatomaceous earth around plant bases. (4) Spinosad for severe situations.',
            'Natural enemies to protect: Tachinid flies (Bigonicheta spinipennis — a specific earwig parasitoid); toads; ground beetles',
            'Cultural controls: Assess whether earwigs are actually causing significant damage before treating — they consume significant numbers of aphids and other pests and are often a net benefit. Damage from earwigs is often confused with slug damage; look for slime trails to distinguish.',
          ],
        },
        {
          type: 'h3',
          text: 'Leafhoppers (Empoasca fabae — potato leafhopper; Macrosteles quadrilineatus — aster leafhopper; many species)',
        },
        {
          type: 'list',
          items: [
            'Appearance: 1/8″ – 1/4″; wedge-shaped; green, yellow, or brown; hold wings tent-like over body; fly and hop sideways rapidly when disturbed',
            'What you see: Stippled, pale leaves; "hopperburn" (potato leafhopper) — leaf edges turn yellow then brown and curl under; stunted growth; some species vector plant diseases (aster yellows — Macrosteles spp.; beet curly top — Circulifer tenellus)',
            'Hosts: Potatoes, beans, grapes, apples, alfalfa (potato leafhopper); aster family and many ornamentals (aster leafhopper); sugar beets, tomatoes (beet leafhopper)',
            'Regions: Potato leafhopper: eastern US; migrates north from the Gulf Coast each spring; particularly severe in the Midwest and Northeast on potatoes and beans. Aster leafhopper: throughout the US.',
          ],
        },
        {
          type: 'list',
          items: [
            'Organic controls: (1) Insecticidal soap applied to leaf undersides where nymphs feed. (2) Pyrethrin. (3) Neem oil as a deterrent. (4) Row cover prevents infestation on beans and potatoes.',
            'Natural enemies to protect: Anagrus epos parasitic wasp (attacks leafhopper eggs in grape vineyards); spiders; minute pirate bugs; assassin bugs',
            'Cultural controls: Reflective silver mulch significantly reduces leafhopper landing. Monitor with yellow sticky traps. Remove weeds that serve as leafhopper reservoirs. For aster yellows disease: remove infected plants immediately (there is no cure) and control the leafhopper vector in susceptible plantings.',
          ],
        },
        {
          type: 'h3',
          text: 'Leafminers (Liriomyza sativae, Agromyza spp., Phyllocnistis citrella, and many other species)',
        },
        {
          type: 'list',
          items: [
            'What they are: Larvae of small flies, moths, or beetles that mine (tunnel) between the upper and lower leaf surfaces, leaving characteristic visible trails or blotches',
            'What you see: Serpentine (winding) pale yellow-white trails or irregular blotches (depending on species) visible on the leaf surface; leaf tissue intact but pale where mined; hold the leaf to light to see the larva in early stages',
            'Hosts: Spinach, beet, chard (Pegomya spp.); beans, tomatoes, peppers (Liriomyza spp.); citrus (Phyllocnistis); columbine and many ornamentals — host specificity varies by species',
            'Regions: Different species throughout the US. Liriomyza vegetable leafminer is most prevalent in California, Florida, and the South. Columbine leafminer affects ornamentals throughout the eastern US.',
          ],
        },
        {
          type: 'list',
          items: [
            'Organic controls: (1) Spinosad — most effective; must be applied when adults are flying, as eggs and larvae inside the leaf are protected from contact sprays. (2) Neem oil as a deterrent to adult egg-laying. (3) Remove and destroy mined leaves — the larvae are inside; removing them removes the pest. (4) Yellow sticky traps to capture adult flies and reduce egg-laying.',
            'Natural enemies to protect: Diglyphus isaea parasitic wasp — a highly effective natural enemy of leafminer larvae; present naturally in gardens; can be purchased commercially for greenhouse use',
            'Cultural controls: Row cover prevents adult egg-laying. If a mine is still active (larva visible inside), squish the end of the mine to kill the larva before removing the leaf. Avoid broad-spectrum spraying that kills D. isaea.',
          ],
        },
        {
          type: 'tip',
          emoji: '🐸',
          text: 'A single toad can eat up to 100 insects, slugs, and other invertebrates per night — every night of the growing season. Encourage toads by providing a shallow water dish at ground level, leaving some areas of bare moist soil for burrowing, and placing a broken clay pot as a daytime shelter. Avoid pesticide use near toad habitat; amphibians absorb chemicals through their skin and are highly vulnerable to even organic sprays.',
        },
      ],
    },
    {
      id: 'vertebrate-pests',
      title: 'Section 7: Vertebrate Pests — Deer, Rabbits, Voles, Gophers & Birds',
      blocks: [
        {
          type: 'p',
          text: 'Vertebrate pests — mammals and birds — are among the most frustrating garden challenges because they are mobile, intelligent, persistent, and often legally protected. Management relies primarily on exclusion (physical barriers), deterrents, and habitat modification rather than lethal control, which is regulated by state and federal wildlife laws. Always verify local regulations before attempting to trap or relocate any vertebrate pest.',
        },
        {
          type: 'table',
          headers: ['Pest', 'Evidence', 'Most Effective Organic Controls', 'Regional Notes'],
          rows: [
            [
              'Deer (Odocoileus virginianus, O. hemionus)',
              'Ragged, torn plant material (deer lack upper incisors so they tear rather than cut cleanly); browsed stems 1–6 feet high; hoof prints; deer droppings (oval pellets); damage worst in early morning and evening',
              '(1) Physical exclusion: the ONLY reliable control — 8-foot fence; electric fence with bait; double-fencing 4–5 feet apart (deer are reluctant to jump into a narrow space). (2) Individual plant cages or row cover for vegetables. (3) Commercial repellents (Plantskydd, Deer Off, Liquid Fence) require frequent reapplication; habituation reduces long-term effectiveness. (4) Plant resistant species: deer avoid plants with strong fragrance (lavender, sage, yarrow, catmint), hairy or prickly texture (lamb\'s ear, globe thistle), or toxicity (foxglove, daffodil).',
              'White-tailed deer: eastern and central US and Pacific Northwest. Mule deer: western US and Rocky Mountain states. Deer pressure is highest in suburban and rural interfaces; populations have increased significantly in the past 30 years as predators have declined.',
            ],
            [
              'Rabbits (Sylvilagus floridanus and related species)',
              'Clean, angled 45-degree cuts on stems (rabbits have sharp incisors; clean cuts vs. deer\'s torn ones); browsed stems 12–18 inches high; small round black droppings; damage worst in early morning and evening; damage also occurs in winter on bark of young trees',
              '(1) Hardware cloth fencing: 24–30 inches tall, buried 6 inches in the ground; 1-inch mesh or smaller. (2) Individual plant guards (wire cylinders) around transplants and young perennials. (3) Tree guards on young trees from October through March to prevent bark girdling in winter. (4) Commercial repellents (blood meal, predator urine) require frequent reapplication. (5) Eliminate brush piles and dense cover where rabbits shelter.',
              'Cottontail rabbits throughout the US; snowshoe hare in northern states and Canada. Jackrabbits in the West. Rabbit damage is most severe in new gardens and in late winter when other food is scarce.',
            ],
            [
              'Voles (Microtus spp. — meadow voles and others)',
              'Runways (1–2 inch wide paths in lawn and mulch); girdled roots and bark at the soil line (gnawed in a rough, jagged pattern); plants that pull out easily with no root system attached; damage to turf visible as dead patches in spring; evidence found in winter under snow cover',
              '(1) Cylinder hardware cloth around vulnerable plant stems, buried 6 inches deep and extending 12–18 inches above ground. (2) Reduce mulch depth near plant crowns (deep mulch creates vole runways and nesting sites). (3) Keep lawn mowed; eliminate dense ground covers near garden areas. (4) Castor oil-based repellents. (5) Encourage natural predators: hawks, owls (install owl boxes), foxes, weasels.',
              'Meadow voles are distributed throughout most of the US; pine voles in the East. Populations cycle dramatically every 3–5 years. Worst damage occurs in fall and winter under mulch and snow where voles are concealed from predators.',
            ],
            [
              'Pocket Gophers (Thomomys spp., Geomys spp.)',
              'Fresh mounds of fine, fan-shaped soil pushed to the surface from below; crescent-shaped mound typical of gopher vs. round mole mound; plants disappear as if pulled from below; roots of perennials, bulbs, and vegetables eaten underground',
              '(1) Wire baskets: line planting holes with 1/2-inch hardware cloth for individual plants and bulbs. (2) Underground wire mesh barriers: 1/2-inch hardware cloth buried 2 feet deep along bed perimeters. (3) Vibration deterrents with variable effectiveness. (4) Castor oil granules repel moles and gophers with moderate effectiveness. (5) Planting deterrents: gopher spurge (Euphorbia lathyris) around garden perimeter — evidence is mixed.',
              'Western states (Pacific Coast to the Great Plains) have the most gopher diversity and pressure; some species in the South. Pocket gophers are solitary and territorial — one individual typically creates all the damage in an area.',
            ],
            [
              'Birds (Various species)',
              'Peck wounds in fruit and berries; seeds dug from planting rows; entire seedlings pulled; corn silk pulled; tomatoes with clean circular holes; strawberries partially eaten',
              '(1) Physical netting over berry bushes, strawberry beds, and fruit trees (must be properly secured or birds get under it). (2) Row cover over vegetable seedlings. (3) Reflective tape or holographic ribbon strung near vulnerable plants. (4) Scare devices (owls, hawks, balloons with eye patterns) — effective for 1–2 weeks before habituation; move regularly. (5) Grow extra for sharing — a pragmatic approach.',
              'Bird damage varies enormously by region, season, and crop. Starlings and robins: major strawberry and cherry pests. American goldfinch and house finch: sunflower seeds. Corvids (crows, jays): corn. Cedar waxwing flocks: berry crops.',
            ],
          ],
        },
        {
          type: 'tip',
          emoji: '🦌',
          text: 'The only truly reliable deer control is an 8-foot physical fence. Repellents, scare devices, and plant selection reduce pressure but never eliminate it — especially when deer are hungry in late winter. For vegetable gardens, a 6-foot fence with an outward-angled overhang, or a double-fence system (two 4-foot fences spaced 4–5 feet apart), can deter deer at lower cost than a single tall fence.',
        },
      ],
    },
    {
      id: 'beneficial-insects',
      title: 'Section 8: Beneficial Insects — Your Most Important Allies',
      blocks: [
        {
          type: 'p',
          text: 'An estimated 97 percent of insect species are either beneficial to gardens or are neutral. Only 3 percent of insects are garden pests. The gardener who understands this invests in supporting beneficial insect populations rather than spraying broadly against the minority that cause damage. A garden rich in beneficial insects has dramatically fewer pest problems than one managed primarily with pesticides — including organic pesticides — that disrupt the natural enemy community.',
        },
        {
          type: 'h3',
          text: 'How to Attract and Support Beneficial Insects',
        },
        {
          type: 'list',
          items: [
            'Plant for nectar and pollen: Adult beneficial insects (including parasitic wasps, hoverflies, lacewings, and predatory bugs) feed on nectar and pollen as adults. A diverse planting of small-flowered plants in the carrot family (Daucus, Coriandrum, Anethum, Ammi), composite family (Achillea, Echinacea, Coreopsis, Cosmos), and mint family (Salvia, Nepeta, Monarda) provides the resources these insects need to establish and reproduce in your garden.',
            'Avoid broad-spectrum pesticides: Every application of pyrethrin, neem oil, or insecticidal soap that contacts beneficial insects reduces their populations. Use organic pesticides only when necessary, in targeted spot applications, in the evening after bee activity, and only on the specific plant that has a pest problem. The beneficial insect community recovers more slowly than pest populations after disruption.',
            'Provide habitat: Beneficial insects need shelter, overwintering sites, and water. Leaving some stems standing through winter (hollow stems house native bees); keeping a brush pile or rock pile at the garden\'s edge; providing a shallow water source; and tolerating some \'weedy\' areas that flower early provide habitat that a purely manicured garden cannot.',
            'Tolerate low pest populations: Some pest presence is necessary to maintain a population of natural enemies. A garden with zero pests has nothing for the beneficial insects to eat; they leave. A garden with a low, controlled pest population maintains the natural enemy community that provides free, ongoing pest suppression. The goal is not zero pests; it is pests below the level of significant damage.',
          ],
        },
        {
          type: 'h3',
          text: 'Key Beneficial Insects: Identification & Value',
        },
        {
          type: 'table',
          headers: ['Beneficial Insect', 'Appearance & ID', 'What It Controls', 'How to Support It'],
          rows: [
            [
              'Ladybug / Lady Beetle (Coccinellidae family)',
              'Round, domed beetles; classic red with black spots (Coccinella septempunctata) but also orange, yellow, or black with varying spot patterns. Larvae: alligator-shaped, gray-orange with orange spots; often overlooked and mistakenly killed.',
              'Aphids (primary prey; adult and larva each consume hundreds per day); scale crawlers; mites; small caterpillars; eggs of many pests. One larva consumes 400 aphids before pupating.',
              'Plant carrot-family flowers for adult nectar. Avoid broad-spectrum pesticides. Do not purchase and release ladybugs — commercially sold Hippodamia convergens are wild-collected; most disperse within days of release and are often diseased; supporting native populations is more effective.',
            ],
            [
              'Green Lacewing (Chrysoperla spp., Chrysopa spp.)',
              'Adults: delicate, pale green with large net-veined wings and golden eyes; 3/4″; nocturnal; attracted to lights. Larvae: 1/4″–3/8″; alligator-shaped; tan and brown with sickle-shaped jaws; voracious and aggressive.',
              'Larvae consume aphids, thrips, mites, whitefly nymphs, leafhopper nymphs, small caterpillars, insect eggs. Called \'aphid lions.\' Adults primarily feed on nectar and pollen.',
              'Plant carrot-family and composite flowers. Provide structural diversity (tall plants, ground covers, woody plants). Lacewing eggs can be purchased and released effectively — one of the few commercially available beneficials where releases are genuinely cost-effective.',
            ],
            [
              'Parasitic Wasps (Braconidae, Ichneumonidae, Trichogrammatidae, Chalcididae — many families)',
              'Most are tiny (1/16″ – 1/4″) and easily mistaken for gnats or small flies. Non-stinging (females can technically sting but virtually never do; too small to penetrate skin).',
              'Each species parasitizes specific host pests: Cotesia congregata on hornworms; Aphidius spp. on aphids (mummified brown aphids are evidence); Trichogramma on moth and butterfly eggs; Encarsia formosa on whitefly; Aphelinus on aphids. Collectively control the majority of chewing and sucking pest species in a healthy garden.',
              'Plant carrot family (dill, fennel, cilantro, Bishop\'s weed, Queen Anne\'s lace) for adult nectar — these plants are most important for supporting parasitic wasp populations. Trichogramma can be purchased and released effectively for caterpillar control.',
            ],
            [
              'Ground Beetles (Carabidae family)',
              '1/4″ – 1″; dark brown to black; shiny; fast-running on the ground; nocturnal hunters. Many species have colorful, iridescent wing covers.',
              'Generalist predators; consume cutworms, slugs, slug eggs, caterpillar pupae, cabbage root fly eggs, flea beetle larvae and pupae, weed seeds, aphids that fall to the ground. One of the most valuable and underappreciated beneficial insects.',
              'Provide permanent ground cover (mulch, ground covers, low shrubs) where ground beetles can shelter during the day. Avoid tilling (destroys pupae and disrupts populations). Maintain perennial plantings at garden edges.',
            ],
            [
              'Minute Pirate Bug (Orius spp.)',
              '1/16″ – 1/8″; black and white patterned; oval; fast-moving; found inside flowers and on plant surfaces. Can deliver a noticeable bite to human skin.',
              'Thrips (one of the few natural enemies that significantly suppresses thrips populations); spider mites; insect eggs; aphids; small caterpillars. Both adults and nymphs are predatory.',
              'Plant carrot-family and composite flowers. Orius populations develop in gardens with diverse flowering plants and low pesticide use. Commercially available for release in greenhouses and high-value crops.',
            ],
            [
              'Hoverflies / Flower Flies (Syrphidae family)',
              'Often bee or wasp mimics (yellow and black striped); 1/4″ – 3/4″; distinctively hover in place in mid-air (unlike bees, they can hover stationary). Adults pollinate; larvae have no legs.',
              'Larvae of many species are aphid predators — a single larva consumes hundreds of aphids. Adults are important pollinators second only to bees.',
              'Plant carrot-family and composite flowers for adult nectar. Hoverflies are among the most abundant beneficial insects in gardens with diverse plantings.',
            ],
            [
              'Spiders (Order Araneae — many species)',
              '8 legs (distinguishes from insects which have 6); wide variety of body forms; web-building and hunting species both present in gardens.',
              'Generalist predators; collectively consume an enormous number of insects including many pest species. Wolf spiders, crab spiders, jumping spiders, and orb weavers all contribute to garden pest suppression.',
              'Protect spiders wherever found in the garden. Avoid broad-spectrum sprays. Mulch and perennial plantings provide shelter. Most garden spider species are harmless to humans; very few (black widow in the West and South; brown recluse in the South/Midwest) require caution.',
            ],
          ],
        },
        {
          type: 'tip',
          emoji: '🌼',
          text: 'The single most impactful thing you can do for beneficial insects is plant a continuous succession of small-flowered plants from early spring through fall frost. Dill, fennel, cilantro allowed to bolt, sweet alyssum, phacelia, buckwheat, and native asters collectively support parasitic wasps, hoverflies, lacewings, and predatory bugs better than any commercial release program. A 4-foot border of these plants around or within the vegetable garden is enough to make a measurable difference.',
        },
      ],
    },
    {
      id: 'crop-by-crop',
      title: 'Section 9: Crop-by-Crop Pest Reference',
      blocks: [
        {
          type: 'p',
          text: 'This section provides a quick reference for the most important pests affecting each major vegetable and fruit crop, with first-response organic control recommendations. For detailed control information, refer to the pest profile sections earlier in this guide.',
        },
        {
          type: 'table',
          headers: ['Crop', 'Primary Pests', 'First Response Organic Control', 'Prevention Priority'],
          rows: [
            [
              'Tomatoes',
              'Hornworm, aphids, whitefly, Colorado potato beetle (in rotation areas), tomato fruitworm, stink bugs, thrips (TSWV vector)',
              'Hornworm: hand-pick; Bt. Aphids: water spray; insecticidal soap. Fruitworm: spinosad; Bt.',
              'Deep planting; heavy mulch for splash prevention; drip irrigation; resistant varieties (VFN codes); crop rotation',
            ],
            [
              'Cucumbers',
              'Cucumber beetles (bacterial wilt vector), aphids, spider mites, squash bugs',
              'Cucumber beetle: ROW COVER until flowering (bacterial wilt prevention is the priority); kaolin clay; pyrethrin. Aphids: water spray; insecticidal soap.',
              'Row cover from transplanting through bloom is the single most important action; grow resistant varieties (\'Diva,\' \'Marketmore\')',
            ],
            [
              'Squash & Zucchini',
              'Squash vine borer, squash bugs, cucumber beetles, aphids',
              'SVB: row cover until flowering; time plantings to avoid peak flight; inject Bt into stem at entry holes. Squash bugs: hand-pick egg masses on leaf undersides (orange-brown eggs in clusters).',
              'Row cover; plant timing to avoid SVB flight peak; grow resistant varieties (\'Butternut\' more resistant than \'Acorn\')',
            ],
            [
              'Beans (snap, dry)',
              'Mexican bean beetle, bean leaf beetle, aphids, Japanese beetles, bean leaf miner, spider mites',
              'Mexican bean beetle: hand-pick; Bt; spinosad. Japanese beetles: hand-pick in morning. Aphids: water spray.',
              'Rotate bean family crops; avoid overhead irrigation; maintain plant vigor',
            ],
            [
              'Brassicas (all)',
              'Imported cabbageworm, cabbage looper, diamondback moth larvae, aphids (gray cabbage aphid), flea beetles, root maggots (fly larvae in roots)',
              'Row cover (most important prevention). Bt kurstaki for caterpillars. Insecticidal soap for aphids.',
              'Row cover from seeding/transplanting; monitor for butterfly egg-laying; crop rotation to a new bed each year (root maggot management)',
            ],
            [
              'Potatoes',
              'Colorado potato beetle, wireworm (tubers), potato leafhopper, aphids (potato virus vectors)',
              'CPB: hand-pick; Bt tenebrionis; spinosad; kaolin. Leafhopper: row cover; insecticidal soap.',
              'Crop rotation; plant certified seed potatoes; hill regularly; choose blight-resistant varieties in humid regions',
            ],
            [
              'Peppers',
              'Aphids (mosaic virus vectors), European corn borer (fruit entry), pepper weevil (southern US), thrips (TSWV vector), flea beetles',
              'Aphids: water spray; insecticidal soap (critical to prevent virus spread). Corn borer: Bt; spinosad. Thrips: spinosad; blue sticky traps.',
              'Row cover for seedlings; reflective mulch reduces aphid and thrips landing; inspect new transplants before field planting',
            ],
            [
              'Lettuce & Greens',
              'Aphids (gray aphid in lettuce); slugs; cabbage loopers; leafminers; earwigs (minor)',
              'Slugs: iron phosphate bait. Aphids: water spray; reflective mulch. Caterpillars: Bt.',
              'Row cover; inspect transplants; avoid overly moist conditions; use slug bait preventively in wet seasons',
            ],
            [
              'Onions & Garlic',
              'Onion thrips (major pest vectoring iris yellow spot virus); onion maggot (fly larva damaging bulbs); onion leafminer',
              'Thrips: spinosad; insecticidal soap; blue sticky traps. Onion maggot: row cover from transplanting.',
              'Row cover is the most effective prevention for onion maggot; resistant varieties for thrips tolerance where available',
            ],
            [
              'Strawberries',
              'Strawberry clipper weevil, tarnished plant bug, spider mites, slugs, birds, gray mold (Botrytis)',
              'Spider mites: water spray; neem; predatory mites. Slugs: iron phosphate bait. Birds: netting.',
              'Mulch with straw to reduce soil splash; remove old leaves and runners for air circulation; use netting for bird control',
            ],
            [
              'Apples / Pears',
              'Codling moth (larvae in fruit), apple maggot (fly larvae), fire blight (bacterial), aphids, scale, mites',
              'Codling moth: spinosad timed to petal fall; kaolin clay starting at bloom. Apple maggot: sticky red sphere traps; kaolin clay. Scale: dormant oil in early spring.',
              'Dormant oil spray in late winter for scale and mites; good sanitation (remove mummified fruit); fire blight-resistant varieties',
            ],
            [
              'Roses',
              'Japanese beetles, aphids, black spot (fungal), spider mites, thrips, rose slug (sawfly larvae)',
              'Japanese beetle: hand-pick in morning. Aphids: water spray; ladybugs. Black spot: neem oil; copper. Spider mites: water spray to undersides.',
              'Choose disease-resistant varieties (shrub roses, Knock Out series); proper spacing for air circulation; water at base; mulch',
            ],
          ],
        },
        {
          type: 'tip',
          emoji: '🥒',
          text: 'For cucumber beetles, row cover applied at transplanting and removed only at first bloom is more effective than any spray program. Cucumber beetles vector bacterial wilt — once a plant is infected, there is no cure and the plant must be removed. Prevention through exclusion is the only reliable strategy. Choose row cover over any other cucumber beetle control.',
        },
      ],
    },
    {
      id: 'seasonal-calendar-ipm',
      title: 'Section 10: Seasonal Pest Calendar & IPM Decision Framework',
      blocks: [
        {
          type: 'p',
          text: 'Pest management is most efficient when it is anticipatory rather than reactive. The following seasonal calendar helps you prepare for predictable pest pressure before it peaks, and the IPM (Integrated Pest Management) framework provides a decision structure for choosing the most appropriate response to any pest situation.',
        },
        {
          type: 'table',
          headers: ['Season / Timing', 'Key Pest Events', 'Monitoring Priorities', 'Anticipatory Actions', 'Region Notes'],
          rows: [
            [
              'Late Winter / Early Spring (Before planting)',
              'Scale crawlers emerging on fruit trees; overwintering egg masses hatching; aphid queens emerging from overwintering sites; white grubs becoming active in lawns as soil warms',
              'Inspect fruit trees for scale; check ornamentals for overwintering egg masses (cottony masses, clusters of scale)',
              'Apply dormant oil to fruit trees and ornamentals for scale and mite eggs (before buds break). Order row cover and other supplies. Inspect seed-starting areas for fungus gnats.',
              'Zone 3–4: April–May. Zone 7–8: February–March. Pacific Northwest: watch for slug pressure immediately as conditions warm.',
            ],
            [
              'Spring (Planting season)',
              'Flea beetles emerge and attack seedlings; cabbage white butterflies begin laying eggs on brassicas; aphid populations build on new growth; cutworms active at transplanting; cucumber beetles emerge',
              'Inspect seedlings daily for flea beetle holes. Check brassica leaf undersides for cabbageworm eggs. Monitor aphid levels on new growth weekly.',
              'Apply row cover immediately on brassica and cucumber transplants. Use cutworm collars on all tomato, pepper, and cabbage transplants. Plant pest-repelling companion flowers (nasturtium, dill, fennel). Begin monitoring with sticky traps.',
              'Flea beetles are most severe in cool spring weather. Cutworm damage peaks at transplanting. Cucumber beetles emerge when soil temp reaches 60°F.',
            ],
            [
              'Early Summer (Pre-heat)',
              'Japanese beetles emerge (eastern US); squash vine borer adult flight begins; hornworm eggs hatching on tomatoes; Colorado potato beetle at peak larval stage; cucumber beetle populations building; leafhopper migration northward',
              'Scout tomatoes twice weekly for hornworm frass and feeding. Monitor squash vine bases for SVB entry holes and frass. Check potato and eggplant for CPB egg masses on leaf undersides. Watch for Japanese beetle emergence.',
              'Apply Bt to brassicas on schedule if cabbageworms are present. Hand-pick hornworms on tomatoes. Squash: inspect stem bases weekly; begin SVB management. CPB: begin Bt tenebrionis or hand-picking as egg masses appear.',
              'Japanese beetles: peak emergence typically late June to July in the Midwest and East. SVB flight peaks in late June – July in most regions. Monitor for squash bug egg masses simultaneously.',
            ],
            [
              'Midsummer (Peak pest season)',
              'Highest pest diversity and pressure; spider mites peak in hot, dry conditions; corn earworm active on corn; thrips populations peak; stink bug nymphs (eastern US) begin feeding on fruit; squash bug populations building',
              'Check leaf undersides for spider mites twice weekly. Monitor corn silks for earworm. Scout pepper and tomato fruit for stink bug feeding scars. Check squash for squash bug nymphs (gray, wingless, on leaf undersides).',
              'Increase irrigation frequency if needed to reduce mite pressure (water-stressed plants are more susceptible). Apply corn earworm controls to silk at silk emergence. Squash bugs: hand-pick egg masses; pyrethrin if severe.',
              'Mite pressure is highest in the Southwest, Plains states, and wherever conditions are hot and dry. Stink bugs are most severe in the mid-Atlantic states and spreading westward.',
            ],
            [
              'Late Summer / Early Fall (Harvest and transition)',
              'Pest pressure generally declining; second generation of cucumber beetles, aphids, and whitefly still active; corn earworm migrates south on storm fronts; beneficials at their highest populations',
              'Monitor fall brassicas for cabbageworm and looper. Check squash and cucumber for powdery mildew. Inspect stored bulbs and tubers for wireworm and slug damage.',
              'Remove spent crops promptly — old plants harbor pests and disease inoculum. Plant overwintering cover crops. Apply insect controls to fall brassicas if needed. Encourage beneficial insect populations by leaving flowering plants standing.',
              'Fall brassicas planted in August–September may face renewed aphid and caterpillar pressure as the season cools. Beneficial insect populations are at their annual peak in late summer — an excellent time to observe natural enemy activity.',
            ],
          ],
        },
        {
          type: 'h3',
          text: 'The IPM Decision Framework: What to Do When You Find a Pest',
        },
        {
          type: 'p',
          text: 'Integrated Pest Management (IPM) is the decision framework used by professional growers, cooperative extension services, and the most effective home gardeners. It prioritizes the least disruptive effective control at every step, escalating to more intensive interventions only when necessary.',
        },
        {
          type: 'list',
          items: [
            'Identify the pest correctly: Do not treat until you know what you are treating. Misidentification leads to using the wrong product, harming beneficial insects, and wasting money. Use the symptom key in Section 1, the pest profiles in Sections 2–7, and your state extension service resources.',
            'Assess the damage level: Is the damage significant? A few aphids on a healthy plant are being managed by natural enemies and do not require intervention. A colony of aphids covering all new growth on a stressed plant requires action. The threshold question: is the pest present at a level that will cause meaningful damage if left unmanaged?',
            'Consider the context: Is the plant at a vulnerable stage (seedling, transplant shock, fruit set) or a more resilient stage (established, mature)? Are beneficial insects present? Is this an isolated problem or widespread? What is the weather trend — will conditions favor or disfavor the pest?',
            'Apply cultural and physical controls first: Can you remove the pest by hand? Apply a water spray? Apply row cover? Improve conditions to reduce pest favorability? These actions have no risk to beneficial insects and no pesticide resistance potential.',
            'Apply targeted organic pesticides if necessary: Choose the most specific, least disruptive product effective against the identified pest. Bt is highly specific to its target and has no effect on beneficial insects; use it before broad-spectrum products like pyrethrin. Apply in the evening; target only affected plants or plant sections.',
            'Evaluate and adjust: Did the treatment work? If not, why not? Was the identification correct? Was the product applied at the right time and in the right way? Adjust the approach based on observed results.',
          ],
        },
        {
          type: 'tip',
          emoji: '🐛',
          text: 'The goal is not zero pests but a garden in which the pest community is in balance with the natural enemy community — where pest populations fluctuate but rarely cause significant, sustained damage. This balance is achieved not primarily by application of organic pesticides, but by investing in the conditions that support natural enemies: diverse flowering plants, permanent ground covers, and tolerance of the low pest populations that the natural enemy community needs to persist. The gardener who consistently sprays every time they see a pest will have more pest problems over time, not fewer. Observe first. Identify accurately. Tolerate what can be tolerated. Intervene specifically when necessary. Support your allies.',
        },
      ],
    },
  ],
}
