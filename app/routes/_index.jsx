import { json } from "@remix-run/react";
import { getSession } from "../sessions";
import { motion } from "framer-motion";

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
  // const list = {
  //   visible: { opacity: 1 },
  //   hidden: { opacity: 0 },
  // };

  const span = {
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    initial: { opacity: 0, y: 100 },
  };

  const words = [
    "Hardware Integration",
    "Archiving",
    "Consulting",
    "Editing",
    "Onborading",
    "Technical Support",
    "Facility Mangement",
  ];

  return (
    <div className="homepage">
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
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        className="svg-button-and-words-container"
      >
        <div className="svg-button-container">
          <SVGButton text={"Let's work together"} />
          <SVGButton text={"Meet the team"} />
        </div>
        <div className="word-container">
          {words.map((word) => (
            <div className="words">{word}</div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function SVGButton({ text }) {
  return (
    <motion.button className="svg-button">
      {text}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        // className="fourcorners"
      >
        {/* top left */}
        <rect x="0%" y="0%" width="5%" height="3.33%" fill="black" />
        <rect x="0%" y="0%" width="1%" height="15%" fill="black" />
        {/* top right */}
        <rect x="95%" y="0%" width="5%" height="3.33%" fill="black" />
        <rect x="99%" y="0%" width="1%" height="15%" fill="black" />
        {/* bottom right */}
        <rect x="95%" y="96.66%" width="5%" height="3.33%" fill="black" />
        <rect x="99%" y="85%" width="1%" height="15%" fill="black" />
        {/* bottom left */}
        <rect x="0%" y="96.66%" width="5%" height="3.33%" fill="black" />
        <rect x="0%" y="85%" width="1%" height="15%" fill="black" />
      </svg>
    </motion.button>
  );
}
