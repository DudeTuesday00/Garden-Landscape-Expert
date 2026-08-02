/**
 * Newsletter issue index.
 *
 * Auto-maintained by the Planting Atlas Newsletter export pipeline (a separate
 * project — D:\Planting Atlas Newsletter\review-app's export-approved endpoint —
 * writes here after each issue is approved in the review dashboard). Backed by
 * JSON rather than a hand-authored JS module (unlike guides.js/plants.js)
 * because an automated writer appending to a plain JSON array is far less
 * error-prone than programmatically editing a JS import list.
 *
 * Entry shape:
 *  - id:          string  — matches the content JSON filename in newsletter-content/
 *  - slug:        string  — URL slug, same as id
 *  - title:       string  — display title
 *  - subtitle:    string  — one-line clarifier shown under the title
 *  - date:        string  — ISO date (YYYY-MM-DD), publish date
 *  - excerpt:     string  — 1-2 sentence teaser for the archive card
 *  - tags:        string[]
 *  - heroImage:   string  — root-relative path, e.g. /newsletters/<slug>.png
 *  - mode:        'series' | 'oneoff'
 *  - seriesName:  string (optional)
 *  - partNumber:  number (optional)
 */
import newslettersData from './newsletters.json'

export const newsletters = newslettersData
