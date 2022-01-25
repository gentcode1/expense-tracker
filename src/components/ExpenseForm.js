import React, {useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const[enteredTitle,setEnteredTitle]= useState("");
    const [enteredAmount, setEnteredAmount]= useState("");
    const [enteredDate, setEnteredDate]=useState("")



const TitleHandler=(e)=>{
 setEnteredTitle(e.target.value)
}

const AmountHandler=(e)=>{
    setEnteredAmount(e.target.value)
}

const DateHandler=(e)=>{
    setEnteredDate(e.target.value)
}

const handleSubmit=(e)=>{
    e.preventDefault();

    const expenseData={
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),

    }
    props.onSaveExpenseData(expenseData)
    setEnteredTitle("")
    setEnteredAmount("")
    setEnteredDate("")
}
    return (
      <form onSubmit={handleSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>title</label>
            <input type="text" value={enteredTitle} onChange={TitleHandler}/>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={AmountHandler}/>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2023-12-31" value={enteredDate} onChange={DateHandler}/>
          </div>
          <div className="new-expense__actions">
              <button type="submit">Add Item</button>
          </div>
        </div>
      </form>
    );
}

export default ExpenseForm
