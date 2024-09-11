import React, { useState } from "react";
import SVGButton from "./SVGButton";
import SVGCorner from "./SVGCorner";
import p3 from "../assets/images/placeholder3.png";
import p4 from "../assets/images/placeholder4.png";

function ServicesContainer() {
  const [isOurPlace, setIsOurPlace] = useState(true);
  const handleOurPlaceClick = () => {
    setIsOurPlace(true);
  };

  const handleOrYoursClick = () => {
    setIsOurPlace(false);
  };

  return (
    <div className="services-page">
      <h1>SERVICES</h1>
      <div className="services-container">
        <div className="services-left-section">
          <SVGCorner />
          <h2>{isOurPlace ? "Consulting" : "Editorial"}</h2>
          <div className="services-content">
            {isOurPlace ? (
              <>
                <p className="service-box">
                  Hardware Purchasing and Integration
                </p>
                <p className="service-box">Facility Management & Maintenance</p>
                <p className="service-box">Troubleshooting</p>
                <p className="service-box">
                  Field to Delivery Workflow Consultation
                </p>
                <p className="service-box">Technical Support</p>
              </>
            ) : (
              <>
                <p className="service-box">Professional Onboarding</p>
                <p className="service-box">Delivery</p>
                <p className="service-box">Archive Services</p>
                <p className="service-box">Professional Media Storage</p>
                <p className="service-box">Post Supervisor Services</p>
                <p className="service-box">First Class Tech Support</p>
                <p className="service-box">Mac-Based Remote Editing Systems</p>
              </>
            )}
          </div>
          <SVGButton
            text={"Contact Us"}
            isNavigational={true}
            path={"/contact"}
          />
        </div>
        <div className="services-right-section">
          <img
            src={isOurPlace ? p3 : p4}
            alt={isOurPlace ? "Our Place Image" : "Or Yours Image"}
          />
        </div>
      </div>
      <div className="services-toggle-buttons">
        <SVGButton
          text={"Our Place"}
          isNavigational={false}
          handleClick={handleOurPlaceClick}
        />
        <SVGButton
          text={"Or Yours"}
          isNavigational={false}
          handleClick={handleOrYoursClick}
        />
      </div>
    </div>
  );
}

export default ServicesContainer;
