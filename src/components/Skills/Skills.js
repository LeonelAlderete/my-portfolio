import React from "react";
import "../../css/skills.css";
//ui
import { AiFillAndroid, AiOutlineHtml5 } from "react-icons/ai";
import { DiReact, DiCss3, DiJavascript1 } from "react-icons/di";
import { SiIos } from "react-icons/si";

export default function Skills() {
  return (
    <div className="container">
      {/* Titulo */}
      <div className="col-12">
        <h1 className="fw-bold text-light text-decoration-underline px-5 mt-5 mb-4">
          ¿Qué puedo hacer?
        </h1>
      </div>

      {/* Tecnologias */}
      <div className="row d-flex justify-content-center mx-4 mb-5">
        {/* HTML, CSS, JAVASCRIPT */}
        <div className="col-12 col-lg-3 text-light pt-2 pb-1 px-4 mb-3 mx-2 skill-card ">
          {/* Iconos */}
          <div className="text-center mb-2">
            <AiOutlineHtml5 className="mx-1" size={50} />
            <DiCss3 className="mx-1" size={50} />
            <DiJavascript1 className="mx-1" size={50} />
          </div>

          {/* Descripcion */}
          <div className="text-center">
            <p className="m-0">
              Maqueto páginas web con el uso de HTML, CSS, JavaScript y
              frameworks como Bootstrap.
            </p>
          </div>
        </div>

        {/* REACT JS */}
        <div className="col-12 col-lg-3 text-light pt-2 pb-1 px-4 mb-3 mx-2 skill-card">
          {/* Iconos */}
          <div className="text-center mb-2">
            <DiReact className="mx-1" size={50} />
          </div>

          {/* Descripcion */}
          <div className="text-center">
            <p className="m-0">
              Desarrollo aplicaciones front-end con el uso React JS y frameworks
              de IU.
            </p>
          </div>
        </div>

        {/* REACT NATIVE */}
        <div className="col-12 col-lg-3 text-light pt-2 pb-1 px-4 mb-3 mx-2 skill-card">
          {/* Iconos */}
          <div className="text-center mb-2">
            <AiFillAndroid className="mx-1" size={50} />
            <SiIos className="mx-1" size={50} />
          </div>

          {/* Descripcion */}
          <div className="text-center">
            <p className="m-0">
              Creo aplicaciones para Android e iOS, haciendo uso de React Native
              y librerías como Kitten UI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
