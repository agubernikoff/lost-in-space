import React from "react";
import TeamContainer from "../components/TeamContainer";
import TeamHero from "../components/TeamHero";
import JoinTheTeam from "../components/JoinTheTeam";

export async function action({ request }) {
  console.log(await request);
  return null;
}

function team() {
  return (
    <div>
      <TeamHero />
      <TeamContainer />
      {/* <JoinTheTeam /> */}
    </div>
  );
}

export default team;
