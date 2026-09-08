export const petFriendlyPlantsContent = {
  id: 'pet-friendly-plants',
  hero: {
    emoji: '🐾',
    title: 'Pet-Friendly Plants',
    subtitle: 'Create a beautiful garden that is safe for dogs and cats — knowing which common plants are toxic and which ASPCA-approved alternatives to choose.',
  },
  intro: 'Many beloved garden plants are surprisingly toxic to dogs and cats, and the list includes some of the most popular ornamentals in American gardens. True lilies (Lilium and Hemerocallis species) cause acute kidney failure in cats — even small amounts of pollen are dangerous. Sago palm, found in landscapes across the South and Southwest, contains cycasin and is one of the most lethally toxic plants to dogs, with even a few seeds potentially fatal. Autumn crocus (Colchicum), foxglove, oleander, and azaleas round out the list of commonly planted, genuinely dangerous plants for households with pets. The good news is that for nearly every high-risk plant, there are beautiful, equally garden-worthy alternatives that pose no threat.',
  sections: [
    {
      id: 'most-dangerous-plants',
      title: 'The Most Dangerous Common Garden Plants',
      blocks: [
        {
          type: 'p',
          text: 'A small number of widely planted ornamentals account for a disproportionate share of serious pet plant poisonings — knowing these by name is the single most important step toward a genuinely pet-safe landscape.',
        },
        {
          type: 'table',
          headers: ['Plant', 'Toxic To', 'Danger Level', 'Notes'],
          rows: [
            ['True lilies (Lilium, Hemerocallis)', 'Cats especially', 'Extremely high — acute kidney failure', 'Even pollen or a few bites of leaf can be fatal to cats; no safe amount exists'],
            ['Sago palm', 'Dogs especially', 'Extremely high — liver failure', 'Seeds are most toxic; a handful of seeds can be fatal'],
            ['Oleander', 'Dogs and cats', 'High — cardiac toxicity', 'Every part of the plant is toxic, including dried clippings'],
            ['Azalea / Rhododendron', 'Dogs and cats', 'High — cardiac and digestive toxicity', 'Common foundation shrub, easy to overlook the risk'],
            ['Autumn crocus (Colchicum)', 'Dogs and cats', 'High — severe GI and organ damage', 'Often confused with the much safer true crocus (Crocus species)'],
            ['Foxglove', 'Dogs and cats', 'High — cardiac toxicity', 'Popular cottage garden plant; entire plant is toxic'],
            ['Tulip and daffodil bulbs', 'Dogs especially', 'Moderate-high', 'The bulb is far more toxic than the flower — a risk mainly during planting or if dogs dig'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'If a pet is suspected of ingesting any of these plants, contact a veterinarian or the ASPCA Animal Poison Control Center immediately rather than waiting for symptoms — for several of these plants (sago palm, true lilies), treatment delay significantly worsens the outcome.',
        },
        {
          type: 'image',
          src: '/guides/pet-friendly-plants/dog-safe-garden-bed.jpg',
          alt: 'A dog resting calmly beside a garden bed planted with safe, non-toxic flowers',
          caption: 'A small number of widely planted ornamentals — like true lilies and sago palm — account for most serious pet plant poisonings.',
        },
      ],
    },
    {
      id: 'aspca-database',
      title: 'The ASPCA Toxic and Non-Toxic Plant Database',
      blocks: [
        {
          type: 'p',
          text: 'The ASPCA maintains a comprehensive, searchable toxic and non-toxic plant database that is the authoritative resource for checking any specific plant\'s safety — before adding an unfamiliar plant to a garden shared with pets, checking this database directly is more reliable than any general list.',
        },
        {
          type: 'list',
          items: [
            'Search by common name or scientific name — some plants are toxic under one common name but not under a similar-sounding one (true lily vs. daylily vs. peace lily all have different toxicity profiles).',
            'The database covers both dogs and cats separately, since toxicity and sensitivity can differ meaningfully between the two species for a given plant.',
            'Check both the plant itself and any parts specifically called out as more dangerous (bulbs, seeds, sap) — toxicity often concentrates in one plant part rather than being uniform throughout.',
            'When in doubt about a plant not clearly listed, treat it as a potential risk and keep pets away until confirmed safe, rather than assuming safety by default.',
          ],
        },
        {
          type: 'tip',
          emoji: '🔍',
          text: 'Bookmark the ASPCA database and check any new plant purchase against it before it goes in the ground — this single habit prevents the majority of avoidable pet plant poisonings in home gardens.',
        },
        {
          type: 'image',
          src: '/guides/pet-friendly-plants/checking-plant-tag-nursery.jpg',
          alt: 'A person checking a plant identification tag while shopping at a garden nursery',
          caption: 'Checking a new plant against the ASPCA database before purchase is the most reliable way to confirm its safety.',
        },
      ],
    },
    {
      id: 'safe-alternatives',
      title: 'ASPCA-Safe Alternatives by Garden Use',
      blocks: [
        {
          type: 'p',
          text: 'For nearly every high-risk plant, a beautiful, garden-worthy, and genuinely pet-safe alternative exists that fills a similar design role — swapping is rarely a real sacrifice.',
        },
        {
          type: 'table',
          headers: ['Instead of...', 'Consider...', 'Similar Quality'],
          rows: [
            ['True lilies', 'African violets, orchids, roses, snapdragons', 'Comparable elegance and bloom impact without the extreme cat toxicity'],
            ['Foxglove', 'Penstemon, salvia', 'Similar vertical structure and strong pollinator appeal'],
            ['Azalea', 'Camellia, hydrangea (in non-toxic form/amount for most pets), abelia', 'Comparable flowering shrub role in foundation plantings'],
            ['Oleander', 'Butterfly bush, viburnum', 'Similar large flowering shrub presence for a hedge or screen'],
            ['Sago palm', 'Areca palm, parlor palm, ponytail palm (verify current ASPCA listing)', 'Similar tropical architectural form'],
            ['Autumn crocus', 'True crocus (Crocus species) — genuinely different plant, low toxicity', 'Nearly identical bloom appearance with a dramatically better safety profile'],
          ],
        },
        {
          type: 'tip',
          emoji: '🌷',
          text: 'Autumn crocus (Colchicum) and true crocus (Crocus) are frequently confused because of their similar names and appearance, but they have very different toxicity profiles — always confirm which genus a bulb belongs to before planting if pet safety is a concern.',
        },
        {
          type: 'image',
          src: '/guides/pet-friendly-plants/snapdragons-roses-safe-alternative.jpg',
          alt: 'Colorful snapdragons and roses blooming in a garden bed as pet-safe alternatives to lilies',
          caption: 'Snapdragons and roses offer comparable elegance to true lilies without the extreme toxicity risk to cats.',
        },
      ],
    },
    {
      id: 'lawn-and-turf-safety',
      title: 'Lawn Treatments and Turf Safety for Pets',
      blocks: [
        {
          type: 'p',
          text: 'Many dogs eat grass regularly, and cats and dogs alike spend significant time in direct contact with lawn areas — lawn chemical choices matter as much as ornamental plant selection for a genuinely pet-safe yard.',
        },
        {
          type: 'list',
          items: [
            'Choose pet-safe herbicide and fertilizer products, and always follow label instructions for the required waiting period before pets re-enter a treated lawn.',
            'Avoid cocoa mulch specifically — it contains theobromine, the same chemical that makes chocolate toxic to dogs, and its appealing smell can encourage dogs to eat it.',
            'Watch for and remove mushrooms promptly, since some wild mushroom species that pop up in lawns are toxic if a pet eats them.',
            'Consider a dedicated pet-safe section of lawn kept free of any chemical treatment, especially for households with dogs known to graze on grass regularly.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Cocoa mulch is one of the most commonly overlooked pet hazards in home landscaping — its chocolate-like smell specifically attracts dogs, and it contains the same toxic compound (theobromine) found in chocolate.',
        },
        {
          type: 'image',
          src: '/guides/pet-friendly-plants/dog-grazing-lawn-grass.jpg',
          alt: 'A dog eating grass in a well-maintained untreated lawn area',
          caption: 'A dedicated, chemical-free section of lawn gives dogs that graze on grass a genuinely safe patch to do so.',
        },
      ],
    },
    {
      id: 'pet-friendly-design',
      title: 'Design Strategies for Gardens Shared with Pets',
      blocks: [
        {
          type: 'p',
          text: 'Beyond plant selection, a genuinely pet-friendly garden accounts for how dogs and cats actually use outdoor space — running paths, digging instincts, and trampling patterns all factor into a design that survives real pet activity.',
        },
        {
          type: 'list',
          items: [
            'Create a dedicated digging zone (a sandbox-style area or a designated loose-soil bed) to redirect natural digging instinct away from planted beds.',
            'Use sturdy, low barriers (short decorative fencing, edging) around vulnerable young plants until they\'re established enough to withstand incidental pet traffic.',
            'Identify and reinforce the "desire path" dogs naturally wear across a yard — either accommodate it with a proper path material or redirect it with plantings that discourage the route.',
            'Provide a safe, designated grazing patch of pet-safe grass for dogs that regularly eat grass, rather than relying on them to avoid treated or ornamental areas on their own.',
            'Site outdoor cat spaces (a "catio" or supervised outdoor time) away from any toxic ornamental plantings entirely, since cats\' selective grazing behavior can bring them into contact with plants a dog might simply ignore.',
          ],
        },
        {
          type: 'tip',
          emoji: '🐕',
          text: 'A dedicated digging zone works best when it\'s genuinely more appealing than the rest of the garden — loose, easy-to-dig soil or sand, positioned somewhere the dog already likes to spend time, redirects the behavior far more reliably than simply blocking access to planted beds.',
        },
        {
          type: 'image',
          src: '/guides/pet-friendly-plants/dog-digging-zone-sandbox.jpg',
          alt: 'A dedicated sandbox-style digging zone for a dog in a backyard garden',
          caption: 'A dedicated digging zone redirects a dog\'s natural instincts away from planted beds far more reliably than simply blocking access.',
        },
      ],
    },
  ],
};
