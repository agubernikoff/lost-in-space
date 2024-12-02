import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import team from "../assets/images/team.png";
import DynamicallyAnimatedHeader from "../sanity/DynamicallyAnimatedHeader";

export default function TeamPage({ data, header }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:990px)");
    const handleMediaChange = (e) => setIsMobile(e.matches);

    mediaQuery.addEventListener("change", handleMediaChange);
    if (mediaQuery.matches) setIsMobile(true);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  const span = {
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    initial: { opacity: 0, y: "100%" },
  };

  const span2 = {
    animate: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: custom * 0.4 },
    }),
    initial: { opacity: 0, y: "100%" },
  };

  return (
    <div className="team-hero-container">
      <div className="home-header">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.4 }}
        >
          <DynamicallyAnimatedHeader header={header} />
        </motion.div>
      </div>
      <motion.img
        src={data?.image?.asset?.url}
        alt="The team at Lost In Space"
        className="team-hero"
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 1.2 }}
      />
    </div>
  );
}
