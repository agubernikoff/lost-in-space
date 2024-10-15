import React from "react";
import ContactFormContainer from "../components/ContactFormContainer";

export const meta = () => {
  return [
    { title: "Lost in Space" },
    { name: "description", content: "Lost in Space" },
  ];
};

function contact() {
  return <ContactFormContainer homepage={false} />;
}

export default contact;
