import { animate, motion, useInView } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import SVGButton from "./SVGButton";
import alexImage from "../assets/images/alex.png";
import caroImage from "../assets/images/caro.png";
import artieImage from "../assets/images/artie.png";
import monishaImage from "../assets/images/monisha.png";
import elfImage from "../assets/images/elf.png";
import gusImage from "../assets/images/gus.png";
import nawImage from "../assets/images/naw.png";
import spaceImage from "../assets/images/spaceman.png";
import { useNavigate } from "@remix-run/react";
import { PortableText } from "@portabletext/react";

function TeamContainer({ teamMembers = [] }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:990px)");
    const handleMediaChange = (e) => setIsMobile(e.matches);

    mediaQuery.addEventListener("change", handleMediaChange);
    if (mediaQuery.matches) setIsMobile(true);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);
  const text = useRef(null);
  const inView = useInView(text, { once: true, amount: 0.25 });
  const carousel = useRef(null);

  const [cardDisplayed, setCardDisplayed] = useState(1);

  function splitArray(arr, chunkSize = 4) {
    const result = [];

    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }

    return result;
  }

  function slideRight() {
    setCardDisplayed(cardDisplayed - 1);
    animate(
      carousel.current,
      {
        x: `calc((((var(--card-width-team) * ${
          cardDisplayed - 2
        }) + var(--card-adjustment-team) * ${cardDisplayed - 3}) * -1) - 2rem)`,
      },
      { transition: "easeInOut" }
    );
  }

  function slideLeft() {
    setCardDisplayed(cardDisplayed + 1);
    animate(
      carousel.current,
      {
        x: `calc((((var(--card-width-team) * ${cardDisplayed}) + var(--card-adjustment-team) * ${
          cardDisplayed - 1
        }) * -1) - 2rem)`,
      },
      { transition: "easeInOut" }
    );
  }

  return (
    <div className="team-container">
      <div ref={text} className="centered-team-container">
        <p
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(100px",
            transition: "all .4s ease",
          }}
        >
          MEET THE TEAM
        </p>
        <h2>
          {isMobile ? (
            <>
              <div style={{ overflow: "hidden" }}>
                <span
                  style={{
                    transform: inView ? "none" : "translateY(150px)",
                    transition: "all .4s ease .4s",
                  }}
                  className="motion-span"
                >
                  THE SQUAD
                </span>
              </div>
              <div style={{ overflow: "hidden" }}>
                <span
                  style={{
                    transform: inView ? "none" : "translateY(150px)",
                    transition: "all .4s ease .8s",
                  }}
                  className="motion-span"
                >
                  BEHIND <span className="highlight">OUR</span>
                </span>
              </div>
              <div style={{ overflow: "hidden" }}>
                <span
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "none" : "translateY(150px)",
                    transition: "all .4s ease 1.2s",
                  }}
                  className="highlight motion-span"
                >
                  SUCCESS
                </span>
              </div>
            </>
          ) : (
            <>
              <div style={{ overflow: "hidden" }}>
                <span
                  style={{
                    transform: inView ? "none" : "translateY(150px)",
                    transition: "all .4s ease .4s",
                  }}
                  className="motion-span"
                >
                  THE SQUAD BEHIND{" "}
                </span>
              </div>
              <div style={{ overflow: "hidden" }}>
                <span
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "none" : "translateY(150px)",
                    transition: "all .4s ease .8s",
                  }}
                  className="highlight motion-span"
                >
                  OUR SUCCESS
                </span>
              </div>
            </>
          )}
        </h2>
      </div>

      {isMobile ? (
        <>
          <motion.div
            initial={{ opacity: 0, x: "94vw" }}
            whileInView={{
              opacity: 1,
              x: "1rem",
            }}
            viewport={{ once: true, amount: 0.005 }}
            transition={{ duration: 0.8 }}
            style={{ transition: "transform .4s ease" }}
            className="team-members-container"
            ref={carousel}
          >
            {teamMembers.map((member, index) => (
              <TeamMemberMobile
                key={member.name}
                member={member}
                // onClick={() => setActiveModal(index)}
              />
            ))}
          </motion.div>
          <motion.div
            style={{ margin: "auto", width: "fit-content" }}
            initial={{ opacity: 0, y: 100, x: 0 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="clients-arrow-buttons-container"
          >
            <button onClick={slideRight} disabled={cardDisplayed === 1}>
              ←
            </button>
            <button
              onClick={slideLeft}
              disabled={cardDisplayed === teamMembers.length}
            >
              →
            </button>
          </motion.div>
        </>
      ) : (
        splitArray(teamMembers).map((arrayOf4) => (
          <motion.div
            initial={{ opacity: 0, x: "97vw" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.005 }}
            transition={{ duration: 0.8 }}
            className="team-members-container"
            key={arrayOf4[0].name}
          >
            {arrayOf4.map((member, index) => (
              <TeamMember
                key={index}
                member={member}
                // onClick={() => setActiveModal(index)}
              />
            ))}
          </motion.div>
        ))
      )}
    </div>
  );
}

function TeamMember({ member }) {
  const nav = useNavigate();
  return (
    <div className="team-member">
      <div className="image-container">
        <img src={member.image.asset.url} alt={member.name} />
        <div
          className="toggle-button"
          onClick={() => {
            nav(`/team?member=${member.name}#aside`);
          }}
        >
          +
        </div>
      </div>
      <div className="team-member-name">{member.name}</div>
      <div className="team-member-title">{member.position.toUpperCase()}</div>
    </div>
  );
}

function TeamMemberMobile({ member }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const ref = useRef(null);

  const handleFlip = () => {
    animate(
      ref.current,
      { rotateY: -90 },
      { ease: "easeInOut", duration: 0.4 }
    );
    setTimeout(() => setIsFlipped((prev) => !prev), 400);
  };

  useEffect(() => {
    animate(
      ref.current,
      { rotateY: isFlipped ? -180 : 0 },
      { ease: "easeInOut", duration: 0.4 }
    );
  }, [isFlipped]);

  return (
    <div
      className="team-member"
      style={{
        perspective: "1000px",
      }}
    >
      {/* Rotating Image */}
      <motion.div
        className="image-container"
        // animate={{ rotateY: isFlipped ? 180 : 0 }} // Spin 180 degrees on Y axis
        transition={{ duration: 0.8 }}
        ref={ref}
      >
        {isFlipped ? (
          // Show bio when flipped
          <div
            className="bio-content"
            style={{
              transform: "rotateY(180deg)",
            }}
          >
            <button
              className="toggle-button"
              onClick={handleFlip}
              style={{
                position: "static",
                float: "right",
                marginBottom: ".5rem",
                marginLeft: ".5rem",
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
            <PortableText value={member.bio} />
          </div>
        ) : (
          // Show image, name, and position when not flipped
          <>
            <div className="image-container">
              <img src={member.image.asset.url} alt={member.name} />
              <div className="toggle-button" onClick={handleFlip}>
                +
              </div>
            </div>
            <div className="team-member-name">{member.name}</div>
            <div className="team-member-title">
              {member.position.toUpperCase()}
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}

export default TeamContainer;
