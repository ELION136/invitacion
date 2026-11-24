import Reveal from './Reveal.jsx'
import { Divisor } from './Floral.jsx'
import { BODA } from '../config.js'

export default function Recepcion() {
  const r = BODA.recepcion
  return (
    <section className="seccion seccion--beige" id="recepcion">
      <Reveal>
        <p className="sobretitulo">Celebremos juntos</p>
        <h2 className="titulo titulo--chico">Recepción Social</h2>
        <Divisor />
      </Reveal>

      <Reveal delay={150} className="panel">
        <div className="dato">
          <span className="dato__etiqueta">Lugar</span>
          <span className="dato__valor">{r.lugar}</span>
        </div>
        <div className="dato">
          <span className="dato__etiqueta">Dirección / referencia</span>
          <span className="dato__valor dato__valor--texto">{r.referencia}</span>
        </div>
        <a className="btn btn--oro" href={r.mapsUrl} target="_blank" rel="noopener noreferrer">
          Cómo llegar
        </a>
      </Reveal>
    </section>
  )
}
