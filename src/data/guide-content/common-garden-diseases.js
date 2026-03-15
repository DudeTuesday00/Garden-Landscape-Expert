export const commonGardenDiseasesContent = {
  id: 'common-diseases',
  hero: {
    emoji: '🔬',
    title: 'Common Garden Diseases',
    subtitle: 'Identify and Treat Powdery Mildew, Blight, Rust, and Other Plant Diseases',
  },
  intro: 'Plant disease diagnosis is a detective process: you observe symptoms, consider the conditions, eliminate alternative explanations, and arrive at the most likely cause. This guide is organized to support that process — beginning with a rapid-reference symptom key, then covering the major disease categories in depth, with detailed profiles of the most common and damaging diseases in each category. Treatment recommendations emphasize integrated pest management (IPM): cultural and physical controls first, biological controls second, and synthetic fungicides or bactericides only when necessary.',
  sections: [
    {
      id: 'rapid-symptom-key',
      title: 'Rapid Symptom Key: Where to Start Your Diagnosis',
      blocks: [
        {
          type: 'p',
          text: 'Use this table to narrow down the most likely cause based on what you observe. Match what you see to the "What You See" column, then note which section covers that disease in depth.',
        },
        {
          type: 'table',
          headers: ['What You See', 'Where on the Plant', 'Most Likely Cause', 'Section'],
          rows: [
            ['White powdery coating on leaf surface', 'Upper leaf surface primarily; also stems', 'Powdery mildew (fungal)', 'Section 2'],
            ['White-gray fuzzy growth on leaf underside', 'Lower leaf surface; in humid conditions', 'Downy mildew (oomycete) or gray mold (Botrytis)', 'Sections 2, 3'],
            ['Yellow-brown or orange pustules on leaves', 'Upper or lower leaf surfaces in distinct raised spots', 'Rust (fungal)', 'Section 2'],
            ['Brown or black spots on leaves with yellow halos', 'Scattered across leaf surface; may merge', 'Bacterial leaf spot, Cercospora, or Septoria leaf spot', 'Sections 2, 4'],
            ['Dark water-soaked lesions on leaves or stems', 'Often on lower leaves first, spreading upward', 'Late blight (oomycete) or bacterial blight', 'Sections 2, 4'],
            ['Wilting that does not recover after watering', 'Whole plant or one side; vascular browning visible in stem cross-section', 'Fusarium wilt or Verticillium wilt (soilborne fungal)', 'Section 5'],
            ['Crown or stem rotting at soil line', 'Stem base; crown of plant', 'Crown rot, collar rot, Pythium, or Sclerotinia', 'Section 5'],
            ['Roots brown, mushy, or with dark lesions', 'Root system; visible when plant is dug', 'Root rot (Pythium, Phytophthora, Fusarium)', 'Section 5'],
            ['Mosaic pattern: light green/yellow patches on leaves', 'Irregular across the entire leaf; leaf may be distorted', 'Mosaic virus (multiple viral pathogens)', 'Section 6'],
            ['Leaves curled, distorted, stunted, or streaked', 'New growth primarily; may have ringspot patterns', 'Viral disease; check for aphid or thrips vectors', 'Section 6'],
            ['Fire-killed branch tips; shepherd\'s crook shape', 'Branch tips; spreads toward main trunk', 'Fire blight (bacterial)', 'Section 4'],
            ['Cankers: sunken, dead areas on bark or stems', 'Branches or trunk; defined dead areas', 'Canker diseases (fungal or bacterial)', 'Section 4'],
            ['Galls: abnormal growths on roots or crown', 'Root crown area; rough, irregular masses', 'Crown gall (bacterial)', 'Section 4'],
            ['Sooty black coating on leaf surface', 'Leaf upper surface; wipes off; follows insect infestations', 'Sooty mold (secondary fungal growth on honeydew)', 'Section 2'],
            ['Damping off: seedlings collapsing at soil line', 'Stem at or below soil surface; seedlings falling over', 'Damping off (Pythium, Rhizoctonia; soilborne)', 'Section 5'],
          ],
        },
        {
          type: 'tip',
          emoji: '🔬',
          text: 'A confident visual diagnosis is not always possible without laboratory testing. Your state\'s cooperative extension service plant disease diagnostic laboratory can test tissue samples for a definitive diagnosis, typically for $10–25. For significant or spreading problems, a laboratory diagnosis is worth the cost.',
        },
      ],
    },

    {
      id: 'understanding-disease',
      title: 'Section 1: Understanding Plant Disease',
      blocks: [
        {
          type: 'p',
          text: 'Plant diseases are caused by pathogens — disease-causing organisms — that fall into four main categories: fungi, bacteria, viruses, and nematodes. Oomycetes (water molds, including the organisms that cause late blight and downy mildew) were historically classified as fungi but are now understood to be a distinct group that requires different management approaches. Each category has distinct biology, mode of infection, and effective treatment options.',
        },
        {
          type: 'h3',
          text: 'The Four Major Pathogen Categories',
        },
        {
          type: 'table',
          headers: ['Pathogen Type', 'Biology', 'How They Spread', 'How They Infect', 'Treatability'],
          rows: [
            ['Fungi', 'Eukaryotic organisms that reproduce by spores; the largest category of plant pathogens; includes powdery mildew, rusts, blights, leaf spots, anthracnose, and many more', 'Wind, water splash, tools, insects, contaminated soil and plant material', 'Spores land on susceptible tissue; germinate in appropriate conditions; penetrate through natural openings or wounds', 'Good: fungicides are effective for many fungal diseases; cultural practices highly effective for prevention'],
            ['Oomycetes (water molds)', 'Superficially resemble fungi but are more closely related to brown algae; cell walls contain cellulose rather than chitin; require free water to sporulate; include Phytophthora, Pythium, Peronospora (downy mildew)', 'Water splash, irrigation, soil movement, contaminated plant material; spores are water-dispersed', 'Require free water to produce and release zoospores; penetrate through stomata or root surfaces', 'Moderate: many standard fungicides do NOT work on oomycetes (they lack chitin). Specific phosphonate or mandipropamid products required.'],
            ['Bacteria', 'Prokaryotic organisms; plant-pathogenic bacteria include Pseudomonas, Xanthomonas, Erwinia, Agrobacterium, and Clavibacter; enter through wounds, stomata, or insect vectors', 'Splashing water, insects (especially aphids and leafhoppers), contaminated tools, infected seed, wind-driven rain', 'Enter through natural openings (stomata, lenticels), wounds, or via insect vectors; multiply in intercellular spaces or vascular tissue', 'Limited: no systemic bactericide equivalent to fungicide; copper-based products have suppressive activity; prevention and sanitation are primary management tools'],
            ['Viruses', 'Obligate intracellular pathogens; cannot reproduce outside a living host cell; cause mosaic patterns, distortion, stunting, and ringspot symptoms; over 1,000 plant viruses known', 'Primarily by insect vectors (aphids, thrips, whiteflies, leafhoppers); also by contaminated tools, seeds, and vegetative propagation material', 'Inserted into the plant by a vector insect feeding; or mechanically transmitted through tools and hands; replicate in plant cells and spread systemically', 'None: there is no cure for a virally infected plant. Remove and destroy infected plants. Control insect vectors to prevent spread.'],
            ['Nematodes (plant-parasitic)', 'Microscopic roundworms in soil; root-knot nematodes, cyst nematodes, and lesion nematodes are the most economically significant; create galls or lesions on roots that impair nutrient and water uptake', 'Soil, transplant material, contaminated tools, irrigation water, shoes', 'Penetrate roots directly; root-knot nematodes induce formation of galls where they feed; populations build over years in continuously cropped soil', 'Difficult: solarization, nematicide, crop rotation, and resistant varieties are primary tools; nematode populations are slow to decline once established'],
          ],
        },
        {
          type: 'h3',
          text: 'The Disease Triangle',
        },
        {
          type: 'p',
          text: 'Understanding plant disease requires understanding the disease triangle: three factors must coincide for disease to develop. A susceptible host (the plant) must be present in the right environment (the conditions the pathogen needs) at the same time as the pathogen itself. Remove any one leg of the triangle and disease does not develop. This is why the most powerful disease management strategy is always prevention through cultural practices — removing the environmental conditions that pathogens need, or choosing host plants that are resistant — rather than treatment after disease has already established.',
        },
        {
          type: 'h3',
          text: 'The Environmental Conditions That Drive Disease',
        },
        {
          type: 'p',
          text: 'Most plant diseases require specific environmental conditions to develop. Temperature and moisture are the two most important environmental variables.',
        },
        {
          type: 'list',
          items: [
            'Temperature: Each pathogen has an optimal temperature range for infection and sporulation. Powdery mildew favors warm, dry days and cool nights (65–80°F daytime). Late blight (Phytophthora infestans) is most aggressive at 50–70°F with high humidity. Bacterial diseases generally favor warm, wet conditions. Knowing your local climate patterns helps anticipate which diseases will be most problematic in your region.',
            'Moisture: Free water on plant surfaces — from rain, overhead irrigation, dew, or fog — is required for most fungal spores to germinate and for most bacteria to infect through stomata. Keeping foliage dry is one of the most effective disease prevention strategies. Exception: powdery mildew thrives in dry, warm conditions and is actually suppressed by rain (which washes off spores).',
            'Humidity: Relative humidity above 85% is required for sporulation of many fungal pathogens. Dense, overcrowded plantings create microclimates of elevated humidity even when the ambient humidity is moderate. Proper plant spacing and pruning for air circulation is a genuine disease management tool.',
            'Plant stress: Stressed plants are universally more susceptible to disease. Water stress, nutrient deficiency, root damage, cold injury, and heat stress all compromise the plant\'s natural defenses. A well-grown plant in appropriate conditions resists infection that would rapidly establish in a stressed specimen.',
          ],
        },
        {
          type: 'h3',
          text: 'Disease Prevention: The Foundation of Management',
        },
        {
          type: 'p',
          text: 'For most garden diseases, prevention through cultural practices is far more effective than any treatment after disease has established. Once a systemic fungal or bacterial disease has moved through the vascular tissue, no spray treatment will cure it. The following practices form the foundation of disease management in any garden:',
        },
        {
          type: 'list',
          items: [
            'Site selection and spacing: Plant in appropriate sun and drainage conditions. Space plants to allow good air circulation — the spacing recommendations on seed packets and transplant tags reflect not just mature plant size but also the airflow needed to prevent disease.',
            'Resistant varieties: The most powerful disease management tool. Modern vegetable, fruit, and ornamental varieties with disease resistance have been bred specifically to resist the most economically important pathogens. Resistance codes on tomato variety labels (V = Verticillium, F = Fusarium, N = nematodes, T = tobacco mosaic virus, A = Alternaria, L = gray leaf spot) indicate which diseases the variety resists.',
            'Sanitation: Remove and dispose of diseased plant tissue immediately — do not compost it. Clean tools with a 10% bleach solution or 70% isopropyl alcohol between plants when working in a diseased area. Do not handle healthy plants after working with diseased ones without washing hands and tools.',
            'Crop rotation: Soilborne pathogens — Fusarium, Verticillium, nematodes, and some bacterial diseases — build up in soil where the same host crop is grown year after year. Rotating to unrelated plant families in a different area of the garden reduces pathogen populations over time. A three-year rotation is the standard recommendation for most vegetable diseases.',
            'Water management: Water at the base of plants rather than overhead. If overhead irrigation is used, water early in the day so foliage dries before evening. Wet foliage through the night dramatically increases disease incidence for most foliar pathogens.',
            'Mulching: A 2–3 inch layer of organic mulch prevents rain and irrigation splash from carrying soilborne pathogens up onto lower leaves — a significant route of infection for early blight, Septoria leaf spot, and many other diseases.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌱',
          text: 'The investment of time in disease prevention — choosing resistant varieties, spacing plants properly, watering at the base, rotating crops, sanitizing tools — returns far more value than the same time spent treating diseases after the fact. Good gardening practices are disease management.',
        },
      ],
    },
  ],
}
