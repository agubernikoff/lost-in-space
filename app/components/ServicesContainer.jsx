import React, { useState, useEffect, useRef } from "react";
import SVGButton from "./SVGButton";
import SVGCorner from "./SVGCorner";
import p3 from "../assets/images/placeholder3.png";
import p4 from "../assets/images/placeholder4.png";
import { AnimatePresence, motion, useInView } from "framer-motion";
import smoothScroll from "../helpers/SmoothScroll";

function ServicesContainer() {
  const [isOurPlace, setIsOurPlace] = useState(true);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const inView2 = useInView(ref, { once: true, amount: 0.5 });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    window
      .matchMedia("(max-width:990px)")
      .addEventListener("change", (e) => setIsMobile(e.matches));
    if (window.matchMedia("(max-width:990px)").matches) setIsMobile(true);
  }, []);

  const handleOurPlaceClick = () => {
    setIsOurPlace(true);
  };

  const handleOrYoursClick = () => {
    setIsOurPlace(false);
    setInView(true);
  };

  return (
    <div className="services-hompage" ref={ref}>
      <h2>
        <div style={{ overflow: "hidden" }}>
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4, ease: "easeInOut" }}
            className="motion-span"
          >
            SERVICES
          </motion.span>
        </div>
      </h2>
      <div style={{ overflow: "hidden" }}>
        <motion.div
          className="services-toggle-buttons"
          style={{
            transform: inView2 ? "none" : "translateY(100px)",
            transition: "all .4s ease .6s",
          }}
        >
          <SVGButton
            text={"Our Place"}
            isNavigational={false}
            handleClick={handleOurPlaceClick}
            selected={isOurPlace}
          />
          <SVGButton
            text={"Or Yours"}
            isNavigational={false}
            handleClick={handleOrYoursClick}
            selected={!isOurPlace}
          />
        </motion.div>
      </div>
      <motion.div
        className="services-container"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, delay: 0.8, ease: "easeInOut" }}
      >
        {isMobile ? (
          // Mobile layout
          <div className="services-left-section">
            <SVGCorner />
            <AnimatePresence mode="popLayout">
              <motion.h2
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                exit={{
                  opacity: 0,
                  x: -100,
                  transition: { delay: 0, duration: 0.2 },
                }}
                transition={{
                  delay: inView ? 0.8 : 1.2,
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                key={`${isOurPlace}${"h2"}`}
              >
                {isOurPlace ? "Editorial" : "Consulting"}
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                exit={{
                  opacity: 0,
                  x: -100,
                  transition: { delay: 0.2, duration: 0.2 },
                }}
                transition={{
                  delay: inView ? 1 : 1.4,
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="services-content"
                key={`${isOurPlace}${"ps"}`}
              >
                {isOurPlace ? (
                  <>
                    <p className="service-box" style={{ fontSize: ".75rem" }}>
                      Professional Onboarding
                    </p>
                    <p className="service-box" style={{ fontSize: ".75rem" }}>
                      Delivery
                    </p>
                    <p className="service-box" style={{ fontSize: ".75rem" }}>
                      Archive Services
                    </p>
                    <p className="service-box" style={{ fontSize: ".75rem" }}>
                      Professional Media Storage
                    </p>
                    <p className="service-box" style={{ fontSize: ".75rem" }}>
                      Post Supervisor Services
                    </p>
                    <p className="service-box" style={{ fontSize: ".75rem" }}>
                      First Class Tech Support
                    </p>
                    <p className="service-box" style={{ fontSize: ".75rem" }}>
                      Mac-Based Remote Editing Systems
                    </p>
                  </>
                ) : (
                  <>
                    <p className="service-box" style={{ fontSize: ".75rem" }}>
                      Hardware Purchasing and Integration
                    </p>
                    <p className="service-box" style={{ fontSize: ".75rem" }}>
                      Facility Management & Maintenance
                    </p>
                    <p className="service-box" style={{ fontSize: ".75rem" }}>
                      Troubleshooting
                    </p>
                    <p className="service-box" style={{ fontSize: ".75rem" }}>
                      Field to Delivery Workflow Consultation
                    </p>
                    <p className="service-box" style={{ fontSize: ".75rem" }}>
                      Technical Support
                    </p>
                  </>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                exit={{
                  opacity: 0,
                  x: 100,
                  transition: { delay: 0.4, duration: 0.4 },
                }}
                transition={{
                  delay: inView ? 1.2 : 2,
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                key={isOurPlace}
                style={{ overflow: "hidden", height: "100%" }}
                className="services-image-container"
              >
                <img
                  src={isOurPlace ? p4 : p3}
                  alt={isOurPlace ? "Our Place Image" : "Or Yours Image"}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.8, duration: 0.4, ease: "easeInOut" }}
              >
                <SVGButton
                  text={"Contact Us"}
                  isNavigational={true}
                  path={"/contact"}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          <div className="services-left-section">
            <SVGCorner />
            <AnimatePresence mode="popLayout">
              <motion.h2
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                exit={{
                  opacity: 0,
                  x: -100,
                  transition: { delay: 0, duration: 0.2 },
                }}
                transition={{
                  delay: inView ? 0.8 : 1.2,
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                key={`${isOurPlace}${"h2"}`}
              >
                {isOurPlace ? "Editorial" : "Consulting"}
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                exit={{
                  opacity: 0,
                  x: -100,
                  transition: { delay: 0.2, duration: 0.2 },
                }}
                transition={{
                  delay: inView ? 1 : 1.4,
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="services-content"
                key={`${isOurPlace}${"ps"}`}
              >
                {isOurPlace ? (
                  <>
                    <p className="service-box">Professional Onboarding</p>
                    <p className="service-box">Delivery</p>
                    <p className="service-box">Archive Services</p>
                    <p className="service-box">Professional Media Storage</p>
                    <p className="service-box">Post Supervisor Services</p>
                    <p className="service-box">First Class Tech Support</p>
                    <p className="service-box">
                      Mac-Based Remote Editing Systems
                    </p>
                  </>
                ) : (
                  <>
                    <p className="service-box">
                      Hardware Purchasing and Integration
                    </p>
                    <p className="service-box">
                      Facility Management & Maintenance
                    </p>
                    <p className="service-box">Troubleshooting</p>
                    <p className="service-box">
                      Field to Delivery Workflow Consultation
                    </p>
                    <p className="service-box">Technical Support</p>
                  </>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.8, duration: 0.4, ease: "easeInOut" }}
              >
                <SVGButton
                  text={"Contact Us"}
                  isNavigational={true}
                  path={"/contact"}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        )}
        {isMobile ? null : (
          <div className="services-right-section">
            <AnimatePresence mode="popLayout">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                exit={{
                  opacity: 0,
                  x: 100,
                  transition: { delay: 0.4, duration: 0.4 },
                }}
                transition={{
                  delay: inView ? 1.2 : 2,
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                key={isOurPlace}
                style={{ overflow: "hidden", height: "100%" }}
              >
                <img
                  src={isOurPlace ? p4 : p3}
                  alt={isOurPlace ? "Our Place Image" : "Or Yours Image"}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default ServicesContainer;
