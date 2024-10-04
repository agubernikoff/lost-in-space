import {
  Links,
  Meta,
  LiveReload,
  Scripts,
  ScrollRestoration,
  useLocation,
  useOutlet,
  json,
  useLoaderData,
} from "@remix-run/react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import appStyles from "./styles/app.css?url";
import { getSession, commitSession, destroySession } from "./sessions";
import { useEffect, useState, useRef } from "react";
import Loading from "./components/Loading";
import Modal from "./components/Modal";

export function links() {
  return [{ rel: "stylesheet", href: appStyles }];
}

export async function loader({ request }) {
  const session = await getSession(request.headers.get("cookie"));
  const data = { ran: session.get("ran") };
  return json(data);
  return json(data, {
    headers: {
      "Set-Cookie": await destroySession(session, {
        domain: "localhost", // Omit this line
        path: "/",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      }),
    },
  });
}

export async function action({ request }) {
  const session = await getSession(request.headers.get("cookie"));
  session.set("ran", "true");
  const data = { ran: session.get("ran") };
  return json(data, {
    headers: {
      "Set-Cookie": await commitSession(session, {
        domain: "localhost", // Omit this line
        path: "/",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      }),
    },
  });
}

export default function App() {
  const outlet = useOutlet();
  const location = useLocation();

  const data = useLoaderData();

  const [runAnimation, setRunAnimation] = useState(true);

  const main = useRef(null);

  function completeAnimation() {
    setRunAnimation(false);
    main.current.style.minHeight = "0vh";
  }

  useEffect(() => {
    if (data?.ran === "true") completeAnimation();
  }, []);

  const { scrollYProgress } = useScroll();
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 1],
    [1, 0.2, 1.1, 0.6]
  );
  const scale2 = useTransform(
    scrollYProgress,
    [0, 0.37, 0.6, 1],
    [1, 0.2, 1.4, 0.9]
  );
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 1.8]);

  const y = useTransform(scrollYProgress, [0, 1], [0, 222]);
  const x = useTransform(scrollYProgress, [0, 1], [0, -222]);

  const y2 = useTransform(scrollYProgress, [0, 1], [0, -432]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 222]);

  const x3 = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, -50, 0, 422]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <link
          href="https://fonts.googleapis.com/css?family=DM Mono"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        {runAnimation ? null : (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="galaxy-1"
            style={{ scale, y, x }}
          ></motion.div>
        )}
        {runAnimation ? null : (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="galaxy-2"
            style={{ scale: scale2, x: x2, y: y2 }}
          ></motion.div>
        )}
        {runAnimation ? null : (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="galaxy-3"
            style={{ scale: scale3, x: x3 }}
          ></motion.div>
        )}
        {runAnimation ? null : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="galaxy-4"
          ></motion.div>
        )}
        {runAnimation ? null : <Modal />}
        {runAnimation ? null : <Header />}
        <AnimatePresence mode="wait" initial={false}>
          <motion.main
            ref={main}
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
          >
            {runAnimation ? (
              <Loading completeAnimation={completeAnimation} />
            ) : (
              outlet
            )}
          </motion.main>
        </AnimatePresence>
        {runAnimation ? null : <Footer />}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
