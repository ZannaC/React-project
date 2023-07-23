import React, { useState } from "react";
import "../Click/ClickOnStyle.css";

const ClickOn = (props) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const textColor = isHighlighted ? "cyan" : "white"; // computed value, derived from state

  const toggleStylingHandler = () =>
    setIsHighlighted((wasHighlighted) => !wasHighlighted); // deriving new state based on old state

  return (
    <div>
      <p style={{ color: textColor }}> Style me!</p>
      <button onClick={toggleStylingHandler}>Toggle style</button>
    </div>
  );
};

export default ClickOn;
