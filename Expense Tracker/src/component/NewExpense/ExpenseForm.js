import React, { useState } from 'react'
import './ExpenseForm.css'

export default function ExpenseForm(props) {

    const [showForm, setShowForm] = useState(false)
    const [newTitle, setNewTitle] = useState('');
    const [newAmount, setNewAmount] = useState('');
    const [newDate, setNewDate] = useState('');
    const titleChangeHandler = (event) => {
        setNewTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setNewAmount(event.target.value);
    }
    const dateChangeHandler = event => {
        setNewDate(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: newTitle,
            amount: newAmount,
            date: new Date(newDate)
        }
        props.onAddingNewData(expenseData);
        setNewTitle('')
        setNewAmount('')
        setNewDate('')
        setShowForm(!showForm)
    }
    const reset = () => {
        setNewTitle('')
        setNewAmount('')
        setNewDate('')  
        setShowForm(!showForm) 
    }

    const toggleForm = () => {
        setShowForm(!showForm);
    }


    return (
        <>
        {
            !showForm ? <div className="new-expense__actions" style={
                {
                    display:"flex",
                    justifyContent:"center",
                }
            }>
            <button onClick={toggleForm} >Add Expense</button>         
    </div>
    : <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={newTitle}/>               
                </div> 
                <div className="new-expense__controls">
                    <label>Amount</label >
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={newAmount}/>               
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2020-12-31" onChange={dateChangeHandler} value={newDate}/>               
                </div>      
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>   
                <button onClick={reset}>Cancel</button>         
            </div> 
        </form>

        }
         
        </>
    )
}
