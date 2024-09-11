import React, { useState } from "react";

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
          <h2>{isOurPlace ? "Consulting" : "Editorial"}</h2>
          <div className="services-content"></div>
          <button>Contact Us</button>
        </div>
        <div className="services-right-section">
          <img
            src={isOurPlace ? "our-place-image.jpg" : "or-yours-image.jpg"}
            alt={isOurPlace ? "Our Place Image" : "Or Yours Image"}
          />
        </div>
      </div>
      <div className="services-toggle-buttons">
        <button
          onClick={handleOurPlaceClick}
          className={isOurPlace ? "active" : ""}
        >
          Our Place
        </button>
        <button
          onClick={handleOrYoursClick}
          className={!isOurPlace ? "active" : ""}
        >
          Or Yours
        </button>
      </div>
    </div>
  );
}

export default ServicesContainer;
