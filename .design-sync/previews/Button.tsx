import { Button } from 'planting-atlas-ds'

export function Primary() {
  return <Button variant="primary">Start Planning →</Button>
}

export function PrimaryDisabled() {
  return <Button variant="primary" disabled>Send Message</Button>
}

export function PillGroup() {
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <Button variant="pill" active>
        🥕 Vegetables
      </Button>
      <Button variant="pill">🌸 Flowers</Button>
      <Button variant="pill">🍎 Fruit</Button>
    </div>
  )
}
