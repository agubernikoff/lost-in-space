import { json } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import Loading from "../components/Loading";
// import { getSession, commitSession } from "../sessions";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({ request }) {
  // const session = await getSession(request.headers.get("Cookie"));
  // session.set("someData", "fuck you stupid ass bitch");
  // const data = { sessionData: session.get("someData") };
  // return json(data, {
  //   headers: {
  //     "Set-Cookie": await commitSession(session),
  //   },
  // });
  return null;
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
      // runAnimationn();
      // Set the flag in localStorage to indicate the user has visited
      // sessionStorage.setItem("hasVisitedIndex", "true");
      // fetch("/", { method: "POST" });
      // You can reset the animation state after some time if needed
      // setTimeout(() => setShouldAnimate(false), 3000); // 3000ms = 3s
    }
  }, []);

  return runAnimation ? (
    <Loading />
  ) : (
    <div className="homepage">
      <div className="home-header">
        <p>
          BOUTIQUE END-TO-END PRODUCTION{" "}
          <span className="highlight"> & POST-PRODUCTION EXCELLENCE</span> FOR
          FILMMAKERS AND INDEPENDENT CREATORS.
        </p>
      </div>
    </div>
  );
}
