import React from "react";
import ServicesContainer from "../components/ServicesContainer";
import ServicesHero from "../components/ServicesHero";
import ServicesGoals from "../components/ServicesGoals";

function services() {
  return (
    <div>
      {/* <ServicesHero /> */}
      <ServicesContainer />
      <ServicesGoals />
    </div>
  );
}

export default services;
