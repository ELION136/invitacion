import Reveal from './Reveal.jsx'
import { Divisor } from './Floral.jsx'
import { BODA } from '../config.js'

function Bloque({ titulo, nombres, delay }) {
  return (
    <Reveal delay={delay} className="tarjeta">
      <h3 className="tarjeta__titulo">{titulo}</h3>
      {nombres.map((n) => (
        <p key={n} className="tarjeta__nombre">
          {n}
        </p>
      ))}
    </Reveal>
  )
}

export default function Padres() {
  return (
    <section className="seccion seccion--beige" id="padres">
      <Reveal>
        <h2 className="titulo titulo--chico">Con la bendición de nuestros padres</h2>
        <Divisor />
      </Reveal>

      <div className="grid-2">
        <Bloque titulo="Padres de la novia" nombres={BODA.padresNovia} delay={100} />
        <Bloque titulo="Padres del novio" nombres={BODA.padresNovio} delay={250} />
      </div>
    </section>
  )
}
