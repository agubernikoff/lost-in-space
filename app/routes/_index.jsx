import { json } from "@remix-run/react";
import { getSession } from "../sessions";
import { motion } from "framer-motion";
import SVGButton from "../components/SVGButton";
import HeroContainer from "../components/HeroContainer";
import ClientsContainer from "../components/ClientsContainer";
import Introduction from "../components/Introduction";
import VideoOnScroll from "../components/VideoOnScroll";
import ServicesContainer from "../components/ServicesContainer";
import TeamContainer from "../components/TeamContainer";

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
      <HomepageHeader />
      <Buttons />
      <HeroContainer />
      <ClientsContainer />
      <Introduction />
      <VideoOnScroll />
      <ServicesContainer />
      <TeamContainer />
    </div>
  );
}

function HomepageHeader() {
  const span = {
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    initial: { opacity: 0, y: 100 },
  };
  return (
    <div className="home-header">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.4 }}
      >
        <div style={{ overflow: "hidden" }}>
          <motion.span variants={span} className="motion-span">
            {"BOUTIQUE END-TO-END PRODUCTION "}
          </motion.span>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.span variants={span} className="highlight motion-span">
            {" & POST-PRODUCTION EXCELLENCE"}
          </motion.span>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.span variants={span} className="motion-span">
            {" FOR FILMMAKERS AND INDEPENDENT CREATORS."}
          </motion.span>
        </div>
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
