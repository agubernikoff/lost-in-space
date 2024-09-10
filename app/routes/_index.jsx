import { json } from "@remix-run/react";
import { getSession } from "../sessions";
import {
  animate,
  AnimatePresence,
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import hero from "../assets/images/hero.png";
import p1 from "../assets/images/placeholder1.png";
import p2 from "../assets/images/placeholder2.png";
import { useEffect, useRef, useState } from "react";
import SVGButton from "../components/SVGButton";
import SVGCorner from "../components/SVGCorner";
import smoothScroll from "../helpers/SmoothScroll";
import HeroContainer from "../components/HeroContainer";

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
      </motion.div>
      <HeroContainer />
      <ClientsContainer />
    </div>
  );
}

function ClientsContainer() {
  const [cardDisplayed, setCardDisplayed] = useState(0);

  const data = [
    {
      title: "A SEAMLESS COLLABORATION WITH OUTSTANDING RESULTS",
      img: p1,
      company: "lacoste",
      year: 2024,
    },
    {
      title: "BRINGING MAGIC TO EVERY PROJECT",
      img: p2,
      company: "disney",
      year: 2024,
    },
    {
      title: "A SEAMLESS COLLABORATION WITH OUTSTANDING RESULTS",
      img: p1,
      company: "lacoste",
      year: 2024,
    },
    {
      title: "BRINGING MAGIC TO EVERY PROJECT",
      img: p2,
      company: "disney",
      year: 2024,
    },
  ];

  const mappedCards = data.map((d, index) => (
    <ClientCard key={index} data={d} />
  ));

  const carousel = useRef(null);
  const text = useRef(null);
  const ref = useRef(null);
  const arrowButton = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  function slideRight() {
    const opacityUnitOfChange = 90 / data.length;
    const opacity = (100 - opacityUnitOfChange * (cardDisplayed - 1)) / 100;
    setCardDisplayed(cardDisplayed - 1);
    animate(
      carousel.current,
      {
        x: `calc((25vw * ${cardDisplayed - 1}) * -1)`,
      },
      { transition: "easeInOut" }
    );
    animate(text.current, {
      opacity,
    });
  }

  function slideLeft() {
    const opacityUnitOfChange = 90 / data.length;
    const opacity = (100 - opacityUnitOfChange * (cardDisplayed + 1)) / 100;
    setCardDisplayed(cardDisplayed + 1);
    animate(
      carousel.current,
      {
        x: `calc((25vw * ${cardDisplayed + 1}) * -1)`,
      },
      { transition: "easeInOut" }
    );
    animate(text.current, {
      opacity,
    });
  }

  useEffect(() => {
    if (inView) {
      smoothScroll(ref.current, 750, 800);
      setTimeout(
        () =>
          animate(
            arrowButton.current,
            {
              y: [0, -10, 0],
            },
            {
              duration: 0.7, // Duration of one flash cycle (from start to reset)
              repeat: 2, // Flash 3 times
              repeatType: "loop", // Loops the animation
            }
          ),
        1150
      );
    }
  }, [inView]);

  return (
    <div className="clients-container" ref={ref}>
      <SVGCorner />
      <SVGCorner />
      <SVGCorner />
      <SVGCorner />
      <AnimatePresence>
        <motion.div ref={carousel} className="client-cards-carousel">
          {mappedCards}
        </motion.div>
      </AnimatePresence>
      <div ref={text} className="centered-clients-container">
        <p
          style={{
            transform: inView ? "none" : "translateY(100px)",
            opacity: inView ? 1 : 0,
            transition: "all .4s ease .75s",
          }}
        >
          OUR WORK
        </p>
        <h2>
          <div style={{ overflow: "hidden" }}>
            <span
              style={{
                transform: inView ? "none" : "translateY(100px)",
                opacity: inView ? 1 : 0,
                transition: "all .4s ease .75s",
              }}
              className="motion-span"
            >
              CLIENTS WHO{" "}
            </span>
          </div>
          <div style={{ overflow: "hidden" }}>
            <span
              style={{
                transform: inView ? "none" : "translateY(100px)",
                opacity: inView ? 1 : 0,
                transition: "all .4s ease 1.15s",
              }}
              className="highlight motion-span"
            >
              TRUST US
            </span>
          </div>
        </h2>
      </div>
      <div
        style={{
          transform: inView ? "none" : "translateY(100px)",
          opacity: inView ? 1 : 0,
          transition: "all .4s ease .75s",
        }}
        className="clients-arrow-buttons-container"
      >
        <button onClick={slideRight} disabled={cardDisplayed === 0}>
          ←
        </button>
        <button
          onClick={slideLeft}
          disabled={cardDisplayed === data.length}
          ref={arrowButton}
        >
          →
        </button>
      </div>
    </div>
  );
}

function ClientCard({ data }) {
  return (
    <div className="client-card">
      <img src={data.img} />
      {/* <div>
        <span>{data.company}</span>
        <span>{data.year}</span>
      </div> */}
      <p>{data.title}</p>
    </div>
  );
}
