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
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import appStyles from "./styles/app.css?url";
import { getSession, commitSession, destroySession } from "./sessions";
import { useEffect, useState, useRef } from "react";
import Loading from "./components/Loading";

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
