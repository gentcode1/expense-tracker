import React , {useState}from 'react'
import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';

 const DUMMY_EXPENSES = [
   { title: "shopping", amount: 245, date: new Date(2021, 1, 29) },

   { title: "Bundles", amount: 234, date: new Date(2021, 5, 10) },

   { title: "Book shopping", amount: 877, date: new Date(2021, 10, 20) },
   { title: "travelling", amount: 546, date: new Date(2021, 10, 26) },
 ];



function App() {
  const [expenses, setExpenses] =useState(DUMMY_EXPENSES)
 
  const addExpense=(expense)=>{
      setExpenses((prevexpenses)=>
      {  return [expense, ...prevexpenses]}
        )
  }
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpense}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
