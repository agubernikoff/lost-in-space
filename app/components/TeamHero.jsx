import React from "react";
import hero from "../assets/images/hero.png";

export default function TeamPage() {
  return (
    <div>
      <div className="team-header">
        Meet the Visionaries and Creators Behind Our Commitment to Empowering
        Filmmakers and Independent Creators Worldwide.
      </div>
      <img src={hero} />
    </div>
  );
}
