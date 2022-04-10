import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  
  const clickHandler = () => {
    const exp = document.getElementById('exp');
    exp.remove();
    console.log("Deleted Item !!!!");
  };

  return (
    
      <Card className="expense-item" >
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2 id="exp">{props.title} </h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}> Change Title </button> */}
        <button onClick={clickHandler}> Delete </button>
      </Card>
    
  );
}

export default ExpenseItem;
