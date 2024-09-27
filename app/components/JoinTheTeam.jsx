import { useInView } from "framer-motion";
import React, { useRef } from "react";
import SVGButton from "./SVGButton";

function JoinTheTeam() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div className="introduction-container" ref={ref}>
      <div className="introduction-left">
        <p
          style={{
            transform: inView ? "none" : "translateY(100px)",
            opacity: inView ? 1 : 0,
            transition: "all .4s ease",
          }}
          className="introduction-label"
        >
          Join The Team
        </p>
      </div>
      <div className="introduction-right">
        <h2>
          <div style={{ overflow: "hidden" }}>
            <span
              className="motion-span"
              style={{
                transform: inView ? "none" : "translateY(100px)",
                transition: "all .4s ease",
              }}
            >
              THINK YOU'D BE A GOOD{" "}
            </span>
          </div>
          <div style={{ overflow: "hidden" }}>
            <span
              className="motion-span"
              style={{
                transform: inView ? "none" : "translateY(100px)",
                transition: "all .4s ease .4s",
              }}
            >
              ADDITION? SEND US A MESSAGE
            </span>
          </div>
        </h2>
        <p
          style={{
            transform: inView ? "none" : "translateY(100px)",
            opacity: inView ? 1 : 0,
            transition: "all .4s ease 1.2s",
          }}
        >
          We’re always on the lookout for passionate, creative individuals who
          are eager to make a difference. Whether you’re a seasoned professional
          or just starting out, if you believe you have the skills and vision to
          contribute to our innovative projects, we’d love to hear from you.
          Reach out, and let’s explore how you can be a part of the Lost In
          Space journey.
        </p>
        <div
          style={{
            transform: inView ? "none" : "translateY(100px)",
            opacity: inView ? 1 : 0,
            transition: "all .4s ease 1.4s",
          }}
        >
          <SVGButton text={"Career"} isNavigational={true} path={"/contact"} />
        </div>
      </div>
    </div>
  );
}

export default JoinTheTeam;
