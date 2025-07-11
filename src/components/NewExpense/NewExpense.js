import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

  const [isEditing,setIsEditing]=useState(false);

  const startEditingHandler  =()=>{
   setIsEditing(true)
  }

  const stopEditingHandler = () =>{
    setIsEditing(false)
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false)
  };

  

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onCancel = {stopEditingHandler} onSaveExpenseData = {saveExpenseDataHandler}></ExpenseForm>}
    </div>
  );
};

export default NewExpense;
