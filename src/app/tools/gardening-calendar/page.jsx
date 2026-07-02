import GardenCalendar from '../../../components/tools/gardening-calendar/GardenCalendar.jsx'

export const metadata = {
  title: 'Garden Planting Calendar',
  description: 'A personalized garden planting calendar by ZIP code — when to start seeds indoors, plant outdoors, and harvest, for 150 plants across 12 categories, not just vegetables.',
  alternates: {
    canonical: 'https://plantingatlas.com/tools/gardening-calendar/',
  },
  openGraph: {
    url: 'https://plantingatlas.com/tools/gardening-calendar/',
    title: 'Garden Planting Calendar | Planting Atlas',
    description: 'Your personalized planting calendar by ZIP code — for 150 plants, not just vegetables.',
  },
  twitter: {
    title: 'Garden Planting Calendar | Planting Atlas',
    description: 'Your personalized planting calendar by ZIP code — for 150 plants, not just vegetables.',
  },
}

export default function GardeningCalendarPage() {
  return (
    <div className="px-4 py-8 max-w-6xl mx-auto">
      <GardenCalendar />
    </div>
  )
}
