import React, { useState } from "react";
import SVGButton from "./SVGButton";

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
  return (
    <div className="contact-form-container">
      <p>CONTACT US</p>
      <h2>
        <div style={{ overflow: "hidden" }} />
        <span className="motion-span">FOR PROJECT INQUIRES, PLEASE</span>
        <div style={{ overflow: "hidden" }} />
        <span className="motion-span">USE THE CONTACT FORM</span>
      </h2>
      <form onSubmit={handleSubmit}>
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
        <textarea
          placeholder="Your Message (Optional)"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <div>
          <SVGButton
            isSubmitButton={true}
            text={"Submit form"}
            handleClick={() => {}}
          />
          {submissionMessage ? (
            <p
              className={
                submissionMessage.error
                  ? "submission-message error"
                  : "submission-message"
              }
            >
              {submissionMessage.message}
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
}

export default ContactFormContainer;
