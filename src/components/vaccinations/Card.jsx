import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card({ _id, title, address, url }) {
  return (
    <div className="card text-center bg-ligth animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={url} alt="Imagen no disponible" className="card-img-top" style={{height: 150}} />
      </div>
      <div className="card-body text-light" style={{height: 200}}>
        <h4 className="card-title">{title? title: "sin nombre"}</h4>
        <p className="card-text text-secondary">
          {address
            ? address
            : "Domicilio"}
        </p>
        <Link className="btn btn-outline-primary border-2" to={`/places/${_id}`} >
          Ver Mapa
        </Link>        
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired
};

export default Card;