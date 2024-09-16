import React from "react";
import Footer from "../components/Footer";
import ServicesContainer from "../components/ServicesContainer";
import ServicesHero from "../components/ServicesHero";

function services() {
  return (
    <div>
      <ServicesHero />
      <ServicesContainer />
      <Footer />
    </div>
  );
}

export default services;
