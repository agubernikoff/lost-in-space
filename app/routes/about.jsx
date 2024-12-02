import React from "react";
import AboutHero from "../components/AboutHero";
import AboutHero2 from "../components/AboutHero2";
import { useRootLoaderData } from "../root";

export const meta = () => {
  return [
    { title: "Lost in Space" },
    { name: "description", content: "Lost in Space" },
  ];
};

function about() {
  const { aboutPage } = useRootLoaderData();
  console.log(aboutPage);
  return (
    <div>
      <AboutHero
        bullets={aboutPage?.aboutBulletsTopSection}
        header={aboutPage?.primary_header}
      />
      <div className="about-hero-image-container">
        <img className="about-hero-image" src={aboutPage?.image.asset.url} />
      </div>
      <AboutHero2
        bullets={aboutPage?.aboutBulletsBottomSection}
        header={aboutPage?.secondary_header}
      />
    </div>
  );
}

export default about;
