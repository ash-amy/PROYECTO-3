import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="Sobre Nosotros" element={<h1>Sobre Nosotros</h1>} />
          <Route path="Juegos y Retos" element={<h1>Juegos y Retos</h1>} />
          <Route path="Contacto" element={<h1>Contacto</h1>} />
          <Route path="Testimonios" element={<h1>Testimonios</h1>} />
          <Route path="Formulario" element={<h1>Formulario</h1>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
