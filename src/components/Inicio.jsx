import { Link } from "react-router-dom";
import "./Inicio.css";
function Inicio() {
  return (
    <>
      <main className="first-view row m-auto px-3 py-4">
        <div className="banner">
          <h1>✨🚀“Aquí no solo presionas botones…🚀✨</h1>
          <h1>
            ¡creas mundos, inventas historias y programas tus propias
            aventuras!”
          </h1>

          <p>
            Diviértete, aprende y programa en nuestra página web diseñada
            especialmente para tí
          </p>
          <div className="botones">
            <button>¿Cuánto sabes de Programación?</button>
          </div>
        </div>
      </main>

      <section className="introduccion">
        <div className="bienvenida">
          <h3>
            ¡¡¡BIENVENIDOS A CODEPLAY!!! <i className="bi bi-robot"></i>
          </h3>
          <p>
            Aquí, aprender a programar es tan divertido como jugar. Nuestro
            espacio está diseñado para que <b>niños y niñas</b> descubran el
            mundo de la programación a través de juegos interactivos, retos
            creativos y actividades que despiertan su curiosidad.
          </p>
          <p>
            Creemos que la mejor forma de aprender es explorando, experimentando
            y divirtiéndose, por eso
            <u>combinamos tecnología, imaginación y juego</u> para que cada niño
            pueda desarrollar habilidades como la lógica, la creatividad y la
            resolución de problemas. ¡Prepárense para crear, inventar y
            divertirse mientras construyen el futuro con sus propias manos!
          </p>
          <p>
            En CodePlay no solo enseñamos a escribir código, sino también a
            pensar como verdaderos creadores. Aquí, cada línea que programan es
            una pieza de un gran proyecto que cobra vida, cada reto superado es
            un paso hacia la confianza, y cada juego es una puerta a nuevas
            posibilidades.
            <b>
              Porque programar no es solo una habilidad del futuro… ¡es la llave
              para abrir mundos increíbles hoy!
            </b>
          </p>
        </div>

        <section className="container">
          <img
            class="niños-programación"
            src="https://i.pinimg.com/1200x/39/79/ca/3979cafea548c6745f9eb1bf9808305e.jpg"
            alt="Niños aprendiendo programación con tablets"
          />
        </section>
      </section>

      <section className="carrusel">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="../public/Img 1.png"
                alt="Niño viendo patrones básicos de programación en una laptop."
              />
            </div>

            <div className="carousel-item">
              <img
                src="../public/Img 2.avif"
                alt="Niños utilizando material didáctico y una tablet para aprender programación."
              />
            </div>

            <div className="carousel-item">
              <img
                src="../public/Img 3.png"
                class="d-block w-100"
                alt="Niños aprendiendo código de progración con una laptop."
              />
            </div>

            <div className="carousel-item">
              <img
                src="../public/Img 4.jpg"
                alt="Manos infantiles manipulando una tablet con contenido didáctico y llamativo de programación básica"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default Inicio;
