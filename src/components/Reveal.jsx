import useReveal from '../hooks/useReveal.js'

// Envoltorio que anima su contenido al aparecer con el scroll
export default function Reveal({ children, delay = 0, variant = 'up', className = '', as: Tag = 'div' }) {
  const ref = useReveal()
  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
