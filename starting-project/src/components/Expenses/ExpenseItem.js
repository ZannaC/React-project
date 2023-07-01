import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;

/////////// object destructuring /////////////////
// function ExpenseItem({ date, title, amount }) {
//   return (
//     <div className="expense-item">
//       <div>{date.toISOString()}</div>
//       <div className="expense-item__description">
//         <h2>{title}</h2>
//         <div className="expense-item__price">${amount}</div>
//       </div>
//     </div>
//   );
// }

/// Exercise1: Listening to Events ///
/*import React from 'react';

import './styles.css';
export default function App() {
    const clickHandler = () => {
    console.log("Stored!");
  };
    return <button onClick={clickHandler}>Bookmark</button>;
}*/

/// Exercise2: Working with "State" ///
/* import React, {useState} from 'react';
import './styles.css';

export default function App() { 

    const [price, setPrice] = React.useState('100');

  const clickHandler = () => {
    setPrice('75');
    console.log(price);
  };
    return (
        <div>
            <p>${price}</p>
            <button onClick={clickHandler}>Apply Discount</button>
        </div>
    );
} */
