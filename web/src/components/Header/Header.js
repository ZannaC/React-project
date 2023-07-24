import React, { useState } from "react";
import keyConceptsImage from "../../assets/images/key-concepts.png";
import "../../index.css";

const Header = (props) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const imgBack = isHighlighted ? "cyan" : "rgba(234, 78, 240, 0.4)";

  const toggleStylingHandler = () =>
    setIsHighlighted((wasHighlighted) => !wasHighlighted);

  return (
    <header>
      <img
        onClick={toggleStylingHandler}
        style={{ backgroundColor: imgBack }}
        src={keyConceptsImage}
        alt="Medal badge with a star"
      />
      <h1>Key React Concepts</h1>
      <p>Selected key React concepts you should know about</p>
    </header>
  );
};
export default Header;
