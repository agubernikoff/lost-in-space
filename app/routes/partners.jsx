import React from "react";
import TeamContainer from "../components/TeamContainer";
import TeamHero from "../components/TeamHero";
import { useRootLoaderData } from "../root";

export const meta = () => {
  return [
    { title: "Lost in Space" },
    { name: "description", content: "Lost in Space" },
  ];
};

function team() {
  const { partnersPage, clients } = useRootLoaderData();

  return (
    <div>
      <TeamHero data={partnersPage} header={partnersPage?.primary_header} />
      <TeamContainer
        teamMembers={clients}
        header={partnersPage?.secondary_header}
        isMember={false}
      />
    </div>
  );
}

export default team;
