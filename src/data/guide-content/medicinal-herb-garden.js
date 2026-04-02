export const medicinalHerbGardenContent = {
  id: 'medicinal-herb-garden',
  hero: {
    emoji: '🌿',
    title: 'Medicinal Herb Garden',
    subtitle: 'Time-Honored Healing Herbs You Can Grow and Use at Home',
  },
  intro: 'Humans have grown medicinal herbs for as long as we have grown anything at all. Long before the first pharmacies, every household garden held plants for healing — lavender for calm, chamomile for sleep, echinacea for illness, mint for digestion. This guide reconnects you to that tradition: which plants to grow, how to cultivate them across every American climate, how to harvest and preserve their medicinal qualities, and how to prepare simple remedies that have served generations of healers. Always consult your healthcare provider when health matters are serious.',
  sections: [
    {
      id: 'safety-ethics-legal',
      title: 'Section 1: Safety, Ethics & Legal Framework',
      blocks: [
        {
          type: 'p',
          text: 'Medicinal herbs are not a category separate from medicine — they are the oldest form of medicine, and many of our most important pharmaceutical drugs are derived from or modeled on plant compounds. This heritage means that medicinal herbs carry both genuine therapeutic value and real potential for harm when used incorrectly. The home herbalist who treats this knowledge seriously — who learns to use plants thoughtfully, understand their limits, and respect the boundaries between self-care and medical treatment — will have a safe, enriching, and genuinely beneficial practice.',
        },
        {
          type: 'p',
          text: 'This guide takes a safety-first approach throughout. Every herb profile includes honest information about interactions, contraindications, and appropriate limitations of use. Please read this section before working with any medicinal plants.',
        },
        {
          type: 'h3',
          text: 'The Non-Negotiable Safety Rules',
        },
        {
          type: 'list',
          items: [
            'Consult a healthcare provider for serious conditions: Medicinal herbs are appropriate for minor ailments, wellness support, and adjunct care — not as the primary treatment for serious illness, chronic disease requiring management, or emergencies. When in doubt, see a doctor first.',
            'Never stop prescribed medication to use herbs instead without medical supervision: Many people are harmed each year by discontinuing effective conventional treatment in favor of herbal alternatives. Herbs and pharmaceuticals are not in opposition — they can complement each other, but always with physician knowledge and guidance.',
            'Drug-herb interactions are real: Dozens of well-documented interactions exist between common herbs and pharmaceutical drugs. St. John\'s Wort alone interacts with 70+ drugs. Garlic thins blood similarly to warfarin. Ginkgo interacts with blood thinners. Always tell your healthcare providers what herbs you are taking.',
            'Correct identification is essential: Before using any plant medicinally, be absolutely certain of its identification. Dangerous lookalikes exist. Poison hemlock resembles Queen Anne\'s lace. Water hemlock resembles elderberry. Use multiple identification resources; grow from identified nursery stock rather than wild-harvesting until you have expert-level identification skills.',
            'Pregnant and breastfeeding women require special caution: Many medicinal herbs are contraindicated during pregnancy. Some — like blue cohosh, pennyroyal, and tansy — can cause miscarriage. Others may affect fetal development. When pregnant or nursing, consult your midwife or obstetrician before using any medicinal herb beyond common culinary levels.',
            'Children require adjusted doses: Herb doses for children are significantly lower than adult doses; many herbs are not appropriate for very young children at all. When using herbs with children, consult a qualified practitioner for appropriate dosing.',
            'Start low, go slow: When trying a new herb, begin with the lowest effective dose and observe your response for several days before increasing. Individual responses to plant compounds vary considerably.',
          ],
        },
        {
          type: 'h3',
          text: 'Drug-Herb Interactions: The Most Important List',
        },
        {
          type: 'table',
          headers: ['Herb', 'Interacts With', 'Type of Interaction', 'Clinical Significance'],
          rows: [
            ['St. John\'s Wort (Hypericum perforatum)', 'Antidepressants (SSRIs), blood thinners (warfarin), birth control pills, HIV medications, cyclosporine, digoxin, many chemotherapy agents', 'Induces CYP enzymes — accelerates breakdown of many drugs, reducing their effectiveness; combining with SSRIs risks serotonin syndrome', 'HIGH — one of the most significant herb-drug interactions known; do not use St. John\'s Wort with any prescription medications without physician approval'],
            ['Garlic (high-dose supplements)', 'Warfarin; aspirin; other antiplatelet drugs; HIV medications', 'Antiplatelet and anticoagulant effects enhance bleeding risk; may reduce effectiveness of HIV drugs', 'MODERATE — culinary amounts are generally safe; high-dose garlic supplements significantly increase bleeding risk, especially perioperatively'],
            ['Ginkgo (Ginkgo biloba)', 'Warfarin; aspirin; NSAIDs; SSRIs; MAOIs', 'Antiplatelet properties increase bleeding risk; may enhance or interfere with antidepressant effects', 'MODERATE — significant bleeding risk with anticoagulants; stop 2 weeks before surgery'],
            ['Valerian', 'Sedatives; benzodiazepines; barbiturates; alcohol; anesthesia', 'Additive CNS depressant effects; may enhance sedation unpredictably', 'MODERATE — avoid with prescription sedatives; stop 2 weeks before surgery'],
            ['Echinacea', 'Immunosuppressants; corticosteroids; certain antifungals; hepatotoxic drugs', 'Immune stimulation may counteract immunosuppressant therapy; theoretical liver concerns with long-term use + hepatotoxic drugs', 'LOW-MODERATE — primary concern for transplant patients on immunosuppressants; generally safe for healthy adults short-term'],
            ['Kava', 'Alcohol; benzodiazepines; liver-processed medications (many)', 'Additive liver stress; additive CNS depression; hepatotoxicity risk', 'HIGH — kava has caused liver failure in some cases; avoid with alcohol or any hepatotoxic medications; not for those with liver disease'],
            ['Licorice root (high-dose)', 'Antihypertensives; diuretics; digoxin; corticosteroids', 'Raises blood pressure; causes potassium loss that can dangerously amplify digoxin toxicity', 'HIGH with digoxin — avoid high-dose or long-term licorice root use; small amounts in teas generally safe'],
            ['Feverfew', 'Warfarin; aspirin; NSAIDs; other antiplatelet drugs', 'Antiplatelet effects increase bleeding risk', 'MODERATE — do not use with blood thinners; stop 2 weeks before surgery'],
            ['Ginseng (Panax)', 'Warfarin; stimulants; diabetes medications; MAOIs; estrogens', 'Anticoagulant effects; may lower blood sugar excessively with diabetes drugs; stimulant interactions', 'MODERATE — monitor blood sugar with diabetes medications; avoid with MAOIs and warfarin'],
            ['Black Cohosh', 'Hormone-sensitive medications; tamoxifen; hepatotoxic drugs', 'Weak estrogenic activity may interact with hormone therapies; rare liver toxicity reports', 'LOW-MODERATE — avoid with hormone-sensitive cancers; use quality-verified products; stop if liver symptoms develop'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚕️',
          text: 'Medical Disclaimer: This guide is for educational purposes only. It does not constitute medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider before using any herb medicinally, especially if you have existing health conditions, take prescription medications, are pregnant or breastfeeding, or are treating children. The information presented reflects traditional use and available research but should not replace professional medical care.',
        },
        {
          type: 'h3',
          text: 'Legal Considerations for Home Herbalists',
        },
        {
          type: 'p',
          text: 'The legal framework around medicinal herbs in the United States is different from pharmaceuticals but not without structure. Understanding it helps home herbalists work confidently and legally.',
        },
        {
          type: 'table',
          headers: ['Topic', 'What the Law Says', 'Practical Guidance'],
          rows: [
            ['Federal regulation of herbs', 'The FDA regulates herbs sold as dietary supplements under DSHEA (1994). Herbs cannot be marketed to diagnose, treat, cure, or prevent specific diseases — but can be marketed for general wellness and structure/function claims.', 'Growing and using herbs in your own home is not regulated by the FDA.'],
            ['Growing for personal use', 'No federal restrictions on growing medicinal herbs for personal use. Some states have restrictions on specific plants — particularly those with potential for misuse (kratom is regulated or banned in several states).', 'Check your state\'s laws for any plants you\'re uncertain about.'],
            ['Wild harvesting', 'Wild harvesting on federal lands (National Forests, BLM land) typically requires a permit for commercial quantities; personal-use amounts are often allowed but check with the specific land management agency. Many state parks prohibit any plant collection.', 'Never wild-harvest without permission on private land.'],
            ['Sharing and selling', 'Sharing herbs with family and friends is generally unregulated. Selling herbal products as food or dietary supplements subjects you to FDA oversight and state food safety regulations. Selling herbs with medical claims (e.g., "cures diabetes") is illegal under federal law.', 'Formal herbalism practice is regulated differently by each state — many states allow traditional herbalism consultation without licensure, while others have restrictions.'],
            ['Endangered and protected species', 'Some medicinal plants are protected under state or federal law due to overharvesting — American ginseng (Panax quinquefolius), goldenseal (Hydrastis canadensis), and black cohosh (Actaea racemosa) are all of conservation concern.', 'Prioritize garden-grown over wild-harvested specimens of any plant with conservation concerns. Check the USDA Plants Database and your state\'s natural heritage program for protected status.'],
          ],
        },
      ],
    },
  ],
}
