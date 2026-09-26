// Counts for site copy ("120 guides"), read from the generated content-dates.json
// so client components can use them without importing the full guide list.
// A vitest guard (site-stats.test.js) fails if this file goes stale — run
// `npm run dates` after adding a guide.
import raw from './content-dates.json'

export const guideCount = raw.siteStats.guideCount
export const guideCategoryCount = raw.siteStats.guideCategoryCount
