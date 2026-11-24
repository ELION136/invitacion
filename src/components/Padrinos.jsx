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

export default function Padrinos() {
  return (
    <section className="seccion seccion--crema" id="padrinos">
      <Reveal>
        <h2 className="titulo">Padrinos</h2>
        <Divisor />
      </Reveal>

      <div className="grid-2">
        <Bloque titulo="Padrinos de religión" nombres={BODA.padrinosReligion} delay={100} />
        <Bloque titulo="Padrinos de civil" nombres={BODA.padrinosCivil} delay={250} />
      </div>
    </section>
  )
}
