import React, { useState, useEffect } from "react";

function TypingEffect({ text }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0; // Local variable to track index
    const interval = setInterval(() => {
      setDisplayedText(
        text
          .split("")
          .map((char, i) => (i === index ? "_" : char)) // Replace character at current index with '_'
          .join("")
      );

      index = (index + 1) % (text.length + 1); // Loop back to 0 after reaching the end
    }, 500);

    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayedText}</span>;
}

export default TypingEffect;
