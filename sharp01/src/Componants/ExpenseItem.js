import "./ExpenseItem.css"

function ExpenseItem(props) {
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.67;
  // const LocationOfExpenditure = "Mumbai";

  // return (
  //   <div className='expense-item'>
  //     <div>{expenseDate.toISOString()}</div>
  //     <div className='expense-item__description'>
  //       <h2>{expenseTitle}</h2>
  //       <div className='expense-item__price'>${expenseAmount}</div>
  //       {/* <h2>{LocationOfExpenditure}</h2> */}
  //       <div className='expense-item__price'>{LocationOfExpenditure}</div>
  //     </div>
  //   </div>
  // );
  return (
    <div className='expense-item'>
      <div>{props.date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <div className='expense-item__price'>{props.Location}</div>
      </div>
    </div>
  );


}
  
  export default ExpenseItem;
  