import React from "react";
import Academia from "../assets/Academia.mp4";
import Welcome from "./Welcome.jsx";
import Contact from "./Contac.jsx";
import "../styles/styles.css";
import Instagram from "../assets/instagram.svg";
import Whatsapp from "../assets/whatsapp.svg";
import Footer from "./Footerr.jsx";
const Bento = ({ backgroundImage }) => {
  const bentoStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative",
    minHeight: "100vh",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  };
  return (
    <>
      <section style={bentoStyle}>
        <div className="w-full lg:max-w-screen-2xl lg:mx-auto p-5 rounded-2xl text-5xl leading-50 text-center text-white flex flex-col lg:grid lg:grid-cols-4 gap-3">
          <div className="lg:col-span-4 bg-black bg-opacity-70 h-[350px] md:h-[200px]  lg:h-auto mt-5 lg:mt-10 rounded-2xl flex justify-center items-center">
            <Welcome />
          </div>
          <div className="block lg:col-span-2  bg-black bg-opacity-80 lg:h-[750px]  rounded-2xl">
            <video
              autoPlay
              loop
              id="videoFondo"
              controls
              className="w-full h-full object-scale-down rounded-2xl"
            >
              <source src={Academia} type="video/mp4" />
            </video>
          </div>
          <div
            id="Beneficios"
            className="p-5 lg:col-span-2 flex  bg-black bg-opacity-80 text-left flex-col rounded-2xl"
          >
            <h1 className="text-2xl lg:text-4xl font-serif font-semibold text-yellow-500 my-5 text-center">
              Beneficios
            </h1>
            <ul className="text-xl lg:text-2xl list-disc m-5 text-white lg:leading-10">
              <li className="lg:ml-9">Aprendizaje sin costo. </li>
              <li className="lg:ml-9">Primeros Pasos al Mundo del Trading.</li>
              <li className="lg:ml-9">Desarrollo de Habilidades de Trading.</li>
              <li className="lg:ml-9">Acceso a Recursos Educativos.</li>
              <li className="lg:ml-9">Capacitación de Psicotrading.</li>
            </ul>

            <h1 className="text-2xl lg:text-4xl font-serif font-semibold text-yellow-500 my-5 text-center">
              Lo que aprenderás
            </h1>
            <ul className="text-xl lg:text-2xl list-none m-5 text-white lg:leading-10">
              <li>
                <span className="mr-2 text-yellow-300">&#10003;</span>
                <span>Cómo usar estrategias rentables.</span>
              </li>
              <li>
                <span className="mr-2 text-yellow-300">&#10003;</span>
                <span>
                  Mentalidad correcta para obtener ganancias consistentes.
                </span>
              </li>
              <li>
                <span className="mr-2 text-yellow-300">&#10003;</span>
                <span>Cómo ganar comisiones por brokeraje.</span>
              </li>
              <li>
                <span className="mr-2 text-yellow-300">&#10003;</span>
                <span>
                  El paso a paso para copiar señales mientras te conviertes en
                  un trader profesional.
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 bg-black bg-opacity-70 rounded-2xl flex justify-center items-center">
            <p className="text-xl lg:text-2xl font-serif font-normal text-white p-5 text-left text-pretty">
              ¡Despierta tu potencial financiero y aprende a dominar el arte del
              trading de manera gratuita! No dejes pasar la oportunidad de
              transformar tus conocimientos y construir un futuro próspero. ¡El
              aprendizaje está a un clic de distancia, únete ahora y haz que
              cada movimiento cuente hacia tu éxito financiero! 🚀💹
              <span className="text-yellow-500">
                #AprendeATrading #OportunidadÚnica
              </span>
            </p>
          </div>

          <div
            id="socials"
            className="p-5  bg-black bg-opacity-80 flex items-center flex-col rounded-2xl"
          >
            <h1 className="text-3xl font-bold mt-5 mb-12">Sígueme:</h1>
            <div className="flex gap-10 mx-auto">
              <a
                href="https://www.instagram.com/fonso_george?igsh=MThxYjhyazltaXhibQ%3D%3D"
                target="_blank"
                className="btn"
              >
                <img src={Instagram} alt="logo" className="w-10 h-auto" />
              </a>
              <a href="https://wa.link/u6e6wg" target="_blank" className="btn">
                <img src={Whatsapp} alt="logo" className="w-10 h-auto" />
              </a>
            </div>
          </div>
        </div>
        <Contact />
        <Footer />
      </section>
    </>
  );
};

export default Bento;
