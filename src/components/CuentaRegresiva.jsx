import Reveal from './Reveal.jsx'
import useCountdown from '../hooks/useCountdown.js'
import { BODA } from '../config.js'

const pad = (n) => String(n).padStart(2, '0')

export default function CuentaRegresiva() {
  const t = useCountdown(BODA.fechaISO)

  const items = [
    { etiqueta: 'Días', valor: t.dias },
    { etiqueta: 'Horas', valor: pad(t.horas) },
    { etiqueta: 'Minutos', valor: pad(t.minutos) },
    { etiqueta: 'Segundos', valor: pad(t.segundos) },
  ]

  return (
    <section className="seccion seccion--olivo" id="cuenta">
      <Reveal>
        <p className="sobretitulo">Falta muy poco</p>
        <h2 className="titulo titulo--claro">Cuenta regresiva</h2>
      </Reveal>

      <Reveal delay={150}>
        {t.terminado ? (
          <p className="parrafo parrafo--claro">¡Hoy es el gran día! Gracias por acompañarnos.</p>
        ) : (
          <div className="contador" role="timer" aria-live="off">
            {items.map((i) => (
              <div className="contador__caja" key={i.etiqueta}>
                <span className="contador__valor">{i.valor}</span>
                <span className="contador__etiqueta">{i.etiqueta}</span>
              </div>
            ))}
          </div>
        )}
        <p className="contador__nota">9 de enero de 2027 · 13:00 horas</p>
      </Reveal>
    </section>
  )
}
