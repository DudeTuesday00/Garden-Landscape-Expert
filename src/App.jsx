import { useState, useEffect } from 'react'
import HomePage from './components/HomePage.jsx'
import Wizard from './components/wizard/Wizard.jsx'
import GuidesHome from './components/guides/GuidesHome.jsx'

export default function App() {
  const [section, setSection] = useState('home')
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('gle-dark-mode')
    if (stored !== null) return stored === 'true'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('gle-dark-mode', String(dark))
  }, [dark])

  return (
    <div className="min-h-screen bg-gradient-to-b from-garden-50 to-white dark:from-gray-900 dark:to-gray-900">
      {/* Top Nav */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 shadow-sm sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
          {/* Brand — clicking goes home */}
          <button
            onClick={() => setSection('home')}
            className="flex items-center gap-2 text-garden-700 dark:text-garden-400 hover:opacity-80 transition-opacity"
          >
            <span className="text-xl">🌿</span>
            <span className="font-bold text-sm tracking-wide uppercase hidden sm:block">Planting Atlas</span>
            <span className="font-bold text-sm tracking-wide uppercase sm:hidden">PA</span>
          </button>

          {/* Nav tabs + dark toggle */}
          <nav className="flex items-center gap-1">
            <button
              onClick={() => setSection('wizard')}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                section === 'wizard'
                  ? 'bg-garden-600 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              🌱 Garden Architect
            </button>
            <button
              onClick={() => setSection('guides')}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                section === 'guides'
                  ? 'bg-garden-600 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              📖 Plantopedia
            </button>

            {/* Dark mode toggle */}
            <button
              onClick={() => setDark((d) => !d)}
              className="ml-1 p-1.5 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {dark ? '☀️' : '🌙'}
            </button>
          </nav>
        </div>
      </header>

      {/* Content */}
      {section === 'home'   && <HomePage onNavigate={setSection} />}
      {section === 'wizard' && <Wizard onHome={() => setSection('home')} />}
      {section === 'guides' && <GuidesHome onHome={() => setSection('home')} />}
    </div>
  )
}
