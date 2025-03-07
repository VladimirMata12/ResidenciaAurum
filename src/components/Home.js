import React from "react";

const Home = () => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-4">
        <div className="card">
          <img src="src/Hab1.jpg" className="card-img-top" alt="habitacion 1" />
          <div className="card-body">
            <h5 className="card-title">Interior</h5>
            <p className="card-text">¡Habitaciones acorde a tus necesidades!</p>
            <a href="#" className="btn btn-primary">
              Reservar
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
