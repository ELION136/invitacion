import { useMemo } from 'react'

// Pétalos que caen suavemente en la portada
export default function Petalos({ cantidad = 16 }) {
  const petalos = useMemo(
    () =>
      Array.from({ length: cantidad }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 8 + Math.random() * 12,
        delay: Math.random() * -18,
        duration: 12 + Math.random() * 10,
        drift: -60 + Math.random() * 120,
        tone: i % 3,
      })),
    [cantidad]
  )

  return (
    <div className="petalos" aria-hidden="true">
      {petalos.map((p) => (
        <span
          key={p.id}
          className={`petalo petalo--${p.tone}`}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 1.3,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            '--drift': `${p.drift}px`,
          }}
        />
      ))}
    </div>
  )
}
