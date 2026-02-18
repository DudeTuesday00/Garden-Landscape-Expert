# Garden Landscape Expert — CLAUDE.md

This file provides guidance for AI assistants working in this repository.

---

## Project Overview

**Garden Landscape Expert** is a React web application that helps users with garden and landscape planning, design, and expertise.

The app is built section by section. The first feature is the **Plant Selection Wizard** — a step-by-step questionnaire that recommends plants based on the user's climate zone, soil type, sunlight, space, watering habits, and experience level.

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
    │   ├── plants.js                # Static plant database (~30 plants)
    │   └── questions.js             # Wizard question definitions
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

| Field           | Type              | Description                                      |
|-----------------|-------------------|--------------------------------------------------|
| `id`            | string            | Unique slug                                      |
| `name`          | string            | Display name                                     |
| `emoji`         | string            | Single emoji for visual identity                 |
| `type`          | string            | `flower` `vegetable` `fruit` `herb` `tree` `shrub` |
| `zones`         | number[]          | Compatible USDA hardiness zones (3–11)           |
| `sunlight`      | string[]          | `full-sun` `partial-shade` `full-shade`          |
| `soil`          | string[]          | `loam` `clay` `sandy` `silty` `chalky` `peaty`  |
| `water`         | string            | `low` `moderate` `high`                         |
| `space`         | string[]          | `container` `small` `large`                     |
| `seasons`       | string[]          | `spring` `summer` `fall` `winter`               |
| `experience`    | string            | `beginner` `intermediate` `advanced`            |
| `description`   | string            | Short user-facing description                    |
| `careNotes`     | string            | Quick care tip                                   |
| `daysToHarvest` | string (optional) | Edible plants only                               |

---

## Planned Sections (Future)

- Plant care calendar / seasonal reminders
- Landscape design planner
- Companion planting guide
- Soil amendment advisor
- Pest & disease identifier

---

## Notes for AI Assistants

- Prefer editing existing files over creating new ones unless strictly necessary
- Avoid over-engineering; keep solutions minimal and focused
- Do not push to branches other than the designated `claude/` branch without explicit permission
- When adding plants, follow the schema table above exactly
- The matching algorithm in `matchPlants.js` uses hard filters (type, zone, sunlight, season) and soft scoring (soil, water, space, experience) — understand this before modifying
