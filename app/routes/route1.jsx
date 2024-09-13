import { Link, useLoaderData, useLocation } from "@remix-run/react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import ClientsContainer from "../components/ClientsContainer";
import TeamContainer from "../components/TeamContainer";

export default function Route1() {
  return <TeamContainer />;
}
