import { motion } from "framer-motion";
import React from "react";
import team from "../assets/images/team.png";

export default function TeamPage() {
  const span = {
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    initial: { opacity: 0, y: "100%" },
  };
  return (
    <div className="team-hero-container">
      <div className="home-header">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.4 }}
        >
          <div style={{ overflow: "hidden" }}>
            <motion.span variants={span} className="motion-span">
              MEET THE VISIONARIES BEHIND OUR
            </motion.span>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.span variants={span} className="motion-span">
              COMMITMENT TO
              <span className="highlight">{" EMPOWERING "}</span>
            </motion.span>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.span variants={span} className="motion-span highlight">
              FILMAKERS WORLDWIDE.
            </motion.span>
          </div>
        </motion.div>
      </div>
      <motion.img
        src={team}
        alt="The team at Lost In Space"
        className="team-hero"
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 1.2 }}
      />
    </div>
  );
}
