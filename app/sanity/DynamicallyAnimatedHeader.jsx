import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

function DynamicallyAnimatedHeader({ header, inView = true }) {
  const containerRef = useRef(null);
  const [lines, setLines] = useState([]);

  const span2 = {
    animate: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: custom * 0.4 },
    }),
    initial: { opacity: 0, y: "100%" },
  };

  useEffect(() => {
    const detectLineBreaks = () => {
      if (!containerRef.current) return;

      function createSpan(word, marks) {
        const span = document.createElement("span");
        if (marks.includes("highlight")) span.classList.add("highlight");
        span.innerText = word;
        if (word === ",") span.style.marginLeft = "-.8rem";
        return span;
      }

      const spans = [];
      header[0]?.children?.forEach((child) => {
        const textArray = child.text.split(" ");
        textArray.forEach((word, index) => {
          if (word !== "") {
            if (word.includes("-")) {
              const hyphenatedWords = word.split("-");
              hyphenatedWords.forEach((part, i) => {
                if (i < hyphenatedWords.length - 1)
                  spans.push(createSpan(`${part}-`, child.marks));
                else spans.push(createSpan(part, child.marks));
              });
            } else spans.push(createSpan(word, child.marks));
          }
          // Add a space after the word unless it's the last word or ends with `-`
          if (index < textArray.length - 1 && !word.endsWith("-")) {
            const space = document.createElement("span");
            space.innerText = " ";
            spans.push(space);
          }
        });
      });

      // Render spans temporarily to measure their positions
      containerRef.current.innerHTML = ""; // Clear container
      spans.forEach((span) => containerRef.current.appendChild(span));

      // Group spans into lines based on their `offsetTop`
      const lines = [];
      let currentLine = [];

      spans.forEach((span, i) => {
        let currentTop = spans[i - 1]?.offsetTop;
        console.log(span, span.offsetTop, currentTop);
        if (span.offsetTop !== currentTop) {
          lines.push(currentLine);
          currentLine = [];
          currentTop = span.offsetTop;
        }
        currentLine.push(span);
      });
      if (currentLine.length > 0) lines.push(currentLine);
      //   containerRef.current.innerHTML = "";
      // Map lines to the desired JSX structure
      const lineElements = lines.map((line, idx) => {
        if (line.length !== 0)
          return (
            <div style={{ overflow: "hidden" }} key={idx}>
              <motion.span
                variants={span2}
                className="motion-span"
                custom={idx - 1}
              >
                {line.map((element, i) => {
                  if (element.nodeType === Node.TEXT_NODE) {
                    return (
                      <React.Fragment key={i}>
                        {element.textContent}
                      </React.Fragment>
                    );
                  } else {
                    const isLastInLine = i === line.length - 1;
                    const addSpace =
                      !element.innerText.endsWith("-") && !isLastInLine;
                    return (
                      <React.Fragment key={i}>
                        <span
                          className={element.className}
                          style={
                            element.innerText === ","
                              ? { marginLeft: "-.8rem" }
                              : null
                          }
                        >
                          {element.innerText}
                        </span>
                        {addSpace && " "}
                      </React.Fragment>
                    );
                  }
                })}
              </motion.span>
            </div>
          );
      });

      setLines(lineElements);
    };

    detectLineBreaks();

    const resizeObserver = new ResizeObserver(detectLineBreaks);
    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, [header]);

  return (
    <>
      <div
        ref={containerRef}
        style={{
          position: "absolute",
          top: 0,
          left: "1rem",
          right: "1rem",
          opacity: 0,
        }}
      ></div>
      {inView && (
        <motion.div
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.4 }}
        >
          {lines}
        </motion.div>
      )}
    </>
  );
}

export default DynamicallyAnimatedHeader;
