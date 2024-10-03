import { motion, useInView } from "framer-motion";
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

function TeamContainer() {
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

  const [activeModal, setActiveModal] = useState(null);

  const teamMembers = [
    {
      image: alexImage,
      name: "Alexander Santoro",
      title: "CEO & Co-Founder",
    },
    {
      image: caroImage,
      name: "Carolyn LaVeglia",
      title: "CEO & Co-Founder",
    },
    {
      image: artieImage,
      name: "Artie Dossick",
      title: "Co-Producer",
    },
    {
      image: monishaImage,
      name: "Monisha Roychoudhury",
      title: "Associate Producer",
    },
    {
      image: elfImage,
      name: "Efrain Rivera",
      title: "Post Production Liaison",
    },
    {
      image: gusImage,
      name: "Giuseppe de Matteis",
      title: "Assistant Editor",
    },
    {
      image: nawImage,
      name: "Nawal Mubin",
      title: "Post Coordinator",
    },
    {
      image: spaceImage,
      name: "Next Space Cadet",
      title: "This Could Be You",
    },
  ];

  function splitArray(arr, chunkSize = 4) {
    const result = [];

    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }

    return result;
  }

  return (
    <div className="team-container">
      {activeModal !== null && (
        <>
          <div
            className="modal-overlay"
            onClick={() => setActiveModal(null)}
          ></div>
          <div className="modal">
            <button
              className="modal-close"
              onClick={() => setActiveModal(null)}
            >
              -
            </button>
            <div className="modal-content">
              <p>Details about {teamMembers[activeModal].name}</p>
            </div>
          </div>
        </>
      )}
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

      {splitArray(teamMembers).map((arrayOf4) => (
        <motion.div
          initial={{ opacity: 0, x: "97vw" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.005 }}
          transition={{ duration: 0.8 }}
          className="team-members-container"
        >
          {arrayOf4.map((member, index) => (
            <TeamMember
              key={index}
              member={member}
              onClick={() => setActiveModal(index)}
            />
          ))}
        </motion.div>
      ))}
    </div>
  );
}

function TeamMember({ member, onClick }) {
  return (
    <div className="team-member">
      <div className="image-container">
        <img src={member.image} alt={member.name} />
        <div className="toggle-button" onClick={onClick}>
          +
        </div>
      </div>
      <div className="team-member-name">{member.name}</div>
      <div className="team-member-title">{member.title.toUpperCase()}</div>
    </div>
  );
}

export default TeamContainer;
