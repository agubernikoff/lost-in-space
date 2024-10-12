import React from "react";
import TeamContainer from "../components/TeamContainer";
import TeamHero from "../components/TeamHero";
import JoinTheTeam from "../components/JoinTheTeam";
import { client } from "../sanity/SanityClient";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  const teamMembers = await client
    .fetch("*[_type == 'teamMember']|order(rank asc)")
    .then((response) => response);

  return teamMembers;
}

export async function action({ request }) {
  console.log(await request);
  return null;
}

function team() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <TeamHero />
      <TeamContainer />
      {/* <JoinTheTeam /> */}
    </div>
  );
}

export default team;
