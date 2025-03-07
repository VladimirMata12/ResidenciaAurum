import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => (
  <div>
    <h1>Aurum Residencia</h1>
    <nav className="menu">
      <ol>
        <li className="menu-item">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-item">
          <Link to="/about">Acerca de Nosotros</Link>
        </li>
        <li className="menu-item">
          <Link to="/reservacion">Reservaciones</Link>
        </li>
        <li className="menu-item">
          <Link to="#0">Habitaciones</Link>
        </li>
        <li className="menu-item">
          <Link to="#0">Ubicación</Link>
        </li>
        <li className="menu-item">
          <Link to="#0">Restaurante</Link>
        </li>
      </ol>
    </nav>
  </div>
);

export default NavBar;
