import React from "react";
import Particle from "../assets/particle1.mp4";

const Bg = ({ autoplay = true, muted = true, loop = true }) => {
  const videoStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    top: 0,
    left: 0,
    zIndex: -1,
  };

  return (
    <video
      autoPlay={autoplay}
      muted={muted}
      loop={loop}
      id="videoFondo"
      style={videoStyle}
    >
      <source src={Particle} type="video/mp4" />
      Tu navegador no soporta el elemento de video.
    </video>
  );
};

export default Bg;

{
  /*<video
            autoPlay
            loop
            id="videoFondo"
            controls
            className="block col-start-1 col-end-2 object-cover   border-2 border-transparent hover:border-custom hover:shadow-custom"
          >
            <source src={Academia} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>*/
}

{
  /* <div className="h-auto col-span-3 block p-5  bg-black bg-opacity-70 border-2 bg-opacity-90 border-transparent border-custom1 shadow-custom1 mt-10">
            <Welcome />
          </div>
          <video
            autoPlay
            loop
            id="videoFondo"
            controls
            className="block object-cover   border-2 border-transparent hover:border-custom hover:shadow-custom"
          >
            <source src={Academia} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
          <div className=" bg-black flex items-center border-2 border-transparent hover:border-custom hover:shadow-custom">
            <p className="p-5 text-white text-xl">
              Hemos creado un programa educativo completo que abarca desde los
              conceptos básicos hasta técnicas avanzadas de trading. Nuestro
              equipo de expertos en el mercado financiero ha diseñado un plan de
              estudios que te guiará paso a paso, permitiéndote comprender los
              fundamentos del trading y desarrollar estrategias efectivas.
            </p>
          </div> */
}
