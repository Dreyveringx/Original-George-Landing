import React from "react";
import Academia from "../assets/Academia.mp4";
import "../styles/styles.css";

const Bg = () => {
  return (
    <video autoPlay loop id="videoFondo" controls className="bg-video">
      <source src={Academia} type="video/mp4" />
      Tu navegador no soporta el elemento de video.
    </video>
  );
};

export default Bg;
