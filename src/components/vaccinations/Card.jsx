import React from "react";
import PropTypes from "prop-types";

function Card({ name, address, url }) {
  return (
    <div className="card text-center bg-ligth animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={url} alt="Imagen no disponible" className="card-img-top" style={{height: 150}} />
      </div>
      <div className="card-body text-light" style={{height: 200}}>
        <h4 className="card-title">{name}</h4>
        <p className="card-text text-secondary">
          {address
            ? address
            : "Domicilio"}
        </p>
        <a
          href={url ? url : "#!"}
          target="_blank"
          className="btn btn-outline-primary border-2"
          rel="noreferrer"
        >
          Ver mapa
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired
};

export default Card;