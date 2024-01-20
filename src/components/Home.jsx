import React from "react";
import Bento from "./Bento";
import Watercolor1 from "../assets/watercolor1.svg";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <Bento backgroundImage={Watercolor1} />
    </>
  );
};

export default Home;
