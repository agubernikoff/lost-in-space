import React, { useEffect, useRef, useState } from "react";
import { inView, motion, useInView } from "framer-motion";
import SVGButton from "./SVGButton";
import SVGCorner from "./SVGCorner";
import DynamicallyAnimatedHeader from "../sanity/DynamicallyAnimatedHeader";

function AboutHero({ bullets, header }) {
  const [inViewIDs, setInViewIDs] = useState([]);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    window
      .matchMedia("(max-width:990px)")
      .addEventListener("change", (e) => setIsMobile(e.matches));
    if (window.matchMedia("(max-width:990px)").matches) setIsMobile(true);
  }, []);

  const span = {
    initial: { y: "100%" },
    animate: { y: 0, transition: { duration: 0.4, ease: "easeInOut" } },
  };

  const dynamicDelay = {
    initial: { opacity: 0, y: 100 },
    whileInView: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.4,
        delay: inViewIDs.find((id) => id.id === custom)?.initial
          ? 0.4 + 0.4 * custom
          : 0,
      },
    }),
  };

  inView(".about-hero-container:first-of-type .footer-divider", (info) => {
    console.log(info.target.id, inViewIDs);
    if (
      !inViewIDs.find((id) => id.id === info.target.id) &&
      info.target.id !== ""
    )
      if (window.scrollY === 0)
        setInViewIDs((prev) => [
          ...prev,
          { id: info.target.id, initial: true },
        ]);
      else
        setInViewIDs((prev) => [
          ...prev,
          { id: info.target.id, initial: false },
        ]);
  });

  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);
  console.log(isInView1);

  const mappedBullets = bullets.map((b, i) => (
    <div key={b.title}>
      <div className="mission-section">
        {inViewIDs.find((id) => id.id === `${i}`) && (
          <motion.div
            className="mission-content"
            initial="initial"
            animate="whileInView"
            // whileInView="whileInView"
            viewport={{ once: true }}
            variants={dynamicDelay}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            custom={`${i}`}
          >
            <span className="mission-number">{`0${i + 1}`}</span>
            <div className="mission-text">
              <p className="mission-title">{b.title}</p>
              <p>{b.description}</p>
            </div>
          </motion.div>
        )}
      </div>
      <hr className="footer-divider" id={i} />
    </div>
  ));

  return (
    <div className="about-hero-container">
      {isMobile ? <SVGCorner /> : null}
      <p className="about-header">ABOUT US</p>
      <div className="home-header">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.4 }}
        >
          <DynamicallyAnimatedHeader header={header} />
        </motion.div>
      </div>

      <hr className="footer-divider" ref={ref1} />

      {mappedBullets}

      <SVGButton
        text={"Contact Us"}
        isNavigational={true}
        path={"/contact"}
        style={{
          margin: "auto",
          marginTop: "3rem",
          marginBottom: "3rem",
        }}
      />
    </div>
  );
}

export default AboutHero;
