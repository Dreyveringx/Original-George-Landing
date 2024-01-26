import React from "react";

const Welcome = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center lg:p-6">
        <h1 className="text-2xl lg:text-4xl font-serif font-semibold text-yellow-500 mb-5">
          ¡Bienvenido a la revolución del trading!
        </h1>
        <p className="px-3 lg:px-5 text-xl lg:text-3xl font-serif font-normal text-left text-pretty">
          Junto a nuestro equipo, presentamos la primera academia de trading
          gratuita en colaboración estratégica con uno de los principales
          brokers del mercado.
        </p>
      </div>
    </>
  );
};

export default Welcome;
