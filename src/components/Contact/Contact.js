import React from "react";
//ui
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Contact() {
  return (
    <div className="container text-light px-5">
      {/* Titulo */}
      <h1 className="mt-5 mb-3 text-decoration-underline">
        Información de contacto
      </h1>

      <div className="row">
        {/* Links */}
        <div className="col-12 mb-5 fs-4" id="contact">
          {/* Linkedin */}
          <div className="mb-3">
            <a
              href="https://www.linkedin.com/in/leonel-alderete/"
              className="ms-2 link-hover text-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className="me-2" size={30} />
              <span>Linkedin</span>
            </a>
          </div>

          {/* GitHub */}
          <div>
            <a
              href="https://github.com/LeonelAlderete/"
              className="ms-2 link-hover text-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="me-2" size={30} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
