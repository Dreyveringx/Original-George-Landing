import React from "react";
import Perfil from "../assets/perfil.png";
import Bg from "../containers/Bg";
import "../styles/styles.css";

const Hero = () => {
  return (
    <>
      <Bg />
      <div className="text-5xl text-white bg-black  bg-opacity-80  min-h-screen flex  lg:flex-row flex-col justify-center items-center text-center">
        <div className="">
          <h1 className="mt-10 lg:text-6xl font-serif font-semibold">
            <strong>Original George</strong>
          </h1>
          <p className="mt-5 p-2 text-lg lg:text-2xl font-serif font-normal">
            ¡Descubre la revolución en el mundo del trading!
          </p>
          <p className="mt-5 mb-10 p-2 text-lg lg:text-xl text-yellow-500 font-serif font-normal">
            Únete a la Primera Academia de Trading Gratuita.
          </p>
          <a
            href="#contact"
            className="button font-serif font-semibold text-lg lg:text-xl "
          >
            ¡Únete ahora!
          </a>
          <p className="mt-10 p-3 lg:w-[600px] text-lg lg:text-xl text-gray-400 font-serif font-normal text-pretty">
            Hola soy George y quiero mostrarte cómo,sin dejar tu profesión
            actual, puedes generar una segunda fuente de ingreso en el mercado
            más grande del mundo sin pagar mensualidades y de la mano de la
            mejor academia.
          </p>
        </div>
        <img
          src={Perfil}
          alt="Foto de perfil"
          className="rounded-full w-1/2 lg:w-auto lg:h-auto"
          style={{ objectFit: "cover" }}
        />
      </div>
    </>
  );
};

export default Hero;
