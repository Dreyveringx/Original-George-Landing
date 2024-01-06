import React from "react";

const Welcome = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-6">
        <h1 className="text-4xl font-serif font-semibold text-secondary">
          ¡Bienvenido a la revolución del trading!
        </h1>
        <p className="mt-5 text-3xl text-gray-300 font-serif font-normal text-left ">
          Junto a nuestro equipo, presentamos la primera academia de trading
          gratuita en colaboración estratégica con uno de los principales
          brokers del mercado.
        </p>
      </div>
    </>
  );
};

export default Welcome;
