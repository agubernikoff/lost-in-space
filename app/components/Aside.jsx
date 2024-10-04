import { useEffect, useState } from "react";
import alexImage from "../assets/images/alex.png";
import caroImage from "../assets/images/caro.png";
import artieImage from "../assets/images/artie.png";
import monishaImage from "../assets/images/monisha.png";
import elfImage from "../assets/images/elf.png";
import gusImage from "../assets/images/gus.png";
import nawImage from "../assets/images/naw.png";
import spaceImage from "../assets/images/spaceman.png";
import { useLocation, useNavigate } from "@remix-run/react";
/**
 * A side bar component with Overlay that works without JavaScript.
 * @example
 * ```jsx
 * <Aside id="search-aside" heading="SEARCH">
 *  <input type="search" />
 *  ...
 * </Aside>
 * ```
 * @param {{
 *   children?: React.ReactNode;
 *   heading: React.ReactNode;
 *   id?: string;
 * }}
 */
export function Aside({ children, heading, id = "aside" }) {
  const teamMembers = [
    {
      image: alexImage,
      name: "Alexander Santoro",
      title: "CEO & Co-Founder",
      bio1: "",
      bio2: "",
    },
    {
      image: caroImage,
      name: "Carolyn LaVeglia",
      title: "CEO & Co-Founder",
      bio1: "Carolyn LaVeglia is the CEO and co-founder of Lost in Space. Since starting her career at RadicalMedia, she has worked as a producer across documentary films and unscripted television series for clients such as Apple TV+, Netflix, Hulu, ESPN and MSNBC. Carolyn has also worked on live television events like Miley’s New Years Eve Party - as well as events, immersive experiences, and content for brands like Target and American Express. In 2024, she became an Emmy Award Winning Post-Producer for her work on Super League: The War for Football. She has a passion for bringing stories to life in different ways and strives to understand every part of the process. Owning this business is her dream come true. Carolyn is a Queens native, knows how to read tarot cards, and has a picture of pasta as her email background.",
      bio2: "",
    },
    {
      image: artieImage,
      name: "Artie Dossick",
      title: "Co-Producer",
      bio1: "Artie Dossick is a Los Angeles native and graduate of Syracuse University, where he majored in Communications and Film Studies. During his time at Syracuse, he held internships at Sony Pictures and Viacom, both in Production Management. After graduation, Artie started his career in the mailroom at Entertainment 360, a talent management and production company based in Beverly Hills. He was promoted and worked for the Managing Partner in the Literary Division.",
      bio2: "During Covid, Artie moved to New York to pursue a career in documentary filmmaking and worked at RadicalMedia as a coordinator for two Executive Producers that specialized in immersive experiences and documentary production. Artie has taken his learnings from his vast experience across development, production and post-production; he is currently a Co-Producer at Lost in Space. During his free time, he enjoys hanging out with friends, going to the beach, watching sports, and playing pickle ball.",
    },
    {
      image: monishaImage,
      name: "Monisha Roychoudhury",
      title: "Associate Producer",
      bio1: "Monisha Roychoudhury is a filmmaker and producer born and raised in New York City (Queens get the money!). She recently received her MFA in Film Directing from the Feirstein Graduate School of Cinema and graduated with a BS from the University of Illinois at Urbana-Champaign in Human Development and Family Studies. This intersection of seemingly disparate interests - filmmaking and child development / sociology - has made her very passionate about telling person-centered stories from unique and genuine perspectives.",
      bio2: "Monisha has worked as a producer at Cape Town TV (a community-based television station based in Cape Town, South Africa), as an editor of instructional videos for AGCOCorp, and directed / produced numerous independent short films. She is currently an Associate Producer at Lost in Space and it’s her favorite job to date (and she’s not just saying that!) She loves watching TV (of course), going to concerts, and playing Stardew Valley in her free time.",
    },
    {
      image: elfImage,
      name: "Efrain Rivera",
      title: "Post Production Liaison",
      bio1: "",
      bio2: "",
    },
    {
      image: gusImage,
      name: "Giuseppe de Matteis",
      title: "Assistant Editor",
      bio1: "Giuseppe de Matteis is an Assistant Engineer at Lost in Space. Mainly, helping the company with media management and providing technical support for their clients. Currently, Giuseppe graduated from the Fierstein School of Cinema with a concentration in film editing. Throughout the course of his school, he has worked on multiple student and professional projects but lately as a DIT and assistant editor. When he’s not going to school or work, he enjoys going out with his friends, going to the movies, watching video essays on Youtube on random subjects, and playing League of Legends.",
      bio2: "",
    },
    {
      image: nawImage,
      name: "Nawal Mubin",
      title: "Post Coordinator",
      bio1: "Nawal Mubin is a filmmaker and producer. She graduated The College of New Jersey in 2019 where she studied Communications and Pre-Law and decided her goal was to become an Entertainment Lawyer. After working in a law firm for a couple years, Nawal quit right before COVID. As she sat at home during lockdown she had a eureka moment where she realized the part she loved the most about being an Entertainment Lawyer, was the entertainment part.",
      bio2: "In Spring 2023, Nawal received her MFA in Producing at Feirstein Graduate School of Cinema. She has worked as a Development and Production intern at FilmNation, a producer for numerous short films, and is currently a social media coordinator for a non-profit organization.",
      bio3: "Nawal joined the team at Lost in Space in Summer 2023 as a Post Coordinator. In her free time, she continues to work as a freelance producer, spends way too much time on TikTok, and continues to write stories that uplift and represent her communities.",
    },
    {
      image: spaceImage,
      name: "Next Space Cadet",
      title: "This Could Be You",
      bio1: "",
      bio2: "",
    },
  ];
  const { hash, search } = useLocation();

  // Create a URLSearchParams object from the search string
  const searchParams = new URLSearchParams(search);

  // Get individual parameters
  const member = searchParams.get("member"); // Get 'param1' value

  const [teamMember, setTeamMember] = useState(null);

  useEffect(() => {
    if (hash.includes(id)) {
      setTimeout(() => {
        const scrollPosition = window.scrollY;
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollPosition}px`;
      }, 500);
      document.querySelector(".overlay").classList.add("reveal");
      document.querySelector(".overlay").style.opacity = 1;
      document.querySelector("aside").style.transform = "translateX(0)";
      setTeamMember(teamMembers.find((tm) => tm.name === member));
    } else {
      setTimeout(
        () => document.querySelector(".overlay").classList.remove("reveal"),
        400
      );
      document.querySelector("aside").style.transform =
        "translateX(calc(1rem + var(--aside-width)))";
      document.querySelector(".overlay").style.opacity = 0;
      const scrollPosition = Math.abs(parseInt(document.body.style.top, 10));
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, scrollPosition);
    }
  }, [hash, id]);

  return (
    <div aria-modal className="overlay" id={id} role="dialog">
      {heading != "menu" ? null : (
        <button
          className="close-outside"
          onClick={() => {
            history.go(-1);
            window.location.hash = "";
          }}
        />
      )}
      <aside>
        <CloseAside />
        <main>
          {teamMember ? (
            <>
              <div>
                <img src={teamMember.image} alt={teamMember.name} />
                <div className="team-member-name">{teamMember.name}</div>
                <div className="team-member-title">
                  {teamMember.title.toUpperCase()}
                </div>
              </div>
              <div>
                <p>{teamMember.bio1}</p>
                <p>{teamMember.bio2}</p>
                <p>{teamMember.bio3}</p>
              </div>
            </>
          ) : null}
        </main>
      </aside>
    </div>
  );
}

function CloseAside() {
  const nav = useNavigate();
  return (
    /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
    <button
      className="close"
      onClick={(e) => {
        e.preventDefault();
        nav("/team", { preventScrollReset: true });
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.859221 1.02159L0.935478 0.935234C1.26592 0.60479 1.78588 0.579371 2.14548 0.858977L2.23184 0.935234L8.00033 6.703L13.7688 0.935234C14.1268 0.577253 14.7072 0.577253 15.0652 0.935234C15.4232 1.29321 15.4232 1.87362 15.0652 2.2316L9.29741 8.00008L15.0652 13.7686C15.3956 14.099 15.421 14.619 15.1414 14.9786L15.0652 15.0649C14.7347 15.3954 14.2148 15.4208 13.8552 15.1412L13.7688 15.0649L8.00033 9.29716L2.23184 15.0649C1.87386 15.4229 1.29346 15.4229 0.935478 15.0649C0.577497 14.7069 0.577497 14.1265 0.935478 13.7686L6.70324 8.00008L0.935478 2.2316C0.605034 1.90115 0.579615 1.38119 0.859221 1.02159L0.935478 0.935234L0.859221 1.02159Z"
          fill="#5B516D"
        />
      </svg>
    </button>
  );
}
