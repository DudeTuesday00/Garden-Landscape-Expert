# Garden Landscape Expert — CLAUDE.md

This file provides guidance for AI assistants working in this repository.

---

## Project Overview

**Garden Landscape Expert** is a React web application that helps users with garden and landscape planning, design, and expertise.

The app has two sections, switchable via a sticky top nav:

1. **Plant Selection Wizard** — a step-by-step questionnaire that recommends plants from a database of 148 plants across 12 types, based on the user's growing method (traditional or hydroponic), climate zone, soil type, sunlight, space, watering habits, and experience level.

2. **Planting Guides** — a placeholder scaffold of 10 guide categories (~75 guides total) with "Coming Soon" badges. Guides are not yet built.

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
    ├── App.jsx                      # Top-level component — sticky nav + section routing
    ├── index.css                    # Tailwind base styles
    ├── components/
    │   ├── wizard/
    │   │   ├── Wizard.jsx           # Main wizard shell + state
    │   │   ├── WelcomeScreen.jsx    # Intro screen
    │   │   ├── QuestionStep.jsx     # Per-question UI (single + multi-select)
    │   │   ├── ProgressBar.jsx      # Step progress indicator
    │   │   └── Results.jsx          # Plant recommendation cards
    │   └── guides/
    │       └── GuidesHome.jsx       # Guides landing page (Coming Soon placeholders)
    ├── data/
    │   ├── plants.js                # Static plant database (148 plants across 12 types)
    │   ├── questions.js             # Wizard question definitions (with hydro routing flags)
    │   └── guides.js                # 10 guide categories, ~75 placeholder guides
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

- **Planting Guides** — build out the ~75 placeholder guides (scaffold already exists in `guides.js` / `GuidesHome.jsx`)
- Plant care calendar / seasonal reminders
- Landscape design planner
- Soil amendment advisor
- Pest & disease identifier

---

## Completed Work

### Plant Database Expansion ✅

- **148 plants** across **12 types** in `src/data/plants.js`
- **6 original types:** flower, vegetable, fruit, herb, tree, shrub
- **6 new types added:** vine, bulb, grass (ornamental), succulent, fern, groundcover
- `questions.js` updated with all 12 type options
- `Results.jsx` updated with `typeColors` for all 12 types

**Plant counts by type:**
- Flowers: ~26 | Vegetables: ~20 | Fruits: ~14 | Herbs: ~18
- Trees: ~15 | Shrubs: ~16 | Vines: 10 | Bulbs: 9
- Grasses: 8 | Succulents: 8 | Ferns: 6 | Ground Covers: 8

### Planting Guides Section (scaffold) ✅

- `src/data/guides.js` — 10 categories, ~75 guides (20 live, remainder `comingSoon: true`)
- `src/components/guides/GuidesHome.jsx` — guide cards with "Coming Soon" badges; live guides are clickable and route to full guide detail view
- `src/App.jsx` — sticky top nav with two tabs: Plant Wizard and Planting Guides
- `src/components/wizard/Wizard.jsx` — brand strip removed (now in App nav)

**Guide categories:**
1. Trees & Large Plants (8 guides — 8 live ✅)
2. Flowers & Color Gardens (9 guides — 9 live ✅)
3. Edible Gardens (9 guides — 3 live)
4. Herbs & Fragrance (6 guides)
5. Landscape Design (10 guides)
6. Seasonal Guides (8 guides)
7. Pest & Problem Solving (8 guides)
8. Specialty Gardens (10 guides)
9. Container & Small Spaces (8 guides)
10. Eco & Sustainability (9 guides)

### Planting Guides — Live Content ✅

Twenty full guides built out from source `.docx` files and integrated into the app:

- `src/data/guide-content/shade-trees.js` — Shade Trees (`id: 'shade-trees'`)
- `src/data/guide-content/fruit-trees.js` — Fruit Trees (`id: 'fruit-trees'`)
- `src/data/guide-content/ornamental-trees.js` — Ornamental Trees (`id: 'ornamental-trees'`)
- `src/data/guide-content/dwarf-trees.js` — Dwarf Trees for Small Spaces (`id: 'dwarf-trees'`)
- `src/data/guide-content/evergreen-trees.js` — Evergreen Trees (`id: 'evergreen-trees'`)
- `src/data/guide-content/privacy-trees.js` — Fast-Growing Privacy Trees (`id: 'privacy-trees'`)
- `src/data/guide-content/street-trees.js` — Street Trees & Urban Planting (`id: 'street-trees'`)
- `src/data/guide-content/fall-color-trees.js` — Trees for Fall Color (`id: 'fall-color-trees'`)
- `src/data/guide-content/plants-for-color.js` — Plants for Color (`id: 'plants-for-color'`)
- `src/data/guide-content/moon-garden.js` — Moon Garden (`id: 'moon-garden'`)
- `src/data/guide-content/cottage-garden.js` — Cottage Garden Style (`id: 'cottage-garden'`)
- `src/data/guide-content/pollinator-garden.js` — Pollinator Garden (`id: 'pollinator-garden'`)
- `src/data/guide-content/cut-flower-garden.js` — Cut Flower Garden (`id: 'cut-flower-garden'`)
- `src/data/guide-content/wildflower-meadow.js` — Wildflower Meadow (`id: 'wildflower-meadow'`)
- `src/data/guide-content/spring-bulb-garden.js` — Spring Bulb Garden (`id: 'spring-bulb-garden'`)
- `src/data/guide-content/long-blooming-perennials.js` — Long-Blooming Perennials (`id: 'long-blooming-perennials'`)
- `src/data/guide-content/annual-flowers.js` — Annual Flowers: Best Picks (`id: 'annual-flowers'`)
- `src/data/guide-content/pizza-garden.js` — Pizza Garden (`id: 'pizza-garden'`)
- `src/data/guide-content/salad-garden.js` — Salad Garden (`id: 'salad-garden'`)
- `src/data/guide-content/herb-garden-design.js` — Herb Garden Design (`id: 'herb-garden-design'`)
- `src/components/guides/GuideDetail.jsx` — Renders guide content with sections, paragraphs, tips, warnings, lists, and tables

**Guide content data structure** (`src/data/guide-content/*.js`):

Each guide exports a named constant with:

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Matches the guide `id` in `guides.js` |
| `hero` | `{ emoji, title, subtitle }` | Displayed in the guide detail header |
| `intro` | string | Lead paragraph below the hero |
| `sections` | array | Ordered list of content sections |

Each section has:

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique slug for the section |
| `title` | string | Section heading |
| `blocks` | array | Ordered list of content blocks |

Block types supported by `GuideDetail.jsx`:

| `type` | Fields | Renders As |
|--------|--------|------------|
| `p` | `text` | Paragraph |
| `h3` | `text` | Sub-section heading |
| `tip` | `emoji`, `text` | Green callout box |
| `warning` | `emoji`, `text` | Red callout box |
| `list` | `items[]` | Bulleted list |
| `table` | `headers[]`, `rows[][]` | Scrollable table |

**To add a new guide:**
1. Create `src/data/guide-content/<guide-id>.js` following the structure above
2. Import and add it to the `contentMap` in `GuideDetail.jsx`
3. Set `comingSoon: false` on the matching entry in `guides.js`

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
