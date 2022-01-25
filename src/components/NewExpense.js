import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {
    const handleExpenseData=(enteredExpenseData)=>{
      const expenseData={
          ...enteredExpenseData,
          id: Math.random().toString()
      }
     
      props.onAddExpense(expenseData)
    }
    return (
        <div className="new-expense ">
          <ExpenseForm  onSaveExpenseData={handleExpenseData}/>  
        </div>
    )
}

export default NewExpense
