import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import Juegos from "./components/Juegos";
import Contacto from "./components/Contacto";
import Testimonios from "./components/Testimonios";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Juegos" element={<Juegos />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Testimonios" element={<Testimonios />} />
          <Route path="/Formulario" element={<h1>Formulario</h1>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
