'use client'

// Structured data for every page under /tools/. Mounted once from
// src/app/tools/layout.jsx; it finds the tool from the URL, so adding a tool to
// src/data/tools.js is all that is needed for it to get markup.
import { usePathname } from 'next/navigation'
import { tools } from '../../../data/tools.js'
import { getToolModified, getStaticPageModified } from '../../../data/content-dates.js'

const SITE_URL = 'https://plantingatlas.com'

function Script({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export default function ToolJsonLd() {
  const raw = usePathname() || ''
  const path = raw.endsWith('/') ? raw : `${raw}/`

  if (path === '/tools/') {
    const live = tools.filter((t) => t.status === 'live')
    return (
      <>
        <Script
          data={{
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Garden Tools',
            url: `${SITE_URL}/tools/`,
            ...(getStaticPageModified('/tools/') && { dateModified: getStaticPageModified('/tools/') }),
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: live.map((t, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: t.name,
                url: `${SITE_URL}${t.href}`,
              })),
            },
          }}
        />
        <Script
          data={{
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
              { '@type': 'ListItem', position: 2, name: 'Garden Tools', item: `${SITE_URL}/tools/` },
            ],
          }}
        />
      </>
    )
  }

  const tool = tools.find((t) => t.href === path && t.status === 'live')
  if (!tool) return null
  const modified = getToolModified(tool.id)

  return (
    <>
      <Script
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: tool.name,
          description: tool.tagline,
          url: `${SITE_URL}${tool.href}`,
          applicationCategory: 'LifestyleApplication',
          operatingSystem: 'Any',
          browserRequirements: 'Requires JavaScript',
          isAccessibleForFree: true,
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          publisher: { '@type': 'Organization', name: 'Planting Atlas', url: SITE_URL },
          ...(modified && { dateModified: modified }),
        }}
      />
      <Script
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Garden Tools', item: `${SITE_URL}/tools/` },
            { '@type': 'ListItem', position: 3, name: tool.name, item: `${SITE_URL}${tool.href}` },
          ],
        }}
      />
    </>
  )
}
