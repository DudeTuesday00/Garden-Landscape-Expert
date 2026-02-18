/**
 * Wizard questions configuration.
 *
 * Each question has:
 *  - id: matches the filter key used in matchPlants.js
 *  - title: question text shown to user
 *  - subtitle: optional help text
 *  - options: array of { value, label, emoji, description }
 *  - multi: whether user can pick multiple options (default false)
 *  - hydroOnly: if true, only shown when growingMethod === 'hydroponic'
 *  - skipIfHydro: if true, skipped when growingMethod === 'hydroponic'
 */

const questions = [
  {
    id: 'type',
    title: 'What type of plants are you interested in?',
    subtitle: 'Select all that apply.',
    multi: true,
    options: [
      { value: 'flower',    label: 'Flowers',    emoji: '🌸', description: 'Ornamental blooms for beauty and pollinators' },
      { value: 'vegetable', label: 'Vegetables', emoji: '🥦', description: 'Edible crops for the dinner table' },
      { value: 'fruit',     label: 'Fruits',     emoji: '🍓', description: 'Berries, orchard trees, and fruiting vines' },
      { value: 'herb',      label: 'Herbs',      emoji: '🌿', description: 'Culinary and aromatic herbs' },
      { value: 'tree',      label: 'Trees',      emoji: '🌳', description: 'Shade, ornamental, and fruit trees' },
      { value: 'shrub',     label: 'Shrubs',     emoji: '🌲', description: 'Foundation plants, hedges, and flowering shrubs' },
    ],
  },
  {
    id: 'growingMethod',
    title: 'How are you planning to grow your plants?',
    subtitle: 'This helps us tailor questions and recommendations to your setup.',
    multi: false,
    options: [
      { value: 'in-ground',  label: 'In-Ground Garden', emoji: '🏡', description: 'Traditional planting directly in the earth' },
      { value: 'raised-bed', label: 'Raised Bed',        emoji: '🪵', description: 'Elevated beds with custom soil mix' },
      { value: 'container',  label: 'Container / Pots',  emoji: '🪴', description: 'Planters, pots, or window boxes' },
      { value: 'hydroponic', label: 'Hydroponic System', emoji: '💧', description: 'Soil-free growing in nutrient-rich water — indoors or in a greenhouse' },
    ],
  },
  {
    id: 'zone',
    title: 'What is your USDA Hardiness Zone?',
    subtitle: 'Your zone is based on average minimum winter temperature. Not sure? Enter your zip code on the USDA website.',
    multi: false,
    skipIfHydro: true,
    options: [
      { value: [3, 4],   label: 'Zones 3–4',   emoji: '❄️',  description: 'Very cold winters (below −30°F to −20°F). Northern US / Canada.' },
      { value: [5, 6],   label: 'Zones 5–6',   emoji: '🌨️', description: 'Cold winters (−20°F to 0°F). Midwest, Mid-Atlantic, Mountain West.' },
      { value: [7, 8],   label: 'Zones 7–8',   emoji: '🌤️', description: 'Mild winters (0°F to 20°F). Pacific NW, South, Transition Zone.' },
      { value: [9, 10],  label: 'Zones 9–10',  emoji: '☀️',  description: 'Warm winters (20°F to 40°F). Southwest, Gulf Coast, Central CA.' },
      { value: [10, 11], label: 'Zones 10–11', emoji: '🌴', description: 'Tropical / nearly frost-free. South Florida, Hawaii.' },
    ],
  },
  {
    id: 'sunlight',
    title: 'How much light does your growing area get?',
    subtitle: 'For outdoor gardens, count hours of direct sun. For hydroponic setups, grow lights qualify as full sun.',
    multi: false,
    options: [
      { value: 'full-sun',      label: 'Full Sun / Grow Lights', emoji: '☀️',  description: '6+ hours of sun, or a dedicated grow light setup' },
      { value: 'partial-shade', label: 'Partial Light',          emoji: '⛅',  description: '3–6 hours of natural light (window or partial coverage)' },
      { value: 'full-shade',    label: 'Low Light',              emoji: '🌑', description: 'Less than 3 hours — a dim room or north-facing window' },
    ],
  },
  {
    id: 'soil',
    title: 'What type of soil do you have?',
    subtitle: 'Unsure? Loam is the most common garden soil — a balanced mix of sand, silt, and clay.',
    multi: false,
    skipIfHydro: true,
    options: [
      { value: 'loam',   label: 'Loam',   emoji: '🟤', description: 'Balanced, crumbly, easy to work — ideal for most plants' },
      { value: 'clay',   label: 'Clay',   emoji: '🔴', description: 'Heavy, slow-draining, sticks together when wet' },
      { value: 'sandy',  label: 'Sandy',  emoji: '🟡', description: 'Loose, gritty, drains very quickly — dries out fast' },
      { value: 'silty',  label: 'Silty',  emoji: '⚪', description: 'Smooth, slippery when wet, holds moisture well' },
      { value: 'chalky', label: 'Chalky', emoji: '🪨', description: 'Pale, alkaline, often stony — can lack nutrients' },
      { value: 'peaty',  label: 'Peaty',  emoji: '🌑', description: 'Dark, spongy, acidic — holds lots of moisture' },
    ],
  },
  {
    id: 'hydroSystem',
    title: 'What type of hydroponic system are you using (or planning to use)?',
    subtitle: 'Not sure yet? Kratky is the easiest starting point — no pumps or timers required.',
    multi: false,
    hydroOnly: true,
    options: [
      { value: 'kratky',    label: 'Kratky / Passive',      emoji: '🫙', description: 'Roots suspended in a nutrient solution — no pump needed. Great for beginners.' },
      { value: 'dwc',       label: 'Deep Water Culture',    emoji: '🪣', description: 'Roots submerged with an air pump for oxygenation. Fast growth, popular choice.' },
      { value: 'nft',       label: 'Nutrient Film (NFT)',   emoji: '🌊', description: 'A thin stream of nutrients flows past the roots. Excellent for leafy greens.' },
      { value: 'ebb-flow',  label: 'Ebb & Flow',            emoji: '⏱️', description: 'Timed flood-and-drain cycles. Versatile and works for many plant types.' },
    ],
  },
  {
    id: 'water',
    title: 'How much time can you commit to watering and maintenance?',
    subtitle: 'Be honest — the right plant for your schedule is the one that will actually thrive.',
    multi: false,
    options: [
      { value: 'low',      label: 'Minimal',   emoji: '💧',     description: 'I want plants that mostly take care of themselves' },
      { value: 'moderate', label: 'Moderate',  emoji: '💧💧',   description: 'I can water or check in a few times a week' },
      { value: 'high',     label: 'Attentive', emoji: '💧💧💧', description: 'I enjoy daily tending and close plant care' },
    ],
  },
  {
    id: 'space',
    title: 'How much space do you have available?',
    subtitle: 'This helps us recommend plants that fit your footprint.',
    multi: false,
    options: [
      { value: 'container', label: 'Container / Small Setup', emoji: '🪴', description: 'Pots, a small NFT channel, or a single bucket system' },
      { value: 'small',     label: 'Small Garden / Bench',    emoji: '🌱', description: 'A small bed, grow tent, or multi-bucket setup' },
      { value: 'large',     label: 'Large Garden / System',   emoji: '🏡', description: 'A full yard, large greenhouse, or commercial-scale system' },
    ],
  },
  {
    id: 'season',
    title: 'When are you planning to plant?',
    subtitle: 'Timing is one of the most important factors for outdoor plant success.',
    multi: false,
    skipIfHydro: true,
    options: [
      { value: 'spring', label: 'Spring', emoji: '🌷', description: 'After last frost through late May' },
      { value: 'summer', label: 'Summer', emoji: '☀️', description: 'June through August' },
      { value: 'fall',   label: 'Fall',   emoji: '🍂', description: 'September through first frost' },
      { value: 'winter', label: 'Winter', emoji: '❄️', description: 'Planning ahead or in a mild-winter climate' },
    ],
  },
  {
    id: 'experience',
    title: 'How would you describe your gardening experience?',
    subtitle: 'No wrong answer — this helps us match plants to your confidence level.',
    multi: false,
    options: [
      { value: 'beginner',     label: 'Beginner',     emoji: '🌱', description: 'New to gardening or just getting started' },
      { value: 'intermediate', label: 'Intermediate', emoji: '🌿', description: 'A few seasons of experience, comfortable with basics' },
      { value: 'advanced',     label: 'Advanced',     emoji: '🌳', description: 'Experienced gardener who enjoys a challenge' },
    ],
  },
]

export default questions
