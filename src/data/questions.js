/**
 * Wizard questions configuration.
 *
 * Each question has:
 *  - id: matches the filter key used in matchPlants.js
 *  - title: question text shown to user
 *  - subtitle: optional help text
 *  - options: array of { value, label, emoji, description }
 *  - multi: whether user can pick multiple options (default false)
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
    id: 'zone',
    title: 'What is your USDA Hardiness Zone?',
    subtitle: 'Your zone is based on average minimum winter temperature. Not sure? Enter your zip code on the USDA website.',
    multi: false,
    options: [
      { value: [3, 4],     label: 'Zones 3–4',  emoji: '❄️',  description: 'Very cold winters (below −30°F to −20°F). Northern US / Canada.' },
      { value: [5, 6],     label: 'Zones 5–6',  emoji: '🌨️', description: 'Cold winters (−20°F to 0°F). Midwest, Mid-Atlantic, Mountain West.' },
      { value: [7, 8],     label: 'Zones 7–8',  emoji: '🌤️', description: 'Mild winters (0°F to 20°F). Pacific NW, South, Transition Zone.' },
      { value: [9, 10],    label: 'Zones 9–10', emoji: '☀️',  description: 'Warm winters (20°F to 40°F). Southwest, Gulf Coast, Central CA.' },
      { value: [10, 11],   label: 'Zones 10–11',emoji: '🌴', description: 'Tropical / nearly frost-free. South Florida, Hawaii.' },
    ],
  },
  {
    id: 'sunlight',
    title: 'How much direct sunlight does your planting area get?',
    subtitle: 'Count the hours of direct sun on a typical summer day.',
    multi: false,
    options: [
      { value: 'full-sun',      label: 'Full Sun',       emoji: '☀️',  description: '6 or more hours of direct sun per day' },
      { value: 'partial-shade', label: 'Partial Shade',  emoji: '⛅',  description: '3–6 hours of direct sun per day' },
      { value: 'full-shade',    label: 'Full Shade',     emoji: '🌑', description: 'Less than 3 hours of direct sun per day' },
    ],
  },
  {
    id: 'soil',
    title: 'What type of soil do you have?',
    subtitle: 'Unsure? Loam is the most common garden soil — a balanced mix of sand, silt, and clay.',
    multi: false,
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
    id: 'water',
    title: 'How much time can you commit to watering?',
    subtitle: 'Be honest — the right plant for your schedule is the one that will actually thrive.',
    multi: false,
    options: [
      { value: 'low',      label: 'Minimal',  emoji: '💧',   description: 'I want plants that mostly take care of themselves' },
      { value: 'moderate', label: 'Moderate', emoji: '💧💧',  description: 'I can water a few times a week when needed' },
      { value: 'high',     label: 'Attentive', emoji: '💧💧💧', description: 'I enjoy daily watering and close plant care' },
    ],
  },
  {
    id: 'space',
    title: 'How much space do you have available?',
    subtitle: 'This helps us recommend plants that fit your footprint.',
    multi: false,
    options: [
      { value: 'container', label: 'Container / Patio', emoji: '🪴', description: 'Pots, window boxes, or a small patio space' },
      { value: 'small',     label: 'Small Garden Bed',  emoji: '🌱', description: 'A dedicated bed up to about 100 sq ft' },
      { value: 'large',     label: 'Large Garden',      emoji: '🏡', description: 'A big yard, raised bed array, or open plot' },
    ],
  },
  {
    id: 'season',
    title: 'When are you planning to plant?',
    subtitle: 'Timing is one of the most important factors for plant success.',
    multi: false,
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
