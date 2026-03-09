# Planting Atlas — CLAUDE.md

This file provides guidance for AI assistants working in this repository.

---

## Project Overview

**Planting Atlas** ("Plan it. Plant it. Grow it.") is a React web application that helps users with garden and landscape planning, design, and expertise.

The app has a **home page** with two prominent path cards, each leading to one of the two sections:

1. **Garden Architect** ("The Smartest Way to Plan Your Garden") — a step-by-step questionnaire that recommends plants from a database of 148 plants across 12 types, based on the user's growing method (traditional or hydroponic), climate zone, soil type, sunlight, space, watering habits, and experience level.

2. **Plantopedia** ("Your Green Thumb Repository") — 10 guide categories (~75 guides total). 27 guides are fully built and live; the remainder show "Coming Soon" badges. Live guides are clickable and route to a full detail view with sections, tables, tips, callouts, and affiliate product cards.

The wizard supports two paths:
- **Traditional path** (in-ground, raised bed, container): asks zone, soil, and season questions
- **Hydroponic path**: skips zone/soil/season (irrelevant indoors), asks hydroponic system type instead, and filters to hydro-compatible plants only

---

## Repository Structure

```
Garden-Landscape-Expert/
├── CLAUDE.md                        # This file
├── index.html                       # Vite entry point — GTM, GA4, and AdSense scripts in <head>; GTM noscript after <body>
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   ├── ads.txt                      # AdSense ads.txt — publisher verification (pub-XXXXXXXXXXXXXXXX placeholder; update when approved)
│   ├── robots.txt
│   └── sitemap.xml
└── src/
    ├── main.jsx                     # React root — wrapped in <HelmetProvider>
    ├── App.jsx                      # Top-level component — sticky nav (Garden Architect, Plantopedia, Contact, dark toggle) + section routing
    ├── index.css                    # Tailwind base styles
    ├── components/
    │   ├── SEO.jsx                  # Reusable <Helmet> wrapper — title, description, OG, Twitter Card, canonical
    │   ├── HomePage.jsx             # Landing page — two image-backed path cards
    │   ├── ContactUs.jsx            # Contact form — Formspree (mlgpgdny); name, email, subject dropdown, message; success state
    │   ├── PrivacyPolicy.jsx        # Static privacy policy page
    │   ├── wizard/
    │   │   ├── Garden Architect.png   # Hero image for the Garden Architect homepage card
    │   │   ├── Garden Architect 2.png # Hero image shown on the WelcomeScreen (Garden Architect landing)
    │   │   ├── Wizard.jsx             # Main wizard shell + state
    │   │   ├── WelcomeScreen.jsx      # Intro screen (titled "Garden Architect") — shows Garden Architect 2.png at top
    │   │   ├── QuestionStep.jsx       # Per-question UI (single + multi-select)
    │   │   ├── ProgressBar.jsx        # Step progress indicator
    │   │   └── Results.jsx            # Plant recommendation cards
    │   └── guides/
    │       ├── Plantopedia.png        # Hero image for the Plantopedia homepage card
    │       ├── Plantopedia2.png       # Hero image shown on the GuidesHome (Plantopedia landing)
    │       ├── GuidesHome.jsx         # Plantopedia landing page — shows Plantopedia2.png at top; card grid + Coming Soon badges; includes <SEO>
    │       └── GuideDetail.jsx        # Full guide renderer — imports contentMap + per-guide color themes; includes per-guide <SEO>
    ├── data/
    │   ├── plants.js                # Static plant database (148 plants across 12 types)
    │   ├── questions.js             # Wizard question definitions (with hydro routing flags)
    │   ├── guides.js                # 10 guide categories, ~75 guides (comingSoon flag per guide)
    │   └── guide-content/           # One JS file per live guide (26 files currently)
    │       ├── shade-trees.js
    │       ├── fruit-trees.js
    │       ├── ornamental-trees.js
    │       ├── dwarf-trees.js
    │       ├── evergreen-trees.js
    │       ├── privacy-trees.js
    │       ├── street-trees.js
    │       ├── fall-color-trees.js
    │       ├── plants-for-color.js
    │       ├── moon-garden.js
    │       ├── cottage-garden.js
    │       ├── pollinator-garden.js
    │       ├── cut-flower-garden.js
    │       ├── wildflower-meadow.js
    │       ├── spring-bulb-garden.js
    │       ├── long-blooming-perennials.js
    │       ├── annual-flowers.js
    │       ├── pizza-garden.js
    │       ├── salad-garden.js
    │       ├── herb-garden-design.js
    │       ├── tea-garden.js
    │       ├── childrens-vegetable-garden.js
    │       ├── square-foot-gardening.js
    │       ├── three-sisters.js
    │       ├── edible-flowers.js
    │       └── salsa-garden.js
    └── logic/
        └── matchPlants.js           # Scoring + filtering algorithm
```

