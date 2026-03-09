const SITE_URL = 'https://plantingatlas.com'

/**
 * Auto-generated robots.txt — Next.js builds this at build time.
 */
export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
