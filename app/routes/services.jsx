import React from "react";
import ServicesContainer from "../components/ServicesContainer";
import ServicesHero from "../components/ServicesHero";
import ServicesGoals from "../components/ServicesGoals";
import { useRootLoaderData } from "../root";

export const meta = () => {
  return [
    { title: "Lost in Space" },
    { name: "description", content: "Lost in Space" },
  ];
};

function services() {
  const { servicesPage } = useRootLoaderData();

  return (
    <div>
      {/* <ServicesHero /> */}
      <ServicesContainer
        services={servicesPage?.services}
        header={servicesPage?.primary_header}
      />
      <ServicesGoals
        squares={servicesPage?.bottomSquares}
        header={servicesPage?.secondary_header}
        subheader={servicesPage?.subheader}
      />
    </div>
  );
}

export default services;
