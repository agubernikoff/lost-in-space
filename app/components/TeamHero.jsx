import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import team from "../assets/images/team.png";

export default function TeamPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:990px)");
    const handleMediaChange = (e) => setIsMobile(e.matches);

    mediaQuery.addEventListener("change", handleMediaChange);
    if (mediaQuery.matches) setIsMobile(true);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  const span = {
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    initial: { opacity: 0, y: "100%" },
  };

  const span2 = {
    animate: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: custom * 0.4 },
    }),
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
          {isMobile ? (
            <>
              <div style={{ overflow: "hidden" }}>
                <motion.span
                  variants={span2}
                  custom={0}
                  className="motion-span"
                >
                  MEET THE VISIONARIES
                </motion.span>
              </div>
              <div style={{ overflow: "hidden" }}>
                <motion.span
                  variants={span2}
                  custom={1}
                  className="motion-span"
                >
                  BEHIND OUR COMMITMENT
                </motion.span>
              </div>
              <div style={{ overflow: "hidden" }}>
                <motion.span
                  variants={span2}
                  custom={2}
                  className="motion-span"
                >
                  TO
                  <span className="highlight">{" EMPOWERING "}</span>
                </motion.span>
              </div>
              <div style={{ overflow: "hidden" }}>
                <motion.span
                  variants={span2}
                  custom={3}
                  className="motion-span highlight"
                >
                  FILMAKERS WORLDWIDE.
                </motion.span>
              </div>
            </>
          ) : (
            <>
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
            </>
          )}
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
