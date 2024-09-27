import React from "react";
import { motion } from "framer-motion";
import SVGButton from "./SVGButton";

function AboutHero({ inView }) {
  const span = {
    initial: { y: "100%" },
    animate: { y: 0 },
  };

  return (
    <div className="about-hero-container">
      <p className="about-header">CORE VALUES</p>
      <div className="home-header">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.4 }}
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
          <div className="mission-text">
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
          <div className="mission-text">
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
          <div className="mission-text">
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
          <div className="mission-text">
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
        style={{ margin: "auto", marginTop: "3rem" }}
      />
    </div>
  );
}

export default AboutHero;
