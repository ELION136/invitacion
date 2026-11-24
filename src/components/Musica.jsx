import Reveal from './Reveal.jsx'
import { BODA } from '../config.js'

export default function Musica({ reproduciendo, onToggle, disponible }) {
  const { titulo, artista } = BODA.musica
  return (
    <section className="seccion seccion--crema" id="musica">
      <Reveal>
        <p className="sobretitulo">Nuestra canción</p>
        <h2 className="titulo titulo--chico">Una melodía para nuestra historia</h2>
      </Reveal>

      <Reveal delay={150} className="reproductor">
        <div className={`disco ${reproduciendo ? 'disco--gira' : ''}`} aria-hidden="true">
          <div className="disco__centro" />
        </div>

        <div className="reproductor__info">
          <span className="reproductor__titulo">{titulo}</span>
          <span className="reproductor__artista">{artista}</span>
          <div className={`ecualizador ${reproduciendo ? 'ecualizador--activo' : ''}`} aria-hidden="true">
            <i /><i /><i /><i /><i />
          </div>
        </div>

        <button
          className="btn-play"
          onClick={onToggle}
          aria-label={reproduciendo ? 'Pausar música' : 'Reproducir música'}
        >
          {reproduciendo ? (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
          )}
        </button>
      </Reveal>

      {!disponible && (
        <p className="nota-musica">Pronto podrás escuchar nuestra canción aquí.</p>
      )}
    </section>
  )
}