---

## Tech Stack

- **Language:** JavaScript (JSX)
- **Framework:** React 18 + Vite 6
- **Styling:** Tailwind CSS 3 with custom `garden` and `earth` color palettes (see brand colors below)
- **SEO:** `react-helmet-async` — dynamic per-page `<title>`, description, OG, and Twitter Card tags
- **Analytics:** Google Tag Manager (`GTM-TT46476S`) + Google Analytics 4 (`G-7S7248T634`) — both scripts in `index.html` `<head>`
- **Ads:** Google AdSense (`ca-pub-2083020536499662`) auto-ads script in `index.html` `<head>`
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
- **Brand colors:** Do not substitute standard Tailwind greens/ambers for brand colors — always use `garden-*` and `earth-*` tokens

### Brand Color Palette

| Token | Hex | Role |
|-------|-----|------|
| `garden-50` | `#F5F5F0` | Page background |
| `garden-600` | `#6FBF4B` | Primary buttons (Garden Green) |
| `garden-700` | `#5eae3d` | Button hover state |
| `garden-800` | `#2F6B3F` | Headers, brand text (Deep Green) |
| `earth-500` | `#E5B24A` | Highlights, accents (Sunlight Gold) |
| body text | `#2E2E2E` | Dark Slate — set directly in `index.css` |

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

- **Planting Guides (ongoing)** — 26 of ~75 guides are live; continue adding guides from source `.docx` files using the established pattern in `guide-content/`
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

- `src/data/guides.js` — 10 categories, ~75 guides (27 live, remainder `comingSoon: true`)
- `src/components/guides/GuidesHome.jsx` — guide cards with "Coming Soon" badges; live guides are clickable and route to full guide detail view
- `src/App.jsx` — home page with two path cards; sticky nav with tabs: Garden Architect and Plantopedia
- `src/components/wizard/Wizard.jsx` — brand strip removed (now in App nav)

**Guide categories:**
1. Trees & Large Plants (8 guides — 8 live ✅)
2. Flowers & Color Gardens (9 guides — 9 live ✅)
3. Edible Gardens (9 guides — 9 live ✅)
4. Herbs & Fragrance (6 guides)
5. Landscape Design (10 guides)
6. Seasonal Guides (8 guides)
7. Pest & Problem Solving (8 guides)
8. Specialty Gardens (11 guides — 1 live ✅)
9. Container & Small Spaces (8 guides)
10. Eco & Sustainability (9 guides)

### Planting Guides — Live Content ✅

Twenty-seven full guides integrated into the app:

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
- `src/data/guide-content/tea-garden.js` — Tea Garden (`id: 'tea-garden'`)
- `src/data/guide-content/childrens-vegetable-garden.js` — Children's Vegetable Garden (`id: 'childrens-garden'`)
- `src/data/guide-content/square-foot-gardening.js` — Square Foot Gardening (`id: 'square-foot-gardening'`)
- `src/data/guide-content/three-sisters.js` — Three Sisters Garden (`id: 'three-sisters'`)
- `src/data/guide-content/edible-flowers.js` — Edible Flowers (`id: 'edible-flowers'`)
- `src/data/guide-content/salsa-garden.js` — Salsa Garden (`id: 'salsa-garden'`)
- `src/data/guide-content/medicinal-garden.js` — Medicinal Garden (`id: 'medicinal-garden'`)
- `src/components/guides/GuideDetail.jsx` — Renders guide content with sections, paragraphs, tips, warnings, lists, tables, and affiliate product cards

