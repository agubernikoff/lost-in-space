import React from "react";
import TeamContainer from "../components/TeamContainer";
import TeamHero from "../components/TeamHero";
import JoinTheTeam from "../components/JoinTheTeam";
import { client } from "../sanity/SanityClient";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  const teamMembers = await client
    .fetch(
      "*[_type == 'teamMember']{...,image{asset->{url}}} | order(rank asc)"
    )
    .then((response) => response);

  const teamPage = await client
    .fetch("*[_type == 'teamPage'][0]{...,image{asset->{url}}}")
    .then((response) => response);

  return { teamMembers, teamPage };
}

export async function action({ request }) {
  console.log(await request);
  return null;
}

function team() {
  const { teamMembers, teamPage } = useLoaderData();

  return (
    <div>
      <TeamHero data={teamPage} />
      <TeamContainer teamMembers={teamMembers} />
      {teamPage?.hiring ? <JoinTheTeam /> : null}
    </div>
  );
}

export default team;
