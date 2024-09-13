import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";
import SVGCorner from "./SVGCorner";

function VideoOnScroll() {
  const ref = useRef(null);
  const lastScrollYProgress = useRef(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const [scrollGrowth, setScrollGrowth] = useState(0);

  const growth = useTransform(scrollYProgress, [1, 0.6], [0, 40]);

  useMotionValueEvent(growth, "change", (latest) => {
    setScrollGrowth(latest);
  });

  const [hidden, setHidden] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.5 && latest <= 0.55) {
      if (latest < lastScrollYProgress.current) setHidden(false);
      if (latest > lastScrollYProgress.current) setHidden(true);
    }
    if (latest >= 0.1 && latest <= 0.15) {
      if (latest < lastScrollYProgress.current) setHidden(true);
      if (latest > lastScrollYProgress.current) setHidden(false);
    }
    lastScrollYProgress.current = latest;
  });

  return (
    <div className="vos-xl-container" ref={ref}>
      <div className="vos-video-bg">
        <SVGCorner />
        <SVGCorner />
        <SVGCorner />
        <SVGCorner />
        <h2>
          <div style={{ overflow: "hidden" }}>
            <span
              className="motion-span"
              style={{
                transform: !hidden ? "none" : "translateY(150px)",
                transition: `all .4s ease ${!hidden ? "" : ".8s"}`,
              }}
            >
              LAUNCHING
            </span>
          </div>
          <div style={{ overflow: "hidden" }}>
            <span
              className="motion-span"
              style={{
                transform: !hidden ? "none" : "translateY(150px)",
                transition: `all .4s ease .4s`,
              }}
            >
              CREATIVITY BEYOND
            </span>
          </div>
          <div style={{ overflow: "hidden" }}>
            <span
              className="motion-span"
              style={{
                transform: !hidden ? "none" : "translateY(150px)",
                transition: `all .4s ease ${!hidden ? ".8s" : ""}`,
              }}
            >
              LIMITS
            </span>
          </div>
        </h2>
        <div
          className="vos-cover"
          style={{
            clipPath: `polygon(
            0% 0%,
            0% 100%,
            ${40 - scrollGrowth}% 100%,
            ${40 - scrollGrowth}% ${40 - scrollGrowth}%,
            ${60 + scrollGrowth}% ${40 - scrollGrowth}%,
            ${60 + scrollGrowth}% ${60 + scrollGrowth}%,
            ${40 - scrollGrowth}% ${60 + scrollGrowth}%,
            ${40 - scrollGrowth}% 100%,
            100% 100%,
            100% 0%)`,
          }}
        >
          <SVGCorner />
          <SVGCorner />
          <SVGCorner />
          <SVGCorner />
        </div>
      </div>
    </div>
  );
}

export default VideoOnScroll;