### Dynamic SEO + Google Tag Manager ✅

- **`react-helmet-async`** installed; `src/main.jsx` wrapped in `<HelmetProvider>`
- **`src/components/SEO.jsx`** — reusable component; accepts `title`, `description`, `keywords`, `image`, `path`; auto-appends `| Planting Atlas` to every title; writes `<title>`, `<meta name="description">`, `<link rel="canonical">`, OG, and Twitter Card tags
- **GTM container `GTM-TT46476S`** embedded in `index.html` — head `<script>` at the very top of `<head>` (before any other tags, per Google's official guidance) and `<noscript>` fallback immediately after `<body>`
- **Google Analytics 4 `G-7S7248T634`** — `gtag.js` snippet added immediately after the GTM block in `<head>`
- **Google AdSense `ca-pub-2083020536499662`** — auto-ads script added in `<head>`; single placement covers all pages of the SPA

**Per-page SEO tags:**

| Page | Title | Path |
|------|-------|------|
| Home | *(default — uses `index.html` static title)* | `/` |
| Garden Architect | `Garden Architect — Personalized Plant Recommendations` | `/#wizard` |
| Plantopedia | `Plantopedia — Gardening Guides & Growing Tutorials` | `/#guides` |
| Each guide | `{guide hero.title}` — description from `content.intro` (truncated to 160 chars) | `/#guide/{guideId}` |

**SEO component usage:**
```jsx
import SEO from '../SEO.jsx'

<SEO
  title="Page Title"           // auto-suffixed with "| Planting Atlas"
  description="..."
  keywords="..."               // optional
  path="/#section"             // used for canonical URL
/>
```

### Medicinal Garden Guide ✅

- `src/data/guide-content/medicinal-garden.js` — 27th live guide; covers 16 medicinal herbs and plants (echinacea, elderberry, chamomile, calendula, lemon balm, mint, lavender, valerian, St. John's Wort, tulsi, yarrow, comfrey, skullcap, ashwagandha, motherwort, cannabis/hemp)
- Six sections: planning & design, herb profiles overview table + detailed growing notes for all 16 plants, harvesting & drying, remedy-making (teas, tinctures, salves, elderberry syrup), zone-neutral seasonal calendar, safety & drug interaction reference table
- Cannabis section includes: federal hemp vs. state cannabis legal notice, variety selection (Cherry Wine, Suver Haze, etc.), full growing guide, trichome harvest timing, decarboxylation and processing notes, CBD vs. THC explainer, and drug interaction row in the safety table
- Theme: emerald/purple gradient (`from-emerald-50 to-purple-100`) in `GuideDetail.jsx`
- Set `comingSoon: false` under Specialty Gardens in `guides.js`

### National Audience — Oklahoma References Removed ✅

All guide content is now written for a national US audience (Zones 3–11). Oklahoma-specific references have been replaced with zone-neutral language across five guides:

| File | Changes |
|------|---------|
| `salsa-garden.js` | 4 fixes: timing tip now shows Zone 5–6 / 7 / 8–9 comparisons; seed-start note is zone-agnostic; transplant timing references soil temp + zone range; onion day-length tip explains short/intermediate/long-day by latitude; convergence window covers all zones |
| `three-sisters.js` | Section heading changed from "Zone 7a — Oklahoma" to "by Zone"; hot-summer watering note now says "Zones 7–9" not "Oklahoma and Southern Plains" |
| `square-foot-gardening.js` | Seasonal calendar intro now uses Zone 7 as a reference point with explicit shift guidance; watering tip replaced "Oklahoma summers" with ">90°F heat" |
| `childrens-vegetable-garden.js` | Calendar intro uses Zone 7 as a generic reference with a note to check local frost dates |
| `tea-garden.js` | "Oklahoma clay" replaced with "heavy clay soils"; calendar intro now uses Zone 7 as a reference with zone-shift guidance |

**Principle going forward:** Planting calendars should use a named zone as an *example reference point* (e.g., "Zone 7 reference — shift 2–4 weeks per zone") rather than naming a specific state or city. Onion day-length guidance should reference latitude bands, not specific states.

### Homepage Redesign & Section Renaming ✅

- New `src/components/HomePage.jsx` — default landing page with two large image-backed path cards
- **Garden Architect card** — uses `src/components/wizard/Garden Architect.png` as a full-width hero image; routes to the wizard; green (`garden-*`) border and button
- **Plantopedia card** — uses `src/components/guides/Plantopedia.png` as a full-width hero image; routes to guides; gold (`earth-*`) border and button
- Cards use `w-full h-auto` so images render at their natural aspect ratio (no cropping); subtle `scale-105` zoom on hover
- `App.jsx` default section changed from `'wizard'` to `'home'`; brand logo in nav links back to homepage
- Nav tabs renamed: **Garden Architect** (was "Plant Wizard") and **Plantopedia** (was "Planting Guides")
- `WelcomeScreen.jsx` title updated to "Garden Architect" with slogan "The Smartest Way to Plan Your Garden"
- `GuidesHome.jsx` header updated to "Plantopedia" with slogan "Your Green Thumb Repository"

### Section Landing Page Hero Images ✅

Each section now has a distinct hero image on its own landing page (separate from the homepage card images):

- **Garden Architect landing** (`WelcomeScreen.jsx`) — `src/components/wizard/Garden Architect 2.png` renders as a full-width image at the top of the welcome screen, above the title and "Get Started" button
- **Plantopedia landing** (`GuidesHome.jsx`) — `src/components/Plantopedia2.png` renders as a full-width image at the top of the header card, above the title, description, and guide-count badges
- Homepage cards (`HomePage.jsx`) continue to use the original `Garden Architect.png` and `Plantopedia.png` images — unchanged

### Rebrand to Planting Atlas ✅

- Site renamed from "Garden Landscape Expert" to **Planting Atlas** across all UI surfaces
- New slogan: **"Plan it. Plant it. Grow it."** (replaces "Plant Selection Wizard" subtitle on the welcome screen)
- Nav abbreviation updated from `GLE` → `PA` (mobile)
- Domain: `plantingatlas.com` (hosted on Cloudflare Pages)

### Color Scheme ✅

Brand color scheme applied via `tailwind.config.js` (custom `garden`/`earth` palettes) and `src/index.css` (body text). All components use `garden-*` / `earth-*` tokens — no inline hex values in JSX.

### Dark Mode ✅

Dark mode is implemented using Tailwind's `class` strategy (`darkMode: 'class'` in `tailwind.config.js`).

- **Toggle:** `🌙 / ☀️` button in the sticky nav (right side), persists preference to `localStorage` key `gle-dark-mode`, falls back to `prefers-color-scheme` on first visit.
- **Activation:** `App.jsx` toggles the `dark` class on `document.documentElement` via `useEffect`.
- **Styles:** All components use `dark:` Tailwind variants. Structural elements (card backgrounds, borders, body text) switch to a gray-900 / gray-800 / gray-700 layered dark palette. Brand accent colors (`garden-*`, `earth-*`) remain but shift to lighter shades (e.g., `dark:text-garden-300`) for legibility on dark backgrounds.
- **Guide themes:** In `GuideDetail.jsx`, per-guide accent colors continue to apply in light mode. In dark mode, card backgrounds and text override to consistent dark-gray values so every guide remains readable regardless of its theme.

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
| `tip` | `emoji`, `text` | Themed callout box (positive/informational) |
| `warning` | `emoji`, `text` | Themed callout box (caution/alert) |
| `list` | `items[]` | Bulleted list |
| `table` | `headers[]`, `rows[][]` | Scrollable table |
| `affiliate` | `image`, `title`, `description`, `benefits[]`, `link`, `linkText` | Affiliate product card (earth-500 border, green CTA, FTC disclosure, `rel="noopener noreferrer sponsored"`) |

**To add a new guide:**
1. Create `src/data/guide-content/<guide-id>.js` following the structure above
2. Import and add it to the `contentMap` in `GuideDetail.jsx`
3. Add a color theme for the guide to the `themes` object in `GuideDetail.jsx` (all class strings must be complete for Tailwind JIT)
4. Set `comingSoon: false` on the matching entry in `guides.js`

### Affiliate Product Cards ✅

A reusable `affiliate` block type has been added to `GuideDetail.jsx`. It renders a styled product card with an optional image, title, description, benefit checklist, a green CTA button, and an FTC disclosure line.

- First affiliate block: 23-piece Heavy Duty Floral Garden Tool Set (Amazon) added to the "Tools We Recommend" section at the end of `plants-for-color.js`
- Link uses `rel="noopener noreferrer sponsored"` per Google's guidelines
- Card uses `earth-500` gold border and `garden-600` CTA button; full dark mode support

**Affiliate block example:**
```js
{
  type: 'affiliate',
  image: 'https://m.media-amazon.com/images/I/...',
  title: 'Product Name',
  description: 'Short description.',
  benefits: ['Benefit one', 'Benefit two'],
  link: 'https://amzn.to/...',
  linkText: 'View on Amazon',
}
```

### AdSense In-Content Ad Placeholders ✅

Three `<div>` placeholders are injected automatically between guide sections in `GuideDetail.jsx` — no per-guide content edits required.

| Placeholder ID | Injected after section index | Appears in |
|---|---|---|
| `adsense-placeholder-1` | Index 1 (2nd section) | All guides with ≥2 sections |
| `adsense-placeholder-2` | Index 3 (4th section) | Guides with ≥4 sections |
| `adsense-placeholder-3` | Index 5 (6th section) | Long guides (shade-trees, pollinator-garden, etc.) |

Each placeholder has `minHeight: 280px` to reserve layout space before Google fills the slot. All future guides added to the app automatically inherit these placements.

### Contact Us Page ✅

- `src/components/ContactUs.jsx` — contact form powered by `@formspree/react`; posts to `https://formspree.io/f/mlgpgdny`
- Fields: **Name**, **Email Address**, **Subject** (dropdown: General Question / Plant Recommendation / Guide Feedback / Bug Report / Partnership & Advertising / Other), **Message**
- All inputs carry `name` attributes and the `<form>` has `action="https://formspree.io/f/mlgpgdny"` + `method="POST"`
- Uses `useForm("mlgpgdny")` + `<ValidationError>` from `@formspree/react` for inline field-level error display
- On successful submit, replaces the form with a branded success message (🌱 "Message sent!")
- Submit button shows "Sending…" and disables while in-flight to prevent double-submission
- Full dark mode support; brand colors (`garden-600` button, `garden-800` heading)
- `App.jsx`: imported, routed as `section === 'contact'`, and linked in the footer alongside Privacy Policy

### Contact Nav Button ✅

- A `✉️ Contact` button added to the sticky header nav in `App.jsx`, sitting between the Plantopedia button and the dark mode toggle
- Uses the same `px-4 py-1.5 rounded-lg text-sm font-medium` style as the other nav tabs
- Active state: `bg-garden-600 text-white`; inactive: `text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700`
- Calls `setSection('contact')` on click — consistent with how Garden Architect and Plantopedia nav works

### AdSense ads.txt ✅

- `public/ads.txt` created with placeholder line: `google.com, pub-XXXXXXXXXXXXXXXX`
- Served at `plantingatlas.com/ads.txt` by Vite/Cloudflare Pages (static files in `public/` are served at root)
- **To activate:** replace `pub-XXXXXXXXXXXXXXXX` with the real Publisher ID (e.g., `pub-2083020536499662`) once AdSense account is approved and redeploy

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
