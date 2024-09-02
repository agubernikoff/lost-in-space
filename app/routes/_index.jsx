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
  useEffect(() => {
    // Check if the user has visited before
    const hasVisited = sessionStorage.getItem("hasVisitedIndex");
    setRunAnimation(!Boolean(hasVisited));

    if (!hasVisited) {
      // If not, run the animation
      runAnimationn();

      // Set the flag in localStorage to indicate the user has visited
      sessionStorage.setItem("hasVisitedIndex", "true");

      // You can reset the animation state after some time if needed
      // setTimeout(() => setShouldAnimate(false), 3000); // 3000ms = 3s
    }
  }, []);

  return runAnimation ? <h2>{`${runAnimation}`}</h2> : <div>poop</div>;
}
