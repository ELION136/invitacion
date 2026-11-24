import Icon from './Icon.jsx'
import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { Divisor } from './Floral.jsx'
import { BODA } from '../config.js'

export default function Confirmacion() {
  const [nombre, setNombre] = useState('')
  const [asistencia, setAsistencia] = useState('si')
  const [acompanantes, setAcompanantes] = useState(0)
  const [error, setError] = useState('')

  const enviar = (e) => {
    e.preventDefault()

    if (nombre.trim().length < 3) {
      setError('Por favor escribe tu nombre completo.')
      return
    }
    setError('')

    const { whatsapp, googleFormUrl } = BODA.confirmacion

    // Opción Google Forms: si hay un enlace configurado, se abre directamente
    if (googleFormUrl) {
      window.open(googleFormUrl, '_blank', 'noopener')
      return
    }

    const respuesta =
      asistencia === 'si'
        ? `Sí asistiré${acompanantes > 0 ? ` con ${acompanantes} acompañante${acompanantes > 1 ? 's' : ''}` : ' (sin acompañantes)'}`
        : 'Lamentablemente no podré asistir'

    const mensaje =
      `¡Hola! Soy ${nombre.trim()}.\n` +
      `Respondo a la invitación de boda de ${BODA.novio} & ${BODA.novia} (${BODA.fechaTexto}).\n` +
      `${respuesta}.\n¡Dios los bendiga!`

    const base = whatsapp ? `https://wa.me/${whatsapp}` : 'https://wa.me/'
    window.open(`${base}?text=${encodeURIComponent(mensaje)}`, '_blank', 'noopener')
  }

  return (
    <section className="seccion seccion--beige" id="confirmar">
      <Reveal>
        <p className="sobretitulo">Tu respuesta nos importa</p>
        <h2 className="titulo titulo--chico">Confirmación de asistencia</h2>
        <Divisor />
        <p className="parrafo">
          Por favor, ayúdanos a prepararlo todo con cariño confirmando tu asistencia.
        </p>
      </Reveal>

      <Reveal delay={150}>
        <form className="formulario" onSubmit={enviar} noValidate>
          <label className="campo">
            <span>Nombre completo</span>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Escribe tu nombre y apellido"
              autoComplete="name"
            />
          </label>

          <fieldset className="campo campo--opciones">
            <legend>¿Podrás acompañarnos?</legend>
            <label className={`opcion ${asistencia === 'si' ? 'opcion--activa' : ''}`}>
              <input type="radio" name="asistencia" value="si" checked={asistencia === 'si'} onChange={() => setAsistencia('si')} />
              Sí asistiré
            </label>
            <label className={`opcion ${asistencia === 'no' ? 'opcion--activa' : ''}`}>
              <input type="radio" name="asistencia" value="no" checked={asistencia === 'no'} onChange={() => setAsistencia('no')} />
              No podré asistir
            </label>
          </fieldset>

          {asistencia === 'si' && (
            <label className="campo">
              <span>Número de acompañantes</span>
              <select value={acompanantes} onChange={(e) => setAcompanantes(Number(e.target.value))}>
                {[0, 1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n === 0 ? 'Voy solo/a' : n}
                  </option>
                ))}
              </select>
            </label>
          )}

          {error && <p className="error" role="alert">{error}</p>}

          <button type="submit" className="btn btn--oro btn--ancho">
            <Icon name="send"/> Confirmar asistencia
          </button>
        </form>
      </Reveal>
    </section>
  )
}
