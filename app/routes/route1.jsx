import { Link, useLoaderData, useLocation } from "@remix-run/react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import ServicesContainer from "../components/ServicesContainer";

export default function Route1() {
  return <ServicesContainer />;
}
