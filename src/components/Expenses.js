import React,{useState} from 'react'
import './Expenses.css'
import Card from './Card';
import ExpenseFilter from './expenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
const [filteredYear, setFilteredYear]= useState("2022")

const filterChangeHandler=(filteredYear)=>{
      setFilteredYear(filteredYear)
}

let filteredData = props.items.filter((expense)=>{
 return expense.date.getFullYear().toString()=== filteredYear
})

    return (
      <li>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear}  onChangeFilter={filterChangeHandler}/>
        <ExpensesChart expenses={filteredData}/>
        <ExpensesList  items={filteredData}/>
      </Card>
      </li>
    );
}

export default Expenses
