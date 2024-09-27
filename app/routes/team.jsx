import React from "react";
import TeamContainer from "../components/TeamContainer";
import TeamHero from "../components/TeamHero";
import JoinTheTeam from "../components/JoinTheTeam";

function team() {
  return (
    <div>
      <TeamHero />
      <TeamContainer />
      <JoinTheTeam />
    </div>
  );
}

export default team;
