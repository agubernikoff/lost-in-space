import { json } from "@remix-run/react";
import { getSession } from "../sessions";
import { motion } from "framer-motion";
import SVGButton from "../components/SVGButton";
import HeroContainer from "../components/HeroContainer";
import ClientsContainer from "../components/ClientsContainer";
import VideoOnScroll from "../components/VideoOnScroll";
import ServicesContainer from "../components/ServicesContainer";
import TeamContainer from "../components/TeamContainer";
import ContactFormContainer from "../components/ContactFormContainer";
import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import { useRootLoaderData } from "../root";
import DynamicallyAnimatedHeader from "../sanity/DynamicallyAnimatedHeader";

export const meta = () => {
  return [
    { title: "Lost in Space" },
    { name: "description", content: "Lost in Space" },
  ];
};

export async function loader({ request }) {
  const session = await getSession(request.headers.get("cookie"));
  const data = { ran: session.get("ran") };
  console.log("_index", session.get("ran"));
  return json(data);
}

export default function Index() {
  const { clients, homePage } = useRootLoaderData();

  return (
    <div className="homepage">
      <HomepageHeader header={homePage.header} />
      <Buttons />
      <HeroContainer />
      <ClientsContainer clients={clients} header={homePage.clients_header} />
      {/* <VideoOnScroll /> */}
      {/* <ServicesContainer /> */}
      {/* <TeamContainer /> */}
      <ContactFormContainer homepage={true} header={homePage.contact_header} />
    </div>
  );
}

function HomepageHeader({ header }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:990px)");
    const handleMediaChange = (e) => setIsMobile(e.matches);

    mediaQuery.addEventListener("change", handleMediaChange);
    if (mediaQuery.matches) setIsMobile(true);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  const span = {
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    initial: { opacity: 0, y: "100%" },
  };

  const span2 = {
    animate: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: custom * 0.4 },
    }),
    initial: { opacity: 0, y: "100%" },
  };

  return (
    <div className="home-header">
      <DynamicallyAnimatedHeader header={header} />
    </div>
  );
}

function Buttons() {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="svg-button-and-words-container"
    >
      <div className="svg-button-container">
        <SVGButton
          text={"Let's work together"}
          isNavigational={true}
          path={"/contact"}
        />
        <SVGButton
          text={"Meet the team"}
          isNavigational={true}
          path={"/team"}
        />
      </div>
    </motion.div>
  );
}
