import HydroponicSystemChooser from '../../../components/tools/hydroponic-system-chooser/HydroponicSystemChooser.jsx'

export const metadata = {
  title: 'Hydroponic System Chooser',
  description: 'Not sure which hydroponic system to build? Answer five questions about your space, budget, and time and get the best home system — Kratky, DWC, NFT, ebb & flow, and more — with the plants it suits.',
  alternates: {
    canonical: 'https://plantingatlas.com/tools/hydroponic-system-chooser/',
  },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Planting Atlas' }],
    url: 'https://plantingatlas.com/tools/hydroponic-system-chooser/',
    title: 'Hydroponic System Chooser | Planting Atlas',
    description: 'Find the right home hydroponic system for your space, budget, and time — with the plants it suits.',
  },
  twitter: {
    images: ['/og-image.jpg'],
    title: 'Hydroponic System Chooser | Planting Atlas',
    description: 'Find the right home hydroponic system for your space, budget, and time — with the plants it suits.',
  },
}

export default function HydroponicSystemChooserPage() {
  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      <HydroponicSystemChooser />
    </div>
  )
}
