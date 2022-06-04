import React from "react";
//ui
import avatar from "../../assets/avatar.png";
import desk from "../../assets/desk.png";

export default function ProfileInfo() {
  return (
    <>
      {/* Avatar | Titulo */}
      <div className="container margin-top-profileinfo">
        {/* Titulo */}
        <div className="mx-4 text-light text-center mt-5">
          <h1 className="fw-bold">¡Hola! Mi nombre es Leonel</h1>
          <h4>Desarrollador Front-End</h4>
        </div>

        {/* Avatar */}
        <div className="text-center">
          <img src={avatar} className="img-fluid" alt="" width={230} />
        </div>
      </div>

      {/* Imagen escriotrio */}
      <div className="mt-5 text-center">
        <img src={desk} className="img-fluid mt-5" alt="" width={400} />
      </div>

      {/* Presentacion */}
      <div style={{ backgroundColor: "#187a41" }}>
        <div className="container presentation-profileinfo text-light text-center px-5">
          <h2 className="fw-bold">Soy Leonel. Es un placer conocerte.</h2>

          <p>
            Me considero un aficionado por la tecnología, ya que disfruto
            programar como hobby y profesión. Mi viaje como programador comenzó
            en 2019, cuando comencé la Tecnicatura en Desarrollo de Software en
            la Universidad Provincial de Ezeiza, desde entonces me he
            concentrado en mejorar y aprender nuevas habilidades que me ayuden
            en mi carrera profesional.
          </p>
        </div>
      </div>
    </>
  );
}
