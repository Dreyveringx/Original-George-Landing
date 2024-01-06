import React from "react";
import Perfil from "../assets/perfil.png";
import Bg from "../containers/Bg";
import "../styles/styles.css";

const Hero = () => {
  return (
    <>
      <Bg />
      <div className="text-5xl text-white bg-black  bg-opacity-80  min-h-screen flex justify-center items-center">
        <div className="text-center p-24">
          <h1 className="text-6xl font-serif font-semibold">
            <strong>Original George</strong>
          </h1>
          <p className="mt-5 text-2xl font-serif font-normal">
            ¡Descubre la revolución en el mundo del trading!
          </p>
          <p className="mt-5 mb-10 text-xl text-secondary font-serif font-normal">
            Únete a la Primera Academia de Trading Gratuita.
          </p>
          <a
            href="#contact"
            className="button font-serif font-semibold text-xl "
          >
            ¡Únete ahora!
          </a>
        </div>
        <img
          src={Perfil}
          alt="Foto de perfil"
          className="rounded-full"
          style={{ objectFit: "cover" }}
        />
      </div>
    </>
  );
};

export default Hero;
