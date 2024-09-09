import { useNavigate } from "@remix-run/react";
import React from "react";
import { motion } from "framer-motion";
import SVGCorner from "./SVGCorner";

function SVGButton({ text, isNavigational, path, handleClick }) {
  const nav = useNavigate();
  return (
    <motion.button
      className="svg-button"
      onClick={() => {
        if (isNavigational) {
          const options = { preventScrollReset: true };
          setTimeout(() => window.scrollTo(0, 0), 1000);
          nav(path, options);
        } else handleClick();
      }}
    >
      {text}
      <SVGCorner />
      <SVGCorner />
      <SVGCorner />
      <SVGCorner />
    </motion.button>
  );
}

export default SVGButton;
