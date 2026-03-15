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

    {
      id: 'fungal-diseases',
      title: 'Section 2: Fungal Diseases — The Most Common Plant Pathogens',
      blocks: [
        {
          type: 'p',
          text: 'Fungi cause more plant diseases than any other pathogen category — an estimated 80% of all plant diseases have a fungal cause. They range from the nearly ubiquitous and relatively mild (powdery mildew on ornamentals) to the economically devastating (late blight, which destroyed the Irish potato crop in 1845 and continues to cause significant losses in American tomato and potato production annually).',
        },

        {
          type: 'h3',
          text: 'Powdery Mildew',
        },
        {
          type: 'p',
          text: 'Powdery mildew produces a white or gray powdery fungal growth on the upper surface of leaves (occasionally stems and flowers). It starts as circular patches and expands to cover the entire leaf; severely affected leaves may yellow and drop. Unlike downy mildew (Section 3), powdery mildew is almost always on the upper leaf surface and develops in conditions of warm days and cool nights, not cool wet conditions.',
        },
        {
          type: 'p',
          text: 'Multiple distinct fungal species in the order Erysiphales cause powdery mildew on different hosts — the powdery mildew on cucumbers (Podosphaera xanthii) is a different organism from the powdery mildew on roses (Podosphaera pannosa) or squash (Golovinomyces cichoracearum). Powdery mildew fungi are largely host-specific — cucumber powdery mildew cannot infect roses, and vice versa.',
        },
        {
          type: 'p',
          text: 'Conditions that favor powdery mildew: warm days (70–85°F), cool nights, dry conditions with moderate humidity. Unlike most fungal diseases, powdery mildew does NOT require free water on the leaf surface to germinate; it can germinate in relative humidity as low as 50%. Dense plantings with poor air circulation create ideal conditions. Most susceptible plants include cucurbits (squash, cucumber, melon), roses, phlox, bee balm (Monarda), zinnia, lilac, grape, strawberry, apple, and many ornamental trees and shrubs.',
        },
        {
          type: 'p',
          text: 'Treatment: Remove heavily infected leaves (bag and dispose; do not compost). Improve air circulation by pruning. Apply potassium bicarbonate spray (most effective organic treatment; temporarily changes leaf pH to inhibit germination); neem oil; horticultural oil; or sulfur fungicide (very effective but do not apply when temperatures exceed 90°F or within 2 weeks of an oil application). For severe cases: synthetic fungicides myclobutanil, trifloxystrobin, or tebuconazole. Apply before or at first sign of disease — treatments are preventive/suppressive rather than curative.',
        },
        {
          type: 'tip',
          emoji: '🌿',
          text: 'Many vegetable and ornamental varieties have been bred for powdery mildew resistance. For squash: \'Dunja,\' \'Astia\' zucchini types; for cucumbers: \'Diva,\' \'Salad Bush\'; for phlox: \'David\' (P. paniculata); for roses: any AARS-rated shrub rose. Choosing resistant varieties is more effective than any spray program.',
        },

        {
          type: 'h3',
          text: 'Early Blight (Alternaria solani)',
        },
        {
          type: 'p',
          text: 'Early blight produces dark brown to black spots on older, lower leaves with a distinctive concentric ring pattern (the "target spot" or "bulls-eye" appearance), usually surrounded by a yellow halo. It begins on the oldest, lowest leaves and progresses upward; lesions eventually merge and affected leaves turn yellow and drop.',
        },
        {
          type: 'p',
          text: 'Conditions: warm temperatures (75–85°F), high humidity, and alternating wet and dry periods. Most severe in hot, humid regions (Southeast, mid-Atlantic, Midwest). Spreads by wind and water splash; overwinters in infected plant debris in the soil. Host range: primarily tomatoes, potatoes, and other Solanaceae (eggplant, peppers less severely).',
        },
        {
          type: 'p',
          text: 'Treatment: Begin at first symptoms. Remove and dispose of infected leaves (do not compost). Apply chlorothalonil (the most effective and widely available fungicide for early blight); copper-based fungicide (less effective but OMRI-listed for organic use); mancozeb; or azoxystrobin. Repeat applications every 7–14 days through the season. Heavy mulching to prevent soil splash reduces infection significantly.',
        },
        {
          type: 'p',
          text: 'Cultural practices: 3-year crop rotation (Alternaria survives in soil debris for 1–2 years); avoid overhead irrigation; mulch heavily; maintain good plant nutrition (nitrogen-stressed plants are more susceptible). Resistant tomato varieties: \'Mountain Supreme,\' \'Defiant,\' \'Jasper\' cherry tomato.',
        },

        {
          type: 'h3',
          text: 'Late Blight (Phytophthora infestans)',
        },
        {
          type: 'p',
          text: 'Late blight produces water-soaked, pale green to brown lesions on leaves with a greasy or water-soaked appearance at the margins; white fuzzy sporulation appears on the underside of lesions in humid conditions; lesions spread rapidly and turn brown-black; stems develop dark brown lesions; entire plants can collapse within days in favorable conditions.',
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Late blight spreads catastrophically in cool, humid conditions (50–70°F with extended leaf wetness) and affects the entire plant including newer growth — it can destroy an entire planting within a week or two. Early blight, by contrast, is a slow, steady progression from the bottom up with the characteristic "target spot" concentric rings. Late blight lesions are larger, less defined, and lack the ring pattern. Distinguish between them before choosing a management response.',
        },
        {
          type: 'p',
          text: 'Conditions: cool temperatures (50–70°F), high humidity (>90% RH), extended periods of leaf wetness. Most severe in the Pacific Northwest, New England, and other cool-summer regions; less severe in hot, dry climates. Summer outbreaks can occur in humid eastern regions during cool spells.',
        },
        {
          type: 'p',
          text: 'Treatment: There is no cure for established late blight. Remove and destroy all infected plant tissue immediately (bag and dispose or bury deeply — do not compost). For prevention or at first sign: chlorothalonil; fixed copper; mancozeb. Oomycete-specific products: mandipropamid (Revus), dimethomorph, or phosphonate products. Resistant varieties for late-blight-prone regions: \'Defiant PHR,\' \'Mountain Magic,\' \'Legend,\' \'Jasper,\' \'Plum Regal\' (tomato); \'Elba,\' \'Kennebec\' (potato).',
        },

        {
          type: 'h3',
          text: 'Rust Diseases',
        },
        {
          type: 'p',
          text: 'Rust fungi are among the most visually striking plant diseases — the bright orange, rust-brown, or yellow-orange pustules on leaf surfaces are unmistakable. Rusts are obligate parasites (they can only survive on living host tissue) and many have complex life cycles involving two unrelated host plant species. Over 8,000 rust species exist, many highly host-specific. Rust pustules appear as raised, powdery spots on leaf surfaces (usually the lower surface); pustule color varies by species — orange-red (bean rust, cedar-apple rust), yellow-orange (asparagus rust), or brown-black (late-stage rusts). Affected tissue may yellow; severe infections cause premature leaf drop and plant decline.',
        },
        {
          type: 'table',
          headers: ['Rust Disease', 'Host Plants', 'Identification', 'Notable Feature'],
          rows: [
            ['Bean Rust (Uromyces appendiculatus)', 'Green beans, snap beans, dry beans', 'Chocolate-brown powdery pustules on lower leaf surface; yellow spots above the pustules on the upper surface', 'One of the most common late-season diseases on bean crops across humid regions of the US'],
            ['Cedar-Apple Rust (Gymnosporangium juniperi-virginianae)', 'Eastern red cedar (alternate host); apples and crabapples (primary host)', 'On apples: bright orange spots with tube-like aecia on upper leaf surface; on cedar: orange gelatinous galls in spring', 'Requires both hosts to complete its life cycle — do not plant susceptible apple varieties near eastern red cedar'],
            ['Asparagus Rust (Puccinia asparagi)', 'Asparagus', 'Reddish-orange pustules on asparagus stems and ferns in midsummer through fall', 'Weakens asparagus crowns over years; more severe in humid climates; resistant varieties available'],
            ['Rose Rust (Phragmidium spp.)', 'Roses', 'Bright orange pustules on stems, petioles, and leaf undersides; distinct from black spot', 'More common in Pacific Coast states than the East; resistant varieties available'],
            ['Hollyhock Rust (Puccinia malvacearum)', 'Hollyhock, mallow family plants', 'Brown to orange pustules covering leaves and stems; entire plant can become covered by midsummer', 'One of the most severe ornamental rusts; difficult to control; choose rust-resistant hollyhock varieties'],
          ],
        },
        {
          type: 'p',
          text: 'Treatment: Rusts cannot be cured but can be suppressed. Remove and dispose of infected plant material. Apply sulfur fungicide (the most effective organic treatment for most rusts); myclobutanil; tebuconazole; propiconazole; or trifloxystrobin. Apply preventively before infection or at very first sign of pustule formation — treatments are far more effective as preventives than as curative sprays. Remove and destroy fallen infected leaves, which can harbor spores.',
        },

        {
          type: 'h3',
          text: 'Anthracnose',
        },
        {
          type: 'p',
          text: 'Anthracnose produces water-soaked or tan lesions that develop dark borders. On fruit, lesions are sunken and may produce salmon-pink to orange spore masses (acervuli) in humid conditions. On leaves, lesions may have dark margins. On trees, it produces dead areas along leaf veins and may cause twig dieback.',
        },
        {
          type: 'p',
          text: 'Common anthracnose diseases: cucumber/squash anthracnose (Colletotrichum orbiculare); bean anthracnose (C. lindemuthianum); tomato anthracnose (primarily on fruit; C. coccodes); dogwood anthracnose (Discula destructiva — a serious disease of flowering dogwood in eastern forests and gardens); sycamore and maple anthracnose (primarily a leaf disease; rarely fatal to established trees).',
        },
        {
          type: 'p',
          text: 'Conditions: warm temperatures (65–85°F) and wet conditions; spreads by rain splash; most severe during cool, wet springs. Treatment: remove and dispose of infected plant material and fallen leaves. Apply chlorothalonil; copper-based fungicide; or mancozeb. For tree anthracnose, a single infection season rarely causes significant long-term damage — maintain tree vigor with proper fertility, watering, and mulching.',
        },

        {
          type: 'h3',
          text: 'Botrytis / Gray Mold (Botrytis cinerea)',
        },
        {
          type: 'p',
          text: 'Botrytis produces dense, gray, velvety fungal growth on affected tissue (the characteristic "gray mold"); affected tissue beneath the mold is soft, water-soaked, and brown. Most commonly affects flowers, soft fruits, and tender young stems. Petals and leaves may develop water-soaked spots before the gray mold appears. In onion and garlic, Botrytis causes neck rot after harvest.',
        },
        {
          type: 'p',
          text: 'Conditions: cool temperatures (60–75°F), high humidity (>90% RH), and still air. Particularly severe in greenhouses, cold frames, and dense plantings during cool, wet periods. The fungus is always present as a saprophyte — it becomes pathogenic when conditions are right and on tissue that is already damaged, dying, or stressed.',
        },
        {
          type: 'p',
          text: 'Treatment: Improve air circulation immediately (thin plantings, remove overcrowding). Remove and dispose of affected tissue and dead flowers — Botrytis readily infects through dying floral tissue. Apply iprodione; captan; fenhexamid; or copper-based products. Botrytis develops fungicide resistance rapidly; rotate fungicide classes if repeated applications are needed.',
        },
        {
          type: 'tip',
          emoji: '✂️',
          text: 'Removing spent flowers — which are the primary infection site in strawberries, peonies, and roses — is one of the most effective Botrytis prevention strategies. Spacing, air circulation, and avoiding wet foliage overnight complete the picture. No spray program compensates for overcrowded, wet, poorly ventilated conditions.',
        },

        {
          type: 'h3',
          text: 'Septoria Leaf Spot (Septoria lycopersici)',
        },
        {
          type: 'p',
          text: 'Septoria leaf spot produces small, circular spots (¼ inch diameter or less) with dark brown borders and gray-white centers. Dark spots within the gray center (pycnidia — fungal fruiting bodies, visible with a hand lens) are diagnostic and distinguish Septoria from other leaf spots. Disease begins on the oldest, lowest leaves and progresses upward; lesions do NOT have the concentric ring pattern characteristic of early blight.',
        },
        {
          type: 'p',
          text: 'Conditions: warm temperatures (60–80°F) and wet conditions; spreads by rain and irrigation splash from infested soil and plant debris; survives in soil and on plant debris for 1–2 years. Treatment is the same as early blight: remove infected leaves; apply chlorothalonil, copper, or mancozeb; mulch heavily to prevent soil splash; use crop rotation; avoid overhead irrigation. Septoria and early blight often coexist on the same plants and are managed with the same spray program.',
        },

        {
          type: 'h3',
          text: 'White Mold / Sclerotinia (Sclerotinia sclerotiorum)',
        },
        {
          type: 'p',
          text: 'White mold produces white, cottony mycelial growth on stems and at the soil line; infected tissue beneath the mold is soft and watery. Hard, black, seed-like sclerotia (¼–½ inch) embedded in or on the white mold are diagnostic — they allow the fungus to survive in soil for years. Entire plants collapse in severe cases. Wide host range includes beans, lettuce, carrots, celery, basil, and many ornamentals.',
        },
        {
          type: 'p',
          text: 'No effective in-season treatment exists; prevention is the primary strategy. Crop rotation has limited effectiveness due to the very wide host range. Deep tillage buries sclerotia below 4 inches (buried sclerotia do not germinate effectively). Biocontrol with Coniothyrium minitans — a fungal parasite of Sclerotinia sclerotia — can be applied to soil before the infection period to reduce sclerotia populations. Thiophanate-methyl or iprodione may reduce spread where labeled.',
        },
        {
          type: 'tip',
          emoji: '🔬',
          text: 'Sooty mold is another fungal condition you may encounter: a black coating on leaf surfaces that wipes off easily and follows insect infestations (aphids, whiteflies, scale). The mold grows on the sugary "honeydew" secreted by piercing-sucking insects — treat the insect infestation and the sooty mold resolves on its own. It does not directly infect the plant.',
        },
      ],
    },
    {
      id: 'downy-mildew-oomycetes',
      title: 'Section 3: Downy Mildews & Oomycete Diseases',
      blocks: [
        {
          type: 'p',
          text: 'Oomycetes — often called water molds — are not true fungi despite their fungus-like appearance. They have a fundamentally different cell biology (cellulose cell walls vs. chitin in true fungi) that makes them resistant to many standard fungicides. Late blight, downy mildew, Pythium root rot, and Phytophthora diseases are all caused by oomycetes and require specific oomycete-active products when chemical management is warranted.',
        },

        {
          type: 'h3',
          text: 'Downy Mildew Diseases',
        },
        {
          type: 'p',
          text: 'Downy mildew diseases are caused by multiple oomycete genera (Peronospora, Plasmopara, Bremia, Pseudoperonospora) that are host-specific — basil downy mildew cannot infect cucumbers and vice versa. All require high humidity and cool temperatures and produce their characteristic sporulation on the undersides of leaves.',
        },
        {
          type: 'table',
          headers: ['Downy Mildew', 'Host(s)', 'Identification', 'Management Notes'],
          rows: [
            ['Basil Downy Mildew (Peronospora belbahrii)', 'Basil (Ocimum spp.)', 'Yellow blotches on upper leaf surface with gray-purple fuzzy sporulation directly below on the leaf underside; leaves eventually turn brown and fall; spreads rapidly in cool, humid conditions', "This pathogen arrived in the US around 2007 and has devastated commercial and home basil production in humid regions. Choose resistant varieties ('Eleonora,' 'Dolce Fresca,' 'Amazel'). Grow in full sun with maximum air circulation; avoid overhead watering. Mandipropamid is most effective; copper products have some efficacy."],
            ['Cucumber Downy Mildew (Pseudoperonospora cubensis)', 'Cucurbits (cucumber, squash, cantaloupe)', 'Angular yellow spots bounded by leaf veins on the upper leaf surface; gray-purple sporulation on the underside; rapid defoliation and plant decline', "One of the most destructive summer vegetable diseases in humid eastern states. Resistant cucumber varieties ('Diva,' 'Marketmore 76'). Apply chlorothalonil, mandipropamid, or copper preventively in high-risk conditions."],
            ['Lettuce Downy Mildew (Bremia lactucae)', 'Lettuce', 'Pale yellow angular spots on upper leaf surface; white sporulation on underside in cool, moist conditions; older leaves affected first', 'Highly variable in strains; resistance in lettuce varieties can be overcome by new pathogen races. Use resistant varieties where available; avoid overhead watering; ensure good air circulation in dense plantings.'],
            ['Impatiens Downy Mildew (Plasmopara obducens)', 'Impatiens (common bedding impatiens)', 'Plants yellow and collapse catastrophically; white sporulation visible on stem and leaf undersides just before plant collapse; entire plantings can die within days', 'This disease devastated common impatiens (I. walleriana) production in much of the US starting around 2004. Do not plant common impatiens in soil that has had this disease. New Guinea impatiens and SunPatiens are not susceptible. Once in soil, persists for years as oospores.'],
            ['Grapevine Downy Mildew (Plasmopara viticola)', 'Grapes', 'Oil-spot lesions on upper leaf surface; white cottony sporulation on leaf underside; infected berries turn brown and shriveled', 'A major disease of grapes in humid eastern regions. Native American grape species have more resistance than European Vitis vinifera. Copper-based fungicides applied preventively; mandipropamid or dimethomorph for systemic protection.'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Standard fungicides labeled for powdery mildew and other true fungal diseases will NOT effectively control downy mildew or any other oomycete disease. Oomycetes lack the chitin cell walls that most fungicides target. Look specifically for mandipropamid (Revus), dimethomorph, phosphonate products (fosetyl-aluminum), or mefenoxam (Ridomil Gold) when treating oomycete diseases.',
        },

        {
          type: 'h3',
          text: 'Phytophthora Root and Crown Rot',
        },
        {
          type: 'p',
          text: 'Phytophthora species (oomycetes, not true fungi) cause some of the most devastating root and crown rots in horticulture. Phytophthora cinnamomi is responsible for the death of millions of native plants in southwestern landscapes and is a significant pathogen in poorly drained nursery and landscape situations across the US.',
        },
        {
          type: 'p',
          text: 'Identification: Plants wilt and decline despite adequate soil moisture; lower leaves turn yellow; the stem or crown at the soil line may be dark and water-soaked; roots are brown and mushy rather than white and firm; the transition between healthy and diseased root tissue is abrupt. Phytophthora crown rot typically produces a distinct dark canker at the base of the stem.',
        },
        {
          type: 'p',
          text: 'Conditions: Overwet soil; poor drainage; saturated conditions after heavy rain. Phytophthora produces motile zoospores that swim through free water in soil to reach roots — any condition creating waterlogged soil creates ideal infection conditions.',
        },
        {
          type: 'p',
          text: 'Most susceptible plants: Avocado, rhododendron, azalea, ornamental cherries, many conifers, pepper (P. capsici), tomato, cucumber, and many others. Phytophthora species are highly host-specific.',
        },
        {
          type: 'tip',
          emoji: '💧',
          text: 'Prevention through drainage is the primary tool against Phytophthora — there is no cure for a plant with systemic infection. Improve drainage in affected areas; do not replant susceptible species in the same location without soil treatment or raised bed installation. Phosphonate products (fosetyl-aluminum, phosphoric acid) applied to foliage are translocated to roots and have suppressive activity; mefenoxam (Ridomil Gold) applied to soil is the most effective chemical treatment for high-value plants.',
        },
      ],
    },
    {
      id: 'bacterial-diseases',
      title: 'Section 4: Bacterial Diseases',
      blocks: [
        {
          type: 'p',
          text: 'Bacterial plant diseases are caused by single-celled prokaryotes that enter plant tissue through natural openings or wounds and multiply in the intercellular spaces or vascular tissue. Unlike fungal diseases, there are no systemic bactericides — no product that moves through the plant to kill bacteria already inside. Management relies on prevention, sanitation, and copper-based products that have surface-protective activity. Once a systemic bacterial disease has colonized the vascular tissue, the plant usually cannot be saved.',
        },

        {
          type: 'h3',
          text: 'Fire Blight (Erwinia amylovora)',
        },
        {
          type: 'p',
          text: "Fire blight is the most economically significant bacterial disease of apples and pears in North America. The characteristic shepherd's crook at the tip of infected branches and the scorched appearance of blossoms and shoot tips give the disease its name. It can kill individual branches, entire trees, and in severe outbreaks can devastate orchards.",
        },
        {
          type: 'p',
          text: "Identification: Blossoms turn brown and die in early spring (blossom blight, the first sign); new shoot tips wilt and bend into a characteristic shepherd's crook and turn brown-black as if burned; infected bark may show dark discoloration with a water-soaked appearance at the margins; in humid conditions, a bacterial ooze (amber-colored droplets) may be visible on infected tissue; cankers on main branches and trunk may girdle and kill the branch.",
        },
        {
          type: 'p',
          text: 'Infection mechanism: The bacteria overwinter in cankers on infected wood. In spring, rain and insects (especially pollinating bees and flies) spread bacteria from cankers to blossoms during the bloom period. Infection is most severe when temperatures are 65–86°F during bloom with rain or dew. After bloom, bacteria can continue spreading through succulent shoot growth.',
        },
        {
          type: 'p',
          text: 'Management: Pruning out infected tissue is the primary management tool. Cut well below the visible canker margin — at least 8–12 inches into healthy wood. Sterilize tools between each cut with 70% isopropyl alcohol or 10% bleach. Do not prune during wet, humid conditions when infection can spread. Preventive copper sprays at bloom and during shoot growth have suppressive activity; antibiotics (streptomycin, oxytetracycline) are labeled for fire blight in some states and are effective when applied at bloom in high-risk weather.',
        },
        {
          type: 'tip',
          emoji: '🍎',
          text: "Resistant varieties are the most important long-term management tool for fire blight. Pear varieties 'Harrow Sweet,' 'Harrow Delight,' 'Seckel'; apple varieties 'Liberty,' 'Priscilla,' 'Enterprise,' and most disease-resistant rootstocks perform well in high-pressure regions. Avoid highly susceptible varieties ('Gala,' 'Fuji,' 'Bartlett' pear) where fire blight has a history.",
        },

        {
          type: 'h3',
          text: 'Bacterial Leaf Spot & Canker Diseases',
        },
        {
          type: 'p',
          text: 'Bacterial leaf spot diseases are caused by several bacterial genera, primarily Xanthomonas and Pseudomonas, and affect a wide range of vegetables, ornamentals, and fruit crops. They produce spots, lesions, and cankers that are often difficult to distinguish from fungal leaf spots without laboratory diagnosis.',
        },
        {
          type: 'table',
          headers: ['Disease', 'Pathogen', 'Host(s)', 'Symptoms', 'Management'],
          rows: [
            ['Bacterial Speck (Pseudomonas syringae pv. tomato)', 'Pseudomonas syringae pv. tomato', 'Tomato', 'Small, dark brown-black spots surrounded by yellow halo; very small (1–2 mm); may coalesce; also affects fruit surface, producing small, dark raised spots', 'Copper spray preventively in cool, wet conditions; avoid overhead irrigation; crop rotation; resistant varieties available (most modern hybrids).'],
            ['Bacterial Spot (Xanthomonas spp.)', 'Xanthomonas campestris pv. vesicatoria and related spp.', 'Tomato and pepper', 'Water-soaked spots that turn brown with raised margins; irregular shape; on fruit: raised, scabby lesions; fruit quality severely reduced', 'Copper-based bactericide with mancozeb tank-mixed; copper resistance is common in some populations — rotate with other products. Seed treatment; transplant sanitation; no cure for infected plants.'],
            ['Angular Leaf Spot (Pseudomonas syringae pv. lachrymans)', 'Pseudomonas syringae pv. lachrymans', 'Cucumber and cucurbits', 'Angular, water-soaked spots bounded by leaf veins; spots turn brown with a white papery center; bacterial ooze may dry to a white crust on the lesion', 'Copper fungicide; avoid overhead irrigation; remove infected plant material; crop rotation.'],
            ['Bacterial Canker (Clavibacter michiganensis subsp. michiganensis)', 'Clavibacter michiganensis subsp. michiganensis', 'Tomato', "Systemic: wilting of leaves on one side of the stem (bird's eye lesions on fruit are diagnostic — raised white spots with dark center); stem shows vascular browning; plants may die", 'No cure. Remove and destroy infected plants immediately. Do not save seed from infected fruit. Purchase certified disease-free seed and transplants. 3-year rotation away from Solanaceae.'],
            ['Crown Gall (Agrobacterium tumefaciens)', 'Agrobacterium tumefaciens', 'Roses, fruit trees, grapes, many woody plants; very wide host range', 'Rough, tumor-like galls at the crown (soil line) or on roots; galls are initially soft and spongy, later become woody and irregular; plants may decline or be stunted but are often not killed', 'No cure for infected plants. Remove heavily galled plants; do not replant susceptible species in the same location for several years. Purchase plants from reputable nurseries; inspect root systems before planting. Biocontrol with K-84 (Agrobacterium radiobacter strain K-84) applied to roots at transplanting is effective as a preventive.'],
            ['Bacterial Wilt (Erwinia tracheiphila)', 'Erwinia tracheiphila', 'Cucurbits (cucumber most susceptible; squash and melon less so)', "Sudden wilting of entire plant or individual branches; characteristic 'thread test': cut wilted stem near the base, press cut ends together and pull apart slowly — if fine bacterial strands string between the cut surfaces, bacterial wilt is confirmed", 'Vectored exclusively by cucumber beetles. Control cucumber beetles (row cover during seedling stage; pesticides). Once a plant shows wilt, remove and destroy it. No cure; no effective bactericide. Cucumber varieties vary in susceptibility.'],
          ],
        },
        {
          type: 'warning',
          emoji: '🚫',
          text: 'There are no systemic bactericides for garden use — once bacteria colonize the vascular tissue of a plant, no spray or drench will eliminate the infection. Remove and destroy systemically infected plants (bacterial wilt, bacterial canker) promptly to prevent spread to neighboring plants.',
        },
      ],
    },
    {
      id: 'soilborne-diseases',
      title: 'Section 5: Soilborne Diseases',
      blocks: [
        {
          type: 'p',
          text: 'Soilborne diseases are among the most frustrating problems in the garden because the pathogens persist in soil for years — sometimes decades — independent of any host plant, making rotation and removal ineffective on their own. Fusarium, Verticillium, Pythium, Rhizoctonia, and Sclerotinia all live in soil and attack roots, crowns, and stems from below. The common thread: by the time visible above-ground symptoms appear (wilting, yellowing, collapse), the pathogen has already caused extensive root or vascular damage, and treatment options are severely limited.',
        },

        {
          type: 'h3',
          text: 'Fusarium Wilt (Fusarium oxysporum)',
        },
        {
          type: 'p',
          text: 'Fusarium oxysporum is a soilborne fungal pathogen with many host-specific formae speciales — each adapted to a particular host genus. Fusarium oxysporum f. sp. lycopersici infects tomatoes; f. sp. cubense infects bananas; f. sp. vasinfectum infects cotton; and so on. A strain that devastates tomatoes cannot infect cucumbers, and vice versa. This host specificity is important when planning rotations.',
        },
        {
          type: 'p',
          text: 'Identification: Fusarium wilt typically causes wilting of leaves on one side of the stem or on one branch before progressing to the whole plant — asymmetric wilting is a key early clue. Cross-sectioning the stem at the base reveals characteristic brown or orange-brown discoloration of the vascular tissue (xylem). On tomatoes, this discoloration may extend up into the main stem and even into petioles. Plants may wilt during the heat of the day but recover at night early in the infection; as disease progresses, wilting becomes permanent.',
        },
        {
          type: 'p',
          text: 'Conditions: Warm soil temperatures (75–85°F) strongly favor Fusarium infection — it is notably more severe in hot summers and hot growing regions. Acidic soil (pH below 6.0) increases susceptibility; raising soil pH to 6.5–7.0 reduces disease severity. The pathogen persists in soil for 5–10 years or longer as chlamydospores (thick-walled resting spores). It is easily spread via soil on tools, boots, transplant material, and irrigation water.',
        },
        {
          type: 'p',
          text: 'Management: There is no chemical cure for established Fusarium wilt. Remove and destroy infected plants; do not compost. The primary management strategies are: (1) resistant varieties — the most effective tool (look for "F" and "FF" resistance codes on tomato variety labels; "F" = Fusarium Race 1 resistance; "FF" = Races 1 and 2; "FFF" = Races 1, 2, and 3); (2) crop rotation — rotate to non-host crops for at least 3 years, though persistence means rotation alone is insufficient for high-inoculum soils; (3) soil pH adjustment to 6.5–7.0; (4) soil solarization (see below) in high-inoculum beds. Grafting tomatoes onto Fusarium-resistant rootstocks is increasingly practical for gardeners using specialty grafted transplants.',
        },
        {
          type: 'tip',
          emoji: '🍅',
          text: 'If you have had Fusarium wilt in a tomato bed, switch entirely to varieties with confirmed resistance for several seasons. Modern hybrid varieties like \'Celebrity,\' \'Mountain Merit,\' \'Defiant,\' and \'Big Beef\' carry resistance to multiple Fusarium races. Heirloom varieties are generally not resistant. The resistance code \'F\' on a plant label indicates the variety will not develop wilt even in infested soil.',
        },

        {
          type: 'h3',
          text: 'Verticillium Wilt (Verticillium dahliae and V. albo-atrum)',
        },
        {
          type: 'p',
          text: 'Verticillium wilt is caused by two closely related soilborne fungi with an exceptionally broad host range — over 400 plant species including tomatoes, potatoes, eggplant, peppers, strawberries, raspberries, roses, maples, elms, and many herbaceous ornamentals. Unlike Fusarium, which favors hot soil, Verticillium is most severe when soil temperatures are cooler (60–75°F), making it a common problem in the Pacific Northwest, coastal regions, and early in the growing season before soils warm.',
        },
        {
          type: 'p',
          text: 'Identification: The symptoms closely resemble Fusarium wilt: one-sided or asymmetric wilting and yellowing of leaves, beginning on lower and outer leaves and progressing inward and upward; brown vascular discoloration in cross-sectioned stem tissue. On tomato, Verticillium discoloration tends to be a lighter tan-brown and is usually confined to the lower portion of the main stem (vs. Fusarium, which can extend higher). On strawberries, outer leaves wilt and collapse to the ground while the crown may show reddish-brown discoloration. On trees (especially maples), Verticillium produces a distinctive streaking in the sapwood visible in cross-section.',
        },
        {
          type: 'p',
          text: 'Conditions: Cool soil temperatures (60–75°F); Verticillium dahliae forms microsclerotia that survive in soil for 10–15 years or longer. The wide host range makes rotation impractical as a standalone solution. Like Fusarium, Verticillium is spread by infested soil, tools, and irrigation water.',
        },
        {
          type: 'p',
          text: 'Management: Identical principles to Fusarium: resistant varieties (look for "V" resistance code on tomato labels); avoid replanting susceptible species in known infested soil; soil solarization; improving soil health. There is no chemical cure. On strawberries, fumigation or solarization before replanting is standard practice in commercial settings and is practical for serious home gardeners. Maple trees infected with Verticillium may recover if the infection is limited — maintain tree vigor with deep watering and appropriate fertilization; remove and dispose of infected wood.',
        },
        {
          type: 'table',
          headers: ['Feature', 'Fusarium Wilt', 'Verticillium Wilt'],
          rows: [
            ['Causal organism', 'Fusarium oxysporum (host-specific formae speciales)', 'Verticillium dahliae or V. albo-atrum (very broad host range)'],
            ['Optimal soil temp', '75–85°F (hot conditions)', '60–75°F (cool conditions)'],
            ['Host range', 'Narrow — each strain attacks one host genus', 'Very wide — 400+ plant species'],
            ['Vascular discoloration', 'Orange-brown; extends high into stem and petioles', 'Tan-brown; usually limited to lower stem'],
            ['Persistence in soil', '5–10+ years as chlamydospores', '10–15+ years as microsclerotia'],
            ['Rotation effectiveness', 'Moderate (host-specific — rotate to non-host)', 'Limited (broad host range limits rotation options)'],
            ['Key management', 'Resistant varieties ("F" code on tomato), pH 6.5–7.0', 'Resistant varieties ("V" code on tomato), solarization'],
          ],
        },

        {
          type: 'h3',
          text: 'Pythium Root Rot and Damping Off',
        },
        {
          type: 'p',
          text: 'Pythium species are oomycetes (water molds, not true fungi) that cause two distinct but related problems: damping off in seedlings and root rot in established plants. Pythium is essentially omnipresent in most soils and potting mixes — it only becomes pathogenic when conditions favor it, primarily excessive soil moisture and oxygen deprivation at the root zone.',
        },
        {
          type: 'p',
          text: 'Damping off is the collapse of seedlings at or just below the soil line. The stem pinches to a thread-like point and the seedling topples over, looking almost as if it was cut. Pre-emergence damping off (seeds rot before they emerge) is also caused by Pythium and Rhizoctonia. Post-emergence damping off is most common in cool, wet conditions with dense plantings; seeds started in non-sterile media, wet media, or media with poor drainage are at highest risk. Once seedlings have their first true leaves and the stem begins to lignify (harden), susceptibility drops sharply.',
        },
        {
          type: 'p',
          text: 'Root rot in established plants presents as gradual or sudden wilting and decline despite adequate soil moisture; brown, mushy, or absent root systems (roots are soft and easily pulled apart rather than firm and white); poor growth, yellowing lower leaves. Pythium root rot is most severe in poorly drained soils, overwatered container plants, and during cool, wet periods.',
        },
        {
          type: 'list',
          items: [
            'Prevention for damping off: Use sterile, well-draining seed-starting mix — never reuse old mix or garden soil for seed starting. Water carefully to keep mix moist but not wet; provide bottom heat (68–75°F soil temperature discourages Pythium). Ensure good air circulation over seedling trays; thin seedlings promptly if they are crowded. A thin layer of perlite or coarse sand on the surface of the mix improves surface drainage and reduces damping off.',
            'Prevention for root rot: Improve soil drainage; do not overwater; ensure container drainage holes are functioning. In raised beds and containers, a quality well-draining mix is the most important investment.',
            'Biological control: Trichoderma-based products (such as Rootshield) colonize roots and actively suppress Pythium, Rhizoctonia, and Fusarium — an excellent preventive treatment for seedlings and transplants in high-risk situations. Apply as a soil drench at transplanting.',
            'Chemical options: Mefenoxam (Ridomil Gold) or fosetyl-aluminum (Aliette) are effective against Pythium — both are oomycete-specific products; standard fungicides do not work. These are generally warranted only for high-value plants, serious outbreaks, or commercial seed-starting operations.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌱',
          text: 'The single most effective investment against damping off is a quality seed-starting mix: sterile, fine-textured, moisture-retentive but free-draining. Products labeled "seed-starting mix" differ from potting soil in their particle size and drainage properties. Garden soil, outdoor compost, and reused potting mix are not appropriate for starting seeds indoors.',
        },

        {
          type: 'h3',
          text: 'Rhizoctonia Crown and Root Rot',
        },
        {
          type: 'p',
          text: 'Rhizoctonia solani is a true fungus (unlike Pythium) with an extremely broad host range and nearly worldwide distribution in garden soils. It causes damping off (often in partnership with Pythium), stem cankers at the soil line (collar rot), and root rot on a wide range of vegetables, ornamentals, and turf. On beans, it causes "sore shin" — a reddish-brown canker at the base of the stem. On potatoes, Rhizoctonia produces dark, irregular sclerotia on tuber surfaces ("black scurf") and stem cankers that can girdle the stem and cause aerial tubers to form.',
        },
        {
          type: 'p',
          text: 'Identification: Reddish-brown to dark brown lesions on stems at or near the soil line; affected stems may have a dry, sunken appearance. Rhizoctonia-caused damping off tends to produce a dry, brown rot at the stem base, compared to the watery, pinched appearance of Pythium damping off. On turf, Rhizoctonia causes brown patch (circular patches of tan-brown grass) and large patch (Zoysia, St. Augustine).',
        },
        {
          type: 'p',
          text: 'Management: Improve drainage; reduce soil moisture; avoid burying transplant stems too deeply; ensure air circulation at the soil surface. Trichoderma-based biocontrols are effective against Rhizoctonia. For potatoes: plant certified seed potato; rotate to non-host crops for 3+ years; deep watering (rather than frequent shallow watering) discourages surface-level Rhizoctonia activity. There is no in-season chemical cure for established crown rot.',
        },

        {
          type: 'h3',
          text: 'Soil Solarization: A Practical Soilborne Disease Suppression Tool',
        },
        {
          type: 'p',
          text: 'Soil solarization uses solar energy to heat soil to temperatures lethal to many soilborne pathogens. It is the most practical and broadly effective treatment available to home gardeners for suppressing Fusarium, Verticillium, Pythium, Rhizoctonia, Sclerotinia, nematodes, weed seeds, and some soil-dwelling insects simultaneously — with no chemicals required.',
        },
        {
          type: 'p',
          text: 'How it works: In mid-summer (when solar intensity is highest), clear plastic sheeting (1–2 mil) is laid tightly over moist soil. Solar radiation heats the soil beneath the plastic to 120–140°F at the surface and 90–100°F+ at 6-inch depth. Temperatures above 100°F sustained over 4–6 weeks kill most soilborne pathogens in the top 6–12 inches of soil. The soil must be moist (to conduct heat effectively), the plastic must be clear (not black, which reflects heat rather than transmitting it), and conditions must be sunny and warm — solarization does not work effectively in cool or overcast climates.',
        },
        {
          type: 'list',
          items: [
            'Step 1 — Prepare the bed: Remove all plant debris, till or turn the soil to break up clods, irrigate thoroughly to field capacity, and smooth the surface. Pathogen-kill temperatures depend on moisture conducting heat downward.',
            'Step 2 — Apply clear plastic: Lay 1–2 mil clear polyethylene plastic over the bed. Seal edges tightly by burying them in a trench around the bed perimeter or weighting them with soil. The goal is to trap maximum heat — any gap reduces effectiveness.',
            'Step 3 — Leave in place: For best results in areas with full sun and summer temperatures above 85°F, leave the plastic in place for 4–6 weeks. 6–8 weeks provides deeper treatment and is recommended for severe infestations.',
            'Step 4 — Plant without tilling: After removing the plastic, plant into the treated soil with minimum disturbance. Deep tilling after solarization brings untreated soil and surviving propagules from below the treatment zone to the surface, reducing the benefit.',
            'Best results: Hot-summer climates (USDA Zones 7–10); mid-summer (July–August in most of the US); full sun exposure; soil temperatures consistently above 85°F ambient. Solarization is significantly less effective in cool-summer regions (Pacific Northwest, New England during cool summers, high-elevation gardens).',
            'Limitations: Solarization kills beneficial organisms along with pathogens; beneficial populations typically recover faster than pathogens after treatment. It does not provide lasting suppression — reintroduction from surrounding soil or new plant material will re-establish pathogen populations over time.',
          ],
        },
        {
          type: 'tip',
          emoji: '☀️',
          text: 'Solarization is most effective in years when you have had significant soilborne disease problems — Fusarium wilt, Verticillium wilt, nematode pressure, or persistent damping-off issues. Use it in mid-summer on the beds where problems occurred, then follow up with disease-resistant varieties and improved drainage the following season.',
        },
      ],
    },

    {
      id: 'viral-diseases',
      title: 'Section 6: Viral Diseases',
      blocks: [
        {
          type: 'p',
          text: 'Viruses are among the most frustrating plant pathogens because there is no cure once a plant is infected. Unlike fungal or bacterial diseases where treatment can stop progression, a virus integrates into the plant\'s cells and cannot be removed. Management is entirely preventive: stopping the vectors that spread viruses, using certified virus-free plant material, and removing infected plants before the virus spreads.',
        },
        {
          type: 'h3',
          text: 'How Viruses Are Spread',
        },
        {
          type: 'p',
          text: 'Most plant viruses are spread by insect vectors — organisms that carry viral particles from infected to healthy plants during feeding. Aphids are the most important viral vectors in the vegetable and ornamental garden, transmitting hundreds of different viruses. Thrips, whiteflies, leafhoppers, cucumber beetles, and mites also transmit specific viruses. Some viruses spread through infected seed, vegetative propagation (tubers, cuttings, grafting), mechanical transmission via tools or hands, or soil nematodes. Understanding the vector for a specific virus is essential for choosing the right control strategy — insecticides that kill aphids, for example, may not prevent non-persistent viruses transmitted during brief probe-feeding.',
        },
        {
          type: 'h3',
          text: 'Symptom Types',
        },
        {
          type: 'list',
          items: [
            'Mosaic: Irregular light green, yellow, and dark green patches on leaves — the most common viral symptom pattern. The mosaic pattern results from the virus disrupting chlorophyll production unevenly across the leaf.',
            'Mottle: Similar to mosaic but with less distinct boundaries between light and dark areas; often seen in cucurbit and tomato viruses.',
            'Chlorosis / yellowing: Diffuse or patterned yellowing of leaves; can mimic nutrient deficiency but does not respond to fertilization.',
            'Ringspot: Concentric rings of necrotic (dead) or chlorotic tissue on leaves, fruit, or stems. Characteristic of Tomato Spotted Wilt Virus (TSWV) and several other tospoviruses.',
            'Leaf distortion and curling: Leaves may cup upward or downward, pucker, crinkle, or become elongated and strap-like. New growth is often most severely distorted.',
            'Stunting: Viral infection frequently slows or stops normal growth; infected plants may be noticeably smaller than healthy neighbors of the same age.',
            'Vein clearing or vein banding: Veins appear lighter than surrounding tissue (vein clearing) or darker with a distinct band of discoloration along the vein (vein banding).',
            'Fruit symptoms: Many viruses cause fruit discoloration, distortion, uneven ripening, or internal browning. Cucumber mosaic virus causes cucumber fruits to turn pale and bitter; TSWV causes bronze discoloration and ringspots on tomato fruit.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'There is no cure for viral plant diseases. No spray, fertilizer, or treatment can eliminate a virus from an infected plant. Once a plant tests positive or shows reliable viral symptoms, the only action that protects the rest of your garden is removal. Pull the entire plant — including roots — and dispose of it in the trash (not the compost pile). Composting infected material can spread the virus if it survives breakdown.',
        },
        {
          type: 'h3',
          text: 'Common Plant Viruses',
        },
        {
          type: 'table',
          headers: ['Virus', 'Host Plants', 'Vector', 'Key Symptoms', 'Management'],
          rows: [
            [
              'Cucumber Mosaic Virus (CMV)',
              'Cucumbers, squash, melons, peppers, tomatoes, beans, many ornamentals',
              'Aphids (60+ species); non-persistent transmission',
              'Mosaic patterning, leaf distortion, fruit discoloration; cucumber fruits become pale and bitter',
              'Aphid control (reflective mulch, insecticidal soap); resistant varieties; remove infected plants promptly; CMV has the widest host range of any known plant virus',
            ],
            [
              'Tomato Spotted Wilt Virus (TSWV)',
              'Tomatoes, peppers, lettuce, dahlias, impatiens, 1,000+ species',
              'Thrips (western flower thrips primary vector)',
              'Bronze or purplish discoloration of young leaves; ringspots on leaves and fruit; stem streaking; severe stunting',
              'Thrips control (spinosad, reflective mulches); resistant tomato varieties ("T" code); remove infected plants; avoid over-fertilizing with nitrogen (lush growth attracts thrips)',
            ],
            [
              'Tomato Mosaic Virus (ToMV) / Tobacco Mosaic Virus (TMV)',
              'Tomatoes, peppers, tobacco, eggplant',
              'Mechanical — tools, hands, clothing; highly stable; no insect vector required',
              'Light and dark green mosaic; leaf distortion and "fern-leaf" growth on new shoots; fruit may show internal browning',
              'Wash hands and sanitize tools between plants; avoid handling plants after smoking; use resistant varieties (TMV resistance "T" in tomato codes); remove infected plants',
            ],
            [
              'Zucchini Yellow Mosaic Virus (ZYMV)',
              'Cucurbits: zucchini, squash, cucumbers, melons, pumpkins',
              'Aphids; non-persistent transmission',
              'Severe mosaic and yellowing; extreme leaf distortion; misshapen, warty, or stunted fruit; can cause near-total crop failure in squash',
              'Reflective mulch to deter aphids; resistant varieties where available; remove infected plants; early detection and roguing is critical as spread can be rapid',
            ],
            [
              'Bean Common Mosaic Virus (BCMV)',
              'Beans (snap, pole, dry), cowpeas',
              'Aphids (non-persistent); seed-borne',
              'Mosaic, leaf curling, stunting, reduced pod set; seed transmission means the disease can appear before vectors arrive',
              'Use certified virus-free seed; resistant bean varieties (most modern snap bean varieties carry resistance); aphid control; remove infected plants',
            ],
            [
              'Potato Virus Y (PVY)',
              'Potatoes, tomatoes, peppers',
              'Aphids (non-persistent); also tuber-borne',
              'Mosaic, vein necrosis, leaf drop in potatoes; can cause PVYNTN strain — necrotic ringspot on tubers that makes them unmarketable',
              'Plant certified disease-free seed potatoes; aphid control; reflective mulch; remove infected plants; do not save tubers from infected plants for replanting',
            ],
            [
              'Impatiens Necrotic Spot Virus (INSV)',
              'Impatiens, dahlias, chrysanthemums, lettuce, peppers, many ornamentals',
              'Western flower thrips',
              'Ring spots, stem lesions, wilting, necrotic patches; can mimic Botrytis but follows thrips activity',
              'Thrips control (spinosad, azadirachtin); remove infected plants immediately; sticky yellow traps for early thrips detection; closely related to TSWV — use same management',
            ],
          ],
        },
        {
          type: 'h3',
          text: 'Preventing Viral Spread',
        },
        {
          type: 'list',
          items: [
            'Start with clean plant material: Buy certified virus-free transplants and seed potatoes. Disease-tested seed is available from reputable seed companies for high-risk crops (tomatoes, peppers, cucumbers).',
            'Control vectors proactively: Aphids, thrips, and whiteflies are the primary viral vectors. Reflective silver mulch is one of the most effective non-chemical tools — the reflected light disorients flying aphids and thrips before they land. Row covers on young transplants provide a physical barrier until plants are established.',
            'Sanitize tools: TMV and other mechanically transmitted viruses can be spread on pruning shears, stakes, and hands. Dip tools in a 10% bleach solution or commercial disinfectant between plants when working in an area with suspected viral infection.',
            'Rogue early: At the first reliable sign of viral infection — mosaic patterning that does not match any nutrient deficiency, ring spots, severe distortion of new growth — pull the plant immediately. Every day an infected plant remains in the garden is an additional opportunity for vector insects to acquire and spread the virus.',
            'Manage weeds: Many weeds serve as reservoir hosts for plant viruses, harboring large aphid populations and viral inoculum near the garden. Purslane, nightshades, and wild cucurbits are common reservoirs.',
            'Use resistant varieties: Virus resistance is bred into many modern vegetable varieties. Look for resistance codes on seed packets — "V" (Verticillium), "F" (Fusarium), "T" (TMV/ToMV), "TSWV" (Tomato Spotted Wilt) in tomatoes; "CMV" and "WMV" in cucumbers; "BCMV" in beans. These are among the most practical disease management tools available.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌿',
          text: 'Aphids transmitting CMV and other non-persistent viruses can spread the virus even when killed by insecticides — because they transmit during the initial probe-feeding, before a contact insecticide takes effect. For non-persistent viruses, reflective mulch and row covers are more effective than insecticide sprays. Mineral oil sprays (applied to leaf surfaces) can reduce non-persistent virus transmission by interfering with aphid feeding, though they must be reapplied frequently.',
        },
      ],
    },
  ],
}
