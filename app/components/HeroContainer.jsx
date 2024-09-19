import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useState, useRef } from "react";
import hero from "../assets/images/hero.png";
import SVGButton from "./SVGButton";
import SVGCorner from "./SVGCorner";

function HeroContainer() {
  const ref = useRef(null);

  // Get scroll progress of the element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Element enters and leaves the viewport
  });

  // Map scroll progress to a value between 0 and 1
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4]);

  return (
    <motion.div
      ref={ref}
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.4, delay: 1.2 }}
      className="hero-container"
    >
      <motion.img src={hero} alt="" style={{ rotate, scale }} />
      <div className="crafting-div">
        <SVGCorner />
        <p>CRAFTING EXCEPTIONAL EXPERIENCES FROM START TO FINISH</p>
        <SVGButton
          text={"Our Services"}
          isNavigational={true}
          path={"/services"}
        />
      </div>
    </motion.div>
  );
}

export default HeroContainer;
