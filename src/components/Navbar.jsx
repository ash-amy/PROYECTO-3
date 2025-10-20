import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar degradado text-black p-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <img
            className="logo"
            src="./Public/logo-largo.png"
            alt="Logo Code Play"
          />
        </div>

        <ul className="options flex space-x-6 p-t-2">
          <li className="hover:text-gray-300">
            {" "}
            <Link to="/">Inicio</Link>
          </li>
          <li className="hover:text-gray-300">
            {" "}
            <Link to="Nosotros">Nosotros</Link>
          </li>
          <li className="hover:text-gray-300">
            {" "}
            <Link to="Juegos y Retos">Juegos y Retos</Link>
          </li>
          <li className="hover:text-gray-300">
            {" "}
            <Link to="Contacto">Contacto</Link>{" "}
          </li>
          <li className="hover:text-gray-300">
            {" "}
            <Link to="Testimonios">Testimonios</Link>
          </li>
        </ul>

        <button className="boton hover:text-gray-300">
          {""}
          <Link to="Formulario"></Link>Matricúlate
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
