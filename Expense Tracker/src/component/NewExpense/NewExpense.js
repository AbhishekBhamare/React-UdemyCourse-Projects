import React from 'react';
import './NewExpense.css';
import ExpenseForm
 from './ExpenseForm';
export default function NewExpense(props) {

    const saveExpenseHandler = (newData) => {
        const expenseData = {
            ...newData,
            id: Math.random().toString()
        };
        props.getData(expenseData);
    };
    return (
        <div className="new-expense">
            <ExpenseForm onAddingNewData={saveExpenseHandler}/>
        </div>
    )
}
