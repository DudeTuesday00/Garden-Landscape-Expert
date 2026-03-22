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
  ],
}
