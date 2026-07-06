import { guideCategories } from '../data/guides.js'
import { getTool } from '../data/tools.js'

const KICKERS = {
  guide: 'Featured Guide',
  tool: 'Featured Tool',
  video: 'Featured Video',
  podcast: 'Featured Podcast',
  infographic: 'Featured Infographic',
}

const CTA_LABELS = {
  guide: 'Read the Guide →',
  tool: 'Try the Tool →',
  video: 'Watch the Video →',
  podcast: 'Listen Now →',
  infographic: 'View the Infographic →',
}

function resolveGuide(id) {
  for (const category of guideCategories) {
    const guide = category.guides.find((g) => g.id === id)
    if (guide) {
      return { title: guide.title, teaser: guide.description, href: `/guides/${guide.id}/`, emoji: guide.emoji }
    }
  }
  return null
}

function resolveTool(id) {
  const tool = getTool(id)
  if (!tool) return null
  return { title: tool.name, teaser: tool.tagline, href: tool.href, emoji: tool.emoji }
}

/**
 * Resolves a topic-of-the-week reference into the shape the UI renders.
 * Guide/tool references are looked up live against their real data files
 * (so content edits there propagate automatically); video/podcast/
 * infographic references carry their own fields since those content
 * types have no exported registry elsewhere in the codebase.
 */
export function resolveTopic(ref) {
  if (!ref) return null

  const base = ref.type === 'guide' ? resolveGuide(ref.id) : ref.type === 'tool' ? resolveTool(ref.id) : ref

  if (!base) return null

  return {
    title: base.title,
    teaser: base.teaser,
    href: base.href,
    emoji: base.emoji,
    kicker: KICKERS[ref.type],
    ctaLabel: CTA_LABELS[ref.type],
  }
}

/** ISO 8601 week number + week-year for a given date (UTC-based, DST-safe). */
export function getIsoWeekYear(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  const dayNum = d.getUTCDay() || 7
  d.setUTCDate(d.getUTCDate() + 4 - dayNum)
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  const isoWeek = Math.ceil((((d - yearStart) / 86400000) + 1) / 7)
  return { isoYear: d.getUTCFullYear(), isoWeek }
}

function isPinnedActive(pinned, date) {
  if (!pinned) return false
  if (!pinned.until) return true
  return date.getTime() <= new Date(`${pinned.until}T23:59:59Z`).getTime()
}

/**
 * Returns the resolved topic for the given date: the pinned topic if one
 * is set and not yet expired, otherwise the item at a deterministic,
 * ISO-week-derived index into `list`. Everyone visiting within the same
 * ISO week (Mon–Sun UTC) sees the same pick; it advances automatically
 * every week with no redeploy needed, looping back to the start of the
 * list once exhausted.
 */
export function getTopicOfWeek(date, list, pinned) {
  if (isPinnedActive(pinned, date)) {
    const resolved = resolveTopic(pinned)
    if (resolved) return resolved
  }

  if (!list || list.length === 0) return null

  const { isoYear, isoWeek } = getIsoWeekYear(date)
  const index = (isoYear * 53 + isoWeek) % list.length
  return resolveTopic(list[index])
}
