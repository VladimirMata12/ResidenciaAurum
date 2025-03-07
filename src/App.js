import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Reservation from "./components/Reservation"; // Importar el nuevo componente Reservation
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <Router>
    <NavBar />
    <div id="root">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservacion" element={<Reservation />} />
        {/* Agrega más rutas aquí según sea necesario */}
      </Routes>
    </div>
    <Footer />
  </Router>
);

export default App;
