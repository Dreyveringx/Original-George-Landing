import React from "react";
import Academia from "../assets/Academia.mp4";
import Welcome from "./Welcome";
import Contact from "./Contac";
import "../styles/styles.css";
import Instagram from "../assets/Instagram.svg";
import Whatsapp from "../assets/whatsapp.svg";
import Footer from "./Footer";
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
        <div className="w-11/12 max-w-screen-2xl mx-auto rounded-2xl text-5xl leading-50 text-center text-white grid grid-cols-3  gap-3 mb-10">
          <div className="col-span-3 p-5 bg-black bg-opacity-70 h-[400px] mt-10 rounded-2xl flex justify-center items-center ">
            <Welcome />
          </div>
          <div className="block lg:col-span-2 md:col-span-3 row-span-3 bg-black bg-opacity-80 h-[800px]">
            <video
              autoPlay
              loop
              id="videoFondo"
              controls
              className="w-full h-full object-scale-down"
            >
              <source src={Academia} type="video/mp4" />
            </video>
          </div>
          <div className="p-5 row-span-2 flex items-center bg-black bg-opacity-80 text-left">
            <ul className="text-3xl list-disc m-5 text-yellow-500 leading-50">
              <li>Aprendizaje sin costo </li>
              <li>Primeros Pasos al Mundo del Trading</li>
              <li>Desarrollo de Habilidades de Trading</li>
              <li>Acceso a Recursos Educativos</li>
              <li>Capacitación de Psicotrading</li>
            </ul>
          </div>
          <div className="p-5 bg-black bg-opacity-80 flex items-center flex-col">
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
