import React from "react";
import ServicesContainer from "../components/ServicesContainer";
import ServicesHero from "../components/ServicesHero";
import ServicesGoals from "../components/ServicesGoals";
import { useRootLoaderData } from "../root";

function services() {
  const { servicesPage } = useRootLoaderData();

  return (
    <div>
      {/* <ServicesHero /> */}
      <ServicesContainer services={servicesPage?.services} />
      <ServicesGoals squares={servicesPage?.bottomSquares} />
    </div>
  );
}

export default services;
