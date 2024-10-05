import React, { useEffect, useRef, useState } from "react";
import { animate, AnimatePresence, motion } from "framer-motion";

function Loading({ completeAnimation }) {
  const [percent, setPercent] = useState(0);

  const numbers = useRef([]);

  const words = useRef(["LOADING"]);

  function getRandomInt(min, max) {
    return Math.ceil(Math.random() * (max - min + 1)) + min - 1;
  }

  const randomInt = useRef(getRandomInt(33, 47));
  const randomInt2 = useRef(getRandomInt(77, 88));

  useEffect(() => {
    // console.log(window.matchMedia("(prefers-color-scheme: dark)"));
    if (percent === 95) words.current.splice(0, 1, "WELCOME");
    setTimeout(
      () => {
        if (percent < 100) {
          numbers.current.splice(0, 1, percent);
          setPercent(percent + 1);
        }
      },
      percent === randomInt.current || percent === randomInt2.current ? 540 : 40
    );
    animate(loadingBar.current, {
      x: `${percent}%`,
    });
    if (percent === 100) {
      animate(sequence);
      setTimeout(() => {
        fetch("/", { method: "POST" });
        completeAnimation();
      }, 1555);
    }
  }, [percent]);

  const loadingBar = useRef();
  const loadingBarBG = useRef();

  const dropDownDiv = useRef();

  const sequence = [
    [
      dropDownDiv.current,
      {
        // height: "calc(100vh - 2rem)",
        opacity: 1,
        scale: 1.1,
      },
      {
        // height: { duration: 1, delay: 0.25 },
        scale: { delay: 1.25, duration: 1.25 },
        at: 0.3,
      },
    ],
    [
      loadingBarBG.current,
      { y: "100vh", height: "100vh" },
      { height: { duration: 0 }, duration: 1, dealy: 0.25, at: 0.3 },
    ],
  ];

  return (
    <div className="loading-container">
      <div className="loading-bar-bg" ref={loadingBarBG}>
        <motion.div
          className="loading-bar"
          transition={{
            ease: [0.33, 1, 0.68, 1],
          }}
          ref={loadingBar}
        ></motion.div>
        <motion.div ref={dropDownDiv} className="dropdown-div"></motion.div>
      </div>
      <div className="fourcorners">
        <AnimatePresence>
          <LostInSpace randomInt2={randomInt2} />
          <CoverDiv randomInt2={randomInt2} />
          <FourCorners randomInt={randomInt} randomInt2={randomInt2} />
        </AnimatePresence>
      </div>
      <AnimatePresence mode="wait">
        {words.current.map((w) => (
          <motion.p
            key={w}
            initial={{ opacity: 0, y: 18 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ ease: "linear" }}
            className="loading-welcome"
          >
            {w}
          </motion.p>
        ))}
      </AnimatePresence>
      <p className="percent">
        <span>(</span>
        <AnimatePresence mode="popLayout">
          {numbers.current.map((n) => (
            <motion.span
              key={percent}
              initial={{ opacity: 0, y: 18 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ ease: "linear" }}
            >{`${percent < 10 ? 0 : ""}${percent}`}</motion.span>
          ))}
        </AnimatePresence>
        <span>)</span>
      </p>
    </div>
  );
}

