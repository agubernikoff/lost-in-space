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
        offset4: `translateX(${offsetWidth / 2}px - 1.5rem)`,
      });
    }
  }, [timeDiv.current]); // Ensure it runs when timeDiv is available
  const span = {
    initial: { y: "100%" },
    animate: { y: 0 },
  };

  return (
    <div className="about-hero-container">
      <p className="about-header" style={{ transform: offsets.offset3 }}>
        CORE VALUES
      </p>
      <div className="home-header">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.4 }}
          style={{ transform: offsets.offset }}
        >
          <div className="text-wrapper">
            <motion.span variants={span} className="motion-span">
              <span className="highlight">{" GUIDING PRINCIPLES "}</span>
              THAT
            </motion.span>
          </div>
          <div className="text-wrapper">
            <motion.span variants={span} className="motion-span">
              DEFINE OUR COMMITMENT TO
            </motion.span>
          </div>
          <div className="text-wrapper">
            <motion.span variants={span} className="motion-span ">
              EXCELLENCE AND INNOVATION
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
            <h2>INNOVATION</h2>
            <p>
              Embracing cutting-edge technology and creative solutions to stay
              ahead in the post-production industry.
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
            <h2>QUALITY</h2>
            <p>
              Delivering top-notch post-production services that meet the
              highest industry standards.
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
            <h2>CUSTOMER CENTRICITY</h2>
            <p>
              Prioritizing the needs and preferences of our clients to provide a
              personalized experience.
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
            <h2>INCLUSIVITY</h2>
            <p>
              Supporting a diverse range of creatives, we offer inclusive
              services for all project sizes.
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
          transform: offsets.offset3,
        }}
      />
    </div>
  );
}

export default AboutHero;
