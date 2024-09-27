import React from "react";
import AboutHero from "../components/AboutHero";
import AboutHero2 from "../components/AboutHero2";
import placeholder from "../assets/images/placeholder1.png";

function about() {
  return (
    <div>
      <AboutHero />
      <img src={placeholder} />
      <AboutHero2 />
    </div>
  );
}

export default about;
