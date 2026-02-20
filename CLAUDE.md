# Garden Landscape Expert — CLAUDE.md

This file provides guidance for AI assistants working in this repository.

---

## Project Overview

**Garden Landscape Expert** is a React web application that helps users with garden and landscape planning, design, and expertise.

The app is built section by section. The first feature is the **Plant Selection Wizard** — a step-by-step questionnaire that recommends plants based on the user's growing method (traditional or hydroponic), climate zone, soil type, sunlight, space, watering habits, and experience level.

The wizard supports two paths:
- **Traditional path** (in-ground, raised bed, container): asks zone, soil, and season questions
- **Hydroponic path**: skips zone/soil/season (irrelevant indoors), asks hydroponic system type instead, and filters to hydro-compatible plants only

---

## Repository Structure

```
Garden-Landscape-Expert/
├── CLAUDE.md                        # This file
├── index.html                       # Vite entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx                     # React root
    ├── App.jsx                      # Top-level component
    ├── index.css                    # Tailwind base styles
    ├── components/
    │   └── wizard/
    │       ├── Wizard.jsx           # Main wizard shell + state
    │       ├── WelcomeScreen.jsx    # Intro screen
    │       ├── QuestionStep.jsx     # Per-question UI (single + multi-select)
    │       ├── ProgressBar.jsx      # Step progress indicator
    │       └── Results.jsx          # Plant recommendation cards
    ├── data/
    │   ├── plants.js                # Static plant database (32 plants across 6 types)
    │   └── questions.js             # Wizard question definitions (with hydro routing flags)
    └── logic/
        └── matchPlants.js           # Scoring + filtering algorithm
```

---

## Tech Stack

- **Language:** JavaScript (JSX)
- **Framework:** React 18 + Vite 6
- **Styling:** Tailwind CSS 3 with custom `garden` and `earth` color palettes
- **Database:** Static JS files (no backend)
- **Testing:** Not yet configured

---

## Development Workflow

### Branching

- All feature work goes on a dedicated branch
- Branch naming: `feature/<short-description>` or `fix/<short-description>`
- AI assistant development branches follow the pattern: `claude/<session-id>`

### Commits

- Write clear, imperative commit messages (e.g., `Add plant search feature`)
- Keep commits focused and atomic

### Running the Project

