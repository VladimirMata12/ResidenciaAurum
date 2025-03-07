import React from "react";
import "../../src/styles/about.css";

const About = () => (
  <div className="container">
    <div className="main-section">
      <h1 className="text-center">Residencia Aurum</h1>
      <h2 className="text-center text-secondary">Acerca de Nosotros</h2>
      <p className="mt-4">
        Aurum Residencia es una opción de alojamiento para estudiantes de la
        Facultad de Ingeniería Mecánica y Eléctrica (FIME) de la Universidad
        Autónoma de Nuevo León (UANL). Nos enfocamos en brindar un ambiente
        cómodo, seguro y accesible para nuestros residentes, asegurando una
        experiencia de hospedaje de alta calidad.
      </p>
    </div>
    <div className="testimonial-section">
      <h3 className="text-center mb-4">Lo que dicen nuestros residentes</h3>
      <div className="testimonial-card">
        <img src="src/estudiante 1.2.jpg" alt="Estudiante 1" />
        <div className="testimonial-text">
          <h5>Juan Pérez</h5>
          <p>
            "Una excelente residencia, con instalaciones limpias y un ambiente
            perfecto para estudiar y socializar."
          </p>
        </div>
      </div>
      <div className="testimonial-card">
        <img src="src/estudiante 1.3.jpg" alt="Estudiante 2" />
        <div className="testimonial-text">
          <h5>Manuel Saenz</h5>
          <p>
            "Me encanta la ubicación, cerca de la universidad y con todas las
            comodidades necesarias."
          </p>
        </div>
      </div>
      <div className="testimonial-card">
        <img src="src/estudiante 1.4.jpg" alt="Estudiante 3" />
        <div className="testimonial-text">
          <h5>Roberto García</h5>
          <p>
            "El sistema de reservaciones es muy intuitivo y fácil de usar,
            además el personal siempre está dispuesto a ayudar."
          </p>
        </div>
      </div>
      <div className="testimonial-card">
        <img src="src/estudiante 1.5.jpeg" alt="Estudiante 4" />
        <div className="testimonial-text">
          <h5>Ana Martínez</h5>
          <p>
            "Las habitaciones son cómodas y modernas. ¡Recomiendo totalmente
            Aurum Residencia!"
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
