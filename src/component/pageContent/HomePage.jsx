import React from "react";
import Branding from "../home/Branding";
import About from "../home/about/About";
import Home from "../home/homes/Home";
import Service from "../home/services/Service";
import Wrapper from "../home/Wrapper";
import Skill from "../home/Skill";
import WrapperOne from "../home/WrapperOne";
import WrapperTwo from "../home/WrapperTwo";
import Footer from "../home/Footer";
import Work from "../home/work/Work";

const HomePage = () => {
  return (
    <>
      <Home />
      <Branding />
      <About />
      <Service />
      <Wrapper />
      <Skill />
      <WrapperOne />
      <WrapperTwo />
      <Work />
      <Footer />
    </>
  );
};

export default HomePage;
