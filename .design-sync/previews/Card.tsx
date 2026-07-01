import { Card } from 'planting-atlas-ds'

export function Default() {
  return (
    <Card variant="default" style={{ maxWidth: 280 }}>
      <p style={{ fontSize: 20, fontWeight: 700, color: '#2F6B3F' }}>148</p>
      <p style={{ fontSize: 12, color: '#6b7280' }}>Plants in database</p>
    </Card>
  )
}

export function Hero() {
  return (
    <Card variant="hero" style={{ maxWidth: 320, padding: 24, textAlign: 'center' }}>
      <h3 style={{ fontSize: 20, fontWeight: 700, color: '#2F6B3F', margin: 0 }}>Garden Architect</h3>
      <p style={{ fontSize: 14, color: '#6b7280', marginTop: 4 }}>The Smartest Way to Plan Your Garden</p>
    </Card>
  )
}

export function Callout() {
  return (
    <Card variant="callout" style={{ maxWidth: 320 }}>
      <p style={{ fontWeight: 600, color: '#2F6B3F', margin: 0 }}>Get gardening tips in your inbox</p>
      <p style={{ fontSize: 13, color: '#6b7280', marginTop: 4 }}>No spam, just seasonal planting reminders.</p>
    </Card>
  )
}
