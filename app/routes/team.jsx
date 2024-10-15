import React from "react";
import TeamContainer from "../components/TeamContainer";
import TeamHero from "../components/TeamHero";
import JoinTheTeam from "../components/JoinTheTeam";
import { useRootLoaderData } from "../root";

export const meta = () => {
  return [
    { title: "Lost in Space" },
    { name: "description", content: "Lost in Space" },
  ];
};

function team() {
  const { teamPage, teamMembers } = useRootLoaderData();

  return (
    <div>
      <TeamHero data={teamPage} />
      <TeamContainer teamMembers={teamMembers} />
      {teamPage?.hiring ? <JoinTheTeam /> : null}
    </div>
  );
}

export default team;
