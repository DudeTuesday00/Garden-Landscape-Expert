import { useState } from 'react'
import Wizard from './components/wizard/Wizard.jsx'
import GuidesHome from './components/guides/GuidesHome.jsx'

export default function App() {
  const [section, setSection] = useState('wizard')

  return (
    <div className="min-h-screen bg-gradient-to-b from-garden-50 to-white">
      {/* Top Nav */}
      <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-2 text-garden-700">
            <span className="text-xl">🌿</span>
            <span className="font-bold text-sm tracking-wide uppercase hidden sm:block">Garden Landscape Expert</span>
            <span className="font-bold text-sm tracking-wide uppercase sm:hidden">GLE</span>
          </div>

          {/* Nav tabs */}
          <nav className="flex items-center gap-1">
            <button
              onClick={() => setSection('wizard')}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                section === 'wizard'
                  ? 'bg-garden-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              🌱 Plant Wizard
            </button>
            <button
              onClick={() => setSection('guides')}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                section === 'guides'
                  ? 'bg-garden-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              📖 Planting Guides
            </button>
          </nav>
        </div>
      </header>

      {/* Content */}
      {section === 'wizard' && <Wizard />}
      {section === 'guides' && <GuidesHome />}
    </div>
  )
}
