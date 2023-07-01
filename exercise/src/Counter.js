import React, { useState } from "react";
import "./counterStyle.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  return (
    <div>
      <p id="counter">{counter}</p>

      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default Counter;
