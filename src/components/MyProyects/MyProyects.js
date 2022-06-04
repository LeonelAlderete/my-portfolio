import React from "react";
//ui
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
import { DiReact, DiFirebase } from "react-icons/di";
import { SiThemoviedatabase } from "react-icons/si";
import { GiNestedHexagons } from "react-icons/gi";
import myPageImage from "../../assets/proyects-images/my-page.png";
import todoappImage from "../../assets/proyects-images/todoapp.png";
import movieappImage from "../../assets/proyects-images/movieapp.png";

export default function MyProyects() {
  return (
    <div className="pb-5 background-color-primary">
      <div className="container">
        {/* Titulo */}
        <div className="row pt-5 px-5 mb-4">
          <h1 className="text-light text-decoration-underline fw-bold">
            Mis proyectos
          </h1>
        </div>

        {/* Lista de proyectos */}
        <div className="row">
          {/* Todo App */}
          <div className="col-12 col-lg-4 d-flex justify-content-center mb-4">
            <div className="proyect-card text-light p-0 ">
              {/* Imagen */}
              <div>
                <img
                  src={todoappImage}
                  className="img-fluid card-img-border-radius"
                  alt=""
                />
              </div>

              {/* Informacion */}
              <div className="px-4 py-2">
                {/* Descripcion */}
                <div className="justify-text">
                  <h3 className="fw-bold">Todo App</h3>

                  <p className="proyect-card-description">
                    Aplicación web para crear y guardar tareas, con sistema de
                    registro para guardar las tareas en la nube.
                  </p>
                </div>

                <div className="px-3">
                  <hr style={{ backgroundColor: "white" }}></hr>
                </div>

                {/* Tecnologias aplicadas */}
                <div className="text-center">
                  <h5>Tecnologias utilizadas</h5>
                  <DiReact size={43} />
                  <FaBootstrap size={43} />
                  <DiFirebase size={43} />
                </div>

                <div className="px-3">
                  <hr style={{ backgroundColor: "white" }}></hr>
                </div>

                {/* Demo - Repositorio */}
                <div className="text-center">
                  {/* Demo */}
                  <a
                    href="https://todoapp-final.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BiLinkExternal
                      className="cursor-pointer text-light mx-2"
                      size={37}
                    />
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/LeonelAlderete/todoapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub
                      className="cursor-pointer text-light mx-2"
                      size={37}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Movie App */}
          <div className="col-12 col-lg-4 d-flex justify-content-center mb-4">
            <div className="proyect-card text-light p-0 ">
              {/* Imagen */}
              <div>
                <img
                  src={movieappImage}
                  className="img-fluid card-img-border-radius"
                  alt=""
                />
              </div>

              {/* Informacion */}
              <div className="px-4 py-2">
                {/* Descripcion */}
                <div className="justify-text">
                  <h3 className="fw-bold">Movie App</h3>

                  <p className="proyect-card-description">
                    Aplicación para Android e iOS donde buscar y ver información
                    sobre tus películas favoritas.
                  </p>
                </div>

                <div className="px-3">
                  <hr style={{ backgroundColor: "white" }}></hr>
                </div>

                {/* Tecnologias aplicadas */}
                <div className="text-center">
                  <h5>Tecnologias utilizadas</h5>
                  <DiReact size={43} />
                  <GiNestedHexagons size={43} />
                  <SiThemoviedatabase size={43} />
                </div>

                <div className="px-3">
                  <hr style={{ backgroundColor: "white" }}></hr>
                </div>

                {/* Demo - Repositorio */}
                <div className="text-center">
                  {/* GitHub */}
                  <a
                    href="https://github.com/LeonelAlderete/movieapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub
                      className="cursor-pointer text-light mx-2"
                      size={37}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mi Portfolio */}
          <div className="col-12 col-lg-4 d-flex justify-content-center mb-4">
            <div className="proyect-card text-light p-0 ">
              {/* Imagen */}
              <div>
                <img
                  src={myPageImage}
                  className="img-fluid card-img-border-radius"
                  alt=""
                />
              </div>

              {/* Informacion */}
              <div className="px-4 py-2">
                {/* Descripcion */}
                <div className="justify-text">
                  <h3 className="fw-bold">Mi portfolio</h3>

                  <p className="proyect-card-description">
                    Código fuente de mi portfolio :D
                  </p>
                </div>

                <div className="px-3">
                  <hr style={{ backgroundColor: "white" }}></hr>
                </div>

                {/* Tecnologias aplicadas */}
                <div className="text-center">
                  <h5>Tecnologias utilizadas</h5>
                  <DiReact size={43} />
                  <FaBootstrap size={43} />
                </div>

                <div className="px-3">
                  <hr style={{ backgroundColor: "white" }}></hr>
                </div>

                {/* Demo - Repositorio */}
                <div className="text-center">
                  {/* GitHub */}
                  <a
                    href="https://github.com/LeonelAlderete/my-portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub
                      className="cursor-pointer text-light mx-2"
                      size={37}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
