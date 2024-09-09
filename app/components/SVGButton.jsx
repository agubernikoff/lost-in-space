import { useNavigate } from "@remix-run/react";
import React from "react";
import { motion } from "framer-motion";

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
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* top left */}
        <rect x="0%" y="0%" width="5%" height="3.33%" fill="black" />
        <rect x="0%" y="0%" width="1%" height="15%" fill="black" />
        {/* top right */}
        <rect x="95%" y="0%" width="5%" height="3.33%" fill="black" />
        <rect x="99%" y="0%" width="1%" height="15%" fill="black" />
        {/* bottom right */}
        <rect x="95%" y="96%" width="5%" height="3.33%" fill="black" />
        <rect x="99%" y="85%" width="1%" height="15%" fill="black" />
        {/* bottom left */}
        <rect x="0%" y="96%" width="5%" height="3.33%" fill="black" />
        <rect x="0%" y="85%" width="1%" height="15%" fill="black" />
      </svg>
    </motion.button>
  );
}

export default SVGButton;
