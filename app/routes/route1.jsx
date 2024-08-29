import { Link, useLoaderData, useLocation } from "@remix-run/react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export const loader = () => {
  return { message: "This is loader data" };
};

export default function Route1() {
  const lastData = useRef({});

  const data = useLoaderData() || lastData.current;

  useEffect(() => {
    if (data) lastData.current = data;
  }, [data]);
  return (
    <motion.div
      initial={{ opacity: 0, height: 100 }}
      animate={{ opacity: 1, height: 200 }}
      exit={{ opacity: 0, height: 100 }}
      style={{ border: "1px solid black" }}
    >
      <h2>Welcome to Route 1</h2>
      <p>{data.message}</p>
      <Link to="/">back</Link>
    </motion.div>
  );
}
