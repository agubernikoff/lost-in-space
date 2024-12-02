import React from "react";
import ContactFormContainer from "../components/ContactFormContainer";
import { useRootLoaderData } from "../root";

export const meta = () => {
  return [
    { title: "Lost in Space" },
    { name: "description", content: "Lost in Space" },
  ];
};

function contact() {
  const { contactPage } = useRootLoaderData();
  return (
    <ContactFormContainer
      homepage={false}
      header={contactPage.primary_header}
    />
  );
}

export default contact;
