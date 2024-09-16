import React from "react";
import SVGButton from "./SVGButton";
import services from "../assets/images/services.png";

function ServicesHero() {
  return (
    <div className="services-hero-container">
      {/* Left Side */}
      <div className="services-left">
        <h2 className="services-header">
          Explore our comprehensive range of production and post-production{" "}
          <span className="highlight">
            services tailored to your creative needs.
          </span>
        </h2>
        <SVGButton
          text={"Contact Us"}
          isNavigational={true}
          path={"/contact"}
        />
        <p className="scroll-to-explore">SCROLL TO EXPLORE</p>
      </div>

      {/* Right Side */}
      <div className="services-right">
        <img src={services} alt="Service Hero" className="services-image" />
      </div>
    </div>
  );
}

export default ServicesHero;
