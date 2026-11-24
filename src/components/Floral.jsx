// Adornos florales en SVG (ramas de olivo, flores y divisor)

function Flor({ cx, cy, r = 7 }) {
  const petalos = [0, 72, 144, 216, 288]
  return (
    <g transform={`translate(${cx} ${cy})`}>
      {petalos.map((a) => (
        <ellipse key={a} cx="0" cy={-r} rx={r * 0.62} ry={r} fill="#f6ecdb" stroke="#d9c299" strokeWidth="0.6" transform={`rotate(${a})`} />
      ))}
      <circle r={r * 0.35} fill="#c9a96a" />
    </g>
  )
}

export function Rama({ className = '', flip = false }) {
  const hojas = [
    [40, 150, -35], [58, 128, 30], [78, 112, -40], [100, 92, 35],
    [120, 80, -45], [142, 62, 30], [166, 52, -40], [190, 38, 25],
    [52, 160, 40], [86, 134, 50], [114, 108, 48], [150, 84, 50],
  ]
  return (
    <svg
      className={`rama ${className}`}
      viewBox="0 0 240 200"
      aria-hidden="true"
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
    >
      <path d="M10 190 C50 160 90 120 130 85 S200 30 232 18" fill="none" stroke="#9aa77a" strokeWidth="1.8" strokeLinecap="round" />
      {hojas.map(([x, y, rot], i) => (
        <ellipse
          key={i}
          cx={x}
          cy={y}
          rx="5.5"
          ry="15"
          fill={i % 3 === 0 ? '#b3be96' : i % 3 === 1 ? '#a4b183' : '#c3cca8'}
          opacity="0.9"
          transform={`rotate(${rot} ${x} ${y})`}
        />
      ))}
      <Flor cx={96} cy={140} r={8} />
      <Flor cx={168} cy={80} r={6.5} />
      <Flor cx={212} cy={36} r={5} />
      <circle cx="30" cy="176" r="2.6" fill="#c9a96a" />
      <circle cx="140" cy="108" r="2.2" fill="#c9a96a" />
    </svg>
  )
}

export function Divisor() {
  return (
    <div className="divisor" aria-hidden="true">
      <span className="divisor__linea" />
      <svg viewBox="0 0 40 40" className="divisor__flor">
        <Flor cx={20} cy={20} r={8} />
      </svg>
      <span className="divisor__linea" />
    </div>
  )
}

export function Anillos({ className = '' }) {
  return (
    <svg className={`anillos ${className}`} viewBox="0 0 80 50" aria-hidden="true">
      <circle cx="30" cy="28" r="16" fill="none" stroke="#c9a96a" strokeWidth="2" />
      <circle cx="50" cy="28" r="16" fill="none" stroke="#b08d4f" strokeWidth="2" />
      <path d="M40 6 l4 6 -4 5 -4 -5z" fill="#e8d3a3" stroke="#c9a96a" strokeWidth="1" />
    </svg>
  )
}
