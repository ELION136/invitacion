import Reveal from './Reveal.jsx'
import { Rama } from './Floral.jsx'
import { BODA } from '../config.js'

export default function Footer() {
  return (
    <footer className="footer">
      <Rama className="footer__rama footer__rama--izq" />
      <Rama className="footer__rama footer__rama--der" flip />

      <Reveal>
        <p className="footer__gracias">Gracias por ser parte de este momento tan especial</p>
        <p className="footer__espera">¡Te esperamos!</p>
        <p className="footer__nombres">
          {BODA.novio} &amp; {BODA.novia}
        </p>
        <p className="footer__fecha">{BODA.fechaTexto}</p>
      </Reveal>
    </footer>
  )
}
