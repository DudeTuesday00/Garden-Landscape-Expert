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
  ],
}
