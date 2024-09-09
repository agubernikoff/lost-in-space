import { json } from "@remix-run/react";
import { getSession } from "../sessions";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import hero from "../assets/images/hero.png";
import { useEffect, useRef, useState } from "react";
import SVGButton from "../components/SVGButton";

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
        <div className="word-container">
          {words.map((word) => (
            <div key={word} className="words">
              {word}
            </div>
          ))}
        </div>
      </motion.div>
      <HeroContainer />
      <div style={{ height: "100vh" }} />
    </div>
  );
}

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
    console.log(latest);
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
