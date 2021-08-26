import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Cards({ places }) {
  return (
    <div className="container justify-content-center align-items-center h-100">
      <div className="row g-4">
        {places?.map(({ _id, name, address, url }) => (
          <div className="col-md-4" key={_id}>
            <div className="card text-center bg-ligth animate__animated animate__fadeInUp">
              <div className="overflow">
                <img
                  src={url}
                  alt="Imagen no disponible"
                  className="card-img-top"
                  style={{ height: 150 }}
                />
              </div>
              <div className="card-body text-light" style={{ height: 200 }}>
                <h4 className="card-title">{name || "sin nombre"}</h4>
                <p className="card-text text-secondary">
                  {address || "Domicilio"}
                </p>
                <Link
                  className="btn btn-outline-primary border-2"
                  to={`/places/${_id}`}
                ><FontAwesomeIcon icon={faMapMarkedAlt}>{" "}</FontAwesomeIcon>
                   . Ver Mapa
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