function FourCorners({ randomInt, randomInt2 }) {
  const firstDuration = randomInt.current * 0.04 + 0.54;
  const secondDuration = 5.12 - firstDuration + 0.54;

  const variableTime = (5.12 - 0.54 - (100 - randomInt2.current) * 0.04) / 5.12;

  return (
    <motion.svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      style={{
        background: "#151515",
        zIndex: 2,
        boxShadow: "-12px 0px 10px #151515",
      }}
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, scale: 0.4, x: "-50%" }}
      animate={{
        opacity: 1,
        scale: 1,
        x: ["-112.5%", "-225%", "-225%", "0"],
      }}
      // exit={{opacity:0}}
      transition={{
        opacity: { duration: firstDuration },
        scale: { duration: firstDuration },
        x: {
          delay: firstDuration,
          duration: secondDuration,
          times: [0, 0.4, variableTime, 1],
        },
      }}
    >
      {/* top left */}
      <motion.rect
        x="0"
        y="0"
        width="5"
        height="20"
        fill="white"
        initial={{ x: 15, y: 15 }}
        animate={{ x: 0, y: 0 }}
        //exit={{}}
        transition={{
          x: { duration: firstDuration },
          y: { duration: firstDuration },
        }}
      />
      <motion.rect
        x="0"
        y="0"
        width="20"
        height="5"
        fill="white"
        initial={{ x: 15, y: 15 }}
        animate={{ x: 1, y: 0 }}
        //exit={{}}
        transition={{
          x: { duration: firstDuration },
          y: { duration: firstDuration },
        }}
      />
      {/* top right */}
      <motion.rect
        x="80"
        y="0"
        width="20"
        height="5"
        fill="white"
        initial={{ x: -15, y: 15 }}
        animate={{ x: 0, y: 0 }}
        //exit={{}}
        transition={{
          x: { duration: firstDuration },
          y: { duration: firstDuration },
        }}
      />
      <motion.rect
        x="95"
        y="0"
        width="5"
        height="20"
        fill="white"
        initial={{ x: -15, y: 15 }}
        animate={{ x: 0, y: 0 }}
        //exit={{}}
        transition={{
          x: { duration: firstDuration },
          y: { duration: firstDuration },
        }}
      />
      {/* bottom right */}
      <motion.rect
        x="80"
        y="95"
        width="20"
        height="5"
        fill="white"
        initial={{ x: -15, y: -15 }}
        animate={{ x: -1, y: 0 }}
        //exit={{}}
        transition={{
          x: { duration: firstDuration },
          y: { duration: firstDuration },
        }}
      />
      <motion.rect
        x="95"
        y="80"
        width="5"
        height="20"
        fill="white"
        initial={{ x: -15, y: -15 }}
        animate={{ x: 0, y: 0 }}
        //exit={{}}
        transition={{
          x: { duration: firstDuration },
          y: { duration: firstDuration },
        }}
      />
      {/* bottom left */}
      <motion.rect
        x="0"
        y="80"
        width="5"
        height="20"
        fill="white"
        initial={{ x: 15, y: -15 }}
        animate={{ x: 0, y: 0 }}
        //exit={{}}
        transition={{
          x: { duration: firstDuration },
          y: { duration: firstDuration },
        }}
      />
      <motion.rect
        x="0"
        y="95"
        width="20"
        height="5"
        fill="white"
        initial={{ x: 15, y: -15 }}
        animate={{ x: 1, y: 0 }}
        //exit={{}}
        transition={{
          x: { duration: firstDuration },
          y: { duration: firstDuration },
        }}
      />
    </motion.svg>
  );
}

