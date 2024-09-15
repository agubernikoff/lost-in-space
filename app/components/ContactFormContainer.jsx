import { useLocation } from "@remix-run/react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useState, useRef } from "react";
import SVGButton from "./SVGButton";
import SVGCorner from "./SVGCorner";

function ContactFormContainer() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState();

  function setAndResetSubmissionMessage(error, message) {
    setSubmissionMessage({
      error,
      message,
    });
    setTimeout(() => setSubmissionMessage(), 5000);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !service ||
      !budget ||
      !emailRegex.test(email)
    ) {
      setAndResetSubmissionMessage(
        true,
        "Please double-check that all fields are entered correctly."
      );
    } else {
      setAndResetSubmissionMessage(
        false,
        "Your submission has been recieved. We'll be in touch soon!"
      );
    }
  }

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  const { pathname } = useLocation();

  return (
    <div className="contact-form-container" ref={ref}>
      <SVGCorner hidden={pathname === "/contact"} />
      <SVGCorner hidden={pathname === "/contact"} />
      <SVGCorner />
      <SVGCorner />
      <p
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "none" : "translateY(100px)",
          transition: "all .4s ease",
        }}
      >
        CONTACT US
      </p>
      <h2>
        <div style={{ overflow: "hidden" }}>
          <span
            className="motion-span"
            style={{
              transform: inView ? "none" : "translateY(100px)",
              transition: "all .4s ease .8s",
            }}
          >
            <span className="highlight">FOR PROJECT INQUIRES</span>, PLEASE
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
            USE THE CONTACT FORM
          </span>
        </div>
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "none" : "translateY(100px)",
          transition: "all .4s ease 1.6s",
        }}
      >
        <div className="inputs-container">
          <input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
          ></input>
          <input
            placeholder="First Name"
            onChange={(e) => setLastName(e.target.value)}
            type="text"
          ></input>
          <input
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          ></input>
        </div>
        <div className="selects-container">
          <select
            defaultValue="placeholder"
            onChange={(e) => setService(e.target.value)}
          >
            <option value="placeholder" disabled hidden>
              Choose A Service
            </option>
            <option value="Post Supervisor Services">
              Post Supervisor Services
            </option>
          </select>
          <select
            defaultValue="placeholder"
            onChange={(e) => setBudget(e.target.value)}
          >
            <option value="placeholder" disabled hidden>
              Choose A Service
            </option>
            <option value="$5,000-10,000">$ 5000 - 10000</option>
          </select>
        </div>
        <textarea
          placeholder="Your Message (Optional)"
          onChange={(e) => setMessage(e.target.value)}
          rows={10}
        ></textarea>
        <div className="form-button-and-message-container">
          <SVGButton
            isSubmitButton={true}
            text={"Submit form"}
            handleClick={() => {}}
          />
          <AnimatePresence>
            {submissionMessage ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className={
                  submissionMessage.error
                    ? "submission-message error"
                    : "submission-message"
                }
              >
                {submissionMessage.message}
              </motion.p>
            ) : null}
          </AnimatePresence>
        </div>
      </form>
    </div>
  );
}

export default ContactFormContainer;
