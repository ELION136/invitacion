import Reveal from './Reveal.jsx'
import { Divisor } from './Floral.jsx'
import { BODA } from '../config.js'

function Dato({ etiqueta, valor }) {
  return (
    <div className="dato">
      <span className="dato__etiqueta">{etiqueta}</span>
      <span className="dato__valor">{valor}</span>
    </div>
  )
}

export default function Ceremonia() {
  const c = BODA.ceremonia
  return (
    <section className="seccion seccion--crema" id="ceremonia">
      <Reveal>
        <p className="sobretitulo">El gran día</p>
        <h2 className="titulo titulo--chico">Ceremonia Civil y Religiosa</h2>
        <Divisor />
      </Reveal>

      <Reveal delay={150} className="panel">
        <Dato etiqueta="Fecha" valor={c.fecha} />
        <Dato etiqueta="Hora" valor={c.hora} />
        <Dato etiqueta="Lugar" valor={c.lugar} />
        <Dato etiqueta="Ubicación" valor={c.ubicacion} />
        <a className="btn btn--oro" href={c.mapsUrl} target="_blank" rel="noopener noreferrer">
          Ver ubicación
        </a>
      </Reveal>
    </section>
  )
}
