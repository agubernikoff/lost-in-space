import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SVGButton from "./SVGButton";
import shape from "../assets/images/shape.png";
import warning from "../assets/images/warning.png";
import shape2 from "../assets/images/shape2.png";
import hat from "../assets/images/hat.png";
import settings from "../assets/images/settings.png";
import chart from "../assets/images/chart.png";

function ServicesGoals() {
  const text = useRef(null);
  const inView = useInView(text, { once: true, amount: 0.25 });
  const content = [
    {
      title: "Streamlined Project Workflows",
      description:
        "Create and implement efficient workflows that ensure the smooth progression of all projects.",
      icon: settings,
    },
    {
      title: "Customize Client Experience",
      description:
        "Deliver a scalable experience tailored to the unique needs of every creator and business we work with.",
      icon: chart,
    },
    {
      title: "Tactical Headache Relief",
      description:
        "Remove the technical challenges from the creative process, allowing clients to focus on their vision.",
      icon: warning,
    },
    {
      title: "Holistic Project Resolution",
      description:
        "Move projects past common pain points and deliver comprehensive solutions.",
      icon: shape,
    },
    {
      title: "Advanced Media Services",
      description:
        "Provide state-of-the-art storage, editing stations, and media transfer services to support client projects.",
      icon: shape2,
    },
    {
      title: "Collaborative Training and Support",
      description:
        "Partner with clients to train staff on long-term strategies and best practices, ensuring ongoing success.",
      icon: hat,
    },
  ];

  return (
    <div style={{ padding: "1rem", marginTop: "7rem" }}>
      <motion.p
        className="about-header"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        OUR GOALS
      </motion.p>
      <div className="home-header" style={{ textAlign: "center" }}>
        <motion.div ref={text}>
          <div style={{ overflow: "hidden" }}>
            <motion.span
              style={{
                transform: inView ? "none" : "translateY(100%)",
                opacity: inView ? 1 : 0,
                transition: "transform .4s ease , opacity .4s ease ",
              }}
              className="motion-span"
            >
              EMPOWERING CREATIVE
            </motion.span>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.span
              style={{
                transform: inView ? "none" : "translateY(100%)",
                opacity: inView ? 1 : 0,
                transition: "transform .4s ease .4s, opacity .4s ease .2s",
              }}
              className="motion-span"
            >
              EXCELLENCE
              <span className="highlight">{" THROUGH "}</span>
            </motion.span>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.span
              style={{
                transform: inView ? "none" : "translateY(100%)",
                opacity: inView ? 1 : 0,
                transition: "transform .4s ease .8s, opacity .4s ease .4s",
              }}
              className="motion-span highlight"
            >
              TAILORED SOLUTIONS.
            </motion.span>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <SVGButton
          text={"Contact Us"}
          isNavigational={true}
          path={"/contact"}
          style={{ margin: "auto" }}
        />
      </motion.div>
      <div className="goals-grid">
        {content.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            key={index}
            className="goal-item"
          >
            <div className="grey-box">
              <img src={item.icon} alt="icon" />
            </div>
            <h3 className="goal-title">{item.title}</h3>
            <p className="goal-description">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ServicesGoals;
