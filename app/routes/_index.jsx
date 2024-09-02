import { Link } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function action({ context }) {
  console.log(context);
}

export default function Index() {
  const [runAnimation, setRunAnimation] = useState(true);
  const ran = useRef(false);

  function runAnimationn() {
    setTimeout(() => {
      setRunAnimation(false);
      ran.current = true;
    }, 1000);
  }

  // sessionStorage.clear();
  // useEffect(() => {
  //   // Check if the user has visited before
  //   const hasVisited = sessionStorage.getItem("hasVisitedIndex");
  //   setRunAnimation(!Boolean(hasVisited));

  //   if (!hasVisited) {
  //     // If not, run the animation
  //     runAnimationn();

  //     // Set the flag in localStorage to indicate the user has visited
  //     sessionStorage.setItem("hasVisitedIndex", "true");

  //     // You can reset the animation state after some time if needed
  //     // setTimeout(() => setShouldAnimate(false), 3000); // 3000ms = 3s
  //   }
  // }, []);

  return runAnimation ? (
    <h2>{`${runAnimation}`}</h2>
  ) : (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Welcome to Remix</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/quickstart"
            rel="noreferrer"
          >
            5m Quick Start
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/tutorial"
            rel="noreferrer"
          >
            30m Tutorial
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Docs
          </a>
        </li>
        <Link to="/route1">
          <li>Route 1</li>
        </Link>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            href="/route2"
          >
            Route 2
          </a>
        </li>
      </ul>
    </div>
  );
}
