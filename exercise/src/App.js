import React, { useState } from "react";
import "./index.css";
import Price from "./Price";
import Counter from "./Counter";

function App() {
  const [inputMessage, setInputMessage] = useState(" ");
  const [price, setPrice] = useState("100");
  const [counter, setCounter] = useState(0);

  const changeMessage = (event) => {
    setInputMessage(event.target.value);
  };
  const applyDiscount = () => {
    setPrice("75");
  };
  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <form>
      <div>
        <label>Your message</label>
        <input onChange={changeMessage} type="text" />
        <p>
          {inputMessage.trim().length < 3
            ? "Invalid message🙄"
            : "Valid message😉👍"}
        </p>
      </div>

      <div>
        <Price price={price} applyDiscount={applyDiscount} />
      </div>

      <div>
        <Counter counter={counter} incrementCounter={incrementCounter} />
      </div>
    </form>
  );
}

export default App;
