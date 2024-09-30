import React from "react";
import AboutHero from "../components/AboutHero";
import AboutHero2 from "../components/AboutHero2";
import placeholder from "../assets/images/about.png";

function about() {
  return (
    <div>
      <AboutHero />
      <div className="about-hero-image-container">
        <img className="about-hero-image" src={placeholder} />
      </div>
      <AboutHero2 />
    </div>
  );
}

export default about;
