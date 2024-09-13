import { animate, AnimatePresence, motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import smoothScroll from "../helpers/SmoothScroll";
import SVGButton from "./SVGButton";
import alexImage from "../assets/images/alex.png";
import caroImage from "../assets/images/caro.png";
import artieImage from "../assets/images/artie.png";
import monishaImage from "../assets/images/monisha.png";

function TeamContainer() {
  const text = useRef(null);
  const ref = useRef(null);

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
  ];

  return (
    <div className="team-container" ref={ref}>
      <div ref={text} className="centered-team-container">
        <p>OUR WORK</p>
        <h2>
          <div style={{ overflow: "hidden" }}>
            <span className="motion-span">THE MINDS BEHIND </span>
          </div>
          <div style={{ overflow: "hidden" }}>
            <span className="highlight motion-span">OUR SUCCESS</span>
          </div>
        </h2>
      </div>
      <div className="team-button">
        <SVGButton text={"See Everyone"} isNavigational={true} path={"/team"} />
      </div>
      <div className="team-members-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="image-container">
              <img src={member.image} alt={member.name} />
              <div
                className="toggle-button"
                onClick={() => setActiveModal(index)}
              >
                +
              </div>
            </div>
            <div className="team-member-name">{member.name}</div>
            <div className="team-member-title">{member.title}</div>
          </div>
        ))}
      </div>

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
    </div>
  );
}

export default TeamContainer;
