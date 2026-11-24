import Reveal from './Reveal.jsx'
import { Anillos, Divisor } from './Floral.jsx'

export default function Mensaje() {
  return (
    <section className="seccion seccion--crema" id="mensaje">
      <Reveal>
        <Anillos className="seccion__icono" />
        <h2 className="titulo">Nos casamos</h2>
        <Divisor />
      </Reveal>

      <Reveal delay={150}>
        <p className="parrafo">
          Hay momentos en la vida que el corazón guarda para siempre, y este es uno de ellos. Con
          inmensa gratitud a Dios por habernos unido, queremos invitarte con todo cariño a
          compartir con nosotros el día en que sellaremos nuestro amor delante de Él, de nuestras
          familias y de quienes más queremos.
        </p>
        <p className="parrafo">
          Tu presencia hará que esta celebración sea aún más hermosa e inolvidable.
        </p>
      </Reveal>

      <Reveal delay={300}>
        <blockquote className="versiculo">
          <p>«Y sobre todas estas cosas vestíos de amor, que es el vínculo perfecto.»</p>
          <cite>Colosenses 3:14</cite>
        </blockquote>
      </Reveal>
    </section>
  )
}
