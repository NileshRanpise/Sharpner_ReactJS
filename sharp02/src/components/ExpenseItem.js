import React, { useState } from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  
  const [title, setTitle] = useState(props.title);
  // console.log('ExpenseItem evaluated by React');
  const [amount, setAmout] = useState(props.amount);

  const clickHandler = () => {
    
    setTitle("Updated!!!");
    setAmout(100);
    console.log(title);
  
    // const exp = document.getElementById('exp');
    // exp.remove();
    // console.log("Deleted Item !!!!");
  };

  return (
    
      <Card className="expense-item" >
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title} </h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}> Change Title </button> */}
        {/* <button onClick={clickHandler}> Delete </button> */}
        <button onClick={clickHandler}> Update </button>
      </Card>
    
  );
}

export default ExpenseItem;
