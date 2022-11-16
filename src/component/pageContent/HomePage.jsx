import React from "react";
import Branding from "../home/Branding";
import About from "../home/about/About";
import Home from "../home/homes/Home";
import Service from "../home/services/Service";

const HomePage = () => {
  return (
    <>
      <Home />
      <Branding />
      <About />
      <Service />
    </>
  );
};

export default HomePage;
