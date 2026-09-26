// Title fitting for search results. Google shows roughly 60 characters, and the
// site template appends " | Planting Atlas" (17 chars), so page-specific titles
// that use the template should be about 43 characters or fewer.
export const TEMPLATE_SUFFIX = ' | Planting Atlas'
export const MAX_TEMPLATED_TITLE = 60 - TEMPLATE_SUFFIX.length // 43
export const MAX_ABSOLUTE_TITLE = 60

const DANGLING = new Set([
  'a', 'an', 'the', 'of', 'for', 'to', 'and', 'or', 'in', 'on', 'with', 'that',
  'how', 'is', 'your', 'every', 'by', 'at', 'from', 'as', 'it', 'its', 'you',
])

// Shorten to at most `max` characters, preferring a natural break (text before a
// colon, dash, or opening parenthesis) over cutting mid-phrase. With
// `ellipsis: true` a mid-phrase cut ends in "…" (still within `max`).
export function fitTitle(text, max, { ellipsis = false } = {}) {
  const clean = String(text).replace(/\s+/g, ' ').trim()
  if (clean.length <= max) return clean

  for (const delim of [': ', ' — ', ' – ', ' - ', ' (']) {
    const i = clean.indexOf(delim)
    if (i >= 6 && i <= max) return clean.slice(0, i).trim()
  }

  const room = ellipsis ? max - 1 : max
  let cut = clean.slice(0, room + 1)
  cut = cut.slice(0, cut.lastIndexOf(' ') > 0 ? cut.lastIndexOf(' ') : room)
  const words = cut.split(' ')
  while (words.length > 1 && DANGLING.has(words[words.length - 1].toLowerCase().replace(/[^a-z]/g, ''))) {
    words.pop()
  }
  const trimmed = words.join(' ').replace(/[,;:\-—–\s]+$/, '')
  return ellipsis ? `${trimmed}…` : trimmed
}
