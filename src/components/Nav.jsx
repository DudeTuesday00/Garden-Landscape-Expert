'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Nav() {
  const pathname = usePathname()
  const [dark, setDark] = useState(false)

  // Sync dark state with what the inline script already applied to <html>
  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  function toggleDark() {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('gle-dark-mode', String(next))
  }

  function isActive(href) {
    return pathname === href || pathname === href + '/' || pathname.startsWith(href + '/')
  }

  function navCls(href) {
    return `px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
      isActive(href)
        ? 'bg-garden-600 text-white'
        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
    }`
  }

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 shadow-sm sticky top-0 z-10">
      <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 text-garden-700 dark:text-garden-400 hover:opacity-80 transition-opacity"
        >
          <span className="text-xl">🌿</span>
          <span className="font-bold text-sm tracking-wide uppercase hidden sm:block">Planting Atlas</span>
          <span className="font-bold text-sm tracking-wide uppercase sm:hidden">PA</span>
        </Link>

        {/* Nav tabs + dark toggle */}
        <nav className="flex items-center gap-1">
          <Link href="/wizard" className={navCls('/wizard')}>
            🌱 Garden Architect
          </Link>
          <Link href="/guides" className={navCls('/guides')}>
            📖 Plantopedia
          </Link>
          <Link href="/infographics" className={navCls('/infographics')}>
            🗺️ Infographics
          </Link>
          <Link href="/videos" className={navCls('/videos')}>
            🎬 Videos
          </Link>
          <Link href="/podcasts" className={navCls('/podcasts')}>
            🎙️ Podcasts
          </Link>
          <Link href="/shop" className={navCls('/shop')}>
            🖨️ Shop
          </Link>
          <Link href="/about" className={navCls('/about')}>
            👤 About
          </Link>
          <Link href="/contact" className={navCls('/contact')}>
            ✉️ Contact
          </Link>

          <button
            onClick={toggleDark}
            className="ml-1 p-1.5 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  )
}
