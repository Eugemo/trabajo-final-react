import React from "react";
import { Link } from 'react-router-dom';

export const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="navbar-brand">
    Lugares de Vacunacion Covid-19 - La Rioja
    </div>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Inicio
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/users">
            Users
          </Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="/admin">
            Administración
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
