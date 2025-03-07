import React from "react";
import "../../src/styles/reservaciones.css";

const Reservation = () => (
  <div>
    <header></header>
    <section id="reservaciones">
      <h2>Reservaciones</h2>
      <form action="http://localhost:4000/reservaciones" method="POST">
        <label for="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Ingresa tu nombre"
          required
        />

        <label for="correo">Correo Electrónico:</label>
        <input
          type="email"
          id="correo"
          name="correo"
          placeholder="tucorreo@example.com"
          required
        />

        <label for="fecha">Fecha de Entrada:</label>
        <input type="date" id="fecha" name="fecha" required />

        <label for="habitacion">Tipo de Habitación:</label>
        <select id="habitacion" name="habitacion" required>
          <option value="sencilla">Sencilla</option>
          <option value="doble">Doble</option>
          <option value="suite">Suite</option>
        </select>

        <button type="submit">Reservar</button>
      </form>
    </section>
  </div>
);

export default Reservation;
