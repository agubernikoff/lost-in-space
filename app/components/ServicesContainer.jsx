import React, { useState, useEffect, useRef } from "react";
import SVGButton from "./SVGButton";
import SVGCorner from "./SVGCorner";
import { AnimatePresence, motion, useInView } from "framer-motion";
import DynamicallyAnimatedHeader from "../sanity/DynamicallyAnimatedHeader";

function ServicesContainer({ services, header }) {
  const ourPlace = [...services].find((s) => s.ourPlaceOrYours === "editorial");
  const yours = [...services].find((s) => s.ourPlaceOrYours === "consulting");

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

  const mappedOurPlaceServices = ourPlace.services.map((s) => (
    <p
      className="service-box"
      style={isMobile ? { fontSize: ".75rem" } : null}
      key={s.service}
    >
      {s.service}
    </p>
  ));

  const mappedYourServices = yours.services.map((s) => (
    <p
      className="service-box"
      style={isMobile ? { fontSize: ".75rem" } : null}
      key={s.service}
    >
      {s.service}
    </p>
  ));

  return (
    <div className="services-hompage" ref={ref}>
      <h2>
        <DynamicallyAnimatedHeader header={header} />
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
                  <>{mappedOurPlaceServices}</>
                ) : (
                  <>{mappedYourServices}</>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0, duration: 0.4, ease: "easeInOut" },
                }}
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
                  src={
                    isOurPlace
                      ? ourPlace.image.asset.url
                      : yours.image.asset.url
                  }
                  alt={isOurPlace ? "Our Place Image" : "Or Yours Image"}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0, duration: 0.4, ease: "easeInOut" },
                }}
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
                  <>{mappedOurPlaceServices}</>
                ) : (
                  <>{mappedYourServices}</>
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
                  src={
                    isOurPlace
                      ? ourPlace.image.asset.url
                      : yours.image.asset.url
                  }
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
