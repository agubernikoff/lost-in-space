import { json } from "@remix-run/react";
import { getSession } from "../sessions";
import { motion } from "framer-motion";
import SVGButton from "../components/SVGButton";
import HeroContainer from "../components/HeroContainer";
import ClientsContainer from "../components/ClientsContainer";
import VideoOnScroll from "../components/VideoOnScroll";
import ServicesContainer from "../components/ServicesContainer";
import TeamContainer from "../components/TeamContainer";
import ContactFormContainer from "../components/ContactFormContainer";
import React, { useState, useEffect } from "react";
// import Spline from "@splinetool/react-spline";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({ request }) {
  const session = await getSession(request.headers.get("cookie"));
  const data = { ran: session.get("ran") };
  console.log("_index", session.get("ran"));
  return json(data);
}

export default function Index() {
  return (
    <div className="homepage">
      {/* <Spline scene="https://prod.spline.design/PI54LbI34K7c1YvZ/scene.splinecode" /> */}
      <HomepageHeader />
      <Buttons />
      <HeroContainer />
      <ClientsContainer />
      {/* <VideoOnScroll /> */}
      {/* <ServicesContainer /> */}
      {/* <TeamContainer /> */}
      <ContactFormContainer homepage={true} />
    </div>
  );
}

function HomepageHeader() {
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
    <div className="home-header">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.4 }}
      >
        {isMobile ? (
          <>
            {/* Mobile Version (5 lines) */}
            <div style={{ overflow: "hidden" }}>
              <motion.span variants={span2} custom={0} className="motion-span">
                {"BOUTIQUE END-TO-END "}
              </motion.span>
            </div>

            <div style={{ overflow: "hidden" }}>
              <motion.span variants={span2} custom={1} className="motion-span">
                <span className="highlight">PRODUCTION & POST-</span>
              </motion.span>
            </div>

            <div style={{ overflow: "hidden" }}>
              <motion.span variants={span2} custom={2} className="motion-span">
                <span className="highlight">{" PRODUCTION EXCELLENCE "}</span>
              </motion.span>
            </div>

            <div style={{ overflow: "hidden" }}>
              <motion.span variants={span2} custom={3} className="motion-span">
                {"FOR FILMMAKERS AND"}
              </motion.span>
            </div>

            <div style={{ overflow: "hidden" }}>
              <motion.span variants={span2} custom={4} className="motion-span">
                {" INDEPENDENT CREATORS."}
              </motion.span>
            </div>
          </>
        ) : (
          <>
            {/* Desktop Version (3 lines) */}
            <div style={{ overflow: "hidden" }}>
              <motion.span variants={span} className="motion-span">
                {"BOUTIQUE END-TO-END "}
                <span className="highlight">PRODUCTION & POST-</span>
              </motion.span>
            </div>

            <div style={{ overflow: "hidden" }}>
              <motion.span variants={span} className="motion-span">
                <span className="highlight">{" PRODUCTION EXCELLENCE "}</span>
                FOR FILMMAKERS
              </motion.span>
            </div>

            <div style={{ overflow: "hidden" }}>
              <motion.span variants={span} className="motion-span">
                {" AND INDEPENDENT CREATORS."}
              </motion.span>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}

function Buttons() {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="svg-button-and-words-container"
    >
      <div className="svg-button-container">
        <SVGButton
          text={"Let's work together"}
          isNavigational={true}
          path={"/contact"}
        />
        <SVGButton
          text={"Meet the team"}
          isNavigational={true}
          path={"/team"}
        />
      </div>
    </motion.div>
  );
}
