import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SVGButton from "./SVGButton";

function AboutHero() {
  const timeDiv = useRef(null);
  const [offsets, setOffsets] = useState({
    offset: "0px",
    offset2: "0px",
    offset3: "0px",
  });
  useEffect(() => {
    timeDiv.current = document.querySelector("#time");
  }, []);
  // Calculate the offsets after the DOM is loaded and timeDiv is available
  useEffect(() => {
    if (timeDiv.current) {
      const offsetWidth = timeDiv.current.offsetWidth;

      setOffsets({
        offset: `translateX(calc(${offsetWidth / -2}px + 1rem))`,
        offset2: `translateX(${offsetWidth / -2}px)`,
        offset3: `translateX(calc(${offsetWidth / 2}px - 1rem))`,
      });
    }
  }, [timeDiv.current]); // Ensure it runs when timeDiv is available

  const span = {
    initial: { y: "100%" },
    animate: { y: 0 },
  };

  return (
    <div className="about-hero-container">
      <p className="about-header">ABOUT US</p>
      <div className="home-header">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.4 }}
          style={{
            transform: offsets.offset,
          }}
        >
          <div className="text-wrapper">
            <motion.span variants={span} className="motion-span">
              LOST IN SPACE:
              <span className="highlight">{" TAILOR-MAID "}</span>
            </motion.span>
          </div>
          <div className="text-wrapper">
            <motion.span variants={span} className="motion-span">
              <span className="highlight">{" EXPERIENCES "}</span>
              SEAMLESSLY
            </motion.span>
          </div>
          <div className="text-wrapper">
            <motion.span variants={span} className="motion-span">
              INTEGRATED INTO YOUR
            </motion.span>
          </div>
          <div className="text-wrapper">
            <motion.span variants={span} className="motion-span ">
              WORKFLOW
            </motion.span>
          </div>
        </motion.div>
      </div>

      <hr className="footer-divider" />

      <div className="mission-section">
        <div className="mission-content">
          <span className="mission-number">01</span>
          <div
            className="mission-text"
            style={{
              transform: offsets.offset2,
            }}
          >
            <h2>OUR MISSION</h2>
            <p>
              We aim to offer each of our clients a tailor-made, personal
              experience that integrates seamlessly with their current
              workflows.
            </p>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="mission-section">
        <div className="mission-content">
          <span className="mission-number">02</span>
          <div
            className="mission-text"
            style={{
              transform: offsets.offset2,
            }}
          >
            <h2>OUR APPROACH</h2>
            <p>
              At Lost In Space, we believe in being more than just a service
              provider. We collaborate closely with our clients to ensure that
              every project exceeds expectations.
            </p>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="mission-section">
        <div className="mission-content">
          <span className="mission-number">03</span>
          <div
            className="mission-text"
            style={{
              transform: offsets.offset2,
            }}
          >
            <h2>WHERE WE OPERATE</h2>
            <p>
              Based in New York, working with clients across the US and
              globally.
            </p>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />
      <SVGButton
        text={"Contact Us"}
        isNavigational={true}
        path={"/contact"}
        style={{
          margin: "auto",
          marginTop: "3rem",
          marginBottom: "3rem",
          transform: offsets.offset3,
        }}
      />
    </div>
  );
}

export default AboutHero;
