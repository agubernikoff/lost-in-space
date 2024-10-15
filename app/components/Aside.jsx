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
import { client } from "../sanity/SanityClient";
import { useRootLoaderData } from "../root";
import { PortableText } from "@portabletext/react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:990px)");
    const handleMediaChange = (e) => setIsMobile(e.matches);

    mediaQuery.addEventListener("change", handleMediaChange);
    if (mediaQuery.matches) setIsMobile(true);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  const teamMembers = useRootLoaderData().teamMembers;

  const { hash, search } = useLocation();

  // Create a URLSearchParams object from the search string
  const searchParams = new URLSearchParams(search);

  // Get individual parameters
  const member = searchParams.get("member"); // Get 'param1' value

  const [teamMember, setTeamMember] = useState(null);

  useEffect(() => {
    if (hash.includes(id) && !isMobile) {
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
  }, [hash, id, isMobile]);

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
              <div className="team-member-details-container">
                <img src={teamMember.image.asset.url} alt={teamMember.name} />
                <div className="team-member-name">{teamMember.name}</div>
                <div className="team-member-title">
                  {teamMember.position.toUpperCase()}
                </div>
              </div>
              <div>
                <PortableText value={teamMember.bio} />
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
