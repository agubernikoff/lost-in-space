import React from "react";
import AboutHero from "../components/AboutHero";
import AboutHero2 from "../components/AboutHero2";
import { useRootLoaderData } from "../root";

function about() {
  const { aboutPage } = useRootLoaderData();
  console.log(aboutPage);
  return (
    <div>
      <AboutHero bullets={aboutPage?.aboutBulletsTopSection} />
      <div className="about-hero-image-container">
        <img className="about-hero-image" src={aboutPage?.image.asset.url} />
      </div>
      <AboutHero2 bullets={aboutPage?.aboutBulletsBottomSection} />
    </div>
  );
}

export default about;