function LostInSpace({ randomInt2 }) {
  const delay = 5.12 - (100 - randomInt2.current) * 0.04;
  return (
    <motion.svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="210"
      height="100"
      viewBox="0 0 210 100"
      fill="none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className="lostinspace"
    >
      <path
        d="M136.986 44.9431H161.398V48.2129H140.959V59.2403H158.963V62.5102H140.959V73.6658H161.398V76.9356H136.986V44.9431Z"
        fill="white"
      />
      <path
        d="M130.514 55.2656V51.9318C130.514 49.6878 128.977 48.2774 126.606 48.2774H117.059C114.688 48.2774 113.151 49.6878 113.151 51.9318V70.0116C113.151 72.2556 114.688 73.7302 117.059 73.7302H126.606C128.977 73.7302 130.514 72.2556 130.514 70.0116V67.3829H134.551V70.204C134.551 74.3072 131.604 76.9999 127.247 76.9999H116.29C111.934 76.9999 108.986 74.2431 108.986 70.204V51.8036C108.986 47.7004 111.934 45.0076 116.29 45.0076H127.247C131.604 45.0076 134.551 47.7004 134.551 51.8036V55.2656H130.514Z"
        fill="white"
      />
      <path
        d="M108 76.9998H103.498L100.104 68.7614H83.827L80.4328 76.9998H76L89.4371 44.9998H94.7012L108 76.9998ZM84.935 65.4934H98.9264L91.9307 49.0167L84.935 65.4934Z"
        fill="white"
      />
      <path
        d="M73.2977 44.9431H56.8311V76.1021V76.9996H60.8036V76.1021V64.3054H73.2977C77.5905 64.3054 80.4739 61.6126 80.4739 57.7017V51.611C80.4098 47.5718 77.5264 44.9431 73.2977 44.9431ZM76.4372 57.5735C76.4372 59.7533 74.9635 61.1637 72.5928 61.1637H60.8036V48.2129H72.5928C74.9635 48.2129 76.4372 49.6235 76.4372 51.8033V57.5735Z"
        fill="white"
      />
      <path
        d="M52.5388 66.1007V70.204C52.5388 74.3072 49.6555 76.9999 45.3626 76.9999H32.8045C28.5116 76.9999 25.6286 74.2431 25.6286 70.204V67.3829H29.6009V70.0116C29.6009 72.3197 31.0745 73.7302 33.4452 73.7302H44.6578C47.0285 73.7302 48.5021 72.3197 48.5021 70.0116V66.293C48.5021 64.0491 47.0285 62.5745 44.6578 62.5745H32.7406C28.4478 62.5745 25.5645 59.8177 25.5645 55.7786V51.8036C25.5645 47.7004 28.4478 45.0076 32.7406 45.0076H45.2985C49.5913 45.0076 52.4747 47.7004 52.4747 51.8036V54.6245H48.5021V51.9958C48.5021 49.7519 47.0285 48.3414 44.6578 48.3414H33.4452C31.0745 48.3414 29.6009 49.7519 29.6009 51.9958V55.7144C29.6009 57.9584 31.0745 59.3688 33.4452 59.3688H45.3626C49.6555 59.3047 52.5388 62.0616 52.5388 66.1007Z"
        fill="white"
      />
      <path
        d="M140.959 6.98801V32.3126H136.986V-0.000244141H140.703L157.297 25.2602V-0.000244141H161.27V32.3126H157.554L140.959 6.98801Z"
        fill="white"
      />
      <path
        d="M128.144 0.192139H132.116V32.505H128.144V0.192139Z"
        fill="white"
      />
      <path
        d="M80.7939 -0.000244141H107.896V3.3336H96.2992V32.3126H92.3269V3.3336H80.7939V-0.000244141Z"
        fill="white"
      />
      <path
        d="M78.488 21.3498V25.453C78.488 29.5562 75.6047 32.3131 71.3119 32.3131H61.0603C56.7675 32.3131 53.8844 29.5562 53.8844 25.453V22.6321H57.8567V25.2606C57.8567 27.5687 59.3304 28.9792 61.701 28.9792H70.607C72.9777 28.9792 74.4513 27.5687 74.4513 25.2606V21.5421C74.4513 19.2981 72.9777 17.8236 70.607 17.8236H60.9962C56.7034 17.8236 53.8203 15.0666 53.8203 10.9634V6.92442C53.8203 2.75708 56.7034 0.064209 60.9962 0.064209H71.2477C75.5405 0.064209 78.4239 2.75708 78.4239 6.92442V9.74533H74.4513V7.05262C74.4513 4.80866 72.9777 3.33403 70.607 3.33403H61.701C59.3304 3.33403 57.8567 4.74455 57.8567 7.05262V10.7712C57.8567 13.0152 59.3304 14.4896 61.701 14.4896H71.3119C75.6047 14.4896 78.488 17.2466 78.488 21.3498Z"
        fill="white"
      />
      <motion.g
        initial={{ rotate: 90 }}
        animate={{ rotate: 0 }}
        transition={{ delay: delay + 0.5, duration: 0.6 }}
        className="lostinspace-o"
      >
        {/* bottom of o */}
        <path
          d="M35.239 29.2358C29.2803 29.2358 24.2186 25.0682 22.745 19.49H19.4131C20.9508 26.8635 27.4222 32.4417 35.1749 32.4417C42.9276 32.4417 49.463 26.8635 50.9367 19.49H47.6048C46.2593 25.0682 41.2618 29.2358 35.239 29.2358Z"
          fill="white"
        />
        {/* middle bar in o */}
        <motion.line
          x1="35.2" // Starting x-coordinate
          y1="16.18845" // Starting y-coordinate
          x2="19" // Ending x-coordinate
          y2="16.18845" // Ending y-coordinate (same y to make it horizontal)
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: delay + 0.5, duration: 0.6 }}
          stroke="white" // Adding stroke color
          strokeWidth="2" // Adjust stroke width as needed
        />
        <motion.line
          x1="34.8" // Starting x-coordinate
          y1="16.18845" // Starting y-coordinate
          x2="51" // Ending x-coordinate
          y2="16.18845" // Ending y-coordinate (same y to make it horizontal)
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: delay + 0.5, duration: 0.6 }}
          stroke="white" // Adding stroke color
          strokeWidth="2" // Adjust stroke width as needed
        />

        {/* top of o */}
        <path
          d="M35.2393 3.20562C41.198 3.20562 46.2597 7.30903 47.7333 12.8872H51.0649C49.5271 5.51375 43.0561 -0.000244141 35.3034 -0.000244141C27.5507 -0.000244141 21.0794 5.51375 19.5416 12.8872H22.8732C24.2828 7.30903 29.2806 3.20562 35.2393 3.20562Z"
          fill="white"
        />
      </motion.g>
      <path
        d="M0 -0.000244141H3.97228V28.9788H21.6562V32.3126H0V-0.000244141Z"
        fill="white"
      />
    </motion.svg>
  );
}

function CoverDiv({ randomInt2 }) {
  const delay = 5.12 - 0.54 - (100 - randomInt2.current) * 0.04;
  const duration = (100 - randomInt2.current) * 0.04 + 0.54;
  return (
    <motion.div
      style={{
        height: "calc(100% + 2rem)",
        width: "100%",
        background: "#151515",
        position: "absolute",
        boxShadow: "-10px 0px 10px #151515",
      }}
      initial={{ x: 0 }}
      animate={{ x: "100%" }}
      transition={{ x: { delay: delay + 0.88, duration } }}
    />
  );
}

export default Loading;
