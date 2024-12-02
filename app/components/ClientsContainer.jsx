import { animate, AnimatePresence, motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import DynamicallyAnimatedHeader from "../sanity/DynamicallyAnimatedHeader";
import SVGCorner from "./SVGCorner";

function ClientsContainer({ clients, header, subheader }) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    window
      .matchMedia("(max-width:990px)")
      .addEventListener("change", (e) => setIsMobile(e.matches));
    if (window.matchMedia("(max-width:990px)").matches) setIsMobile(true);
  }, []);

  const [cardDisplayed, setCardDisplayed] = useState(0);

  const mappedCards = clients?.map((d, index) => (
    <ClientCard key={index} data={d} />
  ));

  const carousel = useRef(null);
  const text = useRef(null);
  const ref = useRef(null);
  const fullyInView = useInView(text, { once: true, amount: 0.9 });
  const inView = useInView(text, { once: true, amount: 0.5 });
  const arrowButton = useRef(null);

  function slideRight() {
    const opacityUnitOfChange = 90 / clients.length;
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
    const opacityUnitOfChange = 90 / clients.length;
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
          {subheader}
        </p>
        <h2 style={{ width: "50vw", position: "relative" }}>
          <DynamicallyAnimatedHeader header={header} inView={inView} />
        </h2>
      </div>
      <AnimatePresence>
        <motion.div
          ref={carousel}
          className="client-cards-carousel"
          style={{
            left: inView
              ? isMobile
                ? `calc(var(--card-width) * ${(clients.length - 1) * 0.5} + ${
                    (clients.length - 1) * 0.5
                  }rem)`
                : "100%"
              : `calc(var(--card-width) * ${clients.length - 1} + ${
                  clients.length - 1
                }rem)`,
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
              ? cardDisplayed === clients.length
              : cardDisplayed === clients.length - 1
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
      <img src={data.image.asset.url} />
      {/* <div>
          <span>{data.company}</span>
          <span>{data.year}</span>
        </div> */}
      <p>{data.name}</p>
    </div>
  );
}

export default ClientsContainer;
