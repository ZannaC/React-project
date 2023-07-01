import React, { useState } from "react";
import "./index.css";

function App() {
  const [inputMessage, setInputMessage] = useState(" ");
  const changeMessage = (event) => {
    setInputMessage(event.target.value);
  };
  return (
    <form>
      <label>Your message</label>
      <input onChange={changeMessage} type="text" />
      <p>
        {inputMessage.trim().length < 3
          ? "Invalid message🙄"
          : "Valid message😉👍"}
      </p>
    </form>
  );
}

export default App;
