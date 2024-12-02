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

function HeroContainer({ header, image }) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.4, delay: 1.2 }}
      className="hero-container"
    >
      <img src={image?.asset?.url} alt="" />
      <div className="crafting-div">
        <SVGCorner />
        <p>{header}</p>
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
