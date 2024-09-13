import React, { useState, useEffect } from "react";
import SVGButton from "./SVGButton";
import SVGCorner from "./SVGCorner";
import p3 from "../assets/images/placeholder3.png";
import p4 from "../assets/images/placeholder4.png";
import { AnimatePresence, motion } from "framer-motion";

function ServicesContainer() {
  const [isOurPlace, setIsOurPlace] = useState(true);
  const [inView, setInView] = useState(false);
  // useEffect(() => setInView(true), []);
  console.log(inView);

  const handleOurPlaceClick = () => {
    setIsOurPlace(true);
  };

  const handleOrYoursClick = () => {
    setIsOurPlace(false);
    setInView(true);
  };

  return (
    <div className="services-page">
      <h2>
        <div style={{ overflow: "hidden" }}>
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4, ease: "easeInOut" }}
            className="motion-span"
          >
            SERVICES
          </motion.span>
        </div>
      </h2>
      <motion.div
        className="services-container"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ delay: 0.8, duration: 0.4, ease: "easeInOut" }}
      >
        <div
          className="services-left-section"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          // exit={{}}
          transition={{ delay: 1.2, duration: 0.4, ease: "easeInOut" }}
        >
          <SVGCorner />
          <AnimatePresence mode="popLayout">
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: -100,
                transition: { delay: 0, duration: 0.4 },
              }}
              transition={{ delay: 1.2, duration: 0.4, ease: "easeInOut" }}
              key={`${isOurPlace}${"h2"}`}
            >
              {isOurPlace ? "Editorial" : "Consulting"}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: -100,
                transition: { delay: 0.4, duration: 0.4 },
              }}
              transition={{ delay: 1.6, duration: 0.4, ease: "easeInOut" }}
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
              transition={{ delay: 2, duration: 0.4, ease: "easeInOut" }}
            >
              <SVGButton
                text={"Contact Us"}
                isNavigational={true}
                path={"/contact"}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="services-right-section">
          <AnimatePresence mode="popLayout">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: 100,
                transition: { delay: 0.8, duration: 0.4 },
              }}
              transition={{
                delay: inView ? 2 : 2.4,
                duration: 0.4,
                ease: "easeInOut",
              }}
              key={isOurPlace}
            >
              <img
                src={isOurPlace ? p4 : p3}
                alt={isOurPlace ? "Our Place Image" : "Or Yours Image"}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
      <motion.div
        className="services-toggle-buttons"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.4, ease: "easeInOut" }}
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
  );
}

export default ServicesContainer;
