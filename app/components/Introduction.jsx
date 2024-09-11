import { useInView } from "framer-motion";
import React, { useRef } from "react";
import SVGButton from "./SVGButton";

function Introduction() {
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
          Introduction
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
              AT LOST IN SPACE, WE BRING VISIONS TO{" "}
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
              LIFE WITH CREATIVITY AND PRECISION.{" "}
            </span>
          </div>
          <div style={{ overflow: "hidden" }}>
            <span
              className="motion-span"
              style={{
                transform: inView ? "none" : "translateY(100px)",
                transition: "all .4s ease .8s",
              }}
            >
              OUR PASSION SHOWS IN EVERY PROJECT,{" "}
            </span>
          </div>
          <div style={{ overflow: "hidden" }}>
            <span
              className="motion-span"
              style={{
                transform: inView ? "none" : "translateY(100px)",
                transition: "all .4s ease 1.2s",
              }}
            >
              CONSISTENTLY EXCEEDING EXPECTATIONS
            </span>
          </div>
        </h2>
        <div style={{ overflow: "hidden" }}>
          <svg
            width="55"
            height="50"
            viewBox="0 0 55 50"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: inView ? "none" : "translateY(100px)",
              transition: "all .4s ease 1.2s",
            }}
            className="svg-quotes"
          >
            <rect x="0" y="0" width="25" height="25" fill="black" />
            <polygon points="0,50 12.5,50 25,25 10,25" fill="black" />
            <rect x="30" y="0" width="25" height="25" fill="black" />
            <polygon points="30,50 42.5,50 55,25 40,25" fill="black" />
          </svg>
        </div>
        <p
          style={{
            transform: inView ? "none" : "translateY(100px)",
            opacity: inView ? 1 : 0,
            transition: "all .4s ease 1.2s",
          }}
        >
          We share your goals and work closely with you to achieve them. By
          truly understanding your needs and exploring every detail, we generate
          innovative ideas that push the boundaries of what's possible. With our
          drive and expertise, we're here to elevate your projects to new
          heights.
        </p>
        <div
          style={{
            transform: inView ? "none" : "translateY(100px)",
            opacity: inView ? 1 : 0,
            transition: "all .4s ease 1.4s",
          }}
        >
          <SVGButton
            text={"Contact Us"}
            isNavigational={true}
            path={"/contact"}
          />
        </div>
      </div>
    </div>
  );
}

export default Introduction;
