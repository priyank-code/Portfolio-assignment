import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";
import ThankYou from "./components/ThankYou";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio />
      <Skills />
      <Testimonial />
      <ThankYou />
      <Footer />
    </>
  );
};
export default App;
