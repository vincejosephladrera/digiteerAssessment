import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import FieldOfWork from "../components/FieldOfWork";
import News from "../components/News";
import Partners from "../components/Partners";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <About />
      <FieldOfWork />
      <News />
      <Partners />
      <Footer />
    </div>
  );
};

export default HomePage;
