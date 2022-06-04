import React from "react";
//Rutas
import { useHistory, useLocation } from "react-router-dom";
//ui
import pageLogo from "../../assets/page-logo.png";

export default function Header() {
  const history = useHistory();
  const url = useLocation();

  return (
    <div className="container">
      <div className="row mt-2" id="home">
        {/* Logo */}
        <div className="col">
          <img
            src={pageLogo}
            className="cursor-pointer"
            alt=""
            width={50}
            onClick={() => history.push("/")}
          />
        </div>

        {/* Contacto */}
        {url.pathname === "/" && (
          <div className="col d-flex align-items-center justify-content-end">
            <a className="btn btn-outline-success rounded-pill" href="#contact">
              Contacto
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
