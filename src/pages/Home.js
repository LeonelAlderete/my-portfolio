import React from "react";
//componentes
import BackTopButton from "../components/BackTopButton/BackTopButton";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
import MyProyects from "../components/MyProyects/MyProyects";
import ProfileInfo from "../components/ProfileInfo/ProfileInfo";
import Skills from "../components/Skills/Skills";

export default function Home() {
  return (
    <div>
      <Header />

      <ProfileInfo />

      <Skills />

      <MyProyects />

      <Contact />

      <BackTopButton />
    </div>
  );
}
