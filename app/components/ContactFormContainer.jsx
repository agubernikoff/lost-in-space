import { useLocation } from "@remix-run/react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useState, useRef } from "react";
import SVGButton from "./SVGButton";
import SVGCorner from "./SVGCorner";
import emailjs from "emailjs-com";

function ContactFormContainer() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState();

  function setAndResetSubmissionMessage(error, message) {
    setSubmissionMessage({ error, message });
    setTimeout(() => setSubmissionMessage(), 5000);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !company ||
      !phone ||
      !emailRegex.test(email)
    ) {
      setAndResetSubmissionMessage(
        true,
        "Please double-check that all fields are entered correctly."
      );
    } else {
      // Prepare the data to send
      const templateParams = {
        firstName,
        lastName,
        email,
        company,
        phone,
        message,
      };

      // Send email via EmailJS
      emailjs
        .send(
          "your_service_id", // Replace with your service ID
          "your_template_id", // Replace with your template ID
          templateParams,
          "your_user_id" // Replace with your user ID
        )
        .then(
          (response) => {
            setAndResetSubmissionMessage(
              false,
              "Your submission has been received. We'll be in touch soon!"
            );
          },
          (error) => {
            setAndResetSubmissionMessage(
              true,
              "There was an error sending your message. Please try again."
            );
          }
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
      {pathname !== "/contact" && <p>CONTACT US</p>}
      {pathname === "/contact" ? (
        <h2>
          <div style={{ overflow: "hidden" }}>
            <span
              className="motion-span"
              style={{
                transform: inView ? "none" : "translateY(100%)",
                transition: "all .4s ease .4s",
              }}
            >
              TO CONTACT US <span className="highlight">FOR PROJECT</span>
            </span>
          </div>
          <div style={{ overflow: "hidden" }}>
            <span
              className="motion-span"
              style={{
                transform: inView ? "none" : "translateY(100%)",
                transition: "all .4s ease .5s",
              }}
            >
              INQUIRIES, USE THIS FORM
            </span>
          </div>
        </h2>
      ) : (
        <h2>
          <div style={{ overflow: "hidden" }}>
            <span
              className="motion-span"
              style={{
                transform: inView ? "none" : "translateY(100%)",
                transition: "all .4s ease .4s",
              }}
            >
              <span className="highlight">FOR PROJECT INQUIRIES</span>, PLEASE
            </span>
          </div>
          <div style={{ overflow: "hidden" }}>
            <span
              className="motion-span"
              style={{
                transform: inView ? "none" : "translateY(100%)",
                transition: "all .4s ease .8s",
              }}
            >
              USE THE CONTACT FORM
            </span>
          </div>
        </h2>
      )}
      <form
        onSubmit={handleSubmit}
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "none" : "translateY(100px)",
          transition: "all .4s ease 1.2s",
        }}
      >
        <div className="inputs-container">
          <input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            style={{
              transform: inView ? "none" : "translateX(-100%)",
              transition: "all .4s ease 1.4s",
            }}
          ></input>
          <input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            style={{
              transform: inView ? "none" : "translateY(100%)",
              transition: "all .4s ease 1.4s",
            }}
          ></input>
          <input
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            style={{
              transform: inView ? "none" : "translateX(100%)",
              transition: "all .4s ease 1.4s",
            }}
          ></input>
        </div>
        <div className="selects-container">
          <input
            placeholder="Company"
            onChange={(e) => setCompany(e.target.value)}
            type="text"
            style={{
              transform: inView ? "none" : "translateY(100%)",
              transition: "all .4s ease 1.4s",
            }}
          ></input>
          <input
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            style={{
              transform: inView ? "none" : "translateX(100%)",
              transition: "all .4s ease 1.4s",
            }}
          ></input>
        </div>
        <div className="textarea-container">
          <textarea
            placeholder="Your Message (Optional)"
            onChange={(e) => setMessage(e.target.value)}
            rows={8}
            style={{
              transform: inView ? "none" : "translateY(105%)",
              transition: "all .4s ease 1.8s",
            }}
          ></textarea>
        </div>
        <div className="form-button-and-message-container">
          <SVGButton
            isSubmitButton={true}
            text={"Submit form"}
            handleClick={() => {}}
            style={{
              transform: inView ? "none" : "translateX(-100%)",
              transition: "transform .4s ease 2s,color 1s,background-color 1s",
            }}
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
