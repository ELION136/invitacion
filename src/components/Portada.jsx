import { BODA } from '../config.js'
import { Rama } from './Floral.jsx'
import Petalos from './Petalos.jsx'

export default function Portada({ onVer }) {
  return (
    <header className="portada" id="inicio">
      <Petalos />
      <Rama className="portada__rama portada__rama--tl" />
      <Rama className="portada__rama portada__rama--br" flip />

      <div className="portada__contenido">
        <p className="portada__bendicion anim-fade" style={{ animationDelay: '0.2s' }}>
          Con la bendición de Dios y nuestras familias
        </p>

        <h1 className="portada__nombres" aria-label={`${BODA.novio} y ${BODA.novia}`}>
          <span className="nombre nombre--uno anim-rise" style={{ animationDelay: '0.5s' }}>
            {BODA.novio}
          </span>
          <span className="portada__amp anim-pop" style={{ animationDelay: '1s' }}>
            &amp;
          </span>
          <span className="nombre nombre--dos anim-rise" style={{ animationDelay: '0.8s' }}>
            {BODA.novia}
          </span>
        </h1>

        <p className="portada__frase anim-fade" style={{ animationDelay: '1.3s' }}>
          «Lo que Dios ha unido, no lo separe el hombre»
        </p>

        <div className="portada__fecha anim-fade" style={{ animationDelay: '1.6s' }}>
          <span className="portada__linea" />
          <span>{BODA.fechaTexto}</span>
          <span className="portada__linea" />
        </div>

        <button className="btn btn--oro anim-fade" style={{ animationDelay: '1.9s' }} onClick={onVer}>
          Ver invitación
        </button>
      </div>

      <div className="portada__scroll" aria-hidden="true">
        <span />
      </div>
    </header>
  )
}
