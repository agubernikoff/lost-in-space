import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import React from "react";
import { useState } from "react/cjs/react.development";

function HeroContainer() {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);

  // Get scroll progress of the element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Element enters and leaves the viewport
  });

  // Map scroll progress to a value between 0 and 1
  const visibility = useTransform(scrollYProgress, [0, 1], [0, 20]);

  useMotionValueEvent(visibility, "change", (latest) => {
    setOffset(latest);
  });

  return (
    <motion.div
      ref={ref}
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.4, delay: 1.2 }}
      className="hero-container"
    >
      <motion.img src={hero} alt="" style={{ bottom: `${offset}%` }} />
      <div className="crafting-div">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* top left */}
          <rect x="0" y="0" width="10" height="1.65" fill="black" />
          <rect x="0" y="0" width="1.65" height="10" fill="black" />
        </svg>
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
