import Reveal from './Reveal.jsx'
import { Rama } from './Floral.jsx'

export default function FraseEspecial() {
  return (
    <section className="seccion seccion--frase" id="frase">
      <Rama className="frase__rama frase__rama--izq" />
      <Rama className="frase__rama frase__rama--der" flip />

      <Reveal variant="zoom">
        <p className="frase__texto">
          «El amor no consiste en mirarse el uno al otro, sino en mirar juntos en la misma
          dirección, de la mano de Dios.»
        </p>
        <span className="frase__sub">Hoy comenzamos a caminar juntos, para siempre.</span>
      </Reveal>
    </section>
  )
}
