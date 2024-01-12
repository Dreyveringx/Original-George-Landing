import React from "react";
import Perfil from "../assets/perfil.png";
import Bg from "../containers/Bg";
import "../styles/styles.css";

const Hero = () => {
  return (
    <>
      <Bg />
      <div className="text-5xl text-white bg-black  bg-opacity-80  min-h-screen flex  lg:flex-row flex-col md:items-center justify-center items-center text-center">
        <div className="text-center p-24 ">
          <h1 className="md:text-3xl sm:text-3xl ms:text-4xl lg:text-6xl font-serif font-semibold">
            <strong>Original George</strong>
          </h1>
          <p className="mt-5 sm:text-sm md:text-xl lg:text-2xl font-serif font-normal">
            ¡Descubre la revolución en el mundo del trading!
          </p>
          <p className="mt-5 mb-10 sm:text-base md:text-lg lg:text-xl text-yellow-500 font-serif font-normal">
            Únete a la Primera Academia de Trading Gratuita.
          </p>
          <a
            href="#contact"
            className="button font-serif font-semibold sm:text-sm md:text-lg lg:text-xl "
          >
            ¡Únete ahora!
          </a>
        </div>
        <img
          src={Perfil}
          alt="Foto de perfil"
          className="rounded-full w-auto h-auto"
          style={{ objectFit: "cover" }}
        />
      </div>
    </>
  );
};

export default Hero;
