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
import { useFetcher } from "react-router-dom";
import Header from "./components/Header";
import appStyles from "./styles/app.css?url";
import { getSession, commitSession } from "./sessions";

export function links() {
  return [{ rel: "stylesheet", href: appStyles }];
}

export async function loader({ request }) {
  const session = await getSession(request.headers.get("cookie"));
  const data = { sessionData: session.get("ran") };
  console.log("yyy", session.get("ran"));
  return json(data);
}

export async function action({ request }) {
  const session = await getSession(request.headers.get("cookie"));
  session.set("ran", "true");
  const data = { sessionData: session.get("ran") };
  console.log("xxx", session.get("ran"));
  return json(data, {
    headers: {
      "Set-Cookie": await commitSession(session, {
        // domain: "localhost", // Omit this line
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

  const { ran } = useLoaderData();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {Boolean(ran) ? <Header /> : null}
        <AnimatePresence mode="wait" initial={false}>
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
          >
            {outlet}
          </motion.main>
        </AnimatePresence>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
