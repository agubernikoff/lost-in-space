import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import SVGButton from "./SVGButton";
import alexImage from "../assets/images/alex.png";
import caroImage from "../assets/images/caro.png";
import artieImage from "../assets/images/artie.png";
import monishaImage from "../assets/images/monisha.png";

function TeamContainer() {
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
  ];

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
          OUR WORK
        </p>
        <h2>
          <div style={{ overflow: "hidden" }}>
            <span
              style={{
                transform: inView ? "none" : "translateY(150px)",
                transition: "all .4s ease .4s",
              }}
              className="motion-span"
            >
              THE MINDS BEHIND{" "}
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
        </h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="team-button"
      >
        <SVGButton text={"See Everyone"} isNavigational={true} path={"/team"} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "97vw" }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.005 }}
        transition={{ duration: 0.8 }}
        className="team-members-container"
      >
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
      </motion.div>
    </div>
  );
}

export default TeamContainer;