```bash
# Install dependencies
npm install

# Run development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Key Conventions

- **Component naming:** PascalCase JSX files in `src/components/`
- **Data files:** Plain JS exports in `src/data/`
- **Logic files:** Pure functions in `src/logic/`
- **Styling:** Tailwind utility classes only — no separate CSS files except `index.css`
- **Plant data:** Add new plants to `src/data/plants.js` following the existing schema
- **Questions:** Add/edit wizard questions in `src/data/questions.js`

### Plant Schema

Each plant in `plants.js` has:

| Field                | Type              | Description                                         |
|----------------------|-------------------|-----------------------------------------------------|
| `id`                 | string            | Unique slug                                         |
| `name`               | string            | Display name                                        |
| `emoji`              | string            | Single emoji for visual identity                    |
| `type`               | string            | `flower` `vegetable` `fruit` `herb` `tree` `shrub` `vine` `bulb` `grass` `succulent` `fern` `groundcover` |
| `zones`              | number[]          | Compatible USDA hardiness zones (3–11)              |
| `sunlight`           | string[]          | `full-sun` `partial-shade` `full-shade`             |
| `soil`               | string[]          | `loam` `clay` `sandy` `silty` `chalky` `peaty`      |
| `water`              | string            | `low` `moderate` `high`                             |
| `space`              | string[]          | `container` `small` `large`                         |
| `seasons`            | string[]          | `spring` `summer` `fall` `winter`                   |
| `experience`         | string            | `beginner` `intermediate` `advanced`                |
| `description`        | string            | Short user-facing description                       |
| `careNotes`          | string            | Quick care tip (shown for traditional growers)      |
| `hydroponic`         | boolean           | Whether plant grows well in hydroponic systems      |
| `hydroponicsNotes`   | string (optional) | Hydroponic-specific care tip (shown on hydro path)  |
| `daysToHarvest`      | string (optional) | Edible plants only                                  |

### Question Schema

Each question in `questions.js` has:

| Field         | Type              | Description                                                         |
|---------------|-------------------|---------------------------------------------------------------------|
| `id`          | string            | Key used to store answer and map to matchPlants logic               |
| `title`       | string            | Question text shown to the user                                     |
| `subtitle`    | string (optional) | Help text shown below the title                                     |
| `multi`       | boolean           | Whether multiple options can be selected                            |
| `options`     | array             | `{ value, label, emoji, description }` per choice                  |
| `skipIfHydro` | boolean (optional)| If true, question is hidden when `growingMethod === 'hydroponic'`   |
| `hydroOnly`   | boolean (optional)| If true, question is only shown when `growingMethod === 'hydroponic'`|

### Wizard Question Flow

| Question        | Traditional path | Hydroponic path |
|-----------------|:---:|:---:|
| Plant type      | ✅  | ✅  |
| Growing method  | ✅  | ✅  |
| USDA Zone       | ✅  | ⛔ skipped |
| Sunlight        | ✅  | ✅  |
| Soil type       | ✅  | ⛔ skipped |
| Hydro system    | ⛔ skipped | ✅  |
| Watering        | ✅  | ✅  |
| Space           | ✅  | ✅  |
| Season          | ✅  | ⛔ skipped |
| Experience      | ✅  | ✅  |

---

## Planned Sections (Future)

- Plant care calendar / seasonal reminders
- Landscape design planner
- Companion planting guide
- Soil amendment advisor
- Pest & disease identifier

---

## Current Implementation Plan

### Task 1: Expand Plant Database (~110 new plants, 6 new types)

**New plant types to add:** vine, bulb, grass (ornamental), succulent, fern, groundcover

**Files to modify:**

- **`src/data/plants.js`** — Add ~110 new plants (target ~145 total). Schema unchanged.
  - Flowers (~15 new): Petunia, Zinnia, Geranium, Daylily, Salvia, Peony, Bleeding Heart, Bee Balm, Yarrow, Coreopsis, Columbine, Foxglove, Dianthus, Astilbe, Snapdragon
  - Vegetables (~12 new): Eggplant, Sugar Snap Pea, Garlic, Radish, Beet, Cabbage, Pumpkin, Arugula, Onion, Corn, Bok Choy, Collard Greens
  - Fruits (~8 new): Peach Tree, Pear Tree, Cherry Tree, Grape, Blackberry, Watermelon, Fig Tree, Lemon Tree (dwarf)
  - Herbs (~9 new): Thyme, Oregano, Dill, Cilantro, Sage, Lemon Balm, Chamomile, Fennel, Stevia
  - Trees (~9 new): Red Maple, Dogwood, Magnolia, Crape Myrtle, Redbud, River Birch, Weeping Willow, Red Oak, Arborvitae
  - Shrubs (~10 new): Boxwood, Lilac, Forsythia, Azalea, Rhododendron, Spirea, Holly, Nandina, Viburnum, Smokebush
  - Vines (~10 new): Clematis, Morning Glory, Wisteria, Trumpet Vine, Virginia Creeper, Climbing Hydrangea, Sweet Pea, Passionflower, Bougainvillea, Honeysuckle
  - Bulbs (~10 new): Tulip, Daffodil, Dahlia, Gladiolus, Allium, Bearded Iris, Hyacinth, Caladium, Canna Lily, Crocus
  - Ornamental Grasses (~8 new): Blue Fescue, Feather Reed Grass, Fountain Grass, Maiden Grass, Muhly Grass, Japanese Forest Grass, Switchgrass, Liriope
  - Succulents (~8 new): Aloe Vera, Jade Plant, Echeveria, Sedum, Agave, Haworthia, Hens and Chicks, Prickly Pear Cactus
  - Ferns (~6 new): Boston Fern, Japanese Painted Fern, Ostrich Fern, Autumn Fern, Maidenhair Fern, Lady Fern
  - Ground Covers (~8 new): Creeping Phlox, Pachysandra, Ajuga, Vinca, Creeping Jenny, Ice Plant, Creeping Thyme, Sweet Woodruff

- **`src/data/questions.js`** — Add 6 new options to the `type` question:
  - `vine` (Vines), `bulb` (Bulbs), `grass` (Ornamental Grasses), `succulent` (Succulents & Cacti), `fern` (Ferns), `groundcover` (Ground Covers)

- **`src/components/wizard/Results.jsx`** — Add typeColor entries for new types:
  - vine: `bg-green-100 text-green-700`
  - bulb: `bg-purple-100 text-purple-700`
  - grass: `bg-yellow-100 text-yellow-700`
  - succulent: `bg-orange-100 text-orange-700`
  - fern: `bg-cyan-100 text-cyan-700`
  - groundcover: `bg-lime-100 text-lime-700`

### Task 2: Planting Guides Section (placeholders only)

**New files to create:**

- **`src/data/guides.js`** — 10 categories, ~60 placeholder guides:
  1. Trees & Large Plants — Shade Trees, Fruit Trees, Ornamental Trees, Dwarf Trees, Evergreen Trees, Fast-Growing Privacy Trees, Street Trees
  2. Flowers & Color Gardens — Plants for Color, Moon Garden, Cottage Garden, Pollinator Garden, Cut Flower Garden, Wildflower Meadow, Long-Blooming Perennials
  3. Edible Gardens — Salad Garden, Herb Garden Design, Pizza Garden, Tea Garden, Children's Vegetable Garden, Edible Flowers, Square Foot Gardening, Three Sisters Garden
  4. Herbs & Fragrance — Plants for Smell, Culinary Herb Garden, Medicinal Herb Garden, Fragrant Garden Path, Aromatherapy Garden
  5. Landscape Design — Front Yard Curb Appeal, Backyard Privacy Screening, Low-Maintenance Landscape, Four-Season Garden Design, Japanese Garden Elements, Zen Garden, Xeriscape Design
  6. Seasonal Guides — Winter Garden Prep, Spring Garden Startup, Summer Maintenance, Fall Planting Guide, Post-Harvest Actions, Year-Round Calendar, Overwintering Tender Plants
  7. Pest & Problem Solving — Pest-Eliminating Plants, Organic Pest Control, Common Garden Diseases, Deer-Resistant Plants, Rabbit-Proof Garden, Weed Management
  8. Specialty Gardens — Pet-Friendly Plants, Rain Garden, Butterfly Garden, Hummingbird Garden, Native Plants, Sensory Garden, Water Feature Plants, Fire-Safe Landscaping
  9. Container & Small Spaces — Porch Plants, Sunroom Plants, Balcony Garden, Window Box Gardening, Hanging Basket Guide, Indoor Houseplants 101
  10. Eco & Sustainability — Composting Basics, Mulching Guide, Water-Wise Gardening, Companion Planting, Starting a Rain Barrel, Soil Health & Amendment

- **`src/components/guides/GuidesHome.jsx`** — Grid of guide cards with "Coming Soon" badges, grouped by category. Same Tailwind aesthetic as the wizard.

**Files to modify:**

- **`src/App.jsx`** — Add `section` state (`'wizard'` | `'guides'`), render top nav with two tabs, conditionally render Wizard or GuidesHome
- **`src/components/wizard/Wizard.jsx`** — Remove internal brand strip (moved to App.jsx nav)

### Updated Repository Structure (after implementation)

```
src/
├── App.jsx                          # Nav + section routing
├── components/
│   ├── wizard/                      # (unchanged except brand strip removal)
│   └── guides/
│       └── GuidesHome.jsx           # Guides landing page
├── data/
│   ├── plants.js                    # ~145 plants across 12 types
│   ├── questions.js                 # Updated with 6 new type options
│   └── guides.js                    # 10 categories, ~60 placeholder guides
└── logic/
    └── matchPlants.js               # (unchanged — handles new types automatically)
```

---

## Notes for AI Assistants

- Prefer editing existing files over creating new ones unless strictly necessary
- Avoid over-engineering; keep solutions minimal and focused
- Do not push to branches other than the designated `claude/` branch without explicit permission
- When adding plants, follow the schema table above exactly
- The matching algorithm in `matchPlants.js` has two paths — understand both before modifying:
  - **Traditional path:** hard filters on type, zone, sunlight, season; soft scoring on soil, water, space, experience
  - **Hydroponic path:** hard filters on `plant.hydroponic === true` and type; skips zone/soil/season; soft scores hydro system compatibility, water, space, experience
- The wizard question list is computed dynamically in `Wizard.jsx` via `getActiveQuestions(answers)` — adding a question with `skipIfHydro` or `hydroOnly` is all that's needed to route it correctly
