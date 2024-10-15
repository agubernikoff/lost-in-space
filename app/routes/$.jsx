import React, { useEffect } from "react";
import movie from "../assets/images/404.mp4";
import SVGButton from "../components/SVGButton";

export const meta = () => {
  return [
    { title: "Lost in Space" },
    { name: "description", content: "Lost in Space" },
  ];
};

function BackgroundVideo() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    document.body.style.backgroundColor = "black";
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.backgroundColor = "";
    };
  }, []);
  return (
    <div className="fourohfour-container">
      <div className="mobile-black-background"></div>
      <video autoPlay loop muted className="background-video" playsInline>
        <source src={movie} type="video/mp4" />
      </video>
      <div className="fourohfour-overlay">
        <h1>ERROR 404</h1>
        <h1>YOU LOST?</h1>
        <SVGButton text={"Back to Home"} isNavigational={true} path={"/"} />
      </div>
    </div>
  );
}

export default BackgroundVideo;
