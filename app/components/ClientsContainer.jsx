import { animate, AnimatePresence, motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import smoothScroll from "../helpers/SmoothScroll";
import SVGCorner from "./SVGCorner";
import p1 from "../assets/images/placeholder1.png";
import p2 from "../assets/images/placeholder2.png";

function ClientsContainer() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    window
      .matchMedia("(max-width:990px)")
      .addEventListener("change", (e) => setIsMobile(e.matches));
    if (window.matchMedia("(max-width:990px)").matches) setIsMobile(true);
  }, []);

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
  const fullyInView = useInView(text, { once: true, amount: 0.9 });
  const inView = useInView(text, { once: true, amount: 0.5 });
  const arrowButton = useRef(null);

  function slideRight() {
    const opacityUnitOfChange = 90 / data.length;
    const opacity = (100 - opacityUnitOfChange * (cardDisplayed - 1)) / 100;
    setCardDisplayed(cardDisplayed - 1);
    animate(
      carousel.current,
      {
        x: `calc((var(--card-width) + var(--card-adjustment) - 2rem) * ${
          cardDisplayed - 1
        } * -1)`,
      },
      { transition: "easeInOut" }
    );
    if (!isMobile) {
      animate(text.current, {
        opacity,
      });
    }
  }

  function slideLeft() {
    const opacityUnitOfChange = 90 / data.length;
    const opacity = (100 - opacityUnitOfChange * (cardDisplayed + 1)) / 100;
    setCardDisplayed(cardDisplayed + 1);
    animate(
      carousel.current,
      {
        x: `calc((var(--card-width) + var(--card-adjustment) - 2rem) * ${
          cardDisplayed + 1
        } * -1)`,
      },
      { transition: "easeInOut" }
    );
    if (!isMobile) {
      animate(text.current, {
        opacity,
      });
    }
  }

  useEffect(() => {
    if (fullyInView) {
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
      );
    }
  }, [fullyInView]);

  return (
    <div className="clients-container" ref={ref}>
      <SVGCorner />
      <SVGCorner />
      <SVGCorner />
      <SVGCorner />
      <div ref={text} className="centered-clients-container">
        <p
          style={{
            transform: inView ? "none" : "translateY(100px)",
            opacity: inView ? 1 : 0,
            transition: "transform .4s ease .35s, opacity .4s ease .35s",
          }}
        >
          OUR WORK
        </p>
        <h2>
          <div style={{ overflow: "hidden" }}>
            <span
              style={{
                transform: inView ? "none" : "translateY(100%)",
                opacity: inView ? 1 : 0,
                transition: "transform .4s ease .75s, opacity .4s ease .75s",
              }}
              className="motion-span"
            >
              CLIENTS WHO{" "}
            </span>
          </div>
          <div style={{ overflow: "hidden" }}>
            <span
              style={{
                transform: inView ? "none" : "translateY(100%)",
                opacity: inView ? 1 : 0,
                transition: "transform .4s ease 1.15s, opacity .4s ease 1.15s",
              }}
              className="highlight motion-span"
            >
              TRUST US
            </span>
          </div>
        </h2>
      </div>
      <AnimatePresence>
        <motion.div
          ref={carousel}
          className="client-cards-carousel"
          style={{
            left: inView
              ? isMobile
                ? "calc(var(--card-width) * 1.5 + 1.5rem)"
                : "100%"
              : "200%",
            opacity: inView ? 1 : 0,
            transition: "left .4s ease 1.55s, opacity .4s ease 1.55s",
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 1.55 }}
        >
          {mappedCards}
        </motion.div>
      </AnimatePresence>
      <div
        style={{
          transform: fullyInView ? "none" : "translateY(100px)",
          opacity: fullyInView ? 1 : 0,
          transition: "all .4s ease .75s",
        }}
        className="clients-arrow-buttons-container"
      >
        <button onClick={slideRight} disabled={cardDisplayed === 0}>
          ←
        </button>
        <button
          onClick={slideLeft}
          disabled={
            !isMobile
              ? cardDisplayed === data.length
              : cardDisplayed === data.length - 1
          }
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

export default ClientsContainer;
