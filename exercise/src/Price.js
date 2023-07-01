import React, { useState, useEffect } from "react";
import "./priceStyle.css";

function Price() {
  const [price, setPrice] = useState("100");

  useEffect(() => {
    console.log(price);
  }, [price]);

  const clickHandler = () => {
    setPrice("75");
  };

  return (
    <div>
      <p>${price}</p>
      <button className="button" onClick={clickHandler}>
        Apply Discount 💰
      </button>
    </div>
  );
}

export default Price;
