import React from "react";
//Routes
import { useHistory } from "react-router-dom";
//ui
import { BiErrorAlt } from "react-icons/bi";
//Componentes
import Header from "../Header/Header";

export default function Error404() {
  const history = useHistory();

  return (
    <div className="text-light">
      <Header />

      <div className="text-center mt-5">
        <BiErrorAlt className="text-danger" size={120} />
        <p className="fs-4 mt-4">
          Es posible que el enlace que seleccionaste no exista o no funcione.
        </p>
        <p
          className="d-inline-flex justify-content-center cursor-pointer text-decoration-underline text-success fw-bold"
          onClick={() => history.push("/")}
        >
          Volver al inicio
        </p>
      </div>
    </div>
  );
}
