import { Link } from "react-router-dom";
import "./Nosotros.css";
import datos from "../data/Integrantes.json";
function Nosotros() {
  return (
    <>
      <main>
        <h1>SOBRE NOSOTROS</h1>
        <div>
          <p>
            Somos un grupo de estudiantes apasionadas por la programación de
            software y el desarrollo web. Creemos que la tecnología no solo
            transforma el mundo, sino que también despierta la creatividad y el
            potencial de quienes la descubren desde pequeños. Por eso, nuestro
            propósito es inspirar a niños, niñas y familias a explorar juntos
            este universo digital, motivándolos a soñar, aprender y construir un
            futuro lleno de oportunidades.
          </p>
          <p>
            En coherencia con nuestro objetivo, CODEPLAY está conformado por
            jóvenes estudiantes apasionadas por la tecnología y la educación,
            unidas por el deseo de inspirar a las nuevas generaciones.
          </p>
        </div>
      </main>

      <div className="Integrantes">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {datos.equipo.map((integrantes) => (
            <div key={integrantes.id} className="p-4">
              <h3>{integrantes.nombre_completo}</h3>
              <img
                className="height-48 w-full object-cover mb-4"
                src={`./${integrantes.foto}`}
                alt={integrantes.nombre_completo}
              />
              <p>{integrantes.rol}</p>
              <p>{integrantes.descripcion}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="Misión-Visión-Valores">
        <img src="../public/Logo.png" alt="Logo de ColdPlay" />

        <div>
          <div className="Misión">
            <h3>📌Mision</h3>
            <p className="fw-semibold">
              Brindar a los niños un espacio seguro, divertido y creativo donde
              puedan aprender programacion a travez de juegos interactivos,
              desarrollando habilidades tecnologicas, logicas y de resolucion de
              problemas mientras se divierten
            </p>
          </div>

          <div className="Visión">
            <h3>👀Vision</h3>
            <p className="fw-semibold">
              Ser la plataforma educativa lider en el mundo hispanohablante que
              inspire a niños y niñas a divertirse en creadores digitales,
              fomentando su curiosidad, pensamiento critico y amor por la
              tecnologia desde temprana edad
            </p>
          </div>

          <div className="Valores">
            <h3>✨Valores</h3>
            <ul className="fw-semibold">
              <li>Divertirse</li>
              <li>Inclusion</li>
              <li>Creatividad</li>
              <li>Seguridad</li>
              <li>Colaboracion</li>
              <li>Curiosidad tecnologica</li>
              <li>Aprendizaje progresivo</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Nosotros;
