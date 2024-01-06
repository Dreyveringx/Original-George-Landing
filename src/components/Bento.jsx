import React from "react";
import Academia from "../assets/academia.mp4";
import Welcome from "./Welcome";
import Contact from "./Contac";
import "../styles/styles.css";
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
          <div className="col-span-3 p-5 bg-black h-[400px] mt-10 rounded-2xl flex justify-center items-center ">
            <Welcome />
          </div>
          <div className="block lg:col-span-2 md:col-span-3 row-span-3 bg-black h-[800px]">
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
          <div className="block row-span-2 p-5 bg-blue-500">3</div>
          <div className="block p-5 bg-blue-500">4</div>
          <div className="block p-5 bg-blue-500">5</div>
          <div className="block p-5 bg-blue-500">6</div>
          <div className="block p-5 bg-blue-500">7</div>
          <div className="block p-5 bg-blue-500"> 8</div>
          <div className="block p-5 bg-blue-500"> 9</div>
          <div className="block p-5 bg-blue-500">10</div>
          <div className="block p-5 bg-blue-500">11</div>
          <div className="block p-5 bg-blue-500">12</div>
        </div>
        <Contact />
      </section>
    </>
  );
};

export default Bento;
